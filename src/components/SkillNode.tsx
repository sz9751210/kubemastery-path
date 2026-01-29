'use client';

import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { CheckCircle2, Circle, Lock, Zap, Shield, Settings, Terminal, Box } from 'lucide-react';

const getCategoryIcon = (category: string) => {
    const cat = category.toUpperCase();
    if (cat.includes('CORE') || cat.includes('FOUNDATION')) return <Zap size={16} className="text-amber-500" />;
    if (cat.includes('CKA')) return <Settings size={16} className="text-blue-500" />;
    if (cat.includes('CKAD')) return <Box size={16} className="text-amber-600" />;
    if (cat.includes('CKS')) return <Shield size={16} className="text-red-500" />;
    if (cat.includes('EXPERT')) return <Terminal size={16} className="text-purple-500" />;
    return <Circle size={16} className="text-slate-400" />;
};

const SkillNode = ({ data, isConnectable }: NodeProps) => {
    const isCompleted = data.isCompleted;
    const category = data.category || 'CORE';
    const mastery = data.mastery || 0; // 0 to 100

    return (
        <div className={`px-4 py-3 rounded-xl border transition-all duration-300 shadow-lg group relative
            ${isCompleted
                ? 'bg-green-50/80 border-green-200 ring-1 ring-green-100 shadow-green-100/50'
                : 'bg-white/80 border-slate-200 hover:border-blue-300 hover:shadow-blue-100/50 backdrop-blur-md'
            }`}>

            {/* Mastery Indicator (Glow) */}
            {mastery > 0 && (
                <div
                    className="absolute -inset-1 bg-indigo-500 rounded-2xl blur opacity-20 transition-opacity group-hover:opacity-40"
                    style={{ opacity: mastery / 200 }}
                />
            )}

            <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-2 h-2 !bg-slate-300 border-none" />

            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg transition-colors relative ${isCompleted ? 'bg-green-100' : 'bg-slate-100 group-hover:bg-blue-100'}`}>
                    {isCompleted ? <CheckCircle2 size={16} className="text-green-600" /> : getCategoryIcon(category)}

                    {/* Tiny Mastery Ring */}
                    {mastery > 0 && (
                        <div className="absolute -top-1 -right-1 bg-indigo-600 border-2 border-white text-white rounded-full p-0.5 shadow-sm">
                            <Brain size={8} />
                        </div>
                    )}
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">{category}</span>
                        {mastery > 0 && <span className="text-[8px] font-black text-indigo-500 uppercase tracking-widest leading-none mb-1">{mastery}% Mastered</span>}
                    </div>
                    <span className={`text-sm font-bold tracking-tight ${isCompleted ? 'text-green-800' : 'text-slate-800'}`}>
                        {data.label}
                    </span>
                </div>
            </div>

            <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} className="w-2 h-2 !bg-slate-300 border-none" />
        </div>
    );
};

const Brain = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
    </svg>
);

export default memo(SkillNode);
