"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, CalendarClock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />

      <motion.div 
        className="max-w-3xl w-full text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="inline-block mb-6 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium text-slate-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Your Guide to Democracy
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400">
          Understand How<br />Elections Work
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Navigate the democratic process with clarity. From registration to results, we break down every step of the election timeline.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/timeline" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <CalendarClock className="w-5 h-5" />
              View Election Timeline
            </motion.button>
          </Link>
          
          <Link href="/chat" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Ask the Assistant
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
