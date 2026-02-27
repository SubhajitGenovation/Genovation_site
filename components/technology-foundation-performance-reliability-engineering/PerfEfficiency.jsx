"use client";

import { Zap, Brain, Boxes, Target, Gauge, Server, Check, X } from "lucide-react";

const featureCards = [
  { icon: <Brain className="w-6 h-6 text-cyan-600" />,   bg: "bg-cyan-500/[0.1]",   border: "border-cyan-400/15",   title: "Small Language Models",     desc: "SLMs optimized for enterprise workloads, not general-purpose behemoths" },
  { icon: <Boxes className="w-6 h-6 text-emerald-600" />, bg: "bg-emerald-500/[0.1]", border: "border-emerald-400/15", title: "Modular Agent Execution",   desc: "Decomposed agents that scale independently without monolithic overhead" },
  { icon: <Target className="w-6 h-6 text-blue-600" />,   bg: "bg-blue-500/[0.1]",   border: "border-blue-400/15",   title: "Task-Scoped Reasoning",     desc: "Memory and context limited to task requirements, not unlimited accumulation" },
  { icon: <Gauge className="w-6 h-6 text-violet-600" />,  bg: "bg-violet-500/[0.1]", border: "border-violet-400/15", title: "Minimized Inference",       desc: "Optimized inference paths reduce computational overhead per request" },
];

export default function PerfEfficiency() {
  return (
    <section className="py-48 relative" id="efficiency">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[400px] bg-cyan-500/[0.06]" style={{ top: "15%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.12] border border-cyan-500/[0.2] mb-8 r-up">
            <Zap className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Architecture</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Efficient by<br /><span className="text-gradient-cyan">Architecture</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            Performance is not achieved by scaling hardware indiscriminately. Genovation achieves efficiency through intelligent architecture.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featureCards.map((f, i) => (
            <div key={i} className="card p-7 r-up">
              <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-5 border ${f.border}`}>{f.icon}</div>
              <h3 className="text-[15px] font-light text-gray-900 mb-2">{f.title}</h3>
              <p className="text-[13px] text-gray-500 font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Hardware Comparison */}
        <div className="r-scale">
          <div className="relative rounded-2xl border border-black/[0.1] overflow-hidden" style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <div className="flex items-center gap-3 p-5 border-b border-black/[0.06] bg-black/[0.02]">
              <Server className="w-5 h-5 text-cyan-600" />
              <h3 className="text-lg font-light text-gray-900">Hardware Requirements</h3>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="p-6 border-r border-black/[0.06]">
                <p className="text-red-500/70 text-[10px] uppercase tracking-wider mb-4 font-light">Typical AI Platforms</p>
                <div className="space-y-3">
                  {["Hyperscale GPU clusters required","Expensive specialized hardware","Cloud-dependent scaling"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-500 font-light">
                      <X className="w-4 h-4 text-red-400/60" />{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-emerald-500/[0.04]">
                <p className="text-emerald-600 text-[10px] uppercase tracking-wider mb-4 font-light">Genovation</p>
                <div className="space-y-3">
                  {["Enterprise-grade hardware","Commodity GPUs sufficient","On-premise deployment ready"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-700 font-light">
                      <Check className="w-4 h-4 text-emerald-600" />{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
