"use client";

import { MessageSquare, FileSearch, Settings, ShieldCheck } from "lucide-react";

const practiceCards = [
  { icon: <MessageSquare className="w-5 h-5 text-teal-500" />,   bg: "bg-teal-500/[0.08] border-teal-500/[0.12]",   cardClass: "card-teal",   title: "Can be explained" },
  { icon: <FileSearch    className="w-5 h-5 text-violet-500" />, bg: "bg-violet-500/[0.08] border-violet-500/[0.12]", cardClass: "card-violet", title: "Can be audited" },
  { icon: <Settings      className="w-5 h-5 text-blue-500" />,   bg: "bg-blue-500/[0.08] border-blue-500/[0.12]",    cardClass: "card-blue",   title: "Can be governed" },
  { icon: <ShieldCheck   className="w-5 h-5 text-amber-500" />,  bg: "bg-amber-500/[0.08] border-amber-500/[0.12]",  cardClass: "card-amber",  title: "Can be defended" },
];

export default function RAIPractice() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-teal opacity-15" />
      <div className="orb w-[400px] h-[400px] bg-teal-400/[0.05]" style={{ bottom: "-10%", left: "20%" }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-[10px] text-teal-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">
          The Standard
        </p>
        <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">
          Responsible AI in Practice
        </h2>
        <p className="text-lg text-gray-500 mb-10 font-light r-up">
          Enterprises adopt Genovation systems because they:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 r-up">
          {practiceCards.map((c, i) => (
            <div key={i} className={`card ${c.cardClass} p-5`}>
              <div className={`w-11 h-11 rounded-xl ${c.bg} border flex items-center justify-center mx-auto mb-3`}>
                {c.icon}
              </div>
              <p className="text-gray-800 font-medium text-sm">{c.title}</p>
            </div>
          ))}
        </div>

        <div className="card-no-hover p-5 r-up">
          <p className="text-gray-500 italic font-light text-sm">
            This is the standard we hold ourselves to—and the standard our research is built around.
          </p>
        </div>
      </div>
    </section>
  );
}
