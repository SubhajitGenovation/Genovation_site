"use client";
import {
  Building2,
  Landmark,
  Plane,
  Factory,
  HeartPulse,
  Building,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: <Landmark className="w-5 h-5 text-blue-500" />,
    iconBg: "bg-blue-500/[0.1]",
    name: "Financial Services",
    desc: "SOX compliance, audit trails, and explainable risk assessments.",
    tagBg: "bg-blue-500/[0.06]",
    tagText: "text-blue-600",
    tags: ["SOX", "PCI-DSS"],
  },
  {
    icon: <Plane className="w-5 h-5 text-cyan-500" />,
    iconBg: "bg-cyan-500/[0.1]",
    name: "Aerospace & Defense",
    desc: "Air-gapped deployments built for sensitive environments.",
    tagBg: "bg-cyan-500/[0.06]",
    tagText: "text-cyan-600",
    tags: ["Air-Gapped", "On-Prem"],
  },
  {
    icon: <Factory className="w-5 h-5 text-violet-500" />,
    iconBg: "bg-violet-500/[0.1]",
    name: "Manufacturing",
    desc: "Secure supply chain analytics and predictive maintenance.",
    tagBg: "bg-violet-500/[0.06]",
    tagText: "text-violet-600",
    tags: ["Secure", "Private"],
  },
  {
    icon: <HeartPulse className="w-5 h-5 text-emerald-500" />,
    iconBg: "bg-emerald-500/[0.1]",
    name: "Healthcare",
    desc: "Privacy-first architecture for clinical decision support.",
    tagBg: "bg-emerald-500/[0.06]",
    tagText: "text-emerald-600",
    tags: ["Privacy-First", "Auditable"],
  },
  {
    icon: <Building className="w-5 h-5 text-amber-500" />,
    iconBg: "bg-amber-500/[0.1]",
    name: "Government",
    desc: "Sovereign deployments with complete data control.",
    tagBg: "bg-amber-500/[0.06]",
    tagText: "text-amber-600",
    tags: ["Sovereign", "Air-Gapped"],
  },
];

export default function WGIndustries() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div
        className="orb w-[500px] h-[400px] bg-blue-500/[0.04]"
        style={{ top: "10%", right: "15%" }}
      />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/[0.1] border border-blue-500/[0.15] mb-8 r-up">
            <Building2 className="w-3 h-3 text-blue-500" />
            <span className="text-blue-500 text-[11px] font-light tracking-[0.25em] uppercase">
              Industries
            </span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Built for{" "}
            <span className="text-gradient">Regulated Industries</span>
          </h2>
        </div>

        {/* Industry Cards */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="industryCards"
        >
          {INDUSTRIES.map(
            ({ icon, iconBg, name, desc, tagBg, tagText, tags }) => (
              <div key={name} className="card p-6">
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-5`}
                >
                  {icon}
                </div>

                {/* Title */}
                <h3 className="font-normal text-gray-800 mb-2">{name}</h3>

                {/* Description */}
                <p className="text-sm text-gray-500 font-light mb-4 leading-relaxed">
                  {desc}
                </p>

                {/* Tags */}
                <div className="flex gap-1.5 flex-wrap">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-lg ${tagBg} text-xs font-mono ${tagText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
