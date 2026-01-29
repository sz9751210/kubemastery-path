import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import * as pty from 'node-pty';
import os from 'os';
import cors from 'cors';
import mockK8s from './mockK8s';

const app = express();
app.use(cors());
app.use(mockK8s); // Mount Kubernetes Mock API

const PORT = 4000;
const K8S_PORT = 8080;

// Listen on 4000 for WS and 8080 for Kubectl
app.listen(K8S_PORT, () => {
    console.log(`Mock Kubernetes API listening on port ${K8S_PORT}`);
});

const server = app.listen(PORT, () => {
    console.log(`Backend server (WS) listening on port ${PORT}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws: WebSocket) => {
    console.log('New terminal connection');

    const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
    const args = os.platform() === 'win32' ? [] : ['--login'];

    // Spawn a pty process
    const ptyProcess = pty.spawn(shell, args, {
        name: 'xterm-color',
        cols: 80,
        rows: 30,
        cwd: process.env.HOME,
        env: {
            ...process.env,
            KUBECONFIG: '/tmp/kubeconfig' // We'll create this if needed, but 8080 is default fallback
        }
    });

    // Provide a default kubeconfig to avoid connection errors if they use a different port
    // But since we listen on 8080, kubectl's fallback is fine.
    // Let's just make sure the environment is clean.

    // Data from pty -> WebSocket
    ptyProcess.onData((data) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(data);
        }
    });

    // Data from WebSocket -> pty
    ws.on('message', (message) => {
        try {
            const payload = JSON.parse(message.toString());
            if (payload.type === 'data') {
                ptyProcess.write(payload.data);
            } else if (payload.type === 'resize') {
                ptyProcess.resize(payload.cols, payload.rows);
                console.log(`Terminal resized to ${payload.cols}x${payload.rows}`);
            }
        } catch (e) {
            // Fallback for raw strings if needed, but we'll update frontend
            ptyProcess.write(message.toString());
        }
    });

    ws.on('close', () => {
        console.log('Terminal connection closed');
        ptyProcess.kill();
    });
});
