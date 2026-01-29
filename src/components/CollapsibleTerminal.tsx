'use client';

import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { ChevronUp, ChevronDown, Terminal as TerminalIcon } from 'lucide-react';
import Terminal, { TerminalRef } from './Terminal';

export interface CollapsibleTerminalRef {
    toggle: (open?: boolean) => void;
    write: (data: string) => void;
}

const CollapsibleTerminal = forwardRef<CollapsibleTerminalRef, {}>((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const terminalRef = useRef<TerminalRef>(null);

    useImperativeHandle(ref, () => ({
        toggle: (open?: boolean) => {
            setIsOpen(prev => open !== undefined ? open : !prev);
        },
        write: (data: string) => {
            if (!isOpen) {
                setIsOpen(true);
            }
            // Add a small delay to ensure rendering if opening
            setTimeout(() => {
                terminalRef.current?.write(data);
            }, 100);
        }
    }));

    return (
        <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'h-[40vh]' : 'h-10'} bg-[#1e1e1e] border-t border-slate-700 shadow-2xl flex flex-col`}>
            {/* Header / Toggle Bar */}
            <div
                className="h-10 bg-[#2d2d2d] flex items-center justify-between px-4 cursor-pointer hover:bg-[#3d3d3d] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-2 text-slate-300">
                    <TerminalIcon size={16} />
                    <span className="text-sm font-semibold tracking-wide">TERMINAL</span>
                </div>
                <div className="text-slate-400">
                    {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                </div>
            </div>

            {/* Terminal Container */}
            <div className="flex-grow overflow-hidden relative">
                {/* Stick the terminal here. It stays mounted to keep connection alive. */}
                {/* Only hide visually or via height to prevent unmounting/disconnecting */}
                <div className="absolute inset-0">
                    <Terminal ref={terminalRef} welcomeMessage="Welcome to KubeMastery Interactive Shell" />
                </div>
            </div>
        </div>
    );
});

CollapsibleTerminal.displayName = 'CollapsibleTerminal';

export default CollapsibleTerminal;
