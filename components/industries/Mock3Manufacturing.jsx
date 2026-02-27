"use client";

import { LayoutDashboard, Truck, ClipboardCheck } from "lucide-react";

export default function Mock3Manufacturing() {
  return (
    <div className="app-mock" id="mock3">
      <div className="app-chrome">
        <div className="d r" /><div className="d y" /><div className="d g" />
        <span className="app-title">Mentis — Operations Dashboard</span>
        <span className="ml-auto text-[8px] font-mono text-gray-400">Plant: Detroit-North · Line 4</span>
      </div>
      <div className="app-body" style={{ flexDirection: "column", padding: 0 }}>
        <div style={{ display: "flex", flex: 1 }}>
          <div className="app-sidebar">
            <div className="sb-i act"><LayoutDashboard className="w-3.5 h-3.5 text-emerald-700" /></div>
            <div className="sb-i"><Truck className="w-3.5 h-3.5 text-gray-400" /></div>
            <div className="sb-i"><ClipboardCheck className="w-3.5 h-3.5 text-gray-400" /></div>
          </div>
          <div className="app-main">
            <div className="grid grid-cols-3 gap-2 anim-child" style={{ transitionDelay: "0.2s" }}>
              {[
                { val: "97.2%", color: "#10b981", lbl: "OEE" },
                { val: "4,218", color: "#1f2937", lbl: "Units/Day" },
                { val: "0.31%", color: "#10b981", lbl: "Defect Rate" },
              ].map((m, i) => (
                <div key={i} className="m-metric">
                  <div className="val" style={{ color: m.color }}>{m.val}</div>
                  <div className="lbl">{m.lbl}</div>
                </div>
              ))}
            </div>
            <div className="m-card anim-child" style={{ transitionDelay: "0.6s", borderLeft: "3px solid #b45309", padding: 10 }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="s-dot a" />
                <span className="text-[10px] font-medium text-amber-800">Alert — Conveyor C4</span>
              </div>
              <div className="text-[10px] text-gray-500 font-light">Vibration anomaly detected · Bearing wear (87% confidence)</div>
              <div className="text-[9px] text-gray-400 mt-1">Recommended: Schedule maintenance within 72hr</div>
            </div>
            {[
              { dot: "g", label: "Supply Chain", badge: "badge-g", val: "On Track" },
              { dot: "g", label: "SOP Compliance", badge: "badge-g", val: "98.4%" },
              { dot: "a", label: "Downtime Today", badge: "badge-a", val: "12 min" },
            ].map((r, i) => (
              <div key={i} className="m-row anim-child" style={{ transitionDelay: `${0.9 + i * 0.1}s` }}>
                <span className={`s-dot ${r.dot}`} />
                <span className="text-gray-600 font-light flex-1">{r.label}</span>
                <span className={`badge-sm ${r.badge}`}>{r.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="app-footer">
        <div className="live-dot" />
        <span>Real-time</span><span>·</span><span>Sensor: C4-VIB-07</span><span>·</span><span>SOP: MNT-4.2.1</span>
      </div>
    </div>
  );
}
