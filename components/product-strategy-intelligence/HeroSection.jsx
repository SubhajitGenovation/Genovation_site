"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      if (typeof document === "undefined") return;

      gsap.set(".hero-line-1", { y: 60, opacity: 0 });
      gsap.set(".hero-line-2", { y: 60, opacity: 0 });
      gsap.set("#heroDivider", { opacity: 0, scaleX: 0 });
      gsap.set("#heroSubText", { y: 24, opacity: 0 });
      gsap.set("#heroStats",   { y: 18, opacity: 0 });
      gsap.set("#heroCTAs",    { y: 18, opacity: 0 });
      gsap.set("#scrollCue",   { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 });

      tl.to(".hero-line-1", { y: 0, opacity: 1, duration: 1.0 })
        .to(".hero-line-2", { y: 0, opacity: 1, duration: 1.0 }, "-=0.7")
        .to("#heroDivider", { opacity: 1, scaleX: 1, duration: 0.55, transformOrigin: "center" }, "-=0.5")
        .to("#heroSubText", { y: 0, opacity: 1, duration: 0.85 }, "-=0.35")
        .to("#heroStats",   { y: 0, opacity: 1, duration: 0.75 }, "-=0.45")
        .to("#heroCTAs",    { y: 0, opacity: 1, duration: 0.75 }, "-=0.4")
        .to("#scrollCue",   { opacity: 1, duration: 0.5 },        "-=0.2");
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background: "#EDEEE8",
      }}
    >
      {/* ── Teal orb — top-center behind headline ── */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(6,230,195,0.12) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          /*
           * KEY FIX: maxWidth must be WIDE enough so each headline
           * line stays on exactly ONE line — matching the real page.
           * Real page shows ~1000px wide content area.
           */
          width: "100%",
          maxWidth: 1000,
          margin: "0 auto",
          padding: "8rem 3rem 5rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

        {/* ── Headline block ── */}
        <div style={{ marginBottom: "1.5rem", width: "100%" }}>

          {/* Line 1 — "Continuous Intelligence" — dark, single line */}
          <div className="hero-line-1" style={{ display: "block" }}>
            <span
              style={{
                display: "block",
                /*
                 * KEY FIX: Use a fixed font-size (not clamp) so it
                 * reliably stays on ONE line at 1000px container.
                 * Real page is ~5rem / 80px for this line.
                 */
                fontSize: "5rem",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "#1e293b",
                fontFamily: "var(--font-urbanist), sans-serif",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap", // force single line
              }}
            >
              Continuous Intelligence
            </span>
          </div>

          {/* Line 2 — "for Strategic Decisions" — teal→blue gradient, single line */}
          <div className="hero-line-2" style={{ display: "block" }}>
            <span
              style={{
                display: "block",
                fontSize: "5rem",
                fontWeight: 300,
                lineHeight: 1.15,
                fontFamily: "var(--font-urbanist), sans-serif",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap", // force single line
                /*
                 * Gradient: bright teal (#0ee8d4) → cyan (#06b6d4)
                 * → blue (#3b82f6) — matches screenshot exactly
                 */
                background:
                  "linear-gradient(90deg, #0ee8d4 0%, #06b6d4 35%, #3b82f6 80%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for Strategic Decisions
            </span>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          id="heroDivider"
          style={{
            width: 48,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)",
            marginBottom: "1.75rem",
          }}
        />

        {/* ── Sub copy ── */}
        <p
          id="heroSubText"
          style={{
            fontSize: "0.975rem",
            color: "#94a3b8",
            fontWeight: 300,
            maxWidth: 460,
            lineHeight: 1.75,
            marginBottom: "2.25rem",
            fontFamily: "var(--font-urbanist), sans-serif",
          }}
        >
          Strategic decisions are rarely constrained by a lack of information.
          They are constrained by fragmentation, delay, and ambiguity.
        </p>

        {/* ── 3 Stat pills ── */}
        <div
          id="heroStats"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2.25rem",
          }}
        >
          {[
            { val: "Real-time", label: "Signal Detection" },
            { val: "Full",      label: "Audit Trail"      },
            { val: "Zero",      label: "Black Boxes"      },
          ].map(({ val, label }, i) => (
            <div key={val} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ textAlign: "center", padding: "0 2.5rem" }}>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "#1e293b",
                    fontFamily: "var(--font-urbanist), sans-serif",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {val}
                </div>
                <div
                  style={{
                    fontSize: "0.6rem",
                    color: "#94a3b8",
                    fontFamily: "var(--font-space-mono), monospace",
                    letterSpacing: "0.1em",
                    marginTop: 4,
                  }}
                >
                  {label}
                </div>
              </div>
              {i < 2 && (
                <div
                  style={{
                    width: 1,
                    height: 32,
                    background: "rgba(0,0,0,0.1)",
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* ── CTA Buttons ── */}
        <div
          id="heroCTAs"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <a
            href="#capabilities"
            className="mag-btn hero-cta-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "13px 30px",
              borderRadius: 9999,
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "#ffffff",
              fontSize: "0.875rem",
              fontWeight: 400,
              letterSpacing: "0.01em",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(16,185,129,0.4)",
              transition: "all 0.25s ease",
              fontFamily: "var(--font-urbanist), sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Explore Capabilities
          </a>
          <a
            href="/request-demo"
            className="mag-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "13px 30px",
              borderRadius: 9999,
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.12)",
              color: "#374151",
              fontSize: "0.875rem",
              fontWeight: 400,
              letterSpacing: "0.01em",
              textDecoration: "none",
              transition: "all 0.25s ease",
              fontFamily: "var(--font-urbanist), sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Request Demo
          </a>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div
        id="scrollCue"
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: "0.55rem",
            color: "#94a3b8",
            fontFamily: "var(--font-space-mono), monospace",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 36,
            background:
              "linear-gradient(to bottom, rgba(148,163,184,0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
}
