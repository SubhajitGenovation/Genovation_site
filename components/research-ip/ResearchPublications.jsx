"use client";
import { BookOpen, Presentation, FileText, ShieldAlert } from "lucide-react";

export default function ResearchPublications() {
  return (
    <section className="py-32 relative overflow-hidden" id="publications">
      <div className="orb w-[600px] h-[400px] bg-violet-500/[0.04]" style={{ bottom: "10%", right: "10%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="r-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.15] mb-6">
              <BookOpen className="w-3 h-3 text-violet-500" />
              <span className="text-violet-500 text-[11px] font-light tracking-[0.25em] uppercase">Responsible Disclosure</span>
            </div>
            <h2 className="text-4xl font-light text-gray-900 tracking-tight mb-4">Research &amp; Publications</h2>
            <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-8">Where appropriate, we contribute to the broader research ecosystem through publications and technical documentation — while protecting our core intellectual property.</p>

            <div className="space-y-4 mb-8">
              {[
                { icon: <BookOpen className="w-5 h-5 text-violet-500" />, title: "Publications", desc: "Peer-reviewed research papers" },
                { icon: <Presentation className="w-5 h-5 text-violet-500" />, title: "Conference Presentations", desc: "Industry and academic conferences" },
                { icon: <FileText className="w-5 h-5 text-violet-500" />, title: "Technical Whitepapers", desc: "Architecture and methodology documentation" },
              ].map((item, i) => (
                <div key={i} className="card card-violet p-5" style={{ borderRadius: "14px", borderColor: "rgba(139,92,246,0.15)" }}>
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <div>
                      <div className="text-gray-900 font-medium text-[14px]">{item.title}</div>
                      <div className="text-[12px] text-gray-400 font-light">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/[0.15]">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-amber-700 font-medium text-[13px]">Responsible Disclosure Model</div>
                  <p className="text-[12px] text-gray-400 font-light mt-1">Foundational mechanisms are protected. Implementation details shared selectively. Enterprise security never compromised for publicity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - IP Protection Model SVG */}
          <div className="r-right">
            <div className="diagram-card p-8">
              <svg viewBox="0 0 380 300" className="w-full">
                <text x="190" y="20" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="600" letterSpacing="0.12em" fontFamily="Space Mono">IP PROTECTION MODEL</text>
                {/* Outer: Published Research */}
                <circle cx="190" cy="165" r="120" fill="rgba(16,185,129,0.04)" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" strokeDasharray="8,4"/>
                <text x="190" y="55" textAnchor="middle" fill="#059669" fontSize="8.5" fontFamily="Urbanist">PUBLISHED RESEARCH</text>
                {/* Middle: Partner Access */}
                <circle cx="190" cy="165" r="80" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5"/>
                <text x="190" y="100" textAnchor="middle" fill="#d97706" fontSize="8.5" fontFamily="Urbanist">PARTNER ACCESS</text>
                {/* Inner: Protected Core */}
                <circle cx="190" cy="165" r="42" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.35)" strokeWidth="2"/>
                <text x="190" y="161" textAnchor="middle" fill="#6d28d9" fontSize="9" fontWeight="600" fontFamily="Urbanist">PROTECTED</text>
                <text x="190" y="174" textAnchor="middle" fill="#7c3aed" fontSize="7.5" fontFamily="Urbanist">Core IP</text>
                {/* Lock icon */}
                <g transform="translate(190, 138)">
                  <rect x="-6" y="0" width="12" height="9" rx="2" fill="#8b5cf6"/>
                  <path d="M -4 0 L -4 -4 A 4 4 0 0 1 4 -4 L 4 0" fill="none" stroke="#8b5cf6" strokeWidth="2"/>
                </g>
                {/* Labels */}
                <g transform="translate(40, 130)">
                  <rect x="0" y="0" width="68" height="26" rx="6" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" strokeWidth="1"/>
                  <text x="34" y="12" textAnchor="middle" fill="#059669" fontSize="7" fontWeight="600" fontFamily="Urbanist">Whitepapers</text>
                  <text x="34" y="22" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="Urbanist">Methodology</text>
                </g>
                <g transform="translate(272, 130)">
                  <rect x="0" y="0" width="68" height="26" rx="6" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" strokeWidth="1"/>
                  <text x="34" y="12" textAnchor="middle" fill="#059669" fontSize="7" fontWeight="600" fontFamily="Urbanist">Publications</text>
                  <text x="34" y="22" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="Urbanist">Research Papers</text>
                </g>
                <g transform="translate(70, 210)">
                  <rect x="0" y="0" width="68" height="26" rx="6" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.2)" strokeWidth="1"/>
                  <text x="34" y="12" textAnchor="middle" fill="#d97706" fontSize="7" fontWeight="600" fontFamily="Urbanist">Enterprise</text>
                  <text x="34" y="22" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="Urbanist">Integrations</text>
                </g>
                <g transform="translate(242, 210)">
                  <rect x="0" y="0" width="68" height="26" rx="6" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.2)" strokeWidth="1"/>
                  <text x="34" y="12" textAnchor="middle" fill="#d97706" fontSize="7" fontWeight="600" fontFamily="Urbanist">Licensed</text>
                  <text x="34" y="22" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="Urbanist">Technology</text>
                </g>
                <text x="190" y="290" textAnchor="middle" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Security is never compromised for publicity</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}