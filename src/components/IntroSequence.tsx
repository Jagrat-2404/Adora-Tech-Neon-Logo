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
 * Runs on every reload and page navigation:
 * 1. Highlights and animates the neon "O" first in the center with neon shockwave & bloom pulse.
 * 2. Assembles surrounding ivory letters ("AD", "RA", "TECH") around it.
 * 3. Smoothly glides and scales directly into the top-left corner of the header.
 * 4. Dissolves cleanly to reveal page content.
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
      const logoWrapper = logoWrapperRef.current;
      const oRing = oRingRef.current;
      const letters = lettersRef.current;
      const halo = haloRef.current;
      const shockwave = shockwaveRef.current;

      if (!container || !logoWrapper || !oRing || !letters) {
        handleFinish();
        return;
      }

      // Initial visual states
      gsap.set(logoWrapper, { opacity: 1 });
      gsap.set(letters, { opacity: 0, scale: 0.94 });
      gsap.set(oRing, { opacity: 0, scale: 0.45, rotation: -20 });
      if (halo) gsap.set(halo, { opacity: 0, scale: 0.5 });
      if (shockwave) gsap.set(shockwave, { opacity: 0, scale: 0.8 });

      const tl = gsap.timeline({
        onComplete: handleFinish,
      });
      timelineRef.current = tl;

      // STAGE 1: Animate the "O" First (Center stage ignition & shockwave)
      tl.to(
        oRing,
        {
          opacity: 1,
          scale: 1.18,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.8)",
        },
        0.1
      );

      if (halo) {
        tl.to(
          halo,
          {
            opacity: 1,
            scale: 1.35,
            duration: 0.85,
            ease: "power2.out",
          },
          0.15
        );
      }

      if (shockwave) {
        tl.to(
          shockwave,
          {
            opacity: 0.85,
            scale: 1.15,
            duration: 0.25,
            ease: "power1.out",
          },
          0.2
        );
        tl.to(
          shockwave,
          {
            opacity: 0,
            scale: 2.5,
            duration: 0.75,
            ease: "power2.out",
          },
          0.4
        );
      }

      tl.to(
        oRing,
        {
          scale: 1.0,
          duration: 0.45,
          ease: "power2.inOut",
        },
        0.85
      );

      // STAGE 2: Reveal the letters around the "O"
      tl.to(
        letters,
        {
          opacity: 1,
          scale: 1.0,
          duration: 0.75,
          ease: "power2.out",
        },
        1.1
      );

      // Extra center-stage appreciation plateau (glow pulse while fully assembled)
      if (halo) {
        tl.to(
          halo,
          {
            opacity: 0.85,
            scale: 1.2,
            duration: 0.5,
            ease: "sine.inOut",
          },
          1.5
        );
      }

      // STAGE 3: "Put it in the corner" (Smooth glide into header top-left)
      tl.add(() => {
        const headerTarget = document.getElementById(headerLogoTargetId);
        const currentRect = logoWrapper.getBoundingClientRect();
        if (!currentRect) return;

        let deltaX = -(window.innerWidth / 2 - 120);
        let deltaY = -(window.innerHeight / 2 - 36);
        let scaleFactor = 0.28;

        if (headerTarget) {
          const targetRect = headerTarget.getBoundingClientRect();
          if (targetRect.width > 0) {
            const currentCenterX = currentRect.left + currentRect.width / 2;
            const currentCenterY = currentRect.top + currentRect.height / 2;
            const targetCenterX = targetRect.left + targetRect.width / 2;
            const targetCenterY = targetRect.top + targetRect.height / 2;

            deltaX = targetCenterX - currentCenterX;
            deltaY = targetCenterY - currentCenterY;
            scaleFactor = targetRect.width / currentRect.width;
          }
        }

        // Smooth flight into header (extended for luxury fluid motion)
        gsap.to(logoWrapper, {
          x: deltaX,
          y: deltaY,
          scale: scaleFactor,
          duration: 1.0,
          ease: "power3.inOut",
        });

        if (halo) {
          gsap.to(halo, {
            opacity: 0.15,
            scale: 0.6,
            duration: 0.7,
            ease: "power2.in",
          });
        }

        // Dissolve dark intro background to reveal page underneath
        gsap.to(container, {
          opacity: 0,
          duration: 0.65,
          delay: 0.35,
          ease: "power2.inOut",
        });
      }, 2.0);

      // Finish cleanly after full flight and dissolve
      tl.to({}, { duration: 1.1 });
    }, 40);

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

      {/* Centered Assembled Logo Container */}
      <div
        ref={logoWrapperRef}
        className="relative w-[280px] xs:w-[340px] sm:w-[420px] md:w-[460px] aspect-[808/288] flex items-center justify-center will-change-transform"
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

        {/* STAGE 1: Isolated Glowing "O" Ring */}
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

        {/* STAGE 2: Surrounding Letters ("AD", "RA", "TECH") */}
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
