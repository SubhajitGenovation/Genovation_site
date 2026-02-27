"use client";

import {
  Building2, Landmark, HeartPulse, Plane, Shield,
  Boxes, Cpu, Database, Vault, ShieldCheck, Info,
} from "lucide-react";

const industries = [
  {
    cardClass: "card card-emerald",
    icon: <Landmark className="w-5 h-5 text-emerald-600" />,
    iconBg: "bg-emerald-500/[0.12]",
    title: "Financial Services",
    sub: "Investment banks, hedge funds, insurance, trading",
    tags: ["SEC", "FINRA", "PCI-DSS", "SOX"],
    tagBg: "bg-emerald-500/[0.08]", tagText: "text-emerald-600",
  },
  {
    cardClass: "card card-rose",
    icon: <HeartPulse className="w-5 h-5 text-rose-500" />,
    iconBg: "bg-rose-500/[0.12]",
    title: "Healthcare & Life Sciences",
    sub: "Hospitals, pharma, biotech, clinical research",
    tags: ["HIPAA", "FDA 21 CFR", "HITRUST", "GxP"],
    tagBg: "bg-rose-500/[0.08]", tagText: "text-rose-500",
  },
  {
    cardClass: "card",
    icon: <Plane className="w-5 h-5 text-cyan-600" />,
    iconBg: "bg-cyan-500/[0.12]",
    title: "Aerospace & Defense",
    sub: "Defense contractors, aerospace, intelligence",
    tags: ["ITAR", "FedRAMP", "CMMC", "IL4-6"],
    tagBg: "bg-cyan-500/[0.08]", tagText: "text-cyan-600",
  },
  {
    cardClass: "card card-violet",
    icon: <Shield className="w-5 h-5 text-violet-600" />,
    iconBg: "bg-violet-500/[0.12]",
    title: "Government & Critical Infrastructure",
    sub: "Federal agencies, utilities, energy, telecom",
    tags: ["FISMA", "NERC CIP", "TSA", "CISA"],
    tagBg: "bg-violet-500/[0.08]", tagText: "text-violet-600",
  },
];

const ecosystem = [
  { icon: <Cpu className="w-5 h-5 text-gray-500" />, title: "Mentis AgentOS", desc: "Governed autonomous execution with policy enforcement", isCurrent: false },
  { icon: <Database className="w-5 h-5 text-gray-500" />, title: "Enterprise Data Backbone", desc: "Controlled data flow with complete lineage tracking", isCurrent: false },
  { icon: <Vault className="w-5 h-5 text-gray-500" />, title: "CipherVault", desc: "Trustless multi-party computation and analytics", isCurrent: false },
  { icon: <ShieldCheck className="w-5 h-5 text-white" />, title: "Cryptographic & Security IP", desc: "The foundation everything stands on", isCurrent: true },
];

export default function SecurityIndustries() {
  return (
    <section className="py-32 relative overflow-hidden" id="industries">
      <div className="orb w-[600px] h-[500px] bg-cyan-500/[0.05]" style={{ bottom: "10%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Industries */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/[0.1] border border-rose-500/[0.15] mb-8 r-up">
              <Building2 className="w-3 h-3 text-rose-500" />
              <span className="text-rose-500 text-[11px] font-light tracking-[0.25em] uppercase">Target Industries</span>
            </div>
            <h2 className="display-section text-4xl md:text-6xl mb-4 r-up">
              Designed for<br /><span className="text-gradient-rose">Regulated Domains</span>
            </h2>
            <p className="text-[15px] text-gray-500 font-light mb-10 r-up leading-relaxed">
              Built for industries where security failures have catastrophic consequences and regulatory compliance
              is mandatory.
            </p>

            <div className="space-y-4">
              {industries.map((ind, i) => (
                <div key={i} className={`${ind.cardClass} p-5 r-left`} style={{ borderRadius: "16px" }}>
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl ${ind.iconBg} flex items-center justify-center flex-shrink-0`}>
                      {ind.icon}
                    </div>
                    <div>
                      <h4 className="text-[14px] text-gray-800 font-normal mb-1">{ind.title}</h4>
                      <p className="text-[11px] text-gray-400 font-light mb-2">{ind.sub}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.tags.map((tag, j) => (
                          <span key={j} className={`px-2 py-0.5 rounded ${ind.tagBg} ${ind.tagText} text-[9px]`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.15] mb-8 r-up">
              <Boxes className="w-3 h-3 text-cyan-600" />
              <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Ecosystem Integration</span>
            </div>
            <h2 className="display-section text-4xl md:text-6xl mb-4 r-up">
              Part of the<br /><span className="text-gradient">Sovereign Stack</span>
            </h2>
            <p className="text-[15px] text-gray-500 font-light mb-10 r-up leading-relaxed">
              Security IP operates in concert with all Genovation platforms, providing a unified security foundation.
            </p>

            <div className="space-y-4">
              {ecosystem.map((e, i) => (
                <div
                  key={i}
                  className="card p-5 r-right"
                  style={{
                    borderRadius: "16px",
                    ...(e.isCurrent && {
                      borderColor: "rgba(6,182,212,0.25)",
                      background: "linear-gradient(135deg, rgba(6,182,212,0.06), rgba(59,130,246,0.04))",
                    }),
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${e.isCurrent ? "bg-gradient-to-br from-cyan-400 to-blue-400" : "bg-gray-100"}`}>
                      {e.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[14px] text-gray-800 font-normal">{e.title}</h4>
                      <p className={`text-[11px] font-light ${e.isCurrent ? "text-cyan-600" : "text-gray-400"}`}>{e.desc}</p>
                    </div>
                    {e.isCurrent && (
                      <span className="px-3 py-1 rounded-full bg-cyan-500/[0.1] text-cyan-600 text-[10px] font-light">CURRENT</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/50 border border-black/[0.06]">
              <p className="text-[12px] text-gray-400 font-light text-center flex items-center justify-center gap-1">
                <Info className="w-3 h-3 text-gray-400 inline" />
                All platforms share a common security foundation ensuring consistent protection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
