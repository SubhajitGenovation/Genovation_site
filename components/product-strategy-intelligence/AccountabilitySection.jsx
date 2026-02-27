"use client";

import { FileCheck, Scale, Shield, ShieldCheck } from "lucide-react";

const PILLARS = [
  {
    iconBg: "rgba(16,185,129,0.15)",
    iconBorder: "rgba(16,185,129,0.25)",
    icon: <FileCheck size={22} color="#10b981" />,
    title: "Explainability by Design",
    desc: "Clear reasoning paths, traceable sources, and structured summaries suitable for executive review.",
  },
  {
    iconBg: "rgba(6,182,212,0.15)",
    iconBorder: "rgba(6,182,212,0.25)",
    icon: <Scale size={22} color="#06b6d4" />,
    title: "Governance & Oversight",
    desc: "Role-based access, controlled domains of intelligence, and full audit trails of strategic queries.",
  },
  {
    iconBg: "rgba(139,92,246,0.15)",
    iconBorder: "rgba(139,92,246,0.25)",
    icon: <Shield size={22} color="#a78bfa" />,
    title: "Data Sovereignty",
    desc: "On-premise, private network, or air-gapped deployment with no uncontrolled external data flows.",
  },
];

const AUDIT_ROWS = [
  {
    time: "14:32:18",
    badge: "QUERY",
    badgeBg: "rgba(16,185,129,0.18)",
    badgeColor: "#10b981",
    msg: 'Market intelligence request: "EU AI Act compliance impact"',
    actor: "CFO",
  },
  {
    time: "14:32:19",
    badge: "ANALYSIS",
    badgeBg: "rgba(6,182,212,0.18)",
    badgeColor: "#06b6d4",
    msg: "Processed 247 regulatory documents, 12 analyst reports",
    actor: "Mentis",
  },
  {
    time: "14:32:24",
    badge: "VALIDATION",
    badgeBg: "rgba(139,92,246,0.18)",
    badgeColor: "#a78bfa",
    msg: "JUDGE verified compliance with internal policies",
    actor: "JUDGE",
  },
  {
    time: "14:32:28",
    badge: "RESPONSE",
    badgeBg: "rgba(16,185,129,0.18)",
    badgeColor: "#10b981",
    msg: "Delivered strategic brief with 15 source citations",
    actor: "System",
  },
];

export default function AccountabilitySection() {
  return (
    <section
      id="accountability"
      className="relative overflow-hidden"
      style={{ background: "#0A0A0A", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* Subtle bg orb */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 500,
          background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
          top: "30%",
          left: "30%",
        }}
      />
      {/* Top divider line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "66%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-8">

        {/* ── Section label ── */}
        <div
          className="r-up"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.65rem",
              color: "#10b981",
              letterSpacing: "0.15em",
            }}
          >
            02
          </span>
          <div
            style={{
              width: 32,
              height: 1,
              background: "rgba(16,185,129,0.45)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Leadership Accountability
          </span>
        </div>

        {/* ── Heading ── */}
        <div
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto 1.25rem",
          }}
        >
          <h2
            className="r-up"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 300,
              fontFamily: "var(--font-urbanist), sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Defensible Decisions
          </h2>
          <p
            className="r-up"
            style={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.4)",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 auto 3.5rem",
            }}
          >
            Strategic intelligence influences decisions with long-term
            consequences. It must be defensible.
          </p>
        </div>

        {/* ── 3 Pillar cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
            marginBottom: "2.5rem",
          }}
        >
          {PILLARS.map(({ iconBg, iconBorder, icon, title, desc }) => (
            <div
              key={title}
              className="r-up"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 18,
                padding: "2rem 1.5rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: iconBg,
                  border: `1px solid ${iconBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.1rem",
                }}
              >
                {icon}
              </div>
              {/* Title */}
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#ffffff",
                  fontFamily: "var(--font-urbanist), sans-serif",
                  marginBottom: "0.6rem",
                }}
              >
                {title}
              </h3>
              {/* Desc */}
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.35)",
                  fontWeight: 300,
                  lineHeight: 1.65,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Audit Terminal ── */}
        <div
          className="r-scale"
          style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 18,
            overflow: "hidden",
          }}
        >
          {/* Terminal titlebar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              background: "rgba(0,0,0,0.4)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              {/* Traffic lights */}
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#f59e0b" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#10b981" }} />
              </div>
              {/* Separator */}
              <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.08)" }} />
              {/* Icon + label */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 7,
                    background: "rgba(16,185,129,0.2)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ShieldCheck size={12} color="#10b981" />
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-space-mono), monospace",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  audit_log
                </span>
              </div>
            </div>
            {/* Right label */}
            <span
              style={{
                fontSize: "0.65rem",
                fontFamily: "var(--font-space-mono), monospace",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              Complete query lineage
            </span>
          </div>

          {/* Audit rows */}
          <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: 8 }}>
            {AUDIT_ROWS.map(({ time, badge, badgeBg, badgeColor, msg, actor }) => (
              <div
                key={time}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Timestamp */}
                <span
                  style={{
                    flexShrink: 0,
                    width: 58,
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-space-mono), monospace",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  {time}
                </span>
                {/* Badge */}
                <span
                  style={{
                    flexShrink: 0,
                    padding: "3px 9px",
                    borderRadius: 6,
                    background: badgeBg,
                    fontSize: "0.62rem",
                    fontFamily: "var(--font-space-mono), monospace",
                    fontWeight: 700,
                    color: badgeColor,
                    letterSpacing: "0.05em",
                  }}
                >
                  {badge}
                </span>
                {/* Message */}
                <span
                  style={{
                    flex: 1,
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.65)",
                    fontWeight: 300,
                  }}
                >
                  {msg}
                </span>
                {/* Actor */}
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-space-mono), monospace",
                    color: "rgba(255,255,255,0.2)",
                  }}
                >
                  {actor}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
