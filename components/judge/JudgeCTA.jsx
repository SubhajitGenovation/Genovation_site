"use client";

import { ArrowRight, FileText } from "lucide-react";

export default function JudgeCTA() {
  return (
    <section id="cta" className="py-56 relative overflow-hidden">
      <div className="orb w-[800px] h-[800px]" style={{
        background: "radial-gradient(circle, rgba(16,185,129,0.06), rgba(6,182,212,0.04), rgba(139,92,246,0.06))",
        top: "10%", left: "20%",
      }} />
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="display-hero text-6xl md:text-8xl lg:text-[9rem] mb-12 r-up" style={{ opacity: 0, scale: 0.7 }}>
          Trust Is<br />
          <span className="text-gradient">Engineered.<br />Not Assumed.</span>
        </h2>

        <p className="text-[1.15rem] text-gray-600 font-light mb-16 leading-relaxed r-up">
          JUDGE is not a feature you enable. It is the governance layer that makes<br className="hidden md:block" />
          every Genovation intelligence product safe to deploy in regulated enterprises.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
          <button className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 text-black text-[15px] font-normal flex items-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all">
            See JUDGE in Action
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[15px] font-light flex items-center gap-3 hover:border-emerald-400/25 transition-all">
            <FileText className="w-4 h-4" /> Security Whitepaper
          </button>
        </div>
      </div>
    </section>
  );
}
