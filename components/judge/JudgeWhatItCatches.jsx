"use client";

import { AlertTriangle } from "lucide-react";

const failures = [
  { dot: "bg-red-400",    title: "Factual Hallucinations",     cardBg: "bg-red-500/[0.04]",    cardBorder: "border-red-400/[0.1]",    exampleColor: "text-red-500",    example: '"Revenue grew 34% in Q3" — No source supports this figure', body: "Fabricated statistics, invented dates, conflated entities, or claims that do not exist in any source document." },
  { dot: "bg-amber-400",  title: "Source Misattribution",      cardBg: "bg-amber-500/[0.04]",  cardBorder: "border-amber-400/[0.1]",  exampleColor: "text-amber-600",  example: '"Per Board-Minutes §7.3" — §7.3 does not exist in referenced file', body: "Correct facts attributed to wrong documents, or citations that reference non-existent sections." },
  { dot: "bg-rose-400",   title: "Logical Inconsistencies",    cardBg: "bg-rose-500/[0.04]",   cardBorder: "border-rose-400/[0.1]",   exampleColor: "text-rose-500",   example: 'Claims "risk is low" while citing critical severity indicators', body: "Contradictory claims within the same response, or conclusions that do not follow from presented evidence." },
  { dot: "bg-violet-400", title: "Policy Violations",          cardBg: "bg-violet-500/[0.04]", cardBorder: "border-violet-400/[0.1]", exampleColor: "text-violet-600", example: "Returned PII data to user without clearance for that domain", body: "Outputs that disclose restricted data, exceed role permissions, or violate enterprise-defined content policies." },
  { dot: "bg-blue-400",   title: "Stale Information",          cardBg: "bg-blue-500/[0.04]",   cardBorder: "border-blue-400/[0.1]",   exampleColor: "text-blue-500",   example: "Referenced v2.1 policy — v3.0 supersedes since Feb 2025", body: "Answers based on superseded documents or outdated data versions when newer authoritative versions exist." },
  { dot: "bg-cyan-400",   title: "Low-Confidence Speculation", cardBg: "bg-cyan-500/[0.04]",   cardBorder: "border-cyan-400/[0.1]",   exampleColor: "text-cyan-600",   example: 'Stated "definitive" conclusion from 1 partial source match', body: "Assertions delivered with high confidence when source evidence is weak, ambiguous, or insufficient to support the claim." },
];

export default function JudgeWhatItCatches() {
  return (
    <section id="whatItCatches" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[400px] bg-emerald-500/[0.06]" style={{ top: "10%", left: "30%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/[0.1] border border-rose-500/[0.2] mb-8 r-up">
            <AlertTriangle className="w-3 h-3 text-rose-600/80" />
            <span className="text-rose-600/80 text-[11px] font-light tracking-[0.25em] uppercase">Failure Categories</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            What JUDGE<br /><span className="text-gradient-warm">Catches & Prevents</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {failures.map((f, i) => (
            <div key={i} className="card p-8 r-up">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2.5 h-2.5 rounded-full ${f.dot}`} />
                <h3 className="text-[15px] font-light text-gray-900">{f.title}</h3>
              </div>
              <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">{f.body}</p>
              <div className={`p-3 rounded-lg ${f.cardBg} border ${f.cardBorder}`}>
                <span className={`text-[9px] ${f.exampleColor} font-mono`}>{f.example}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
