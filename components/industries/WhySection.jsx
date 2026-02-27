"use client";

import { ShieldQuestion, Scale, ServerCrash, Cpu, Database, Eye, Shield } from "lucide-react";

const cardBase = {
  background: "rgba(255,255,255,0.85)",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 20,
  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  transition: "all 0.5s cubic-bezier(0.23,1,0.32,1)",
};

export default function WhySection() {
  return (
    <section className="py-48 relative" id="whySection">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(16,185,129,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,0.06) 1px,transparent 1px)",
          backgroundSize: "100px 100px",
          opacity: 0.1,
        }}
      />
      <div className="relative max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-800/[0.06] border border-slate-800/[0.08] mb-8 r-up">
            <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span className="text-slate-600 text-[11px] font-light tracking-[0.25em] uppercase">Our Focus</span>
          </div>
          <h2
            className="r-up"
            style={{ fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1, fontSize: "clamp(3rem,7vw,7rem)" }}
          >
            Why These{" "}
            <span style={{ background: "linear-gradient(135deg,#059669 0%,#0891b2 50%,#2563eb 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Industries
            </span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            We focus where our capabilities matter most — not where adoption is easiest.
          </p>
        </div>

        {/* Why Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16" id="whyCards">
          {[
            { icon: <ShieldQuestion className="w-7 h-7 text-slate-600" />, title: "Trust-Blocked Adoption", desc: "These industries want AI — but adoption is blocked by trust, not ambition." },
            { icon: <Scale className="w-7 h-7 text-slate-600" />, title: "Defendable Intelligence", desc: "Every output must withstand regulatory and legal scrutiny." },
            { icon: <ServerCrash className="w-7 h-7 text-slate-600" />, title: "Real Constraints", desc: "Air gaps, data residency, and compliance requirements are non-negotiable." },
          ].map((c, i) => (
            <div key={i} className="card p-8 text-center r-up" style={cardBase}>
              <div className="w-14 h-14 rounded-2xl bg-slate-800/[0.06] border border-slate-800/[0.08] flex items-center justify-center mx-auto mb-6">
                {c.icon}
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-3">{c.title}</h3>
              <p className="text-[15px] text-gray-500 font-light leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Foundation */}
        <div className="text-center mb-12 mt-32">
          <h2
            className="r-up"
            style={{ fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1, fontSize: "clamp(2.5rem,5vw,6rem)" }}
          >
            A Consistent{" "}
            <span style={{ background: "linear-gradient(135deg,#059669 0%,#0891b2 50%,#2563eb 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Foundation
            </span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Every deployment is powered by the same architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4" id="foundationCards">
          {[
            { icon: <Cpu className="w-6 h-6 text-slate-600" />, title: "Mentis OS", desc: "Governance & execution" },
            { icon: <Database className="w-6 h-6 text-slate-600" />, title: "Data Sovereignty", desc: "Full control, always" },
            { icon: <Eye className="w-6 h-6 text-slate-600" />, title: "Explainability", desc: "By design" },
            { icon: <Shield className="w-6 h-6 text-slate-600" />, title: "Secure Deployment", desc: "Controlled & contained" },
          ].map((c, i) => (
            <div key={i} className="card p-6 text-center r-up" style={cardBase}>
              <div className="w-12 h-12 rounded-xl bg-slate-800/[0.06] border border-slate-800/[0.08] flex items-center justify-center mx-auto mb-4">
                {c.icon}
              </div>
              <p className="text-gray-900 font-light text-sm">{c.title}</p>
              <p className="text-xs text-gray-400 mt-1 font-light">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
