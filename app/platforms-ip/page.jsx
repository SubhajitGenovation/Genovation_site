"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import PlatformHero        from "@/components/platforms-ip/PlatformHero";
import PlatformFoundations from "@/components/platforms-ip/PlatformFoundations";
import PlatformMentisOS    from "@/components/platforms-ip/PlatformMentisOS";
import PlatformDataBackbone from "@/components/platforms-ip/PlatformDataBackbone";
import PlatformCipherVault from "@/components/platforms-ip/PlatformCipherVault";
import PlatformSecurity    from "@/components/platforms-ip/PlatformSecurity";
import PlatformResearchIP  from "@/components/platforms-ip/PlatformResearchIP";
import PlatformCTA         from "@/components/platforms-ip/PlatformCTA";
import PlatformFooter      from "@/components/platforms-ip/PlatformFooter";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function PlatformPage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    gsap.set("#scrollProgress", { scaleX: 0 });
    gsap.to("#scrollProgress", {
      scaleX: 1, ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.3 },
    });

    ScrollTrigger.create({
      onUpdate: (self) => {
        const nav = document.getElementById("mainNav");
        if (!nav) return;
        nav.style.transform =
          self.direction === 1 && self.scroll() > 100 ? "translateY(-100%)" : "translateY(0)";
      },
    });

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
      gsap.to(el, { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } })
    );

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
    <div ref={pageRef} className="platform-page">
      <div id="scrollProgress" style={{
        position: "fixed", top: 0, left: 0, height: "2px", width: "100%", zIndex: 200,
        transformOrigin: "left",
        background: "linear-gradient(90deg,#10b981,#06b6d4,#3b82f6,#8b5cf6)",
      }} />

      <PlatformHero />
      <div className="divider-enhanced" />
      <PlatformFoundations />
      <div className="divider-enhanced" />
      <PlatformMentisOS />
      <div className="divider-enhanced" />
      <PlatformDataBackbone />
      <div className="divider-enhanced" />
      <PlatformCipherVault />
      <div className="divider-enhanced" />
      <PlatformSecurity />
      <div className="divider-enhanced" />
      <PlatformResearchIP />
      <div className="divider-enhanced" />
      <PlatformCTA />
      {/* <PlatformFooter /> */}
    </div>
  );
}
