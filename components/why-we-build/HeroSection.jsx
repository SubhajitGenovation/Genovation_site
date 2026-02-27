"use client";
import { Compass } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24" id="hero">
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div className="orb w-[600px] h-[600px] bg-emerald-500/[0.06]" style={{ top: "10%", left: "20%" }} />
      <div className="orb w-[400px] h-[400px] bg-cyan-500/[0.05]" style={{ top: "40%", right: "10%" }} />

      <div className="relative max-w-5xl mx-auto px-8 text-center">
        <div className="mb-8 r-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2]">
            <Compass className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">What We Build & Why</span>
          </div>
        </div>

        <h1 className="display-hero text-6xl md:text-7xl lg:text-[6.5rem] mb-8 r-up">
          Enterprise Intelligence<br />
          <span className="text-gradient">for a Post-Trust World</span>
        </h1>

        <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-12 r-up">
          Genovation builds sovereign, explainable AI systems for regulated enterprises —
          organizations where data cannot leave, decisions must be defended, and
          AI must operate under strict governance.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16 r-up">
          {["Not a consumer AI company", "Not a model API provider", "Not a chatbot with an enterprise wrapper"].map((t) => (
            <div key={t} className="px-5 py-2.5 rounded-full bg-black/[0.04] border border-black/[0.08]">
              <span className="text-sm text-gray-600 font-light">{t}</span>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto r-up">
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Full-stack intelligence infrastructure — proprietary domain-specific language models,
            a governed agentic operating system, and cryptographic security foundations — designed
            to deploy where most AI companies cannot operate.
          </p>
        </div>
      </div>
    </section>
  );
}
