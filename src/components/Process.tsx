"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/content";

/**
 * Process Component
 *
 * Inspired by Vayem Studios' How It Works progression (.steps):
 * Connected architectural steps with a standout differentiator card badge.
 */
export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Technical Discovery & Scoping",
      description:
        "We unpack your business logic, system architecture, database requirements, and performance KPIs in a deep direct architectural session.",
      badge: null,
      highlight: false,
    },
    {
      number: "02",
      title: "Custom Production Setup",
      description:
        "Before writing a line of client code, we build your dedicated design tokens, CI/CD pipeline, and cloud test environment. This ensures zero regression across every future sprint.",
      badge: "OUR KEY DIFFERENTIATOR",
      highlight: true,
    },
    {
      number: "03",
      title: "Bi-Weekly Production Sprints",
      description:
        "We engineer the frontend, APIs, and microservices in transparent 2-week cycles. You receive live staging preview links and interactive PR walkthroughs.",
      badge: null,
      highlight: false,
    },
    {
      number: "04",
      title: "Zero-Downtime Deployment & Handover",
      description:
        "Cutover execution with multi-region failover tests, recorded engineering documentation, full repository transfer, and post-launch telemetry care.",
      badge: null,
      highlight: false,
    },
  ];

  return (
    <section
      id="process"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
            <span>[ {SITE_CONFIG.process.eyebrow} ]</span>
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F1F3EB] leading-[1.08]"
          >
            How We{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
              Execute
            </span>
            .
          </h2>
        </div>
        <p className="text-base sm:text-lg text-[#A4B7AF] font-light max-w-md leading-relaxed">
          Once we onboard, we configure your dedicated production environment first. That is what keeps every release fast, reproducible, and exclusive to your brand.
        </p>
      </div>

      {/* Vayem Studios Inspired Connected Progression (.steps) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between border transition-all duration-500 min-h-[340px] group reveal-item ${
              step.highlight
                ? "bg-gradient-to-b from-[#183933] to-[#0E2622] border-[#8DE0C1]/60 shadow-2xl shadow-black/50 hover:border-[#8DE0C1]"
                : "bg-[#0B201D]/60 border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 hover:bg-[#102A26]/80"
            }`}
          >
            {/* Top Bar: Step Number & Differentiator Badge */}
            <div className="flex items-center justify-between">
              <span
                className={`font-mono text-sm tracking-widest ${
                  step.highlight ? "text-[#8DE0C1]" : "text-[#A4B7AF]/60"
                }`}
              >
                {step.number} //
              </span>

              {step.badge && (
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-gradient-to-r from-[#8DE0C1] to-[#D5A17D] text-[#081B19] font-bold shadow-md">
                  {step.badge}
                </span>
              )}
            </div>

            {/* Bottom Content */}
            <div className="mt-14">
              <h3 className="text-xl sm:text-2xl font-light text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-[#A4B7AF] font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
