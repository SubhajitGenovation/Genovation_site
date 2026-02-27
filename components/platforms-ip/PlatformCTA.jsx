"use client";

import { ArrowRight, Shield } from "lucide-react";

const tags = [
  { color: "emerald", label: "Data cannot leave" },
  { color: "cyan",    label: "Decisions must be defensible" },
  { color: "violet",  label: "Audits are inevitable" },
  { color: "amber",   label: "AI must endure for years" },
];

export default function PlatformCTA() {
  return (
    <section className="py-56 relative overflow-hidden">
      <div className="orb w-[800px] h-[800px]" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06),rgba(6,182,212,0.04),rgba(139,92,246,0.06))", top: "10%", left: "20%" }} />
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="display-section text-5xl md:text-7xl lg:text-8xl mb-6 r-up">
          Ready for<br /><span className="text-gradient">Technical Depth</span>?
        </h2>
        <p className="text-xl md:text-2xl text-gray-500 font-light mb-16 r-up">
          If your organization is evaluating enterprise intelligence at a foundational level, we welcome technical and architectural discussions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 r-up">
          <button className="group hero-cta-primary px-8 py-3.5 rounded-full text-[14px] font-medium flex items-center gap-2.5">
            <span className="text-black flex items-center gap-2.5">
              Architecture Briefing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[14px] font-light flex items-center gap-2.5 hover:bg-black/[0.07] transition-all">
            <Shield className="w-4 h-4" /> Security Deep Dive
          </button>
        </div>

        <div className="p-8 rounded-2xl bg-white/60 border border-black/[0.08] r-up"
          style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.04)" }}>
          <p className="text-[15px] text-gray-500 font-light mb-4">Built for organizations where:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((t, i) => (
              <span key={i} className={`px-4 py-2 rounded-full bg-${t.color}-500/[0.08] text-${t.color}-700 text-[13px] font-light`}>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
