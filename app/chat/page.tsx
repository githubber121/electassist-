"use client";

import { useChat } from "ai/react";
import { Send, Loader2, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ChatBubble from "@/components/ChatBubble";

const STARTER_QUESTIONS = [
  "How does the election process work?",
  "How do I register to vote?",
  "What happens on voting day?",
  "How are winners decided?",
];

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, setInput, isLoading, append } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStarterClick = (question: string) => {
    append({
      role: "user",
      content: question,
    });
  };

  return (
    <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4 md:p-6 h-[calc(100vh-4rem)]">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-blue-400" aria-hidden="true" />
          Ask ElectAssist
        </h1>
        <p className="text-slate-400 text-sm mt-2">Your neutral guide to the democratic process.</p>
      </div>

      <div 
        className="flex-1 overflow-y-auto bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col custom-scrollbar"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <BotPlaceholder />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8 w-full max-w-2xl">
              {STARTER_QUESTIONS.map((q, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleStarterClick(q)}
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white p-3 rounded-xl text-sm text-left transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:border-blue-500/50"
                >
                  {q}
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            {messages.map((m) => (
              <ChatBubble key={m.id} message={m} />
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-slate-500 mb-6 ml-4" aria-live="assertive">
                <Loader2 className="w-4 h-4 animate-spin text-blue-500" aria-hidden="true" />
                <span className="text-sm">ElectAssist is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="mt-4">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input
            className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white rounded-full pl-6 pr-14 py-4 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-lg transition-all"
            value={input}
            placeholder="Ask a question about elections..."
            aria-label="Type your message"
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-full transition-colors"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}

function BotPlaceholder() {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center text-center space-y-4"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
        <Sparkles className="w-10 h-10 text-white" aria-hidden="true" />
      </div>
      <p className="text-slate-300 max-w-md">
        Hello! I'm ElectAssist. I can help explain election rules, deadlines, and how to participate in the democratic process.
      </p>
    </motion.div>
  );
}
