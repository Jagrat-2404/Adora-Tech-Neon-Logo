"use client";

import React, { useEffect, useRef } from "react";
import { X, ArrowRight, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { ProjectItem } from "@/data/content";

interface ConceptModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onDiscuss: (projectType: string) => void;
}

export const ConceptModal: React.FC<ConceptModalProps> = ({
  project,
  isOpen,
  onClose,
  onDiscuss,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousActive = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = origOverflow;
      previousActive?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#081B19]/80 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Backdrop Click */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#102A26] border border-[#8DE0C1]/30 shadow-2xl shadow-black/80 p-6 sm:p-10 text-[#F1F3EB]"
      >
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#A4B7AF]/15">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#153833] text-[#8DE0C1] border border-[#8DE0C1]/30">
              Concept Project
            </span>
            <span className="text-xs text-[#A4B7AF] font-mono">
              {project.category}
            </span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project preview"
            className="p-2 text-[#A4B7AF] hover:text-[#F1F3EB] hover:bg-[#153833] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Header */}
        <div className="pt-6 pb-6">
          <h3
            id="modal-title"
            className="font-[family-name:var(--font-outfit)] text-2xl sm:text-4xl font-medium tracking-tight text-[#F1F3EB] mb-2"
          >
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-[#D5A17D] font-mono mb-4">
            {project.tagline}
          </p>
          <p className="text-sm sm:text-base text-[#A4B7AF] leading-relaxed font-light">
            {project.fullOverview}
          </p>
        </div>

        {/* Key Technical Highlights */}
        <div className="py-6 border-y border-[#A4B7AF]/15 space-y-6">
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#8DE0C1] mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Considered Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#081B19]/50 border border-[#A4B7AF]/10 text-xs sm:text-sm text-[#F1F3EB]/90 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#A4B7AF] mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#A4B7AF]" />
              <span>Architecture & Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.architecture.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#153833]/70 text-[#A4B7AF] border border-[#A4B7AF]/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Honesty Notice */}
        <div className="py-4 text-xs text-[#A4B7AF]/70 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#8DE0C1]" />
          <span>
            Original architectural and interface case study developed by ADORA TECH.
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-[#A4B7AF] hover:text-[#F1F3EB] transition-colors"
          >
            ← Return to work
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              const type =
                project.category === "Website Experience"
                  ? "Website"
                  : project.category === "Mobile Application"
                  ? "Mobile App"
                  : "Custom Software";
              onDiscuss(type);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#8DE0C1] hover:bg-[#A1E8D0] text-[#081B19] shadow-lg shadow-[#8DE0C1]/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
          >
            <span>Discuss similar project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
