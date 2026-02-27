"use client";
import { useEffect } from "react";
import { AlertTriangle, ShieldCheck, X, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ProblemSolution() {
  useEffect(() => {
    gsap.utils.toArray(".r-left").forEach((el) =>
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } })
    );
    gsap.utils.toArray(".r-right").forEach((el) =>
      gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } })
    );
  }, []);

  const PROBLEMS = [
    "Raw data leaves your control",
    "Trust-based access with no enforcement",
    "Every party is an attack surface",
    "Breach = complete data loss",
  ];
  const SOLUTIONS = [
    "Only encrypted vaults leave your control",
    "Cryptographic enforcement, not contracts",
    "Compute without decryption",
    "Breach = data still protected",
  ];

  const SpiderDiagram = ({ color, isVault }) => (
    <svg viewBox="0 0 300 180" className="w-full">
      <circle cx="150" cy="90" r="30"
        fill={isVault ? "rgba(139,92,246,0.1)" : "rgba(239,68,68,0.08)"}
        stroke={isVault ? "rgba(139,92,246,0.35)" : "rgba(239,68,68,0.25)"}
        strokeWidth={isVault ? "2" : "1.5"} />
      <text x="150" y="87" textAnchor="middle" fill={isVault ? "#7c3aed" : "#dc2626"} fontSize="8" fontWeight="500">
        {isVault ? "CIPHER" : "YOUR"}
      </text>
      <text x="150" y="97" textAnchor="middle" fill={isVault ? "#7c3aed" : "#dc2626"} fontSize="8" fontWeight="500">
        {isVault ? "VAULT" : "DATA"}
      </text>
      {isVault ? (
        <g transform="translate(150,108)">
          <path d="M-4,-6 L-4,-8 a4,4 0 0,1 8,0 L4,-6" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="-5" y="-6" width="10" height="8" rx="1.5" fill="#8b5cf6" />
          <circle cx="0" cy="-2" r="1" fill="rgba(255,255,255,0.8)" />
        </g>
      ) : null}
      <g stroke={isVault ? "rgba(139,92,246,0.3)" : "rgba(239,68,68,0.2)"} strokeWidth={isVault ? "1.5" : "1"}
        strokeDasharray="4 3" className={isVault ? "flow-line" : ""}>
        <line x1="150" y1="60" x2="150" y2="25" />
        <line x1="180" y1="90" x2="250" y2="90" />
        <line x1="120" y1="90" x2="50" y2="90" />
        <line x1="170" y1="115" x2="220" y2="155" />
        <line x1="130" y1="115" x2="80" y2="155" />
      </g>
      {[
        { cx: 150, cy: 15, label: "Vendor" },
        { cx: 260, cy: 90, label: "Partner" },
        { cx: 40, cy: 90, label: "Analyst" },
        { cx: 230, cy: 165, label: "Cloud" },
        { cx: 70, cy: 165, label: "Research" },
      ].map(({ cx, cy, label }) => (
        <g key={label}>
          <circle cx={cx} cy={cy} r="12"
            fill={isVault ? "rgba(139,92,246,0.06)" : "rgba(0,0,0,0.03)"}
            stroke={isVault ? "rgba(139,92,246,0.2)" : "rgba(0,0,0,0.1)"} />
          <text x={cx} y={cy + 4} textAnchor="middle" fill={isVault ? "#7c3aed" : "#9ca3af"} fontSize="7">{label}</text>
        </g>
      ))}
    </svg>
  );

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[350px] h-[350px] bg-red-400/[0.04]" style={{ top: "10%", left: "-5%" }} />
      <div className="orb w-[400px] h-[400px] bg-violet-400/[0.05]" style={{ bottom: "5%", right: "-5%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] text-violet-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">
            The Fundamental Shift
          </p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 r-up">
            From Trust to <span className="text-gradient-violet">Mathematics</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="r-left">
            <div className="rounded-2xl p-8 bg-white/60 border border-red-500/[0.15] hover:border-red-500/[0.3] transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/[0.08] flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl font-light text-gray-800">Traditional Data Sharing</h3>
              </div>
              <div className="mb-6 p-4 rounded-xl bg-[#f5f3f0]">
                <SpiderDiagram isVault={false} />
              </div>
              <div className="space-y-2.5">
                {PROBLEMS.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-gray-500 font-light">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" /><span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="r-right">
            <div className="rounded-2xl p-8 bg-white/80 border border-violet-500/[0.2] hover:border-violet-500/[0.35] transition-all shadow-lg shadow-violet-500/[0.04]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/[0.1] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-violet-500" />
                </div>
                <h3 className="text-xl font-light text-gray-800">CipherVault Approach</h3>
              </div>
              <div className="mb-6 p-4 rounded-xl bg-[#f5f3f0]">
                <SpiderDiagram isVault={true} />
              </div>
              <div className="space-y-2.5">
                {SOLUTIONS.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                    <Check className="w-4 h-4 text-violet-500 flex-shrink-0" /><span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
