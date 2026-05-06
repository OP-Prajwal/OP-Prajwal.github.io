"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 md:mb-24 editorial-border-b pb-8 flex flex-col md:flex-row items-center text-center md:text-left md:items-end justify-between"
    >
      <div className="relative flex flex-col items-center md:items-start">
        <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tighter text-text-primary relative z-10">
          [{title}]
        </h2>
        <div className="hidden md:block absolute left-0 w-[150%] h-[1px] bg-border top-20 -z-10" />
      </div>
      
      {subtitle && (
        <p className="font-mono text-sm text-text-secondary w-full md:w-1/3 mt-6 md:mt-0 uppercase tracking-widest leading-loose">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
