"use client";

import {
  TrendingUp, Radio, Target, Globe, Scale, Lightbulb,
  Swords, Brain, Route, Activity, AlertTriangle, Users,
  Check, Sparkles, ChevronRight,
} from "lucide-react";

// ─── Reusable card wrapper ───────────────────────────────────────────────────
function CapCard({ children, className = "", animClass = "r-up" }) {
  return (
    <div
      className={`${animClass} ${className}`}
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: 20,
        padding: "1.75rem",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {children}
    </div>
  );
}

// ─── Icon badge ──────────────────────────────────────────────────────────────
function IconBadge({ gradient, children }) {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 12,
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

// ─── Card header row ─────────────────────────────────────────────────────────
function CardHeader({ gradient, icon, title, mono }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.1rem" }}>
      <IconBadge gradient={gradient}>{icon}</IconBadge>
      <div>
        <h3
          style={{
            fontSize: "0.9rem",
            fontWeight: 500,
            color: "#1a1a2e",
            fontFamily: "var(--font-urbanist), sans-serif",
            marginBottom: 2,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "0.6rem",
            color: "#9ca3af",
            fontFamily: "var(--font-space-mono), monospace",
            letterSpacing: "0.12em",
          }}
        >
          {mono}
        </p>
      </div>
    </div>
  );
}

