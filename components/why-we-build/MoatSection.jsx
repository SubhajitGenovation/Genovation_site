"use client";
import { Shield, Rocket, Puzzle, Eye, Lock, Server, Brain, Cpu, Stamp, ChevronsUp } from "lucide-react";

function MoatBlock({ icon, title, desc, style, wide = false, foundation = false }) {
  return (
    <div
      className={[
        "moat-block",
        wide ? "moat-block-wide" : "",
        foundation ? "moat-foundation" : "",
      ].join(" ").trim()}
      style={style}
    >
      <div className="moat-icon">{icon}</div>
      <div>
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function mc(color, bg, bd) {
  return { "--mc": color, "--mc-bg": bg, "--mc-bd": bd };
}

const EMERALD  = mc("var(--emerald)", "rgba(16,185,129,0.06)",  "rgba(16,185,129,0.15)");
const CYAN     = mc("var(--cyan)",    "rgba(6,182,212,0.06)",   "rgba(6,182,212,0.15)");
const ROSE     = mc("var(--rose)",    "rgba(251,113,133,0.06)", "rgba(251,113,133,0.15)");
const VIOLET   = mc("var(--violet)", "rgba(139,92,246,0.06)",  "rgba(139,92,246,0.15)");
const BLUE     = mc("var(--blue)",   "rgba(59,130,246,0.06)",  "rgba(59,130,246,0.15)");
const AMBER    = mc("var(--amber)",  "rgba(245,158,11,0.06)",  "rgba(245,158,11,0.15)");
const AMBER_FOUND = mc("var(--amber)", "rgba(245,158,11,0.04)", "rgba(245,158,11,0.12)");

export default function MoatSection() {
  return (
    <section className="py-32 relative" id="moat">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[400px] bg-violet-500/[0.04]" style={{ top: "20%", left: "20%" }} />

      <div className="relative max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.2] mb-6 r-up">
            <Shield className="w-3 h-3 text-violet-600" />
            <span className="text-violet-600 text-[10px] font-mono tracking-[0.2em] uppercase">Defensibility</span>
          </div>
          <h2 className="display-section text-4xl md:text-5xl lg:text-6xl r-up">Moat Summary</h2>
        </div>

        {/* Fortress Wall */}
        <div className="r-up">
          <div className="moat-wall">

            {/* TOP: Production Deployments */}
            <div className="moat-row moat-top">
              <MoatBlock
                wide
                icon={<Rocket className="w-5 h-5" style={{ color: "var(--emerald)" }} />}
                title="Production Deployments"
                desc="Live in finance, defense, healthcare, government — trust earned through delivery"
                style={EMERALD}
              />
            </div>

            <div className="moat-connector">
              <ChevronsUp className="w-4 h-4 text-gray-300" />
            </div>

            {/* Layer 4: Extension Libraries + Explainability */}
            <div className="moat-row">
              <MoatBlock
                icon={<Puzzle className="w-5 h-5" style={{ color: "var(--cyan)" }} />}
                title="Extension Libraries"
                desc="Sensors, simulations, IoT, industrial — physical world capabilities"
                style={CYAN}
              />
              <MoatBlock
                icon={<Eye className="w-5 h-5" style={{ color: "var(--rose)" }} />}
                title="Explainability"
                desc="Decision traceability at every layer — architectural, not bolt-on"
                style={ROSE}
              />
            </div>

            <div className="moat-connector">
              <ChevronsUp className="w-4 h-4 text-gray-300" />
            </div>

            {/* Layer 3: Cryptographic Libraries + Sovereign Architecture */}
            <div className="moat-row">
              <MoatBlock
                icon={<Lock className="w-5 h-5" style={{ color: "var(--violet)" }} />}
                title="Cryptographic Libraries"
                desc="Post-quantum primitives, CipherVault, secure agent comms"
                style={VIOLET}
              />
              <MoatBlock
                icon={<Server className="w-5 h-5" style={{ color: "var(--blue)" }} />}
                title="Sovereign Architecture"
                desc="On-prem, air-gapped by default — can't retrofit from cloud-first"
                style={BLUE}
              />
            </div>

            <div className="moat-connector">
              <ChevronsUp className="w-4 h-4 text-gray-300" />
            </div>

            {/* Layer 2: Proprietary SLMs + Mentis OS */}
            <div className="moat-row">
              <MoatBlock
                icon={<Brain className="w-5 h-5" style={{ color: "var(--amber)" }} />}
                title="Proprietary SLMs + SDCA"
                desc="Domain-specific models with novel attention — years of research that compounds"
                style={AMBER}
              />
              <MoatBlock
                icon={<Cpu className="w-5 h-5" style={{ color: "var(--emerald)" }} />}
                title="Mentis OS"
                desc="Proprietary agentic OS — cannot be assembled from open-source"
                style={EMERALD}
              />
            </div>

            <div className="moat-connector">
              <ChevronsUp className="w-4 h-4 text-gray-300" />
            </div>

            {/* FOUNDATION: Patent-Protected */}
            <div className="moat-row">
              <MoatBlock
                wide
                foundation
                icon={<Stamp className="w-5 h-5" style={{ color: "var(--amber)" }} />}
                title="Patent-Protected Foundation"
                desc="Core innovations filed for patent in 2025 — defensible competitive position"
                style={AMBER_FOUND}
              />
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">
            Each layer depends on and reinforces the layers beneath it
          </p>
        </div>
      </div>
    </section>
  );
}
