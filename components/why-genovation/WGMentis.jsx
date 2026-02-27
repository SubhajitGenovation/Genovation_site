"use client";
import { Layers, Bot, Shield, Lock } from "lucide-react";

export default function WGMentis() {
  return (
    <section id="mentis" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-violet-500/[0.05]" style={{ top: "10%", right: "10%" }} />
      <div className="orb w-[400px] h-[300px] bg-emerald-500/[0.04]" style={{ bottom: "15%", left: "25%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.15] mb-8 r-up">
            <Layers className="w-3 h-3 text-violet-500" />
            <span className="text-violet-500 text-[11px] font-light tracking-[0.25em] uppercase">Mentis OS</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            The Operating System for<br /><span className="text-gradient">Trusted AI</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto r-up">
            A complete runtime for deploying, governing, and auditing AI agents.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Orbital Diagram */}
          <div className="relative h-[480px] flex items-center justify-center r-scale">
            <div className="orbit-ring w-[380px] h-[380px] rot-slow" style={{ left: "50%", top: "50%", transformOrigin: "center", marginLeft: -190, marginTop: -190 }} />
            <div className="orbit-ring w-[300px] h-[300px] rot-rev" style={{ left: "50%", top: "50%", marginLeft: -150, marginTop: -150, borderColor: "rgba(59,130,246,0.1)" }} />
            <div className="orbit-ring w-[220px] h-[220px] rot-slow" style={{ left: "50%", top: "50%", marginLeft: -110, marginTop: -110, borderColor: "rgba(6,182,212,0.08)", animationDuration: "20s" }} />

            {/* Core */}
            <div className="relative z-10">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-500/10 to-cyan-500/10 flex items-center justify-center" style={{ boxShadow: "0 0 60px -10px rgba(139,92,246,0.15)" }}>
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center border border-violet-500/20">
                  <span className="font-medium text-lg text-gradient">Mentis</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border border-violet-500/20" style={{ animation: "pulseRing 2.5s ease-out infinite" }} />
              <div className="absolute inset-0 rounded-full border border-cyan-500/15" style={{ animation: "pulseRing 2.5s ease-out infinite 0.7s" }} />
            </div>

            {/* Nodes */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 float-y">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/80 rounded-xl border border-black/[0.06] shadow-sm">
                <Bot className="w-4 h-4 text-cyan-500" /><span className="text-sm font-light text-gray-700">Agents</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 float-y-d1">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/80 rounded-xl border border-black/[0.06] shadow-sm">
                <Shield className="w-4 h-4 text-emerald-500" /><span className="text-sm font-light text-gray-700">JUDGE</span>
              </div>
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 float-y-d2">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/80 rounded-xl border border-black/[0.06] shadow-sm">
                <svg className="w-4 h-4 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.16Z"/></svg>
                <span className="text-sm font-light text-gray-700">Reasoning</span>
              </div>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 float-y-d3">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/80 rounded-xl border border-black/[0.06] shadow-sm">
                <Lock className="w-4 h-4 text-blue-500" /><span className="text-sm font-light text-gray-700">Vault</span>
              </div>
            </div>
          </div>

          {/* Module Cards */}
          <div className="grid grid-cols-2 gap-4" id="mentisCards">
            {[
              { iconBg: "bg-cyan-500/[0.1]", icon: <Bot className="w-5 h-5 text-cyan-500" />, title: "Agent Orchestration", desc: "Multi-agent coordination with DAG-based workflows and automatic retry/failover.", tagBg: "bg-cyan-500/[0.06]", tagText: "text-cyan-600", tags: ["async", "dag", "retry"] },
              { iconBg: "bg-violet-500/[0.1]", icon: <svg className="w-5 h-5 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44"/></svg>, title: "Reasoning Engine", desc: "Chain-of-thought with RAG integration and tool calling capabilities.", tagBg: "bg-violet-500/[0.06]", tagText: "text-violet-600", tags: ["cot", "rag", "tool"] },
              { iconBg: "bg-emerald-500/[0.1]", icon: <Shield className="w-5 h-5 text-emerald-500" />, title: "JUDGE Framework", desc: "Policy enforcement with audit trails and human-in-the-loop checkpoints.", tagBg: "bg-emerald-500/[0.06]", tagText: "text-emerald-600", tags: ["policy", "audit", "hitl"] },
              { iconBg: "bg-blue-500/[0.1]", icon: <Lock className="w-5 h-5 text-blue-500" />, title: "CipherVault", desc: "Post-quantum E2EE vault for high-value data. HSM-backed key management with zero plaintext exposure.", tagBg: "bg-blue-500/[0.06]", tagText: "text-blue-600", tags: ["e2ee", "pq-tls", "hsm"] },
            ].map(({ iconBg, icon, title, desc, tagBg, tagText, tags }) => (
              <div key={title} className="card p-6">
                <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>{icon}</div>
                <h3 className="font-normal text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 font-light mb-4 leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => <span key={t} className={`px-2.5 py-1 rounded-lg ${tagBg} text-xs font-mono ${tagText}`}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
