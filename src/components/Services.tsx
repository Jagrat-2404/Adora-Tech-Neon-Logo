"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown, Globe, Smartphone, Cpu, Palette, Layout, Activity, Terminal } from "lucide-react";
import { SITE_CONFIG, ServiceTabItem } from "@/data/content";

interface ServicesProps {
  onSelectProjectType?: (type: string) => void;
}

const serviceIcons = {
  websites: Globe,
  "mobile-apps": Smartphone,
  "custom-software": Cpu,
  "ui-ux": Palette,
};

export const Services: React.FC<ServicesProps> = ({ onSelectProjectType }) => {
  const [activeTabId, setActiveTabId] = useState<string>("websites");

  const handleDiscuss = (projectType: string) => {
    if (onSelectProjectType) {
      onSelectProjectType(projectType);
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeService: ServiceTabItem =
    SITE_CONFIG.numberedServices.services.find((s) => s.id === activeTabId) ||
    SITE_CONFIG.numberedServices.services[0];

  return (
    <section
      id="services"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10"
      aria-labelledby="services-heading"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
          <span>{SITE_CONFIG.numberedServices.eyebrow}</span>
        </div>
        <h2
          id="services-heading"
          className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-light tracking-tight text-[#F1F3EB]"
        >
          {SITE_CONFIG.numberedServices.heading}
        </h2>
      </div>

      {/* Desktop Two-Column Presentation (Tabs & Interactive Preview) */}
      <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
        {/* Left Column: Numbered Service Navigation */}
        <div
          role="tablist"
          aria-label="Service capabilities"
          className="col-span-5 space-y-3"
        >
          {SITE_CONFIG.numberedServices.services.map((service) => {
            const isActive = service.id === activeTabId;
            const Icon =
              serviceIcons[service.id as keyof typeof serviceIcons] || Globe;

            return (
              <button
                key={service.id}
                role="tab"
                id={`tab-${service.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${service.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTabId(service.id)}
                className={`w-full group text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1] ${
                  isActive
                    ? "bg-[#102A26] border-[#8DE0C1]/50 shadow-lg shadow-black/30"
                    : "bg-[#081B19] border-[#A4B7AF]/15 hover:border-[#8DE0C1]/30 hover:bg-[#0D2421]"
                }`}
              >
                <div className="flex items-center gap-5">
                  <span
                    className={`font-mono text-sm tracking-widest transition-colors ${
                      isActive ? "text-[#8DE0C1]" : "text-[#A4B7AF]/60 group-hover:text-[#F1F3EB]"
                    }`}
                  >
                    {service.number}
                  </span>
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-5 h-5 transition-colors ${
                        isActive ? "text-[#8DE0C1]" : "text-[#A4B7AF] group-hover:text-[#F1F3EB]"
                      }`}
                    />
                    <span
                      className={`font-[family-name:var(--font-outfit)] text-xl font-medium transition-colors ${
                        isActive ? "text-[#F1F3EB]" : "text-[#A4B7AF] group-hover:text-[#F1F3EB]"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>
                </div>

                <ArrowRight
                  className={`w-4 h-4 transition-all duration-300 ${
                    isActive
                      ? "text-[#8DE0C1] translate-x-1"
                      : "text-[#A4B7AF]/40 group-hover:text-[#F1F3EB] group-hover:translate-x-0.5"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Service Panel with Art-Directed Interface Preview */}
        <div
          role="tabpanel"
          id={`panel-${activeService.id}`}
          aria-labelledby={`tab-${activeService.id}`}
          className="col-span-7 p-8 rounded-3xl bg-[#0D2421]/90 border border-[#A4B7AF]/15 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px]"
        >
          {/* Ambient Corner Glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-25 blur-3xl -z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(141, 224, 193, 0.45) 0%, rgba(213, 161, 125, 0.3) 60%, transparent 80%)",
            }}
          />

          <div>
            {/* Header & Number Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8DE0C1] px-2.5 py-1 rounded bg-[#153833] border border-[#8DE0C1]/20">
                Service {activeService.number}
              </span>
              <span className="text-xs font-mono text-[#A4B7AF]/60">
                ADORA TECH
              </span>
            </div>

            <h3 className="font-[family-name:var(--font-outfit)] text-3xl font-medium text-[#F1F3EB] mb-4">
              {activeService.title}
            </h3>

            <p className="text-base sm:text-lg text-[#A4B7AF] font-light leading-relaxed mb-6">
              {activeService.description}
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {activeService.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-[#102A26] text-[#8DE0C1] border border-[#8DE0C1]/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Interactive Preview Mockup Box */}
            <div className="rounded-2xl bg-[#081B19] border border-[#A4B7AF]/15 p-5 shadow-inner mb-8">
              {activeService.previewType === "website" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#A4B7AF]/15 text-[#A4B7AF]/60 text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400/50" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400/50" />
                      <span className="w-2 h-2 rounded-full bg-green-400/50" />
                    </div>
                    <span className="text-[#8DE0C1]">client-flagship.concept</span>
                    <Layout className="w-3.5 h-3.5" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="p-3 rounded-lg bg-[#102A26] border border-[#A4B7AF]/10">
                      <span className="text-[10px] text-[#A4B7AF] block">
                        PAGE SPEED
                      </span>
                      <span className="text-sm font-semibold text-[#8DE0C1]">
                        99/100 Core Web Vitals
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#102A26] border border-[#A4B7AF]/10">
                      <span className="text-[10px] text-[#A4B7AF] block">
                        FRAMEWORK
                      </span>
                      <span className="text-sm font-semibold text-[#F1F3EB]">
                        Next.js App Router
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeService.previewType === "mobile" && (
                <div className="flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#153833] border border-[#8DE0C1]/30 flex items-center justify-center text-[#8DE0C1]">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#F1F3EB] block">
                        Native Gesture Engine
                      </span>
                      <span className="text-[10px] text-[#A4B7AF]">
                        Offline sync &amp; biometric auth
                      </span>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-[#102A26] text-[#8DE0C1] border border-[#8DE0C1]/20">
                    60 FPS
                  </span>
                </div>
              )}

              {activeService.previewType === "software" && (
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#8DE0C1] text-[11px]">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>INTERNAL TELEMETRY</span>
                    </div>
                    <span>LATENCY: 14ms</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#102A26] text-[11px] text-[#A4B7AF] flex items-center justify-between">
                    <span>Cluster Sync</span>
                    <span className="text-[#8DE0C1]">HEALTHY</span>
                  </div>
                </div>
              )}

              {activeService.previewType === "uiux" && (
                <div className="grid grid-cols-3 gap-2 font-mono text-xs text-center">
                  <div className="p-2.5 rounded bg-[#102A26] border border-[#A4B7AF]/10">
                    <span className="text-[10px] text-[#A4B7AF] block">
                      WIREFRAMES
                    </span>
                    <span className="text-xs font-semibold text-[#8DE0C1]">
                      Figma
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-[#102A26] border border-[#A4B7AF]/10">
                    <span className="text-[10px] text-[#A4B7AF] block">
                      PROTOTYPING
                    </span>
                    <span className="text-xs font-semibold text-[#D5A17D]">
                      Interactive
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-[#102A26] border border-[#A4B7AF]/10">
                    <span className="text-[10px] text-[#A4B7AF] block">
                      TOKENS
                    </span>
                    <span className="text-xs font-semibold text-[#F1F3EB]">
                      Design System
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#A4B7AF]/15 flex items-center justify-between">
            <span className="text-xs font-mono text-[#A4B7AF]">
              Custom tailored scope
            </span>
            <button
              type="button"
              onClick={() => handleDiscuss(activeService.projectType)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#8DE0C1] hover:bg-[#A1E8D0] text-[#081B19] transition-all shadow-[0_0_15px_rgba(141,224,193,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
            >
              <span>Discuss {activeService.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Stacked Accordion Presentation */}
      <div className="lg:hidden space-y-4">
        {SITE_CONFIG.numberedServices.services.map((service) => {
          const isOpen = service.id === activeTabId;
          const Icon =
            serviceIcons[service.id as keyof typeof serviceIcons] || Globe;

          return (
            <div
              key={service.id}
              className="rounded-2xl border border-[#A4B7AF]/15 bg-[#0D2421] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActiveTabId(isOpen ? "" : service.id)}
                aria-expanded={isOpen}
                className="w-full p-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#8DE0C1]">
                    {service.number}
                  </span>
                  <Icon className="w-4 h-4 text-[#8DE0C1]" />
                  <span className="font-[family-name:var(--font-outfit)] text-lg font-medium text-[#F1F3EB]">
                    {service.title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#A4B7AF] transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#8DE0C1]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 pt-2 border-t border-[#A4B7AF]/10 space-y-4">
                  <p className="text-sm text-[#A4B7AF] leading-relaxed font-light">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#102A26] text-[#8DE0C1] border border-[#8DE0C1]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDiscuss(service.projectType)}
                    className="w-full mt-2 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#8DE0C1] text-[#081B19] flex items-center justify-center gap-2"
                  >
                    <span>Discuss {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
