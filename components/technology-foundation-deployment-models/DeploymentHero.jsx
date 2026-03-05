"use client";

import { Cpu } from "lucide-react";

export default function DeploymentHero() {
  return (
    <section
      className="relative flex items-center pt-24 pb-16 overflow-hidden"
      id="hero"
      style={{ minHeight: "100vh" }}
    >
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="orb" style={{ width: 500, height: 500, background: "rgba(99,102,241,0.06)", top: "-10%", left: "10%" }} />
      <div className="orb" style={{ width: 400, height: 400, background: "rgba(59,130,246,0.05)", bottom: "10%", right: "5%" }} />
      <div className="orb" style={{ width: 300, height: 300, background: "rgba(20,184,166,0.04)", top: "40%", left: "60%" }} />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Breadcrumb */}
        {/* <div className="flex items-center gap-2 text-[11px] mb-12 r-up">
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors font-light">Technology Foundation</a>
          <span className="text-gray-300">/</span>
          <span className="text-indigo-500 font-light">Deployment Models</span>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            {/* <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 r-up"
              style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.12)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-indigo-500 text-[10px] font-medium uppercase tracking-[0.2em]">Infrastructure Flexibility</span>
            </div> */}

            <h1 className="text-6xl md:text-[5.5rem] display-hero text-gray-800 mb-8 r-up">
              Deployment<br />
              <span className="text-gradient-indigo">Models</span>
            </h1>

            <p className="text-xl text-gray-500 mb-3 font-light r-up">
              Intelligence that adapts to your environment — not the other way around.
            </p>
            <p className="text-gray-400 mb-10 font-light text-sm leading-relaxed r-up">
              Genovation supports multiple deployment models without changing the intelligence layer, governance guarantees, or security posture. All powered by Mentis OS.
            </p>

            {/* Metrics */}
            <div className="flex items-center gap-8 mb-10 r-up">
              <div>
                <p className="text-3xl font-light text-gray-800">4</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1 font-mono">Models</p>
              </div>
              <div className="w-px h-12" style={{ background: "rgba(0,0,0,0.08)" }} />
              <div>
                <p className="text-3xl font-light text-indigo-500">100%</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1 font-mono">Parity</p>
              </div>
              <div className="w-px h-12" style={{ background: "rgba(0,0,0,0.08)" }} />
              <div>
                <p className="text-3xl font-light text-teal-500">0</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1 font-mono">External APIs</p>
              </div>
            </div>

            {/* Mentis OS Badge */}
            <div
              className="flex items-center gap-3 p-4 rounded-xl r-up"
              style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(99,102,241,0.08)" }}
              >
                <Cpu className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <p className="text-gray-800 font-medium text-sm">Powered by Mentis OS</p>
                <p className="text-gray-400 text-xs font-light">Unified control plane across all deployment models</p>
              </div>
            </div>
          </div>

          {/* Right – Architecture SVG */}
          <div className="relative r-right">
            <div className="card-no-hover p-6">
              <svg viewBox="0 0 480 420" className="w-full">
                <defs>
                  <pattern id="gridH" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(99,102,241,0.06)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="480" height="420" fill="url(#gridH)" rx="12" />
                <text x="240" y="22" textAnchor="middle" fill="#6366f1" fontSize="8" fontWeight="500" letterSpacing="0.15em" fontFamily="Space Mono, monospace">DEPLOYMENT ARCHITECTURE</text>

                {/* Application Layer */}
                <g transform="translate(30,40)">
                  <rect width="420" height="55" rx="8" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.15)" strokeWidth="1" />
                  <text x="15" y="18" fill="#d97706" fontSize="7" fontWeight="500" letterSpacing="0.1em">APPLICATION</text>
                  {[
                    [15, 75, "Enterprise Apps"],
                    [85, 60, "REST API"],
                    [155, 48, "SDK"],
                    [213, 60, "Webhooks"],
                    [283, 58, "Stream"],
                    [351, 58, "CLI"],
                  ].map(([x, w, label]) => (
                    <g key={label} transform={`translate(${x},32)`}>
                      <rect width={w} height="16" rx="3" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.15)" />
                      <text x={w / 2} y="11" textAnchor="middle" fill="#92400e" fontSize="6.5">{label}</text>
                    </g>
                  ))}
                </g>

                <line x1="240" y1="95" x2="240" y2="105" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="3 3" />

                {/* Governance Layer */}
                <g transform="translate(30,108)">
                  <rect width="420" height="55" rx="8" fill="rgba(20,184,166,0.04)" stroke="rgba(20,184,166,0.15)" strokeWidth="1" />
                  <text x="15" y="18" fill="#0d9488" fontSize="7" fontWeight="500" letterSpacing="0.1em">GOVERNANCE</text>
                  {[
                    [15, 75, "Policy Engine"],
                    [100, 70, "Audit Trail"],
                    [180, 80, "Explainability"],
                    [270, 65, "Oversight"],
                    [345, 65, "Compliance"],
                  ].map(([x, w, label]) => (
                    <g key={label} transform={`translate(${x},32)`}>
                      <rect width={w} height="16" rx="3" fill="rgba(20,184,166,0.06)" stroke="rgba(20,184,166,0.15)" />
                      <text x={w / 2} y="11" textAnchor="middle" fill="#115e59" fontSize="6.5">{label}</text>
                    </g>
                  ))}
                </g>

                <line x1="240" y1="163" x2="240" y2="173" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="3 3" />

                {/* Intelligence Layer */}
                <g transform="translate(30,176)">
                  <rect width="420" height="55" rx="8" fill="rgba(14,165,233,0.04)" stroke="rgba(14,165,233,0.15)" strokeWidth="1" />
                  <text x="15" y="18" fill="#0284c7" fontSize="7" fontWeight="500" letterSpacing="0.1em">INTELLIGENCE</text>
                  {[
                    [15, 75, "SLM Models"],
                    [100, 75, "Agent Runtime"],
                    [185, 70, "Reasoning"],
                    [265, 60, "Memory"],
                    [335, 75, "Orchestrator"],
                  ].map(([x, w, label]) => (
                    <g key={label} transform={`translate(${x},32)`}>
                      <rect width={w} height="16" rx="3" fill="rgba(14,165,233,0.06)" stroke="rgba(14,165,233,0.15)" />
                      <text x={w / 2} y="11" textAnchor="middle" fill="#0c4a6e" fontSize="6.5">{label}</text>
                    </g>
                  ))}
                </g>

                <line x1="240" y1="231" x2="240" y2="241" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="3 3" />

                {/* Mentis OS Layer */}
                <g transform="translate(30,244)">
                  <rect width="420" height="58" rx="8" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" />
                  <rect x="140" y="5" width="140" height="16" rx="4" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.2)" />
                  <text x="210" y="16" textAnchor="middle" fill="#4f46e5" fontSize="7.5" fontWeight="600" letterSpacing="0.08em" fontFamily="Space Mono, monospace">MENTIS OS</text>
                  {[
                    [15, 70, "Scheduler"],
                    [92, 72, "Resource Mgr"],
                    [171, 62, "Config"],
                    [240, 60, "Health"],
                    [307, 62, "Security"],
                    [376, 34, "Tele."],
                  ].map(([x, w, label]) => (
                    <g key={label} transform={`translate(${x},33)`}>
                      <rect width={w} height="16" rx="3" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.18)" />
                      <text x={w / 2} y="11" textAnchor="middle" fill="#3730a3" fontSize="6.5">{label}</text>
                    </g>
                  ))}
                </g>

                <line x1="240" y1="302" x2="240" y2="312" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="3 3" />

                {/* Infrastructure Layer */}
                <g transform="translate(30,315)">
                  <rect width="420" height="75" rx="8" fill="rgba(236,72,153,0.03)" stroke="rgba(236,72,153,0.12)" strokeWidth="1" />
                  <text x="15" y="18" fill="#be185d" fontSize="7" fontWeight="500" letterSpacing="0.1em">INFRASTRUCTURE</text>
                  {[
                    { x: 15,  label: "On-Premise",   sub: "Customer Infra", bar: "#6366f1", stroke: "rgba(99,102,241,0.2)",  tc: "#4338ca" },
                    { x: 118, label: "Private Cloud", sub: "Isolated VPC",   bar: "#0ea5e9", stroke: "rgba(14,165,233,0.2)",  tc: "#0369a1" },
                    { x: 221, label: "Hybrid",        sub: "Unified Gov.",   bar: "#14b8a6", stroke: "rgba(20,184,166,0.2)",  tc: "#115e59" },
                    { x: 324, label: "Air-Gapped",    sub: "Zero Network",   bar: "#ec4899", stroke: "rgba(236,72,153,0.2)", tc: "#9d174d" },
                  ].map((m) => (
                    <g key={m.label} transform={`translate(${m.x},30)`}>
                      <rect width="95" height="34" rx="5" fill="white" stroke={m.stroke} />
                      <rect width="95" height="3" rx="2" fill={m.bar} />
                      <text x="47.5" y="17" textAnchor="middle" fill={m.tc} fontSize="7" fontWeight="500">{m.label}</text>
                      <text x="47.5" y="27" textAnchor="middle" fill="#9ca3af" fontSize="5.5">{m.sub}</text>
                    </g>
                  ))}
                </g>

                <rect x="90" y="400" width="300" height="16" rx="4" fill="rgba(99,102,241,0.04)" stroke="rgba(99,102,241,0.1)" />
                <text x="240" y="412" textAnchor="middle" fill="#6b7280" fontSize="7">Identical Stack · No Feature Degradation · Configuration-Driven</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}