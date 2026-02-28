"use client";

import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-text-primary">
          Coming Soon<span className="text-accent">.</span>
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-16 h-px bg-accent mx-auto mt-6"
        />
      </motion.div>
    </section>
  );
}
