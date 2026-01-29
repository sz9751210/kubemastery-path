'use client';

import React, { useCallback } from 'react';
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

export default function SkillTree() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const router = useRouter();

    const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
        console.log('Clicked node:', node.data.label);
        router.push(`/learn/${node.id}`);
    }, [router]);

    return (
        <div className="w-full h-[600px] border rounded-lg shadow-sm bg-slate-50">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                minZoom={0.5}
                maxZoom={1.5}
                fitView
                onNodeClick={onNodeClick}
                attributionPosition="bottom-right"
            >
                <Controls />
                <MiniMap zoomable pannable />
                <Background gap={12} size={1} />
            </ReactFlow>
        </div>
    );
}
