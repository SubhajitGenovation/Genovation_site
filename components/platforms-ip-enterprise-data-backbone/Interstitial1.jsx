"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Interstitial1() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const interEl = textRef.current;
    if (!interEl) return;

    // Split into word spans
    if (!interEl.querySelector(".inter-word")) {
      const interTxt = interEl.textContent?.trim() ?? "";
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

    const words = interEl.querySelectorAll(".inter-word");
    const totalWords = words.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "80% top",
        scrub: 0.5,
        pin: pinRef.current,
      },
    });

    // Phase 1: whole paragraph entrance
    tl.fromTo(
      interEl,
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
      tl.fromTo(
        w,
        { opacity: 0.3, filter: "blur(2px)" },
        { opacity: 1, filter: "blur(0px)", duration: 0.15, ease: "power2.out" },
        2 + (i / totalWords) * 1.5
      );
    });

    // Phase 3: hold at end
    tl.to({}, { duration: 2 });

    // Ensure ScrollTrigger recalculates after DOM changes
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inter1"
      className="relative"
      style={{ height: "300vh" }}
    >
      <div
        ref={pinRef}
        id="inter1Pin"
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div
          className="max-w-5xl mx-auto px-8 text-center"
          style={{ perspective: 1200 }}
        >
          <p
            ref={textRef}
            className="display-inter text-4xl md:text-6xl lg:text-[4.5rem] text-gray-900"
            id="interText1"
            style={{ transformStyle: "preserve-3d" }}
          >
            Not because of models — but because data pipelines are brittle,
            fragmented, or ungoverned.
          </p>
        </div>
      </div>
    </section>
  );
}