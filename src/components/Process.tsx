"use client";

import React from "react";
import { Compass, Palette, Code2, Rocket } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

const stepIcons = [Compass, Palette, Code2, Rocket];

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-labelledby="process-heading"
    >
      {/* Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
          <span>{SITE_CONFIG.processSection.eyebrow}</span>
        </div>
        <h2
          id="process-heading"
          className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-medium tracking-tight text-[#F1F3EB] mb-6"
        >
          {SITE_CONFIG.processSection.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#A4B7AF] font-light leading-relaxed">
          {SITE_CONFIG.processSection.description}
        </p>
      </div>

      {/* Process Steps Track */}
      <div className="relative">
        {/* Horizontal Connecting Line on Desktop */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#8DE0C1]/40 via-[#8DE0C1]/80 to-[#D5A17D]/60"
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {SITE_CONFIG.processSection.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;

            return (
              <div
                key={step.number}
                className="group relative flex flex-col p-6 rounded-2xl bg-[#0D2421]/70 border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(8,27,25,0.6)]"
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

                {/* Short Description */}
                <p className="text-sm font-medium text-[#D5A17D] mb-3">
                  {step.description}
                </p>

                {/* Extended Details */}
                <p className="text-xs sm:text-sm text-[#A4B7AF] leading-relaxed font-light">
                  {step.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
