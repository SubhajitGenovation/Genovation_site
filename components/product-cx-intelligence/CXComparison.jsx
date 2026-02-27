"use client";

import { GitCompare, Headphones, Plug, Code, ShieldCheck, Lock, FileSearch, Sparkles, Minus, CheckCircle2 } from "lucide-react";

const rows = [
  { Icon: Plug,        label: "API Connectivity", old: "Limited pre-built",      neo: "Any API",            last: false },
  { Icon: Code,        label: "Code Execution",   old: "None",                   neo: "Python / JS / SQL",  last: false },
  { Icon: ShieldCheck, label: "Governance",        old: "Basic logging",          neo: "JUDGE Layer",        last: false },
  { Icon: Lock,        label: "Deployment",        old: "Cloud only",             neo: "On-Prem / VPC / Air-Gap", last: false },
  { Icon: FileSearch,  label: "Audit Trail",       old: "Partial",                neo: "Immutable",          last: false },
  { Icon: Sparkles,    label: "Use Cases",         old: "FAQ chatbot",            neo: "Infinite",           last: true  },
];

export default function CXComparison() {
  return (
    <section id="comparison" className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 600, height: 500, background: "rgba(245,158,11,0.05)", top: "10%", left: "40%" }} />

      <div className="relative max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8 r-up"
            style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.15)" }}>
            <GitCompare className="w-3 h-3 text-amber-600" />
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">Why CX Intelligence</span>
          </div>
          <h2 className="display-section r-up" style={{ fontSize: "clamp(2.5rem,8vw,8rem)" }}>
            What Makes This <span className="text-gradient">Different</span>
          </h2>
        </div>

        <div className="r-scale" id="compTable">
          <div className="relative rounded-2xl border overflow-hidden"
            style={{ background: "rgba(255,255,255,0.9)", borderColor: "rgba(0,0,0,0.1)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>

            {/* Header */}
            <div className="comp-row" style={{ borderBottom: "1px solid rgba(0,0,0,0.1)", background: "rgba(0,0,0,0.03)" }}>
              <div className="comp-cell"><span className="text-xs text-gray-500 font-light tracking-[0.15em] uppercase">Capability</span></div>
              <div className="comp-cell text-center"><span className="text-xs text-gray-500 font-light tracking-[0.15em] uppercase">Traditional Chatbots</span></div>
              <div className="comp-cell text-center" style={{ background: "rgba(245,158,11,0.08)" }}>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 rounded-md flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#f59e0b,#ea580c)" }}>
                    <Headphones className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs text-amber-700 font-light tracking-[0.1em] uppercase">CX Intelligence</span>
                </div>
              </div>
            </div>

            {/* Data rows */}
            {rows.map(({ Icon, label, old, neo, last }) => (
              <div key={label} className="comp-row" style={last ? { borderBottom: "none" } : {}}>
                <div className="comp-cell comp-cell-label">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,0,0,0.05)" }}>
                    <Icon className="w-3 h-3 text-gray-500" />
                  </div>
                  {label}
                </div>
                <div className="comp-cell comp-cell-old">
                  <Minus className="w-3 h-3 text-gray-400" /> {old}
                </div>
                <div className="comp-cell comp-cell-new">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" /> {neo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
