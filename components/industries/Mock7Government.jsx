"use client";

import { Gavel, Network, Compass, ShieldCheck } from "lucide-react";

export default function Mock7Government() {
  return (
    <div className="app-mock" id="mock7">
      <div className="app-chrome">
        <div className="d r" /><div className="d y" /><div className="d g" />
        <span className="app-title">Mentis — Sovereign Intelligence</span>
        <span className="ml-auto badge-sm badge-g" style={{ fontSize: 7 }}>SOVEREIGN</span>
      </div>
      <div className="app-body">
        <div className="app-sidebar">
          <div className="sb-i act"><Gavel className="w-3.5 h-3.5 text-emerald-700" /></div>
          <div className="sb-i"><Network className="w-3.5 h-3.5 text-gray-400" /></div>
          <div className="sb-i"><Compass className="w-3.5 h-3.5 text-gray-400" /></div>
        </div>
        <div className="app-main" style={{ gap: 6 }}>
          <div className="m-bubble m-user anim-child" style={{ transitionDelay: "0.2s" }}>
            Impact of EO 14110 on federal AI procurement?
          </div>
          <div className="m-bubble m-ai anim-child" style={{ transitionDelay: "0.6s" }}>
            EO 14110 §4.2 mandates red-team testing for dual-use foundation models, directly affecting DOD, DHS, and DOE procurement. NIST AI Risk Management Framework alignment is required.
          </div>
          <div className="m-card anim-child" style={{ transitionDelay: "1.0s", padding: "8px 10px" }}>
            <div className="text-[9px] text-gray-400 font-mono uppercase tracking-wider mb-1.5">Cross-References</div>
            <div className="space-y-1.5">
              <div style={{ borderLeft: "2px solid #10b981", paddingLeft: 8 }}>
                <div className="text-[10px] text-gray-600">EO 14110 §4.2 — AI Safety Requirements</div>
                <div className="text-[9px] text-gray-400">Dual-use model testing mandate</div>
              </div>
              <div style={{ borderLeft: "2px solid #06b6d4", paddingLeft: 8 }}>
                <div className="text-[10px] text-gray-600">NIST AI RMF — Alignment Score</div>
                <div className="text-[9px] text-gray-400">
                  Genovation: <span style={{ color: "#10b981", fontWeight: 500 }}>94%</span> · Gap: Red-team certification
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 anim-child" style={{ transitionDelay: "1.3s" }}>
            <span className="badge-sm badge-g"><ShieldCheck className="w-2.5 h-2.5" /> JUDGE Verified</span>
            <span className="badge-sm badge-g">FedRAMP High</span>
          </div>
        </div>
      </div>
      <div className="app-footer">
        <span className="s-dot g" /><span>Sovereign Cloud</span><span>·</span><span>NIST 800-171</span><span>·</span><span>Audit: gv-5501</span>
      </div>
    </div>
  );
}
