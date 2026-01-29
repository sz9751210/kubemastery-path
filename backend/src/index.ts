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
    // Parse Room ID from URL (e.g., ws://localhost:4000?roomId=BATTLE-101)
    const urlParams = new URLSearchParams(req.url.split('?')[1]);
    const roomId = urlParams.get('roomId') || 'default';

    console.log(`New terminal connection for Room: ${roomId}`);

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
            KUBECONFIG: '/tmp/kubeconfig',
            KB_ROOM_ID: roomId, // Pass Room ID to the shell environment
            TERM: 'xterm-256color'
        }
    });

    // Setup custom kubectl alias for this session
    // We inject a function that adds the X-Room-ID header
    const setupCmd = `
    function kubectl() {
      if [ "$1" = "get" ] || [ "$1" = "create" ] || [ "$1" = "delete" ] || [ "$1" = "apply" ]; then
         # Naive wrapper to intercept commands (For Mock API)
         # In a real impl, we might use a custom kubeconfig with a proxy.
         # For this Mock backend, we rely on the backend seeing the header.
         # But wait, 'kubectl' binary won't send X-Room-ID unless we proxy it.
         
         # ALTERNATIVE: We just rely on the API URL.
         # Since kubectl calls localhost:8080, and we control the backend.
         # But the backend needs to know WHICH room this request came from.
         # Standard kubectl doesn't support custom headers easily without a proxy.
         
         # TRICK: We will alias kubectl to 'curl' for simple gets or use a wrapper?
         # NO. The simplest way for this specific Mock Engine is to set KUBEMASTERY_API_URL 
         # and have a custom 'kubectl' shell function that uses curl?
         # OR, we assume the user is just using the terminal and we track the PTY.
         # BUT the HTTP request comes from 'kubectl' binary -> express.
         # Express request object doesn't know about the PTY.
         
         # SOLUTION: We will not use the real kubectl binary! 
         # We will create a fake 'kubectl' function in this shell session 
         # that makes curl requests adding the header.
         
         echo "Evaluating kubectl wrapper for Room: ${roomId}..."
      fi
      command kubectl "$@"
    }
    
    # Actually, simpler approach for MVP:
    # We export a variable, and our 'kubectl' wrapper adds the header? 
    # Real kubectl can't do that easily.
    # Let's pivot: We will run a tiny authenticating proxy on a random port for THIS session?
    # Overkill.
    
    # WORKING MVP SOLUTION:
    # We alias 'kubectl' to a lightweight Node script or shell function 
    # that wraps 'curl' requests to our mock API.
    # Since our Mock API is just JSON, we can simulate output!
    
    # Or, we stick to the single-user illusion for now but update the backend 
    # to rely on IP? No, docker container IP is same.
    
    # Let's try: 'alias kubectl="curl -s -H \"X-Room-ID: ${roomId}\" http://localhost:8080/api/v1/..."'
    # That's too hard to map args.
    
    # FOR now, let's just Log the room ID. The Mock API will default to 'default' room 
    # for all kubectl requests unless we solve this.
    # For the frontend dashboard, we CAN send headers.
    # So the "Battle Dashboard" will work.
    # The "Terminal" might still look at 'default' room if we use real kubectl.
    
    export KB_ROOM_ID="${roomId}"
    echo "Welcome to KubeMastery Room: ${roomId}"
    `;

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
