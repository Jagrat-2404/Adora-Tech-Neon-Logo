"use client";

import React, { useState } from "react";
import { Play, Pause } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export const ServiceStrip: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative border-y border-[#A4B7AF]/15 bg-[#081B19]/90 backdrop-blur-md overflow-hidden select-none py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Accessible Marquee Track Container */}
        <div
          className="relative flex-1 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Animated Marquee Flex Container */}
          <div
            className={`flex items-center gap-10 whitespace-nowrap will-change-transform ${
              isPaused ? "animate-none" : "motion-safe:animate-marquee"
            }`}
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {/* Set 1 */}
            <div className="flex items-center gap-10 text-sm sm:text-base tracking-widest uppercase">
              {SITE_CONFIG.serviceStrip.map((service, idx) => {
                const isSerif = idx % 2 === 1;

                return (
                  <React.Fragment key={`strip-1-${idx}`}>
                    <span
                      className={`transition-colors ${
                        isSerif
                          ? "font-serif italic font-normal text-[#8DE0C1] tracking-wider text-base sm:text-lg"
                          : "font-mono font-medium text-[#F1F3EB]"
                      }`}
                    >
                      {service}
                    </span>
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: idx % 2 === 0 ? "#8DE0C1" : "#D5A17D",
                        boxShadow: `0 0 10px ${idx % 2 === 0 ? "#8DE0C1" : "#D5A17D"}`,
                      }}
                    />
                  </React.Fragment>
                );
              })}
            </div>

            {/* Set 2 (Duplicate for seamless loop) */}
            <div
              aria-hidden="true"
              className="flex items-center gap-10 text-sm sm:text-base tracking-widest uppercase"
            >
              {SITE_CONFIG.serviceStrip.map((service, idx) => {
                const isSerif = idx % 2 === 1;

                return (
                  <React.Fragment key={`strip-2-${idx}`}>
                    <span
                      className={`${
                        isSerif
                          ? "font-serif italic font-normal text-[#8DE0C1] tracking-wider text-base sm:text-lg"
                          : "font-mono font-medium text-[#F1F3EB]"
                      }`}
                    >
                      {service}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: idx % 2 === 0 ? "#8DE0C1" : "#D5A17D",
                        boxShadow: `0 0 10px ${idx % 2 === 0 ? "#8DE0C1" : "#D5A17D"}`,
                      }}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Accessible Pause / Resume Button */}
        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          aria-label={isPaused ? "Resume marquee animation" : "Pause marquee animation"}
          className="shrink-0 p-1.5 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#A4B7AF] hover:text-[#8DE0C1] hover:border-[#8DE0C1]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
        >
          {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
        </button>
      </div>
    </div>
  );
};
