"use client";

import { flushSync } from "react-dom";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { playSound } from "@/lib/sound-engine";
import { click003Sound } from "@/lib/click-003";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    void playSound(click003Sound.dataUri, { volume: 0.5 });
    const next = resolvedTheme === "dark" ? "light" : "dark";

    if (!("startViewTransition" in document)) {
      setTheme(next);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );


    const transition = document.startViewTransition(() => {
      document.documentElement.classList.add("disable-transitions");
      flushSync(() => {
        setTheme(next);
      });
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
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });

    transition.finished.then(() => {
      document.documentElement.classList.remove("disable-transitions");
    });
  };

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      onClick={toggleTheme}
    >
      <SunIcon className="h-full w-full dark:hidden" />
      <MoonIcon className="hidden h-full w-full dark:block" />
    </Button>
  );
}