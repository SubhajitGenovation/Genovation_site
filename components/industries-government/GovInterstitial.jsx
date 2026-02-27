"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function GovInterstitial() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (typeof document === "undefined") return;

      const it = document.getElementById("interGovText");
      if (!it) return;

      const words = it.textContent.trim().split(/\s+/);
      it.innerHTML = words.map((w) => `<span class="inter-word">${w}</span>`).join(" ");
      const iw = it.querySelectorAll(".inter-word");

      ScrollTrigger.create({
        trigger: "#interGov",
        start: "top top",
        end: "bottom bottom",
        pin: "#interGovPin",
        scrub: true,
        onUpdate: (s) => {
          const p = s.progress;
          iw.forEach((word, i) => {
            const wp = i / iw.length;
            const d = Math.abs(p - wp);
            word.style.opacity = d < 0.08 ? "1" : d < 0.15 ? "0.6" : "0.15";
            word.style.filter = d < 0.08 ? "blur(0px)" : "blur(1px)";
          });
        },
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section ref={sectionRef} id="interGov" className="relative" style={{ height: "300vh" }}>
      <div
        id="interGovPin"
        className="h-screen flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p
            className="display-inter text-4xl md:text-6xl lg:text-[4.5rem] text-gray-900 inter-text"
            id="interGovText"
          >
            Government decisions affect citizens&apos; lives. AI must be explainable to oversight bodies, auditors, and the public — not a black box that creates accountability gaps.
          </p>
        </div>
      </div>
    </section>
  );
}