"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";

interface OLoaderProps {
  onComplete: () => void;
  onStartReveal?: () => void;
}

/**
 * OLoader Component
 *
 * Dedicated lightweight page loader for non-home pages (About, Services, Contact, Blog).
 * Displays ONLY the iconic glowing neon "O" emblem with an energetic neon pulse,
 * then cleanly dissolves away so the target page appears from the back.
 */
export const OLoader: React.FC<OLoaderProps> = ({
  onComplete,
  onStartReveal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const oWrapperRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isSkipped, setIsSkipped] = useState(false);

  const handleFinish = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
    setIsSkipped(true);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      handleFinish();
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const timer = setTimeout(() => {
      const container = containerRef.current;
      const oWrapper = oWrapperRef.current;
      const halo = haloRef.current;
      const ring = ringRef.current;

      if (!container || !oWrapper) {
        handleFinish();
        return;
      }

      // Initial states
      gsap.set(container, { opacity: 1 });
      gsap.set(oWrapper, { opacity: 0, scale: 0.75, rotation: -12 });
      if (halo) gsap.set(halo, { opacity: 0, scale: 0.6 });
      if (ring) gsap.set(ring, { opacity: 0, scale: 0.8 });

      const tl = gsap.timeline({
        onComplete: handleFinish,
      });
      timelineRef.current = tl;

      // Stage 1: Fast neon "O" ignition & halo bloom
      tl.to(
        oWrapper,
        {
          opacity: 1,
          scale: 1.08,
          rotation: 0,
          duration: 0.4,
          ease: "back.out(2)",
        },
        0.05
      );

      if (halo) {
        tl.to(
          halo,
          {
            opacity: 0.9,
            scale: 1.25,
            duration: 0.45,
            ease: "power2.out",
          },
          0.05
        );
      }

      if (ring) {
        tl.to(
          ring,
          {
            opacity: 1,
            scale: 1.0,
            duration: 0.35,
            ease: "power2.out",
          },
          0.1
        );
      }

      // Stage 2: Settle into glowing center
      tl.to(
        oWrapper,
        {
          scale: 1.0,
          duration: 0.3,
          ease: "power1.inOut",
        },
        0.45
      );

      // Stage 3: Smooth Dissolve & Reveal target page
      tl.add(() => {
        if (onStartReveal) {
          onStartReveal();
        }

        // Dissolve the "O" emblem in place
        gsap.to(oWrapper, {
          opacity: 0,
          scale: 0.92,
          duration: 0.35,
          ease: "power2.inOut",
        });

        if (halo) {
          gsap.to(halo, {
            opacity: 0,
            scale: 0.7,
            duration: 0.3,
            ease: "power2.in",
          });
        }

        if (ring) {
          gsap.to(ring, {
            opacity: 0,
            scale: 1.15,
            duration: 0.3,
            ease: "power2.in",
          });
        }

        // Dissolve background overlay cleanly
        gsap.to(container, {
          opacity: 0,
          duration: 0.45,
          ease: "power2.inOut",
        });
      }, 0.85);

      // Finish cleanly
      tl.to({}, { duration: 0.5 });
    }, 20);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [handleFinish, onStartReveal]);

  if (isSkipped) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081B19] select-none pointer-events-auto"
      style={{ isolation: "isolate" }}
    >
      {/* Background ambient radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(141, 224, 193, 0.15) 0%, transparent 60%), radial-gradient(circle at 52% 48%, rgba(213, 161, 125, 0.1) 0%, transparent 50%)",
        }}
      />

      {/* Accessible Skip Button */}
      <button
        type="button"
        onClick={handleFinish}
        className="absolute top-6 right-6 z-[110] px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium text-[#A4B7AF] hover:text-[#8DE0C1] bg-[#102A26]/80 hover:bg-[#153833] border border-[#A4B7AF]/20 hover:border-[#8DE0C1]/40 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
        aria-label="Skip loading animation"
      >
        Skip
        <span className="hidden sm:inline-block ml-1 text-[10px] text-[#A4B7AF]/60">
          (Esc)
        </span>
      </button>

      {/* Centered Glowing "O" Container */}
      <div
        ref={oWrapperRef}
        className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center will-change-transform"
      >
        {/* Ambient Halo behind the O */}
        <div
          ref={haloRef}
          aria-hidden="true"
          className="absolute w-[140%] h-[140%] rounded-full pointer-events-none blur-xl -z-10"
          style={{
            background:
              "radial-gradient(circle at 45% 45%, rgba(141, 224, 193, 0.8) 0%, rgba(213, 161, 125, 0.5) 45%, transparent 70%)",
          }}
        />

        {/* Orbit spinner ring */}
        <div
          ref={ringRef}
          aria-hidden="true"
          className="absolute w-[130%] h-[130%] rounded-full border border-[#8DE0C1]/20 border-t-[#8DE0C1] animate-spin pointer-events-none -z-10"
          style={{ animationDuration: "1.6s" }}
        />

        {/* The Neon "O" Image */}
        <Image
          src="/logo-o-only.png"
          alt="ADORA TECH glowing O emblem"
          width={112}
          height={114}
          priority
          className="w-full h-auto object-contain filter drop-shadow-[0_0_20px_rgba(141,224,193,0.7)]"
        />
      </div>
    </div>
  );
};
