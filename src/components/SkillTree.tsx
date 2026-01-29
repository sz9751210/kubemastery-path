'use client';

import React, { useCallback, useMemo, useEffect } from 'react';
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

import { initialNodes, initialEdges } from '@/data/curriculum';
import SkillNode from './SkillNode';
import { useProgress } from '@/lib/useProgress';
import { useSRS } from '@/lib/useSRS';

const nodeTypes = {
    skillNode: SkillNode,
};

export default function SkillTree() {
    const { completedLessons } = useProgress();
    const { cards } = useSRS();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const router = useRouter();

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

            return {
                ...node,
                type: 'skillNode',
                data: {
                    ...node.data,
                    isCompleted: completedLessons.includes(node.id),
                    mastery: mastery,
                    // Infer category from position or id if not explicitly in data
                    category: parseInt(node.id) < 5 || ['12', '13'].includes(node.id) ? 'Novice' :
                        parseInt(node.id) < 9 || ['14', '15'].includes(node.id) ? 'Admin' :
                            parseInt(node.id) < 12 || ['16', '17'].includes(node.id) ? 'Security' : 'Expert'
                }
            };
        });
    }, [nodes, completedLessons, cards]);

    const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
        router.push(`/learn/${node.id}`);
    }, [router]);

    return (
        <div className="w-full h-[700px] border border-slate-200 rounded-2xl shadow-xl bg-slate-50/50 backdrop-blur-sm overflow-hidden">
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
    );
}
