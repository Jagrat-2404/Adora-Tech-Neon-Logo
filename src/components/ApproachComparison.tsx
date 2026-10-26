"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export const ApproachComparison: React.FC = () => {
  return (
    <section
      id="comparison"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10"
      aria-labelledby="comparison-heading"
    >
      {/* Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
          <span>{SITE_CONFIG.comparison.eyebrow}</span>
        </div>
        <h2
          id="comparison-heading"
          className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-light tracking-tight text-[#F1F3EB] mb-4"
        >
          {SITE_CONFIG.comparison.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#A4B7AF] font-light leading-relaxed">
          {SITE_CONFIG.comparison.subhead}
        </p>
      </div>

      {/* Comparison Table / Grid */}
      <div
        role="table"
        aria-label="Common project friction compared with ADORA TECH approach"
        className="rounded-3xl bg-[#0D2421]/90 border border-[#A4B7AF]/15 overflow-hidden shadow-2xl shadow-black/20"
      >
        {/* Table Column Headers */}
        <div
          role="row"
          className="grid grid-cols-1 md:grid-cols-2 border-b border-[#A4B7AF]/15 bg-[#081B19]/80 text-xs font-mono uppercase tracking-widest"
        >
          <div
            role="columnheader"
            className="p-5 sm:p-6 text-[#A4B7AF]/70 border-b md:border-b-0 md:border-r border-[#A4B7AF]/15"
          >
            <span>Common project friction</span>
          </div>
          <div
            role="columnheader"
            className="p-5 sm:p-6 text-[#8DE0C1] flex items-center justify-between"
          >
            <span>With ADORA TECH</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#153833] text-[#8DE0C1] border border-[#8DE0C1]/30">
              Coordinated Workflow
            </span>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#A4B7AF]/10">
          {SITE_CONFIG.comparison.rows.map((row, idx) => (
            <div
              key={idx}
              role="row"
              className="grid grid-cols-1 md:grid-cols-2 transition-colors hover:bg-[#102A26]/40"
            >
              {/* Left Column: Common friction */}
              <div
                role="cell"
                className="p-5 sm:p-6 md:border-r border-[#A4B7AF]/15 flex items-start gap-3 text-sm text-[#A4B7AF]/80"
              >
                <div className="mt-0.5 p-1 rounded-full bg-red-950/40 text-red-400/80 border border-red-500/20 shrink-0">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>{row.friction}</span>
              </div>

              {/* Right Column: ADORA TECH approach */}
              <div
                role="cell"
                className="p-5 sm:p-6 flex items-start gap-3 text-sm font-medium text-[#F1F3EB]"
              >
                <div className="mt-0.5 p-1 rounded-full bg-emerald-950/60 text-[#8DE0C1] border border-[#8DE0C1]/40 shrink-0 shadow-[0_0_8px_rgba(141,224,193,0.3)]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{row.approach}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
