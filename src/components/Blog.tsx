"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const articles = [
  {
    title: "How to Store Code Intelligence Graphs Efficiently",
    description:
      "A practical comparison of graph storage patterns for code intelligence systems, from adjacency lists to query-friendly graph models.",
    url: "https://dev.to/opprajwal/how-to-store-code-intelligence-graphs-efficiently-6d4",
    published: "Apr 19, 2026",
    readTime: "3 min",
    minutes: 3,
    category: "System Design",
    accent: "#0f7a5f",
    tags: ["Computer Science", "Database", "Performance", "System Design"],
    image:
      "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcw07cczklfylt7k5e5t2.png",
  },
  {
    title: "Why Redis is Single-Threaded (And Still Extremely Fast)",
    description:
      "A breakdown of Redis' event-loop architecture, in-memory operations, and why avoiding coordination overhead can be a performance advantage.",
    url: "https://dev.to/opprajwal/why-redis-is-single-threaded-and-still-extremely-fast-16id",
    published: "Apr 14, 2026",
    readTime: "2 min",
    minutes: 2,
    category: "Performance",
    accent: "#b45309",
    tags: ["Architecture", "Database", "Performance", "System Design"],
    image:
      "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg6d54sfcdkmux4b4qbjp.png",
  },
  {
    title: "How the JavaScript Event Loop Creates the Illusion of Multithreading",
    description:
      "A clear mental model for JavaScript's call stack, task queues, async APIs, and why single-threaded code can still feel concurrent.",
    url: "https://dev.to/opprajwal/how-the-javascript-event-loop-creates-the-illusion-of-multithreading-1ie9",
    published: "Apr 4, 2026",
    readTime: "3 min",
    minutes: 3,
    category: "JavaScript",
    accent: "#c8a400",
    tags: ["JavaScript", "AI", "Web Dev", "Development"],
    image:
      "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxq8lbdlelx1dhkm6k600.png",
  },
  {
    title: "The Real Reason Behind Arrow Functions in JavaScript",
    description:
      "A focused explanation of arrow functions, lexical this, and why the syntax exists beyond being a shorter way to write functions.",
    url: "https://dev.to/opprajwal/the-real-reason-behind-arrow-functions-in-javascript-14n9",
    published: "Mar 28, 2026",
    readTime: "2 min",
    minutes: 2,
    category: "JavaScript",
    accent: "#c8a400",
    tags: ["Web Dev", "JavaScript", "AI", "Programming"],
    image:
      "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwh6o9rzo3gd1moar5qkw.png",
  },
  {
    title: "How AI IDEs Actually Work - Under the Hood",
    description:
      "A concise tour through context gathering, embeddings, retrieval, tool calls, and the systems thinking behind agentic coding IDEs.",
    url: "https://dev.to/opprajwal/how-ai-ides-actually-work-under-the-hood-1ih4",
    published: "Mar 22, 2026",
    readTime: "2 min",
    minutes: 2,
    category: "AI Tooling",
    accent: "#2563eb",
    tags: ["AI", "Architecture", "LLM", "Tooling"],
    image:
      "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fu7q9gmhbu4l7zts0gg6t.png",
  },
  {
    title: "You Can't Secure Public APIs - You Can Only Control Them",
    description:
      "A realistic look at public API constraints, abuse prevention, rate limiting, and designing controls instead of pretending clients are trusted.",
    url: "https://dev.to/opprajwal/you-cant-secure-public-apis-you-can-only-control-them-3oig",
    published: "Mar 21, 2026",
    readTime: "2 min",
    minutes: 2,
    category: "Security",
    accent: "#dc2626",
    tags: ["API", "Backend", "Security", "Web Dev"],
    image:
      "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fn15iwi71r49hxbri9a59.png",
  },
  {
    title: "Building an Unbreakable Public Form: From Concept to Production Backend",
    description:
      "An implementation-oriented backend design for public forms with validation, token strategy, idempotency, and production failure handling.",
    url: "https://dev.to/opprajwal/building-an-unbreakable-public-form-from-concept-to-production-backend-1c4o",
    published: "Mar 20, 2026",
    readTime: "6 min",
    minutes: 6,
    category: "Backend",
    accent: "#7c3aed",
    tags: ["Backend", "Node", "Security", "System Design"],
    image:
      "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr9d0lcjd6d07grfz5omj.png",
  },
  {
    title: "Making a Public Form Secure: Tokens, Idempotency & Real-World Backend Design",
    description:
      "The design principles behind secure public submissions, including one-time tokens, idempotency keys, retries, and clean backend boundaries.",
    url: "https://dev.to/opprajwal/making-a-public-form-secure-tokens-idempotency-real-world-backend-design-4358",
    published: "Mar 19, 2026",
    readTime: "3 min",
    minutes: 3,
    category: "Backend",
    accent: "#7c3aed",
    tags: ["Web Dev", "Backend", "System Design", "Clean Code"],
    image:
      "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd9zoaseq3vo11ajn89y6.png",
  },
];

