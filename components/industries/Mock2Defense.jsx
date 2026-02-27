"use client";

import { Search, Folder, ShieldAlert } from "lucide-react";

export default function Mock2Defense() {
  return (
    <div className="app-mock" id="mock2">
      <div className="app-chrome" style={{ background: "#2c1215" }}>
        <div className="d r" /><div className="d y" /><div className="d g" />
        <span className="app-title" style={{ color: "rgba(255,255,255,0.35)" }}>SECURE ENCLAVE — AIR-GAPPED</span>
        <span className="ml-auto badge-sm badge-r" style={{ fontSize: 8 }}>SECRET // NOFORN</span>
      </div>
      <div className="app-body">
        <div className="app-sidebar" style={{ background: "#faf8f7" }}>
          <div className="sb-i act"><Search className="w-3.5 h-3.5 text-emerald-700" /></div>
          <div className="sb-i"><Folder className="w-3.5 h-3.5 text-gray-400" /></div>
          <div className="sb-i"><ShieldAlert className="w-3.5 h-3.5 text-gray-400" /></div>
        </div>
        <div className="app-main" style={{ gap: 6 }}>
          <div className="app-search anim-child" style={{ transitionDelay: "0.2s" }}>
            <Search className="w-3 h-3 text-gray-400" />
            <span>satellite vulnerability assessment Q4</span>
          </div>
          <div className="text-[9px] text-gray-400 font-mono anim-child" style={{ transitionDelay: "0.5s" }}>
            3 results across 2 programs
          </div>
          {[
            { file: "SAT-VUL-2024-Q4.pdf", prog: "KEYSTONE", pages: 47, color: "#10b981", pct: 96, valColor: "text-emerald-700" },
            { file: "ORBITAL-THREAT-MATRIX.pdf", prog: "SENTINEL", pages: 23, color: "#06b6d4", pct: 89, valColor: "text-teal-700" },
            { file: "SIGINT-BRIEF-NE-2024.pdf", prog: "WATCHFIRE", pages: 12, color: "#64748b", pct: 74, valColor: "text-slate-600" },
          ].map((item, i) => (
            <div
              key={i}
              className="m-card anim-child"
              style={{ transitionDelay: `${0.7 + i * 0.2}s`, borderLeft: `3px solid ${item.color}`, padding: "8px 10px" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-700 font-light">{item.file}</span>
                <span className="badge-sm badge-r" style={{ fontSize: 7 }}>SECRET</span>
              </div>
              <div className="text-[9px] text-gray-400 mt-1">Program: {item.prog} · {item.pages} pages</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[8px] text-gray-400">Relevance</span>
                <div className="m-bar flex-1">
                  <div className="m-bar-fill" style={{ width: 0, background: item.color }} data-width={item.pct} />
                </div>
                <span className={`text-[8px] font-mono ${item.valColor}`}>{(item.pct / 100).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="app-footer" style={{ background: "#faf8f7" }}>
        <span className="s-dot g" /><span>Air-Gapped</span><span>·</span><span>Egress: NONE</span><span>·</span><span>Audit: df-0041</span>
      </div>
    </div>
  );
}
