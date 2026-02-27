"use client";

import React from 'react';
import {
    Wrench, Boxes, FileCheck2, Lightbulb,
    Sparkles, BookOpen, CalendarClock, Radar,
    Shuffle, GitBranch, FileOutput, Bell,
    BellRing, Globe, Activity
} from 'lucide-react';

export default function SecondaryProducts() {
    return (
        <section className="py-24 relative overflow-hidden bg-white/50">
            <div className="absolute inset-0 mesh-bg-sky opacity-10"></div>
            <div className="relative max-w-[1200px] mx-auto px-6">

                {/* 05 & 06 MRO + SUPPLY CHAIN */}
                <div className="grid lg:grid-cols-2 gap-8 mb-24">
                    {/* 05 MRO */}
                    <div className="r-left">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-500/[0.08]">
                                <span className="font-code text-xs text-rose-600 font-bold">05</span>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-medium text-lg leading-tight">MRO & Aftermarket Intelligence</h3>
                                <span className="inline-flex items-center px-2 py-0.5 rounded bg-rose-500/[0.05] border border-rose-500/[0.1] text-rose-600 text-[8px] font-medium uppercase tracking-wider">MRO</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_20px_60px_-20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] border border-black/[0.04] mb-6">
                            <div className="bg-[#fafafa] border-b border-black/[0.06] px-4 py-2.5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 rounded-full bg-[#ff6b6b]"></span>
                                        <span className="w-2 h-2 rounded-full bg-[#ffd93d]"></span>
                                        <span className="w-2 h-2 rounded-full bg-[#6bff91]"></span>
                                    </div>
                                    <span className="font-code text-[9px] text-gray-400 ml-2 uppercase tracking-tight">mro/workscope</span>
                                </div>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active Workscopes</span>
                                    <span className="px-2 py-0.5 bg-rose-500/[0.06] text-rose-600 border border-rose-500/[0.1] rounded-full text-[9px] font-code">3 Aircraft in shop</span>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { msn: 'MSN 4872 — C-Check', tasks: '42 tasks remaining', progress: 68 },
                                        { msn: 'MSN 5103 — Engine Change', tasks: '7 tasks remaining', progress: 89 }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50/50 border border-black/[0.03] rounded-xl">
                                            <div>
                                                <p className="text-[10px] text-gray-700 font-medium">{item.msn}</p>
                                                <p className="text-[8px] text-gray-400">{item.tasks} • {item.progress}% complete</p>
                                            </div>
                                            <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-emerald-500 to-sky-500" style={{ width: `${item.progress}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-3">
                                    <div className="flex items-center gap-2 mb-1.5 text-sky-600">
                                        <Sparkles className="w-3 h-3" />
                                        <span className="text-[9px] font-bold uppercase tracking-wider">SRM Lookup</span>
                                    </div>
                                    <p className="text-[9px] text-gray-500 leading-relaxed font-light">
                                        "What's the repair limit for corrosion on the keel beam web per SRM 53-00-01?" — <span className="text-gray-700 font-medium">AI: Max depth 10% of nominal thickness, per §3.2.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: BookOpen, title: 'SRM/CMM Q&A', desc: 'Instant answers from structural repair and component manuals.', color: 'rose' },
                                { icon: CalendarClock, title: 'TAT Optimization', desc: 'AI sequences tasks to minimize aircraft-on-ground time.', color: 'rose' }
                            ].map((feat, idx) => (
                                <div key={idx} className="bg-white/60 border border-black/[0.05] p-4 rounded-2xl transition-all hover:bg-white/90">
                                    <div className="flex items-center gap-2 mb-2">
                                        <feat.icon className={`w-3.5 h-3.5 text-${feat.color}-500`} />
                                        <p className="text-gray-800 font-medium text-xs">{feat.title}</p>
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-light leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 06 SUPPLY CHAIN */}
                    <div className="r-right">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/[0.08]">
                                <span className="font-code text-xs text-orange-600 font-bold">06</span>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-medium text-lg leading-tight">Supply Chain Risk Intelligence</h3>
                                <span className="inline-flex items-center px-2 py-0.5 rounded bg-orange-500/[0.05] border border-orange-500/[0.1] text-orange-600 text-[8px] font-medium uppercase tracking-wider">Supply Chain</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_20px_60px_-20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] border border-black/[0.04] mb-6">
                            <div className="bg-[#fafafa] border-b border-black/[0.06] px-4 py-2.5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 rounded-full bg-[#ff6b6b]"></span>
                                        <span className="w-2 h-2 rounded-full bg-[#ffd93d]"></span>
                                        <span className="w-2 h-2 rounded-full bg-[#6bff91]"></span>
                                    </div>
                                    <span className="font-code text-[9px] text-gray-400 ml-2 uppercase tracking-tight">supply-chain/risk</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                                    <span className="text-[8px] text-orange-600 font-code font-bold">3 ALERTS</span>
                                </div>
                            </div>
                            <div className="p-5 space-y-4">
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">Risk Monitor</span>
                                <div className="space-y-2">
                                    {[
                                        { part: 'Connector P/N 7842', status: '+6 wk lead', color: 'rose' },
                                        { part: 'AL-7075-T6 spec change', status: 'Review', color: 'orange' },
                                        { part: 'PT-114 single-source', status: 'Obsolescence', color: 'orange' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50/50 border border-black/[0.03] rounded-xl">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full bg-${item.color == 'rose' ? 'rose-500' : 'orange-500'}`}></div>
                                                <span className="text-[10px] text-gray-600 pointer-events-none">{item.part}</span>
                                            </div>
                                            <span className={`px-2 py-0.5 rounded text-[8px] font-code border ${item.color == 'rose' ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-orange-50 text-orange-600 border-orange-100'}`}>
                                                {item.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-3">
                                    <div className="flex items-center gap-2 mb-1.5 text-sky-600">
                                        <Activity className="w-3 h-3" />
                                        <span className="text-[9px] font-bold uppercase tracking-wider">Impact Prediction</span>
                                    </div>
                                    <p className="text-[9px] text-gray-500 leading-relaxed font-light">
                                        P/N 7842 delay impacts MS-7. <span className="text-gray-700 font-medium underline decoration-sky-500/30">2 QPL-qualified alternatives</span> available. Recommend dual-source to TE.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Radar, title: 'Lead Time Tracking', desc: '1,200+ part numbers tracked. AI predicts inflation 6-12 months early.', color: 'orange' },
                                { icon: Shuffle, title: 'Alt-Source Finder', desc: 'QPL/QML database search with form-fit-function compatibility scoring.', color: 'orange' }
                            ].map((feat, idx) => (
                                <div key={idx} className="bg-white/60 border border-black/[0.05] p-4 rounded-2xl transition-all hover:bg-white/90">
                                    <div className="flex items-center gap-2 mb-2">
                                        <feat.icon className={`w-3.5 h-3.5 text-${feat.color == 'orange' ? 'orange-500' : 'orange-500'}`} />
                                        <p className="text-gray-800 font-medium text-xs">{feat.title}</p>
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-light leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 07 & 08 CERT + LESSONS */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* 07 CERTIFICATION */}
                    <div className="r-left">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500/[0.08]">
                                <span className="font-code text-xs text-teal-600 font-bold">07</span>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-medium text-lg leading-tight">Certification Compliance</h3>
                                <span className="inline-flex items-center px-2 py-0.5 rounded bg-teal-500/[0.05] border border-teal-500/[0.1] text-teal-600 text-[8px] font-medium uppercase tracking-wider">Certification</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_20px_60px_-20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] border border-black/[0.04] mb-6">
                            <div className="bg-[#fafafa] border-b border-black/[0.06] px-4 py-2.5">
                                <span className="font-code text-[9px] text-gray-400 uppercase tracking-tight">certification/do-178c</span>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { label: 'HLR', val: '94%', color: 'emerald' },
                                        { label: 'LLR', val: '91%', color: 'emerald' },
                                        { label: 'Test', val: '87%', color: 'orange' }
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-gray-50/50 border border-black/[0.03] p-3 rounded-xl text-center">
                                            <p className="text-[8.5px] text-gray-400 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                                            <p className={`text-xl font-light text-${stat.color == 'emerald' ? 'emerald-600' : 'orange-600'}`}>{stat.val}</p>
                                            <div className="w-full h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                                                <div className={`h-full bg-${stat.color == 'emerald' ? 'emerald-500' : 'orange-500'}`} style={{ width: stat.val }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between p-2.5 bg-gray-50/50 border border-black/[0.03] rounded-lg">
                                        <span className="text-[9.5px] text-gray-600">HLR-127: Fault detection logic</span>
                                        <span className="px-2 py-0.5 bg-rose-50 text-rose-600 border border-rose-100 rounded text-[8px] font-code uppercase">Missing Trace</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2.5 bg-gray-50/50 border border-black/[0.03] rounded-lg">
                                        <span className="text-[9.5px] text-gray-600">TC-045–052: Test results</span>
                                        <span className="px-2 py-0.5 bg-orange-50 text-orange-600 border border-orange-100 rounded text-[8px] font-code uppercase">Pending</span>
                                    </div>
                                </div>
                                <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-3">
                                    <p className="text-[9px] text-gray-500 leading-relaxed font-light">
                                        <span className="text-teal-600 font-bold">AI Recommendation:</span> Prioritize HLR-127 trace (est. 3.5 days) before DER review. Schedule TC-045–052 in Sprint 24.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: GitBranch, title: 'Req Traceability', desc: 'Bi-directional HLR → LLR → Code → Test analysis for DO-178C, DO-254 Compliance.', color: 'teal' },
                                { icon: FileOutput, title: 'DER Reports', desc: 'One-click export of compliance checklists for FAA/EASA review.', color: 'teal' }
                            ].map((feat, idx) => (
                                <div key={idx} className="bg-white/60 border border-black/[0.05] p-4 rounded-2xl transition-all hover:bg-white/90">
                                    <div className="flex items-center gap-2 mb-2">
                                        <feat.icon className={`w-3.5 h-3.5 text-${feat.color}-500`} />
                                        <p className="text-gray-800 font-medium text-xs">{feat.title}</p>
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-light leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 08 LESSONS LEARNED */}
                    <div className="r-right">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/[0.08]">
                                <span className="font-code text-xs text-blue-600 font-bold">08</span>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-medium text-lg leading-tight">Lessons Learned Intelligence</h3>
                                <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-500/[0.05] border border-blue-500/[0.1] text-blue-600 text-[8px] font-medium uppercase tracking-wider">Cross-Function</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_20px_60px_-20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] border border-black/[0.04] mb-6">
                            <div className="bg-[#fafafa] border-b border-black/[0.06] px-4 py-2.5">
                                <span className="font-code text-[9px] text-gray-400 uppercase tracking-tight">knowledge/lessons</span>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-3 flex items-center gap-2">
                                    <Bell className="w-3.5 h-3.5 text-sky-500" />
                                    <span className="text-[9px] text-sky-600 font-bold uppercase tracking-wider">3 Proactive matches based on current work</span>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { title: 'Refrigerant seal degradation', prog: '787 Program (2017)', risk: 'High', rColor: 'rose' },
                                        { title: 'ECS flow sensor false readings', prog: 'A350 Program (2019)', risk: 'Med', rColor: 'orange' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-3 bg-gray-50/50 border border-black/[0.03] rounded-xl group cursor-pointer hover:border-blue-500/20 transition-all">
                                            <div className="flex items-center justify-between mb-1">
                                                <p className="text-[10px] text-gray-700 font-medium">{item.title}</p>
                                                <span className={`px-1.5 py-0.5 rounded text-[7px] font-bold uppercase ${item.rColor == 'rose' ? 'bg-rose-50 text-rose-600' : 'bg-orange-50 text-orange-600'}`}>{item.risk}</span>
                                            </div>
                                            <p className="text-[9px] text-gray-400 mb-2 font-light">{item.prog}: FFKM material change yielded improvement.</p>
                                            <span className="text-[8px] text-blue-500 font-code group-hover:underline">View Record →</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: BellRing, title: 'Proactive Surfacing', desc: 'Lessons pushed to you — context-aware matching across all engineering functions.', color: 'blue' },
                                { icon: Globe, title: 'Cross-Program', desc: 'Ingests service bulletins, ADs, MRB dispositions, and incident investigations.', color: 'blue' }
                            ].map((feat, idx) => (
                                <div key={idx} className="bg-white/60 border border-black/[0.05] p-4 rounded-2xl transition-all hover:bg-white/90">
                                    <div className="flex items-center gap-2 mb-2">
                                        <feat.icon className={`w-3.5 h-3.5 text-${feat.color}-500`} />
                                        <p className="text-gray-800 font-medium text-xs">{feat.title}</p>
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-light leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
