"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CipherVaultCTA() {
  const router = useRouter();

  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) =>
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } })
    );
  }, []);

  const handleRequestDemo = () => {
    router.push("/request-demo");
  };

  return (
    <>
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-20" />
        <div className="orb w-[600px] h-[600px] bg-violet-400/[0.06]" style={{ top: "-20%", left: "20%" }} />
        <div className="orb w-[400px] h-[400px] bg-purple-400/[0.04]" style={{ bottom: "-10%", right: "15%" }} />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">
            Don't share data.
          </h2>
          <h2 className="text-4xl md:text-5xl display-section text-gradient-violet mb-8 r-up">
            Share vaults.
          </h2>
          <p className="text-lg text-gray-500 font-light mb-12 max-w-xl mx-auto r-up">
            Data sharing becomes safe by default. Analytics without exposure. Trust replaced by mathematics.
          </p>
          <div className="flex items-center justify-center gap-4 r-up">
            <button 
              onClick={handleRequestDemo}
              className="group px-8 py-4 rounded-full hero-cta-primary text-white font-light tracking-wide flex items-center gap-2"
            >
              Request Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border border-black/[0.1] text-gray-600 font-light tracking-wide hover:border-violet-500/30 hover:text-violet-600 transition-all">
              Technical Whitepaper
            </button>
          </div>
        </div>
      </section>
    </>
  );
}