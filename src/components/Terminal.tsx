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

        term.write('\r\n$ ');

        // Basic local echo and input handling (Placeholders for WebSocket)
        term.onData((data) => {
            const char = data;
            if (char === '\r') {
                // Enter
                term.write('\r\n$ ');
            } else if (char === '\u007F') {
                // Backspace
                term.write('\b \b');
            } else {
                term.write(char);
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
