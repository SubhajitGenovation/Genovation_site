"use client";

import { Radio, FileSearch, Brain, Target, AlertTriangle, ShieldCheck, BarChart2, Activity, BookOpen, MessageSquare, ScanSearch, TrendingUp, GitBranch, PackageSearch, Briefcase, Building2, Calculator, Clock, Link, ScrollText, Layers, Zap, FileText } from "lucide-react";

/* ─── Mock 1: 360° Bearing Anomaly Investigation ─── */
function Mock360View() {
  return (
    <div className="industry-mock" style={{ boxShadow: "0 40px 100px -30px rgba(245,158,11,0.08)" }}>
      <div className="mock-header">
        <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#6b7280", marginLeft: "0.5rem" }}>360° Operational Intelligence — Press Line 4 · Bearing Anomaly Investigation</span>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "auto" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#059669" }}>Live</span>
        </div>
      </div>
      <div style={{ padding: "1.25rem" }}>
        {/* Question */}
        <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.1)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <p style={{ fontSize: "0.75rem", color: "#374151", fontWeight: 300 }}>"Why is Press Line 4 vibrating above threshold and what should we do about it?"</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
          {/* Col 1: Live Sensors */}
          <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(239,68,68,0.03)", border: "1px solid rgba(239,68,68,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Radio size={14} color="#ef4444" />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#dc2626", letterSpacing: "0.1em", textTransform: "uppercase" }}>Live Sensors</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ padding: "0.5rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.625rem", color: "#6b7280" }}>Vibration V-401</span>
                  <span style={{ fontSize: "0.625rem", color: "#ef4444", fontFamily: "'Space Mono', monospace", fontWeight: 500 }}>4.2 mm/s ↑</span>
                </div>
                <div style={{ height: "20px", borderRadius: "4px", background: "#f3f4f6", overflow: "hidden" }}>
                  <svg viewBox="0 0 200 20" style={{ width: "100%", height: "100%" }}>
                    <path d="M 0 10 Q 10 3, 20 10 T 40 10 T 60 10 T 80 5 T 100 14 T 120 3 T 140 16 T 160 5 T 180 12 T 200 8" fill="none" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" />
                    <line x1="0" y1="6" x2="200" y2="6" stroke="rgba(239,68,68,0.2)" strokeWidth="1" strokeDasharray="4,4" />
                  </svg>
                </div>
                <p style={{ fontSize: "0.5rem", color: "#ef4444", marginTop: "2px" }}>Threshold 3.5 exceeded</p>
              </div>
              <div style={{ padding: "0.5rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.625rem", color: "#6b7280" }}>Motor Temp</span>
                <span style={{ fontSize: "0.625rem", color: "#f59e0b", fontFamily: "'Space Mono', monospace" }}>78°C ↑</span>
              </div>
              <div style={{ padding: "0.5rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.625rem", color: "#6b7280" }}>Power Draw</span>
                <span style={{ fontSize: "0.625rem", color: "#f59e0b", fontFamily: "'Space Mono', monospace" }}>12.4 kW ↑</span>
              </div>
            </div>
          </div>

          {/* Col 2: Retrieved Docs */}
          <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(139,92,246,0.03)", border: "1px solid rgba(139,92,246,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <FileSearch size={14} color="#8b5cf6" />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase" }}>Retrieved Docs</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { ref: "MAINT-LOG-4847", text: '"Slight vibration noted during PM check, bearing within spec but trending"', sub: "— J. Torres, 12 days ago" },
                { ref: "OEM-MANUAL-P4 §7.3", text: '"Replace main bearing when vibration exceeds 3.5 mm/s for >24h"', sub: null },
                { ref: "NCR-2024-0892", text: '"Dimensional drift on parts from Press 4 — tolerance exceedance on bore diameter"', sub: "— QC, 3 days ago" },
              ].map((doc, i) => (
                <div key={i} style={{ padding: "0.5rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", borderLeft: "3px solid #a78bfa" }}>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#7c3aed", marginBottom: "2px" }}>{doc.ref}</p>
                  <p style={{ fontSize: "0.625rem", color: "#374151", fontWeight: 300 }}>{doc.text}</p>
                  {doc.sub && <p style={{ fontSize: "0.5rem", color: "#9ca3af", marginTop: "2px" }}>{doc.sub}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: AI Synthesis */}
          <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.03)", border: "1px solid rgba(245,158,11,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Brain size={14} color="#d97706" />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#92400e", letterSpacing: "0.1em", textTransform: "uppercase" }}>AI Synthesis</span>
            </div>
            <div style={{ padding: "0.625rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", borderLeft: "3px solid #f59e0b", marginBottom: "0.5rem" }}>
              <p style={{ fontSize: "0.625rem", color: "#92400e", fontWeight: 500, marginBottom: "4px" }}>Root Cause — 87% Confidence</p>
              <p style={{ fontSize: "0.625rem", color: "#374151", fontWeight: 300 }}>Main bearing degradation. Pattern matches Failure-DB-2847. Maint log from 12 days ago confirms early detection. OEM manual §7.3 specifies replacement at current threshold.</p>
            </div>
            <div style={{ padding: "0.625rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", marginBottom: "0.5rem" }}>
              <p style={{ fontSize: "0.625rem", color: "#374151", fontWeight: 500, marginBottom: "4px" }}>Connected Evidence</p>
              {[
                { color: "#f87171", text: "Sensor trend: bearing wear signature" },
                { color: "#a78bfa", text: "Maint log: early warning 12d ago" },
                { color: "#a78bfa", text: "NCR: quality impact already visible" },
                { color: "#a78bfa", text: "OEM spec: replacement threshold met" },
              ].map((e, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: e.color }} />
                  <span style={{ fontSize: "0.5625rem", color: "#6b7280" }}>{e.text}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "0.5rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.08)" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.5625rem", color: "#6b7280" }}>Time to failure</span>
                <span style={{ fontSize: "0.625rem", color: "#ef4444", fontFamily: "'Space Mono', monospace", fontWeight: 500 }}>48-72 hrs</span>
              </div>
              <div style={{ width: "100%", height: "4px", background: "#e5e7eb", borderRadius: "9999px", overflow: "hidden", marginTop: "4px" }}>
                <div style={{ height: "100%", width: "75%", background: "linear-gradient(to right, #fbbf24, #ef4444)", borderRadius: "9999px" }} />
              </div>
            </div>
          </div>

          {/* Col 4: Decision */}
          <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(16,185,129,0.03)", border: "1px solid rgba(16,185,129,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Target size={14} color="#059669" />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#065f46", letterSpacing: "0.1em", textTransform: "uppercase" }}>Decision</span>
            </div>
            <div style={{ padding: "0.625rem", borderRadius: "0.5rem", background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.1)", marginBottom: "0.5rem" }}>
              <p style={{ fontSize: "0.6875rem", color: "#111827", fontWeight: 500 }}>Schedule preventive maintenance within 24 hours</p>
            </div>
            <div style={{ padding: "0.625rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", marginBottom: "0.5rem" }}>
              {[
                { label: "Planned downtime", val: "4 hrs", color: "#059669" },
                { label: "Unplanned failure", val: "$47K", color: "#ef4444" },
                { label: "Preventive cost", val: "$3.2K", color: "#059669" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.625rem", color: "#6b7280" }}>{r.label}</span>
                  <span style={{ fontSize: "0.625rem", color: r.color, fontFamily: "'Space Mono', monospace" }}>{r.val}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "6px", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
                <span style={{ fontSize: "0.625rem", color: "#111827", fontWeight: 500 }}>Net savings</span>
                <span style={{ fontSize: "0.625rem", color: "#059669", fontWeight: 500, fontFamily: "'Space Mono', monospace" }}>$43.8K</span>
              </div>
            </div>
            <div style={{ padding: "0.5rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", marginBottom: "0.5rem" }}>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#9ca3af", marginBottom: "2px" }}>WINDOW</p>
              <p style={{ fontSize: "0.625rem", color: "#374151" }}>Sun 06:00-10:00</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
              <button style={{ padding: "6px", borderRadius: "0.5rem", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.15)", fontSize: "0.625rem", color: "#065f46", fontWeight: 500, cursor: "pointer" }}>Approve PM</button>
              <button style={{ padding: "6px", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)", fontSize: "0.625rem", color: "#6b7280", cursor: "pointer" }}>Details</button>
            </div>
          </div>
        </div>

        {/* Audit */}
        <div style={{ marginTop: "1rem", padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.5625rem", color: "#9ca3af" }}>
            <ShieldCheck size={12} color="#9ca3af" />
            <span>4 structured sources · 3 unstructured documents · Full audit trail · Analysis ID: PRS4-2024-1847</span>
          </div>
          <span style={{ fontSize: "0.5625rem", color: "#d97706", fontWeight: 300, cursor: "pointer" }}>View complete reasoning chain →</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Mock 2: Plant Performance Dashboard ─── */
function MockPerformance() {
  return (
    <div className="industry-mock" style={{ boxShadow: "0 40px 100px -30px rgba(245,158,11,0.08)" }}>
      <div className="mock-header">
        <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#6b7280", marginLeft: "0.5rem" }}>Plant Performance — Line 3</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#9ca3af", marginLeft: "auto" }}>Morning Shift · Nov 15, 2024</span>
      </div>
      <div style={{ padding: "1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem", marginBottom: "1rem" }}>
          {[
            { val: "87.3%", label: "OEE", bg: "rgba(16,185,129,0.06)", border: "rgba(16,185,129,0.1)", color: "#059669" },
            { val: "92.1%", label: "Availability", bg: "rgba(245,158,11,0.06)", border: "rgba(245,158,11,0.1)", color: "#d97706" },
            { val: "94.8%", label: "Performance", bg: "rgba(245,158,11,0.06)", border: "rgba(245,158,11,0.1)", color: "#d97706" },
            { val: "98.2%", label: "Quality", bg: "rgba(239,68,68,0.05)", border: "rgba(239,68,68,0.08)", color: "#ef4444" },
          ].map((m, i) => (
            <div key={i} style={{ padding: "0.75rem", borderRadius: "0.75rem", background: m.bg, border: `1px solid ${m.border}`, textAlign: "center" }}>
              <p style={{ fontSize: "1.125rem", fontWeight: 500, color: m.color }}>{m.val}</p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#6b7280" }}>{m.label}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.12)", marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <AlertTriangle size={16} color="#f59e0b" />
            <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#111827" }}>OEE Below Target (90%)</span>
          </div>
          <p style={{ fontSize: "0.75rem", color: "#6b7280", fontWeight: 300, marginBottom: "0.75rem" }}>Root cause analysis identified 3 contributing factors:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { color: "#f87171", label: "Conveyor belt misalignment", val: "42 min", vColor: "#ef4444" },
              { color: "#fbbf24", label: "Material feed rate variance", val: "-3.2%", vColor: "#f59e0b" },
              { color: "#fbbf24", label: "Batch 2847 quality hold", val: "18 units", vColor: "#f59e0b" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: r.color }} />
                  <span style={{ fontSize: "0.6875rem", color: "#374151" }}>{r.label}</span>
                </div>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", color: r.vColor }}>{r.val}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "0.75rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.04)" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.625rem", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>Recommended Actions</p>
          <p style={{ fontSize: "0.75rem", color: "#374151", fontWeight: 300 }}>Schedule conveyor inspection per <span style={{ color: "#d97706", fontWeight: 500 }}>SOP-M-142</span>. Review material supplier variance from Batch 2840-2850.</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Mock 3: SOP Query ─── */
function MockSOP() {
  return (
    <div className="industry-mock" style={{ boxShadow: "0 40px 100px -30px rgba(217,119,6,0.08)" }}>
      <div className="mock-header">
        <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#6b7280", marginLeft: "0.5rem" }}>Process Knowledge — SOP Query</span>
      </div>
      <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "75%", padding: "0.75rem", borderRadius: "1rem", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.12)" }}>
            <p style={{ fontSize: "0.875rem", color: "#374151", fontWeight: 300 }}>What's the procedure for clearing a jam on the packaging line?</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: "90%", padding: "1rem", borderRadius: "1rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <p style={{ fontSize: "0.875rem", color: "#374151", fontWeight: 300, marginBottom: "0.75rem" }}>Per <span style={{ color: "#d97706", fontWeight: 500 }}>SOP-PKG-023</span> (Packaging Line Jam Clearance):</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.75rem" }}>
              {[
                { num: "1.", bold: "STOP:", text: "Press E-Stop and wait for full line halt" },
                { num: "2.", bold: "LOCKOUT:", text: "Apply LOTO per SOP-SAF-001 §4.2" },
                { num: "3.", bold: "CLEAR:", text: "Remove jammed material, inspect for damage" },
                { num: "4.", bold: "VERIFY:", text: "Check alignment sensors before restart" },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#f59e0b", marginTop: "2px" }}>{s.num}</span>
                  <span style={{ fontSize: "0.75rem", color: "#374151", fontWeight: 300 }}><strong style={{ fontWeight: 500 }}>{s.bold}</strong> {s.text}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "0.625rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.1)", marginBottom: "0.75rem" }}>
              <p style={{ fontSize: "0.75rem", color: "#dc2626", fontWeight: 300 }}><strong style={{ fontWeight: 500 }}>⚠ Safety Note:</strong> PPE required — safety glasses, cut-resistant gloves (Class 5)</p>
            </div>
            <div style={{ paddingTop: "0.75rem", borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["SOP-PKG-023 Rev D", "SOP-SAF-001 §4.2"].map((t) => (
                <span key={t} style={{ padding: "2px 8px", borderRadius: "6px", background: "rgba(245,158,11,0.08)", color: "#92400e", fontFamily: "'Space Mono', monospace", fontSize: "0.625rem" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.625rem", color: "#9ca3af", padding: "0 0.5rem" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />Current revision</span>
          <span>·</span><span>Last reviewed: Oct 2024</span><span>·</span><span>Source: Document Intelligence</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Mock 4: Quality Intelligence SPC ─── */
function MockQuality() {
  return (
    <div className="industry-mock" style={{ boxShadow: "0 40px 100px -30px rgba(16,185,129,0.08)" }}>
      <div className="mock-header">
        <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#6b7280", marginLeft: "0.5rem" }}>Quality Intelligence — SPC Monitor</span>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "auto" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f87171", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#ef4444" }}>Alert</span>
        </div>
      </div>
      <div style={{ padding: "1rem" }}>
        <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)", marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.625rem", color: "#6b7280" }}>DIMENSION A — Bore Diameter (mm)</span>
            <span style={{ padding: "2px 8px", borderRadius: "6px", background: "rgba(239,68,68,0.08)", color: "#ef4444", fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem" }}>OUT OF CONTROL</span>
          </div>
          <div style={{ height: "112px", borderRadius: "0.5rem", background: "#f9fafb", border: "1px solid rgba(0,0,0,0.04)", overflow: "hidden", padding: "0.5rem" }}>
            <svg viewBox="0 0 400 100" style={{ width: "100%", height: "100%" }}>
              <line x1="0" y1="15" x2="400" y2="15" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="6,4" />
              <text x="395" y="13" textAnchor="end" fill="rgba(239,68,68,0.5)" fontSize="7">UCL</text>
              <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(16,185,129,0.25)" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="0" y1="85" x2="400" y2="85" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="6,4" />
              <text x="395" y="83" textAnchor="end" fill="rgba(239,68,68,0.5)" fontSize="7">LCL</text>
              <polyline points="20,48 45,52 70,46 95,50 120,44 145,48 170,42 195,38 220,35 245,30 270,25 295,20 320,18 345,12 370,10" fill="none" stroke="rgba(245,158,11,0.7)" strokeWidth="1.5" />
              {[[20,48,"#10b981"],[45,52,"#10b981"],[70,46,"#10b981"],[95,50,"#10b981"],[120,44,"#10b981"],[145,48,"#10b981"],[170,42,"#10b981"],
                [195,38,"#f59e0b"],[220,35,"#f59e0b"],[245,30,"#f59e0b"],[270,25,"#f59e0b"],
                [295,20,"#ef4444"],[320,18,"#ef4444"],[345,12,"#ef4444"],[370,10,"#ef4444"]].map(([x,y,c],i) => (
                <circle key={i} cx={x} cy={y} r={i>11?"3":"2.5"} fill={c} opacity={i>11?"0.9":"0.8"} />
              ))}
            </svg>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
            <span style={{ fontSize: "0.5625rem", color: "#9ca3af" }}>Samples 1-15 · Line 3 · Shift A</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#ef4444" }}>Rule: 7 points trending upward</span>
          </div>
        </div>
        <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.1)", marginBottom: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <Brain size={14} color="#d97706" />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.625rem", color: "#92400e", letterSpacing: "0.1em" }}>ROOT CAUSE</span>
          </div>
          <p style={{ fontSize: "0.6875rem", color: "#374151", fontWeight: 300 }}>
            Tool wear on Station 4 cutter (2,847 cycles vs. 3,000-cycle spec from <span style={{ color: "#7c3aed", fontWeight: 500 }}>OEM-MANUAL §5.1</span>). Temperature compensation masking drift. Quality <span style={{ color: "#7c3aed", fontWeight: 500 }}>NCR-2024-0889</span> confirms dimensional impact.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
          <div style={{ padding: "0.625rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.04)" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#9ca3af", marginBottom: "2px" }}>AFFECTED</p>
            <p style={{ fontSize: "0.6875rem", color: "#374151" }}>5 lots · 240 parts</p>
          </div>
          <div style={{ padding: "0.625rem", borderRadius: "0.75rem", background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.08)" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#9ca3af", marginBottom: "2px" }}>ACTION</p>
            <p style={{ fontSize: "0.6875rem", color: "#059669", fontWeight: 500 }}>Quarantine initiated</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mock 5: Executive Intelligence ─── */
function MockExecutive() {
  return (
    <div className="industry-mock" style={{ boxShadow: "0 40px 100px -30px rgba(139,92,246,0.06)" }}>
      <div className="mock-header">
        <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#6b7280", marginLeft: "0.5rem" }}>Executive Intelligence — Multi-Plant Overview</span>
      </div>
      <div style={{ padding: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.75rem" }}>
          <div style={{ maxWidth: "75%", padding: "0.75rem", borderRadius: "1rem", background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.1)" }}>
            <p style={{ fontSize: "0.75rem", color: "#374151", fontWeight: 300 }}>Why did Plant 2 miss target last week?</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "1rem" }}>
          <div style={{ maxWidth: "100%", padding: "1rem", borderRadius: "1rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <p style={{ fontSize: "0.75rem", color: "#374151", fontWeight: 300, marginBottom: "0.75rem" }}>Plant 2 missed production target by <strong style={{ fontWeight: 500, color: "#111827" }}>4.2%</strong> last week:</p>
            <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "#f9fafb", border: "1px solid rgba(0,0,0,0.04)", marginBottom: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "Line 3 conveyor issue", val: "-2.1%", color: "#f87171", width: "50%" },
                { label: "Unplanned maintenance — Press 7", val: "-1.4%", color: "#fb923c", width: "33%" },
                { label: "Batch 2847 quality hold", val: "-0.7%", color: "#fbbf24", width: "17%" },
              ].map((r, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2px" }}>
                    <span style={{ fontSize: "0.6875rem", color: "#374151" }}>{r.label}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", color: "#ef4444" }}>{r.val}</span>
                  </div>
                  <div style={{ width: "100%", height: "6px", background: "#e5e7eb", borderRadius: "9999px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: r.width, background: r.color, borderRadius: "9999px" }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", marginBottom: "0.75rem" }}>
              {[
                { name: "Plant 1", val: "+1.3%", bg: "rgba(16,185,129,0.05)", border: "rgba(16,185,129,0.08)", color: "#059669" },
                { name: "Plant 2", val: "-4.2%", bg: "rgba(239,68,68,0.05)", border: "rgba(239,68,68,0.08)", color: "#ef4444" },
                { name: "Plant 3", val: "+0.8%", bg: "rgba(16,185,129,0.05)", border: "rgba(16,185,129,0.08)", color: "#059669" },
              ].map((p, i) => (
                <div key={i} style={{ padding: "0.5rem", borderRadius: "0.5rem", background: p.bg, border: `1px solid ${p.border}`, textAlign: "center" }}>
                  <p style={{ fontSize: "0.6875rem", color: p.color, fontWeight: 500 }}>{p.name}</p>
                  <p style={{ fontSize: "0.5625rem", color: "#9ca3af" }}>{p.val}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.6875rem", color: "#6b7280", fontWeight: 300 }}>PM schedule review recommended — last service 23 days overdue per <span style={{ color: "#d97706", fontWeight: 500 }}>SOP-M-142</span>.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "0.5rem" }}>
              {["MES-P2-WK47", "CMMS-WO-8847", "QMS-Batch-2847"].map((t) => (
                <span key={t} style={{ padding: "2px 8px", borderRadius: "6px", background: "rgba(139,92,246,0.06)", color: "#7c3aed", fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.75rem" }}>
          <div style={{ maxWidth: "75%", padding: "0.75rem", borderRadius: "1rem", background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.1)" }}>
            <p style={{ fontSize: "0.75rem", color: "#374151", fontWeight: 300 }}>What would it cost to bring Plant 2 PM schedule up to date?</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ padding: "0.75rem", borderRadius: "1rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <p style={{ fontSize: "0.6875rem", color: "#374151", fontWeight: 300 }}>Estimated backlog cost: <strong style={{ color: "#111827" }}>$18,400</strong> (12 overdue WOs). Projected downtime savings next quarter: <strong style={{ color: "#059669" }}>$127,000</strong> based on historical failure rates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mock 6: Anomaly Root Cause Investigation ─── */
function MockAnomaly() {
  return (
    <div className="industry-mock" style={{ boxShadow: "0 40px 100px -30px rgba(245,158,11,0.08)" }}>
      <div className="mock-header">
        <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#6b7280", marginLeft: "0.5rem" }}>Root Cause Investigation — Line 3 · Anomaly Window: 06:00 – 12:00 · Nov 15, 2024</span>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "auto" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f87171", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#ef4444" }}>Investigation Active</span>
        </div>
      </div>
      <div style={{ padding: "1.25rem" }}>
        {/* Trigger */}
        <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.1)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(239,68,68,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <AlertTriangle size={14} color="#ef4444" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "0.75rem", color: "#111827", fontWeight: 500 }}>Anomaly Trigger: OEE dropped to 78.4% — 12 points below target</p>
            <p style={{ fontSize: "0.625rem", color: "#6b7280", fontWeight: 300 }}>Investigating 6-hour window around event. Scanning sensor data, maintenance records, quality logs, and engineering documentation.</p>
          </div>
          <span style={{ padding: "4px 10px", borderRadius: "0.5rem", background: "rgba(239,68,68,0.08)", color: "#dc2626", fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", flexShrink: 0 }}>CRITICAL</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
          {/* Timeline */}
          <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(59,130,246,0.03)", border: "1px solid rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Clock size={14} color="#2563eb" />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase" }}>Event Timeline</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", position: "relative" }}>
              <div style={{ position: "absolute", left: "7px", top: "24px", bottom: "8px", width: "1px", background: "linear-gradient(to bottom, rgba(52,211,153,0.4), rgba(251,191,36,0.4), rgba(248,113,113,0.4))" }} />
              {[
                { time: "06:00", label: "Shift start — normal ops", color: "#10b981", bold: false },
                { time: "06:47", label: "Conveyor misalignment", sub: "Station 2 · 42 min downtime", color: "#f59e0b", bold: true },
                { time: "08:12", label: "Vibration spike V-401", sub: "Press 4 · 4.2 mm/s", color: "#f59e0b", bold: true },
                { time: "09:15", label: "Feed rate deviation", sub: "Batch 2847 · density +0.3%", color: "#f59e0b", bold: true },
                { time: "10:33", label: "Quality exceedance", sub: "Bore diameter OOC · 18 parts", color: "#ef4444", bold: true },
                { time: "11:32", label: "OEE drops to 78.4%", sub: "Investigation triggered", color: "#ef4444", bold: true },
              ].map((ev, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", position: "relative" }}>
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: `${ev.color}20`, border: `1px solid ${ev.color}`, flexShrink: 0, marginTop: "2px", zIndex: 1 }} />
                  <div>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#9ca3af" }}>{ev.time}</p>
                    <p style={{ fontSize: "0.625rem", color: ev.bold ? (ev.color === "#ef4444" ? "#dc2626" : "#374151") : "#374151", fontWeight: ev.bold ? 500 : 300 }}>{ev.label}</p>
                    {ev.sub && <p style={{ fontSize: "0.5rem", color: "#9ca3af" }}>{ev.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Correlated Evidence */}
          <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(139,92,246,0.03)", border: "1px solid rgba(139,92,246,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Link size={14} color="#8b5cf6" />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase" }}>Correlated Evidence</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { icon: <Radio size={12} color="#ef4444" />, label: "SENSOR", color: "#dc2626", bl: "#f87171", text: "Vibration V-401 trending since Nov 3 — bearing wear signature matches Failure-DB-2847" },
                { icon: <ScrollText size={12} color="#8b5cf6" />, label: "MAINT LOG", color: "#7c3aed", bl: "#a78bfa", text: '"Slight vibration noted during PM" — J. Torres, 12 days ago. No work order created.' },
                { icon: <BookOpen size={12} color="#8b5cf6" />, label: "OEM MANUAL", color: "#7c3aed", bl: "#a78bfa", text: "§7.3: Replace bearing at >3.5 mm/s for >24h. §5.1: Cutter life 3,000 cycles (current: 2,847)" },
                { icon: <ClipboardList size={12} color="#8b5cf6" />, label: "NCR-2024-0892", color: "#7c3aed", bl: "#a78bfa", text: "Dimensional drift on Press 4 parts — bore diameter tolerance exceedance, filed 3 days ago" },
                { icon: <Layers size={12} color="#0891b2" />, label: "ERP", color: "#0891b2", bl: "#22d3ee", text: "Batch 2847 supplier: density variance +0.3% vs. spec. Same supplier flagged in QMS for Lot 440" },
              ].map((e, i) => (
                <div key={i} style={{ padding: "0.625rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", borderLeft: `3px solid ${e.bl}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>{e.icon}<span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: e.color }}>{e.label}</span></div>
                  <p style={{ fontSize: "0.5625rem", color: "#374151" }}>{e.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Root Cause Synthesis */}
          <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.03)", border: "1px solid rgba(245,158,11,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Brain size={14} color="#d97706" />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#92400e", letterSpacing: "0.1em", textTransform: "uppercase" }}>Root Cause Synthesis</span>
            </div>
            {[
              { color: "#f59e0b", title: "Primary: Cascading mechanical degradation", text: "Bearing wear on Press 4 (detected but not actioned 12 days ago) caused progressive vibration increase, which induced conveyor tensioner stress on Station 2, leading to misalignment at 06:47." },
              { color: "#f59e0b", title: "Contributing: Material variance amplified quality impact", text: "Batch 2847 density variance (+0.3%) narrowed tolerance margins. Combined with tool wear at 2,847/3,000 cycles, this pushed bore diameter measurements out of control." },
              { color: "#ef4444", title: "Process Gap Identified", text: "Maintenance observation from Nov 3 was logged but no corrective work order was generated. SOP-M-142 §3.2 requires WO creation for any noted vibration trend." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "0.75rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.6)", borderLeft: `3px solid ${item.color}`, marginBottom: "0.5rem" }}>
                <p style={{ fontSize: "0.5625rem", color: item.color === "#ef4444" ? "#dc2626" : "#92400e", fontWeight: 500, marginBottom: "4px" }}>{item.title}</p>
                <p style={{ fontSize: "0.5625rem", color: "#374151", fontWeight: 300 }}>{item.text}</p>
              </div>
            ))}
            <div style={{ padding: "0.5rem", borderRadius: "0.5rem", background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.1)" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.5625rem", color: "#6b7280" }}>Confidence</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.625rem", color: "#d97706", fontWeight: 500 }}>91%</span>
              </div>
              <div style={{ width: "100%", height: "4px", background: "#e5e7eb", borderRadius: "9999px", overflow: "hidden", marginTop: "4px" }}>
                <div style={{ height: "100%", width: "91%", background: "#fbbf24", borderRadius: "9999px" }} />
              </div>
            </div>
          </div>

          {/* Actionable Insights */}
          <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(16,185,129,0.03)", border: "1px solid rgba(16,185,129,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Zap size={14} color="#059669" />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#065f46", letterSpacing: "0.1em", textTransform: "uppercase" }}>Actionable Insights</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.75rem" }}>
              {[
                { urgency: "IMMEDIATE", urgencyBg: "rgba(239,68,68,0.12)", urgencyColor: "#dc2626", urgencyBorder: "rgba(239,68,68,0.08)", bg: "rgba(239,68,68,0.04)", border: "rgba(239,68,68,0.08)", title: "Replace Press 4 main bearing", desc: "Failure within 48-72h. Window: Sun 06:00-10:00. Cost: $3.2K vs. $47K unplanned." },
                { urgency: "SHORT TERM", urgencyBg: "rgba(245,158,11,0.12)", urgencyColor: "#d97706", urgencyBorder: "rgba(245,158,11,0.08)", bg: "rgba(245,158,11,0.04)", border: "rgba(245,158,11,0.08)", title: "Replace Station 4 milling cutter", desc: "At 2,847/3,000 cycles. Schedule with bearing PM to minimize downtime." },
                { urgency: "SHORT TERM", urgencyBg: "rgba(245,158,11,0.12)", urgencyColor: "#d97706", urgencyBorder: "rgba(245,158,11,0.08)", bg: "rgba(245,158,11,0.04)", border: "rgba(245,158,11,0.08)", title: "Flag Batch 2847 supplier for incoming QC", desc: "Per QMS-IR: density variance on this and Lot 440." },
                { urgency: "SYSTEMIC", urgencyBg: "rgba(59,130,246,0.12)", urgencyColor: "#2563eb", urgencyBorder: "rgba(59,130,246,0.08)", bg: "rgba(59,130,246,0.04)", border: "rgba(59,130,246,0.08)", title: "Close WO generation gap in SOP-M-142", desc: "Observation on Nov 3 was logged without action. Recommend mandatory WO trigger for vibration trends." },
              ].map((a, i) => (
                <div key={i} style={{ padding: "0.625rem", borderRadius: "0.5rem", background: a.bg, border: `1px solid ${a.border}` }}>
                  <div style={{ marginBottom: "4px" }}>
                    <span style={{ padding: "2px 6px", borderRadius: "4px", background: a.urgencyBg, color: a.urgencyColor, fontFamily: "'Space Mono', monospace", fontSize: "0.5rem" }}>{a.urgency}</span>
                  </div>
                  <p style={{ fontSize: "0.5625rem", color: "#374151", fontWeight: 500 }}>{a.title}</p>
                  <p style={{ fontSize: "0.5rem", color: "#9ca3af" }}>{a.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ padding: "0.5rem", borderRadius: "0.5rem", background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.1)" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.5625rem", color: "#6b7280" }}>Estimated recovery</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.625rem", color: "#059669", fontWeight: 500 }}>$68K saved</span>
              </div>
              <p style={{ fontSize: "0.5rem", color: "#9ca3af", marginTop: "2px" }}>Avoided failure + reduced scrap + supplier correction</p>
            </div>
          </div>
        </div>

        {/* Audit Bar */}
        <div style={{ marginTop: "1rem", padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.5625rem", color: "#9ca3af", flexWrap: "wrap" }}>
            <ShieldCheck size={12} color="#9ca3af" />
            <span>3 sensor streams · 2 maintenance logs · 1 OEM manual · 1 NCR · 1 ERP record · ID: INV-2024-1103</span>
          </div>
          <span style={{ fontSize: "0.5625rem", color: "#d97706", cursor: "pointer" }}>View full reasoning chain →</span>
        </div>
      </div>
    </div>
  );
}

import { ClipboardList } from "lucide-react";

/* ─── Main Products Section ─── */
export default function ProductsSection() {
  const annotationIcon = (icon, text) => (
    <div className="r-up" style={{ textAlign: "center", padding: "1rem" }}>
      <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.5rem" }}>
        {icon}
      </div>
      <p style={{ fontSize: "0.75rem", color: "#6b7280", fontWeight: 300 }}>{text}</p>
    </div>
  );

  return (
    <section id="products" style={{ padding: "12rem 0", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
      <div className="orb" style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", width: "700px", height: "500px", background: "rgba(245,158,11,0.04)", top: "5%", right: "15%" }} />
      <div className="orb" style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", width: "500px", height: "400px", background: "rgba(249,115,22,0.03)", bottom: "15%", left: "5%" }} />

      <div style={{ position: "relative", maxWidth: "88rem", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <div className="r-up" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", borderRadius: "9999px", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.12)", marginBottom: "2rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <span style={{ color: "#d97706", fontSize: "0.6875rem", fontWeight: 300, letterSpacing: "0.25em", textTransform: "uppercase" }}>Intelligence in Action</span>
          </div>
          <h2 className="r-up" style={{ fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1.0, fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            See It<br />
            <span style={{ background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Working.</span>
          </h2>
        </div>

        {/* Mock 1 */}
        <div style={{ marginBottom: "8rem" }}>
          <div className="r-scale"><Mock360View /></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "1.5rem" }}>
            {[
              { icon: <Radio size={16} color="#ef4444" />, bg: "rgba(239,68,68,0.08)", text: "Live sensor data feeds directly into the analysis pipeline" },
              { icon: <FileSearch size={16} color="#8b5cf6" />, bg: "rgba(139,92,246,0.08)", text: "Maintenance logs, NCRs, and OEM manuals are retrieved and reasoned over" },
              { icon: <Brain size={16} color="#d97706" />, bg: "rgba(245,158,11,0.08)", text: "AI correlates all sources into a single explainable root cause" },
              { icon: <Target size={16} color="#059669" />, bg: "rgba(16,185,129,0.08)", text: "Actionable recommendation with cost impact and audit trail" },
            ].map((a, i) => (
              <div className="r-up" key={i} style={{ textAlign: "center", padding: "1rem" }}>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: a.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.5rem" }}>{a.icon}</div>
                <p style={{ fontSize: "0.75rem", color: "#6b7280", fontWeight: 300 }}>{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mock 2: Performance */}
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "2.5rem", alignItems: "flex-start", marginBottom: "8rem" }}>
          <div className="r-left"><MockPerformance /></div>
          <div className="r-right" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}><Activity size={24} color="#d97706" /></div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 300, color: "#111827", letterSpacing: "-0.02em" }}>Operational Performance</h3>
            </div>
            <p style={{ fontSize: "0.9375rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.6 }}>Not just metrics — explanations. Every KPI comes with an AI-generated root cause that links to specific process events, sensor readings, and SOPs.</p>
            {[
              { icon: <BarChart2 size={16} color="#f59e0b" />, title: "Auto-generated OEE breakdown", sub: "By availability, performance, and quality" },
              { icon: <GitBranch size={16} color="#f59e0b" />, title: "Root cause tied to process data", sub: "Sensor logs, CMMS records, quality events" },
              { icon: <FileText size={16} color="#f59e0b" />, title: "Recommendations linked to SOPs", sub: "Specific procedures and document references" },
            ].map((f, i) => (
              <div key={i} style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ flexShrink: 0 }}>{f.icon}</div>
                <div><p style={{ fontSize: "0.875rem", color: "#111827", fontWeight: 500 }}>{f.title}</p><p style={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 300 }}>{f.sub}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mock 3: SOP */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "2.5rem", alignItems: "flex-start", marginBottom: "8rem" }}>
          <div className="r-left" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", order: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}><BookOpen size={24} color="#ea580c" /></div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 300, color: "#111827", letterSpacing: "-0.02em" }}>Process Knowledge</h3>
            </div>
            <p style={{ fontSize: "0.9375rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.6 }}>Ask questions in natural language. Get answers grounded in your actual SOPs, work instructions, and safety procedures — with source citations.</p>
            {[
              { icon: <MessageSquare size={16} color="#ea580c" />, title: "Natural language SOP access", sub: "No more searching through binders and PDFs" },
              { icon: <AlertTriangle size={16} color="#ea580c" />, title: "Safety notes auto-surfaced", sub: "PPE requirements and hazard warnings inline" },
              { icon: <ShieldCheck size={16} color="#ea580c" />, title: "Always current revision", sub: "Outdated or conflicting procedures flagged" },
            ].map((f, i) => (
              <div key={i} style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ flexShrink: 0 }}>{f.icon}</div>
                <div><p style={{ fontSize: "0.875rem", color: "#111827", fontWeight: 500 }}>{f.title}</p><p style={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 300 }}>{f.sub}</p></div>
              </div>
            ))}
          </div>
          <div className="r-right" style={{ order: 1 }}><MockSOP /></div>
        </div>

        {/* Mock 4: Quality */}
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "2.5rem", alignItems: "flex-start", marginBottom: "8rem" }}>
          <div className="r-left"><MockQuality /></div>
          <div className="r-right" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}><ScanSearch size={24} color="#059669" /></div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 300, color: "#111827", letterSpacing: "-0.02em" }}>Quality Intelligence</h3>
            </div>
            <p style={{ fontSize: "0.9375rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.6 }}>SPC monitoring meets AI. Detects out-of-control conditions, correlates to process parameters, and recommends containment — pulling from quality reports, sensor data, and engineering specs.</p>
            {[
              { icon: <TrendingUp size={16} color="#059669" />, title: "Trend and rule violation detection", sub: "Western Electric rules applied automatically" },
              { icon: <GitBranch size={16} color="#059669" />, title: "Root cause across data types", sub: "Links SPC drift to tool wear, maint history, and OEM specs" },
              { icon: <PackageSearch size={16} color="#059669" />, title: "Batch genealogy and containment", sub: "Affected lots identified and quarantined" },
            ].map((f, i) => (
              <div key={i} style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ flexShrink: 0 }}>{f.icon}</div>
                <div><p style={{ fontSize: "0.875rem", color: "#111827", fontWeight: 500 }}>{f.title}</p><p style={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 300 }}>{f.sub}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mock 5: Executive */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "2.5rem", alignItems: "flex-start", marginBottom: "8rem" }}>
          <div className="r-left" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", order: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}><Briefcase size={24} color="#7c3aed" /></div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 300, color: "#111827", letterSpacing: "-0.02em" }}>Executive Decision Support</h3>
            </div>
            <p style={{ fontSize: "0.9375rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.6 }}>Ask questions in plain language across all plants. Get answers backed by source records — not summaries of summaries.</p>
            {[
              { icon: <MessageSquare size={16} color="#7c3aed" />, title: "Multi-turn conversational Q&A", sub: "Follow-up questions refine the analysis" },
              { icon: <Building2 size={16} color="#7c3aed" />, title: "Cross-plant comparison", sub: "Performance contextualized across sites" },
              { icon: <Calculator size={16} color="#7c3aed" />, title: "Cost impact quantification", sub: "Maintenance backlog vs. failure cost analysis" },
            ].map((f, i) => (
              <div key={i} style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ flexShrink: 0 }}>{f.icon}</div>
                <div><p style={{ fontSize: "0.875rem", color: "#111827", fontWeight: 500 }}>{f.title}</p><p style={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 300 }}>{f.sub}</p></div>
              </div>
            ))}
          </div>
          <div className="r-right" style={{ order: 1 }}><MockExecutive /></div>
        </div>

        {/* Mock 6: Anomaly */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h3 className="r-up" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300, color: "#111827", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>Anomaly Root Cause Investigation</h3>
            <p style={{ color: "#6b7280", fontWeight: 300, maxWidth: "40rem", margin: "0 auto" }}>When an anomaly is detected, Genovation reconstructs the entire time window — surfacing concurrent failures, correlating across data sources, and synthesizing actionable insights.</p>
          </div>
          <div className="r-scale"><MockAnomaly /></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "1.5rem" }}>
            {[
              { icon: <Clock size={16} color="#2563eb" />, bg: "rgba(59,130,246,0.08)", text: "Reconstructs the full timeline around an anomaly to find concurrent events" },
              { icon: <Link size={16} color="#8b5cf6" />, bg: "rgba(139,92,246,0.08)", text: "Correlates sensor data, maint logs, quality NCRs, OEM specs, and ERP records" },
              { icon: <Brain size={16} color="#d97706" />, bg: "rgba(245,158,11,0.08)", text: "Synthesizes root cause across failures — not just one event, the full causal chain" },
              { icon: <Zap size={16} color="#059669" />, bg: "rgba(16,185,129,0.08)", text: "Prioritized actions: immediate fixes, short-term corrections, and systemic improvements" },
            ].map((a, i) => (
              <div className="r-up" key={i} style={{ textAlign: "center", padding: "1rem" }}>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: a.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.5rem" }}>{a.icon}</div>
                <p style={{ fontSize: "0.75rem", color: "#6b7280", fontWeight: 300 }}>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}