'use client';

import { useState, useEffect } from 'react';

const GAME_KEY = 'kubemastery_game_state';

interface GameState {
    xp: number;
    level: number;
    streak: number;
    lastLogin: string; // ISO Date
}

const INITIAL_STATE: GameState = {
    xp: 0,
    level: 1,
    streak: 0,
    lastLogin: new Date().toISOString(),
};

// Simple level formula: Level = floor(sqrt(XP / 100)) + 1
// XP needed for level L: 100 * (L-1)^2
const calculateLevel = (xp: number) => Math.floor(Math.sqrt(xp / 100)) + 1;

export const useGame = () => {
    const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
    const [showLevelUp, setShowLevelUp] = useState(false);
    const [xpGained, setXpGained] = useState<number | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem(GAME_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                // Check streak logic here (if last login was yesterday, streak++, if older, streak=1)
                setGameState(parsed);
            } catch (e) {
                console.error('Failed to parse game state:', e);
            }
        }
    }, []);

    const saveState = (newState: GameState) => {
        setGameState(newState);
        localStorage.setItem(GAME_KEY, JSON.stringify(newState));
    };

    const addXp = (amount: number) => {
        setGameState(prev => {
            const newXp = prev.xp + amount;
            const newLevel = calculateLevel(newXp);
            const levelUp = newLevel > prev.level;

            if (levelUp) {
                setShowLevelUp(true);
                setTimeout(() => setShowLevelUp(false), 5000);
            }

            setXpGained(amount);
            setTimeout(() => setXpGained(null), 2000); // Hide XP pop version

            const newState = {
                ...prev,
                xp: newXp,
                level: newLevel,
            };
            saveState(newState);
            return newState;
        });
    };

    const getXpProgressProp = () => {
        const currentLevelXp = 100 * Math.pow(gameState.level - 1, 2);
        const nextLevelXp = 100 * Math.pow(gameState.level, 2);
        const progress = ((gameState.xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100;
        return Math.min(Math.max(progress, 0), 100);
    };

    return {
        gameState,
        addXp,
        showLevelUp,
        xpGained,
        xpProgress: getXpProgressProp()
    };
};
