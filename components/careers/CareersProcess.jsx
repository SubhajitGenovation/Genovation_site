"use client";

import { MessageCircle, Code2, Building2, Handshake, Puzzle, ShieldCheck, Eye, Sparkles } from 'lucide-react';

export default function CareersProcess() {
  return (
    <section className="py-32 relative overflow-hidden" id="process">
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.04]" style={{ bottom: '10%', right: '5%' }}></div>
      
      <div className="relative max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-emerald-600 block mb-4 r-fade">
            Simple Process
          </span>
          <h2 className="display-section text-5xl md:text-7xl r-up">
            How we <span className="text-gradient">hire</span>
          </h2>
          <p className="text-base text-gray-500 font-light max-w-lg mx-auto mt-4 r-fade">
            No whiteboard puzzles. No brain teasers. We value discipline and transparency at every step — and we expect the same from you.
          </p>
        </div>

        {/* 4-step process */}
        <div className="r-up" id="processFlow">
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 border border-emerald-500/15 relative">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[11px] text-emerald-600 tracking-[0.15em]">01</span>
                <div className="flex-1 h-px bg-emerald-500/15"></div>
                <MessageCircle className="w-4 h-4 text-emerald-500/40" />
              </div>
              <h3 className="text-xl font-light text-gray-900 tracking-tight mb-2">Initial Chat</h3>
              <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                A quick, casual conversation to get to know you — your interests, what excites you, and what you&apos;re looking for. No pressure, just a real conversation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 border border-cyan-500/15 relative">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[11px] text-cyan-600 tracking-[0.15em]">02</span>
                <div className="flex-1 h-px bg-cyan-500/15"></div>
                <Code2 className="w-4 h-4 text-cyan-500/40" />
              </div>
              <h3 className="text-xl font-light text-gray-900 tracking-tight mb-2">Skill Assessment</h3>
              <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                A take-home practical problem relevant to the role. No trick questions or brain teasers — just real work that shows us how you think and build.
              </p>
            </div>

            {/* Connecting SVG between rows */}
            <div className="col-span-1 md:col-span-2 flex justify-center py-1">
              <svg width="200" height="24" viewBox="0 0 200 24" fill="none">
                <path d="M100,0 L100,24" stroke="url(#stepGrad)" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="4 3"/>
                <defs>
                  <linearGradient id="stepGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4"/>
                    <stop offset="100%" stopColor="#3b82f6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 border border-blue-500/15 relative">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[11px] text-blue-600 tracking-[0.15em]">03</span>
                <div className="flex-1 h-px bg-blue-500/15"></div>
                <Building2 className="w-4 h-4 text-blue-500/40" />
              </div>
              <h3 className="text-xl font-light text-gray-900 tracking-tight mb-2">On-Site Assessment</h3>
              <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                Come to our Kolkata office and work on a hands-on task with the team. See the workspace, meet the people, get a real feel for how we operate day-to-day.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-8 border border-violet-500/15 relative">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[11px] text-violet-600 tracking-[0.15em]">04</span>
                <div className="flex-1 h-px bg-violet-500/15"></div>
                <Handshake className="w-4 h-4 text-violet-500/40" />
              </div>
              <h3 className="text-xl font-light text-gray-900 tracking-tight mb-2">Chat with Management</h3>
              <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                A short, direct conversation with leadership. We want to understand your goals, and you should understand ours. Mutual fit matters more than anything.
              </p>
            </div>
          </div>
        </div>

        {/* What we value */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 r-up">
          <div className="bg-white/60 border border-emerald-500/10 rounded-xl p-5 text-center">
            <Puzzle className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
            <span className="text-[13px] text-gray-700 font-light block">Problem solving</span>
          </div>
          <div className="bg-white/60 border border-cyan-500/10 rounded-xl p-5 text-center">
            <ShieldCheck className="w-5 h-5 text-cyan-600 mx-auto mb-2" />
            <span className="text-[13px] text-gray-700 font-light block">Discipline</span>
          </div>
          <div className="bg-white/60 border border-blue-500/10 rounded-xl p-5 text-center">
            <Eye className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <span className="text-[13px] text-gray-700 font-light block">Transparency</span>
          </div>
          <div className="bg-white/60 border border-violet-500/10 rounded-xl p-5 text-center">
            <Sparkles className="w-5 h-5 text-violet-600 mx-auto mb-2" />
            <span className="text-[13px] text-gray-700 font-light block">Excitement for AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}