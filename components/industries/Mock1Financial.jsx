"use client";

import { MessageSquare, Search, FileText, BarChart2, ShieldCheck } from "lucide-react";

export default function Mock1Financial() {
  return (
    <div className="app-mock" id="mock1">
      <div className="app-chrome">
        <div className="d r" /><div className="d y" /><div className="d g" />
        <span className="app-title">Mentis — Compliance Intelligence</span>
      </div>
      <div className="app-body">
        <div className="app-sidebar">
          <div className="sb-i act"><MessageSquare className="w-3.5 h-3.5 text-emerald-700" /></div>
          <div className="sb-i"><Search className="w-3.5 h-3.5 text-gray-400" /></div>
          <div className="sb-i"><FileText className="w-3.5 h-3.5 text-gray-400" /></div>
          <div className="sb-i"><BarChart2 className="w-3.5 h-3.5 text-gray-400" /></div>
        </div>
        <div className="app-main" style={{ gap: 6 }}>
          <div className="m-bubble m-user anim-child" style={{ transitionDelay: "0.2s" }}>
            Does our AML framework satisfy DORA Article 15?
          </div>
          <div className="m-bubble m-ai anim-child" style={{ transitionDelay: "0.6s" }}>
            Your current AML framework covers transaction monitoring (Art. 15.2a) and third-party risk screening (Art. 15.3). However,{" "}
            <strong style={{ fontWeight: 500, color: "#92400e" }}>digital operational resilience testing</strong> under Art. 15.4 requires expanded ICT risk scenarios not present in the current framework.
          </div>
          <div className="flex flex-wrap gap-1.5 anim-child" style={{ transitionDelay: "1.0s" }}>
            {["AML-Policy-v4.2 §3.1", "DORA-Guide §15", "Board-Memo-Q3"].map((s) => (
              <span key={s} className="src-pill">
                <FileText className="w-2.5 h-2.5" />{s}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-1 anim-child" style={{ transitionDelay: "1.3s" }}>
            <span className="badge-sm badge-g"><ShieldCheck className="w-2.5 h-2.5" /> JUDGE Verified</span>
            <span className="badge-sm badge-g">94.2% Confidence</span>
            <span style={{ fontSize: 8, color: "#b0b0a8", fontFamily: "'Space Mono',monospace" }}>Audit: cf-2847</span>
          </div>
        </div>
      </div>
      <div className="app-footer">
        <div className="live-dot" />
        <span>On-Premise</span><span>·</span><span>2,847 docs indexed</span><span>·</span><span>Data Sovereign</span>
      </div>
    </div>
  );
}
