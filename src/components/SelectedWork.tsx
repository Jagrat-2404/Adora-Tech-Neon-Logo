"use client";

import React, { useState } from "react";
import { ArrowUpRight, ShoppingBag, Calendar, Terminal, Layout } from "lucide-react";
import { SITE_CONFIG, ProjectCardItem } from "@/data/content";
import { ConceptModal } from "./ConceptModal";

interface SelectedWorkProps {
  onSelectProjectType?: (type: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProjectType,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectCardItem | null>(
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

  const filteredProjects =
    activeFilter === "All"
      ? SITE_CONFIG.selectedWork.projects
      : SITE_CONFIG.selectedWork.projects.filter(
          (p) => p.category === activeFilter
        );

  return (
    <section
      id="work"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10"
      aria-labelledby="work-heading"
    >
      {/* Header & Filter Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
            <span>{SITE_CONFIG.selectedWork.eyebrow}</span>
          </div>
          <h2
            id="work-heading"
            className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-light tracking-tight text-[#F1F3EB]"
          >
            {SITE_CONFIG.selectedWork.heading}
          </h2>
        </div>

        {/* Filter Controls (All / Websites / Apps / Software) */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0"
        >
          {SITE_CONFIG.selectedWork.filterCategories.map((category) => {
            const isSelected = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1] ${
                  isSelected
                    ? "bg-[#8DE0C1] text-[#081B19] font-semibold border-[#8DE0C1] shadow-[0_0_15px_rgba(141,224,193,0.3)]"
                    : "bg-[#081B19] text-[#A4B7AF] border-[#A4B7AF]/20 hover:border-[#8DE0C1]/40 hover:text-[#F1F3EB]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Varied Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
        {filteredProjects.map((project, index) => {
          // Make the first card an expansive featured 8-col or 12-col item on wide viewports
          const isFeatured = index === 0 && activeFilter === "All";
          const colSpan = isFeatured ? "lg:col-span-12" : "lg:col-span-6";

          return (
            <div
              key={project.id}
              className={`${colSpan} group relative rounded-3xl bg-[#0D2421]/80 border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-black/40`}
            >
              {/* Top Meta: Badge and Category */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-[#153833] text-[#8DE0C1] border border-[#8DE0C1]/30">
                  Concept Project
                </span>
                <span className="text-xs font-mono text-[#A4B7AF]">
                  {project.category}
                </span>
              </div>

              {/* Bespoke Original Interface Mockup Frame */}
              <div className="rounded-2xl bg-[#081B19] border border-[#A4B7AF]/15 overflow-hidden mb-6 p-4 sm:p-6 select-none group-hover:scale-[1.01] transition-transform duration-500">
                {/* 1. Commerce Experience Mockup */}
                {project.id === "commerce-experience" && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-[#A4B7AF]/15 text-[#A4B7AF]/60 text-[11px]">
                      <span className="text-[#8DE0C1]">storefront.atelier.concept</span>
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-3.5 h-3.5 text-[#D5A17D]" />
                        <span className="text-[#F1F3EB]">Bag (2)</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 items-center">
                      <div className="p-4 rounded-xl bg-[#102A26] border border-[#A4B7AF]/10">
                        <span className="text-[10px] text-[#D5A17D] block mb-1">
                          Collection 2026
                        </span>
                        <h4 className="text-sm font-sans font-medium text-[#F1F3EB] mb-2">
                          Minimalist Wool Overcoat
                        </h4>
                        <span className="text-xs text-[#8DE0C1] font-semibold">
                          $480.00
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#102A26] border border-[#A4B7AF]/10">
                        <span className="text-[10px] text-[#A4B7AF] block mb-1">
                          Checkout Engine
                        </span>
                        <div className="h-2 w-full bg-[#153833] rounded mb-2 overflow-hidden">
                          <div className="h-full w-3/4 bg-[#8DE0C1]" />
                        </div>
                        <span className="text-[10px] text-[#8DE0C1]">
                          Apple Pay / Stripe Ready
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Mobile Booking App Mockup */}
                {project.id === "mobile-booking-app" && (
                  <div className="p-2 flex justify-center">
                    <div className="w-full max-w-[280px] rounded-2xl bg-[#0A1615] border border-[#163631] p-4 text-xs font-mono">
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#A4B7AF]/15 text-[10px] text-[#A4B7AF]">
                        <span className="flex items-center gap-1.5 text-[#8DE0C1]">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>OCTOBER 2026</span>
                        </span>
                        <span className="text-[#F1F3EB]">CONFIRMED</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] mb-3">
                        <span className="p-1 rounded bg-[#102A26] text-[#A4B7AF]">09:00</span>
                        <span className="p-1 rounded bg-[#153833] text-[#8DE0C1] font-semibold">10:30</span>
                        <span className="p-1 rounded bg-[#102A26] text-[#A4B7AF]">14:00</span>
                        <span className="p-1 rounded bg-[#102A26] text-[#A4B7AF]">16:15</span>
                      </div>
                      <div className="p-2 rounded bg-[#102A26] text-[10px] text-[#A4B7AF] text-center">
                        Instant Calendar Sync (Google &amp; Apple)
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Operations Dashboard Mockup */}
                {project.id === "operations-dashboard" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-[#A4B7AF]">
                      <div className="flex items-center gap-2 text-[#8DE0C1]">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>ORCHESTRATION CONSOLE</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#153833] text-[#8DE0C1]">
                        LIVE
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-lg bg-[#102A26] border border-[#A4B7AF]/10">
                        <span className="text-[10px] text-[#A4B7AF] block">
                          ROUTED CONVOYS
                        </span>
                        <span className="text-base font-bold text-[#F1F3EB]">
                          148
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#102A26] border border-[#A4B7AF]/10">
                        <span className="text-[10px] text-[#A4B7AF] block">
                          UPTIME
                        </span>
                        <span className="text-base font-bold text-[#8DE0C1]">
                          99.98%
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Spatial Design Studio Mockup */}
                {project.id === "spatial-design-studio" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[#A4B7AF]/15 text-[#A4B7AF]/60">
                      <span className="text-[#8DE0C1]">aura-spatial.concept</span>
                      <Layout className="w-3.5 h-3.5" />
                    </div>
                    <div className="h-20 rounded-lg bg-[#102A26] p-3 flex flex-col justify-between">
                      <span className="text-[10px] text-[#D5A17D] uppercase">
                        Structural Facade / Monolith
                      </span>
                      <span className="text-xs font-sans text-[#F1F3EB]">
                        LAT 45.42° N · LON 75.69° W
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Title, Tagline & Summary */}
              <div>
                <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-medium text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#D5A17D] mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-[#A4B7AF] font-light leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Architecture Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.architecture.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#081B19] text-[#A4B7AF] border border-[#A4B7AF]/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Trigger Button */}
              <div className="pt-4 border-t border-[#A4B7AF]/10">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8DE0C1] hover:text-[#A1E8D0] focus:outline-none focus-visible:underline"
                >
                  <span>Explore concept preview</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Accessible Detail Modal */}
      {selectedProject && (
        <ConceptModal
          project={{
            ...selectedProject,
            category:
              selectedProject.category === "Websites"
                ? "Website Experience"
                : selectedProject.category === "Apps"
                ? "Mobile Application"
                : "Software Dashboard",
            fullOverview: selectedProject.summary,
          }}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          onDiscuss={handleDiscuss}
        />
      )}
    </section>
  );
};
