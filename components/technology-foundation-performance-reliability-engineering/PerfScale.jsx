"use client";

import { Maximize, PlusCircle, Split, Shield, Search, Infinity } from "lucide-react";

const scaleCards = [
  { icon: <PlusCircle className="w-6 h-6 text-rose-500/70" />, bg: "bg-rose-500/[0.1]",   border: "border-rose-400/15",   title: "Add Agents, Not Monoliths",  desc: "Scale by deploying additional agents, not growing single complex systems" },
  { icon: <Split className="w-6 h-6 text-amber-600" />,        bg: "bg-amber-500/[0.1]",  border: "border-amber-400/15",  title: "Distribute Predictably",     desc: "Workload distribution follows deterministic patterns" },
  { icon: <Shield className="w-6 h-6 text-violet-600" />,      bg: "bg-violet-500/[0.1]", border: "border-violet-400/15", title: "Maintain Governance",        desc: "Policy enforcement consistent regardless of scale" },
  { icon: <Search className="w-6 h-6 text-cyan-600" />,        bg: "bg-cyan-500/[0.1]",   border: "border-cyan-400/15",   title: "Preserve Explainability",    desc: "Decision traceability maintained under load" },
];

const longRunning = ["Extended Analysis","Multi-Step Reasoning","Chained Workflows","Cross-System"];
const longRunningSub = ["Hours-long processing","Complex decision chains","Sequential task execution","Multi-service integration"];

export default function PerfScale() {
  return (
    <section className="py-48 relative" id="scale">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-rose-500/[0.04]" style={{ top: "5%", left: "30%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/[0.1] border border-rose-500/[0.2] mb-8 r-up">
            <Maximize className="w-3 h-3 text-rose-500/80" />
            <span className="text-rose-500/80 text-[11px] font-light tracking-[0.25em] uppercase">Scalability</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Scale Without<br /><span className="text-gradient-violet">Fragility</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            Genovation scales intelligence horizontally, not by increasing complexity. Scale does not introduce opacity.
          </p>
        </div>

        {/* Scale cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" id="scaleCards">
          {scaleCards.map((s, i) => (
            <div key={i} className="card p-7 text-center r-up">
              <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center mx-auto mb-4 border ${s.border}`}>{s.icon}</div>
              <h3 className="text-[15px] font-light text-gray-900 mb-2">{s.title}</h3>
              <p className="text-[13px] text-gray-500 font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Long-Running Workloads */}
        <div className="r-up">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-emerald-500/[0.05] via-transparent to-cyan-500/[0.04]" />
            <div className="relative card p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/[0.1] flex items-center justify-center border border-emerald-400/15">
                  <Infinity className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900">Long-Running Intelligence Workloads</h3>
                  <p className="text-[13px] text-gray-400 font-light">Beyond chat-based interactions</p>
                </div>
              </div>
              <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-6">
                Unlike chat-based systems, enterprise intelligence often involves extended analysis, multi-step reasoning, chained workflows, and cross-system interactions. Genovation handles long-lived processes without memory leaks, state corruption, or loss of control.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {longRunning.map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-400/[0.12]">
                    <p className="text-emerald-600 font-light text-sm">{item}</p>
                    <p className="text-[11px] text-gray-400 mt-1">{longRunningSub[i]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
