"use client";

import { Scale, Building2, Landmark, Award, Compass, Network, CheckSquare, RefreshCw, CalendarClock } from "lucide-react";

const standardItems = [
  { icon: <Building2 className="w-4 h-4 text-gray-500" />, text: "Enterprise governance frameworks" },
  { icon: <Landmark  className="w-4 h-4 text-gray-500" />, text: "Regulatory oversight bodies" },
  { icon: <Award     className="w-4 h-4 text-gray-500" />, text: "Industry best practices" },
];

const forwardItems = [
  { icon: <Network       className="w-4 h-4 text-teal-500" />, text: "Deeper explainability in multi-agent systems" },
  { icon: <CheckSquare   className="w-4 h-4 text-teal-500" />, text: "Formal verification of agent behavior" },
  { icon: <RefreshCw     className="w-4 h-4 text-teal-500" />, text: "Continuous compliance validation" },
  { icon: <CalendarClock className="w-4 h-4 text-teal-500" />, text: "Long-term governance of autonomous systems" },
];

export default function RAIStandards() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-teal opacity-10" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Engagement with Standards */}
          <div className="card-no-hover p-8 r-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gray-500/[0.06] border border-gray-500/[0.12] flex items-center justify-center">
                <Scale className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-gray-800 font-medium text-lg">Engagement with Standards</h3>
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-5">
              Genovation's work aligns with emerging expectations across:
            </p>
            <div className="space-y-2.5 mb-5">
              {standardItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-500/[0.03] border border-gray-500/[0.06]">
                  {item.icon}
                  <span className="text-sm text-gray-500 font-light">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 font-light italic">
              We monitor and contribute to discussions without treating responsibility as a marketing exercise.
            </p>
          </div>

          {/* Looking Forward */}
          <div
            className="p-8 rounded-[20px] bg-white/90 border border-teal-500/[0.15] r-right"
            style={{ boxShadow: "0 8px 30px -10px rgba(20,184,166,0.1)" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/[0.08] border border-teal-500/[0.15] flex items-center justify-center">
                <Compass className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-gray-800 font-medium text-lg">Looking Forward</h3>
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-5">
              Ongoing research directions include:
            </p>
            <div className="space-y-2.5 mb-5">
              {forwardItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-teal-500/[0.03] border border-teal-500/[0.1]">
                  {item.icon}
                  <span className="text-sm text-gray-600 font-light">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-teal-600 font-light">
              Each advance feeds directly into our intelligence products—without compromising sovereignty or security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
