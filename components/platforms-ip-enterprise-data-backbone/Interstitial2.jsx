"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Interstitial2() {
  useEffect(() => {
    // Kill any existing ScrollTriggers for this section first
    ScrollTrigger.getAll()
      .filter((t) => t.vars.id === "inter2")
      .forEach((t) => t.kill());

    // Set all lines visible initially so they don't stay hidden on miss
    gsap.set(["#i2line1", "#i2line2", "#i2line3"], {
      opacity: 0,
      y: 60,
    });

    const tl = gsap.timeline({
      id: "inter2",
      scrollTrigger: {
        trigger: "#inter2Wrapper",
        start: "top top",
        end: "+=200%",
        pin: "#inter2Pin",
        scrub: 1,
        anticipatePin: 1,
      },
    });

    tl
      // All 3 lines animate in together with slight stagger
      .to("#i2line1", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0)
      .to("#i2line2", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.15)
      .to("#i2line3", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.3)
      // Hold all visible
      .to({}, { duration: 1 })
      // All fade out together
      .to(["#i2line1", "#i2line2", "#i2line3"], {
        opacity: 0,
        y: -40,
        stagger: 0.08,
        duration: 0.4,
        ease: "power2.in",
      });

    return () => {
      ScrollTrigger.getAll()
        .filter((t) => t.vars.id === "inter2")
        .forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="inter2Wrapper" className="relative" style={{ height: "400vh" }}>
      <div
        id="inter2Pin"
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p className="display-hero text-5xl md:text-7xl lg:text-[6rem] leading-tight">
            <span
              id="i2line1"
              className="block"
              style={{ opacity: 0, transform: "translateY(60px)" }}
            >
              Not a generic ETL tool.
            </span>
            <span
              id="i2line2"
              className="block text-gradient mt-2"
              style={{ opacity: 0, transform: "translateY(60px)" }}
            >
              A data execution substrate
            </span>
            <span
              id="i2line3"
              className="block text-gray-500 mt-2"
              style={{ opacity: 0, transform: "translateY(60px)" }}
            >
              for governed intelligence.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
