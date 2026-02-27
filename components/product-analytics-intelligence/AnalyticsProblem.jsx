"use client";
import { BarChart2, Users, Box, Clock } from "lucide-react";

const problems = [
  {
    icon: <BarChart2 className="w-5 h-5 text-red-400" />,
    bg: "bg-red-500/[0.08]",
    title: "Metrics Without Meaning",
    desc: "Thousands of KPIs, yet leaders still rely on intuition to interpret them.",
  },
  {
    icon: <Users className="w-5 h-5 text-amber-500" />,
    bg: "bg-amber-500/[0.08]",
    title: "Manual Root-Cause",
    desc: "Understanding variance requires spreadsheets, meetings, and tribal knowledge.",
  },
  {
    icon: <Box className="w-5 h-5 text-orange-400" />,
    bg: "bg-orange-500/[0.08]",
    title: "Black-Box AI",
    desc: "Opaque models that can't explain conclusions are unusable in regulated environments.",
  },
  {
    icon: <Clock className="w-5 h-5 text-rose-400" />,
    bg: "bg-rose-500/[0.08]",
    title: "Reactive Analytics",
    desc: "Insights arrive after outcomes occur, limiting strategic value.",
  },
];

export default function AnalyticsProblem() {
  return (
    <section
      className="py-32 md:py-48 relative overflow-hidden section-amber"
      id="problem"
    >
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div
        className="orb w-[500px] h-[400px] bg-red-500/[0.04]"
        style={{ top: "10%", right: "10%" }}
      />
      <div
        className="orb w-[400px] h-[350px] bg-amber-500/[0.03]"
        style={{ bottom: "10%", left: "15%" }}
      />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6 r-up">
            <span className="text-[11px] text-red-500 font-mono tracking-[0.2em]">00</span>
            <div className="w-8 h-px bg-red-500/40" />
            <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">
              The Problem
            </span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl mb-6 r-up">
            Enterprise Analytics
            <br />
            Is{" "}
            <span className="text-gradient-amber">Broken</span>
          </h2>
          <p className="text-xl text-gray-400 font-light r-up">
            Enterprises have no shortage of data. What they lack is{" "}
            <em>explanation</em>.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((item, i) => (
            <div key={i} className="card p-6 r-up">
              <div
                className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-5`}
              >
                {item.icon}
              </div>
              <h3 className="text-base font-medium text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
