"use client";

import { Target, Users, Zap, Heart } from 'lucide-react';

export default function CareersWhy() {
  return (
    <section className="py-32 relative overflow-hidden" id="why">
      <div className="orb w-[500px] h-[500px] bg-cyan-500/[0.04]" style={{ top: '20%', left: '-10%' }}></div>
      
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-emerald-600 block mb-4 r-fade">
            Why Join Us
          </span>
          <h2 className="display-section text-5xl md:text-7xl r-up">
            Work that <span className="text-gradient">matters</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="diagram-node r-left">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-900 tracking-tight mb-2">Mission-Critical AI</h3>
                <p className="text-[14px] text-gray-600 font-light leading-relaxed">
                  Build intelligence systems for healthcare, defense, aerospace. Where correctness and explainability matter more than speed. Where lives depend on being right.
                </p>
              </div>
            </div>
          </div>

          <div className="diagram-node r-right">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-900 tracking-tight mb-2">Move Fast, Learn Faster</h3>
                <p className="text-[14px] text-gray-600 font-light leading-relaxed">
                  Small team means you touch everything. Frontend, backend, ML, deployment, customer conversations. Generalists thrive here.
                </p>
              </div>
            </div>
          </div>

          <div className="diagram-node r-left">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-900 tracking-tight mb-2">No Nonsense Culture</h3>
                <p className="text-[14px] text-gray-600 font-light leading-relaxed">
                  No corporate politics. No useless meetings. We value output, discipline, and transparency. Work hard, then go home. Rinse, repeat.
                </p>
              </div>
            </div>
          </div>

          <div className="diagram-node r-right">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-900 tracking-tight mb-2">Kolkata First</h3>
                <p className="text-[14px] text-gray-600 font-light leading-relaxed">
                  We're building something meaningful right here in Kolkata. World-class technology, rooted in Bengal. Prove that you don't need Bangalore or Silicon Valley to build the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}