"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();

  return (
    <>
      {/* CTA */}
      <section className="py-56 relative overflow-hidden" id="cta">
        <div
          className="orb absolute rounded-full"
          style={{ width: 700, height: 700, background: "rgba(6,95,70,0.04)", filter: "blur(80px)", top: "10%", left: "25%", pointerEvents: "none" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(16,185,129,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,0.06) 1px,transparent 1px)",
            backgroundSize: "100px 100px",
            opacity: 0.15,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <h2
            className="r-up mb-12"
            style={{ fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 0.95, fontSize: "clamp(3.5rem,9vw,9rem)" }}
          >
            Engage<br />
            <span style={{ background: "linear-gradient(135deg,#059669 0%,#0891b2 50%,#2563eb 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              With Us
            </span>
          </h2>
          <p className="text-[1.15rem] text-gray-500 font-light mb-16 leading-relaxed r-up max-w-2xl mx-auto">
            If your organization operates in a regulated environment and is exploring safe AI adoption, we would like to speak with you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
            <button
              onClick={() => router.push('/talk-to-sales')}
              className="group px-8 py-3.5 rounded-full text-white text-[15px] font-normal flex items-center gap-3 transition-all hover:shadow-2xl"
              style={{ background: "linear-gradient(to right, #065f46, #0f766e)", boxShadow: "none" }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(6,95,70,0.2)"}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
            >
              Industry-Specific Inquiries
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-3.5 rounded-full text-gray-600 text-[15px] font-light transition-all hover:bg-black/[0.08]" style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)" }}>
              Enterprise Deployment
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
    </>
  );
}