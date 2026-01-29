'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import LabSidebar from '@/components/LabSidebar';

export default function LabPage({ params }: { params: { labId: string } }) {
    // Unwrapping params is necessary in newer Next.js versions if using async components, 
    // but for client components we usually get them as props. 
    // Wait, params is a Promise in Next.js 15? 
    // Let's assume standard Next.js 13/14 behavior or handle it safely.
    // Actually, in client components 'params' is just an object. 
    // HOWEVER, to be safe and avoid "params are missing" errors if built statically, we verify.

    // NOTE: In Next.js 13+, params might not be available directly in client components if imported via standard page props?
    // Actually 'page.tsx' is server by default unless 'use client' is at top. 
    // This file HAS 'use client'.
    // BUT 'params' prop is passed to the Page component.
    const { labId } = params;

    const [labData, setLabData] = useState<any>(null);

    // Fetch Lab Details
    useEffect(() => {
        if (!labId) return;
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/labs/${labId}`)
            .then(res => res.json())
            .then(data => setLabData(data))
            .catch(err => console.error("Failed to load lab", err));
    }, [labId]);

    const handleVerify = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/labs/${labId}/verify`, {
            method: 'POST',
            // We reuse the 'default' room for single-player labs for now, 
            // or we could generate a random room ID for isolation.
            // Let's use a fixed room for the lab session to persist state?
            // "lab-<labid>" seems appropriate.
            headers: { 'X-Room-ID': `lab-${labId}` }
        });
        const data = await res.json();
        return data.results;
    };

    return (
        <div className="h-screen bg-slate-900 text-slate-100 flex flex-col overflow-hidden">
            <Header showBack title={<span className="font-mono text-blue-400">Lab Environment</span>} />

            <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
                {/* Left Sidebar (Instructions) */}
                <LabSidebar labId={labId} labData={labData} onVerify={handleVerify} />

                {/* Right Area (Terminal) */}
                <div className="flex-grow flex flex-col bg-black relative border-l border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700 text-xs text-slate-400">
                        <span>/bin/bash - Lab: {labId}</span>
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                        </div>
                    </div>
                    <div className="flex-grow relative">
                        {/* We use a specific Room ID for the lab user to ensure clean state */}
                        <Terminal roomId={`lab-${labId}`} welcomeMessage={`\r\nInitializing Lab: ${labData?.title || 'Loading...'}\r\nInstructions are on the left.\r\n`} />
                    </div>
                </div>
            </div>
        </div>
    );
}
