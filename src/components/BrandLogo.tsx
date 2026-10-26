"use client";

import React from "react";
import Image from "next/image";

export interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero" | "intro";
  withGlow?: boolean;
  priority?: boolean;
  className?: string;
  id?: string;
  interactive?: boolean;
}

const sizeConfig: Record<
  NonNullable<BrandLogoProps["size"]>,
  { width: number; height: number; classNames: string }
> = {
  sm: {
    width: 130,
    height: 76,
    classNames: "w-[120px] sm:w-[130px] h-auto",
  },
  md: {
    width: 175,
    height: 102,
    classNames: "w-[155px] sm:w-[175px] h-auto",
  },
  lg: {
    width: 240,
    height: 140,
    classNames: "w-[200px] sm:w-[240px] h-auto",
  },
  xl: {
    width: 300,
    height: 175,
    classNames: "w-[260px] sm:w-[300px] h-auto",
  },
  hero: {
    width: 360,
    height: 210,
    classNames: "w-[240px] xs:w-[290px] sm:w-[340px] md:w-[370px] h-auto",
  },
  intro: {
    width: 380,
    height: 222,
    classNames: "w-[280px] xs:w-[330px] sm:w-[380px] h-auto",
  },
};

/**
 * BrandLogo Component
 *
 * Renders the authentic ADORA TECH logo image against a matching deep emerald background (#081B19).
 * Uses CSS mix-blend-mode: screen so the deep dark background of the raster merges seamlessly
 * without harsh borders.
 *
 * Glowing rings are rendered on a separate decorative layer behind the central "O" emblem
 * to preserve the original asset while creating a subtle neon ambient aura.
 *
 * Structured cleanly so that if a vector SVG is provided in the future, it can easily
 * replace the image below.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  withGlow = false,
  priority = false,
  className = "",
  id,
  interactive = false,
}) => {
  const config = sizeConfig[size];

  return (
    <div
      id={id}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* Decorative separate ambient halo layer behind the glowing "O" */}
      {withGlow && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          {/* Dual-color neon halo (mint left, copper right) centered on the logo's "O" */}
          <div
            className="w-[28%] h-[48%] rounded-full opacity-60 blur-xl transform -translate-y-[6%]"
            style={{
              background:
                "radial-gradient(circle at 35% 50%, rgba(141, 224, 193, 0.7) 0%, transparent 70%), radial-gradient(circle at 65% 50%, rgba(213, 161, 125, 0.6) 0%, transparent 70%)",
            }}
          />
        </div>
      )}

      {/* 
        Raster Image Implementation:
        Rendered using Next.js Image with exact dimensions and 'screen' blend mode 
        for a flawless dark integration.
      */}
      <div
        className={`relative overflow-hidden rounded-lg transition-transform duration-300 ${
          interactive ? "hover:scale-[1.02]" : ""
        } ${config.classNames}`}
      >
        <Image
          src="/logo-attached.jpg"
          alt="ADORA TECH"
          width={config.width}
          height={config.height}
          priority={priority}
          className="w-full h-auto object-contain blend-screen filter brightness-[1.03] contrast-[1.05]"
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 380px"
        />
      </div>
    </div>
  );
};
