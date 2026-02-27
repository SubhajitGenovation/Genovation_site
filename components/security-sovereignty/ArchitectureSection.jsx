"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, ShieldCheck, Fingerprint, Lock, Network, Cpu, ChevronRight, Check, User, Key, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const LAYERS = [
  { id: "governance", label: "Application Governance", layer: "LAYER 5", icon: <ShieldCheck className="w-6 h-6 text-cyan-500" />, color: "cyan" },
  { id: "auth",       label: "Zero-Trust Authentication", layer: "LAYER 4", icon: <Fingerprint className="w-6 h-6 text-violet-500" />, color: "violet" },
  { id: "encryption", label: "Data Encryption",           layer: "LAYER 3", icon: <Lock className="w-6 h-6 text-blue-500" />, color: "blue" },
  { id: "network",    label: "Network Isolation",         layer: "LAYER 2", icon: <Network className="w-6 h-6 text-emerald-500" />, color: "emerald" },
  { id: "hardware",   label: "Hardware Security",         layer: "LAYER 1", icon: <Cpu className="w-6 h-6 text-amber-500" />, color: "amber" },
];

function CheckItem({ title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-lg bg-emerald-500/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check className="w-3.5 h-3.5 text-emerald-500" />
      </div>
      <div>
        <h4 className="text-sm font-normal text-gray-800 mb-0.5">{title}</h4>
        <p className="text-xs text-gray-400 font-light">{desc}</p>
      </div>
    </div>
  );
}

function PanelGovernance() {
  return (
    <div className="layer-panel">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/[0.15] to-cyan-500/[0.05] flex items-center justify-center"><ShieldCheck className="w-5 h-5 text-cyan-500" /></div>
        <div><h3 className="text-lg font-normal text-gray-800">Application Governance</h3><span className="text-xs font-mono text-cyan-500">JUDGE Framework</span></div>
      </div>
      <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">Real-time policy enforcement at the application layer ensures every AI operation complies with your organization's rules before execution.</p>
      <div className="space-y-4 mb-6">
        <CheckItem title="Policy Engine" desc="Real-time evaluation against configurable rules" />
        <CheckItem title="Human-in-the-Loop" desc="Approval workflows for sensitive operations" />
        <CheckItem title="Immutable Audit Trail" desc="Complete log of all decisions and actions" />
      </div>
      <div className="p-4 rounded-xl bg-[#faf8f6] border border-emerald-500/[0.1]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono text-gray-400">POLICY_CHECK</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" /><span className="text-[10px] font-mono text-emerald-500">LIVE</span></span>
        </div>
        <div className="flex items-center gap-3"><div className="flex-1 h-1.5 rounded-full bg-black/[0.04] overflow-hidden"><div className="h-full w-full rounded-full pipe-flow" /></div><span className="text-emerald-500 font-mono text-xs">PASS</span></div>
      </div>
    </div>
  );
}

function PanelAuth() {
  return (
    <div className="layer-panel">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/[0.15] to-violet-500/[0.05] flex items-center justify-center"><Fingerprint className="w-5 h-5 text-violet-500" /></div>
        <div><h3 className="text-lg font-normal text-gray-800">Zero-Trust Authentication</h3><span className="text-xs font-mono text-violet-500">Never Trust, Always Verify</span></div>
      </div>
      <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">Every access request is verified regardless of source. Identity is continuously validated throughout each session.</p>
      <div className="space-y-4 mb-6">
        <CheckItem title="Role-Based Access Control" desc="Granular permissions per user, role, and resource" />
        <CheckItem title="Multi-Factor Authentication" desc="Hardware keys, biometrics, and TOTP support" />
        <CheckItem title="Continuous Validation" desc="Session integrity verified on every request" />
      </div>
      <div className="p-4 rounded-xl bg-[#faf8f6] border border-violet-500/[0.1]">
        <div className="text-[10px] font-mono text-gray-400 mb-3">AUTH_FLOW</div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-1"><div className="w-9 h-9 rounded-lg bg-violet-500/[0.08] flex items-center justify-center"><User className="w-4 h-4 text-violet-500" /></div><span className="text-[10px] text-gray-400">User</span></div>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-cyan-500/30 mx-2" />
          <div className="flex flex-col items-center gap-1"><div className="w-9 h-9 rounded-lg bg-cyan-500/[0.08] flex items-center justify-center"><Key className="w-4 h-4 text-cyan-500" /></div><span className="text-[10px] text-gray-400">MFA</span></div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 mx-2" />
          <div className="flex flex-col items-center gap-1"><div className="w-9 h-9 rounded-lg bg-emerald-500/[0.08] flex items-center justify-center"><CheckCircle className="w-4 h-4 text-emerald-500" /></div><span className="text-[10px] text-emerald-500">Access</span></div>
        </div>
      </div>
    </div>
  );
}

