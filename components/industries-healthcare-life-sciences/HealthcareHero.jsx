"use client";

import { Stethoscope } from 'lucide-react';

export default function HealthcareHero() {
  return (
    <>

      {/* Hero Section */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-20"></div>
        <div className="orb w-[600px] h-[600px] bg-teal-400/[0.06] top-[-10%] right-[-8%]"></div>
        <div className="orb w-[450px] h-[450px] bg-cyan-400/[0.04] bottom-[10%] left-[-5%]"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-6 r-up">
            <div className="px-4 py-1.5 rounded-full bg-teal-500/[0.08] border border-teal-500/[0.15] flex items-center gap-2">
              <Stethoscope className="w-3.5 h-3.5 text-teal-500" />
              <span className="text-teal-600 text-[10px] font-light tracking-[0.25em] uppercase">Healthcare & Life Sciences</span>
            </div>
          </div>
          
          <h1 className="text-[3.5rem] md:text-[5rem] display-hero text-gray-800 mb-6 r-up leading-none">
            Intelligence that <span className="text-gradient-teal">protects trust</span> while advancing discovery
          </h1>
          
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto mb-10 leading-relaxed r-up">
            Sovereign AI for healthcare and life sciences. On-premise deployment, HIPAA compliance, complete audit trails. 
            Your patient data never leaves your infrastructure.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 r-up">
            <button className="hero-cta-primary px-8 py-3.5 rounded-full text-white text-sm font-light tracking-wider">
              Schedule a Demo
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white border border-black/[0.08] text-gray-700 hover:border-teal-500/30 text-sm font-light tracking-wider transition-all">
              View Architecture
            </button>
          </div>
        </div>
      </section>
    </>
  );
}