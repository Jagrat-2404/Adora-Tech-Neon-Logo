"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

/**
 * EditorialStatement Component
 *
 * Inspired by Vayem Studios' iconic editorial statement section:
 * High-impact editorial typography, no card containers, fluid prose columns.
 */
export const EditorialStatement: React.FC = () => {
  const data = SITE_CONFIG.editorialStatement;

  return (
    <section
      id="about"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 relative overflow-hidden"
      aria-labelledby="statement-heading"
    >
      <div className="flex flex-col gap-12 sm:gap-16">
        {/* Eyebrow Pill */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
            <span>[ {data.eyebrow} ]</span>
          </div>
        </div>

        {/* Large Editorial Statement */}
        <h2
          id="statement-heading"
          className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F1F3EB] leading-[1.1] max-w-5xl"
        >
          {data.statement}
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
            {data.statementHighlight}
          </span>
        </h2>

        {/* 3-Column Editorial Prose Layout (No Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-10 sm:pt-14 border-t border-[#A4B7AF]/15">
          {data.cols.map((col, idx) => (
            <div key={idx} className="flex flex-col justify-between reveal-item">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#8DE0C1] mb-3">
                  0{idx + 1} // {col.title}
                </h3>
                <p
                  className={`text-base leading-relaxed font-light ${
                    col.highlight
                      ? "text-[#F1F3EB] font-normal"
                      : "text-[#A4B7AF]"
                  }`}
                >
                  {col.text}
                </p>
              </div>

              {col.highlight && (
                <div className="mt-6 pt-4 border-t border-[#A4B7AF]/15">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#8DE0C1] hover:text-[#B8F2DC] group transition-colors"
                  >
                    <span>Talk to a Principal Engineer</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
