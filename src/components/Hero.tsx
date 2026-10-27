"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Activity, Terminal, ShieldCheck, Zap, Server, Cloud, Database } from "lucide-react";
import { useIntro } from "./PageTransitionProvider";

interface HeroProps {
  isIntroActive?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isIntroActive: propIntroActive }) => {
  const { isIntroActive: contextIntroActive } = useIntro();
  const isIntroActive = propIntroActive !== undefined ? propIntroActive : contextIntroActive;
  const containerRef = useRef<HTMLElement>(null);
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
          x: normX * 8,
          y: normY * 8,
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

  // IT Company visual cards for the 5-column vertical background carousel
  const itVisualCards = [
    {
      title: "ENTERPRISE_DATACENTER // NODE_01",
      tag: "TIER-IV INFRASTRUCTURE",
      img: "/images/it_datacenter.jpg",
      metric: "99.99% SLA",
      icon: Server,
    },
    {
      title: "SOC_CYBERSECURITY // THREAT_MAP",
      tag: "ZERO-TRUST DEFENSE",
      img: "/images/it_soc.jpg",
      metric: "24/7 ACTIVE SHIELD",
      icon: ShieldCheck,
    },
    {
      title: "CLOUD_DEVOPS // KUBE_CLUSTER",
      tag: "AUTO-SCALING MESH",
      img: "/images/it_devops.jpg",
      metric: "<14MS LATENCY",
      icon: Cloud,
    },
  ];

  // Alternating sets for the 5 vertical columns (each repeated to loop infinitely)
  const col1Items = [...itVisualCards, ...itVisualCards];
  const col2Items = [...itVisualCards.slice(1), ...itVisualCards, itVisualCards[0]];
  const col3Items = [...itVisualCards.slice(2), ...itVisualCards, ...itVisualCards.slice(0, 2)];
  const col4Items = [...itVisualCards, ...itVisualCards];
  const col5Items = [...itVisualCards.slice(1), ...itVisualCards, itVisualCards[0]];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[96vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none bg-[#081B19]"
    >
      {/* 
        Vertical Multi-Column Background Carousel (4-5 Columns):
        Faded appearance allowing high contrast for the centered headline,
        flowing rhythmically with alternating vertical directions.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex justify-center gap-4 sm:gap-6 lg:gap-8 opacity-35 select-none px-4"
        style={{
          transform: `translate3d(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px, 0)`,
        }}
      >
        {/* Column 1: Slides Up */}
        <div className="w-52 sm:w-60 lg:w-68 shrink-0 flex flex-col gap-5 animate-col-up-1">
          {col1Items.map((card, idx) => (
            <div
              key={`col1-${idx}`}
              className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-[#102A26] border border-[#8DE0C1]/25 shadow-lg shrink-0 group"
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover opacity-90 filter contrast-110 brightness-100"
                sizes="280px"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B19]/90 via-[#081B19]/30 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-[#081B19]/85 border border-[#8DE0C1]/40 text-[#8DE0C1] backdrop-blur-md font-medium">
                  {card.tag}
                </span>
                <div className="p-1.5 rounded-full bg-[#081B19]/85 border border-[#8DE0C1]/40 text-[#8DE0C1]">
                  <card.icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-white/90 truncate mr-2 font-medium">{card.title}</span>
                <span className="shrink-0 text-[10px] text-[#8DE0C1]">{card.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2: Slides Down */}
        <div className="w-52 sm:w-60 lg:w-68 shrink-0 flex flex-col gap-5 animate-col-down-2">
          {col2Items.map((card, idx) => (
            <div
              key={`col2-${idx}`}
              className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-[#102A26] border border-[#D5A17D]/25 shadow-lg shrink-0 group"
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover opacity-90 filter contrast-110 brightness-100"
                sizes="280px"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B19]/90 via-[#081B19]/30 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-[#081B19]/85 border border-[#D5A17D]/40 text-[#D5A17D] backdrop-blur-md font-medium">
                  {card.tag}
                </span>
                <div className="p-1.5 rounded-full bg-[#081B19]/85 border border-[#D5A17D]/40 text-[#D5A17D]">
                  <card.icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-white/90 truncate mr-2 font-medium">{card.title}</span>
                <span className="shrink-0 text-[10px] text-[#D5A17D]">{card.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Column 3: Slides Up */}
        <div className="w-52 sm:w-60 lg:w-68 shrink-0 flex flex-col gap-5 animate-col-up-3">
          {col3Items.map((card, idx) => (
            <div
              key={`col3-${idx}`}
              className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-[#102A26] border border-[#8DE0C1]/25 shadow-lg shrink-0 group"
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover opacity-90 filter contrast-110 brightness-100"
                sizes="280px"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B19]/90 via-[#081B19]/30 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-[#081B19]/85 border border-[#8DE0C1]/40 text-[#8DE0C1] backdrop-blur-md font-medium">
                  {card.tag}
                </span>
                <div className="p-1.5 rounded-full bg-[#081B19]/85 border border-[#8DE0C1]/40 text-[#8DE0C1]">
                  <card.icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-white/90 truncate mr-2 font-medium">{card.title}</span>
                <span className="shrink-0 text-[10px] text-[#8DE0C1]">{card.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Column 4: Slides Down (Hidden on small mobile) */}
        <div className="hidden sm:flex w-52 sm:w-60 lg:w-68 shrink-0 flex flex-col gap-5 animate-col-down-4">
          {col4Items.map((card, idx) => (
            <div
              key={`col4-${idx}`}
              className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-[#102A26] border border-[#D5A17D]/25 shadow-lg shrink-0 group"
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover opacity-90 filter contrast-110 brightness-100"
                sizes="280px"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B19]/90 via-[#081B19]/30 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-[#081B19]/85 border border-[#D5A17D]/40 text-[#D5A17D] backdrop-blur-md font-medium">
                  {card.tag}
                </span>
                <div className="p-1.5 rounded-full bg-[#081B19]/85 border border-[#D5A17D]/40 text-[#D5A17D]">
                  <card.icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-white/90 truncate mr-2 font-medium">{card.title}</span>
                <span className="shrink-0 text-[10px] text-[#D5A17D]">{card.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Column 5: Slides Up (Visible on lg+) */}
        <div className="hidden lg:flex w-68 shrink-0 flex flex-col gap-5 animate-col-up-5">
          {col5Items.map((card, idx) => (
            <div
              key={`col5-${idx}`}
              className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-[#102A26] border border-[#8DE0C1]/25 shadow-lg shrink-0 group"
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover opacity-90 filter contrast-110 brightness-100"
                sizes="280px"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B19]/90 via-[#081B19]/30 to-transparent" />
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-[#081B19]/85 border border-[#8DE0C1]/40 text-[#8DE0C1] backdrop-blur-md font-medium">
                  {card.tag}
                </span>
                <div className="p-1.5 rounded-full bg-[#081B19]/85 border border-[#8DE0C1]/40 text-[#8DE0C1]">
                  <card.icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-white/90 truncate mr-2 font-medium">{card.title}</span>
                <span className="shrink-0 text-[10px] text-[#8DE0C1]">{card.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gentle Center Radial Fade for Optimal Readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(8,27,25,0.78)_0%,rgba(8,27,25,0.52)_55%,rgba(8,27,25,0.92)_100%)] z-10"
      />

      {/* Centered Main Content Container (Open & Clean - No Box) */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center my-auto px-4">
        {/* Status Eyebrow Badge with Radar Sonar Beacon */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#102A26]/90 border border-[#8DE0C1]/40 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-md transition-opacity duration-700 shadow-xl shadow-black/40 ${
            isIntroActive ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-[#8DE0C1] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8DE0C1]" />
          </span>
          <span>[ ENTERPRISE IT SERVICES &amp; MANAGED CLOUD ]</span>
        </div>

        {/* Centered Headline with Luxury Serif Italic Accent and High Legibility Drop Shadow */}
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08] mb-8 transition-opacity duration-800 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] ${
            isIntroActive ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          <span className="block font-light">Next-Generation IT Services &amp;</span>
          <span className="block font-serif italic font-normal bg-gradient-to-r from-white via-[#8DE0C1] to-[#D5A17D] bg-clip-text text-transparent">
            Cloud Infrastructure
          </span>
          <span className="block font-light">Engineered for Resilience.</span>
        </h1>

        {/* Centered Supporting Paragraph */}
        <p
          className={`text-base sm:text-xl text-[#F1F3EB] font-light max-w-2xl leading-relaxed mb-10 transition-opacity duration-800 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] ${
            isIntroActive ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          ADORA TECH delivers mission-critical managed IT solutions, 24/7 cloud DevOps,
          zero-trust cybersecurity, and custom enterprise software for high-growth global businesses.
        </p>

        {/* Centered Action Button Row */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 transition-opacity duration-800 mb-12 ${
            isIntroActive ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-[#081B19] bg-[#8DE0C1] hover:bg-[#A3E8D0] shadow-[0_0_30px_rgba(141,224,193,0.45)] hover:shadow-[0_0_40px_rgba(141,224,193,0.6)] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
          >
            <span>Schedule IT Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide text-[#F1F3EB] bg-[#102A26]/80 hover:bg-[#153833] border border-[#A4B7AF]/20 hover:border-[#8DE0C1]/40 backdrop-blur-md shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
          >
            <span>Explore IT Capabilities</span>
          </Link>
        </div>

        {/* Centered Trust Indicators Bar */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-[#A4B7AF]/80 pt-6 border-t border-[#A4B7AF]/15 transition-all duration-800 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] ${
            isIntroActive ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDelay: "550ms" }}
        >
          <span className="flex items-center gap-2">
            <span className="text-[#8DE0C1]">✦</span> 99.99% UPTIME SLA
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#D5A17D]">✦</span> 24/7/365 DEDICATED NOC
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#8DE0C1]">✦</span> SOC 2 &amp; ISO 27001 AUDITED
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#D5A17D]">✦</span> AWS &amp; AZURE PARTNER
          </span>
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
          Explore Services
        </span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
