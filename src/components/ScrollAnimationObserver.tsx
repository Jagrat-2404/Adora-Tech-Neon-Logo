"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollAnimationObserver Component
 *
 * Ensures all sections are immediately visible and sharp without any delayed
 * scroll entrance animations or hidden sections.
 */
export const ScrollAnimationObserver: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-section")
    );
    sections.forEach((el) => {
      el.classList.remove("will-reveal");
      el.classList.add("is-revealed");
    });
  }, [pathname]);

  return null;
};
