import React, { useState } from 'react';
import { useSRS, Flashcard } from '@/lib/useSRS';
import { CheckCircle, XCircle, ChevronRight, RotateCcw, Brain, Zap, Trophy } from 'lucide-react';

interface SRSReviewProps {
    cards: Flashcard[];
    onFinish: () => void;
}

const SRSReview: React.FC<SRSReviewProps> = ({ cards, onFinish }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const { reviewCard } = useSRS();
    const [sessionScore, setSessionScore] = useState(0);

    const currentCard = cards[currentIndex];

    const handleReview = (quality: number) => {
        reviewCard(currentCard.id, quality);
        if (quality >= 3) setSessionScore(prev => prev + 10);

        if (currentIndex < cards.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setShowAnswer(false);
        } else {
            onFinish();
        }
    };

    if (!currentCard) return null;

    return (
        <div className="max-w-xl mx-auto py-12 px-6">
            {/* Session Progress */}
            <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 p-2 rounded-xl text-indigo-600">
                        <Brain size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-800 uppercase tracking-tighter">Memory Sync</h2>
                        <div className="flex gap-1">
                            {cards.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 w-6 rounded-full transition-all duration-500 ${i <= currentIndex ? 'bg-indigo-500' : 'bg-slate-200'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-500 font-black">
                        <Zap size={16} fill="currentColor" />
                        <span>{sessionScore} XP</span>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{currentIndex + 1} / {cards.length} Cards</p>
                </div>
            </div>

            {/* The Card */}
            <div className="relative h-[400px] w-full perspective-1000">
                <div className={`relative w-full h-full transition-all duration-700 preserve-3d cursor-pointer ${showAnswer ? 'rotate-y-180' : ''}`} onClick={() => !showAnswer && setShowAnswer(true)}>
                    {/* Front */}
                    <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center justify-center p-12 text-center backface-hidden">
                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6">Question</span>
                        <p className="text-3xl font-bold text-slate-800 leading-tight mb-12">{currentCard.question}</p>
                        <div className="flex items-center gap-2 text-slate-400 group">
                            <span className="text-xs font-bold uppercase tracking-widest group-hover:text-indigo-500 transition-colors">Click to reveal</span>
                            <RotateCcw size={14} className="animate-spin-slow" />
                        </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center justify-center p-12 text-center rotate-y-180 backface-hidden">
                        <span className="text-[10px] font-black text-green-400 uppercase tracking-[0.2em] mb-6">Answer</span>
                        <p className="text-3xl font-black text-slate-900 leading-tight mb-12">{currentCard.answer}</p>

                        <div className="grid grid-cols-2 gap-4 w-full">
                            <button
                                onClick={(e) => { e.stopPropagation(); handleReview(1); }}
                                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all border border-transparent hover:border-red-100 group"
                            >
                                <XCircle size={24} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Forgot</span>
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); handleReview(5); }}
                                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-indigo-600 text-white hover:bg-black transition-all shadow-xl shadow-indigo-200 group"
                            >
                                <CheckCircle size={24} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Got it</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .animate-spin-slow { animation: spin 4s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
};

export default SRSReview;
