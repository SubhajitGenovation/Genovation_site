"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const QUOTE =
  "Intelligence that fails unpredictably is worse than intelligence that does not exist.";

export default function PerfInterstitial() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = textRef.current;
    if (!el) return;

    // Split into word spans (preserve spaces)
    // Only split once
    if (!el.querySelector(".inter-word")) {
      el.innerHTML = "";
      QUOTE.split(/(\s+)/).forEach((token) => {
        if (token.trim()) {
          const span = document.createElement("span");
          span.className = "inter-word";
          span.style.display = "inline-block";
          span.textContent = token;
          el.appendChild(span);
        } else if (token) {
          // Preserve spaces as text nodes
          el.appendChild(document.createTextNode(token));
        }
      });
    }

    const words = el.querySelectorAll(".inter-word");
    const totalWords = words.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "80% top",
        scrub: 0.5,
        pin: pinRef.current,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Phase 1: whole text entrance
    tl.fromTo(
      el,
      {
        skewY: 14,
        skewX: -6,
        rotateX: 20,
        scale: 0.85,
        opacity: 0.15,
        y: 80,
      },
      {
        skewY: 0,
        skewX: 0,
        rotateX: 0,
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "none",
      },
      0
    );

    // Phase 2: word-by-word unblur
    words.forEach((w, i) => {
      const wordStart = 2 + (i / (totalWords - 1)) * 1.5;
      tl.fromTo(
        w,
        { opacity: 0.3, filter: "blur(2px)" },
        { opacity: 1, filter: "blur(0px)", duration: 0.15, ease: "power2.out" },
        wordStart
      );
    });

    // Phase 3: hold
    tl.to({}, { duration: 2 });

    // Force ScrollTrigger to recalculate after layout settles
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      id="inter1"
      style={{ height: "250vh" }}
    >
      <div
        ref={pinRef}
        className="h-screen flex items-center justify-center"
        style={{ position: "sticky", top: 0 }}
      >
        <div
          className="max-w-5xl mx-auto px-8 text-center"
          style={{ perspective: "1200px" }}
        >
          <p
            ref={textRef}
            className="display-inter text-4xl md:text-6xl lg:text-[4.2rem] text-gray-900 leading-tight"
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>
      </div>
    </section>
  );
}