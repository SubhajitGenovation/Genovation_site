"use client";

import { Workflow, Scale } from "lucide-react";

const stages = [
  { num: "01", color: "emerald", border: "border-emerald-500/[0.2]", bg: "bg-emerald-500/[0.12]",
    barDelay: "0s",    label: "Source Cross-Reference",  ms: "32ms",  textColor: "text-emerald-600" },
  { num: "02", color: "cyan",    border: "border-cyan-500/[0.2]",    bg: "bg-cyan-500/[0.12]",
    barDelay: "-0.5s", label: "Hallucination Detection", ms: "58ms",  textColor: "text-cyan-600" },
  { num: "03", color: "blue",    border: "border-blue-500/[0.2]",    bg: "bg-blue-500/[0.12]",
    barDelay: "-1s",   label: "Policy & Compliance Gate",ms: "41ms",  textColor: "text-blue-600" },
  { num: "04", color: "violet",  border: "border-violet-500/[0.2]",  bg: "bg-violet-500/[0.12]",
    barDelay: "-1.5s", label: "Confidence Scoring",       ms: "29ms",  textColor: "text-violet-600" },
];

const connectors = [
  "from-emerald-400/30 to-cyan-400/30",
  "from-cyan-400/30 to-blue-400/30",
  "from-blue-400/30 to-violet-400/30",
  "from-violet-400/30 to-emerald-400/30",
];

const descriptions = [
  { num: "01", numColor: "text-emerald-600", bg: "bg-emerald-500/[0.1]", title: "Source Cross-Reference",
    body: "Every claim in the output is traced back to the source documents or data that informed it. If a claim cannot be linked to an approved source, it is flagged. No unsupported assertions pass through." },
  { num: "02", numColor: "text-cyan-600",    bg: "bg-cyan-500/[0.1]",    title: "Hallucination Detection",
    body: "JUDGE compares the generated output against retrieved evidence using semantic consistency checks. Fabricated facts, conflated entities, invented statistics, and logical inconsistencies are caught and rejected." },
  { num: "03", numColor: "text-blue-600",    bg: "bg-blue-500/[0.1]",    title: "Policy & Compliance Gate",
    body: "Outputs are validated against enterprise-defined rules — data classification, disclosure restrictions, role-based access policies, and regulatory constraints. JUDGE enforces what the enterprise allows, not what the model can produce." },
  { num: "04", numColor: "text-violet-600",  bg: "bg-violet-500/[0.1]",  title: "Confidence Scoring",
    body: "A composite confidence score is computed across source strength, reasoning coherence, and verification pass rates. Low-confidence outputs are either rejected or escalated to human review — never silently delivered." },
  { isVerdict: true, title: "Verdict & Trace",
    body: "JUDGE issues a final verdict — PASS, REJECT, or ESCALATE. Every verdict generates an immutable audit record containing the full chain of evidence, checks performed, and reasoning. Reconstructible months or years later." },
];

export default function JudgeHowItWorks() {
  return (
    <section id="howItWorks" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.06]" style={{ top: "20%", left: "5%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.12] border border-cyan-500/[0.2] mb-8 r-up">
            <Workflow className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Verification Pipeline</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Five Gates.<br /><span className="text-gradient">Zero Blind Trust.</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mt-6 r-up">
            Every AI output passes through five independent verification stages before reaching the user. Each gate can reject, escalate, or approve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Pipeline visual */}
          <div className="r-left">
            <div className="diagram-container p-8">
              <div className="text-center mb-6">
                <span className="text-[9px] text-gray-600 font-mono tracking-[0.2em] uppercase">
                  JUDGE Verification Pipeline — Real-Time
                </span>
              </div>

              {stages.map((s, i) => (
                <div key={s.num}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center flex-shrink-0`}>
                      <span className={`text-[11px] ${s.textColor} font-mono font-bold`}>{s.num}</span>
                    </div>
                    <div className={`flex-1 p-3.5 rounded-xl bg-${s.color}-500/[0.04] border border-${s.color}-500/[0.1]`}>
                      <div className="flex justify-between items-center">
                        <span className="text-[12px] text-gray-700 font-light">{s.label}</span>
                        <span className={`text-[8px] ${s.textColor} font-mono`}>{s.ms}</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-black/[0.04] overflow-hidden">
                        <div className="h-full rounded-full pipe-flow w-full" style={{ animationDelay: s.barDelay }} />
                      </div>
                    </div>
                  </div>
                  {/* Connector */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 flex justify-center">
                      <div className={`w-0.5 h-6 bg-gradient-to-b ${connectors[i]}`} />
                    </div>
                    <div className="flex-1" />
                  </div>
                </div>
              ))}

              {/* Verdict stage */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/[0.15] border border-emerald-500/[0.3] flex items-center justify-center flex-shrink-0">
                  <Scale className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex-1 p-3.5 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/[0.2]">
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] text-emerald-700 font-medium">Verdict & Trace Generation</span>
                    <span className="text-[8px] text-emerald-600 font-mono">18ms</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-[8px] text-emerald-600 font-mono">PASS</span>
                    <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-[8px] text-red-500 font-mono">REJECT</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-[8px] text-amber-600 font-mono">ESCALATE</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <span className="text-[9px] text-gray-600 font-mono">
                  Total verification: <span className="text-emerald-600 font-bold">178ms</span>
                </span>
                <span className="text-[9px] text-gray-600 font-mono">5 gates · 0 bypassed</span>
              </div>
            </div>
          </div>

          {/* Right: Descriptions */}
          <div className="space-y-8">
            {descriptions.map((d, i) => (
              <div key={i} className="r-right">
                <div className="flex items-start gap-4">
                  {d.isVerdict ? (
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.12] flex items-center justify-center flex-shrink-0 mt-1">
                      <Scale className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  ) : (
                    <div className={`w-8 h-8 rounded-lg ${d.bg} flex items-center justify-center flex-shrink-0 mt-1`}>
                      <span className={`text-[10px] ${d.numColor} font-mono font-bold`}>{d.num}</span>
                    </div>
                  )}
                  <div>
                    <h4 className="text-[17px] font-light text-gray-900 mb-2">{d.title}</h4>
                    <p className="text-[15px] text-gray-600 font-light leading-relaxed">{d.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
