"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { SITE_CONFIG } from "@/data/content";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="border-t border-[#A4B7AF]/15 bg-[#081B19] pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      {/* Ambient bottom-center glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(141, 224, 193, 0.45) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-16 relative z-10">
        {/* Top Section: CTA + Column Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 sm:gap-16">
          {/* Left CTA */}
          <div className="max-w-md">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F1F3EB] tracking-tight leading-[1.08] mb-6">
              Let&apos;s talk about your{" "}
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] to-[#D5A17D]">
                next project
              </span>
              .
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-[#081B19] bg-[#8DE0C1] hover:bg-[#A3E8D0] shadow-[0_0_20px_rgba(141,224,193,0.35)] transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-xs sm:text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8DE0C1]">
                STUDIO
              </span>
              <Link href="/about" className="text-[#A4B7AF] hover:text-[#F1F3EB] transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-[#A4B7AF] hover:text-[#F1F3EB] transition-colors">
                Capabilities
              </Link>
              <Link href="/#work" className="text-[#A4B7AF] hover:text-[#F1F3EB] transition-colors">
                Selected Work
              </Link>
              <Link href="/#process" className="text-[#A4B7AF] hover:text-[#F1F3EB] transition-colors">
                Methodology
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8DE0C1]">
                INSIGHTS
              </span>
              <Link href="/blog" className="text-[#A4B7AF] hover:text-[#F1F3EB] transition-colors">
                Journal
              </Link>
              <Link href="/#faq" className="text-[#A4B7AF] hover:text-[#F1F3EB] transition-colors">
                Technical FAQ
              </Link>
              <Link href="/#engagement" className="text-[#A4B7AF] hover:text-[#F1F3EB] transition-colors">
                Retainers &amp; Scope
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8DE0C1]">
                CONNECT
              </span>
              <Link href="/contact" className="text-[#A4B7AF] hover:text-[#F1F3EB] transition-colors">
                Engineering Desk
              </Link>
              <a
                href="mailto:contact@adoratech.com"
                className="text-[#A4B7AF] hover:text-[#F1F3EB] transition-colors"
              >
                contact@adoratech.com
              </a>
              <span className="text-[#A4B7AF]/60 text-xs font-mono">
                Surat, India // Global Client Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Vayem Studios Inspired Giant Watermark Wordmark (.foot-word) */}
        <div
          aria-hidden="true"
          className="w-full text-center pointer-events-none select-none my-2 -mx-[2vw]"
        >
          <span className="font-[family-name:var(--font-outfit)] text-[clamp(64px,18vw,280px)] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#F1F3EB]/15 via-[#F1F3EB]/5 to-transparent block leading-[0.8] uppercase select-none">
            ADORA TECH
          </span>
        </div>

        {/* Bottom Row: Copyright & Back-to-Top */}
        <div className="pt-6 border-t border-[#A4B7AF]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A4B7AF]/60">
          <span>&copy; {SITE_CONFIG.year} ADORA TECH. Digital Studio &amp; Cloud Systems.</span>
          <div className="flex items-center gap-6">
            <span>Enterprise SLA // Zero-Downtime Guaranteed</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="p-2.5 rounded-full bg-[#102A26] hover:bg-[#153833] text-[#A4B7AF] hover:text-[#8DE0C1] border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all focus:outline-none"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
