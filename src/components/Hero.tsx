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

  // IT Company visual cards for the crossway background carousel
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

  const carouselItems = [...itVisualCards, ...itVisualCards, ...itVisualCards];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none bg-atmospheric"
    >
      {/* 
        Crossway Background Image Carousel:
        Two intersecting diagonal carousel tracks running in opposite directions
        featuring enterprise IT data centers, cybersecurity NOCs, and cloud DevOps environments.
      */}
      <div
        aria-hidden="true"
        className="crossway-container"
        style={{
          transform: `translate3d(${mouseOffset.x * -1}px, ${mouseOffset.y * -1}px, 0)`,
        }}
      >
        {/* Track A: Angled at -7deg, sliding continuously to the left */}
        <div
          className="animate-crossway-left"
          style={{ transform: "rotate(-7deg)" }}
        >
          <div className="flex items-center gap-6 pr-6">
            {carouselItems.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={`trackA-${idx}`}
                  className="relative w-80 sm:w-96 h-48 sm:h-56 rounded-2xl overflow-hidden bg-[#0A1F1C] border border-[#8DE0C1]/20 shadow-2xl flex-shrink-0 group"
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover opacity-60 filter saturate-120 group-hover:scale-105 transition-transform duration-700"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B19] via-[#081B19]/50 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-[#8DE0C1]">
                    <span className="px-2 py-0.5 rounded bg-[#081B19]/80 border border-[#8DE0C1]/30 backdrop-blur-xs">
                      {card.tag}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-[#8DE0C1]" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-xs font-mono text-[#F1F3EB] font-medium truncate">
                      {card.title}
                    </div>
                    <div className="text-[10px] font-mono text-[#D5A17D] flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
                      {card.metric}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Track B: Angled at +7deg, sliding continuously to the right (Crossing Track A) */}
        <div
          className="animate-crossway-right"
          style={{ transform: "rotate(7deg)" }}
        >
          <div className="flex items-center gap-6 pr-6">
            {carouselItems.slice().reverse().map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={`trackB-${idx}`}
                  className="relative w-80 sm:w-96 h-48 sm:h-56 rounded-2xl overflow-hidden bg-[#0A1F1C] border border-[#D5A17D]/20 shadow-2xl flex-shrink-0 group"
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover opacity-55 filter saturate-120 group-hover:scale-105 transition-transform duration-700"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B19] via-[#081B19]/50 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-[#D5A17D]">
                    <span className="px-2 py-0.5 rounded bg-[#081B19]/80 border border-[#D5A17D]/30 backdrop-blur-xs">
                      {card.tag}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-[#D5A17D]" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-xs font-mono text-[#F1F3EB] font-medium truncate">
                      {card.title}
                    </div>
                    <div className="text-[10px] font-mono text-[#8DE0C1] flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
                      {card.metric}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Radial Contrast Mask for Pristine Text Readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#081B19]/80 via-[#081B19]/90 to-[#081B19] z-0"
      />

      {/* Centered Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center my-auto">
        {/* Status Eyebrow Badge with Radar Sonar Beacon */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#102A26]/90 border border-[#8DE0C1]/40 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-md transition-all duration-700 shadow-lg shadow-black/30 ${
            isIntroActive ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-[#8DE0C1] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8DE0C1]" />
          </span>
          <span>[ ENTERPRISE IT SERVICES &amp; MANAGED CLOUD ]</span>
        </div>

        {/* Centered Headline with Vayem-style Luxury Serif Italic Accent */}
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F1F3EB] leading-[1.08] mb-8 transition-all duration-800 ${
            isIntroActive ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          <span className="block font-light">Next-Generation IT Services &amp;</span>
          <span className="block font-serif italic font-normal bg-gradient-to-r from-[#F1F3EB] via-[#8DE0C1] to-[#D5A17D] bg-clip-text text-transparent">
            Cloud Infrastructure
          </span>
          <span className="block font-light">Engineered for Resilience.</span>
        </h1>

        {/* Centered Supporting Paragraph */}
        <p
          className={`text-base sm:text-xl text-[#A4B7AF] font-light max-w-2xl leading-relaxed mb-10 transition-all duration-800 ${
            isIntroActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          ADORA TECH delivers mission-critical managed IT solutions, 24/7 cloud DevOps,
          zero-trust cybersecurity, and custom enterprise software for high-growth global businesses.
        </p>

        {/* Centered Action Button Row */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-800 mb-12 ${
            isIntroActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-[#081B19] bg-[#8DE0C1] hover:bg-[#A3E8D0] shadow-[0_0_25px_rgba(141,224,193,0.35)] hover:shadow-[0_0_35px_rgba(141,224,193,0.5)] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
          >
            <span>Schedule IT Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide text-[#F1F3EB] bg-[#102A26]/80 hover:bg-[#153833] border border-[#A4B7AF]/20 hover:border-[#8DE0C1]/40 backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
          >
            <span>Explore IT Capabilities</span>
          </Link>
        </div>

        {/* Centered Trust Indicators Bar */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-[#A4B7AF]/70 pt-6 border-t border-[#A4B7AF]/15 transition-all duration-800 ${
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
