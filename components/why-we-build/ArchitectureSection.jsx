"use client";
import { Layers, Server, Brain, Eye, Lock, Cpu, TrendingDown, Shield, Target, Link, GitBranch, ListChecks, ClipboardCheck, Atom, RadioTower, FileLock, X, Check } from "lucide-react";

const pillars = [
  {
    icon: <Server className="w-7 h-7 text-blue-600" />, iconBg: "bg-blue-500/[0.1] border-blue-500/[0.2]",
    title: "Data Sovereignty by Architecture",
    desc: "Every system runs entirely within the customer's environment. This is not a feature toggle — it is the architectural foundation.",
    items: [
      { icon: <X className="w-4 h-4 text-gray-400" />, text: "No external API calls — ever", green: false },
      { icon: <X className="w-4 h-4 text-gray-400" />, text: "No third-party model dependencies", green: false },
      { icon: <X className="w-4 h-4 text-gray-400" />, text: "No data movement outside enterprise boundaries", green: false },
      { icon: <Check className="w-4 h-4 text-emerald-600" />, text: "On-premise, private network, air-gapped from day one", green: true },
    ],
  },
  {
    icon: <Brain className="w-7 h-7 text-amber-600" />, iconBg: "bg-amber-500/[0.1] border-amber-500/[0.2]",
    title: "Proprietary Domain-Specific SLMs",
    desc: "We develop our own Small Language Models. Not fine-tuned open-source. Not distilled from larger models. Patent-pending SDCA mechanism.",
    items: [
      { icon: <Cpu className="w-4 h-4 text-amber-600" />, text: "Deploys on commodity enterprise GPUs", green: false },
      { icon: <TrendingDown className="w-4 h-4 text-amber-600" />, text: "Predictable, sustainable inference cost", green: false },
      { icon: <Shield className="w-4 h-4 text-amber-600" />, text: "Smaller attack surface — easier to govern", green: false },
      { icon: <Target className="w-4 h-4 text-amber-600" />, text: "Domain expertise general-purpose models cannot match", green: false },
    ],
  },
  {
    icon: <Eye className="w-7 h-7 text-emerald-600" />, iconBg: "bg-emerald-500/[0.1] border-emerald-500/[0.2]",
    title: "Explainability as First-Class",
    desc: "Every output is traceable, auditable, and defensible. In regulated industries, this is not a nice-to-have — it is a deployment prerequisite.",
    items: [
      { icon: <Link className="w-4 h-4 text-emerald-600" />, text: "Every answer links to source data", green: false },
      { icon: <GitBranch className="w-4 h-4 text-emerald-600" />, text: "Every reasoning path logged and inspectable", green: false },
      { icon: <ListChecks className="w-4 h-4 text-emerald-600" />, text: "Every agent action recorded with full decision lineage", green: false },
      { icon: <ClipboardCheck className="w-4 h-4 text-emerald-600" />, text: "Reviewable by auditors, regulators, and leadership", green: false },
    ],
  },
  {
    icon: <Lock className="w-7 h-7 text-violet-600" />, iconBg: "bg-violet-500/[0.1] border-violet-500/[0.2]",
    title: "Cryptographic Security Depth",
    desc: "Security beyond standard enterprise controls. Years of research and engineering. Exceptionally difficult to replicate.",
    items: [
      { icon: <Atom className="w-4 h-4 text-violet-600" />, text: "Post-quantum cryptography — lattice-based encryption", green: false },
      { icon: <Lock className="w-4 h-4 text-violet-600" />, text: "CipherVault — computation on encrypted data", green: false },
      { icon: <RadioTower className="w-4 h-4 text-violet-600" />, text: "Secure agent communication — zero implicit trust", green: false },
      { icon: <FileLock className="w-4 h-4 text-violet-600" />, text: "Immutable audit trails — cryptographically verifiable", green: false },
    ],
  },
];

export default function ArchitectureSection() {
  return (
    <section className="py-32 relative" id="architecture">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.04]" style={{ top: "30%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.2] mb-6 r-up">
            <Layers className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[10px] font-mono tracking-[0.2em] uppercase">Architecture</span>
          </div>
          <h2 className="display-section text-4xl md:text-5xl lg:text-6xl r-up">Four Engineering Pillars</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="pillar-card r-up">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${p.iconBg}`}>{p.icon}</div>
                <h3 className="text-xl font-light text-gray-800">{p.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-light mb-5">{p.desc}</p>
              <div className="space-y-2">
                {p.items.map((item) => (
                  <div key={item.text} className={`flex items-center gap-3 p-3 rounded-lg ${item.green ? "bg-emerald-500/[0.06] border border-emerald-500/[0.1]" : "bg-black/[0.03]"}`}>
                    {item.icon}
                    <span className={`text-sm font-light ${item.green ? "text-gray-700" : "text-gray-600"}`}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
