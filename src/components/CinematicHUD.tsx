"use client";

import React, { useState, useEffect } from "react";
import { Film, Maximize2, Minimize2 } from "lucide-react";
import { useCinematicAudio } from "./CinematicAudio";

export const CinematicHUD: React.FC = () => {
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [isCinemascope, setIsCinemascope] = useState(false);
  const { playClick, playHover } = useCinematicAudio();

  useEffect(() => {
    const startTime = performance.now();
    let frameId: number;

    const updateTimecode = () => {
      const elapsedMs = performance.now() - startTime;
      const totalFrames = Math.floor((elapsedMs / 1000) * 24);
      const frames = String(totalFrames % 24).padStart(2, "0");
      const totalSeconds = Math.floor(elapsedMs / 1000);
      const seconds = String(totalSeconds % 60).padStart(2, "0");
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = String(totalMinutes % 60).padStart(2, "0");
      const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");

      setTimecode(`${hours}:${minutes}:${seconds}:${frames}`);
      frameId = requestAnimationFrame(updateTimecode);
    };

    frameId = requestAnimationFrame(updateTimecode);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const toggleCinemascope = () => {
    playClick();
    setIsCinemascope((prev) => !prev);
  };

  return (
    <>
      {/* Optional Cinemascope 2.39:1 Anamorphic Letterbox Bars */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-0 z-[60] bg-black transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isCinemascope ? "h-10 sm:h-16 border-b border-[#8DE0C1]/20 shadow-2xl" : "h-0"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 bottom-0 z-[60] bg-black transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isCinemascope ? "h-10 sm:h-16 border-t border-[#8DE0C1]/20 shadow-2xl" : "h-0"
        }`}
      />

      {/* Viewfinder Edge Falloff */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-10 select-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 85% at 50% 50%, transparent 65%, rgba(8, 27, 25, 0.45) 100%)",
        }}
      />

      {/* Floating Bottom Cinematic Status Pill Bar */}
      <div className="fixed bottom-6 left-6 z-30 hidden md:flex items-center gap-3">
        {/* REC Indicator & Live 24 FPS Timecode */}
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#081B19]/90 backdrop-blur-md border border-[#8DE0C1]/25 text-[11px] font-mono text-[#F1F3EB] shadow-lg shadow-black/50 select-none">
          <span className="flex items-center gap-1.5 text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest">REC</span>
          </span>
          <span className="text-[#8DE0C1]/40">|</span>
          <span className="tracking-widest text-[#8DE0C1] font-medium tabular-nums">{timecode}</span>
          <span className="text-[#8DE0C1]/40">|</span>
          <span className="text-[10px] text-[#A4B7AF]/70">24.000 FPS</span>
        </div>

        {/* Cinemascope Mode Toggle Button */}
        <button
          type="button"
          onClick={toggleCinemascope}
          onMouseEnter={playHover}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase backdrop-blur-md border transition-all duration-300 shadow-lg shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1] ${
            isCinemascope
              ? "bg-[#8DE0C1] text-[#081B19] border-[#8DE0C1] font-semibold"
              : "bg-[#081B19]/90 text-[#A4B7AF] hover:text-[#8DE0C1] border-[#A4B7AF]/20 hover:border-[#8DE0C1]/40"
          }`}
          title="Toggle 2.39:1 Cinemascope anamorphic letterboxing"
          aria-pressed={isCinemascope}
        >
          <Film className="w-3.5 h-3.5" />
          <span>{isCinemascope ? "CINEMASCOPE: ON" : "CINEMASCOPE: OFF"}</span>
          {isCinemascope ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
        </button>
      </div>
    </>
  );
};
