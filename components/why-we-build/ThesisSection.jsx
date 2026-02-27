"use client";
import { Lightbulb } from "lucide-react";

const layers = [
  {
    maxWidth: "100%",
    label: "Market",
    labelStyle: { background: "rgba(59,130,246,0.08)", color: "var(--blue)" },
    body: "Enterprise AI in regulated industries is a massive, structurally underserved market. Adoption is blocked not by capability but by trust, sovereignty, and economics.",
  },
  {
    maxWidth: "95%",
    label: "Wedge",
    labelStyle: { background: "rgba(6,182,212,0.08)", color: "var(--cyan)" },
    body: "Built for the hardest environments — sovereignty, security, explainability — then adopted everywhere. Like Linux: stress-tested under the tightest constraints, then trusted at every level.",
  },
  {
    maxWidth: "90%",
    label: "Moat",
    labelStyle: { background: "rgba(139,92,246,0.08)", color: "var(--violet)" },
    body: "Proprietary SLMs, proprietary agentic OS, defense-grade cryptographic libraries. Core innovations filed for patent in 2025. Depth compounds. Not a wrapper business.",
  },
  {
    maxWidth: "85%",
    label: "Economics",
    labelStyle: { background: "rgba(245,158,11,0.08)", color: "var(--amber)" },
    body: "SLM-first architecture makes sovereign AI viable at mid-market price points. Platform + agent SKUs + extension libraries — predictable pricing, no cloud dependency.",
  },
  {
    maxWidth: "80%",
    label: "GTM",
    labelStyle: { background: "rgba(251,113,133,0.08)", color: "var(--rose)" },
    body: "Platform → deep libraries → focused SKUs. Land with a single product, expand across the organization, deepen as library capabilities grow.",
  },
  {
    maxWidth: "75%",
    label: "Expansion",
    labelStyle: { background: "rgba(16,185,129,0.1)", color: "var(--emerald)" },
    body: "Current SKUs establish position. Libraries in security and physical-world interaction unlock simulation, operational intelligence, industrial agents — same governed infrastructure.",
  },
];

export default function ThesisSection() {
  return (
    <section className="py-32 relative" id="thesis">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[600px] h-[500px] bg-emerald-500/[0.05]" style={{ top: "15%", right: "10%" }} />

      <div className="relative max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-6 r-up">
            <Lightbulb className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[10px] font-mono tracking-[0.2em] uppercase">Thesis</span>
          </div>
          <h2 className="display-section text-4xl md:text-5xl lg:text-6xl r-up">
            The Investment Thesis
          </h2>
        </div>

        {/* Pyramid Layers */}
        <div className="space-y-3">
          {layers.map((layer) => (
            <div
              key={layer.label}
              className="pyramid-layer r-up"
              style={{ maxWidth: layer.maxWidth }}
            >
              <div className="pyramid-label" style={layer.labelStyle}>
                {layer.label}
              </div>
              <div className="pyramid-body">
                <p>{layer.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
