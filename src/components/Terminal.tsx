'use client';

import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import { Terminal as XTerminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

export interface TerminalRef {
    write: (data: string) => void;
}

interface TerminalProps {
    welcomeMessage?: string;
}

const Terminal = forwardRef<TerminalRef, TerminalProps>(({ welcomeMessage }, ref) => {
    const terminalRef = useRef<HTMLDivElement>(null);
    const xtermRef = useRef<XTerminal | null>(null);
    const fitAddonRef = useRef<FitAddon | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const wsRef = useRef<WebSocket | null>(null);

    useImperativeHandle(ref, () => ({
        write: (data: string) => {
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.send(JSON.stringify({ type: 'data', data }));
                // Also echo to local terminal for immediate feedback if needed, 
                // but typically backend echoes. 
                // If relying on backend echo (which we are), we just send.
            } else {
                xtermRef.current?.writeln('\r\n\x1b[31m[Cannot execute: Terminal not connected]\x1b[0m');
            }
        }
    }));

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
        wsRef.current = ws;

        ws.onopen = () => {
            setIsConnected(true);
            term.write('\r\n\x1b[32m[Connected to KubeMastery Shell]\x1b[0m\r\n');
        };

        ws.onmessage = (event) => {
            term.write(event.data);
        };

        ws.onclose = () => {
            setIsConnected(false);
            term.write('\r\n\x1b[31m[Connection closed]\x1b[0m\r\n');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
            term.write('\r\n\x1b[31m[Connection error]\x1b[0m\r\n');
            setIsConnected(false);
        };

        // Send input to backend
        term.onData((data) => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({ type: 'data', data }));
            }
        });

        // Handle Resize
        const handleResize = () => {
            fitAddon.fit();
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({
                    type: 'resize',
                    cols: term.cols,
                    rows: term.rows
                }));
            }
        };
        window.addEventListener('resize', handleResize);

        // ResizeObserver to handle container size changes (e.g. drawer open)
        const resizeObserver = new ResizeObserver(() => {
            handleResize();
        });
        resizeObserver.observe(terminalRef.current);

        return () => {
            window.removeEventListener('resize', handleResize);
            resizeObserver.disconnect();
            term.dispose();
            ws.close();
        };
    }, [welcomeMessage]);

    return (
        <div className="relative w-full h-full">
            <div
                className="w-full h-full bg-[#1e1e1e] p-2 overflow-hidden rounded-md"
                ref={terminalRef}
            />
            {/* Connection Status Indicator */}
            <div className={`absolute top-2 right-4 w-3 h-3 rounded-full ${isConnected ? 'bg-green-500 box-shadow-green' : 'bg-red-500'} transition-colors duration-300`} title={isConnected ? "Connected" : "Disconnected"}>
                <span className={`${isConnected ? 'animate-ping opacity-75' : 'hidden'} absolute inline-flex h-full w-full rounded-full bg-green-400`}></span>
            </div>
        </div>
    );
});

Terminal.displayName = 'Terminal';

export default Terminal;
