"use client";

import { Shield, Atom, Key, RotateCcw, Network, Lock, Square, Eye, Grid3x3 } from "lucide-react";

export default function PlatformSecurity() {
  return (
    <section id="security" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.04]" style={{ top: "10%", left: "5%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.08] border border-cyan-500/[0.15] mb-8 r-up">
            <Shield className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Security Foundations</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Future-Proof<br /><span className="text-gradient">Security</span>
          </h2>
          <p className="text-[16px] text-gray-500 font-light max-w-3xl mx-auto mt-6 leading-relaxed r-up">
            Most enterprise systems assume today's cryptography will remain secure indefinitely. Genovation does not.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Post-Quantum */}
          <div className="card card-cyan p-8 r-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/[0.12] flex items-center justify-center">
                <Atom className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Post-Quantum Security</h3>
                <span className="text-[10px] font-mono text-cyan-600 tracking-wider">FUTURE_READY</span>
              </div>
            </div>
            <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-5">
              We invest in post-quantum cryptographic readiness to ensure intelligence systems deployed today do not become future liabilities.
            </p>
            <div className="space-y-3">
              {[
                { icon: <Grid3x3 className="w-3.5 h-3.5 text-cyan-600" />, title: "Lattice-Based Encryption", body: "KYBER/DILITHIUM hybrid encryption resistant to quantum attacks." },
                { icon: <Key className="w-3.5 h-3.5 text-cyan-600" />, title: "Secure Key Exchange", body: "Post-quantum key exchange primitives for all communications." },
                { icon: <RotateCcw className="w-3.5 h-3.5 text-cyan-600" />, title: "Cryptographic Agility", body: "System design allows algorithm updates without architectural changes." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-cyan-500/[0.04] border border-cyan-500/[0.1]">
                  <div className="flex items-center gap-2.5 mb-1.5">{item.icon}<span className="text-[13px] font-medium text-gray-800">{item.title}</span></div>
                  <p className="text-[12px] text-gray-500 font-light">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Agent Communication */}
          <div className="card card-violet p-8 r-right">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/[0.12] flex items-center justify-center">
                <Network className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Secure Agent Communication</h3>
                <span className="text-[10px] font-mono text-violet-600 tracking-wider">CONTROLLED_AUTONOMY</span>
              </div>
            </div>
            <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-5">
              As intelligence systems become agent-driven, agent-to-agent communication becomes a security surface we actively manage.
            </p>
            <div className="space-y-3">
              {[
                { icon: <Lock className="w-3.5 h-3.5 text-violet-600" />,   title: "Secure Inter-Agent Channels",     body: "Encrypted, authenticated communication between all agents." },
                { icon: <Square className="w-3.5 h-3.5 text-violet-600" />, title: "Controlled Execution Boundaries", body: "Strict sandboxing prevents agents from exceeding their permissions." },
                { icon: <Eye className="w-3.5 h-3.5 text-violet-600" />,   title: "Monitored Behavior",              body: "Real-time monitoring and enforcement of agent behavior policies." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-violet-500/[0.04] border border-violet-500/[0.1]">
                  <div className="flex items-center gap-2.5 mb-1.5">{item.icon}<span className="text-[13px] font-medium text-gray-800">{item.title}</span></div>
                  <p className="text-[12px] text-gray-500 font-light">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-[14px] text-gray-400 font-light mt-10 r-up">
          This prevents uncontrolled autonomy while enabling <span className="text-emerald-600">scalable intelligence</span>.
        </p>
      </div>
    </section>
  );
}
