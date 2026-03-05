"use client";

import React, { useEffect, useRef } from "react";
import {
  MessageSquare, Search, Folder, BarChart2, Settings,
  Lock, ShieldCheck, FileText, Bookmark, TrendingUp,
  Receipt, AlertTriangle, PieChart, Bot, Database,
  Building2, ShieldAlert, FileCheck, Filter, Download,
  ScrollText, Brain, Eye,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   SHARED PRIMITIVES
───────────────────────────────────────────── */

function AppChrome({ title, right }) {
  return (
    <div className="app-chrome text-gray-500">
      <div className="app-dots flex gap-[7px]">
        <span /><span /><span />
      </div>
      <span className="app-title text-white">{title}</span>
      {right && <div className="chrome-right">{right}</div>}
    </div>
  );
}

function AppStatus({ items }) {
  return (
    <div className="app-status text-gray-700">
      <div className="live" />
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span>·</span>}
          <span>{item}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   UC1 — POLICY & COMPLIANCE
───────────────────────────────────────────── */

function UC1PolicyCompliance() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Header reveal
      tl.fromTo(".uc1-tag", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })
        .fromTo(".uc1-heading", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .fromTo(".uc1-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")

        // App container slides up
        .fromTo(".uc1-app", { opacity: 0, y: 60, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }, "-=0.2")

        // User chat bubble
        .fromTo(".uc1-user-bubble", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.5, ease: "back.out(1.4)" }, "-=0.2")

        // AI response text
        .fromTo(".uc1-ai-text", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.1")

        // Compliance cards stagger
        .fromTo(".uc1-card",
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12, ease: "back.out(1.3)" },
          "-=0.1"
        )

        // Gap highlight
        .fromTo(".uc1-gap", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }, "-=0.1")

        // Confidence bar animation
        .fromTo(".uc1-confidence-bar", { width: "0%" }, { width: "94%", duration: 1, ease: "power2.inOut" }, "-=0.2")
        .fromTo(".uc1-confidence-row", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.8")

        // Right panel docs stagger
        .fromTo(".uc1-doc",
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.6"
        )

        // Score card
        .fromTo(".uc1-score", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" }, "-=0.2")

        // Score number count up
        .fromTo(".uc1-score-num",
          { innerText: "0%" },
          {
            innerText: "78%",
            duration: 1.2,
            snap: { innerText: 1 },
            ease: "power2.inOut",
            onUpdate: function () {
              const el = document.querySelector(".uc1-score-num");
              if (el) el.textContent = Math.round(this.targets()[0]._gsap?.innerText ?? 0) + "%";
            },
          },
          "-=0.4"
        );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="uc1-tag text-xs font-mono tracking-[0.3em] text-emerald-600 uppercase" style={{ opacity: 0 }}>
            Use Case 01
          </span>
          <h2 className="uc1-heading mt-5 text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight" style={{ opacity: 0 }}>
            Policy & Compliance Intelligence
          </h2>
          <p className="uc1-desc mt-6 text-base md:text-lg text-gray-600 leading-relaxed" style={{ opacity: 0 }}>
            Natural-language Q&A across governance frameworks with structured
            compliance mapping, automated gap detection, and full audit traceability.
          </p>
        </div>

        {/* App Container */}
        <div className="uc1-app rounded-3xl border border-gray-200 bg-white shadow-2xl overflow-hidden" style={{ opacity: 0 }}>

          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 bg-red-400 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <span className="text-sm text-gray-700 font-medium">
                Mentis — Compliance Intelligence
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                <Lock className="w-3 h-3" /> On-Premise
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-600 text-white">
                JUDGE Active
              </span>
            </div>
          </div>

          {/* Responsive Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-[70px_1fr_320px]">

            {/* Sidebar */}
            <div className="hidden lg:flex border-r border-gray-100 bg-gray-50 flex-col items-center py-10 gap-10">
              {[MessageSquare, Search, Folder, BarChart2, Settings].map((Icon, i) => (
                <button key={i} className={`p-3 rounded-xl transition ${i === 0 ? "bg-emerald-100 shadow-sm" : "hover:bg-gray-200"}`}>
                  <Icon className={`w-5 h-5 ${i === 0 ? "text-emerald-700" : "text-gray-500"}`} />
                </button>
              ))}
            </div>

            {/* Main Chat Area */}
            <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14 space-y-10">

              {/* User Question */}
              <div className="flex justify-end">
                <div className="uc1-user-bubble bg-gray-900 text-white px-5 py-4 rounded-2xl max-w-full sm:max-w-md md:max-w-xl text-sm leading-relaxed shadow" style={{ opacity: 0 }}>
                  Does our current AML framework satisfy DORA Article 15 requirements?
                </div>
              </div>

              {/* AI Response */}
              <div className="max-w-3xl space-y-8">
                <p className="uc1-ai-text text-gray-700 leading-relaxed text-sm md:text-base" style={{ opacity: 0 }}>
                  Based on analysis of{" "}
                  <strong>2,847 governance documents</strong>, your AML framework
                  substantially satisfies Article 15 but has one material gap.
                </p>

                {/* Compliance Matrix */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="uc1-card p-6 rounded-2xl border border-emerald-100 bg-emerald-50" style={{ opacity: 0 }}>
                    <p className="text-xs font-mono text-emerald-700 mb-2">Art. 15.2a</p>
                    <p className="text-sm text-gray-700">Transaction Monitoring</p>
                    <p className="mt-4 text-emerald-700 font-semibold">✓ Covered</p>
                  </div>
                  <div className="uc1-card p-6 rounded-2xl border border-emerald-100 bg-emerald-50" style={{ opacity: 0 }}>
                    <p className="text-xs font-mono text-emerald-700 mb-2">Art. 15.3</p>
                    <p className="text-sm text-gray-700">Third-Party Screening</p>
                    <p className="mt-4 text-emerald-700 font-semibold">✓ Covered</p>
                  </div>
                  <div className="uc1-card p-6 rounded-2xl border border-amber-200 bg-amber-50" style={{ opacity: 0 }}>
                    <p className="text-xs font-mono text-amber-700 mb-2">Art. 15.4</p>
                    <p className="text-sm text-gray-700">Resilience Testing</p>
                    <p className="mt-4 text-amber-700 font-semibold">⚠ Gap Identified</p>
                  </div>
                </div>

                {/* Gap Highlight */}
                <div className="uc1-gap relative" style={{ opacity: 0 }}>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-full" />
                  <div className="pl-6 bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-gray-700 leading-relaxed">
                    <strong className="text-amber-700">Gap:</strong> Digital operational resilience testing under Art. 15.4 requires expanded ICT risk scenarios not currently documented in AML-Policy-v4.2.
                  </div>
                </div>

                {/* Confidence */}
                <div className="uc1-confidence-row flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-gray-100 text-sm text-gray-600" style={{ opacity: 0 }}>
                  <span className="flex items-center gap-2 text-emerald-700 font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    Verified by JUDGE
                  </span>
                  <span>94.2% Confidence</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="uc1-confidence-bar bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full" style={{ width: "0%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="border-t lg:border-t-0 lg:border-l border-gray-100 bg-gray-50 p-6 md:p-8 lg:p-10">
              <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-6">Related Documents</p>
              <div className="space-y-4">
                {["AML-Policy-v4.2.pdf","DORA-Compliance-Guide.pdf","Board-Memo-Q3-2024.pdf","ICT-Risk-Framework.pdf"].map((doc, i) => (
                  <div key={doc} className="uc1-doc p-4 rounded-xl bg-white border border-gray-200 hover:border-emerald-200 transition shadow-sm" style={{ opacity: 0 }}>
                    <p className="text-sm text-gray-700">{doc}</p>
                    <p className="text-xs text-gray-400 mt-1">{i === 2 ? "Review Due" : "Updated 2024"}</p>
                  </div>
                ))}
              </div>

              {/* Score Card */}
              <div className="uc1-score mt-10 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm text-center" style={{ opacity: 0 }}>
                <p className="text-xs font-mono text-gray-400 uppercase mb-4">Compliance Score</p>
                <p className="uc1-score-num text-4xl font-light text-emerald-600">78%</p>
                <p className="text-sm text-gray-500 mt-2">DORA Alignment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DOCUMENT INTELLIGENCE DEEP DIVE
───────────────────────────────────────────── */

function DocIntelligence() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(".doc-tag", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })
        .fromTo(".doc-heading", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .fromTo(".doc-desc", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
        .fromTo(".doc-app", { opacity: 0, y: 50, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }, "-=0.2")
        .fromTo(".doc-heading-content", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
        .fromTo(".doc-para-1", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
        .fromTo(".doc-highlight", { opacity: 0, scaleX: 0.9 }, { opacity: 1, scaleX: 1, duration: 0.5, ease: "back.out(1.3)", transformOrigin: "left" }, "-=0.1")
        .fromTo(".doc-para-2", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.1")
        .fromTo(".doc-entity",
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.35, stagger: 0.1, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(".doc-status-item",
          { opacity: 0, x: 15 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.08, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(".doc-footer span",
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.08 },
          "-=0.2"
        );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="doc-tag font-mono text-xs tracking-[0.3em] text-emerald-600 uppercase" style={{ opacity: 0 }}>
            Feature Deep Dive
          </span>
          <h3 className="doc-heading mt-4 sm:mt-5 text-3xl sm:text-4xl font-light text-gray-900 tracking-tight" style={{ opacity: 0 }}>
            Source-Linked Document Intelligence
          </h3>
          <p className="doc-desc mt-4 sm:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base" style={{ opacity: 0 }}>
            Every answer is traceable. Instantly jump to the exact passage that informed the
            response, with highlighted context and structured entity extraction.
          </p>
        </div>

        {/* App Container */}
        <div className="doc-app rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden" style={{ opacity: 0 }}>

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 bg-red-400 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <p className="text-sm text-gray-600 font-medium truncate">AML-Policy-v4.2.pdf</p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 w-fit">
              Page 14 of 47
            </span>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[70px_1fr_320px] min-h-[500px]">

            {/* Sidebar */}
            <div className="border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-50 flex lg:flex-col items-center justify-center py-4 lg:py-8 gap-6 lg:gap-8">
              <button className="p-3 rounded-xl bg-emerald-100 shadow-sm">
                <FileText className="w-5 h-5 text-emerald-700" />
              </button>
              <button className="p-3 rounded-xl hover:bg-gray-200 transition">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-3 rounded-xl hover:bg-gray-200 transition">
                <Bookmark className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Document Content */}
            <div className="px-5 sm:px-8 lg:px-12 py-8 sm:py-10">
              <h4 className="doc-heading-content text-base sm:text-lg font-semibold text-gray-900 mb-5 sm:mb-6" style={{ opacity: 0 }}>
                3.1 Anti-Money Laundering Controls
              </h4>
              <p className="doc-para-1 text-gray-600 leading-7 text-sm sm:text-base mb-5 sm:mb-6" style={{ opacity: 0 }}>
                3.1.1 The institution shall maintain transaction monitoring systems capable of detecting suspicious patterns across all customer segments and product lines.
              </p>
              <div className="doc-highlight relative my-6 sm:my-8" style={{ opacity: 0 }}>
                <div className="absolute -left-3 sm:-left-4 top-0 bottom-0 w-1 bg-emerald-500 rounded-full" />
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 sm:p-6">
                  <p className="text-emerald-900 leading-7 text-sm sm:text-base">
                    3.1.2 Third-party risk screening shall be conducted at onboarding and annually thereafter, with enhanced due diligence for high-risk jurisdictions (see Annex B).
                  </p>
                </div>
              </div>
              <p className="doc-para-2 text-gray-600 leading-7 text-sm sm:text-base" style={{ opacity: 0 }}>
                3.1.3 All AML alerts shall be triaged within 48 hours and escalated per the Suspicious Activity Reporting procedures outlined in Section 5.
              </p>
            </div>

            {/* Intelligence Panel */}
            <div className="border-t lg:border-t-0 lg:border-l border-gray-100 bg-gray-50 p-6 sm:p-8">
              <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-6">Extracted Intelligence</p>
              <div className="space-y-4 sm:space-y-5">
                {[
                  { label: "Requirement", val: "Transaction monitoring", cls: "text-emerald-600" },
                  { label: "Requirement", val: "Third-party screening", cls: "text-emerald-600" },
                  { label: "Gap Identified", val: "ICT resilience testing", cls: "text-amber-600" },
                  { label: "Reference", val: "Annex B", cls: "text-gray-500" },
                ].map((item, i) => (
                  <div key={i} className="doc-entity bg-white rounded-xl p-4 border border-gray-200 shadow-sm" style={{ opacity: 0 }}>
                    <p className={`text-xs font-semibold uppercase ${item.cls}`}>{item.label}</p>
                    <p className="text-sm text-gray-700 mt-2">{item.val}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-200">
                <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-4">Document Status</p>
                <div className="space-y-3 text-sm text-gray-600">
                  {[
                    { color: "bg-emerald-500", text: "Version 4.2 — Current" },
                    { color: "bg-emerald-500", text: "Approved: 2024-09-15" },
                    { color: "bg-amber-500", text: "Review Due: 2025-03" },
                  ].map((item, i) => (
                    <div key={i} className="doc-status-item flex items-center gap-3" style={{ opacity: 0 }}>
                      <span className={`w-2.5 h-2.5 ${item.color} rounded-full`} />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Status */}
          <div className="doc-footer px-4 sm:px-8 py-4 border-t border-gray-100 bg-gray-50 text-sm text-gray-500 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-8">
            <span style={{ opacity: 0 }}>✓ Cited by current query</span>
            <span style={{ opacity: 0 }}>✓ Section 3.1.2 highlighted</span>
            <span style={{ opacity: 0 }}>✓ 4 entities extracted</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   UC2 — CFO VARIANCE INTELLIGENCE
───────────────────────────────────────────── */

function UC2CFOVariance() {
  const sectionRef = useRef(null);

  const kpis = [
    { val: "+4.2%", label: "Revenue vs Forecast", tone: "text-emerald-600" },
    { val: "+8.1%", label: "OPEX vs Forecast", tone: "text-red-600" },
    { val: "-1.8%", label: "Net Margin", tone: "text-amber-600" },
    { val: "$142.3M", label: "Q3 Revenue", tone: "text-gray-900" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(".uc2-tag", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".uc2-heading", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .fromTo(".uc2-desc", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(".uc2-app", { opacity: 0, y: 60, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }, "-=0.2")
        .fromTo(".uc2-kpi",
          { opacity: 0, y: 25, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)" },
          "-=0.3"
        )
        .fromTo(".uc2-waterfall", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.1")
        .fromTo(".uc2-bar",
          { scaleY: 0, transformOrigin: "bottom" },
          { scaleY: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(".uc2-narrative", { opacity: 0, y: 20, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }, "-=0.2")
        .fromTo(".uc2-root-item",
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(".uc2-root-fill",
          { width: "0%" },
          { width: (i, el) => el.getAttribute("data-w"), duration: 0.8, stagger: 0.1, ease: "power2.inOut" },
          "-=0.6"
        )
        .fromTo(".uc2-confidence", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" }, "-=0.2");

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="uc2-tag text-xs font-mono tracking-[0.3em] text-emerald-600 uppercase" style={{ opacity: 0 }}>
            Use Case 02
          </span>
          <h2 className="uc2-heading mt-5 text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight" style={{ opacity: 0 }}>
            CFO & Finance Analytics Intelligence
          </h2>
          <p className="uc2-desc mt-6 text-base md:text-lg text-gray-600 leading-relaxed" style={{ opacity: 0 }}>
            Automatic variance explanations, root-cause attribution, and
            AI-generated financial narratives — beyond traditional dashboards.
          </p>
        </div>

        {/* App Container */}
        <div className="uc2-app rounded-3xl border border-gray-200 bg-white shadow-2xl overflow-hidden" style={{ opacity: 0 }}>

          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 bg-red-400 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <span className="text-sm text-gray-700 font-medium">Mentis — CFO Variance Intelligence</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="text-gray-500 font-mono">FY2024 · Q3 Report</span>
              <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs">JUDGE Active</span>
            </div>
          </div>

          {/* Responsive Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-[70px_1fr_320px]">

            {/* Sidebar */}
            <div className="hidden lg:flex border-r border-gray-100 bg-gray-50 flex-col items-center py-10 gap-10">
              {[BarChart2, TrendingUp, FileText, MessageSquare].map((Icon, i) => (
                <button key={i} className={`p-3 rounded-xl transition ${i === 0 ? "bg-emerald-100 shadow-sm" : "hover:bg-gray-200"}`}>
                  <Icon className={`w-5 h-5 ${i === 0 ? "text-emerald-700" : "text-gray-500"}`} />
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14 space-y-12">

              {/* KPI Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpis.map((kpi) => (
                  <div key={kpi.label} className="uc2-kpi p-6 rounded-2xl border border-gray-200 bg-white shadow-sm" style={{ opacity: 0 }}>
                    <p className={`text-2xl md:text-3xl font-light ${kpi.tone}`}>{kpi.val}</p>
                    <p className="mt-2 text-sm text-gray-500">{kpi.label}</p>
                  </div>
                ))}
              </div>

              {/* Waterfall Section */}
              <div className="uc2-waterfall p-6 md:p-10 rounded-2xl border border-gray-200 bg-white shadow-sm" style={{ opacity: 0 }}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-8">
                  <h4 className="text-lg font-medium text-gray-900">OPEX Variance — Q3 vs Forecast</h4>
                  <span className="text-red-600 font-semibold">+$4.3M Over Forecast</span>
                </div>
                <div className="flex items-end justify-between h-44 sm:h-52 gap-4">
                  {[
                    { label: "Forecast", h: "55%", tone: "bg-gray-300" },
                    { label: "IT Infra", h: "75%", tone: "bg-red-500" },
                    { label: "Contractors", h: "65%", tone: "bg-amber-500" },
                    { label: "Vendor Delay", h: "60%", tone: "bg-yellow-400" },
                    { label: "Actual", h: "85%", tone: "bg-red-600" },
                  ].map((bar) => (
                    <div key={bar.label} className="flex flex-col items-center gap-3 flex-1">
                      <div className={`uc2-bar w-6 sm:w-8 md:w-10 rounded-t-xl ${bar.tone}`} style={{ height: bar.h }} />
                      <span className="text-xs text-gray-500 text-center">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Narrative */}
              <div className="uc2-narrative relative p-6 md:p-10 rounded-2xl border border-emerald-200 bg-emerald-50" style={{ opacity: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-5 h-5 text-emerald-700" />
                  <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">AI-Generated Insight</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Q3 OPEX exceeded forecast by{" "}
                  <strong className="text-red-600">$4.3M (+8.1%)</strong>.
                  Primary drivers include unplanned IT infrastructure migration costs and elevated contractor spend in the Risk division tied to DORA compliance.
                </p>
              </div>
            </div>

            {/* Right Rail */}
            <div className="border-t lg:border-t-0 lg:border-l border-gray-100 bg-gray-50 p-6 md:p-8 lg:p-10 space-y-10">
              <div>
                <p className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-6">Root Cause Breakdown</p>
                {[
                  { label: "IT Infrastructure", pct: 56, tone: "bg-red-500" },
                  { label: "Risk Contractors", pct: 26, tone: "bg-amber-500" },
                  { label: "Vendor Savings", pct: 18, tone: "bg-yellow-400" },
                ].map((item) => (
                  <div key={item.label} className="uc2-root-item mb-6" style={{ opacity: 0 }}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="text-gray-500">{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`uc2-root-fill h-2 rounded-full ${item.tone}`}
                        data-w={`${item.pct}%`}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="uc2-confidence p-6 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm text-center" style={{ opacity: 0 }}>
                <p className="text-xs font-mono text-gray-400 uppercase mb-4">AI Confidence</p>
                <p className="text-3xl md:text-4xl font-light text-emerald-600">91%</p>
                <p className="text-sm text-gray-500 mt-2">Multi-source validated</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-8 py-4 border-t border-gray-100 bg-gray-50 text-sm text-gray-500 flex flex-wrap gap-4 sm:gap-8">
            <span>On-Premise Deployment</span>
            <span>GL + Budget + IT Reports</span>
            <span>Audit: vr-4102-bx</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   UC3 — PROCUREMENT & SPEND
───────────────────────────────────────────── */

function UC3ProcurementSpend() {
  const sectionRef = useRef(null);

  const vendors = [
    { vendor: "Accenture", w: 92, val: "$14.2M", color: "#10b981" },
    { vendor: "AWS GovCloud", w: 78, val: "$11.8M", color: "#06b6d4" },
    { vendor: "Vendor ABC ⚠", w: 65, val: "$9.8M", color: "#ef4444", textClass: "text-red-500" },
    { vendor: "Deloitte", w: 55, val: "$8.3M", color: "#64748b" },
    { vendor: "Bloomberg", w: 42, val: "$6.4M", color: "#94a3b8" },
  ];

  const savings = [
    { label: "Vendor consolidation", val: "$890K" },
    { label: "License optimization", val: "$720K" },
    { label: "Duplicate PO removal", val: "$490K" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(".uc3-tag", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".uc3-heading", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .fromTo(".uc3-desc", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(".uc3-app", { opacity: 0, y: 60, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }, "-=0.2")
        .fromTo(".uc3-vendor-row",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(".uc3-vendor-bar",
          { width: "0%" },
          { width: (i, el) => el.getAttribute("data-w"), duration: 0.8, stagger: 0.08, ease: "power2.inOut" },
          "-=0.5"
        )
        .fromTo(".uc3-anomaly",
          { opacity: 0, y: 20, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12, ease: "back.out(1.3)" },
          "-=0.4"
        )
        .fromTo(".uc3-metric", { opacity: 0, scale: 0.85, y: 15 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" }, "-=0.2")
        .fromTo(".uc3-saving",
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.35, stagger: 0.1, ease: "power2.out" },
          "-=0.3"
        );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span className="uc3-tag font-mono text-[11px] text-emerald-600 tracking-[0.3em] uppercase" style={{ opacity: 0 }}>
            Use Case 03
          </span>
          <h2 className="uc3-heading text-4xl md:text-5xl text-slate-900 mt-4 mb-4 font-light" style={{ opacity: 0 }}>
            Procurement &amp; Spend Intelligence
          </h2>
          <p className="uc3-desc text-slate-500 font-light leading-relaxed" style={{ opacity: 0 }}>
            Pattern detection across vendor spend, anomaly identification, and AI-driven savings opportunities with full explainability.
          </p>
        </div>

        {/* App Frame */}
        <div className="uc3-app app-frame rounded-3xl shadow-2xl border border-slate-200/60 bg-white/70 backdrop-blur-xl" style={{ opacity: 0 }}>

          <AppChrome
            title="Mentis — Spend Analytics"
            right={<span className="font-mono text-[10px] text-slate-400">FY2024 · YTD</span>}
          />

          <div className="app-layout flex flex-col lg:flex-row min-h-[420px]">

            {/* Sidebar */}
            <div className="app-nav hidden md:flex flex-row lg:flex-col justify-center items-center gap-6 lg:gap-8 py-4 lg:py-8 border-b lg:border-b-0 lg:border-r border-slate-100 bg-white/50">
              <div className="nav-i act"><Receipt className="w-4 h-4 text-emerald-600" /></div>
              <div className="nav-i"><AlertTriangle className="w-4 h-4 text-slate-400" /></div>
              <div className="nav-i"><PieChart className="w-4 h-4 text-slate-400" /></div>
            </div>

            {/* Main Content */}
            <div className="app-content flex-1 p-6 md:p-8 space-y-10">

              {/* Vendor Spend */}
              <div className="m-card p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">Top Vendors by Spend — YTD</span>
                </div>
                <div className="space-y-6">
                  {vendors.map((item) => (
                    <div key={item.vendor} className="uc3-vendor-row" style={{ opacity: 0 }}>
                      <div className="flex justify-between mb-2 text-sm">
                        <span className={`font-medium ${item.textClass ?? "text-slate-700"}`}>{item.vendor}</span>
                        <span className={`font-mono text-xs ${item.textClass ?? "text-slate-500"}`}>{item.val}</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="uc3-vendor-bar h-full rounded-full transition-all duration-700"
                          data-w={`${item.w}%`}
                          style={{ width: "0%", background: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Anomalies */}
              <div>
                <p className="text-[11px] font-mono text-slate-400 tracking-wider uppercase mb-4">Active Anomalies</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="uc3-anomaly p-5 rounded-2xl border border-red-100 bg-red-50/60 shadow-sm" style={{ opacity: 0 }}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-800">Vendor ABC — IT Services</span>
                      <span className="badge-r">+47% YoY</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                      Spend increased from $6.7M to $9.8M without contract amendment. 3 duplicate POs detected.
                    </p>
                  </div>
                  <div className="uc3-anomaly p-5 rounded-2xl border border-amber-100 bg-amber-50/60 shadow-sm" style={{ opacity: 0 }}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-800">Duplicate PO — Risk Division</span>
                      <span className="badge-a">$340K</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                      PO-4821 and PO-4823 appear to cover identical scope.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="app-panel w-full lg:w-[300px] border-t lg:border-t-0 lg:border-l border-slate-100 bg-white/60 p-6 md:p-8 space-y-8">
              <p className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">Savings Opportunities</p>
              <div className="uc3-metric m-metric rounded-2xl p-6 text-white shadow-lg" style={{ opacity: 0, background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" }}>
                <div className="val text-3xl font-light">$2.1M</div>
                <div className="lbl opacity-80 mt-1">Identified Savings Potential</div>
              </div>
              <div className="space-y-4">
                {savings.map((s) => (
                  <div key={s.label} className="uc3-saving p-4 rounded-xl bg-white border border-slate-100 shadow-sm" style={{ opacity: 0 }}>
                    <p className="text-sm font-medium text-slate-700">{s.label}</p>
                    <p className="text-xs font-mono text-emerald-600 mt-1">{s.val}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 leading-relaxed">All findings explainable with full source traceability and audit trail.</p>
              </div>
            </div>
          </div>

          <AppStatus items={["On-Premise", "ERP + Procurement Data", "3 anomalies active"]} />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   UC4 — EXECUTIVE INTELLIGENCE
───────────────────────────────────────────── */

function UC4ExecutiveIntelligence() {
  const sectionRef = useRef(null);

  const vendorRows = [
    { vendor: "Fintech Solutions Inc.", exp: "$1.2M", risk: "Medium", riskClass: "badge-a", status: "Monitoring", statusClass: "badge-a" },
    { vendor: "DataPipe Corp", exp: "$640K", risk: "Medium", riskClass: "badge-a", status: "Mitigated", statusClass: "badge-g" },
    { vendor: "CloudServ Analytics", exp: "$260K", risk: "Low", riskClass: "badge-g", status: "Stable", statusClass: "badge-g" },
  ];

  const sources = [
    { title: "Treasury Records", icon: Database, w: 100, label: "12,847 records queried", color: "#10b981" },
    { title: "Vendor Registry", icon: Building2, w: 100, label: "342 active vendors", color: "#06b6d4" },
    { title: "Risk Assessments", icon: ShieldAlert, w: 85, label: "Q1 2024 cycle", color: "#f59e0b" },
    { title: "VRM Procedures", icon: FileCheck, w: 100, label: "SOP-VRM-3.2", color: "#64748b" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(".uc4-tag", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".uc4-heading", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .fromTo(".uc4-desc", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(".uc4-app", { opacity: 0, y: 60, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }, "-=0.2")
        .fromTo(".uc4-user-bubble", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.5, ease: "back.out(1.3)" }, "-=0.3")
        .fromTo(".uc4-ai-bubble", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.2")
        .fromTo(".uc4-metric",
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.4)" },
          "-=0.2"
        )
        .fromTo(".uc4-vendor-row",
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.35, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(".uc4-rec", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.1")
        .fromTo(".uc4-src-pill",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.3, stagger: 0.06, ease: "back.out(1.4)" },
          "-=0.1"
        )
        .fromTo(".uc4-badge",
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.08 },
          "-=0.1"
        )
        .fromTo(".uc4-source-card",
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(".uc4-source-fill",
          { width: "0%" },
          { width: (i, el) => el.getAttribute("data-w"), duration: 0.7, stagger: 0.1, ease: "power2.inOut" },
          "-=0.6"
        );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span className="uc4-tag font-mono text-[11px] text-emerald-600 tracking-[0.3em] uppercase" style={{ opacity: 0 }}>
            Use Case 04
          </span>
          <h2 className="uc4-heading text-4xl md:text-5xl text-slate-900 mt-4 mb-4 font-light" style={{ opacity: 0 }}>
            Executive &amp; Management Intelligence
          </h2>
          <p className="uc4-desc text-slate-500 font-light leading-relaxed" style={{ opacity: 0 }}>
            Secure conversational access to multi-source intelligence with governance controls, synthesis, and full traceability.
          </p>
        </div>

        {/* App Frame */}
        <div className="uc4-app app-frame rounded-3xl shadow-2xl border border-slate-200/60 bg-white/80 backdrop-blur-xl" style={{ opacity: 0 }}>
          <AppChrome
            title="Mentis — Executive Intelligence"
            right={<><span className="badge-b">Role: CEO</span><span className="badge-g">RBAC Enforced</span></>}
          />

          <div className="app-layout flex flex-col lg:flex-row min-h-[480px]">

            {/* Sidebar */}
            <div className="app-nav hidden md:flex flex-row lg:flex-col justify-center items-center gap-6 lg:gap-8 py-4 lg:py-8 border-b lg:border-b-0 lg:border-r border-slate-100 bg-white/60">
              <div className="nav-i act"><MessageSquare className="w-4 h-4 text-emerald-600" /></div>
              <div className="nav-i"><Brain className="w-4 h-4 text-slate-400" /></div>
              <div className="nav-i"><FileText className="w-4 h-4 text-slate-400" /></div>
            </div>

            {/* Main Content */}
            <div className="app-content flex-1 p-6 md:p-8 space-y-8">

              {/* User Bubble */}
              <div className="uc4-user-bubble m-bubble m-user bg-emerald-50 border border-emerald-100 text-slate-700 rounded-2xl px-5 py-4 max-w-xl" style={{ opacity: 0 }}>
                What's our exposure to SVB-related counterparties? Include downstream vendor risk.
              </div>

              {/* AI Bubble */}
              <div className="uc4-ai-bubble m-bubble m-ai bg-white border border-slate-200 shadow-sm rounded-2xl px-6 py-5 space-y-5" style={{ opacity: 0 }}>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Based on analysis across{" "}
                  <strong className="font-medium text-slate-900">Treasury records, vendor database, and risk assessments</strong>:
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { val: "$0", label: "Direct Exposure", cls: "text-emerald-600" },
                    { val: "$2.1M", label: "Indirect Exposure", cls: "text-amber-600" },
                    { val: "3", label: "Vendors Affected", cls: "text-slate-900" },
                  ].map((m) => (
                    <div key={m.label} className="uc4-metric m-metric p-4 rounded-xl border border-slate-100 bg-slate-50" style={{ opacity: 0 }}>
                      <div className={`val text-lg font-light ${m.cls}`}>{m.val}</div>
                      <div className="lbl text-xs text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Vendor Table */}
                <div className="m-card rounded-xl border border-slate-100 overflow-hidden">
                  <div className="hidden sm:grid grid-cols-4 text-[11px] font-mono text-slate-400 bg-slate-50 px-4 py-2">
                    <span>Vendor</span><span>Exposure</span><span>Risk</span><span>Status</span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {vendorRows.map((v) => (
                      <div key={v.vendor} className="uc4-vendor-row grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-0 px-4 py-3 text-sm" style={{ opacity: 0 }}>
                        <span className="text-slate-700 font-medium">{v.vendor}</span>
                        <span className="font-mono text-slate-600">{v.exp}</span>
                        <span className={v.riskClass}>{v.risk}</span>
                        <span className={v.statusClass ?? v.riskClass}>{v.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="uc4-rec text-xs text-slate-500 leading-relaxed" style={{ opacity: 0 }}>
                  <strong className="text-slate-800">Recommendation:</strong>{" "}
                  Fintech Solutions holds 57% of indirect exposure. Suggest board-level review of alternative providers and contingency clause activation per SOP-VRM-3.2.
                </p>
              </div>

              {/* Source Pills */}
              <div className="flex flex-wrap gap-2 text-gray-600">
                {[
                  { icon: Database, label: "Treasury DB" },
                  { icon: FileText, label: "Vendor Registry" },
                  { icon: ShieldAlert, label: "Risk Assessment Q1" },
                  { icon: FileText, label: "SOP-VRM-3.2" },
                ].map((pill) => (
                  <span key={pill.label} className="uc4-src-pill src-pill" style={{ opacity: 0 }}>
                    <pill.icon className="w-3 h-3" /> {pill.label}
                  </span>
                ))}
              </div>

              {/* Confidence Row */}
              <div className="flex flex-wrap items-center gap-3 text-gray-600">
                {[
                  { cls: "badge-g", content: <><ShieldCheck className="w-3 h-3" /> JUDGE Verified</> },
                  { cls: "badge-g", content: "97% Confidence" },
                  { cls: "badge-b", content: "4 Data Sources" },
                ].map((b, i) => (
                  <span key={i} className={`uc4-badge ${b.cls} flex items-center gap-1`} style={{ opacity: 0 }}>
                    {b.content}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="app-panel w-full lg:w-[300px] border-t lg:border-t-0 lg:border-l border-slate-100 bg-white/70 p-6 md:p-8 space-y-6">
              <p className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">Sources Synthesized</p>
              <div className="space-y-4">
                {sources.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title} className="uc4-source-card p-4 rounded-xl border border-slate-100 bg-white shadow-sm" style={{ opacity: 0 }}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4" style={{ color: s.color }} />
                        <span className="text-sm font-medium text-slate-700">{s.title}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="uc4-source-fill h-full rounded-full"
                          data-w={`${s.w}%`}
                          style={{ width: "0%", background: s.color }}
                        />
                      </div>
                      <p className="text-xs text-slate-400 mt-2">{s.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <AppStatus items={["Role: CEO (Elevated)", "4 data sources", "RBAC: Full Finance Access", "Audit: ex-7291"]} />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   AUDIT TRAIL
───────────────────────────────────────────── */

function AuditTrail() {
  const sectionRef = useRef(null);

  const timeline = [
    { color: "bg-slate-400", title: "Query Received", time: "09:42:31.204 UTC", desc: 'User: CFO (user_4521) · Session: sess_8f2a · "Why did OPEX spike in Q3?"', last: false },
    { color: "bg-emerald-500", title: "RBAC Check Passed", time: "09:42:31.218 UTC", desc: "Role: CFO · Scope: finance_read, opex_view · MFA: verified", last: false },
    { color: "bg-teal-500", title: "Source Retrieval", time: "09:42:32.847 UTC", desc: "Agent: variance_analyzer_v2 · 12 docs · 3 tables · Latency: 1.6s", last: false },
    { color: "bg-amber-500", title: "Response Generated", time: "09:42:34.592 UTC", desc: "Confidence: 91% · Citations: 3 · VERIFIED · Total: 3.4s", last: false },
    { color: "bg-slate-400", title: "Response Delivered", time: "09:42:34.601 UTC", desc: "Displayed to user · Hash: 7f3a2b · Tamper-proof chain intact", last: true },
  ];

  const pillars = [
    { icon: <Database className="w-5 h-5 text-slate-600" />, title: "Data Sovereignty", body: "All data remains inside institutional infrastructure. On-prem, private cloud, or air-gapped deployment supported." },
    { icon: <Eye className="w-5 h-5 text-slate-600" />, title: "Explainability", body: "Every response is traceable to source systems. Execution logs and reasoning steps are permanently recorded." },
    { icon: <Lock className="w-5 h-5 text-slate-600" />, title: "Controlled Access", body: "Granular RBAC, segregation of duties, and governed multi-agent workflows." },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(".audit-tag", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".audit-heading", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .fromTo(".audit-desc", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(".audit-app", { opacity: 0, y: 50, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }, "-=0.2")
        .fromTo(".audit-filter", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
        .fromTo(".audit-entry",
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: "power2.out" },
          "-=0.1"
        )
        .fromTo(".audit-pillar",
          { opacity: 0, y: 30, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12, ease: "back.out(1.3)" },
          "-=0.3"
        );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="audit-tag font-mono text-xs text-gray-400 tracking-widest uppercase" style={{ opacity: 0 }}>
            Governance Feature
          </span>
          <h2 className="audit-heading mt-4 text-3xl md:text-5xl font-light text-gray-900" style={{ opacity: 0 }}>
            Complete Audit Trail
          </h2>
          <p className="audit-desc mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base" style={{ opacity: 0 }}>
            Every query, permission check, source retrieval and generated response — immutably logged and regulator-ready.
          </p>
        </div>

        {/* App Frame */}
        <div className="audit-app bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden" style={{ opacity: 0 }}>

          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b bg-slate-50">
            <div className="text-sm font-medium text-slate-700">Mentis — Audit Trail Viewer</div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-200 text-slate-600">Immutable Log</span>
          </div>

          <div className="flex flex-col md:flex-row">

            {/* Sidebar */}
            <div className="md:w-14 border-b md:border-b-0 md:border-r bg-white flex md:flex-col items-center justify-center gap-3 py-3">
              <div className="p-2 rounded-lg bg-emerald-50"><ScrollText className="w-4 h-4 text-emerald-600" /></div>
              <div className="p-2 rounded-lg hover:bg-slate-100"><Filter className="w-4 h-4 text-gray-400" /></div>
              <div className="p-2 rounded-lg hover:bg-slate-100"><Download className="w-4 h-4 text-gray-400" /></div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 md:p-6 space-y-6">

              {/* Filter Bar */}
              <div className="audit-filter flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-xl border bg-slate-50" style={{ opacity: 0 }}>
                <div className="flex items-center gap-2 flex-1">
                  <Search className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-400">Filter by user, session, or date range...</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-white border text-gray-500">Today</span>
                  <span className="text-xs px-2 py-1 rounded bg-white border text-gray-500">This Week</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                {timeline.map((entry) => (
                  <div key={entry.title} className="audit-entry flex gap-4 p-4 rounded-xl border bg-white hover:shadow-sm transition" style={{ opacity: 0 }}>
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${entry.color}`} />
                      {!entry.last && <div className="w-px flex-1 bg-slate-200 mt-1" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <span className="text-sm font-medium text-gray-800">{entry.title}</span>
                        <span className="text-xs text-gray-400 font-mono">{entry.time}</span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">{entry.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="px-4 md:px-6 py-3 border-t bg-slate-50 flex flex-wrap gap-3 text-xs text-gray-500">
            <span>Immutable</span>
            <span>Tamper-proof chain</span>
            <span>Export: SOC2 / ISO 27001 compatible</span>
          </div>
        </div>

        {/* Governance Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {pillars.map((p) => (
            <div key={p.title} className="audit-pillar bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition" style={{ opacity: 0 }}>
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">{p.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   RBAC ACCESS CONTROL
───────────────────────────────────────────── */

function RBACAccessControl() {
  const sectionRef = useRef(null);

  const roles = ["CEO", "CFO", "CRO", "Audit"];
  const rows = [
    { scope: "Financial Reports", ceo: "✓ Full", cfo: "✓ Full", cro: "◐ Summary", audit: "✓ Read-Only" },
    { scope: "Risk Assessments", ceo: "✓ Full", cfo: "◐ Summary", cro: "✓ Full", audit: "✓ Read-Only" },
    { scope: "Vendor Contracts", ceo: "✓ Full", cfo: "✓ Full", cro: "✕ Denied", audit: "◐ Metadata" },
    { scope: "HR / Compensation", ceo: "✓ Full", cfo: "✕ Denied", cro: "✕ Denied", audit: "✕ Denied" },
  ];

  const badgeStyle = (val) => {
    if (val.startsWith("✓")) return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    if (val.startsWith("✕")) return "bg-red-50 text-red-600 border border-red-200";
    return "bg-amber-50 text-amber-700 border border-amber-200";
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(".rbac-tag", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".rbac-heading", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .fromTo(".rbac-desc", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(".rbac-table", { opacity: 0, y: 40, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }, "-=0.2")
        .fromTo(".rbac-thead", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.3")
        .fromTo(".rbac-row",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(".rbac-badge",
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.3, stagger: 0.03, ease: "back.out(1.4)" },
          "-=0.3"
        )
        .fromTo(".rbac-mobile-card",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: "power2.out" },
          "<"
        )
        .fromTo(".rbac-legend", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.1")
        .fromTo(".rbac-footer", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.1");

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center md:text-left">
          <span className="rbac-tag font-mono text-xs text-gray-400 tracking-widest uppercase" style={{ opacity: 0 }}>
            Governance Feature
          </span>
          <h3 className="rbac-heading mt-4 text-3xl md:text-4xl font-light text-gray-900" style={{ opacity: 0 }}>
            Role-Based Access in Action
          </h3>
          <p className="rbac-desc mt-4 text-gray-500 text-sm md:text-base max-w-2xl" style={{ opacity: 0 }}>
            Different roles see different data. Enforcement happens at query time — not just at the UI layer, but within the governed data execution engine.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="rbac-table hidden md:block bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden" style={{ opacity: 0 }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="rbac-thead bg-slate-50" style={{ opacity: 0 }}>
                <tr>
                  <th className="text-left px-6 py-4 font-mono text-xs text-gray-400 uppercase tracking-wider">Scope</th>
                  {roles.map((role) => (
                    <th key={role} className="text-center px-6 py-4 font-mono text-xs text-gray-400 uppercase tracking-wider">{role}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.scope} className="rbac-row border-t hover:bg-slate-50 transition" style={{ opacity: 0 }}>
                    <td className="px-6 py-4 font-medium text-gray-700">{row.scope}</td>
                    {[row.ceo, row.cfo, row.cro, row.audit].map((val, idx) => (
                      <td key={idx} className="px-6 py-4 text-center">
                        <span className={`rbac-badge px-3 py-1 rounded-full text-xs font-medium ${badgeStyle(val)}`} style={{ opacity: 0 }}>
                          {val}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {rows.map((row) => (
            <div key={row.scope} className="rbac-mobile-card bg-white border rounded-2xl p-5 shadow-sm" style={{ opacity: 0 }}>
              <h4 className="text-sm font-semibold text-gray-800 mb-4">{row.scope}</h4>
              <div className="space-y-3">
                {roles.map((role, idx) => {
                  const value = idx === 0 ? row.ceo : idx === 1 ? row.cfo : idx === 2 ? row.cro : row.audit;
                  return (
                    <div key={role} className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{role}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${badgeStyle(value)}`}>{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="rbac-legend mt-10 flex flex-wrap gap-4 text-xs text-gray-500" style={{ opacity: 0 }}>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-400"></span> Full Access</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-400"></span> Limited / Summary</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-400"></span> Denied</span>
        </div>

        {/* Footer Note */}
        <div className="rbac-footer mt-6 text-xs text-gray-400" style={{ opacity: 0 }}>
          Enforcement: Access validated at query execution layer · SSO + MFA required · Audit logged
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */

export default function FinancialServicesProducts() {
  return (
    <>
      <UC1PolicyCompliance />
      <div className="divider" />
      <DocIntelligence />
      <div className="divider" />
      <UC2CFOVariance />
      <div className="divider" />
      <UC3ProcurementSpend />
      <div className="divider" />
      <UC4ExecutiveIntelligence />
      <div className="divider" />
      <AuditTrail />
      <div className="divider" />
      <RBACAccessControl />
    </>
  );
}