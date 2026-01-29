'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getLessonById, getLessons } from '@/data/lessons';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, PlayCircle } from 'lucide-react';
import LessonSelector from '@/components/LessonSelector';

export default function LessonPage() {
    const params = useParams();
    const id = params?.id as string;
    const lesson = getLessonById(id);
    const router = useRouter();
    const allLessons = getLessons();

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
                <button
                    onClick={() => router.push('/lab')}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md active:scale-95"
                >
                    <PlayCircle className="w-5 h-5" />
                    <span>Open Lab</span>
                </button>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto mt-10 px-6">
                <article className="prose prose-slate lg:prose-lg xl:prose-xl bg-white p-12 rounded-2xl shadow-lg border border-slate-100">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ className, children, ...props }: any) {
                                const match = /language-(\w+)/.exec(className || '');
                                const isInline = !match;

                                if (isInline) {
                                    return (
                                        <code className="bg-slate-100 text-pink-600 px-1.5 py-0.5 rounded-md text-[0.9em] font-mono border border-slate-200" {...props}>
                                            {children}
                                        </code>
                                    );
                                }

                                return (
                                    <div className="relative group my-6 rounded-lg overflow-hidden border border-slate-700 shadow-xl">
                                        <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2 text-xs text-slate-400 border-b border-slate-700 select-none">
                                            <span className="font-mono font-bold text-slate-300">{match?.[1].toUpperCase() || 'CODE'}</span>
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                            </div>
                                        </div>
                                        <SyntaxHighlighter
                                            style={vscDarkPlus}
                                            language={match?.[1]}
                                            PreTag="div"
                                            customStyle={{
                                                margin: 0,
                                                padding: '1.5rem',
                                                fontSize: '0.9rem',
                                                lineHeight: '1.6',
                                                backgroundColor: '#1e1e1e' // Match typical code block bg
                                            }}
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    </div>
                                );
                            },
                            // Add custom styles for other elements
                            h1: ({ children }) => <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4 border-b border-slate-200 pb-2">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">{children}</h3>,
                            blockquote: ({ children }) => (
                                <div className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6 rounded-r-lg italic text-slate-700">
                                    {children}
                                </div>
                            ),
                            ul: ({ children }) => <ul className="list-disc list-outside ml-6 space-y-2 text-slate-700">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal list-outside ml-6 space-y-2 text-slate-700">{children}</ol>,
                            p: ({ children }) => <p className="leading-relaxed text-slate-600 mb-6">{children}</p>,
                        }}
                    >
                        {lesson.markdown}
                    </ReactMarkdown>
                </article>
            </main>
        </div>
    );
}
