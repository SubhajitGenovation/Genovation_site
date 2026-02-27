"use client";

import { ScanEye, Activity, ShieldCheck, GitBranch, FileCheck } from "lucide-react";

const govFeatures = [
  { icon: <Activity className="w-5 h-5 text-amber-500" />, title: "Real-time Monitoring", desc: "Continuous observation of agent behavior" },
  { icon: <ShieldCheck className="w-5 h-5 text-amber-500" />, title: "Policy Enforcement", desc: "Rules applied during execution, not after" },
  { icon: <GitBranch className="w-5 h-5 text-amber-500" />, title: "Full Decision Traceability", desc: "Every reasoning step captured" },
  { icon: <FileCheck className="w-5 h-5 text-amber-500" />, title: "Audit-Ready Outputs", desc: "Documentation for regulators" },
];

const traceSteps = [
  { color: "bg-amber-500", borderColor: "border-amber-500/20", timeColor: "text-amber-600", time: "14:32:01", msg: "Task received: generate Q3 report", sub: "source: user:jdoe | priority: high", subColor: "text-gray-400" },
  { color: "bg-emerald-500", borderColor: "border-emerald-500/20", timeColor: "text-emerald-600", time: "14:32:02", msg: "Policy gate: data-access-level check", sub: "PASSED — user has L3 clearance", subColor: "text-emerald-600" },
  { color: "bg-cyan-500", borderColor: "border-cyan-500/20", timeColor: "text-cyan-600", time: "14:32:03", msg: "Knowledge agent: retrieved 47 docs", sub: "similarity > 0.82 | all docs L3 or below", subColor: "text-gray-400" },
  { color: "bg-violet-500", borderColor: "border-violet-500/20", timeColor: "text-violet-600", time: "14:32:05", msg: "SLM inference: report draft generated", sub: "model: gv-slm-3b-finance-v4 | tokens: 2,847", subColor: "text-gray-400" },
  { color: "bg-emerald-500", borderColor: "border-emerald-500/20", timeColor: "text-emerald-600", time: "14:32:06", msg: "Output validation: PII scan", sub: "PASSED — no PII, within policy bounds", subColor: "text-emerald-600" },
  { color: "bg-amber-500", borderColor: "border-amber-500/20", timeColor: "text-amber-600", time: "14:32:06", msg: "Audit log #1847 created", sub: "immutable | hash: 7f3a...c2d1", subColor: "text-gray-400" },
];

export default function TechGovernance() {
  return (
    <section className="py-48 relative section-bg-warm" id="governance">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[400px] bg-amber-500/[0.03]" style={{ top: "10%", left: "5%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div className="r-left">
            <div className="section-badge bg-amber-500/[0.06] border border-amber-500/[0.12] mb-8 inline-flex">
              <ScanEye className="w-3 h-3 text-amber-500" />
              <span className="text-amber-700 text-[10px] font-medium tracking-[0.3em] uppercase font-mono">Governance Layer</span>
            </div>
            <h2 className="display-section text-4xl md:text-6xl mb-6">
              Explainability & <span className="text-gradient-amber">Governance</span>
            </h2>
            <p className="text-[15px] text-gray-500 font-light mb-10 leading-relaxed">
              Intelligence without accountability is unusable. Governance is embedded directly into execution.
            </p>
            <div className="space-y-4 mb-8">
              {govFeatures.map((f, i) => (
                <div key={i} className="card-accent p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/[0.1] flex items-center justify-center flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-gray-800 mb-1">{f.title}</h4>
                    <p className="text-[12px] text-gray-400 font-light">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Decision Trace Inspector */}
          <div className="r-right">
            <div className="industry-mock" style={{ boxShadow: "0 40px 120px -30px rgba(245,158,11,0.1)" }}>
              <div className="mock-header">
                <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
                <span className="text-[9px] text-gray-500 font-mono ml-2">governance — decision trace inspector</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-amber-500/[0.04] border border-amber-500/[0.1]">
                  <ScanEye className="w-4 h-4 text-amber-500" />
                  <span className="text-[10px] text-gray-700 font-mono">trace_id: kx-9847 — quarterly-report-gen</span>
                </div>
                <div className="space-y-0 font-mono text-[9px] pl-2">
                  {traceSteps.map((step, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2 ${i < traceSteps.length - 1 ? "pb-3" : ""} border-l-2 ${step.borderColor} pl-4 ml-1 relative`}
                    >
                      <div className={`absolute left-[-5px] top-0 w-2 h-2 rounded-full ${step.color}`} />
                      <div>
                        <span className={`${step.timeColor} font-medium`}>{step.time}</span>{" "}
                        <span className="text-gray-700">{step.msg}</span>
                        <br />
                        <span className={step.subColor}>{step.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="term-badge bg-emerald-500/[0.08] text-emerald-700">All Gates Passed</span>
                  <span className="term-badge bg-amber-500/[0.08] text-amber-700">Full Trace</span>
                  <span className="term-badge bg-violet-500/[0.08] text-violet-700">Audit-Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
