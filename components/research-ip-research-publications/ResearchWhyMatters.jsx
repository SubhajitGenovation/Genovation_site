"use client";

import { AlertCircle, AlertTriangle, ScanSearch, Shield, Database, Clock } from "lucide-react";

const beliefs = [
  { icon: <ScanSearch className="w-5 h-5 text-cyan-600" />,   bg: "bg-cyan-500/[0.1]",   border: "rgba(6,182,212,0.15)",   title: "Every Decision Must Be Traceable",      sub: "From input data to output action, the full reasoning chain should be auditable." },
  { icon: <Shield className="w-5 h-5 text-violet-600" />,     bg: "bg-violet-500/[0.1]", border: "rgba(139,92,246,0.15)",  title: "Governance Cannot Be an Afterthought",  sub: "Systems must be designed for governance from the ground up." },
  { icon: <Database className="w-5 h-5 text-emerald-600" />,  bg: "bg-emerald-500/[0.1]",border: "rgba(16,185,129,0.15)",  title: "Data Sovereignty Is Non-Negotiable",    sub: "Enterprises should control where their data lives and how it's processed." },
  { icon: <Clock className="w-5 h-5 text-amber-600" />,       bg: "bg-amber-500/[0.1]",  border: "rgba(245,158,11,0.15)",  title: "Security Must Outlast Today's Threats", sub: "Systems protecting sensitive data need security that survives for decades." },
];

export default function ResearchWhyMatters() {
  return (
    <section className="py-48 relative" id="whyMatters">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-rose-500/[0.04]"  style={{ top: "10%", left: "20%" }} />
      <div className="orb w-[400px] h-[400px] bg-cyan-500/[0.05]"  style={{ bottom: "10%", right: "15%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/[0.08] border border-rose-400/[0.15] mb-8 r-up">
            <AlertCircle className="w-3 h-3 text-rose-500" />
            <span className="text-rose-500 text-[11px] font-light tracking-[0.25em] uppercase">The Problem</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Why This Research<br /><span className="text-gradient">Matters</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left */}
          <div className="r-left">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mb-6">
              Enterprise AI Is <span className="text-gradient-rose">Broken</span>
            </h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              Today's AI systems are built for capability benchmarks, not enterprise reality. They can generate impressive outputs, but they can't explain how they got there.
            </p>
            <p className="text-base text-gray-500 font-light leading-relaxed mb-8">
              For regulated industries — financial services, healthcare, aerospace, government — this isn't just inconvenient. It's a deployment blocker. When a regulator asks{" "}
              <em>"why did the system make this decision?"</em>,{" "}
              <span className="text-rose-500 font-medium">"the model thought it was right"</span> is not an acceptable answer.
            </p>
            <div className="card p-8" style={{ borderColor: "rgba(244,63,94,0.15)" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/[0.1] flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <p className="text-rose-600 font-medium mb-2 text-lg">The Core Problem</p>
                  <p className="text-gray-500 font-light">
                    AI systems optimized for speed and capability often sacrifice the transparency, auditability, and control that enterprises require.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="r-right">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mb-6">
              What We <span className="text-gradient-emerald">Believe</span>
            </h3>
            <div className="space-y-4">
              {beliefs.map((b, i) => (
                <div key={i} className="card p-5" style={{ borderColor: b.border }}>
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl ${b.bg} flex items-center justify-center flex-shrink-0`}>{b.icon}</div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">{b.title}</h4>
                      <p className="text-sm text-gray-500 font-light">{b.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="r-scale">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-emerald-500/[0.06] to-cyan-500/[0.04]" />
            <div className="absolute -inset-3 rounded-[28px] border border-emerald-500/[0.1]" />
            <div className="card relative p-12 text-center" style={{ borderColor: "rgba(16,185,129,0.15)", boxShadow: "0 40px 80px -20px rgba(16,185,129,0.1)" }}>
              <p className="text-xl text-gray-600 font-light mb-6">Our research exists to close the gap between</p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <span className="text-3xl font-light text-gradient">"AI that works"</span>
                <div className="w-16 h-px bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 hidden md:block" />
                <span className="text-gray-400 text-xl font-light">and</span>
                <div className="w-16 h-px bg-gradient-to-r from-cyan-400/30 to-blue-400/30 hidden md:block" />
                <span className="text-3xl font-light text-gradient-cyan">"AI enterprises can deploy"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
