"use client";

import { ArrowRight } from 'lucide-react';

export default function CareersCTA() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden" id="cta">
        <div 
          className="orb w-[800px] h-[600px] bg-gradient-to-br from-emerald-500/[0.06] via-cyan-500/[0.03] to-violet-500/[0.06]" 
          style={{ top: '10%', left: '15%' }}
        ></div>
        
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <h2 className="display-hero text-6xl md:text-8xl lg:text-[8rem] mb-10 r-scale">
            Ready?
          </h2>
          <p className="text-xl text-gray-500 font-light mb-12 leading-relaxed max-w-xl mx-auto r-up">
            If you&apos;re curious, humble, and hungry — we&apos;d love to hear from you. No cover letter needed. Just show us what you&apos;ve built.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
            <a 
              href="mailto:careers@genovation.ai" 
              className="group px-10 py-5 rounded-full bg-[#1a1a2e] text-white text-[15px] font-light flex items-center gap-3 hover:bg-black transition-all hover:shadow-2xl hover:shadow-black/10"
            >
              careers@genovation.ai 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <p className="text-[13px] text-gray-400 font-light mt-10">
            Kolkata, India · Building AI for the world
          </p>
        </div>
      </section>

    </>
  );
}