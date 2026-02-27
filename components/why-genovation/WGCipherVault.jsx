"use client";
import { Shield, FileLock2, Landmark, ShieldAlert, HeartPulse, Brain, AlertTriangle, X, ShieldCheck, Key, HardDrive, RotateCcw, Scan, PlusCircle, Lock, PenTool, ArrowRight, EyeOff, Database, UserCheck, CheckCircle, Unlock, Link, Cpu, Fingerprint, XCircle } from "lucide-react";

const ChromeBar = ({ title, statusLabel }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px", borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(248,247,245,0.6)" }}>
    <div style={{ display: "flex", gap: 8 }}>
      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fb5c4c" }} />
      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fbbd2e" }} />
      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
    </div>
    <span style={{ fontSize: 12, fontWeight: 300, color: "rgba(0,0,0,0.4)", fontFamily: "'Space Mono',monospace" }}>{title}</span>
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", animation: "softPulse 2s ease-in-out infinite", display: "inline-block" }} />
      <span style={{ fontSize: 11, color: "#059669", fontWeight: 400 }}>{statusLabel}</span>
    </div>
  </div>
);

export default function WGCipherVault() {
  return (
    <>
      {/* ── POST-QUANTUM VAULT ── */}
      <div className="mt-32 py-32 md:py-0 relative" id="pqVault">
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/[0.1] border border-blue-500/[0.15] mb-8 r-up">
              <Shield className="w-3 h-3 text-blue-500" />
              <span className="text-blue-500 text-[11px] font-light tracking-[0.25em] uppercase">CipherVault · Post-Quantum</span>
            </div>
            <h3 className="display-section text-4xl md:text-5xl lg:text-6xl r-up">
              The Vault for Data<br /><span className="text-gradient">That Cannot Be Compromised</span>
            </h3>
            <p className="mt-6 text-lg text-gray-500 font-light max-w-2xl mx-auto r-up">
              Trade secrets, classified intelligence, financial records, patient data, proprietary IP — your highest-value assets deserve encryption that survives the quantum era. CipherVault provides post-quantum E2EE with NIST-standardized algorithms, protecting against &quot;harvest now, decrypt later&quot; attacks.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8 r-up">
              {[
                { icon: <FileLock2 className="w-3.5 h-3.5 text-red-400" />, label: "Trade Secrets", bg: "bg-red-500/[0.06]", border: "border-red-500/[0.1]", text: "text-red-500" },
                { icon: <Landmark className="w-3.5 h-3.5 text-amber-500" />, label: "Financial Records", bg: "bg-amber-500/[0.06]", border: "border-amber-500/[0.1]", text: "text-amber-600" },
                { icon: <ShieldAlert className="w-3.5 h-3.5 text-violet-500" />, label: "Classified Intel", bg: "bg-violet-500/[0.06]", border: "border-violet-500/[0.1]", text: "text-violet-600" },
                { icon: <HeartPulse className="w-3.5 h-3.5 text-emerald-500" />, label: "Patient Data", bg: "bg-emerald-500/[0.06]", border: "border-emerald-500/[0.1]", text: "text-emerald-600" },
                { icon: <Brain className="w-3.5 h-3.5 text-blue-500" />, label: "Proprietary IP & Models", bg: "bg-blue-500/[0.06]", border: "border-blue-500/[0.1]", text: "text-blue-600" },
              ].map(({ icon, label, bg, border, text }) => (
                <div key={label} className={`flex items-center gap-2 px-4 py-2 rounded-full ${bg} border ${border}`}>
                  {icon}<span className={`text-xs ${text} font-light`}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vault Architecture Mock */}
          <div className="max-w-5xl mx-auto r-scale">
            <div style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 24, overflow: "hidden", boxShadow: "0 60px 120px -30px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.8) inset" }}>
              <ChromeBar title="ciphervault.genovation.io/quantum — Key Management Console" statusLabel="HSM Connected" />
              <div style={{ padding: 32 }}>
                {/* Quantum Threat Banner */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, padding: "16px 20px", borderRadius: 14, background: "linear-gradient(135deg, rgba(239,68,68,0.04), rgba(245,158,11,0.04), rgba(16,185,129,0.04))", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(239,68,68,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <AlertTriangle className="w-4 h-4" style={{ color: "#ef4444" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: "#1a1a2e", marginBottom: 2 }}>Quantum Threat Window</div>
                    <div style={{ fontSize: 12, fontWeight: 300, color: "rgba(0,0,0,0.5)" }}>NIST estimates cryptographically relevant quantum computers by 2030-2035. Data encrypted today with RSA/ECC is already at risk from harvest-now-decrypt-later attacks.</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, flexShrink: 0, padding: "0 12px" }}>
                    <div style={{ fontSize: 20, fontWeight: 500, color: "#ef4444", fontFamily: "'Space Mono',monospace" }}>~5yr</div>
                    <div style={{ fontSize: 9, color: "rgba(0,0,0,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>est. window</div>
                  </div>
                </div>

                {/* Classical vs PQ */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: 0, alignItems: "stretch", marginBottom: 28 }}>
                  {/* Classical */}
                  <div style={{ padding: 20, borderRadius: "16px 0 0 16px", border: "1px solid rgba(239,68,68,0.15)", borderRight: "none", background: "rgba(239,68,68,0.02)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(239,68,68,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}><X className="w-3.5 h-3.5" style={{ color: "#ef4444" }} /></div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 500, color: "#ef4444" }}>Classical Only</div>
                        <div style={{ fontSize: 10, color: "rgba(0,0,0,0.35)", fontFamily: "'Space Mono',monospace" }}>VULNERABLE</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {["RSA-2048", "ECDH P-256", "ECDSA"].map(alg => (
                        <div key={alg} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", borderRadius: 10, background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.08)" }}>
                          <span style={{ fontSize: 12, fontWeight: 300, color: "rgba(0,0,0,0.6)" }}>{alg}</span>
                          <span style={{ fontSize: 10, fontFamily: "'Space Mono',monospace", color: "#ef4444" }}>⚠ breakable</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Arrow */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 5 }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#10b981,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px -5px rgba(16,185,129,0.3)" }}>
                      <ArrowRight className="w-5 h-5" style={{ color: "#fff" }} />
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(0,0,0,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 6, textAlign: "center", lineHeight: 1.3 }}>Cipher<br />Vault</div>
                  </div>
                  {/* PQ Protected */}
                  <div style={{ padding: 20, borderRadius: "0 16px 16px 0", border: "1px solid rgba(16,185,129,0.2)", borderLeft: "none", background: "rgba(16,185,129,0.02)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}><ShieldCheck className="w-3.5 h-3.5" style={{ color: "#10b981" }} /></div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 500, color: "#059669" }}>CipherVault PQ</div>
                        <div style={{ fontSize: 10, color: "rgba(0,0,0,0.35)", fontFamily: "'Space Mono',monospace" }}>QUANTUM-SAFE</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {[["ML-KEM (Kyber)", "✓ NIST FIPS 203"], ["ML-DSA (Dilithium)", "✓ NIST FIPS 204"], ["SLH-DSA (SPHINCS+)", "✓ NIST FIPS 205"]].map(([alg, tag]) => (
                        <div key={alg} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", borderRadius: 10, background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.1)" }}>
                          <span style={{ fontSize: 12, fontWeight: 300, color: "rgba(0,0,0,0.6)" }}>{alg}</span>
                          <span style={{ fontSize: 10, fontFamily: "'Space Mono',monospace", color: "#059669" }}>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feature Strip */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
                  {[
                    { icon: <Key className="w-4 h-4" style={{ color: "#3b82f6" }} />, iconBg: "rgba(59,130,246,0.08)", title: "Hybrid Key Exchange", desc: "Classical + PQ in parallel for backwards compatibility" },
                    { icon: <HardDrive className="w-4 h-4" style={{ color: "#8b5cf6" }} />, iconBg: "rgba(139,92,246,0.08)", title: "HSM-Backed", desc: "FIPS 140-3 Level 3 hardware security modules" },
                    { icon: <RotateCcw className="w-4 h-4" style={{ color: "#06b6d4" }} />, iconBg: "rgba(6,182,212,0.08)", title: "Crypto-Agile", desc: "Hot-swap algorithms without re-encrypting datastores" },
                    { icon: <Scan className="w-4 h-4" style={{ color: "#10b981" }} />, iconBg: "rgba(16,185,129,0.08)", title: "Zero-Knowledge Proofs", desc: "Verify data integrity without exposing contents" },
                  ].map(({ icon, iconBg, title, desc }) => (
                    <div key={title} style={{ padding: 16, borderRadius: 14, background: "rgba(248,247,245,0.8)", border: "1px solid rgba(0,0,0,0.04)", textAlign: "center" }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>{icon}</div>
                      <div style={{ fontSize: 13, fontWeight: 400, color: "#1a1a2e", marginBottom: 2 }}>{title}</div>
                      <div style={{ fontSize: 11, fontWeight: 300, color: "rgba(0,0,0,0.4)", lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Lifecycle Flow */}
          <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-5 gap-3 r-up">
            {[
              { icon: <PlusCircle className="w-4 h-4" style={{ color: "#3b82f6" }} />, iconBg: "rgba(59,130,246,0.08)", title: "Generate", sub: "ML-KEM keygen inside HSM", hasArrow: true },
              { icon: <Lock className="w-4 h-4" style={{ color: "#8b5cf6" }} />, iconBg: "rgba(139,92,246,0.08)", title: "Encapsulate", sub: "Lattice-based key exchange", hasArrow: true },
              { icon: <FileLock2 className="w-4 h-4" style={{ color: "#06b6d4" }} />, iconBg: "rgba(6,182,212,0.08)", title: "Encrypt", sub: "AES-256-GCM symmetric", hasArrow: true },
              { icon: <PenTool className="w-4 h-4" style={{ color: "#10b981" }} />, iconBg: "rgba(16,185,129,0.08)", title: "Sign", sub: "ML-DSA digital signatures", hasArrow: true },
              { icon: <RotateCcw className="w-4 h-4" style={{ color: "#f59e0b" }} />, iconBg: "rgba(245,158,11,0.08)", title: "Rotate", sub: "Automated key lifecycle", hasArrow: false },
            ].map(({ icon, iconBg, title, sub, hasArrow }) => (
              <div key={title} className="card p-4 !rounded-xl text-center relative">
                <div style={{ width: 32, height: 32, borderRadius: 10, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>{icon}</div>
                <div style={{ fontSize: 12, fontWeight: 500, color: "#1a1a2e" }}>{title}</div>
                <div style={{ fontSize: 10, color: "rgba(0,0,0,0.4)", fontWeight: 300, marginTop: 2 }}>{sub}</div>
                {hasArrow && (
                  <div className="hidden md:block" style={{ position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)", width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "8px solid rgba(16,185,129,0.25)", zIndex: 5 }} />
                )}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 r-up">
            {[
              { val: "FIPS 203", label: "ML-KEM Standard" },
              { val: "Level 3", label: "HSM Certification" },
              { val: "0 ms", label: "Migration Downtime" },
              { val: <>2<sup style={{ fontSize: "60%" }}>256</sup></>, label: "Symmetric Key Space" },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 card !rounded-xl">
                <div className="text-2xl font-light text-gradient mb-1 font-mono">{s.val}</div>
                <div className="text-xs text-gray-400 font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── E2EE SECTION ── */}
      <div className="mt-32 relative" id="e2eeSection">
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.15] mb-8 r-up">
              <Lock className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">End-to-End Encrypted · Quantum-Safe</span>
            </div>
            <h3 className="display-section text-4xl md:text-5xl lg:text-6xl r-up">
              E2EE That No One —<br /><span className="text-gradient">Not Even Us — Can Read</span>
            </h3>
            <p className="mt-6 text-lg text-gray-500 font-light max-w-2xl mx-auto r-up">
              Every data transmission, every stored asset, every AI inference — end-to-end encrypted with post-quantum algorithms. Data is encrypted at the source and only decrypted at the authorized endpoint. No intermediary, including Genovation, ever sees plaintext.
            </p>
          </div>

          <div className="max-w-5xl mx-auto r-scale">
            <div style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 24, overflow: "hidden", boxShadow: "0 60px 120px -30px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.8) inset" }}>
              <ChromeBar title="ciphervault.genovation.io/e2ee — Encryption Pipeline Monitor" statusLabel="E2EE Active" />
              <div style={{ padding: 32 }}>
                {/* ZK Banner */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, padding: "16px 20px", borderRadius: 14, background: "linear-gradient(135deg, rgba(16,185,129,0.04), rgba(6,182,212,0.04))", border: "1px solid rgba(16,185,129,0.12)" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(16,185,129,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <EyeOff className="w-4 h-4" style={{ color: "#10b981" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: "#1a1a2e", marginBottom: 2 }}>Zero-Knowledge Architecture</div>
                    <div style={{ fontSize: 12, fontWeight: 300, color: "rgba(0,0,0,0.5)" }}>Genovation&apos;s infrastructure processes encrypted data without ever accessing plaintext. Encryption keys never leave your HSM boundary. Even during AI inference, data remains encrypted until the final authorized endpoint.</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, flexShrink: 0, padding: "0 12px" }}>
                    <div style={{ fontSize: 18, fontWeight: 500, color: "#059669", fontFamily: "'Space Mono',monospace" }}>E2EE</div>
                    <div style={{ fontSize: 9, color: "rgba(0,0,0,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>quantum-safe</div>
                  </div>
                </div>

                {/* Pipeline */}
                <div style={{ display: "flex", alignItems: "stretch", gap: 0, marginBottom: 28, position: "relative" }}>
                  {/* Source */}
                  <div style={{ flex: 1, padding: 20, borderRadius: "16px 0 0 16px", border: "1px solid rgba(59,130,246,0.15)", borderRight: "none", background: "rgba(59,130,246,0.02)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(59,130,246,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}><Database className="w-3.5 h-3.5" style={{ color: "#3b82f6" }} /></div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 500, color: "#2563eb" }}>Data Source</div>
                        <div style={{ fontSize: 10, color: "rgba(0,0,0,0.35)", fontFamily: "'Space Mono',monospace" }}>ORIGIN_ENCRYPT</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {[["lock", "ML-KEM key exchange", Lock], ["lock", "AES-256-GCM encrypt", Lock], ["pen-tool", "ML-DSA sign payload", PenTool]].map(([, text, Icon]) => (
                        <div key={text} style={{ padding: "8px 12px", borderRadius: 10, background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.08)", display: "flex", alignItems: "center", gap: 8 }}>
                          <Icon className="w-3 h-3" style={{ color: "#3b82f6" }} />
                          <span style={{ fontSize: 11, fontWeight: 300, color: "rgba(0,0,0,0.6)" }}>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transit */}
                  <div style={{ width: 160, padding: "16px 12px", border: "1px solid rgba(0,0,0,0.06)", background: "repeating-linear-gradient(90deg, rgba(16,185,129,0.02) 0px, rgba(16,185,129,0.02) 4px, transparent 4px, transparent 8px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, position: "relative" }}>
                    <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 2, transform: "translateY(-50%)" }} className="pipe-flow" />
                    <div style={{ position: "absolute", top: "35%", left: 0, right: 0, height: 1, opacity: 0.5 }} className="pipe-flow" />
                    <div style={{ position: "absolute", top: "65%", left: 0, right: 0, height: 1, opacity: 0.5 }} className="pipe-flow" />
                    <div style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 12, padding: 12, textAlign: "center", position: "relative", zIndex: 2 }}>
                      <ShieldCheck className="w-5 h-5" style={{ color: "#10b981", margin: "0 auto 6px", display: "block" }} />
                      <div style={{ fontSize: 10, fontWeight: 500, color: "#059669", letterSpacing: "0.05em" }}>ENCRYPTED</div>
                      <div style={{ fontSize: 9, color: "rgba(0,0,0,0.35)", marginTop: 2 }}>No plaintext</div>
                      <div style={{ fontSize: 9, color: "rgba(0,0,0,0.35)" }}>in transit</div>
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(0,0,0,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", position: "relative", zIndex: 2, background: "rgba(255,255,255,0.8)", padding: "2px 6px", borderRadius: 4 }}>PQ-TLS 1.3</div>
                  </div>

                  {/* AI Inference */}
                  <div style={{ width: 160, padding: "16px 12px", border: "1px solid rgba(139,92,246,0.12)", background: "rgba(139,92,246,0.02)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
                    <div style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(139,92,246,0.15)", borderRadius: 12, padding: 12, textAlign: "center" }}>
                      <Brain className="w-5 h-5" style={{ color: "#8b5cf6", margin: "0 auto 6px", display: "block" }} />
                      <div style={{ fontSize: 10, fontWeight: 500, color: "#7c3aed", letterSpacing: "0.05em" }}>AI INFERENCE</div>
                      <div style={{ fontSize: 9, color: "rgba(0,0,0,0.35)", marginTop: 2 }}>Encrypted</div>
                      <div style={{ fontSize: 9, color: "rgba(0,0,0,0.35)" }}>processing</div>
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(0,0,0,0.3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>TEE enclave</div>
                  </div>

                  {/* Endpoint */}
                  <div style={{ flex: 1, padding: 20, borderRadius: "0 16px 16px 0", border: "1px solid rgba(16,185,129,0.2)", borderLeft: "none", background: "rgba(16,185,129,0.02)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}><UserCheck className="w-3.5 h-3.5" style={{ color: "#10b981" }} /></div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 500, color: "#059669" }}>Authorized Endpoint</div>
                        <div style={{ fontSize: 10, color: "rgba(0,0,0,0.35)", fontFamily: "'Space Mono',monospace" }}>DECRYPT_ONLY_HERE</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {[[CheckCircle, "Verify ML-DSA signature"], [Key, "HSM decapsulate key"], [Unlock, "AES-256 decrypt plaintext"]].map(([Icon, text]) => (
                        <div key={text} style={{ padding: "8px 12px", borderRadius: 10, background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.1)", display: "flex", alignItems: "center", gap: 8 }}>
                          <Icon className="w-3 h-3" style={{ color: "#10b981" }} />
                          <span style={{ fontSize: 11, fontWeight: 300, color: "rgba(0,0,0,0.6)" }}>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Who can access */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 500, color: "rgba(0,0,0,0.35)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, textAlign: "center" }}>Who can access your plaintext data?</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10 }}>
                    {[
                      { name: "Genovation", sub: "Zero access", ok: false },
                      { name: "Cloud Provider", sub: "Zero access", ok: false },
                      { name: "Network Admins", sub: "Zero access", ok: false },
                      { name: "Nation-State", sub: "Quantum-resistant", ok: false },
                      { name: "Your Team", sub: "HSM key holders only", ok: true },
                    ].map(({ name, sub, ok }) => (
                      <div key={name} style={{ padding: "14px 12px", borderRadius: 12, background: ok ? "rgba(16,185,129,0.04)" : "rgba(239,68,68,0.03)", border: `1px solid ${ok ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.1)"}`, textAlign: "center" }}>
                        {ok
                          ? <CheckCircle className="w-5 h-5" style={{ color: "#10b981", margin: "0 auto 6px", display: "block" }} />
                          : <XCircle className="w-5 h-5" style={{ color: "#ef4444", margin: "0 auto 6px", display: "block" }} />
                        }
                        <div style={{ fontSize: 11, fontWeight: 400, color: ok ? "#059669" : "#dc2626" }}>{name}</div>
                        <div style={{ fontSize: 9, color: "rgba(0,0,0,0.35)", marginTop: 2 }}>{sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* E2EE Feature strip */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                  {[
                    { icon: <Link className="w-4 h-4" style={{ color: "#06b6d4" }} />, iconBg: "rgba(6,182,212,0.08)", title: "PQ-TLS 1.3", desc: "Hybrid ML-KEM X25519 key agreement for quantum-safe transport with classical fallback compatibility." },
                    { icon: <Cpu className="w-4 h-4" style={{ color: "#8b5cf6" }} />, iconBg: "rgba(139,92,246,0.08)", title: "TEE Enclaves", desc: "AI inference runs inside Trusted Execution Environments. Data is decrypted only within the hardware enclave boundary." },
                    { icon: <Fingerprint className="w-4 h-4" style={{ color: "#f59e0b" }} />, iconBg: "rgba(245,158,11,0.08)", title: "Forward Secrecy", desc: "Ephemeral session keys ensure past communications remain secure even if long-term keys are later compromised." },
                  ].map(({ icon, iconBg, title, desc }) => (
                    <div key={title} style={{ padding: 16, borderRadius: 14, background: "rgba(248,247,245,0.8)", border: "1px solid rgba(0,0,0,0.04)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 10, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
                        <div style={{ fontSize: 13, fontWeight: 400, color: "#1a1a2e" }}>{title}</div>
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 300, color: "rgba(0,0,0,0.4)", lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* E2EE Stats */}
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 r-up">
            {[
              { val: "100%", label: "Data Encrypted E2E" },
              { val: "0", label: "Plaintext Exposure Points" },
              { val: "PQ-TLS", label: "Quantum-Safe Transport" },
              { val: "TEE", label: "Enclave Processing" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center p-5 card !rounded-xl">
                <div className="text-2xl font-light text-gradient mb-1 font-mono">{val}</div>
                <div className="text-xs text-gray-400 font-light">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
