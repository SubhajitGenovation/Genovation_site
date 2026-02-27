"use client";

import { Eye, Activity, GitBranch, Timer, HardDrive, ShieldAlert } from "lucide-react";

const obsItems = [
  { icon: <Activity className="w-4 h-4 text-violet-600" />, bg: "bg-violet-500/[0.1]",  title: "Agent execution states",    sub: "Real-time visibility into agent lifecycle and task progress" },
  { icon: <GitBranch className="w-4 h-4 text-cyan-600" />,  bg: "bg-cyan-500/[0.1]",    title: "Data pipeline health",      sub: "Flow rates, bottlenecks, and transformation status" },
  { icon: <Timer className="w-4 h-4 text-emerald-600" />,   bg: "bg-emerald-500/[0.1]", title: "Inference latency",         sub: "Percentile distributions and anomaly detection" },
  { icon: <HardDrive className="w-4 h-4 text-blue-600" />,  bg: "bg-blue-500/[0.1]",    title: "Resource utilization",      sub: "CPU, memory, GPU, and IO consumption patterns" },
  { icon: <ShieldAlert className="w-4 h-4 text-rose-500/70" />, bg: "bg-rose-500/[0.1]", title: "Policy enforcement events", sub: "Governance actions and compliance violations" },
];

const pipelines = [
  { dot: "bg-violet-500", label: "Agent Execution",    status: "NOMINAL",     delay: "" },
  { dot: "bg-cyan-500",   label: "Data Pipeline",      status: "FLOWING",     delay: "animation-delay-[1s]" },
  { dot: "bg-emerald-500",label: "Inference Latency",  status: "P99 82ms",    delay: "animation-delay-[2s]" },
  { dot: "bg-emerald-500",label: "Resource Utilization",status: "OPTIMAL",    delay: "animation-delay-[0.5s]" },
  { dot: "bg-rose-400",   label: "Policy Events",      status: "0 VIOLATIONS",delay: "animation-delay-[1.5s]" },
];

const events = [
  { dot: "text-emerald-600", msg: "reasoning_agent_01 completed task T-4829", ago: "1s" },
  { dot: "text-cyan-600",    msg: "Pipeline ingested 12.4K records",           ago: "3s" },
  { dot: "text-emerald-600", msg: "JUDGE verified output 98.2% confidence",    ago: "7s" },
];

export default function PerfObservability() {
  return (
    <section className="py-48 relative" id="observability">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-amber-500/[0.05]" style={{ top: "20%", right: "20%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Mock */}
          <div className="r-left">
            <div className="industry-mock" style={{ boxShadow: "0 25px 80px -20px rgba(245,158,11,0.1)" }}>
              <div className="mock-header">
                <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
                <span className="text-[9px] text-gray-500 font-mono ml-2">OBSERVABILITY HUB</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[8px] text-emerald-600 font-mono">LIVE</span>
                </div>
              </div>
              <div className="p-5">
                {/* Pipeline flows */}
                <div className="space-y-2.5 mb-4">
                  {pipelines.map((p, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[10px] text-gray-600 font-light flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />{p.label}
                        </span>
                        <span className="text-[9px] text-emerald-600 font-mono">{p.status}</span>
                      </div>
                      <div className="h-1 rounded-full bg-black/[0.05] overflow-hidden">
                        <div className={`h-full w-full rounded-full pipe-flow ${p.delay}`} />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Event Stream */}
                <div className="text-[9px] text-gray-500 font-mono tracking-wider uppercase mb-2">Event Stream</div>
                <div className="space-y-1.5">
                  {events.map((e, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-black/[0.03] text-[10px]">
                      <span className={e.dot}>●</span>
                      <span className="text-gray-600 font-light flex-1">{e.msg}</span>
                      <span className="text-gray-400 font-mono">{e.ago}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/[0.1] border border-amber-500/[0.2] mb-8 r-up">
              <Eye className="w-3 h-3 text-amber-600" />
              <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">Observability</span>
            </div>
            <h2 className="display-section text-5xl md:text-7xl r-up">
              Operational<br /><span className="text-gradient-amber">Insights</span>
            </h2>
            <p className="text-lg text-gray-500 font-light mt-6 mb-10 leading-relaxed r-up">
              Reliability requires visibility. Deep observability across the entire intelligence stack enables operations teams to diagnose issues before they become incidents.
            </p>
            <div className="space-y-4">
              {obsItems.map((o, i) => (
                <div key={i} className="flex items-start gap-3 r-up">
                  <div className={`w-8 h-8 rounded-lg ${o.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>{o.icon}</div>
                  <div>
                    <p className="text-[15px] text-gray-700 font-light">{o.title}</p>
                    <p className="text-[12px] text-gray-400 font-light">{o.sub}</p>
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
