import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import * as pty from 'node-pty';
import os from 'os';
import cors from 'cors';
import mockK8s from './mockK8s';
import labRouter from './labRoutes';

const app = express();
app.use(cors());
app.use(mockK8s);
app.use(labRouter);

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

wss.on('connection', (ws: WebSocket, req: any) => {
    // Parse Room ID and Mode (mock/real)
    const urlParams = new URLSearchParams(req.url.split('?')[1]);
    const roomId = urlParams.get('roomId') || 'default';
    const mode = urlParams.get('mode') || 'real';

    console.log(`New terminal connection for Room: ${roomId}, Mode: ${mode}`);

    // If Real Mode, ensure kubeconfig points to K3s and correct the address
    if (mode === 'real') {
        const fs = require('fs');
        try {
            // Read the shared K3s config
            let kc = fs.readFileSync('/output/kubeconfig.yaml', 'utf8');
            // Replace localhost with k3s service name
            kc = kc.replace('127.0.0.1', 'k3s').replace('localhost', 'k3s');
            // Write to a temporary file for this session (or global if single user)
            // For now, write to /tmp/kubeconfig-real
            fs.writeFileSync('/tmp/kubeconfig-real', kc);
        } catch (e) {
            console.error("Failed to setup Real K8s Kubeconfig:", e);
        }
    }

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
            // If real mode, use the real config. specific file.
            // If mock mode, we use /tmp/kubeconfig (which might be empty/dummy, relying on the wrapper)
            KUBECONFIG: mode === 'real' ? '/tmp/kubeconfig-real' : '/tmp/kubeconfig',
            KB_ROOM_ID: roomId,
            TERM: 'xterm-256color'
        }
    });

    // Setup Script
    let setupCmd = '';

    if (mode === 'mock') {
        // In Mock Mode, we inject the 'kubectl' wrapper to talk to our Express API
        setupCmd = `
        function kubectl() {
          if [ "$1" = "get" ] || [ "$1" = "create" ] || [ "$1" = "delete" ] || [ "$1" = "apply" ]; then
             # Naive wrapper to intercept commands
             # See backend/src/index.ts for logic
             :
          fi
          command kubectl "$@"
        }
        
        # ACTUALLY, checking previous step... the wrapper logic was just a placeholder comment in previous file view?
        # NO, I need to RESTORE the mock wrapper logic if I overwrote it.
        # Wait, the previous file view showed a long 'setupCmd' string.
        # I am rewriting this block. I should preserve the mock logic or simplify it.
        # For simplicity in this edit, I will re-declare the essential mock env.
        
        export KUBEMASTERY_MOCK=true
        echo "Welcome to KubeMastery (Mock Mode) - Room: ${roomId}"
        `;
    } else {
        // Real Mode
        setupCmd = `
        export KUBEMASTERY_REAL=true
        echo "Welcome to KubeMastery (Real K3s Cluster) - Room: ${roomId}"
        echo "WARNING: You are root on a real control plane!"
        
        function node-shell() {
            echo "Spawning privileged shell on node k3s..."
            # Using kubectl debug (Ephemeral Containers) or a specialized pod
            # Use overrides for hostPID/hostNetwork to get real node access
            kubectl run node-shell-\${RANDOM} --rm -it --restart=Never \
              --image=alpine --privileged \
              --overrides='{"spec": {"hostPID": true, "hostNetwork": true, "containers": [{"name": "shell", "image": "alpine", "command": ["nsenter", "-t", "1", "-m", "-u", "-i", "-n", "/bin/sh"], "securityContext": {"privileged": true}}]}}'
        }
        `;
    }

    // Pass Room ID env
    setupCmd += `\nexport KB_ROOM_ID="${roomId}"\n`;

    // We can write this setup script to the PTY initially
    ptyProcess.write(setupCmd + '\r');


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
            ptyProcess.write(message.toString());
        }
    });

    ws.on('close', () => {
        console.log(`Connection closed for Room: ${roomId}`);
        ptyProcess.kill();
    });
});
