'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { useGame } from '@/lib/useGame';
import { Award, FileText, CheckCircle, Share2, Download } from 'lucide-react';
import { useProgress } from '@/lib/useProgress';

export default function CareerPage() {
    const { gameState } = useGame();
    const { completedLessons } = useProgress();
    const [name, setName] = useState('Kube Engineer');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const storedName = localStorage.getItem('kube_user_name');
        if (storedName) setName(storedName);
    }, []);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        localStorage.setItem('kube_user_name', e.target.value);
    };

    const getRank = () => {
        const level = gameState.level;
        if (level < 5) return 'Novice Orchestrator';
        if (level < 10) return 'Cluster Administrator';
        if (level < 20) return 'Security Hardening Specialist';
        return 'Kubernetes Architect';
    };

    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    if (!isClient) return null;

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main className="max-w-6xl mx-auto p-8">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
                        Career Ecosystem <span className="text-indigo-600">Pro</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Your skills are verifiable assets. Generate your specialized resume and certificate below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* LEFT: Certificate */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <h2 className="flex items-center gap-2 text-xl font-bold mb-6">
                                <Award className="text-amber-500" /> Verifiable Certificate
                            </h2>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Issue To</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={handleNameChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>

                            {/* CERTIFICATE PREVIEW */}
                            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl text-center text-white shadow-2xl overflow-hidden border-4 border-double border-amber-500/50">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Award size={120} />
                                </div>

                                <div className="relative z-10 border border-white/20 p-6 rounded-lg backdrop-blur-sm">
                                    <div className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
                                        Certificate of Competence
                                    </div>
                                    <h3 className="text-3xl font-serif mb-2">{name}</h3>
                                    <p className="text-slate-400 text-sm mb-6">has successfully demonstrated proficiency as a</p>

                                    <div className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-6 inline-block">
                                        {getRank()}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-xs text-left opacity-80 mt-4">
                                        <div>
                                            <div className="font-bold text-slate-300">Level</div>
                                            <div>{gameState.level}</div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-300">Date</div>
                                            <div>{today}</div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-300">Lessons Completed</div>
                                            <div>{completedLessons.length}</div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-300">ID</div>
                                            <div className="font-mono">KUB-{Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex items-center justify-center gap-2 opacity-50">
                                        <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
                                        <span className="font-mono text-[10px] tracking-widest">KUBEMASTERY PROTOCOL VERIFIED</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex gap-3">
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition">
                                    <Download size={16} /> Download PDF
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                                    <Share2 size={16} /> Share
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Resume Generator */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-full">
                            <h2 className="flex items-center gap-2 text-xl font-bold mb-6">
                                <FileText className="text-blue-500" /> Resume / LinkedIn Snippets
                            </h2>
                            <p className="text-sm text-slate-500 mb-6">
                                Copy and paste these pre-verified bullet points into your professional profile.
                            </p>

                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 group hover:border-blue-200 transition">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-sm text-slate-900">Summary</h3>
                                        <button className="text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">Copy</button>
                                    </div>
                                    <p className="text-sm text-slate-600 font-mono leading-relaxed">
                                        "Hands-on experience with Kubernetes orchestration, including Pod lifecycle management, Deployment strategies, and security hardening (RBAC, Network Policies). Verified {getRank()} via KubeMastery Path."
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 group hover:border-blue-200 transition">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-sm text-slate-900">Skills</h3>
                                        <button className="text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">Copy</button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['Kubernetes', 'Docker/CRI', 'Helm', 'RBAC', 'Network Policies', 'GitOps'].map(skill => (
                                            <span key={skill} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 group hover:border-blue-200 transition">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-sm text-slate-900">Achievements</h3>
                                        <button className="text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">Copy</button>
                                    </div>
                                    <ul className="text-sm text-slate-600 space-y-2">
                                        <li className="flex gap-2">
                                            <CheckCircle size={14} className="text-green-500 mt-0.5" />
                                            <span>Completed {completedLessons.length} hands-on labs including Chaos Engineering scenarios.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle size={14} className="text-green-500 mt-0.5" />
                                            <span>Mastered core troubleshooting workflows (CrashLoopBackOff, Pending, OOMKilled).</span>
                                        </li>
                                        {gameState.level >= 5 && (
                                            <li className="flex gap-2">
                                                <CheckCircle size={14} className="text-green-500 mt-0.5" />
                                                <span>Demonstrated proficiency in cluster security and self-healing architecture.</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
