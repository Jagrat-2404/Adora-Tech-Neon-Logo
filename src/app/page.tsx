"use client";

import React, { useState, useEffect } from "react";
import { IntroSequence } from "@/components/IntroSequence";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isIntroActive, setIsIntroActive] = useState<boolean>(true);
  const [selectedProjectType, setSelectedProjectType] = useState<string>("Website");

  useEffect(() => {
    // Check if the user has already seen the intro during this session
    // or if they have requested reduced motion
    try {
      const introSeen = sessionStorage.getItem("adora_intro_seen_v1");
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (introSeen === "true" || prefersReducedMotion) {
        setIsIntroActive(false);
      }
    } catch {
      // In case sessionStorage is blocked or unavailable
      setIsIntroActive(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setIsIntroActive(false);
    try {
      sessionStorage.setItem("adora_intro_seen_v1", "true");
    } catch {
      // Ignore storage errors in private browsing
    }
  };

  return (
    <div className="relative min-h-screen bg-[#081B19] text-[#F1F3EB] selection:bg-[#8DE0C1]/20 selection:text-[#8DE0C1]">
      {/* 
        Signature Opening Interaction:
        Runs once per browser session if not reduced-motion.
        Smoothly travels from screen center to the header logo target.
      */}
      {isIntroActive && (
        <IntroSequence
          onComplete={handleIntroComplete}
          headerLogoTargetId="header-logo-target"
        />
      )}

      {/* Global Fixed Header */}
      <Header isIntroActive={isIntroActive} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero isIntroActive={isIntroActive} />
        <Services onSelectProjectType={setSelectedProjectType} />
        <SelectedWork onSelectProjectType={setSelectedProjectType} />
        <Process />
        <About />
        <ContactForm initialProjectType={selectedProjectType} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
