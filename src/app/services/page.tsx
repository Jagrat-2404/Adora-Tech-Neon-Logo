"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { ServiceStrip } from "@/components/ServiceStrip";
import { ITProofMetrics } from "@/components/ITProofMetrics";
import { EditorialStatement } from "@/components/EditorialStatement";
import { SelectedWork } from "@/components/SelectedWork";
import { ApproachComparison } from "@/components/ApproachComparison";
import { Process } from "@/components/Process";
import { ClientReviews } from "@/components/ClientReviews";
import { useIntro } from "@/components/PageTransitionProvider";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "mobile" | "backend" | "cloud">("all");
  const { isIntroActive } = useIntro();

  const techStack = [
    { name: "Next.js 15 (Turbopack)", category: "frontend", desc: "Server components, streaming SSR, and sub-second page transitions." },
    { name: "TypeScript", category: "frontend", desc: "Strict end-to-end type safety eliminating runtime bugs." },
    { name: "GSAP & WebGL", category: "frontend", desc: "Hardware-accelerated 60 FPS motion graphics and 3D scenes." },
    { name: "Tailwind CSS & CSS Modules", category: "frontend", desc: "Modular, zero-runtime CSS with bespoke design tokens." },
    { name: "React Native & Expo", category: "mobile", desc: "Single codebase reaching native iOS and Android performance." },
    { name: "Swift / SwiftUI", category: "mobile", desc: "Deep platform integration, widgets, and CoreAnimation." },
    { name: "Kotlin / Jetpack Compose", category: "mobile", desc: "Native Android UI with reactive state architecture." },
    { name: "Node.js & Go (Golang)", category: "backend", desc: "High-concurrency microservices and real-time WebSocket pipelines." },
    { name: "PostgreSQL & Prisma", category: "backend", desc: "ACID-compliant relational data modeling with automated migrations." },
    { name: "Redis & Memcached", category: "backend", desc: "Sub-millisecond caching layers and distributed pub/sub." },
    { name: "Docker & Kubernetes", category: "cloud", desc: "Containerized reproducible build artifacts and horizontal scaling." },
    { name: "AWS & Cloudflare Edge", category: "cloud", desc: "Multi-region low-latency global delivery with automatic failover." },
  ];

  const filteredStack = activeCategory === "all" ? techStack : techStack.filter((t) => t.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-[#081B19] text-[#F1F3EB] selection:bg-[#8DE0C1]/20 selection:text-[#8DE0C1]">
      <Header />

      <main
        id="main-content"
        className={`pt-28 pb-16 sm:pt-36 transition-all duration-1000 ease-out ${
          isIntroActive
            ? "opacity-0 translate-y-16 pointer-events-none"
            : "opacity-100 translate-y-0 pointer-events-auto"
        }`}
      >
        {/* 1. Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
            <span>[ CAPABILITIES &amp; ARCHITECTURE ]</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#F1F3EB] tracking-tight leading-[1.08] max-w-5xl mb-8">
            Digital Capabilities Engineered for{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
              Scale
            </span>{" "}
            &amp;{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D5A17D] via-[#E8C2A8] to-[#8DE0C1]">
              Prestige
            </span>
            .
          </h1>

          <p className="text-lg sm:text-2xl text-[#A4B7AF] font-light max-w-3xl leading-relaxed">
            We deliver complete digital solutions across four specialized pillars: high-performance
            websites, native mobile apps, custom backend software, and physics-driven UI/UX design systems.
          </p>
        </section>

        {/* 2. Marquee Ticker */}
        <ServiceStrip />

        {/* 3. Typographic Proof Ribbon (No Cards) */}
        <div className="reveal-section">
          <ITProofMetrics />
        </div>

        {/* 4. Panoramic Interactive Capabilities Stage */}
        <div className="reveal-section">
          <Services />
        </div>

        {/* 5. Editorial Statement */}
        <div className="reveal-section">
          <EditorialStatement />
        </div>

        {/* 6. Technology Stack Ecosystem */}
        <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 relative overflow-hidden reveal-section">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
              <span>[ MODERN PRODUCTION STACK ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F1F3EB] leading-[1.1]">
              Handpicked Technologies.{" "}
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
                Zero Obsolete
              </span>{" "}
              Dependencies.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { id: "all", label: "All Technologies" },
              { id: "frontend", label: "Frontend & Web" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "backend", label: "Backend & APIs" },
              { id: "cloud", label: "Cloud & DevOps" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#8DE0C1] text-[#081B19] font-semibold shadow-md shadow-[#8DE0C1]/20"
                    : "bg-[#102A26] border border-[#A4B7AF]/20 text-[#A4B7AF] hover:text-[#F1F3EB] hover:border-[#8DE0C1]/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of Tech Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStack.map((tech) => (
              <div
                key={tech.name}
                className="p-6 rounded-2xl bg-[#0B201D]/70 border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase text-[#8DE0C1] tracking-wider px-2.5 py-1 rounded bg-[#081B19] border border-[#8DE0C1]/20">
                      {tech.category}
                    </span>
                    <Code2 className="w-4 h-4 text-[#A4B7AF]/50 group-hover:text-[#8DE0C1] transition-colors" />
                  </div>
                  <h3 className="text-lg font-medium text-[#F1F3EB] mb-2">{tech.name}</h3>
                  <p className="text-sm text-[#A4B7AF] font-light leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Horizontal Scrolling Selected Work Track */}
        <div className="reveal-section">
          <SelectedWork />
        </div>

        {/* 8. Editorial Comparison Matrix Table */}
        <div className="reveal-section">
          <ApproachComparison />
        </div>

        {/* 9. Connected Progression Flow */}
        <div className="reveal-section">
          <Process />
        </div>

        {/* 10. Client Reviews & Verified 5.0 Rating Score Bar */}
        <div className="reveal-section">
          <ClientReviews />
        </div>
      </main>

      {/* Global Footer with Giant "ADORA TECH" Watermark */}
      <Footer />
    </div>
  );
}
