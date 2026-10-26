"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Activity, Terminal, Layout } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

interface HeroProps {
  isIntroActive: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isIntroActive }) => {
  const containerRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
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
          x: normX * 12,
          y: normY * 12,
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
      className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none bg-atmospheric"
    >
      {/* Background technical grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #A4B7AF 1px, transparent 1px), linear-gradient(to bottom, #A4B7AF 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        {/* Left Column: Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Small Label */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-6 transition-all duration-700 ${
              isIntroActive ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span>{SITE_CONFIG.hero.smallLabel}</span>
          </div>

          {/* Headline */}
          <h1
            className={`font-[family-name:var(--font-outfit)] text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#F1F3EB] leading-[1.08] mb-6 transition-all duration-800 ${
              isIntroActive ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="block font-light">{SITE_CONFIG.hero.headlineLine1}</span>
            <span className="block font-medium bg-gradient-to-r from-[#F1F3EB] via-[#D5A17D] to-[#8DE0C1] bg-clip-text text-transparent">
              {SITE_CONFIG.hero.headlineLine2}
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            className={`max-w-xl text-base sm:text-lg md:text-xl text-[#A4B7AF] font-light leading-relaxed mb-8 transition-all duration-700 ${
              isIntroActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            {SITE_CONFIG.hero.supportingText}
          </p>

          {/* Action CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8 transition-all duration-700 ${
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
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-full text-sm font-medium tracking-wide text-[#F1F3EB] bg-[#102A26]/80 hover:bg-[#153833] border border-[#A4B7AF]/20 hover:border-[#8DE0C1]/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
            >
              <span>{SITE_CONFIG.hero.secondaryCta}</span>
            </a>
          </div>

          {/* Secondary Line */}
          <div
            className={`text-xs font-mono uppercase tracking-widest text-[#A4B7AF]/60 transition-all duration-700 ${
              isIntroActive ? "opacity-0" : "opacity-100"
            }`}
            style={{ transitionDelay: "650ms" }}
          >
            <span>{SITE_CONFIG.hero.secondaryLine}</span>
          </div>
        </div>

        {/* Right Column: Art-Directed Digital Product Visual (Composite Mockups) */}
        <div
          ref={visualRef}
          className={`lg:col-span-5 relative flex items-center justify-center transition-all duration-1000 ${
            isIntroActive ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            transitionDelay: "400ms",
          }}
        >
          {/* Ambient Glow Backdrop */}
          <div
            aria-hidden="true"
            className="absolute w-80 h-80 rounded-full opacity-35 blur-3xl pointer-events-none -z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(141, 224, 193, 0.45) 0%, rgba(213, 161, 125, 0.3) 60%, transparent 80%)",
            }}
          />

          {/* Spatial Multi-Device Mockup Stack */}
          <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
            {/* 1. Base Layer: Website Interface Mockup */}
            <div className="absolute top-0 right-2 w-[85%] rounded-2xl bg-[#0D2421] border border-[#A4B7AF]/20 shadow-2xl p-4 overflow-hidden">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#A4B7AF]/15 text-[10px] font-mono text-[#A4B7AF]/60">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-400/50" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/50" />
                  <span className="w-2 h-2 rounded-full bg-green-400/50" />
                </div>
                <span className="text-[#8DE0C1]/80">adora-tech.studio</span>
                <Layout className="w-3 h-3" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-1/3 bg-[#8DE0C1]/30 rounded" />
                <div className="h-2 w-2/3 bg-[#A4B7AF]/20 rounded" />
                <div className="h-16 rounded-lg bg-[#081B19] border border-[#A4B7AF]/10 p-2 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#D5A17D]">
                    Spatial Canvas
                  </span>
                  <div className="w-6 h-6 rounded-full border border-[#8DE0C1]/40 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1]" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Middle Layer: Internal Software Dashboard Console */}
            <div className="absolute bottom-2 right-0 w-[72%] rounded-xl bg-[#081B19]/95 border border-[#8DE0C1]/30 shadow-2xl p-3.5 backdrop-blur-md">
              <div className="flex items-center justify-between text-[10px] font-mono pb-1.5 mb-2 border-b border-[#A4B7AF]/15">
                <div className="flex items-center gap-1.5 text-[#8DE0C1]">
                  <Terminal className="w-3 h-3" />
                  <span>DISPATCH TELEMETRY</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#153833] text-[#8DE0C1]">
                  LIVE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[9px] mb-2">
                <div className="p-1 rounded bg-[#102A26] text-[#F1F3EB]">
                  <span className="text-[#A4B7AF]/60 block text-[8px]">NODES</span>
                  64
                </div>
                <div className="p-1 rounded bg-[#102A26] text-[#8DE0C1]">
                  <span className="text-[#A4B7AF]/60 block text-[8px]">HEALTH</span>
                  99.9%
                </div>
                <div className="p-1 rounded bg-[#102A26] text-[#D5A17D]">
                  <span className="text-[#A4B7AF]/60 block text-[8px]">QUEUE</span>
                  0
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-[#102A26] overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-[#8DE0C1] to-[#D5A17D] rounded-full" />
              </div>
            </div>

            {/* 3. Foreground Left Layer: Mobile Screen Companion */}
            <div className="absolute -left-2 bottom-4 w-[42%] rounded-2xl bg-[#081B19] border-2 border-[#163631] shadow-2xl p-3">
              <div className="flex items-center justify-between text-[9px] font-mono text-[#A4B7AF]/60 pb-1.5">
                <span>09:41</span>
                <div className="w-8 h-1.5 bg-black rounded-full" />
                <span>100%</span>
              </div>
              <div className="my-2 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-[#8DE0C1]/40 flex items-center justify-center relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full blur-xs opacity-50"
                    style={{
                      background:
                        "conic-gradient(from 180deg, #8DE0C1, #D5A17D, #8DE0C1)",
                    }}
                  />
                  <div className="w-12 h-12 rounded-full bg-[#081B19] z-10 flex items-center justify-center">
                    <span className="text-xs font-mono font-medium text-[#F1F3EB]">
                      94%
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-mono uppercase text-[#8DE0C1] mt-1.5">
                  Performance
                </span>
              </div>
              <div className="p-1.5 rounded bg-[#102A26]/80 flex items-center justify-between text-[9px] font-mono text-[#A4B7AF]">
                <Activity className="w-3 h-3 text-[#8DE0C1]" />
                <span className="text-[#F1F3EB]">12ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#A4B7AF]/60 hover:text-[#8DE0C1] transition-all duration-500 cursor-pointer ${
          isIntroActive ? "opacity-0" : "opacity-100"
        }`}
        style={{ transitionDelay: "750ms" }}
        onClick={() => handleScrollTo("#services")}
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
