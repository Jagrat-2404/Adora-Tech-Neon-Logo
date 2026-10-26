"use client";

import React from "react";
import { Check, X, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

/**
 * ApproachComparison Component
 *
 * Inspired by Vayem Studios' editorial comparison matrix (.cmp):
 * Replaces boxy dual-cards with an architectural comparison data table.
 */
export const ApproachComparison: React.FC = () => {
  const comparisonData = [
    {
      attribute: "Engineering Engagement",
      traditional: "Junior developers assigned after contract signing, managed by account executives",
      adora: "Direct collaboration with Tier-3 Principal Engineers from day one",
      highlight: "Direct Engineering",
    },
    {
      attribute: "Release Velocity",
      traditional: "Quarters of scoping delays, waterfall handoffs, and unexpected scope creep",
      adora: "Rapid 2-week bi-weekly production releases with continuous staging previews",
      highlight: "Sub-Second Deployments",
    },
    {
      attribute: "Uptime & Infrastructure",
      traditional: "Best-effort response, shared hosting clusters, and single-point-of-failure servers",
      adora: "Contractual 99.99% multi-region failover, Kubernetes auto-scaling, and active NOC",
      highlight: "99.99% Guaranteed SLA",
    },
    {
      attribute: "Code Ownership & IP",
      traditional: "Proprietary vendor lock-in, black-box modules, or monthly licensing fees",
      adora: "100% Client-Owned clean TypeScript / Go repo with CI/CD and zero licensing lock-in",
      highlight: "Full IP Ownership",
    },
    {
      attribute: "Post-Launch Iteration",
      traditional: "Expensive change requests for every minor bug or layout revision",
      adora: "Included iterative sprint warranty, continuous telemetry monitoring, and recorded handover",
      highlight: "Dedicated Warranty",
    },
  ];

  return (
    <section
      id="comparison"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 relative overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
          <span>[ {SITE_CONFIG.comparison.eyebrow} ]</span>
        </div>
        <h2
          id="comparison-heading"
          className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F1F3EB] leading-[1.08] mb-4"
        >
          What Changes When You Build With{" "}
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
            ADORA TECH
          </span>
          .
        </h2>
        <p className="text-base sm:text-lg text-[#A4B7AF] font-light leading-relaxed">
          The same mission-critical engineering standard. Far less bureaucracy, delay, and friction.
        </p>
      </div>

      {/* Vayem Studios Inspired Editorial Data Table (.cmp) */}
      <div
        role="table"
        aria-label="Traditional outsourcing compared with ADORA TECH"
        className="rounded-3xl border border-[#A4B7AF]/15 bg-[#0B201D]/50 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/30 divide-y divide-[#A4B7AF]/15"
      >
        {/* Table Column Headers */}
        <div
          role="row"
          className="grid grid-cols-12 bg-[#081B19]/90 text-xs font-mono uppercase tracking-widest text-[#A4B7AF] p-5 sm:p-6"
        >
          <div role="columnheader" className="col-span-12 sm:col-span-3 text-[11px] text-[#A4B7AF]/70">
            ATTRIBUTE / PILLAR
          </div>
          <div role="columnheader" className="hidden sm:block sm:col-span-4 text-[11px] text-[#A4B7AF]/60">
            TRADITIONAL IT OUTSOURCING
          </div>
          <div role="columnheader" className="col-span-12 sm:col-span-5 text-[11px] text-[#8DE0C1] flex items-center justify-between">
            <span>WITH ADORA TECH</span>
            <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[10px]">
              <ShieldCheck className="w-3 h-3 text-[#8DE0C1]" />
              ENGINEERING FIRST
            </span>
          </div>
        </div>

        {/* Data Rows */}
        {comparisonData.map((row, idx) => (
          <div
            key={idx}
            role="row"
            className="grid grid-cols-12 p-6 sm:p-8 items-start gap-4 sm:gap-6 hover:bg-[#102A26]/40 transition-colors duration-300"
          >
            {/* Attribute Label */}
            <div role="rowheader" className="col-span-12 sm:col-span-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8DE0C1] block mb-1">
                0{idx + 1} //
              </span>
              <h3 className="text-base sm:text-lg font-medium text-[#F1F3EB]">
                {row.attribute}
              </h3>
            </div>

            {/* Traditional IT */}
            <div role="cell" className="col-span-12 sm:col-span-4 flex items-start gap-3 text-sm text-[#A4B7AF]/70 font-light leading-relaxed">
              <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
              <span>{row.traditional}</span>
            </div>

            {/* ADORA TECH */}
            <div role="cell" className="col-span-12 sm:col-span-5 flex items-start gap-3 text-sm text-[#F1F3EB] font-light leading-relaxed">
              <Check className="w-4 h-4 text-[#8DE0C1] shrink-0 mt-0.5" />
              <div>
                <span>{row.adora}</span>
                <span className="mt-2 inline-block px-2.5 py-0.5 rounded-full bg-[#153833] text-[#8DE0C1] border border-[#8DE0C1]/30 text-[10px] font-mono uppercase tracking-wider">
                  {row.highlight}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
