// components/Nav.jsx
"use client";

import { forwardRef } from "react";
import { Circle } from "lucide-react";

export const Nav = forwardRef((props, ref) => {
  return (
    <nav
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3f0]/85 border-b border-black/[0.06]"
      id="mainNav"
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
            <Circle className="w-4 h-4 text-black" strokeWidth={3} />
          </div>
          <span className="text-base font-light tracking-tight text-gray-700">Genovation</span>
        </div>
        <div className="hidden md:flex items-center gap-9">
          <a href="#" className="text-xs font-light tracking-[0.15em] uppercase text-gray-500 hover:text-gray-900 transition-colors">
            Home
          </a>
          <a href="#" className="text-xs font-light tracking-[0.15em] uppercase text-gray-500 hover:text-gray-900 transition-colors">
            Products
          </a>
          <a href="#" className="text-xs font-light tracking-[0.15em] uppercase text-gray-500 hover:text-gray-900 transition-colors">
            Platform
          </a>
          <a
            href="#"
            className="text-xs font-light tracking-[0.15em] uppercase text-gray-900 transition-colors"
            style={{ borderBottom: "1.5px solid #10b981", paddingBottom: "2px" }}
          >
            Case Studies
          </a>
          <a href="#" className="text-xs font-light tracking-[0.15em] uppercase text-gray-500 hover:text-gray-900 transition-colors">
            Careers
          </a>
        </div>
        <a
          href="#"
          className="px-5 py-2 rounded-full bg-black text-white text-xs font-light tracking-widest uppercase transition-all hover:bg-gray-800"
        >
          Contact
        </a>
      </div>
    </nav>
  );
});

Nav.displayName = "Nav";