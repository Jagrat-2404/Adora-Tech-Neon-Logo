"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Editorial Text Column */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-6">
            <span>{SITE_CONFIG.aboutSection.eyebrow}</span>
          </div>

          <h2
            id="about-heading"
            className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-medium tracking-tight text-[#F1F3EB] mb-6 leading-tight"
          >
            {SITE_CONFIG.aboutSection.heading}
          </h2>

          <p className="text-lg sm:text-xl text-[#F1F3EB] font-light leading-relaxed mb-4">
            {SITE_CONFIG.aboutSection.copy}
          </p>

          <p className="text-sm sm:text-base text-[#A4B7AF] font-light leading-relaxed mb-10">
            {SITE_CONFIG.aboutSection.subCopy}
          </p>

          {/* 3 Principles */}
          <div className="space-y-4">
            {SITE_CONFIG.aboutSection.principles.map((principle) => (
              <div
                key={principle.number}
                className="p-5 rounded-2xl bg-[#0D2421]/80 border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#8DE0C1] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-outfit)] text-base sm:text-lg font-medium text-[#F1F3EB] mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A4B7AF] font-light leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Column: Abstract Ring Composition */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          {/* Subtle Ambient Radial Backlight */}
          <div
            aria-hidden="true"
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full pointer-events-none opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(141, 224, 193, 0.4) 0%, rgba(213, 161, 125, 0.3) 50%, transparent 70%)",
            }}
          />

          {/* Precision SVG Ring Composition */}
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full flex items-center justify-center p-6 bg-[#102A26]/40 border border-[#A4B7AF]/15 backdrop-blur-md shadow-2xl">
            <svg
              className="w-full h-full"
              viewBox="0 0 300 300"
              fill="none"
              aria-hidden="true"
            >
              {/* Outer Orbital Ring */}
              <circle
                cx="150"
                cy="150"
                r="135"
                stroke="#A4B7AF"
                strokeOpacity="0.15"
                strokeWidth="1"
                strokeDasharray="4 8"
              />

              {/* Mint Accent Arc */}
              <circle
                cx="150"
                cy="150"
                r="105"
                stroke="url(#aboutMintGrad)"
                strokeWidth="2.5"
                strokeDasharray="180 300"
                strokeLinecap="round"
              />

              {/* Copper Counter-Arc */}
              <circle
                cx="150"
                cy="150"
                r="75"
                stroke="url(#aboutCopperGrad)"
                strokeWidth="2"
                strokeDasharray="140 200"
                strokeDashoffset="70"
                strokeLinecap="round"
              />

              {/* Central Glowing Core (Representing the circular O) */}
              <circle
                cx="150"
                cy="150"
                r="38"
                fill="#081B19"
                stroke="#8DE0C1"
                strokeWidth="2"
                strokeOpacity="0.8"
              />
              <circle
                cx="150"
                cy="150"
                r="28"
                fill="url(#coreGrad)"
                opacity="0.4"
              />

              {/* Coordinates / Alignment Marks */}
              <line
                x1="150"
                y1="10"
                x2="150"
                y2="25"
                stroke="#8DE0C1"
                strokeWidth="1.5"
              />
              <line
                x1="150"
                y1="275"
                x2="150"
                y2="290"
                stroke="#D5A17D"
                strokeWidth="1.5"
              />
              <line
                x1="10"
                y1="150"
                x2="25"
                y2="150"
                stroke="#8DE0C1"
                strokeWidth="1.5"
              />
              <line
                x1="275"
                y1="150"
                x2="290"
                y2="150"
                stroke="#D5A17D"
                strokeWidth="1.5"
              />

              <defs>
                <linearGradient
                  id="aboutMintGrad"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#8DE0C1" />
                  <stop offset="100%" stopColor="#8DE0C1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="aboutCopperGrad"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#D5A17D" />
                  <stop offset="100%" stopColor="#D5A17D" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8DE0C1" />
                  <stop offset="100%" stopColor="#081B19" />
                </radialGradient>
              </defs>
            </svg>

            {/* Emblem Center Text */}
            <div className="absolute text-center select-none pointer-events-none">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8DE0C1] block">
                ADORA
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#A4B7AF]/70 block">
                TECH
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
