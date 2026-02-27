"use client";

import { Microscope, ScanSearch, GitBranch, Gauge, Lock } from "lucide-react";

const themes = [
  {
    accent: "cyan",
    icon: <ScanSearch className="w-8 h-8 text-cyan-600" />,
    iconBg: "bg-cyan-500/[0.1]",
    border: "rgba(6,182,212,0.12)",
    titleGrad: "text-gradient-cyan",
    title: "Explainable",
    titleRest: "& Governed AI",
    desc: "Making AI decisions traceable, auditable, and defensible — not just accurate.",
    tags: [{ label: "Decision Tracing" }, { label: "Audit Logging" }, { label: "Policy Alignment" }],
    tagCls: "bg-cyan-500/[0.08] text-cyan-700",
    whyBg: "bg-cyan-500/[0.04] border-cyan-400/[0.1]",
    whyText: "text-cyan-700",
    whyDot: "bg-cyan-500",
    whyEmph: "text-cyan-600",
    why: <>When a financial services firm deploys an AI system that makes lending decisions, regulators don't just want to know the decision — they want to know <em className="text-cyan-600">why</em>. When a healthcare AI recommends a treatment, clinicians need to understand the reasoning to trust it.</>,
    solvingCss: "var(--cyan)",
    solving: [
      { title: "Traceability Across Layers", sub: "Maintain audit trail from raw data through reasoning to final action" },
      { title: "Continuous Validation", sub: "Verify agent behavior in real-time without killing performance" },
      { title: "Policy Enforcement", sub: "Ensure AI outputs align with enterprise policies automatically" },
      { title: "Human-Readable Explanations", sub: "Generate explanations non-technical stakeholders understand" },
    ],
  },
  {
    accent: "violet",
    icon: <GitBranch className="w-8 h-8 text-violet-600" />,
    iconBg: "bg-violet-500/[0.1]",
    border: "rgba(139,92,246,0.12)",
    titleGrad: "text-gradient-violet",
    title: "Agentic",
    titleRest: "Architectures",
    desc: "Orchestrating autonomous agents within strict governance boundaries.",
    tags: [{ label: "Agent Orchestration" }, { label: "Bounded Autonomy" }, { label: "Conflict Resolution" }],
    tagCls: "bg-violet-500/[0.08] text-violet-700",
    whyBg: "bg-violet-500/[0.04] border-violet-400/[0.1]",
    whyText: "text-violet-700",
    whyDot: "bg-violet-500",
    whyEmph: "text-violet-600",
    why: <>The next generation of enterprise AI isn't a single model — it's a system of agents working together. When multiple autonomous agents operate on shared resources, conflicts emerge. The question isn't whether to deploy agents — it's how to deploy them <em className="text-violet-600">safely</em>.</>,
    solvingCss: "var(--violet)",
    solving: [
      { title: "Bounded Autonomy", sub: "Give agents freedom to be useful while preventing harmful actions" },
      { title: "Multi-Agent Coordination", sub: "Multiple agents working together without stepping on each other" },
      { title: "Conflict Detection", sub: "When agents disagree, detect conflicts before they cause problems" },
      { title: "Governance at Scale", sub: "Maintain oversight with hundreds of agents operating simultaneously" },
    ],
  },
  {
    accent: "emerald",
    icon: <Gauge className="w-8 h-8 text-emerald-600" />,
    iconBg: "bg-emerald-500/[0.1]",
    border: "rgba(16,185,129,0.12)",
    titleGrad: "text-gradient-emerald",
    title: "Efficiency-Driven",
    titleRest: "Intelligence",
    desc: "Enterprise-grade reasoning without enterprise-hostile infrastructure requirements.",
    tags: [{ label: "Small Language Models" }, { label: "On-Premise" }, { label: "Low Latency" }],
    tagCls: "bg-emerald-500/[0.08] text-emerald-700",
    whyBg: "bg-emerald-500/[0.04] border-emerald-400/[0.1]",
    whyText: "text-emerald-700",
    whyDot: "bg-emerald-500",
    whyEmph: "text-emerald-600",
    why: <>The largest language models require cloud infrastructure that many enterprises can't use. Sensitive data can't leave the building. Air-gapped environments can't call external APIs. If enterprise AI only works in the cloud, <em className="text-emerald-600">it doesn't work for enterprises that need it most</em>.</>,
    solvingCss: "var(--emerald)",
    solving: [
      { title: "Task-Specialized Models", sub: "Smaller, focused models outperforming giants on specific workloads" },
      { title: "On-Premise Viability", sub: "Minimum compute required for meaningful AI in constrained environments" },
      { title: "Sub-50ms Inference", sub: "Achieving real-time performance for live decision-making" },
      { title: "Air-Gap Compatibility", sub: "AI systems that never touch the internet" },
    ],
  },
  {
    accent: "amber",
    icon: <Lock className="w-8 h-8 text-amber-600" />,
    iconBg: "bg-amber-500/[0.1]",
    border: "rgba(245,158,11,0.12)",
    titleGrad: "text-gradient-amber",
    title: "Secure",
    titleRest: "& Privacy-Preserving",
    desc: "Generating insights without exposing sensitive data — ever.",
    tags: [{ label: "Encrypted Compute" }, { label: "Zero-Knowledge" }, { label: "Post-Quantum" }],
    tagCls: "bg-amber-500/[0.08] text-amber-700",
    whyBg: "bg-amber-500/[0.04] border-amber-400/[0.1]",
    whyText: "text-amber-700",
    whyDot: "bg-amber-500",
    whyEmph: "text-amber-600",
    why: <>Some of the most valuable AI applications require access to data that can never be shared. Healthcare organizations want to collaborate without exposing patient records. Financial institutions want to detect fraud without revealing customer data. <em className="text-amber-600">The value is in the insight, not the exposure.</em></>,
    solvingCss: "var(--amber)",
    solving: [
      { title: "Computation on Encrypted Data", sub: "Run analytics without ever decrypting underlying data" },
      { title: "Cross-Org Collaboration", sub: "Multiple parties compute on shared data without trusting each other" },
      { title: "Post-Quantum Readiness", sub: "Protect data that needs to stay secure for 20+ years" },
      { title: "Identity-Preserving Analytics", sub: "Maintain data owner control when data is used by others" },
    ],
  },
];

