"use client";

import { ScrollText } from "lucide-react";

const gates = [
  { label: "Gate 1 — Source cross-reference",  result: "PASS",     resultColor: "text-emerald-600", ms: "32ms",  bg: "bg-black/[0.03]" },
  { label: "Gate 2 — Hallucination detection",  result: "PASS",     resultColor: "text-emerald-600", ms: "58ms",  bg: "bg-black/[0.03]" },
  { label: "Gate 3 — Policy compliance",        result: "PASS",     resultColor: "text-emerald-600", ms: "41ms",  bg: "bg-black/[0.03]" },
  { label: "Gate 4 — Confidence scoring",       result: "98.2%",    resultColor: "text-violet-600",  ms: "29ms",  bg: "bg-black/[0.03]" },
  { label: "Gate 5 — Final verdict",            result: "VERIFIED", resultColor: "text-emerald-600 font-bold", ms: "18ms", bg: "bg-emerald-500/[0.04]", isFinal: true },
];

export default function JudgeAuditTrail() {
  return (
    <section id="auditTrail" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-blue-500/[0.06]" style={{ top: "15%", left: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/[0.1] border border-blue-500/[0.2] mb-8 r-up">
            <ScrollText className="w-3 h-3 text-blue-600" />
            <span className="text-blue-600 text-[11px] font-light tracking-[0.25em] uppercase">Immutable Record</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Every Verdict.<br /><span className="text-gradient">Permanently Recorded.</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mt-6 r-up">
            The audit trail is not a log file. It is a cryptographically verifiable chain of evidence — reconstructible by auditors, regulators, and forensic teams months or years later.
          </p>
        </div>

        <div className="max-w-4xl mx-auto r-scale">
          <div className="industry-mock" style={{ boxShadow: "0 30px 80px -20px rgba(59,130,246,0.1)" }}>
            <div className="mock-header">
              <div className="mock-dot r"/><div className="mock-dot y"/><div className="mock-dot g"/>
              <span className="text-[9px] text-gray-600 font-mono ml-2">JUDGE AUDIT RECORD — JDG-EU-RET-4417</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-dot-live" />
                <span className="text-[8px] text-emerald-600 font-mono">IMMUTABLE</span>
              </div>
            </div>
            <div className="p-6">
              {/* Metadata */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "TIMESTAMP", value: "2026-02-15T14:23:47Z",  bg: "bg-black/[0.03] border-black/[0.06]", lColor: "text-gray-600", vColor: "text-gray-700" },
                  { label: "USER",      value: "sarah.mitchell@corp",    bg: "bg-black/[0.03] border-black/[0.06]", lColor: "text-gray-600", vColor: "text-gray-700" },
                  { label: "AGENT",     value: "Sophia (Knowledge)",     bg: "bg-black/[0.03] border-black/[0.06]", lColor: "text-gray-600", vColor: "text-gray-700" },
                  { label: "VERDICT",   value: "PASS (2nd attempt)",     bg: "bg-emerald-500/[0.06] border-emerald-500/[0.12]", lColor: "text-emerald-600", vColor: "text-emerald-600 font-medium" },
                ].map((m) => (
                  <div key={m.label} className={`p-3 rounded-xl border ${m.bg}`}>
                    <div className={`text-[8px] ${m.lColor} font-mono mb-1`}>{m.label}</div>
                    <div className={`text-[11px] ${m.vColor} font-light`}>{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Verification chain */}
              <div className="text-[9px] text-gray-600 font-mono tracking-wider uppercase mb-3">Verification Chain</div>
              <div className="space-y-2 mb-6">
                {gates.map((g, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${g.bg}`}>
                    <span className="text-emerald-600 text-[10px]">✓</span>
                    <span className={`text-[10px] font-light flex-1 ${g.isFinal ? "text-emerald-600 font-medium" : "text-gray-600"}`}>
                      {g.label}
                    </span>
                    <span className={`text-[9px] font-mono ${g.resultColor}`}>{g.result}</span>
                    <span className="text-[8px] text-gray-600 font-mono">{g.ms}</span>
                  </div>
                ))}
              </div>

              {/* Sources */}
              <div className="text-[9px] text-gray-600 font-mono tracking-wider uppercase mb-3">Sources Verified</div>
              <div className="flex gap-2 flex-wrap mb-5">
                {["Legal/GDPR/retention.pdf §4.2", "Board-Minutes-Q1-2024.pdf", "IT-Ops/deletion-workflow.yaml"].map((src) => (
                  <span key={src} className="px-2.5 py-1 rounded-full bg-black/[0.04] text-[8px] text-gray-600 font-mono">{src}</span>
                ))}
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <span className="text-[8px] text-gray-600 font-mono">Hash: 7f3a9c...e4d2b1</span>
                <span className="text-[8px] text-gray-600 font-mono">CipherVault encrypted · PQ-256</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
