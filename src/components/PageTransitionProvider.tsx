"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IntroSequence } from "./IntroSequence";

interface IntroContextType {
  isIntroActive: boolean;
  setIsIntroActive: (active: boolean) => void;
  isHomePage: boolean;
}

const IntroContext = createContext<IntroContextType>({
  isIntroActive: false,
  setIsIntroActive: () => {},
  isHomePage: true,
});

export const useIntro = () => useContext(IntroContext);

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

/**
 * In-memory session tracker:
 * Resets to false on EVERY browser reload/refresh on any page!
 * Stays true across Next.js client-side navigation (clicking links).
 */
let hasSessionLoaded = false;

export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  // Always active on full reload / initial load, false when navigating within active SPA session
  const [isIntroActive, setIsIntroActive] = useState<boolean>(!hasSessionLoaded);
  const [isOverlayMounted, setIsOverlayMounted] = useState<boolean>(!hasSessionLoaded);

  // When user navigates to any other page without reloading: DO NOT replay animation!
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleStartReveal = () => {
    setIsIntroActive(false);
    hasSessionLoaded = true;
  };

  const handleComplete = () => {
    setIsIntroActive(false);
    setIsOverlayMounted(false);
    hasSessionLoaded = true;
  };

  return (
    <IntroContext.Provider value={{ isIntroActive, setIsIntroActive, isHomePage }}>
      {isOverlayMounted && (
        <IntroSequence
          key="session-reload-intro"
          onStartReveal={handleStartReveal}
          onComplete={handleComplete}
        />
      )}
      <div
        className={`intro-appear-container w-full min-h-screen ${
          isIntroActive
            ? "opacity-0 transition-opacity duration-500 ease-out"
            : "opacity-100 transition-opacity duration-300 ease-out"
        }`}
      >
        {children}
      </div>
    </IntroContext.Provider>
  );
};
