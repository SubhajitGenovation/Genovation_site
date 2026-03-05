"use client";

import React, { useEffect } from 'react';
import {
    Fingerprint, ShieldAlert, Activity, BookOpen, FileLock,
    Link, GitBranch, ArrowRight, Check, AlertTriangle, Radar,
    Search, Scale, Link2, UserPlus, Bot, XCircle, CheckCircle,
    Folder, FileText, Scan, CheckSquare, ArrowDownCircle, BarChart3, Lock
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function DefenseProducts() {
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

        const mocks = document.querySelectorAll('.mock-app');
        mocks.forEach(el => {
            gsap.fromTo(el, { y: 80, opacity: 0, scale: 0.97 }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true
                }
            });
        });

        const cards = document.querySelectorAll('#useCaseCards .card');
        if (cards.length) {
            ScrollTrigger.batch(cards, {
                start: 'top 87%',
                onEnter: els => gsap.fromTo(els, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: 'power3.out' }),
                once: true
            });
        }
    }, []);

    return (
        <section className="py-28 relative overflow-hidden bg-white/30" id="products">
            <div className="absolute inset-0 mesh-bg-slate opacity-10"></div>

            <div className="relative max-w-6xl mx-auto px-8">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-500/[0.08] border border-slate-500/[0.15] mb-8 r-up opacity-0 translate-y-10">
                        <Fingerprint className="w-3 h-3 text-slate-600" />
                        <span className="text-slate-600 text-[11px] font-light tracking-[0.25em] uppercase">Intelligence Suite</span>
                    </div>
                    <h2 className="display-section text-5xl md:text-7xl r-up opacity-0 translate-y-10">
                        Mission-Critical <br /><span className="text-gradient-slate">Capabilities</span>
                    </h2>
                </div>

                {/* 1. POLICY & STANDARDS INTELLIGENCE */}
                <div className="mb-40">
                    <div className="flex items-center gap-4 mb-4 r-up opacity-0 translate-y-10">
                        <div className="w-14 h-14 rounded-2xl bg-slate-500/[0.1] border border-slate-500/[0.2] flex items-center justify-center">
                            <ShieldAlert className="w-7 h-7 text-slate-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-light text-gray-900 tracking-tight">Policy & Standards Intelligence</h3>
                            <p className="text-[13px] text-gray-400 font-light mt-0.5">Automated compliance with NIST, STIGs, and NATO standards</p>
                        </div>
                    </div>
                    <p className="text-[15px] text-gray-500 font-light leading-relaxed max-w-3xl mb-10 r-up opacity-0 translate-y-10">
                        Defense systems must adhere to thousands of pages of rigid security controls and technical standards.
                        Policy Intelligence interprets documentation in real-time, mapping system configurations to compliance requirements
                        and providing immediate gap analysis with traceable evidence for authorization to operate (ATO).
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        {[
                            { title: "Standard Mapping", desc: "Maps internal configurations to NIST 800-53, SRG, and custom agency controls automatically." },
                            { title: "Drift Detection", desc: "Identifies when system configurations deviate from the required security baseline in real-time." },
                            { title: "ATO Evidence", desc: "Generates technical evidence packages required for Continuous Authorization to Operate (cATO)." }
                        ].map((item, i) => (
                            <div key={i} className="card p-6 r-up opacity-0 translate-y-10" style={{ borderRadius: '18px' }}>
                                <h4 className="text-[15px] text-gray-900 font-medium mb-3">{item.title}</h4>
                                <p className="text-[13px] text-gray-400 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mock App: Policy Intelligence */}
                    <div className="mock-app r-up opacity-0 translate-y-20">
                        <div className="class-banner class-ts">TOP SECRET // SCI // NOFORN</div>
                        <div className="app-toolbar">
                            <div className="flex items-center gap-4">
                                <div className="app-dots"><span></span><span></span><span></span></div>
                                <div className="flex items-center gap-1 ml-3">
                                    <div className="app-tab active">Compliance Monitor</div>
                                    <div className="app-tab">Control Mapping</div>
                                    <div className="app-tab">Audit Logs</div>
                                </div>
                            </div>
                            <span className="pill pill-a">94% Compliant</span>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-4 gap-4 mb-6">
                                <div className="metric m-slate">
                                    <p className="text-xl font-semibold text-slate-600">2,482</p>
                                    <p className="text-[9px] text-gray-400 font-light mt-1">Controls Audited</p>
                                </div>
                                <div className="metric m-green">
                                    <p className="text-xl font-semibold text-emerald-600">2,334</p>
                                    <p className="text-[9px] text-gray-400 font-light mt-1">Passed</p>
                                </div>
                                <div className="metric m-amber">
                                    <p className="text-xl font-semibold text-amber-600">148</p>
                                    <p className="text-[9px] text-gray-400 font-light mt-1">Findings</p>
                                </div>
                                <div className="metric m-red">
                                    <p className="text-xl font-semibold text-red-500">3</p>
                                    <p className="text-[9px] text-gray-400 font-light mt-1">Critical Gaps</p>
                                </div>
                            </div>
                            <div className="p-5 rounded-2xl bg-black/[0.015] border border-black/[0.05]">
                                <p className="label-mono mb-4 text-xs">Policy Drift Analysis — NIST 800-53 Rev 5</p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                        <span className="text-xs text-gray-700 font-medium w-32 tracking-wider">AC-2(1): Account Management</span>
                                        <div className="h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500/60 w-[92%]"></div>
                                        </div>
                                        <span className="text-xs text-red-600 font-medium w-32 text-right">92% Compliance</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                                        <span className="text-xs text-gray-700 font-medium w-32 tracking-wider">IA-2(1): Authenticator Mgmt</span>
                                        <div className="h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-amber-500/60 w-[96%]"></div>
                                        </div>
                                        <span className="text-xs text-amber-600 font-medium w-32 text-right">96% Compliance</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                        <span className="text-xs text-gray-700 font-medium w-32 tracking-wider">SC-7: Boundary Protection</span>
                                        <div className="h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-500/60 w-[100%]"></div>
                                        </div>
                                        <span className="text-xs text-emerald-600 font-medium w-32 text-right">100% Compliance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. RESEARCH & THREAT INTELLIGENCE */}
                <div className="mb-40">
                    <div className="flex items-center gap-4 mb-4 r-up opacity-0 translate-y-10">
                        <div className="w-14 h-14 rounded-2xl bg-red-500/[0.1] border border-red-500/[0.2] flex items-center justify-center">
                            <Radar className="w-7 h-7 text-red-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-light text-gray-900 tracking-tight">Research & Threat Intelligence</h3>
                            <p className="text-[13px] text-gray-400 font-light mt-0.5">Automated signal fusion and briefing generation for secure enclaves</p>
                        </div>
                    </div>
                    <p className="text-[15px] text-gray-500 font-light leading-relaxed max-w-3xl mb-10 r-up opacity-0 translate-y-10">
                        Intelligence analysts sift through massive volumes of SIGINT, OSINT, and human intelligence.
                        Research Intelligence automates the fusion of these disparate feeds, identifies emerging patterns of adversarial activity,
                        and generates classified daily briefings with zero data residue outside the boundary.
                    </p>

                    <div className="mock-app r-up opacity-0 translate-y-20">
                        <div className="class-banner class-ts">TOP SECRET // SCI // NOFORN</div>
                        <div className="app-toolbar">
                            <div className="flex items-center gap-4">
                                <div className="app-dots"><span></span><span></span><span></span></div>
                                <div className="flex items-center gap-1 ml-3">
                                    <div className="app-tab active">Intelligence Feed</div>
                                    <div className="app-tab">Briefing Builder</div>
                                    <div className="app-tab">Pattern Analysis</div>
                                </div>
                            </div>
                            <span className="pill pill-r">TS/SCI</span>
                        </div>
                        <div className="p-6">
                            <div className="flex gap-6">
                                <div className="w-1/3 space-y-3">
                                    <div className="p-3 rounded-xl bg-slate-500/[0.04] border border-slate-500/[0.1]">
                                        <p className="text-[10px] text-slate-500 mb-1 font-mono tracking-wider">SIGINT FEED (ACTIVE)</p>
                                        <div className="space-y-1.5">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="flex gap-2">
                                                    <div className="w-1 h-3 bg-red-400 rounded-full mt-1 animate-pulse"></div>
                                                    <p className="text-[10px] text-gray-400 font-light">Signal fragment detected at [REDACTED]</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/[0.1]">
                                        <p className="text-[10px] text-emerald-600 font-medium mb-1">AI Correlation Active</p>
                                        <p className="text-[10px] text-gray-400">Fused 47 sources into daily brief</p>
                                    </div>
                                </div>
                                <div className="flex-1 p-5 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
                                    <h4 className="text-sm font-medium text-gray-900 mb-4">Classified Daily Intelligence Executive Briefing</h4>
                                    <div className="space-y-4">
                                        <div className="pb-4 border-b border-black/[0.05]">
                                            <p className="text-[10px] text-red-500 font-mono mb-1">PRIORITY 1: ADVERSARIAL POSTURE</p>
                                            <p className="text-[12px] text-gray-600 font-light italic">Synthesized from SIGINT and Satellite Imagery Correlation</p>
                                            <p className="text-[12px] text-gray-500 font-light mt-2 leading-relaxed">
                                                Movement detected in sector Alpha-7 indicates a 42% increase in logistical throughput.
                                                Correlation with historical patterns suggests preparatory phase for exercises scheduled for Q3.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-blue-500 font-mono mb-1">PRIORITY 2: SPECTRUM ANALYSIS</p>
                                            <p className="text-[12px] text-gray-500 font-light leading-relaxed">
                                                Intermittent jamming detected on [REDACTED] frequencies. AI-driven spectral mapping identifies non-random noise patterns consistent with EW suite testing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. OPERATIONAL INTELLIGENCE */}
                <div className="mb-40">
                    <div className="flex items-center gap-4 mb-4 r-up opacity-0 translate-y-10">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/[0.1] border border-emerald-500/[0.2] flex items-center justify-center">
                            <Activity className="w-7 h-7 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-light text-gray-900 tracking-tight">Operational Intelligence</h3>
                            <p className="text-[13px] text-gray-400 font-light mt-0.5">Explainable AI for system health and root-cause analysis</p>
                        </div>
                    </div>
                    <p className="text-[15px] text-gray-500 font-light leading-relaxed max-w-3xl mb-10 r-up opacity-0 translate-y-10">
                        Complex defense systems generate enormous telemetry data. When failures occur, root-cause analysis can take days.
                        Operational Intelligence monitors system health continuously, identifies anomalies before they cascade,
                        and recommends specific corrective actions — all with fully traceable reasoning.
                    </p>

                    <div className="grid md:grid-cols-4 gap-4 mb-10">
                        {[
                            { step: "1", title: "Monitor", desc: "Continuous telemetry ingestion from all subsystems. Baselines learned from history." },
                            { step: "2", title: "Detect", desc: "Anomaly detection flags deviations before they become failures." },
                            { step: "3", title: "Diagnose", desc: "Root-cause analysis traces failures through the dependency graph." },
                            { step: "4", title: "Recommend", desc: "Specific corrective actions with patch references and procedures." }
                        ].map((item, i) => (
                            <div key={i} className="card p-5 r-up opacity-0 translate-y-10" style={{ borderRadius: '18px' }}>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.1] border border-emerald-500/[0.15] flex items-center justify-center">
                                        <span className="text-emerald-600 font-semibold text-sm">{item.step}</span>
                                    </div>
                                    <h4 className="text-[14px] text-gray-900 font-medium">{item.title}</h4>
                                </div>
                                <p className="text-[12px] text-gray-400 font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mock-app r-up opacity-0 translate-y-20">
                        <div className="class-banner class-ts">TOP SECRET // SCI // NOFORN</div>
                        <div className="app-toolbar">
                            <div className="flex items-center gap-4">
                                <div className="app-dots"><span></span><span></span><span></span></div>
                                <div className="flex items-center gap-1 ml-3">
                                    <div className="app-tab active">System Dashboard</div>
                                    <div className="app-tab">Maintenance Intel</div>
                                    <div className="app-tab">Readiness</div>
                                </div>
                            </div>
                            <span className="pill pill-a">3 Open Issues</span>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-5 gap-3 mb-6">
                                {[
                                    { val: '98.2%', label: 'Availability', color: 'emerald' },
                                    { val: '3', label: 'Open Issues', color: 'amber' },
                                    { val: '47h', label: 'MTBF', color: 'slate' },
                                    { val: '94%', label: 'Readiness', color: 'emerald' },
                                    { val: '12d', label: 'Next Sched.', color: 'violet' }
                                ].map((item, i) => (
                                    <div key={i} className={`metric m-${item.color}`}>
                                        <p className={`text-xl font-semibold text-${item.color}-600`}>{item.val}</p>
                                        <p className="text-[9px] text-gray-400 font-light mt-1">{item.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid lg:grid-cols-2 gap-5">
                                <div className="p-5 rounded-2xl bg-black/[0.015] border border-black/[0.05]">
                                    <p className="label-mono mb-3">System Availability — 30 Day Trend</p>
                                    <svg viewBox="0 0 340 100" className="w-full">
                                        <path d="M 20 25 L 60 22 L 100 24 L 140 20 L 180 18 L 220 55 L 260 22 L 300 20 L 330 18" fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="2" strokeLinecap="round" />
                                        <circle cx="220" cy="55" r="5" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5" />
                                        <text x="220" y="72" textAnchor="middle" fill="#dc2626" fontSize="6">PDU-3 failure</text>
                                    </svg>
                                </div>
                                <div className="p-5 rounded-2xl bg-red-500/[0.03] border border-red-500/[0.12]">
                                    <div className="flex items-center gap-2 mb-3">
                                        <AlertTriangle className="w-4 h-4 text-red-500" />
                                        <span className="text-[12px] text-red-600 font-medium">Root Cause Analysis — Availability Dip</span>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white border border-black/[0.06] mb-3">
                                        <p className="text-[10px] text-gray-400 mb-1">AI Diagnosis</p>
                                        <p className="text-[11px] text-gray-700 font-light">
                                            <strong className="text-gray-900">Root cause:</strong> PDU-3 firmware hash mismatch following unscheduled power cycle. Firmware rollback to v2.3.8 restored operations.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="pill pill-g">Resolved</span>
                                        <button className="px-3 py-1.5 rounded-lg bg-slate-500/[0.08] text-[10px] text-slate-700">Apply Patch v2.4.1 →</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. PROGRAM KNOWLEDGE INTELLIGENCE */}
                <div className="mb-40">
                    <div className="flex items-center gap-4 mb-4 r-up opacity-0 translate-y-10">
                        <div className="w-14 h-14 rounded-2xl bg-violet-500/[0.1] border border-violet-500/[0.2] flex items-center justify-center">
                            <BookOpen className="w-7 h-7 text-violet-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-light text-gray-900 tracking-tight">Program Knowledge Intelligence</h3>
                            <p className="text-[13px] text-gray-400 font-light mt-0.5">Capturing decades of institutional engineering wisdom</p>
                        </div>
                    </div>
                    <p className="text-[15px] text-gray-500 font-light leading-relaxed max-w-3xl mb-10 r-up opacity-0 translate-y-10">
                        Defense programs last decades. When key engineers leave or programs transition, critical knowledge is lost.
                        Program Knowledge Intelligence makes the entire institutional memory queryable — an engineer joining today
                        can understand design rationale decisions made five years ago in seconds.
                    </p>

                    {/* Problem / Solution callout */}
                    <div className="grid md:grid-cols-2 gap-5 mb-10">
                        <div className="p-6 rounded-2xl bg-red-500/[0.03] border border-red-500/[0.12] r-up opacity-0 translate-y-10">
                            <div className="flex items-center gap-2 mb-3">
                                <XCircle className="w-5 h-5 text-red-400" />
                                <p className="text-[14px] text-gray-900 font-medium">Without Program Knowledge Intelligence</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[12px] text-gray-500 font-light flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span>New engineers spend weeks hunting for design rationale buried in SharePoint</p>
                                <p className="text-[12px] text-gray-500 font-light flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span>Trade studies are repeated because previous ones can't be found</p>
                                <p className="text-[12px] text-gray-500 font-light flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span>Lessons learned are documented once and never referenced again</p>
                                <p className="text-[12px] text-gray-500 font-light flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span>CDR decisions exist only in meeting minutes that nobody can find</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/[0.12] r-up opacity-0 translate-y-10">
                            <div className="flex items-center gap-2 mb-3">
                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                <p className="text-[14px] text-gray-900 font-medium">With Program Knowledge Intelligence</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[12px] text-gray-500 font-light flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span>Ask "why was liquid-loop cooling selected?" and get a sourced answer in seconds</p>
                                <p className="text-[12px] text-gray-500 font-light flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span>Past trade studies surface automatically when similar decisions arise</p>
                                <p className="text-[12px] text-gray-500 font-light flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span>Lessons learned are linked to active design work — not filed and forgotten</p>
                                <p className="text-[12px] text-gray-500 font-light flex items-start gap-2"><span className="text-emerald-500 mt-0.5">•</span>CDR decisions are structured, searchable, and connected to requirements</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-10">
                        {[
                            { icon: Search, title: "Semantic Search", desc: "Search by concept, not just keywords. Cross-format discovery." },
                            { icon: Scale, title: "Trade Studies", desc: "Surfaces past analysis to prevent repeating work." },
                            { icon: Link2, title: "Traceability", desc: "Links decisions to requirements and test results." },
                            { icon: UserPlus, title: "Accelerator", desc: "Conversational onboarding for new team members." }
                        ].map((item, i) => (
                            <div key={i} className="card p-5 r-up opacity-0 translate-y-10" style={{ borderRadius: '18px' }}>
                                <div className="w-10 h-10 rounded-xl bg-violet-500/[0.08] border border-violet-500/[0.12] flex items-center justify-center mb-3">
                                    <item.icon className="w-5 h-5 text-violet-600" />
                                </div>
                                <h4 className="text-[14px] text-gray-900 font-medium mb-1.5">{item.title}</h4>
                                <p className="text-[12px] text-gray-400 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── SECRET // NOFORN mock app ── FIXED */}
                    <div className="mock-app r-up opacity-0 translate-y-20 overflow-hidden">
                        <div className="class-banner class-secret">SECRET // NOFORN</div>

                        {/* Toolbar */}
                        <div className="app-toolbar">
                            <div className="flex items-center gap-4">
                                <div className="app-dots flex gap-[7px]">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="flex items-center gap-1 ml-3">
                                    <div className="app-tab active">Knowledge Search</div>
                                    <div className="app-tab">Design Rationale</div>
                                    <div className="app-tab">Program History</div>
                                    <div className="app-tab">Lessons Learned</div>
                                </div>
                            </div>
                            <span className="pill pill-r">SECRET</span>
                        </div>

                        {/* Body: sidebar + main */}
                        <div className="flex" style={{ minHeight: '520px' }}>

                            {/* Sidebar */}
                            <div className="app-sidebar flex-shrink-0 p-4 flex flex-col" style={{ width: '200px' }}>
                                <p className="label-mono px-2 mb-2">Programs</p>
                                <div className="sidebar-item active">
                                    <Folder className="w-3.5 h-3.5" />
                                    AEGIS Platform
                                </div>
                                <div className="sidebar-item">
                                    <Folder className="w-3.5 h-3.5" />
                                    Project TITAN
                                </div>
                                <div className="sidebar-item">
                                    <Folder className="w-3.5 h-3.5" />
                                    C2 Modernization
                                </div>
                                <div className="sidebar-item">
                                    <Folder className="w-3.5 h-3.5" />
                                    EW Suite v3
                                </div>

                                <p className="label-mono px-2 mb-2 mt-5">Document Types</p>
                                <div className="sidebar-item">
                                    <FileText className="w-3.5 h-3.5" />
                                    Design Docs (247)
                                </div>
                                <div className="sidebar-item">
                                    <FileText className="w-3.5 h-3.5" />
                                    CDR Packages (84)
                                </div>
                                <div className="sidebar-item">
                                    <FileText className="w-3.5 h-3.5" />
                                    Test Reports (192)
                                </div>
                                <div className="sidebar-item">
                                    <FileText className="w-3.5 h-3.5" />
                                    Trade Studies (63)
                                </div>

                                {/* Index badge pinned to bottom */}
                                <div className="mt-auto pt-4">
                                    <div className="p-3 rounded-xl bg-violet-500/[0.04] border border-violet-500/[0.1] mx-1">
                                        <p className="text-[9px] text-gray-400 font-light">
                                            <span className="text-violet-600 font-medium">586 documents</span> indexed
                                        </p>
                                        <p className="text-[9px] text-gray-400 font-light mt-0.5">Last sync: 2h ago</p>
                                    </div>
                                </div>
                            </div>

                            {/* Main chat panel */}
                            <div className="flex-1 p-6 space-y-5 overflow-y-auto border-l border-black/[0.05]">
                                <div className="chat-u">
                                    <p className="text-[13px] text-gray-700 font-light">
                                        What was the design rationale for the thermal management system in AEGIS Platform? Include trade study results and CDR decisions.
                                    </p>
                                </div>

                                <div className="chat-a">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-6 h-6 rounded-lg bg-violet-500/[0.1] flex items-center justify-center">
                                            <Bot className="w-3.5 h-3.5 text-violet-600" />
                                        </div>
                                        <span className="text-[12px] text-gray-500 font-light">
                                            Synthesized from{' '}
                                            <span className="text-violet-600 font-medium">4 classified documents</span>
                                        </span>
                                        <span className="text-[10px] text-gray-300 ml-2">2.4s</span>
                                    </div>

                                    <p className="text-[13px] text-gray-600 font-light mb-4">
                                        The AEGIS Platform TMS design evolved through three phases. Here are the source documents, ranked by relevance:
                                    </p>

                                    <div className="space-y-2 mb-5">
                                        {[
                                            {
                                                title: 'TMS Design Document Rev D',
                                                desc: 'Active cooling selected over passive — thermal load exceeded 2.4kW threshold',
                                                score: '98',
                                                dashOffset: 2
                                            },
                                            {
                                                title: 'CDR Thermal Analysis Package',
                                                desc: 'Board approved liquid-loop with vapor chamber backup',
                                                score: '94',
                                                dashOffset: 8
                                            }
                                        ].map((doc, i) => (
                                            <div
                                                key={i}
                                                className="rrow"
                                                style={{ borderColor: 'rgba(139,92,246,0.15)' }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-violet-500/[0.08] flex items-center justify-center flex-shrink-0">
                                                        <FileText className="w-4 h-4 text-violet-500" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[12px] text-gray-800 font-medium">{doc.title}</p>
                                                        <p className="text-[10px] text-gray-400 font-light">{doc.desc}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 flex-shrink-0">
                                                    <div className="conf-ring relative flex items-center justify-center" style={{ width: 30, height: 30 }}>
                                                        <svg width="30" height="30" style={{ position: 'absolute', top: 0, left: 0 }}>
                                                            <circle
                                                                cx="15" cy="15" r="11"
                                                                fill="none"
                                                                stroke="rgba(16,185,129,0.12)"
                                                                strokeWidth="2.5"
                                                            />
                                                            <circle
                                                                cx="15" cy="15" r="11"
                                                                fill="none"
                                                                stroke="#10b981"
                                                                strokeWidth="2.5"
                                                                strokeDasharray="69"
                                                                strokeDashoffset={doc.dashOffset}
                                                                strokeLinecap="round"
                                                                transform="rotate(-90 15 15)"
                                                            />
                                                        </svg>
                                                        <span className="text-[7px] text-emerald-600 font-medium" style={{ position: 'relative', zIndex: 1 }}>
                                                            {doc.score}%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. SECURE DOCUMENT INTELLIGENCE */}
                <div className="mb-40">
                    <div className="flex items-center gap-4 mb-4 r-up opacity-0 translate-y-10">
                        <div className="w-14 h-14 rounded-2xl bg-amber-500/[0.1] border border-amber-500/[0.2] flex items-center justify-center">
                            <FileLock className="w-7 h-7 text-amber-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-light text-gray-900 tracking-tight">Secure Document Intelligence</h3>
                            <p className="text-[13px] text-gray-400 font-light mt-0.5">Automated spillage detection and classification validation</p>
                        </div>
                    </div>
                    <p className="text-[15px] text-gray-500 font-light leading-relaxed max-w-3xl mb-10 r-up opacity-0 translate-y-10">
                        Classification errors are critical risks. Document Intelligence scans every document against classification guides,
                        detects spillage risks, and validates portion markings at scale.
                    </p>

                    <div className="grid md:grid-cols-4 gap-4 mb-10">
                        {[
                            { icon: Scan, title: "Spillage Detection", desc: "Scans for content exceeding classification marking." },
                            { icon: CheckSquare, title: "Marking Validation", desc: "Verifies banner and portion marks against guides." },
                            { icon: ArrowDownCircle, title: "Downgrade Analysis", desc: "Identifies documents eligible for declassification." },
                            { icon: BarChart3, title: "Analytics", desc: "Corpus-wide health and risk trend monitoring." }
                        ].map((item, i) => (
                            <div key={i} className="card p-5 r-up opacity-0 translate-y-10" style={{ borderRadius: '18px' }}>
                                <item.icon className="w-5 h-5 text-gray-600 mb-3" />
                                <h4 className="text-[14px] text-gray-900 font-medium mb-1.5">{item.title}</h4>
                                <p className="text-[12px] text-gray-400 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mock-app r-up opacity-0 translate-y-20">
                        <div className="class-banner class-ts">TOP SECRET // SCI // NOFORN</div>
                        <div className="p-6">
                            <div className="p-5 rounded-2xl bg-red-500/[0.03] border border-red-500/[0.15]">
                                <div className="flex items-center gap-2 mb-3">
                                    <AlertTriangle className="w-4 h-4 text-red-500" />
                                    <span className="text-[13px] font-medium text-gray-900">Potential Spillage Detected</span>
                                    <span className="pill pill-r ml-auto">Critical</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="p-3 rounded-xl bg-white border border-red-500/[0.1] text-xs">
                                        Reference to [CODEWORD] capability parameters — originated from TS/SCI briefing.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ADDITIONAL USE CASES */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <p className="text-lg text-gray-500 font-light r-up opacity-0 translate-y-10">Additional capabilities within the defense intelligence suite</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8" id="useCaseCards">
                        <div className="card p-8 r-up opacity-0 translate-y-10" style={{ borderRadius: '24px' }}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-slate-500/[0.1] border border-slate-500/[0.2] flex items-center justify-center">
                                    <Link className="w-6 h-6 text-slate-600" />
                                </div>
                                <h3 className="text-xl font-light text-gray-900">Supply Chain Intelligence</h3>
                            </div>
                            <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-6">
                                Maps component dependencies, identifies single-source risks, and suggests qualified alternatives before disruptions impact readiness.
                            </p>
                            <div className="space-y-2">
                                {["Dependency mapping", "Obsolescence analysis", "DLA/GIDEP integration"].map((text, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-slate-600" />
                                        <span className="text-[13px] text-gray-500 font-light">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card p-8 r-up opacity-0 translate-y-10" style={{ borderRadius: '24px' }}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-slate-500/[0.1] border border-slate-500/[0.2] flex items-center justify-center">
                                    <GitBranch className="w-6 h-6 text-slate-600" />
                                </div>
                                <h3 className="text-xl font-light text-gray-900">Cross-Program Intelligence</h3>
                            </div>
                            <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-6">
                                Federated search across authorized programs — sharing knowledge without moving or exposing sensitive program data.
                            </p>
                            <div className="space-y-2">
                                {["Knowledge transfer", "Lesson learned reuse", "Zero data movement"].map((text, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-slate-600" />
                                        <span className="text-[13px] text-gray-500 font-light">{text}</span>
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