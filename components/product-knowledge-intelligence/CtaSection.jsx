"use client";
import { useEffect } from "react";
import { Database, ShieldCheck, Rocket, ArrowRight, PlayCircle, FileText } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function CtaSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.batch("#ctaCards .card", {
      start: "top 87%",
      onEnter: els => gsap.fromTo(els,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }
      ),
      once: true,
    });

    ScrollTrigger.batch(".r-up", {
      start: "top 88%",
      onEnter: els => gsap.fromTo(els,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
      ),
      once: true,
    });

    ScrollTrigger.create({
      trigger: ".card-static",
      start: "top 88%",
      onEnter: el => gsap.fromTo(el,
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out" }
      ),
      once: true,
    });

  }, []);

  return (
    <section id="contact" className="py-40 md:py-56 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      
      <div className="orb w-[800px] h-[700px] bg-gradient-to-br from-sky-500/[0.07] via-cyan-500/[0.04] to-violet-500/[0.05] absolute" 
           style={{ top: '10%', left: '15%' }} />
      <div className="orb w-[500px] h-[450px] bg-violet-500/[0.04] absolute" 
           style={{ bottom: '5%', right: '15%' }} />

      <div className="relative max-w-5xl mx-auto px-8 text-center" id="cta">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.15] mb-10 r-up">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" />
          <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">
            Engage with Genovation
          </span>
        </div>

        {/* Heading */}
        <h2 className="display-hero text-6xl md:text-8xl lg:text-[9.5rem] mb-14 r-up" 
            id="ctaHeading" 
            style={{ lineHeight: 0.9 }}>
          Intelligence That<br />
          <span className="text-gradient">Withstands<br />Scrutiny</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-[1.2rem] text-gray-500 font-light max-w-2xl mx-auto mb-16 r-up leading-relaxed">
          If your organization requires a defensible, explainable, and sovereign knowledge intelligence system, 
          we should talk.
        </p>

        {/* Cards - Original Style */}
        <div className="grid md:grid-cols-3 gap-5 mb-16 max-w-3xl mx-auto" id="ctaCards">
          <div className="card p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sky-400/20 to-sky-500/10 flex items-center justify-center border border-sky-400/20 group-hover:shadow-lg transition-all">
              <Database className="w-5 h-5 text-sky-500" />
            </div>
            <p className="text-[15px] text-gray-500 font-light leading-relaxed group-hover:text-gray-700">
              Your data never leaves your infrastructure
            </p>
          </div>

          <div className="card p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 flex items-center justify-center border border-emerald-400/20 group-hover:shadow-lg transition-all">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
            <p className="text-[15px] text-gray-500 font-light leading-relaxed group-hover:text-gray-700">
              Every AI output verified and auditable
            </p>
          </div>

          <div className="card p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-400/20 to-violet-500/10 flex items-center justify-center border border-violet-400/20 group-hover:shadow-lg transition-all">
              <Rocket className="w-5 h-5 text-violet-500" />
            </div>
            <p className="text-[15px] text-gray-500 font-light leading-relaxed group-hover:text-gray-700">
              Enterprise-grade from day one
            </p>
          </div>
        </div>

        {/* Three CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 r-up">
          <a href="#" className="group hero-cta-primary px-10 py-4 rounded-full text-white font-light text-[15px] tracking-wider inline-flex items-center gap-3 hover:gap-4 transition-all duration-300">
            Enterprise Inquiry 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="#" className="px-10 py-4 rounded-full bg-black/[0.04] border border-black/[0.08] text-gray-700 hover:border-sky-400/25 hover:text-sky-600 font-light text-[15px] tracking-wider transition-all duration-300 inline-flex items-center gap-3 hover:shadow-lg">
            <PlayCircle className="w-4 h-4 text-sky-500" />
            Watch Demo
          </a>
          
          <a href="#" className="px-10 py-4 rounded-full bg-black/[0.04] border border-black/[0.08] text-gray-700 hover:border-sky-400/25 hover:text-sky-600 font-light text-[15px] tracking-wider transition-all duration-300 inline-flex items-center gap-3 hover:shadow-lg">
            <FileText className="w-4 h-4" />
            Case Studies
          </a>
        </div>

        {/* Final Quote Card */}
        <div className="card-static !rounded-3xl p-10 max-w-2xl mx-auto r-scale" 
             style={{ 
               background: 'rgba(255,255,255,0.92)', 
               boxShadow: '0 30px 80px -20px rgba(0,0,0,0.06)' 
             }}>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
            Enterprise knowledge should not just be searchable.<br />
            <span className="text-gradient-sky font-normal italic">It should be trustworthy.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
