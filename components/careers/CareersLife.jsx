"use client";

import { Image, Users, Monitor, MapPin } from 'lucide-react';

export default function CareersLife() {
  return (
    <section className="py-32 relative overflow-hidden" id="life">
      <div className="orb w-[400px] h-[400px] bg-violet-500/[0.04]" style={{ top: '20%', right: '-5%' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-emerald-600 block mb-4 r-fade">
              Life at Genovation
            </span>
            <h2 className="display-section text-5xl md:text-7xl r-up">
              The <span className="text-gradient">vibe</span>
            </h2>
          </div>
          <p className="text-base text-gray-500 font-light max-w-sm text-right hidden md:block r-fade">
            A small team in Sector V, Kolkata — solving hard problems, learning fast, building the future of AI.
          </p>
        </div>

        <div className="bento-grid">
          {/* Office space */}
          <div className="img-placeholder col-span-12 md:col-span-7 row-span-4 r-up" style={{ minHeight: '340px' }}>
            <Image className="w-8 h-8 text-gray-300 relative z-10" />
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase relative z-10">
              Office space — Arch Square X2, Sector V
            </span>
          </div>

          {/* The team */}
          <div className="img-placeholder col-span-12 md:col-span-5 row-span-4 r-up" style={{ minHeight: '340px' }}>
            <Users className="w-8 h-8 text-gray-300 relative z-10" />
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase relative z-10">
              The team
            </span>
          </div>

          {/* Workstations */}
          <div className="img-placeholder col-span-12 md:col-span-4 row-span-3 r-up" style={{ minHeight: '240px' }}>
            <Monitor className="w-6 h-6 text-gray-300 relative z-10" />
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase relative z-10">
              Workstations
            </span>
          </div>

          {/* Quote card */}
          <div className="col-span-12 md:col-span-4 row-span-3 bg-[#1a1a2e] rounded-2xl p-8 flex flex-col justify-between r-up" style={{ minHeight: '240px' }}>
            <p className="text-white/80 text-lg font-light leading-relaxed italic">
              &quot;Discipline is choosing what you want most over what you want right now. That&apos;s how breakthroughs happen.&quot;
            </p>
            <span className="text-emerald-400 font-mono text-[11px] tracking-wider">
              — GENOVATION FOUNDING PRINCIPLE
            </span>
          </div>

          {/* Location */}
          <div className="img-placeholder col-span-12 md:col-span-4 row-span-3 r-up" style={{ minHeight: '240px' }}>
            <MapPin className="w-6 h-6 text-gray-300 relative z-10" />
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase relative z-10">
              Kolkata, West Bengal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}