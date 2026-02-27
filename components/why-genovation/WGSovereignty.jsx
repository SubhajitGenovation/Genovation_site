"use client";
import { Lock, ShieldAlert, Database, Boxes, FileText, ShieldCheck, Key, Scan, Activity, Check, HardDrive, Cpu, Server } from "lucide-react";

export default function WGSovereignty() {
  return (
    <section id="sovereignty" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[700px] h-[500px] bg-cyan-500/[0.05]" style={{ top: "5%", left: "25%" }} />
      <div className="orb w-[500px] h-[400px] bg-violet-500/[0.04]" style={{ bottom: "10%", right: "15%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.15] mb-8 r-up">
            <Lock className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Data Sovereignty</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Your Data.<br /><span className="text-gradient">Your Infrastructure.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto r-up">
            Complete air-gapped deployment. Zero external dependencies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Security perimeter dashed border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-amber-500/20 -m-6" />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#f5f3f0] rounded-full border border-amber-500/20 z-10">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[10px] font-mono text-amber-500 tracking-wider">SECURITY_PERIMETER</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 p-8">
            {/* Left: Data Sources */}
            <div className="col-span-12 md:col-span-3 space-y-4 r-left">
              <div className="text-[10px] font-mono text-gray-400 mb-3 flex items-center gap-2 tracking-wider">
                <HardDrive className="w-3 h-3" />DATA_SOURCES
              </div>
              {[
                { icon: <Database className="w-5 h-5 text-emerald-500" />, bg: "bg-emerald-500/[0.1]", name: "PostgreSQL", tag: "PRIMARY_DB", tagColor: "text-emerald-500", status: "Encrypted · 256-bit AES" },
                { icon: <Boxes className="w-5 h-5 text-blue-500" />, bg: "bg-blue-500/[0.1]", name: "Qdrant", tag: "VECTOR_DB", tagColor: "text-blue-500", status: "1.2B embeddings" },
                { icon: <FileText className="w-5 h-5 text-violet-500" />, bg: "bg-violet-500/[0.1]", name: "Doc Store", tag: "BLOB_STORAGE", tagColor: "text-violet-500", status: "S3-compatible" },
              ].map(({ icon, bg, name, tag, tagColor, status }) => (
                <div key={name} className="card p-4 !rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center`}>{icon}</div>
                    <div>
                      <div className="font-normal text-sm text-gray-800">{name}</div>
                      <div className={`text-[10px] ${tagColor} font-mono`}>{tag}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-light">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 soft-pulse" />{status}
                  </div>
                </div>
              ))}
            </div>

            {/* Center: Processing Core */}
            <div className="col-span-12 md:col-span-6 space-y-3 r-up">
              <div className="text-[10px] font-mono text-gray-400 mb-3 text-center flex items-center justify-center gap-2 tracking-wider">
                <Cpu className="w-3 h-3" />PROCESSING_CORE
              </div>
              {[
                { bg: "from-cyan-500/[0.06]", border: "border-cyan-500/[0.15]", hoverBorder: "hover:border-cyan-500/30", iconBg: "bg-cyan-500/[0.1]", icon: <ShieldCheck className="w-6 h-6 text-cyan-500" />, label: "Governance Layer", mono: "JUDGE_FRAMEWORK", tagBg: "bg-cyan-500/[0.08]", tagText: "text-cyan-600", tagBorder: "border-cyan-500/[0.12]", tags: ["Policy Engine", "Audit Trail", "RBAC"] },
                { bg: "from-violet-500/[0.06]", border: "border-violet-500/[0.15]", hoverBorder: "hover:border-violet-500/30", iconBg: "bg-violet-500/[0.1]", icon: <svg className="w-6 h-6 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.16Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-4.16Z"/></svg>, label: "Intelligence Layer", mono: "MENTIS_AGENTOS", tagBg: "bg-violet-500/[0.08]", tagText: "text-violet-600", tagBorder: "border-violet-500/[0.12]", tags: ["LLM Runtime", "RAG Pipeline", "Agents"] },
                { bg: "from-blue-500/[0.06]", border: "border-blue-500/[0.15]", hoverBorder: "hover:border-blue-500/30", iconBg: "bg-blue-500/[0.1]", icon: <Cpu className="w-6 h-6 text-blue-500" />, label: "Processing Layer", mono: "COMPUTE_CLUSTER", tagBg: "bg-blue-500/[0.08]", tagText: "text-blue-600", tagBorder: "border-blue-500/[0.12]", tags: ["Kubernetes", "GPU Pool", "vLLM"] },
                { bg: "from-emerald-500/[0.06]", border: "border-emerald-500/[0.15]", hoverBorder: "hover:border-emerald-500/30", iconBg: "bg-emerald-500/[0.1]", icon: <Database className="w-6 h-6 text-emerald-500" />, label: "Data Layer", mono: "ENCRYPTED_STORAGE", tagBg: "bg-emerald-500/[0.08]", tagText: "text-emerald-600", tagBorder: "border-emerald-500/[0.12]", tags: ["AES-256", "TLS 1.3", "HSM"] },
              ].map(({ bg, border, hoverBorder, iconBg, icon, label, mono, tagBg, tagText, tagBorder, tags }) => (
                <div key={label} className={`p-5 rounded-2xl bg-gradient-to-r ${bg} to-transparent border ${border} ${hoverBorder} transition-all`}>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}>{icon}</div>
                      <div>
                        <div className="font-medium text-gray-800">{label}</div>
                        <div className={`text-[10px] ${tagText} font-mono`}>{mono}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map(t => (
                        <span key={t} className={`px-3 py-1.5 rounded-lg ${tagBg} text-xs font-mono ${tagText} border ${tagBorder}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Security Layer */}
            <div className="col-span-12 md:col-span-3 space-y-4 r-right">
              <div className="text-[10px] font-mono text-gray-400 mb-3 flex items-center gap-2 tracking-wider">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>SECURITY_LAYER
              </div>
              <div className="card p-4 !rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/[0.1] flex items-center justify-center"><Key className="w-5 h-5 text-amber-500" /></div>
                  <div><div className="font-normal text-sm text-gray-800">CipherVault</div><div className="text-[10px] text-amber-500 font-mono">PQ_E2EE_VAULT</div></div>
                </div>
                <div className="space-y-1.5 text-xs text-gray-400 font-light">
                  {["Post-quantum E2EE", "HSM-backed keys", "Zero plaintext exposure"].map(t => (
                    <div key={t} className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" />{t}</div>
                  ))}
                </div>
              </div>
              <div className="card p-4 !rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/[0.1] flex items-center justify-center"><Scan className="w-5 h-5 text-red-400" /></div>
                  <div><div className="font-normal text-sm text-gray-800">Threat Monitor</div><div className="text-[10px] text-red-400 font-mono">REALTIME</div></div>
                </div>
                <div className="space-y-1.5 text-xs text-gray-400 font-light">
                  <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 soft-pulse" />0 threats detected</div>
                  <div className="flex items-center gap-2"><Activity className="w-3 h-3" />24/7 monitoring</div>
                </div>
              </div>
              <div className="card p-4 !rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/[0.1] flex items-center justify-center"><ShieldCheck className="w-5 h-5 text-emerald-500" /></div>
                  <div><div className="font-normal text-sm text-gray-800">Compliance</div><div className="text-[10px] text-emerald-500 font-mono">BY_DESIGN</div></div>
                </div>
                <div className="space-y-1.5 text-xs text-gray-400 font-light">
                  {["Privacy-first arch.", "Audit-ready day one"].map(t => (
                    <div key={t} className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" />{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-black/[0.05]">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/60 border border-black/[0.06]">
              <Server className="w-5 h-5 text-gray-400" />
              <span className="font-mono text-sm text-gray-700">YOUR_INFRASTRUCTURE</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-400 font-light">On-premise or air-gapped deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
