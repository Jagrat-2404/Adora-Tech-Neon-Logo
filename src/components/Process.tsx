"use client";

import React from "react";
import { Compass, Palette, Code2, Rocket } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

const stepIcons = [Compass, Palette, Code2, Rocket];

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10"
      aria-labelledby="process-heading"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
          <span>{SITE_CONFIG.process.eyebrow}</span>
        </div>
        <h2
          id="process-heading"
          className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-light tracking-tight text-[#F1F3EB]"
        >
          {SITE_CONFIG.process.heading}
        </h2>
      </div>

      {/* Structured Progression Layout */}
      <div className="relative">
        {/* Horizontal connecting track line on desktop */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-[1.5px] bg-gradient-to-r from-[#8DE0C1]/30 via-[#8DE0C1]/70 to-[#D5A17D]/50"
        />

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {SITE_CONFIG.process.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;

            return (
              <div
                key={step.number}
                className="group relative flex flex-col p-6 rounded-2xl bg-[#0D2421]/80 border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
              >
                {/* Node Step Icon & Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] group-hover:bg-[#153833] group-hover:scale-105 transition-all duration-300 shadow-md shadow-black/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#153833] text-[#8DE0C1] border border-[#8DE0C1]/20">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-medium text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A4B7AF] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
