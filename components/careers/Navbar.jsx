// components/careers/Navbar.jsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="mainNav" className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3f0]/85 border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
            </svg>
          </div>
          <span className="text-base font-light tracking-tight text-gray-700">Genovation</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          <Link
            href="#"
            className="text-xs font-light tracking-[0.15em] uppercase text-gray-500 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-xs font-light tracking-[0.15em] uppercase text-gray-500 hover:text-gray-900 transition-colors"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-xs font-light tracking-[0.15em] uppercase text-gray-500 hover:text-gray-900 transition-colors"
          >
            Platform
          </Link>
          <span className="text-xs font-light tracking-[0.15em] uppercase text-gray-900" style={{ border: "1.5px solid #10b981", paddingBottom: "2px" }}>
            Careers
          </span>
          <Link
            href="#"
            className="text-xs font-light tracking-[0.15em] uppercase text-gray-500 hover:text-gray-900 transition-colors"
          >
            Company
          </Link>
        </div>

        {/* CTA */}
        <a
          href="mailto:careers@genovationsolutions.com"
          className="px-5 py-2 rounded-full bg-black text-white text-xs font-light tracking-widest uppercase transition-all hover:bg-gray-800"
        >
          Apply Now
        </a>
      </div>
    </nav>
  );
}
