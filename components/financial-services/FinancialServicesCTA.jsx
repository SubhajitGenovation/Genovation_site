"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function FinancialServicesCTA() {
  const router = useRouter();

  return (
    <section className="py-40 relative overflow-hidden" id="cta">
      <div className="orb w-[600px] h-[600px] bg-emerald-900/[0.04]" style={{ top: "10%", left: "25%" }} />
      <div className="absolute inset-0 mesh-bg opacity-[0.12]" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="display-hero text-5xl md:text-7xl text-gray-900 mb-6 r-up">
          Engage <span className="text-gradient">With Us</span>
        </h2>
        <p className="text-lg text-gray-500 font-light mb-12 max-w-2xl mx-auto r-up">
          If your institution is exploring AI adoption under regulatory constraints, we welcome a serious discussion.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 r-up">
          <button 
            onClick={() => router.push('/talk-to-sales')}
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-800 to-teal-700 text-white text-[15px] font-normal flex items-center gap-3 hover:shadow-2xl hover:shadow-emerald-900/20 transition-all"
          >
            Financial Services Inquiries
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[15px] font-light transition-all hover:bg-black/[0.08]">
            Enterprise Deployment
          </button>
        </div>

        <div className="card-accent p-8 rounded-2xl r-up">
          <p className="text-xl text-gray-700 font-light leading-relaxed">
            "In financial services, intelligence must be{" "}
            <span className="text-gradient font-normal">explainable</span>
            {" "}— or it cannot be trusted. Genovation is built for that reality."
          </p>
        </div>
      </div>
    </section>
  );
}