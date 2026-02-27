"use client";

import { Rocket, Building, Cloud, WifiOff } from "lucide-react";

const deployModes = [
  {
    icon: <Building className="w-4 h-4 text-emerald-500" />,
    label: "On-Premise", labelColor: "text-emerald-700",
    bg: "bg-emerald-500/[0.03]", border: "border-emerald-500/[0.1]",
    checks: ["Your hardware, your keys", "Full RBAC + SSO", "Zero data egress", "GPU cluster support"],
  },
  {
    icon: <Cloud className="w-4 h-4 text-blue-500" />,
    label: "Private Cloud (VPC)", labelColor: "text-blue-700",
    bg: "bg-blue-500/[0.03]", border: "border-blue-500/[0.1]",
    checks: ["Single-tenant isolation", "Customer-managed keys", "AWS / Azure / GCP", "Scales with demand"],
  },
  {
    icon: <WifiOff className="w-4 h-4 text-violet-500" />,
    label: "Air-Gapped", labelColor: "text-violet-700",
    bg: "bg-violet-500/[0.03]", border: "border-violet-500/[0.1]",
    checks: ["Zero network surface", "ITAR / IL5+ compliant", "Sneakernet updates", "Tamper-evident logging"],
  },
];

export default function TechDeployment() {
  return (
    <section className="py-48 relative section-bg-warm" id="deployment">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[600px] h-[500px] bg-violet-500/[0.03]" style={{ top: "5%", right: "20%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="section-badge bg-violet-500/[0.06] border border-violet-500/[0.12] mb-10 r-up inline-flex">
            <Rocket className="w-3 h-3 text-violet-500" />
            <span className="text-violet-700 text-[10px] font-medium tracking-[0.3em] uppercase font-mono">Deployment Philosophy</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-[5.5rem] r-up">
            Designed for Deployment,<br />
            <span className="text-gradient-violet">Not Demonstration</span>
          </h2>
        </div>

        {/* Deployment Configurator Mock */}
        <div className="max-w-4xl mx-auto mb-16 r-scale">
          <div className="industry-mock" style={{ boxShadow: "var(--shadow-violet)" }}>
            <div className="mock-header">
              <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
              <span className="text-[9px] text-gray-500 font-mono ml-2">genovation — deployment configurator</span>
            </div>
            <div className="p-5 font-mono">
              <div className="term-line">
                <span className="term-prompt">$</span>
                <span className="term-cmd">genovation deploy --list-modes</span>
              </div>
              <div className="term-separator" />
              <div className="grid grid-cols-3 gap-4 mt-3 mb-4">
                {deployModes.map((m, i) => (
                  <div key={i} className={`p-4 rounded-xl ${m.bg} border ${m.border}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {m.icon}
                      <span className={`text-[10px] ${m.labelColor} font-medium`}>{m.label}</span>
                    </div>
                    <div className="space-y-1 text-[8px] text-gray-400">
                      {m.checks.map((c, j) => <div key={j}>✓ {c}</div>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="term-separator" />
              <div className="term-line">
                <span className="term-prompt">$</span>
                <span className="term-cmd">genovation deploy --mode on-premise --verify</span>
              </div>
              <div className="term-output mt-1.5">
                <span className="text-emerald-600">✓</span> External AI APIs:{" "}
                <span className="text-emerald-600">NONE</span> ·{" "}
                <span className="text-emerald-600">✓</span> Cloud lock-in:{" "}
                <span className="text-emerald-600">NONE</span> ·{" "}
                <span className="text-emerald-600">✓</span> Opaque paths:{" "}
                <span className="text-emerald-600">NONE</span>
              </div>
              <div className="term-output">All pre-flight checks passed. Ready to deploy.</div>
              <div className="term-line mt-1">
                <span className="term-prompt">$</span>
                <span className="term-cmd"><span className="typing-cursor" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
