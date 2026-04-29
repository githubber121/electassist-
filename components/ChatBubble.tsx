"use client";

import { motion } from "framer-motion";
import { User, Bot } from "lucide-react";
import { Message } from "ai/react";

export default function ChatBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-6`}
    >
      <div className={`flex max-w-[80%] md:max-w-[70%] gap-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isUser ? "bg-blue-600" : "bg-slate-700 border border-slate-600"}`}>
          {isUser ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-blue-400" />}
        </div>
        
        <div className={`p-4 rounded-2xl ${
          isUser 
            ? "bg-blue-600 text-white rounded-tr-sm" 
            : "bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-sm shadow-lg"
        }`}>
          <div className="whitespace-pre-wrap leading-relaxed">
            {message.content}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
