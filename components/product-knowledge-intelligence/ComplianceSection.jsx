"use client";
import { Shield, Eye, Lock, Settings, Check } from "lucide-react";

const CARDS = [
  {
    gradient:"from-emerald-400 to-teal-500", Icon: Eye, title:"Explainability by Design",
    items:["Every response includes source attribution","Reasoning paths are inspectable","Outputs are defensible in audits"],
    checkColor:"text-emerald-400",
  },
  {
    gradient:"from-sky-400 to-cyan-500", Icon: Lock, title:"Data Sovereignty",
    items:["Deploy on-premise or air-gapped","No external API calls","No data leakage to third-party clouds"],
    checkColor:"text-sky-400",
  },
  {
    gradient:"from-violet-400 to-purple-500", Icon: Settings, title:"Governance Controls",
    items:["Role-based access control","Knowledge domain isolation","Full audit trails of all queries"],
    checkColor:"text-violet-400",
  },
];

export default function ComplianceSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden section-emerald" id="compliance">
      <div className="absolute inset-0 mesh-bg" style={{ opacity:0.15 }} />
      <div className="orb" style={{ width:500, height:400, background:"rgba(16,185,129,0.04)", top:"10%", left:"25%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 r-up"
            style={{ background:"rgba(16,185,129,0.08)", border:"1px solid rgba(16,185,129,0.15)" }}>
            <Shield className="w-3 h-3 text-emerald-500" />
            <span className="text-emerald-500 font-light uppercase" style={{ fontSize:11, letterSpacing:"0.25em" }}>
              Built for Compliance
            </span>
          </div>
          <h2 className="display-section mb-8 r-up" style={{ fontSize:"clamp(2.5rem,5vw,4.5rem)" }}>
            Built for <span className="text-gradient-emerald">Compliance</span>,<br />Not Convenience
          </h2>
          <p className="text-gray-500 font-light leading-relaxed r-up">
            Designed for regulated environments first, not retrofitted later. Every feature serves
            security, explainability, and governance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CARDS.map(({ gradient, Icon, title, items, checkColor }) => (
            <div key={title} className="card p-8 text-center r-up">
              <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-base font-medium text-gray-800 mb-3">{title}</div>
              <div className="space-y-3 text-left">
                {items.map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm font-light text-gray-500">
                    <Check className={`w-4 h-4 ${checkColor} flex-shrink-0 mt-0.5`} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
