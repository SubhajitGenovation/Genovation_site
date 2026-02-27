"use client";

import { Rocket, Network, BrainCircuit, Lock, Shield } from "lucide-react";

const ongoingCards = [
  {
    icon: <Network className="w-6 h-6 text-blue-600" />,
    iconBg: "bg-blue-500/[0.1]",
    border: "rgba(99,102,241,0.12)",
    badgeBg: "bg-blue-500/[0.1]",
    badgeText: "text-blue-600",
    status: "IN PROGRESS",
    title: "Multi-Agent Governance",
    desc: "How do you maintain governance when hundreds of agents operate simultaneously? Developing frameworks for conflict resolution and distributed oversight.",
    side: "r-left",
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-violet-600" />,
    iconBg: "bg-violet-500/[0.1]",
    border: "rgba(139,92,246,0.12)",
    badgeBg: "bg-violet-500/[0.1]",
    badgeText: "text-violet-600",
    status: "PLANNED",
    title: "Real-Time Explainability",
    desc: "Generating human-readable explanations from autonomous decisions in high-stakes environments — without adding latency.",
    side: "r-right",
  },
  {
    icon: <Lock className="w-6 h-6 text-emerald-600" />,
    iconBg: "bg-emerald-500/[0.1]",
    border: "rgba(16,185,129,0.12)",
    badgeBg: "bg-emerald-500/[0.1]",
    badgeText: "text-emerald-600",
    status: "IN PROGRESS",
    title: "Encrypted ML Workflows",
    desc: "Practical applications of homomorphic encryption and MPC for enterprise-scale analytics on sensitive data.",
    side: "r-left",
  },
  {
    icon: <Shield className="w-6 h-6 text-rose-500" />,
    iconBg: "bg-rose-500/[0.08]",
    border: "rgba(244,63,94,0.12)",
    badgeBg: "bg-rose-500/[0.08]",
    badgeText: "text-rose-500",
    status: "PLANNED",
    title: "Long-Horizon Security",
    desc: "Security architectures that remain viable as threats evolve — including post-quantum readiness and crypto-agility.",
    side: "r-right",
  },
];

export default function ResearchOngoing() {
  return (
    <section className="py-48 relative" id="ongoing">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-emerald-500/[0.05]" style={{ top: "10%", left: "15%" }} />
      <div className="orb w-[400px] h-[400px] bg-violet-500/[0.04]" style={{ bottom: "10%", right: "20%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
            <Rocket className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">What's Next</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Ongoing<br /><span className="text-gradient">Research</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            Active research directions we're pursuing. Publication decisions are based on maturity, risk, and strategic relevance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ongoingCards.map((c, i) => (
            <div key={i} className={c.side}>
              <div className="card p-8 h-full" style={{ borderColor: c.border }}>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center`}>{c.icon}</div>
                  <div>
                    <h3 className="text-gray-900 font-medium">{c.title}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${c.badgeBg} ${c.badgeText} font-mono tracking-wider`}>
                      {c.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
