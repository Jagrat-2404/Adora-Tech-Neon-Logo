"use client";

import React from "react";
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
            <span>{SITE_CONFIG.studioIntro.label}</span>
          </div>
          <p className="text-xs font-mono uppercase text-[#A4B7AF]/60 tracking-wider hidden lg:block">
            {SITE_CONFIG.descriptor}
          </p>
        </div>

        {/* Right Column: Prominent Statement & Supporting Paragraphs */}
        <div className="lg:col-span-9 space-y-8">
          <h2
            id="studio-intro-heading"
            className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F1F3EB] leading-[1.15] tracking-tight"
          >
            {SITE_CONFIG.studioIntro.heading.split("bring clarity")[0]}
            <span className="font-normal bg-gradient-to-r from-[#F1F3EB] via-[#8DE0C1] to-[#D5A17D] bg-clip-text text-transparent">
              bring clarity
            </span>
            {SITE_CONFIG.studioIntro.heading.split("bring clarity")[1]}
          </h2>

          <div className="pt-4 border-t border-[#A4B7AF]/15 grid grid-cols-1 md:grid-cols-2 gap-8 text-[#A4B7AF] font-light leading-relaxed text-base sm:text-lg">
            <p>{SITE_CONFIG.studioIntro.body}</p>
            <p>{SITE_CONFIG.studioIntro.subText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
