"use client";

import { FileWarning, Repeat, CloudOff, ShieldCheck, Scale } from "lucide-react";

const cards = [
  {
    icon: <FileWarning className="w-6 h-6 text-amber-500" />,
    bg: "rgba(245,158,11,0.08)",
    title: "PII Regulations Are Expanding",
    body: "GDPR, AI Act, CCPA and sector-specific rules are redefining how customer data can be collected, stored, and processed by AI systems.",
  },
  {
    icon: <Repeat className="w-6 h-6 text-orange-400" />,
    bg: "rgba(234,88,12,0.08)",
    title: "Great CX Demands PII",
    body: "Personalized, seamless interactions require continuous ingestion of identity, context, and behavioral data — there's no shortcut.",
  },
  {
    icon: <CloudOff className="w-6 h-6 text-red-400" />,
    bg: "rgba(239,68,68,0.08)",
    title: "Cloud AI Complicates This",
    body: "Most AI vendors route customer data through third-party infrastructure — creating compliance exposure at every interaction.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    bg: "rgba(16,185,129,0.08)",
    title: "On-Premise Resolves It",
    body: "When AI runs entirely inside your infrastructure, you get full PII ingestion with full regulatory compliance — no compromise.",
  },
];

export default function CXProblem() {
  return (
    <section id="problem" className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 500, height: 400, background: "rgba(239,68,68,0.04)", top: "5%", right: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8 r-up"
            style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.15)" }}>
            <Scale className="w-3 h-3 text-amber-500" />
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">The Tension</span>
          </div>
          <h2 className="display-section r-up" style={{ fontSize: "clamp(2.5rem,8vw,8rem)" }}>
            Regulation Is<br /><span className="text-gradient">Catching Up</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            New data protection regulations are tightening around customer PII. But seamless AI interactions require
            continuous ingestion of personal data. We&apos;re built for exactly this tension.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon, bg, title, body }) => (
            <div key={title} className="card p-8 r-up">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: bg }}>
                {icon}
              </div>
              <h3 className="text-[15px] font-normal text-gray-800 mb-3">{title}</h3>
              <p className="text-[13px] text-gray-500 font-light leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
