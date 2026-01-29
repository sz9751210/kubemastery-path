import { Router } from 'express';
import { labs, Lab } from './labs';
import { getRoomState } from './mockK8s';

const router = Router();

// Middleware to resolve Room ID from Header
const getRoomId = (req: any) => (req.headers['x-room-id'] as string) || 'default';

// List Labs
router.get('/api/labs', (req, res) => {
    // Return summary list
    const list = Object.values(labs).map(l => ({
        id: l.id,
        title: l.title,
        description: l.description,
        taskCount: l.tasks.length
    }));
    res.json(list);
});

// Get Lab Details
router.get('/api/labs/:id', (req, res) => {
    const lab = labs[req.params.id];
    if (!lab) return res.status(404).json({ error: 'Lab not found' });
    res.json(lab);
});

// Verify Lab Tasks via Room State
router.post('/api/labs/:id/verify', (req, res) => {
    const labId = req.params.id;
    const roomId = getRoomId(req);

    const lab = labs[labId];
    if (!lab) return res.status(404).json({ error: 'Lab not found' });

    const state = getRoomState(roomId);

    const results = lab.tasks.map(task => {
        const check = task.verify(state);
        return {
            taskId: task.id,
            completed: check.passed,
            message: check.message
        };
    });

    const allPassed = results.every(r => r.completed);

    res.json({
        labId,
        allPassed,
        results
    });
});

export default router;
