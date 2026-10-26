"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceStrip } from "@/components/ServiceStrip";
import { ITProofMetrics } from "@/components/ITProofMetrics";
import { EditorialStatement } from "@/components/EditorialStatement";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { ApproachComparison } from "@/components/ApproachComparison";
import { Process } from "@/components/Process";
import { ClientReviews } from "@/components/ClientReviews";
import { Footer } from "@/components/Footer";
import { useIntro } from "@/components/PageTransitionProvider";

export default function Home() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>("Website");
  const { isIntroActive } = useIntro();

  return (
    <div className="relative min-h-screen bg-[#081B19] text-[#F1F3EB] selection:bg-[#8DE0C1]/20 selection:text-[#8DE0C1]">
      {/* Global Header (Logo sits static in corner while rest of site fades up) */}
      <Header />

      {/* Main Agency Sections Architecture: Fades Up from Bottom After Animation */}
      <main
        id="main-content"
        className={`relative z-10 transition-all duration-1000 ease-out ${
          isIntroActive
            ? "opacity-0 translate-y-16 pointer-events-none"
            : "opacity-100 translate-y-0 pointer-events-auto"
        }`}
      >
        {/* 1. Hero with 5-Column Vertical Background Carousel */}
        <Hero />

        {/* 2. Continuous Service Category Strip Marquee */}
        <ServiceStrip />

        {/* 3. Vayem-Style Typographic Proof Ribbon (No Cards) */}
        <div className="reveal-section">
          <ITProofMetrics />
        </div>

        {/* 4. Vayem-Style Large Editorial Statement & 3-Column Prose (No Cards) */}
        <div className="reveal-section">
          <EditorialStatement />
        </div>

        {/* 5. Vayem-Style Panoramic Interactive Stage with Staggered 3D Preview Frames */}
        <div className="reveal-section">
          <Services onSelectProjectType={setSelectedProjectType} />
        </div>

        {/* 6. Vayem-Style Horizontal Scrolling Work Gallery (.hs-track) with Dual-Image Zoom */}
        <div className="reveal-section">
          <SelectedWork onSelectProjectType={setSelectedProjectType} />
        </div>

        {/* 7. Vayem-Style Editorial Comparison Data Table (.cmp) */}
        <div className="reveal-section">
          <ApproachComparison />
        </div>

        {/* 8. Vayem-Style Connected Progression Flow with Standout Differentiator Badge */}
        <div className="reveal-section">
          <Process />
        </div>

        {/* 9. Vayem-Style Client Words: Verified 5.0 Rating Score Bar + Editorial Testimonials */}
        <div className="reveal-section">
          <ClientReviews />
        </div>
      </main>

      {/* Global Footer with Giant "ADORA TECH" Typographic Watermark */}
      <div
        className={`transition-all duration-1000 ease-out ${
          isIntroActive
            ? "opacity-0 translate-y-16 pointer-events-none"
            : "opacity-100 translate-y-0 pointer-events-auto"
        }`}
      >
        <Footer />
      </div>
    </div>
  );
}
