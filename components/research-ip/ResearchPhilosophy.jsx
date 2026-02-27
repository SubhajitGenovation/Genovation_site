"use client";
import { Compass, Database, FileSearch, ShieldCheck } from "lucide-react";

export default function ResearchPhilosophy() {
  return (
    <section className="py-32 relative overflow-hidden" id="philosophy">
      <div className="orb w-[600px] h-[500px] bg-indigo-500/[0.04]" style={{ top: "10%", left: "15%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/[0.1] border border-indigo-500/[0.15] mb-8 r-up">
            <Compass className="w-3 h-3 text-indigo-500" />
            <span className="text-indigo-500 text-[11px] font-light tracking-[0.25em] uppercase">Our Approach</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Research<br /><span className="text-gradient">Philosophy</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Three foundational principles guide every research decision — intersecting to create intelligence systems that enterprises can actually trust.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Venn Diagram */}
          <div className="diagram-card p-8 r-left">
            <svg viewBox="0 0 440 360" className="w-full">
              <circle cx="175" cy="145" r="100" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5"/>
              <circle cx="265" cy="145" r="100" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5"/>
              <circle cx="220" cy="230" r="100" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5"/>
              <circle cx="220" cy="175" r="30" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5"/>
              <text x="135" y="92" textAnchor="middle" fill="#4f46e5" fontSize="10" fontWeight="600" fontFamily="Urbanist">DATA</text>
              <text x="135" y="105" textAnchor="middle" fill="#6366f1" fontSize="9" fontFamily="Urbanist">SOVEREIGNTY</text>
              <text x="305" y="92" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="600" fontFamily="Urbanist">EXPLAINABLE</text>
              <text x="305" y="105" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="Urbanist">DECISIONS</text>
              <text x="220" y="305" textAnchor="middle" fill="#0891b2" fontSize="10" fontWeight="600" fontFamily="Urbanist">LONG-TERM</text>
              <text x="220" y="318" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="Urbanist">SECURITY</text>
              <text x="220" y="172" textAnchor="middle" fill="#1a1a2e" fontSize="9" fontWeight="700" fontFamily="Urbanist">GENOVATION</text>
              <text x="220" y="184" textAnchor="middle" fill="#4f46e5" fontSize="7.5" fontFamily="Urbanist">RESEARCH</text>
            </svg>
          </div>

          {/* Philosophy Points */}
          <div className="space-y-5">
            <div className="card p-6 r-right" style={{ borderColor: "rgba(99,102,241,0.2)", borderRadius: "16px" }}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/[0.1] border border-indigo-500/[0.2] flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1.5">Data Cannot Leave Boundaries</h3>
                  <p className="text-[15px] text-gray-500 font-light leading-relaxed">Organizations require intelligence that operates within strict data sovereignty constraints. Our research enables computation without exposure.</p>
                </div>
              </div>
            </div>

            <div className="card card-violet p-6 r-right" style={{ borderColor: "rgba(139,92,246,0.2)", borderRadius: "16px" }}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-violet-500/[0.1] border border-violet-500/[0.2] flex items-center justify-center flex-shrink-0">
                  <FileSearch className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1.5">Decisions Must Be Auditable</h3>
                  <p className="text-[15px] text-gray-500 font-light leading-relaxed">Every output traced to source data. Every action logged and validated. Every decision explainable to auditors and regulators.</p>
                </div>
              </div>
            </div>

            <div className="card card-cyan p-6 r-right" style={{ borderColor: "rgba(6,182,212,0.2)", borderRadius: "16px" }}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/[0.1] border border-cyan-500/[0.2] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1.5">Security for Decades</h3>
                  <p className="text-[15px] text-gray-500 font-light leading-relaxed">Security assumptions must hold against future threat models, not just today's. We build for post-quantum resilience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}