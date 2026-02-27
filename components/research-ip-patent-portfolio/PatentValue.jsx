"use client";

import { Sparkles, Building2, TrendingUp, Check } from "lucide-react";

const enterpriseItems = [
  "Not locked into fragile or short-lived architectures",
  "Deployments remain viable as regulations evolve",
  "Platform replacement risk minimized",
];

const investorItems = [
  "Defensible technology moat",
  "Technological leadership maintained over time",
  "Scalable protection across product lines",
];

export default function PatentValue() {
  return (
    <section className="py-32 relative overflow-hidden" id="value">
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.04]" style={{ top: "15%",    left: "10%" }} />
      <div className="orb w-[500px] h-[400px] bg-amber-500/[0.04]"   style={{ bottom: "15%", right: "10%" }} />

      <div className="relative max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/[0.1] border border-amber-500/[0.15] mb-8 r-up">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">Value Proposition</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Why This<br /><span className="text-gradient-amber">Matters</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8" id="valueCards">
          {/* Enterprises */}
          <div className="card card-emerald p-10 r-left" style={{ borderRadius: "24px", borderColor: "rgba(16,185,129,0.2)" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/[0.1] border border-emerald-500/[0.2] flex items-center justify-center">
                <Building2 className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-light text-gray-900 tracking-tight">For Enterprises</h3>
            </div>
            <div className="space-y-4">
              {enterpriseItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <p className="text-[14px] text-gray-500 font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Investors */}
          <div className="card card-gold-top p-10 r-right" style={{ borderRadius: "24px", borderColor: "rgba(245,158,11,0.2)" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/[0.1] border border-amber-500/[0.2] flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-light text-gray-900 tracking-tight">For Investors</h3>
            </div>
            <div className="space-y-4">
              {investorItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <p className="text-[14px] text-gray-500 font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-black/[0.03] border border-black/[0.06] text-center r-up">
          <p className="text-[15px] text-gray-500 font-light italic">
            This is particularly critical in regulated industries where platform replacement carries significant risk.
          </p>
        </div>
      </div>
    </section>
  );
}
