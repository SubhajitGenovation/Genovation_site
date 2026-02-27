"use client";

import { HeartPulse, Cpu, CheckCheck, Repeat, Flag, Check, Package, Database, RefreshCw, Play } from "lucide-react";

const govCards = [
  { icon: <CheckCheck className="w-5 h-5 text-violet-600" />, title: "Step-by-Step Validation",  sub: "Every execution step is verified before proceeding" },
  { icon: <Repeat className="w-5 h-5 text-violet-600" />,     title: "Bounded Retries",           sub: "Automatic retry with exponential backoff and limits" },
  { icon: <Flag className="w-5 h-5 text-violet-600" />,       title: "Explicit Failure States",   sub: "Clear failure signals with actionable diagnostics" },
];

const failureItems = ["Fail gracefully", "Surface issues immediately", "Prevent cascading errors", "Maintain audit trail"];

const resilienceItems = [
  { icon: <Package className="w-5 h-5 text-emerald-600" />,    bg: "bg-emerald-500/[0.04]", border: "border-emerald-400/[0.1]", title: "Modular Agent Boundaries",  sub: "Failure containment at agent level" },
  { icon: <Database className="w-5 h-5 text-cyan-600" />,      bg: "bg-cyan-500/[0.04]",    border: "border-cyan-400/[0.1]",    title: "Stateless Execution",       sub: "Where possible, no persistent state dependencies" },
  { icon: <RefreshCw className="w-5 h-5 text-blue-600" />,     bg: "bg-blue-500/[0.04]",    border: "border-blue-400/[0.1]",    title: "Recoverable Orchestration", sub: "Task state can be restored from checkpoints" },
  { icon: <Play className="w-5 h-5 text-violet-600" />,        bg: "bg-violet-500/[0.04]",  border: "border-violet-400/[0.1]",  title: "Replayable Workflows",      sub: "Workflows can be re-executed deterministically" },
];

export default function PerfReliability() {
  return (
    <section className="py-48 relative" id="reliability">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[400px] bg-violet-500/[0.06]" style={{ top: "10%", right: "15%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.12] border border-violet-500/[0.2] mb-8 r-up">
            <HeartPulse className="w-3 h-3 text-violet-600" />
            <span className="text-violet-600 text-[11px] font-light tracking-[0.25em] uppercase">Reliability</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Controlled Execution<br /><span className="text-gradient-violet">Graceful Failures</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            Failures are inevitable. Uncontrolled failures are unacceptable. Genovation systems are designed to fail gracefully, surface issues immediately, and prevent cascading errors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Mentis OS Governance — spans 2 cols */}
          <div className="lg:col-span-2 r-left">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-violet-500/[0.06] via-transparent to-blue-500/[0.04]" />
              <div className="relative card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/[0.12] flex items-center justify-center border border-violet-400/20">
                    <Cpu className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-gray-900">Execution Governed by Mentis OS</h3>
                    <p className="text-[11px] text-violet-600/60 font-light">No silent degradation</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {govCards.map((g, i) => (
                    <div key={i} className="p-4 rounded-xl bg-violet-500/[0.04] border border-violet-400/[0.1] text-center">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/[0.1] flex items-center justify-center mx-auto mb-3">{g.icon}</div>
                      <h4 className="text-sm text-gray-700 font-light mb-1">{g.title}</h4>
                      <p className="text-[11px] text-gray-400 font-light">{g.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Failure Response */}
          <div className="r-right">
            <div className="card p-8 h-full">
              <h3 className="text-lg font-light text-gray-900 mb-6">Failure Response</h3>
              <div className="space-y-4">
                {failureItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.1] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-sm text-gray-600 font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resilience Mechanisms */}
        <div className="r-up">
          <div className="card p-8">
            <h3 className="text-lg font-light text-gray-900 mb-2">Resilience by Design</h3>
            <p className="text-sm text-gray-400 font-light mb-6">Systems recover without corruption or loss of traceability</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {resilienceItems.map((r, i) => (
                <div key={i} className={`p-4 rounded-xl ${r.bg} border ${r.border}`}>
                  <div className="mb-2">{r.icon}</div>
                  <h4 className="text-sm text-gray-700 font-light mb-1">{r.title}</h4>
                  <p className="text-[11px] text-gray-400 font-light">{r.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
