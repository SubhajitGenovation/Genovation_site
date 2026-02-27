"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import GovHero from "@/components/industries-government/GovHero";
import GovInterstitial from "@/components/industries-government/GovInterstitial";
import GovChallenges from "@/components/industries-government/GovChallenges";
import GovArchitecture from "@/components/industries-government/GovArchitecture";
import GovProducts from "@/components/industries-government/GovProducts";
import GovCTA from "@/components/industries-government/GovCTA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Divider = () => (
  <div
    style={{
      height: 1,
      background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.2),transparent)",
      position: "relative",
      zIndex: 2,
    }}
  />
);

export default function GovernmentPage() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      if (typeof document === "undefined") return;

      // Scroll Progress
      gsap.set("#scrollProgress", { scaleX: 0 });
      gsap.to("#scrollProgress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.3 },
      });

      // Nav Auto-Hide
      let lastY = 0;
      ScrollTrigger.create({
        start: "top -80",
        onUpdate: (s) => {
          const y = s.scroll();
          if (Math.abs(y - lastY) > 5) {
            gsap.to("#mainNav", { y: s.direction === 1 ? -100 : 0, duration: 0.4, ease: "power2.out" });
            lastY = y;
          }
        },
      });

      // Orb Parallax
      document.querySelectorAll(".orb").forEach((o, i) => {
        gsap.to(o, {
          y: i % 2 === 0 ? -120 : 120,
          ease: "none",
          scrollTrigger: { trigger: o.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // Scroll Lines
      ["#sLine1", "#sLine2"].forEach((s, i) => {
        const el = document.querySelector(s);
        if (el) {
          gsap.to(el, {
            y: -(window.innerHeight * (1.5 + i * 0.3)),
            ease: "none",
            scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: true },
          });
        }
      });

      // Scroll Reveals
      document.querySelectorAll(".r-up").forEach((el) =>
        gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 87%", once: true } })
      );
      document.querySelectorAll(".r-left").forEach((el) =>
        gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 87%", once: true } })
      );
      document.querySelectorAll(".r-right").forEach((el) =>
        gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 87%", once: true } })
      );
      document.querySelectorAll(".r-scale").forEach((el) =>
        gsap.to(el, { opacity: 1, scale: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 87%", once: true } })
      );

      // Card Stagger
      ["#challengeCards", "#useCaseCards"].forEach((sel) => {
        const cards = document.querySelectorAll(sel + " .card");
        if (cards.length) {
          ScrollTrigger.batch(cards, {
            start: "top 87%",
            onEnter: (els) => gsap.fromTo(els, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }),
            once: true,
          });
        }
      });

      // Mock App Reveals
      document.querySelectorAll(".mock-app").forEach((el) =>
        gsap.fromTo(el, { y: 80, opacity: 0, scale: 0.97 }, {
          y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        })
      );

      // Magnetic Buttons
      document.querySelectorAll(".mag-btn").forEach((btn) => {
        const inner = btn.querySelector(".btn-inner");
        if (!inner) return;
        btn.addEventListener("mousemove", (e) => {
          const r = btn.getBoundingClientRect();
          gsap.to(inner, { x: (e.clientX - r.left - r.width / 2) * 0.15, y: (e.clientY - r.top - r.height / 2) * 0.15, duration: 0.3, ease: "power2.out" });
        });
        btn.addEventListener("mouseleave", () => gsap.to(inner, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.5)" }));
      });
    },
    { scope: pageRef, dependencies: [] }
  );

  return (
    <div ref={pageRef} className="antialiased" style={{ background: "#f5f3f0", color: "#1a1a2e", overflowX: "hidden" }}>
      {/* Scroll Progress */}
      <div id="scrollProgress" style={{ position: "fixed", top: 0, left: 0, height: 2, width: "100%", zIndex: 200, transformOrigin: "left", background: "linear-gradient(90deg,#1d4ed8,#3b82f6,#60a5fa,#1d4ed8)" }} />

      {/* Scroll Lines */}
      <div aria-hidden="true" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", pointerEvents: "none", zIndex: 0, overflow: "visible" }}>
        {[
          { id: "sLine1", path: "M200,0 C240,400 80,700 220,1200 C360,1700 100,2000 180,2600 C260,3200 60,3500 200,4100 C340,4700 80,5200 220,5800 C360,6400 120,6800 180,7500 C240,8200 80,8600 200,9200 L200,10000", gradId: "sl1g", colors: [["#3b82f6","0"],["#3b82f6","8%"],["#1d4ed8","35%"],["#8b5cf6","60%"],["#3b82f6","85%"],["#3b82f6","100"]], opacity: "0.1", sw: "2" },
          { id: "sLine2", path: "M1260,0 C1220,500 1360,900 1240,1500 C1120,2100 1340,2600 1280,3200 C1220,3800 1380,4200 1260,4800 C1140,5400 1360,5900 1280,6500 C1200,7100 1380,7600 1260,8200 L1260,10000", gradId: "sl2g", colors: [["#1d4ed8","0"],["#1d4ed8","12%"],["#3b82f6","45%"],["#1d4ed8","80%"],["#1d4ed8","100"]], opacity: "0.08", sw: "1.5" },
        ].map(({ id, path, gradId, colors, opacity, sw }) => (
          <div key={id} id={id} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "1000vh", willChange: "transform" }}>
            <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none" style={{ width: "100%", height: "100%" }}>
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                  {colors.map(([color, offset], i) => (
                    <stop key={i} offset={offset === "0" ? "0%" : offset === "100" ? "100%" : offset} stopColor={color} stopOpacity={offset === "0" || offset === "100" ? 0 : 1} />
                  ))}
                </linearGradient>
              </defs>
              <path d={path} stroke={`url(#${gradId})`} strokeWidth={sw} strokeOpacity={opacity} strokeLinecap="round" />
            </svg>
          </div>
        ))}
      </div>

      {/* Sections */}
      <GovHero />
      <Divider />
      <GovInterstitial />
      <Divider />
      <GovChallenges />
      <Divider />
      <GovArchitecture />
      <Divider />
      <GovProducts />
      <Divider />
      <GovCTA />
    </div>
  );
}