"use client";

import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

/**
 * ClientReviews Component
 *
 * Inspired by Vayem Studios' social proof section (#reviews / .quotes):
 * Displays verified aggregate score rating bar and editorial client testimonials.
 */
export const ClientReviews: React.FC = () => {
  const reviews = SITE_CONFIG.clientReviews;

  return (
    <section
      id="reviews"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 relative overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      {/* Section Header with Verified Rating Score Badge */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
            <span>[ {reviews.eyebrow} ]</span>
          </div>
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F1F3EB] leading-[1.08]"
          >
            In Their{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
              Own Words
            </span>
            .
          </h2>
        </div>

        {/* Vayem Studios Inspired .gscore Rating Card */}
        <div className="flex items-center gap-5 p-5 sm:p-6 rounded-2xl bg-[#0B201D]/80 border border-[#A4B7AF]/15 backdrop-blur-md shadow-xl shadow-black/30">
          <span className="text-4xl sm:text-5xl font-light text-[#F1F3EB] tracking-tight">
            {reviews.score}
          </span>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-[#D5A17D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-mono text-[#A4B7AF]/80">
              {reviews.ratingSource}
            </span>
          </div>
        </div>
      </div>

      {/* 4 Editorial Testimonial Panels (.quotes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.quotes.map((q, idx) => (
          <figure
            key={idx}
            className="relative rounded-3xl p-8 bg-[#0B201D]/60 border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 hover:bg-[#102A26]/80 transition-all duration-300 flex flex-col justify-between group shadow-lg reveal-item"
          >
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 text-[#8DE0C1] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Quote Body */}
              <blockquote className="text-sm text-[#A4B7AF] font-light leading-relaxed mb-8">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author Meta */}
            <figcaption className="pt-4 border-t border-[#A4B7AF]/15 flex flex-col gap-0.5">
              <span className="text-sm font-medium text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors">
                {q.author}
              </span>
              <span className="text-xs text-[#A4B7AF]/70 font-light">
                {q.role}
              </span>
              <span className="text-[10px] font-mono text-[#8DE0C1]/70 uppercase tracking-wider mt-1">
                {q.source}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
