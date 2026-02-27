"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FinancialServicesHero         from "@/components/financial-services/FinancialServicesHero";
import FinancialServicesChallenge    from "@/components/financial-services/FinancialServicesChallenge";
import FinancialServicesProducts     from "@/components/financial-services/FinancialServicesProducts";
import FinancialServicesWhy          from "@/components/financial-services/FinancialServicesWhy";
import FinancialServicesStakeholders from "@/components/financial-services/FinancialServicesStakeholders";
import FinancialServicesCTA          from "@/components/financial-services/FinancialServicesCTA";
import FinancialServicesFooter       from "@/components/financial-services/FinancialServicesFooter";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function FinancialServicesPage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Nav hide/show
    const nav = document.getElementById("mainNav");
    ScrollTrigger.create({
      onUpdate: (s) => {
        if (!nav) return;
        nav.style.transform =
          s.direction === 1 && s.scroll() > 100 ? "translateY(-100%)" : "translateY(0)";
      },
    });

    // Reveal .r-up
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      });
    });

    // App mock reveals — stagger .ac children + animate data attrs
    document.querySelectorAll(".app-frame").forEach((mock) => {
      const children = mock.querySelectorAll(".ac");
      children.forEach((c, i) => { c.style.transitionDelay = `${0.1 + i * 0.12}s`; });

      ScrollTrigger.create({
        trigger: mock,
        start: "top 68%",
        onEnter: () => {
          mock.classList.add("revealed");
          setTimeout(() => {
            mock.querySelectorAll(".m-bar-fill[data-w]").forEach((b) => {
              b.style.width = b.dataset.w + "%";
            });
            mock.querySelectorAll(".spark-bar[data-h]").forEach((b) => {
              b.style.height = b.dataset.h + "%";
            });
            mock.querySelectorAll(".wf-bar[data-h]").forEach((b) => {
              b.style.height = b.dataset.h + "%";
            });
            mock.querySelectorAll(".gauge-ring[data-val]").forEach((g) => {
              g.style.strokeDasharray = `${g.dataset.val} ${100 - parseFloat(g.dataset.val)}`;
            });
          }, 400);
        },
        once: true,
      });
    });

    // Orb parallax
    document.querySelectorAll(".orb").forEach((o) => {
      gsap.to(o, {
        y: (Math.random() - 0.5) * 150,
        x: (Math.random() - 0.5) * 60,
        ease: "none",
        scrollTrigger: {
          trigger: o.closest("section") || "body",
          start: "top bottom", end: "bottom top", scrub: 2,
        },
      });
    });

    ScrollTrigger.refresh();
  }, { scope: pageRef });

  return (
    <div ref={pageRef} className="financial-services-page">
      <FinancialServicesHero />
      <div className="divider" />
      <FinancialServicesChallenge />
      <div className="divider" />
      <FinancialServicesProducts />
      <div className="divider" />
      <FinancialServicesWhy />
      <div className="divider" />
      <FinancialServicesStakeholders />
      <div className="divider" />
      <FinancialServicesCTA />
      {/* <FinancialServicesFooter /> */}
    </div>
  );
}
