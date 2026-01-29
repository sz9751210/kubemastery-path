'use client';

import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { CheckCircle2, Circle, Lock, Zap, Shield, Settings, Terminal } from 'lucide-react';

const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Novice': return <Zap size={16} className="text-amber-500" />;
        case 'Admin': return <Settings size={16} className="text-blue-500" />;
        case 'Security': return <Shield size={16} className="text-red-500" />;
        case 'Expert': return <Terminal size={16} className="text-purple-500" />;
        default: return <Circle size={16} className="text-slate-400" />;
    }
};

const SkillNode = ({ data, isConnectable }: NodeProps) => {
    const isCompleted = data.isCompleted;
    const category = data.category || 'Novice';

    return (
        <div className={`px-4 py-3 rounded-xl border transition-all duration-300 shadow-lg group
            ${isCompleted
                ? 'bg-green-50/80 border-green-200 ring-1 ring-green-100 shadow-green-100/50'
                : 'bg-white/80 border-slate-200 hover:border-blue-300 hover:shadow-blue-100/50 backdrop-blur-md'
            }`}>

            <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-2 h-2 !bg-slate-300 border-none" />

            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg transition-colors ${isCompleted ? 'bg-green-100' : 'bg-slate-100 group-hover:bg-blue-100'}`}>
                    {isCompleted ? <CheckCircle2 size={16} className="text-green-600" /> : getCategoryIcon(category)}
                </div>

                <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">{category}</span>
                    <span className={`text-sm font-bold tracking-tight ${isCompleted ? 'text-green-800' : 'text-slate-800'}`}>
                        {data.label}
                    </span>
                </div>
            </div>

            <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} className="w-2 h-2 !bg-slate-300 border-none" />

            {/* Animated background glow on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-10 transition duration-300 -z-10"></div>
        </div>
    );
};

export default memo(SkillNode);
