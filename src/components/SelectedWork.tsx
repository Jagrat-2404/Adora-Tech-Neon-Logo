"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_CONFIG, ProjectCardItem } from "@/data/content";
import { ConceptModal } from "./ConceptModal";

interface SelectedWorkProps {
  onSelectProjectType?: (type: string) => void;
}

// Project visual imagery pairs (Primary & Hover Alternate Screen)
const projectMediaMap: Record<
  string,
  { primary: string; alt: string; categoryTag: string }
> = {
  "commerce-experience": {
    primary: "/images/web_editorial_ui.jpg",
    alt: "/images/it_datacenter.jpg",
    categoryTag: "WEB PLATFORM // E-COMMERCE",
  },
  "mobile-booking-app": {
    primary: "/images/mobile_app_ui.jpg",
    alt: "/images/it_soc.jpg",
    categoryTag: "MOBILE APPLICATION // IOS & ANDROID",
  },
  "operations-dashboard": {
    primary: "/images/cloud_dashboard_ui.jpg",
    alt: "/images/it_devops.jpg",
    categoryTag: "CLOUD SOFTWARE // TELEMETRY",
  },
  "spatial-design-studio": {
    primary: "/images/web_editorial_ui.jpg",
    alt: "/images/mobile_app_ui.jpg",
    categoryTag: "ARCHITECTURE // SPATIAL WEB",
  },
};

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProjectType,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectCardItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
    } else {
      setScrollProgress((el.scrollLeft / maxScroll) * 100);
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, [filteredProjects]);

  const scrollByAmount = (distance: number) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  return (
    <section
      id="work"
      className="py-24 sm:py-36 border-b border-[#A4B7AF]/10 relative overflow-hidden"
      aria-labelledby="work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
              <span>[ {SITE_CONFIG.selectedWork.eyebrow} ]</span>
            </div>
            <h2
              id="work-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F1F3EB] leading-[1.08]"
            >
              Selected Work Crafted with{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
                Technical Depth
              </span>
              .
            </h2>
          </div>

          {/* Filter Chips & Track Navigation Arrows */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex items-center gap-2 overflow-x-auto pb-1"
            >
              {SITE_CONFIG.selectedWork.filterCategories.map((category) => {
                const isSelected = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border whitespace-nowrap focus:outline-none ${
                      isSelected
                        ? "bg-[#8DE0C1] text-[#081B19] font-semibold border-[#8DE0C1] shadow-[0_0_15px_rgba(141,224,193,0.35)]"
                        : "bg-[#081B19] text-[#A4B7AF] border-[#A4B7AF]/20 hover:border-[#8DE0C1]/40 hover:text-[#F1F3EB]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Arrows */}
            <div className="hidden sm:flex items-center gap-2 ml-2">
              <button
                onClick={() => scrollByAmount(-380)}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full border border-[#A4B7AF]/20 flex items-center justify-center text-[#A4B7AF] hover:text-[#8DE0C1] hover:border-[#8DE0C1]/40 transition-colors bg-[#102A26]/50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollByAmount(380)}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full border border-[#A4B7AF]/20 flex items-center justify-center text-[#A4B7AF] hover:text-[#8DE0C1] hover:border-[#8DE0C1]/40 transition-colors bg-[#102A26]/50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vayem Studios Inspired Horizontal Scroll Track (.hs-track) */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scrollbar-none px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-smooth pb-4 select-none"
        style={{ scrollbarWidth: "none" }}
      >
        {filteredProjects.map((project) => {
          const media =
            projectMediaMap[project.id] || {
              primary: "/images/web_editorial_ui.jpg",
              alt: "/images/it_datacenter.jpg",
              categoryTag: project.category,
            };

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4.2] rounded-3xl overflow-hidden bg-[#102A26] border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/50 transition-all duration-500 shrink-0 group cursor-pointer shadow-xl shadow-black/40"
            >
              {/* Primary Image */}
              <Image
                src={media.primary}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 300px, 400px"
              />

              {/* Secondary Alternate Image (Fades in on hover) */}
              <Image
                src={media.alt}
                alt={`${project.title} alternate view`}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                sizes="(max-width: 768px) 300px, 400px"
              />

              {/* Cinematic Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B19]/95 via-[#081B19]/25 to-transparent pointer-events-none" />

              {/* Top Tag Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#081B19]/85 border border-[#8DE0C1]/40 text-[#8DE0C1] backdrop-blur-md">
                  {media.categoryTag}
                </span>
              </div>

              {/* Bottom Caption and Vayem Circular Arrow Button */}
              <div className="absolute left-5 right-5 bottom-5 z-10 flex items-end justify-between gap-4">
                <div className="max-w-[75%]">
                  <span className="text-[11px] font-mono text-[#A4B7AF] uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors leading-tight truncate">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#A4B7AF] font-light mt-1 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Signature Vayem-style Circular Arrow Button */}
                <div className="w-11 h-11 rounded-full bg-[#081B19]/80 border border-[#A4B7AF]/30 group-hover:border-[#8DE0C1] group-hover:bg-[#8DE0C1] text-[#A4B7AF] group-hover:text-[#081B19] flex items-center justify-center shrink-0 transition-all duration-300 transform group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          );
        })}

        {/* Finale Card: Full Architecture Spec */}
        <div
          onClick={() => handleDiscuss("Custom Software")}
          className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4.2] rounded-3xl overflow-hidden bg-gradient-to-br from-[#102A26] to-[#0A1F1C] border border-[#8DE0C1]/30 p-8 flex flex-col justify-between shrink-0 group cursor-pointer shadow-xl hover:border-[#8DE0C1] transition-all duration-300"
        >
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#081B19]/85 border border-[#8DE0C1]/40 text-[#8DE0C1]">
              FULL PORTFOLIO
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#F1F3EB] leading-tight">
              Explore Every{" "}
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] to-[#D5A17D]">
                Enterprise
              </span>{" "}
              Architecture.
            </h3>
            <p className="text-sm text-[#A4B7AF] font-light leading-relaxed">
              From real-time WebSocket fleet consoles to sub-second headless retail stores.
            </p>
          </div>

          <div className="pt-6 border-t border-[#A4B7AF]/15 flex items-center justify-between text-sm font-semibold text-[#8DE0C1]">
            <span>Request Architecture Walkthrough</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* Vayem Studios Scroll Progress Indicator Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="h-[2px] bg-[#A4B7AF]/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#8DE0C1] to-[#D5A17D] transition-all duration-300"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>
      </div>

      {/* Deep-Dive Interactive Concept Modal */}
      {selectedProject && (
        <ConceptModal
          project={selectedProject}
          isOpen={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
          onDiscuss={handleDiscuss}
        />
      )}
    </section>
  );
};
