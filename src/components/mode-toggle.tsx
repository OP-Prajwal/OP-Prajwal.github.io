"use client";

import { useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleToggle = useCallback(() => {
    const isDark = resolvedTheme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    if (!document.startViewTransition || !btnRef.current) {
      setTheme(nextTheme);
      return;
    }

    // Always measure the button's position from the ref — this is
    // reliable on every device regardless of how the click was triggered.
    const rect = btnRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      root.classList.remove(isDark ? "dark" : "light");
      root.classList.add(nextTheme);
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      ref={btnRef}
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      onClick={handleToggle}
    >
      <SunIcon className="h-full w-full dark:hidden" />
      <MoonIcon className="hidden h-full w-full dark:block" />
    </Button>
  );
}
