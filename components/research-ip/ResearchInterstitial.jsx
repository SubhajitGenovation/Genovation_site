"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ResearchInterstitial() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const interEl = textRef.current;
    if (!interEl) return;

    // Split into word spans if not already done
    if (!interEl.querySelector(".inter-word")) {
      const interTxt = interEl.textContent.trim();
      interEl.innerHTML = "";
      interTxt.split(/(\s+)/).forEach((token) => {
        if (token.trim()) {
          const span = document.createElement("span");
          span.className = "inter-word";
          span.textContent = token;
          interEl.appendChild(span);
        } else if (token) {
          interEl.appendChild(document.createTextNode(token));
        }
      });
    }

    const interWords = Array.from(interEl.querySelectorAll(".inter-word"));
    const totalWords = interWords.length;

    const TOTAL = 10;
    const ENTRANCE_END = 2;
    const WORDS_START = 2;
    const WORDS_END = 8;

    const interTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=250%",
        scrub: 0.5,
        pin: pinRef.current,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Phase 1 — whole paragraph entrance
    interTL.fromTo(
      interEl,
      {
        skewY: 14,
        skewX: -6,
        rotateX: 20,
        scale: 0.85,
        opacity: 0.1,
        y: 80,
      },
      {
        skewY: 0,
        skewX: 0,
        rotateX: 0,
        scale: 1,
        opacity: 1,
        y: 0,
        duration: ENTRANCE_END,
        ease: "none",
      },
      0
    );

    // Phase 2 — word-by-word illuminate
    const wordRange = WORDS_END - WORDS_START;
    interWords.forEach((w, i) => {
      const wordStart = WORDS_START + (i / totalWords) * wordRange;
      const wordEnd = WORDS_START + ((i + 1) / totalWords) * wordRange;
      const dur = wordEnd - wordStart;

      interTL.fromTo(
        w,
        { opacity: 0.2, filter: "blur(4px)" },
        { opacity: 1, filter: "blur(0px)", duration: dur, ease: "none" },
        wordStart
      );
    });

    // Phase 3 — hold at end
    interTL.to({}, { duration: TOTAL - WORDS_END }, WORDS_END);

    // Force ScrollTrigger to recalculate after DOM is fully settled
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="interResearch"
      style={{ position: "relative", zIndex: 2 }}
    >
      <div
        ref={pinRef}
        id="interResearchPin"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="max-w-5xl mx-auto px-8 text-center"
          style={{ perspective: "1200px" }}
        >
          <p
            ref={textRef}
            className="display-inter text-4xl md:text-6xl lg:text-[4.5rem] text-gray-900"
            id="interResearchText"
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
            }}
          >
            Enterprise AI fails when it optimizes for speed over trust. We focus on problems where failure has real consequences — data sovereignty, auditability, and long-term security.
          </p>
        </div>
      </div>
    </section>
  );
}