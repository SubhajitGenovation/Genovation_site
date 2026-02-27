"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SecurityInterstitial() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    const interEl = document.getElementById("interProblemText");
    if (!interEl) return;

    // Wait a tick to ensure DOM is ready
    const init = () => {
      const interTxt = interEl.textContent.trim();
      interEl.innerHTML = "";

      interTxt.split(/(\s+)/).forEach((w) => {
        if (w.trim()) {
          const span = document.createElement("span");
          span.className = "inter-word";
          span.style.display = "inline-block";
          span.style.opacity = "0.3";
          span.textContent = w;
          interEl.appendChild(span);
        } else if (w) {
          interEl.appendChild(document.createTextNode(w));
        }
      });

      const interWords = interEl.querySelectorAll(".inter-word");

      const interTL = gsap.timeline({
        scrollTrigger: {
          trigger: "#interProblem",
          start: "top top",
          end: "80% top",
          scrub: 0.5,
          pin: "#interProblemPin",
          anticipatePin: 1,
        },
      });

      // Initial reveal of the whole text block
      interTL.fromTo(
        "#interProblemText",
        {
          skewY: 14,
          skewX: -6,
          rotateX: 20,
          scale: 0.85,
          opacity: 0,
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
        }
      );

      // Word-by-word highlight
      interWords.forEach((w, i) => {
        interTL.fromTo(
          w,
          { opacity: 0.3, filter: "blur(2px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.15,
            ease: "power2.out",
          },
          2 + (i / interWords.length) * 1.5
        );
      });

      interTL.to({}, { duration: 2 });
    };

    // Small delay ensures ScrollTrigger is fully ready
    const timer = setTimeout(init, 50);
    return () => clearTimeout(timer);

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative"
      id="interProblem"
      style={{ height: "300vh" }}
    >
      <div
        className="h-screen flex items-center justify-center"
        id="interProblemPin"
      >
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p
            className="display-inter text-4xl md:text-6xl lg:text-[4.5rem] text-gray-900"
            id="interProblemText"
            style={{
              transformStyle: "preserve-3d",
              opacity: 0,           // hidden initially, GSAP reveals it
              willChange: "transform, opacity",
            }}
          >
            Trust is not a control mechanism. When systems are attacked,
            perimeters breached, and trust relationships fail — only
            cryptographic guarantees hold.
          </p>
        </div>
      </div>
    </section>
  );
}
