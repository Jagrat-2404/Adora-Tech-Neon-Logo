"use client";

import React, { useState } from "react";
import { Mail, Clock, ShieldCheck, MapPin, CheckCircle2, MessageSquare, Terminal } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { ServiceStrip } from "@/components/ServiceStrip";
import { SITE_CONFIG } from "@/data/content";

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<string>("Website");

  return (
    <div className="relative min-h-screen bg-[#081B19] text-[#F1F3EB] selection:bg-[#8DE0C1]/20 selection:text-[#8DE0C1]">
      <Header />

      <main id="main-content" className="pt-28 pb-20 sm:pt-36 sm:pb-28">
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

        {/* 2. Direct Channels & SLA Overview */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#081B19] text-[#8DE0C1] border border-[#8DE0C1]/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#8DE0C1] uppercase tracking-wider mb-1">
                  DIRECT EMAIL
                </div>
                <div className="text-sm font-medium text-[#F1F3EB] break-all">
                  hello@adoratech.com
                </div>
                <div className="text-xs text-[#A4B7AF] mt-1">Direct to partner inbox</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#081B19] text-[#D5A17D] border border-[#D5A17D]/20">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#D5A17D] uppercase tracking-wider mb-1">
                  RESPONSE TIME
                </div>
                <div className="text-sm font-medium text-[#F1F3EB]">Within 24 Hours</div>
                <div className="text-xs text-[#A4B7AF] mt-1">Guaranteed SLA review</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#081B19] text-[#8DE0C1] border border-[#8DE0C1]/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#8DE0C1] uppercase tracking-wider mb-1">
                  CONFIDENTIALITY
                </div>
                <div className="text-sm font-medium text-[#F1F3EB]">Mutual NDA Standard</div>
                <div className="text-xs text-[#A4B7AF] mt-1">Your IP protected from day 1</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#081B19] text-[#D5A17D] border border-[#D5A17D]/20">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#D5A17D] uppercase tracking-wider mb-1">
                  AVAILABILITY
                </div>
                <div className="text-sm font-medium text-[#F1F3EB]">Open for Q2/Q3</div>
                <div className="text-xs text-[#A4B7AF] mt-1">2 sprint pods available</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Interactive Contact Form */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <ContactForm initialProjectType={selectedType} />
        </section>

        {/* 4. Marquee Ticker */}
        <ServiceStrip />

        {/* 5. Engagement FAQs */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
