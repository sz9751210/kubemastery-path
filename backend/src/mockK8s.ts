import { Router } from 'express';
import { scenarios, ScenarioState } from './scenarios';

const router = Router();

// Simulated State (Mutable)
let state: ScenarioState = { ...scenarios['default'] };

// SCENARIO MANAGEMENT
router.post('/api/debug/scenario', (req: any, res: any) => {
    const { lessonId } = req.body;
    if (lessonId && scenarios[lessonId]) {
        state = { ...scenarios[lessonId] };
        console.log(`[MockK8s] Switched to scenario for Lesson ${lessonId}`);
        res.json({ message: `Switched to scenario ${lessonId}`, stateSummary: Object.keys(state) });
    } else {
        // Reset to default if not found
        state = { ...scenarios['default'] };
        console.log(`[MockK8s] Reset to default scenario`);
        res.json({ message: "Reset to default scenario" });
    }
});

// Logger for debugging
router.use((req: any, res: any, next: any) => {
    console.log(`[MockK8s] ${req.method} ${req.url}`);
    next();
});

// DISCOVERY
router.get('/apis', (req, res) => {
    res.json({
        kind: 'APIGroupList',
        apiVersion: 'v1',
        groups: [
            {
                name: 'apps',
                versions: [{ groupVersion: 'apps/v1', version: 'v1' }],
                preferredVersion: { groupVersion: 'apps/v1', version: 'v1' }
            }
        ]
    });
});

router.get('/apis/apps/v1', (req, res) => {
    res.json({
        kind: 'APIResourceList',
        groupVersion: 'apps/v1',
        resources: [
            { name: 'deployments', namespaced: true, kind: 'Deployment', verbs: ['get', 'list'], singularName: 'deployment' }
        ]
    });
});

router.get('/api', (req, res) => {
    res.json({
        kind: 'APIVersions',
        versions: ['v1'],
        serverAddressByClientCIDRs: [{ clientCIDR: '0.0.0.0/0', serverAddress: '127.0.0.1:8080' }]
    });
});

router.get('/api/v1', (req, res) => {
    res.json({
        kind: 'APIResourceList',
        groupVersion: 'v1',
        resources: [
            { name: 'pods', namespaced: true, kind: 'Pod', verbs: ['get', 'list', 'watch'], singularName: 'pod' },
            { name: 'nodes', namespaced: false, kind: 'Node', verbs: ['get', 'list'], singularName: 'node' },
            { name: 'namespaces', namespaced: false, kind: 'Namespace', verbs: ['get', 'list'], singularName: 'namespace' },
            { name: 'configmaps', namespaced: true, kind: 'ConfigMap', verbs: ['get', 'list'], singularName: 'configmap' },
            { name: 'secrets', namespaced: true, kind: 'Secret', verbs: ['get', 'list'], singularName: 'secret' }
        ]
    });
});

// Resources
router.get('/api/v1/pods', (req, res) => {
    res.json({ kind: 'PodList', apiVersion: 'v1', metadata: { selfLink: '/api/v1/pods' }, items: state.pods });
});

router.get('/api/v1/namespaces/:ns/pods', (req, res) => {
    const ns = req.params.ns;
    res.json({
        kind: 'PodList',
        apiVersion: 'v1',
        metadata: { selfLink: `/api/v1/namespaces/${ns}/pods` },
        items: state.pods.filter((p: any) => p.metadata.namespace === ns)
    });
});

router.get('/api/v1/namespaces/:ns/pods/:name', (req, res) => {
    const { ns, name } = req.params;
    const pod = state.pods.find((p: any) => p.metadata.namespace === ns && p.metadata.name === name);
    if (pod) {
        res.json({ kind: 'Pod', apiVersion: 'v1', ...pod });
    } else {
        res.status(404).json({ kind: 'Status', status: 'Failure', message: `pods "${name}" not found` });
    }
});

// SUBRESOURCES (exec, logs, etc)
router.all([
    '/api/v1/namespaces/:ns/pods/:name/exec',
    '/api/v1/namespaces/:ns/pods/:name/log'
], (req, res) => {
    const { name } = req.params;
    const command = req.query.command as string;

    if (name.includes('kube-apiserver') && command?.includes('kube-apiserver -h')) {
        res.send(`
Usage:
  kube-apiserver [flags]

Generic flags:
      --allow-privileged                                                    If true, allow privileged containers.
      --enable-admission-plugins strings                                    admission plugins that should be enabled in addition to default ones. (AlwaysAdmit, AlwaysDeny, AlwaysPullImages, DefaultStorageClass, DefaultTolerationSeconds, LimitRanger, MutatingAdmissionWebhook, NamespaceAutoProvision, NamespaceExists, NamespaceLifecycle, NodeRestriction, OwnerReferencesPermissionEnforcement, PersistentVolumeClaimResize, PodNodeSelector, PodPreset, PodSecurityPolicy, PodTolerationRestriction, Priority, ResourceQuota, RuntimeClass, ServiceAccount, StorageObjectInUseProtection, TaintNodesByCondition, ValidatingAdmissionWebhook)
      --encrypt-asset-config-file string                                    The file containing the configuration for encrypting the assets in etcd.
...
        `);
    } else {
        res.send(`Simulated output for ${req.method} on ${name} in ${req.params.ns}`);
    }
});

router.get('/api/v1/nodes', (req, res) => {
    res.json({ kind: 'NodeList', apiVersion: 'v1', items: state.nodes });
});

router.get('/api/v1/namespaces', (req, res) => {
    res.json({
        kind: 'NamespaceList',
        items: [
            { metadata: { name: 'default' } },
            { metadata: { name: 'kube-system' } }
        ]
    });
});

export default router;
