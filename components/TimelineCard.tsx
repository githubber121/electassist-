"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock } from "lucide-react";
import { ElectionPhase } from "@/lib/electionData";

export default function TimelineCard({ phase, index }: { phase: ElectionPhase; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline line and dot for mobile */}
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-700 flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-blue-500 mt-6 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      </div>

      <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
        {/* Empty space for alternating layout on desktop */}
        <div className="hidden md:block w-5/12" />

        {/* Timeline dot for desktop */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 shadow-[0_0_15px_rgba(59,130,246,1)] z-10" />

        {/* Card Content */}
        <motion.div
          layout
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full md:w-5/12 cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 rounded-2xl p-6 transition-all duration-300 group"
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="text-blue-400 font-mono text-sm font-semibold mb-2 block">Phase {phase.id}</span>
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                {phase.title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-700/50 p-2 rounded-full text-slate-300"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <p className="text-slate-400 leading-relaxed mb-4">{phase.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-900/50 w-fit px-3 py-1.5 rounded-lg border border-slate-800">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Typical duration: <strong className="text-slate-300">{phase.duration}</strong></span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
