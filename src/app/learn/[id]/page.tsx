'use client';

import React, { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getLessonById, getLessons } from '@/data/lessons';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, PlayCircle, Copy, Check, Play, Terminal, CheckCircle, Trophy, Flame, Sparkles, Zap, XCircle, Loader2, Box } from 'lucide-react';
import LessonSelector from '@/components/LessonSelector';
import Header from '@/components/Header';
import CollapsibleTerminal, { CollapsibleTerminalRef } from '@/components/CollapsibleTerminal';
import { useProgress } from '@/lib/useProgress';
import { useGame } from '@/lib/useGame';
import { useSRS } from '@/lib/useSRS';

export default function LessonPage() {
    const params = useParams();
    const id = params?.id as string;
    const lesson = getLessonById(id);
    const router = useRouter();
    const allLessons = getLessons();
    const terminalRef = useRef<CollapsibleTerminalRef>(null);

    // Progress & Game System
    const { isCompleted: isLessonCompleted, markAsComplete: markLessonAsComplete } = useProgress();
    const { gameState, addXp, showLevelUp, xpGained, xpProgress } = useGame();
    const { addCardsForLesson } = useSRS();

    const [copiedValues, setCopiedValues] = useState<Record<string, boolean>>({});
    const [verifying, setVerifying] = useState(false);
    const [settingUp, setSettingUp] = useState(false);
    const [setupResult, setSetupResult] = useState<{ success: boolean; message: string; output: string } | null>(null);
    const [verifyResult, setVerifyResult] = useState<{ success: boolean; message: string; output: string } | null>(null);

    // Track if setup has been run for this session
    const setupRunRef = useRef(false);

    const handleSetup = async () => {
        if (!lesson?.setupScript || setupRunRef.current) return;

        // Open terminal immediately
        terminalRef.current?.toggle(true);
        setupRunRef.current = true;

        setSettingUp(true);
        setSetupResult(null);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/setup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    script: lesson.setupScript,
                    mode: 'real'
                })
            });
            const data = await res.json();
            setSetupResult(data);
        } catch (e) {
            setSetupResult({ success: false, message: 'Network Error', output: String(e) });
        } finally {
            setSettingUp(false);
        }
    };

    const handleTerminalClick = () => {
        terminalRef.current?.toggle();
        // Trigger setup if it hasn't run yet
        if (lesson?.setupScript && !setupRunRef.current) {
            handleSetup();
        }
    };

    const handleVerify = async () => {
        if (!lesson?.verifyScript) return;
        setVerifying(true);
        setVerifyResult(null);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/verify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    script: lesson.verifyScript,
                    mode: 'real' // Default to real
                })
            });
            const data = await res.json();
            setVerifyResult(data);
        } catch (e) {
            setVerifyResult({ success: false, message: 'Network Error', output: String(e) });
        } finally {
            setVerifying(false);
        }
    };

    const handleCopy = (code: string, blockId: string) => {
        navigator.clipboard.writeText(code);
        setCopiedValues({ ...copiedValues, [blockId]: true });
        setTimeout(() => {
            setCopiedValues(prev => ({ ...prev, [blockId]: false }));
        }, 2000);
    };

    const handleRun = (code: string) => {
        if (terminalRef.current) {
            // Clean up code: remove comment lines and empty lines
            const lines = code.split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0 && !line.startsWith('#'));

            // Join with newline and send
            const cleanCode = lines.join('\n');
            if (cleanCode) {
                terminalRef.current.write(cleanCode + '\n');
            }
        }
    };

    const handleCompletion = () => {
        if (!lesson) return;
        markLessonAsComplete(lesson.id);
        addXp(100);
        if (lesson.flashcards) {
            addCardsForLesson(lesson.id, lesson.flashcards);
        }
    };

    if (!lesson) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Lesson Not Found</h1>
                    <Link href="/" className="text-blue-500 hover:underline">
                        Return to Roadmap
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20 relative overflow-hidden">
            {/* Level Up Overlay */}
            {showLevelUp && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-500">
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center transform scale-110 animate-in zoom-in duration-300">
                        <Trophy size={80} className="text-yellow-400 mx-auto mb-6" />
                        <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">LEVEL UP!</h2>
                        <p className="text-2xl text-slate-700 font-bold mb-8">Achieved: Level {gameState.level}</p>
                        <button onClick={() => window.location.reload()} className="bg-black text-white px-8 py-3 rounded-full font-bold">Continue the Path</button>
                    </div>
                </div>
            )}

            {/* XP gain toast */}
            {xpGained && (
                <div className="fixed top-24 right-10 z-[60] bg-amber-500 text-white font-black px-4 py-2 rounded-full shadow-lg animate-in slide-in-from-right duration-300">
                    +{xpGained} XP
                </div>
            )}

            {/* Header */}
            <Header
                showBack
                subtitle={`${lesson.category} • ${lesson.duration}`}
                title={lesson.title}
            />

            <div className="bg-slate-50 border-b border-slate-200 px-6 py-2 flex items-center justify-between sticky top-[65px] z-40">
                <div className="flex items-center gap-4">
                    <LessonSelector currentLessonId={lesson.id} lessons={allLessons} />
                    {isLessonCompleted(lesson.id) && <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Completed</span>}
                </div>
                <div className="flex items-center gap-3">

                    <button
                        onClick={handleTerminalClick}
                        className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition-all text-sm"
                    >
                        <Terminal className="w-4 h-4" />
                        <span>Terminal</span>
                    </button>
                    <button
                        onClick={() => router.push(`/lab?lessonId=${lesson.id}`)}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg font-bold hover:shadow-lg transition-all active:scale-95 text-sm"
                    >
                        <PlayCircle className="w-5 h-5" />
                        <span>Open Lab</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <main className="max-w-4xl mx-auto mt-10 px-6 mb-32">
                {/* Setup Result Toast */}
                {setupResult && (
                    <div className={`mb-8 p-4 rounded-xl border flex items-center justify-between animate-in slide-in-from-top-4 duration-300
                        ${setupResult.success ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-red-50 border-red-200 text-red-800'}
                    `}>
                        <div className="flex items-center gap-3">
                            <Box className="w-5 h-5" />
                            <div>
                                <h4 className="font-bold">{setupResult.success ? 'Lab Environment Initialized' : 'Setup Failed'}</h4>
                                <p className="text-xs opacity-80 mt-1 font-mono">{setupResult.message}</p>
                            </div>
                        </div>
                        <button onClick={() => setSetupResult(null)} className="p-1 hover:bg-black/5 rounded">
                            <XCircle className="w-5 h-5 opacity-50" />
                        </button>
                    </div>
                )}

                <article className="prose prose-slate lg:prose-lg xl:prose-xl bg-white p-12 lg:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ className, children, ...props }: any) {
                                const match = /language-(\w+)/.exec(className || '');
                                const isInline = !match;
                                const codeContent = String(children).replace(/\n$/, '');
                                const blockId = Math.random().toString(36).substr(2, 9);
                                const isBash = match && (match[1] === 'bash' || match[1] === 'sh');

                                if (isInline) {
                                    return (
                                        <code className="bg-slate-100 text-pink-600 px-1.5 py-0.5 rounded-md text-[0.9em] font-mono border border-slate-200" {...props}>
                                            {children}
                                        </code>
                                    );
                                }

                                return (
                                    <div className="relative group my-8 rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
                                        {/* Code Block Header */}
                                        <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-2.5 text-xs border-b border-black">
                                            <div className="flex items-center gap-3">
                                                <div className="flex gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                                                </div>
                                                <span className="font-mono font-bold text-slate-400 uppercase tracking-wider">{match?.[1] || 'TEXT'}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                {isBash && (
                                                    <button
                                                        onClick={() => handleRun(codeContent)}
                                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600/20 text-green-400 rounded-md hover:bg-green-600/30 transition-colors border border-green-600/30"
                                                        title="Run in Terminal"
                                                    >
                                                        <Play size={12} className="fill-current" />
                                                        <span className="font-bold">RUN</span>
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleCopy(codeContent, codeContent)}
                                                    className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-md hover:bg-white/10"
                                                >
                                                    {copiedValues[codeContent] ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                                </button>
                                            </div>
                                        </div>

                                        <SyntaxHighlighter
                                            style={vscDarkPlus}
                                            language={match?.[1]}
                                            PreTag="div"
                                            customStyle={{
                                                margin: 0,
                                                padding: '1.5rem',
                                                fontSize: '0.95rem',
                                                lineHeight: '1.6',
                                                backgroundColor: '#1e1e1e'
                                            }}
                                            {...props}
                                        >
                                            {codeContent}
                                        </SyntaxHighlighter>
                                    </div>
                                );
                            },
                            h1: ({ children }) => <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-8 pb-4 border-b border-slate-100">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                                {children}
                            </h2>,
                            blockquote: ({ children }) => (
                                <div className="border-l-4 border-blue-500 bg-blue-50 p-6 my-8 rounded-r-lg italic text-slate-700 shadow-sm relative">
                                    <span className="absolute top-2 left-2 text-blue-200 text-4xl leading-none select-none">"</span>
                                    <div className="relative z-10">{children}</div>
                                </div>
                            ),
                            p: ({ children }) => <p className="leading-7 text-slate-600 mb-6">{children}</p>,
                        }}
                    >
                        {lesson.markdown}
                    </ReactMarkdown>

                    {/* Verification Section */}
                    {lesson.verifyScript && (
                        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center gap-6 w-full">
                            <div className="w-full max-w-2xl text-center">
                                <button
                                    onClick={handleVerify}
                                    disabled={verifying}
                                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all
                                        ${verifying ? 'bg-slate-100 text-slate-400' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30'}
                                    `}
                                >
                                    {verifying ? <Loader2 className="animate-spin" /> : <Zap className="fill-current" />}
                                    {verifying ? 'Verifying Solution...' : 'VERIFY SOLUTION'}
                                </button>

                                {verifyResult && (
                                    <div className={`mt-4 p-4 rounded-xl border-2 text-left animate-in zoom-in slide-in-from-top-2 duration-300
                                        ${verifyResult.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}
                                    `}>
                                        <div className="flex items-center gap-3 mb-2">
                                            {verifyResult.success ? <CheckCircle className="text-green-600" /> : <XCircle className="text-red-600" />}
                                            <h4 className={`font-bold ${verifyResult.success ? 'text-green-800' : 'text-red-800'}`}>
                                                {verifyResult.success ? 'Verification Passed!' : 'Verification Failed'}
                                            </h4>
                                        </div>
                                        <pre className="text-xs font-mono bg-white/50 p-2 rounded border border-black/5 overflow-x-auto whitespace-pre-wrap">
                                            {verifyResult.output}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Completion Reward Section */}
                    <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col items-center gap-6">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 font-mono uppercase tracking-tighter">Mission Accomplished?</h3>
                            <p className="text-slate-500 text-sm">Mark as complete to claim your <strong className="text-amber-500">100 XP</strong>.</p>
                        </div>
                        <button
                            onClick={handleCompletion}
                            disabled={isLessonCompleted(lesson.id)}
                            className={`flex items-center gap-3 px-8 py-4 rounded-full font-black transition-all transform active:scale-95 shadow-xl
                                ${isLessonCompleted(lesson.id)
                                    ? 'bg-green-50 text-green-600 border border-green-200 cursor-default shadow-none'
                                    : 'bg-black text-white hover:bg-slate-800'
                                }`}
                        >
                            {isLessonCompleted(lesson.id) ? (
                                <>
                                    <CheckCircle size={24} />
                                    <span>Completed (+100 XP)</span>
                                </>
                            ) : (
                                <>
                                    <Flame size={24} className="text-amber-500" />
                                    <span>MARK AS COMPLETE</span>
                                </>
                            )}
                        </button>
                    </div>
                </article>
            </main>

            {/* Collapsible Terminal */}
            <CollapsibleTerminal ref={terminalRef} isLoading={settingUp} />
        </div>
    );

}
