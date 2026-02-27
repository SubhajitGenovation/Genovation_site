"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollLines() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.to("#sLine1", {
      yPercent: -18,
      ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 },
    });
    gsap.to("#sLine2", {
      yPercent: -28,
      ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.5 },
    });
    gsap.to("#sLine3", {
      yPercent: -40,
      ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 2 },
    });
  });

  return (
    <div ref={ref} className="scroll-lines-wrap">
      <div className="scroll-line" id="sLine1">
        <svg viewBox="0 0 1440 10000" preserveAspectRatio="none">
          <path d="M200 0 Q350 2000 200 4000 Q50 6000 200 8000 L200 10000" fill="none" stroke="rgba(16,185,129,0.06)" strokeWidth="1" />
        </svg>
      </div>
      <div className="scroll-line" id="sLine2">
        <svg viewBox="0 0 1440 10000" preserveAspectRatio="none">
          <path d="M720 0 Q900 2500 720 5000 Q540 7500 720 10000" fill="none" stroke="rgba(6,182,212,0.05)" strokeWidth="1" />
        </svg>
      </div>
      <div className="scroll-line" id="sLine3">
        <svg viewBox="0 0 1440 10000" preserveAspectRatio="none">
          <path d="M1240 0 Q1100 2000 1240 4000 Q1380 6000 1240 8000 L1240 10000" fill="none" stroke="rgba(59,130,246,0.04)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
