"use client";

import { ArrowDown } from 'lucide-react';

export default function CareersHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24" id="hero">
      <div className="orb w-[600px] h-[400px] bg-emerald-500/[0.06]" style={{ top: '10%', right: '20%' }}></div>
      <div className="orb w-[400px] h-[400px] bg-violet-500/[0.04]" style={{ bottom: '5%', left: '5%' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8 r-fade" id="heroBadge">
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-emerald-600">
                We&apos;re hiring in Kolkata
              </span>
            </div>
            
            <h1 className="display-hero text-6xl md:text-[5.5rem] lg:text-[7rem] mb-8 r-up" id="heroTitle">
              Come build<br />
              <span className="text-gradient">the future</span><br />
              with us.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-lg mb-10 r-up">
              We&apos;re a small AI company building breakthrough technology. We don&apos;t care about your degree or your English — we care about your curiosity and your hunger to learn.
            </p>
            
            <div className="flex items-center gap-5 r-up">
              <a href="#roles" className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 text-black text-[15px] font-medium flex items-center gap-3 hover:shadow-xl hover:shadow-emerald-500/15 transition-all">
                See Open Roles <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#life" className="text-[15px] text-gray-500 font-light hover:text-gray-900 transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-emerald-400">
                Life here
              </a>
            </div>
          </div>
          
          {/* Right: Team Constellation SVG */}
          <div className="relative r-scale" id="heroDiagram">
            <svg viewBox="0 0 500 500" className="w-full max-w-lg mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Connection Lines */}
              <line x1="250" y1="140" x2="130" y2="260" stroke="url(#cg1)" strokeWidth="1.5" strokeOpacity="0.25" className="flow-path"/>
              <line x1="250" y1="140" x2="370" y2="260" stroke="url(#cg1)" strokeWidth="1.5" strokeOpacity="0.25" className="flow-path"/>
              <line x1="130" y1="260" x2="190" y2="390" stroke="url(#cg2)" strokeWidth="1.5" strokeOpacity="0.2" className="flow-path"/>
              <line x1="370" y1="260" x2="310" y2="390" stroke="url(#cg2)" strokeWidth="1.5" strokeOpacity="0.2" className="flow-path"/>
              <line x1="130" y1="260" x2="370" y2="260" stroke="url(#cg1)" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4" className="flow-path"/>
              <line x1="190" y1="390" x2="310" y2="390" stroke="url(#cg2)" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4" className="flow-path"/>
              
              {/* Gradients */}
              <defs>
                <linearGradient id="cg1">
                  <stop offset="0%" stopColor="#10b981"/>
                  <stop offset="100%" stopColor="#06b6d4"/>
                </linearGradient>
                <linearGradient id="cg2">
                  <stop offset="0%" stopColor="#06b6d4"/>
                  <stop offset="100%" stopColor="#8b5cf6"/>
                </linearGradient>
              </defs>
              
              {/* Nodes */}
              <g className="node-circle">
                <circle cx="250" cy="140" r="48" fill="white" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4"/>
                <circle cx="250" cy="140" r="4" fill="#10b981"/>
                <text x="250" y="133" textAnchor="middle" fontFamily="Space Mono" fontSize="9" fill="#10b981" letterSpacing="0.1em">RESEARCH</text>
                <text x="250" y="152" textAnchor="middle" fontFamily="Urbanist" fontSize="11" fill="#6b7280" fontWeight="300">AI / ML</text>
              </g>
              
              <g className="node-circle">
                <circle cx="130" cy="260" r="48" fill="white" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4"/>
                <circle cx="130" cy="260" r="4" fill="#06b6d4"/>
                <text x="130" y="253" textAnchor="middle" fontFamily="Space Mono" fontSize="9" fill="#06b6d4" letterSpacing="0.1em">ENGINEERING</text>
                <text x="130" y="272" textAnchor="middle" fontFamily="Urbanist" fontSize="11" fill="#6b7280" fontWeight="300">Full-Stack</text>
              </g>
              
              <g className="node-circle">
                <circle cx="370" cy="260" r="48" fill="white" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.4"/>
                <circle cx="370" cy="260" r="4" fill="#3b82f6"/>
                <text x="370" y="253" textAnchor="middle" fontFamily="Space Mono" fontSize="9" fill="#3b82f6" letterSpacing="0.1em">PRODUCT</text>
                <text x="370" y="272" textAnchor="middle" fontFamily="Urbanist" fontSize="11" fill="#6b7280" fontWeight="300">Strategy</text>
              </g>
              
              <g className="node-circle">
                <circle cx="190" cy="390" r="42" fill="white" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.4"/>
                <circle cx="190" cy="390" r="4" fill="#8b5cf6"/>
                <text x="190" y="383" textAnchor="middle" fontFamily="Space Mono" fontSize="8" fill="#8b5cf6" letterSpacing="0.1em">FOUNDERS</text>
                <text x="190" y="400" textAnchor="middle" fontFamily="Urbanist" fontSize="11" fill="#6b7280" fontWeight="300">Office</text>
              </g>
              
              <g className="node-circle">
                <circle cx="310" cy="390" r="42" fill="white" stroke="#fbbf24" strokeWidth="1.5" strokeOpacity="0.4"/>
                <circle cx="310" cy="390" r="4" fill="#fbbf24"/>
                <text x="310" y="383" textAnchor="middle" fontFamily="Space Mono" fontSize="8" fill="#d97706" letterSpacing="0.1em">INTERNS</text>
                <text x="310" y="400" textAnchor="middle" fontFamily="Urbanist" fontSize="11" fill="#6b7280" fontWeight="300">All Teams</text>
              </g>
              
              {/* Decorative Dots */}
              <circle cx="60" cy="180" r="3" fill="#10b981" opacity="0.3" className="flow-dot"/>
              <circle cx="440" cy="170" r="2" fill="#3b82f6" opacity="0.25" className="flow-dot"/>
              <circle cx="80" cy="400" r="2.5" fill="#8b5cf6" opacity="0.2" className="flow-dot"/>
              <circle cx="420" cy="420" r="3" fill="#06b6d4" opacity="0.2" className="flow-dot"/>
              <circle cx="250" cy="50" r="2" fill="#10b981" opacity="0.3" className="flow-dot"/>
              <circle cx="250" cy="460" r="2" fill="#fbbf24" opacity="0.25" className="flow-dot"/>
            </svg>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">Team Structure</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Ribbon */}
        <div className="mt-20 pt-8 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-8 r-fade" id="heroRibbon">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="font-mono text-[11px] text-gray-500 tracking-wide">KOLKATA, INDIA</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
            <span className="font-mono text-[11px] text-gray-500 tracking-wide">SKILLS-FIRST HIRING</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="font-mono text-[11px] text-gray-500 tracking-wide">NO DEGREE REQUIRED</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-violet-500"></div>
            <span className="font-mono text-[11px] text-gray-500 tracking-wide">BENGALI WELCOME</span>
          </div>
        </div>
      </div>
    </section>
  );
}