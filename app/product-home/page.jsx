"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollLines from "@/components/home/ScrollLines";
import HeroSection from "@/components/product-home/HeroSection";
import KnowledgeSection from "@/components/product-home/KnowledgeSection";
import AnalyticsSection from "@/components/product-home/AnalyticsSection";
import StrategySection from "@/components/product-home/StrategySection";
import CXSection from "@/components/product-home/CXSection";
import MentisSection from "@/components/product-home/MentisSection";
import CTASection from "@/components/product-home/CTASection";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsPage() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // SCROLL PROGRESS
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

    // NAV HIDE/SHOW
    const nav = document.getElementById("mainNav");
    ScrollTrigger.create({
      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() > 100) {
          nav.style.transform = "translateY(-100%)";
        } else {
          nav.style.transform = "translateY(0)";
        }
      },
    });

    // GENERAL REVEALS
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

    // ORB PARALLAX
    document.querySelectorAll(".orb").forEach((orb) => {
      const section = orb.closest("section");
      if (section) {
        gsap.to(orb, {
          y: (Math.random() - 0.5) * 250,
          x: (Math.random() - 0.5) * 120,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2.5,
          },
        });
      }
    });

    // CTA HEADING
    gsap.fromTo(
      "#ctaHeading",
      { scale: 0.7, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 1.8, ease: "power2.out",
        scrollTrigger: { trigger: "#cta", start: "top 80%", toggleActions: "play none none none" },
      }
    );

    // SCROLL LINES
    gsap.to("#sLine1", { yPercent: -18, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 } });
    gsap.to("#sLine2", { yPercent: -28, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.5 } });
    gsap.to("#sLine3", { yPercent: -40, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 2 } });

    // KNOWLEDGE QUERY TYPING EFFECT
    const knowledgeQuery = document.getElementById("knowledgeQuery");
    const queries = [
      "What is our GDPR data retention policy?",
      "Show me the latest HR compliance guidelines",
      "What are the procurement approval thresholds?",
      "Find all policies related to data encryption",
    ];
    let qi = 0;
    let typingTimeout;
    function typeQuery() {
      if (!knowledgeQuery) return;
      const q = queries[qi];
      let ci = 0;
      knowledgeQuery.textContent = "";
      const iv = setInterval(() => {
        if (ci < q.length) {
          knowledgeQuery.textContent += q[ci];
          ci++;
        } else {
          clearInterval(iv);
          typingTimeout = setTimeout(() => {
            qi = (qi + 1) % queries.length;
            setTimeout(typeQuery, 500);
          }, 4000);
        }
      }, 45);
    }
    typingTimeout = setTimeout(typeQuery, 2000);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <>
      {/* SCROLL PROGRESS */}
      <div
        id="scrollProgress"
        style={{
          position: "fixed", top: 0, left: 0, height: "2px", zIndex: 200,
          transformOrigin: "left",
          background: "linear-gradient(90deg, #0ea5e9, #8b5cf6, #10b981, #fbbf24)",
          width: "100%",
        }}
      />

      {/* SCROLL LINES */}
      <div className="scroll-lines-wrap">
        <div className="scroll-line" id="sLine1">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none">
            <path d="M200 0 Q350 2000 200 4000 Q50 6000 200 8000 L200 10000" fill="none" stroke="rgba(14,165,233,0.06)" strokeWidth="1" />
          </svg>
        </div>
        <div className="scroll-line" id="sLine2">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none">
            <path d="M720 0 Q900 2500 720 5000 Q540 7500 720 10000" fill="none" stroke="rgba(139,92,246,0.05)" strokeWidth="1" />
          </svg>
        </div>
        <div className="scroll-line" id="sLine3">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none">
            <path d="M1240 0 Q1100 2000 1240 4000 Q1380 6000 1240 8000 L1240 10000" fill="none" stroke="rgba(16,185,129,0.04)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <HeroSection />
      <div className="divider-enhanced" />
      <KnowledgeSection />
      <div className="divider-enhanced" />
      <AnalyticsSection />
      <div className="divider-enhanced" />
      <StrategySection />
      <div className="divider-enhanced" />
      <CXSection />
      <div className="divider-enhanced" />
      <MentisSection />
      <div className="divider-enhanced" />
      <CTASection />
      <div className="divider-enhanced" />
    </>
  );
}
