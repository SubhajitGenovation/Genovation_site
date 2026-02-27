"use client";

import { Lock, ShieldOff, Atom, LockKeyhole, ScrollText, Check, Vault } from "lucide-react";

const securityPanels = [
  { icon: <ShieldOff className="w-5 h-5 text-emerald-500" />, bg: "bg-emerald-500/[0.03]", border: "border-emerald-500/[0.08]", iconBg: "bg-emerald-500/[0.1]", title: "Zero-Trust", sub: "Every call verified", badge: "✓ ENFORCED", badgeColor: "text-emerald-600" },
  { icon: <Atom className="w-5 h-5 text-violet-500" />, bg: "bg-violet-500/[0.03]", border: "border-violet-500/[0.08]", iconBg: "bg-violet-500/[0.1]", title: "Post-Quantum", sub: "ML-KEM / ML-DSA", badge: "✓ ACTIVE", badgeColor: "text-violet-600" },
  { icon: <LockKeyhole className="w-5 h-5 text-cyan-500" />, bg: "bg-cyan-500/[0.03]", border: "border-cyan-500/[0.08]", iconBg: "bg-cyan-500/[0.1]", title: "E2E Encryption", sub: "Rest + Transit + Use", badge: "✓ ALL STATES", badgeColor: "text-cyan-600" },
  { icon: <ScrollText className="w-5 h-5 text-amber-500" />, bg: "bg-amber-500/[0.03]", border: "border-amber-500/[0.08]", iconBg: "bg-amber-500/[0.1]", title: "Immutable Audit", sub: "Tamper-evident log", badge: "✓ 4,291 ENTRIES", badgeColor: "text-amber-600" },
];

const cipherChecks = [
  "Analytics without exposure", "Mathematical security",
  "Privacy-preserving collab", "Compliance-friendly sharing",
];

export default function TechSecurity() {
  return (
    <section className="py-48 relative section-bg-cool" id="security">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[600px] h-[500px] bg-emerald-500/[0.04]" style={{ top: "10%", left: "40%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="section-badge bg-emerald-500/[0.06] border border-emerald-500/[0.12] mb-10 r-up inline-flex">
            <Lock className="w-3 h-3 text-emerald-500" />
            <span className="text-emerald-700 text-[10px] font-medium tracking-[0.3em] uppercase font-mono">Security Layer</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-[5.5rem] r-up">
            Security & Cryptographic <span className="text-gradient">Foundation</span>
          </h2>
          <p className="text-[15px] text-gray-500 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            Security is not an add-on. It is embedded at every layer.
          </p>
        </div>

        {/* Zero-Trust Monitor Mock */}
        <div className="max-w-5xl mx-auto mb-16 r-scale">
          <div className="industry-mock" style={{ boxShadow: "var(--shadow-emerald)" }}>
            <div className="mock-header">
              <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
              <span className="text-[9px] text-gray-500 font-mono ml-2">security-foundation — zero-trust monitor</span>
              <div className="ml-auto">
                <span className="text-[8px] text-emerald-600 font-mono">ALL LAYERS SECURED</span>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-4 gap-4 mb-6">
                {securityPanels.map((p, i) => (
                  <div key={i} className={`p-4 rounded-xl ${p.bg} border ${p.border} text-center`}>
                    <div className={`w-10 h-10 rounded-lg ${p.iconBg} flex items-center justify-center mx-auto mb-2`}>
                      {p.icon}
                    </div>
                    <div className="text-[11px] font-medium text-gray-800">{p.title}</div>
                    <div className="text-[8px] text-gray-400 mt-1">{p.sub}</div>
                    <div className={`mt-2 text-[9px] ${p.badgeColor} font-mono`}>{p.badge}</div>
                  </div>
                ))}
              </div>

              {/* Verification Chain */}
              <div className="p-4 rounded-xl bg-gray-50/60 border border-gray-200/60 font-mono">
                <div className="text-[9px] text-gray-400 mb-3 tracking-wider">ZERO-TRUST VERIFICATION CHAIN</div>
                <div className="flex items-center gap-2 flex-wrap">
                  {[
                    { num: "①", label: "Request" },
                    { num: "②", label: "mTLS Verify" },
                    { num: "③", label: "Token + RBAC" },
                    { num: "④", label: "Policy Gate" },
                    { num: "⑤", label: "Execute + Log" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="px-3 py-1.5 rounded-lg bg-white border border-emerald-500/[0.15] text-[9px] text-gray-700">
                        <span className="text-emerald-600">{step.num}</span> {step.label}
                      </div>
                      <div className="text-[8px] text-emerald-500">→</div>
                    </div>
                  ))}
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/[0.2] text-[9px] text-emerald-700 font-medium">
                    ✓ Response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CipherVault Card */}
        <div className="card p-10 r-scale" style={{ boxShadow: "var(--shadow-violet)" }}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <Vault className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-800">CipherVault</h3>
                  <p className="text-[12px] text-violet-500 font-light">Trustless Analytics Infrastructure</p>
                </div>
              </div>
              <p className="text-[14px] text-gray-500 font-light mb-6 leading-relaxed">
                Encrypted data vaults analyzed without exposing plaintext.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {cipherChecks.map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-violet-500" />
                    <span className="text-[12px] text-gray-500 font-light">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CipherVault Terminal */}
            <div className="industry-mock">
              <div className="mock-header">
                <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
                <span className="text-[9px] text-gray-500 font-mono ml-2">ciphervault — analytics session</span>
              </div>
              <div className="p-4 font-mono text-[9px] space-y-1.5" style={{ background: "rgba(250,248,245,0.5)" }}>
                <div className="term-line"><span className="term-prompt">$</span><span className="term-cmd">vault query --encrypted</span></div>
                <div className="term-output">Loading vault: org_acme_2025q1.vault</div>
                <div className="term-output">Decryption: <span className="text-violet-500">NONE (homomorphic)</span></div>
                <div className="term-output">Query: avg(revenue) WHERE region='EMEA'</div>
                <div className="term-separator" />
                <div className="term-output">Encrypted computation... <span className="text-emerald-500">done</span></div>
                <div className="term-output">Result: <span className="text-violet-600 font-medium">$4.2M ± 0.3%</span></div>
                <div className="term-output">Plaintext exposed: <span className="text-emerald-600 font-medium">ZERO bytes</span></div>
                <div className="term-output">Audit ref: <span className="text-gray-500">cv-audit-38291</span></div>
                <div className="term-line mt-1"><span className="term-prompt">$</span><span className="term-cmd"><span className="typing-cursor" /></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
