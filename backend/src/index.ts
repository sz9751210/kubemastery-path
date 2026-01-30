import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import * as pty from 'node-pty';
import os from 'os';
import cors from 'cors';
import mockK8s from './mockK8s';
import labRouter from './labRoutes';

const app = express();
app.use(cors());
app.use(express.json());
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

    // Setup Script Content
    let setupScriptContent = '';

    if (mode === 'mock') {
        setupScriptContent = `
export KUBEMASTERY_MOCK=true
echo "Welcome to KubeMastery (Mock Mode) - Room: ${roomId}"
        `;
    } else {
        // Real Mode
        setupScriptContent = `
export KUBEMASTERY_REAL=true
echo "Welcome to KubeMastery (Real K3s Cluster) - Room: ${roomId}"
echo "WARNING: You are root on a real control plane!"

# Aliases
alias k="kubectl"
# Try to enable completion for k
if command -v kubectl >/dev/null 2>&1; then
    source <(kubectl completion bash)
    complete -o default -F __start_kubectl k
fi

function node-shell() {
    NODE_NAME="\$1"
    if [ -z "\$NODE_NAME" ]; then
        echo "Usage: node-shell <node-name>"
        echo "Available nodes:"
        kubectl get nodes --no-headers -o custom-columns=":metadata.name"
        return 1
    fi

    echo "Spawning privileged shell on node \$NODE_NAME..."
    kubectl run node-shell-${Math.floor(Math.random() * 10000)} --rm -it --restart=Never \
      --image=alpine --privileged \
      --overrides='{"spec": {"nodeName": "'"\$NODE_NAME"'", "hostPID": true, "hostNetwork": true, "containers": [{"name": "shell", "image": "alpine", "stdin": true, "tty": true, "command": ["nsenter", "-t", "1", "-m", "-u", "-i", "-n", "/bin/sh"], "securityContext": {"privileged": true}}]}}'
}

function crictl() {
    NODE=\$(kubectl get nodes -o jsonpath='{.items[0].metadata.name}')
    kubectl run crictl-\${RANDOM} --rm -i --quiet --restart=Never \
      --image=alpine --privileged \
      --overrides='{"spec": {"nodeName": "'"\$NODE"'", "hostPID": true, "containers": [{"name": "sol", "image": "alpine", "command": ["nsenter", "-t", "1", "-m", "-u", "-i", "-n", "--", "crictl"], "stdin": true, "tty": true, "securityContext": {"privileged": true}}]}}' \
      -- "\$@" 2>&1 | grep -v "pod " | grep -v "deleted"
}
        `;
    }

    // Pass Room ID env
    setupScriptContent += `\nexport KB_ROOM_ID="${roomId}"\n`;

    // Write setup script to a unique temp file
    const setupScriptPath = `/tmp/setup-${Date.now()}-${Math.floor(Math.random() * 1000)}.sh`;
    const fs = require('fs');
    try {
        fs.writeFileSync(setupScriptPath, setupScriptContent);
    } catch (e) {
        console.error("Failed to write setup script:", e);
    }

    const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
    // Use --rcfile to load our setup script instead of standard .bashrc
    // Pass -i to ensure it's interactive
    const args = os.platform() === 'win32' ? [] : ['--rcfile', setupScriptPath, '-i'];

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
        console.log(`Connection closed for Room: ${roomId} `);
        ptyProcess.kill();
    });
});
