'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import { Users, Copy, Terminal as TerminalIcon } from 'lucide-react';

export default function ArenaPage() {
    // Default to a random room ID or allow input
    const [roomId, setRoomId] = useState<string>('BATTLE-101');
    const [joined, setJoined] = useState(false);

    const handleJoin = (e: React.FormEvent) => {
        e.preventDefault();
        setJoined(true);
    };

    const copyLink = () => {
        const url = `${window.location.origin}/arena?room=${roomId}`;
        navigator.clipboard.writeText(url);
        alert('Arena Link Copied!');
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
            <Header showBack title={<span className="text-red-500">KubeArena</span>} />

            <main className="flex-grow p-6 flex flex-col gap-6 max-w-7xl mx-auto w-full">

                {/* Lobby / Connection Bar */}
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
                            <TerminalIcon size={24} />
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">Multiplayer Terminal</h2>
                            <p className="text-slate-400 text-sm">Collaborate in real-time or battle.</p>
                        </div>
                    </div>

                    {!joined ? (
                        <form onSubmit={handleJoin} className="flex gap-2">
                            <input
                                type="text"
                                value={roomId}
                                onChange={(e) => setRoomId(e.target.value)}
                                className="bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 font-mono"
                                placeholder="Enter Room ID..."
                            />
                            <button type="submit" className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-lg font-bold transition">
                                JOIN ROOM
                            </button>
                        </form>
                    ) : (
                        <div className="flex items-center gap-4 bg-slate-900 px-4 py-2 rounded-lg border border-slate-700">
                            <span className="text-slate-400 text-sm font-mono">ROOM:</span>
                            <span className="text-red-400 font-bold font-mono tracking-wider">{roomId}</span>
                            <button onClick={copyLink} className="text-slate-500 hover:text-white transition" title="Copy Invite Link">
                                <Copy size={16} />
                            </button>
                            <div className="h-4 w-[1px] bg-slate-700 mx-2"></div>
                            <button onClick={() => setJoined(false)} className="text-xs text-red-500 hover:underline">
                                LEAVE
                            </button>
                        </div>
                    )}
                </div>

                {/* Main Arena Content */}
                {joined ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow min-h-[500px]">

                        {/* Terminal Area (Shared) */}
                        <div className="lg:col-span-2 bg-black rounded-xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col">
                            <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700 text-xs text-slate-400">
                                <span>/bin/bash - Room: {roomId}</span>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                </div>
                            </div>
                            <div className="flex-grow relative">
                                <Terminal roomId={roomId} welcomeMessage={`\r\nWelcome to Arena Room: ${roomId}\r\nSync initialized...\r\n`} />
                            </div>
                        </div>

                        {/* Side Panel (Participants / Status) */}
                        <div className="flex flex-col gap-4">
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex-grow">
                                <h3 className="font-bold text-slate-300 mb-4 flex items-center gap-2">
                                    <Users size={16} /> Active Users
                                </h3>
                                <div className="space-y-3">
                                    {/* Mock Users list for now */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xs">ME</div>
                                        <div>
                                            <p className="font-bold text-sm">You (SRE)</p>
                                            <p className="text-xs text-green-400">Connected</p>
                                        </div>
                                    </div>
                                    {/* We can add real presence list later via WS */}
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-700">
                                    <h4 className="font-bold text-slate-400 text-xs uppercase mb-3 text-center">Scoreboard (Demo)</h4>
                                    <div className="flex justify-between items-center bg-slate-900 p-4 rounded-lg border border-slate-700">
                                        <div className="text-center">
                                            <div className="text-2xl font-black text-blue-500">0</div>
                                            <div className="text-[10px] text-blue-300 uppercase">Blue Team</div>
                                        </div>
                                        <div className="text-slate-600 font-bold">VS</div>
                                        <div className="text-center">
                                            <div className="text-2xl font-black text-red-500">0</div>
                                            <div className="text-[10px] text-red-300 uppercase">Red Team</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex-grow flex items-center justify-center opacity-50">
                        <div className="text-center max-w-md">
                            <h3 className="text-2xl font-bold text-slate-700 mb-2">Waiting to Join...</h3>
                            <p className="text-slate-500">Enter a Room ID above to start your collaborative session.</p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
