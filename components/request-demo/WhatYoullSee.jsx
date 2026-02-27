"use client";

import { Brain, ShieldCheck, Database, FileSearch } from "lucide-react";

const cards = [
  {
    icon: <Brain className="w-5 h-5 text-emerald-600" />,
    iconBg: "bg-emerald-500/[0.1]",
    title: "Agentic Intelligence",
    desc: "Watch Aegis, Sophia, and Analytica collaborate on a live query. See how agents decompose, delegate, and synthesize.",
    tag: "LIVE AGENTS",
    tagColor: "text-emerald-500",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-cyan-600" />,
    iconBg: "bg-cyan-500/[0.1]",
    title: "JUDGE Verification",
    desc: "See the 5-gate pipeline catch a hallucination in real time. Every output verified, scored, and traced before delivery.",
    tag: "LIVE VERIFICATION",
    tagColor: "text-cyan-500",
  },
  {
    icon: <Database className="w-5 h-5 text-blue-600" />,
    iconBg: "bg-blue-500/[0.1]",
    title: "Data Sovereignty",
    desc: "We'll walk through the deployment architecture — on-prem, air-gapped, zero external calls. Your data never leaves.",
    tag: "ARCHITECTURE REVIEW",
    tagColor: "text-blue-500",
  },
  {
    icon: <FileSearch className="w-5 h-5 text-violet-600" />,
    iconBg: "bg-violet-500/[0.1]",
    title: "Audit Trail",
    desc: "Explore the immutable decision record. Every output is reconstructible — from query to reasoning to sources to verdict.",
    tag: "FULL EXPLAINABILITY",
    tagColor: "text-violet-500",
  },
];

export default function WhatYoullSee() {
  return (
    <section className="py-40 relative" id="whatYoullSee">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div
        className="orb w-[500px] h-[400px] bg-violet-500/[0.04]"
        style={{ top: "20%", right: "10%" }}
      />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.2] mb-8 r-up">
            <svg className="w-3 h-3 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">
              What You'll See
            </span>
          </div>

          <h2 className="display-section text-5xl md:text-7xl r-up">
            Not a Slideshow.
            <br />
            <span className="text-gradient">A Working System.</span>
          </h2>

          <p className="text-[15px] text-gray-500 font-light mt-6 max-w-2xl mx-auto leading-relaxed r-up">
            Every demo runs on the live Mentis platform. You'll see real agents
            process real queries with real-time verification — not pre-recorded
            outputs.
          </p>
        </div>

        {/* ── Cards grid — white cards matching screenshot ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="preview-card r-up flex flex-col p-7 rounded-2xl"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center mb-5 flex-shrink-0`}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h4 className="text-[15px] text-gray-900 font-medium mb-2 leading-snug">
                {card.title}
              </h4>

              {/* Description */}
              <p className="text-[13px] text-gray-500 font-light leading-relaxed flex-1">
                {card.desc}
              </p>

              {/* Tag */}
              <div className="mt-5 pt-4 border-t border-black/[0.05]">
                <span
                  className={`text-[10px] ${card.tagColor} font-mono tracking-wider`}
                >
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
