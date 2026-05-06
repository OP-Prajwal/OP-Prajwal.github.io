"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "rate_limited">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (response.status === 429) {
          setStatus("rate_limited");
          setTimeout(() => setStatus("idle"), 5000);
          return;
        }
        throw new Error("Failed to send message");
      }

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-24">
        <SectionHeading
          title="Contact"
          subtitle="Initiate communication protocols"
        />

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative mt-16">
          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Left Side: Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-8 w-full">
              <div className="relative group">
                <label
                  htmlFor="name"
                  className="block font-mono text-xs uppercase tracking-widest text-text-secondary mb-3"
                >
                  {"//"} Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-b border-border/50 text-text-primary placeholder-text-secondary/30 focus:outline-none focus:border-accent transition-colors font-sans"
                  placeholder="Enter your name"
                />
              </div>
              <div className="relative group">
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-widest text-text-secondary mb-3"
                >
                  {"//"} Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-b border-border/50 text-text-primary placeholder-text-secondary/30 focus:outline-none focus:border-accent transition-colors font-sans"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="relative group">
              <label
                htmlFor="message"
                className="block font-mono text-xs uppercase tracking-widest text-text-secondary mb-3"
              >
                {"//"} Transmission payload
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-0 py-3 bg-transparent border-b border-border/50 text-text-primary placeholder-text-secondary/30 focus:outline-none focus:border-accent transition-colors font-sans resize-none"
                placeholder="Details of your inquiry..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 px-8 border font-mono text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 relative overflow-hidden group ${
                status === "sent"
                  ? "border-green-500 text-green-500"
                  : status === "error"
                  ? "border-red-500 text-red-500"
                  : status === "rate_limited"
                  ? "border-yellow-500 text-yellow-500"
                  : status === "sending"
                  ? "border-accent/30 text-accent/50 cursor-wait"
                  : "border-text-primary text-background bg-text-primary hover:border-accent"
              }`}
            >
              {status !== "sent" && status !== "sending" && status !== "error" && status !== "rate_limited" && (
                <div className="absolute inset-0 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              )}
              <span className={`relative z-10 ${status === "idle" ? "group-hover:text-background" : ""}`}>
                {status === "sending"
                  ? "Transmitting..."
                  : status === "sent"
                  ? "Transmission Successful"
                  : status === "error"
                  ? "Transmission Failed"
                  : status === "rate_limited"
                  ? "Too Many Requests - Try Later"
                  : "Send_Message"}
              </span>
            </motion.button>
          </motion.form>

          {/* Right Side: Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col justify-center text-center md:text-left"
          >
            <h3 className="font-heading text-3xl font-bold uppercase tracking-wider text-text-primary mb-8">
              Direct_Links
            </h3>
            
            <div className="flex flex-col gap-6">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/OP-Prajwal",
                  value: "@OP-Prajwal",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/prajwal-gaonkar-a57586195",
                  value: "in/prajwal-gaonkar",
                },
                {
                  label: "Email",
                  href: "mailto:prajwalgaonkar24@gmail.com",
                  value: "prajwalgaonkar24@gmail.com",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 group py-4 border-b border-border/50 hover:border-accent active:border-accent transition-colors duration-300"
                >
                  <span className="font-mono text-sm uppercase tracking-widest text-text-secondary group-hover:text-text-primary active:text-text-primary transition-colors">
                    {social.label}
                  </span>
                  <span className="font-sans text-center sm:text-right text-text-primary group-hover:text-accent active:text-accent transition-colors break-all">
                    {social.value}
                  </span>
                </a>
              ))}
            </div>
            
            <div className="mt-12 p-6 theme-panel">
              <p className="font-mono text-xs uppercase tracking-widest text-text-secondary leading-relaxed text-center">
                Currently open for freelance opportunities and full-time roles in full-stack architecture and machine learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
