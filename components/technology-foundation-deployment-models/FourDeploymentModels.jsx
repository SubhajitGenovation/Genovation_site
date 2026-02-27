"use client";

import { Server, Cloud, GitMerge, ShieldOff } from "lucide-react";

const MODELS = [
  {
    icon: Server,
    iconColor: "text-indigo-500",
    iconBg: "rgba(99,102,241,0.08)",
    iconBorder: "rgba(99,102,241,0.12)",
    title: "On-Premise",
    subtitle: "Data Sovereignty",
    subtitleColor: "text-indigo-500",
    badge: "Full Control",
    badgeBg: "rgba(99,102,241,0.06)",
    badgeColor: "text-indigo-500",
    badgeBorder: "rgba(99,102,241,0.1)",
    hoverClass: "card-indigo",
    desc: "Deployed entirely within customer infrastructure. No outbound data movement. Air-gap compatible.",
    features: ["Customer Infra", "Zero Outbound", "Hardware Control", "Air-Gap Ready"],
    tags: ["Defense", "Finance", "Government"],
  },
  {
    icon: Cloud,
    iconColor: "text-sky-500",
    iconBg: "rgba(14,165,233,0.08)",
    iconBorder: "rgba(14,165,233,0.12)",
    title: "Private Cloud",
    subtitle: "Controlled Environment",
    subtitleColor: "text-sky-500",
    badge: "Isolated",
    badgeBg: "rgba(14,165,233,0.06)",
    badgeColor: "text-sky-600",
    badgeBorder: "rgba(14,165,233,0.1)",
    hoverClass: "card-sky",
    desc: "Deployed within private VPCs or enterprise networks. No shared inference. Controlled ingress/egress.",
    features: ["Private VPCs", "Dedicated", "Tenant Isolation", "Traffic Control"],
    tags: ["Enterprise", "Multi-Region", "Compliance"],
  },
  {
    icon: GitMerge,
    iconColor: "text-teal-500",
    iconBg: "rgba(20,184,166,0.08)",
    iconBorder: "rgba(20,184,166,0.12)",
    title: "Hybrid",
    subtitle: "Balanced Flexibility",
    subtitleColor: "text-teal-500",
    badge: "Unified",
    badgeBg: "rgba(20,184,166,0.06)",
    badgeColor: "text-teal-600",
    badgeBorder: "rgba(20,184,166,0.1)",
    hoverClass: "card-teal",
    desc: "Core intelligence on-premise, select integrations across zones. Unified governance via Mentis OS.",
    features: ["Local Core", "Selective Sync", "Cross-Zone Gov.", "Central Oversight"],
    tags: ["Legacy + Modern", "Gradual Adoption"],
  },
  {
    icon: ShieldOff,
    iconColor: "text-pink-500",
    iconBg: "rgba(236,72,153,0.08)",
    iconBorder: "rgba(236,72,153,0.12)",
    title: "Air-Gapped",
    subtitle: "Maximum Isolation",
    subtitleColor: "text-pink-500",
    badge: "Offline",
    badgeBg: "rgba(236,72,153,0.06)",
    badgeColor: "text-pink-600",
    badgeBorder: "rgba(236,72,153,0.1)",
    hoverClass: "card-pink",
    desc: "No external connectivity. Offline inference and agent execution. Secure artifact delivery.",
    features: ["Zero Network", "Offline Inference", "Secure Updates", "Full Audit"],
    tags: ["Defense", "Critical Infra", "High-Security"],
  },
];

export default function FourDeploymentModels() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb" style={{ width: 350, height: 350, background: "rgba(59,130,246,0.04)", bottom: "5%", right: "-3%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] text-indigo-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Supported Models</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">Four Deployment Models</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light r-up">
            Choose the model that fits your infrastructure. All deliver identical intelligence, governance, and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {MODELS.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.title} className={`card ${m.hoverClass} p-6 r-up`}>
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: m.iconBg, border: `1px solid ${m.iconBorder}` }}
                    >
                      <Icon className={`w-6 h-6 ${m.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-gray-800">{m.title}</h3>
                      <p className={`text-xs font-light ${m.subtitleColor}`}>{m.subtitle}</p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider ${m.badgeColor}`}
                    style={{ background: m.badgeBg, border: `1px solid ${m.badgeBorder}` }}
                  >
                    {m.badge}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mb-5 font-light leading-relaxed">{m.desc}</p>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {m.features.map((f) => (
                    <div key={f} className="p-2.5 rounded-lg text-center" style={{ background: "#f5f3f0" }}>
                      <p className="text-gray-600 text-xs font-light">{f}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.04)" }}>
                  <div className="flex flex-wrap gap-1.5">
                    {m.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px] font-light">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}