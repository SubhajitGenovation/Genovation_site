"use client";

import { FlaskConical, FileCheck2, BookOpen, Lock } from "lucide-react";

export default function Mock5Pharma() {
  return (
    <div className="app-mock" id="mock5">
      <div className="app-chrome">
        <div className="d r" /><div className="d y" /><div className="d g" />
        <span className="app-title">Mentis — Research Pipeline</span>
        <span className="ml-auto badge-sm badge-b" style={{ fontSize: 7 }}>
          <Lock className="w-2 h-2 inline" /> IP Secured
        </span>
      </div>
      <div className="app-body">
        <div className="app-sidebar">
          <div className="sb-i act"><FlaskConical className="w-3.5 h-3.5 text-emerald-700" /></div>
          <div className="sb-i"><FileCheck2 className="w-3.5 h-3.5 text-gray-400" /></div>
          <div className="sb-i"><BookOpen className="w-3.5 h-3.5 text-gray-400" /></div>
        </div>
        <div className="app-main" style={{ gap: 6 }}>
          {/* Pipeline Card */}
          <div className="m-card anim-child" style={{ transitionDelay: "0.2s", padding: 10 }}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-medium text-gray-700">GNV-4821</span>
              <span className="text-[9px] text-gray-400 font-mono">JAK2 · Myelofibrosis</span>
            </div>
            <div className="space-y-2">
              {[
                { label: "Discovery", pct: 100, color: "#10b981", valColor: "text-emerald-700" },
                { label: "Preclinical", pct: 82, color: "#06b6d4", valColor: "text-teal-700" },
                { label: "Phase I", pct: 0, color: "#cbd5e1", valColor: "text-gray-400", dash: true },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] text-gray-500">{s.label}</span>
                    <span className={`text-[8px] font-mono ${s.valColor}`}>{s.dash ? "—" : `${s.pct}%`}</span>
                  </div>
                  <div className="m-bar">
                    <div className="m-bar-fill" style={{ width: 0, background: s.color }} data-width={s.pct} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Literature */}
          <div className="m-card anim-child" style={{ transitionDelay: "0.7s", padding: 10 }}>
            <div className="text-[9px] text-gray-400 font-mono uppercase tracking-wider mb-2">Literature Synthesis</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="m-metric" style={{ padding: 6 }}><div className="val" style={{ fontSize: 14 }}>12,847</div><div className="lbl">Papers Indexed</div></div>
              <div className="m-metric" style={{ padding: 6 }}><div className="val" style={{ fontSize: 14, color: "#10b981" }}>342</div><div className="lbl">Relevant</div></div>
            </div>
          </div>

          {/* Alert */}
          <div className="m-card anim-child" style={{ transitionDelay: "1.0s", borderLeft: "3px solid #b45309", padding: "8px 10px" }}>
            <div className="flex items-center gap-2">
              <span className="s-dot a" />
              <span className="text-[10px] text-amber-800">Patent Alert: 3 adjacent filings detected</span>
            </div>
            <div className="text-[9px] text-gray-400 mt-0.5">Review recommended before Phase I submission</div>
          </div>
        </div>
      </div>
      <div className="app-footer">
        <span className="s-dot g" /><span>IP Protected</span><span>·</span><span>Regulatory: Pre-IND</span><span>·</span><span>Audit: ph-0847</span>
      </div>
    </div>
  );
}
