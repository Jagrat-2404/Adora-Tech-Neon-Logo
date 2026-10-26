"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Cpu, Palette } from "lucide-react";
import { SITE_CONFIG, ServiceTabItem } from "@/data/content";

interface ServicesProps {
  onSelectProjectType?: (type: string) => void;
}

const serviceMediaConfig = {
  websites: {
    heroImg: "/images/web_editorial_ui.jpg",
    heroAlt: "High-Performance Editorial Web Platform by ADORA TECH",
    leftImg: "/images/it_datacenter.jpg",
    leftAlt: "Tier-IV Edge Infrastructure",
    rightImg: "/images/cloud_dashboard_ui.jpg",
    rightAlt: "Core Web Vitals & Telemetry Console",
    heroBadge: "NEXT.JS 15 // EDGE STREAMING",
  },
  "mobile-apps": {
    heroImg: "/images/mobile_app_ui.jpg",
    heroAlt: "Native iOS & Android Mobile Application by ADORA TECH",
    leftImg: "/images/web_editorial_ui.jpg",
    leftAlt: "Web & Mobile Unified Design Tokens",
    rightImg: "/images/it_soc.jpg",
    rightAlt: "Biometric & Passkey Security Mesh",
    heroBadge: "REACT NATIVE & SWIFTUI // 120 FPS",
  },
  "custom-software": {
    heroImg: "/images/cloud_dashboard_ui.jpg",
    heroAlt: "Enterprise Cloud Software & Telemetry Console by ADORA TECH",
    leftImg: "/images/it_devops.jpg",
    leftAlt: "Kubernetes Cluster Auto-Scaling",
    rightImg: "/images/mobile_app_ui.jpg",
    rightAlt: "Executive Companion App",
    heroBadge: "GO & WEBSOCKET // <10MS LATENCY",
  },
  "ui-ux": {
    heroImg: "/images/web_editorial_ui.jpg",
    heroAlt: "Design System & Interaction Physics by ADORA TECH",
    leftImg: "/images/mobile_app_ui.jpg",
    leftAlt: "Design Token Architecture",
    rightImg: "/images/it_datacenter.jpg",
    rightAlt: "High-DPI Design Hierarchy",
    heroBadge: "SYSTEM TOKENS // PHYSICS MOTION",
  },
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

  const currentMedia =
    serviceMediaConfig[activeTabId as keyof typeof serviceMediaConfig] ||
    serviceMediaConfig.websites;

  return (
    <section
      id="services"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-18">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
            <span>[ {SITE_CONFIG.numberedServices.eyebrow} ]</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F1F3EB] leading-[1.08]"
          >
            Capabilities Engineered to{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
              Outperform
            </span>
            .
          </h2>
        </div>
        <p className="text-base sm:text-lg text-[#A4B7AF] font-light max-w-md leading-relaxed">
          Stills, motion, cloud infrastructure, and custom interfaces—engineered as a unified production setup.
        </p>
      </div>

      {/* Vayem Studios Inspired Horizontal Tab Bar */}
      <div
        role="tablist"
        aria-label="Capabilities tabs"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10"
      >
        {SITE_CONFIG.numberedServices.services.map((service) => {
          const isActive = service.id === activeTabId;

          return (
            <button
              key={service.id}
              role="tab"
              id={`tab-${service.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${service.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTabId(service.id)}
              className="group text-left pt-4 relative focus:outline-none"
            >
              {/* Progress Indicator Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 ${
                  isActive ? "bg-[#8DE0C1] shadow-[0_0_12px_rgba(141,224,193,0.6)]" : "bg-[#A4B7AF]/20 group-hover:bg-[#A4B7AF]/40"
                }`}
              />
              <span
                className={`block text-xs font-mono uppercase tracking-widest mb-2 transition-colors ${
                  isActive ? "text-[#8DE0C1]" : "text-[#A4B7AF]/60 group-hover:text-[#A4B7AF]"
                }`}
              >
                {service.number} // PILLAR
              </span>
              <span
                className={`text-base sm:text-lg lg:text-xl font-medium tracking-tight block transition-colors ${
                  isActive ? "text-[#F1F3EB]" : "text-[#A4B7AF]/70 group-hover:text-[#F1F3EB]"
                }`}
              >
                {service.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Vayem Studios Inspired Panoramic Interactive Stage */}
      <div
        role="tabpanel"
        id={`panel-${activeService.id}`}
        aria-labelledby={`tab-${activeService.id}`}
        key={activeService.id}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#102A26] to-[#0A1F1C] border border-[#8DE0C1]/25 p-8 sm:p-12 lg:p-14 shadow-2xl shadow-black/50"
      >
        {/* Ambient Blurred Backdrop Lighting */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-96 h-96 bg-[#8DE0C1]/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D5A17D]/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Column: Editorial Summary & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081B19]/80 border border-[#8DE0C1]/30 text-[#8DE0C1] text-[11px] font-mono uppercase tracking-widest mb-4">
                <span>{currentMedia.heroBadge}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F1F3EB] tracking-tight leading-[1.1] mb-5">
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
                    className="px-3 py-1.5 rounded-full text-xs font-mono bg-[#081B19]/80 text-[#8DE0C1] border border-[#8DE0C1]/20 hover:border-[#8DE0C1]/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={() => handleDiscuss(activeService.projectType)}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-[#081B19] bg-[#8DE0C1] hover:bg-[#A3E8D0] shadow-[0_0_25px_rgba(141,224,193,0.35)] hover:shadow-[0_0_35px_rgba(141,224,193,0.5)] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
              >
                <span>Scope {activeService.title}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Staggered Overlapping 3D Preview Frames */}
          <div className="lg:col-span-7 relative flex items-center justify-center gap-3 sm:gap-5 overflow-hidden py-4">
            {/* Left Preview Frame (Smaller Angle) */}
            <div className="hidden sm:block relative w-36 sm:w-44 lg:w-48 aspect-[3/4.2] rounded-2xl overflow-hidden border border-[#A4B7AF]/20 shadow-xl opacity-75 shrink-0 hover:opacity-100 transition-all duration-500 hover:scale-105">
              <Image
                src={currentMedia.leftImg}
                alt={currentMedia.leftAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, 200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B19]/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] font-mono text-[#8DE0C1] truncate">
                INFRASTRUCTURE
              </div>
            </div>

            {/* Center Hero Frame (Primary High-Resolution Screen) */}
            <div className="relative w-64 sm:w-72 lg:w-80 aspect-[3/4.2] rounded-2xl overflow-hidden border-2 border-[#8DE0C1]/50 shadow-2xl shadow-black/80 shrink-0 group transform hover:scale-[1.03] transition-all duration-500 z-10">
              <Image
                src={currentMedia.heroImg}
                alt={currentMedia.heroAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 300px, 400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B19]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#081B19]/85 backdrop-blur-md border border-[#8DE0C1]/40 text-[10px] font-mono text-[#8DE0C1]">
                PRODUCTION BUILD
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-[#F1F3EB] flex items-center justify-between">
                <span className="truncate mr-2 font-medium">{activeService.title}</span>
                <span className="text-[#8DE0C1] shrink-0">60 FPS</span>
              </div>
            </div>

            {/* Right Preview Frame (Smaller Angle) */}
            <div className="hidden sm:block relative w-36 sm:w-44 lg:w-48 aspect-[3/4.2] rounded-2xl overflow-hidden border border-[#A4B7AF]/20 shadow-xl opacity-75 shrink-0 hover:opacity-100 transition-all duration-500 hover:scale-105">
              <Image
                src={currentMedia.rightImg}
                alt={currentMedia.rightAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, 200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B19]/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] font-mono text-[#D5A17D] truncate">
                TELEMETRY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
