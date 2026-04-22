"use client";

import { HlsVideo } from "./ui/hls-video";

export function Stats() {
  const stats = [
    { value: "200+", label: "AI-designed websites launched" },
    { value: "98%", label: "satisfaction with AI web design services" },
    { value: "3.2x", label: "More conversions" },
    { value: "5 days", label: "Average delivery" }
  ];

  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center bg-black py-32 px-6 lg:px-16 overflow-hidden">
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "saturate(0)" }}
      />
      
      {/* Top and bottom fades */}
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center md:items-start gap-1 md:gap-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-none">{stat.value}</span>
                <span className="text-white/60 font-body font-light text-xs md:text-sm uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
