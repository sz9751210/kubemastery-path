'use client';

import React, { useState } from 'react';
import { CheckCircle, Circle, Play, RefreshCw, AlertTriangle } from 'lucide-react';

interface TaskResult {
    taskId: string;
    completed: boolean;
    message?: string;
}

interface LabSidebarProps {
    labId: string;
    labData?: any;
    onVerify: () => Promise<TaskResult[]>;
}

export default function LabSidebar({ labId, labData, onVerify }: LabSidebarProps) {
    const [results, setResults] = useState<Record<string, TaskResult>>({});
    const [verifying, setVerifying] = useState(false);

    const handleVerify = async () => {
        setVerifying(true);
        try {
            const taskResults = await onVerify();
            const resultMap: Record<string, TaskResult> = {};
            taskResults.forEach(r => resultMap[r.taskId] = r);
            setResults(resultMap);
        } catch (e) {
            console.error("Verification failed", e);
        } finally {
            setVerifying(false);
        }
    };

    if (!labData) return <div className="p-4 text-slate-500">Loading lab...</div>;

    const allPassed = labData.tasks.every((t: any) => results[t.id]?.completed);

    return (
        <div className="h-full flex flex-col bg-slate-900 border-r border-slate-700 w-full md:w-96 text-slate-100">
            {/* Header */}
            <div className="p-6 border-b border-slate-700 bg-slate-800">
                <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <span className="bg-blue-600 px-2 py-0.5 rounded text-xs">LAB</span>
                    {labData.title}
                </h2>
                <p className="text-sm text-slate-400">{labData.description}</p>
            </div>

            {/* Task List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {labData.tasks.map((task: any, index: number) => {
                    const status = results[task.id];
                    return (
                        <div key={task.id} className={`p-4 rounded-xl border transition-all ${status?.completed ? 'bg-green-900/10 border-green-500/50' : 'bg-slate-800 border-slate-700'}`}>
                            <div className="flex items-start gap-3">
                                <div className="mt-1">
                                    {status?.completed ? (
                                        <CheckCircle className="text-green-500" size={20} />
                                    ) : (
                                        <Circle className="text-slate-600" size={20} />
                                    )}
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-sm mb-1 text-slate-200">
                                        Step {index + 1}
                                    </h4>
                                    <p className="text-sm text-slate-400 mb-2 leading-relaxed">
                                        {task.description}
                                    </p>
                                    {task.hint && (
                                        <div className="bg-black/30 p-2 rounded text-xs font-mono text-slate-500">
                                            Tip: {task.hint}
                                        </div>
                                    )}
                                    {status && !status.completed && status.message && (
                                        <div className="mt-2 flex items-center gap-2 text-xs text-red-400 bg-red-900/20 p-2 rounded">
                                            <AlertTriangle size={12} />
                                            {status.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Action Bar */}
            <div className="p-6 border-t border-slate-700 bg-slate-800 flex flex-col gap-3">
                <button
                    onClick={handleVerify}
                    disabled={verifying}
                    className={`w-full py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${allPassed
                            ? 'bg-green-500 hover:bg-green-400 text-white animate-pulse'
                            : 'bg-blue-600 hover:bg-blue-500 text-white'
                        }`}
                >
                    {verifying ? <RefreshCw className="animate-spin" /> : allPassed ? <CheckCircle /> : <Play />}
                    {verifying ? 'Verifying...' : allPassed ? 'LAB COMPLETED!' : 'Verify My Work'}
                </button>
            </div>
        </div>
    );
}
