import { Router } from 'express';
import { labs, Lab } from './labs';
import { getRoomState } from './mockK8s';
import { exec } from 'child_process';
import fs from 'fs';

const router = Router();

// Middleware to resolve Room ID from Header
const getRoomId = (req: any) => (req.headers['x-room-id'] as string) || 'default';

// Add Generic Verification Endpoint
router.post('/api/verify', (req, res) => {
    const { script, mode } = req.body;

    // Determine Kubeconfig path based on mode
    const kubeconfig = mode === 'real' ? '/tmp/kubeconfig-real' : '/tmp/kubeconfig';

    exec(script, {
        env: { ...process.env, KUBECONFIG: kubeconfig },
        timeout: 10000 // 10s timeout
    }, (error, stdout, stderr) => {
        // We consider it a success if exit code is 0 (no error)
        // If grep finds nothing, it returns 1 (error).
        // Verification scripts typically rely on return code 0 for success.

        res.json({
            success: !error,
            output: stdout + (stderr ? '\nError: ' + stderr : ''),
            message: error ? 'Verification Failed' : 'Verification Passed'
        });
    });
});

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
