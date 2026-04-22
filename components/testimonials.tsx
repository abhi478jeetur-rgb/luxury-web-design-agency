export function Testimonials() {
  const testimonials = [
    {
      quote: "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
      name: "Sarah Chen",
      role: "CEO, Luminary"
    },
    {
      quote: "Conversions up 4x. That's not a typo. The AI-driven design just works differently when built on real performance data.",
      name: "Marcus Webb",
      role: "Head of Growth, Arcline"
    },
    {
      quote: "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
      name: "Elena Voss",
      role: "Brand Director, Helix"
    }
  ];

  return (
    <section className="w-full bg-black py-32 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
            Client Testimonials for AI Web Design
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[1] md:leading-[0.9]">
            Don&apos;t take our word for it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="liquid-glass rounded-2xl p-8 flex flex-col justify-between h-full">
              <p className="text-white/80 font-body font-light text-xs md:text-sm italic leading-relaxed mb-8 md:mb-10">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="text-white font-body font-medium text-sm mb-1">{testimonial.name}</p>
                <p className="text-white/50 font-body font-light text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
