"use client";

import { FileText, BarChart3, FlaskConical, Lock, Search } from 'lucide-react';

export default function HealthcareProducts() {
  return (
    <>
      <div className="divider-enhanced"></div>
      
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-10"></div>
        <div className="orb w-[500px] h-[500px] bg-teal-400/[0.04] bottom-[5%] left-[-5%]"></div>
        <div className="orb w-[350px] h-[350px] bg-violet-400/[0.03] top-[15%] right-[-3%]"></div>
        
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[10px] text-teal-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Product Preview</p>
            <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">
              Healthcare Intelligence in Action
            </h2>
            <p className="text-gray-500 font-light max-w-lg mx-auto r-up">
              Production-grade clinical AI, deployed on your infrastructure, fully traceable and auditable.
            </p>
          </div>

          {/* Clinical Documentation Mock */}
          <div className="mb-6 r-up">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/[0.08] border border-teal-500/[0.12] flex items-center justify-center">
                <FileText className="w-5 h-5 text-teal-500" />
              </div>
              <div>
                <h3 className="text-gray-800 font-medium text-lg">Clinical Documentation Intelligence</h3>
                <p className="text-xs text-gray-400 font-light">Automated discharge summaries with full source traceability and Judge verification</p>
              </div>
            </div>
          </div>

          <div className="r-up mb-28">
            <div className="app-frame">
              <div className="hipaa-bar">
                <span className="font-code text-[8.5px] text-emerald-300/60 tracking-[0.18em] uppercase">
                  PHI Protected  ·  HIPAA Compliant  ·  Audit Trail Active  ·  On-Premise
                </span>
              </div>
              <div className="app-chrome">
                <div className="flex items-center gap-4">
                  <div className="app-dots">
                    <span className="dr"></span>
                    <span className="dy"></span>
                    <span className="dg"></span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <Lock className="w-3 h-3 text-emerald-400/40" />
                    <span className="font-code text-[10px] text-white/25">genovation://clinical/discharge-summary</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="ui-pill bg-emerald-400/10 text-emerald-300/70 border border-emerald-400/15">
                    <span className="w-[5px] h-[5px] rounded-full bg-emerald-400 live-dot"></span>
                    Epic FHIR
                  </span>
                  <span className="ui-pill bg-white/[0.04] text-white/25 border border-white/[0.06]">MRN: ****7842</span>
                </div>
              </div>
              <div className="flex" style={{ minHeight: '400px' }}>
                <div className="app-sidebar">
                  <div className="sb-icon active"><FileText className="w-4 h-4 text-teal-300" /></div>
                  <div className="sb-icon"><span className="w-4 h-4 text-white/20">💊</span></div>
                  <div className="sb-icon"><span className="w-4 h-4 text-white/20">📊</span></div>
                </div>
                <div className="flex-1 p-5">
                  <div className="gp p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="ui-label text-teal-300/50">Discharge Summary</span>
                      <div className="flex items-center gap-2">
                        <div className="conf-ring">
                          <svg width="76" height="76">
                            <circle cx="38" cy="38" r="34" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3"/>
                            <circle cx="38" cy="38" r="34" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="3" strokeDasharray="213.6" strokeDashoffset="10.7"/>
                          </svg>
                          <div className="conf-val">
                            <p className="text-2xl font-light text-emerald-300">95</p>
                            <p className="text-[8px] text-emerald-300/40">CONFIDENCE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      Patient presented with acute exacerbation of COPD requiring hospitalization. Treated with bronchodilators, steroids, and supplemental oxygen. Respiratory status improved significantly.
                    </p>
                    <div className="ui-divider my-4"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="ui-badge bg-emerald-400/10 text-emerald-300/60 border border-emerald-400/12">Verified</span>
                        <span className="text-[10px] text-white/30 font-code">Judge approved  ·  3 sources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HMS Analytics Mock */}
          <div className="mb-6 r-up">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/[0.08] border border-blue-500/[0.12] flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="text-gray-800 font-medium text-lg">Hospital Management System Intelligence</h3>
                <p className="text-xs text-gray-400 font-light">Natural language queries over de-identified operational data with root cause analysis</p>
              </div>
            </div>
          </div>

          <div className="r-up mb-28">
            <div className="app-frame">
              <div className="app-chrome">
                <div className="flex items-center gap-4">
                  <div className="app-dots">
                    <span className="dr"></span>
                    <span className="dy"></span>
                    <span className="dg"></span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <BarChart3 className="w-3 h-3 text-blue-400/40" />
                    <span className="font-code text-[10px] text-white/25">genovation://hms/operational-analytics</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="ui-pill bg-teal-400/10 text-teal-300/60 border border-teal-400/12">De-identified</span>
                  <span className="ui-pill bg-white/[0.04] text-white/20 border border-white/[0.06]">Q4 2024</span>
                </div>
              </div>
              <div className="flex">
                <div className="app-sidebar">
                  <div className="sb-icon"><span className="w-4 h-4 text-white/20">📊</span></div>
                  <div className="sb-icon active" style={{ background: 'rgba(96,165,250,0.12)', boxShadow: '0 0 12px rgba(96,165,250,0.08)' }}>
                    <BarChart3 className="w-4 h-4 text-blue-300" />
                  </div>
                </div>
                <div className="flex-1 p-5 space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-7 h-7 rounded-lg bg-blue-400/12 flex items-center justify-center flex-shrink-0">
                      <Search className="w-3.5 h-3.5 text-blue-300/50" />
                    </div>
                    <p className="text-[11px] text-white/55 flex-1">
                      &quot;Why are ED wait times increasing in Q4, and which departments are affected?&quot;
                    </p>
                    <span className="font-code text-[8px] text-white/15">4 sources  ·  2.3s</span>
                  </div>

                  <div className="grid grid-cols-4 gap-3 resp-1">
                    <div className="gp p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] text-white/30">ED Wait Time</span>
                        <span className="ui-tag bg-red-400/12 text-red-300/60 border border-red-400/12">ALERT</span>
                      </div>
                      <p className="text-2xl font-light text-red-300">+23<span className="text-sm text-red-300/40">%</span></p>
                      <p className="font-code text-[8px] text-red-300/30 mb-2">vs Q3 avg  ·  4.2hr peak</p>
                    </div>
                    <div className="gp p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] text-white/30">Bed Occupancy</span>
                        <span className="ui-tag bg-amber-400/10 text-amber-300/50 border border-amber-400/10">HIGH</span>
                      </div>
                      <p className="text-2xl font-light text-amber-300">94.2<span className="text-sm text-amber-300/40">%</span></p>
                      <p className="font-code text-[8px] text-amber-300/30 mb-2">threshold: 90%</p>
                    </div>
                    <div className="gp p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] text-white/30">Admissions</span>
                      </div>
                      <p className="text-2xl font-light text-amber-300">+18<span className="text-sm text-amber-300/40">%</span></p>
                      <p className="font-code text-[8px] text-amber-300/30 mb-2">respiratory +42%</p>
                    </div>
                    <div className="gp p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] text-white/30">Avg LOS</span>
                      </div>
                      <p className="text-2xl font-light text-red-300">4.8<span className="text-sm text-red-300/40">d</span></p>
                      <p className="font-code text-[8px] text-red-300/30 mb-2">target: 3.9d</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Drug Repurposing Mock - Simplified */}
          <div className="mb-6 r-up">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/[0.08] border border-violet-500/[0.12] flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-violet-500" />
              </div>
              <div>
                <h3 className="text-gray-800 font-medium text-lg">Research & Drug Repurposing Intelligence</h3>
                <p className="text-xs text-gray-400 font-light">Multi-database literature synthesis with mechanism matching and safety alerts</p>
              </div>
            </div>
          </div>

          <div className="r-up">
            <div className="app-frame">
              <div className="app-chrome">
                <div className="flex items-center gap-4">
                  <div className="app-dots">
                    <span className="dr"></span>
                    <span className="dy"></span>
                    <span className="dg"></span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <FlaskConical className="w-3 h-3 text-violet-400/40" />
                    <span className="font-code text-[10px] text-white/25">genovation://research/drug-repurposing</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="ui-pill bg-violet-400/10 text-violet-300/60 border border-violet-400/12">Research</span>
                  <span className="ui-pill bg-white/[0.04] text-white/20 border border-white/[0.06]">12 databases</span>
                </div>
              </div>
              <div className="p-5">
                <div className="gp p-5">
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Query: &quot;Metformin mechanisms beyond diabetes - cancer applications&quot;
                  </p>
                  <div className="ui-divider my-4"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="gp-inner p-4">
                      <span className="ui-label text-violet-300/50">Identified Mechanisms</span>
                      <p className="text-white/60 text-xs mt-2">mTOR inhibition, AMPK activation</p>
                    </div>
                    <div className="gp-inner p-4">
                      <span className="ui-label text-emerald-300/50">Clinical Trials</span>
                      <p className="text-white/60 text-xs mt-2">47 active trials found</p>
                    </div>
                    <div className="gp-inner p-4">
                      <span className="ui-label text-amber-300/50">Safety Profile</span>
                      <p className="text-white/60 text-xs mt-2">Well-established, low risk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}