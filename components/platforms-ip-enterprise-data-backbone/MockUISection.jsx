"use client";
import { useState, useEffect } from "react";
import {
  Activity, Zap, Car, Truck,
  Mic, Send, Lightbulb, Clock,
  Upload, Copy, AlertTriangle, CheckCircle
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TABS = [
  { id: "manufacturing", label: "Manufacturing",            icon: <Activity className="w-3 h-3" /> },
  { id: "energy",        label: "Energy & Power",           icon: <Zap className="w-3 h-3" /> },
  { id: "automotive",   label: "Automotive",               icon: <Car className="w-3 h-3" /> },
  { id: "logistics",    label: "Supply Chain & Logistics",  icon: <Truck className="w-3 h-3" /> },
];

const TAB_DATA = {
  manufacturing: {
    url: "backbone.genovation.io/manufacturing",
    context: "Connected to 467 data streams · Manufacturing Floor",
    query: "Show me which machines on Floor 3 had the most downtime this week",
    responseTitle: "Floor 3 Downtime Analysis — Based on 12,847 sensor events from 23 machines this week",
    responseBody: [
      { pre: "CNC Mill #7", bold: true, text: " had the highest downtime at ", highlight: "14.2 hours", rest: " — primarily from thermal shutdowns between 2–4 PM. The coolant flow sensor (CSF-307) shows readings 23% below baseline since Monday, suggesting a failing pump." },
      { pre: "Press Line 8", bold: true, text: " was second at ", highlight: "8.7 hours", rest: "; caused by material feed jams traced to Supplier Lot #4491 (thicker gauge stock)." },
      { pre: "Welding Cell #3", bold: true, text: " logged ", highlight: "6.1 hours", rest: " from robot recalibration after a fixture swap." },
    ],
    recommendation: "Schedule preventive maintenance on CNC Mill #7's coolant pump before Friday. Historical pattern shows CSF-307 failures lead to spindle damage within 5 operating days. Estimated cost: $340 (pump) vs $32,800 (spindle replacement).",
    meta: { sources: "4 streams", confidence: "94.2%", latency: "1.2s", lineage: "verified" },
    machineGrid: {
      title: "Floor 3 — Live Machine Status",
      machines: [
        { name: "CNC Mill #3",   stat: "98.2%",  status: "ok" },
        { name: "CNC Mill #6",   stat: "98.1%",  status: "ok" },
        { name: "CNC Mill #7",   stat: "14.2h downtime", status: "alert", expanded: true,
          detail: { sensor: "Coolant Flow (CSF-307)", sensorVal: 23, thermalSpike: true } },
        { name: "Lathe #2",      stat: "91.3%",  status: "ok" },
        { name: "Grinder #1",    stat: "88.4%",  status: "ok" },
        { name: "Press Line 8",  stat: "8.7h · Lot #4491", status: "warn" },
        { name: "Lathe #3",      stat: "98.3%",  status: "ok" },
        { name: "Assembly #1",   stat: "96.7%",  status: "ok" },
        { name: "Welding #3",    stat: "6.1h · Recall", status: "warn" },
        { name: "QC Alpha",      stat: "88.1%",  status: "ok" },
        { name: "Paint #1",      stat: "145+",   status: "idle" },
        { name: "Packaging",     stat: "87.3%",  status: "ok" },
      ],
    },
    dataSources: ["SCADA", "MES", "IoT Sensors", "ERP"],
    rightPanel: {
      barTitle: "Downtime This Week",
      bars: [
        { label: "CNC Mill #7",     value: 14.2, max: 16, color: "bg-red-400",    textColor: "text-red-500" },
        { label: "Press Line 8",    value: 8.7,  max: 16, color: "bg-orange-400", textColor: "text-orange-500" },
        { label: "Welding Cell #3", value: 6.1,  max: 16, color: "bg-amber-400",  textColor: "text-amber-500" },
      ],
      metricsTitle: "Floor 3 Metrics",
      metrics: [
        { label: "Avg OEE",     value: "91.4%",  highlight: true },
        { label: "Throughput",  value: "847/hr", highlight: false },
        { label: "Defect Rate", value: "0.8%",   highlight: false },
        { label: "Energy",      value: "342 kw", highlight: false },
      ],
      recentQueries: [
        { text: "What caused the quality dip on Line A last Tuesday?", time: "5h ago" },
        { text: "Predict maintenance needs for next week",              time: "6h ago" },
      ],
    },
  },
  energy: {
    url: "backbone.genovation.io/energy",
    context: "Connected to 312 data streams · Grid Operations",
    query: "What caused the demand spike in Zone 4 this morning?",
    responseTitle: "Zone 4 Demand Analysis — Based on 8,421 grid sensor events from 06:00–10:00 AM",
    responseBody: [
      { pre: "Industrial cluster IC-4B", bold: true, text: " drew an unexpected ", highlight: "+340 MW", rest: " above forecast at 08:14 AM, triggered by simultaneous startup of 3 arc furnaces." },
      { pre: "Wind generation", bold: false, text: " dropped ", highlight: "18%", rest: " between 07:50–08:30 due to speed variance at North Farm." },
      { pre: "Peaker units GT-7 and GT-9", bold: true, text: " were dispatched successfully at 08:17, stabilizing frequency to ", highlight: "50.01 Hz", rest: "." },
    ],
    recommendation: "Pre-position GT-11 for standby tomorrow 07:00–09:00. Historical data shows IC-4B runs full production on Wednesdays — proactive dispatch saves ~$48K in spot market premiums.",
    meta: { sources: "6 streams", confidence: "97.1%", latency: "0.8s", lineage: "verified" },
    machineGrid: {
      title: "Zone 4 — Asset Live Status",
      machines: [
        { name: "GT-7",         stat: "Active",    status: "ok" },
        { name: "GT-9",         stat: "Active",    status: "ok" },
        { name: "IC-4B",        stat: "+340 MW",   status: "alert", expanded: true,
          detail: { sensor: "Load Deviation", sensorVal: 68, thermalSpike: false } },
        { name: "Wind Farm N",  stat: "−18%",      status: "warn" },
        { name: "Solar PV 3",   stat: "76%",       status: "ok" },
        { name: "GT-11",        stat: "Standby",   status: "idle" },
        { name: "Substation 4", stat: "99.1%",     status: "ok" },
        { name: "Battery S1",   stat: "84%",       status: "ok" },
        { name: "Feeder F-12",  stat: "89% cap",   status: "warn" },
        { name: "Hydro H2",     stat: "92.4%",     status: "ok" },
        { name: "Grid Tie",     stat: "Stable",    status: "ok" },
        { name: "SCADA Node",   stat: "Online",    status: "ok" },
      ],
    },
    dataSources: ["SCADA", "EMS", "IoT Sensors", "Weather API"],
    rightPanel: {
      barTitle: "Grid Health",
      bars: [
        { label: "Solar Output", value: 76, max: 100, color: "bg-amber-400",   textColor: "text-amber-500" },
        { label: "Wind Output",  value: 58, max: 100, color: "bg-emerald-400", textColor: "text-emerald-500" },
        { label: "Load Factor",  value: 89, max: 100, color: "bg-cyan-400",    textColor: "text-cyan-500" },
      ],
      metricsTitle: "Grid Metrics",
      metrics: [
        { label: "Frequency",  value: "50.01Hz", highlight: true },
        { label: "Total Load", value: "4.82 GW", highlight: false },
        { label: "Renewables", value: "44%",     highlight: false },
        { label: "Carbon",     value: "182g/kWh",highlight: false },
      ],
      recentQueries: [
        { text: "Forecast tomorrow's peak demand window", time: "2h ago" },
        { text: "Which feeders are at >85% capacity?",   time: "3h ago" },
      ],
    },
  },
  automotive: {
    url: "backbone.genovation.io/automotive",
    context: "Connected to 891 data streams · Assembly Plant",
    query: "Why is first-pass yield on Station 11 lower than last week?",
    responseTitle: "Station 11 Yield Analysis — Based on 6,204 VIN scan events this week",
    responseBody: [
      { pre: "First-pass yield", bold: true, text: " dropped from ", highlight: "98.1% → 95.4%", rest: " starting Monday. 68% of failures trace to torque spec deviation on bolt pattern BP-7." },
      { pre: "Tool calibration logs", bold: false, text: " show torque wrench TW-114 was last certified ", highlight: "47 days ago", rest: " (spec: 30-day cycle)." },
      { pre: "Welding Cell #3", bold: true, text: " shows ", highlight: "+2.1% defect rate", rest: " in the first 30 min after 14:00 shift changeover." },
    ],
    recommendation: "Pull TW-114 for immediate recalibration. Assign experienced operator to Station 11 during 14:00 handover for 5 days. Estimated yield recovery: +2.4% within 48 hours.",
    meta: { sources: "5 streams", confidence: "96.8%", latency: "1.1s", lineage: "verified" },
    machineGrid: {
      title: "Assembly Plant — Station Status",
      machines: [
        { name: "S-01 Feed",    stat: "99.1%", status: "ok" },
        { name: "S-03 Weld",    stat: "98.4%", status: "ok" },
        { name: "S-11 Assy",    stat: "95.4% FPY", status: "alert", expanded: true,
          detail: { sensor: "TW-114 Torque Dev.", sensorVal: 47, thermalSpike: false } },
        { name: "S-14 QC",      stat: "97.8%", status: "ok" },
        { name: "S-07 Paint",   stat: "98.0%", status: "ok" },
        { name: "S-09 Trim",    stat: "97.2%", status: "warn" },
        { name: "S-12 Final",   stat: "96.1%", status: "ok" },
        { name: "Robot R-4",    stat: "Active", status: "ok" },
        { name: "Conveyor B",   stat: "14.3m/s", status: "ok" },
        { name: "VIN Scanner",  stat: "Online", status: "ok" },
        { name: "Press P-2",    stat: "Idle",   status: "idle" },
        { name: "Packaging",    stat: "88 u/min", status: "ok" },
      ],
    },
    dataSources: ["MES", "PLCs", "IoT Sensors", "ERP"],
    rightPanel: {
      barTitle: "Plant Quality",
      bars: [
        { label: "S-11 FPY",    value: 95.4, max: 100, color: "bg-amber-400",   textColor: "text-amber-500" },
        { label: "Overall FPY", value: 97.8, max: 100, color: "bg-emerald-400", textColor: "text-emerald-500" },
        { label: "Takt Adhr.",  value: 93,   max: 100, color: "bg-cyan-400",    textColor: "text-cyan-500" },
      ],
      metricsTitle: "Plant Metrics",
      metrics: [
        { label: "Units/Hr",    value: "142",   highlight: true },
        { label: "Takt Time",   value: "25.3s", highlight: false },
        { label: "Defect Rate", value: "0.22%", highlight: false },
        { label: "OEE",         value: "91.4%", highlight: false },
      ],
      recentQueries: [
        { text: "Which supplier lots correlate with defects?", time: "1h ago" },
        { text: "Show rework trends for this month",           time: "3h ago" },
      ],
    },
  },
  logistics: {
    url: "backbone.genovation.io/logistics",
    context: "Connected to 1,204 data streams · Global Supply Chain",
    query: "Which shipments are most at risk of missing delivery this week?",
    responseTitle: "Critical Shipment Risk Analysis — Based on 3,891 logistics events across 14 carriers",
    responseBody: [
      { pre: "SH-4471", bold: true, text: " (TSMC → Eindhoven) is highest risk: ", highlight: "+7 day delay", rest: " at Rotterdam due to port congestion. Current ETA misses production schedule by 4 days." },
      { pre: "SH-4502", bold: true, text: " (Korea → EU) is on customs hold in Busan — ", highlight: "documentation gap", rest: " on hazmat reclassification. Est. resolution: 3–5 days." },
      { pre: "14 additional shipments", bold: false, text: " share the Rotterdam routing — ", highlight: "collective exposure: €2.1M", rest: " in production impact if not rerouted." },
    ],
    recommendation: "Reroute SH-4471 via Antwerp (adds €12K freight, saves €340K production stoppage). Escalate SH-4502 customs documentation to broker KL-9 — 6-hour resolution window closes at 17:00.",
    meta: { sources: "8 streams", confidence: "93.5%", latency: "1.4s", lineage: "verified" },
    machineGrid: {
      title: "Global Shipments — Critical Paths",
      machines: [
        { name: "SH-4471",   stat: "+7d delay",   status: "alert", expanded: true,
          detail: { sensor: "Rotterdam Congestion", sensorVal: 82, thermalSpike: false } },
        { name: "SH-4489",   stat: "On track",    status: "ok" },
        { name: "SH-4502",   stat: "Customs HOLD",status: "alert" },
        { name: "SH-4510",   stat: "+3d delay",   status: "warn" },
        { name: "SH-4521",   stat: "On track",    status: "ok" },
        { name: "SH-4534",   stat: "At risk",     status: "warn" },
        { name: "SH-4540",   stat: "Delivered",   status: "idle" },
        { name: "SH-4547",   stat: "On track",    status: "ok" },
        { name: "SH-4551",   stat: "On track",    status: "ok" },
        { name: "SH-4558",   stat: "+1d delay",   status: "warn" },
        { name: "SH-4562",   stat: "On track",    status: "ok" },
        { name: "SH-4570",   stat: "On track",    status: "ok" },
      ],
    },
    dataSources: ["TMS", "Carrier APIs", "Port Data", "Customs"],
    rightPanel: {
      barTitle: "Shipment Health",
      bars: [
        { label: "On-Time",  value: 91.2, max: 100, color: "bg-emerald-400", textColor: "text-emerald-500" },
        { label: "At Risk",  value: 8.8,  max: 100, color: "bg-amber-400",   textColor: "text-amber-500" },
        { label: "Critical", value: 0.76, max: 100, color: "bg-red-400",     textColor: "text-red-500" },
      ],
      metricsTitle: "Supply Metrics",
      metrics: [
        { label: "In Transit", value: "1,842", highlight: true },
        { label: "Delayed",    value: "162",   highlight: false },
        { label: "Critical",   value: "14",    highlight: false },
        { label: "On Time",    value: "91.2%", highlight: false },
      ],
      recentQueries: [
        { text: "Rerouting options for Rotterdam shipments?", time: "30m ago" },
        { text: "Carrier performance report — 30 days",      time: "2h ago" },
      ],
    },
  },
};

/* ─── Right Panel ─── */
function RightPanel({ data }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Bars */}
      <div>
        <div className="flex items-center gap-1.5 mb-3">
          <Activity className="w-3 h-3 text-black/25" />
          <span className="text-[10px] text-black/40 font-light">{data.barTitle}</span>
        </div>
        <div className="flex flex-col gap-2">
          {data.bars.map((bar) => (
            <div key={bar.label}>
              <div className="flex justify-between mb-1">
                <span className="text-[10px] text-black/50 font-light">{bar.label}</span>
                <span className={`text-[10px] font-mono font-medium ${bar.textColor}`}>
                  {bar.max === 16 ? `${bar.value}h` : `${bar.value}%`}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-black/[0.05]">
                <div className={`h-full rounded-full ${bar.color}`} style={{ width: `${(bar.value / bar.max) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-black/[0.06]" />

      {/* Metrics grid */}
      <div>
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-3 h-3 text-black/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          <span className="text-[10px] text-black/40 font-light">{data.metricsTitle}</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {data.metrics.map((m) => (
            <div key={m.label} className="p-2.5 rounded-xl bg-black/[0.03] border border-black/[0.05]">
              <div className="text-[8px] text-black/30 font-light mb-0.5">{m.label}</div>
              <div className={`text-[13px] font-light ${m.highlight ? "text-emerald-600" : "text-gray-800"}`}>{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-black/[0.06]" />

      {/* Recent queries */}
      <div>
        <div className="flex items-center gap-1.5 mb-2">
          <Clock className="w-3 h-3 text-black/25" />
          <span className="text-[10px] text-black/40 font-light">Recent Queries</span>
        </div>
        <div className="flex flex-col gap-2">
          {data.recentQueries.map((q, i) => (
            <div key={i} className="px-2.5 py-2 rounded-lg bg-black/[0.02] border border-black/[0.04] cursor-pointer hover:bg-black/[0.05] transition-colors">
              <div className="text-[10px] text-black/45 font-light leading-snug">{q.text}</div>
              <div className="text-[8px] text-black/25 font-mono mt-0.5">{q.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Machine Grid ─── */
function MachineGrid({ grid }) {
  const statusDot = {
    ok:    "bg-emerald-400",
    warn:  "bg-amber-400",
    alert: "bg-red-400",
    idle:  "bg-black/20",
  };
  const statusText = {
    ok:    "text-emerald-600",
    warn:  "text-amber-600",
    alert: "text-red-600",
    idle:  "text-black/30",
  };
  const cardBg = {
    ok:    "bg-black/[0.02] border-black/[0.06]",
    warn:  "bg-amber-500/[0.05] border-amber-500/[0.2]",
    alert: "bg-red-500/[0.05] border-red-500/[0.2]",
    idle:  "bg-black/[0.02] border-dashed border-black/[0.08]",
  };

  return (
    <div className="mt-3 p-3 rounded-xl bg-black/[0.02] border border-black/[0.06]">
      {/* Grid header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-medium text-black/50">{grid.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[8px] text-black/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />Running
          </span>
          <span className="flex items-center gap-1 text-[8px] text-black/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />Warning
          </span>
          <span className="flex items-center gap-1 text-[8px] text-black/30">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />Down
          </span>
        </div>
      </div>

      {/* Machine cards grid */}
      <div className="grid grid-cols-4 gap-1.5">
        {grid.machines.map((m) => (
          <div
            key={m.name}
            className={`rounded-lg border p-2 ${cardBg[m.status]} ${m.expanded ? "col-span-1 row-span-2" : ""}`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-medium text-black/50">{m.name}</span>
              {m.status === "alert" && (
                <span className="text-[7px] text-red-500 font-mono bg-red-500/10 px-1 py-0.5 rounded">⚠ ALERT</span>
              )}
              {m.status !== "alert" && (
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusDot[m.status]}`} />
              )}
            </div>
            <div className={`text-[9px] font-light ${statusText[m.status]}`}>{m.stat}</div>

            {/* Expanded detail for alert machine */}
            {m.expanded && m.detail && (
              <div className="mt-2 flex flex-col gap-1.5">
                {/* Sensor bar */}
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[8px] text-black/30 font-light">{m.detail.sensor}</span>
                    <span className="text-[8px] text-red-400 font-mono">{m.detail.sensorVal}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-black/[0.06]">
                    <div className="h-full rounded-full bg-red-400" style={{ width: `${m.detail.sensorVal}%` }} />
                  </div>
                </div>
                {/* Thermal spike mini chart */}
                {m.detail.thermalSpike && (
                  <div>
                    <div className="text-[8px] text-black/25 font-light mb-0.5">Thermal (2–4 PM spike)</div>
                    <div className="flex items-end gap-0.5 h-5">
                      {[3,3,4,4,4,5,4,5,8,10,9,8,7,5,4,3,4,4,3,3].map((v, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm ${i >= 8 && i <= 12 ? "bg-red-400" : "bg-emerald-400/40"}`}
                          style={{ height: `${v * 10}%` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom label */}
      <div className="flex items-center justify-end mt-2 gap-1">
        <span className="text-[8px] text-black/20 font-mono">Interactive View →</span>
      </div>
    </div>
  );
}

/* ─── Chat Panel ─── */
function ChatPanel({ data, tabBg }) {
  return (
    <div className="flex flex-col gap-3">
      {/* Query bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/70 border border-black/[0.08]">
        <svg className="w-3 h-3 text-black/25 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <span className="flex-1 text-[11px] text-black/40 font-light truncate">{data.query}</span>
        <Mic className="w-3 h-3 text-black/25 flex-shrink-0" />
        <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${tabBg}`}>
          <Send className="w-3 h-3 text-white" />
        </div>
      </div>

      {/* Action chips */}
      <div className="flex gap-1.5 flex-wrap">
        {["Compare last month", "Root cause analysis", "Export to report"].map((btn) => (
          <button key={btn} className="px-2.5 py-1 rounded-lg bg-black/[0.04] border border-black/[0.07] text-[9px] text-black/40 font-light hover:bg-black/[0.07] transition-colors">
            {btn}
          </button>
        ))}
      </div>

      {/* AI response */}
      <div className="flex items-start gap-2.5">
        <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${tabBg}`}>
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-[11px] font-medium text-black/55">{data.responseTitle}</div>

          {data.responseBody.map((line, i) => (
            <p key={i} className="text-[11px] text-black/50 font-light leading-relaxed">
              {line.bold
                ? <><strong className="font-semibold text-black/65">{line.pre}</strong>{line.text}</>
                : <>{line.pre}{line.text}</>
              }
              <span className="text-emerald-600 font-medium">{line.highlight}</span>
              {line.rest}
            </p>
          ))}

          {/* Recommendation */}
          <div className="p-3 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/[0.15]">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Lightbulb className="w-3 h-3 text-emerald-600" />
              <span className="text-[9px] text-emerald-600 font-semibold tracking-widest uppercase">Recommendation</span>
            </div>
            <p className="text-[10px] text-black/45 font-light leading-relaxed">{data.recommendation}</p>
          </div>

          {/* Meta tags */}
          <div className="flex flex-wrap gap-1.5">
            {[
              `sources: ${data.meta.sources}`,
              `confidence: ${data.meta.confidence}`,
              `latency: ${data.meta.latency}`,
              `lineage: ${data.meta.lineage} ✓`,
            ].map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-full bg-black/[0.04] border border-black/[0.06] text-[8px] text-black/30 font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Machine grid */}
      <MachineGrid grid={data.machineGrid} />

      {/* Active data sources */}
      <div className="flex items-center gap-2 pt-1">
        <span className="text-[9px] text-black/30 font-light">Active Data Sources</span>
        <div className="flex gap-1.5">
          {data.dataSources.map((src) => (
            <span key={src} className="px-2 py-0.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.15] text-[8px] text-emerald-600 font-mono">
              {src}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Export ─── */
export default function MockUISection() {
  const [activeTab, setActiveTab] = useState("manufacturing");

  const tabColorMap = {
    manufacturing: "bg-emerald-500",
    energy:        "bg-amber-500",
    automotive:    "bg-violet-500",
    logistics:     "bg-blue-500",
  };
  const tabActiveBadge = {
    manufacturing: "bg-emerald-500/[0.1] text-emerald-600 border-emerald-500/[0.2]",
    energy:        "bg-amber-500/[0.1]   text-amber-600   border-amber-500/[0.2]",
    automotive:    "bg-violet-500/[0.1]  text-violet-600  border-violet-500/[0.2]",
    logistics:     "bg-blue-500/[0.1]    text-blue-600    border-blue-500/[0.2]",
  };

  const data = TAB_DATA[activeTab];
  const tabBg = tabColorMap[activeTab];

  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      });
    });
  }, []);

  return (
    <section id="mockUI" className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[700px] h-[500px] bg-emerald-500/[0.04]" style={{ top: "10%", right: "5%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
            <Activity className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Intelligence Layer</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Ask in Plain<br />
            <span className="text-gradient">Human Language</span>
          </h2>
          <p className="mt-6 text-base text-gray-500 font-light max-w-xl mx-auto r-up">
            No dashboards to navigate. No SQL to write. Ask a question about your operations in any language you speak — get an intelligent, contextualized answer with real-time visualization.
          </p>
        </div>

        {/* Pill tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 r-up flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-light border transition-all duration-300 ${
                activeTab === tab.id
                  ? tabActiveBadge[tab.id]
                  : "bg-black/[0.04] border-black/[0.08] text-gray-500 hover:text-gray-700 hover:bg-black/[0.07]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Browser window */}
        <div
          className="r-up rounded-2xl overflow-hidden border border-black/[0.08] shadow-2xl shadow-black/[0.05]"
          style={{ background: "rgba(250,249,247,0.98)" }}
        >
          {/* macOS chrome */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-black/[0.06]" style={{ background: "rgba(244,242,240,0.95)" }}>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-white/70 border border-black/[0.07] text-[10px] text-black/35 font-mono">
                <svg className="w-2.5 h-2.5 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                {data.url}
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-40">
              <Upload className="w-3 h-3 text-black/50" />
              <Copy className="w-3 h-3 text-black/50" />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-black/[0.05]">
            <div className="flex items-center gap-2.5">
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${tabBg}`}>
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>
              </div>
              <div>
                <div className="text-[12px] font-medium" style={{ color: "#1a1a2e" }}>Backbone Intelligence</div>
                <div className="text-[9px] text-black/30 font-light">{data.context}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] text-emerald-600 font-light">All Systems Live</span>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-semibold ${tabBg}`}>
                JR
              </div>
            </div>
          </div>

          {/* 2-col content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px]">
            {/* Left chat */}
            <div className="p-5 border-r border-black/[0.05] overflow-y-auto max-h-[600px]">
              <div key={activeTab} style={{ animation: "fadeIn 0.3s ease-out" }}>
                <ChatPanel data={data} tabBg={tabBg} />
              </div>
            </div>

            {/* Right metrics */}
            <div className="p-5 overflow-y-auto max-h-[600px]">
              <div key={activeTab + "_r"} style={{ animation: "fadeIn 0.3s ease-out" }}>
                <RightPanel data={data.rightPanel} />
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-2.5 border-t border-black/[0.05]" style={{ background: "rgba(244,242,240,0.7)" }}>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] text-black/30 font-mono">Backbone stream active — 89,241 events/sec</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-2.5 h-2.5 text-black/20" />
              <span className="text-[9px] text-black/25 font-mono">Last sync: &lt;100ms ago</span>
            </div>
          </div>
        </div>

        {/* Caption below window */}
        <p className="text-center text-[13px] text-gray-400 font-light mt-6 r-up">
          This is what intelligence looks like when your data foundation is right
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
