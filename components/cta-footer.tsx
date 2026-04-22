"use client";

import { HlsVideo } from "./ui/hls-video";

export function CtaFooter() {
  return (
    <section className="relative w-full min-h-[800px] flex flex-col items-center justify-center bg-black overflow-hidden pt-32 pb-8">
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Top fade */}
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto flex-grow justify-center">
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-heading italic leading-[1] md:leading-[0.85] text-white mb-8">
          Your next AI-powered website starts here.
        </h2>
        <p className="text-white/70 font-body font-light text-sm md:text-base max-w-xl mx-auto mb-10">
          Book your free AI web design strategy call today. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button 
            type="button"
            aria-label="Book your free AI strategy call"
            className="liquid-glass-strong rounded-full px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors w-full sm:w-auto text-sm"
          >
            Book AI Strategy Call
          </button>
          <button 
            type="button"
            aria-label="View our pricing plans"
            className="bg-white text-black rounded-full px-6 py-3 font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto text-sm"
          >
            View Pricing
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full w-full px-6 lg:px-16 mt-32">
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            &copy; 2026 Luxury AI Web Design Studio. All rights reserved. <span className="mx-2">|</span> We never sell your data.
          </p>
          <div className="flex items-center gap-6">
            {[
              { name: "About", href: "#about" },
              { name: "Privacy", href: "/privacy" },
              { name: "Cookies", href: "/cookies" },
              { name: "Terms", href: "#" },
              { name: "Contact", href: "#" }
            ].map((link) => (
              <a key={link.name} href={link.href} className="text-white/40 hover:text-white/80 text-xs transition-colors font-body">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
