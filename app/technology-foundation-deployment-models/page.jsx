"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DeploymentHero from "@/components/technology-foundation-deployment-models/DeploymentHero";
import DesignPhilosophy from "@/components/technology-foundation-deployment-models/DesignPhilosophy";
import FourDeploymentModels from "@/components/technology-foundation-deployment-models/FourDeploymentModels";
import ArchitectureStack from "@/components/technology-foundation-deployment-models/ArchitectureStack";
import FeatureParity from "@/components/technology-foundation-deployment-models/FeatureParity";
import HardwareAndLockIn from "@/components/technology-foundation-deployment-models/HardwareAndLockIn";
import DeploymentCTA from "@/components/technology-foundation-deployment-models/DeploymentCTA";

function Divider() {
  return <div className="divider-enhanced" />;
}

export default function DeploymentPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ── Scroll progress bar ─────────────────────────────────────────────
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

      // ── Nav hide / show on scroll direction ─────────────────────────────
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

      // ── Scroll-reveal: r-up ──────────────────────────────────────────────
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

      // ── Scroll-reveal: r-left ────────────────────────────────────────────
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

      // ── Scroll-reveal: r-right ───────────────────────────────────────────
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

      // ── Orb parallax ─────────────────────────────────────────────────────
      document.querySelectorAll(".orb").forEach((orb) => {
        const section = orb.closest("section") || document.body;
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
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Scroll progress bar (fixed) ─────────────────────────────────── */}
      <div id="scrollProgress" />

      {/* ── Page wrapper ────────────────────────────────────────────────── */}
      <div ref={pageRef} className="antialiased">
        <main>
          <DeploymentHero />
          <Divider />
          <DesignPhilosophy />
          <Divider />
          <FourDeploymentModels />
          <Divider />
          <ArchitectureStack />
          <Divider />
          <FeatureParity />
          <Divider />
          <HardwareAndLockIn />
          <Divider />
          <DeploymentCTA />
          <Divider />
        </main>
      </div>
    </>
  );
}