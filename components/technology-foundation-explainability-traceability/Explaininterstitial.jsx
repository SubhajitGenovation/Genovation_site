"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ExplainInterstitial() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const interEl = textRef.current;
    if (!interEl) return;

    // Split text into word spans only once
    if (!interEl.querySelector(".inter-word")) {
      const interTxt = interEl.textContent.trim();
      interEl.innerHTML = "";
      interTxt.split(/(\s+)/).forEach((w) => {
        if (w.trim()) {
          const span = document.createElement("span");
          span.className = "inter-word";
          span.textContent = w;
          interEl.appendChild(span);
        } else if (w) {
          interEl.appendChild(document.createTextNode(w));
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

    // Phase 1: paragraph entrance
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

    // Phase 2: word-by-word illuminate
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

    // Phase 3: hold at end
    interTL.to({}, { duration: TOTAL - WORDS_END }, WORDS_END);

    // Ensure ScrollTrigger recalculates after layout
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="interProblem"
      style={{ position: "relative", zIndex: 2 }}
    >
      <div
        ref={pinRef}
        id="interProblemPin"
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
            id="interProblemText"
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
            }}
          >
            If your AI cannot explain itself, it cannot be trusted. Intelligence
            must be transparent by design.
          </p>
        </div>
      </div>
    </section>
  );
}