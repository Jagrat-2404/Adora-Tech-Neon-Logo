"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { IntroSequence } from "./IntroSequence";
import { OLoader } from "./OLoader";

interface IntroContextType {
  isIntroActive: boolean;
  setIsIntroActive: (active: boolean) => void;
  isHomePage: boolean;
}

const IntroContext = createContext<IntroContextType>({
  isIntroActive: true,
  setIsIntroActive: () => {},
  isHomePage: true,
});

export const useIntro = () => useContext(IntroContext);

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

/**
 * PageTransitionProvider
 *
 * Orchestrates page animations and transitions:
 * 1. Home Page (`/`): Plays the full signature logo animation (neon "O" ignition, surrounding letters assemble, holds, dissolves in place without sliding, and website appears from the back with a fade effect).
 * 2. Non-Home Pages (`/about`, `/services`, `/contact`, `/blog`, etc.): Plays ONLY the "O" animation loading effect.
 */
export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  const [isIntroActive, setIsIntroActive] = useState<boolean>(true);
  const [isOverlayMounted, setIsOverlayMounted] = useState<boolean>(true);

  const prevPathnameRef = useRef<string>(pathname);
  const isFirstMountRef = useRef<boolean>(true);

  // Trigger animation on route change
  useEffect(() => {
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      return;
    }

    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setIsIntroActive(true);
      setIsOverlayMounted(true);
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const handleStartReveal = () => {
    // Triggers the page underneath to begin appearing from the back with fade effect
    setIsIntroActive(false);
  };

  const handleComplete = () => {
    setIsIntroActive(false);
    setIsOverlayMounted(false);
  };

  return (
    <IntroContext.Provider value={{ isIntroActive, setIsIntroActive, isHomePage }}>
      {isOverlayMounted && (
        isHomePage ? (
          <IntroSequence
            key={pathname}
            onStartReveal={handleStartReveal}
            onComplete={handleComplete}
          />
        ) : (
          <OLoader
            key={pathname}
            onStartReveal={handleStartReveal}
            onComplete={handleComplete}
          />
        )
      )}
      <div
        className={`w-full min-h-screen transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isIntroActive
            ? "opacity-0 scale-[0.98] pointer-events-none"
            : "opacity-100 scale-100 pointer-events-auto"
        }`}
        style={{ transformOrigin: "center 20%" }}
      >
        {children}
      </div>
    </IntroContext.Provider>
  );
};
