"use client";
import { GitCompare } from "lucide-react";

const headers = ["", "OpenAI / Google", "Cohere", "Palantir", "Genovation"];

const rows = [
  { label: "Audience",       vals: ["Consumers & developers", "Enterprise developers", "Largest enterprises & govt", "Mid-to-large regulated enterprises"] },
  { label: "Models",         vals: ["Massive general-purpose LLMs", "Enterprise LLMs & embeddings", "Third-party + proprietary", "Proprietary domain-specific SLMs"] },
  { label: "Offering",       vals: ["Models & APIs", "Model platform & tools", "Data integration platforms", "Full-stack intelligence products"] },
  { label: "Deployment",     vals: ["Cloud-only", "Cloud + private options", "On-prem & cloud", "Sovereign-first: on-prem, air-gapped"] },
  { label: "Explainability", vals: ["Minimal", "Available", "Platform-dependent", "Engineered into every layer"], colors: ["text-red-400","text-amber-500","text-gray-500","text-emerald-700"] },
  { label: "Security",       vals: ["Standard", "Enterprise-grade", "Defense-grade", "Defense + post-quantum"] },
  { label: "Mid-Market",     vals: ["Token costs escalate", "Platform licensing", "Large-enterprise pricing", "Designed for mid-market"], colors: ["text-red-400","text-amber-500","text-red-400","text-emerald-700"] },
];

export default function LandscapeSection() {
  return (
    <section className="py-32 relative" id="landscape">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.04]" style={{ top: "30%", right: "15%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.2] mb-6 r-up">
            <GitCompare className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[10px] font-mono tracking-[0.2em] uppercase">Landscape</span>
          </div>
          <h2 className="display-section text-4xl md:text-5xl lg:text-6xl r-up">Where We Sit</h2>
        </div>

        <div className="card-static overflow-hidden r-scale">
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Header */}
              <div className="comp-row comp-header">
                {headers.map((h, i) => (
                  <div key={i} className={`comp-cell text-center ${i === 4 ? "comp-geno text-emerald-700 font-medium" : "text-gray-600"}`}>{h}</div>
                ))}
              </div>

              {/* Rows */}
              {rows.map((row) => (
                <div key={row.label} className="comp-row">
                  <div className="comp-cell text-gray-700 font-medium">{row.label}</div>
                  {row.vals.map((val, i) => (
                    <div key={i} className={`comp-cell text-center ${i === 3 ? "comp-geno text-emerald-700" : (row.colors ? row.colors[i] : "text-gray-500")}`}>
                      {val}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
