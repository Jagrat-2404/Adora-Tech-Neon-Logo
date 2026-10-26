"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceStrip } from "@/components/ServiceStrip";
import { StudioIntro } from "@/components/StudioIntro";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { ApproachComparison } from "@/components/ApproachComparison";
import { Process } from "@/components/Process";
import { EngagementOptions } from "@/components/EngagementOptions";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>("Website");

  return (
    <div className="relative min-h-screen bg-[#081B19] text-[#F1F3EB] selection:bg-[#8DE0C1]/20 selection:text-[#8DE0C1]">
      {/* Global Header */}
      <Header />

      {/* Main Agency Sections Architecture */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero with Art-Directed Multi-Device Product Composition */}
        <Hero />

        {/* 2. Continuous Service Category Strip Marquee */}
        <ServiceStrip />

        {/* 3. Asymmetric Editorial Introduction */}
        <StudioIntro />

        {/* 4. Numbered Service Navigation (01-04) with Desktop Tabs & Mobile Accordions */}
        <Services onSelectProjectType={setSelectedProjectType} />

        {/* 5. Filterable Selected Work Grid & Original Concept Interfaces */}
        <SelectedWork onSelectProjectType={setSelectedProjectType} />

        {/* 6. Approach Comparison (Common Friction vs. Our Approach) */}
        <ApproachComparison />

        {/* 7. 4-Step Process Progression (Discover -> Launch) */}
        <Process />

        {/* 8. Engagement Options (3 Editorial Scope Panels) */}
        <EngagementOptions onSelectProjectType={setSelectedProjectType} />

        {/* 9. FAQs with Accessible Accordions */}
        <FAQ />

        {/* 10. Contact Form with Validation & Honest Delivery Feedback */}
        <ContactForm initialProjectType={selectedProjectType} />
      </main>

      {/* Global Footer with Oversized Typographic Signature */}
      <Footer />
    </div>
  );
}
