"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { BrandLogo } from "./BrandLogo";

interface IntroSequenceProps {
  onComplete: () => void;
  headerLogoTargetId?: string;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({
  onComplete,
  headerLogoTargetId = "header-logo-target",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isSkipped, setIsSkipped] = useState(false);

  const handleFinish = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
    setIsSkipped(true);
    try {
      sessionStorage.setItem("adora_intro_seen_v1", "true");
    } catch {
      // Ignore storage errors in private browsing
    }
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      handleFinish();
      return;
    }

    // Keyboard listener: Escape skips intro
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Run GSAP sequence after DOM has settled
    const timer = setTimeout(() => {
      const container = containerRef.current;
      const logoWrapper = logoWrapperRef.current;
      const halo = haloRef.current;
      const headerTarget = document.getElementById(headerLogoTargetId);

      if (!container || !logoWrapper || !headerTarget) {
        handleFinish();
        return;
      }

      // Initial visual states
      gsap.set(logoWrapper, { opacity: 0, scale: 0.9, y: 12 });
      if (halo) gsap.set(halo, { opacity: 0, scale: 0.8 });

      const tl = gsap.timeline({
        onComplete: handleFinish,
      });
      timelineRef.current = tl;

      // Step 1: Logo & halo fade-in with gentle scale (0.0s - 0.7s)
      tl.to(
        logoWrapper,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        0
      );

      if (halo) {
        tl.to(
          halo,
          {
            opacity: 0.85,
            scale: 1.15,
            duration: 0.8,
            ease: "sine.out",
          },
          0.1
        );
        // Step 2: Soft breathing pulse on the halo (0.7s - 1.2s)
        tl.to(
          halo,
          {
            opacity: 0.6,
            scale: 1,
            duration: 0.5,
            ease: "sine.inOut",
          },
          0.7
        );
      }

      // Step 3: Travel smoothly to header target (1.2s - 2.1s)
      tl.add(() => {
        // Measure target position dynamically to account for current screen size
        const targetRect = headerTarget.getBoundingClientRect();
        const currentRect = logoWrapper.getBoundingClientRect();

        if (!targetRect || !currentRect) return;

        const currentCenterX = currentRect.left + currentRect.width / 2;
        const currentCenterY = currentRect.top + currentRect.height / 2;
        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;

        const deltaX = targetCenterX - currentCenterX;
        const deltaY = targetCenterY - currentCenterY;
        const scaleFactor = targetRect.width / currentRect.width;

        // Animate flight to target
        gsap.to(logoWrapper, {
          x: deltaX,
          y: deltaY,
          scale: scaleFactor,
          duration: 0.85,
          ease: "power3.inOut",
        });

        // Fade out halo during travel so it settles neatly
        if (halo) {
          gsap.to(halo, {
            opacity: 0,
            scale: 0.6,
            duration: 0.5,
            ease: "power2.in",
          });
        }

        // Fade out the dark intro overlay to reveal the page
        gsap.to(container, {
          opacity: 0,
          duration: 0.65,
          delay: 0.25,
          ease: "power2.inOut",
        });
      }, 1.25);

      // Total timeline duration ~ 2.15 seconds
      tl.to({}, { duration: 0.95 });
    }, 60);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [handleFinish, headerLogoTargetId]);

  if (isSkipped) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="ADORA TECH introduction"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081B19] select-none pointer-events-auto"
      style={{ isolation: "isolate" }}
    >
      {/* Background ambient radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(141, 224, 193, 0.12) 0%, transparent 60%), radial-gradient(circle at 52% 48%, rgba(213, 161, 125, 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Accessible Skip Button */}
      <button
        type="button"
        onClick={handleFinish}
        className="absolute top-6 right-6 z-[110] px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium text-[#A4B7AF] hover:text-[#8DE0C1] bg-[#102A26]/80 hover:bg-[#153833] border border-[#A4B7AF]/20 hover:border-[#8DE0C1]/40 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
        aria-label="Skip introductory animation"
      >
        Skip intro
        <span className="hidden sm:inline-block ml-1.5 text-[10px] text-[#A4B7AF]/60">
          (Esc)
        </span>
      </button>

      {/* Centered Logo & Halo Container */}
      <div
        ref={logoWrapperRef}
        className="relative flex items-center justify-center will-change-transform"
      >
        {/* Soft breathing halo behind the O */}
        <div
          ref={haloRef}
          aria-hidden="true"
          className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full pointer-events-none -translate-y-1"
          style={{
            background:
              "radial-gradient(circle at 35% 50%, rgba(141, 224, 193, 0.55) 0%, transparent 70%), radial-gradient(circle at 65% 50%, rgba(213, 161, 125, 0.5) 0%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />

        {/* Logo at visual center */}
        <BrandLogo size="intro" priority withGlow={false} />
      </div>
    </div>
  );
};
