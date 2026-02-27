"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import PerfHero from "@/components/technology-foundation-performance-reliability-engineering/PerfHero";
import PerfInterstitial from "@/components/technology-foundation-performance-reliability-engineering/PerfInterstitial";
import PerfProduction from "@/components/technology-foundation-performance-reliability-engineering/PerfProduction";
import PerfEfficiency from "@/components/technology-foundation-performance-reliability-engineering/PerfEfficiency";
import PerfIsolation from "@/components/technology-foundation-performance-reliability-engineering/PerfIsolation";
import PerfReliability from "@/components/technology-foundation-performance-reliability-engineering/PerfReliability";
import PerfObservability from "@/components/technology-foundation-performance-reliability-engineering/PerfObservability";
import PerfScale from "@/components/technology-foundation-performance-reliability-engineering/PerfScale";
import PerfWhy from "@/components/technology-foundation-performance-reliability-engineering/PerfWhy";
import PerfCTA from "@/components/technology-foundation-performance-reliability-engineering/PerfCTA";
import PerfFooter from "@/components/technology-foundation-performance-reliability-engineering/PerfFooter";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PerformancePage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Scroll Progress
    gsap.set("#scrollProgress", { scaleX: 0 });
    gsap.to("#scrollProgress", {
      scaleX: 1, ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.3 },
    });

    // Nav hide/show
    const nav = document.getElementById("mainNav");
    ScrollTrigger.create({
      onUpdate: (self) => {
        if (!nav) return;
        nav.style.transform = self.direction === 1 && self.scroll() > 100
          ? "translateY(-100%)" : "translateY(0)";
      },
    });

    // General reveals
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-left").forEach((el) => {
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-right").forEach((el) => {
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-scale").forEach((el) => {
      gsap.to(el, { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });

    // Staggered card batches
    ["#scaleCards", "#whyCards"].forEach((sel) => {
      ScrollTrigger.batch(`${sel} .card`, {
        start: "top 87%",
        onEnter: (elements) => gsap.fromTo(elements,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out", once: true }
        ),
      });
    });

    // CTA scale
    gsap.fromTo("#cta h2",
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out",
        scrollTrigger: { trigger: "#cta", start: "top 80%", toggleActions: "play none none none" } }
    );

    // Orb parallax
    document.querySelectorAll(".orb").forEach((orb) => {
      gsap.to(orb, {
        y: (Math.random() - 0.5) * 250, x: (Math.random() - 0.5) * 120, ease: "none",
        scrollTrigger: { trigger: orb.closest("section"), start: "top bottom", end: "bottom top", scrub: 2.5 },
      });
    });

  }, { scope: pageRef });

  return (
    <div ref={pageRef}>
      <div id="scrollProgress" style={{
        position: "fixed", top: 0, left: 0, height: "2px", width: "100%",
        zIndex: 200, transformOrigin: "left",
        background: "linear-gradient(90deg,#10b981,#06b6d4,#3b82f6,#8b5cf6)",
      }} />

      <PerfHero />
      <div className="divider-enhanced" />
      <PerfInterstitial />
      <div className="divider-enhanced" />
      <PerfProduction />
      <div className="divider-enhanced" />
      <PerfEfficiency />
      <div className="divider-enhanced" />
      <PerfIsolation />
      <div className="divider-enhanced" />
      <PerfReliability />
      <div className="divider-enhanced" />
      <PerfObservability />
      <div className="divider-enhanced" />
      <PerfScale />
      <div className="divider-enhanced" />
      <PerfWhy />
      <div className="divider-enhanced" />
      <PerfCTA />
      {/* <PerfFooter /> */}
    </div>
  );
}
