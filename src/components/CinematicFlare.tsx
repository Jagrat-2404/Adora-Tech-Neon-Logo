"use client";

import React, { memo } from "react";

export const CinematicFlare = memo(function CinematicFlare({
  className = "",
  intensity = "normal",
}: {
  className?: string;
  intensity?: "subtle" | "normal" | "vivid";
}) {
  const opacityMap = {
    subtle: "opacity-40",
    normal: "opacity-75",
    vivid: "opacity-100",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none relative overflow-visible ${className}`}
    >
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-24 sm:h-36 rounded-full blur-2xl ${opacityMap[intensity]}`}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(141, 224, 193, 0.45) 0%, rgba(213, 161, 125, 0.25) 50%, transparent 75%)",
        }}
      />
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] max-w-5xl h-[1.5px] blur-[0.5px] ${opacityMap[intensity]}`}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(141, 224, 193, 0.1) 15%, rgba(141, 224, 193, 0.85) 45%, #FFFFFF 50%, rgba(213, 161, 125, 0.85) 55%, rgba(213, 161, 125, 0.1) 85%, transparent 100%)",
        }}
      />
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-4xl h-3 blur-md ${opacityMap[intensity]}`}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(141, 224, 193, 0.2) 25%, rgba(141, 224, 193, 0.6) 48%, rgba(213, 161, 125, 0.6) 52%, rgba(213, 161, 125, 0.2) 75%, transparent 100%)",
        }}
      />
    </div>
  );
});
