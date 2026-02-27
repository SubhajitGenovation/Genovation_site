"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function GSAPRevealProvider() {
  useGSAP(() => {
    // r-up
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      });
    });

    // r-left
    gsap.utils.toArray(".r-left").forEach((el) => {
      gsap.to(el, {
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      });
    });

    // r-right
    gsap.utils.toArray(".r-right").forEach((el) => {
      gsap.to(el, {
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      });
    });

    // r-scale
    gsap.utils.toArray(".r-scale").forEach((el) => {
      gsap.to(el, {
        scale: 1, opacity: 1, duration: 1.4, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      });
    });

    // Orb parallax
    document.querySelectorAll(".orb").forEach((orb) => {
      const yRand = (Math.random() - 0.5) * 200;
      const xRand = (Math.random() - 0.5) * 100;
      const section = orb.closest("section");
      if (section) {
        gsap.to(orb, {
          y: yRand, x: xRand, ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 2 },
        });
      }
    });

    // Timeline steps stagger
    ScrollTrigger.batch(".timeline-step", {
      start: "top 87%",
      onEnter: (elements) =>
        gsap.fromTo(elements, { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }),
      once: true,
    });

    // Cards stagger
    ScrollTrigger.batch(".card", {
      start: "top 87%",
      onEnter: (elements) =>
        gsap.fromTo(elements, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: "power3.out" }),
      once: true,
    });

    // Pillar cards
    ScrollTrigger.batch(".pillar-card", {
      start: "top 87%",
      onEnter: (elements) =>
        gsap.fromTo(elements, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }),
      once: true,
    });

    // Product cards
    ScrollTrigger.batch(".product-card", {
      start: "top 87%",
      onEnter: (elements) =>
        gsap.fromTo(elements, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: "power3.out" }),
      once: true,
    });
  });

  return null;
}
