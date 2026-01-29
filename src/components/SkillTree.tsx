'use client';

import React, { useCallback, useMemo, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Node,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { getNodesForChapter, getEdgesForChapter, Chapter } from '@/data/curriculum';
import { lessons } from '@/data/lessons';
import SkillNode from './SkillNode';
import { useProgress } from '@/lib/useProgress';
import { useSRS } from '@/lib/useSRS';
import { Layers, Shield, Zap, Box } from 'lucide-react';

const nodeTypes = {
    skillNode: SkillNode,
};

const chapters: { id: Chapter; label: string; icon: React.ReactNode; color: string }[] = [
    { id: 'cka', label: 'CKA (Admin)', icon: <Layers size={16} />, color: 'bg-blue-100 text-blue-700' },
    { id: 'ckad', label: 'CKAD (Dev)', icon: <Box size={16} />, color: 'bg-amber-100 text-amber-700' },
    { id: 'cks', label: 'CKS (Security)', icon: <Shield size={16} />, color: 'bg-red-100 text-red-700' },
    { id: 'internals', label: 'Internals (Deep Dive)', icon: <Layers size={16} />, color: 'bg-slate-100 text-slate-700' },
    { id: 'all', label: 'All (Student)', icon: <Zap size={16} />, color: 'bg-purple-100 text-purple-700' },
];

export default function SkillTree() {
    const { completedLessons } = useProgress();
    const { cards } = useSRS();
    const [currentChapter, setCurrentChapter] = useState<Chapter>('all');

    // Initialize with All
    const [nodes, setNodes, onNodesChange] = useNodesState(getNodesForChapter('all'));
    const [edges, setEdges, onEdgesChange] = useEdgesState(getEdgesForChapter('all'));

    const router = useRouter();

    // Effect to switch chapters
    useEffect(() => {
        setNodes(getNodesForChapter(currentChapter));
        setEdges(getEdgesForChapter(currentChapter));
    }, [currentChapter, setNodes, setEdges]);

    const allLessonData = useMemo(() => lessons, []);

    // Map initial nodes to include progress state and custom type
    const styledNodes = useMemo(() => {
        const cardArray = Object.values(cards);

        return nodes.map(node => {
            const lessonCards = cardArray.filter(c => c.lessonId === node.id);
            let mastery = 0;
            if (lessonCards.length > 0) {
                const totalMastery = lessonCards.reduce((acc, c) => acc + Math.min(100, (c.consecutiveCorrect * 20)), 0);
                mastery = Math.round(totalMastery / lessonCards.length);
            }

            const lessonDetail = allLessonData[node.id];

            return {
                ...node,
                type: 'skillNode',
                data: {
                    ...node.data,
                    isCompleted: completedLessons.includes(node.id),
                    mastery: mastery,
                    // Use chapter as category hint if needed, but the explicit mapping logic was:
                    // category: parseInt(node.id) < 5 ...
                    // We can simplify or keep relying on node props if passed.
                    // For now, let's keep it simple or just pass the chapter ID if we want to color code by chapter.
                    category: lessonDetail ? lessonDetail.category : (currentChapter === 'all' ? 'FOUNDATION' : currentChapter.toUpperCase())
                }
            };
        });
    }, [nodes, completedLessons, cards, currentChapter, allLessonData]);

    const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
        router.push(`/learn/${node.id}`);
    }, [router]);

    return (
        <div className="flex flex-col gap-4">
            {/* Chapter Tabs */}
            <div className="flex gap-2 p-1 bg-slate-100 rounded-xl w-fit self-center shadow-inner">
                {chapters.map((chapter) => (
                    <button
                        key={chapter.id}
                        onClick={() => setCurrentChapter(chapter.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentChapter === chapter.id
                            ? 'bg-white shadow-sm text-slate-800 scale-105'
                            : 'text-slate-500 hover:bg-white/50 hover:text-slate-700'
                            }`}
                    >
                        <span className={currentChapter === chapter.id ? chapter.color.replace('bg-', 'text-') : ''}>{chapter.icon}</span>
                        {chapter.label}
                    </button>
                ))}
            </div>

            <div className="w-full h-[600px] border border-slate-200 rounded-2xl shadow-xl bg-slate-50/50 backdrop-blur-sm overflow-hidden relative">
                <div className={`absolute top-0 left-0 w-full h-1 ${currentChapter === 'cka' ? 'bg-blue-500' :
                    currentChapter === 'ckad' ? 'bg-amber-500' :
                        currentChapter === 'cks' ? 'bg-red-500' :
                            currentChapter === 'internals' ? 'bg-slate-500' : 'bg-purple-500'
                    } z-10`} />

                <ReactFlow
                    nodes={styledNodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    minZoom={0.5}
                    maxZoom={1.5}
                    fitView
                    onNodeClick={onNodeClick}
                    attributionPosition="bottom-right"
                >
                    <Controls className="bg-white border-slate-200 shadow-sm" />
                    <MiniMap
                        zoomable
                        pannable
                        nodeColor={(node) => {
                            if (node.data?.isCompleted) return '#22c55e';
                            return '#cbd5e1';
                        }}
                        className="bg-white border-slate-200 rounded-lg shadow-sm"
                    />
                    <Background gap={20} size={1} color="#e2e8f0" />
                </ReactFlow>
            </div>
        </div>
    );
}
