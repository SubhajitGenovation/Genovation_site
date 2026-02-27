"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollLines from "@/components/home/ScrollLines";
import { industryData, industryChatData, industryMeta } from "./industryData";
import CommandCenter from "@/components/product-strategy-intelligence/CommandCenter";
import HeroSection from "@/components/product-strategy-intelligence/HeroSection";
import ProblemSection from "@/components/product-strategy-intelligence/ProblemSection";
import SolutionSection from "@/components/product-strategy-intelligence/SolutionSection";
import CapabilitiesSection from "@/components/product-strategy-intelligence/CapabilitiesSection";
import AccountabilitySection from "@/components/product-strategy-intelligence/AccountabilitySection";
import ComparisonSection from "@/components/product-strategy-intelligence/ComparisonSection";
import PersonasSection from "@/components/product-strategy-intelligence/PersonasSection";
import CtaSection from "@/components/product-strategy-intelligence/CtaSection";
import StrategyFooter from "@/components/product-strategy-intelligence/StrategyFooter";

gsap.registerPlugin(ScrollTrigger);

const IND_KEYS = Object.keys(industryData);

export default function StrategyPage() {
  const pageRef = useRef(null);
  const [activeIndustry, setActiveIndustry] = useState("manufacturing");
  const timerRef = useRef(null);

  const stopAutoRotate = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startAutoRotate = useCallback(() => {
    stopAutoRotate();
    timerRef.current = setInterval(() => {
      setActiveIndustry((prev) => {
        const idx = IND_KEYS.indexOf(prev);
        return IND_KEYS[(idx + 1) % IND_KEYS.length];
      });
    }, 6000);
  }, [stopAutoRotate]);

  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate();
  }, [startAutoRotate, stopAutoRotate]);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Scroll progress
    gsap.to("#scrollProgress", {
      width: "100%", ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.3 },
    });

    // Hero
    const heroTL = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTL
      .to("#heroBadge", { opacity: 1, duration: 0.8, delay: 0.3 })
      .from(".hero-line", { y: 120, rotateX: -30, skewX: -4, opacity: 0, stagger: 0.2, duration: 1.2 }, "-=0.5")
      .to("#heroDivider", { opacity: 1, duration: 0.6 }, "-=0.6")
      .to("#heroSub1 p", { y: 0, duration: 1 }, "-=0.4")
      .to("#heroStats", { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .to("#heroCTAs", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to("#scrollCue", { opacity: 1, duration: 0.6 }, "-=0.3");

    // Scroll reveals
    document.querySelectorAll(".r-up, .r-left, .r-right, .r-scale").forEach((el) => {
      gsap.to(el, {
        opacity: 1, x: 0, y: 0, scale: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      });
    });

    // Orb parallax
    document.querySelectorAll(".orb").forEach((orb) => {
      const section = orb.closest("section") || orb.parentElement;
      if (section) {
        gsap.to(orb, {
          y: (Math.random() - 0.5) * 250, x: (Math.random() - 0.5) * 120, ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 2.5 },
        });
      }
    });

    // CTA heading
    gsap.fromTo("#ctaHeading",
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out",
        scrollTrigger: { trigger: "#demo", start: "top 80%", toggleActions: "play none none none" } }
    );

    // Scroll lines
    gsap.to("#sLine1", { yPercent: -18, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 } });
    gsap.to("#sLine2", { yPercent: -28, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.5 } });
    gsap.to("#sLine3", { yPercent: -40, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 2 } });
  }, { scope: pageRef });

  // Nav hide on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastScroll = 0;
    const onScroll = () => {
      const st = window.pageYOffset;
      const nav = document.getElementById("mainNav");
      if (nav) nav.style.transform = st > lastScroll && st > 100 ? "translateY(-100%)" : "translateY(0)";
      lastScroll = st;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const data = industryData[activeIndustry];
  const chat = industryChatData[activeIndustry];
  const meta = industryMeta[activeIndustry];

  return (
    <div ref={pageRef}>
      {/* Scroll progress bar */}
      <div id="scrollProgress" className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500 z-[9999]" style={{ width: 0 }} />

      <ScrollLines />

      <HeroSection />
      <div className="divider-enhanced" />
      <ProblemSection />
      <div className="divider-enhanced" />
      <SolutionSection
        activeIndustry={activeIndustry}
        setActiveIndustry={setActiveIndustry}
        startAutoRotate={startAutoRotate}
        stopAutoRotate={stopAutoRotate}
        data={data}
        chat={chat}
        meta={meta}
      />
      <div className="divider-enhanced" />
      <CapabilitiesSection />
      <div className="divider-enhanced" />
      <AccountabilitySection />
      <div className="divider-enhanced" />
      <ComparisonSection />
      <div className="divider-enhanced" />
      <PersonasSection />
      <div className="divider-enhanced" />
      <CtaSection />
      {/* <StrategyFooter /> */}
    </div>
  );
}
