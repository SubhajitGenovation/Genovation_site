"use client";

import { Layers, Eye, Settings, GitBranch, UserX, Lock } from "lucide-react";

const layers = [
  {
    num: "LAYER 5", icon: <Eye className="w-5 h-5 text-cyan-600" />, iconBg: "bg-cyan-500/[0.12]",
    border: "rgba(6,182,212,0.2)", label: "text-cyan-600",
    title: "Continuous Monitoring & Auditability",
    desc: "Real-time threat detection · Behavioral analytics · Immutable audit logs · SIEM integration",
    badge: "DETECT", badgeBg: "bg-cyan-500/[0.08]", badgeText: "text-cyan-600",
  },
  {
    num: "LAYER 4", icon: <Settings className="w-5 h-5 text-blue-600" />, iconBg: "bg-blue-500/[0.12]",
    border: "rgba(59,130,246,0.2)", label: "text-blue-600",
    title: "Governed Execution (Mentis AgentOS)",
    desc: "Policy engine · Human-in-the-loop · Kill switch · Rollback capabilities",
    badge: "ENFORCE", badgeBg: "bg-blue-500/[0.08]", badgeText: "text-blue-600",
  },
  {
    num: "LAYER 3", icon: <GitBranch className="w-5 h-5 text-violet-600" />, iconBg: "bg-violet-500/[0.12]",
    border: "rgba(139,92,246,0.2)", label: "text-violet-600",
    title: "Separation of Duties",
    desc: "Vault isolation · Key segmentation · Agent sandboxing · Microsegmentation",
    badge: "ISOLATE", badgeBg: "bg-violet-500/[0.08]", badgeText: "text-violet-600",
  },
  {
    num: "LAYER 2", icon: <UserX className="w-5 h-5 text-amber-600" />, iconBg: "bg-amber-500/[0.12]",
    border: "rgba(251,191,36,0.2)", label: "text-amber-600",
    title: "Anonymization & Data Minimization",
    desc: "PII detection · K-anonymity · Differential privacy · Data masking",
    badge: "PROTECT", badgeBg: "bg-amber-500/[0.08]", badgeText: "text-amber-600",
  },
  {
    num: "LAYER 1", icon: <Lock className="w-5 h-5 text-emerald-600" />, iconBg: "bg-emerald-500/[0.15]",
    border: "rgba(16,185,129,0.25)", label: "text-emerald-600",
    title: "Cryptographic Protection",
    desc: "Post-quantum (PQC) · Homomorphic encryption · HSM · Zero-knowledge proofs",
    badge: "FOUNDATION", badgeBg: "bg-emerald-500/[0.1]", badgeText: "text-emerald-600",
    isFoundation: true,
  },
];

export default function SecurityArchitecture() {
  return (
    <section className="py-32 relative overflow-hidden" id="architecture">
      <div className="orb w-[600px] h-[400px] bg-amber-500/[0.05]" style={{ top: "20%", right: "5%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/[0.1] border border-amber-500/[0.15] mb-8 r-up">
            <Layers className="w-3 h-3 text-amber-600" />
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">Security Architecture</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Defense<br /><span className="text-gradient">in Depth</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Five independent security layers. An attacker must simultaneously compromise all five for a successful
            breach—probability &lt; 10<sup>-15</sup>.
          </p>
        </div>

        {/* Layer Stack */}
        <div className="max-w-4xl mx-auto mb-16 space-y-3" id="layerStack">
          {layers.map((l, i) => (
            <div
              key={i}
              className="card p-6 r-up"
              style={{
                borderColor: l.border,
                borderRadius: "16px",
                background: l.isFoundation ? "rgba(255,255,255,0.9)" : undefined,
              }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg ${l.iconBg} flex items-center justify-center flex-shrink-0`}>
                  {l.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-[11px] ${l.label} font-mono`}>{l.num}</span>
                    <h4 className="text-[14px] text-gray-900 font-normal">{l.title}</h4>
                  </div>
                  <p className="text-[12px] text-gray-400 font-light">{l.desc}</p>
                </div>
                <span className={`px-3 ${l.isFoundation ? "py-1.5" : "py-1"} rounded-full ${l.badgeBg} ${l.badgeText} text-[10px] ${l.isFoundation ? "font-normal" : "font-light"} flex-shrink-0`}>
                  {l.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto r-up">
          <div className="text-center p-6 rounded-xl bg-white/60 border border-black/[0.06]">
            <p className="text-4xl font-light text-gray-900 mb-1">5</p>
            <p className="text-[11px] text-gray-500 font-light">Independent Layers</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/60 border border-black/[0.06]">
            <p className="text-4xl font-light text-gray-900 mb-1">&lt;10<sup className="text-lg">-15</sup></p>
            <p className="text-[11px] text-gray-500 font-light">Simultaneous Failure</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/60 border border-black/[0.06]">
            <p className="text-4xl font-light text-gray-900 mb-1">100%</p>
            <p className="text-[11px] text-gray-500 font-light">Redundant Protection</p>
          </div>
        </div>
      </div>
    </section>
  );
}
