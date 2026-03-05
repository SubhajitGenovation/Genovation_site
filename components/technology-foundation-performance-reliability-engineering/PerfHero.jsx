"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Activity, ArrowRight, BookOpen } from "lucide-react";

const metrics = [
  { value: "99.9%",  label: "Uptime SLA",       color: "emerald" },
  { value: "<100ms", label: "P99 Latency",       color: "cyan" },
  { value: "0",      label: "Silent Failures",   color: "blue" },
  { value: "OS",     label: "Mentis Governed",   color: "violet", mono: true },
];

const colorMap = {
  emerald: { bg: "bg-emerald-500/[0.08]", border: "border-emerald-500/[0.15]", text: "text-emerald-600" },
  cyan:    { bg: "bg-cyan-500/[0.08]",    border: "border-cyan-500/[0.15]",    text: "text-cyan-600" },
  blue:    { bg: "bg-blue-500/[0.08]",    border: "border-blue-500/[0.15]",    text: "text-blue-600" },
  violet:  { bg: "bg-violet-500/[0.08]",  border: "border-violet-500/[0.15]",  text: "text-violet-600" },
};

const agents = [
  { name: "reasoning_agent_01",  status: "ACTIVE", dot: "bg-emerald-500", text: "text-emerald-600" },
  { name: "orchestrator_main",   status: "ACTIVE", dot: "bg-emerald-500", text: "text-emerald-600" },
  { name: "data_pipeline_02",    status: "BUSY",   dot: "bg-amber-500",   text: "text-amber-600" },
  { name: "executor_pool_03",    status: "ACTIVE", dot: "bg-emerald-500", text: "text-emerald-600" },
];

