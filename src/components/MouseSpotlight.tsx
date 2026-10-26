"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * MouseSpotlight Component
 *
 * Silky-smooth interpolated ambient cursor glow that illuminates dark surfaces
 * and cards as the user explores the website.
 */
export const MouseSpotlight: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const { isDark } = useTheme();

  useEffect(() => {
    // Check if device supports fine cursor
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animId: number;
    const lerpFactor = 0.12;

    const animate = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentPos.current.x - 300}px, ${currentPos.current.y - 300}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full z-30 transition-opacity duration-700 select-none will-change-transform"
      style={{
        background: isDark
          ? "radial-gradient(circle, rgba(141, 224, 193, 0.08) 0%, rgba(213, 161, 125, 0.03) 40%, transparent 70%)"
          : "radial-gradient(circle, rgba(14, 124, 95, 0.06) 0%, rgba(158, 88, 40, 0.03) 40%, transparent 70%)",
      }}
    />
  );
};
