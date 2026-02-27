"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import PatentHero from "@/components/research-ip-patent-portfolio/PatentHero";
import PatentInterstitial from "@/components/research-ip-patent-portfolio/PatentInterstitial";
import PatentPhilosophy from "@/components/research-ip-patent-portfolio/PatentPhilosophy";
import PatentTechnologies from "@/components/research-ip-patent-portfolio/PatentTechnologies";
import PatentProducts from "@/components/research-ip-patent-portfolio/PatentProducts";
import PatentValue from "@/components/research-ip-patent-portfolio/PatentValue";
import PatentCTA from "@/components/research-ip-patent-portfolio/PatentCTA";
import PatentFooter from "@/components/research-ip-patent-portfolio/PatentFooter";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function PatentPage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Scroll progress
    gsap.set("#scrollProgress", { scaleX: 0 });
    gsap.to("#scrollProgress", {
      scaleX: 1, ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.3 },
    });

    // Nav hide/show
    ScrollTrigger.create({
      onUpdate: (self) => {
        const nav = document.getElementById("mainNav");
        if (!nav) return;
        nav.style.transform = self.direction === 1 && self.scroll() > 100
          ? "translateY(-100%)" : "translateY(0)";
      },
    });

    // General reveals
    gsap.utils.toArray(".r-up").forEach((el) =>
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } })
    );
    gsap.utils.toArray(".r-left").forEach((el) =>
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } })
    );
    gsap.utils.toArray(".r-right").forEach((el) =>
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } })
    );
    gsap.utils.toArray(".r-scale").forEach((el) =>
      gsap.to(el, { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none none" } })
    );

    // Staggered card batches
    ["#philosophyCards", "#patentCards", "#benefitCards", "#valueCards"].forEach((sel) => {
      ScrollTrigger.batch(`${sel} .card`, {
        start: "top 87%",
        onEnter: (elements) =>
          gsap.fromTo(elements,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }
          ),
        once: true,
      });
    });

    // Orb parallax
    document.querySelectorAll(".orb").forEach((orb) => {
      gsap.to(orb, {
        y: (Math.random() - 0.5) * 250, x: (Math.random() - 0.5) * 120, ease: "none",
        scrollTrigger: { trigger: orb.closest("section") || "body", start: "top bottom", end: "bottom top", scrub: 2.5 },
      });
    });

    // Scroll lines
    gsap.to("#sLine1", { yPercent: -18, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 } });
    gsap.to("#sLine2", { yPercent: -28, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.5 } });

  }, { scope: pageRef });

  return (
    <div ref={pageRef}>
      {/* Scroll progress — amber gradient */}
      <div id="scrollProgress" style={{
        position: "fixed", top: 0, left: 0, height: "2px", width: "100%",
        zIndex: 200, transformOrigin: "left",
        background: "linear-gradient(90deg,#d97706,#f59e0b,#fbbf24,#d97706)",
      }} />

      {/* Scroll Lines — amber/violet */}
      <div className="scroll-lines-wrap" aria-hidden="true">
        <div className="scroll-line" id="sLine1">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="sl1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
              <stop offset="8%" stopColor="#f59e0b"/>
              <stop offset="35%" stopColor="#d97706"/>
              <stop offset="60%" stopColor="#8b5cf6"/>
              <stop offset="85%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </linearGradient></defs>
            <path d="M200,0 C240,400 80,700 220,1200 C360,1700 100,2000 180,2600 C260,3200 60,3500 200,4100 C340,4700 80,5200 220,5800 C360,6400 120,6800 180,7500 C240,8200 80,8600 200,9200 L200,10000"
              stroke="url(#sl1)" strokeWidth="2" strokeOpacity="0.1" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="scroll-line" id="sLine2">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="sl2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0"/>
              <stop offset="12%" stopColor="#d97706"/>
              <stop offset="45%" stopColor="#f59e0b"/>
              <stop offset="80%" stopColor="#d97706"/>
              <stop offset="100%" stopColor="#d97706" stopOpacity="0"/>
            </linearGradient></defs>
            <path d="M1260,0 C1220,500 1360,900 1240,1500 C1120,2100 1340,2600 1280,3200 C1220,3800 1380,4200 1260,4800 C1140,5400 1360,5900 1280,6500 C1200,7100 1380,7600 1260,8200 L1260,10000"
              stroke="url(#sl2)" strokeWidth="1.5" strokeOpacity="0.08" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <PatentHero />
      <div className="divider-enhanced" />
      <PatentInterstitial />
      <div className="divider-enhanced" />
      <PatentPhilosophy />
      <div className="divider-enhanced" />
      <PatentTechnologies />
      <div className="divider-enhanced" />
      <PatentProducts />
      <div className="divider-enhanced" />
      <PatentValue />
      <div className="divider-enhanced" />
      <PatentCTA />
      {/* <PatentFooter /> */}
    </div>
  );
}