function PanelEncryption() {
  return (
    <div className="layer-panel">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/[0.15] to-blue-500/[0.05] flex items-center justify-center"><Lock className="w-5 h-5 text-blue-500" /></div>
        <div><h3 className="text-lg font-normal text-gray-800">Data Encryption</h3><span className="text-xs font-mono text-blue-500">AES-256 + Post-Quantum</span></div>
      </div>
      <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">All data encrypted at rest and in transit using military-grade algorithms with post-quantum readiness built in via PQC Vault.</p>
      <div className="space-y-4 mb-6">
        <CheckItem title="Encryption at Rest" desc="AES-256-GCM for all stored data" />
        <CheckItem title="PQ-TLS 1.3 in Transit" desc="ML-KEM + X25519 hybrid key exchange" />
        <CheckItem title="Post-Quantum E2EE" desc="ML-KEM (Kyber) / ML-DSA (Dilithium) NIST-standardized" />
      </div>
      <div className="p-4 rounded-xl bg-[#faf8f6] border border-blue-500/[0.1] font-mono text-xs">
        <div className="text-[10px] text-gray-400 mb-2">ENCRYPTION_DEMO</div>
        <div className="flex items-center gap-2"><span className="text-blue-500">plaintext</span><span className="text-gray-300">→</span><span className="text-emerald-500">a7f3b9c2e8d1...</span><span className="px-1.5 py-0.5 rounded bg-emerald-500/[0.08] text-emerald-500 text-[9px]">AES-256</span></div>
      </div>
    </div>
  );
}

function PanelNetwork() {
  return (
    <div className="layer-panel">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/[0.15] to-emerald-500/[0.05] flex items-center justify-center"><Network className="w-5 h-5 text-emerald-500" /></div>
        <div><h3 className="text-lg font-normal text-gray-800">Network Isolation</h3><span className="text-xs font-mono text-emerald-500">Zero External Connectivity</span></div>
      </div>
      <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">Complete network segmentation with zero egress to external services. Your data never touches the public internet.</p>
      <div className="space-y-4 mb-6">
        <CheckItem title="Network Segmentation" desc="Isolated VLANs per security domain" />
        <CheckItem title="Strict Firewall Rules" desc="Default-deny with explicit allowlists" />
        <CheckItem title="Air-Gap Support" desc="Complete offline operation capability" />
      </div>
      <div className="p-4 rounded-xl bg-[#faf8f6] border border-emerald-500/[0.1]">
        <div className="flex items-center justify-between"><span className="text-[10px] font-mono text-gray-400">EGRESS_MONITOR</span><div className="flex items-center gap-2"><span className="text-xs text-gray-400 font-light">External connections:</span><span className="px-2 py-0.5 rounded-md bg-emerald-500/[0.08] text-emerald-500 font-mono text-xs">0</span></div></div>
      </div>
    </div>
  );
}

function PanelHardware() {
  return (
    <div className="layer-panel">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/[0.15] to-amber-500/[0.05] flex items-center justify-center"><Cpu className="w-5 h-5 text-amber-500" /></div>
        <div><h3 className="text-lg font-normal text-gray-800">Hardware Security</h3><span className="text-xs font-mono text-amber-500">Physical Root of Trust</span></div>
      </div>
      <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">Security starts at the silicon level with hardware-backed key storage and trusted execution environments.</p>
      <div className="space-y-4 mb-6">
        <CheckItem title="HSM Integration" desc="FIPS 140-3 Level 3 hardware security modules" />
        <CheckItem title="TEE Enclaves" desc="Trusted Execution Environments for sensitive computation" />
        <CheckItem title="Secure Boot" desc="Verified boot chain integrity" />
      </div>
      <div className="p-4 rounded-xl bg-[#faf8f6] border border-amber-500/[0.1]">
        <div className="flex items-center justify-between"><span className="text-[10px] font-mono text-gray-400">HSM_STATUS</span><div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" /><span className="text-xs text-emerald-500 font-light">Connected & Operational</span></div></div>
      </div>
    </div>
  );
}

const PANELS = { governance: <PanelGovernance />, auth: <PanelAuth />, encryption: <PanelEncryption />, network: <PanelNetwork />, hardware: <PanelHardware /> };

export default function ArchitectureSection() {
  const containerRef = useRef(null);
  const [activeLayer, setActiveLayer] = useState("governance");

  useGSAP(
    () => {
      gsap.utils.toArray(".r-up", containerRef.current).forEach((el) => {
        gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });
      gsap.utils.toArray(".r-left", containerRef.current).forEach((el) => {
        gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
      });
      gsap.utils.toArray(".r-right", containerRef.current).forEach((el) => {
        gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
      });
      containerRef.current.querySelectorAll(".orb").forEach((orb) => {
        gsap.to(orb, { y: (Math.random() - 0.5) * 250, x: (Math.random() - 0.5) * 120, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: 2.5 } });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="architecture" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-cyan-500/[0.04]" style={{ top: "10%", right: "10%" }} />
      <div className="orb w-[400px] h-[350px] bg-violet-500/[0.04]" style={{ bottom: "10%", left: "20%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.15] mb-8 r-up">
            <Layers className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Defense in Depth</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Multi-Layer <span className="text-gradient">Security</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto r-up">
            Security isn't a layer added at the end — it's embedded across the entire stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Layer tabs */}
          <div className="space-y-3 r-left" id="layerTabs">
            {LAYERS.map(({ id, label, layer, icon, color }) => (
              <div
                key={id}
                className={`layer-tab card !rounded-2xl p-5 cursor-pointer ${activeLayer === id ? "active" : ""}`}
                data-layer={id}
                onClick={() => setActiveLayer(id)}
              >
                <div className="flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${color}-500/[0.12] to-${color}-500/[0.04] flex items-center justify-center`}>
                    {icon}
                  </div>
                  <div className="flex-1">
                    <div className={`text-[10px] font-mono text-${color}-500 mb-0.5`}>{layer}</div>
                    <h3 className="text-sm font-normal text-gray-800">{label}</h3>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="sticky top-24 r-right">
            <div className="card !rounded-3xl p-8 min-h-[520px]">
              {PANELS[activeLayer]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
