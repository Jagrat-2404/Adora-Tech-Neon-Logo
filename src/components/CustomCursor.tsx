"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * CustomCursor Component (Luxury Ambient Follower)
 *
 * 1. Native pointer remains fully visible & standard (0 latency, 100% reliable, never disappears on reload).
 * 2. Follower is a hollow, non-intrusive ambient halo (transparent center, NO blur overlay, text is 100% visible).
 * 3. Click scale is applied to an inner element, completely isolating it from the outer RAF translation to prevent glitching.
 */
export const CustomCursor: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only mount on fine pointer devices (mouse / trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest(
          'a, button, [role="button"], input[type="submit"], input[type="button"], label, summary, .cursor-pointer'
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

    const lerp = 0.18;

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

  const size = isHovered ? 40 : 26;
  const offset = size / 2;

  return (
    <div
      ref={followerRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-30 select-none will-change-transform ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transition: "opacity 0.3s ease",
      }}
    >
      {/* 
        Inner ring handles click compression and sizing.
        Completely isolated from the parent translate3d to guarantee ZERO glitching!
        Center is 100% transparent so button and menu text is always razor-sharp.
      */}
      <div
        className="rounded-full pointer-events-none transition-all duration-200 ease-out"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          marginLeft: `-${offset}px`,
          marginTop: `-${offset}px`,
          border: isHovered
            ? "1.5px solid rgba(141, 224, 193, 0.75)"
            : "1px solid rgba(141, 224, 193, 0.4)",
          background: "transparent",
          boxShadow: isHovered
            ? "0 0 14px rgba(141, 224, 193, 0.35)"
            : "0 0 8px rgba(141, 224, 193, 0.15)",
          transform: isClicking ? "scale(0.72)" : "scale(1)",
        }}
      />
    </div>
  );
};
