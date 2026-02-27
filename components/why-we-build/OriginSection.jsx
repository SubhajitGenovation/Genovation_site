"use client";
import { History, Landmark, Microscope, Building2 } from "lucide-react";

const cards = [
  { icon: <Landmark className="w-7 h-7 text-blue-600" />, iconBg: "bg-blue-500/[0.1] border-blue-500/[0.2]", title: "Government Data", sub: "Indian Govt, US Federal, World Bank, UN, central banks, regulatory bodies", note: "Extraordinary volume. Effectively inaccessible.", noteColor: "text-blue-600" },
  { icon: <Microscope className="w-7 h-7 text-emerald-600" />, iconBg: "bg-emerald-500/[0.1] border-emerald-500/[0.2]", title: "Research Data", sub: "PubMed papers, DrugBank compounds, materials science, climate data", note: "Groundbreaking work. Locked in silos.", noteColor: "text-emerald-600" },
  { icon: <Building2 className="w-7 h-7 text-amber-600" />, iconBg: "bg-amber-500/[0.1] border-amber-500/[0.2]", title: "Enterprise Data", sub: "Policies, SOPs, operational data, financial records, market intelligence", note: "Institutional knowledge. Invisible to decisions.", noteColor: "text-amber-600" },
];

export default function OriginSection() {
  return (
    <section className="py-32 relative" id="origin">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[400px] bg-blue-500/[0.04]" style={{ top: "20%", right: "20%" }} />

      <div className="relative max-w-4xl mx-auto px-8">
        <div className="mb-8 r-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/[0.08] border border-blue-500/[0.15]">
            <History className="w-3 h-3 text-blue-600" />
            <span className="text-blue-600 text-[10px] font-mono tracking-[0.2em] uppercase">Origin</span>
          </div>
        </div>

        <h2 className="display-section text-4xl md:text-5xl lg:text-6xl mb-10 r-up">Where This Started</h2>

        <div className="space-y-8 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed font-light r-up">
            Genovation was founded in December 2020 — before generative AI entered the mainstream conversation.
          </p>
          <div className="pullquote py-4 r-up">
            <p className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed">
              AI&apos;s most profound impact will not come from generating content. It will come from{" "}
              <span className="text-gradient font-normal">democratizing access to intelligence</span> —
              making the world&apos;s data understandable, navigable, and actionable.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed font-light r-up">
            The world is not short on data. It is short on access. Governments publish extraordinary
            volumes of data. Research institutions produce groundbreaking work every day — millions of
            papers, novel compounds, materials science breakthroughs. Enterprises sit on policies, SOPs,
            operational data, financial records. The knowledge exists. The ability to find it, synthesize it,
            and act on it does not.
          </p>
          <p className="text-gray-600 leading-relaxed font-light r-up">
            The opportunity is not content generation. It is{" "}
            <span className="text-gray-800 font-medium">intelligence liberation</span> —
            making data and knowledge genuinely useful to the people and organizations that sit on top of it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 r-up">
          {cards.map((c) => (
            <div key={c.title} className="card-static p-6 text-center">
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mx-auto mb-4 ${c.iconBg}`}>
                {c.icon}
              </div>
              <h3 className="text-lg font-light text-gray-800 mb-2">{c.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{c.sub}</p>
              <p className={`text-sm font-light ${c.noteColor}`}>{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
