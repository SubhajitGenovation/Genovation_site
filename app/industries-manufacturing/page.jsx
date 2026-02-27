"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ── Sub-components ──
import ScrollLines from "@/components/industries-manufacturing/ScrollLines";
import ManufacturingNav from "@/components/industries-manufacturing/ManufacturingNav";
import HeroSection from "@/components/industries-manufacturing/HeroSection";
import InterstitialSection from "@/components/industries-manufacturing/InterstitialSection";
import ChallengeSection from "@/components/industries-manufacturing/ChallengeSection";
import DataUniverseSection from "@/components/industries-manufacturing/DataUniverseSection";
import ProductsSection from "@/components/industries-manufacturing/ProductsSection";
import PlatformSection from "@/components/industries-manufacturing/PlatformSection";
import StakeholdersSection from "@/components/industries-manufacturing/StakeholdersSection";
import { CTASection, ManufacturingFooter } from "@/components/industries-manufacturing/CTAAndFooter";

gsap.registerPlugin(ScrollTrigger);

// ── Divider ──
function DividerEnhanced() {
  return (
    <div
      style={{
        height: "1px",
        position: "relative",
        zIndex: 2,
        background:
          "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.2) 50%, transparent 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-8px",
          left: "25%",
          right: "25%",
          height: "17px",
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.06), transparent)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}

// ── Main Page ──
export default function ManufacturingPage() {
  const scopeRef = useRef(null);

  useGSAP(
    () => {
      if (typeof document === "undefined") return;

      // ═══ SCROLL PROGRESS BAR ═══
      gsap.set("#scrollProgress", { scaleX: 0 });
      gsap.to("#scrollProgress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });

      // ═══ NAV HIDE/SHOW ═══
      const nav = document.getElementById("mainNav");
      if (nav) {
        ScrollTrigger.create({
          onUpdate: (self) => {
            nav.style.transform =
              self.direction === 1 && self.scroll() > 100
                ? "translateY(-100%)"
                : "translateY(0)";
          },
        });
      }

      // ═══ HERO CHAR-BY-CHAR ANIMATION ═══
      document.querySelectorAll(".hero-line").forEach((line) => {
        const text = line.textContent;
        // Preserve gradient styling before innerHTML wipe
        const parentBg = line.style.background;
        const parentFill = line.style.webkitTextFillColor;

        line.innerHTML = "";
        text.split("").forEach((c) => {
          const span = document.createElement("span");
          span.className = "char";
          span.textContent = c === " " ? "\u00A0" : c;
          if (parentBg) {
            span.style.background = parentBg;
            span.style.webkitBackgroundClip = "text";
            span.style.webkitTextFillColor = "transparent";
            span.style.backgroundClip = "text";
          }
          line.appendChild(span);
        });
      });

      const heroTL = gsap.timeline({ delay: 0.3 });
      heroTL
        .to("#heroBreadcrumb", { opacity: 1, duration: 0.6, ease: "power2.out" })
        .to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3")
        .to(
          ".hero-line:first-child .char",
          { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" },
          "-=0.4"
        )
        .to(
          ".hero-line:last-child .char",
          { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" },
          "-=0.7"
        )
        .to("#heroSub1 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
        .to("#heroSub2 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.7")
        .to("#heroTags", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5")
        .to("#heroCTA", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3")
        .to("#heroMock", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.8");

      // ═══ INTERSTITIAL WORD REVEAL ═══
      const inter1El = document.getElementById("interText1");
      if (inter1El) {
        const rawText = inter1El.textContent.trim();
        inter1El.innerHTML = "";
        rawText.split(/(\s+)/).forEach((w) => {
          if (w.trim()) {
            const span = document.createElement("span");
            span.className = "inter-word";
            span.textContent = w;
            inter1El.appendChild(span);
          } else if (w) {
            inter1El.appendChild(document.createTextNode(w));
          }
        });

        const interWords = inter1El.querySelectorAll(".inter-word");
        const interTL = gsap.timeline({
          scrollTrigger: {
            trigger: "#inter1",
            start: "top top",
            end: "80% top",
            scrub: 0.5,
            pin: "#inter1Pin",
          },
        });
        interTL.fromTo(
          "#interText1",
          { skewY: 14, skewX: -6, rotateX: 20, scale: 0.85, opacity: 0.15, y: 80 },
          { skewY: 0, skewX: 0, rotateX: 0, scale: 1, opacity: 1, y: 0, duration: 2, ease: "none" }
        );
        interWords.forEach((w, i) => {
          interTL.fromTo(
            w,
            { opacity: 0.3, filter: "blur(2px)" },
            { opacity: 1, filter: "blur(0px)", duration: 0.15, ease: "power2.out" },
            2 + (i / interWords.length) * 1.5
          );
        });
        interTL.to({}, { duration: 2 });
      }

      // ═══ GENERAL SCROLL REVEALS ═══
      gsap.utils.toArray(".r-up").forEach((el) => {
        gsap.to(el, {
          y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        });
      });
      gsap.utils.toArray(".r-left").forEach((el) => {
        gsap.to(el, {
          x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });
      gsap.utils.toArray(".r-right").forEach((el) => {
        gsap.to(el, {
          x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });
      gsap.utils.toArray(".r-scale").forEach((el) => {
        gsap.to(el, {
          scale: 1, opacity: 1, duration: 1.4, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        });
      });

      // ═══ CTA SCALE-IN ═══
      const ctaHeading = document.getElementById("ctaHeading");
      if (ctaHeading) {
        gsap.fromTo(
          ctaHeading,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 1.8, ease: "power2.out",
            scrollTrigger: { trigger: "#cta", start: "top 80%", toggleActions: "play none none none" },
          }
        );
      }

      // ═══ ORB PARALLAX ═══
      document.querySelectorAll(".orb").forEach((orb) => {
        const section = orb.closest("section");
        if (section) {
          gsap.to(orb, {
            y: (Math.random() - 0.5) * 250,
            x: (Math.random() - 0.5) * 120,
            ease: "none",
            scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 2.5 },
          });
        }
      });

      // ═══ SCROLL LINES PARALLAX ═══
      gsap.to("#sLine1", {
        yPercent: -18, ease: "none",
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 },
      });
      gsap.to("#sLine2", {
        yPercent: -28, ease: "none",
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.5 },
      });
      gsap.to("#sLine3", {
        yPercent: -40, ease: "none",
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 2 },
      });
    },
    { scope: scopeRef }
  );

  return (
    <>
      {/* Global styles scoped to this page */}
      <style>{`
        /* ── Char animation ── */
        .char {
          display: inline-block;
          opacity: 0;
          transform: translateY(100%) rotateX(-90deg) skewX(-8deg);
          transform-origin: bottom center;
        }

        /* ── Interstitial word ── */
        .inter-word { display: inline-block; opacity: 0.3; }

        /* ── Reveal classes ── */
        .r-up    { opacity: 0; transform: translateY(80px); }
        .r-left  { opacity: 0; transform: translateX(-100px); }
        .r-right { opacity: 0; transform: translateX(100px); }
        .r-scale { opacity: 0; transform: scale(0.8); }

        /* ── Cards ── */
        .card {
          background: rgba(255,255,255,0.85);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 20px;
          transition: all 0.5s cubic-bezier(0.23,1,0.32,1);
        }
        .card:hover {
          transform: translateY(-8px);
          border-color: rgba(245,158,11,0.25);
          box-shadow: 0 40px 80px -20px rgba(245,158,11,0.1);
        }

        /* ── Industry Mocks ── */
        .industry-mock {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23,1,0.32,1);
        }
        .industry-mock:hover {
          border-color: rgba(245,158,11,0.25);
          box-shadow: 0 30px 70px -20px rgba(0,0,0,0.1);
        }

        /* ── Mock Chrome ── */
        .mock-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 14px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          background: rgba(0,0,0,0.03);
          border-radius: 20px 20px 0 0;
        }
        .mock-dot { width: 7px; height: 7px; border-radius: 50%; }
        .mock-dot.r { background: rgba(255,95,87,0.8); }
        .mock-dot.y { background: rgba(254,188,46,0.8); }
        .mock-dot.g { background: rgba(40,200,64,0.8); }

        /* ── Orbs ── */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          will-change: transform;
          contain: strict;
        }

        /* ── Magnetic buttons ── */
        .mag-btn { position: relative; transition: transform 0.3s cubic-bezier(0.23,1,0.32,1); }
        .mag-btn .btn-inner { transition: transform 0.3s cubic-bezier(0.23,1,0.32,1); }

        /* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #f5f3f0; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 2px; }

        /* ── Pulse animation ── */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4,0,0.6,1) infinite; }
      `}</style>

      {/* ── Scroll Progress Bar ── */}
      <div
        id="scrollProgress"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: "100%",
          zIndex: 200,
          transformOrigin: "left",
          background: "linear-gradient(90deg, #f59e0b, #d97706, #10b981, #06b6d4)",
        }}
      />

      <div
        ref={scopeRef}
        style={{
          fontFamily: "'Urbanist', sans-serif",
          background: "#f5f3f0",
          color: "#1a1a2e",
          overflowX: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {/* Scroll lines (fixed, z-0) */}
        <ScrollLines />

        {/* Navigation */}
        {/* <ManufacturingNav /> */}

        {/* Page Sections */}
        <HeroSection />
        <DividerEnhanced />

        <InterstitialSection />
        <DividerEnhanced />

        <ChallengeSection />
        <DividerEnhanced />

        <DataUniverseSection />
        <DividerEnhanced />

        <ProductsSection />
        <DividerEnhanced />

        <PlatformSection />
        <DividerEnhanced />

        <StakeholdersSection />
        <DividerEnhanced />

        <CTASection />

        {/* Footer (rendered from layout, or inline if no layout footer) */}
        {/* <ManufacturingFooter /> */}
      </div>
    </>
  );
}