const topics = ["System Design", "Backend", "JavaScript", "Security", "AI Tooling", "Performance"];
const featured = articles[0];
const totalMinutes = articles.reduce((sum, article) => sum + article.minutes, 0);

export default function Blog() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-blueprint opacity-35 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-accent-glow/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-24">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 editorial-border-b pb-10 md:pb-12 lg:grid-cols-[1fr_320px] lg:items-end"
        >
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent mb-5">
              {"//"} Writing archive
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-text-primary leading-none">
              Engineering Notes<span className="text-accent">.</span>
            </h1>
            <p className="mt-7 text-text-secondary text-lg leading-relaxed max-w-2xl">
              Practical essays on backend architecture, JavaScript internals, security boundaries, performance systems, and AI developer tooling.
            </p>
          </div>

          <div className="theme-panel p-5">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { value: articles.length, label: "Posts" },
                { value: totalMinutes, label: "Min_Read" },
                { value: "6", label: "Topics" },
              ].map((stat) => (
                <div key={stat.label} className="border border-border bg-background/55 px-3 py-4">
                  <div className="font-heading text-2xl font-black text-accent">{stat.value}</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
            <a
              href="https://dev.to/opprajwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-between border border-border bg-text-primary px-4 py-3 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:border-accent hover:bg-accent"
            >
              View DEV Channel
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.8} d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-wrap gap-3 py-8"
        >
          {topics.map((topic) => (
            <span
              key={topic}
              className="border border-border bg-surface/70 px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
            >
              {topic}
            </span>
          ))}
        </motion.div>

        <motion.a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="group grid overflow-hidden theme-panel md:grid-cols-[0.95fr_1.05fr]"
          style={{ "--article-accent": featured.accent } as CSSProperties}
        >
          <div className="relative min-h-[260px] md:min-h-[420px] overflow-hidden bg-surface-hover">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featured.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/10 to-transparent" />
            <div className="absolute left-6 top-6 border border-white/20 bg-black/40 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur">
              Featured essay
            </div>
          </div>
          <div className="flex flex-col justify-between p-7 md:p-10">
            <div>
              <div className="mb-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest">
                <span className="px-2.5 py-1 text-white" style={{ backgroundColor: "var(--article-accent)" }}>Latest</span>
                <span className="text-text-secondary">{featured.published}</span>
                <span className="text-text-secondary">{featured.readTime} read</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-tight text-text-primary group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="mt-6 text-text-secondary text-lg leading-relaxed">
                {featured.description}
              </p>
            </div>
            <div className="mt-10 flex items-center justify-between gap-6 border-t border-border pt-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: "var(--article-accent)" }}>
                Read on DEV
              </span>
              <span className="flex h-10 w-10 items-center justify-center border border-border text-text-primary transition-colors group-hover:text-text-primary" style={{ borderColor: "var(--article-accent)" }}>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.8} d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </div>
          </div>
        </motion.a>

        <div className="mt-16 border-t border-border">
          {articles.slice(1).map((article, index) => (
            <motion.a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group relative grid gap-6 border-b border-border py-8 transition-colors hover:bg-text-primary/[0.025] md:grid-cols-[112px_150px_1fr_220px] md:items-start md:px-4 md:-mx-4"
              style={{ "--article-accent": article.accent } as CSSProperties}
            >
              <div className="flex items-center justify-between md:block">
                <span className="font-heading text-4xl font-black text-transparent [-webkit-text-stroke:1px_var(--border)] transition-all group-hover:text-[var(--article-accent)] group-hover:[-webkit-text-stroke:1px_var(--article-accent)]">
                  0{index + 2}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest md:hidden" style={{ color: "var(--article-accent)" }}>
                  {article.category}
                </span>
              </div>

              <div className="relative hidden aspect-[4/3] overflow-hidden bg-surface-hover md:block">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="absolute inset-0 bg-background/20 transition-colors group-hover:bg-transparent" />
              </div>

              <div>
                <div className="mb-4 hidden items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-text-secondary md:flex">
                  <span style={{ color: "var(--article-accent)" }}>{article.category}</span>
                  <span>{article.published}</span>
                  <span>{article.readTime} read</span>
                </div>
                <h3 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-tight text-text-primary transition-colors group-hover:text-[var(--article-accent)]">
                  {article.title}
                </h3>
                <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
                  {article.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-text-secondary group-hover:text-text-primary transition-colors"
                    style={{ borderColor: "color-mix(in srgb, var(--article-accent) 35%, var(--border))" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
