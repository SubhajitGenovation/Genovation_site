"use client";

import { Server, Cloud, WifiOff, Check, PlugZap, CloudOff, Key, FileCheck } from "lucide-react";

const deployCards = [
  {
    icon: <Server className="w-7 h-7 text-emerald-600" />,
    iconBg: "bg-emerald-500/[0.12]",
    cardClass: "card card-emerald",
    title: "On-Premise",
    desc: "Full installation within your datacenter with complete infrastructure control.",
    checks: [
      { text: "Your hardware, your rules", color: "text-emerald-500" },
      { text: "HSM integration (Thales, Entrust)", color: "text-emerald-500" },
      { text: "Kubernetes or bare metal", color: "text-emerald-500" },
      { text: "Air-gap compatible", color: "text-emerald-500" },
      { text: "Full source code audit", color: "text-emerald-500" },
    ],
    controlLabel: "MAXIMUM", controlColor: "text-emerald-600",
  },
  {
    icon: <Cloud className="w-7 h-7 text-cyan-600" />,
    iconBg: "bg-cyan-500/[0.12]",
    cardClass: "card",
    title: "Private Cloud",
    desc: "Deploy within your VPC on AWS, Azure, or GCP with complete network isolation.",
    checks: [
      { text: "Your VPC, your encryption keys", color: "text-cyan-500" },
      { text: "Zero data egress guarantee", color: "text-cyan-500" },
      { text: "Cloud-native auto-scaling", color: "text-cyan-500" },
      { text: "PrivateLink / Private Endpoints", color: "text-cyan-500" },
      { text: "Cloud KMS / CloudHSM", color: "text-cyan-500" },
    ],
    controlLabel: "HIGH", controlColor: "text-cyan-600",
  },
  {
    icon: <WifiOff className="w-7 h-7 text-amber-600" />,
    iconBg: "bg-amber-500/[0.12]",
    cardClass: "card card-amber",
    title: "Air-Gapped",
    desc: "Complete network isolation for classified and highly sensitive environments.",
    checks: [
      { text: "Zero network connectivity", color: "text-amber-500" },
      { text: "Fully offline operation", color: "text-amber-500" },
      { text: "Manual update procedures only", color: "text-amber-500" },
      { text: "SCIF / classified compatible", color: "text-amber-500" },
      { text: "IL4 / IL5 / IL6 ready", color: "text-amber-500" },
    ],
    controlLabel: "CLASSIFIED", controlColor: "text-amber-600",
  },
];

const benefits = [
  { icon: <PlugZap className="w-5 h-5 text-cyan-600" />, title: "No External APIs", desc: "Complete operational independence" },
  { icon: <CloudOff className="w-5 h-5 text-violet-600" />, title: "No Cloud Trust", desc: "No third-party trust assumptions" },
  { icon: <Key className="w-5 h-5 text-emerald-600" />, title: "Full Key Control", desc: "BYOK with customer-owned HSMs" },
  { icon: <FileCheck className="w-5 h-5 text-amber-600" />, title: "Compliance Ready", desc: "FedRAMP, HIPAA, SOC 2, PCI-DSS" },
];

export default function SecurityDeployment() {
  return (
    <section className="py-32 relative overflow-hidden" id="deployment">
      <div className="orb w-[700px] h-[500px] bg-emerald-500/[0.06]" style={{ top: "10%", left: "20%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.15] mb-8 r-up">
            <Server className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Deployment Options</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Sovereign<br /><span className="text-gradient-emerald">by Design</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Deploy anywhere with complete control over your data, keys, and infrastructure. Sovereignty is enforced
            by architecture, not configuration.
          </p>
        </div>

        {/* Deploy Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12" id="deployCards">
          {deployCards.map((d, i) => (
            <div key={i} className={`${d.cardClass} p-8 r-up`} style={{ borderRadius: "24px" }}>
              <div className={`w-14 h-14 rounded-xl ${d.iconBg} flex items-center justify-center mb-6`}>
                {d.icon}
              </div>
              <h3 className="text-xl text-gray-900 font-light mb-2">{d.title}</h3>
              <p className="text-[13px] text-gray-400 font-light mb-6 leading-relaxed">{d.desc}</p>
              <div className="space-y-2.5 mb-6">
                {d.checks.map((c, j) => (
                  <div key={j} className="flex items-center gap-2.5 text-[12px] text-gray-500 font-light">
                    <Check className={`w-3.5 h-3.5 ${c.color}`} /><span>{c.text}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-light">Control Level</span>
                <span className={`text-[12px] ${d.controlColor} font-normal`}>{d.controlLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-4 r-up">
          {benefits.map((b, i) => (
            <div key={i} className="p-5 rounded-xl bg-white/50 border border-black/[0.06] text-center">
              <div className="flex justify-center mb-3">{b.icon}</div>
              <h4 className="text-[13px] text-gray-800 font-normal mb-1">{b.title}</h4>
              <p className="text-[11px] text-gray-400 font-light">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
