"use client";

import { Cpu, Microchip, ServerCog, X, Check } from "lucide-react";

const HARDWARE = [
  { Icon: Cpu,      title: "Commodity GPUs",      sub: "Standard enterprise hardware" },
  { Icon: Microchip, title: "CPU-Only Options",    sub: "For specific workloads" },
  { Icon: ServerCog, title: "Scalable Multi-Node", sub: "Grow with requirements" },
];

export default function HardwareAndLockIn() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb" style={{ width: 350, height: 350, background: "rgba(20,184,166,0.04)", top: "10%", right: "-3%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Hardware */}
          <div className="r-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.12)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="text-sky-500 text-[10px] font-medium uppercase tracking-[0.2em]">Hardware</span>
            </div>
            <h2 className="text-2xl display-inter text-gray-800 mb-3">Enterprise-Friendly Infrastructure</h2>
            <p className="text-gray-500 mb-6 text-sm font-light">SLM strategy avoids hyperscaler dependency.</p>

            <div className="space-y-2.5">
              {HARDWARE.map(({ Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 p-3.5 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(14,165,233,0.08)" }}>
                    <Icon className="w-4 h-4 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-sm">{title}</p>
                    <p className="text-gray-400 text-xs font-light">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No Lock-In */}
          <div className="r-right">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(20,184,166,0.06)", border: "1px solid rgba(20,184,166,0.12)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <span className="text-teal-500 text-[10px] font-medium uppercase tracking-[0.2em]">Independence</span>
            </div>
            <h2 className="text-2xl display-inter text-gray-800 mb-3">No Vendor Lock-In</h2>
            <p className="text-gray-500 mb-6 text-sm font-light">Full ownership. No proprietary dependencies.</p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(239,68,68,0.08)" }}>
                <p className="text-red-400 text-[10px] uppercase tracking-wider mb-2.5 font-mono">Not Required</p>
                <div className="space-y-2">
                  {["Proprietary cloud", "Managed hosting", "External APIs"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <X className="w-3 h-3 text-red-400 shrink-0" />
                      <span className="text-gray-500 text-xs font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(20,184,166,0.12)" }}>
                <p className="text-teal-500 text-[10px] uppercase tracking-wider mb-2.5 font-mono">You Retain</p>
                <div className="space-y-2">
                  {["Infrastructure", "Deployment control", "Independence"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-teal-500 shrink-0" />
                      <span className="text-gray-600 text-xs font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl" style={{ background: "rgba(20,184,166,0.04)", border: "1px solid rgba(20,184,166,0.1)" }}>
              <p className="text-teal-600 text-xs font-light">Long-term strategic flexibility guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}