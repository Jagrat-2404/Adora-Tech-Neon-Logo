"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useIntro } from "./PageTransitionProvider";

/**
 * ScrollAnimationObserver Component
 *
 * Coordinates scroll-triggered section reveal animations:
 * - Waits until the intro animation completes.
 * - Uses IntersectionObserver to trigger smooth luxury slide-up + fade + de-blur
 *   on all sections (.reveal-section, .fade, section) as the user scrolls.
 */
export const ScrollAnimationObserver: React.FC = () => {
  const pathname = usePathname();
  const { isIntroActive } = useIntro();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-section")
    );

    if (prefersReducedMotion || sections.length === 0) {
      sections.forEach((el) => {
        el.classList.remove("will-reveal");
        el.classList.add("is-revealed");
      });
      return;
    }

    const windowHeight = window.innerHeight;

    // Check & reveal visible sections
    const checkAndReveal = () => {
      const vh = window.innerHeight;
      sections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element top has entered within 100px of bottom of screen or is above it
        if (rect.top <= vh + 100) {
          el.classList.remove("will-reveal");
          el.classList.add("is-revealed");
        }
      });
    };

    // First pass: mark elements that are below the screen as will-reveal
    sections.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > windowHeight * 0.95) {
        el.classList.add("will-reveal");
      } else {
        el.classList.remove("will-reveal");
        el.classList.add("is-revealed");
      }
    });

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.remove("will-reveal");
              target.classList.add("is-revealed");
              observer?.unobserve(target);
            }
          });
        },
        {
          rootMargin: "80px 0px 80px 0px",
          threshold: 0.02,
        }
      );

      sections.forEach((el) => {
        if (el.classList.contains("will-reveal")) {
          observer?.observe(el);
        }
      });
    }

    // Scroll & resize listeners ensure guaranteed firing on all devices
    const handleScroll = () => {
      checkAndReveal();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Staggered interval triggers after intro sequence
    const t1 = setTimeout(checkAndReveal, 200);
    const t2 = setTimeout(checkAndReveal, 800);
    const t3 = setTimeout(checkAndReveal, 2000);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname, isIntroActive]);

  return null;
};
