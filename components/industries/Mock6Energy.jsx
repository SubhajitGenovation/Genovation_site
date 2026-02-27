"use client";

import { Gauge, Wrench, Leaf } from "lucide-react";

export default function Mock6Energy() {
  return (
    <div className="app-mock" id="mock6">
      <div className="app-chrome">
        <div className="d r" /><div className="d y" /><div className="d g" />
        <span className="app-title">Mentis — Grid Monitor</span>
        <span className="ml-auto text-[8px] font-mono text-gray-400">Northeast Region</span>
      </div>
      <div className="app-body">
        <div className="app-sidebar">
          <div className="sb-i act"><Gauge className="w-3.5 h-3.5 text-emerald-700" /></div>
          <div className="sb-i"><Wrench className="w-3.5 h-3.5 text-gray-400" /></div>
          <div className="sb-i"><Leaf className="w-3.5 h-3.5 text-gray-400" /></div>
        </div>
        <div className="app-main" style={{ gap: 5 }}>
          <div className="grid grid-cols-3 gap-2 anim-child" style={{ transitionDelay: "0.2s" }}>
            {[
              { val: "14.2", unit: "GW", lbl: "Total Load", color: "#1f2937" },
              { val: "98.7%", unit: "", lbl: "Stability", color: "#10b981" },
              { val: "60.00", unit: "Hz", lbl: "Frequency", color: "#1f2937" },
            ].map((m, i) => (
              <div key={i} className="m-metric">
                <div className="val" style={{ color: m.color }}>
                  {m.val}{m.unit && <span style={{ fontSize: 10, color: "#9ca3af" }}>{m.unit}</span>}
                </div>
                <div className="lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
          <div className="text-[8px] text-gray-400 font-mono uppercase tracking-wider mt-1 anim-child" style={{ transitionDelay: "0.5s" }}>
            Substations
          </div>
          {[
            { dot: "g", id: "NE-07", val: "4.1 GW", badge: "badge-g", status: "Nominal", delay: "0.6s" },
            { dot: "g", id: "NE-12", val: "3.8 GW", badge: "badge-g", status: "Nominal", delay: "0.7s" },
            { dot: "a", id: "NE-19", val: "3.2 GW", badge: "badge-a", status: "+8°C", delay: "0.8s" },
          ].map((r) => (
            <div key={r.id} className="m-row anim-child" style={{ transitionDelay: r.delay }}>
              <span className={`s-dot ${r.dot}`} />
              <span className="text-gray-600 font-light flex-1">{r.id}</span>
              <span className="text-[9px] text-gray-400 font-mono">{r.val}</span>
              <span className={`badge-sm ${r.badge}`}>{r.status}</span>
            </div>
          ))}
          <div className="m-card anim-child" style={{ transitionDelay: "1.1s", borderLeft: "3px solid #b45309", padding: "8px 10px" }}>
            <div className="text-[10px] text-amber-800 font-medium">Predicted peak: 15.1 GW in 4hr</div>
            <div className="text-[9px] text-gray-400 mt-0.5">Recommend pre-staging reserve Unit 7</div>
          </div>
        </div>
      </div>
      <div className="app-footer">
        <div className="live-dot" />
        <span>OT Isolated</span><span>·</span><span>NERC CIP Compliant</span><span>·</span><span>Audit: en-7234</span>
      </div>
    </div>
  );
}
