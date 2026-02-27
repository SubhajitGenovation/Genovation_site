"use client";

import { Compass } from "lucide-react";

const philosophyCards = [
  {
    num: "01",
    title: "Foundations Over Features",
    body: "We protect core mechanisms that power multiple products, not narrow use cases.",
    note: "A single patent filing may underpin capabilities across all four intelligence platforms — ensuring protection scales with product expansion.",
  },
  {
    num: "02",
    title: "Deployment-Driven Innovation",
    body: "Patents originate from real enterprise deployment constraints — compliance, cost, explainability, and security.",
    note: "Every filing addresses a problem we encountered in production environments — not theoretical capabilities.",
  },
  {
    num: "03",
    title: "Long-Horizon Defensibility",
    body: "Filings designed to remain relevant across model generations, hardware shifts, and regulatory changes.",
    note: "We patent at the mechanism level so protection doesn't expire when underlying models evolve.",
  },
];

export default function PatentPhilosophy() {
  return (
    <section className="py-32 relative overflow-hidden" id="philosophy">
      <div className="orb w-[600px] h-[400px] bg-amber-500/[0.04]" style={{ top: "10%", right: "15%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/[0.1] border border-amber-500/[0.15] mb-8 r-up">
            <Compass className="w-3 h-3 text-amber-600" />
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">Our Approach</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Patent<br /><span className="text-gradient-amber">Philosophy</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            We do not patent applications. We patent infrastructure-level intelligence mechanisms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6" id="philosophyCards">
          {philosophyCards.map((c, i) => (
            <div key={i} className="card card-gold-top p-8 r-up" style={{ borderRadius: "24px", borderColor: "rgba(245,158,11,0.2)" }}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/[0.1] border border-amber-500/[0.2] flex items-center justify-center mb-6">
                <span className="text-xl font-semibold text-amber-600">{c.num}</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">{c.title}</h3>
              <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-5">{c.body}</p>
              <div className="p-4 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                <p className="text-[12px] text-gray-400 font-light leading-relaxed">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
