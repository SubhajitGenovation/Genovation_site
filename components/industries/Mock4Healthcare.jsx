"use client";

import { BookOpen, FlaskConical, Users, Search, FileText, Lock } from "lucide-react";

export default function Mock4Healthcare() {
  return (
    <div className="app-mock" id="mock4">
      <div className="app-chrome">
        <div className="d r" /><div className="d y" /><div className="d g" />
        <span className="app-title">Mentis — Clinical Knowledge</span>
        <span className="ml-auto badge-sm badge-g" style={{ fontSize: 7 }}>
          <Lock className="w-2 h-2 inline" /> PHI Protected
        </span>
      </div>
      <div className="app-body">
        <div className="app-sidebar">
          <div className="sb-i act"><BookOpen className="w-3.5 h-3.5 text-emerald-700" /></div>
          <div className="sb-i"><FlaskConical className="w-3.5 h-3.5 text-gray-400" /></div>
          <div className="sb-i"><Users className="w-3.5 h-3.5 text-gray-400" /></div>
        </div>
        <div className="app-main" style={{ gap: 6 }}>
          <div className="app-search anim-child" style={{ transitionDelay: "0.2s" }}>
            <Search className="w-3 h-3 text-gray-400" />
            <span>Sepsis protocol for pediatric ICU</span>
          </div>
          <div className="m-card anim-child" style={{ transitionDelay: "0.5s", padding: 10 }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-medium text-gray-700">Protocol: PICU-SEP-2024-v3</span>
              <span className="badge-sm badge-g" style={{ fontSize: 7 }}>Grade A Evidence</span>
            </div>
            {[
              { color: "#10b981", title: "1. Initial Recognition (0–15 min)", desc: "qSOFA ≥ 2 → Blood cultures × 2 → Broad-spectrum ABX within 60 min" },
              { color: "#06b6d4", title: "2. Fluid Resuscitation (15–60 min)", desc: "20mL/kg crystalloid bolus → Reassess after each bolus (max 60mL/kg)" },
              { color: "#64748b", title: "3. Escalation Criteria", desc: "Persistent hypotension → Vasopressor initiation → ICU consult" },
            ].map((s, i) => (
              <div key={i} style={{ borderLeft: `2px solid ${s.color}`, paddingLeft: 8, marginBottom: i < 2 ? 6 : 0 }}>
                <div className="text-[10px] font-medium text-gray-600 mb-0.5">{s.title}</div>
                <div className="text-[9px] text-gray-400 font-light leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 anim-child" style={{ transitionDelay: "1.0s" }}>
            {["SSC Guidelines 2024", "Internal: PICU-Manual"].map((s) => (
              <span key={s} className="src-pill"><FileText className="w-2.5 h-2.5" />{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="app-footer">
        <span className="s-dot g" /><span>HIPAA Enforced</span><span>·</span><span>PHI: None Exposed</span><span>·</span><span>Updated: 2024-09</span>
      </div>
    </div>
  );
}
