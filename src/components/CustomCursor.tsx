"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * CustomCursor Component (Ultra-Luxury Minimalist Cursor)
 *
 * Replaces the default OS arrow with an elegant, cinematic precision pointer:
 * 1. Zero-latency precision dot (5px -> 8px) directly tracks exact mouse coords.
 * 2. Fluid trailing ambient halo ring (28px -> 46px on hover) with smooth lerp easing.
 * 3. Expands and glows softly over interactive elements with transparent center.
 * 4. Micro-press tactile bounce on click.
 */
export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only mount on desktop/fine-pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        followerPos.current.x = e.clientX;
        followerPos.current.y = e.clientY;
      }

      // Update the zero-latency precision dot synchronously for instantaneous feedback
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest(
          'a, button, [role="button"], input[type="submit"], input[type="button"], label, summary, .cursor-pointer, [tabindex="0"]'
        )
      );

      setIsHovered(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth physics loop for the trailing ambient ring
    const lerp = 0.16;

    const renderLoop = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * lerp;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * lerp;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  const followerSize = isHovered ? 46 : 28;
  const followerOffset = followerSize / 2;

  const dotSize = isHovered ? 8 : 5;
  const dotOffset = dotSize / 2;

  return (
    <>
      {/* 
        1. Precision Center Dot: 
        Tracks the mouse with ZERO latency (instant 1:1 hardware responsiveness).
        Never lags or detaches from your hand.
      */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] select-none will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transition: "opacity 0.2s ease",
        }}
      >
        <div
          className="rounded-full pointer-events-none transition-all duration-150 ease-out"
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            marginLeft: `-${dotOffset}px`,
            marginTop: `-${dotOffset}px`,
            background: isHovered ? "#8DE0C1" : "#F1F3EB",
            boxShadow: isHovered
              ? "0 0 10px rgba(141, 224, 193, 0.9), 0 0 4px #8DE0C1"
              : "0 0 6px rgba(141, 224, 193, 0.7), 0 0 2px #F1F3EB",
            transform: isClicking ? "scale(0.65)" : "scale(1)",
          }}
        />
      </div>

      {/* 
        2. Elegant Ambient Halo Follower:
        Gracefully glides behind the precision dot with buttery smooth RAF easing.
        Expands into a glowing boundary ring on interactive elements.
        Center is 100% transparent so button and menu text is always crystal clear.
      */}
      <div
        ref={followerRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] select-none will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transition: "opacity 0.25s ease",
        }}
      >
        <div
          className="rounded-full pointer-events-none transition-all duration-200 ease-out"
          style={{
            width: `${followerSize}px`,
            height: `${followerSize}px`,
            marginLeft: `-${followerOffset}px`,
            marginTop: `-${followerOffset}px`,
            border: isHovered
              ? "1.5px solid rgba(141, 224, 193, 0.85)"
              : "1px solid rgba(141, 224, 193, 0.35)",
            background: isHovered
              ? "radial-gradient(circle, rgba(141, 224, 193, 0.08) 0%, transparent 70%)"
              : "transparent",
            boxShadow: isHovered
              ? "0 0 16px rgba(141, 224, 193, 0.4), inset 0 0 10px rgba(141, 224, 193, 0.15)"
              : "0 0 8px rgba(141, 224, 193, 0.12)",
            transform: isClicking ? "scale(0.78)" : "scale(1)",
          }}
        />
      </div>
    </>
  );
};
