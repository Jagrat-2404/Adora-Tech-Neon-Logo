"use client";

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface CinematicAudioContextType {
  isAudioEnabled: boolean;
  toggleAudio: () => void;
  playHover: () => void;
  playClick: () => void;
  playSwell: () => void;
  playBassDrop: () => void;
}

const CinematicAudioContext = createContext<CinematicAudioContextType>({
  isAudioEnabled: false,
  toggleAudio: () => {},
  playHover: () => {},
  playClick: () => {},
  playSwell: () => {},
  playBassDrop: () => {},
});

export const useCinematicAudio = () => useContext(CinematicAudioContext);

export const CinematicAudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const droneNodesRef = useRef<{
    osc1: OscillatorNode;
    osc2: OscillatorNode;
    subOsc: OscillatorNode;
    gainNode: GainNode;
    filter: BiquadFilterNode;
  } | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const stopDrone = useCallback(() => {
    if (droneNodesRef.current) {
      const { gainNode } = droneNodesRef.current;
      const ctx = audioCtxRef.current;
      if (ctx) {
        gainNode.gain.cancelScheduledValues(ctx.currentTime);
        gainNode.gain.setTargetAtTime(0, ctx.currentTime, 0.3);
        setTimeout(() => {
          try {
            droneNodesRef.current?.osc1.stop();
            droneNodesRef.current?.osc2.stop();
            droneNodesRef.current?.subOsc.stop();
          } catch {}
          droneNodesRef.current = null;
        }, 400);
      }
    }
  }, []);

  const startDrone = useCallback(() => {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (droneNodesRef.current) return;

    try {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const subOsc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gainNode = ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(46.25, ctx.currentTime);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(69.3, ctx.currentTime);

      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(23.12, ctx.currentTime);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(180, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);

      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.setTargetAtTime(0.04, ctx.currentTime, 1.0);

      osc1.connect(filter);
      osc2.connect(filter);
      subOsc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();
      subOsc.start();

      droneNodesRef.current = { osc1, osc2, subOsc, gainNode, filter };
    } catch {}
  }, [getAudioContext]);

  const toggleAudio = useCallback(() => {
    if (isAudioEnabled) {
      stopDrone();
      setIsAudioEnabled(false);
    } else {
      const ctx = getAudioContext();
      if (ctx) {
        startDrone();
        setIsAudioEnabled(true);
      }
    }
  }, [isAudioEnabled, getAudioContext, startDrone, stopDrone]);

  const playHover = useCallback(() => {
    if (!isAudioEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(2400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.04);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1800, ctx.currentTime);
      filter.Q.setValueAtTime(5, ctx.currentTime);

      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.045);
    } catch {}
  }, [isAudioEnabled, getAudioContext]);

  const playClick = useCallback(() => {
    if (!isAudioEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(130, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.11);
    } catch {}
  }, [isAudioEnabled, getAudioContext]);

  const playBassDrop = useCallback(() => {
    if (!isAudioEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(90, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(28, ctx.currentTime + 0.8);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(120, ctx.currentTime);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.85);
    } catch {}
  }, [isAudioEnabled, getAudioContext]);

  const playSwell = useCallback(() => {
    if (!isAudioEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(220, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.5);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(330, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.5);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(600, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.62);
      osc2.stop(ctx.currentTime + 0.62);
    } catch {}
  }, [isAudioEnabled, getAudioContext]);

  useEffect(() => {
    return () => {
      stopDrone();
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {}
      }
    };
  }, [stopDrone]);

  return (
    <CinematicAudioContext.Provider
      value={{
        isAudioEnabled,
        toggleAudio,
        playHover,
        playClick,
        playSwell,
        playBassDrop,
      }}
    >
      {children}
    </CinematicAudioContext.Provider>
  );
};

export const CinematicAudioButton: React.FC = () => {
  const { isAudioEnabled, toggleAudio, playClick } = useCinematicAudio();

  const handleClick = () => {
    playClick();
    toggleAudio();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isAudioEnabled ? "Mute cinematic audio" : "Enable atmospheric sound"}
      className="group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102A26]/80 hover:bg-[#153833] border border-[#8DE0C1]/30 hover:border-[#8DE0C1]/60 text-xs font-mono tracking-widest uppercase transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
      title={isAudioEnabled ? "Cinematic audio: Active" : "Enable atmospheric soundscape"}
    >
      {isAudioEnabled ? (
        <span className="flex items-end gap-[2px] h-3 w-3.5">
          <span className="w-[2px] bg-[#8DE0C1] rounded-full animate-[soundbar_0.8s_ease-in-out_infinite]" style={{ height: "40%" }} />
          <span className="w-[2px] bg-[#8DE0C1] rounded-full animate-[soundbar_0.6s_ease-in-out_infinite_0.2s]" style={{ height: "100%" }} />
          <span className="w-[2px] bg-[#8DE0C1] rounded-full animate-[soundbar_0.75s_ease-in-out_infinite_0.4s]" style={{ height: "60%" }} />
          <span className="w-[2px] bg-[#8DE0C1] rounded-full animate-[soundbar_0.5s_ease-in-out_infinite_0.1s]" style={{ height: "85%" }} />
        </span>
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-[#A4B7AF] group-hover:text-[#8DE0C1] transition-colors" />
      )}

      <span className={`text-[10px] ${isAudioEnabled ? "text-[#8DE0C1] font-semibold" : "text-[#A4B7AF] group-hover:text-[#F1F3EB]"}`}>
        {isAudioEnabled ? "AUDIO // ON" : "AUDIO // OFF"}
      </span>

      <span
        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
          isAudioEnabled
            ? "bg-[#8DE0C1] shadow-[0_0_8px_#8DE0C1]"
            : "bg-[#A4B7AF]/40"
        }`}
      />
    </button>
  );
};
