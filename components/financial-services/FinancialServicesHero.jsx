"use client";

import { ChevronRight, Landmark } from "lucide-react";

const tags = ["Data Residency", "Explainability", "Auditability", "Operational Control"];

export default function FinancialServicesHero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">


      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[400px] bg-emerald-900/[0.04]" style={{ top: "10%", left: "15%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 r-up">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm font-light transition-colors">Industries</a>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="text-emerald-700 text-sm font-light">Financial Services</span>
          </div>

          {/* Icon + Title */}
          <div className="flex items-center gap-5 mb-8 r-up">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-700/10 to-teal-600/5 border border-emerald-700/15 flex items-center justify-center">
              <Landmark className="w-8 h-8 text-emerald-700" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-emerald-700/60 tracking-[0.25em] uppercase">Industry</span>
              <h1 className="display-hero text-4xl lg:text-[3.5rem] text-gray-900">Financial Services</h1>
            </div>
          </div>

          <p className="text-2xl lg:text-[2rem] text-gray-700 leading-tight mb-6 font-light tracking-tight r-up">
            Explainable Intelligence for <span className="text-gradient font-normal">Regulated Finance</span>
          </p>
          <p className="text-lg text-gray-500 font-light leading-relaxed mb-8 max-w-3xl r-up">
            Financial institutions operate under the most stringent regulatory, audit, and risk requirements in
            the world. Most AI systems fail to meet fundamental expectations of financial regulators.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10 r-up">
            {tags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-slate-800/[0.05] border border-slate-800/[0.08] text-slate-600 text-sm font-light">
                {tag}
              </span>
            ))}
          </div>

          {/* Callout */}
          <div className="card-accent p-5 rounded-xl max-w-2xl r-up">
            <p className="text-emerald-800 font-normal text-[15px]">
              Genovation enables financial institutions to adopt AI without violating trust, compliance, or sovereignty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
