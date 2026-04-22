"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <motion.a
      href="https://www.newaihubber.com/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border-b border-white/10 py-2.5 px-4 flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all group no-underline"
    >
      <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
      <p className="text-[10px] md:text-xs font-body text-white/90 tracking-wide text-center">
        This is a demo. Get your <span className="font-semibold text-white underline decoration-white/30 underline-offset-4 group-hover:decoration-white transition-all cursor-pointer">high-converting website</span> at <span className="font-bold text-white transition-colors">NewAIHubber.com</span>.
      </p>
      <ArrowRight className="w-3 h-3 text-white/50 group-hover:translate-x-1 transition-transform" />
    </motion.a>
  );
}
