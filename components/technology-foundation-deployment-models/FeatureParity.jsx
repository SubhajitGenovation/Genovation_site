"use client";

import { Brain, Scale, Lock, ClipboardList, Check } from "lucide-react";

const PARITY_CARDS = [
  { Icon: Brain,         bg: "rgba(99,102,241,0.08)",  color: "text-indigo-500", label: "Intelligence" },
  { Icon: Scale,         bg: "rgba(20,184,166,0.08)",  color: "text-teal-500",   label: "Governance" },
  { Icon: Lock,          bg: "rgba(14,165,233,0.08)",  color: "text-sky-500",    label: "Security" },
  { Icon: ClipboardList, bg: "rgba(236,72,153,0.08)", color: "text-pink-500",   label: "Audit" },
];

const TABLE_ROWS = [
  "Model Inference",
  "Agent Orchestration",
  "Policy Enforcement",
  "Explainability",
  "Audit Trail",
  "Mentis OS Control",
];

export default function FeatureParity() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 400, height: 400, background: "rgba(99,102,241,0.04)", bottom: "10%", left: "-5%" }} />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] text-indigo-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Consistency</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">Identical Across All Models</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light r-up">
            No "lite" versions. Every deployment model delivers the same guarantees.
          </p>
        </div>

        {/* Parity Cards */}
        <div className="grid grid-cols-4 gap-4 mb-12 r-up">
          {PARITY_CARDS.map(({ Icon, bg, color, label }) => (
            <div key={label} className="card-no-hover p-5 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3" style={{ background: bg }}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <p className="text-gray-800 text-sm font-medium">{label}</p>
              <p className={`text-[10px] font-mono mt-1 ${color}`}>Identical</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="card-no-hover overflow-hidden r-up">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(245,243,240,0.5)" }}>
                <th className="text-left text-gray-500 text-[11px] uppercase tracking-wider font-light p-[0.85rem_1.25rem]">Capability</th>
                <th className="text-center text-indigo-500 text-[11px] uppercase tracking-wider font-medium p-[0.85rem_1.25rem]">On-Prem</th>
                <th className="text-center text-sky-500   text-[11px] uppercase tracking-wider font-medium p-[0.85rem_1.25rem]">Private</th>
                <th className="text-center text-teal-500  text-[11px] uppercase tracking-wider font-medium p-[0.85rem_1.25rem]">Hybrid</th>
                <th className="text-center text-pink-500  text-[11px] uppercase tracking-wider font-medium p-[0.85rem_1.25rem]">Air-Gap</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row) => (
                <tr
                  key={row}
                  className="hover:bg-indigo-500/[0.02] transition-colors"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}
                >
                  <td className="text-gray-700 text-sm font-light" style={{ padding: "0.85rem 1.25rem" }}>{row}</td>
                  {[0, 1, 2, 3].map((i) => (
                    <td key={i} className="text-center" style={{ padding: "0.85rem 1.25rem" }}>
                      <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}