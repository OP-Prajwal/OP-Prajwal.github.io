"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="square" strokeLinejoin="miter" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    skills: ["Deep Learning & Neural Networks", "Natural Language Processing (NLP)", "Computer Vision", "PyTorch", "TensorFlow"],
  },
  {
    title: "Web Development",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="square" strokeLinejoin="miter" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["React & Next.js", "Node.js & Express", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Programming Languages",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="square" strokeLinejoin="miter" d="M8 9l3 3-3 3m5 0h3M4 6h16v12H4z" />
      </svg>
    ),
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  },
  {
    title: "Problem Solving",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="square" strokeLinejoin="miter" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    skills: ["Data Structures & Algorithms (250+ Solved)", "Competitive Programming", "System Design"],
  },
  {
    title: "Tools & Infrastructure",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: ["Docker", "Kubernetes", "Git", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-6 md:px-24">
        <SectionHeading
          title="Skills"
          subtitle="Core competencies and integration targets"
        />

        <div className="grid grid-cols-1 divide-y divide-border">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              onTouchStart={() => {}}
              className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 group cursor-pointer"
            >
              {/* Category Header */}
              <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                <span className="font-mono text-sm text-accent mb-4 block">0{catIndex + 1} {"//"}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="text-4xl mt-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                  {category.icon}
                </div>
              </div>

              {/* Skills List */}
              <div className="md:col-span-3 flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6 content-start mt-6 md:mt-0">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2,
                    }}
                    className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto text-center sm:text-left shadow-sm sm:shadow-none"
                  >
                    <span className="w-1.5 h-1.5 bg-border group-hover:bg-accent transition-colors duration-300 shrink-0" />
                    <span className="font-mono text-base md:text-lg text-text-secondary hover:text-text-primary transition-colors cursor-crosshair">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
