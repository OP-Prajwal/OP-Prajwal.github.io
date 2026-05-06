"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/OP-Prajwal",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prajwal-gaonkar-a57586195",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-55 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-accent-glow/40 to-transparent pointer-events-none" />

      {/* Stark Vertical Line */}
      <div className="hidden md:block absolute left-6 md:left-24 top-0 bottom-0 w-px bg-border pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12"
      >
        {/* Top Spacer */}
        <div className="h-16 md:h-24" />

        {/* Massive Typography Name + Portrait */}
        <motion.div
          variants={item}
          className="mb-8 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 w-full"
        >
          <div className="relative flex flex-col items-center overflow-visible text-center md:items-start md:text-left flex-1 min-w-0 md:-ml-4 lg:-ml-8">
            <p className="font-mono text-xl md:text-2xl text-accent uppercase tracking-widest mb-4 md:-mb-2 ml-0 md:ml-1">{"//"} I am</p>
            <h1 className="font-heading text-[16vw] sm:text-[14vw] md:text-[8vw] lg:text-[7vw] xl:text-[7.5rem] 2xl:text-[9rem] font-bold leading-none md:leading-[0.85] tracking-tighter text-text-primary uppercase py-2 whitespace-nowrap">
              Prajwal
              <span className="text-accent">.</span>
            </h1>
            
            {/* Abstract geometric shape behind text */}
            <div className="absolute -z-10 top-1/2 left-1/2 md:left-[40%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 border border-accent/25 rotate-45 pointer-events-none accent-glow" />
            <div className="absolute -z-10 top-1/2 left-1/2 md:left-[40%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 border border-accent/20 rotate-[60deg] pointer-events-none" />
          </div>

          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="relative shrink-0 mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[340px]"
          >
            <div className="absolute -inset-4 border border-accent/20 rotate-3 pointer-events-none" />
            <div className="absolute -left-5 top-10 hidden h-28 w-px bg-accent lg:block" />
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface shadow-[0_28px_90px_rgba(0,0,0,0.14)] dark:shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
              <Image
                src="https://nucleussjec.in/team/Prajwal.avif"
                alt="Prajwal Gaonkar"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 260px, 340px"
                className="object-cover object-center saturate-[0.9] contrast-[1.04] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 border border-white/20 bg-black/35 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur">
                Available_2026
              </div>
            </div>
            <div className="relative -mt-px grid grid-cols-1 gap-1 border border-border bg-background/90 px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-text-secondary backdrop-blur sm:grid-cols-2 sm:text-left">
              <span className="text-text-primary">Prajwal Gaonkar</span>
              <span className="text-accent sm:text-right">AI/ML + Web</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 mt-12 md:mt-24 items-start">
          {/* Subtitle/Role */}
          <motion.div variants={item} className="md:col-span-5 md:border-r md:border-border pr-0 md:pr-8 relative flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-mono text-xl md:text-2xl text-text-secondary uppercase tracking-wider mb-6 leading-tight">
              AI/ML Engineer <br className="hidden md:block" />
              <span className="text-accent">&</span> Full Stack Dev
            </h2>
            <div className="w-12 h-[1px] bg-accent mb-6" />
            <p className="text-base text-text-secondary leading-relaxed max-w-md">
              Computer Science student from India turning complex problems into elegant solutions. Passionate about exploring the intersection of deep learning and seamless web architecture.
            </p>
          </motion.div>

          {/* Action Area & Socials */}
          <motion.div variants={item} className="md:col-span-7 flex flex-col items-center md:items-end justify-between h-full pt-8 md:pt-0">
            <div className="flex flex-col sm:flex-row gap-6 mb-12 w-full sm:w-auto items-center justify-center">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative px-8 py-4 bg-text-primary text-background font-mono font-bold uppercase tracking-widest overflow-hidden editorial-border flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-background">Init_Projects</span>
                <span className="relative z-10 w-2 h-2 bg-background group-hover:bg-accent transition-colors duration-300" />
                <div className="absolute inset-0 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </a>
              
              <a
                href="/resume.pdf"
                download
                className="group px-8 py-4 editorial-border bg-surface/60 text-text-primary font-mono font-bold uppercase tracking-widest hover:bg-surface-hover transition-colors duration-300 text-center flex justify-center items-center w-full sm:w-auto"
              >
                Download_CV
              </a>
            </div>

            {/* Social Links (Text based) */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-mono text-sm uppercase tracking-widest mt-8 md:mt-0">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors relative group"
                >
                  [{social.label}]
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - Brutalist */}
        <motion.div
          variants={item}
          className="absolute bottom-12 right-6 md:right-24 font-mono text-xs text-text-secondary uppercase tracking-[0.3em] flex items-center gap-4 rotate-90 origin-right translate-x-1/2"
        >
          <span>Scroll</span>
          <div className="w-16 h-[1px] bg-border overflow-hidden relative">
            <motion.div 
              animate={{ x: [-64, 64] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-1/2 h-full bg-accent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
