"use client";
import { Cpu, Network, ShieldCheck, Activity, FileSearch, ChevronDown } from "lucide-react";

const features = [
  { icon: <Network className="w-5 h-5 text-blue-600" />, iconBg: "bg-blue-500/[0.12]", title: "Agent Orchestration", desc: "Specialized agents coordinated across reasoning, retrieval, analysis, and action" },
  { icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />, iconBg: "bg-emerald-500/[0.12]", title: "Governed Execution", desc: "Every agent action validated against policy, permissions, and context" },
  { icon: <Activity className="w-5 h-5 text-amber-600" />, iconBg: "bg-amber-500/[0.12]", title: "Real-Time Oversight", desc: "Continuous monitoring, policy enforcement, anomaly detection, execution interruption" },
  { icon: <FileSearch className="w-5 h-5 text-violet-600" />, iconBg: "bg-violet-500/[0.12]", title: "Explainability & Audit", desc: "Complete decision traces for every operation" },
];

export default function MentisSection() {
  return (
    <section className="py-32 relative" id="mentis">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[500px] bg-emerald-500/[0.05]" style={{ top: "20%", left: "5%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-6 r-up">
              <Cpu className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 text-[10px] font-mono tracking-[0.2em] uppercase">Platform</span>
            </div>
            <h2 className="display-section text-4xl md:text-5xl lg:text-6xl mb-4 r-up">Mentis OS</h2>
            <p className="text-xl text-gray-600 mb-3 font-light r-up">Enterprise Agentic Operating System</p>
            <p className="text-gray-600 leading-relaxed font-light mb-8 r-up">
              The control plane beneath every product. Agents reason, plan, and act — but only within
              enterprise-defined boundaries. This is what makes governed autonomy possible.
            </p>
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4 p-4 rounded-xl bg-black/[0.03] border border-black/[0.06] r-up">
                  <div className={`w-10 h-10 rounded-lg ${f.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>{f.icon}</div>
                  <div>
                    <p className="text-gray-800 font-medium text-sm">{f.title}</p>
                    <p className="text-xs text-gray-500 font-light">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Architecture Diagram */}
          <div className="r-scale">
            <div className="card-static p-8">
              <p className="text-center text-xs text-gray-500 font-mono tracking-widest uppercase mb-6">Mentis OS Architecture</p>

              {/* Products Layer */}
              <div className="p-4 rounded-xl bg-blue-500/[0.06] border border-blue-500/[0.12] mb-4">
                <p className="text-xs text-blue-600 font-medium text-center mb-3">Intelligence Products</p>
                <div className="grid grid-cols-4 gap-2">
                  {[["Knowledge","blue"],["Analytics","amber"],["Strategy","emerald"],["CX","violet"]].map(([label, c]) => (
                    <div key={label} className={`p-2 rounded-lg bg-${c}-500/[0.08] text-center`}>
                      <span className="text-[10px] text-gray-600">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mb-4"><ChevronDown className="w-4 h-4 text-gray-400" /></div>

              {/* Mentis OS Core */}
              <div className="p-4 rounded-xl bg-emerald-500/[0.06] border-2 border-emerald-500/[0.2] mb-4">
                <p className="text-sm text-emerald-600 font-medium text-center mb-4">MENTIS OS</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "Agent Orchestration", sub: "Reasoning • Retrieval • Action" },
                    { title: "Governed Execution", sub: "Policy • Permissions • Context" },
                    { title: "Real-Time Oversight", sub: "Monitoring • Enforcement" },
                    { title: "Explainability", sub: "Traces • Logs • Lineage" },
                  ].map((b) => (
                    <div key={b.title} className="p-3 rounded-lg bg-white/60 border border-black/[0.06]">
                      <p className="text-xs text-gray-700 font-medium">{b.title}</p>
                      <p className="text-[9px] text-gray-500">{b.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mb-4"><ChevronDown className="w-4 h-4 text-gray-400" /></div>

              <div className="p-4 rounded-xl bg-violet-500/[0.06] border border-violet-500/[0.12] mb-4">
                <p className="text-xs text-violet-600 font-medium text-center">Deep Libraries</p>
                <p className="text-[10px] text-gray-500 text-center">Cryptographic IP • Physical-World Interaction • Domain Models</p>
              </div>

              <div className="flex justify-center mb-4"><ChevronDown className="w-4 h-4 text-gray-400" /></div>

              <div className="p-3 rounded-xl bg-black/[0.04] border border-black/[0.06]">
                <p className="text-[10px] text-gray-500 text-center">Proprietary SLMs • Sovereign Infrastructure • Enterprise Data Backbone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
