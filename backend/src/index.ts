import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import * as pty from 'node-pty';
import os from 'os';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = 4000;

const server = app.listen(PORT, () => {
    console.log(`Backend server listening on port ${PORT}`);
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
        env: process.env
    });

    // Data from pty -> WebSocket
    ptyProcess.onData((data) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(data);
        }
    });

    // Data from WebSocket -> pty
    ws.on('message', (message) => {
        ptyProcess.write(message.toString());
    });

    ws.on('close', () => {
        console.log('Terminal connection closed');
        ptyProcess.kill();
    });
});
