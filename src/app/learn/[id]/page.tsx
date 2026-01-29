'use client';

import React, { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getLessonById, getLessons } from '@/data/lessons';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, PlayCircle, Copy, Check, Play, Terminal } from 'lucide-react';
import LessonSelector from '@/components/LessonSelector';
import CollapsibleTerminal, { CollapsibleTerminalRef } from '@/components/CollapsibleTerminal';

export default function LessonPage() {
    const params = useParams();
    const id = params?.id as string;
    const lesson = getLessonById(id);
    const router = useRouter();
    const allLessons = getLessons();
    const terminalRef = useRef<CollapsibleTerminalRef>(null);

    const [copiedValues, setCopiedValues] = useState<Record<string, boolean>>({});

    const handleCopy = (code: string, blockId: string) => {
        navigator.clipboard.writeText(code);
        setCopiedValues({ ...copiedValues, [blockId]: true });
        setTimeout(() => {
            setCopiedValues(prev => ({ ...prev, [blockId]: false }));
        }, 2000);
    };

    const handleRun = (code: string) => {
        if (terminalRef.current) {
            terminalRef.current.write(code); // Write to terminal
            terminalRef.current.write('\r'); // Execute (ENTER)
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
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10 px-6 py-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push('/')}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-700"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">{lesson.category} • {lesson.duration}</span>
                        <LessonSelector currentLessonId={lesson.id} lessons={allLessons} />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => terminalRef.current?.toggle()}
                        className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition-all text-sm"
                    >
                        <Terminal className="w-4 h-4" />
                        <span>Terminal</span>
                    </button>
                    <button
                        onClick={() => router.push('/lab')}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md active:scale-95 text-sm"
                    >
                        <PlayCircle className="w-5 h-5" />
                        <span>Open Lab</span>
                    </button>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto mt-10 px-6 mb-32">
                <article className="prose prose-slate lg:prose-lg xl:prose-xl bg-white p-12 rounded-2xl shadow-lg border border-slate-100">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ className, children, ...props }: any) {
                                const match = /language-(\w+)/.exec(className || '');
                                const isInline = !match;
                                const codeContent = String(children).replace(/\n$/, '');
                                const blockId = Math.random().toString(36).substr(2, 9); // Simple ID for copy state
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
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
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
                                                    onClick={() => handleCopy(codeContent, codeContent)} // Use content as key for simplicity in loop, or unique ID
                                                    className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-md hover:bg-white/10"
                                                    title="Copy code"
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
                            // Custom Heading Styles with IDs for anchors if needed
                            h1: ({ children }) => <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-8 pb-4 border-b border-slate-100">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                                {children}
                            </h2>,
                            h3: ({ children }) => <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">{children}</h3>,
                            blockquote: ({ children }) => (
                                <div className="border-l-4 border-blue-500 bg-blue-50 p-6 my-8 rounded-r-lg italic text-slate-700 shadow-sm relative">
                                    <span className="absolute top-2 left-2 text-blue-200 text-4xl leading-none select-none">"</span>
                                    <div className="relative z-10">{children}</div>
                                </div>
                            ),
                            ul: ({ children }) => <ul className="list-disc list-outside ml-6 space-y-3 text-slate-700 my-6">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal list-outside ml-6 space-y-3 text-slate-700 my-6">{children}</ol>,
                            p: ({ children }) => <p className="leading-7 text-slate-600 mb-6">{children}</p>,
                            // Add table styling
                            table: ({ children }) => <div className="overflow-x-auto my-8 border border-slate-200 rounded-lg"><table className="w-full text-left text-sm text-slate-600">{children}</table></div>,
                            thead: ({ children }) => <thead className="bg-slate-50 text-slate-700 uppercase font-bold text-xs border-b border-slate-200">{children}</thead>,
                            tbody: ({ children }) => <tbody className="divide-y divide-slate-100">{children}</tbody>,
                            tr: ({ children }) => <tr className="hover:bg-slate-50 transition-colors">{children}</tr>,
                            th: ({ children }) => <th className="px-6 py-3">{children}</th>,
                            td: ({ children }) => <td className="px-6 py-4">{children}</td>,
                            a: ({ href, children }) => <a href={href} className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium">{children}</a>
                        }}
                    >
                        {lesson.markdown}
                    </ReactMarkdown>
                </article>
            </main>

            {/* Collapsible Terminal */}
            <CollapsibleTerminal ref={terminalRef} />
        </div>
    );
}
