"use client";

import { Target, TrendingUp, ShieldCheck, BarChart3, Check } from "lucide-react";

const whyCards = [
  { icon: <TrendingUp className="w-7 h-7 text-emerald-600" />, bg: "bg-emerald-500/[0.1]", border: "border-emerald-400/15", title: "Performance", sub: "Determines adoption", sub2: "Slow systems don't get used" },
  { icon: <ShieldCheck className="w-7 h-7 text-cyan-600" />,   bg: "bg-cyan-500/[0.1]",    border: "border-cyan-400/15",    title: "Reliability",  sub: "Determines trust",    sub2: "Unreliable systems lose confidence" },
  { icon: <BarChart3 className="w-7 h-7 text-blue-600" />,     bg: "bg-blue-500/[0.1]",    border: "border-blue-400/15",    title: "Predictability", sub: "Determines scale", sub2: "Unpredictable systems can't grow" },
];

const guarantees = ["Behave consistently","Degrade safely","Recover cleanly","Remain observable at all times"];

export default function PerfWhy() {
  return (
    <section className="py-48 relative" id="why">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[700px] h-[500px] bg-emerald-500/[0.05]" style={{ top: "10%", left: "25%" }} />

      <div className="relative max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.12] border border-cyan-500/[0.2] mb-8 r-up">
            <Target className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Why This Matters</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Enterprise Success<br /><span className="text-gradient-cyan">Depends on It</span>
          </h2>
        </div>

        {/* Why cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16" id="whyCards">
          {whyCards.map((w, i) => (
            <div key={i} className="card p-8 text-center r-up">
              <div className={`w-16 h-16 rounded-full ${w.bg} flex items-center justify-center mx-auto mb-5 border ${w.border}`}>{w.icon}</div>
              <h3 className="text-lg font-light text-gray-900 mb-2">{w.title}</h3>
              <p className="text-sm text-gray-500 font-light">{w.sub}</p>
              <p className="text-[12px] text-gray-400 font-light mt-2">{w.sub2}</p>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="r-up">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-cyan-500/[0.04]" />
            <div className="absolute -inset-4 rounded-[32px] border border-emerald-500/[0.1]" />
            <div className="relative card p-10" style={{ boxShadow: "0 25px 80px -20px rgba(16,185,129,0.1)" }}>
              <h3 className="text-xl font-light text-gray-900 mb-6 text-center">Genovation Ensures Intelligence Systems</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {guarantees.map((g, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-400/[0.1]">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/[0.1] flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-[15px] text-gray-600 font-light">{g}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
