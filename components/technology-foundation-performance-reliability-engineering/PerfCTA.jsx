"use client";

import { ArrowRight } from "lucide-react";

const pills = [
  { label: "99.9% Uptime",       color: "emerald" },
  { label: "<100ms P99",         color: "cyan" },
  { label: "Zero Silent Failures", color: "blue" },
  { label: "Full Observability", color: "violet" },
];

const colorMap = {
  emerald: { bg: "bg-emerald-500/[0.08]", border: "border-emerald-400/[0.15]", text: "text-emerald-600" },
  cyan:    { bg: "bg-cyan-500/[0.08]",    border: "border-cyan-400/[0.15]",    text: "text-cyan-600" },
  blue:    { bg: "bg-blue-500/[0.08]",    border: "border-blue-400/[0.15]",    text: "text-blue-600" },
  violet:  { bg: "bg-violet-500/[0.08]",  border: "border-violet-400/[0.15]",  text: "text-violet-600" },
};

export default function PerfCTA() {
  return (
    <section className="py-56 relative overflow-hidden" id="cta">
      <div className="orb w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/[0.06] via-cyan-500/[0.04] to-violet-500/[0.06]" style={{ top: "10%", left: "20%" }} />
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="display-hero text-5xl md:text-7xl lg:text-[7rem] mb-12 r-up">
          Intelligence<br />
          <span className="text-gradient">That Keeps<br />Performing</span>
        </h2>

        <p className="text-lg text-gray-500 font-light mb-16 leading-relaxed r-up">
          Genovation engineers systems that perform and keep performing.<br />
          <span className="text-emerald-600/80 font-light">Predictable. Observable. Resilient.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 r-up">
          <button className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 text-black text-[15px] font-normal flex items-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all">
            View Performance Specs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[15px] font-light flex items-center gap-3 hover:border-emerald-400/25 transition-all">
            Schedule Demo
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 r-up">
          {pills.map((p, i) => {
            const c = colorMap[p.color];
            return (
              <span key={i} className={`px-4 py-2 rounded-full ${c.bg} border ${c.border} ${c.text} text-[12px] font-light`}>
                {p.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