// ─── Card body text ───────────────────────────────────────────────────────────
function CardDesc({ children }) {
  return (
    <p
      style={{
        fontSize: "0.78rem",
        color: "#6b7280",
        fontWeight: 300,
        lineHeight: 1.65,
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}

// ─── Tag pills ────────────────────────────────────────────────────────────────
function TagRow({ primary, primaryColor = "#10b981", primaryBg = "rgba(16,185,129,0.08)", rest = [] }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        marginBottom: "1rem",
      }}
    >
      <span
        style={{
          padding: "3px 10px",
          borderRadius: 8,
          background: primaryBg,
          color: primaryColor,
          fontSize: "0.65rem",
          fontWeight: 500,
        }}
      >
        {primary}
      </span>
      {rest.map((t) => (
        <span
          key={t}
          style={{
            padding: "3px 10px",
            borderRadius: 8,
            background: "rgba(0,0,0,0.04)",
            color: "#6b7280",
            fontSize: "0.65rem",
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

// ─── Inner mock container ─────────────────────────────────────────────────────
function MockBox({ children }) {
  return (
    <div
      style={{
        marginTop: "auto",
        background: "rgba(248,248,246,0.8)",
        border: "1px solid rgba(0,0,0,0.06)",
        borderRadius: 12,
        padding: "0.85rem",
      }}
    >
      {children}
    </div>
  );
}

// ─── Individual mock row (mini insight) ───────────────────────────────────────
function MockRow({ bg, border, label, value, sub, valueColor = "#1a1a2e" }) {
  return (
    <div
      style={{
        padding: "8px 10px",
        borderRadius: 9,
        background: bg,
        border: `1px solid ${border}`,
        marginBottom: 6,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            fontWeight: 500,
            color: "#1a1a2e",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: "0.72rem",
            fontFamily: "var(--font-space-mono), monospace",
            fontWeight: 700,
            color: valueColor,
          }}
        >
          {value}
        </span>
      </div>
      {sub && (
        <p
          style={{
            fontSize: "0.6rem",
            color: "#9ca3af",
            fontFamily: "var(--font-space-mono), monospace",
            marginTop: 2,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════════════════
export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden"
      style={{ background: "#F0EEE8", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* Subtle orbs */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 500,
          background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          top: "5%",
          left: "10%",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 350,
          background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)",
          bottom: "10%",
          right: "15%",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8">

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
            01
          </span>
          <div
            style={{ width: 32, height: 1, background: "rgba(16,185,129,0.4)" }}
          />
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.65rem",
              color: "#9ca3af",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Core Capabilities
          </span>
        </div>

        {/* ── Heading ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="r-up"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
              fontWeight: 300,
              fontFamily: "var(--font-urbanist), sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#1a1a2e",
              marginBottom: "1rem",
            }}
          >
            Intelligence{" "}
            <span style={{ color: "#10b981" }}>Modules</span>
          </h2>
          <p
            className="r-up"
            style={{
              fontSize: "1rem",
              color: "#9ca3af",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Eight purpose-built intelligence engines that work together to give
            leadership a continuous, 360° view of the strategic landscape
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
            ROW 1 — 3 columns
        ═══════════════════════════════════════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
            marginBottom: 20,
          }}
        >

          {/* ── 1. Market Intelligence ── */}
          <CapCard animClass="r-left">
            <CardHeader
              gradient="linear-gradient(135deg,#10b981,#059669)"
              icon={<TrendingUp size={18} color="#fff" />}
              title="Market Intelligence"
              mono="TREND_ANALYSIS"
            />
            <CardDesc>
              Continuously ingests market signals, industry reports, and macro
              indicators. Produces structured trend summaries with confidence
              scores — not raw data feeds.
            </CardDesc>
            <TagRow
              primary="Real-time Monitoring"
              primaryColor="#10b981"
              primaryBg="rgba(16,185,129,0.08)"
              rest={["Regulatory Tracking", "Executive Briefs"]}
            />
            <MockBox>
              <MockRow
                bg="rgba(16,185,129,0.04)"
                border="rgba(16,185,129,0.12)"
                label="Enterprise AI Market"
                value="+42%"
                valueColor="#10b981"
                sub="CAGR 38% through 2027"
              />
              <MockRow
                bg="rgba(255,255,255,0.7)"
                border="rgba(0,0,0,0.06)"
                label="Compliance Tech"
                value="+28%"
                valueColor="#06b6d4"
                sub="EU AI Act creating demand"
              />
            </MockBox>
          </CapCard>

          {/* ── 2. Demand Sensing ── */}
          <CapCard animClass="r-up">
            <CardHeader
              gradient="linear-gradient(135deg,#0ea5e9,#2563eb)"
              icon={<Radio size={18} color="#fff" />}
              title="Demand Sensing"
              mono="DEMAND_INTELLIGENCE"
            />
            <CardDesc>
              Detects shifts in market demand before they appear in sales data.
              Cross-references procurement signals, search trends, earnings calls,
              and channel data to forecast demand inflection points.
            </CardDesc>
            <TagRow
              primary="Early Warning"
              primaryColor="#0ea5e9"
              primaryBg="rgba(14,165,233,0.08)"
              rest={["Procurement Signals", "Demand Forecasting"]}
            />
            <MockBox>
              {/* Alert row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  padding: "8px 10px",
                  borderRadius: 9,
                  background: "rgba(14,165,233,0.05)",
                  border: "1px solid rgba(14,165,233,0.12)",
                  marginBottom: 6,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      color: "#1a1a2e",
                      marginBottom: 3,
                    }}
                  >
                    Demand Shift Detected
                  </div>
                  <p
                    style={{
                      fontSize: "0.6rem",
                      color: "#9ca3af",
                      fontFamily: "var(--font-space-mono), monospace",
                    }}
                  >
                    APAC industrial sensors — procurement RFQs up 340% in 14 days
                  </p>
                </div>
                <span
                  style={{
                    padding: "2px 6px",
                    borderRadius: 5,
                    background: "rgba(239,68,68,0.12)",
                    color: "#ef4444",
                    fontSize: "0.58rem",
                    fontFamily: "var(--font-space-mono), monospace",
                    fontWeight: 700,
                    flexShrink: 0,
                    marginLeft: 8,
                  }}
                >
                  ALERT
                </span>
              </div>
              {/* Forecast row */}
              <div
                style={{
                  padding: "8px 10px",
                  borderRadius: 9,
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      color: "#1a1a2e",
                    }}
                  >
                    Q2 Demand Forecast
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-space-mono), monospace",
                      fontWeight: 700,
                      color: "#10b981",
                    }}
                  >
                    ↑ 22%
                  </span>
                </div>
                {/* Progress bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div
                    style={{
                      flex: 1,
                      height: 5,
                      borderRadius: 9999,
                      background: "rgba(16,185,129,0.15)",
                    }}
                  >
                    <div
                      style={{
                        width: "78%",
                        height: "100%",
                        borderRadius: 9999,
                        background: "#10b981",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "0.58rem",
                      fontFamily: "var(--font-space-mono), monospace",
                      color: "#9ca3af",
                    }}
                  >
                    78% conf.
                  </span>
                </div>
              </div>
            </MockBox>
          </CapCard>

          {/* ── 3. Competitor Tracking ── */}
          <CapCard animClass="r-right">
            <CardHeader
              gradient="linear-gradient(135deg,#8b5cf6,#7c3aed)"
              icon={<Target size={18} color="#fff" />}
              title="Competitor Tracking"
              mono="SIGNAL_DETECTION"
            />
            <CardDesc>
              Monitors competitor activity across public disclosures, product
              moves, hiring patterns, patent filings, and partnership
              announcements. Surfaces meaningful signals, not headlines.
            </CardDesc>
            <TagRow
              primary="Pattern Recognition"
              primaryColor="#8b5cf6"
              primaryBg="rgba(139,92,246,0.08)"
              rest={["Intent Analysis", "Move Prediction"]}
            />
            <MockBox>
              {[
                {
                  icon: <Target size={11} color="#ef4444" />,
                  iconBg: "rgba(239,68,68,0.12)",
                  title: "Competitor B: Product Launch",
                  sub: "2 hours ago • High impact",
                  bg: "rgba(239,68,68,0.04)",
                  border: "rgba(239,68,68,0.1)",
                },
                {
                  icon: <Users size={11} color="#3b82f6" />,
                  iconBg: "rgba(59,130,246,0.12)",
                  title: "Competitor A: +30 Sales Hires",
                  sub: "1 day ago • Expansion signal",
                  bg: "rgba(255,255,255,0.7)",
                  border: "rgba(0,0,0,0.06)",
                },
              ].map(({ icon, iconBg, title, sub, bg, border }) => (
                <div
                  key={title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 10px",
                    borderRadius: 9,
                    background: bg,
                    border: `1px solid ${border}`,
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 500,
                        color: "#1a1a2e",
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.6rem",
                        color: "#9ca3af",
                        fontFamily: "var(--font-space-mono), monospace",
                      }}
                    >
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </MockBox>
          </CapCard>
        </div>

        {/* ══════════════════════════════════════════════════
            ROW 2 — 2 columns
        ═══════════════════════════════════════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 20,
            marginBottom: 20,
          }}
        >

          {/* ── 4. Geopolitical Risk Assessment ── */}
          <CapCard animClass="r-left">
            <CardHeader
              gradient="linear-gradient(135deg,#ef4444,#dc2626)"
              icon={<Globe size={18} color="#fff" />}
              title="Geopolitical Risk Assessment"
              mono="GEO_RISK_ENGINE"
            />
            <CardDesc>
              Maps geopolitical developments to direct business impact: trade
              policy shifts, sanctions, supply chain corridor risks, and
              political instability. Quantifies exposure and recommends
              mitigation scenarios.
            </CardDesc>
            <TagRow
              primary="Country Risk Scoring"
              primaryColor="#ef4444"
              primaryBg="rgba(239,68,68,0.08)"
              rest={["Sanctions Tracker", "Trade Corridor Analysis", "Supply Chain Exposure"]}
            />
            <MockBox>
              {/* 3-col risk grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 6,
                  marginBottom: 8,
                }}
              >
                {[
                  { label: "CHINA_RISK", val: "High", color: "#ef4444", bg: "rgba(239,68,68,0.06)", border: "rgba(239,68,68,0.12)" },
                  { label: "EU_TRADE",   val: "Med",  color: "#f59e0b", bg: "rgba(245,158,11,0.06)", border: "rgba(245,158,11,0.12)" },
                  { label: "USMCA",      val: "Low",  color: "#10b981", bg: "rgba(16,185,129,0.06)", border: "rgba(16,185,129,0.12)" },
                ].map(({ label, val, color, bg, border }) => (
                  <div
                    key={label}
                    style={{
                      textAlign: "center",
                      padding: "8px 4px",
                      borderRadius: 9,
                      background: bg,
                      border: `1px solid ${border}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.55rem",
                        color: "#9ca3af",
                        fontFamily: "var(--font-space-mono), monospace",
                        marginBottom: 3,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontFamily: "var(--font-space-mono), monospace",
                        fontWeight: 700,
                        color,
                      }}
                    >
                      {val}
                    </div>
                  </div>
                ))}
              </div>
              {/* Alert row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  padding: "8px 10px",
                  borderRadius: 9,
                  background: "rgba(239,68,68,0.04)",
                  border: "1px solid rgba(239,68,68,0.1)",
                }}
              >
                <AlertTriangle size={12} color="#ef4444" style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      color: "#1a1a2e",
                      marginBottom: 2,
                    }}
                  >
                    Taiwan Strait — Elevated risk detected
                  </div>
                  <p
                    style={{
                      fontSize: "0.6rem",
                      color: "#9ca3af",
                      fontFamily: "var(--font-space-mono), monospace",
                    }}
                  >
                    Semiconductor supply chain exposure: $4.2B annual procurement at risk. 3 alternate suppliers identified.
                  </p>
                </div>
              </div>
            </MockBox>
          </CapCard>

          {/* ── 5. Regulatory & Policy Intelligence ── */}
          <CapCard animClass="r-right">
            <CardHeader
              gradient="linear-gradient(135deg,#f59e0b,#d97706)"
              icon={<Scale size={18} color="#fff" />}
              title="Regulatory & Policy Intelligence"
              mono="COMPLIANCE_RADAR"
            />
            <CardDesc>
              Tracks regulatory developments across jurisdictions in real time.
              Maps pending legislation, enforcement actions, and compliance
              deadlines to your specific business exposure. Flags first-mover
              advantages.
            </CardDesc>
            <TagRow
              primary="Multi-Jurisdiction"
              primaryColor="#f59e0b"
              primaryBg="rgba(245,158,11,0.08)"
              rest={["Impact Scoring", "Compliance Deadlines", "Opportunity Flagging"]}
            />
            <MockBox>
              {[
                {
                  iconBg: "rgba(239,68,68,0.12)",
                  iconColor: "#ef4444",
                  icon: "!",
                  title: "EU AI Act — Article 6 High-Risk",
                  sub: "Compliance deadline: Aug 2025 • Your exposure: 4 products",
                  bg: "rgba(239,68,68,0.04)",
                  border: "rgba(239,68,68,0.1)",
                  isCheck: false,
                },
                {
                  iconBg: "rgba(16,185,129,0.12)",
                  iconColor: "#10b981",
                  icon: "✓",
                  title: "US Executive Order on AI Safety",
                  sub: "First-mover advantage identified • Compliance = competitive moat",
                  bg: "rgba(16,185,129,0.04)",
                  border: "rgba(16,185,129,0.1)",
                  isCheck: true,
                },
              ].map(({ iconBg, iconColor, icon, title, sub, bg, border }) => (
                <div
                  key={title}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "8px 10px",
                    borderRadius: 9,
                    background: bg,
                    border: `1px solid ${border}`,
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: iconColor,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 500,
                        color: "#1a1a2e",
                        marginBottom: 2,
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.6rem",
                        color: "#9ca3af",
                        fontFamily: "var(--font-space-mono), monospace",
                      }}
                    >
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </MockBox>
          </CapCard>
        </div>

        {/* ══════════════════════════════════════════════════
            ROW 3 — 3 columns
        ═══════════════════════════════════════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
            marginBottom: 20,
          }}
        >

          {/* ── 6. Innovation Scouting ── */}
          <CapCard animClass="r-left">
            <CardHeader
              gradient="linear-gradient(135deg,#06b6d4,#0891b2)"
              icon={<Lightbulb size={18} color="#fff" />}
              title="Innovation Scouting"
              mono="TECH_DISCOVERY"
            />
            <CardDesc>
              Tracks emerging technologies, research publications, startup
              funding, and patent clusters. Maps innovation signals to enterprise
              relevance with build-vs-buy recommendations.
            </CardDesc>
            <TagRow
              primary="Tech Radar"
              primaryColor="#06b6d4"
              primaryBg="rgba(6,182,212,0.08)"
              rest={["Startup Watch", "Patent Clusters"]}
            />
            <MockBox>
              {[
                {
                  label: "Post-Quantum Crypto",
                  value: "98%",
                  valueColor: "#06b6d4",
                  sub: "CRYSTALS-Kyber standardization accelerating",
                  bg: "rgba(6,182,212,0.04)",
                  border: "rgba(6,182,212,0.1)",
                },
                {
                  label: "Small Language Models",
                  value: "94%",
                  valueColor: "#8b5cf6",
                  sub: "On-device inference for enterprise",
                  bg: "rgba(255,255,255,0.7)",
                  border: "rgba(0,0,0,0.06)",
                },
              ].map(({ label, value, valueColor, sub, bg, border }) => (
                <div
                  key={label}
                  style={{
                    padding: "8px 10px",
                    borderRadius: 9,
                    background: bg,
                    border: `1px solid ${border}`,
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 2,
                    }}
                  >
                    <span
                      style={{ fontSize: "0.72rem", fontWeight: 500, color: "#1a1a2e" }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        padding: "2px 7px",
                        borderRadius: 5,
                        background: `${valueColor}18`,
                        fontSize: "0.62rem",
                        fontFamily: "var(--font-space-mono), monospace",
                        fontWeight: 700,
                        color: valueColor,
                      }}
                    >
                      {value}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.6rem",
                      color: "#9ca3af",
                      fontFamily: "var(--font-space-mono), monospace",
                    }}
                  >
                    {sub}
                  </p>
                </div>
              ))}
            </MockBox>
          </CapCard>

          {/* ── 7. Scenario War Gaming ── */}
          <CapCard animClass="r-up">
            <CardHeader
              gradient="linear-gradient(135deg,#d946ef,#9333ea)"
              icon={<Swords size={18} color="#fff" />}
              title="Scenario War Gaming"
              mono="SCENARIO_ENGINE"
            />
            <CardDesc>
              Simulates strategic scenarios based on current intelligence:
              competitor moves, regulatory shifts, market disruptions. Generates
              probabilistic outcome trees with recommended responses for each
              path.
            </CardDesc>
            <TagRow
              primary="What-If Modeling"
              primaryColor="#d946ef"
              primaryBg="rgba(217,70,239,0.08)"
              rest={["Outcome Trees", "Red Team Sim"]}
            />
            <MockBox>
              <div
                style={{
                  padding: "8px 10px",
                  borderRadius: 9,
                  background: "rgba(217,70,239,0.04)",
                  border: "1px solid rgba(217,70,239,0.1)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.62rem",
                    fontFamily: "var(--font-space-mono), monospace",
                    color: "#d946ef",
                    marginBottom: 8,
                  }}
                >
                  SCENARIO: &quot;Competitor launches price war&quot;
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                  }}
                >
                  {[
                    { pct: "65%", label: "Hold premium positioning", color: "#10b981" },
                    { pct: "25%", label: "Pivot to value segment",   color: "#f59e0b" },
                    { pct: "10%", label: "Exit contested market",    color: "#ef4444" },
                  ].map(({ pct, label, color }) => (
                    <div
                      key={label}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <div
                        style={{
                          flex: 1,
                          height: 5,
                          borderRadius: 9999,
                          background: "rgba(0,0,0,0.06)",
                        }}
                      >
                        <div
                          style={{
                            width: pct,
                            height: "100%",
                            borderRadius: 9999,
                            background: color,
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "0.6rem",
                          fontFamily: "var(--font-space-mono), monospace",
                          color: "#9ca3af",
                          minWidth: 130,
                          textAlign: "right",
                        }}
                      >
                        {pct} — {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MockBox>
          </CapCard>

          {/* ── 8. Strategic Research ── */}
          <CapCard animClass="r-right">
            <CardHeader
              gradient="linear-gradient(135deg,#f59e0b,#ea580c)"
              icon={<Brain size={18} color="#fff" />}
              title="Strategic Research"
              mono="BOARD_INTELLIGENCE"
            />
            <CardDesc>
              On-demand research assistant for leadership: comparative analysis,
              investment thesis validation, board-ready briefings, and structured
              decision frameworks with full source lineage.
            </CardDesc>
            <TagRow
              primary="Executive Ready"
              primaryColor="#f59e0b"
              primaryBg="rgba(245,158,11,0.08)"
              rest={["Board Briefs", "Decision Frameworks"]}
            />
            <MockBox>
              {/* User bubble */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Users size={11} color="#6b7280" />
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: "3px 10px 10px 10px",
                    padding: "7px 10px",
                    fontSize: "0.7rem",
                    color: "#374151",
                    fontWeight: 300,
                  }}
                >
                  Compare our M&amp;A pipeline vs. top 3 competitors for board review
                </div>
              </div>
              {/* Agent bubble */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "rgba(245,158,11,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={11} color="#f59e0b" />
                </div>
                <div
                  style={{
                    background: "rgba(245,158,11,0.05)",
                    border: "1px solid rgba(245,158,11,0.14)",
                    borderRadius: "3px 10px 10px 10px",
                    padding: "7px 10px",
                    fontSize: "0.7rem",
                    color: "#374151",
                    fontWeight: 300,
                    lineHeight: 1.55,
                  }}
                >
                  Board brief generated: 3 strategic gaps identified, 2 acquisition targets recommended, full lineage attached.
                </div>
              </div>
            </MockBox>
          </CapCard>
        </div>

        {/* ══════════════════════════════════════════════════
            ROW 4 — Full width: Supply Chain
        ═══════════════════════════════════════════════════ */}
        <CapCard animClass="r-scale">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            {/* Left: copy */}
            <div>
              <CardHeader
                gradient="linear-gradient(135deg,#0d9488,#10b981)"
                icon={<Route size={18} color="#fff" />}
                title="Supply Chain & Ecosystem Intelligence"
                mono="SUPPLY_CHAIN_RADAR"
              />
              <CardDesc>
                Maps your entire supplier ecosystem and monitors disruption
                signals in real time: port delays, raw material price shifts,
                supplier financial health, geopolitical corridor risks, and
                tier-2/3 exposure. Automatically triggers contingency
                recommendations.
              </CardDesc>
              <TagRow
                primary="Multi-Tier Visibility"
                primaryColor="#0d9488"
                primaryBg="rgba(13,148,136,0.08)"
                rest={[
                  "Disruption Early Warning",
                  "Contingency Planning",
                  "Supplier Health Monitor",
                  "Cost Impact Modeling",
                ]}
              />
            </div>

            {/* Right: mock */}
            <MockBox>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 10,
                }}
              >
                <Activity size={12} color="#0d9488" />
                <span
                  style={{
                    fontSize: "0.6rem",
                    fontFamily: "var(--font-space-mono), monospace",
                    color: "#9ca3af",
                    letterSpacing: "0.1em",
                  }}
                >
                  SUPPLY_CHAIN_MONITOR — Live
                </span>
              </div>

              {[
                {
                  dot: "#ef4444",
                  pulse: true,
                  title: "Red Sea corridor — transit delays +14 days",
                  detail: "Affects 23% of inbound logistics • 4 alternate routes scored",
                  bg: "rgba(239,68,68,0.04)",
                  border: "rgba(239,68,68,0.1)",
                },
                {
                  dot: "#f59e0b",
                  pulse: false,
                  title: "Tier-2 supplier financial stress — Jiangsu MicroElec",
                  detail: "Credit downgrade detected • Alternate supplier pre-qualified",
                  bg: "rgba(245,158,11,0.04)",
                  border: "rgba(245,158,11,0.08)",
                },
                {
                  dot: "#10b981",
                  pulse: false,
                  title: "Lithium carbonate spot price — stabilizing at $12.4k/ton",
                  detail: "Favorable for Q3 procurement window • Lock-in recommended",
                  bg: "rgba(16,185,129,0.04)",
                  border: "rgba(16,185,129,0.08)",
                },
              ].map(({ dot, pulse, title, detail, bg, border }) => (
                <div
                  key={title}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "8px 10px",
                    borderRadius: 9,
                    background: bg,
                    border: `1px solid ${border}`,
                    marginBottom: 6,
                  }}
                >
                  <div
                    className={pulse ? "soft-pulse" : ""}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: dot,
                      flexShrink: 0,
                      marginTop: 4,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 500,
                        color: "#1a1a2e",
                        marginBottom: 2,
                      }}
                    >
                      {title}
                    </div>
                    <p
                      style={{
                        fontSize: "0.6rem",
                        color: "#9ca3af",
                        fontFamily: "var(--font-space-mono), monospace",
                      }}
                    >
                      {detail}
                    </p>
                  </div>
                </div>
              ))}

              {/* Bottom 3-stat row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 6,
                  marginTop: 8,
                  paddingTop: 8,
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {[
                  { label: "SUPPLIERS", val: "847",  color: "#1a1a2e"  },
                  { label: "AT_RISK",   val: "12",   color: "#ef4444"  },
                  { label: "COVERAGE",  val: "94%",  color: "#10b981"  },
                ].map(({ label, val, color }) => (
                  <div
                    key={label}
                    style={{
                      textAlign: "center",
                      padding: "6px 4px",
                      borderRadius: 8,
                      background: "rgba(0,0,0,0.02)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.55rem",
                        color: "#9ca3af",
                        fontFamily: "var(--font-space-mono), monospace",
                        marginBottom: 2,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontFamily: "var(--font-space-mono), monospace",
                        fontWeight: 700,
                        color,
                      }}
                    >
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </MockBox>
          </div>
        </CapCard>

      </div>
    </section>
  );
}
