"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Terminal, Cpu, Layers, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceStrip } from "@/components/ServiceStrip";
import { ITProofMetrics } from "@/components/ITProofMetrics";
import { EditorialStatement } from "@/components/EditorialStatement";
import { ApproachComparison } from "@/components/ApproachComparison";
import { Process } from "@/components/Process";
import { ClientReviews } from "@/components/ClientReviews";
import { useIntro } from "@/components/PageTransitionProvider";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"spec" | "manifesto" | "stack">("spec");
  const { isIntroActive } = useIntro();

  return (
    <div className="relative min-h-screen bg-[#081B19] text-[#F1F3EB] selection:bg-[#8DE0C1]/20 selection:text-[#8DE0C1]">
      <Header />

      <main
        id="main-content"
        className="pt-28 pb-16 sm:pt-36"
      >
        {/* 1. Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
            <span>[ ABOUT ADORA TECH // EST. 2024 ]</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#F1F3EB] tracking-tight leading-[1.08] max-w-5xl mb-8">
            We Engineer Software with{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
              Purpose
            </span>{" "}
            &amp;{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D5A17D] via-[#E8C2A8] to-[#8DE0C1]">
              Relentless Craft
            </span>
            .
          </h1>

          <p className="text-lg sm:text-2xl text-[#A4B7AF] font-light max-w-3xl leading-relaxed">
            ADORA TECH is an independent digital studio based in Surat, delivering global digital products.
            We build high-caliber websites, native mobile applications, and custom cloud software with zero compromise on performance.
          </p>
        </section>

        {/* 2. Marquee Ticker */}
        <ServiceStrip />

        {/* 3. Typographic Proof Ribbon (No Cards) */}
        <div className="reveal-section">
          <ITProofMetrics />
        </div>

        {/* 4. Editorial Statement & Studio Manifesto */}
        <div className="reveal-section">
          <EditorialStatement />
        </div>

        {/* 5. Interactive Panoramic Studio Architecture Stage */}
        <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 relative overflow-hidden reveal-section">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#102A26] to-[#0A1F1C] border border-[#8DE0C1]/25 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl shadow-black/50">
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8DE0C1]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D5A17D]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              {/* Left Column: Tabbed Philosophy & Specs */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex gap-2 border-b border-[#A4B7AF]/15 pb-3 overflow-x-auto">
                  {(["spec", "manifesto", "stack"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
                        activeTab === tab
                          ? "bg-[#8DE0C1] text-[#081B19] font-semibold shadow-md shadow-[#8DE0C1]/20"
                          : "text-[#A4B7AF] hover:text-[#F1F3EB]"
                      }`}
                    >
                      {tab === "spec" && "01 // Studio Specs"}
                      {tab === "manifesto" && "02 // Manifesto"}
                      {tab === "stack" && "03 // Core Stack"}
                    </button>
                  ))}
                </div>

                {activeTab === "spec" && (
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-light text-[#F1F3EB]">
                      Precision Engineering Meets{" "}
                      <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] to-[#D5A17D]">
                        Atmospheric Aesthetics
                      </span>
                    </h3>
                    <p className="text-[#A4B7AF] text-sm sm:text-base leading-relaxed font-light">
                      Every project at ADORA TECH begins with fundamental architecture. We write lean, bespoke codebases that load in under a second and animate with fluid 60 FPS physics.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#A4B7AF]/15 text-xs font-mono">
                      <div>
                        <span className="text-[#A4B7AF]/70 block">CODE RATIO</span>
                        <span className="text-base font-semibold text-[#8DE0C1]">100% In-House</span>
                      </div>
                      <div>
                        <span className="text-[#A4B7AF]/70 block">DEPLOYMENT SLA</span>
                        <span className="text-base font-semibold text-[#F1F3EB]">99.99% Guaranteed</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "manifesto" && (
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-light text-[#F1F3EB]">
                      No Generic Templates.{" "}
                      <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] to-[#D5A17D]">
                        No Shortcuts
                      </span>
                      .
                    </h3>
                    <p className="text-[#A4B7AF] text-sm sm:text-base leading-relaxed font-light">
                      We believe cookie-cutter themes dilutes enterprise credibility. We construct proprietary design systems tailored to the brand identity of each client we partner with.
                    </p>
                    <div className="pt-4 border-t border-[#A4B7AF]/15 flex items-center gap-2 text-xs font-mono text-[#8DE0C1]">
                      <ShieldCheck className="w-4 h-4" />
                      <span>FULL INTELLECTUAL PROPERTY HANDOVER ON SPRINT SIGN-OFF</span>
                    </div>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-light text-[#F1F3EB]">
                      Built on Modern{" "}
                      <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] to-[#D5A17D]">
                        Edge Technology
                      </span>
                    </h3>
                    <p className="text-[#A4B7AF] text-sm sm:text-base leading-relaxed font-light">
                      Next.js 15, TypeScript, React Native, Go, PostgreSQL, Docker, and hardware-accelerated GSAP pipelines. Zero bloated third-party plugin overhead.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Next.js 15", "TypeScript", "React Native", "Go", "PostgreSQL", "Docker", "Tailwind CSS"].map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full text-xs font-mono bg-[#081B19] text-[#8DE0C1] border border-[#8DE0C1]/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-[#081B19] bg-[#8DE0C1] hover:bg-[#A3E8D0] transition-all font-semibold"
                  >
                    <span>Request Studio Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 3D Staggered Visual Showcase */}
              <div className="lg:col-span-6 relative flex items-center justify-center gap-4">
                <div className="relative w-40 sm:w-48 aspect-[3/4.2] rounded-2xl overflow-hidden border border-[#A4B7AF]/20 shadow-xl opacity-80 shrink-0">
                  <Image
                    src="/images/it_datacenter.jpg"
                    alt="Tier-IV Datacenter Infrastructure"
                    fill
                    sizes="(max-width: 640px) 160px, 192px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B19]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-[#8DE0C1]">
                    NOC MONITORING
                  </div>
                </div>

                <div className="relative w-56 sm:w-64 aspect-[3/4.2] rounded-2xl overflow-hidden border-2 border-[#8DE0C1]/50 shadow-2xl shrink-0 group transform hover:scale-[1.03] transition-all duration-500 z-10">
                  <Image
                    src="/images/web_editorial_ui.jpg"
                    alt="ADORA TECH Architecture Showcase"
                    fill
                    sizes="(max-width: 640px) 224px, 256px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B19]/90 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#081B19]/85 backdrop-blur-md border border-[#8DE0C1]/40 text-[10px] font-mono text-[#8DE0C1]">
                    FLAGSHIP BUILD
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-[#F1F3EB] flex items-center justify-between">
                    <span>AETHERIAL ARCHITECTURE</span>
                    <span className="text-[#8DE0C1]">60 FPS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Editorial Comparison Data Matrix Table */}
        <div className="reveal-section">
          <ApproachComparison />
        </div>

        {/* 7. Connected Progression Flow */}
        <div className="reveal-section">
          <Process />
        </div>

        {/* 8. Client Reviews & Verified 5.0 Rating Score Bar */}
        <div className="reveal-section">
          <ClientReviews />
        </div>
      </main>

      {/* Global Footer with Giant "ADORA TECH" Watermark */}
      <Footer />
    </div>
  );
}
