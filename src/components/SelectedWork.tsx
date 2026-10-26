"use client";

import React, { useState } from "react";
import { ArrowUpRight, Activity, Terminal, Layout } from "lucide-react";
import { SITE_CONFIG, ProjectItem } from "@/data/content";
import { ConceptModal } from "./ConceptModal";

interface SelectedWorkProps {
  onSelectProjectType?: (type: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProjectType,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const handleDiscuss = (projectType: string) => {
    if (onSelectProjectType) {
      onSelectProjectType(projectType);
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="work"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-labelledby="work-heading"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
          <span>{SITE_CONFIG.workSection.eyebrow}</span>
        </div>
        <h2
          id="work-heading"
          className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-medium tracking-tight text-[#F1F3EB] mb-6"
        >
          {SITE_CONFIG.workSection.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#A4B7AF] font-light leading-relaxed mb-4">
          {SITE_CONFIG.workSection.description}
        </p>
        <div className="inline-block text-xs font-mono text-[#D5A17D] bg-[#153833]/50 px-3 py-1 rounded-md border border-[#D5A17D]/25">
          {SITE_CONFIG.workSection.honestyNote}
        </div>
      </div>

      {/* 3 Bespoke Presentation Cards */}
      <div className="space-y-16 lg:space-y-24">
        {SITE_CONFIG.workSection.projects.map((project, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={project.id}
              className={`flex flex-col ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12 items-center bg-[#0D2421]/60 rounded-3xl p-6 sm:p-10 border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all duration-300 shadow-xl shadow-black/20`}
            >
              {/* Interactive Mockup Container */}
              <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl bg-[#081B19] border border-[#A4B7AF]/20 group relative shadow-2xl">
                {/* 1. Website Mockup: Aura Spatial Design */}
                {project.id === "aura-architecture" && (
                  <div className="p-4 sm:p-6 bg-gradient-to-b from-[#102A26] to-[#081B19] select-none">
                    {/* Browser Chrome */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#A4B7AF]/15 text-xs font-mono text-[#A4B7AF]/60">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                      </div>
                      <span className="px-3 py-0.5 rounded bg-[#081B19]/80 text-[#8DE0C1]/80 text-[11px]">
                        studio.aura-spatial.concept
                      </span>
                      <Layout className="w-3.5 h-3.5" />
                    </div>

                    {/* Website Canvas Area */}
                    <div className="h-64 sm:h-72 rounded-xl bg-[#081B19] border border-[#A4B7AF]/10 p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
                      {/* Architectural Facade Vector Lines */}
                      <svg
                        className="absolute right-0 top-0 w-3/4 h-full opacity-20 pointer-events-none stroke-[#8DE0C1]"
                        fill="none"
                        viewBox="0 0 400 300"
                      >
                        <path
                          d="M50 250 L180 50 L310 250 Z"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />
                        <circle cx="180" cy="50" r="28" strokeWidth="1" />
                        <line
                          x1="0"
                          y1="250"
                          x2="400"
                          y2="250"
                          strokeWidth="1"
                        />
                        <line
                          x1="180"
                          y1="50"
                          x2="180"
                          y2="250"
                          strokeWidth="1"
                        />
                      </svg>

                      {/* Editorial Layout */}
                      <div className="z-10">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#D5A17D] block mb-2">
                          Spatial Geometry / 2026 Collection
                        </span>
                        <h4 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-light text-[#F1F3EB]">
                          Monolithic Sanctuary
                        </h4>
                      </div>

                      <div className="z-10 flex items-end justify-between pt-4 border-t border-[#A4B7AF]/10">
                        <div className="text-[11px] font-mono text-[#A4B7AF]">
                          <span>LAT 45.42° N</span>
                          <span className="mx-2">/</span>
                          <span>LON 75.69° W</span>
                        </div>
                        <span className="text-xs text-[#8DE0C1] font-mono">
                          Explore Study →
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Mobile App Mockup: Pulse Health Companion */}
                {project.id === "pulse-health" && (
                  <div className="p-6 bg-gradient-to-b from-[#102A26] to-[#081B19] flex justify-center select-none">
                    <div className="w-[260px] sm:w-[280px] rounded-[36px] bg-[#0A1615] border-4 border-[#163631] shadow-2xl p-4 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500">
                      {/* Mobile Notch & Status Bar */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#A4B7AF]/70 px-2 pb-3">
                        <span>09:41</span>
                        <div className="w-16 h-3 bg-black rounded-full" />
                        <span>5G 100%</span>
                      </div>

                      {/* Biometric Circular Dial */}
                      <div className="my-4 flex flex-col items-center">
                        <div className="relative w-36 h-36 rounded-full flex items-center justify-center p-3">
                          {/* Radial Progress Ring */}
                          <svg
                            className="w-full h-full -rotate-90 transform"
                            viewBox="0 0 100 100"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              fill="none"
                              stroke="#163631"
                              strokeWidth="6"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              fill="none"
                              stroke="url(#pulseGrad)"
                              strokeWidth="6"
                              strokeDasharray="264"
                              strokeDashoffset="38"
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id="pulseGrad"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="1"
                              >
                                <stop offset="0%" stopColor="#8DE0C1" />
                                <stop offset="100%" stopColor="#D5A17D" />
                              </linearGradient>
                            </defs>
                          </svg>

                          <div className="absolute flex flex-col items-center">
                            <span className="text-3xl font-mono font-medium text-[#F1F3EB]">
                              88
                            </span>
                            <span className="text-[10px] uppercase font-mono tracking-wider text-[#8DE0C1]">
                              Recovery Score
                            </span>
                          </div>
                        </div>

                        {/* Waveform Micro-Graph */}
                        <div className="w-full mt-3 px-2 py-2 rounded-xl bg-[#102A26]/60 border border-[#A4B7AF]/10 flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs text-[#A4B7AF]">
                            <Activity className="w-3.5 h-3.5 text-[#8DE0C1]" />
                            <span className="text-[11px] font-mono">Resting HR</span>
                          </div>
                          <span className="font-mono text-xs font-semibold text-[#8DE0C1]">
                            54 bpm
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 text-center">
                        <span className="text-[10px] font-mono uppercase text-[#A4B7AF]/60 tracking-widest">
                          Optimal Cadence
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Dashboard Mockup: Nexus Fleet Cloud */}
                {project.id === "nexus-logistics" && (
                  <div className="p-4 sm:p-6 bg-gradient-to-b from-[#102A26] to-[#081B19] select-none">
                    {/* Console Header */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#A4B7AF]/15 text-xs font-mono text-[#A4B7AF]">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-[#8DE0C1]" />
                        <span className="text-[#F1F3EB] font-medium">
                          NEXUS // DISPATCH OS v4.2
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-[#8DE0C1] text-[10px] font-mono border border-[#8DE0C1]/30">
                        STREAM: ACTIVE
                      </span>
                    </div>

                    {/* Operational Telemetry Grid */}
                    <div className="space-y-3 font-mono text-xs">
                      {/* KPI Row */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-3 rounded-lg bg-[#081B19] border border-[#A4B7AF]/10">
                          <span className="text-[10px] text-[#A4B7AF] block">
                            ACTIVE CONVOYS
                          </span>
                          <span className="text-lg font-bold text-[#F1F3EB]">
                            42
                          </span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#081B19] border border-[#A4B7AF]/10">
                          <span className="text-[10px] text-[#A4B7AF] block">
                            TRANSIT HEALTH
                          </span>
                          <span className="text-lg font-bold text-[#8DE0C1]">
                            99.8%
                          </span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#081B19] border border-[#A4B7AF]/10">
                          <span className="text-[10px] text-[#A4B7AF] block">
                            EXCEPTIONS
                          </span>
                          <span className="text-lg font-bold text-[#D5A17D]">
                            0
                          </span>
                        </div>
                      </div>

                      {/* Live Tabular Rows */}
                      <div className="p-3 rounded-lg bg-[#081B19] border border-[#A4B7AF]/10 space-y-2">
                        <div className="flex items-center justify-between text-[11px] pb-1 border-b border-[#A4B7AF]/10 text-[#A4B7AF]/70">
                          <span>ROUTING ID</span>
                          <span>SECTOR</span>
                          <span>LATENCY</span>
                          <span>STATUS</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[#F1F3EB]">
                          <span>NX-8820</span>
                          <span>Midwest Hub</span>
                          <span className="text-[#8DE0C1]">14ms</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#153833] text-[#8DE0C1]">
                            OPTIMAL
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[#F1F3EB]">
                          <span>NX-9104</span>
                          <span>Pacific Loop</span>
                          <span className="text-[#8DE0C1]">22ms</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#153833] text-[#8DE0C1]">
                            EN ROUTE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Text & Action Column */}
              <div className="w-full lg:w-2/5 flex flex-col justify-between">
                <div>
                  {/* Category & Concept Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-[#153833] text-[#8DE0C1] border border-[#8DE0C1]/30">
                      Concept Project
                    </span>
                    <span className="text-xs text-[#A4B7AF] font-mono">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-medium text-[#F1F3EB] mb-2">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm font-mono text-[#D5A17D] mb-4">
                    {project.tagline}
                  </p>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-[#A4B7AF] font-light leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.architecture.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#081B19] text-[#A4B7AF]/80 border border-[#A4B7AF]/15"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Accessible Trigger for Full Concept Preview Modal */}
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#8DE0C1] hover:text-[#A1E8D0] group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1] rounded"
                    aria-label={`Explore concept preview for ${project.title}`}
                  >
                    <span>Explore concept preview</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Concept Detail Modal */}
      <ConceptModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        onDiscuss={handleDiscuss}
      />
    </section>
  );
};
