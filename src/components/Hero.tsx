"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Activity, Terminal, Layout, ShieldCheck, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";
import { useIntro } from "./PageTransitionProvider";
import { AnimatedCounter } from "./AnimatedCounter";

interface HeroProps {
  isIntroActive?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isIntroActive: propIntroActive }) => {
  const { isIntroActive: contextIntroActive } = useIntro();
  const isIntroActive = propIntroActive !== undefined ? propIntroActive : contextIntroActive;
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
          x: normX * 10,
          y: normY * 10,
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
    <>
      <section
        id="hero"
        ref={containerRef}
        className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none bg-atmospheric"
      >
        {/* 
          Background Dynamic Media Wall (Inspired by Vayem Studios' .wall) 
          Adds deep visual texture with scrolling columns of digital interface previews
        */}
        <div aria-hidden="true" className="media-wall">
          {/* Column 1 (Scrolling Up) */}
          <div className="media-wall-col animate-wall-1">
            {[1, 2, 3, 4, 1, 2].map((i, idx) => (
              <div
                key={`c1-${idx}`}
                className="h-44 rounded-2xl bg-[#102A26]/40 border border-[#A4B7AF]/10 p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#8DE0C1]">
                  <span>INTERFACE_0{i}</span>
                  <Activity className="w-3.5 h-3.5 text-[#8DE0C1]" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-3/4 bg-[#8DE0C1]/20 rounded" />
                  <div className="h-2 w-1/2 bg-[#A4B7AF]/10 rounded" />
                </div>
                <div className="h-8 rounded bg-[#081B19]/60 border border-[#A4B7AF]/10 flex items-center px-2 text-[9px] font-mono text-[#D5A17D]">
                  LATENCY &lt; 14ms
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 (Scrolling Down) */}
          <div className="media-wall-col animate-wall-2">
            {[1, 2, 3, 4, 1, 2].map((i, idx) => (
              <div
                key={`c2-${idx}`}
                className="h-52 rounded-2xl bg-[#0D2421]/50 border border-[#8DE0C1]/15 p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#D5A17D]">
                  <span>STUDIO_APP_{i}</span>
                  <Terminal className="w-3.5 h-3.5 text-[#D5A17D]" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-[#8DE0C1]/30 flex items-center justify-center text-[10px] font-mono text-[#F1F3EB]">
                    60 FPS
                  </div>
                </div>
                <div className="text-[9px] font-mono text-[#A4B7AF]/60 text-center">
                  TOUCH &amp; HAPTIC SYNC
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 (Scrolling Up) */}
          <div className="media-wall-col animate-wall-3 hidden md:flex">
            {[1, 2, 3, 4, 1, 2].map((i, idx) => (
              <div
                key={`c3-${idx}`}
                className="h-44 rounded-2xl bg-[#102A26]/40 border border-[#A4B7AF]/10 p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#8DE0C1]">
                  <span>EDGE_TELEMETRY</span>
                  <Zap className="w-3.5 h-3.5 text-[#8DE0C1]" />
                </div>
                <div className="space-y-1">
                  <div className="h-2 w-4/5 bg-[#8DE0C1]/20 rounded" />
                  <div className="h-2 w-2/5 bg-[#A4B7AF]/10 rounded" />
                </div>
                <div className="text-[9px] font-mono text-[#8DE0C1]">
                  ACTIVE STREAM
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Shade Overlay for high text contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#081B19] via-[#081B19]/85 to-[#081B19]/60"
        />

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Eyebrow Label with Multi-Ring Live Radar Indicator */}
            <div
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-6 transition-all duration-700 shadow-sm ${
                isIntroActive ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-[#8DE0C1] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8DE0C1]" />
              </span>
              <span>{SITE_CONFIG.hero.smallLabel}</span>
            </div>

            {/* Headline with Vayem-style Luxury Serif Italic Accent */}
            <h1
              className={`text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-[#F1F3EB] leading-[1.06] mb-6 transition-all duration-800 ${
                isIntroActive ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <span className="block font-light">{SITE_CONFIG.hero.headlineLine1}</span>
              <span className="block font-serif italic font-normal bg-gradient-to-r from-[#F1F3EB] via-[#8DE0C1] to-[#D5A17D] bg-clip-text text-transparent">
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
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#8DE0C1] hover:bg-[#A1E8D0] text-[#081B19] shadow-[0_0_25px_rgba(141,224,193,0.3)] hover:shadow-[0_0_35px_rgba(141,224,193,0.5)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8DE0C1]"
              >
                <span>{SITE_CONFIG.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-full text-sm font-medium tracking-wide text-[#F1F3EB] bg-[#102A26]/80 hover:bg-[#153833] border border-[#A4B7AF]/20 hover:border-[#8DE0C1]/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
              >
                <span>{SITE_CONFIG.hero.secondaryCta}</span>
              </Link>
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

          {/* Right Column: Composite Spatial Digital Product Visual */}
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
            {/* Ambient Glow */}
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
              {/* 1. Base Layer: Website Interface */}
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

              {/* 2. Middle Layer: Software Dashboard Console */}
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

        {/* Scroll Cue */}
        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#A4B7AF]/60 hover:text-[#8DE0C1] transition-all duration-500 cursor-pointer ${
            isIntroActive ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDelay: "750ms" }}
          onClick={() => handleScrollTo("#proof")}
          aria-hidden="true"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </section>

      {/* 
        High-Impact Proof Statistics Banner (Inspired by Vayem Studios' .proof-sec)
        Large typography with clear metrics, fine borders, and elevated surfaces
      */}
      <section id="proof" className="border-y border-[#A4B7AF]/15 bg-[#0A1F1C]/90 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="card-interactive p-5 rounded-2xl bg-[#0D2421]/60 border border-[#A4B7AF]/10 flex flex-col gap-1.5">
            <span className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-light text-[#F1F3EB] tracking-tight">
              <AnimatedCounter end={99.8} decimals={1} suffix="%" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#A4B7AF]/80">
              Operational Uptime &amp; Speed
            </span>
          </div>

          <div className="card-interactive p-5 rounded-2xl bg-[#0D2421]/60 border border-[#A4B7AF]/10 flex flex-col gap-1.5">
            <span className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-light text-[#8DE0C1] tracking-tight">
              <AnimatedCounter end={14} prefix="< " suffix="ms" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#A4B7AF]/80">
              Sub-Second Edge API Latency
            </span>
          </div>

          <div className="card-interactive p-5 rounded-2xl bg-[#0D2421]/60 border border-[#A4B7AF]/10 flex flex-col gap-1.5">
            <span className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-light text-[#D5A17D] tracking-tight">
              <AnimatedCounter end={60} suffix=" FPS" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#A4B7AF]/80">
              Fluid Gesture Micro-Interactions
            </span>
          </div>

          <div className="card-interactive p-5 rounded-2xl bg-[#0D2421]/60 border border-[#A4B7AF]/10 flex flex-col gap-1.5">
            <span className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-light text-[#F1F3EB] tracking-tight">
              <AnimatedCounter end={100} suffix="%" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#A4B7AF]/80">
              Bespoke Code, Zero Templates
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
