"use client";

import React from 'react';
import { Search, Monitor, Terminal, Layout, Shield, Cpu, Zap, Activity } from 'lucide-react';

export default function IntelligenceProducts() {
    return (
        <section className="py-28 relative overflow-hidden bg-white/30">
            <div className="absolute inset-0 mesh-bg-sky opacity-10"></div>

            <div className="relative max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-20">
                    <p className="text-[10px] text-sky-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Intelligence Products</p>
                    <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up leading-[1.1]">AI That Speaks Aerospace</h2>
                    <p className="text-gray-500 font-light max-w-xl mx-auto r-up">
                        Purpose-built products for every function — deployed on your infrastructure, every answer traceable, every interaction auditable.
                    </p>
                </div>

                {/* 01 ENGINEERING */}
                <div className="mb-24">
                    <div className="mb-8 r-up">
                        <div className="flex items-center gap-3 mb-1">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-500/[0.08]">
                                <span className="font-code text-xs text-sky-600 font-bold">01</span>
                            </div>
                            <h3 className="text-gray-800 font-medium text-xl">Engineering Knowledge Assistant</h3>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-sky-500/[0.05] border border-sky-500/[0.1] text-sky-600 text-[9px] font-normal">Engineering</span>
                        </div>
                        <p className="text-sm text-gray-400 font-light ml-11">Ask engineering questions in plain language — get cited answers from design docs, test reports, trade studies, and legacy archives</p>
                    </div>

                    <div className="r-up">
                        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_20px_60px_-20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] border border-black/[0.04] transition-all duration-500 hover:shadow-[0_1px_3px_rgba(0,0,0,0.06),0_40px_80px_-20px_rgba(14,165,233,0.1),0_0_0_1px_rgba(14,165,233,0.12)]">
                            <div className="bg-gradient-to-r from-sky-500/[0.04] via-cyan-500/[0.03] to-sky-500/[0.04] border-b border-sky-500/[0.1] py-1 text-center">
                                <span className="font-code text-[8px] text-sky-600/50 tracking-[0.15em] uppercase">ITAR Controlled • Air-Gapped • On-Premise</span>
                            </div>
                            <div className="bg-[#fafafa] border-b border-black/[0.06] px-4 py-2.5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffd93d]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#6bff91]"></span>
                                    </div>
                                    <span className="font-code text-[10px] text-gray-400 ml-2">engineering/knowledge</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-3.5 h-3.5 text-sky-500/50" />
                                    <span className="text-[10px] text-sky-600/60 font-medium">Sovereign Mode</span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col md:flex-row gap-6 bg-white min-h-[300px]">
                                <div className="flex-1 space-y-4">
                                    <div className="bg-sky-500/[0.03] border border-sky-500/[0.1] rounded-xl p-4">
                                        <p className="text-[11px] text-sky-600 font-medium mb-2 uppercase tracking-wider">User Query</p>
                                        <p className="text-[13px] text-gray-700 font-light leading-relaxed">"What were the lessons learned regarding titanium alloy stress corrosion in the Block III landing gear fatigue tests, and do we have any equivalent data for Block IV materials?"</p>
                                    </div>
                                    <div className="bg-white border border-black/[0.05] rounded-xl p-4 shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center">
                                                <Zap className="w-3 h-3 text-sky-500" />
                                            </div>
                                            <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">AI Analysis</span>
                                        </div>
                                        <p className="text-[13px] text-gray-600 font-light leading-relaxed mb-4">Based on Analysis Report <span className="text-sky-600 font-medium">AR-4402-B3</span> and Fatigue Study <span className="text-sky-600 font-medium">FS-990-L</span>:</p>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2 text-[12px] text-gray-500 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0"></div>
                                                <span>Block III failures occurred at <span className="text-gray-800 font-medium">95% limit load</span> specifically in saline-mist environments.</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-[12px] text-gray-500 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0"></div>
                                                <span>Recommendation was to switch to <span className="text-gray-800 font-medium">Ti-6Al-4V ELI</span> with improved shot-peening spec.</span>
                                            </li>
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-sky-50 border border-sky-100 text-[10px] text-sky-600 font-code">
                                                <Activity className="w-3 h-3" /> Source: FS-990-L.pdf (p. 142)
                                            </div>
                                            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-50 border border-amber-100 text-[10px] text-amber-600 font-code">
                                                <Shield className="w-3 h-3" /> PII Redacted
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-[220px] bg-gray-50 rounded-xl p-4 border border-black/[0.03]">
                                    <p className="text-[10px] text-gray-400 font-medium mb-4 uppercase tracking-widest">Metadata Context</p>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[9px] text-gray-400 mb-1">Clearance Level</p>
                                            <div className="inline-flex items-center px-2 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-100 text-[9px] font-medium font-code">Classified / ITAR</div>
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-gray-400 mb-1">Program</p>
                                            <div className="inline-flex items-center px-2 py-0.5 rounded bg-sky-50 text-sky-600 border border-sky-100 text-[9px] font-medium font-code">Block-IV Pegasus</div>
                                        </div>
                                        <div className="pt-2 border-t border-black/[0.05]">
                                            <p className="text-[9px] text-gray-400 mb-2">Knowledge Graph</p>
                                            <div className="space-y-1.5">
                                                <div className="h-1 bg-sky-200 rounded-full w-full"></div>
                                                <div className="h-1 bg-sky-200 rounded-full w-[85%]"></div>
                                                <div className="h-1 bg-sky-100 rounded-full w-[60%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 02 MANUFACTURING */}
                <div className="mb-24">
                    <div className="mb-8 r-up">
                        <div className="flex items-center gap-3 mb-1">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/[0.08]">
                                <span className="font-code text-xs text-violet-600 font-bold">02</span>
                            </div>
                            <h3 className="text-gray-800 font-medium text-xl">Manufacturing Process Assistant</h3>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-violet-500/[0.05] border border-violet-500/[0.1] text-violet-600 text-[9px] font-normal">Manufacturing</span>
                        </div>
                        <p className="text-sm text-gray-400 font-light ml-11">Augment machinists and technicians with instant access to shop floor manuals, tooling specs, and real-time troubleshooting</p>
                    </div>

                    <div className="r-up">
                        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_20px_60px_-20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] border border-black/[0.04] transition-all duration-500">
                            <div className="bg-[#fafafa] border-b border-black/[0.06] px-4 py-2.5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffd93d]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#6bff91]"></span>
                                    </div>
                                    <span className="font-code text-[10px] text-gray-400 ml-2">manufacturing/process-monitor</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-[10px] text-emerald-600 font-medium uppercase tracking-wider">Live Feed</span>
                                </div>
                            </div>
                            <div className="p-6 grid md:grid-cols-2 gap-8 bg-white min-h-[300px]">
                                <div className="border border-black/[0.05] rounded-xl p-5 bg-gray-50/50">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Station 42-B Analysis</h4>
                                        <span className="text-[10px] font-code text-violet-600 font-medium">Part: AERO-F35-LN12</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-white p-3 rounded-lg border border-black/[0.04] shadow-sm">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[11px] text-gray-600">Spindle Vibration</span>
                                                <span className="text-[11px] text-rose-500 font-medium">Anomaly Detected</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full w-full overflow-hidden">
                                                <div className="h-full bg-rose-500 w-[85%]"></div>
                                            </div>
                                        </div>
                                        <div className="bg-violet-50/50 border border-violet-200/50 rounded-lg p-4">
                                            <p className="text-[11px] text-violet-600 font-bold mb-2 uppercase tracking-tight">AI Diagnostic</p>
                                            <p className="text-[12.5px] text-gray-700 font-light leading-relaxed mb-3">Vibration signature matches tool wear profile documented in <span className="font-medium">Spec-M-33</span>. Recommended intervention within 45 minutes.</p>
                                            <div className="flex gap-2">
                                                <button className="px-3 py-1.5 bg-violet-600 text-white text-[10px] font-medium rounded-lg">View Maintenance Manual</button>
                                                <button className="px-3 py-1.5 bg-white border border-violet-200 text-violet-600 text-[10px] font-medium rounded-lg">Submit Work Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-2">
                                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-2">Reference Engine</p>
                                    <div className="space-y-3">
                                        {[
                                            { label: 'Tooling Specs', value: 'Correct (v2.1)', icon: Shield },
                                            { label: 'Tolerance Delta', value: '+0.002mm', icon: Activity },
                                            { label: 'Coolant Flow', value: 'Optimal', icon: Zap }
                                        ].map((stat, i) => (
                                            <div key={i} className="flex items-center justify-between py-2 border-b border-black/[0.03]">
                                                <div className="flex items-center gap-2">
                                                    <stat.icon className="w-3.5 h-3.5 text-gray-400" />
                                                    <span className="text-[12px] text-gray-600 font-light">{stat.label}</span>
                                                </div>
                                                <span className="text-[12px] text-gray-800 font-medium font-code">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 p-4 rounded-xl bg-orange-50 border border-orange-100 flex gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-orange-200 flex items-center justify-center flex-shrink-0">
                                            <Activity className="w-4 h-4 text-orange-700" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] text-orange-700 font-medium">Preventative Insight</p>
                                            <p className="text-[11px] text-orange-600/80 font-light leading-relaxed">Similar patterns at Station 11-A led to 3-hour downtime. Correct now to preserve shift quota.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 03 QUALITY */}
                <div className="mb-24">
                    <div className="mb-8 r-up">
                        <div className="flex items-center gap-3 mb-1">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/[0.08]">
                                <span className="font-code text-xs text-emerald-600 font-bold">03</span>
                            </div>
                            <h3 className="text-gray-800 font-medium text-xl">Quality & Compliance Assistant</h3>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/[0.1] text-emerald-600 text-[9px] font-normal">Quality</span>
                        </div>
                        <p className="text-sm text-gray-400 font-light ml-11">Automate non-conformance (NCR) analysis, audit preparation, and traceability documentation for aerospace compliance</p>
                    </div>

                    <div className="r-up">
                        <div className="bg-[#1a1a2e] rounded-[24px] overflow-hidden shadow-2xl border border-white/5">
                            <div className="px-6 py-4 flex items-center justify-between border-b border-white/10 bg-white/[0.02]">
                                <div className="flex items-center gap-3">
                                    <Monitor className="w-4 h-4 text-emerald-500" />
                                    <span className="text-[11px] text-white/50 font-mono tracking-widest uppercase">Audit.OS // AS9100-Ready</span>
                                </div>
                                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                    <span className="text-[9px] text-emerald-500 font-medium font-mono uppercase tracking-widest">Compliance Active</span>
                                </div>
                            </div>
                            <div className="p-8 grid lg:grid-cols-12 gap-10">
                                <div className="lg:col-span-4 space-y-6">
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] text-white/30 font-bold uppercase tracking-[.2em] mb-4">Quality Dashboard</h4>
                                        {[
                                            { label: 'Open NCRs', val: '04', color: 'emerald' },
                                            { label: 'Audit Velocity', val: '98%', color: 'sky' },
                                            { label: 'Risk Score', val: 'Low', color: 'emerald' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex items-center justify-between hover:bg-white/[0.04] transition-colors cursor-pointer group">
                                                <span className="text-xs text-white/60 font-light">{item.label}</span>
                                                <span className={`text-sm font-mono font-bold text-${item.color}-400 group-hover:scale-110 transition-transform`}>{item.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:col-span-8 bg-white/[0.03] border border-white/5 rounded-2xl p-6 relative">
                                    <div className="absolute top-4 right-4 text-[9px] font-mono text-white/20">SEQ_8892_Q</div>
                                    <h5 className="text-sm text-white font-medium mb-6">Automated Root Cause Analysis</h5>
                                    <div className="space-y-6">
                                        <div className="p-4 bg-emerald-500/[0.03] border border-emerald-500/10 rounded-xl">
                                            <p className="text-[11px] text-emerald-500/80 font-bold mb-2 uppercase tracking-wider">NCR# 2024-0042</p>
                                            <p className="text-[13px] text-white/70 font-light leading-relaxed">Cross-referencing this non-conformance with historical data from the 2022 internal audit. Pattern suggests <span className="text-white font-medium underline decoration-emerald-500/40">material fatigue at point-of-source</span> rather than machining error.</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-[11px]">
                                                <span className="text-white/40">Source Evidence Correlation</span>
                                                <span className="text-emerald-400 font-mono">94% Confidence</span>
                                            </div>
                                            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500 w-[94%]"></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3 mt-4">
                                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                                                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                                                <span className="text-[10px] text-white/60">Generate Compliance Memo</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                                                <Terminal className="w-3.5 h-3.5 text-white/40" />
                                                <span className="text-[10px] text-white/60">Trace to AS9100 Clause 8.7</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 04 SHOP FLOOR */}
                <div className="mb-24">
                    <div className="mb-8 r-up">
                        <div className="flex items-center gap-3 mb-1">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/[0.08]">
                                <span className="font-code text-xs text-orange-600 font-bold">04</span>
                            </div>
                            <h3 className="text-gray-800 font-medium text-xl">Shop Floor AI Assistant</h3>
                            <span className="domain-pill bg-violet-500/[0.05] border border-violet-500/[0.1] text-violet-600 text-[9px] !py-1 !px-2.5">Manufacturing</span>
                        </div>
                        <p className="text-sm text-gray-400 font-light ml-11">Hands-on intelligence for technicians and machinists — work instructions, tooling specs, torque values, material certs, and troubleshooting at point of use</p>
                    </div>

                    <div className="r-up mb-6">
                        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_20px_60px_-20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] border border-black/[0.04]">
                            <div className="bg-[#fafafa] border-b border-black/[0.06] px-4 py-2.5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffd93d]"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#6bff91]"></span>
                                    </div>
                                    <span className="font-code text-[10px] text-gray-400 ml-2">shop-floor/assistant</span>
                                </div>
                                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-500/[0.06] text-orange-600 border border-orange-500/[0.1] text-[9px] font-code uppercase">Station 14 • Spar Assembly</span>
                            </div>
                            <div className="flex flex-col md:flex-row min-h-[400px]">
                                <div className="w-14 bg-[#fafafa] border-r border-black/[0.05] py-4 flex flex-col items-center gap-2 flex-shrink-0 hidden md:flex">
                                    <div className="w-9 h-9 rounded-xl bg-orange-500/[0.08] flex items-center justify-center text-orange-500">
                                        <Activity className="w-4 h-4" />
                                    </div>
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-300">
                                        <Terminal className="w-4 h-4" />
                                    </div>
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-300">
                                        <Layout className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex-1 p-6 space-y-4">
                                    <div className="flex justify-end">
                                        <div className="max-w-[80%] bg-orange-500/[0.06] border border-orange-500/[0.1] rounded-2xl rounded-br-md p-4">
                                            <p className="text-[12px] text-gray-800 leading-relaxed">What's the torque spec for the Hi-Lok fasteners on the 777 forward spar cap? And do I need wet install?</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-[10px] text-gray-400">
                                            <Zap className="w-3.5 h-3.5 text-orange-500" />
                                            <span>From <span className="text-gray-600 font-medium font-code">SRM 51-40-01</span> and <span className="text-gray-600 font-medium font-code">BAC5010 Rev N</span>:</span>
                                        </div>
                                        <div className="grid gap-2">
                                            {[
                                                { label: 'Torque', val: '50-70 in-lbs for HL19 (3/16") / 100-125 in-lbs for HL19 (1/4")', ref: 'SRM 51-40-01 Table 4-2' },
                                                { label: 'Wet Install', val: 'Yes — PR-1776 Class B sealant required per BAC5010 §6.3', ref: 'BAC5010 Rev N §6.3.2' },
                                                { label: 'Cure', val: 'Sealant must cure 24hr min at 77°F before pressure test', ref: 'PR-1776 TDS §3.4' }
                                            ].map((item, idx) => (
                                                <div key={idx} className="bg-white border border-black/[0.04] rounded-xl p-3 shadow-sm hover:border-orange-500/20 transition-all">
                                                    <p className="text-[11px] text-gray-800 mb-1"><span className="font-bold">{item.label}:</span> {item.val}</p>
                                                    <p className="text-[9px] text-gray-300 font-code uppercase tracking-wider">{item.ref}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-amber-50/50 border border-amber-200/50 rounded-xl p-3">
                                            <p className="text-[10px] text-amber-700 leading-relaxed font-light">
                                                <span className="font-bold">Reminder:</span> Verify collar seating — collar must be flush ±0.005" per BAC5583 §4.1. Reject criteria: any visible gap between collar and material surface.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-32 r-up">
                        {[
                            { icon: Search, title: 'Natural Language Q&A', desc: "Technicians ask questions like they'd ask a senior colleague. AI answers from work instructions, SRMs, and process specs." },
                            { icon: Monitor, title: 'Visual Defect Lookup', desc: "Upload a photo of a defect and get matched to accept/reject criteria from the relevant spec instantly." },
                            { icon: Cpu, title: 'Smart Checklists', desc: "Context-aware checklists that adapt based on part, process, and work order. Highlights critical steps." },
                            { icon: Activity, title: 'Multi-Language', desc: "Supports English, Spanish, French, and Mandarin for global manufacturing sites. Native language support." }
                        ].map((feat, idx) => (
                            <div key={idx} className="bg-white/70 border border-black/[0.05] p-5 rounded-2xl transition-all hover:bg-white/90 hover:border-sky-500/15">
                                <div className="flex items-center gap-2 mb-3">
                                    <feat.icon className="w-4 h-4 text-orange-500" />
                                    <p className="text-gray-800 font-medium text-sm">{feat.title}</p>
                                </div>
                                <p className="text-[11px] text-gray-500 font-light leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
