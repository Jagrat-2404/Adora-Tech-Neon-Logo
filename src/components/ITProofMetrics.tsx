"use client";

import React from "react";
import { Server, ShieldCheck, Clock, Cloud } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

/**
 * ITProofMetrics Component
 * 
 * Vayem Studios inspired Editorial Typographic Proof Ribbon:
 * Replaces boxy cards with a clean, border-divided architectural metric ribbon.
 */
export const ITProofMetrics: React.FC = () => {
  return (
    <section
      id="proof"
      className="border-b border-[#A4B7AF]/15 bg-[#081B19] py-10 sm:py-16 relative overflow-hidden"
      aria-label="Enterprise IT Service Proof and Performance Metrics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#A4B7AF]/15 rounded-3xl bg-[#0B201D]/60 backdrop-blur-md overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-[#A4B7AF]/15">
          {/* Column 1: Cloud Uptime SLA */}
          <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#102A26]/50 transition-colors duration-300 reveal-item">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#8DE0C1] mb-6">
                <span className="tracking-widest uppercase text-[11px]">[ 01 // UPTIME ]</span>
                <Server className="w-4 h-4 text-[#8DE0C1]/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F1F3EB] tracking-tight">
                <AnimatedCounter end={99.99} decimals={2} />
                <i className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] to-[#B8F2DC] text-3xl sm:text-4xl ml-1 not-italic">
                  %
                </i>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#A4B7AF]/10">
              <span className="text-xs sm:text-sm text-[#A4B7AF] font-light leading-relaxed block">
                Enterprise Cloud &amp; Server Uptime SLA with automated multi-region failover.
              </span>
            </div>
          </div>

          {/* Column 2: Incident Response SLA */}
          <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#102A26]/50 transition-colors duration-300 reveal-item">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#D5A17D] mb-6">
                <span className="tracking-widest uppercase text-[11px]">[ 02 // NOC DESK ]</span>
                <Clock className="w-4 h-4 text-[#D5A17D]/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F1F3EB] tracking-tight">
                <span className="text-3xl sm:text-4xl font-light text-[#A4B7AF] mr-1">&lt;</span>
                <AnimatedCounter end={15} />
                <i className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D5A17D] to-[#E8C2A8] text-2xl sm:text-3xl ml-1.5 not-italic">
                  min
                </i>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#A4B7AF]/10">
              <span className="text-xs sm:text-sm text-[#A4B7AF] font-light leading-relaxed block">
                Guaranteed Tier-3 engineering escalation and critical incident mean response.
              </span>
            </div>
          </div>

          {/* Column 3: Zero-Trust Cybersecurity */}
          <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#102A26]/50 transition-colors duration-300 reveal-item">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#8DE0C1] mb-6">
                <span className="tracking-widest uppercase text-[11px]">[ 03 // COMPLIANCE ]</span>
                <ShieldCheck className="w-4 h-4 text-[#8DE0C1]/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F1F3EB] tracking-tight">
                <AnimatedCounter end={100} />
                <i className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] to-[#B8F2DC] text-3xl sm:text-4xl ml-1 not-italic">
                  %
                </i>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#A4B7AF]/10">
              <span className="text-xs sm:text-sm text-[#A4B7AF] font-light leading-relaxed block">
                SOC 2, ISO 27001 &amp; HIPAA-audited zero-trust hardened defense architecture.
              </span>
            </div>
          </div>

          {/* Column 4: Cloud Migrations */}
          <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#102A26]/50 transition-colors duration-300 reveal-item">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#D5A17D] mb-6">
                <span className="tracking-widest uppercase text-[11px]">[ 04 // MIGRATIONS ]</span>
                <Cloud className="w-4 h-4 text-[#D5A17D]/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F1F3EB] tracking-tight">
                <AnimatedCounter end={250} />
                <i className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D5A17D] to-[#E8C2A8] text-3xl sm:text-4xl ml-1 not-italic">
                  +
                </i>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#A4B7AF]/10">
              <span className="text-xs sm:text-sm text-[#A4B7AF] font-light leading-relaxed block">
                Seamless enterprise cloud cutovers with zero downtime and zero data loss.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
