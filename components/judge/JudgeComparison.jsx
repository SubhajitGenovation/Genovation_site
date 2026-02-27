"use client";

import { GitCompare, Brain, FileSearch, ShieldCheck, Gauge, ScrollText, RotateCcw, Users, Minus, CheckCircle2, Scale } from "lucide-react";

const rows = [
  { icon: <Brain className="w-4 h-4 text-gray-400" />,       label: "Hallucination Control", without: "Hope for the best",        with: "Detected & rejected" },
  { icon: <FileSearch className="w-4 h-4 text-gray-400" />,  label: "Source Attribution",    without: "Optional, unverified",     with: "Mandatory, cross-checked" },
  { icon: <ShieldCheck className="w-4 h-4 text-gray-400" />, label: "Policy Enforcement",    without: "Model discretion",         with: "Enterprise rules enforced" },
  { icon: <Gauge className="w-4 h-4 text-gray-400" />,       label: "Confidence Awareness",  without: "Always confident",         with: "Scored & thresholded" },
  { icon: <ScrollText className="w-4 h-4 text-gray-400" />,  label: "Audit Trail",           without: "Partial logs",             with: "Immutable, complete" },
  { icon: <RotateCcw className="w-4 h-4 text-gray-400" />,   label: "Self-Correction",       without: "None",                     with: "Reject → re-reason loop" },
  { icon: <Users className="w-4 h-4 text-gray-400" />,       label: "Human Escalation",      without: "Manual detection",         with: "Automatic routing" },
];

export default function JudgeComparison() {
  return (
    <section id="comparison" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-emerald-500/[0.05]" style={{ top: "10%", left: "40%" }} />

      <div className="relative max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.2] mb-8 r-up">
            <GitCompare className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">The Difference</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            AI Without JUDGE<br /><span className="text-gradient">Is a Liability</span>
          </h2>
        </div>

        <div className="r-scale">
          <div className="relative rounded-2xl border border-black/[0.1] overflow-hidden"
            style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>

            {/* Header row */}
            <div className="comp-row" style={{ borderBottom: "1px solid rgba(0,0,0,0.1)", background: "rgba(0,0,0,0.03)" }}>
              <div className="comp-cell"><span className="text-xs text-gray-600 font-light tracking-[0.15em] uppercase">Dimension</span></div>
              <div className="comp-cell text-center"><span className="text-xs text-gray-600 font-light tracking-[0.15em] uppercase">Without JUDGE</span></div>
              <div className="comp-cell text-center" style={{ background: "rgba(16,185,129,0.08)" }}>
                <div className="flex items-center justify-center gap-2">
                  <Scale className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-xs text-emerald-600 font-light tracking-[0.1em] uppercase">With JUDGE</span>
                </div>
              </div>
            </div>

            {/* Data rows */}
            {rows.map((row, i) => (
              <div key={i} className={`comp-row${i === rows.length - 1 ? " last" : ""}`}>
                <div className="comp-cell comp-cell-label">
                  {row.icon}{row.label}
                </div>
                <div className="comp-cell comp-cell-old">
                  <Minus className="w-3 h-3 text-gray-400" />{row.without}
                </div>
                <div className="comp-cell comp-cell-new">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />{row.with}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
