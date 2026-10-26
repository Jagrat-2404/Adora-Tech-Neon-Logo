"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { MobileNavigation } from "./MobileNavigation";
import { SITE_CONFIG } from "@/data/content";
import { useIntro } from "./PageTransitionProvider";

interface HeaderProps {
  isIntroActive?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isIntroActive: propIntroActive }) => {
  const { isIntroActive: contextIntroActive } = useIntro();
  const isIntroActive = propIntroActive !== undefined ? propIntroActive : contextIntroActive;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#081B19]/85 backdrop-blur-md border-b border-[#A4B7AF]/15 py-3 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Anchor / Intro Target Container */}
          <div
            id="header-logo-target"
            className="relative flex items-center"
          >
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1] rounded-md transition-opacity duration-300"
              style={{
                opacity: isIntroActive ? 0 : 1,
                pointerEvents: isIntroActive ? "none" : "auto",
              }}
              aria-label="ADORA TECH home"
            >
              <BrandLogo size="md" withGlow={false} interactive />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className={`hidden md:flex items-center gap-8 transition-opacity duration-500 ${
              isIntroActive ? "opacity-0 translate-y-[-4px]" : "opacity-100 translate-y-0"
            }`}
          >
            {SITE_CONFIG.navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm tracking-wide transition-colors py-1 focus:outline-none focus-visible:text-[#8DE0C1] ${
                    isActive
                      ? "text-[#8DE0C1] font-medium"
                      : "text-[#A4B7AF] hover:text-[#F1F3EB]"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#8DE0C1] after:transition-all after:duration-300 ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop Start a Project CTA */}
            <Link
              href="/contact"
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#081B19] bg-[#8DE0C1] hover:bg-[#A1E8D0] transition-all duration-200 group shadow-[0_0_15px_rgba(141,224,193,0.25)] hover:shadow-[0_0_25px_rgba(141,224,193,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1] ${
                isIntroActive ? "opacity-0" : "opacity-100"
              }`}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              className={`md:hidden p-2 text-[#A4B7AF] hover:text-[#F1F3EB] hover:bg-[#102A26] rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1] ${
                isIntroActive ? "opacity-0" : "opacity-100"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
