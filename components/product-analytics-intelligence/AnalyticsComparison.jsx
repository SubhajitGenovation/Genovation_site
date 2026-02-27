"use client";
import { Check } from "lucide-react";

const rows = [
  {
    cap: "Analytics Model",
    bi: "Charts & dashboards",
    di: "Narrative explanation",
    diCls: "text-amber-600",
    diBg: "bg-amber-500/[0.1]",
  },
  {
    cap: "Root-Cause",
    bi: "Manual investigation",
    di: "Automated",
    diCls: "text-amber-600",
    diBg: "bg-amber-500/[0.1]",
  },
  {
    cap: "Transparency",
    bi: "Black-box ML",
    di: "Explainable",
    diCls: "text-amber-600",
    diBg: "bg-amber-500/[0.1]",
  },
  {
    cap: "Data Handling",
    bi: "External cloud",
    di: "Sovereign",
    diCls: "text-amber-600",
    diBg: "bg-amber-500/[0.1]",
  },
  {
    cap: "Governance",
    bi: "No audit trail",
    di: "Full lineage",
    diCls: "text-emerald-600",
    diBg: "bg-emerald-500/[0.1]",
  },
];

export default function AnalyticsComparison() {
  return (
    <section
      className="py-32 md:py-40 section-warm relative overflow-hidden"
      id="comparison"
    >
      <div
        className="orb w-[500px] h-[400px] bg-amber-500/[0.03]"
        style={{ top: "10%", right: "10%" }}
      />
      <div
        className="orb w-[400px] h-[350px] bg-orange-500/[0.03]"
        style={{ bottom: "10%", left: "15%" }}
      />

      <div className="relative max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 r-up">
            <span className="text-[11px] text-amber-600 font-mono tracking-[0.2em]">05</span>
            <div className="w-8 h-px bg-amber-500/40" />
            <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">
              How This Is Different
            </span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl mb-6 r-up">
            Decision-Grade{" "}
            <span className="text-gradient-amber">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-500 font-light r-up">
            This is not a BI replacement. It is a decision-intelligence layer above BI.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border border-black/[0.08] r-up bg-white/70">
          <table className="w-full">
            <thead>
              <tr style={{ background: "rgba(0,0,0,0.03)" }}>
                <th className="text-left p-5 text-sm font-medium text-gray-700 border-b border-black/[0.06]">
                  Capability
                </th>
                <th className="text-center p-5 text-sm font-light text-gray-400 border-b border-l border-black/[0.06]">
                  Traditional BI
                </th>
                <th className="text-center p-5 text-sm font-medium text-amber-600 border-b border-l border-black/[0.06]">
                  Decision Intelligence
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04]">
              {rows.map((row) => (
                <tr key={row.cap}>
                  <td className="p-5 text-sm text-gray-600">{row.cap}</td>
                  <td className="p-5 text-center text-sm text-gray-400 border-l border-black/[0.06]">
                    {row.bi}
                  </td>
                  <td className="p-5 text-center border-l border-black/[0.06] bg-amber-500/[0.04]">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 ${row.diBg} ${row.diCls} rounded-full text-xs font-medium`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      {row.di}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
