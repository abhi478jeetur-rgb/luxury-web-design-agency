"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { useInView } from "motion/react";

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function SectionContainer({ children, id, className = "" }: SectionContainerProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    margin: "400px 0px 400px 0px", // Load when 400px from viewport
    once: false 
  });
  
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [isInView, hasBeenInView]);

  return (
    <section 
      ref={ref} 
      id={id} 
      className={`min-h-[40vh] transition-opacity duration-700 ${className} ${isInView ? "opacity-100" : "opacity-0"}`}
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "0 500px", // Helps the browser estimate height
      } as any}
    >
      {children}
    </section>
  );
}
