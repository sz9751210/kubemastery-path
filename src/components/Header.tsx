'use client';

import React from 'react';
import { Trophy, Zap, Brain, ChevronLeft, Menu, Award } from 'lucide-react';
import { useGame } from '@/lib/useGame';
import { useSRS } from '@/lib/useSRS';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface HeaderProps {
    showBack?: boolean;
    title?: string;
    subtitle?: string;
}

export default function Header({ showBack, title, subtitle }: HeaderProps) {
    const { gameState, xpProgress } = useGame();
    const { dueCards } = useSRS();
    const router = useRouter();

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
                {showBack && (
                    <button
                        onClick={() => router.push('/')}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-700"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                )}
                <div className="flex flex-col">
                    {subtitle && <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">{subtitle}</span>}
                    <Link href="/">
                        <h1 className="text-xl font-black text-slate-900 tracking-tighter">
                            {title || <>KubeMastery <span className="text-blue-600">Path</span></>}
                        </h1>
                    </Link>
                </div>
            </div>

            <div className="flex items-center gap-6 md:gap-10">
                {/* SRS Review Status */}
                {dueCards.length > 0 && (
                    <Link href="/review" className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition font-medium text-xs">
                        <Brain size={16} />
                        <span className="animate-pulse">{dueCards.length} Review</span>
                    </Link>
                )}

                {/* Career Link */}
                <Link href="/career" className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition font-medium text-xs">
                    <Award size={16} />
                    <span>Career</span>
                </Link>

                {/* Level HUD */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex flex-col items-end gap-1.5 min-w-[120px]">
                        <div className="flex justify-between w-full text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Trophy size={10} className="text-yellow-500" /> LVL {gameState.level}</span>
                            <span>{gameState.xp} XP</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-1000"
                                style={{ width: `${xpProgress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Compact Level Mini-Badge for small screens */}
                    <div className="lg:hidden bg-slate-900 text-white w-10 h-10 rounded-xl flex flex-col items-center justify-center border border-white/10 shadow-lg">
                        <span className="text-[8px] font-bold text-slate-500 leading-none">LVL</span>
                        <span className="text-sm font-black leading-none">{gameState.level}</span>
                    </div>
                </div>

                <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                    <Menu size={24} />
                </button>
            </div>

            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(0.98); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
            `}</style>
        </header>
    );
}
