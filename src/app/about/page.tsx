"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Zap, Terminal, Sparkles, Cpu, Layers } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceStrip } from "@/components/ServiceStrip";
import { Process } from "@/components/Process";
import { SITE_CONFIG } from "@/data/content";

export default function AboutPage() {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<"spec" | "manifesto" | "stack">("spec");

  return (
    <div className="relative min-h-screen bg-[#081B19] text-[#F1F3EB] selection:bg-[#8DE0C1]/20 selection:text-[#8DE0C1]">
      <Header />

      <main id="main-content" className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* 1. Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 sm:mb-28">
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
            ADORA TECH is an independent digital studio. We build high-caliber websites,
            mobile applications, and custom cloud software for clients who value distinctive design,
            technical rigor, and zero compromise on performance.
          </p>
        </section>

        {/* 2. Interactive Studio Neon Emblem & Architecture Readout */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#102A26] to-[#0A1F1C] border border-[#8DE0C1]/25 p-8 sm:p-12 overflow-hidden shadow-2xl shadow-black/50">
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8DE0C1]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D5A17D]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Interactive Visual Emblem */}
              <div className="lg:col-span-6 flex flex-col items-center text-center">
                <div className="relative group p-8 sm:p-12 rounded-2xl bg-[#081B19]/80 border border-[#8DE0C1]/30 backdrop-blur-md shadow-inner transition-transform duration-500 hover:scale-[1.02]">
                  {/* Glowing background halo */}
                  <div className="absolute inset-0 bg-[#8DE0C1]/5 rounded-2xl blur-xl group-hover:bg-[#8DE0C1]/15 transition-colors duration-500" />

                  <div className="relative z-10 w-64 sm:w-80 h-36 sm:h-44 flex items-center justify-center">
                    <Image
                      src="/logo-cropped.png"
                      alt="ADORA TECH Signature Emblem"
                      width={340}
                      height={190}
                      className="object-contain drop-shadow-[0_0_28px_rgba(141,224,193,0.45)]"
                    />
                  </div>

                  {/* Dynamic Telemetry Footnote */}
                  <div className="mt-4 pt-4 border-t border-[#A4B7AF]/15 flex items-center justify-between text-xs font-mono text-[#A4B7AF]/70">
                    <span className="flex items-center gap-1.5 text-[#8DE0C1]">
                      <span className="w-2 h-2 rounded-full bg-[#8DE0C1] animate-ping" />
                      SYSTEM STATUS: NOMINAL
                    </span>
                    <span>LATENCY: &lt;14MS</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Tabbed Telemetry & Craft Philosophy */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex gap-2 border-b border-[#A4B7AF]/15 pb-3">
                  {(["spec", "manifesto", "stack"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTelemetryTab(tab)}
                      className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
                        activeTelemetryTab === tab
                          ? "bg-[#8DE0C1]/15 text-[#8DE0C1] border border-[#8DE0C1]/40"
                          : "text-[#A4B7AF] hover:text-[#F1F3EB]"
                      }`}
                    >
                      {tab === "spec" && "01 // Studio Specs"}
                      {tab === "manifesto" && "02 // Manifesto"}
                      {tab === "stack" && "03 // Core Stack"}
                    </button>
                  ))}
                </div>

                {activeTelemetryTab === "spec" && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-[#F1F3EB]">
                      Precision Engineering Meets{" "}
                      <span className="font-serif italic text-[#8DE0C1]">
                        Atmospheric Aesthetics
                      </span>
                    </h3>
                    <p className="text-[#A4B7AF] text-sm leading-relaxed">
                      Every project at ADORA TECH begins with fundamental architecture. We write
                      lean, bespoke codebases that load in under a second and animate with fluid 60 FPS physics.
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-[#081B19]/60 border border-[#A4B7AF]/15">
                        <div className="text-xl font-bold font-mono text-[#8DE0C1]">99.8%</div>
                        <div className="text-xs text-[#A4B7AF]">Production Uptime SLA</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#081B19]/60 border border-[#A4B7AF]/15">
                        <div className="text-xl font-bold font-mono text-[#D5A17D]">&lt; 1.0s</div>
                        <div className="text-xs text-[#A4B7AF]">First Contentful Paint</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#081B19]/60 border border-[#A4B7AF]/15">
                        <div className="text-xl font-bold font-mono text-[#8DE0C1]">100%</div>
                        <div className="text-xs text-[#A4B7AF]">Bespoke Code Ownership</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#081B19]/60 border border-[#A4B7AF]/15">
                        <div className="text-xl font-bold font-mono text-[#D5A17D]">60 FPS</div>
                        <div className="text-xs text-[#A4B7AF]">Fluid Micro-Interactions</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTelemetryTab === "manifesto" && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-[#F1F3EB]">
                      Why We Reject{" "}
                      <span className="font-serif italic text-[#D5A17D]">
                        Bloated Builders
                      </span>
                    </h3>
                    <p className="text-[#A4B7AF] text-sm leading-relaxed">
                      Generic agencies rely on drag-and-drop builders, heavy themes, and hundreds of third-party plugins.
                      The result: sluggish load times, fragile updates, and zero brand distinctiveness.
                    </p>
                    <p className="text-[#A4B7AF] text-sm leading-relaxed">
                      At ADORA TECH, we handcraft components using Next.js, TypeScript, and modern styling. You receive a clean Git repository that your team owns completely.
                    </p>
                  </div>
                )}

                {activeTelemetryTab === "stack" && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-[#F1F3EB]">
                      Built on Modern{" "}
                      <span className="font-serif italic text-[#8DE0C1]">
                        Production Foundations
                      </span>
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {[
                        "Next.js 15 (Turbopack)",
                        "React 19",
                        "TypeScript",
                        "GSAP & WebGL",
                        "Tailwind CSS",
                        "React Native / Swift",
                        "Node.js & Go",
                        "PostgreSQL & Redis",
                        "Docker & Cloudflare Edge",
                        "AWS & Supabase",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-[#081B19] border border-[#8DE0C1]/25 text-xs font-mono text-[#8DE0C1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Marquee Ticker */}
        <ServiceStrip />

        {/* 4. Four Foundational Pillars (Bento Grid) */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
              <span>[ CORE ARCHITECTURE &amp; VALUES ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F1F3EB]">
              Built for Clients Who Refuse to Look{" "}
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
                Ordinary
              </span>
              .
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#081B19] border border-[#8DE0C1]/30 flex items-center justify-center text-[#8DE0C1] mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-[#F1F3EB] mb-3">
                  01. Performance First
                </h3>
                <p className="text-sm text-[#A4B7AF] leading-relaxed">
                  Sub-second page loads, zero bloatware, and optimized assets. Every millisecond shaved is conversion gained.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#A4B7AF]/10 text-xs font-mono text-[#8DE0C1]">
                &lt;14MS LATENCY
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#081B19] border border-[#D5A17D]/30 flex items-center justify-center text-[#D5A17D] mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-[#F1F3EB] mb-3">
                  02. Cinematic Aesthetics
                </h3>
                <p className="text-sm text-[#A4B7AF] leading-relaxed">
                  Rich dark-emerald palettes, tasteful typography, and deliberate micro-interactions that captivate on first glance.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#A4B7AF]/10 text-xs font-mono text-[#D5A17D]">
                EDITORIAL LUXURY
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#081B19] border border-[#8DE0C1]/30 flex items-center justify-center text-[#8DE0C1] mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-[#F1F3EB] mb-3">
                  03. Full Code Ownership
                </h3>
                <p className="text-sm text-[#A4B7AF] leading-relaxed">
                  No proprietary vendor traps. You receive a clean Git repository, complete documentation, and 100% intellectual property ownership.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#A4B7AF]/10 text-xs font-mono text-[#8DE0C1]">
                100% YOUR IP
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#081B19] border border-[#D5A17D]/30 flex items-center justify-center text-[#D5A17D] mb-6 group-hover:scale-110 transition-transform">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-[#F1F3EB] mb-3">
                  04. Direct Engineering Access
                </h3>
                <p className="text-sm text-[#A4B7AF] leading-relaxed">
                  Zero junior middlemen or account manager telephone games. You communicate directly with the senior engineers building your platform.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#A4B7AF]/10 text-xs font-mono text-[#D5A17D]">
                DIRECT SENIOR PAIRING
              </div>
            </div>
          </div>
        </section>

        {/* 5. Process Progression */}
        <Process />

        {/* 6. High-Impact Call to Action */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-[#102A26] via-[#153833] to-[#102A26] border border-[#8DE0C1]/30 p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#8DE0C1]/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-5xl font-light text-[#F1F3EB]">
                Ready to build something{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
                  extraordinary
                </span>
                ?
              </h2>
              <p className="text-[#A4B7AF] text-base sm:text-lg">
                Whether you need a flagship brand website, a native iOS/Android application, or custom software architecture, we are ready to bring clarity and speed.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#8DE0C1] text-[#081B19] font-medium tracking-wide hover:bg-[#A3E8D0] transition-all shadow-lg shadow-[#8DE0C1]/20 hover:scale-[1.02]"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#081B19]/80 border border-[#A4B7AF]/30 text-[#F1F3EB] font-medium tracking-wide hover:border-[#8DE0C1]/50 hover:bg-[#102A26] transition-all"
                >
                  <span>Explore Capabilities</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
