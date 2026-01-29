import { useState, useEffect } from 'react';

export interface Flashcard {
    id: string;
    lessonId: string;
    question: string;
    answer: string;
    // SRS Data
    interval: number; // in days
    easeFactor: number;
    nextReview: number; // timestamp
    consecutiveCorrect: number;
    status: 'new' | 'learning' | 'reviewing' | 'mastered';
}

interface SRSState {
    cards: Record<string, Flashcard>;
    lastSync: number;
}

const INITIAL_STATE: SRSState = {
    cards: {},
    lastSync: Date.now(),
};

const STORAGE_KEY = 'kubemastery_srs';

// Simple SM-2 like algorithm
const calculateSRS = (card: Flashcard, quality: number) => {
    let { interval, easeFactor, consecutiveCorrect } = card;

    if (quality >= 3) {
        // Correct
        if (consecutiveCorrect === 0) {
            interval = 1;
        } else if (consecutiveCorrect === 1) {
            interval = 6;
        } else {
            interval = Math.round(interval * easeFactor);
        }
        consecutiveCorrect++;

        // Adjust ease factor
        easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        if (easeFactor < 1.3) easeFactor = 1.3;
    } else {
        // Incorrect
        consecutiveCorrect = 0;
        interval = 1;
        easeFactor = Math.max(1.3, easeFactor - 0.2);
    }

    const nextReview = Date.now() + (interval * 24 * 60 * 60 * 1000);

    return {
        ...card,
        interval,
        easeFactor,
        nextReview,
        consecutiveCorrect,
        status: interval > 30 ? 'mastered' : 'reviewing' as any
    };
};

export const useSRS = () => {
    const [state, setState] = useState<SRSState>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : INITIAL_STATE;
        }
        return INITIAL_STATE;
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    const addCardsForLesson = (lessonId: string, cards: { question: string, answer: string }[]) => {
        setState(prev => {
            const newCards = { ...prev.cards };
            cards.forEach((c, idx) => {
                const id = `${lessonId}_${idx}`;
                if (!newCards[id]) {
                    newCards[id] = {
                        id,
                        lessonId,
                        question: c.question,
                        answer: c.answer,
                        interval: 0,
                        easeFactor: 2.5,
                        nextReview: Date.now(),
                        consecutiveCorrect: 0,
                        status: 'new',
                    };
                }
            });
            return { ...prev, cards: newCards };
        });
    };

    const reviewCard = (cardId: string, quality: number) => {
        setState(prev => {
            const card = prev.cards[cardId];
            if (!card) return prev;

            const updatedCard = calculateSRS(card, quality);
            return {
                ...prev,
                cards: { ...prev.cards, [cardId]: updatedCard }
            };
        });
    };

    const getDueCards = () => {
        const now = Date.now();
        return Object.values(state.cards).filter(c => c.nextReview <= now);
    };

    return {
        cards: state.cards,
        dueCards: getDueCards(),
        addCardsForLesson,
        reviewCard,
    };
};
