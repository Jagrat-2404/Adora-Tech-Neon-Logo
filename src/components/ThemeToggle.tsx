"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  showLabel = false,
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light View" : "Switch to Dark View"}
      title={isDark ? "Switch to Light View" : "Switch to Dark View"}
      className={`group relative flex items-center gap-2 p-2 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1] ${
        isDark
          ? "bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] hover:bg-[#153833] hover:border-[#8DE0C1]/60 shadow-sm shadow-black/20"
          : "bg-[#E8EFEA] border border-[#081B19]/20 text-[#081B19] hover:bg-[#DFE8E2] hover:border-[#081B19]/40 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-500 rotate-0 scale-100 group-hover:rotate-45 text-[#D5A17D]" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-500 rotate-0 scale-100 group-hover:-rotate-12 text-[#0E7C5F]" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-mono tracking-wider uppercase">
          {isDark ? "Light View" : "Dark View"}
        </span>
      )}
    </button>
  );
};
