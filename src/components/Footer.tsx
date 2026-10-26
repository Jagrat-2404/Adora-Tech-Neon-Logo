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
    <footer className="border-t border-[#A4B7AF]/15 bg-[#081B19] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient bottom-center glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-28 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(141, 224, 193, 0.5) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left: Brand Logo & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Link
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="ADORA TECH home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1] rounded"
          >
            <BrandLogo size="sm" withGlow={false} interactive />
          </Link>
          <div className="h-4 w-[1px] bg-[#A4B7AF]/20 hidden sm:block" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#A4B7AF]/70">
            {SITE_CONFIG.descriptor}
          </span>
        </div>

        {/* Center: Section Links */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#A4B7AF]"
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

        {/* Right: Copyright & Back-to-Top */}
        <div className="flex items-center gap-6 text-xs text-[#A4B7AF]/70 font-mono">
          <span>&copy; {SITE_CONFIG.year} ADORA TECH</span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="p-2 rounded-full bg-[#102A26] hover:bg-[#153833] text-[#A4B7AF] hover:text-[#8DE0C1] border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
