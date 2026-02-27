"use client";

import React from 'react';

export default function AerospaceArchitecture() {
    return (
        <section className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 mesh-bg-sky opacity-15"></div>
            <div className="orb w-[400px] h-[400px] bg-sky-400/[0.04] top-[5%] left-[-5%]"></div>
            <div className="relative max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="r-left">
                        <p className="text-[10px] text-sky-500/80 tracking-[0.3em] uppercase mb-4 font-mono">Our Approach</p>
                        <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-6 leading-[1.1]">One Platform,<br />Every Function</h2>
                        <p className="text-lg text-gray-500 font-light mb-8 leading-relaxed">
                            Mentis OS provides the secure foundation. Intelligence products plug in for each function —
                            engineering, manufacturing, quality, supply chain, MRO, and more.
                        </p>

                        <div className="space-y-4 mb-8 text-sm">
                            {[
                                { title: 'Air-gapped, on-premise, ITAR-ready', desc: 'Runs in your infrastructure — no data ever leaves' },
                                { title: 'Every answer traceable to source', desc: 'Audit trails for every query, every user, every function' },
                                { title: 'Cross-functional knowledge sharing', desc: 'Engineering, manufacturing, and quality access one unified knowledge base' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-sky-500/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-800 font-medium">{item.title}</p>
                                        <p className="text-[11px] text-gray-400 font-light uppercase tracking-wider">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="r-right">
                        <div className="bg-white/85 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.08] rounded-[20px] p-5">
                            <svg viewBox="0 0 400 400" className="w-full h-auto">
                                <defs>
                                    <pattern id="ag-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14,165,233,0.04)" strokeWidth="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="400" height="400" fill="url(#ag-grid)" rx="12" />
                                <text x="200" y="20" textAnchor="middle" fill="#9ca3af" fontSize="7" letterSpacing="0.15em" fontFamily="Space Mono,monospace">ENTERPRISE AEROSPACE INTELLIGENCE</text>

                                {/* Top: Data Sources */}
                                <g transform="translate(15,32)">
                                    <rect width="370" height="55" rx="8" fill="rgba(14,165,233,0.04)" stroke="rgba(14,165,233,0.12)" />
                                    <text x="185" y="16" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="500">ENTERPRISE DATA SOURCES</text>
                                    <g transform="translate(8,23)">
                                        <rect width="57" height="24" rx="5" fill="#fff" stroke="rgba(14,165,233,0.12)" />
                                        <text x="28" y="15" textAnchor="middle" fill="#0284c7" fontSize="6">PLM / PDM</text>
                                    </g>
                                    <g transform="translate(72,23)">
                                        <rect width="50" height="24" rx="5" fill="#fff" stroke="rgba(14,165,233,0.12)" />
                                        <text x="25" y="15" textAnchor="middle" fill="#0284c7" fontSize="6">MES</text>
                                    </g>
                                    <g transform="translate(129,23)">
                                        <rect width="50" height="24" rx="5" fill="#fff" stroke="rgba(14,165,233,0.12)" />
                                        <text x="25" y="15" textAnchor="middle" fill="#0284c7" fontSize="6">ERP</text>
                                    </g>
                                    <g transform="translate(186,23)">
                                        <rect width="50" height="24" rx="5" fill="#fff" stroke="rgba(14,165,233,0.12)" />
                                        <text x="25" y="15" textAnchor="middle" fill="#0284c7" fontSize="6">QMS</text>
                                    </g>
                                    <g transform="translate(243,23)">
                                        <rect width="57" height="24" rx="5" fill="#fff" stroke="rgba(14,165,233,0.12)" />
                                        <text x="28" y="15" textAnchor="middle" fill="#0284c7" fontSize="6">CMMS</text>
                                    </g>
                                    <g transform="translate(307,23)">
                                        <rect width="55" height="24" rx="5" fill="#fff" stroke="rgba(14,165,233,0.12)" />
                                        <text x="28" y="15" textAnchor="middle" fill="#0284c7" fontSize="6">Docs</text>
                                    </g>
                                </g>

                                <path d="M200 92v14" stroke="rgba(14,165,233,0.2)" strokeWidth="1.5" />
                                <polygon points="200,110 196,103 204,103" fill="rgba(14,165,233,0.25)" />

                                {/* Security Boundary */}
                                <g transform="translate(15,115)">
                                    <rect width="370" height="34" rx="6" fill="rgba(239,68,68,0.03)" stroke="rgba(239,68,68,0.15)" strokeDasharray="5,3" />
                                    <text x="185" y="15" textAnchor="middle" fill="#dc2626" fontSize="7" fontWeight="500">IP & SECURITY BOUNDARY</text>
                                    <text x="185" y="27" textAnchor="middle" fill="#9ca3af" fontSize="6">ITAR • EAR • NIST 800-171 • Air-Gapped</text>
                                </g>

                                <path d="M200 154v14" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5" />
                                <polygon points="200,172 196,165 204,165" fill="rgba(6,182,212,0.25)" />

                                {/* Mentis OS */}
                                <rect x="15" y="177" width="370" height="70" rx="10" fill="rgba(6,182,212,0.04)" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5" />
                                <text x="200" y="197" textAnchor="middle" fill="#0891b2" fontSize="10" fontWeight="500">MENTIS OS</text>
                                <g transform="translate(25,207)">
                                    <rect width="82" height="30" rx="5" fill="#fff" stroke="rgba(6,182,212,0.12)" />
                                    <text x="41" y="14" textAnchor="middle" fill="#0891b2" fontSize="6.5">Traceability</text>
                                    <text x="41" y="24" textAnchor="middle" fill="#9ca3af" fontSize="5.5">Source → Answer</text>
                                </g>
                                <g transform="translate(115,207)">
                                    <rect width="82" height="30" rx="5" fill="#fff" stroke="rgba(6,182,212,0.12)" />
                                    <text x="41" y="14" textAnchor="middle" fill="#0891b2" fontSize="6.5">Governance</text>
                                    <text x="41" y="24" textAnchor="middle" fill="#9ca3af" fontSize="5.5">RBAC • Audit</text>
                                </g>
                                <g transform="translate(205,207)">
                                    <rect width="82" height="30" rx="5" fill="#fff" stroke="rgba(6,182,212,0.12)" />
                                    <text x="41" y="14" textAnchor="middle" fill="#0891b2" fontSize="6.5">IP Security</text>
                                    <text x="41" y="24" textAnchor="middle" fill="#9ca3af" fontSize="5.5">Zero Exfiltration</text>
                                </g>
                                <g transform="translate(295,207)">
                                    <rect width="80" height="30" rx="5" fill="#fff" stroke="rgba(6,182,212,0.12)" />
                                    <text x="40" y="14" textAnchor="middle" fill="#0891b2" fontSize="6.5">SLM Engine</text>
                                    <text x="40" y="24" textAnchor="middle" fill="#9ca3af" fontSize="5.5">On-Premise AI</text>
                                </g>

                                <path d="M200 252v14" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5" />
                                <polygon points="200,270 196,263 204,263" fill="rgba(6,182,212,0.25)" />

                                {/* Intelligence Products */}
                                <g transform="translate(15,275)">
                                    <rect width="370" height="100" rx="10" fill="rgba(14,165,233,0.03)" stroke="rgba(14,165,233,0.12)" />
                                    <text x="185" y="18" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="500">INTELLIGENCE PRODUCTS</text>
                                    <g transform="translate(8,26)">
                                        <rect width="82" height="32" rx="5" fill="rgba(14,165,233,0.04)" stroke="rgba(14,165,233,0.1)" />
                                        <text x="41" y="14" textAnchor="middle" fill="#0284c7" fontSize="6.5" fontWeight="500">Engineering</text>
                                        <text x="41" y="25" textAnchor="middle" fill="#9ca3af" fontSize="5.5">Design • Cert</text>
                                    </g>
                                    <g transform="translate(98,26)">
                                        <rect width="82" height="32" rx="5" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.1)" />
                                        <text x="41" y="14" textAnchor="middle" fill="#7c3aed" fontSize="6.5" fontWeight="500">Manufacturing</text>
                                        <text x="41" y="25" textAnchor="middle" fill="#9ca3af" fontSize="5.5">Process • Floor</text>
                                    </g>
                                    <g transform="translate(188,26)">
                                        <rect width="82" height="32" rx="5" fill="rgba(16,185,129,0.04)" stroke="rgba(16,185,129,0.1)" />
                                        <text x="41" y="14" textAnchor="middle" fill="#059669" fontSize="6.5" fontWeight="500">Quality</text>
                                        <text x="41" y="25" textAnchor="middle" fill="#9ca3af" fontSize="5.5">NCR • AS9100</text>
                                    </g>
                                    <g transform="translate(278,26)">
                                        <rect width="82" height="32" rx="5" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.1)" />
                                        <text x="41" y="14" textAnchor="middle" fill="#d97706" fontSize="6.5" fontWeight="500">Supply Chain</text>
                                        <text x="41" y="25" textAnchor="middle" fill="#9ca3af" fontSize="5.5">Risk • Source</text>
                                    </g>
                                    <g transform="translate(53,64)">
                                        <rect width="82" height="32" rx="5" fill="rgba(244,63,94,0.04)" stroke="rgba(244,63,94,0.1)" />
                                        <text x="41" y="14" textAnchor="middle" fill="#e11d48" fontSize="6.5" fontWeight="500">MRO</text>
                                        <text x="41" y="25" textAnchor="middle" fill="#9ca3af" fontSize="5.5">Maint • Repair</text>
                                    </g>
                                    <g transform="translate(143,64)">
                                        <rect width="82" height="32" rx="5" fill="rgba(20,184,166,0.04)" stroke="rgba(20,184,166,0.1)" />
                                        <text x="41" y="14" textAnchor="middle" fill="#0d9488" fontSize="6.5" fontWeight="500">Lessons</text>
                                        <text x="41" y="25" textAnchor="middle" fill="#9ca3af" fontSize="5.5">Cross-Program</text>
                                    </g>
                                    <g transform="translate(233,64)">
                                        <rect width="82" height="32" rx="5" fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.1)" />
                                        <text x="41" y="14" textAnchor="middle" fill="#2563eb" fontSize="6.5" fontWeight="500">Compliance</text>
                                        <text x="41" y="25" textAnchor="middle" fill="#9ca3af" fontSize="5.5">Cert • Audit</text>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
