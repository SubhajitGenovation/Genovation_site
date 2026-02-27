"use client";

import { ArrowRight, BadgeCheck, Search, Clock, Layers } from "lucide-react";

const ctaCards = [
  { icon: <BadgeCheck className="w-8 h-8 text-emerald-500" />, bg: "bg-emerald-500/[0.06]", title: "Earn Trust", desc: "Through transparency" },
  { icon: <Search className="w-8 h-8 text-violet-500" />, bg: "bg-violet-500/[0.06]", title: "Survive Scrutiny", desc: "Under regulatory review" },
  { icon: <Clock className="w-8 h-8 text-cyan-500" />, bg: "bg-cyan-500/[0.06]", title: "Remain Deployable", desc: "Over the long term" },
];

const pills = [
  { label: "First Principles", bg: "bg-emerald-500/[0.06]", border: "border-emerald-500/[0.12]", text: "text-emerald-700" },
  { label: "Mentis OS", bg: "bg-violet-500/[0.06]", border: "border-violet-500/[0.12]", text: "text-violet-700" },
  { label: "SLM Engine", bg: "bg-amber-500/[0.06]", border: "border-amber-500/[0.12]", text: "text-amber-700" },
  { label: "Sovereign Deployment", bg: "bg-cyan-500/[0.06]", border: "border-cyan-500/[0.12]", text: "text-cyan-700" },
];

export default function TechCTA() {
  return (
    <>
      <section className="py-48 relative section-bg-warm" id="cta">
        <div className="absolute inset-0 mesh-bg opacity-10" />

        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <h2 className="display-section text-5xl md:text-7xl lg:text-[5.5rem] mb-8 r-up">
            Why This <span className="text-gradient">Matters</span>
          </h2>
          <p className="text-xl text-gray-500 font-light mb-12 r-up">AI adoption fails when foundations are weak.</p>

          {/* 3 pillars */}
          <div className="card p-12 mb-16 r-scale" style={{ boxShadow: "var(--shadow-lg)" }}>
            <div className="grid md:grid-cols-3 gap-8">
              {ctaCards.map((c, i) => (
                <div key={i} className="text-center">
                  <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center mx-auto mb-4`}>
                    {c.icon}
                  </div>
                  <p className="text-xl text-gray-800">{c.title}</p>
                  <p className="text-[12px] text-gray-400 font-light mt-2">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h3 className="display-inter text-3xl md:text-5xl text-gray-800 mb-3 r-up">
            Intelligence is only as strong
          </h3>
          <h3 className="display-inter text-3xl md:text-5xl mb-10 r-up">
            <span className="text-gradient">as the foundation beneath it.</span>
          </h3>
          <p className="text-xl text-gray-400 font-light mb-12 r-up italic">We build both.</p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-5 mb-12 r-up">
            <button className="hero-cta-primary group relative px-10 py-4 rounded-full text-[15px] font-medium flex items-center gap-3 overflow-hidden">
              <span className="relative z-10 text-black flex items-center gap-3">
                Explore Our Technology
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            <button className="px-10 py-4 rounded-full bg-gray-900 text-white text-[15px] font-medium hover:bg-gray-800 transition-colors">
              Request Briefing
            </button>
          </div>

          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3 r-up">
            {pills.map((p, i) => (
              <span key={i} className={`px-5 py-2.5 rounded-full ${p.bg} border ${p.border} ${p.text} text-[11px] font-light`}>
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
