"use client";

import { Cpu, ListFilter, ShieldCheck, Activity, Ban } from "lucide-react";

const controlCards = [
  { icon: <ListFilter className="w-5 h-5 text-violet-600" />, title: "Selects Model", sub: "Right model for each task" },
  { icon: <ShieldCheck className="w-5 h-5 text-violet-600" />, title: "Enforces Policies", sub: "Rules during execution" },
  { icon: <Activity className="w-5 h-5 text-violet-600" />, title: "Monitors Behavior", sub: "Real-time observation" },
  { icon: <Ban className="w-5 h-5 text-violet-600" />, title: "Prevents Uncontrolled", sub: "No ungoverned actions" },
];

export default function SlmIntegration() {
  return (
    <section className="py-48 relative" id="integration">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[400px] bg-violet-500/[0.06]" style={{ top: "10%", right: "15%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.2] mb-8 r-up">
            <Cpu className="w-3 h-3 text-violet-600" />
            <span className="text-violet-600 text-[11px] font-light tracking-[0.25em] uppercase">Integration</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            SLMs + Mentis OS =<br />
            <span className="text-gradient-violet">Controlled Intelligence</span>
          </h2>
          <p className="text-[15px] text-gray-500 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            SLMs do not operate in isolation. This combination enables enterprise-safe autonomy — without sacrificing control.
          </p>
        </div>

        {/* Integration Flow Mock */}
        <div className="r-scale mb-16">
          <div className="industry-mock" style={{ boxShadow: "0 30px 80px -20px rgba(139,92,246,0.08)" }}>
            <div className="mock-header">
              <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
              <span className="text-[9px] text-gray-500 font-mono ml-2">MENTIS OS + SLM INTEGRATION</span>
            </div>
            <div className="p-8">
              <svg viewBox="0 0 900 250" className="w-full">
                <text x="450" y="20" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="600" fontFamily="'Space Mono',monospace">GOVERNANCE AT EVERY STEP</text>
                <rect x="50" y="40" width="800" height="170" rx="16" fill="rgba(139,92,246,0.03)" stroke="rgba(139,92,246,0.2)" strokeWidth="2"/>
                <text x="100" y="60" fill="#7c3aed" fontSize="10" fontWeight="500">MENTIS OS</text>

                {/* Stage 1 */}
                <g transform="translate(150,125)">
                  <rect x="-50" y="-35" width="100" height="70" rx="10" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.25)" strokeWidth="1.5"/>
                  <text y="-12" textAnchor="middle" fill="#0891b2" fontSize="9" fontWeight="500">TASK ARRIVES</text>
                  <text y="2" textAnchor="middle" fill="#9ca3af" fontSize="7">Policy Check</text>
                  <circle cy="20" r="12" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5"/>
                  <text y="24" textAnchor="middle" fill="#0891b2" fontSize="8">✓</text>
                </g>
                <line x1="200" y1="125" x2="240" y2="125" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" strokeDasharray="4,3"/>
                <polygon points="245,125 238,121 238,129" fill="#7c3aed" opacity="0.6"/>

                {/* Stage 2 */}
                <g transform="translate(320,125)">
                  <rect x="-50" y="-35" width="100" height="70" rx="10" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5"/>
                  <text y="-12" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="500">MODEL SELECT</text>
                  <text y="2" textAnchor="middle" fill="#9ca3af" fontSize="7">Right model per task</text>
                  <g transform="translate(-18,20)"><rect x="-8" y="-8" width="16" height="16" rx="3" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/></g>
                  <g transform="translate(0,20)"><rect x="-8" y="-8" width="16" height="16" rx="3" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.35)" strokeWidth="1.5"/></g>
                  <g transform="translate(18,20)"><rect x="-8" y="-8" width="16" height="16" rx="3" fill="rgba(124,58,237,0.12)" stroke="rgba(124,58,237,0.3)" strokeWidth="1"/></g>
                </g>
                <line x1="370" y1="125" x2="410" y2="125" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" strokeDasharray="4,3"/>
                <polygon points="415,125 408,121 408,129" fill="#7c3aed" opacity="0.6"/>

                {/* Stage 3 */}
                <g transform="translate(490,125)">
                  <rect x="-50" y="-35" width="100" height="70" rx="10" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.3)" strokeWidth="2"/>
                  <text y="-12" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="500">EXECUTE</text>
                  <text y="2" textAnchor="middle" fill="#9ca3af" fontSize="7">Policy enforced</text>
                  <rect x="-25" y="10" width="50" height="20" rx="5" fill="rgba(139,92,246,0.1)"/>
                  <text y="24" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="500">SLM →</text>
                </g>
                <line x1="540" y1="125" x2="580" y2="125" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" strokeDasharray="4,3"/>
                <polygon points="585,125 578,121 578,129" fill="#7c3aed" opacity="0.6"/>

                {/* Stage 4 */}
                <g transform="translate(660,125)">
                  <rect x="-50" y="-35" width="100" height="70" rx="10" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5"/>
                  <text y="-12" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="500">MONITOR</text>
                  <text y="2" textAnchor="middle" fill="#9ca3af" fontSize="7">Real-time control</text>
                  <g transform="translate(0,22)">
                    {[[-25,-5,8,15],[-14,0,8,10],[-3,-8,8,18],[8,-2,8,12],[19,2,8,8]].map(([x,y,w,h],j) => (
                      <rect key={j} x={x} y={y} width={w} height={h} rx="2" fill={`rgba(16,185,129,${0.2 + j*0.05})`}/>
                    ))}
                  </g>
                </g>

                <text x="450" y="240" textAnchor="middle" fill="#9ca3af" fontSize="9">
                  Enterprise-safe autonomy · Full governance · Zero uncontrolled actions
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Control Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          {controlCards.map((c, i) => (
            <div key={i} className="card card-violet p-6 text-center r-up">
              <div className="flex justify-center mb-3">{c.icon}</div>
              <p className="text-[14px] text-gray-700 font-light">{c.title}</p>
              <p className="text-[11px] text-gray-500 font-light mt-1">{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
