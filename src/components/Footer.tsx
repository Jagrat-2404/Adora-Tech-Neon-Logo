"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
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

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[#A4B7AF]/15 bg-[#081B19] pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      {/* Ambient bottom-center glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(141, 224, 193, 0.45) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-16 relative z-10">
        {/* Top Row: Brand & Navigation */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          {/* Brand & Descriptor */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              aria-label="ADORA TECH home"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1] rounded"
            >
              <BrandLogo size="md" withGlow={false} interactive />
            </Link>
            <span className="text-xs font-mono tracking-widest uppercase text-[#A4B7AF]/70">
              {SITE_CONFIG.descriptor}
            </span>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-[#A4B7AF]"
          >
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-[#8DE0C1] transition-colors focus:outline-none focus-visible:underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="hover:text-[#8DE0C1] transition-colors focus:outline-none focus-visible:underline"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Oversized Low-Contrast Architectural Typographic Signature */}
        <div
          aria-hidden="true"
          className="w-full text-center pointer-events-none overflow-hidden my-4"
        >
          <span
            className="font-[family-name:var(--font-outfit)] text-5xl sm:text-7xl md:text-9xl lg:text-[140px] font-extrabold tracking-widest text-[#102A26]/50 block uppercase leading-none select-none"
            style={{
              WebkitTextStroke: "1px rgba(164, 183, 175, 0.08)",
            }}
          >
            ADORA TECH
          </span>
        </div>

        {/* Bottom Row: Copyright & Back-to-Top */}
        <div className="pt-6 border-t border-[#A4B7AF]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A4B7AF]/60">
          <span>&copy; {SITE_CONFIG.year} ADORA TECH. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>Surat · Global Engagements</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="p-2 rounded-full bg-[#102A26] hover:bg-[#153833] text-[#A4B7AF] hover:text-[#8DE0C1] border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
