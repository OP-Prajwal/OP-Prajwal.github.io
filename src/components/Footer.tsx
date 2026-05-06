"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-24 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {/* Copyright */}
          <p className="font-mono text-xs text-text-secondary uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-text-primary font-bold pr-2">PRAJWAL</span>
            <span className="hidden md:inline">|</span>
            <span className="md:hidden block mt-2"></span>
            <span className="pl-0 md:pl-2">ALL SYSTEMS NOMINAL</span>
          </p>

          {/* Built with */}
          <p className="font-mono text-xs text-text-secondary uppercase tracking-widest text-center">
            ENGINEERED WITH <span className="text-accent">NEXT.JS</span> & <span className="text-accent">TAILWIND</span>
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors duration-300"
            aria-label="Back to top"
          >
            <span className="hidden sm:inline">[ RETURN_TO_TOP ]</span>
            <div className="w-8 h-8 border border-border group-hover:border-accent flex items-center justify-center transition-colors duration-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
