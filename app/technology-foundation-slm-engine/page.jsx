"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import SlmHero from "@/components/technology-foundation-slm-engine/SlmHero";
import SlmProblem from "@/components/technology-foundation-slm-engine/SlmProblem";
import SlmPerformance from "@/components/technology-foundation-slm-engine/SlmPerformance";
import SlmPlatform from "@/components/technology-foundation-slm-engine/SlmPlatform";
import SlmIntegration from "@/components/technology-foundation-slm-engine/SlmIntegration";
import SlmCTA from "@/components/technology-foundation-slm-engine/SlmCTA";
import SlmFooter from "@/components/technology-foundation-slm-engine/SlmFooter";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SlmPage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Scroll Progress
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
    ScrollTrigger.create({
      onUpdate: (self) => {
        if (!nav) return;
        if (self.direction === 1 && self.scroll() > 100) {
          nav.style.transform = "translateY(-100%)";
        } else {
          nav.style.transform = "translateY(0)";
        }
      },
    });

    // Scroll reveals
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

  }, { scope: pageRef });

  return (
    <div ref={pageRef}>
      {/* Scroll Progress Bar */}
      <div
        id="scrollProgress"
        style={{
          position: "fixed", top: 0, left: 0, height: "2px",
          width: "100%", zIndex: 200, transformOrigin: "left",
          background: "linear-gradient(90deg,#10b981,#06b6d4,#3b82f6,#8b5cf6)",
        }}
      />

      <SlmHero />
      <div className="divider-enhanced" />
      <SlmProblem />
      <div className="divider-enhanced" />
      <SlmPerformance />
      <div className="divider-enhanced" />
      <SlmPlatform />
      <div className="divider-enhanced" />
      <SlmIntegration />
      <div className="divider-enhanced" />
      <SlmCTA />
      {/* <SlmFooter /> */}
    </div>
  );
}
