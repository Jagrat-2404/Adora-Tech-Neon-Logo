"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export const StudioIntro: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10"
      aria-labelledby="studio-intro-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: Asymmetric Small Label & Decorative Rule */}
        <div className="lg:col-span-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
            <span>{SITE_CONFIG.studioIntro.label}</span>
          </div>
          <p className="text-xs font-mono uppercase text-[#A4B7AF]/60 tracking-wider hidden lg:block">
            {SITE_CONFIG.descriptor}
          </p>
          <div className="mt-6 pt-6 border-t border-[#A4B7AF]/10 hidden lg:block">
            <div className="text-xs font-mono text-[#D5A17D] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EST. 2024 · GLOBAL</span>
            </div>
          </div>
        </div>

        {/* Right Column: Prominent Statement & Supporting Paragraphs */}
        <div className="lg:col-span-9 space-y-8">
          <h2
            id="studio-intro-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F1F3EB] leading-[1.15] tracking-tight"
          >
            Digital products should{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
              bring clarity
            </span>
            , not complexity.
          </h2>

          <div className="pt-4 border-t border-[#A4B7AF]/15 grid grid-cols-1 md:grid-cols-2 gap-8 text-[#A4B7AF] font-light leading-relaxed text-base sm:text-lg">
            <p>{SITE_CONFIG.studioIntro.body}</p>
            <div className="space-y-4">
              <p>{SITE_CONFIG.studioIntro.subText}</p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#8DE0C1] hover:text-[#B8F2DC] transition-colors group"
                >
                  <span>Discover our studio philosophy &amp; team</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
