"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading italic text-white mb-8">
              Bespoke AI-Enhanced <br /> Design for Experts.
            </h2>
            <div className="space-y-6 text-white/70 font-body text-lg leading-relaxed max-w-xl">
              <p>
                We specialize in an AI-enhanced design workflow that allows us to deliver high-converting websites for coaches, consultants, and course creators faster and smarter. By combining luxury aesthetics with strategic conversion funnels, we position you as the ultimate authority in your niche.
              </p>
              <p>
                Your website should be more than just a digital business card—it should be a powerful tool that turns visitors into loyal clients. Every pixel we craft is designed to grow your business and elevate your premium brand.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-medium italic">
                  "Our mission is to make the internet more beautiful, one high-performance website at a time."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden liquid-glass border border-white/10 group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              >
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="liquid-glass p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                  <h4 className="text-white font-heading italic text-xl mb-2">The Studio</h4>
                  <p className="text-white/60 text-sm font-body">
                    Located at the intersection of luxury and technology. We build the future.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
