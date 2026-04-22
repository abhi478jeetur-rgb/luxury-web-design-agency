"use client";

import { HlsVideo } from "./ui/hls-video";

export function StartSection() {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center bg-black overflow-hidden py-32">
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Top and bottom fades */}
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          How It Works
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[1] md:leading-[0.9] text-white mb-6">
          You dream it. We ship it.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-2xl mx-auto mb-10">
          Share your vision. Our AI handles the rest&mdash;wireframes, design, code, launch. All in days, not quarters.
        </p>
        <button className="liquid-glass-strong rounded-full px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
}
