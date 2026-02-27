"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import SecurityHero from "@/components/platforms-ip-cryptographic-security-ip/SecurityHero";
import SecurityInterstitial from "@/components/platforms-ip-cryptographic-security-ip/SecurityInterstitial";
import SecurityProblem from "@/components/platforms-ip-cryptographic-security-ip/SecurityProblem";
import SecurityCapabilities from "@/components/platforms-ip-cryptographic-security-ip/SecurityCapabilities";
import SecurityArchitecture from "@/components/platforms-ip-cryptographic-security-ip/SecurityArchitecture";
import SecurityDeployment from "@/components/platforms-ip-cryptographic-security-ip/SecurityDeployment";
import SecurityIndustries from "@/components/platforms-ip-cryptographic-security-ip/SecurityIndustries";
import SecurityCTA from "@/components/platforms-ip-cryptographic-security-ip/SecurityCTA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SecurityIPPage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Scroll Progress Bar
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

    // Nav hide/show
    const nav = document.getElementById("mainNav");
    if (nav) {
      ScrollTrigger.create({
        onUpdate: (self) => {
          if (self.direction === 1 && self.scroll() > 100) {
            nav.style.transform = "translateY(-100%)";
          } else {
            nav.style.transform = "translateY(0)";
          }
        },
      });
    }

    // General reveals
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".r-left").forEach((el) => {
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".r-right").forEach((el) => {
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".r-scale").forEach((el) => {
      gsap.to(el, {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    // Staggered card batches
    ["#problemCards", "#deployCards", "#layerStack"].forEach((sel) => {
      ScrollTrigger.batch(`${sel} .card`, {
        start: "top 87%",
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }
          ),
        once: true,
      });
    });

    // CTA scale
    gsap.fromTo(
      "#cta h2",
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#cta",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Orb parallax
    document.querySelectorAll(".orb").forEach((orb) => {
      gsap.to(orb, {
        y: (Math.random() - 0.5) * 250,
        x: (Math.random() - 0.5) * 120,
        ease: "none",
        scrollTrigger: {
          trigger: orb.closest("section"),
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });
    });

    // Scroll lines parallax
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
  }, { scope: pageRef });

  return (
    <div ref={pageRef}>
      {/* Scroll Progress */}
      <div id="scrollProgress" style={{
        position: "fixed", top: 0, left: 0, height: "2px", zIndex: 200,
        transformOrigin: "left",
        background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)",
        width: "100%",
      }} />

      {/* Abstract Scroll Lines */}
      <div className="scroll-lines-wrap" aria-hidden="true">
        <div className="scroll-line" id="sLine1">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sl1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="8%" stopColor="#06b6d4" />
                <stop offset="35%" stopColor="#3b82f6" />
                <stop offset="60%" stopColor="#8b5cf6" />
                <stop offset="85%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M180,0 C220,400 60,700 200,1200 C340,1700 80,2000 160,2600 C240,3200 40,3500 180,4100 C320,4700 60,5200 200,5800 C340,6400 100,6800 160,7500 C220,8200 60,8600 180,9200 L180,10000"
              stroke="url(#sl1)" strokeWidth="2" strokeOpacity="0.15" strokeLinecap="round" />
          </svg>
        </div>
        <div className="scroll-line" id="sLine2">
          <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sl2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                <stop offset="12%" stopColor="#8b5cf6" />
                <stop offset="45%" stopColor="#06b6d4" />
                <stop offset="80%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M1280,0 C1240,500 1380,900 1260,1500 C1140,2100 1360,2600 1300,3200 C1240,3800 1400,4200 1280,4800 C1160,5400 1380,5900 1300,6500 C1220,7100 1400,7600 1280,8200 L1280,10000"
              stroke="url(#sl2)" strokeWidth="1.5" strokeOpacity="0.12" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <SecurityHero />
      <div className="divider-enhanced" />
      <SecurityInterstitial />
      <div className="divider-enhanced" />
      <SecurityProblem />
      <div className="divider-enhanced" />
      <SecurityCapabilities />
      <div className="divider-enhanced" />
      <SecurityArchitecture />
      <div className="divider-enhanced" />
      <SecurityDeployment />
      <div className="divider-enhanced" />
      <SecurityIndustries />
      <div className="divider-enhanced" />
      <SecurityCTA />
    </div>
  );
}
