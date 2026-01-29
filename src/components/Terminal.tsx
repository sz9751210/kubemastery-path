'use client';

import React, { useEffect, useRef } from 'react';
import { Terminal as XTerminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

interface TerminalProps {
    welcomeMessage?: string;
}

const Terminal: React.FC<TerminalProps> = ({ welcomeMessage }) => {
    const terminalRef = useRef<HTMLDivElement>(null);
    const xtermRef = useRef<XTerminal | null>(null);
    const fitAddonRef = useRef<FitAddon | null>(null);

    useEffect(() => {
        if (!terminalRef.current) return;

        // Initialize xterm
        const term = new XTerminal({
            cursorBlink: true,
            fontSize: 14,
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            theme: {
                background: '#1e1e1e',
                foreground: '#ffffff',
            },
        });

        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);

        term.open(terminalRef.current);
        fitAddon.fit();

        xtermRef.current = term;
        fitAddonRef.current = fitAddon;

        if (welcomeMessage) {
            term.writeln(welcomeMessage);
        }

        // WebSocket Connection
        const wsUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'ws://localhost:4000';
        const ws = new WebSocket(wsUrl);

        ws.onopen = () => {
            term.write('\r\n\x1b[32m[Connected to KubeMastery Shell]\x1b[0m\r\n');
        };

        ws.onmessage = (event) => {
            term.write(event.data);
        };

        ws.onclose = () => {
            term.write('\r\n\x1b[31m[Connection closed]\x1b[0m\r\n');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
            term.write('\r\n\x1b[31m[Connection error]\x1b[0m\r\n');
        };

        // Send input to backend
        term.onData((data) => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(data);
            }
        });

        // Handle Resize
        const handleResize = () => {
            fitAddon.fit();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            term.dispose();
            ws.close();
        };
    }, [welcomeMessage]);

    return (
        <div
            className="w-full h-full bg-[#1e1e1e] p-2 overflow-hidden rounded-md"
            ref={terminalRef}
        />
    );
};

export default Terminal;
