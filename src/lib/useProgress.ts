'use client';

import { useState, useEffect } from 'react';

const PROGRESS_KEY = 'kubemastery_progress';

export const useProgress = () => {
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem(PROGRESS_KEY);
        if (stored) {
            try {
                setCompletedLessons(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse progress:', e);
            }
        }
    }, []);

    const markAsComplete = (lessonId: string) => {
        setCompletedLessons(prev => {
            if (prev.includes(lessonId)) return prev;
            const updated = [...prev, lessonId];
            localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const isCompleted = (lessonId: string) => completedLessons.includes(lessonId);

    return { completedLessons, markAsComplete, isCompleted };
};
