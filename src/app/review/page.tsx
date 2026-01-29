'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import { useSRS } from '@/lib/useSRS';
import SRSReview from '@/components/SRSReview';
import { Brain, ArrowLeft, Trophy, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ReviewPage() {
    const { dueCards } = useSRS();
    const [isFinished, setIsFinished] = useState(false);

    if (dueCards.length === 0 && !isFinished) {
        return (
            <div className="min-h-screen bg-slate-50 pb-20">
                <Header />
                <main className="max-w-4xl mx-auto mt-20 px-6 text-center">
                    <div className="inline-block p-6 rounded-[2.5rem] bg-indigo-100 text-indigo-600 mb-8 animate-bounce">
                        <Brain size={60} />
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Your Mind is Sharp!</h1>
                    <p className="text-slate-500 text-xl font-medium mb-12">No cards due for review. Come back later or master a new lesson.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl"
                    >
                        <ArrowLeft size={20} />
                        <span>Return to Roadmap</span>
                    </Link>
                </main>
            </div>
        );
    }

    if (isFinished) {
        return (
            <div className="min-h-screen bg-slate-50 pb-20 flex flex-col items-center justify-center">
                <div className="bg-white p-16 rounded-[3rem] shadow-2xl text-center max-w-md w-full border border-slate-100 relative overflow-hidden">
                    <Sparkles className="absolute -top-10 -right-10 text-yellow-400 w-40 h-40 opacity-20" />
                    <div className="relative inline-block mb-8">
                        <div className="bg-amber-100 p-6 rounded-full text-amber-500">
                            <Trophy size={60} />
                        </div>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter uppercase">Sync Complete</h2>
                    <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg">Knowledge successfully reinforced. Your mastery level has increased.</p>
                    <Link
                        href="/"
                        className="block w-full bg-indigo-600 text-white py-4 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 tracking-widest uppercase text-sm"
                    >
                        Back to Core Path
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <Header />
            <main>
                <SRSReview cards={dueCards} onFinish={() => setIsFinished(true)} />
            </main>
        </div>
    );
}
