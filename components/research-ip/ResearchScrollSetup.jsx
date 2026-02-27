"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ResearchScrollSetup() {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (initialized.current) return;
    initialized.current = true;
    gsap.registerPlugin(ScrollTrigger);

    // Scroll Progress Bar
    gsap.set("#scrollProgress", { scaleX: 0 });
    gsap.to("#scrollProgress", {
      scaleX: 1, ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.3 },
    });

    // Nav hide/show
    const nav = document.getElementById("mainNav");
    if (nav) {
      ScrollTrigger.create({
        onUpdate: (self) => {
          nav.style.transform = self.direction === 1 && self.scroll() > 100
            ? "translateY(-100%)" : "translateY(0)";
        },
      });
    }

    // Orb parallax
    document.querySelectorAll(".orb").forEach((orb) => {
      const section = orb.closest("section");
      if (!section) return;
      gsap.to(orb, {
        y: (Math.random() - 0.5) * 250,
        x: (Math.random() - 0.5) * 120,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 2.5 },
      });
    });

    // Scroll lines parallax
    gsap.to("#sLine1", { yPercent: -18, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 } });
    gsap.to("#sLine2", { yPercent: -28, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.5 } });

    // General r-up / r-left / r-right / r-scale reveals
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.fromTo(el, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-left").forEach((el) => {
      gsap.fromTo(el, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-right").forEach((el) => {
      gsap.fromTo(el, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-scale").forEach((el) => {
      gsap.fromTo(el, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });

    // Staggered card batches
    ["#impactCards", "#roadmapCards", "#ipCards"].forEach((sel) => {
      const container = document.querySelector(sel);
      if (!container) return;
      ScrollTrigger.batch(`${sel} .card`, {
        start: "top 87%",
        onEnter: (elements) => gsap.fromTo(elements, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }),
        once: true,
      });
    });

    // CTA heading scale
    const ctaH2 = document.querySelector("#cta h2");
    if (ctaH2) {
      gsap.fromTo(ctaH2, { scale: 0.7, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 1.8, ease: "power2.out",
        scrollTrigger: { trigger: "#cta", start: "top 80%", toggleActions: "play none none none" },
      });
    }
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scrollProgress"
        style={{
          position: "fixed", top: 0, left: 0, height: "2px", zIndex: 200,
          transformOrigin: "left", width: "100%",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)",
        }}
      />

      {/* Abstract Scroll Lines */}
      <div className="scroll-lines-wrap" aria-hidden="true">
        <div className="scroll-line" id="sLine1">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sl1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0"/>
                <stop offset="8%" stopColor="#6366f1"/>
                <stop offset="35%" stopColor="#8b5cf6"/>
                <stop offset="60%" stopColor="#06b6d4"/>
                <stop offset="85%" stopColor="#6366f1"/>
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M180,0 C220,400 60,700 200,1200 C340,1700 80,2000 160,2600 C240,3200 40,3500 180,4100 C320,4700 60,5200 200,5800 C340,6400 100,6800 160,7500 C220,8200 60,8600 180,9200 L180,10000" stroke="url(#sl1)" strokeWidth="2" strokeOpacity="0.12" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="scroll-line" id="sLine2">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sl2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
                <stop offset="12%" stopColor="#8b5cf6"/>
                <stop offset="45%" stopColor="#6366f1"/>
                <stop offset="80%" stopColor="#8b5cf6"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M1280,0 C1240,500 1380,900 1260,1500 C1140,2100 1360,2600 1300,3200 C1240,3800 1400,4200 1280,4800 C1160,5400 1380,5900 1300,6500 C1220,7100 1400,7600 1280,8200 L1280,10000" stroke="url(#sl2)" strokeWidth="1.5" strokeOpacity="0.1" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </>
  );
}