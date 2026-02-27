"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CXHero from "@/components/product-cx-intelligence/CXHero";
import CXInterstitial from "@/components/product-cx-intelligence/CXInterstitial";
import CXProblem from "@/components/product-cx-intelligence/CXProblem";
import CXUseCases from "@/components/product-cx-intelligence/CXUseCases";
import CXDeployChannels from "@/components/product-cx-intelligence/CXDeployChannels";
import CXCapabilities from "@/components/product-cx-intelligence/CXCapabilities";
import CXComparison from "@/components/product-cx-intelligence/CXComparison";
import CXEnterpriseDeploy from "@/components/product-cx-intelligence/CXEnterpriseDeploy";
import CXCTA from "@/components/product-cx-intelligence/CXCTA";
import CXFooter from "@/components/product-cx-intelligence/CXFooter";

gsap.registerPlugin(ScrollTrigger);

export default function CXIntelligencePage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Scroll progress bar
    gsap.set("#scrollProgress", { scaleX: 0 });
    gsap.to("#scrollProgress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.3 },
    });

    // Nav hide/show
    const nav = document.getElementById("mainNav");
    ScrollTrigger.create({
      onUpdate: (self) => {
        if (!nav) return;
        nav.style.transform =
          self.direction === 1 && self.scroll() > 100 ? "translateY(-100%)" : "translateY(0)";
      },
    });

    // Scroll lines parallax
    gsap.to("#sLine1", { yPercent: -18, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 } });
    gsap.to("#sLine2", { yPercent: -28, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.5 } });
    gsap.to("#sLine3", { yPercent: -40, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 2 } });

    // Orb parallax
    document.querySelectorAll(".orb").forEach((orb) => {
      const s = orb.closest("section");
      if (s) {
        gsap.to(orb, {
          y: (Math.random() - 0.5) * 250,
          x: (Math.random() - 0.5) * 120,
          ease: "none",
          scrollTrigger: { trigger: s, start: "top bottom", end: "bottom top", scrub: 2.5 },
        });
      }
    });

    // General reveals
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-left").forEach((el) => {
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-right").forEach((el) => {
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-scale").forEach((el) => {
      gsap.to(el, { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });

    // Comparison table rows
    gsap.utils.toArray("#compTable .comp-row").forEach((row, i) => {
      if (i === 0) return;
      gsap.fromTo(row,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: (i - 1) * 0.1, scrollTrigger: { trigger: row, start: "top 92%", toggleActions: "play none none none" } }
      );
    });

    // CTA heading
    gsap.fromTo("#ctaHeading",
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out", scrollTrigger: { trigger: "#cta", start: "top 80%", toggleActions: "play none none none" } }
    );

    // CTA cards batch
    ScrollTrigger.batch("#ctaCards .card", {
      start: "top 87%",
      onEnter: (els) => gsap.fromTo(els, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }),
      once: true,
    });
  }, { scope: pageRef });

  return (
    <div ref={pageRef} style={{ background: "#f5f3f0", color: "#1a1a2e", overflowX: "hidden" }}>

      {/* Scroll Progress */}
      <div id="scrollProgress" style={{
        position: "fixed", top: 0, left: 0, height: 2, width: "100%",
        zIndex: 200, transformOrigin: "left center",
        background: "linear-gradient(90deg, #f59e0b, #ea580c, #f59e0b)",
      }} />

      {/* Fixed scroll lines */}
      <div
        aria-hidden="true"
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", pointerEvents: "none", zIndex: 0, overflow: "visible" }}
      >
        {[
          { id: "sLine1", path: "M180,0 C220,400 60,700 200,1200 C340,1700 80,2000 160,2600 C240,3200 40,3500 180,4100 C320,4700 60,5200 200,5800 C340,6400 100,6800 160,7500 C220,8200 60,8600 180,9200 L180,10000", color: "#f59e0b", opacity: 0.12, width: 2 },
          { id: "sLine2", path: "M1280,0 C1240,500 1380,900 1260,1500 C1140,2100 1360,2600 1300,3200 C1240,3800 1400,4200 1280,4800 C1160,5400 1380,5900 1300,6500 C1220,7100 1400,7600 1280,8200 L1280,10000", color: "#ea580c", opacity: 0.08, width: 1.5 },
          { id: "sLine3", path: "M720,0 C800,600 640,1200 750,1800 C860,2400 620,3000 700,3600 C780,4200 660,4800 740,5400 C820,6000 640,6600 720,7200 C800,7800 660,8400 720,9000 L720,10000", color: "#d97706", opacity: 0.06, width: 1 },
        ].map(({ id, path, color, opacity, width }) => (
          <div key={id} id={id} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "1000vh", willChange: "transform" }}>
            <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none" style={{ width: "100%", height: "100%" }}>
              <path d={path} stroke={color} strokeWidth={width} strokeOpacity={opacity} strokeLinecap="round" />
            </svg>
          </div>
        ))}
      </div>

      {/* Sections */}
      <CXHero />
      <CXInterstitial />
      <div className="divider-enhanced" />
      <CXProblem />
      <div className="divider-enhanced" />
      <CXUseCases />
      <div className="divider-enhanced" />
      <CXDeployChannels />
      <div className="divider-enhanced" />
      <CXCapabilities />
      <div className="divider-enhanced" />
      <CXComparison />
      <div className="divider-enhanced" />
      <CXEnterpriseDeploy />
      <div className="divider-enhanced" />
      <CXCTA />
      {/* <CXFooter /> */}
    </div>
  );
}
