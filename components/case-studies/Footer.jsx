// components/Footer.jsx
"use client";

import { Circle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-black/[0.06] py-16 mt-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
              <Circle className="w-4 h-4 text-black" strokeWidth={3} />
            </div>
            <span className="text-base font-light tracking-tight text-gray-700">Genovation</span>
          </div>
          <p className="text-sm text-gray-400 font-light">AI solutions for mission-critical operations.</p>
        </div>
        <div className="font-mono text-[10px] text-gray-400 tracking-[0.1em]">&copy; 2025 GENOVATION SOLUTIONS</div>
      </div>
    </footer>
  );
};