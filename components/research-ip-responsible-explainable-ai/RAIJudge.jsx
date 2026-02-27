"use client";

import { Link, Scale, BarChart3 } from "lucide-react";

// ─── SVG Pipeline ───────────────────────────────────────────────
function JudgePipeline() {
  return (
    <svg viewBox="0 0 800 320" className="w-full">
      <defs>
        <pattern id="svgGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(20,184,166,0.04)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="800" height="320" fill="url(#svgGrid)" rx="12"/>

      <text x="400" y="22" textAnchor="middle" fill="#9ca3af" fontSize="8" letterSpacing="0.15em" fontFamily="Space Mono, monospace">
        SOURCE-GROUNDED VERIFICATION PIPELINE
      </text>

      {/* Source Documents */}
      <g transform="translate(20,45)">
        <rect x="0" y="0" width="150" height="230" rx="12" fill="rgba(6,182,212,0.04)" stroke="rgba(6,182,212,0.2)" strokeWidth="1"/>
        <text x="75" y="26" textAnchor="middle" fill="#0891b2" fontSize="10" fontWeight="500">SOURCE</text>
        <text x="75" y="40" textAnchor="middle" fill="#0891b2" fontSize="10" fontWeight="500">DOCUMENTS</text>
        {[55,95,135,175].map((y,i) => (
          <g key={i} transform={`translate(15,${y})`}>
            {i < 3 ? (
              <g>
                <rect x="0" y="0" width="120" height="32" rx="6" fill="white" stroke="rgba(6,182,212,0.2)"/>
                <rect x="8" y="8"  width={[30,35,25][i]} height="3" rx="1" fill="rgba(6,182,212,0.3)"/>
                <rect x="8" y="14" width={[50,45,60][i]} height="2.5" rx="1" fill="rgba(6,182,212,0.15)"/>
                <rect x="8" y="20" width={[40,55,35][i]} height="2.5" rx="1" fill="rgba(6,182,212,0.15)"/>
                <text x="95" y="20" textAnchor="middle" fill="#0e7490" fontSize="6.5" fontFamily="Space Mono,monospace">DOC-{i+1}</text>
              </g>
            ) : (
              <g>
                <rect x="0" y="0" width="120" height="32" rx="6" fill="none" stroke="rgba(6,182,212,0.12)" strokeDasharray="4 3"/>
                <text x="60" y="20" textAnchor="middle" fill="#0e7490" fontSize="7.5">+ more sources</text>
              </g>
            )}
          </g>
        ))}
      </g>

      {/* Arrow: Source → Agent */}
      <g transform="translate(178,155)">
        <line x1="0" y1="0" x2="45" y2="0" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5"/>
        <polygon points="50,0 42,-4 42,4" fill="rgba(6,182,212,0.4)"/>
        <text x="25" y="15" textAnchor="middle" fill="#9ca3af" fontSize="7">retrieval</text>
      </g>

      {/* Reasoning Agent */}
      <g transform="translate(235,75)">
        <rect x="0" y="0" width="140" height="170" rx="12" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.2)" strokeWidth="1"/>
        <text x="70" y="26" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="500">REASONING</text>
        <text x="70" y="40" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="500">AGENT</text>
        <g transform="translate(15,55)">
          <rect x="0" y="0" width="110" height="95" rx="8" fill="white" stroke="rgba(139,92,246,0.15)"/>
          <text x="55" y="18" textAnchor="middle" fill="#6d28d9" fontSize="7.5">Processing</text>
          <circle cx="35" cy="42" r="12" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.2)"/>
          <circle cx="75" cy="42" r="12" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.2)"/>
          <line x1="47" y1="42" x2="63" y2="42" stroke="rgba(139,92,246,0.3)" strokeWidth="1"/>
          <rect x="20" y="62" width="70" height="20" rx="4" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.12)"/>
          <text x="55" y="75" textAnchor="middle" fill="#7c3aed" fontSize="7">generates response</text>
        </g>
      </g>

      {/* Arrow: Agent → Judge */}
      <g transform="translate(383,155)">
        <line x1="0" y1="0" x2="45" y2="0" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5"/>
        <polygon points="50,0 42,-4 42,4" fill="rgba(139,92,246,0.4)"/>
        <text x="25" y="15" textAnchor="middle" fill="#9ca3af" fontSize="7">response</text>
      </g>

      {/* Judge Agent */}
      <g transform="translate(440,40)">
        <rect x="0" y="0" width="170" height="240" rx="12" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5"/>
        <g transform="translate(55,-12)">
          <rect x="0" y="0" width="60" height="22" rx="11" fill="#f59e0b"/>
          <text x="30" y="15" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">JUDGE</text>
        </g>
        <text x="85" y="30" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="500">VERIFICATION</text>
        <text x="85" y="44" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="500">AGENT</text>
        {[
          { y: 58,  step: "1", label: "Cross-reference", sub: "with sources" },
          { y: 100, step: "2", label: "Flag unsupported", sub: "claims" },
          { y: 142, step: "3", label: "Attach citations", sub: "to verified claims" },
          { y: 184, step: "4", label: "Generate", sub: "confidence score" },
        ].map((s, i) => (
          <g key={i} transform={`translate(15,${s.y})`}>
            <rect x="0" y="0" width="140" height="36" rx="6" fill="white" stroke="rgba(245,158,11,0.2)"/>
            <circle cx="22" cy="18" r="10" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.25)"/>
            <text x="22" y="22" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="600">{s.step}</text>
            <text x="88" y="14" textAnchor="middle" fill="#92400e" fontSize="7.5">{s.label}</text>
            <text x="88" y="26" textAnchor="middle" fill="#9ca3af" fontSize="6.5">{s.sub}</text>
          </g>
        ))}
      </g>

      {/* Verification loop */}
      <path d="M 440 265 C 370 295 180 295 95 275" fill="none" stroke="rgba(245,158,11,0.2)" strokeWidth="1.5" strokeDasharray="6,4"/>
      <polygon points="95,275 105,280 102,269" fill="rgba(245,158,11,0.3)"/>
      <text x="270" y="305" textAnchor="middle" fill="#9ca3af" fontSize="7" fontStyle="italic">verification loop</text>

      {/* Arrow: Judge → Output */}
      <g transform="translate(618,155)">
        <line x1="0" y1="0" x2="35" y2="0" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/>
        <polygon points="40,0 32,-4 32,4" fill="rgba(16,185,129,0.4)"/>
      </g>

      {/* Verified Output */}
      <g transform="translate(665,85)">
        <rect x="0" y="0" width="115" height="150" rx="12" fill="rgba(16,185,129,0.04)" stroke="rgba(16,185,129,0.2)" strokeWidth="1"/>
        <text x="57.5" y="24"  textAnchor="middle" fill="#059669" fontSize="10" fontWeight="500">VERIFIED</text>
        <text x="57.5" y="38"  textAnchor="middle" fill="#059669" fontSize="10" fontWeight="500">OUTPUT</text>
        <g transform="translate(12,52)">
          <rect x="0" y="0" width="91" height="80" rx="6" fill="white" stroke="rgba(16,185,129,0.15)"/>
          {[
            { dy: 12, label: "grounded" },
            { dy: 34, label: "cited" },
            { dy: 56, label: "scored", isPercent: true },
          ].map((row, i) => (
            <g key={i} transform={`translate(10,${row.dy})`}>
              {row.isPercent ? (
                <circle cx="8" cy="8" r="6" fill="rgba(16,185,129,0.08)"/>
              ) : (
                <circle cx="8" cy="8" r="8" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.25)"/>
              )}
              {row.isPercent ? (
                <text x="8" y="11" textAnchor="middle" fill="#059669" fontSize="6.5">%</text>
              ) : (
                <path d="M 4 8 L 7 11 L 12 5" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              )}
              <text x="30" y="11" fill="#065f46" fontSize="7">{row.label}</text>
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}

const judgeCards = [
  {
    icon: <Link className="w-6 h-6 text-amber-500" />,
    title: "Source Connection",
    body: "Every claim in a response is linked back to the specific document, paragraph, and sentence that supports it.",
    note: "Users can click any claim to see its source context.",
  },
  {
    icon: <Scale className="w-6 h-6 text-amber-500" />,
    title: "Hallucination Detection",
    body: "The Judge agent compares generated content against source material, flagging statements that cannot be verified.",
    note: "Unverified claims are removed or explicitly marked as inference.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
    title: "Confidence Scoring",
    body: "Every response carries a confidence score based on source coverage, verification rate, and reasoning completeness.",
    note: "Low-confidence responses trigger human review workflows.",
  },
];

export default function RAIJudge() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-teal opacity-10" />
      <div className="orb w-[400px] h-[400px] bg-amber-400/[0.04]" style={{ top: "5%", right: "-5%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] text-teal-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">
            Verification Architecture
          </p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">
            Grounded in Source,<br />Verified by Judge
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light r-up">
            Every response is connected to its source. Every claim is verified before delivery.
          </p>
        </div>

        {/* Pipeline diagram */}
        <div className="card-no-hover p-8 mb-10 r-up">
          <JudgePipeline />
        </div>

        {/* Detail cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {judgeCards.map((c, i) => (
            <div key={i} className="card card-amber p-6 r-up">
              <div className="w-12 h-12 rounded-xl bg-amber-500/[0.08] border border-amber-500/[0.12] flex items-center justify-center mb-5">
                {c.icon}
              </div>
              <h3 className="text-gray-800 font-medium mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 font-light mb-4 leading-relaxed">{c.body}</p>
              <div className="p-3 rounded-lg bg-amber-500/[0.04] border border-amber-500/[0.1]">
                <p className="text-[11px] text-amber-600 font-light">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
