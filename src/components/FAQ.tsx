"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

/**
 * FAQ Component
 *
 * Inspired by Vayem Studios' 2-column split FAQ layout (.faq-grid):
 * Sticky left column with direct consultation trigger and minimal border-divided accordions on the right.
 */
export const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Sticky Title & Direct Message Trigger */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
            <span>[ {SITE_CONFIG.faq.eyebrow} ]</span>
          </div>

          <h2
            id="faq-heading"
            className="text-3xl sm:text-5xl font-normal tracking-tight text-[#F1F3EB] leading-[1.08] mb-6"
          >
            Questions Founders &amp; CTOs{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
              Ask Us First
            </span>
            .
          </h2>

          <p className="text-base sm:text-lg text-[#A4B7AF] font-light leading-relaxed mb-8">
            Have a custom architecture question, NDA requirement, or legacy migration challenge?
            Our lead engineers reply directly within 24 hours.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-[#081B19] bg-[#8DE0C1] hover:bg-[#A3E8D0] shadow-[0_0_20px_rgba(141,224,193,0.35)] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Direct Engineering Inquiry</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right Column: Clean Border-Divided Accordions */}
        <div className="lg:col-span-7 divide-y divide-[#A4B7AF]/15 border-t border-b border-[#A4B7AF]/15">
          {SITE_CONFIG.faq.items.map((item) => (
            <details
              key={item.id}
              className="group py-6 sm:py-8 focus:outline-none cursor-pointer"
            >
              <summary className="flex items-center justify-between gap-6 list-none select-none text-left">
                <h3 className="text-lg sm:text-xl font-normal text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors leading-snug">
                  {item.question}
                </h3>
                <div className="w-8 h-8 rounded-full border border-[#A4B7AF]/20 flex items-center justify-center shrink-0 text-[#A4B7AF] group-hover:text-[#8DE0C1] group-hover:border-[#8DE0C1]/40 transition-all duration-300 group-open:rotate-180">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </summary>
              <div className="mt-4 pr-6 sm:pr-10 text-sm sm:text-base text-[#A4B7AF] font-light leading-relaxed">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
