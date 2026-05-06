"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "BTech in Computer Science & Engineering",
    company: "St. Joseph Engineering College",
    duration: "2023 - Present",
    description: [
      "Pursuing a comprehensive curriculum in Computer Science algorithms, AI techniques, and deep learning.",
      "Actively developing intelligent predictive models and scalable web applications for real-world use cases.",
      "Consistently exploring edge technologies and engaging in open-source development."
    ],
  },
  {
    role: "AI/ML Engineer & Full Stack Developer",
    company: "Freelance & Open Source",
    duration: "2023 - Present",
    description: [
      "Engineered machine learning systems and neural networks from scratch using PyTorch and TensorFlow.",
      "Developed robust full-stack applications leveraging the MERN stack and Next.js.",
      "Integrated advanced LLMs into scalable backend infrastructure for complex query parsing and logic."
    ],
  },
  {
    role: "Technical Lead",
    company: "Nucleus SJEC Club",
    duration: "Present",
    description: [
      "Spearheading the technical direction of the club across multiple engineering domains including Dev, AI/ML, and DSA.",
      "Mentoring students in algorithmic complexity, full-stack development, and predictive modeling.",
      "Managing cross-functional teams to architect and deploy technical workshops and initiatives."
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and key milestones"
        />

        <div className="relative mt-16 md:mt-24">
          {/* Timeline stark line */}
          <div className="hidden md:block absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={() => {}}
                className="relative flex flex-col md:flex-row gap-8 md:gap-16 group cursor-pointer"
              >
                {/* Timeline Node & Duration (Left Side on Desktop) */}
                <div className="flex flex-col md:flex-row md:w-[200px] md:shrink-0 items-center md:items-start md:justify-end md:pr-16 relative mb-4 md:mb-0">
                  {/* The dot */}
                  <div className="hidden md:block absolute left-[-5px] md:right-[-5px] md:left-auto top-1.5 w-2.5 h-2.5 bg-background border border-accent group-hover:bg-accent transition-colors duration-300 z-10" />
                  
                  <span className="font-mono text-sm font-bold text-accent tracking-widest uppercase mt-1 text-center md:text-right">
                    {exp.duration}
                  </span>
                </div>

                {/* Card Content (Right Side on Desktop) */}
                <div className="md:flex-1">
                  <div className="theme-panel p-8 md:p-10 relative overflow-hidden md:group-hover:bg-surface-hover/70 focus:bg-surface-hover/70 active:bg-surface-hover/70 transition-colors duration-500 text-center md:text-left">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-accent/10 focus:bg-accent/10 active:bg-accent/10 transition-colors duration-500 pointer-events-none" />
                    
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary uppercase tracking-wider mb-2 group-hover:text-accent focus:text-accent active:text-accent transition-colors duration-300 relative z-10">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-sm text-text-secondary uppercase tracking-widest mb-8 relative z-10">
                      {"//"} {exp.company}
                    </p>
                    
                    <ul className="space-y-4 relative z-10">
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 text-base text-text-secondary leading-relaxed font-sans font-light"
                        >
                          <span className="hidden md:block mt-2.5 w-1 h-1 bg-border group-hover:bg-accent focus:bg-accent active:bg-accent transition-colors duration-300 shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
