"use client";

import { Plug, ShieldCheck, Brain, Cpu, Server } from "lucide-react";

const SUMMARY = [
  { Icon: Plug,        bg: "rgba(245,158,11,0.04)",  border: "rgba(245,158,11,0.12)",  iconBg: "rgba(245,158,11,0.08)",  color: "text-amber-600",  label: "Application",  sub: "APIs & Integration" },
  { Icon: ShieldCheck, bg: "rgba(20,184,166,0.04)",  border: "rgba(20,184,166,0.12)",  iconBg: "rgba(20,184,166,0.08)",  color: "text-teal-600",   label: "Governance",   sub: "Policy & Audit" },
  { Icon: Brain,       bg: "rgba(14,165,233,0.04)",  border: "rgba(14,165,233,0.12)",  iconBg: "rgba(14,165,233,0.08)",  color: "text-sky-600",    label: "Intelligence", sub: "SLMs & Agents" },
  { Icon: Cpu,         bg: "rgba(99,102,241,0.04)",  border: "rgba(99,102,241,0.15)",  iconBg: "rgba(99,102,241,0.1)",   color: "text-indigo-600", label: "Mentis OS",    sub: "Control Plane" },
  { Icon: Server,      bg: "rgba(236,72,153,0.04)",  border: "rgba(236,72,153,0.12)",  iconBg: "rgba(236,72,153,0.08)",  color: "text-pink-600",   label: "Infrastructure", sub: "4 Deploy Models" },
];

function StackCell({ label, sub, bg, border, bold }) {
  return (
    <div className="p-2.5 rounded-lg text-center" style={{ background: bg, border: `1px solid ${border}` }}>
      <p className={`text-[11px] font-medium ${bold ? "text-indigo-700" : "text-gray-700"}`}>{label}</p>
      {sub && <p className="text-[9px] text-gray-400 font-light">{sub}</p>}
    </div>
  );
}

