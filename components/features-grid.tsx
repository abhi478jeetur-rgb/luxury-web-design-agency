import { Zap, Palette, BarChart3, Shield } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: Zap,
      title: "Days, Not Months",
      description: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy."
    },
    {
      icon: Palette,
      title: "Expertly Crafted AI Web Design",
      description: "Every detail considered. Every element refined. Design so precise, it feels inevitable."
    },
    {
      icon: BarChart3,
      title: "Built to Convert",
      description: "Layouts informed by data. Decisions backed by performance. Results you can measure."
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included."
    }
  ];

  return (
    <section className="w-full bg-black py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
            Why Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            The Luxury AI Web Design Agency Difference.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="liquid-glass rounded-2xl p-6 flex flex-col items-start text-left">
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-heading italic text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
