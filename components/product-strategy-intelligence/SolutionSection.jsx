"use client";

import { useState, useRef, useEffect } from "react";
import {
  Cog, Car, FlaskConical, Zap, Landmark, TrendingUp, Shield, RadioTower,
  Database, Clock, Circle,
} from "lucide-react";
import { industryData, industryMeta } from "@/app/product-strategy-intelligence/industryData";
import CommandCenter from "./CommandCenter";

const INDUSTRIES = [
  { key: "manufacturing", label: "Manufacturing",       Icon: Cog         },
  { key: "automotive",    label: "Automotive",          Icon: Car         },
  { key: "pharma",        label: "Pharma & Life Sciences", Icon: FlaskConical },
  { key: "energy",        label: "Energy & Utilities",  Icon: Zap         },
  { key: "finance",       label: "Banking & Finance",   Icon: Landmark    },
  { key: "investment",    label: "Investment Banking",  Icon: TrendingUp  },
  { key: "defense",       label: "Defense & Aerospace", Icon: Shield      },
  { key: "telecom",       label: "Telecom",             Icon: RadioTower  },
];

export default function SolutionSection() {
  const [active, setActive] = useState("automotive");
  const timerRef = useRef(null);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const idx = INDUSTRIES.findIndex((i) => i.key === prev);
        return INDUSTRIES[(idx + 1) % INDUSTRIES.length].key;
      });
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleTab = (key) => {
    clearInterval(timerRef.current);
    setActive(key);
  };

  const meta = industryMeta[active];
  const ICONS_MAP = {
    manufacturing: Cog, automotive: Car, pharma: FlaskConical,
    energy: Zap, finance: Landmark, investment: TrendingUp,
    defense: Shield, telecom: RadioTower,
  };
  const MetaIcon = ICONS_MAP[active] || Circle;

  return (
    <section
      id="solution"
      className="relative overflow-hidden"
      style={{ background: "#0A0A0A", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* bg orbs */}
      <div
        className="orb"
        style={{
          width: 700, height: 500,
          background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          top: "10%", left: "20%",
        }}
      />
      <div
        className="orb"
        style={{
          width: 500, height: 400,
          background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)",
          bottom: "10%", right: "15%",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-8">

        {/* ── Badge ── */}
        <div className="flex justify-center mb-10 r-up">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 9999,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <span
              style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 8px rgba(16,185,129,0.6)",
              }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "var(--font-space-mono), monospace",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              The Solution
            </span>
          </div>
        </div>

        {/* ── Heading ── */}
        <div className="text-center mb-12">
          <h2
            className="r-up"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 300,
              fontFamily: "var(--font-urbanist), sans-serif",
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            One Platform. Every
            <br />Industry.
          </h2>
          <p
            className="r-up"
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.45)",
              fontWeight: 300,
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            See how Strategy Intelligence transforms decision-making across sectors —
            with real-time signals, competitive radar, and explainable insights
            tailored to your world.
          </p>
        </div>

        {/* ── Industry Tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 r-up">
          {INDUSTRIES.slice(0, 6).map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => handleTab(key)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 18px",
                borderRadius: 9999,
                border: active === key
                  ? "1px solid rgba(16,185,129,0.6)"
                  : "1px solid rgba(255,255,255,0.1)",
                background: active === key
                  ? "rgba(16,185,129,0.15)"
                  : "rgba(255,255,255,0.04)",
                color: active === key ? "#10b981" : "rgba(255,255,255,0.55)",
                fontSize: "0.8rem",
                fontWeight: 400,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "var(--font-urbanist), sans-serif",
              }}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8 r-up">
          {INDUSTRIES.slice(6).map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => handleTab(key)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 18px",
                borderRadius: 9999,
                border: active === key
                  ? "1px solid rgba(16,185,129,0.6)"
                  : "1px solid rgba(255,255,255,0.1)",
                background: active === key
                  ? "rgba(16,185,129,0.15)"
                  : "rgba(255,255,255,0.04)",
                color: active === key ? "#10b981" : "rgba(255,255,255,0.55)",
                fontSize: "0.8rem",
                fontWeight: 400,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "var(--font-urbanist), sans-serif",
              }}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>

        {/* ── Context Bar ── */}
        <div
          className="flex items-center justify-between flex-wrap gap-4 mb-5 r-up"
          style={{
            padding: "14px 20px",
            borderRadius: 16,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              style={{
                width: 40, height: 40, borderRadius: 12,
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <MetaIcon size={18} color="#10b981" />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#fff",
                  fontFamily: "var(--font-urbanist), sans-serif",
                }}
              >
                {meta.title}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 300,
                }}
              >
                {meta.subtitle}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "6px 14px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Database size={12} color="rgba(255,255,255,0.4)" />
              <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-space-mono), monospace" }}>
                {industryData[active].sources}
              </span>
            </div>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "6px 14px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Clock size={12} color="rgba(255,255,255,0.4)" />
              <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-space-mono), monospace" }}>
                Updated 30s ago
              </span>
            </div>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "6px 14px",
                borderRadius: 9999,
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.3)",
              }}
            >
              <span
                style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 6px rgba(16,185,129,0.8)",
                }}
              />
              <span style={{ fontSize: "0.72rem", color: "#10b981", fontFamily: "var(--font-space-mono), monospace", fontWeight: 600 }}>
                LIVE
              </span>
            </div>
          </div>
        </div>

        {/* ── Command Center Mock ── */}
        <CommandCenter activeIndustry={active} data={industryData[active]} />
      </div>
    </section>
  );
}
