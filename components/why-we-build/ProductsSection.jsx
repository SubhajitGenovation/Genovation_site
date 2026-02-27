"use client";
import { Package, BookOpen, BarChart3, Radar, MessageSquare } from "lucide-react";

const products = [
  { icon: <BookOpen className="w-6 h-6 text-blue-600" />, iconBg: "bg-blue-500/[0.12] border-blue-500/[0.2]", title: "Enterprise Knowledge Intelligence", sub: "Policies • SOPs • Governance", desc: "Single source of truth for policies, SOPs, and governance documents. Answers questions with citations, detects gaps, surfaces contradictions. Deployed where compliance and audit readiness matter." },
  { icon: <BarChart3 className="w-6 h-6 text-amber-600" />, iconBg: "bg-amber-500/[0.12] border-amber-500/[0.2]", title: "Analytics & Decision Intelligence", sub: "Finance • Operations • Procurement", desc: "Explains why business outcomes changed. Explanation-first analytics, not dashboards. Root cause analysis across finance, operations, sales, and procurement." },
  { icon: <Radar className="w-6 h-6 text-emerald-600" />, iconBg: "bg-emerald-500/[0.12] border-emerald-500/[0.2]", title: "Strategy & Research Intelligence", sub: "Market • Competitors • Innovation", desc: "Continuous synthesis of market signals, competitor activity, and innovation trends. Structured intelligence for leadership-level decisions." },
  { icon: <MessageSquare className="w-6 h-6 text-violet-600" />, iconBg: "bg-violet-500/[0.12] border-violet-500/[0.2]", title: "CX Intelligence", sub: "Governed • Action-Capable • Auditable", desc: "Governed, action-capable conversational AI for customer engagement. Retrieves data, executes actions, maintains full audit trails — deployed within enterprise boundaries." },
];

export default function ProductsSection() {
  return (
    <section className="py-32 relative" id="products">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[600px] h-[500px] bg-blue-500/[0.04]" style={{ top: "10%", right: "20%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/[0.1] border border-blue-500/[0.2] mb-6 r-up">
            <Package className="w-3 h-3 text-blue-600" />
            <span className="text-blue-600 text-[10px] font-mono tracking-[0.2em] uppercase">Products</span>
          </div>
          <h2 className="display-section text-4xl md:text-5xl lg:text-6xl mb-4 r-up">What We Ship Today</h2>
          <p className="text-lg text-gray-500 font-light r-up">Four intelligence products, all running on Mentis OS</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {products.map((p) => (
            <div key={p.title} className="product-card r-up">
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${p.iconBg}`}>{p.icon}</div>
                <div>
                  <h3 className="text-lg font-light text-gray-800">{p.title}</h3>
                  <p className="text-xs text-gray-500">{p.sub}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-xl bg-black/[0.03] border border-black/[0.06] text-center r-up">
          <p className="text-sm text-gray-600 font-light">
            <span className="text-gray-800 font-medium">Primary buyers:</span> CIOs, CFOs, CROs, Compliance Heads, Operations Leaders — in financial services, aerospace & defense, manufacturing, healthcare, and government.
          </p>
        </div>
      </div>
    </section>
  );
}
