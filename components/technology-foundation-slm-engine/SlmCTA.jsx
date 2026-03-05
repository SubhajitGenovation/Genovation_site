"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, BookOpen, Unplug, Wallet, Search, MapPin } from "lucide-react";

const ctaCards = [
  { icon: <Unplug className="w-5 h-5 text-emerald-600" />, title: "No Hyperscaler", sub: "Zero vendor lock-in" },
  { icon: <Wallet className="w-5 h-5 text-cyan-600" />, title: "Controlled Cost", sub: "10-30x savings" },
  { icon: <Search className="w-5 h-5 text-violet-600" />, title: "Explainable", sub: "Full audit trails" },
  { icon: <MapPin className="w-5 h-5 text-blue-600" />, title: "Deploy Anywhere", sub: "Air-gapped ready" },
];

export default function SlmCTA() {
  const router = useRouter();

  const handleRequestDemo = () => {
    router.push("/request-demo");
  };

  return (
    <section className="py-56 relative overflow-hidden" id="cta">
      <div className="orb w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/[0.06] via-cyan-500/[0.04] to-violet-500/[0.06]" style={{ top: "10%", left: "20%" }} />
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="display-section text-5xl md:text-7xl lg:text-8xl mb-6 r-up">Why This Matters</h2>
        <p className="text-xl md:text-2xl text-gray-600 font-light mb-16 r-up">
          Enterprises do not need bigger models.<br />
          They need <span className="text-gradient">better-behaved intelligence</span>.
        </p>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {ctaCards.map((c, i) => (
            <div key={i} className="card p-6 text-center r-up">
              <div className="flex justify-center mb-3">{c.icon}</div>
              <p className="text-[14px] text-gray-700 font-light">{c.title}</p>
              <p className="text-[11px] text-gray-500 font-light mt-1">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* Quote Card */}
        <div className="p-10 rounded-2xl bg-white/60 border border-emerald-500/[0.15] mb-12 r-up" style={{ boxShadow: "0 30px 80px -20px rgba(16,185,129,0.08)" }}>
          <h3 className="display-inter text-3xl md:text-4xl text-gray-800 mb-3">
            In the enterprise, intelligence must be
          </h3>
          <h3 className="display-inter text-3xl md:text-4xl text-gradient mb-4">
            trusted before it can be powerful.
          </h3>
          <p className="text-[15px] text-gray-500 font-light">That is why we build small — by design.</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
          <button className="group hero-cta-primary px-8 py-3.5 rounded-full text-[14px] font-medium flex items-center gap-2.5">
            <span className="text-black flex items-center gap-2.5">
              Explore SLM Architecture
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button 
            onClick={handleRequestDemo}
            className="px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[14px] font-light flex items-center gap-2.5 hover:bg-black/[0.07] transition-all"
          >
            <BookOpen className="w-4 h-4" /> Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}