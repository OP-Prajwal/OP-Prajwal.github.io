"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🚀",
    title: "Full Stack",
    description: "End-to-end development with MERN stack & Next.js",
  },
  {
    icon: "🤖",
    title: "AI / ML",
    description: "Machine Learning, Deep Learning & NLP solutions",
  },
  {
    icon: "🧩",
    title: "Problem Solving",
    description: "Turning complex algorithmic constraints into elegant, optimized solutions",
  },
  {
    icon: "⚡",
    title: "Performance",
    description: "Optimized, scalable & production-ready applications",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left justify-between mb-16 md:mb-24 editorial-border-b pb-8">
          <div className="relative flex flex-col items-center md:items-start">
            <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tighter mix-blend-difference relative z-10">
              [About_Me]
            </h2>
            <div className="hidden md:block absolute left-24 w-full h-[1px] bg-border top-20 -z-10" />
          </div>
          <p className="font-mono text-sm text-text-secondary w-full md:w-1/3 mt-6 md:mt-0 uppercase tracking-widest leading-loose">
            A passionate developer who loves building impactful digital products with uncompromising precision.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-24 relative">
          
          {/* Stark Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Left Column: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 space-y-8 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="text-xl md:text-2xl leading-relaxed font-light text-text-primary">
              I&apos;m an <strong className="font-bold underline decoration-accent underline-offset-4">AI/ML Engineer</strong> and{" "}
              <strong className="font-bold underline decoration-accent underline-offset-4">Full Stack Developer</strong> currently pursuing my BTech in CSE.
            </p>
            <div className="w-12 h-1 bg-accent" />
            <p className="text-text-secondary leading-relaxed text-lg">
              With deep expertise in Deep Learning, PyTorch, React, and the MERN stack, I architect systems ranging from intelligent predictive models to highly scalable web applications.
            </p>
            <p className="text-text-secondary leading-relaxed text-lg pb-12 editorial-border-b">
              I believe in writing clean, brutalist code. When I&apos;m not optimizing algorithms or contributing to open-source, you&apos;ll find me experimenting with new AI technologies and creating tools that solve real-world problems.
            </p>

            {/* Brutalist Quick stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 lg:gap-12 pt-4 w-full">
              {[
                { value: "0X16", label: "Repositories" },
                { value: "0003", label: "Years_Exp" },
                { value: "0004", label: "Core_Stacks" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center md:items-start text-center md:text-left min-w-[120px]">
                  <span className="font-heading text-3xl md:text-4xl font-black text-accent">{stat.value}</span>
                  <span className="font-mono text-[10px] md:text-xs text-text-secondary uppercase tracking-widest mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Editorial Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 flex flex-col justify-center gap-12"
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                onTouchStart={() => {}}
                className="group relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 editorial-border-b pb-8 last:border-0 cursor-pointer"
              >
                {/* Huge Index Number background */}
                <div className="absolute left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:-left-4 -top-6 text-[8rem] sm:text-[6rem] font-heading font-black text-white/[0.03] select-none pointer-events-none group-hover:text-accent/5 transition-colors duration-500">
                  0{index + 1}
                </div>
                
                <div className="font-mono text-3xl sm:text-2xl text-accent pt-1 relative z-10">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="font-mono text-xl font-bold text-text-primary uppercase tracking-wider mb-2 group-hover:text-accent group-active:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
