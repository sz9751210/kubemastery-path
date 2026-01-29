import { Router } from 'express';
import { scenarios, ScenarioState } from './scenarios';

const router = Router();

// ==========================================
// SCENARIO STATE MANAGEMENT (MULTI-ROOM)
// ==========================================
interface RoomState extends ScenarioState {
    scores: { red: number; blue: number };
    lastChaosTime: number;
}

const rooms = new Map<string, RoomState>();

// Helper: Get or Create Room State
export const getRoomState = (roomId: string = 'default'): RoomState => {
    if (!rooms.has(roomId)) {
        console.log(`[MockK8s] Creating new room: ${roomId}`);
        const initialState = JSON.parse(JSON.stringify(scenarios['default']));
        rooms.set(roomId, {
            ...initialState,
            scores: { red: 0, blue: 0 },
            lastChaosTime: 0
        });
    }
    return rooms.get(roomId)!;
};

// Helper: Reset Room
export const resetRoomState = (roomId: string, scenarioId: string = 'default') => {
    const template = scenarios[scenarioId] || scenarios['default'];
    rooms.set(roomId, {
        ...JSON.parse(JSON.stringify(template)),
        scores: { red: 0, blue: 0 },
        lastChaosTime: 0
    });
    console.log(`[MockK8s] Reset room ${roomId} to scenario ${scenarioId}`);
    return rooms.get(roomId)!;
};

// Middleware to resolve Room ID from Header
const getRoomId = (req: any) => (req.headers['x-room-id'] as string) || 'default';

// Logger for debugging
router.use((req: any, res: any, next: any) => {
    const roomId = getRoomId(req);
    // Don't log k8s discovery spam
    if (!req.url.includes('/api/v1') && !req.url.includes('/apis')) {
        console.log(`[MockK8s][${roomId}] ${req.method} ${req.url}`);
    }
    next();
});


// ==========================================
// BATTLE ARENA API
// ==========================================

// Get Arena Stats (Scores + Health)
router.get('/api/arena/stats', (req, res) => {
    const roomId = getRoomId(req);
    const state = getRoomState(roomId);

    // Auto-scorer simulation
    const healthyPods = state.pods.filter(p => p.status.phase === 'Running').length;

    if (healthyPods >= 3) {
        state.scores.blue += 10;
    } else {
        state.scores.red += 5;
    }

    res.json({
        scores: state.scores,
        podCount: state.pods.length,
        healthyPods,
        lastChaos: state.lastChaosTime
    });
});

// Trigger Chaos (Red Team Action)
router.post('/api/arena/chaos', (req, res) => {
    const roomId = getRoomId(req);
    const state = getRoomState(roomId);
    const { type } = req.body;

    let message = '';
    if (type === 'kill-pod') {
        if (state.pods.length > 0) {
            const randomIndex = Math.floor(Math.random() * state.pods.length);
            const victim = state.pods[randomIndex];
            state.pods.splice(randomIndex, 1);
            message = `Chaos Monkey killed pod: ${victim.metadata.name}`;
            state.scores.red += 50;
        } else {
            message = 'No pods left to kill!';
        }
    } else if (type === 'scale-down') {
        state.deployments.forEach(d => {
            if (d.spec?.replicas) d.spec.replicas = Math.max(0, d.spec.replicas - 1);
        });
        message = 'Scaled down all deployments!';
        state.scores.red += 30;
    } else {
        message = 'Chaos deployed!';
    }

    state.lastChaosTime = Date.now();
    res.json({ success: true, message, scores: state.scores });
});


// ==========================================
// KUBERNETES API HANDLERS
// ==========================================

router.get('/api/v1', (req, res) => {
    res.json({
        kind: "APIResourceList",
        groupVersion: "v1",
        resources: [
            { name: "pods", namespaced: true, kind: "Pod", verbs: ["get", "list", "watch", "create", "delete", "update"] },
            { name: "services", namespaced: true, kind: "Service", verbs: ["get", "list", "watch", "create", "delete"] },
            { name: "nodes", namespaced: false, kind: "Node", verbs: ["get", "list"] },
            { name: 'namespaces', namespaced: false, kind: 'Namespace', verbs: ['get', 'list'] }
        ]
    });
});

