"use client";

export function FeaturesChess() {
  return (
    <section className="w-full bg-black py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
            AI Web Design Capabilities for Conversion
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[1] md:leading-[0.9]">
            Professional AI-Powered Web Design Features
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading italic text-white mb-6">
                High-Speed Performance Optimized by AI
              </h3>
              <p className="text-white/70 font-body font-light text-sm md:text-base leading-relaxed mb-8">
                Every pixel is intentional. Our AI studies what works across thousands of top sites&mdash;then builds yours to outperform them all.
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors">
                Learn more
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="liquid-glass rounded-2xl overflow-hidden p-2">
                <img 
                  src="https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif" 
                  className="w-full h-auto rounded-xl object-cover" 
                  alt="Feature analytics preview" 
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading italic text-white mb-6">
                It gets smarter. Automatically.
              </h3>
              <p className="text-white/70 font-body font-light text-sm md:text-base leading-relaxed mb-8">
                Your site evolves on its own. AI monitors every click, scroll, and conversion&mdash;then optimizes in real time. No manual updates. Ever.
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors">
                See how it works
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="liquid-glass rounded-2xl overflow-hidden p-2">
                <img 
                  src="https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif" 
                  className="w-full h-auto rounded-xl object-cover" 
                  alt="Feature optimization preview" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
