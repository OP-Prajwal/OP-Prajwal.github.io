"use client";

import { useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleToggle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const isDark = resolvedTheme === "dark";
      const nextTheme = isDark ? "light" : "dark";

      if (!document.startViewTransition || !btnRef.current) {
        setTheme(nextTheme);
        return;
      }

      // Use the click/tap coordinates directly — on mobile the Dock's
      // magnification animation can resize the button between tap-start
      // and this handler, making getBoundingClientRect() return a stale
      // (often top-of-viewport) position.  Fall back to the ref center
      // only for non-pointer activations (e.g. keyboard Enter).
      let x: number;
      let y: number;
      if (e.clientX !== 0 || e.clientY !== 0) {
        x = e.clientX;
        y = e.clientY;
      } else {
        const rect = btnRef.current.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }

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
    },
    [resolvedTheme, setTheme]
  );

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
