"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  useGSAP(() => {
    gsap.set("#scrollProgress", { scaleX: 0 });
    gsap.to("#scrollProgress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.3 },
    });
  });

  return (
    <div
      id="scrollProgress"
      style={{
        position: "fixed", top: 0, left: 0, height: "2px", width: "100%",
        zIndex: 200, transformOrigin: "left",
        background: "linear-gradient(90deg, var(--emerald), var(--cyan), var(--blue), var(--violet))",
      }}
    />
  );
}
