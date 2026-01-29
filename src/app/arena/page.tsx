'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import { Users, Copy, Terminal as TerminalIcon, Shield, Skull, Activity } from 'lucide-react';

type Role = 'spectator' | 'blue' | 'red';

export default function ArenaPage() {
    const [roomId, setRoomId] = useState<string>('BATTLE-101');
    const [joined, setJoined] = useState(false);
    const [role, setRole] = useState<Role>('spectator');
    const [stats, setStats] = useState({
        scores: { red: 0, blue: 0 },
        podCount: 0,
        healthyPods: 0,
        lastChaos: 0
    });

    const handleJoin = (e: React.FormEvent) => {
        e.preventDefault();
        setJoined(true);
    };

    const copyLink = () => {
        const url = `${window.location.origin}/arena?room=${roomId}`;
        navigator.clipboard.writeText(url);
        alert('Arena Link Copied!');
    };

    // Poll Stats
    useEffect(() => {
        if (!joined) return;
        const interval = setInterval(async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/arena/stats`, {
                    headers: { 'X-Room-ID': roomId }
                });
                const data = await res.json();
                setStats(data);
            } catch (e) {
                console.error("Failed to fetch stats");
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [joined, roomId]);

    const triggerChaos = async (type: string) => {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/arena/chaos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-Room-ID': roomId },
            body: JSON.stringify({ type })
        });
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
            <Header showBack title={<span className="text-red-500 font-mono">KUBE_ARENA_v1</span>} />

            <main className="flex-grow p-6 flex flex-col gap-6 max-w-7xl mx-auto w-full">

                {/* Lobby / Connection Bar */}
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${role === 'red' ? 'bg-red-500/20 text-red-500' : role === 'blue' ? 'bg-blue-500/20 text-blue-500' : 'bg-slate-700 text-slate-400'}`}>
                            {role === 'red' ? <Skull size={24} /> : role === 'blue' ? <Shield size={24} /> : <TerminalIcon size={24} />}
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">
                                {role === 'red' ? 'RED TEAM (Chaos Engineer)' : role === 'blue' ? 'BLUE TEAM (SRE)' : 'Battle Arena Lobby'}
                            </h2>
                            <p className="text-slate-400 text-sm">
                                {role === 'red' ? 'Objective: Destroy the cluster.' : role === 'blue' ? 'Objective: Keep services alive.' : 'Select a team to begin.'}
                            </p>
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
                                ENTER LOBBY
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
                            <button onClick={() => { setJoined(false); setRole('spectator'); }} className="text-xs text-red-500 hover:underline">
                                LEAVE
                            </button>
                        </div>
                    )}
                </div>

                {/* Main Arena Content */}
                {joined ? (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-grow min-h-[600px]">

                        {/* Terminal Area (Main) */}
                        <div className="lg:col-span-3 bg-black rounded-xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col relative">
                            {/* Overlay for Role Selection if Spectator */}
                            {role === 'spectator' && (
                                <div className="absolute inset-0 z-20 bg-black/80 backdrop-blur-sm flex items-center justify-center">
                                    <div className="grid grid-cols-2 gap-8 max-w-2xl w-full p-8">
                                        <button
                                            onClick={() => setRole('blue')}
                                            className="group bg-blue-900/40 hover:bg-blue-900/60 border-2 border-blue-500/50 hover:border-blue-500 text-blue-100 p-8 rounded-2xl flex flex-col items-center gap-4 transition-all hover:scale-105"
                                        >
                                            <Shield size={64} className="text-blue-500 group-hover:animate-bounce" />
                                            <h3 className="text-3xl font-black uppercase italic">Blue Team</h3>
                                            <p className="text-center text-blue-300">Defend the cluster. Fix issues. Maintain uptime.</p>
                                        </button>
                                        <button
                                            onClick={() => setRole('red')}
                                            className="group bg-red-900/40 hover:bg-red-900/60 border-2 border-red-500/50 hover:border-red-500 text-red-100 p-8 rounded-2xl flex flex-col items-center gap-4 transition-all hover:scale-105"
                                        >
                                            <Skull size={64} className="text-red-500 group-hover:animate-pulse" />
                                            <h3 className="text-3xl font-black uppercase italic">Red Team</h3>
                                            <p className="text-center text-red-300">Unleash chaos. Delete pods. Break networking.</p>
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700 text-xs text-slate-400">
                                <span className="font-mono text-emerald-400">root@k8s-master:~#</span>
                                <div className="flex gap-2 items-center">
                                    <Activity size={12} className={stats.healthyPods < stats.podCount ? 'text-red-500 animate-pulse' : 'text-green-500'} />
                                    <span>Pods: {stats.healthyPods}/{stats.podCount}</span>
                                </div>
                            </div>
                            <div className="flex-grow relative">
                                <Terminal roomId={roomId} welcomeMessage={`\r\n[SYSTEM] Connected to Battle Room: ${roomId}\r\n[SYSTEM] Role: ${role.toUpperCase()}\r\n`} />
                            </div>
                        </div>

                        {/* Side Panel (Control Center) */}
                        <div className="flex flex-col gap-4">
                            {/* Scoreboard */}
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <h4 className="font-bold text-slate-400 text-xs uppercase mb-3 text-center">Live Scoreboard</h4>
                                <div className="flex justify-between items-center bg-slate-900 p-4 rounded-lg border border-slate-700 relative overflow-hidden">
                                    {/* Background Progress Bar */}
                                    {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-red-900/20 z-0"></div> */}

                                    <div className="text-center z-10">
                                        <div className="text-3xl font-black text-blue-500">{stats.scores.blue}</div>
                                        <div className="text-[10px] text-blue-300 uppercase font-bold">Defenders</div>
                                    </div>
                                    <div className="text-slate-600 font-bold italic z-10">VS</div>
                                    <div className="text-center z-10">
                                        <div className="text-3xl font-black text-red-500">{stats.scores.red}</div>
                                        <div className="text-[10px] text-red-300 uppercase font-bold">Attackers</div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Panel */}
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex-grow flex flex-col">
                                <h3 className="font-bold text-slate-300 mb-4 flex items-center gap-2">
                                    {role === 'red' ? <Skull size={18} className="text-red-500" /> : role === 'blue' ? <Shield size={18} className="text-blue-500" /> : <Users size={18} />}
                                    Mission Control
                                </h3>

                                {role === 'red' ? (
                                    <div className="space-y-3">
                                        <button onClick={() => triggerChaos('kill-pod')} className="w-full bg-red-900/50 hover:bg-red-600 border border-red-500 text-red-100 py-3 rounded-lg font-bold uppercase text-sm transition flex items-center justify-center gap-2 group">
                                            <Skull size={16} /> Kill Random Pod
                                        </button>
                                        <button onClick={() => triggerChaos('scale-down')} className="w-full bg-orange-900/50 hover:bg-orange-600 border border-orange-500 text-orange-100 py-3 rounded-lg font-bold uppercase text-sm transition flex items-center justify-center gap-2">
                                            <Activity size={16} /> Scale Down All
                                        </button>
                                        <div className="mt-4 p-3 bg-red-950/50 rounded text-xs text-red-300 border border-red-900">
                                            <p className="font-bold mb-1">CHAOS LOG:</p>
                                            <p>Waiting for destruction...</p>
                                        </div>
                                    </div>
                                ) : role === 'blue' ? (
                                    <div className="space-y-3">
                                        <div className="p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                                            <h4 className="text-xs font-bold text-blue-400 uppercase mb-2">Cluster Health</h4>
                                            <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${stats.healthyPods === stats.podCount ? 'bg-green-500' : 'bg-yellow-500'}`}
                                                    style={{ width: `${stats.podCount > 0 ? (stats.healthyPods / stats.podCount) * 100 : 0}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-right text-xs text-blue-300 mt-1">{stats.healthyPods} / {stats.podCount} Running</p>
                                        </div>
                                        <p className="text-xs text-slate-400 italic text-center">
                                            Use the terminal to fix issues! <br />
                                            `kubectl get pods` <br />
                                            `kubectl scale ...`
                                        </p>
                                    </div>
                                ) : (
                                    <div className="text-center text-slate-500 text-sm py-10">
                                        Select a team to access controls.
                                    </div>
                                )}
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
