"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WGAnimations() {
  const scopeRef = useRef(document.body);

  useGSAP(
    () => {
      if (typeof document === "undefined") return;

      // ── SCROLL PROGRESS ──────────────────────────────────────────
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

      // ── NAV HIDE / SHOW ──────────────────────────────────────────
      const nav = document.getElementById("mainNav");
      if (nav) {
        ScrollTrigger.create({
          onUpdate: (self) => {
            if (self.direction === 1 && self.scroll() > 100) {
              nav.style.transform = "translateY(-100%)";
            } else {
              nav.style.transform = "translateY(0)";
            }
          },
        });
      }

      // ── HERO — character split ───────────────────────────────────
      document.querySelectorAll(".hero-line").forEach((line) => {
        const text = line.textContent;
        line.innerHTML = "";
        text.split("").forEach((c) => {
          const span = document.createElement("span");
          span.className = "char";
          span.textContent = c === " " ? "\u00A0" : c;
          line.appendChild(span);
        });
      });

      const heroTL = gsap.timeline({ delay: 0.3 });
      heroTL
        .to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" })
        .to(
          ".hero-line:first-child .char",
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            skewX: 0,
            stagger: 0.03,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .to(
          ".hero-line:last-child .char",
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            skewX: 0,
            stagger: 0.03,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7"
        )
        .to(
          "#heroDivider",
          { opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .to(
          "#heroSub1 p",
          { y: 0, duration: 1, ease: "power3.out" },
          "-=0.3"
        )
        .to(
          "#heroSub2 p",
          { y: 0, duration: 1, ease: "power3.out" },
          "-=0.7"
        )
        .to(
          "#heroButtons",
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .to(
          "#scrollCue",
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );

      // Hero parallax on scroll
      gsap.to("#heroContent", {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "70% top",
          scrub: true,
        },
      });

      // ── GENERAL SCROLL REVEALS ───────────────────────────────────
      gsap.utils.toArray(".r-up").forEach((el) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray(".r-left").forEach((el) => {
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray(".r-right").forEach((el) => {
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray(".r-scale").forEach((el) => {
        gsap.to(el, {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── STAGGERED CARD BATCHES ───────────────────────────────────
      [
        "#deployCards",
        "#mentisCards",
        "#pqVault",
        "#e2eeSection",
        "#industryCards",
        "#stackCards",
      ].forEach((sel) => {
        const container = document.querySelector(sel);
        if (!container) return;
        ScrollTrigger.batch(`${sel} .card`, {
          start: "top 87%",
          onEnter: (elements) =>
            gsap.fromTo(
              elements,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.12,
                duration: 0.9,
                ease: "power3.out",
              }
            ),
          once: true,
        });
      });

      // ── ORB PARALLAX ─────────────────────────────────────────────
      document.querySelectorAll(".orb").forEach((orb) => {
        const section = orb.closest("section");
        if (!section) return;
        gsap.to(orb, {
          y: (Math.random() - 0.5) * 250,
          x: (Math.random() - 0.5) * 120,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2.5,
          },
        });
      });

      // ── CTA HEADING SCALE ────────────────────────────────────────
      gsap.fromTo(
        "#ctaHeading",
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#cta",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── SCROLL LINES PARALLAX ────────────────────────────────────
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
      gsap.to("#sLine3", {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    },
    { scope: scopeRef }
  );

  // Renders nothing — pure animation side-effects
  return null;
}
