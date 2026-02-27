"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/industries/HeroSection";
import InterstitialSection from "@/components/industries/InterstitialSection";
import StackSection from "@/components/industries/StackSection";
import WhySection from "@/components/industries/WhySection";
import CTASection from "@/components/industries/CTASection";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesPage() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // ── SCROLL PROGRESS ──
    gsap.set("#scrollProgress", { scaleX: 0 });
    gsap.to("#scrollProgress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // ── NAV HIDE/SHOW ──
    const nav = document.getElementById("mainNav");
    ScrollTrigger.create({
      onUpdate: (s) => {
        if (nav) {
          nav.style.transform =
            s.direction === 1 && s.scroll() > 100
              ? "translateY(-100%)"
              : "translateY(0)";
        }
      },
    });

    // ── HERO CHARACTER SPLIT — Line 1 ONLY ──
    // Line 2 has gradient text so we DON'T char-split it.
    // -webkit-text-fill-color:transparent breaks per-char animation.
    const line1 = document.getElementById("heroLine1");
    if (line1) {
      const t = line1.textContent;
      line1.innerHTML = "";
      t.split("").forEach((c) => {
        const s = document.createElement("span");
        s.className = "char";
        s.textContent = c === " " ? "\u00A0" : c;
        line1.appendChild(s);
      });
    }

    // ── GSAP INITIAL STATES ──
    // Set via GSAP (not CSS) to avoid SSR/hydration flash
    gsap.set(".char",        { opacity: 0, y: "100%", rotateX: -90, skewX: -8 });
    gsap.set("#heroLine2",   { opacity: 0, y: 60 });
    gsap.set("#heroBadge",   { opacity: 0, y: 20 });
    gsap.set("#heroDivider", { opacity: 0 });
    gsap.set("#heroPillars", { opacity: 0, y: 30 });
    gsap.set("#heroStats",   { opacity: 0, y: 20 });
    gsap.set("#scrollCue",   { opacity: 0 });
    gsap.set("#heroSub1 p",  { y: "100%" });
    gsap.set("#heroSub2 p",  { y: "100%" });

    // ── HERO TIMELINE ──
    const hTL = gsap.timeline({ delay: 0.2 });
    hTL
      .to("#heroBadge", {
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
      })
      .to(
        ".char",
        {
          opacity: 1, y: 0, rotateX: 0, skewX: 0,
          stagger: 0.025, duration: 0.9, ease: "power4.out",
        },
        "-=0.4"
      )
      .to(
        "#heroLine2",
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power4.out",
        },
        "-=0.65"
      )
      .to("#heroDivider", { opacity: 1, duration: 0.6 }, "-=0.3")
      .to("#heroSub1 p",  { y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
      .to("#heroSub2 p",  { y: 0, duration: 1, ease: "power3.out" }, "-=0.6")
      .to("#heroPillars", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .to("#heroStats",   { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .to("#scrollCue",   { opacity: 1, duration: 0.8 }, "-=0.3");

    // ── HERO PARALLAX ──
    gsap.to("#heroContent", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "70% top",
        scrub: true,
      },
    });

    // ── INTERSTITIAL ──
    const i1 = document.getElementById("interText1");
    if (i1) {
      const iT = i1.textContent.trim();
      i1.innerHTML = "";
      iT.split(/(\s+)/).forEach((w) => {
        if (w.trim()) {
          const s = document.createElement("span");
          s.className = "inter-word";
          s.textContent = w;
          i1.appendChild(s);
        } else if (w) {
          i1.appendChild(document.createTextNode(w));
        }
      });

      const iW = i1.querySelectorAll(".inter-word");
      const iTL = gsap.timeline({
        scrollTrigger: {
          trigger: "#inter1",
          start: "top top",
          end: "80% top",
          scrub: 0.5,
          pin: "#inter1Pin",
        },
      });
      iTL.fromTo(
        "#interText1",
        { skewY: 14, skewX: -6, rotateX: 20, scale: 0.85, opacity: 0.15, y: 80 },
        { skewY: 0, skewX: 0, rotateX: 0, scale: 1, opacity: 1, y: 0, duration: 2, ease: "none" }
      );
      iW.forEach((w, i) => {
        iTL.fromTo(
          w,
          { opacity: 0.3, filter: "blur(2px)" },
          { opacity: 1, filter: "blur(0px)", duration: 0.15, ease: "power2.out" },
          2 + (i / iW.length) * 1.5
        );
      });
      iTL.to({}, { duration: 2 });
    }

    // ── STACKING CARDS ──
    const sCards = document.querySelectorAll(".stack-card");
    sCards.forEach((c, i) => {
      gsap.fromTo(
        c,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: c,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
      if (i > 0) {
        const prevInner = sCards[i - 1].querySelector(".stack-card-inner");
        if (prevInner) {
          gsap.to(prevInner, {
            scale: 0.92,
            opacity: 0.35,
            scrollTrigger: {
              trigger: c,
              start: "top bottom",
              end: "top 200px",
              scrub: true,
            },
          });
        }
      }
    });

    // ── APP MOCK REVEALS + PROGRESS BARS ──
    document.querySelectorAll(".app-mock").forEach((mock) => {
      mock.querySelectorAll(".anim-child").forEach((child, i) => {
        child.style.transitionDelay = 0.15 + i * 0.18 + "s";
      });
      ScrollTrigger.create({
        trigger: mock.closest(".stack-card"),
        start: "top 65%",
        onEnter: () => {
          mock.classList.add("revealed");
          mock.querySelectorAll(".m-bar-fill[data-width]").forEach((bar) => {
            setTimeout(() => {
              bar.style.width = bar.dataset.width + "%";
            }, 800);
          });
        },
        once: true,
      });
    });

    // ── GENERAL SCROLL REVEALS ──
    gsap.utils.toArray(".r-up").forEach((e) => {
      gsap.set(e, { opacity: 0, y: 80 });
      gsap.to(e, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: e,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    // ── BATCH CARD REVEALS ──
    ["#whyCards", "#foundationCards"].forEach((sel) => {
      ScrollTrigger.batch(sel + " .card", {
        start: "top 87%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }
          ),
        once: true,
      });
    });

    // ── ORB PARALLAX ──
    document.querySelectorAll(".orb").forEach((o) => {
      const section = o.closest("section");
      if (section) {
        gsap.to(o, {
          y: (Math.random() - 0.5) * 200,
          x: (Math.random() - 0.5) * 80,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2.5,
          },
        });
      }
    });

    // ── DECORATIVE SCROLL LINES ──
    gsap.to("#sLine1", {
      yPercent: -18,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    gsap.to("#sLine2", {
      yPercent: -28,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    // ── CTA HEADING ──
    gsap.set("#cta h2", { scale: 0.7, opacity: 0 });
    gsap.to("#cta h2", {
      scale: 1,
      opacity: 1,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#cta",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // ── CLEANUP ──
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      {/* ── SCROLL PROGRESS BAR ── */}
      <div
        id="scrollProgress"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          zIndex: 200,
          transformOrigin: "left",
          width: "100%",
          background: "linear-gradient(90deg,#10b981,#06b6d4,#3b82f6,#8b5cf6)",
        }}
      />

      {/* ── DECORATIVE SCROLL LINES ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "visible",
        }}
      >
        {/* Line 1 */}
        <div
          id="sLine1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "1000vh",
            willChange: "transform",
          }}
        >
          <svg
            viewBox="0 0 1440 10000"
            preserveAspectRatio="none"
            fill="none"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <linearGradient id="sl1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#10b981" stopOpacity="0" />
                <stop offset="10%"  stopColor="#10b981" />
                <stop offset="40%"  stopColor="#06b6d4" />
                <stop offset="70%"  stopColor="#10b981" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M180,0 C220,400 60,700 200,1200 C340,1700 80,2000 160,2600 C240,3200 40,3500 180,4100 C320,4700 60,5200 200,5800 C340,6400 100,6800 160,7500 C220,8200 60,8600 180,9200 L180,10000"
              stroke="url(#sl1)"
              strokeWidth="1.5"
              strokeOpacity="0.1"
            />
          </svg>
        </div>

        {/* Line 2 */}
        <div
          id="sLine2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "1000vh",
            willChange: "transform",
          }}
        >
          <svg
            viewBox="0 0 1440 10000"
            preserveAspectRatio="none"
            fill="none"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <linearGradient id="sl2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#334155" stopOpacity="0" />
                <stop offset="15%"  stopColor="#334155" />
                <stop offset="50%"  stopColor="#475569" />
                <stop offset="85%"  stopColor="#334155" />
                <stop offset="100%" stopColor="#334155" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M1280,0 C1240,500 1380,900 1260,1500 C1140,2100 1360,2600 1300,3200 C1240,3800 1400,4200 1280,4800 C1160,5400 1380,5900 1300,6500 C1220,7100 1400,7600 1280,8200 L1280,10000"
              stroke="url(#sl2)"
              strokeWidth="1"
              strokeOpacity="0.07"
            />
          </svg>
        </div>
      </div>

      {/* ── PAGE SECTIONS ── */}
      <HeroSection />
      <div className="divider-enhanced" />
      <InterstitialSection />
      <div className="divider-enhanced" />
      <StackSection />
      <div className="divider-enhanced" />
      <WhySection />
      <div className="divider-enhanced" />
      <CTASection />
    </>
  );
}
