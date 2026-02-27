"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import RAIHero         from "@/components/research-ip-responsible-explainable-ai/RAIHero";
import RAIWhyMatters   from "@/components/research-ip-responsible-explainable-ai/RAIWhyMatters";
import RAIPrinciples   from "@/components/research-ip-responsible-explainable-ai/RAIPrinciples";
import RAIWhatHard     from "@/components/research-ip-responsible-explainable-ai/RAIWhatHard";
import RAIJudge        from "@/components/research-ip-responsible-explainable-ai/RAIJudge";
import RAIBeyondModel  from "@/components/research-ip-responsible-explainable-ai/RAIBeyondModel";
import RAIMentisOS     from "@/components/research-ip-responsible-explainable-ai/RAIMentisOS";
import RAIResponsibility from "@/components/research-ip-responsible-explainable-ai/RAIResponsibility";
import RAIStandards    from "@/components/research-ip-responsible-explainable-ai/RAIStandards";
import RAIPractice     from "@/components/research-ip-responsible-explainable-ai/RAIPractice";
import RAICTA          from "@/components/research-ip-responsible-explainable-ai/RAICTA";
import RAIFooter       from "@/components/research-ip-responsible-explainable-ai/RAIFooter";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ResponsibleAIPage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Scroll progress bar
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
        nav.style.transform =
          self.direction === 1 && self.scroll() > 100
            ? "translateY(-100%)"
            : "translateY(0)";
      },
    });

    // Scroll reveals
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
      gsap.to(el, { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } })
    );

    // Orb parallax
    document.querySelectorAll(".orb").forEach((orb) => {
      gsap.to(orb, {
        y: (Math.random() - 0.5) * 250,
        x: (Math.random() - 0.5) * 120,
        ease: "none",
        scrollTrigger: {
          trigger: orb.closest("section") || "body",
          start: "top bottom", end: "bottom top", scrub: 2.5,
        },
      });
    });
  }, { scope: pageRef });

  return (
    <div ref={pageRef} className="rai-page">
      {/* Scroll progress — teal gradient */}
      <div id="scrollProgress" style={{
        position: "fixed", top: 0, left: 0, height: "2px", width: "100%",
        zIndex: 200, transformOrigin: "left",
        background: "linear-gradient(90deg,#14b8a6,#0891b2,#06b6d4,#14b8a6)",
      }} />

      <RAIHero />
      <div className="divider-enhanced" />
      <RAIWhyMatters />
      <div className="divider-enhanced" />
      <RAIPrinciples />
      <div className="divider-enhanced" />
      <RAIWhatHard />
      <div className="divider-enhanced" />
      <RAIJudge />
      <div className="divider-enhanced" />
      <RAIBeyondModel />
      <div className="divider-enhanced" />
      <RAIMentisOS />
      <div className="divider-enhanced" />
      <RAIResponsibility />
      <div className="divider-enhanced" />
      <RAIStandards />
      <div className="divider-enhanced" />
      <RAIPractice />
      <div className="divider-enhanced" />
      <RAICTA />
      <div className="divider-enhanced" />
      {/* <RAIFooter /> */}
    </div>
  );
}
