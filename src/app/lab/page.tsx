'use client';

import React, { useEffect, useState, useRef, Suspense } from 'react';
import Terminal from '@/components/Terminal';
import { getLessonById } from '@/data/lessons';
import { useSearchParams, useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Loader2, CheckCircle, XCircle, ArrowLeft, RotateCw } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function LabContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const lessonId = searchParams?.get('lessonId');
    const lesson = lessonId ? getLessonById(lessonId) : undefined;

    const [settingUp, setSettingUp] = useState(false);
    const [setupResult, setSetupResult] = useState<{ success: boolean; message: string; output: string } | null>(null);
    const [verifying, setVerifying] = useState(false);
    const [verifyResult, setVerifyResult] = useState<{ success: boolean; message: string; output: string } | null>(null);

    const setupRunRef = useRef(false);

    // Initial Setup
    useEffect(() => {
        if (!setupRunRef.current) {
            handleSetup();
        }
    }, [lesson]);

    const handleSetup = async () => {
        // Use provided script or a default 'ping' script to ensure environment is reachable
        const scriptToRun = lesson?.setupScript || 'echo "Preparing environment..." && sleep 1 && echo "Environment Ready"';

        setupRunRef.current = true;
        setSettingUp(true);
        setSetupResult(null);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/setup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    script: scriptToRun,
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
                    mode: 'real'
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

    if (!lesson) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-100">
                <div className="text-center p-8 bg-white rounded-xl shadow-xl">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Lesson Not Found</h1>
                    <p className="text-slate-600 mb-6">No lesson ID provided or lesson does not exist.</p>
                    <button
                        onClick={() => router.back()}
                        className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    // Determine badge state
    let badgeText = 'Ready';
    let badgeColor = 'bg-slate-100 text-slate-700 ring-slate-600/20';

    if (settingUp) {
        badgeText = 'Provisioning...';
        badgeColor = 'bg-blue-50 text-blue-700 ring-blue-600/20 animate-pulse';
    } else if (setupResult) {
        if (setupResult.success) {
            badgeText = 'Environment Ready';
            badgeColor = 'bg-green-50 text-green-700 ring-green-600/20';
        } else {
            badgeText = 'Environment Error';
            badgeColor = 'bg-red-50 text-red-700 ring-red-600/20';
        }
    }

    return (
        <div className="flex h-screen w-full bg-slate-100 font-sans relative">

            {/* Loading Overlay */}
            {settingUp && (
                <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                    <Loader2 size={64} className="animate-spin text-blue-500 mb-6" />
                    <h2 className="text-3xl font-bold mb-2">Setting Up Your Lab Environment</h2>
                    <p className="text-slate-400">Provisioning resources... This may take a moment.</p>
                </div>
            )}

            {/* Sidebar / Instructions Panel */}
            <div className="w-1/3 min-w-[400px] border-r border-slate-200 bg-white flex flex-col z-10">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft size={16} />
                        Back to Lesson
                    </button>
                    <div className="flex gap-2">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${badgeColor}`}>
                            {badgeText}
                        </span>
                    </div>
                </div>

                <div className="p-6 border-b border-slate-100">
                    <h1 className="text-2xl font-bold text-slate-900 leading-tight">{lesson.title}</h1>
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mt-3">
                        {lesson.category}
                    </span>
                </div>

                <div className="p-6 overflow-y-auto flex-grow prose prose-slate max-w-none">
                    {/* Setup Error Message */}
                    {setupResult && !setupResult.success && (
                        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
                            <h4 className="font-bold flex items-center gap-2 mb-1">
                                <XCircle size={16} /> Setup Failed
                            </h4>
                            <p>{setupResult.message}</p>
                            <pre className="mt-2 p-2 bg-white/50 rounded text-xs overflow-x-auto">{setupResult.output}</pre>
                            <button
                                onClick={handleSetup}
                                className="mt-3 text-xs font-bold underline hover:no-underline"
                            >
                                Retry Setup
                            </button>
                        </div>
                    )}

                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ className, children, ...props }: any) {
                                const match = /language-(\w+)/.exec(className || '');
                                return match ? (
                                    <SyntaxHighlighter
                                        style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        customStyle={{ margin: '0', borderRadius: '0.5rem', fontSize: '0.85em', padding: '1rem' }}
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className="bg-slate-100 text-pink-600 px-1 py-0.5 rounded font-mono text-[0.9em]" {...props}>
                                        {children}
                                    </code>
                                );
                            },
                            // Style specific elements to match the design
                            h1: ({ children }) => <h2 className="text-xl font-bold mt-6 mb-4">{children}</h2>,
                            h2: ({ children }) => <h3 className="text-lg font-bold mt-5 mb-3">{children}</h3>,
                            blockquote: ({ children }) => <div className="border-l-4 border-blue-500 bg-blue-50 p-4 my-4 not-italic text-slate-700">{children}</div>
                        }}
                    >
                        {lesson.markdown}
                    </ReactMarkdown>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-4">
                    {verifyResult && (
                        <div className={`p-4 rounded-lg border flex items-start gap-3 animate-in slide-in-from-bottom-2
                            ${verifyResult.success ? 'bg-green-50 border-green-200 text-green-900' : 'bg-red-50 border-red-200 text-red-900'}
                        `}>
                            {verifyResult.success ? <CheckCircle className="shrink-0 text-green-600" /> : <XCircle className="shrink-0 text-red-600" />}
                            <div className="flex-grow overflow-hidden">
                                <h4 className="font-bold text-sm">{verifyResult.success ? 'Success!' : 'Verification Failed'}</h4>
                                <pre className="mt-1 text-xs font-mono opacity-80 whitespace-pre-wrap break-all max-h-32 overflow-y-auto">
                                    {verifyResult.output}
                                </pre>
                            </div>
                        </div>
                    )}

                    {/* Quiz UI */}
                    {lesson.quizzes && lesson.quizzes.length > 0 ? (
                        <div className="flex flex-col gap-4">
                            {lesson.quizzes.map((quiz, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                                    <h3 className="font-bold text-slate-800 mb-3">{idx + 1}. {quiz.question}</h3>
                                    <div className="flex flex-col gap-2">
                                        {quiz.options.map((option, optIdx) => {
                                            const isSelected = verifyResult?.output === option;
                                            const isCorrect = quiz.answer === option;
                                            let btnColor = "bg-slate-50 border-slate-200 hover:bg-slate-100";
                                            if (verifyResult && isSelected) {
                                                btnColor = isCorrect ? "bg-green-100 border-green-300 text-green-800" : "bg-red-50 border-red-200 text-red-800";
                                            }

                                            return (
                                                <button
                                                    key={optIdx}
                                                    onClick={() => {
                                                        const isCorrect = quiz.answer === option;
                                                        setVerifyResult({
                                                            success: isCorrect,
                                                            message: isCorrect ? "Correct!" : "Incorrect",
                                                            output: option
                                                        });
                                                    }}
                                                    className={`w-full text-left px-4 py-3 rounded-md border text-sm transition-all flex justify-between items-center ${btnColor}`}
                                                >
                                                    {option}
                                                    {verifyResult && isSelected && isCorrect && <CheckCircle size={16} className="text-green-600" />}
                                                    {verifyResult && isSelected && !isCorrect && <XCircle size={16} className="text-red-600" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {verifyResult?.output && quiz.options.includes(verifyResult.output) && (
                                        <div className="mt-3 text-xs text-slate-500 italic">
                                            {verifyResult.success ? "Great job!" : "Try again."}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Standard Verify Button for Lab Tasks */
                        <div className="flex gap-3">
                            <button
                                onClick={handleSetup}
                                disabled={settingUp}
                                className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                <RotateCw size={16} className={settingUp ? "animate-spin" : ""} />
                                Reset Lab
                            </button>
                            <button
                                onClick={handleVerify}
                                disabled={verifying || !lesson.verifyScript}
                                className={`flex-[2] rounded-lg px-4 py-3 text-sm font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2 transition-all
                                    ${!lesson.verifyScript ? 'bg-slate-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500 focus:ring-green-600'}
                                `}
                            >
                                {verifying && <Loader2 size={16} className="animate-spin" />}
                                {verifying ? 'Verifying...' : 'Verify Solution'}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Terminal Panel */}
            <div className="flex-grow bg-[#1e1e1e] flex flex-col min-w-0">
                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-black shrink-0">
                    <span className="text-xs text-gray-400 tracking-wider font-mono">TERMINAL - controlplane</span>
                    <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="flex-grow p-2 overflow-hidden relative">
                    <Terminal welcomeMessage={`Welcome to KubeMastery Lab - ${lesson.title}\nEnvironment Ready. Good luck!`} />
                </div>
            </div>
        </div>
    );
}

export default function LabPage() {
    return (
        <Suspense fallback={
            <div className="flex h-screen items-center justify-center bg-slate-100">
                <Loader2 size={64} className="animate-spin text-blue-500" />
            </div>
        }>
            <LabContent />
        </Suspense>
    );
}
