"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-9 w-[76px] rounded-full border border-border bg-surface/85"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative z-50 flex h-9 w-[76px] items-center rounded-full border border-border bg-surface/85 p-1 text-text-secondary shadow-sm backdrop-blur transition-colors hover:border-accent hover:text-text-primary"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ x: isDark ? 36 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
        className="absolute left-1 top-1 h-7 w-7 rounded-full bg-accent shadow-[0_0_22px_var(--accent-glow)]"
      />

      <span
        className={`relative z-10 flex h-7 w-7 items-center justify-center transition-colors ${
          isDark ? "text-text-secondary" : "text-background"
        }`}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.8} d="M12 4v1.5M12 18.5V20M4 12h1.5M18.5 12H20M6.34 6.34l1.06 1.06M16.6 16.6l1.06 1.06M17.66 6.34 16.6 7.4M7.4 16.6l-1.06 1.06M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
        </svg>
      </span>

      <span
        className={`relative z-10 ml-auto flex h-7 w-7 items-center justify-center transition-colors ${
          isDark ? "text-background" : "text-text-secondary"
        }`}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.8} d="M20 15.4A8 8 0 0 1 8.6 4 8.8 8.8 0 1 0 20 15.4Z" />
        </svg>
      </span>
    </button>
  );
}
