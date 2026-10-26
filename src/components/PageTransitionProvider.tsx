"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { IntroSequence } from "./IntroSequence";

interface IntroContextType {
  isIntroActive: boolean;
  setIsIntroActive: (active: boolean) => void;
}

const IntroContext = createContext<IntroContextType>({
  isIntroActive: true,
  setIsIntroActive: () => {},
});

export const useIntro = () => useContext(IntroContext);

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

/**
 * PageTransitionProvider
 *
 * Ensures the signature ADORA TECH neon logo animation executes:
 * 1. On EVERY reload of any page (Home, About, Service, Blog, Contact).
 * 2. On EVERY route change when moving between pages.
 */
export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const [isIntroActive, setIsIntroActive] = useState<boolean>(true);
  const prevPathnameRef = useRef<string>(pathname);
  const isFirstMountRef = useRef<boolean>(true);

  // Trigger animation whenever pathname changes
  useEffect(() => {
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      return;
    }

    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setIsIntroActive(true);
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const handleComplete = () => {
    setIsIntroActive(false);
  };

  return (
    <IntroContext.Provider value={{ isIntroActive, setIsIntroActive }}>
      {isIntroActive && (
        <IntroSequence
          key={pathname}
          onComplete={handleComplete}
          headerLogoTargetId="header-logo-target"
        />
      )}
      {children}
    </IntroContext.Provider>
  );
};
