"use client";

import React, { useEffect, useRef, memo } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  depth: number;
}

export const CinematicParticles = memo(function CinematicParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    const particleCount = 28;
    const colors = ["rgba(141, 224, 193,", "rgba(213, 161, 125,", "rgba(241, 243, 235,"];
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.0 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.3 - 0.05,
        opacity: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        depth: Math.random() * 0.8 + 0.2,
      });
    }

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX * p.depth;
        p.y += p.speedY * p.depth;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.depth, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.opacity * p.depth})`;
        ctx.shadowBlur = 6 * p.depth;
        ctx.shadowColor = p.color.includes("141") ? "#8DE0C1" : "#D5A17D";
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 w-full h-full select-none"
      style={{ opacity: 0.6 }}
    />
  );
});