export default function PerfHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Split hero lines into chars
    document.querySelectorAll(".hero-line").forEach((line) => {
      const text = line.textContent;
      line.innerHTML = "";
      text.split("").forEach((c) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = c === " " ? "\u00A0" : c;
        line.appendChild(span);
      });
    });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to("#heroBadge",    { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".hero-line:first-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.4")
      .to(".hero-line:last-child .char",  { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.7")
      .to("#heroSub1 p",  { y: 0, duration: 1, ease: "power3.out" }, "-=0.4")
      .to("#heroSub2 p",  { y: 0, duration: 1, ease: "power3.out" }, "-=0.6")
      .to("#heroButtons", { opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .to("#heroMetrics", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[800px] h-[600px] bg-emerald-500/[0.06]" style={{ top: "-10%", right: "10%" }} />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.05]" style={{ bottom: "5%", left: "5%" }} />

      <div className="relative max-w-6xl mx-auto px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            {/* <div className="mb-8 opacity-0" id="heroBadge">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2]">
                <Activity className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Technology Foundation</span>
              </div>
            </div> */}

            {/* Title */}
            <h1 className="display-hero text-6xl md:text-7xl lg:text-[5.5rem] mb-8">
              <span className="hero-line">Performance &</span><br />
              <span className="hero-line text-gradient">Reliability</span>
            </h1>

            {/* Sub 1 */}
            <div className="overflow-hidden mb-6" id="heroSub1">
              <p className="text-xl md:text-2xl text-gray-600 font-light tracking-[-0.01em] leading-[1.4] translate-y-full">
                Intelligence that performs under real-world conditions.
              </p>
            </div>

            {/* Sub 2 */}
            <div className="overflow-hidden mb-10" id="heroSub2">
              <p className="text-[15px] text-gray-400 font-light leading-relaxed max-w-lg translate-y-full">
                Enterprise intelligence systems are not judged by demos. They are judged by uptime, predictability, and failure behavior. Genovation designs performance and reliability into the core of its technology foundation.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 mb-12 opacity-0" id="heroButtons">
              <button className="hero-cta-primary group px-7 py-3.5 rounded-full text-[15px] font-medium flex items-center gap-3">
                <span className="text-black flex items-center gap-3">
                  Performance Specs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="group px-7 py-3.5 rounded-full border border-black/[0.1] text-gray-700 text-[15px] font-light flex items-center gap-3 hover:border-emerald-400/25 hover:bg-black/[0.03] transition-all">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                Architecture Docs
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-3 opacity-0" id="heroMetrics">
              {metrics.map((m, i) => {
                const c = colorMap[m.color];
                return (
                  <div key={i} className={`text-center p-4 rounded-2xl ${c.bg} border ${c.border}`}>
                    <div className={`text-2xl font-light ${c.text} ${m.mono ? "font-mono" : ""}`}>{m.value}</div>
                    <div className="text-[9px] text-gray-500 font-light tracking-widest uppercase mt-1">{m.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: System Health Monitor Mock */}
          <div className="r-scale" id="heroMock">
            <div className="industry-mock" style={{ boxShadow: "0 40px 120px -30px rgba(16,185,129,0.12)" }}>
              <div className="mock-header">
                <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
                <span className="text-[9px] text-gray-500 font-mono ml-2">SYSTEM HEALTH MONITOR</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-dot-live" />
                  <span className="text-[8px] text-emerald-600 font-mono">HEALTHY</span>
                </div>
              </div>
              <div className="p-5">
                {/* Latency Chart */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-gray-500 font-light">LATENCY DISTRIBUTION (ms)</span>
                    <span className="text-[9px] text-emerald-600 font-mono">HEALTHY</span>
                  </div>
                  <svg viewBox="0 0 400 100" className="w-full">
                    <defs>
                      <linearGradient id="perfFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <line x1="10" y1="85" x2="390" y2="85" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5"/>
                    <line x1="10" y1="50" x2="390" y2="50" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" strokeDasharray="3"/>
                    <line x1="10" y1="25" x2="390" y2="25" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" strokeDasharray="3"/>
                    <line x1="10" y1="30" x2="390" y2="30" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.5"/>
                    <text x="385" y="27" textAnchor="end" fill="#f59e0b" fontSize="7" opacity="0.7">P99: 95ms</text>
                    <polygon points="30,65 70,58 110,62 150,48 190,52 230,45 270,53 310,40 350,48 380,42 380,85 30,85" fill="url(#perfFill)"/>
                    <polyline points="30,65 70,58 110,62 150,48 190,52 230,45 270,53 310,40 350,48 380,42" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="310" cy="40" r="3" fill="#34d399" opacity="0.8"/>
                    <circle cx="380" cy="42" r="3" fill="#34d399" opacity="0.8"/>
                    <text x="30" y="97" fill="rgba(0,0,0,0.3)" fontSize="7" fontFamily="monospace">-60s</text>
                    <text x="200" y="97" fill="rgba(0,0,0,0.3)" fontSize="7" fontFamily="monospace" textAnchor="middle">-30s</text>
                    <text x="380" y="97" fill="rgba(0,0,0,0.3)" fontSize="7" fontFamily="monospace" textAnchor="end">now</text>
                  </svg>
                </div>

                {/* Resource + Agent Status */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                    <span className="text-[9px] text-cyan-600 font-light">RESOURCE UTILIZATION</span>
                    <div className="mt-2 space-y-2">
                      {[["CPU","60%","w-[60%]","bg-cyan-400"],["MEM","45%","w-[45%]","bg-cyan-500"],["GPU","70%","w-[70%]","bg-cyan-600"],["I/O","30%","w-[30%]","bg-cyan-700/60"]].map(([label,val,w,bg],i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-0.5">
                            <span className="text-[8px] text-gray-500">{label}</span>
                            <span className="text-[8px] text-cyan-600 font-mono">{val}</span>
                          </div>
                          <div className="h-1 rounded-full bg-black/[0.05]">
                            <div className={`h-full ${w} rounded-full ${bg}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                    <span className="text-[9px] text-emerald-600 font-light">AGENT STATUS</span>
                    <div className="mt-2 space-y-1.5">
                      {agents.map((a, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                            <span className="text-[8px] text-gray-600">{a.name}</span>
                          </div>
                          <span className={`text-[7px] ${a.text} font-mono`}>{a.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reliability metrics */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[["99.97%","UPTIME"],["0","FAILURES"],["1.2s","MTTR"],["847h","MTBF"]].map(([v,l],i) => (
                    <div key={i} className="text-center p-2 rounded-lg bg-emerald-500/[0.06] border border-emerald-400/[0.12]">
                      <div className="text-sm font-light text-emerald-600">{v}</div>
                      <div className="text-[7px] text-gray-500">{l}</div>
                    </div>
                  ))}
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/[0.04] border border-emerald-400/[0.1]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 status-dot-live" />
                    <div>
                      <span className="text-[9px] text-gray-700 font-light">All Systems Operational</span>
                      <span className="text-[8px] text-gray-400 font-light ml-2">Last incident: 847h ago</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-[8px] text-emerald-600 font-mono">STABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
