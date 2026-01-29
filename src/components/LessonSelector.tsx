'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Check, Lock } from 'lucide-react';
import { Lesson } from '@/data/lessons';

interface LessonSelectorProps {
    currentLessonId: string;
    lessons: Record<string, Lesson>;
}

export default function LessonSelector({ currentLessonId, lessons }: LessonSelectorProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState(false);

    // Group lessons by category
    const groupedLessons = Object.values(lessons).reduce((acc, lesson) => {
        if (!acc[lesson.category]) {
            acc[lesson.category] = [];
        }
        acc[lesson.category].push(lesson);
        return acc;
    }, {} as Record<string, Lesson[]>);

    const categories: ('CORE' | 'CKA/CKAD' | 'CKS' | 'EXPERT')[] = ['CORE', 'CKA/CKAD', 'CKS', 'EXPERT'];

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full items-center justify-between gap-x-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 transition-all border border-slate-100 min-w-[240px]"
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="truncate max-w-[200px]">{lessons[currentLessonId]?.title || 'Select Lesson'}</span>
                    <ChevronDown className={`-mr-1 h-4 w-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute left-0 z-20 mt-2 w-80 origin-top-left rounded-xl bg-white shadow-xl ring-1 ring-black/5 focus:outline-none max-h-[80vh] overflow-y-auto border border-slate-100 animate-in fade-in zoom-in-95 duration-100"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="py-2" role="none">
                        {categories.map((category) => {
                            const categoryLessons = groupedLessons[category];
                            if (!categoryLessons) return null;

                            let accentColor = 'bg-slate-50 text-slate-500';
                            if (category === 'CORE') accentColor = 'bg-emerald-50 text-emerald-600 border-l-2 border-emerald-400';
                            if (category === 'CKA/CKAD') accentColor = 'bg-blue-50 text-blue-600 border-l-2 border-blue-400';
                            if (category === 'CKS') accentColor = 'bg-red-50 text-red-600 border-l-2 border-red-400';
                            if (category === 'EXPERT') accentColor = 'bg-purple-50 text-purple-600 border-l-2 border-purple-400';

                            return (
                                <div key={category} className="mb-2 last:mb-0">
                                    <div className={`px-4 py-1.5 text-[0.65rem] font-black uppercase tracking-widest ${accentColor}`}>
                                        {category}
                                    </div>
                                    {categoryLessons.map((lesson) => (
                                        <button
                                            key={lesson.id}
                                            onClick={() => {
                                                router.push(`/learn/${lesson.id}`);
                                                setIsOpen(false);
                                            }}
                                            className={`
                          block w-full text-left px-4 py-3 text-sm transition-colors border-l-2
                          ${lesson.id === currentLessonId
                                                    ? 'bg-primary/5 border-primary text-primary font-medium'
                                                    : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                        `}
                                            role="menuitem"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="truncate">{lesson.title}</span>
                                                {lesson.id === currentLessonId && <Check className="w-3.5 h-3.5" />}
                                            </div>
                                            <span className="text-xs text-slate-400 mt-0.5 block">{lesson.duration}</span>
                                        </button>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
