"use client";

import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <>
      {/* ======================= CTA ======================= */}
      <section id="contact" className="py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-15" />
        <div className="orb w-[600px] h-[500px] bg-sky-500/[0.05]" style={{ top: "20%", left: "30%" }} />
        <div className="orb w-[400px] h-[350px] bg-violet-500/[0.04]" style={{ bottom: "10%", right: "25%" }} />

        <div className="relative max-w-4xl mx-auto px-8 text-center" id="cta">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.15] mb-10 r-up">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">
              Engage with Genovation
            </span>
          </div>

          {/* Heading — animated via GSAP in page.jsx */}
          <h2
            className="display-section text-5xl md:text-7xl lg:text-8xl mb-8"
            id="ctaHeading"
          >
            Intelligence That<br />
            <span className="text-gradient">Withstands Scrutiny</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto mb-12 r-up leading-relaxed">
            If your organization requires intelligence systems that can be deployed safely,
            explained clearly, and governed rigorously — we welcome serious conversations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 r-up">
            <a
              href="/talk-to-sales"
              className="hero-cta-primary px-10 py-4 rounded-full text-white font-light text-sm tracking-wider inline-flex items-center gap-3"
            >
              Enterprise Inquiries <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="px-10 py-4 rounded-full border border-black/[0.1] text-gray-700 hover:border-sky-500/30 hover:text-sky-600 font-light text-sm tracking-wider transition-all inline-flex items-center gap-3"
            >
              Partnerships
            </a>
            <a
              href="#"
              className="px-10 py-4 rounded-full border border-black/[0.1] text-gray-700 hover:border-sky-500/30 hover:text-sky-600 font-light text-sm tracking-wider transition-all inline-flex items-center gap-3"
            >
              Contact Us
            </a>
          </div>

          {/* Quote Card */}
          <div className="card-static !rounded-2xl p-8 max-w-2xl mx-auto r-scale">
            <p className="text-xl md:text-2xl text-gray-700 font-light italic leading-relaxed">
              Genovation products don't just answer questions.<br />
              <span className="text-gradient font-normal not-italic">
                They withstand scrutiny.
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="divider-enhanced" />

      {/* ======================= FOOTER ======================= */}
    
    </>
  );
}
