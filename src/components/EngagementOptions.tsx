"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

interface EngagementOptionsProps {
  onSelectProjectType?: (type: string) => void;
}

/**
 * EngagementOptions Component
 *
 * Inspired by Vayem Studios' pricing layout (.prices):
 * Clear, transparent collaboration tiers with an elevated "Most Popular" retainer card.
 */
export const EngagementOptions: React.FC<EngagementOptionsProps> = ({
  onSelectProjectType,
}) => {
  const handleSelectTier = (projectType: string) => {
    if (onSelectProjectType) {
      onSelectProjectType(projectType);
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tiers = [
    {
      id: "focused-sprint",
      title: "Focused Sprint",
      tagline: "For a flagship marketing website, design system, or targeted feature MVP.",
      popular: false,
      deliverables: [
        "Bespoke responsive frontend architecture (Next.js 15)",
        "Hardware-accelerated 60 FPS motion & micro-animations",
        "Sub-50ms TTFB edge caching & 100/100 Core Web Vitals",
        "Full repository handover & 30-day post-launch warranty",
      ],
      projectType: "Website",
      cta: "Scope a Sprint",
    },
    {
      id: "engineering-retainer",
      title: "Monthly Engineering Retainer",
      tagline: "For high-growth products needing continuous, dedicated velocity without hiring overhead.",
      popular: true,
      deliverables: [
        "Dedicated allocation of Lead Full-Stack & Cloud Architects",
        "Bi-weekly production sprint releases & live staging reviews",
        "Active 24/7 incident escalation & server cluster monitoring",
        "Direct Slack / Discord channels with lead engineers",
        "Unlimited revisions within sprint scope & zero change fees",
      ],
      projectType: "Custom Software",
      cta: "Start Retainer",
    },
    {
      id: "enterprise-cloud",
      title: "Enterprise Custom",
      tagline: "For multi-region distributed backends, zero-trust security audits, or monolith migrations.",
      popular: false,
      deliverables: [
        "Bespoke microservice topology & database sharding",
        "SOC 2, ISO 27001 & HIPAA compliance hardening",
        "Kubernetes multi-cloud orchestration & automated DR failover",
        "Tailored SLA agreements & dedicated NOC response tier",
      ],
      projectType: "Other",
      cta: "Schedule Architecture Call",
    },
  ];

  return (
    <section
      id="engagement"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 relative overflow-hidden"
      aria-labelledby="engagement-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
            <span>[ {SITE_CONFIG.engagement.eyebrow} ]</span>
          </div>
          <h2
            id="engagement-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F1F3EB] leading-[1.08]"
          >
            Simple, Transparent{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
              Engagement
            </span>
            .
          </h2>
        </div>
        <p className="text-base sm:text-lg text-[#A4B7AF] font-light max-w-md leading-relaxed">
          Every project is scoped to what your architecture actually requires, with fixed deliverables and zero unexpected fees.
        </p>
      </div>

      {/* Vayem Studios Inspired 3-Tier Grid (.prices) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between border transition-all duration-500 group ${
              tier.popular
                ? "bg-gradient-to-b from-[#183933] to-[#0E2622] border-[#8DE0C1] shadow-2xl shadow-black/60 scale-[1.02] z-10"
                : "bg-[#0B201D]/60 border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 hover:bg-[#102A26]/80"
            }`}
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8DE0C1]">
                  TIER // {tier.id.toUpperCase()}
                </span>
                {tier.popular && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#8DE0C1] text-[#081B19] font-bold">
                    MOST POPULAR
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-[#F1F3EB] mb-3">
                {tier.title}
              </h3>
              <p className="text-sm text-[#A4B7AF] font-light leading-relaxed mb-8">
                {tier.tagline}
              </p>

              {/* Deliverables List */}
              <ul className="space-y-3.5 pt-6 border-t border-[#A4B7AF]/15 mb-10">
                {tier.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#A4B7AF] font-light">
                    <span className="text-[#8DE0C1] font-mono text-xs mt-0.5">—</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => handleSelectTier(tier.projectType)}
                className={`w-full py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none ${
                  tier.popular
                    ? "bg-[#8DE0C1] text-[#081B19] hover:bg-[#A3E8D0] shadow-[0_0_25px_rgba(141,224,193,0.35)] hover:scale-[1.01]"
                    : "bg-[#102A26] text-[#F1F3EB] border border-[#A4B7AF]/20 hover:border-[#8DE0C1]/50 hover:text-[#8DE0C1]"
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs font-mono text-[#A4B7AF]/60 mt-10">
        All engagements include non-disclosure agreements (NDA), clean Git repositories, and automated test pipelines.
      </p>
    </section>
  );
};
