"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(() => pathname === "/" ? "home" : "");
  const { scrollY } = useScroll();
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Reset active section when navigating away from homepage
  useEffect(() => {
    if (pathname !== "/") {
      // Use a microtask to avoid synchronous setState in effect
      queueMicrotask(() => setActiveSection(""));
      return;
    }

    const observers = new Map();
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Adjust trigger area
      threshold: 0, // Trigger as soon as the element enters the margin
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => {
      observers.forEach((element) => observer.unobserve(element));
    };
  }, [pathname]);

  const handleClick = (href: string) => {
    setIsOpen(false);

    if (href.startsWith("/")) {
      router.push(href);
      return;
    }

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-border shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-24 h-20 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em]">
        {/* Logo */}
        <button
          onClick={() => handleClick("#home")}
          className="font-bold text-text-primary hover:text-accent transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-accent" />
          PRJWL<span className="text-accent">_</span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.href.startsWith("/") 
              ? pathname === link.href 
              : activeSection === link.href.substring(1);
            
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  className={`transition-colors duration-300 relative ${
                    isActive 
                      ? "text-accent [text-shadow:0_0_8px_rgba(0,255,204,0.4)]" 
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  [{link.label}]
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50 text-accent"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-px bg-current transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-current transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-black absolute top-0 left-0 right-0 flex flex-col items-center justify-center border-b border-border"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <ul className="flex flex-col items-center space-y-8 font-mono text-sm uppercase tracking-[0.3em]">
          {navLinks.map((link, i) => {
            const isActive = link.href.startsWith("/") 
              ? pathname === link.href 
              : activeSection === link.href.substring(1);
            
            return (
              <motion.li
                key={link.href}
                initial={{ y: 20, opacity: 0 }}
                animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: isOpen ? i * 0.1 : 0 }}
              >
                <button
                  onClick={() => handleClick(link.href)}
                  className={`transition-colors relative group ${
                    isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                     <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-px bg-accent transition-all duration-300" />
                  )}
                  {!isActive && (
                     <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-text-primary group-hover:w-full transition-all duration-300" />
                  )}
                </button>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
