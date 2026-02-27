"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TechHero from "@/components/technology-foundation/TechHero";
import TechInterstitial from "@/components/technology-foundation/TechInterstitial";
import TechFirstPrinciples from "@/components/technology-foundation/TechFirstPrinciples";
import TechMentisOS from "@/components/technology-foundation/TechMentisOS";
import TechDataSlm from "@/components/technology-foundation/TechDataSlm";
import TechSecurity from "@/components/technology-foundation/TechSecurity";
import TechGovernance from "@/components/technology-foundation/TechGovernance";
import TechResearch from "@/components/technology-foundation/TechResearch";
import TechDeployment from "@/components/technology-foundation/TechDeployment";
import TechProducts from "@/components/technology-foundation/TechProducts";
import TechCTA from "@/components/technology-foundation/TechCTA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TechnologyPage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Scroll Progress
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

    // Nav scroll behavior
    let lastSY = 0;
    const nav = document.getElementById("mainNav");
    const handleScroll = () => {
      const sy = window.scrollY;
      if (nav) {
        nav.style.background =
          sy > 100 ? "rgba(246,244,241,0.85)" : "rgba(255,255,255,0.6)";
        if (sy > lastSY && sy > 200) {
          nav.style.transform = "translateY(-100%)";
        } else {
          nav.style.transform = "translateY(0)";
        }
      }
      lastSY = sy;
    };
    window.addEventListener("scroll", handleScroll);

    // General reveals
    const createReveal = (sel, from) => {
      gsap.utils.toArray(sel).forEach((el) => {
        const to = Object.fromEntries(
          Object.keys(from).map((k) => [
            k,
            k === "opacity" ? 1 : k === "scale" ? 1 : 0,
          ])
        );
        gsap.fromTo(el, from, {
          ...to,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    };

    createReveal(".r-up", { opacity: 0, y: 80 });
    createReveal(".r-left", { opacity: 0, x: -100 });
    createReveal(".r-right", { opacity: 0, x: 100 });
    createReveal(".r-scale", { opacity: 0, scale: 0.85 });

    return () => window.removeEventListener("scroll", handleScroll);
  }, { scope: pageRef });

  return (
    <div ref={pageRef}>
      {/* Scroll Progress */}
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
          transform: "scaleX(0)",
          background:
            "linear-gradient(90deg,#10b981,#06b6d4,#3b82f6,#8b5cf6,#fb7185)",
        }}
      >
        <div
          style={{
            content: "''",
            position: "absolute",
            right: "-2px",
            top: "-3px",
            width: "6px",
            height: "8px",
            borderRadius: "50%",
            background: "white",
            boxShadow:
              "0 0 12px rgba(52,211,153,0.8),0 0 30px rgba(52,211,153,0.4)",
          }}
        />
      </div>

      {/* Scroll Lines */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "visible",
        }}
        aria-hidden="true"
      >
        <div
          id="sLine1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "1000vh",
            willChange: "transform",
          }}
        >
          <svg
            viewBox="0 0 1440 10000"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <linearGradient id="sl1t" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="8%" stopColor="#10b981" />
                <stop offset="40%" stopColor="#06b6d4" />
                <stop offset="70%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M180,0 C220,400 60,700 200,1200 C340,1700 80,2000 160,2600 C240,3200 40,3500 180,4100 C320,4700 60,5200 200,5800 C340,6400 100,6800 160,7500 C220,8200 60,8600 180,9200 L180,10000"
              stroke="url(#sl1t)"
              strokeWidth="1.5"
              strokeOpacity="0.12"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <TechHero />
      <div className="divider-enhanced" />
      <TechInterstitial />
      <div className="divider-enhanced" />
      <TechFirstPrinciples />
      <div className="divider-enhanced" />
      <TechMentisOS />
      <div className="divider-enhanced" />
      <TechDataSlm />
      <div className="divider-enhanced" />
      <TechSecurity />
      <div className="divider-enhanced" />
      <TechGovernance />
      <div className="divider-enhanced" />
      <TechResearch />
      <div className="divider-enhanced" />
      <TechDeployment />
      <div className="divider-enhanced" />
      <TechProducts />
      <div className="divider-enhanced" />
      <TechCTA />
    </div>
  );
}
