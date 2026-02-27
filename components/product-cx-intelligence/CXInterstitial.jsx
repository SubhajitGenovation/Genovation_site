"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORDS = [
  "Your", "customers", "deserve", "AI", "that", "takes",
  "action", "—", "not", "one", "that", "says",
  '"I\'ll', "transfer", "you", "to", "an", 'agent."',
];

export default function CXInterstitial() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Force all words visible as baseline (no invisible fallback)
    const wordEls = textRef.current.querySelectorAll(".inter-word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",          // 2x viewport height of scroll
        scrub: 0.6,
        pin: pinRef.current,    // pin the inner sticky div
        anticipatePin: 1,
      },
    });

    // Phase 1 — text arrives from below, slight 3D
    tl.fromTo(
      textRef.current,
      { y: 60, rotateX: 15, skewY: 4, opacity: 0.1, scale: 0.92 },
      { y: 0,  rotateX: 0,  skewY: 0, opacity: 1,  scale: 1, duration: 1, ease: "power2.out" }
    );

    // Phase 2 — words light up one by one
    tl.fromTo(
      wordEls,
      { opacity: 0.15, filter: "blur(3px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: { each: 0.06, ease: "power1.in" },
        duration: 0.2,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Phase 3 — hold
    tl.to({}, { duration: 0.5 });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current) st.kill();
      });
    };
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="inter1"
      className="relative"
      style={{ height: "300vh" }}
    >
      {/* This div gets pinned by GSAP — it must NOT be position:sticky itself */}
      <div
        ref={pinRef}
        style={{
          width: "100%",
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
            className="display-inter text-gray-900"
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.25,
              transformStyle: "preserve-3d",
              // Visible by default — GSAP overrides on scroll
              opacity: 1,
            }}
          >
            {WORDS.map((word, i) => (
              <span key={i}>
                <span className="inter-word">{word}</span>
                {i < WORDS.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
