"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "AuraAuth",
    description:
      "Advanced model that detects human vs. AI-generated audio with high precision using deep learning techniques.",
    tech: ["Python", "PyTorch", "FastAPI", "React"],
    github: "https://github.com/OP-Prajwal/AuraAuth",
    demo: "https://github.com/OP-Prajwal/AuraAuth",
    featured: true,
  },
  {
    title: "AI Native Job Board",
    description:
      "Full-stack job board platform featuring AI-driven candidate matching and knowledge graph integration.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AI/ML"],
    github: "https://github.com/OP-Prajwal/ainativejobboard",
    demo: "https://github.com/OP-Prajwal/ainativejobboard",
    featured: true,
  },
  {
    title: "RAG Query System",
    description:
      "Enables natural language, multi-page querying of structured data using advanced LLMs and vector databases.",
    tech: ["LangChain", "Gemini", "ChromaDB", "FastAPI"],
    github: "https://github.com/OP-Prajwal",
    demo: "https://github.com/OP-Prajwal",
    featured: true,
  },
  {
    title: "AI Chrome Extension",
    description:
      "A LangChain-based multi-page memory model running in the browser. Fetches and compares data from multiple tabs using advanced LLMs and vector databases.",
    tech: ["LangChain", "JavaScript", "Python", "Chrome APIs"],
    github: "https://github.com/OP-Prajwal/ChromeExtension",
    demo: "https://github.com/OP-Prajwal/ChromeExtension",
    featured: true,
  },
  {
    title: "Vision Transformer",
    description:
      "Vision Transformer neural network architecture built entirely from scratch, achieving 97% validation accuracy.",
    tech: ["Python", "Deep Learning", "Transformers"],
    github: "https://github.com/OP-Prajwal/VisionTransformer",
    demo: "https://github.com/OP-Prajwal/VisionTransformer",
    featured: false,
  },
  {
    title: "Pithub",
    description:
      "A complete Github-style clone featuring full repository management capabilities and a custom command-line interface.",
    tech: ["MERN", "JWT", "Commander.js", "Node.js"],
    github: "https://github.com/OP-Prajwal/Pithub",
    demo: "https://github.com/OP-Prajwal/Pithub",
    featured: false,
  },
  {
    title: "GlobeTrotter",
    description:
      "Interactive travel companion app utilizing AI-powered location insights and smart algorithmic trip planning.",
    tech: ["Next.js", "Supabase", "Gemini AI", "Tailwind"],
    github: "https://github.com/OP-Prajwal/GlobeTrotter",
    demo: "https://github.com/OP-Prajwal/GlobeTrotter",
    featured: false,
  },
  {
    title: "AI Code Editor",
    description:
      "An AI-powered code editor integrating multiple advanced AI technologies to assist with writing, debugging, and refactoring code.",
    tech: ["React", "Node.js", "AI Integrations", "WebSockets"],
    github: "https://github.com/OP-Prajwal/AI_Code_Editor",
    demo: "https://github.com/OP-Prajwal/AI_Code_Editor",
    featured: false,
  },
  {
    title: "AI Database Manager",
    description:
      "An intelligent database management system utilizing AI to analyze schemas, optimize queries, and interact naturally with databases.",
    tech: ["Python", "SQL", "AI/ML", "Data Engineering"],
    github: "https://github.com/OP-Prajwal/AI-database-Manager",
    demo: "https://github.com/OP-Prajwal/AI-database-Manager",
    featured: false,
  },
  {
    title: "Uber Clone",
    description:
      "A full-stack ride-sharing application clone featuring real-time location mapping and routing capabilities.",
    tech: ["JavaScript", "React", "Node.js", "Mapping APIs"],
    github: "https://github.com/OP-Prajwal/uber-clone",
    demo: "https://github.com/OP-Prajwal/uber-clone",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-6 md:px-24">
        <SectionHeading
          title="Projects"
          subtitle="Selected works and architectures"
        />

        <div className="flex flex-col border-t border-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onTouchStart={() => {}}
              className="group relative flex flex-col md:flex-row items-center justify-between py-12 md:py-16 border-b border-border hover:bg-text-primary/[0.02] active:bg-text-primary/[0.02] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 text-center md:text-left cursor-pointer"
            >
              {/* Left Side: Number & Title */}
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-12 w-full md:w-auto relative z-10 text-center md:text-left">
                <span className="font-heading text-4xl md:text-6xl font-black text-transparent [-webkit-text-stroke:1px_var(--border)] group-hover:[-webkit-text-stroke:1px_var(--accent)] group-active:[-webkit-text-stroke:1px_var(--accent)] group-hover:text-accent group-active:text-accent transition-all duration-500 leading-none">
                  0{index + 1}
                </span>
                
                <h3 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tighter text-text-primary group-hover:-translate-y-1 group-active:-translate-y-1 md:group-hover:translate-x-4 md:group-active:translate-x-4 md:group-hover:-translate-y-0 md:group-active:-translate-y-0 transition-transform duration-500 ease-out flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 relative z-20">
                  {project.title}
                  {project.featured && (
                    <span className="text-[10px] font-mono tracking-widest text-background bg-accent px-2 py-1 uppercase rounded-sm md:translate-y-[-10px] whitespace-nowrap">
                      Featured
                    </span>
                  )}
                </h3>
              </div>

              {/* Right Side: Description & Links (Reveals more on large screens) */}
              <div className="mt-8 md:mt-0 md:ml-12 md:w-[400px] flex flex-col items-center md:items-end text-center md:text-right relative z-10 transition-transform duration-500 group-hover:-translate-x-4 group-active:-translate-x-4">
                <p className="text-text-secondary leading-relaxed font-light mb-6 font-sans">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center md:justify-end gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-border text-text-secondary group-hover:border-accent/30 group-active:border-accent/30 group-hover:text-text-primary group-active:text-text-primary transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-center md:justify-end gap-8 font-mono text-xs uppercase tracking-widest">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent active:text-accent group-hover:text-accent group-active:text-accent transition-colors relative"
                  >
                    <span>[Source_Code]</span>
                  </a>
                </div>
              </div>

              {/* Background abstract element on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/[0.02] scale-y-0 group-hover:scale-y-100 group-active:scale-y-100 transition-transform duration-700 ease-in-out pointer-events-none origin-bottom" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
