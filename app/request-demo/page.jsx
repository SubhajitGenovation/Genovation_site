"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollLines from "@/components/home/ScrollLines";
import HeroSection from "@/components/request-demo/HeroSection";
import WhatYoullSee from "@/components/request-demo/WhatYoullSee";
import HowItWorks from "@/components/request-demo/HowItWorks";
import FAQ from "@/components/request-demo/FAQ";
import BottomCTA from "@/components/request-demo/BottomCTA";

gsap.registerPlugin(ScrollTrigger);

export default function DemoPage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Scroll Progress
    gsap.set("#scrollProgress", { scaleX: 0 });
    gsap.to("#scrollProgress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
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

    // r-up reveals
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

    // r-left reveals
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

    // r-right reveals
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

    // Orb parallax
    document.querySelectorAll(".orb").forEach((orb) => {
      const section = orb.closest("section");
      if (!section) return;
      gsap.to(orb, {
        y: (Math.random() - 0.5) * 200,
        x: (Math.random() - 0.5) * 100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });
    });

    // Stagger preview cards
    ScrollTrigger.batch("#whatYoullSee .preview-card", {
      start: "top 87%",
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: "power3.out" }
        ),
      once: true,
    });

    // Form card entrance
    gsap.to("#formCard", {
      x: 0,
      opacity: 1,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#formCard",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: pageRef });

  return (
    <div ref={pageRef} className="relative">
      {/* Scroll Progress */}
      <div
        id="scrollProgress"
        className="fixed top-0 left-0 h-[2px] w-full z-[200] origin-left"
        style={{
          background:
            "linear-gradient(90deg, #10b981, #06b6d4, #3b82f6, #8b5cf6)",
        }}
      />

      {/* Scroll Lines */}
      <ScrollLines />

      {/* Sections */}
      <HeroSection />
      <div className="divider-enhanced" />
      <WhatYoullSee />
      <div className="divider-enhanced" />
      <HowItWorks />
      <div className="divider-enhanced" />
      <FAQ />
      <div className="divider-enhanced" />
      <BottomCTA />
    </div>
  );
}
