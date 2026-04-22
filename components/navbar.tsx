"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About", "Services", "Work", "Process", "FAQ", "Pricing"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-12 left-4 right-4 z-50 px-4 md:px-8 lg:px-16 py-3 flex items-center justify-between pointer-events-none">
      <div className="flex items-center pointer-events-auto">
        <Link href="/" className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden flex items-center justify-center liquid-glass backdrop-blur-md border border-white/10">
          <Image 
            src="/logo.png" 
            alt="Luxury AI Studio Logo" 
            width={48} 
            height={48}
            className="w-full h-full object-cover"
            priority
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 backdrop-blur-md border border-white/5 pointer-events-auto">
        {links.map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors"
          >
            {link}
          </Link>
        ))}
        <button 
          type="button"
          aria-label="Get started with our luxury AI web design"
          className="flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-medium ml-2 hover:bg-neutral-200 transition-colors"
        >
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="md:hidden flex items-center pointer-events-auto">
        <button 
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="liquid-glass rounded-full p-2 text-white flex items-center justify-center"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-16 left-0 right-0 md:hidden liquid-glass rounded-3xl p-6 backdrop-blur-xl border border-white/10 pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors py-1"
                >
                  {link}
                </Link>
              ))}
              <hr className="border-white/10 my-2" />
              <button 
                type="button"
                aria-label="Get started with our luxury AI web design"
                className="flex items-center justify-center gap-2 bg-white text-black rounded-full py-4 text-base font-semibold hover:bg-neutral-200 transition-colors"
              >
                Get Started
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
