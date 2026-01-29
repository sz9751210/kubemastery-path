import Terminal from '@/components/Terminal';

export default function LabPage() {
    return (
        <div className="flex h-screen w-full bg-slate-100 font-sans">
            {/* Sidebar / Instructions Panel */}
            <div className="w-1/3 min-w-[300px] border-r border-slate-200 bg-white flex flex-col">
                <div className="p-6 border-b border-slate-100">
                    <h1 className="text-xl font-bold text-slate-900">Lab: Expose Nginx Pod</h1>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mt-2">
                        CKA - Networking
                    </span>
                </div>

                <div className="p-6 overflow-y-auto flex-grow prose prose-slate">
                    <h3>Scenario</h3>
                    <p>
                        You have a running pod named <code>nginx-pod</code> in the default namespace.
                        However, it is currently isolated.
                    </p>

                    <h3>Task</h3>
                    <ol>
                        <li>Verify the pod is running.</li>
                        <li>Expose this pod as a Service named <code>nginx-svc</code> on port 80.</li>
                        <li>Use <code>NodePort</code> type.</li>
                    </ol>

                    <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-400 my-4 not-prose">
                        <p className="text-sm text-amber-800">
                            <strong>Hint:</strong> Use <code>kubectl expose pod ... --type=NodePort</code>
                        </p>
                    </div>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50">
                    <button className="w-full rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                        Verify Solution
                    </button>
                </div>
            </div>

            {/* Terminal Panel */}
            <div className="flex-grow bg-[#1e1e1e] flex flex-col">
                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-black">
                    <span className="text-xs text-gray-400 tracking-wider">TERMINAL - controlplane</span>
                    <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="flex-grow p-2 overflow-hidden relative">
                    <Terminal welcomeMessage="Welcome to KubeMastery Lab Environment [v1.30.0]" />
                </div>
            </div>
        </div>
    );
}
