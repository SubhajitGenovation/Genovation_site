"use client";

export default function GovArchitecture() {
  const checks = [
    {
      title: "Sovereign, on-premise deployment",
      sub: "Data never leaves government infrastructure",
    },
    {
      title: "FedRAMP and compliance-ready",
      sub: "Built for government security standards",
    },
    {
      title: "Explainable outputs for oversight",
      sub: "Every decision traceable and auditable",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="architecture">
      <div className="orb" style={{ width: 600, height: 400, background: "rgba(99,102,241,0.04)", top: "10%", left: "10%" }} />
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 r-up"
              style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)" }}
            >
              <svg className="w-3 h-3 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-blue-600 text-[11px] font-light tracking-[0.25em] uppercase">Our Approach</span>
            </div>
            <h2 className="display-section text-5xl md:text-6xl r-up">
              Sovereign<br />
              <span className="text-gradient-blue">Architecture</span>
            </h2>
            <p className="text-lg text-gray-500 font-light mt-6 mb-10 r-up">
              Genovation delivers enterprise intelligence powered by Mentis OS, designed for government security and accountability requirements.
            </p>
            <div className="space-y-4 mb-8">
              {checks.map((c) => (
                <div key={c.title} className="flex items-start gap-4 r-up">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
                  >
                    <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium text-[15px]">{c.title}</p>
                    <p className="text-[13px] text-gray-400 font-light">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Architecture Diagram */}
          <div className="r-right">
            <div className="diagram-card p-8" style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 20,
              backdropFilter: "blur(4px)",
            }}>
              <svg viewBox="0 0 400 450" className="w-full">
                <defs>
                  <linearGradient id="blueG" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.04" />
                  </linearGradient>
                  <linearGradient id="govG" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.04" />
                  </linearGradient>
                </defs>
                <text x="200" y="20" textAnchor="middle" fill="#9ca3af" fontSize="8.5" letterSpacing="0.15em" fontFamily="Space Mono">SOVEREIGN GOVERNMENT ARCHITECTURE</text>
                <rect x="15" y="35" width="370" height="400" rx="14" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="2" strokeDasharray="8,4" />
                <text x="200" y="55" textAnchor="middle" fill="#2563eb" fontSize="9" fontWeight="500">SOVEREIGN DATA BOUNDARY</text>

                {/* Data Sources */}
                <g transform="translate(30,70)">
                  <rect x="0" y="0" width="340" height="85" rx="10" fill="url(#blueG)" stroke="rgba(59,130,246,0.25)" strokeWidth="1.5" />
                  <text x="170" y="20" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="500">GOVERNMENT DATA SOURCES</text>
                  {[["Citizen","Records",10],["Policy &","Regulations",90],["Agency","Systems",170],["Public","Records",250]].map(([l1,l2,x]) => (
                    <g key={l1} transform={`translate(${x},30)`}>
                      <rect width="70" height="42" rx="6" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.15)" />
                      <text x="35" y="18" textAnchor="middle" fill="#3b82f6" fontSize="7">{l1}</text>
                      <text x="35" y="30" textAnchor="middle" fill="#6b7280" fontSize="7">{l2}</text>
                    </g>
                  ))}
                </g>

                {/* Arrow 1 */}
                <path d="M200 160 L200 180" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
                <polygon points="200,185 195,175 205,175" fill="rgba(59,130,246,0.3)" />

                {/* Security Layer */}
                <g transform="translate(30,190)">
                  <rect width="340" height="45" rx="8" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" />
                  <text x="170" y="18" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="500">SECURITY &amp; COMPLIANCE LAYER</text>
                  <text x="170" y="32" textAnchor="middle" fill="#9ca3af" fontSize="7">FedRAMP · FISMA · Privacy Act · FOIA Ready</text>
                </g>

                {/* Arrow 2 */}
                <path d="M200 240 L200 260" stroke="rgba(16,185,129,0.3)" strokeWidth="2" />
                <polygon points="200,265 195,255 205,255" fill="rgba(16,185,129,0.3)" />

                {/* Mentis OS */}
                <g transform="translate(30,270)">
                  <rect width="340" height="95" rx="12" fill="url(#govG)" stroke="rgba(29,78,216,0.25)" strokeWidth="1.5" />
                  <text x="170" y="24" textAnchor="middle" fill="#1d4ed8" fontSize="12" fontWeight="600">MENTIS OS</text>
                  {[["Citizen Services","Benefits, 311",10],["Policy Analysis","Regulations, Law",120],["FOIA & Records","Processing",230]].map(([t,s,x]) => (
                    <g key={t} transform={`translate(${x},38)`}>
                      <rect width="100" height="45" rx="6" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.15)" />
                      <text x="50" y="18" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="500">{t}</text>
                      <text x="50" y="32" textAnchor="middle" fill="#9ca3af" fontSize="7">{s}</text>
                    </g>
                  ))}
                </g>

                {/* Arrow 3 */}
                <path d="M200 370 L200 390" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
                <polygon points="200,395 195,385 205,385" fill="rgba(59,130,246,0.3)" />

                {/* Users */}
                <g transform="translate(30,400)">
                  <rect width="340" height="30" rx="6" fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.15)" />
                  {[["Citizens",60],["Staff",130],["Analysts",200],["Leadership",280]].map(([label,x]) => (
                    <text key={label} x={x} y="20" textAnchor="middle" fill="#3b82f6" fontSize="7">{label}</text>
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}