"use client";

import React from "react";
import { Server, ShieldCheck, Clock, Cloud, Zap, ArrowUpRight } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export const ITProofMetrics: React.FC = () => {
  return (
    <section
      id="proof"
      className="border-b border-[#A4B7AF]/15 bg-[#081B19] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Enterprise IT Service Proof and Performance Metrics"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Cloud Uptime SLA */}
          <div className="card-interactive p-6 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/50 flex flex-col justify-between group shadow-lg shadow-black/20">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#8DE0C1] mb-4">
                <span className="px-2 py-0.5 rounded bg-[#081B19] border border-[#8DE0C1]/20">
                  [ 01 // INFRASTRUCTURE ]
                </span>
                <Server className="w-4 h-4 text-[#8DE0C1] group-hover:scale-110 transition-transform" />
              </div>

              <div className="text-3xl sm:text-4xl font-light text-[#F1F3EB] tracking-tight mb-2">
                <AnimatedCounter end={99.99} decimals={2} suffix="%" />
              </div>

              <h3 className="text-sm font-medium text-[#F1F3EB] mb-2 leading-snug">
                Enterprise Cloud &amp; Server Uptime SLA
              </h3>

              <p className="text-xs text-[#A4B7AF] font-light leading-relaxed">
                24/7 automated multi-region failover, Kubernetes orchestration, and sub-second edge routing.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#A4B7AF]/10 flex items-center justify-between text-[11px] font-mono text-[#8DE0C1]">
              <span>ACTIVE NOC MONITORING</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* Card 2: Incident Response SLA */}
          <div className="card-interactive p-6 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 hover:border-[#D5A17D]/50 flex flex-col justify-between group shadow-lg shadow-black/20">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#D5A17D] mb-4">
                <span className="px-2 py-0.5 rounded bg-[#081B19] border border-[#D5A17D]/20">
                  [ 02 // 24/7 IT DESK ]
                </span>
                <Clock className="w-4 h-4 text-[#D5A17D] group-hover:scale-110 transition-transform" />
              </div>

              <div className="text-3xl sm:text-4xl font-light text-[#D5A17D] tracking-tight mb-2">
                <AnimatedCounter end={15} prefix="< " suffix=" min" />
              </div>

              <h3 className="text-sm font-medium text-[#F1F3EB] mb-2 leading-snug">
                Critical Incident Mean Response Time
              </h3>

              <p className="text-xs text-[#A4B7AF] font-light leading-relaxed">
                Dedicated Tier-3 systems architects and network engineers on standby around the clock.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#A4B7AF]/10 flex items-center justify-between text-[11px] font-mono text-[#D5A17D]">
              <span>GUARANTEED 15M ESCALATION</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* Card 3: Zero-Trust Cybersecurity */}
          <div className="card-interactive p-6 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/50 flex flex-col justify-between group shadow-lg shadow-black/20">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#8DE0C1] mb-4">
                <span className="px-2 py-0.5 rounded bg-[#081B19] border border-[#8DE0C1]/20">
                  [ 03 // CYBERSECURITY ]
                </span>
                <ShieldCheck className="w-4 h-4 text-[#8DE0C1] group-hover:scale-110 transition-transform" />
              </div>

              <div className="text-3xl sm:text-4xl font-light text-[#F1F3EB] tracking-tight mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>

              <h3 className="text-sm font-medium text-[#F1F3EB] mb-2 leading-snug">
                Zero-Trust Compliance &amp; Hardened Defense
              </h3>

              <p className="text-xs text-[#A4B7AF] font-light leading-relaxed">
                SOC 2, ISO 27001, HIPAA-aligned architecture with real-time intrusion prevention and encrypted backups.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#A4B7AF]/10 flex items-center justify-between text-[11px] font-mono text-[#8DE0C1]">
              <span>ZERO-TRUST ARCHITECTURE</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* Card 4: Cloud Migrations */}
          <div className="card-interactive p-6 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 hover:border-[#D5A17D]/50 flex flex-col justify-between group shadow-lg shadow-black/20">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#D5A17D] mb-4">
                <span className="px-2 py-0.5 rounded bg-[#081B19] border border-[#D5A17D]/20">
                  [ 04 // MIGRATIONS ]
                </span>
                <Cloud className="w-4 h-4 text-[#D5A17D] group-hover:scale-110 transition-transform" />
              </div>

              <div className="text-3xl sm:text-4xl font-light text-[#F1F3EB] tracking-tight mb-2">
                <AnimatedCounter end={250} suffix="+" />
              </div>

              <h3 className="text-sm font-medium text-[#F1F3EB] mb-2 leading-snug">
                Seamless Enterprise Cloud Migrations
              </h3>

              <p className="text-xs text-[#A4B7AF] font-light leading-relaxed">
                Zero-data-loss cutovers across AWS, Azure, Google Cloud, and high-performance hybrid infrastructure.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#A4B7AF]/10 flex items-center justify-between text-[11px] font-mono text-[#D5A17D]">
              <span>AWS &amp; AZURE PARTNER</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
