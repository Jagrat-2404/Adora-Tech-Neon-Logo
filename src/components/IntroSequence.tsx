"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";

interface IntroSequenceProps {
  onComplete: () => void;
  headerLogoTargetId?: string;
}

/**
 * IntroSequence Component
 *
 * Implements the signature brand reveal requested:
 * 1. The glowing neon "O" is highlighted and animated first in the center of the screen
 *    with a neon shockwave, bloom pulse, and scale flare.
 * 2. The surrounding letters ("AD", "RA", "TECH") illuminate and assemble around the "O".
 * 3. The entire assembled logo smoothly glides and scales directly into the top-left corner of the header.
 * 4. The homepage unfolds seamlessly with zero layout jump.
 */
export const IntroSequence: React.FC<IntroSequenceProps> = ({
  onComplete,
  headerLogoTargetId = "header-logo-target",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const oRingRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const shockwaveRef = useRef<HTMLDivElement>(null);
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
      // Storage safe
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

    // Escape key skips intro
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const timer = setTimeout(() => {
      const container = containerRef.current;
      const logoWrapper = logoWrapperRef.current;
      const oRing = oRingRef.current;
      const letters = lettersRef.current;
      const halo = haloRef.current;
      const shockwave = shockwaveRef.current;
      const headerTarget = document.getElementById(headerLogoTargetId);

      if (!container || !logoWrapper || !oRing || !letters || !headerTarget) {
        handleFinish();
        return;
      }

      // Initial state
      gsap.set(logoWrapper, { opacity: 1 });
      gsap.set(letters, { opacity: 0, scale: 0.94 });
      gsap.set(oRing, { opacity: 0, scale: 0.45, rotation: -20 });
      if (halo) gsap.set(halo, { opacity: 0, scale: 0.5 });
      if (shockwave) gsap.set(shockwave, { opacity: 0, scale: 0.8 });

      const tl = gsap.timeline({
        onComplete: handleFinish,
      });
      timelineRef.current = tl;

      // ─────────────────────────────────────────────────────────────
      // STAGE 1: Animate the "O" First (Center stage ignition)
      // ─────────────────────────────────────────────────────────────

      // O Ring ignites with elastic scale and rotation snap
      tl.to(
        oRing,
        {
          opacity: 1,
          scale: 1.18,
          rotation: 0,
          duration: 0.75,
          ease: "back.out(2.2)",
        },
        0.05
      );

      // Neon dual-color halo blooms behind the O
      if (halo) {
        tl.to(
          halo,
          {
            opacity: 0.9,
            scale: 1.25,
            duration: 0.7,
            ease: "power2.out",
          },
          0.1
        );
      }

      // Shockwave ring expands outward from the glowing O
      if (shockwave) {
        tl.to(
          shockwave,
          {
            opacity: 0.75,
            scale: 1.1,
            duration: 0.2,
            ease: "power1.out",
          },
          0.2
        );
        tl.to(
          shockwave,
          {
            opacity: 0,
            scale: 2.3,
            duration: 0.65,
            ease: "power2.out",
          },
          0.35
        );
      }

      // O settles from flare to natural size with an energetic pulse
      tl.to(
        oRing,
        {
          scale: 1.0,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.75
      );

      if (halo) {
        tl.to(
          halo,
          {
            scale: 1.0,
            opacity: 0.7,
            duration: 0.35,
            ease: "sine.inOut",
          },
          0.75
        );
      }

      // ─────────────────────────────────────────────────────────────
      // STAGE 2: Reveal the letters around the "O"
      // ─────────────────────────────────────────────────────────────
      tl.to(
        letters,
        {
          opacity: 1,
          scale: 1.0,
          duration: 0.55,
          ease: "power2.out",
        },
        1.05
      );

      // ─────────────────────────────────────────────────────────────
      // STAGE 3: "Put it in the corner" (Fly to header top-left)
      // ─────────────────────────────────────────────────────────────
      tl.add(() => {
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

        // Animate flight to top-left corner
        gsap.to(logoWrapper, {
          x: deltaX,
          y: deltaY,
          scale: scaleFactor,
          duration: 0.85,
          ease: "power3.inOut",
        });

        // Fade halo softly as it reaches corner
        if (halo) {
          gsap.to(halo, {
            opacity: 0.3,
            scale: 0.8,
            duration: 0.6,
            ease: "power2.in",
          });
        }

        // Dissolve dark intro background to reveal page underneath
        gsap.to(container, {
          opacity: 0,
          duration: 0.6,
          delay: 0.25,
          ease: "power2.inOut",
        });
      }, 1.6);

      // Timeline padding to finish cleanly
      tl.to({}, { duration: 0.9 });
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

      {/* 
        Centered Assembled Logo Container (Aspect Ratio: 808 x 288 = ~2.805)
        This wrapper is what glides to the top-left corner.
      */}
      <div
        ref={logoWrapperRef}
        className="relative w-[300px] xs:w-[360px] sm:w-[440px] md:w-[480px] aspect-[808/288] flex items-center justify-center will-change-transform"
      >
        {/* Ambient Halo behind the O position */}
        <div
          ref={haloRef}
          aria-hidden="true"
          className="absolute w-[36%] h-[78%] rounded-full pointer-events-none blur-xl -z-10"
          style={{
            left: "52.29%",
            top: "38.89%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle at 35% 50%, rgba(141, 224, 193, 0.85) 0%, transparent 65%), radial-gradient(circle at 65% 50%, rgba(213, 161, 125, 0.75) 0%, transparent 65%)",
          }}
        />

        {/* Shockwave expanding ripple on ignition */}
        <div
          ref={shockwaveRef}
          aria-hidden="true"
          className="absolute w-[28.59%] aspect-square rounded-full pointer-events-none border border-[#8DE0C1] -z-10"
          style={{
            left: "52.29%",
            top: "38.89%",
            transform: "translate(-50%, -50%)",
            boxShadow:
              "0 0 18px rgba(141, 224, 193, 0.6), inset 0 0 18px rgba(213, 161, 125, 0.4)",
          }}
        />

        {/* 
          STAGE 1 ELEMENT: The Isolated Glowing "O" Ring
          Starts first, pulses and blooms, positioned at exact O center
        */}
        <div
          ref={oRingRef}
          className="absolute w-[28.59%] h-auto z-20 pointer-events-none will-change-transform"
          style={{
            left: "52.29%",
            top: "38.89%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/logo-o-only.png"
            alt="ADORA TECH glowing O emblem"
            width={231}
            height={234}
            priority
            className="w-full h-auto object-contain filter drop-shadow-[0_0_15px_rgba(141,224,193,0.5)]"
          />
        </div>

        {/* 
          STAGE 2 ELEMENT: Surrounding Letters ("AD", "RA", "TECH")
          Fades in around the O to complete the full logo
        */}
        <div
          ref={lettersRef}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none will-change-transform"
        >
          <Image
            src="/logo-letters-only.png"
            alt="ADORA TECH"
            width={808}
            height={288}
            priority
            className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(241,243,235,0.2)]"
          />
        </div>
      </div>
    </div>
  );
};
