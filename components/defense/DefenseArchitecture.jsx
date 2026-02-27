"use client";

import React, { useEffect } from 'react';
import { Lock, Eye, CloudOff, Clock, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function DefenseArchitecture() {
    useEffect(() => {
        const reveals = document.querySelectorAll('.r-up');
        reveals.forEach(el => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 87%',
                    once: true
                }
            });
        });

        const scales = document.querySelectorAll('.r-scale');
        scales.forEach(el => {
            gsap.to(el, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 87%',
                    once: true
                }
            });
        });
    }, []);

    return (
        <section className="py-32 relative overflow-hidden" id="secArch">
            <div className="orb w-[600px] h-[400px] bg-slate-500/[0.04] top-[10%] right-[15%]"></div>

            <div className="relative max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-500/[0.08] border border-slate-500/[0.15] mb-8 r-up opacity-0 translate-y-10">
                        <ShieldCheck className="w-3 h-3 text-slate-600" />
                        <span className="text-slate-600 text-[11px] font-light tracking-[0.25em] uppercase">Architecture</span>
                    </div>
                    <h2 className="display-section text-5xl md:text-7xl r-up opacity-0 translate-y-10">
                        Security & Sovereignty<br />
                        <span className="text-gradient-slate">by Design</span>
                    </h2>
                </div>

                {/* Security SVG */}
                <div className="diagram-card p-8 mb-12 r-up opacity-0 translate-y-10">
                    <svg viewBox="0 0 800 220" className="w-full">
                        <text x="400" y="18" textAnchor="middle" fill="#9ca3af" fontSize="8.5" letterSpacing="0.15em" fontFamily="var(--font-mono)">
                            DEFENSE-GRADE SECURITY ARCHITECTURE
                        </text>

                        {/* Deployment Models */}
                        <g transform="translate(25,35)">
                            <rect width="230" height="170" rx="14" fill="rgba(100,116,139,0.04)" stroke="rgba(100,116,139,0.2)" strokeWidth="1.5" />
                            <text x="115" y="24" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">DEPLOYMENT MODELS</text>

                            <g transform="translate(15,38)">
                                <rect width="200" height="34" rx="7" fill="rgba(255,255,255,0.5)" stroke="rgba(16,185,129,0.2)" />
                                <circle cx="22" cy="17" r="10" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" />
                                <text x="22" y="21" textAnchor="middle" fill="#059669" fontSize="10">✓</text>
                                <text x="42" y="13" fill="#334155" fontSize="8" fontWeight="500">On-Premise</text>
                                <text x="42" y="25" fill="#9ca3af" fontSize="7">Full infrastructure control</text>
                            </g>

                            <g transform="translate(15,80)">
                                <rect width="200" height="34" rx="7" fill="rgba(255,255,255,0.5)" stroke="rgba(16,185,129,0.2)" />
                                <circle cx="22" cy="17" r="10" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" />
                                <text x="22" y="21" textAnchor="middle" fill="#059669" fontSize="10">✓</text>
                                <text x="42" y="13" fill="#334155" fontSize="8" fontWeight="500">Private Networks</text>
                                <text x="42" y="25" fill="#9ca3af" fontSize="7">Isolated secure enclaves</text>
                            </g>

                            <g transform="translate(15,122)">
                                <rect width="200" height="34" rx="7" fill="rgba(255,255,255,0.5)" stroke="rgba(16,185,129,0.2)" />
                                <circle cx="22" cy="17" r="10" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" />
                                <text x="22" y="21" textAnchor="middle" fill="#059669" fontSize="10">✓</text>
                                <text x="42" y="13" fill="#334155" fontSize="8" fontWeight="500">Air-Gapped</text>
                                <text x="42" y="25" fill="#9ca3af" fontSize="7">Zero network connectivity</text>
                            </g>
                        </g>

                        {/* Security Principles */}
                        <g transform="translate(285,35)">
                            <rect width="230" height="170" rx="14" fill="rgba(16,185,129,0.03)" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" />
                            <text x="115" y="24" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="600">SECURITY PRINCIPLES</text>

                            <g transform="translate(15,40)">
                                <rect width="200" height="26" rx="5" fill="rgba(16,185,129,0.06)" />
                                <text x="100" y="17" textAnchor="middle" fill="#059669" fontSize="8">Zero external API calls</text>
                            </g>

                            <g transform="translate(15,72)">
                                <rect width="200" height="26" rx="5" fill="rgba(16,185,129,0.06)" />
                                <text x="100" y="17" textAnchor="middle" fill="#059669" fontSize="8">Strict role-based access</text>
                            </g>

                            <g transform="translate(15,104)">
                                <rect width="200" height="26" rx="5" fill="rgba(16,185,129,0.06)" />
                                <text x="100" y="17" textAnchor="middle" fill="#059669" fontSize="8">Governed agent execution</text>
                            </g>

                            <g transform="translate(15,136)">
                                <rect width="200" height="26" rx="5" fill="rgba(16,185,129,0.06)" />
                                <text x="100" y="17" textAnchor="middle" fill="#059669" fontSize="8">Immutable audit trails</text>
                            </g>
                        </g>

                        {/* Long Horizon */}
                        <g transform="translate(545,35)">
                            <rect width="230" height="170" rx="14" fill="rgba(139,92,246,0.03)" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
                            <text x="115" y="24" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="600">LONG-HORIZON SECURITY</text>

                            <g transform="translate(15,42)">
                                <rect width="200" height="52" rx="7" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.1)" />
                                <text x="100" y="20" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="500">Cryptographic Systems</text>
                                <text x="100" y="34" textAnchor="middle" fill="#9ca3af" fontSize="7">Designed for future</text>
                                <text x="100" y="46" textAnchor="middle" fill="#9ca3af" fontSize="7">threat models</text>
                            </g>

                            <g transform="translate(15,104)">
                                <rect width="200" height="52" rx="7" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.1)" />
                                <text x="100" y="20" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="500">Resilient Architecture</text>
                                <text x="100" y="34" textAnchor="middle" fill="#9ca3af" fontSize="7">Evolving adversarial</text>
                                <text x="100" y="46" textAnchor="middle" fill="#9ca3af" fontSize="7">capability aware</text>
                            </g>
                        </g>
                    </svg>
                </div>

                {/* Feature grid */}
                <div className="grid md:grid-cols-2 gap-5 mb-12">
                    {[
                        { icon: Lock, title: "Designed for classified environments", sub: "Purpose-built for restricted networks" },
                        { icon: Eye, title: "Explainability at every layer", sub: "No black boxes — fully traceable" },
                        { icon: CloudOff, title: "No hyperscaler dependencies", sub: "Zero reliance on external cloud" },
                        { icon: Clock, title: "Defense timeline alignment", sub: "Architecture for decades, not release cycles" }
                    ].map((item, i) => (
                        <div key={i} className="card p-6 r-up opacity-0 translate-y-10" style={{ borderRadius: '20px' }}>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-500/[0.08] border border-slate-500/[0.15] flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-5 h-5 text-slate-600" />
                                </div>
                                <div>
                                    <p className="text-[15px] text-gray-900 font-medium">{item.title}</p>
                                    <p className="text-[13px] text-gray-400 font-light mt-1">{item.sub}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-8 rounded-3xl bg-slate-500/[0.04] border border-slate-500/[0.15] text-center r-scale opacity-0 scale-90">
                    <p className="text-xl text-gray-900 font-light leading-relaxed">
                        Built for environments where failure is <span className="text-gradient-slate font-normal">investigated — not ignored</span>.
                    </p>
                </div>
            </div>
        </section>
    );
}
