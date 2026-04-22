"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { BlurText } from "./ui/blur-text";

export function Hero() {
  return (
    <section id="home" className="relative overflow-visible min-h-screen lg:h-[1000px] w-full bg-black flex flex-col">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://picsum.photos/seed/hero/1920/1080?blur=4"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 lg:opacity-100 lg:object-contain lg:h-auto"
        style={{ top: "0%", lg: { top: "20%" } } as any}
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/5 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full pointer-events-none z-0 opacity-50" />
      <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-b from-transparent to-black z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 h-full w-full max-w-7xl mx-auto pt-32 md:pt-40">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          <div className="liquid-glass rounded-full px-1 py-1 flex items-center justify-center">
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold mr-3">
              New
            </span>
            <span className="text-xs font-medium text-white font-body pr-3 opacity-90">
              Introducing the Premier AI-Powered Web Design Agency for Startups.
            </span>
          </div>
          
          <a 
            href="https://www.newaihubber.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-4 py-1.5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all group cursor-pointer"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse mr-3" />
            <span className="text-[10px] font-medium text-white/70 font-body uppercase tracking-wider group-hover:text-white transition-colors">
              This is a demo website. Visit our main website.
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-2 text-white/30 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.9] md:leading-[0.8] max-w-4xl tracking-[-2px] md:tracking-[-4px] mb-8">
          <BlurText text="High-Converting AI Websites for Coaches & Consultants" delay={100} />
        </h1>

        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-base text-white/90 font-body font-light leading-tight max-w-lg mb-10"
        >
          Luxury AI-powered design studio transforming your expertise into a premium digital presence. We build bespoke, high-converting websites and funnels for coaches, consultants, and course creators.
        </motion.p>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 flex items-center justify-center gap-2 text-white font-medium hover:bg-white/20 transition-all text-sm w-full sm:w-auto hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
            Book your free AI web design strategy call today
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-white font-medium px-5 py-2.5 hover:text-white/80 transition-colors">
            <Play className="w-4 h-4 fill-white" />
            Watch the Film
          </button>
        </motion.div>

        <div className="mt-auto pb-8 pt-16 flex flex-col items-center w-full">
          <div className="liquid-glass rounded-full px-4 py-2 mb-8 inline-block">
            <span className="text-xs text-white/70 font-body">Trusted by the teams behind</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16 opacity-60">
            {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((partner) => (
              <span key={partner} className="text-2xl md:text-3xl font-heading italic text-white flex-shrink-0">
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-body">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
