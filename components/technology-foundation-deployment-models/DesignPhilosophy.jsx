"use client";

import { X, Check } from "lucide-react";

const typicalItems = [
  "External API dependencies required",
  "Data crosses jurisdictional boundaries",
  "Network isolation breaks features",
  '"Lite" versions with reduced governance',
];

const genovationItems = [
  "Run without external API dependencies",
  "Respect data residency boundaries",
  "Operate under complete network isolation",
  "Remain fully governable everywhere",
];

export default function DesignPhilosophy() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 400, height: 400, background: "rgba(99,102,241,0.04)", top: "10%", left: "-5%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] text-indigo-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Design Philosophy</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">
            Deployment as a<br />First-Class Constraint
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light r-up">
            Most AI platforms optimize for cloud-first execution and retrofit enterprise options later. Genovation takes the opposite approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Typical Approach */}
          <div className="card-no-hover p-7 r-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(239,68,68,0.08)" }}>
                <X className="w-4 h-4 text-red-500" />
              </div>
              <h3 className="text-gray-800 font-medium">Typical Approach</h3>
            </div>
            <div className="space-y-2.5">
              {typicalItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: "rgba(239,68,68,0.03)", border: "1px solid rgba(239,68,68,0.08)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span className="text-gray-500 text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Genovation Approach */}
          <div
            className="p-7 rounded-[20px] r-right"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(99,102,241,0.15)",
              boxShadow: "0 20px 60px -15px rgba(99,102,241,0.05)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(99,102,241,0.08)" }}>
                <Check className="w-4 h-4 text-indigo-500" />
              </div>
              <h3 className="text-gray-800 font-medium">Genovation Approach</h3>
            </div>
            <div className="space-y-2.5">
              {genovationItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: "rgba(99,102,241,0.03)", border: "1px solid rgba(99,102,241,0.1)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span className="text-gray-600 text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}