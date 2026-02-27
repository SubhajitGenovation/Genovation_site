"use client";

import { FileText, ClipboardList, ScrollText, BookOpen, Mail, ScanSearch, GitMerge, Brain, ShieldCheck, Radio, Database, Server, Layers, BarChart2, FileSearch } from "lucide-react";

export default function DataUniverseSection() {
  return (
    <section id="dataUniverse" style={{ padding: "12rem 0", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
      <div className="orb" style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", width: "600px", height: "400px", background: "rgba(249,115,22,0.04)", top: "5%", right: "15%" }} />
      <div className="orb" style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", width: "500px", height: "400px", background: "rgba(6,182,212,0.03)", bottom: "10%", left: "10%" }} />

      <div style={{ position: "relative", maxWidth: "88rem", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="r-up" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", borderRadius: "9999px", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.12)", marginBottom: "2rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><path d="M2 13.5L12 2l4 4-7 7 4 4-10.5 2 .5-5.5Z"/><path d="m22 22-5-5"/></svg>
            <span style={{ color: "#d97706", fontSize: "0.6875rem", fontWeight: 300, letterSpacing: "0.25em", textTransform: "uppercase" }}>Our Approach</span>
          </div>
          <h2 className="r-up" style={{ fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1.0, fontSize: "clamp(2.5rem, 7vw, 6rem)", marginBottom: "1.5rem" }}>
            Every Data Source.<br />
            <span style={{ background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>One Intelligence Layer.</span>
          </h2>
          <p className="r-up" style={{ fontSize: "1.05rem", color: "#6b7280", fontWeight: 300, maxWidth: "48rem", margin: "0 auto" }}>
            Manufacturing knowledge lives everywhere — in sensor streams, PDF manuals, maintenance logs, quality reports, and tribal expertise. Genovation consolidates structured and unstructured data into a unified intelligence layer without forced rip-and-replace.
          </p>
        </div>

        {/* Full-width Data Consolidation Mock */}
        <div className="r-scale" style={{ marginBottom: "5rem" }}>
          <div className="industry-mock" style={{ boxShadow: "0 40px 100px -30px rgba(245,158,11,0.08)" }}>
            <div className="mock-header">
              <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#6b7280", marginLeft: "0.5rem", letterSpacing: "0.1em" }}>MENTIS OS — DATA INGESTION & CONSOLIDATION</span>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr 2fr", gap: "1rem", alignItems: "stretch" }}>
                {/* Left: Unstructured */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#7c3aed", letterSpacing: "0.2em", textTransform: "uppercase", background: "rgba(139,92,246,0.06)", padding: "4px 12px", borderRadius: "9999px" }}>Unstructured Data</span>
                  </div>
                  {[
                    { icon: <FileText size={16} color="#8b5cf6" />, title: "SOPs & Work Instructions", sub: "1,247 documents · PDF, Word" },
                    { icon: <ClipboardList size={16} color="#8b5cf6" />, title: "Quality Reports & NCRs", sub: "Free-text observations, images" },
                    { icon: <ScrollText size={16} color="#8b5cf6" />, title: "Maintenance Logs", sub: "Technician notes, CMMS entries" },
                    { icon: <BookOpen size={16} color="#8b5cf6" />, title: "Engineering Guides & Manuals", sub: "OEM specs, troubleshooting trees" },
                    { icon: <Mail size={16} color="#8b5cf6" />, title: "Shift Handover Notes", sub: "Operator observations, exceptions" },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(139,92,246,0.04)", border: "1px solid rgba(139,92,246,0.1)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: "rgba(139,92,246,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
                      <div>
                        <p style={{ fontSize: "0.6875rem", color: "#374151", fontWeight: 500 }}>{item.title}</p>
                        <p style={{ fontSize: "0.5625rem", color: "#9ca3af" }}>{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Center: Mentis OS */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ flex: 1, padding: "1.25rem", borderRadius: "1rem", background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)", boxShadow: "0 0 40px -15px rgba(245,158,11,0.08)", position: "relative" }}>
                    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "4px 12px", borderRadius: "9999px", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.15)" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b", animation: "pulse 2s infinite" }} />
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.625rem", color: "#92400e", letterSpacing: "0.1em", fontWeight: 700 }}>MENTIS OS</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                      {[
                        { icon: <ScanSearch size={14} color="#d97706" />, title: "Document Intelligence", desc: "Parses PDFs, scanned docs, images. Extracts procedures, parameters, thresholds, and cross-references." },
                        { icon: <GitMerge size={14} color="#d97706" />, title: "Cross-Source Correlation", desc: "Links sensor anomalies to maintenance history, quality observations to process parameters, failures to OEM specs." },
                        { icon: <Brain size={14} color="#d97706" />, title: "Contextual Reasoning", desc: "Generates insights grounded in both real-time telemetry and institutional knowledge — not just pattern matching." },
                        { icon: <ShieldCheck size={14} color="#d97706" />, title: "Source Traceability", desc: "Every insight traces back to its source document, sensor, log entry, or database record." },
                      ].map((item, i) => (
                        <div key={i} style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(245,158,11,0.1)" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "4px" }}>{item.icon}<span style={{ fontSize: "0.625rem", color: "#92400e", fontWeight: 500 }}>{item.title}</span></div>
                          <p style={{ fontSize: "0.625rem", color: "#6b7280", fontWeight: 300 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Structured */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#0891b2", letterSpacing: "0.2em", textTransform: "uppercase", background: "rgba(6,182,212,0.06)", padding: "4px 12px", borderRadius: "9999px" }}>Structured Data</span>
                  </div>
                  {[
                    { icon: <Radio size={16} color="#0891b2" />, title: "Sensor & IoT Streams", sub: "Vibration, temp, pressure, flow" },
                    { icon: <Database size={16} color="#0891b2" />, title: "Historians & Time Series", sub: "OSIsoft PI, Aveva, InfluxDB" },
                    { icon: <Server size={16} color="#0891b2" />, title: "MES & SCADA", sub: "Production orders, batch data" },
                    { icon: <Layers size={16} color="#0891b2" />, title: "ERP / SAP", sub: "Orders, inventory, scheduling" },
                    { icon: <BarChart2 size={16} color="#0891b2" />, title: "Quality Management (QMS)", sub: "SPC data, inspection records" },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(6,182,212,0.04)", border: "1px solid rgba(6,182,212,0.1)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: "rgba(6,182,212,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
                      <div>
                        <p style={{ fontSize: "0.6875rem", color: "#374151", fontWeight: 500 }}>{item.title}</p>
                        <p style={{ fontSize: "0.5625rem", color: "#9ca3af" }}>{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Output */}
              <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "2px", height: "2rem", background: "linear-gradient(to bottom, rgba(245,158,11,0.3), rgba(16,185,129,0.3))", borderRadius: "9999px" }} />
              </div>
              <div style={{ marginTop: "0.5rem", padding: "1rem", borderRadius: "1rem", background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.12)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
                    <span style={{ fontSize: "0.6875rem", color: "#059669", fontWeight: 500 }}>360° Operational Intelligence</span>
                  </div>
                  {["Root Cause Analysis", "Predictive Insights", "Natural Language Q&A", "Full Source Traceability"].map((t, i) => (
                    <span key={i} style={{ color: "#9ca3af", fontSize: "0.625rem" }}>· {t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          {[
            { icon: <FileSearch size={20} color="#8b5cf6" />, bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.12)", title: "Reads What Humans Write", desc: "Ingests PDFs, scanned documents, spreadsheets, operator notes, and engineering manuals. No manual tagging required." },
            { icon: <GitMerge size={20} color="#0891b2" />, bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.12)", title: "Connects What Systems Can't", desc: "Correlates a vibration spike with a maintenance log from last week, a quality NCR, and the OEM bearing spec — automatically." },
            { icon: <ShieldCheck size={20} color="#d97706" />, bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.12)", title: "Deploys Where You Need It", desc: "On-premise, private cloud, or edge-adjacent. No data leaves your network. Respects OT-IT boundaries." },
          ].map((card, i) => (
            <div className="r-up" key={i}>
              <div className="card" style={{ padding: "2rem", height: "100%", borderColor: card.border }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", background: card.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>{card.icon}</div>
                <h4 style={{ fontWeight: 500, color: "#111827", marginBottom: "0.5rem" }}>{card.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}