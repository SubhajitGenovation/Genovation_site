"use client";

import { ArrowRight } from "lucide-react";

export default function SecurityCTA() {
  return (
    <section className="py-56 relative overflow-hidden" id="cta">
      <div
        className="orb w-[800px] h-[800px]"
        style={{
          top: "10%", left: "20%",
          background: "linear-gradient(135deg, rgba(6,182,212,0.06), rgba(59,130,246,0.04), rgba(139,92,246,0.06))",
        }}
      />
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="display-hero text-6xl md:text-8xl lg:text-[9rem] mb-12 r-up">
          Security is<br />the<br /><span className="text-gradient">Foundation.</span>
        </h2>

        <p className="text-lg text-gray-500 font-light mb-16 leading-relaxed r-up max-w-xl mx-auto">
          AI systems that remain secure when attacked. Data that stays protected when shared. Intelligence that
          deploys under the strictest regulations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
          <div className="mag-btn">
            <button className="btn-inner group px-8 py-3.5 rounded-full hero-cta-primary text-white text-[15px] font-normal flex items-center gap-3 transition-all">
              Request Security Briefing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="mag-btn">
            <button className="btn-inner px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[15px] font-light flex items-center gap-3 hover:bg-black/[0.08] transition-all">
              Download Whitepaper
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12 r-up">
          <span className="px-4 py-2 rounded-full bg-cyan-500/[0.08] border border-cyan-500/[0.15] text-cyan-600 text-[11px] font-light">Post-Quantum Ready</span>
          <span className="px-4 py-2 rounded-full bg-violet-500/[0.08] border border-violet-500/[0.15] text-violet-600 text-[11px] font-light">Zero Trust Architecture</span>
          <span className="px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.15] text-emerald-600 text-[11px] font-light">5-Layer Defense</span>
          <span className="px-4 py-2 rounded-full bg-amber-500/[0.08] border border-amber-500/[0.15] text-amber-600 text-[11px] font-light">Sovereign Deployment</span>
        </div>
      </div>
    </section>
  );
}
