"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const QUOTE = "AI that cannot verify itself should not be trusted with enterprise decisions.";

export default function JudgeInterstitial() {
  const sectionRef = useRef(null);
  const pinRef     = useRef(null);
  const textRef    = useRef(null);

  useLayoutEffect(() => {
    // Must run after full layout paint, not just mount
    const ctx = gsap.context(() => {
      const el = textRef.current;
      if (!el) return;

      // Split into word spans
      const words = QUOTE.split(/(\s+)/);
      el.innerHTML = "";
      words.forEach((w) => {
        if (w.trim()) {
          const span = document.createElement("span");
          span.className = "inter-word";
          span.textContent = w;
          el.appendChild(span);
        } else if (w) {
          el.appendChild(document.createTextNode(w));
        }
      });

      const interWords = el.querySelectorAll(".inter-word");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "80% top",
          scrub: 0.5,
          pin: pinRef.current,
          pinSpacing: true,         // ← keeps layout space reserved
          anticipatePin: 1,         // ← prevents jump on fast scroll
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        el,
        { skewY: 14, skewX: -6, rotateX: 20, scale: 0.85, opacity: 0.15, y: 80 },
        { skewY: 0,  skewX: 0,  rotateX: 0,  scale: 1,    opacity: 1,    y: 0,
          duration: 2, ease: "none" }
      );

      interWords.forEach((w, i) => {
        tl.fromTo(
          w,
          { opacity: 0.3, filter: "blur(2px)" },
          { opacity: 1,   filter: "blur(0px)", duration: 0.15, ease: "power2.out" },
          2 + (i / interWords.length) * 1.5
        );
      });

      tl.to({}, { duration: 2 });

      // Force recalc after fonts + layout settle
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inter1"
      className="relative"
      style={{ height: "250vh" }}
    >
      <div
        ref={pinRef}
        id="inter1Pin"
        className="h-screen flex items-center justify-center"
      >
        <div
          className="max-w-5xl mx-auto px-8 text-center"
          style={{ perspective: "1200px" }}
        >
          <p
            ref={textRef}
            id="interText1"
            className="display-inter text-4xl md:text-6xl lg:text-[4.5rem] text-gray-900"
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>
      </div>
    </section>
  );
}