export default function ResearchThemes() {
  return (
    <section className="py-48 relative" id="researchThemes">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[700px] h-[500px] bg-violet-500/[0.05]" style={{ top: "5%", right: "15%" }} />
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.04]" style={{ bottom: "15%", left: "5%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.2] mb-8 r-up">
            <Microscope className="w-3 h-3 text-violet-600" />
            <span className="text-violet-600 text-[11px] font-light tracking-[0.25em] uppercase">Research Focus</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            What We<br /><span className="text-gradient">Research</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto mt-6 leading-relaxed r-up">
            Four interconnected research themes addressing the fundamental challenges of deploying AI in environments where{" "}
            <span className="text-gray-900 font-medium">failure has real consequences.</span>
          </p>
        </div>

        <div className="space-y-10">
          {themes.map((t, i) => (
            <div key={i} className="r-up">
              <div
                className={`card theme-card ${t.accent}-accent p-10`}
                style={{ borderColor: t.border }}
              >
                <div className="grid lg:grid-cols-3 gap-10">
                  {/* Left */}
                  <div className="lg:col-span-1">
                    <div className={`w-16 h-16 rounded-2xl ${t.iconBg} flex items-center justify-center mb-6`}>{t.icon}</div>
                    <h3 className="text-2xl font-light text-gray-900 tracking-tight mb-3">
                      <span className={`${t.titleGrad} font-medium`}>{t.title}</span> {t.titleRest}
                    </h3>
                    <p className="text-gray-500 font-light mb-6">{t.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {t.tags.map((tag, j) => (
                        <span key={j} className={`px-3 py-1.5 rounded-lg ${t.tagCls} text-xs font-light`}>{tag.label}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-2">
                    <div className={`p-5 rounded-xl ${t.whyBg} border mb-6`}>
                      <h4 className={`text-[11px] font-medium ${t.whyText} uppercase tracking-[0.2em] mb-3 flex items-center gap-2`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${t.whyDot}`} />
                        Why This Matters
                      </h4>
                      <p className="text-gray-500 font-light">{t.why}</p>
                    </div>
                    <h4 className={`text-[11px] font-medium ${t.whyText} uppercase tracking-[0.2em] mb-4 flex items-center gap-2`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${t.whyDot}`} />
                      What We're Solving
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {t.solving.map((s, j) => (
                        <div key={j} className="solving-item" style={{ borderLeftColor: t.solvingCss }}>
                          <p className="text-gray-800 font-medium text-sm mb-1">{s.title}</p>
                          <p className="text-xs text-gray-500 font-light">{s.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
