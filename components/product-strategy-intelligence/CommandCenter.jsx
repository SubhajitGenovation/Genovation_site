"use client";

import { useState } from "react";
import {
  Search, Bell, Settings, Activity, TrendingUp, Users, Lightbulb,
  FileText, AlertTriangle, ArrowRight, Paperclip, Mic, Send,
  History, Download, Maximize2, ChevronUp,
} from "lucide-react";

/* ── tiny sub-components ── */

function StatCard({ label, icon: Icon, iconColor, value, delta }) {
  return (
    <div
      style={{
        padding: "1rem 1.2rem",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 12,
        flex: 1,
        minWidth: 0,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          style={{
            fontSize: "0.6rem",
            fontFamily: "var(--font-space-mono), monospace",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.12em",
          }}
        >
          {label}
        </span>
        <Icon size={14} color={iconColor} />
      </div>
      <div
        style={{
          fontSize: "2rem",
          fontFamily: "var(--font-space-mono), monospace",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1,
          marginBottom: 6,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "0.7rem",
          color: "rgba(255,255,255,0.35)",
          fontFamily: "var(--font-space-mono), monospace",
        }}
      >
        {delta}
      </div>
    </div>
  );
}

function TrendChart({ data }) {
  // Simple SVG sparkline
  const points = [
    { x: 80,  y: 220 },
    { x: 200, y: 200 },
    { x: 340, y: 185 },
    { x: 480, y: 155 },
    { x: 620, y: 120 },
    { x: 740, y: 80  },
    { x: 860, y: 45  },
  ];
  const lineD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaD = `${lineD} L 860 280 L 80 280 Z`;

  return (
    <div style={{ padding: "1rem 1.2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12 }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span style={{ fontSize: "0.62rem", fontFamily: "var(--font-space-mono), monospace", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>
            MARKET_TREND_ANALYSIS
          </span>
          <span style={{ padding: "2px 10px", borderRadius: 9999, background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", fontSize: "0.65rem", color: "#10b981", fontFamily: "var(--font-space-mono), monospace" }}>
            {data.chartTag}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {["1M","3M","1Y","All"].map((t) => (
            <button
              key={t}
              style={{
                padding: "3px 8px",
                borderRadius: 6,
                background: t === "1Y" ? "rgba(16,185,129,0.15)" : "transparent",
                border: t === "1Y" ? "1px solid rgba(16,185,129,0.3)" : "1px solid transparent",
                fontSize: "0.65rem",
                color: t === "1Y" ? "#10b981" : "rgba(255,255,255,0.3)",
                cursor: "pointer",
                fontFamily: "var(--font-space-mono), monospace",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span style={{ width: 8, height: 8, borderRadius: 2, background: "#10b981", display: "inline-block" }} />
            <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space-mono), monospace" }}>Market Size</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span style={{ width: 8, height: 8, borderRadius: 2, background: "rgba(16,185,129,0.4)", display: "inline-block" }} />
            <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space-mono), monospace" }}>Forecast</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-space-mono), monospace" }}>Current: </span>
          <span style={{ fontSize: "0.8rem", fontFamily: "var(--font-space-mono), monospace", fontWeight: 700, color: "#fff" }}>{data.chartVal}</span>
          <span style={{ fontSize: "0.72rem", color: "#10b981", fontFamily: "var(--font-space-mono), monospace" }}>{data.chartDelta}</span>
        </div>
      </div>

      {/* SVG chart */}
      <div style={{ position: "relative", height: 140, marginBottom: 8 }}>
        <svg width="100%" height="100%" viewBox="0 0 940 280" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {[60,120,180,240].map((y) => (
            <line key={y} x1="80" y1={y} x2="860" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}
          {/* Area */}
          <path d={areaD} fill="url(#chartGrad)" />
          {/* Line */}
          <path d={lineD} fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Glow */}
          <path d={lineD} fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          {/* Dots */}
          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="4" fill="#10b981" stroke="#0A0A0A" strokeWidth="2" />
          ))}
          {/* Last dot highlight */}
          <circle cx={points[points.length-1].x} cy={points[points.length-1].y} r="6" fill="#10b981" stroke="rgba(16,185,129,0.4)" strokeWidth="3" />
        </svg>
      </div>

      {/* X labels */}
      <div className="flex justify-between px-2">
        {["Q1 2024","Q2 2024","Q3 2024","Q4 2024"].map((q) => (
          <span key={q} style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-space-mono), monospace" }}>{q}</span>
        ))}
      </div>

      {/* Insight row */}
      <div
        className="flex items-start gap-3 mt-3 p-3"
        style={{ borderRadius: 10, background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.1)" }}
      >
        <div style={{ width: 28, height: 28, borderRadius: 9, background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <TrendingUp size={14} color="#10b981" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span style={{ fontSize: "0.8rem", fontWeight: 500, color: "#fff" }}>{data.insightTitle}</span>
            <span style={{ padding: "2px 8px", borderRadius: 6, background: "rgba(16,185,129,0.15)", fontSize: "0.58rem", color: "#10b981", fontFamily: "var(--font-space-mono), monospace" }}>HIGH_CONFIDENCE</span>
          </div>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", fontWeight: 300, marginTop: 3, lineHeight: 1.5 }}>{data.insightDesc}</p>
        </div>
      </div>
    </div>
  );
}

function SignalsList({ data }) {
  const BG   = { red: "rgba(239,68,68,0.06)",    amber: "rgba(245,158,11,0.05)",    emerald: "rgba(16,185,129,0.04)"   };
  const BD   = { red: "rgba(239,68,68,0.12)",    amber: "rgba(245,158,11,0.1)",     emerald: "rgba(16,185,129,0.1)"    };
  const IBDG = { red: "rgba(239,68,68,0.15)",    amber: "rgba(245,158,11,0.15)",    emerald: "rgba(16,185,129,0.15)"   };
  const IBD  = { red: "rgba(239,68,68,0.2)",     amber: "rgba(245,158,11,0.2)",     emerald: "rgba(16,185,129,0.2)"    };
  const IC   = { red: "#f87171",                 amber: "#fbbf24",                  emerald: "#34d399"                  };
  const LC   = { red: "rgba(239,68,68,0.15)",    amber: "rgba(245,158,11,0.15)",    emerald: "rgba(16,185,129,0.15)"   };
  const LTC  = { red: "#f87171",                 amber: "#fbbf24",                  emerald: "#34d399"                  };
  const ICON = { red: AlertTriangle,             amber: FileText,                   emerald: Lightbulb                  };

  const { stats, signals } = data;

  return (
    <div style={{ padding: "1rem 1.2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12 }}>
      <div className="flex items-center justify-between mb-3">
        <span style={{ fontSize: "0.62rem", fontFamily: "var(--font-space-mono), monospace", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>
          PRIORITY_SIGNALS
        </span>
        <div className="flex items-center gap-2">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 8px", borderRadius: 9999, background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.25)" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
            <span style={{ fontSize: "0.62rem", color: "#f87171", fontFamily: "var(--font-space-mono), monospace" }}>{stats.alerts} High Priority</span>
          </span>
          <button style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>Filter</button>
          <button style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>Export</button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {signals.map((s, i) => {
          const c = s.lvlClass;
          const Icon = ICON[c];
          return (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px", borderRadius: 12, background: BG[c], border: `1px solid ${BD[c]}`, cursor: "pointer" }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: IBDG[c], border: `1px solid ${IBD[c]}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={15} color={IC[c]} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="flex items-center justify-between mb-1.5">
                  <span style={{ padding: "2px 7px", borderRadius: 5, background: LC[c], fontSize: "0.58rem", fontFamily: "var(--font-space-mono), monospace", fontWeight: 700, color: LTC[c] }}>{s.level}</span>
                  <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-space-mono), monospace" }}>{s.time}</span>
                </div>
                <div style={{ fontSize: "0.8rem", fontWeight: 500, color: "#fff", marginBottom: 4 }}>{s.title}</div>
                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", fontWeight: 300, marginBottom: 8, lineHeight: 1.5 }}>{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} style={{ padding: "2px 8px", borderRadius: 5, background: "rgba(255,255,255,0.04)", fontSize: "0.58rem", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-space-mono), monospace" }}>{t}</span>
                  ))}
                </div>
              </div>
              <ArrowRight size={14} color="rgba(255,255,255,0.25)" style={{ flexShrink: 0 }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CompetitorRadar({ data }) {
  const { competitors, radarCount } = data;
  const colorMap = {
    red:   { bg: "rgba(239,68,68,0.06)",  init: "rgba(239,68,68,0.15)",  initBd: "rgba(239,68,68,0.2)",   itc: "#f87171", badge: "rgba(239,68,68,0.15)",  btc: "#f87171" },
    amber: { bg: "rgba(245,158,11,0.05)", init: "rgba(245,158,11,0.15)", initBd: "rgba(245,158,11,0.2)",  itc: "#fbbf24", badge: "rgba(245,158,11,0.15)", btc: "#fbbf24" },
    blue:  { bg: "rgba(59,130,246,0.04)", init: "rgba(59,130,246,0.12)", initBd: "rgba(59,130,246,0.15)", itc: "#60a5fa", badge: "rgba(59,130,246,0.1)",  btc: "#60a5fa" },
  };

  return (
    <div style={{ padding: "1rem 1.2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12 }}>
      <div className="flex items-center justify-between mb-3">
        <span style={{ fontSize: "0.62rem", fontFamily: "var(--font-space-mono), monospace", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>COMPETITOR_RADAR</span>
        <span style={{ padding: "3px 8px", borderRadius: 9999, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", fontSize: "0.62rem", color: "#10b981", fontFamily: "var(--font-space-mono), monospace" }}>● {radarCount}</span>
      </div>

      {/* SVG radar mini */}
      <div style={{ height: 100, marginBottom: 10, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="180" height="90" viewBox="0 0 180 90">
          <ellipse cx="90" cy="45" rx="80" ry="40" fill="none" stroke="rgba(255,255,255,0.04)" />
          <ellipse cx="90" cy="45" rx="55" ry="27" fill="none" stroke="rgba(255,255,255,0.04)" />
          <ellipse cx="90" cy="45" rx="28" ry="14" fill="none" stroke="rgba(255,255,255,0.04)" />
          <line x1="10" y1="45" x2="170" y2="45" stroke="rgba(255,255,255,0.04)" />
          <line x1="90" y1="5" x2="90" y2="85" stroke="rgba(255,255,255,0.04)" />
          {/* labels */}
          {[["Tech",155,12],["Product",155,78],["Market",12,78],["Funding",12,12]].map(([l,x,y]) => (
            <text key={l} x={x} y={y} fill="rgba(255,255,255,0.2)" fontSize="7" fontFamily="monospace">{l}</text>
          ))}
          {/* dots */}
          <circle cx="130" cy="28" r="5" fill="#ef4444" />
          <circle cx="115" cy="55" r="4" fill="#fbbf24" />
          <circle cx="65"  cy="62" r="4" fill="#60a5fa" />
          <circle cx="75"  cy="35" r="3.5" fill="rgba(139,92,246,0.8)" />
          {/* You marker */}
          <polygon points="90,38 94,50 82,43 98,43 86,50" fill="#10b981" />
        </svg>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {competitors.map((c) => {
          const cl = colorMap[c.lvlClass] || colorMap.blue;
          return (
            <div key={c.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderRadius: 8, background: cl.bg, border: `1px solid ${cl.initBd}`, cursor: "pointer" }}>
              <div className="flex items-center gap-2">
                <div style={{ width: 24, height: 24, borderRadius: 6, background: cl.init, border: `1px solid ${cl.initBd}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "0.6rem", fontFamily: "var(--font-space-mono), monospace", fontWeight: 700, color: cl.itc }}>{c.init}</span>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#fff", fontWeight: 500 }}>{c.name}</span>
                  <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-space-mono), monospace" }}>{c.evt}</div>
                </div>
              </div>
              <span style={{ padding: "2px 6px", borderRadius: 5, background: cl.badge, fontSize: "0.6rem", fontFamily: "var(--font-space-mono), monospace", color: cl.btc }}>{c.lvl}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function KeyMetrics({ data }) {
  return (
    <div style={{ padding: "1rem 1.2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12 }}>
      <span style={{ fontSize: "0.62rem", fontFamily: "var(--font-space-mono), monospace", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", display: "block", marginBottom: 10 }}>KEY_METRICS</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {data.metrics.map((m) => (
          <div key={m.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-space-mono), monospace" }}>{m.label}</span>
            <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-space-mono), monospace", fontWeight: 700, color: m.color.replace("text-", "").replace("white","#fff").replace("emerald-400","#34d399").replace("cyan-400","#22d3ee").replace("violet-400","#a78bfa").replace("red-400","#f87171").replace("amber-400","#fbbf24") }}>
              {m.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatPanel({ data, activeIndustry }) {
  const { industryChatData } = require("@/app/product-strategy-intelligence/industryData");
  const chat = industryChatData?.[activeIndustry] || {};

  return (
    <div
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: 420,
      }}
    >
      {/* Chat header */}
      <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div className="flex items-center gap-2">
          <div style={{ width: 32, height: 32, borderRadius: 9, background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "0.7rem", color: "#10b981", fontFamily: "var(--font-space-mono), monospace", fontWeight: 700 }}>SI</span>
          </div>
          <div>
            <div style={{ fontSize: "0.8rem", fontWeight: 500, color: "#fff" }}>Strategy Intelligence Agent</div>
            <div className="flex items-center gap-1.5">
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              <span style={{ fontSize: "0.62rem", color: "#10b981", fontFamily: "var(--font-space-mono), monospace" }}>Online</span>
              <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.3)" }}>• {chat.subline || `Ask anything about your ${activeIndustry} intelligence landscape`}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button style={{ padding: "4px 10px", borderRadius: 7, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
            <History size={11} /> History
          </button>
          <button style={{ padding: "4px 10px", borderRadius: 7, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
            <Download size={11} /> Export
          </button>
          <button style={{ width: 28, height: 28, borderRadius: 7, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Maximize2 size={12} color="rgba(255,255,255,0.4)" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        {/* Agent message 1 */}
        <div className="flex items-start gap-2.5">
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "0.55rem", color: "#10b981", fontFamily: "var(--font-space-mono), monospace", fontWeight: 700 }}>SI</span>
          </div>
          <div style={{ flex: 1, padding: "12px 14px", borderRadius: "4px 12px 12px 12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            Based on analysis of <span style={{ color: "#10b981", fontFamily: "var(--font-space-mono), monospace", fontSize: "0.7rem" }}>{data.stats.signals} signals</span> across <span style={{ color: "#22d3ee", fontFamily: "var(--font-space-mono), monospace", fontSize: "0.7rem" }}>{data.sources}</span>, here are the top 3 competitive threats:
            <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
              {(chat.threats || []).map((t, i) => {
                const colors = ["#ef4444","#fbbf24","#22d3ee"];
                const bgs    = ["rgba(239,68,68,0.06)","rgba(245,158,11,0.05)","rgba(255,255,255,0.02)"];
                const bds    = ["rgba(239,68,68,0.08)","rgba(245,158,11,0.06)","rgba(255,255,255,0.04)"];
                return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 10px", borderRadius: 8, background: bgs[i], border: `1px solid ${bds[i]}` }}>
                    <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "0.62rem", fontWeight: 700, color: colors[i], flexShrink: 0, marginTop: 1 }}>0{i+1}</span>
                    <div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#fff" }}>{t.title}</span>
                      <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}> — {t.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 10, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ padding: "2px 8px", borderRadius: 9999, background: "rgba(16,185,129,0.1)", fontSize: "0.6rem", color: "#10b981", fontFamily: "var(--font-space-mono), monospace" }}>{data.stats.confidence} confidence</span>
              <span style={{ padding: "2px 8px", borderRadius: 9999, background: "rgba(255,255,255,0.04)", fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-space-mono), monospace" }}>{chat.sourcesCount || "24 sources cited"}</span>
              <span style={{ padding: "2px 8px", borderRadius: 9999, background: "rgba(255,255,255,0.04)", fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-space-mono), monospace" }}>Full audit trail ↗</span>
            </div>
            <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-space-mono), monospace", marginTop: 6 }}>Strategy Agent • 2 min ago</div>
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div style={{ maxWidth: "72%", padding: "10px 14px", borderRadius: "12px 4px 12px 12px", background: "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(6,182,212,0.2))", border: "1px solid rgba(16,185,129,0.2)", fontSize: "0.8rem", color: "rgba(255,255,255,0.9)" }}>
            {chat.userQ2 || "What defensive strategy should we adopt for the EV transition?"}
          </div>
        </div>
        <div style={{ textAlign: "right", fontSize: "0.58rem", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-space-mono), monospace", marginTop: -6 }}>You • 1 min ago</div>

        {/* Agent typing */}
        <div className="flex items-start gap-2.5">
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "0.55rem", color: "#10b981", fontFamily: "var(--font-space-mono), monospace", fontWeight: 700 }}>SI</span>
          </div>
          <div style={{ flex: 1, padding: "12px 14px", borderRadius: "4px 12px 12px 12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            <span style={{ color: "#22d3ee" }}>Analyzing {chat.analysisContext || "competitive landscape"} across </span>
            <span style={{ color: "#10b981", fontFamily: "var(--font-space-mono), monospace", fontSize: "0.7rem" }}>{chat.dataPoints || "63 data points"}</span>
            <span style={{ color: "#22d3ee" }}>:</span>
            <p style={{ marginTop: 6, color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>{chat.agentReply2 || "Strategic assessment based on current market intelligence and competitive signals."}</p>
          </div>
        </div>
      </div>

      {/* Input */}
      <div style={{ padding: "10px 14px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <input
            type="text"
            placeholder={chat.placeholder || `Ask about ${activeIndustry} signals...`}
            readOnly
            style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-urbanist), sans-serif" }}
          />
          <Paperclip size={14} color="rgba(255,255,255,0.25)" style={{ cursor: "pointer" }} />
          <Mic size={14} color="rgba(255,255,255,0.25)" style={{ cursor: "pointer" }} />
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #10b981, #059669)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Send size={13} color="#fff" />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-space-mono), monospace" }}>Suggested:</span>
          {[chat.sug1, chat.sug2, chat.sug3].filter(Boolean).map((s) => (
            <button key={s} style={{ padding: "3px 10px", borderRadius: 9999, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", fontSize: "0.62rem", color: "rgba(255,255,255,0.35)", cursor: "pointer" }}>
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CommandCenter({ activeIndustry, data }) {
  const { stats } = data;

  return (
    <div
      id="commandCenter"
      style={{
        background: "#111",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      {/* ── Title bar ── */}
      <div
        style={{
          padding: "12px 20px",
          background: "rgba(0,0,0,0.5)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
          </div>
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.08)" }} />
          <div className="flex items-center gap-2">
            <div style={{ width: 22, height: 22, borderRadius: 6, background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "0.5rem", color: "#10b981", fontWeight: 700, fontFamily: "var(--font-space-mono), monospace" }}>SI</span>
            </div>
            <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-space-mono), monospace" }}>strategy_intelligence</span>
            <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-space-mono), monospace" }}>v3.2.1</span>
            <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.15)" }}>—</span>
            <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-space-mono), monospace" }}>SECTOR: {activeIndustry.toUpperCase()}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <Search size={12} color="rgba(255,255,255,0.3)" />
            <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-space-mono), monospace" }}>Search signals...</span>
            <span style={{ padding: "1px 4px", borderRadius: 4, background: "rgba(255,255,255,0.06)", fontSize: "0.55rem", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-space-mono), monospace" }}>⌘K</span>
          </div>
          <Bell size={15} color="rgba(255,255,255,0.35)" />
          <Settings size={15} color="rgba(255,255,255,0.35)" />
        </div>
      </div>

      {/* ── Nav tabs ── */}
      <div
        style={{
          padding: "0 20px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <div className="flex items-center gap-1">
          {[
            { label: "Overview", icon: Activity, active: true  },
            { label: "Trends",   icon: TrendingUp, active: false },
            { label: "Competitors", icon: Users, active: false },
            { label: "Innovation", icon: Lightbulb, active: false },
            { label: "Reports", icon: FileText, active: false },
          ].map(({ label, icon: Icon, active: isActive }) => (
            <button
              key={label}
              style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "10px 14px",
                borderBottom: isActive ? "2px solid #10b981" : "2px solid transparent",
                background: "transparent",
                border: "none",
                borderBottom: isActive ? "2px solid #10b981" : "2px solid transparent",
                fontSize: "0.72rem",
                color: isActive ? "#10b981" : "rgba(255,255,255,0.35)",
                cursor: "pointer",
                fontFamily: "var(--font-urbanist), sans-serif",
                transition: "all 0.15s",
              }}
            >
              <Icon size={12} />
              {label}
            </button>
          ))}
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", borderRadius: 7, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", fontSize: "0.65rem", color: "#10b981", fontFamily: "var(--font-space-mono), monospace" }}>
          ● LIVE
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ padding: 16 }}>
        {/* Top 4 stat cards */}
        <div className="flex gap-3 mb-4">
          <StatCard label="SIGNALS_TODAY"   icon={Activity}   iconColor="rgba(255,255,255,0.3)" value={stats.signals}     delta={`${stats.signalsDelta} vs last week`} />
          <StatCard label="PRIORITY_ALERTS" icon={AlertTriangle} iconColor="#ef4444"            value={stats.alerts}      delta={`▲ ${stats.alertsDelta} new today`} />
          <StatCard label="COMPETITORS"     icon={Users}      iconColor="rgba(139,92,246,0.7)"  value={stats.competitors} delta={`${stats.compDelta}`} />
          <StatCard label="CONFIDENCE"      icon={ChevronUp}  iconColor="#10b981"               value={stats.confidence}  delta="JUDGE verified" />
        </div>

        {/* Main 2-col layout */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="col-span-2 flex flex-col gap-3">
            <TrendChart data={data} />
            <SignalsList data={data} />
          </div>
          <div className="flex flex-col gap-3">
            <CompetitorRadar data={data} />
            <KeyMetrics data={data} />
          </div>
        </div>

        {/* Chat panel */}
        <ChatPanel data={data} activeIndustry={activeIndustry} />
      </div>
    </div>
  );
}
