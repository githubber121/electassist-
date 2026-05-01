"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Vote } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/timeline", label: "Timeline" },
    { href: "/chat", label: "AI Assistant" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-800" aria-label="Main Navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group" aria-label="ElectAssist Home">
            <Vote className="h-6 w-6 text-blue-500" aria-hidden="true" />
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">ElectAssist</span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className="relative px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <span className={`relative z-10 ${isActive ? "text-white" : "text-slate-400 hover:text-white"}`}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-slate-800 rounded-md -z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Mobile menu could be added here, keeping simple for now */}
        </div>
      </div>
    </nav>
  );
}
