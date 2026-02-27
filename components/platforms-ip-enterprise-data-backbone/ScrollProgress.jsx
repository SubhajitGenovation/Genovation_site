"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  useEffect(() => {
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
  }, []);

  return (
    <div
      id="scrollProgress"
      className="fixed top-0 left-0 h-[2px] z-[200] origin-left w-full"
      style={{ background: "linear-gradient(90deg,#10b981,#06b6d4,#3b82f6,#8b5cf6)" }}
    />
  );
}
