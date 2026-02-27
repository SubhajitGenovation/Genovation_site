"use client";
import { Telescope, Network, Lock, Glasses, KeyRound } from "lucide-react";

export default function ResearchRoadmap() {
  return (
    <section className="py-32 relative overflow-hidden" id="roadmap">
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.04]" style={{ top: "10%", right: "15%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.15] mb-8 r-up">
            <Telescope className="w-3 h-3 text-cyan-500" />
            <span className="text-cyan-500 text-[11px] font-light tracking-[0.25em] uppercase">Future Directions</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Research<br /><span className="text-gradient-cyan">Roadmap</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Each advance feeds directly into our intelligence products — without compromising sovereignty or trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" id="roadmapCards">
          <div className="card card-cyan p-6 r-up" style={{ borderColor: "rgba(6,182,212,0.2)", borderRadius: "18px" }}>
            <div className="w-11 h-11 rounded-xl bg-cyan-500/[0.08] border border-cyan-500/[0.15] flex items-center justify-center mb-4">
              <Network className="w-5 h-5 text-cyan-500" />
            </div>
            <h3 className="text-base font-medium text-gray-900 mb-2">Multi-Agent Coordination</h3>
            <p className="text-[13px] text-gray-500 font-light leading-relaxed">Advanced orchestration for complex, multi-step enterprise workflows.</p>
          </div>

          <div className="card card-emerald p-6 r-up" style={{ borderColor: "rgba(16,185,129,0.2)", borderRadius: "18px" }}>
            <div className="w-11 h-11 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/[0.15] flex items-center justify-center mb-4">
              <Lock className="w-5 h-5 text-emerald-500" />
            </div>
            <h3 className="text-base font-medium text-gray-900 mb-2">Encrypted ML Workflows</h3>
            <p className="text-[13px] text-gray-500 font-light leading-relaxed">Training and inference on encrypted data without exposure.</p>
          </div>

          <div className="card card-violet p-6 r-up" style={{ borderColor: "rgba(139,92,246,0.2)", borderRadius: "18px" }}>
            <div className="w-11 h-11 rounded-xl bg-violet-500/[0.08] border border-violet-500/[0.15] flex items-center justify-center mb-4">
              <Glasses className="w-5 h-5 text-violet-500" />
            </div>
            <h3 className="text-base font-medium text-gray-900 mb-2">Deeper Explainability</h3>
            <p className="text-[13px] text-gray-500 font-light leading-relaxed">More granular decision tracing and natural language explanations.</p>
          </div>

          <div className="card card-rose p-6 r-up" style={{ borderColor: "rgba(251,113,133,0.2)", borderRadius: "18px" }}>
            <div className="w-11 h-11 rounded-xl bg-rose-500/[0.08] border border-rose-500/[0.15] flex items-center justify-center mb-4">
              <KeyRound className="w-5 h-5 text-rose-500" />
            </div>
            <h3 className="text-base font-medium text-gray-900 mb-2">Cryptographic Resilience</h3>
            <p className="text-[13px] text-gray-500 font-light leading-relaxed">Long-term security against evolving computational threats.</p>
          </div>
        </div>
      </div>
    </section>
  );
}