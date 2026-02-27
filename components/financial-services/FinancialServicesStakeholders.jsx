"use client";

import { Server, ShieldAlert, Scale, Calculator, ClipboardCheck, Key, Package } from "lucide-react";

const stakeholders = [
  { icon: <Server className="w-5 h-5 text-slate-500" />,         label: "Chief Information Officer (CIO)"   },
  { icon: <ShieldAlert className="w-5 h-5 text-slate-500" />,    label: "Chief Risk Officer (CRO)"          },
  { icon: <Scale className="w-5 h-5 text-slate-500" />,          label: "Compliance & Legal Leadership"     },
  { icon: <Calculator className="w-5 h-5 text-slate-500" />,     label: "Chief Financial Officer (CFO)"     },
  { icon: <ClipboardCheck className="w-5 h-5 text-slate-500" />, label: "Internal Audit & Governance Teams" },
];

const deployments = [
  { icon: <Key className="w-5 h-5 text-emerald-700" />,    title: "Enterprise Licenses",               sub: "Organization-wide deployment rights"    },
  { icon: <Server className="w-5 h-5 text-emerald-700" />, title: "On-Premise or Private Network",     sub: "Complete infrastructure control"        },
  { icon: <Package className="w-5 h-5 text-emerald-700" />, title: "Fixed-Scope Intelligence Products", sub: "Defined governance and clear boundaries" },
];

export default function FinancialServicesStakeholders() {
  return (
    <section className="py-32 relative">
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Stakeholders */}
          <div>
            <span className="font-mono text-[10px] text-gray-400 tracking-[0.25em] uppercase">Who We Work With</span>
            <h3 className="text-2xl font-light text-gray-900 mt-4 mb-8 tracking-tight">Typical Stakeholders</h3>
            <div className="space-y-3">
              {stakeholders.map((s) => (
                <div key={s.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-gray-100 r-up">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    {s.icon}
                  </div>
                  <p className="text-gray-700 font-light">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment */}
          <div>
            <span className="font-mono text-[10px] text-gray-400 tracking-[0.25em] uppercase">How We Deploy</span>
            <h3 className="text-2xl font-light text-gray-900 mt-4 mb-8 tracking-tight">Deployment Model</h3>
            <p className="text-gray-500 font-light mb-8 leading-relaxed">
              Genovation solutions for financial services are typically deployed as:
            </p>
            <div className="space-y-3 mb-8">
              {deployments.map((d) => (
                <div key={d.title} className="flex items-start gap-4 p-5 rounded-xl bg-white/60 border border-gray-100 r-up">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <p className="text-gray-800 font-normal">{d.title}</p>
                    <p className="text-sm text-gray-400 font-light">{d.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
