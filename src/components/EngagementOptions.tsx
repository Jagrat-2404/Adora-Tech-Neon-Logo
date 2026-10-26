"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

interface EngagementOptionsProps {
  onSelectProjectType?: (type: string) => void;
}

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

  return (
    <section
      id="engagement"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10"
      aria-labelledby="engagement-heading"
    >
      {/* Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
          <span>{SITE_CONFIG.engagement.eyebrow}</span>
        </div>
        <h2
          id="engagement-heading"
          className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-light tracking-tight text-[#F1F3EB] mb-4"
        >
          {SITE_CONFIG.engagement.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#A4B7AF] font-light leading-relaxed">
          {SITE_CONFIG.engagement.subhead}
        </p>
      </div>

      {/* 3 Scope Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {SITE_CONFIG.engagement.tiers.map((tier, idx) => {
          const isFeatured = idx === 1; // Middle "Product Build" card subtle emphasis

          return (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 relative overflow-hidden group ${
                isFeatured
                  ? "bg-[#102A26] border-[#8DE0C1]/50 shadow-2xl shadow-black/40"
                  : "bg-[#0D2421]/80 border-[#A4B7AF]/15 hover:border-[#8DE0C1]/30 hover:bg-[#102A26]/90 shadow-xl"
              }`}
            >
              {/* Subtle top ambient glow for featured card */}
              {isFeatured && (
                <div
                  aria-hidden="true"
                  className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full opacity-35 blur-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(141, 224, 193, 0.6) 0%, transparent 70%)",
                  }}
                />
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#8DE0C1] uppercase tracking-wider">
                    Model 0{idx + 1}
                  </span>
                  {isFeatured && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#153833] text-[#8DE0C1] border border-[#8DE0C1]/30">
                      High Impact
                    </span>
                  )}
                </div>

                <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-medium text-[#F1F3EB] mb-3">
                  {tier.title}
                </h3>

                <p className="text-sm text-[#A4B7AF] font-light leading-relaxed mb-8">
                  {tier.description}
                </p>

                {/* Scope Highlights Checklist */}
                <div className="pt-6 border-t border-[#A4B7AF]/10 space-y-3 mb-8">
                  {tier.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 text-xs text-[#A4B7AF]/90"
                    >
                      <Check className="w-3.5 h-3.5 text-[#8DE0C1] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#A4B7AF]/10">
                <button
                  type="button"
                  onClick={() => handleSelectTier(tier.projectType)}
                  className={`w-full py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1] ${
                    isFeatured
                      ? "bg-[#8DE0C1] hover:bg-[#A1E8D0] text-[#081B19] shadow-[0_0_20px_rgba(141,224,193,0.3)]"
                      : "bg-[#081B19] hover:bg-[#153833] text-[#F1F3EB] border border-[#A4B7AF]/20 hover:border-[#8DE0C1]/40"
                  }`}
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