router.get('/apis/apps/v1', (req, res) => {
    res.json({
        kind: "APIResourceList",
        groupVersion: "apps/v1",
        resources: [
            { name: "deployments", namespaced: true, kind: "Deployment", verbs: ["get", "list", "create", "delete", "update", "patch"] }
        ]
    });
});

// Resources
router.get('/api/v1/pods', (req, res) => {
    const state = getRoomState(getRoomId(req));
    res.json({ kind: 'PodList', apiVersion: 'v1', metadata: { selfLink: '/api/v1/pods' }, items: state.pods });
});

router.get('/api/v1/namespaces/:ns/pods', (req, res) => {
    const state = getRoomState(getRoomId(req));
    const ns = req.params.ns;
    res.json({
        kind: 'PodList',
        apiVersion: 'v1',
        metadata: { selfLink: `/api/v1/namespaces/${ns}/pods` },
        items: state.pods.filter((p: any) => p.metadata.namespace === ns)
    });
});

router.post('/api/v1/namespaces/:ns/pods', (req, res) => {
    const state = getRoomState(getRoomId(req));
    const newPod = {
        ...req.body,
        status: { phase: "Running", hostIP: "10.0.0.4", podIP: "10.244.0.12" }
    };
    state.pods.push(newPod);
    res.status(201).json(newPod);
});

router.delete('/api/v1/namespaces/:ns/pods/:name', (req, res) => {
    const state = getRoomState(getRoomId(req));
    state.pods = state.pods.filter(p => p.metadata.name !== req.params.name);
    res.json({ kind: "Status", status: "Success", message: "Pod deleted" });
});

router.get('/apis/apps/v1/namespaces/:ns/deployments', (req, res) => {
    const state = getRoomState(getRoomId(req));
    res.json({
        kind: "DeploymentList",
        apiVersion: "apps/v1",
        items: state.deployments
    });
});

router.get('/api/v1/namespaces/:ns/services', (req, res) => {
    const state = getRoomState(getRoomId(req));
    res.json({
        kind: "ServiceList",
        apiVersion: "v1",
        items: state.services
    });
});

router.get('/api/v1/nodes', (req, res) => {
    const state = getRoomState(getRoomId(req));
    res.json({ kind: 'NodeList', apiVersion: 'v1', items: state.nodes });
});

router.get('/api/v1/nodes/:name', (req, res) => {
    const state = getRoomState(getRoomId(req));
    const node = state.nodes.find(n => n.metadata.name === req.params.name);
    if (node) res.json(node);
    else res.status(404).json({ message: "Node not found" });
});

router.patch('/api/v1/nodes/:name', (req, res) => {
    const state = getRoomState(getRoomId(req));
    const node = state.nodes.find(n => n.metadata.name === req.params.name);
    if (node) {
        // Simple merge for mock
        Object.assign(node, req.body);
        // Special handling for taints if passed via generic merge? 
        // Kubectl patch strategy is complex, but for JSON patch or merge patch:
        // If req.body has spec, we merge it.
        if (req.body.spec) {
            node.spec = { ...node.spec, ...req.body.spec };
        }
        res.json(node);
    } else {
        res.status(404).json({ message: "Node not found" });
    }
});


// Pod Patching (for edit)
router.patch('/api/v1/namespaces/:ns/pods/:name', (req, res) => {
    const state = getRoomState(getRoomId(req));
    const pod = state.pods.find(p => p.metadata.name === req.params.name);
    if (pod) {
        // Allow updating spec (which k8s usually forbids, but creating scenarios requires flexibility)
        // Usually nodeName cannot be changed after schedule. But for a lab "assign manually",
        // maybe they create it with nodeName OR they edit it?
        // Let's assume broad permission.
        if (req.body.spec) {
            pod.spec = { ...pod.spec, ...req.body.spec };
        }
        res.json(pod);
    } else {
        res.status(404).json({ message: "Pod not found" });
    }
});


// DEBUG & SCENARIO
router.post('/api/debug/scenario', (req: any, res: any) => {
    const { lessonId } = req.body;
    const roomId = getRoomId(req);

    if (lessonId && scenarios[lessonId]) {
        resetRoomState(roomId, lessonId);
        res.json({ message: `Switched to scenario ${lessonId}`, roomId });
    } else {
        resetRoomState(roomId, 'default');
        res.json({ message: "Reset to default scenario", roomId });
    }
});

export default router;
