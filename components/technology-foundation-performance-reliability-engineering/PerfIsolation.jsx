"use client";

import { GitBranch, Layers, Shield, Sliders, Octagon } from "lucide-react";

const features = [
  { icon: <Layers className="w-5 h-5 text-emerald-600" />,  title: "Concurrent agent execution", sub: "Multiple agents operate in parallel without contention" },
  { icon: <Shield className="w-5 h-5 text-emerald-600" />,  title: "Workload isolation across tasks", sub: "Task boundaries prevent cross-contamination" },
  { icon: <Sliders className="w-5 h-5 text-emerald-600" />, title: "Controlled resource allocation", sub: "Predictable resource budgets per workload" },
  { icon: <Octagon className="w-5 h-5 text-emerald-600" />, title: "Prevention of runaway processes", sub: "Automatic containment of resource-intensive tasks" },
];

const workloads = [
  { label: "WORKLOAD A", color: "emerald", bars: [["CPU","60%","w-[60%]"],["MEM","40%","w-[40%]"]] },
  { label: "WORKLOAD B — HIGH LOAD", color: "amber", bars: [["CPU","90%","w-[90%]"],["MEM","80%","w-[80%]"]] },
];
const workloads2 = [
  { label: "WORKLOAD C", color: "emerald", bars: [["CPU","30%","w-[30%]"],["MEM","50%","w-[50%]"]] },
  { label: "WORKLOAD D", color: "emerald", bars: [["CPU","50%","w-[50%]"],["MEM","20%","w-[20%]"]] },
];

function WorkloadCard({ label, color, bars }) {
  const barColors = { emerald: { text: "text-emerald-600", bg: ["bg-emerald-400","bg-emerald-500"], border: "border-emerald-400/[0.12]", cardBg: "bg-emerald-500/[0.04]" }, amber: { text: "text-amber-600", bg: ["bg-amber-400","bg-amber-500"], border: "border-amber-400/[0.12]", cardBg: "bg-amber-500/[0.04]" } };
  const c = barColors[color];
  return (
    <div className={`p-3 rounded-xl ${c.cardBg} border ${c.border}`}>
      <div className={`text-[9px] ${c.text} font-mono mb-2`}>{label}</div>
      <div className="space-y-1.5">
        {bars.map(([name, val, w], i) => (
          <div key={i}>
            <div className="flex justify-between mb-0.5">
              <span className="text-[8px] text-gray-500">{name}</span>
              <span className={`text-[7px] ${c.text} font-mono`}>{val}</span>
            </div>
            <div className="h-1 rounded-full bg-black/[0.05]">
              <div className={`h-full ${w} rounded-full ${c.bg[i]}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PerfIsolation() {
  return (
    <section className="py-48 relative" id="isolation">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.07]" style={{ top: "20%", left: "5%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
              <GitBranch className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Concurrency</span>
            </div>
            <h2 className="display-section text-5xl md:text-7xl r-up">
              Workload<br /><span className="text-gradient">Isolation</span>
            </h2>
            <p className="text-lg text-gray-500 font-light mt-6 mb-10 leading-relaxed r-up">
              Enterprise intelligence must serve multiple users and workflows simultaneously — without interference. Heavy workloads do not degrade system-wide stability.
            </p>
            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-black/[0.03] border border-black/[0.06] r-up">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/[0.1] flex items-center justify-center flex-shrink-0">{f.icon}</div>
                  <div>
                    <p className="text-[15px] text-gray-700 font-light">{f.title}</p>
                    <p className="text-[12px] text-gray-400 font-light">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Isolation Mock */}
          <div className="r-right">
            <div className="industry-mock" style={{ boxShadow: "0 25px 80px -20px rgba(16,185,129,0.12)" }}>
              <div className="mock-header">
                <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
                <span className="text-[9px] text-gray-500 font-mono ml-2">WORKLOAD ISOLATION — MENTIS OS</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {workloads.map((w, i) => <WorkloadCard key={i} {...w} />)}
                </div>
                {/* Isolation barrier */}
                <div className="flex items-center gap-3 my-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-[8px] text-emerald-600 font-mono">🔒 ISOLATED</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {workloads2.map((w, i) => <WorkloadCard key={i} {...w} />)}
                </div>
                <div className="mt-3 p-2 rounded-lg bg-emerald-500/[0.06] border border-emerald-400/[0.1] text-center">
                  <span className="text-[9px] text-emerald-600 font-light">Workload B at 90% CPU does not affect A, C, or D performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
