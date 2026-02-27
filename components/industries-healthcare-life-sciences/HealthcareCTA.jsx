"use client";

export default function HealthcareCTA() {
  return (
    <>
      <div className="divider-enhanced"></div>
      
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-10"></div>
        <div className="orb w-[500px] h-[500px] bg-teal-400/[0.04] bottom-[10%] right-[-10%]"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] text-teal-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Get Started</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-6 r-up">
            Deploy Healthcare Intelligence <span className="text-gradient-teal">On Your Terms</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed r-up">
            See how Genovation delivers sovereign AI for clinical decision support, research, and operations — with complete data control and regulatory compliance.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 r-up">
            <button className="hero-cta-primary px-8 py-3.5 rounded-full text-white text-sm font-light tracking-wider">
              Schedule Healthcare Demo
            </button>
            <button className="px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-gray-700 hover:border-teal-500/30 text-sm font-light tracking-wider transition-all">
              Download White Paper
            </button>
            <button className="px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-gray-700 hover:border-teal-500/30 text-sm font-light tracking-wider transition-all">
              Research Collaboration
            </button>
          </div>
          
          <div className="p-8 rounded-2xl bg-teal-500/[0.04] border border-teal-500/[0.12] r-up">
            <p className="text-xl text-gray-700 font-light leading-relaxed">
              &quot;In healthcare and life sciences, intelligence must{' '}
              <span className="text-gradient-teal font-medium">protect trust as carefully as it advances discovery</span>.&quot;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}