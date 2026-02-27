"use client";

import {
  AlertTriangle, ShieldOff, ShieldCheck, X, Check,
  Swords, ShieldAlert, Unlink,
} from "lucide-react";

const conventionalItems = [
  { title: "Trust the cloud provider", desc: "Provider employees and foreign governments may access your data through legal or extralegal means." },
  { title: "Trust the execution environment", desc: "Shared infrastructure means shared vulnerabilities. Side-channel attacks affect all tenants." },
  { title: "Trust vendors not to log data", desc: "Telemetry and analytics often capture sensitive information indefinitely." },
  { title: "Trust access controls won't be bypassed", desc: "IAM misconfigurations are the #1 cause of cloud breaches." },
  { title: "Trust encryption is sufficient", desc: "Encryption at rest is meaningless if keys are accessible to the provider." },
];

const genovationItems = [
  { title: "Minimize trust dependencies", desc: "Cryptographic enforcement replaces contractual promises. Guarantees hold even when providers are compromised." },
  { title: "Enforce separation by design", desc: "Architectural isolation ensures one compromise cannot cascade to entire systems." },
  { title: "Remain safe even when compromised", desc: "Defense in depth means breaching one layer doesn't breach all." },
  { title: "Mathematical guarantees, not contracts", desc: "Zero-knowledge proofs and formal verification provide provable security properties." },
  { title: "Post-quantum cryptographic readiness", desc: "NIST-approved lattice-based algorithms protect against current and future quantum threats." },
];

const assumptions = [
  { icon: <Swords className="w-7 h-7 text-rose-500" />, bg: "bg-rose-500/[0.1]", title: "Systems Will Be Attacked", desc: "Nation-states, organized crime, and sophisticated adversaries will target your systems. Attacks are not a matter of if, but when." },
  { icon: <ShieldAlert className="w-7 h-7 text-amber-500" />, bg: "bg-amber-500/[0.12]", title: "Perimeters Will Be Breached", desc: "Every firewall, VPN, and access control can be circumvented. Zero-day exploits and supply chain attacks will penetrate defenses." },
  { icon: <Unlink className="w-7 h-7 text-violet-500" />, bg: "bg-violet-500/[0.1]", title: "Trust Relationships Will Fail", desc: "Vendors get breached, employees turn malicious, partners get compromised, and providers face legal compulsion to access your data." },
];

export default function SecurityProblem() {
  return (
    <section className="py-32 relative overflow-hidden" id="problem">
      <div className="orb w-[600px] h-[500px] bg-rose-500/[0.05]" style={{ top: "10%", right: "20%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/[0.1] border border-rose-500/[0.15] mb-8 r-up">
            <AlertTriangle className="w-3 h-3 text-rose-500" />
            <span className="text-rose-500 text-[11px] font-light tracking-[0.25em] uppercase">The Problem</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Trust is Not a<br /><span className="text-gradient-rose">Control Mechanism</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Most AI systems inherit dangerous trust assumptions from cloud software—assumptions that create systemic
            vulnerabilities in regulated environments.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12" id="problemCards">
          {/* Conventional */}
          <div className="card card-rose p-8 r-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-rose-500/[0.12] flex items-center justify-center">
                <ShieldOff className="w-6 h-6 text-rose-500" />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 font-light">Conventional AI Security</h3>
                <p className="text-[11px] text-rose-400 font-light">Dangerous assumptions that create vulnerabilities</p>
              </div>
            </div>
            <div className="space-y-3">
              {conventionalItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-rose-500/[0.04] border border-rose-500/[0.08]">
                  <X className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-gray-700 font-normal mb-0.5">{item.title}</p>
                    <p className="text-[12px] text-gray-400 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Genovation */}
          <div className="card p-8 r-right" style={{ borderColor: "rgba(6,182,212,0.2)" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/[0.12] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 font-light">Genovation Security IP</h3>
                <p className="text-[11px] text-cyan-500 font-light">Provable, enforceable, resilient security</p>
              </div>
            </div>
            <div className="space-y-3">
              {genovationItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-cyan-500/[0.04] border border-cyan-500/[0.08]">
                  <Check className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-gray-700 font-normal mb-0.5">{item.title}</p>
                    <p className="text-[12px] text-gray-400 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Philosophy */}
        <div className="card p-10 r-up" style={{ borderRadius: "24px" }}>
          <h4 className="text-center text-[15px] text-gray-900 font-light mb-10">
            Security Philosophy: Three Core Assumptions
          </h4>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {assumptions.map((a, i) => (
              <div key={i} className="assumption-card text-center">
                <div className={`w-14 h-14 rounded-full ${a.bg} flex items-center justify-center mx-auto mb-4`}>
                  {a.icon}
                </div>
                <h5 className="text-gray-900 font-normal text-[15px] mb-2">{a.title}</h5>
                <p className="text-[12px] text-gray-400 font-light leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center p-4 rounded-xl bg-cyan-500/[0.05] border border-cyan-500/[0.12]">
            <p className="text-[13px] text-gray-500 font-light">
              <span className="text-gray-900 font-normal">Therefore:</span>
              <span className="text-cyan-600 mx-2">Minimize trust</span>•
              <span className="text-cyan-600 mx-2">Enforce separation</span>•
              <span className="text-cyan-600 mx-2">Remain safe when compromised</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
