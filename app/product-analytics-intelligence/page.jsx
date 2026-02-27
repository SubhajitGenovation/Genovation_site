"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollLines from "@/components/product-analytics-intelligence/ScrollLines";
import AnalyticsHero from "@/components/product-analytics-intelligence/AnalyticsHero";
import AnalyticsProblem from "@/components/product-analytics-intelligence/AnalyticsProblem";
import AnalyticsCoreTech from "@/components/product-analytics-intelligence/AnalyticsCoreTech";
import AnalyticsDataBuckets from "@/components/product-analytics-intelligence/AnalyticsDataBuckets";
import AnalyticsDashboard from "@/components/product-analytics-intelligence/AnalyticsDashboard";
import AnalyticsCapabilities from "@/components/product-analytics-intelligence/AnalyticsCapabilities";
import AnalyticsComparison from "@/components/product-analytics-intelligence/AnalyticsComparison";
import AnalyticsCompliance from "@/components/product-analytics-intelligence/AnalyticsCompliance";
import AnalyticsPersonas from "@/components/product-analytics-intelligence/AnalyticsPersonas";
import AnalyticsOutcomes from "@/components/product-analytics-intelligence/AnalyticsOutcomes";
import AnalyticsMentisOS from "@/components/product-analytics-intelligence/AnalyticsMentisOS";
import AnalyticsCTA from "@/components/product-analytics-intelligence/AnalyticsCTA";

export default function AnalyticsPage() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // ── Scroll progress bar ──
    gsap.to("#scrollProgress", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // ── Nav hide/show on scroll ──
    let lastScroll = 0;
    const handleScroll = () => {
      const st = window.pageYOffset;
      const nav = document.getElementById("mainNav");
      if (nav) {
        nav.style.transform =
          st > lastScroll && st > 100
            ? "translateY(-100%)"
            : "translateY(0)";
      }
      lastScroll = st;
    };
    window.addEventListener("scroll", handleScroll);

    // ── Scroll reveals ──
    document
      .querySelectorAll(".r-up, .r-left, .r-right, .r-scale")
      .forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

    // ── Orb parallax ──
    document.querySelectorAll(".orb").forEach((orb) => {
      const section =
        orb.closest("section") ||
        orb.parentElement;
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

    // ── CTA heading scale ──
    gsap.fromTo(
      "#ctaHeading",
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#demo",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // ── Scroll lines parallax ──
    gsap.to("#sLine1", {
      yPercent: -18,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    gsap.to("#sLine2", {
      yPercent: -28,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });
    gsap.to("#sLine3", {
      yPercent: -40,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    // ── Cleanup ──
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scrollProgress"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: "0%",
          zIndex: 200,
          transformOrigin: "left",
          background: "linear-gradient(90deg, #d97706, #f97316, #d97706)",
        }}
      />

      {/* Scroll Lines Background */}
      <ScrollLines />

      {/* Nav */}
      {/* <nav
        id="mainNav"
        className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3f0]/85 border-b border-black/[0.08]"
        style={{
          backdropFilter: "blur(20px) saturate(1.4)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
              </svg>
            </div>
            <span className="text-base font-light tracking-tight text-gray-700">
              Genovation
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a
              href="/"
              className="text-[11px] font-light text-gray-500 hover:text-gray-800 transition-colors tracking-[0.15em] uppercase"
            >
              Platform
            </a>
            <a
              href="/products"
              className="text-[11px] font-light text-gray-500 hover:text-gray-800 transition-colors tracking-[0.15em] uppercase"
            >
              Products
            </a>
            <a
              href="/strategy-intelligence"
              className="text-[11px] font-light text-gray-500 hover:text-gray-800 transition-colors tracking-[0.15em] uppercase"
            >
              Strategy
            </a>
            <a
              href="/product-analytics-intelligence"
              className="text-[11px] font-medium text-amber-600 tracking-[0.15em] uppercase"
            >
              Analytics
            </a>
          </div>
          <div>
            <button className="px-5 py-2 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-700 hover:border-amber-500/30 hover:text-amber-600 text-xs font-light tracking-widest uppercase transition-all">
              Contact
            </button>
          </div>
        </div>
      </nav> */}

      {/* Page Sections */}
      <AnalyticsHero />
      <div className="divider-enhanced" />
      <AnalyticsProblem />
      <div className="divider-enhanced" />
      <AnalyticsCoreTech />
      <div className="divider-enhanced" />
      <AnalyticsDataBuckets />
      <div className="divider-enhanced" />
      <AnalyticsDashboard />
      <div className="divider-enhanced" />
      <AnalyticsCapabilities />
      <div className="divider-enhanced" />
      <AnalyticsComparison />
      <div className="divider-enhanced" />
      <AnalyticsCompliance />
      <div className="divider-enhanced" />
      <AnalyticsPersonas />
      <div className="divider-enhanced" />
      <AnalyticsOutcomes />
      <div className="divider-enhanced" />
      <AnalyticsMentisOS />
      <div className="divider-enhanced" />
      <AnalyticsCTA />
    </>
  );
}
