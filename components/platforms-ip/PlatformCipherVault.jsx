"use client";

import { Vault, Lock, Calculator, Key } from "lucide-react";

function CipherFlowDiagram() {
  return (
    <svg className="w-full h-[420px]" viewBox="0 0 400 420">
      <g transform="translate(100,55)"><rect x="-68" y="-35" width="136" height="70" rx="12" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/><text x="0" y="-8" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="500">Your</text><text x="0" y="8" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="500">Organization</text><text x="0" y="23" textAnchor="middle" fill="#059669" fontSize="8" opacity="0.6">Data Owner</text></g>
      <line x1="100" y1="90" x2="100" y2="125" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5"/><text x="113" y="112" fill="#d97706" fontSize="8">encrypt</text>
      <g transform="translate(100,165)">
        <rect x="-55" y="-32" width="110" height="64" rx="12" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5"/>
        <g transform="translate(0,-6)"><rect x="-10" y="0" width="20" height="14" rx="2.5" fill="#d97706"/><path d="M-5,-6 L-5,-3 Q-5,0 0,0 Q5,0 5,-3 L5,-6" fill="none" stroke="#d97706" strokeWidth="2"/></g>
        <text x="0" y="22" textAnchor="middle" fill="#d97706" fontSize="9" fontWeight="500">CipherVault</text>
      </g>
      <path d="M155,165 Q240,165 290,125" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5"/><text x="230" y="155" fill="#7c3aed" fontSize="8">share encrypted</text>
      <g transform="translate(290,90)"><rect x="-55" y="-32" width="110" height="64" rx="12" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5"/><text x="0" y="-5" textAnchor="middle" fill="#0891b2" fontSize="11" fontWeight="500">External</text><text x="0" y="10" textAnchor="middle" fill="#0891b2" fontSize="11" fontWeight="500">Analyst</text><text x="0" y="24" textAnchor="middle" fill="#0891b2" fontSize="8" opacity="0.6">Cannot see data</text></g>
      <line x1="290" y1="122" x2="290" y2="205" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5"/><text x="303" y="168" fill="#0891b2" fontSize="8">compute</text>
      <g transform="translate(290,240)">
        <rect x="-55" y="-30" width="110" height="60" rx="12" fill="rgba(139,92,246,0.05)" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5"/>
        {[-16,0,16].map((cx,i) => (
          <circle key={i} cx={cx} cy="0" r="5" fill="none" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" begin={`${i*0.33}s`}/>
          </circle>
        ))}
        <text x="0" y="22" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="500">Secure Compute</text>
      </g>
      <path d="M235,240 Q150,240 100,200" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/><text x="160" y="232" fill="#059669" fontSize="8">insights only</text>
      <g transform="translate(200,360)"><rect x="-145" y="-28" width="290" height="56" rx="12" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" strokeDasharray="6,3"/><text x="0" y="-5" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="500">Result: Aggregated Insights</text><text x="0" y="12" textAnchor="middle" fill="#059669" fontSize="8" opacity="0.6">No raw data exposed · Mathematical guarantees</text></g>
    </svg>
  );
}

export default function PlatformCipherVault() {
  return (
    <section id="ciphervault" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-rose-500/[0.04]" style={{ top: "15%", right: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/[0.08] border border-rose-500/[0.15] mb-8 r-up">
            <Vault className="w-3 h-3 text-rose-600" />
            <span className="text-rose-600 text-[11px] font-light tracking-[0.25em] uppercase">Cryptographic Infrastructure</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            <span className="text-gradient-violet">CipherVault</span>
          </h2>
          <p className="text-[16px] text-gray-500 font-light max-w-3xl mx-auto mt-6 leading-relaxed r-up">
            Trustless Analytics Infrastructure — secure data sharing and computation without data exposure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="card p-8 !rounded-2xl r-left">
            <h4 className="text-[15px] font-medium text-gray-800 mb-6">Trustless Collaboration Flow</h4>
            <CipherFlowDiagram />
          </div>
          <div className="r-right">
            <h4 className="display-inter text-2xl text-gray-800 mb-5">Why CipherVault Exists</h4>
            <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-8">
              Many enterprises need to collaborate with external analysts, partners, and research organizations —{" "}
              <span className="text-gray-800 font-normal">without exposing sensitive data</span>. CipherVault makes this possible.
            </p>
            <div className="space-y-5 mb-8">
              {[
                { icon: <Lock className="w-4 h-4 text-emerald-600" />, iconBg: "bg-emerald-500/[0.12]", title: "Encrypted Data Vaults", body: "Share encrypted data vaults instead of raw files. Recipients cannot decrypt — only compute." },
                { icon: <Calculator className="w-4 h-4 text-violet-600" />, iconBg: "bg-violet-500/[0.12]", title: "Computation on Protected Data", body: "Homomorphic encryption allows analytics on encrypted data without decryption." },
                { icon: <Key className="w-4 h-4 text-cyan-600" />, iconBg: "bg-cyan-500/[0.12]", title: "Exclusive Decryption Control", body: "Only you control decryption keys and identity mapping. Full sovereignty retained." },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-xl ${f.iconBg} flex items-center justify-center flex-shrink-0`}>{f.icon}</div>
                  <div>
                    <h5 className="text-[14px] font-medium text-gray-800 mb-1">{f.title}</h5>
                    <p className="text-[13px] text-gray-500 font-light leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-2xl bg-white/60 border border-amber-500/[0.15]"
              style={{ boxShadow: "0 20px 60px -15px rgba(245,158,11,0.06)" }}>
              <p className="text-[16px] text-gray-800 font-light mb-1">
                CipherVault replaces <span className="text-rose-500 line-through">contractual trust</span>
              </p>
              <p className="text-[16px] text-gray-800 font-light">
                with <span className="text-gradient-amber font-medium">mathematical guarantees</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
