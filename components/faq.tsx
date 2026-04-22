"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does AI-powered web design benefit my coaching or consulting business?",
    answer: "Our AI-driven approach analyzes high-performing sales funnels to identify patterns that drive conversions. This allows us to create custom, luxury web designs for coaches and consultants that aren't just beautiful, but are scientifically optimized to turn visitors into paying clients from day one.",
  },
  {
    question: "What is the typical timeline for a high-converting website launch?",
    answer: "By leveraging our AI-enhanced design workflow, we significantly reduce traditional development times. Most course creators and experts can expect a fast, premium website launch within 2 weeks, without compromising on the pixel-perfect quality that defines an authority brand.",
  },
  {
    question: "What specific services does your AI design studio provide?",
    answer: (
      <>
        <p className="mb-3">We offer a comprehensive suite of digital solutions built exclusively for experts:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Custom AI-powered web design and authority branding</li>
          <li>High-converting landing pages for lead capture</li>
          <li>Strategic, conversion-focused funnels for launches</li>
          <li>SEO-ready content architecture and authoritative digital presence</li>
        </ul>
      </>
    ),
  },
  {
    question: "How do you ensure the design is optimized for conversions?",
    answer: "Every element we design is backed by data from successful expert brands. Our AI models predict user heatmaps and interaction patterns specific to coaching and consulting sites. This ensures that your call-to-actions and funnels are perfectly positioned to grow your business.",
  },
  {
    question: "Do you offer ongoing support for my expert brand?",
    answer: "Yes, we provide continuous support and optimization. Our AI-powered agency monitors your conversion rates and suggests iterative improvements to keep your brand at the forefront of your niche as you scale your expertise.",
  },
  {
    question: "Is my personal data secure with your AI tools?",
    answer: "Security is our top priority. We use proprietary AI models that operate within a secure environment. We have a strict 'no-data-selling' policy, ensuring that your unique strategy and brand information remain entirely yours.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Common Questions about <span className="text-white/60 italic">AI Web Design</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Everything you need to know about our luxury AI web design agency and how we help coaches, consultants, and course creators scale faster with high-converting websites.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/[0.03] transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-medium text-white pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-white/40">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-white/60 leading-relaxed">
                        <div>{faq.answer}</div>
                        {index === 0 && (
                          <div className="mt-4">
                            <a 
                              href="https://newaihubber.com" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-white hover:underline inline-flex items-center gap-1 font-medium"
                            >
                              Explore our full AI capabilities
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
