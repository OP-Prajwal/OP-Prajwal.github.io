"use client";

import { useEffect, useState } from "react";

export function Snow() {
  const [snowflakes, setSnowflakes] = useState<any[]>([]);

  useEffect(() => {
    // Generate 50 snowflakes with random positions and animation properties
    const flakes = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 5 + 5}s`, // Between 5s and 10s
      animationDelay: `${Math.random() * 5}s`, // Between 0s and 5s
      opacity: Math.random() * 0.5 + 0.2, // Between 0.2 and 0.7
      size: `${Math.random() * 6 + 4}px`, // Between 4px and 10px
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-foreground/50 animate-snow"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            top: "-10%",
          }}
        />
      ))}
    </div>
  );
}
