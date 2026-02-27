"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById("mainNav");
    ScrollTrigger.create({
      onUpdate: (self) => {
        if (!nav) return;
        if (self.direction === 1 && self.scroll() > 100) nav.style.transform = "translateY(-100%)";
        else nav.style.transform = "translateY(0)";
      },
    });
  }, []);

  return (
    <nav
      id="mainNav"
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.08]"
      style={{ backdropFilter: "blur(20px) saturate(1.4)", background: "rgba(245,243,240,0.85)", transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)" }}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
            <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
            </svg>
          </div>
          <span className="text-base font-light tracking-tight text-gray-700">Genovation</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {["Platform", "AgentOS", "Security"].map((item) => (
            <a key={item} href="#" className="text-[11px] font-light text-gray-500 hover:text-gray-800 transition-colors tracking-[0.15em] uppercase">{item}</a>
          ))}
          <a href="#" className="text-[11px] font-medium text-emerald-600 tracking-[0.15em] uppercase">Data Backbone</a>
        </div>
        <button className="px-5 py-2 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-700 hover:border-emerald-500/30 hover:text-emerald-600 text-xs font-light tracking-widest uppercase transition-all">
          Contact
        </button>
      </div>
    </nav>
  );
}
