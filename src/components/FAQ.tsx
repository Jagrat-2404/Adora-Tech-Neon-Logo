"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export const FAQ: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10"
      aria-labelledby="faq-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading, Context & Action */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
            <span>{SITE_CONFIG.faq.eyebrow}</span>
          </div>
          <h2
            id="faq-heading"
            className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-light tracking-tight text-[#F1F3EB] mb-4 leading-tight"
          >
            {SITE_CONFIG.faq.heading}
          </h2>
          <p className="text-base text-[#A4B7AF] font-light leading-relaxed mb-8">
            {SITE_CONFIG.faq.subhead}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#102A26] text-[#8DE0C1] border border-[#8DE0C1]/30 hover:border-[#8DE0C1] hover:bg-[#153833] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
          >
            <span>Ask a specific question</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right Column: Accessible Accordion List */}
        <div className="lg:col-span-7 space-y-4">
          {SITE_CONFIG.faq.items.map((item) => {
            const isOpen = openFaqId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#A4B7AF]/15 bg-[#0D2421]/70 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  id={`btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
                >
                  <span className="font-[family-name:var(--font-outfit)] text-lg sm:text-xl font-medium text-[#F1F3EB]">
                    {item.question}
                  </span>
                  <div className="p-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/15 shrink-0">
                    <ChevronDown
                      className={`w-4 h-4 text-[#A4B7AF] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#8DE0C1]" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`panel-${item.id}`}
                    role="region"
                    aria-labelledby={`btn-${item.id}`}
                    className="px-6 pb-6 pt-1 border-t border-[#A4B7AF]/10 text-sm sm:text-base text-[#A4B7AF] leading-relaxed font-light animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
