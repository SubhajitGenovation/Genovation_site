"use client";
import { Target, Search, Scale, Castle } from "lucide-react";

export default function ResearchImpact() {
  return (
    <section className="py-32 relative overflow-hidden" id="impact">
      <div className="orb w-[600px] h-[400px] bg-indigo-500/[0.04]" style={{ top: "10%", left: "30%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/[0.1] border border-indigo-500/[0.15] mb-8 r-up">
            <Target className="w-3 h-3 text-indigo-500" />
            <span className="text-indigo-500 text-[11px] font-light tracking-[0.25em] uppercase">Enterprise Impact</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Why This<br /><span className="text-gradient">Matters</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Research and IP are not academic exercises — they directly affect deployment risk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16" id="impactCards">
          <div className="card p-8 text-center r-up" style={{ borderRadius: "24px", borderColor: "rgba(99,102,241,0.2)" }}>
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/[0.08] border border-indigo-500/[0.15] flex items-center justify-center mx-auto mb-5">
              <Search className="w-7 h-7 text-indigo-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2.5">Systems Can Be Audited</h3>
            <p className="text-[14px] text-gray-500 font-light leading-relaxed">Every decision traceable, every action logged, every output explainable to regulators.</p>
          </div>

          <div className="card card-violet p-8 text-center r-up" style={{ borderRadius: "24px", borderColor: "rgba(139,92,246,0.2)" }}>
            <div className="w-14 h-14 rounded-2xl bg-violet-500/[0.08] border border-violet-500/[0.15] flex items-center justify-center mx-auto mb-5">
              <Scale className="w-7 h-7 text-violet-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2.5">Deployments Survive Scrutiny</h3>
            <p className="text-[14px] text-gray-500 font-light leading-relaxed">Built to withstand regulatory examination in the most demanding environments.</p>
          </div>

          <div className="card card-cyan p-8 text-center r-up" style={{ borderRadius: "24px", borderColor: "rgba(6,182,212,0.2)" }}>
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/[0.08] border border-cyan-500/[0.15] flex items-center justify-center mx-auto mb-5">
              <Castle className="w-7 h-7 text-cyan-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2.5">Platforms Remain Defensible</h3>
            <p className="text-[14px] text-gray-500 font-light leading-relaxed">Proprietary mechanisms that create lasting competitive advantage.</p>
          </div>
        </div>

        <div className="text-center r-up">
          <p className="text-xl text-gray-600 font-light italic max-w-3xl mx-auto">
            "This is why our systems are trusted in environments where experimental AI cannot be deployed."
          </p>
        </div>
      </div>
    </section>
  );
}