"use client";

import { motion } from "framer-motion";
import TimelineCard from "@/components/TimelineCard";
import { electionTimeline } from "@/lib/electionData";

export default function TimelinePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
          The Election Journey
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Explore the seven crucial phases that make up a universal democratic election process. Click on any phase to learn more.
        </p>
      </motion.div>

      <div className="relative">
        {/* Desktop central timeline line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />

        <div className="space-y-8 md:space-y-12">
          {electionTimeline.map((phase, index) => (
            <TimelineCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
