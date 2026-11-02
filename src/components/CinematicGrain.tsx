"use client";

import React, { memo } from "react";

export const CinematicGrain = memo(function CinematicGrain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden select-none"
      style={{ opacity: 0.035, mixBlendMode: "screen" }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <filter id="cinematic-film-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cinematic-film-noise)" />
      </svg>
    </div>
  );
});
