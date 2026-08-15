"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-full w-full dark:hidden" />
      <MoonIcon className="hidden h-full w-full dark:block" />
    </Button>
  );
}
