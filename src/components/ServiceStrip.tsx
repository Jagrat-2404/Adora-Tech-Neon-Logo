"use client";

import React, { useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/data/content";

export const ServiceStrip: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const singleTrackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  // Triple the array to guarantee enough length on any high-resolution or ultra-wide viewport
  const stripItems = [
    ...SITE_CONFIG.serviceStrip,
    ...SITE_CONFIG.serviceStrip,
    ...SITE_CONFIG.serviceStrip,
  ];

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    const speed = 48; // 48 pixels per second - stately, legible, continuous agency glide

    const step = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (trackRef.current && singleTrackRef.current) {
        const trackWidth = singleTrackRef.current.offsetWidth;
        if (trackWidth > 0) {
          posRef.current += speed * delta;
          if (posRef.current >= trackWidth) {
            posRef.current %= trackWidth;
          }
          trackRef.current.style.transform = `translate3d(-${posRef.current.toFixed(2)}px, 0, 0)`;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative border-y border-[#A4B7AF]/15 bg-[#081B19]/90 backdrop-blur-md overflow-hidden select-none py-4 sm:py-5">
      {/* Cinematic Edge Gradient Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#081B19] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#081B19] to-transparent z-10" />

      {/* Continuously Moving Track */}
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {/* Track 1 */}
        <div
          ref={singleTrackRef}
          className="flex shrink-0 items-center gap-10 whitespace-nowrap pr-10"
        >
          {stripItems.map((service, idx) => {
            const isSerif = idx % 2 === 1;

            return (
              <React.Fragment key={`t1-${idx}`}>
                <span
                  className={
                    isSerif
                      ? "font-serif italic font-normal text-[#8DE0C1] tracking-wider text-base sm:text-lg"
                      : "font-mono font-medium text-[#F1F3EB] text-sm sm:text-base tracking-widest uppercase"
                  }
                >
                  {service}
                </span>
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#8DE0C1" : "#D5A17D",
                    boxShadow: `0 0 10px ${idx % 2 === 0 ? "#8DE0C1" : "#D5A17D"}`,
                  }}
                />
              </React.Fragment>
            );
          })}
        </div>

        {/* Track 2 (Identical duplicate for seamless infinite loop) */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-10 whitespace-nowrap pr-10"
        >
          {stripItems.map((service, idx) => {
            const isSerif = idx % 2 === 1;

            return (
              <React.Fragment key={`t2-${idx}`}>
                <span
                  className={
                    isSerif
                      ? "font-serif italic font-normal text-[#8DE0C1] tracking-wider text-base sm:text-lg"
                      : "font-mono font-medium text-[#F1F3EB] text-sm sm:text-base tracking-widest uppercase"
                  }
                >
                  {service}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#8DE0C1" : "#D5A17D",
                    boxShadow: `0 0 10px ${idx % 2 === 0 ? "#8DE0C1" : "#D5A17D"}`,
                  }}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
