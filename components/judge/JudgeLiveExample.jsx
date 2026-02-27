"use client";

import { Monitor, AlertTriangle } from "lucide-react";

export default function JudgeLiveExample() {
  return (
    <section id="liveExample" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-violet-500/[0.06]" style={{ top: "10%", right: "5%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.12] border border-violet-500/[0.2] mb-8 r-up">
            <Monitor className="w-3 h-3 text-violet-600/80" />
            <span className="text-violet-600/80 text-[11px] font-light tracking-[0.25em] uppercase">Live Verification</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            See JUDGE<br /><span className="text-gradient">Catch a Hallucination</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Before JUDGE */}
          <div className="r-left">
            <div className="industry-mock verdict-reject">
              <div className="mock-header">
                <div className="mock-dot r"/><div className="mock-dot y"/><div className="mock-dot g"/>
                <span className="text-[9px] text-gray-600 font-mono ml-2">RAW AGENT OUTPUT — PRE-JUDGE</span>
                <span className="ml-auto px-2.5 py-1 rounded-full bg-red-500/10 text-[8px] text-red-500 font-mono">UNVERIFIED</span>
              </div>
              <div className="p-6">
                <div className="p-3 rounded-xl bg-black/[0.03] border border-black/[0.06] mb-3">
                  <div className="text-[9px] text-gray-600 font-mono mb-2">QUERY</div>
                  <p className="text-[12px] text-gray-700 font-light">"What is our data retention policy for EU customers?"</p>
                </div>
                <div className="p-4 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                  <div className="text-[9px] text-gray-600 font-mono mb-3">AGENT RESPONSE</div>
                  <p className="text-[12px] text-gray-600 font-light leading-relaxed mb-3">
                    EU customer personal data is retained for{" "}
                    <span className="bg-red-500/10 text-red-600 px-1 rounded">48 months</span>{" "}
                    post-contract termination with automated deletion workflows. The policy was updated in{" "}
                    <span className="bg-red-500/10 text-red-600 px-1 rounded">January 2025</span>{" "}
                    following board approval.
                  </p>
                  <div className="space-y-2 mt-4">
                    {[
                      { pass: false, text: <>Retention period: <span className="text-red-500 font-medium">48 months</span> <span className="text-gray-400">— Source says 36 months</span></> },
                      { pass: false, text: <>Update date: <span className="text-red-500 font-medium">January 2025</span> <span className="text-gray-400">— Source says March 2024</span></> },
                      { pass: true,  text: <>Automated deletion workflows — <span className="text-emerald-600">confirmed</span></> },
                    ].map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px]">
                        <span className={c.pass ? "text-emerald-600" : "text-red-500"}>{c.pass ? "✓" : "✕"}</span>
                        <span className="text-gray-600 font-light">{c.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-xl bg-red-500/[0.06] border border-red-400/[0.15]">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                    <span className="text-[11px] text-red-600 font-medium">JUDGE VERDICT: REJECTED</span>
                  </div>
                  <p className="text-[10px] text-gray-600 font-light mt-1.5">
                    2 factual claims contradict source documents. Output sent back for re-reasoning with corrected evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* After JUDGE */}
          <div className="r-right">
            <div className="industry-mock verdict-pass">
              <div className="mock-header">
                <div className="mock-dot r"/><div className="mock-dot y"/><div className="mock-dot g"/>
                <span className="text-[9px] text-gray-600 font-mono ml-2">VERIFIED OUTPUT — POST-JUDGE</span>
                <span className="ml-auto px-2.5 py-1 rounded-full bg-emerald-500/10 text-[8px] text-emerald-600 font-mono">✓ VERIFIED</span>
              </div>
              <div className="p-6">
                <div className="p-3 rounded-xl bg-black/[0.03] border border-black/[0.06] mb-3">
                  <div className="text-[9px] text-gray-600 font-mono mb-2">QUERY</div>
                  <p className="text-[12px] text-gray-700 font-light">"What is our data retention policy for EU customers?"</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/[0.12]">
                  <div className="text-[9px] text-emerald-600 font-mono mb-3">JUDGE-VERIFIED RESPONSE</div>
                  <p className="text-[12px] text-gray-600 font-light leading-relaxed mb-3">
                    EU customer personal data is retained for{" "}
                    <span className="bg-emerald-500/10 text-emerald-700 px-1 rounded">36 months</span>{" "}
                    post-contract termination with automated deletion workflows. The policy was updated in{" "}
                    <span className="bg-emerald-500/10 text-emerald-700 px-1 rounded">March 2024</span>{" "}
                    following board approval.
                  </p>
                  <div className="space-y-2 mt-4">
                    {[
                      "Retention period verified — Legal/GDPR/retention.pdf §4.2",
                      "Update date verified — Board-Minutes-Q1-2024.pdf",
                      "Automated deletion verified — IT-Ops/deletion-workflow.yaml",
                    ].map((line, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px]">
                        <span className="text-emerald-600">✓</span>
                        <span className="text-gray-600 font-light">
                          {line.split(" — ")[0]} —{" "}
                          <span className="text-emerald-600 font-medium">{line.split(" — ")[1]}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-[8px] text-emerald-600 font-mono">✓ JUDGE VERIFIED</span>
                  <span className="px-2.5 py-1 rounded-full bg-blue-400/10 text-[8px] text-blue-500 font-mono">3 SOURCES</span>
                  <span className="px-2.5 py-1 rounded-full bg-violet-400/10 text-[8px] text-violet-600 font-mono">98.2% CONFIDENCE</span>
                </div>
                <div className="mt-3 text-[8px] text-gray-600 font-mono">
                  AUDIT-ID: JDG-EU-RET-4417 · 178ms verification · 2nd pass
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
