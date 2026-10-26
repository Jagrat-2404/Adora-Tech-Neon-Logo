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
    width: 120,
    height: 43,
    classNames: "w-[110px] sm:w-[125px] h-auto",
  },
  md: {
    width: 160,
    height: 57,
    classNames: "w-[140px] sm:w-[160px] h-auto",
  },
  lg: {
    width: 220,
    height: 78,
    classNames: "w-[190px] sm:w-[220px] h-auto",
  },
  xl: {
    width: 280,
    height: 100,
    classNames: "w-[240px] sm:w-[280px] h-auto",
  },
  hero: {
    width: 340,
    height: 121,
    classNames: "w-[240px] xs:w-[280px] sm:w-[320px] md:w-[340px] h-auto",
  },
  intro: {
    width: 420,
    height: 150,
    classNames: "w-[290px] xs:w-[340px] sm:w-[400px] md:w-[420px] h-auto",
  },
};

/**
 * BrandLogo Component
 *
 * Renders the authentic transparent ADORA TECH logo with the vibrant neon circular "O".
 * Preserves exact proportions (808 x 288) and crisp transparent alpha channel.
 *
 * Glow effects are rendered on a separate decorative layer behind the central "O" emblem
 * to preserve the original asset while creating a subtle neon ambient aura.
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
            className="w-[26%] h-[68%] rounded-full opacity-60 blur-md transform -translate-y-[8%]"
            style={{
              background:
                "radial-gradient(circle at 35% 50%, rgba(141, 224, 193, 0.7) 0%, transparent 70%), radial-gradient(circle at 65% 50%, rgba(213, 161, 125, 0.6) 0%, transparent 70%)",
            }}
          />
        </div>
      )}

      {/* Transparent Logo Image Asset */}
      <div
        className={`relative transition-transform duration-300 ${
          interactive ? "hover:scale-[1.02]" : ""
        } ${config.classNames}`}
      >
        <Image
          src="/logo-cropped.png"
          alt="ADORA TECH"
          width={config.width}
          height={config.height}
          priority={priority}
          className="w-full h-auto object-contain filter drop-shadow-[0_0_12px_rgba(141,224,193,0.18)]"
          sizes="(max-width: 640px) 140px, (max-width: 1024px) 220px, 420px"
        />
      </div>
    </div>
  );
};
