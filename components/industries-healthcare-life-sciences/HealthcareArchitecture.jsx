"use client";

import { Check } from 'lucide-react';

export default function HealthcareArchitecture() {
  return (
    <>
      <div className="divider-enhanced"></div>
      
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-15"></div>
        <div className="orb w-[400px] h-[400px] bg-teal-400/[0.04] top-[5%] left-[-5%]"></div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="r-left">
              <p className="text-[10px] text-teal-500/80 tracking-[0.3em] uppercase mb-4 font-mono">Our Approach</p>
              <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-6">
                Healthcare Intelligence Architecture
              </h2>
              <p className="text-lg text-gray-500 font-light mb-8 leading-relaxed">
                Genovation delivers enterprise intelligence powered by Mentis OS, designed for healthcare and life sciences constraints.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-teal-500/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-sm">On-premise or private network deployment</p>
                    <p className="text-xs text-gray-400 font-light">PHI never leaves your infrastructure</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-teal-500/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-sm">Strict data residency and access controls</p>
                    <p className="text-xs text-gray-400 font-light">Role-based access with complete audit trails</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-teal-500/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-sm">Explainable, auditable intelligence</p>
                    <p className="text-xs text-gray-400 font-light">Every output traceable to source</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-teal-500/[0.04] border border-teal-500/[0.12]">
                <p className="text-teal-700 font-medium text-sm">
                  AI as a governed clinical and research support system -- not an uncontrolled experiment.
                </p>
              </div>
            </div>
            
            {/* Right: Architecture Diagram */}
            <div className="r-right">
              <div className="card-no-hover p-5">
                <svg viewBox="0 0 400 440" className="w-full">
                  <pattern id="ag" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(20,184,166,0.04)" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="400" height="440" fill="url(#ag)" rx="12"/>
                  
                  <text x="200" y="18" textAnchor="middle" fill="#9ca3af" fontSize="7.5" letterSpacing="0.15em" fontFamily="Space Mono, monospace">
                    HEALTHCARE INTELLIGENCE ARCHITECTURE
                  </text>
                  
                  {/* Data Sources */}
                  <g transform="translate(15,35)">
                    <rect width="370" height="85" rx="10" fill="rgba(20,184,166,0.04)" stroke="rgba(20,184,166,0.15)"/>
                    <text x="185" y="18" textAnchor="middle" fill="#0d9488" fontSize="9" fontWeight="500">HEALTHCARE DATA SOURCES</text>
                    
                    <g transform="translate(10,28)">
                      <rect width="80" height="42" rx="6" fill="white" stroke="rgba(20,184,166,0.15)"/>
                      <text x="40" y="17" textAnchor="middle" fill="#0d9488" fontSize="7.5">EHR / EMR</text>
                      <text x="40" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Epic, Cerner</text>
                    </g>
                    
                    <g transform="translate(97,28)">
                      <rect width="80" height="42" rx="6" fill="white" stroke="rgba(20,184,166,0.15)"/>
                      <text x="40" y="17" textAnchor="middle" fill="#0d9488" fontSize="7.5">HMS</text>
                      <text x="40" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Operations</text>
                    </g>
                    
                    <g transform="translate(184,28)">
                      <rect width="80" height="42" rx="6" fill="white" stroke="rgba(20,184,166,0.15)"/>
                      <text x="40" y="17" textAnchor="middle" fill="#0d9488" fontSize="7.5">Research</text>
                      <text x="40" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6.5">CTMS, LIMS</text>
                    </g>
                    
                    <g transform="translate(271,28)">
                      <rect width="88" height="42" rx="6" fill="white" stroke="rgba(20,184,166,0.15)"/>
                      <text x="44" y="17" textAnchor="middle" fill="#0d9488" fontSize="7.5">Literature</text>
                      <text x="44" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6.5">PubMed, etc.</text>
                    </g>
                  </g>
                  
                  {/* Arrow */}
                  <path d="M200 125v20" stroke="rgba(20,184,166,0.25)" strokeWidth="1.5"/>
                  <polygon points="200,150 196,142 204,142" fill="rgba(20,184,166,0.3)"/>
                  
                  {/* Privacy Boundary */}
                  <g transform="translate(15,155)">
                    <rect width="370" height="45" rx="8" fill="rgba(239,68,68,0.03)" stroke="rgba(239,68,68,0.15)" strokeDasharray="6,3"/>
                    <text x="185" y="18" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="500">PRIVACY & COMPLIANCE BOUNDARY</text>
                    <text x="185" y="32" textAnchor="middle" fill="#9ca3af" fontSize="6.5">HIPAA  ·  GDPR  ·  IRB  ·  De-identification</text>
                  </g>
                  
                  {/* Arrow */}
                  <path d="M200 205v20" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5"/>
                  <polygon points="200,230 196,222 204,222" fill="rgba(16,185,129,0.3)"/>
                  
                  {/* Mentis OS */}
                  <g transform="translate(15,235)">
                    <rect width="370" height="100" rx="10" fill="rgba(16,185,129,0.04)" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5"/>
                    <text x="185" y="22" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="500">MENTIS OS</text>
                    
                    <g transform="translate(10,35)">
                      <rect width="110" height="50" rx="6" fill="white" stroke="rgba(16,185,129,0.15)"/>
                      <text x="55" y="18" textAnchor="middle" fill="#059669" fontSize="7.5" fontWeight="500">Clinical NLP</text>
                      <text x="55" y="31" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Discharge, Notes</text>
                      <text x="55" y="42" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Summaries</text>
                    </g>
                    
                    <g transform="translate(130,35)">
                      <rect width="110" height="50" rx="6" fill="white" stroke="rgba(16,185,129,0.15)"/>
                      <text x="55" y="18" textAnchor="middle" fill="#059669" fontSize="7.5" fontWeight="500">Research Synthesis</text>
                      <text x="55" y="31" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Literature, Drug</text>
                      <text x="55" y="42" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Repurposing</text>
                    </g>
                    
                    <g transform="translate(250,35)">
                      <rect width="110" height="50" rx="6" fill="white" stroke="rgba(16,185,129,0.15)"/>
                      <text x="55" y="18" textAnchor="middle" fill="#059669" fontSize="7.5" fontWeight="500">Analytics</text>
                      <text x="55" y="31" textAnchor="middle" fill="#9ca3af" fontSize="6.5">HMS Insights</text>
                      <text x="55" y="42" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Outcomes</text>
                    </g>
                  </g>
                  
                  {/* Arrow */}
                  <path d="M200 340v20" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5"/>
                  <polygon points="200,365 196,357 204,357" fill="rgba(16,185,129,0.3)"/>
                  
                  {/* Users */}
                  <g transform="translate(15,370)">
                    <rect width="370" height="42" rx="8" fill="rgba(20,184,166,0.03)" stroke="rgba(20,184,166,0.12)"/>
                    <text x="60" y="26" textAnchor="middle" fill="#0d9488" fontSize="7.5">Clinicians</text>
                    <text x="145" y="26" textAnchor="middle" fill="#0d9488" fontSize="7.5">Researchers</text>
                    <text x="240" y="26" textAnchor="middle" fill="#0d9488" fontSize="7.5">Administrators</text>
                    <text x="330" y="26" textAnchor="middle" fill="#0d9488" fontSize="7.5">Leadership</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}