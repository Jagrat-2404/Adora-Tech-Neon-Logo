"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

interface HeroProps {
  isIntroActive: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isIntroActive }) => {
  const containerRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable mouse-move parallax on desktop devices supporting true hover
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!supportsHover || prefersReducedMotion) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const normX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
        const normY = (e.clientY - innerHeight / 2) / (innerHeight / 2);
        setMouseOffset({
          x: normX * 18,
          y: normY * 18,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleScrollTo = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none bg-atmospheric"
    >
      {/* Subtle background technical grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #A4B7AF 1px, transparent 1px), linear-gradient(to bottom, #A4B7AF 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Atmospheric Glowing Neon Emblem Ring (Inspired by the logo's "O") */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="absolute pointer-events-none transition-transform duration-700 ease-out flex items-center justify-center -z-10"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          top: "18%",
          right: "8%",
        }}
      >
        {/* Soft radial glow */}
        <div
          className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] rounded-full opacity-30 animate-pulse duration-5000"
          style={{
            background:
              "radial-gradient(circle at 35% 45%, rgba(141, 224, 193, 0.45) 0%, transparent 65%), radial-gradient(circle at 65% 55%, rgba(213, 161, 125, 0.35) 0%, transparent 65%)",
            filter: "blur(48px)",
          }}
        />

        {/* Crisp decorative ring motif */}
        <div
          className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-white/10 opacity-40"
          style={{
            boxShadow:
              "0 0 40px rgba(141, 224, 193, 0.25), inset 0 0 30px rgba(213, 161, 125, 0.15)",
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto w-full text-center sm:text-left z-10 flex flex-col items-center sm:items-start">
        {/* Small Supporting Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A26]/80 border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-6 transition-all duration-700 ${
            isIntroActive ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#8DE0C1]" />
          <span>{SITE_CONFIG.hero.categoryLabel}</span>
        </div>

        {/* Large Editorial Headline */}
        <h1
          className={`font-[family-name:var(--font-outfit)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F1F3EB] leading-[1.08] mb-6 transition-all duration-800 ${
            isIntroActive ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="block">{SITE_CONFIG.hero.headlinePart1}</span>
          <span className="block font-medium bg-gradient-to-r from-[#F1F3EB] via-[#D5A17D] to-[#8DE0C1] bg-clip-text text-transparent">
            {SITE_CONFIG.hero.headlinePart2}
          </span>
        </h1>

        {/* Supporting Copy */}
        <p
          className={`max-w-2xl text-lg sm:text-xl md:text-2xl text-[#A4B7AF] font-light leading-relaxed mb-10 transition-all duration-700 ${
            isIntroActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          {SITE_CONFIG.hero.supportingText}
        </p>

        {/* Dual Call to Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto transition-all duration-700 ${
            isIntroActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#contact");
            }}
            className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#8DE0C1] hover:bg-[#A1E8D0] text-[#081B19] shadow-[0_0_25px_rgba(141,224,193,0.3)] hover:shadow-[0_0_35px_rgba(141,224,193,0.5)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8DE0C1]"
          >
            <span>{SITE_CONFIG.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#work");
            }}
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-full text-sm font-medium tracking-wide text-[#F1F3EB] bg-[#102A26]/70 hover:bg-[#153833] border border-[#A4B7AF]/20 hover:border-[#8DE0C1]/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
          >
            <span>{SITE_CONFIG.hero.secondaryCta}</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A4B7AF]/60 hover:text-[#8DE0C1] transition-all duration-500 cursor-pointer ${
          isIntroActive ? "opacity-0" : "opacity-100"
        }`}
        style={{ transitionDelay: "700ms" }}
        onClick={() => handleScrollTo("#services")}
        aria-hidden="true"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