export default function ArchitectureStack() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb" style={{ width: 400, height: 400, background: "rgba(99,102,241,0.04)", top: "5%", right: "-5%" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[10px] text-indigo-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Full Architecture</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">Deployment Architecture Stack</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light r-up">
            A complete view of all layers — from infrastructure through intelligence to integration — unified by Mentis OS.
          </p>
        </div>

        {/* Summary Pills */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10 r-up">
          {SUMMARY.map(({ Icon, bg, border, iconBg, color, label, sub }) => (
            <div key={label} className="p-4 rounded-xl text-center" style={{ background: bg, border: `1px solid ${border}` }}>
              <div className="w-8 h-8 mx-auto rounded-lg flex items-center justify-center mb-2" style={{ background: iconBg }}>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <p className={`text-xs font-medium ${color}`}>{label}</p>
              <p className="text-gray-400 text-[10px] mt-0.5 font-light">{sub}</p>
            </div>
          ))}
        </div>

        {/* Stack Layers */}
        <div className="space-y-3 r-up">

          {/* Layer 5 – Application */}
          <div className="card-no-hover p-5" style={{ borderLeft: "4px solid #fbbf24" }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] text-amber-500 font-mono tracking-wider uppercase">Layer 5</span>
              <span className="text-sm text-gray-800 font-medium">Application & Integration</span>
              <span className="text-[10px] text-gray-400 font-light ml-auto hidden md:block">Enterprise Systems · APIs · Workflows</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
              {[
                ["Web Console",   "Admin Dashboard"],
                ["REST API",      "External Interface"],
                ["SDK",           "Python / JS / Go"],
                ["CLI Tools",     "Command Line"],
                ["Webhooks",      "Event Callbacks"],
                ["Stream API",    "Real-time Output"],
                ["Observability", "Metrics / Logs"],
              ].map(([l, s]) => (
                <StackCell key={l} label={l} sub={s} bg="rgba(245,158,11,0.04)" border="rgba(245,158,11,0.1)" />
              ))}
            </div>
          </div>

          {/* Layer 4 – Governance */}
          <div className="card-no-hover p-5" style={{ borderLeft: "4px solid #2dd4bf" }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] text-teal-500 font-mono tracking-wider uppercase">Layer 4</span>
              <span className="text-sm text-gray-800 font-medium">Governance & Compliance</span>
              <span className="text-[10px] text-gray-400 font-light ml-auto hidden md:block">Policy · Audit · Explainability · Oversight</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {[
                ["Policy Engine",  "Rules / Constraints"],
                ["Access Control", "RBAC / Permissions"],
                ["Audit Logger",   "Immutable Records"],
                ["Explainability", "Decision Traces"],
                ["Compliance",     "Standards / Reports"],
              ].map(([l, s]) => (
                <StackCell key={l} label={l} sub={s} bg="rgba(20,184,166,0.04)" border="rgba(20,184,166,0.1)" />
              ))}
            </div>
          </div>

          {/* Layer 3 – Intelligence */}
          <div className="card-no-hover p-5" style={{ borderLeft: "4px solid #38bdf8" }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] text-sky-500 font-mono tracking-wider uppercase">Layer 3</span>
              <span className="text-sm text-gray-800 font-medium">Intelligence Layer</span>
              <span className="text-[10px] text-gray-400 font-light ml-auto hidden md:block">SLMs · Agents · Reasoning · Memory</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {[
                ["SLM Models",       ["Reasoning / Planning", "Domain-Optimized"]],
                ["Agent Runtime",    ["Task Execution", "Multi-Step Workflows"]],
                ["Tool Framework",   ["Function Calling", "Sandboxed Execution"]],
                ["Context Manager",  ["Memory / State", "RAG Integration"]],
                ["Orchestrator",     ["Multi-Agent Coord.", "Pipeline Control"]],
              ].map(([label, lines]) => (
                <div key={label} className="p-3 rounded-lg text-center" style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.1)" }}>
                  <p className="text-[11px] text-gray-700 font-medium">{label}</p>
                  {lines.map((ln) => <p key={ln} className="text-[9px] text-gray-400 font-light">{ln}</p>)}
                </div>
              ))}
            </div>
          </div>

          {/* Layer 2 – Mentis OS (highlighted) */}
          <div
            className="p-5 rounded-[20px]"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "2px solid rgba(99,102,241,0.2)",
              borderLeft: "4px solid #6366f1",
              boxShadow: "0 20px 60px -15px rgba(99,102,241,0.04)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] text-indigo-500 font-mono tracking-wider uppercase font-bold">Layer 2</span>
              <span className="text-sm text-gray-800 font-semibold">MENTIS OS</span>
              <span className="text-[10px] text-indigo-400 font-light ml-auto hidden md:block">Unified Control Plane</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
              {[
                ["Scheduler",    "Task Queue"],
                ["Resource Mgr", "Allocation"],
                ["Config Store", "Versioned State"],
                ["Health",       "Liveness / Ready"],
                ["Secret Mgr",   "Credentials"],
                ["Update Ctrl",  "Rollout / Rollback"],
                ["Telemetry",    "Collect"],
              ].map(([l, s]) => (
                <StackCell key={l} label={l} sub={s} bg="rgba(99,102,241,0.06)" border="rgba(99,102,241,0.15)" bold />
              ))}
            </div>
          </div>

          {/* Platform Layer */}
          <div className="card-no-hover p-5" style={{ borderLeft: "4px solid #60a5fa" }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] text-blue-500 font-mono tracking-wider uppercase">Platform</span>
              <span className="text-sm text-gray-800 font-medium">Runtime & Orchestration</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
              {[
                ["Container",     "Docker / Podman"],
                ["K8s / Nomad",   "Orchestration"],
                ["Storage",       "Local / S3 / NFS"],
                ["Networking",    "Service Mesh"],
                ["Load Balancer", "Traffic Mgmt"],
                ["Registry",      "Images / Artifacts"],
                ["DNS",           "Discovery"],
              ].map(([l, s]) => (
                <StackCell key={l} label={l} sub={s} bg="rgba(59,130,246,0.04)" border="rgba(59,130,246,0.1)" />
              ))}
            </div>
          </div>

          {/* Infrastructure Layer */}
          <div className="card-no-hover p-5" style={{ borderLeft: "4px solid #f472b6" }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] text-pink-500 font-mono tracking-wider uppercase">Infrastructure</span>
              <span className="text-sm text-gray-800 font-medium">Hardware & Compute</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
              {["GPU Compute", "CPU Compute", "Memory", "Block Storage", "Network I/O", "HSM / TPM", "Edge Nodes"].map((l) => (
                <StackCell key={l} label={l} bg="rgba(236,72,153,0.04)" border="rgba(236,72,153,0.1)" />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-6 r-up">
          <p className="text-[11px] text-gray-400 font-light">
            Deploys identically across:{" "}
            <span className="text-indigo-500">On-Premise</span> ·{" "}
            <span className="text-sky-500">Private Cloud</span> ·{" "}
            <span className="text-teal-500">Hybrid</span> ·{" "}
            <span className="text-pink-500">Air-Gapped</span>
          </p>
        </div>
      </div>
    </section>
  );
}