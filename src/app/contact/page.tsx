"use client";

import React, { useState } from "react";
import { Mail, Clock, ShieldCheck, MapPin, Terminal, Phone, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ServiceStrip } from "@/components/ServiceStrip";
import { ITProofMetrics } from "@/components/ITProofMetrics";
import { ApproachComparison } from "@/components/ApproachComparison";
import { ClientReviews } from "@/components/ClientReviews";
import { useIntro } from "@/components/PageTransitionProvider";

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<string>("Website");
  const { isIntroActive } = useIntro();

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
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
            <span>[ DIRECT INQUIRY // 24-HR RESPONSE ]</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#F1F3EB] tracking-tight leading-[1.08] max-w-5xl mb-8">
            Let&apos;s Build Something{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
              Extraordinary
            </span>{" "}
            Together.
          </h1>

          <p className="text-lg sm:text-2xl text-[#A4B7AF] font-light max-w-3xl leading-relaxed">
            Whether you have a fully formed technical specification or an ambitious early-stage concept,
            our senior engineering team is ready to evaluate feasibility and provide direct architectural guidance.
          </p>
        </section>

        {/* 2. Marquee Ticker */}
        <ServiceStrip />

        {/* 3. Typographic Proof Ribbon (No Cards) */}
        <div className="reveal-section">
          <ITProofMetrics />
        </div>

        {/* 4. Vayem Studios Inspired Split Contact Section */}
        <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 relative overflow-hidden reveal-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Studio Channels & SLA Guarantee */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-5xl font-light text-[#F1F3EB] leading-[1.1] mb-4">
                  Talk to a Principal{" "}
                  <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
                    Engineer
                  </span>
                  .
                </h2>
                <p className="text-base text-[#A4B7AF] font-light leading-relaxed">
                  Tell us what you are building. We review every submission directly and respond within 24 hours with architectural feedback, timeline feasibility, and a clear scope.
                </p>
              </div>

              {/* Editorial Channel Rows */}
              <div className="divide-y divide-[#A4B7AF]/15 border-t border-b border-[#A4B7AF]/15">
                <div className="py-4 flex justify-between items-center text-sm">
                  <span className="font-mono text-xs uppercase text-[#A4B7AF]">DIRECT EMAIL</span>
                  <a href="mailto:hello@adoratech.com" className="font-medium text-[#8DE0C1] hover:underline">
                    hello@adoratech.com
                  </a>
                </div>

                <div className="py-4 flex justify-between items-center text-sm">
                  <span className="font-mono text-xs uppercase text-[#A4B7AF]">WHATSAPP / PHONE</span>
                  <a href="https://wa.me/917600466643" target="_blank" rel="noopener noreferrer" className="font-medium text-[#F1F3EB] hover:text-[#8DE0C1] transition-colors">
                    +91 76004 66643
                  </a>
                </div>

                <div className="py-4 flex justify-between items-center text-sm">
                  <span className="font-mono text-xs uppercase text-[#A4B7AF]">HEADQUARTERS</span>
                  <span className="font-medium text-[#F1F3EB]">Surat, Gujarat, India</span>
                </div>

                <div className="py-4 flex justify-between items-center text-sm">
                  <span className="font-mono text-xs uppercase text-[#A4B7AF]">RESPONSE SLA</span>
                  <span className="font-mono text-xs text-[#8DE0C1] px-2 py-0.5 rounded bg-[#102A26] border border-[#8DE0C1]/30">
                    &lt; 24 HOURS GUARANTEED
                  </span>
                </div>

                <div className="py-4 flex justify-between items-center text-sm">
                  <span className="font-mono text-xs uppercase text-[#A4B7AF]">NDA STATUS</span>
                  <span className="font-medium text-[#F1F3EB] flex items-center gap-1.5 text-xs font-mono text-[#D5A17D]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    MUTUAL NDA STANDARD
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm initialProjectType={selectedType} />
            </div>
          </div>
        </section>

        {/* 5. Editorial Comparison Data Matrix Table */}
        <div className="reveal-section">
          <ApproachComparison />
        </div>

        {/* 6. Client Reviews & Verified 5.0 Rating Score Bar */}
        <div className="reveal-section">
          <ClientReviews />
        </div>
      </main>

      {/* Global Footer with Giant "ADORA TECH" Watermark */}
      <Footer />
    </div>
  );
}
