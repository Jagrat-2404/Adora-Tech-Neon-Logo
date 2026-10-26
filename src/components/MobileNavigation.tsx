"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLink: (href: string) => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  onSelectLink,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
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
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-[#081B19]/95 backdrop-blur-2xl transition-all duration-300"
    >
      {/* Background ambient radial */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-80 h-80 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(141, 224, 193, 0.4) 0%, rgba(213, 161, 125, 0.2) 60%, transparent 80%)",
        }}
      />

      {/* Top Header Row with Close Button */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#A4B7AF]/15">
        <span className="text-xs uppercase tracking-widest text-[#8DE0C1] font-mono">
          Menu
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 -mr-2 text-[#A4B7AF] hover:text-[#F1F3EB] hover:bg-[#102A26] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <div ref={panelRef} className="flex-1 flex flex-col justify-center px-8 py-8 space-y-6">
        <nav className="flex flex-col space-y-4">
          {SITE_CONFIG.navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onSelectLink(link.href);
              }}
              className="group flex items-center justify-between text-2xl font-light tracking-wide text-[#F1F3EB] hover:text-[#8DE0C1] py-2 border-b border-[#A4B7AF]/10 transition-colors focus:outline-none focus-visible:text-[#8DE0C1]"
            >
              <span>{link.label}</span>
              <span className="text-xs font-mono text-[#A4B7AF]/60 group-hover:text-[#8DE0C1] transition-colors">
                0{index + 1}
              </span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="pt-6">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onSelectLink("#contact");
            }}
            className="group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full font-medium text-sm tracking-wide bg-[#8DE0C1] text-[#081B19] hover:bg-[#A1E8D0] shadow-lg shadow-[#081B19]/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Mobile Footer Meta */}
      <div className="px-8 py-6 border-t border-[#A4B7AF]/10 text-xs text-[#A4B7AF]/70 flex items-center justify-between">
        <span>ADORA TECH</span>
        <span className="font-mono">{SITE_CONFIG.descriptor}</span>
      </div>
    </div>
  );
};
