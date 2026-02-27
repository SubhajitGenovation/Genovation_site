"use client";

import { Factory, AlertTriangle, TrendingUp, Users, Clock, Unplug, ShieldCheck, Check } from "lucide-react";

const challenges = [
  { icon: <TrendingUp className="w-4 h-4 text-red-400/70 mt-0.5 flex-shrink-0" />, title: "Variable data volume", sub: "Sudden spikes overwhelm fixed-capacity systems" },
  { icon: <Users className="w-4 h-4 text-red-400/70 mt-0.5 flex-shrink-0" />, title: "Concurrent users", sub: "Multi-tenant load causes interference" },
  { icon: <Clock className="w-4 h-4 text-red-400/70 mt-0.5 flex-shrink-0" />, title: "Long-running workflows", sub: "Memory leaks and state corruption over time" },
  { icon: <Unplug className="w-4 h-4 text-red-400/70 mt-0.5 flex-shrink-0" />, title: "Partial system failures", sub: "Cascade effects bring down entire systems" },
];

const solutions = [
  { title: "Bounded latency expectations",  sub: "Predictable response times under load" },
  { title: "Controlled concurrency",         sub: "Workload isolation prevents interference" },
  { title: "Stable memory consumption",      sub: "No leaks in long-running processes" },
  { title: "Repeatable execution paths",     sub: "Deterministic behavior enables debugging" },
];

export default function PerfProduction() {
  return (
    <section className="py-48 relative" id="production">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[700px] h-[500px] bg-emerald-500/[0.06]" style={{ top: "10%", left: "20%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
            <Factory className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Design Philosophy</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Designed for <span className="text-gradient">Production</span>,<br />Not Prototypes
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            Many AI systems perform well in controlled environments but degrade under real-world conditions. Genovation's architecture assumes production stress as the default.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Challenges */}
          <div className="r-left">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-red-500/[0.05] via-transparent to-amber-500/[0.04]" />
              <div className="relative card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/[0.1] flex items-center justify-center border border-red-400/20">
                    <AlertTriangle className="w-6 h-6 text-red-500/70" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-gray-900 tracking-tight">Real-World Challenges</h3>
                    <p className="text-[11px] text-gray-400 font-light">What breaks typical AI systems</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {challenges.map((c, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-red-500/[0.03] border border-red-400/[0.08]">
                      {c.icon}
                      <div>
                        <p className="text-sm text-gray-700 font-light">{c.title}</p>
                        <p className="text-[12px] text-gray-400 font-light">{c.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="r-right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-emerald-500/[0.07] via-transparent to-cyan-500/[0.05]" />
              <div className="absolute -inset-4 rounded-[32px] border border-emerald-500/[0.08]" />
              <div className="relative card p-8" style={{ boxShadow: "0 25px 80px -20px rgba(16,185,129,0.1)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/[0.12] flex items-center justify-center border border-emerald-400/20">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-gray-900 tracking-tight">Genovation Architecture</h3>
                    <p className="text-[11px] text-emerald-600/60 font-light">Production-ready by design</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {solutions.map((s, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-emerald-500/[0.04] border border-emerald-400/[0.1]">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700 font-light">{s.title}</p>
                        <p className="text-[12px] text-gray-400 font-light">{s.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statement */}
        <div className="r-up">
          <div className="p-8 rounded-2xl bg-emerald-500/[0.06] border border-emerald-400/[0.15] text-center">
            <p className="text-xl text-gray-700 font-light">
              Genovation prioritizes <span className="text-emerald-600 font-normal">predictable performance</span> over peak theoretical throughput.
            </p>
            <p className="text-sm text-gray-400 font-light mt-2">Enterprises can plan capacity and cost without guessing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
