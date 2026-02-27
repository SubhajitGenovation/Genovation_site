"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/platforms-ip-mentis-agentos/Nav";
import HeroSection from "@/components/platforms-ip-mentis-agentos/HeroSection";
import InterstitialSection from "@/components/platforms-ip-mentis-agentos/InterstitialSection";
import WhySection from "@/components/platforms-ip-mentis-agentos/WhySection";
import CapabilitiesSection from "@/components/platforms-ip-mentis-agentos/CapabilitiesSection";
import PlatformUISection from "@/components/platforms-ip-mentis-agentos/PlatformUISection";
import ArchitectureSection from "@/components/platforms-ip-mentis-agentos/ArchitectureSection";
import ComparisonSection from "@/components/platforms-ip-mentis-agentos/ComparisonSection";
import DeploymentSection from "@/components/platforms-ip-mentis-agentos/DeploymentSection";
import EfficientModelsSection from "@/components/platforms-ip-mentis-agentos/EfficientModelsSection";
import AudienceSection from "@/components/platforms-ip-mentis-agentos/AudienceSection";
import OutcomeSection from "@/components/platforms-ip-mentis-agentos/OutcomeSection";
import CTASection from "@/components/platforms-ip-mentis-agentos/CTASection";
import Footer from "@/components/platforms-ip-mentis-agentos/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function MentisPage() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // ── SCROLL PROGRESS ──
    gsap.to("#scrollProgress", {
      width: "100%",
      ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.3 },
    });

    // ── NAV HIDE/SHOW ──
    ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() > 200) {
          gsap.to("#mainNav", { y: -100, duration: 0.4 });
        } else {
          gsap.to("#mainNav", { y: 0, duration: 0.4 });
        }
      },
    });

    // ── HERO CHARACTER SPLIT ──
    document.querySelectorAll(".hero-line").forEach((line) => {
      const text = line.textContent;
      line.innerHTML = "";
      text.split("").forEach((c) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = c === " " ? "\u00A0" : c;
        line.appendChild(span);
      });
    });

    // ── HERO TIMELINE ──
    const heroTL = gsap.timeline({ delay: 0.3 });
    heroTL
      .to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".hero-line:first-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.4")
      .to(".hero-line:last-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.7")
      .to("#heroSub1 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
      .to("#heroSub2 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
      .to("#heroNegations", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3")
      .to("#heroButtons", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .to("#scrollCue", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");

    gsap.to("#heroContent", {
      y: -120,
      ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "70% top", scrub: true },
    });

    // ── INTERSTITIAL ──
    const interEl = document.getElementById("interProblemText");
    if (interEl) {
      const interTxt = interEl.textContent.trim();
      interEl.innerHTML = "";
      interTxt.split(/(\s+)/).forEach((w) => {
        if (w.trim()) {
          const span = document.createElement("span");
          span.className = "inter-word";
          span.textContent = w;
          interEl.appendChild(span);
        } else if (w) {
          interEl.appendChild(document.createTextNode(w));
        }
      });
      const interWords = interEl.querySelectorAll(".inter-word");
      const interTL = gsap.timeline({
        scrollTrigger: { trigger: "#interProblem", start: "top top", end: "80% top", scrub: 0.5, pin: "#interProblemPin" },
      });
      interTL.fromTo(
        "#interProblemText",
        { skewY: 14, skewX: -6, rotateX: 20, scale: 0.85, opacity: 0.15, y: 80 },
        { skewY: 0, skewX: 0, rotateX: 0, scale: 1, opacity: 1, y: 0, duration: 2, ease: "none" }
      );
      interWords.forEach((w, i) => {
        interTL.fromTo(w, { opacity: 0.3, filter: "blur(2px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.15, ease: "power2.out" }, 2 + (i / interWords.length) * 1.5);
      });
      interTL.to({}, { duration: 2 });
    }

    // ── GENERAL REVEALS ──
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

    // ── STAGGERED CARDS ──
    ["#reqCards", "#audienceCards"].forEach((sel) => {
      ScrollTrigger.batch(`${sel} .card`, {
        start: "top 87%",
        onEnter: (elements) =>
          gsap.fromTo(elements, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }),
        once: true,
      });
    });

    // ── CTA ──
    gsap.fromTo(
      "#cta h2",
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out", scrollTrigger: { trigger: "#cta", start: "top 80%", toggleActions: "play none none none" } }
    );

    // ── ORB PARALLAX ──
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

    // ── SCROLL LINES ──
    gsap.to("#sLine1", { yPercent: -18, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 } });
    gsap.to("#sLine2", { yPercent: -28, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.5 } });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      {/* SCROLL PROGRESS */}
      <div id="scrollProgress" style={{
        position: "fixed", top: 0, left: 0, height: "2px", zIndex: 200,
        width: 0, background: "linear-gradient(90deg,#10b981,#06b6d4,#3b82f6,#8b5cf6)",
      }} />

      {/* SCROLL LINES */}
      <div aria-hidden="true" className="scroll-lines-wrap">
        <div className="scroll-line" id="sLine1">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="sl1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="8%" stopColor="#10b981" />
                <stop offset="35%" stopColor="#06b6d4" />
                <stop offset="60%" stopColor="#3b82f6" />
                <stop offset="85%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M180,0 C220,400 60,700 200,1200 C340,1700 80,2000 160,2600 C240,3200 40,3500 180,4100 C320,4700 60,5200 200,5800 C340,6400 100,6800 160,7500 C220,8200 60,8600 180,9200 L180,10000" stroke="url(#sl1)" strokeWidth="2" strokeOpacity="0.15" strokeLinecap="round" />
          </svg>
        </div>
        <div className="scroll-line" id="sLine2">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="sl2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="12%" stopColor="#06b6d4" />
                <stop offset="45%" stopColor="#8b5cf6" />
                <stop offset="80%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M1280,0 C1240,500 1380,900 1260,1500 C1140,2100 1360,2600 1300,3200 C1240,3800 1400,4200 1280,4800 C1160,5400 1380,5900 1300,6500 C1220,7100 1400,7600 1280,8200 L1280,10000" stroke="url(#sl2)" strokeWidth="1.5" strokeOpacity="0.12" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* <Nav /> */}
      <HeroSection />
      <div className="divider-enhanced" />
      <InterstitialSection />
      <div className="divider-enhanced" />
      <WhySection />
      <div className="divider-enhanced" />
      <CapabilitiesSection />
      <div className="divider-enhanced" />
      <PlatformUISection />
      <div className="divider-enhanced" />
      <ArchitectureSection />
      <div className="divider-enhanced" />
      <ComparisonSection />
      <div className="divider-enhanced" />
      <DeploymentSection />
      <div className="divider-enhanced" />
      <EfficientModelsSection />
      <div className="divider-enhanced" />
      <AudienceSection />
      <div className="divider-enhanced" />
      <OutcomeSection />
      <div className="divider-enhanced" />
      <CTASection />
      <div className="divider-enhanced" />
      {/* <Footer /> */}
    </>
  );
}
