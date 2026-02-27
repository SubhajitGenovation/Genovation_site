"use client";

import { Puzzle, Layers, X, Check, Compass } from "lucide-react";

const traditional = [
  { title: "Third-party model dependencies", desc: "External APIs that can change or disappear" },
  { title: "Cloud-dependent architecture", desc: "Locked into specific providers" },
  { title: "Opaque execution paths", desc: "Black-box systems impossible to audit" },
  { title: "Unpredictable costs", desc: "Per-token pricing that scales unpredictably" },
];

const genovation = [
  { title: "Sovereignty over data and execution", desc: "Complete control over every layer" },
  { title: "Explainability and auditability", desc: "Every decision traceable and defensible" },
  { title: "Sustainable performance and cost", desc: "Predictable economics at scale" },
  { title: "Long-term security resilience", desc: "Post-quantum ready, zero-trust by design" },
];

export default function TechFirstPrinciples() {
  return (
    <section className="py-48 relative section-bg-warm" id="firstPrinciples">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[600px] h-[500px] bg-red-500/[0.03]" style={{ top: "5%", right: "5%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="section-badge bg-cyan-500/[0.06] border border-cyan-500/[0.12] mb-10 r-up inline-flex">
            <Compass className="w-3 h-3 text-cyan-500" />
            <span className="text-cyan-700 text-[10px] font-medium tracking-[0.3em] uppercase font-mono">Philosophy</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-[5.5rem] r-up">
            Built from <span className="text-gradient">First Principles</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            Most AI platforms assemble capabilities by stitching together third-party services. Genovation takes a
            different approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Traditional */}
          <div className="card-static p-10 r-up" style={{ borderColor: "rgba(239,68,68,0.1)" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-red-500/[0.06] flex items-center justify-center">
                <Puzzle className="w-7 h-7 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-normal text-gray-800">Traditional AI Platforms</h3>
                <p className="text-[12px] text-red-400/60 font-light">Assembled from disparate parts</p>
              </div>
            </div>
            <div className="space-y-3">
              {traditional.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-red-500/[0.03] border border-red-500/[0.06]">
                  <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] text-gray-700">{item.title}</p>
                    <p className="text-[12px] text-gray-400 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Genovation */}
          <div className="card p-10 r-up" style={{ boxShadow: "var(--shadow-emerald)" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/[0.08] flex items-center justify-center">
                <Layers className="w-7 h-7 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-lg font-normal text-gray-800">Genovation Foundation</h3>
                <p className="text-[12px] text-emerald-500/60 font-light">Vertically integrated from first principles</p>
              </div>
            </div>
            <div className="space-y-3">
              {genovation.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/[0.08]">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] text-gray-700">{item.title}</p>
                    <p className="text-[12px] text-gray-400 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center r-up">
          <div className="card-static inline-block px-10 py-5">
            <p className="text-gray-500 font-light">
              This foundation enables deployment where{" "}
              <span className="text-emerald-600 font-medium">generic AI systems cannot operate</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

