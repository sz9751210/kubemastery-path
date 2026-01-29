'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface ComponentProps {
    visible: boolean;
}

interface Message {
    role: 'bot' | 'user';
    content: string;
}

const TutorChat: React.FC<ComponentProps> = ({ visible }) => {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', content: "Hello! I'm Kube-Tutor. I'm here to help you debug and understand concepts using the Socratic method. I won't give you the answer, but I'll guide you there. How can I help?" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, visible]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput('');
        setIsTyping(true);

        // Simulate AI Response (Mock for now)
        setTimeout(() => {
            setIsTyping(false);
            let response = "That's an interesting observation. Why do you think that happened?"; // Fallback

            if (userMsg.toLowerCase().includes('pod') && userMsg.toLowerCase().includes('fail')) {
                response = "I see a pod failure. Have you checked the events for that pod using `kubectl describe`? What do they say?";
            } else if (userMsg.toLowerCase().includes('service')) {
                response = "Services rely on selectors to find their target pods. Do the labels on your pod match the selector on the service strictly?";
            } else if (userMsg.toLowerCase().includes('error')) {
                response = "Errors are just clues. Can you paste the exact error message here so we can analyze the specific failure code together?";
            }

            setMessages(prev => [...prev, { role: 'bot', content: response }]);
        }, 1500);
    };

    if (!visible) return null;

    return (
        <div className="flex flex-col h-full bg-[#1e1e1e] border-l border-slate-700 w-96 shadow-xl">
            {/* Header */}
            <div className="h-10 bg-[#2d2d2d] flex items-center px-4 border-b border-black select-none">
                <Bot size={16} className="text-blue-400 mr-2" />
                <span className="text-xs font-bold text-slate-200 tracking-wider">KUBE-TUTOR AI</span>
                <Sparkles size={12} className="text-yellow-400 ml-auto animate-pulse" />
            </div>

            {/* Chat Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 font-sans text-sm" ref={scrollRef}>
                {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] rounded-lg p-3 ${msg.role === 'user'
                                ? 'bg-blue-600 text-white rounded-br-none'
                                : 'bg-slate-700 text-slate-200 rounded-bl-none'
                            }`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-slate-700 rounded-lg p-3 rounded-bl-none flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#2d2d2d] border-t border-black pb-8 md:pb-3"> {/* Extra padding for mobile if needed, but this is desk */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask for a hint..."
                        className="flex-grow bg-[#1e1e1e] border border-slate-600 rounded-md px-3 py-2 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button
                        onClick={handleSend}
                        className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
                    >
                        <Send size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TutorChat;
