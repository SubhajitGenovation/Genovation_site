"use client";

import { Cpu, GitMerge, ShieldCheck, ScanEye } from "lucide-react";

export default function TechMentisOS() {
  return (
    <section className="py-48 relative section-bg-cool" id="mentisOS">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[600px] h-[500px] bg-violet-500/[0.04]" style={{ top: "5%", left: "20%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="section-badge bg-violet-500/[0.06] border border-violet-500/[0.12] mb-10 r-up inline-flex">
            <Cpu className="w-3 h-3 text-violet-500" />
            <span className="text-violet-700 text-[10px] font-medium tracking-[0.3em] uppercase font-mono">Core Infrastructure</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-[5.5rem] r-up">
            Mentis <span className="text-gradient-violet">OS</span>
          </h2>
          <p className="text-xl text-violet-500/70 font-light mt-4 mb-4 r-up italic">
            Enterprise Agentic Operating System
          </p>
          <p className="text-[15px] text-gray-500 font-light max-w-2xl mx-auto leading-relaxed r-up">
            At the core of Genovation's technology stack is Mentis OS — an enterprise-grade agentic operating
            system. It governs how intelligence is created, executed, monitored, and controlled.
          </p>
        </div>

        {/* Orchestration Dashboard Mock */}
        <div className="max-w-5xl mx-auto mb-16 r-scale">
          <div className="industry-mock" style={{ boxShadow: "var(--shadow-violet)" }}>
            <div className="mock-header">
              <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
              <span className="text-[9px] text-gray-500 font-mono ml-2">mentis-os — orchestration dashboard</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 soft-pulse" />
                <span className="text-[8px] text-violet-600 font-mono">3 AGENTS ACTIVE</span>
              </div>
            </div>
            <div className="p-6">
              {/* Agent Panels */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Orchestrator */}
                <div className="p-4 rounded-xl bg-cyan-500/[0.03] border border-cyan-500/[0.1]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/[0.12] flex items-center justify-center">
                      <GitMerge className="w-4 h-4 text-cyan-500" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-gray-800">Orchestrator</div>
                      <div className="text-[8px] text-cyan-600 font-mono">PID 7201</div>
                    </div>
                    <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500 soft-pulse" />
                  </div>
                  <div className="space-y-1.5 font-mono text-[9px] text-gray-400">
                    <div className="flex justify-between"><span>Tasks queued</span><span className="text-cyan-600">14</span></div>
                    <div className="flex justify-between"><span>Agents bound</span><span className="text-cyan-600">3</span></div>
                    <div className="flex justify-between"><span>Avg latency</span><span className="text-cyan-600">42ms</span></div>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500" style={{ width: "72%" }} />
                  </div>
                </div>

                {/* Governance */}
                <div className="p-4 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/[0.1]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.12] flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-gray-800">Governance</div>
                      <div className="text-[8px] text-emerald-600 font-mono">PID 7202</div>
                    </div>
                    <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500 soft-pulse" />
                  </div>
                  <div className="space-y-1.5 font-mono text-[9px] text-gray-400">
                    <div className="flex justify-between"><span>Policies active</span><span className="text-emerald-600">28</span></div>
                    <div className="flex justify-between"><span>Violations</span><span className="text-emerald-600">0</span></div>
                    <div className="flex justify-between"><span>Audit entries</span><span className="text-emerald-600">1,847</span></div>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" style={{ width: "100%" }} />
                  </div>
                </div>

                {/* Explainer */}
                <div className="p-4 rounded-xl bg-amber-500/[0.03] border border-amber-500/[0.1]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/[0.12] flex items-center justify-center">
                      <ScanEye className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-gray-800">Explainer</div>
                      <div className="text-[8px] text-amber-600 font-mono">PID 7203</div>
                    </div>
                    <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500 soft-pulse" />
                  </div>
                  <div className="space-y-1.5 font-mono text-[9px] text-gray-400">
                    <div className="flex justify-between"><span>Traces stored</span><span className="text-amber-600">3,204</span></div>
                    <div className="flex justify-between"><span>Depth level</span><span className="text-amber-600">Full</span></div>
                    <div className="flex justify-between"><span>Export ready</span><span className="text-amber-600">Yes</span></div>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500" style={{ width: "88%" }} />
                  </div>
                </div>
              </div>

              {/* Live Execution Log */}
              <div className="p-4 rounded-xl bg-gray-50/60 border border-gray-200/60 font-mono">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 soft-pulse" />
                  <span className="text-[9px] text-gray-500 tracking-wider">LIVE EXECUTION LOG</span>
                </div>
                <div className="space-y-1 text-[9px]">
                  {[
                    { time: "14:32:01", agent: "orchestrator", agentColor: "text-violet-600", msg: "→ Bound agent:knowledge to task:quarterly-report" },
                    { time: "14:32:02", agent: "governance ", agentColor: "text-emerald-600", msg: "→ Policy check PASSED (data-access-level: L3)" },
                    { time: "14:32:03", agent: "knowledge  ", agentColor: "text-cyan-600", msg: "→ Retrieved 47 documents from vector store" },
                    { time: "14:32:05", agent: "explainer  ", agentColor: "text-amber-600", msg: "→ Trace stored: decision_path_id=kx-9847" },
                    { time: "14:32:06", agent: "governance ", agentColor: "text-emerald-600", msg: "→ Output validated. Audit log #1847 created" },
                  ].map((l, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-gray-400 flex-shrink-0">{l.time}</span>
                      <span className={l.agentColor}>{l.agent}</span>
                      <span className="text-gray-500">{l.msg}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between px-1">
                <div className="flex items-center gap-4">
                  <span className="term-badge bg-violet-500/[0.08] text-violet-700">On-Premise</span>
                  <span className="term-badge bg-emerald-500/[0.08] text-emerald-700">Air-Gap Ready</span>
                  <span className="term-badge bg-cyan-500/[0.08] text-cyan-700">Zero Egress</span>
                </div>
                <span className="text-[8px] text-gray-400 font-mono">SOVEREIGN DEPLOYMENT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center r-up">
          <div className="card-static inline-block px-10 py-5">
            <p className="text-gray-500 font-light">
              Mentis OS ensures intelligence systems behave{" "}
              <span className="text-violet-600 font-medium">predictably</span> — even in complex, multi-agent
              workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
