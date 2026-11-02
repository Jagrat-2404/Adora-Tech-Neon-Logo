"use client";

import React, { useRef, useState, useCallback } from "react";

interface CinematicTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glare?: boolean;
}

export const CinematicTilt: React.FC<CinematicTiltProps> = ({
  children,
  className = "",
  maxTilt = 7,
  perspective = 1100,
  glare = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width) * 2 - 1;
      const normY = (y / rect.height) * 2 - 1;

      const rotateX = -normY * maxTilt;
      const rotateY = normX * maxTilt;

      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
      );

      if (glare) {
        setGlarePos({
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
          opacity: 0.16,
        });
      }
    },
    [maxTilt, perspective, glare]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    if (glare) {
      setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [perspective, glare]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative will-change-transform transition-transform duration-200 ease-out ${className}`}
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
    >
      {children}

      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(141, 224, 193, 0.45) 0%, rgba(213, 161, 125, 0.2) 30%, transparent 70%)`,
            mixBlendMode: "screen",
          }}
        />
      )}
    </div>
  );
};
