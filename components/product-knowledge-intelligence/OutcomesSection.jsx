"use client";
import { ShieldCheck, TrendingDown, Zap, CheckCircle } from "lucide-react";

const OUTCOMES = [
  { Icon: ShieldCheck,  title:"Fewer Audit Surprises", desc:"Proactive detection before auditors arrive" },
  { Icon: TrendingDown, title:"Reduced Risk",           desc:"Eliminate operational and regulatory exposure" },
  { Icon: Zap,          title:"Faster Decisions",       desc:"Confident, evidence-based decision-making" },
  { Icon: CheckCircle,  title:"Trustworthy AI",         desc:"Safe adoption in governance-critical domains" },
];

export default function OutcomesSection() {
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background:"linear-gradient(135deg,#0284c7 0%,#0891b2 50%,#0ea5e9 100%)" }}>
      <div className="absolute inset-0 mesh-bg" style={{ opacity:0.2 }} />
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="display-section text-white mb-4" style={{ fontSize:"clamp(2rem,4vw,3.5rem)" }}>
            The Outcome
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {OUTCOMES.map(({ Icon, title, desc }) => (
            <div key={title} className="outcome-card">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                style={{ background:"rgba(255,255,255,0.2)", boxShadow:"0 8px 20px rgba(255,255,255,0.05)" }}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-base font-medium text-white mb-2">{title}</div>
              <p className="text-sm font-light" style={{ color:"rgba(255,255,255,0.7)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
