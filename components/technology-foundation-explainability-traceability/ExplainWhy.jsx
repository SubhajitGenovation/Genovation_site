"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Target, CheckCircle, Search, Scale, HeartHandshake, ArrowRight } from "lucide-react";

export default function ExplainWhy() {
  // ONE ref wrapping BOTH sections so useGSAP scope covers everything
  const containerRef = useRef(null);
  const router = useRouter();

  const handleRequestDemo = () => {
    router.push("/request-demo");
  };

  useGSAP(() => {
    if (typeof document === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // All .r-up inside the wrapper (both whySection + CTA)
    gsap.utils.toArray(".r-up", containerRef.current).forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Trust cards stagger
    ScrollTrigger.batch("#trustCards .card", {
      start: "top 87%",
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }
        ),
      once: true,
    });

    // CTA heading scale-up — trigger is #cta which is inside containerRef
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
  }, { scope: containerRef });

  return (
    // Single wrapper div — both sections inside, containerRef covers all
    <div ref={containerRef}>
      {/* WHY THIS MATTERS */}
      <section className="py-48 relative" id="whySection">
        <div className="absolute inset-0 mesh-bg opacity-15"></div>
        <div
          className="orb w-[600px] h-[500px] bg-emerald-500/[0.06]"
          style={{ top: "10%", left: "30%" }}
        ></div>

        <div className="relative max-w-4xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
              <Target className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">
                Why This Matters
              </span>
            </div>
            <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
              Trust is the<br />
              <span className="text-gradient">Hardest Problem</span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
              In enterprise AI, the hardest problem is not intelligence. It is trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12" id="trustCards">
            {[
              { icon: <CheckCircle className="w-6 h-6 text-emerald-600" />, bg: "bg-emerald-500/[0.12]", title: "Adopted Responsibly", desc: "Intelligence systems that can be deployed with confidence and stakeholder buy-in" },
              { icon: <Search className="w-6 h-6 text-cyan-600" />, bg: "bg-cyan-500/[0.12]", title: "Survive Scrutiny", desc: "Systems that can withstand audit, investigation, and regulatory examination" },
              { icon: <Scale className="w-6 h-6 text-blue-600" />, bg: "bg-blue-500/[0.12]", title: "Remain Operable", desc: "Intelligence that continues to function under evolving regulatory requirements" },
              { icon: <HeartHandshake className="w-6 h-6 text-violet-600" />, bg: "bg-violet-500/[0.12]", title: "Earn Long-Term Confidence", desc: "Build organizational trust that compounds over time through consistent transparency" },
            ].map((item, i) => (
              <div key={i} className="card p-8">
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-[15px] text-gray-900 font-light mb-2">{item.title}</h3>
                <p className="text-[15px] text-gray-500 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-enhanced"></div>

      {/* CTA — inside the same containerRef wrapper */}
      <section className="py-56 relative overflow-hidden" id="cta">
        <div
          className="orb w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/[0.06] via-cyan-500/[0.04] to-violet-500/[0.06]"
          style={{ top: "10%", left: "20%" }}
        ></div>
        <div className="absolute inset-0 mesh-bg opacity-20"></div>

        <div className="relative max-w-4xl mx-auto px-8 text-center">
          {/* NOT r-up — has its own scale animation via #ctaHeading */}
          <h2
            id="ctaHeading"
            className="display-hero text-6xl md:text-8xl lg:text-[9rem] mb-12"
            style={{ opacity: 0 }}
          >
            Intelligence<br />
            <span className="text-gradient">You Can<br />Defend.</span>
          </h2>

          <p className="text-lg text-gray-500 font-light mb-16 leading-relaxed r-up max-w-xl mx-auto">
            Every decision traceable. Every action explainable. Every outcome
            defensible. Genovation builds intelligence that stands up to
            examination — so your enterprise can move forward with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
            <div className="mag-btn">
              <button className="btn-inner group px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 text-black text-[15px] font-normal flex items-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all">
                Explore Architecture
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="mag-btn">
              <button 
                onClick={handleRequestDemo}
                className="btn-inner px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[15px] font-light flex items-center gap-3 hover:bg-black/[0.08] transition-all"
              >
                Request Demo
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-12 r-up">
            <span className="px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.15] text-emerald-600 text-[11px] font-light">Complete Traceability</span>
            <span className="px-4 py-2 rounded-full bg-cyan-500/[0.08] border border-cyan-500/[0.15] text-cyan-600 text-[11px] font-light">Decision Lineage</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/[0.08] border border-blue-500/[0.15] text-blue-600 text-[11px] font-light">Audit-Ready</span>
            <span className="px-4 py-2 rounded-full bg-violet-500/[0.08] border border-violet-500/[0.15] text-violet-600 text-[11px] font-light">Policy Enforced</span>
          </div>
        </div>
      </section>
    </div>
  );
}