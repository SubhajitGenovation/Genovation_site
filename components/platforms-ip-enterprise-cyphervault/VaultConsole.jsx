"use client";
import { useEffect } from "react";
import {
  Lock, LayoutDashboard, Database, Share2, Terminal,
  Key, Users, ScrollText, Plus, UserPlus, Settings, Trash2,
  Download, Play, Save
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function VaultConsole() {
  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) =>
      gsap.to(el, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      })
    );
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[500px] bg-violet-400/[0.05]" style={{ bottom: "-10%", right: "-5%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[10px] text-violet-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Interface</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">Vault Console</h2>
          <p className="text-gray-500 max-w-lg mx-auto font-light r-up">
            Manage encrypted vaults, run secure queries, and control access—all in one powerful interface.
          </p>
        </div>

        {/* ── DASHBOARD MOCK UI ── */}
        <div className="max-w-5xl mx-auto mb-12 r-up">
          <div
            style={{
              background: "#0a0a0c",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 25px 80px -20px rgba(139,92,246,0.12), 0 0 0 1px rgba(139,92,246,0.08)",
            }}
          >
            {/* Header bar */}
            <div style={{ display:"flex", alignItems:"center", gap:6, padding:"12px 16px", borderBottom:"1px solid rgba(255,255,255,0.06)", background:"rgba(255,255,255,0.02)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f57", display:"inline-block" }} />
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#febc2e", display:"inline-block" }} />
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#28c840", display:"inline-block" }} />
              </div>
              <div style={{ flex:1, display:"flex", justifyContent:"center" }}>
                <div style={{ padding:"6px 16px", borderRadius:8, background:"rgba(255,255,255,0.05)", display:"flex", alignItems:"center", gap:8 }}>
                  <Lock style={{ width:12, height:12, color:"#8b5cf6" }} />
                  <span style={{ fontSize:11, color:"#71717a" }}>vault.genovation.ai</span>
                  <span style={{ fontSize:9, color:"#34d399", marginLeft:8 }}>● Secure</span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ display:"flex", minHeight:520 }}>
              {/* Sidebar */}
              <div style={{ width:220, borderRight:"1px solid rgba(255,255,255,0.04)", padding:16, display:"flex", flexDirection:"column", background:"rgba(255,255,255,0.02)" }}>
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
                  <div style={{ width:36, height:36, borderRadius:12, background:"linear-gradient(135deg,#8b5cf6,#7c3aed)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Lock style={{ width:16, height:16, color:"#fff" }} />
                  </div>
                  <div>
                    <p style={{ fontSize:13, fontWeight:600, color:"#fff", margin:0 }}>CipherVault</p>
                    <p style={{ fontSize:9, color:"#52525b", margin:0 }}>Secure Analytics</p>
                  </div>
                </div>

                <nav style={{ display:"flex", flexDirection:"column", gap:2, flex:1 }}>
                  {[
                    { Icon: LayoutDashboard, label: "Dashboard",       active: true },
                    { Icon: Database,        label: "My Vaults",       badge: "4" },
                    { Icon: Share2,          label: "Shared With Me",  badge: "2", badgeDark: true },
                    { Icon: Terminal,        label: "Query Console" },
                    { Icon: Key,             label: "Key Management" },
                    { Icon: Users,           label: "Access Control" },
                    { Icon: ScrollText,      label: "Audit Log" },
                  ].map(({ Icon, label, active, badge, badgeDark }) => (
                    <div key={label} style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 12px", borderRadius:10, background: active ? "rgba(139,92,246,0.1)" : "transparent", border: active ? "1px solid rgba(139,92,246,0.2)" : "1px solid transparent", cursor:"pointer" }}>
                      <Icon style={{ width:15, height:15, color: active ? "#a78bfa" : "#52525b", flexShrink:0 }} />
                      <span style={{ fontSize:11, color: active ? "#a78bfa" : "#52525b", flex:1 }}>{label}</span>
                      {badge && (
                        <span style={{ fontSize:9, padding:"1px 6px", borderRadius:4, background: badgeDark ? "#3f3f46" : "rgba(139,92,246,0.2)", color: badgeDark ? "#a1a1aa" : "#a78bfa" }}>
                          {badge}
                        </span>
                      )}
                    </div>
                  ))}
                </nav>

                <div style={{ padding:12, borderRadius:12, background:"linear-gradient(135deg,rgba(139,92,246,0.1),rgba(124,58,237,0.05))", border:"1px solid rgba(139,92,246,0.2)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                    <span style={{ width:6, height:6, borderRadius:"50%", background:"#a78bfa", display:"inline-block" }} />
                    <span style={{ fontSize:9, color:"#a78bfa", fontWeight:500 }}>End-to-End Encrypted</span>
                  </div>
                  <p style={{ fontSize:9, color:"#3f3f46", margin:0 }}>CKKS Homomorphic · 256-bit</p>
                </div>
              </div>

              {/* Main */}
              <div style={{ flex:1, padding:24 }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24 }}>
                  <div>
                    <h2 style={{ fontSize:16, fontWeight:600, color:"#fff", margin:0 }}>Dashboard</h2>
                    <p style={{ fontSize:11, color:"#52525b", margin:0 }}>Overview of your encrypted data operations</p>
                  </div>
                  <button style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 16px", borderRadius:10, background:"linear-gradient(135deg,#8b5cf6,#7c3aed)", color:"#fff", fontSize:11, fontWeight:500, border:"none", cursor:"pointer" }}>
                    <Plus style={{ width:14, height:14 }} />Create Vault
                  </button>
                </div>

                {/* Stats row */}
                <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:20 }}>
                  {[
                    { label:"Active Vaults",  val:"4",      sub:"All encrypted",  subColor:"#34d399" },
                    { label:"Partners",       val:"7",      sub:"With access",    subColor:"#71717a" },
                    { label:"Queries (30d)",  val:"1,247",  sub:"Zero exposure",  subColor:"#34d399" },
                    { label:"Data Protected", val:"2.4 TB", sub:"Across vaults",  subColor:"#71717a" },
                  ].map(({ label, val, sub, subColor }) => (
                    <div key={label} style={{ padding:14, borderRadius:12, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                        <span style={{ fontSize:9, color:"#52525b" }}>{label}</span>
                        <Database style={{ width:13, height:13, color:"rgba(139,92,246,0.5)" }} />
                      </div>
                      <p style={{ fontSize:22, fontWeight:600, color:"#fff", margin:0 }}>{val}</p>
                      <p style={{ fontSize:9, color:subColor, margin:0 }}>{sub}</p>
                    </div>
                  ))}
                </div>

                {/* Vaults + Activity */}
                <div style={{ display:"grid", gridTemplateColumns:"3fr 2fr", gap:14 }}>
                  {/* Vaults list */}
                  <div style={{ borderRadius:12, border:"1px solid rgba(255,255,255,0.06)", overflow:"hidden", background:"rgba(255,255,255,0.02)" }}>
                    <div style={{ padding:"10px 16px", borderBottom:"1px solid rgba(255,255,255,0.04)", display:"flex", justifyContent:"space-between" }}>
                      <span style={{ fontSize:11, color:"#a1a1aa", fontWeight:500 }}>My Vaults</span>
                      <span style={{ fontSize:10, color:"#a78bfa" }}>View All →</span>
                    </div>
                    {[
                      { name:"Customer Analytics",    meta:"1.2M records · 3 partners · Last query: 2h ago",    size:"892 MB" },
                      { name:"Financial Transactions", meta:"4.7M records · 2 auditors · Last query: 1d ago",    size:"1.1 GB" },
                      { name:"Clinical Trial Data",    meta:"342K records · PHI protected · HIPAA compliant",    size:"456 MB" },
                    ].map(({ name, meta, size }) => (
                      <div key={name} style={{ padding:"10px 16px", display:"flex", alignItems:"center", gap:12, borderBottom:"1px solid rgba(255,255,255,0.03)", cursor:"pointer" }}>
                        <div style={{ width:36, height:36, borderRadius:10, background:"linear-gradient(135deg,rgba(139,92,246,0.2),rgba(124,58,237,0.1))", border:"1px solid rgba(139,92,246,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                          <Lock style={{ width:14, height:14, color:"#a78bfa" }} />
                        </div>
                        <div style={{ flex:1, minWidth:0 }}>
                          <p style={{ fontSize:12, color:"#fff", fontWeight:500, margin:0 }}>{name}</p>
                          <p style={{ fontSize:9, color:"#52525b", margin:0 }}>{meta}</p>
                        </div>
                        <div style={{ textAlign:"right" }}>
                          <p style={{ fontSize:11, color:"#a1a1aa", margin:0 }}>{size}</p>
                          <span style={{ fontSize:9, color:"#34d399" }}>● Active</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Activity */}
                  <div style={{ borderRadius:12, border:"1px solid rgba(255,255,255,0.06)", overflow:"hidden", background:"rgba(255,255,255,0.02)" }}>
                    <div style={{ padding:"10px 16px", borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                      <span style={{ fontSize:11, color:"#a1a1aa", fontWeight:500 }}>Recent Activity</span>
                    </div>
                    <div style={{ padding:14, display:"flex", flexDirection:"column", gap:14 }}>
                      {[
                        { Icon:Terminal,  bg:"rgba(139,92,246,0.2)", color:"#a78bfa", title:"Query executed",  sub:"customer_analytics · Acme Research",         time:"2m" },
                        { Icon:UserPlus,  bg:"rgba(16,185,129,0.2)", color:"#34d399", title:"Access granted",  sub:"Ernst & Young → financial_transactions",      time:"1h" },
                        { Icon:Plus,      bg:"rgba(245,158,11,0.2)", color:"#fbbf24", title:"Vault created",   sub:"Q4 Revenue Data · 2.1M records",              time:"3h" },
                        { Icon:Key,       bg:"rgba(139,92,246,0.2)", color:"#a78bfa", title:"Results decrypted",sub:"clinical_trial · Admin",                     time:"5h" },
                      ].map(({ Icon, bg, color, title, sub, time }) => (
                        <div key={title} style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                          <div style={{ width:24, height:24, borderRadius:"50%", background:bg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                            <Icon style={{ width:11, height:11, color }} />
                          </div>
                          <div style={{ flex:1, minWidth:0 }}>
                            <p style={{ fontSize:11, color:"#d4d4d8", margin:0 }}>{title}</p>
                            <p style={{ fontSize:9, color:"#52525b", margin:0 }}>{sub}</p>
                          </div>
                          <span style={{ fontSize:9, color:"#52525b" }}>{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── QUERY CONSOLE MOCK UI ── */}
        <div className="max-w-5xl mx-auto mb-12 r-up">
          <div
            style={{
              background: "#0a0a0c",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 60px -15px rgba(139,92,246,0.08)",
            }}
          >
            {/* Header */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 16px", borderBottom:"1px solid rgba(255,255,255,0.06)", background:"rgba(255,255,255,0.02)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ display:"flex", gap:6 }}>
                  <span style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f57", display:"inline-block" }} />
                  <span style={{ width:10, height:10, borderRadius:"50%", background:"#febc2e", display:"inline-block" }} />
                  <span style={{ width:10, height:10, borderRadius:"50%", background:"#28c840", display:"inline-block" }} />
                </div>
                <span style={{ fontSize:11, color:"#71717a" }}>Query Console — Encrypted Analytics</span>
              </div>
              <span style={{ padding:"4px 10px", borderRadius:8, background:"rgba(16,185,129,0.1)", color:"#34d399", fontSize:10 }}>
                ● Connected to customer_analytics
              </span>
            </div>

            {/* Body */}
            <div style={{ padding:24, minHeight:380 }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }}>
                {/* SQL */}
                <div>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
                    <span style={{ fontSize:11, color:"#71717a" }}>SQL Query</span>
                    <select style={{ background:"#27272a", border:"1px solid #3f3f46", borderRadius:8, padding:"6px 12px", fontSize:10, color:"#a1a1aa", cursor:"pointer" }}>
                      <option>customer_analytics</option>
                      <option>financial_transactions</option>
                      <option>clinical_trial</option>
                    </select>
                  </div>
                  <div style={{ padding:16, borderRadius:12, background:"rgba(0,0,0,0.4)", border:"1px solid rgba(255,255,255,0.06)", marginBottom:16, fontFamily:"monospace" }}>
                    <pre style={{ fontSize:11, color:"#71717a", margin:0, lineHeight:1.7 }}>
{`SELECT
    region,
    COUNT(*) AS transactions,
    AVG(amount)  AS avg_amount,
    SUM(amount)  AS total_revenue
FROM transactions
WHERE date BETWEEN `}<span style={{ color:"#f97316" }}>{`'2024-01-01'`}</span>{`
    AND `}<span style={{ color:"#f97316" }}>{`'2024-03-31'`}</span>{`
GROUP BY region
ORDER BY total_revenue DESC`}
                    </pre>
                  </div>
                  <div style={{ display:"flex", gap:10 }}>
                    <button style={{ flex:1, padding:"10px 0", borderRadius:10, background:"linear-gradient(135deg,#8b5cf6,#7c3aed)", color:"#fff", fontSize:11, fontWeight:500, border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                      <Play style={{ width:14, height:14 }} />Execute Encrypted Query
                    </button>
                    <button style={{ padding:"10px 14px", borderRadius:10, border:"1px solid #3f3f46", background:"transparent", color:"#71717a", cursor:"pointer", display:"flex", alignItems:"center" }}>
                      <Save style={{ width:14, height:14 }} />
                    </button>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
                    <span style={{ fontSize:11, color:"#71717a" }}>Results</span>
                    <div style={{ display:"flex", gap:8 }}>
                      <span style={{ padding:"3px 8px", borderRadius:6, background:"rgba(139,92,246,0.1)", color:"#a78bfa", fontSize:9 }}>Computed on ciphertext</span>
                      <span style={{ padding:"3px 8px", borderRadius:6, background:"rgba(16,185,129,0.1)", color:"#34d399", fontSize:9 }}>0 bytes exposed</span>
                    </div>
                  </div>
                  <div style={{ padding:14, borderRadius:12, background:"rgba(0,0,0,0.4)", border:"1px solid rgba(255,255,255,0.06)", marginBottom:14 }}>
                    <table style={{ width:"100%", borderCollapse:"collapse", fontSize:11 }}>
                      <thead>
                        <tr style={{ borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                          {["region","transactions","avg_amount","total_revenue"].map((h) => (
                            <th key={h} style={{ textAlign: h === "region" ? "left" : "right", paddingBottom:8, color:"#71717a", fontWeight:500 }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["APAC",  "127,432","$847.23","$107.9M"],
                          ["EMEA",  "89,241", "$923.18","$82.4M"],
                          ["AMER",  "156,892","$512.47","$80.4M"],
                          ["LATAM", "42,108", "$389.52","$16.4M"],
                        ].map(([r,t,a,v]) => (
                          <tr key={r} style={{ borderBottom:"1px solid rgba(255,255,255,0.03)" }}>
                            <td style={{ padding:"7px 0", color:"#d4d4d8" }}>{r}</td>
                            <td style={{ padding:"7px 0", textAlign:"right", color:"#d4d4d8" }}>{t}</td>
                            <td style={{ padding:"7px 0", textAlign:"right", color:"#d4d4d8" }}>{a}</td>
                            <td style={{ padding:"7px 0", textAlign:"right", color:"#34d399" }}>{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <span style={{ fontSize:10, color:"#52525b" }}>
                      <span style={{ color:"#71717a" }}>Scanned:</span> 415,673 records in 1.2s
                    </span>
                    <div style={{ display:"flex", gap:8 }}>
                      <button style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 12px", borderRadius:8, border:"1px solid #3f3f46", background:"transparent", color:"#71717a", fontSize:10, cursor:"pointer" }}>
                        <Download style={{ width:11, height:11 }} />Export
                      </button>
                      <button style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 12px", borderRadius:8, border:"1px solid rgba(139,92,246,0.3)", background:"rgba(139,92,246,0.15)", color:"#a78bfa", fontSize:10, cursor:"pointer" }}>
                        <Key style={{ width:11, height:11 }} />Decrypt
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ACCESS CONTROL MOCK UI ── */}
        <div className="max-w-5xl mx-auto r-up">
          <div
            style={{
              background: "#0a0a0c",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 50px -15px rgba(0,0,0,0.3)",
            }}
          >
            {/* Header */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 16px", borderBottom:"1px solid rgba(255,255,255,0.06)", background:"rgba(255,255,255,0.02)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ display:"flex", gap:6 }}>
                  <span style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f57", display:"inline-block" }} />
                  <span style={{ width:10, height:10, borderRadius:"50%", background:"#febc2e", display:"inline-block" }} />
                  <span style={{ width:10, height:10, borderRadius:"50%", background:"#28c840", display:"inline-block" }} />
                </div>
                <span style={{ fontSize:11, color:"#71717a" }}>Access Control — customer_analytics</span>
              </div>
              <button style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 12px", borderRadius:8, background:"#8b5cf6", color:"#fff", fontSize:10, border:"none", cursor:"pointer" }}>
                <UserPlus style={{ width:12, height:12 }} />Grant Access
              </button>
            </div>

            {/* Table */}
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <thead>
                <tr style={{ borderBottom:"1px solid rgba(255,255,255,0.06)", background:"rgba(255,255,255,0.02)" }}>
                  {["Partner","Access Level","Permissions","Last Activity","Status","Actions"].map((h, i) => (
                    <th key={h} style={{ textAlign: i === 5 ? "right" : "left", padding:"10px 24px", fontSize:10, color:"#71717a", fontWeight:500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { initials:"AR", color:"#8b5cf6", bg:"rgba(139,92,246,0.15)", name:"Acme Research",  email:"research@acme.com", access:"Read + Aggregate", perms:"SUM, AVG, COUNT, GROUP BY", last:"2 hours ago", status:"Active",  statusColor:"#34d399", statusBg:"rgba(16,185,129,0.1)" },
                  { initials:"MC", color:"#22d3ee", bg:"rgba(34,211,238,0.15)",  name:"McKinsey & Co", email:"analytics@mck.com",  access:"Read + Aggregate", perms:"SUM, AVG, COUNT, GROUP BY", last:"1 day ago",    status:"Active",  statusColor:"#34d399", statusBg:"rgba(16,185,129,0.1)" },
                  { initials:"JH", color:"#f59e0b", bg:"rgba(245,158,11,0.15)", name:"Johns Hopkins", email:"research@jhu.edu",  access:"Read Only",        perms:"COUNT only",               last:"3 days ago",   status:"Pending", statusColor:"#fbbf24", statusBg:"rgba(245,158,11,0.1)" },
                ].map((p) => (
                  <tr key={p.name} style={{ borderBottom:"1px solid rgba(255,255,255,0.03)" }}>
                    <td style={{ padding:"14px 24px" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                        <div style={{ width:32, height:32, borderRadius:8, background:p.bg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                          <span style={{ fontSize:9, color:p.color, fontWeight:700 }}>{p.initials}</span>
                        </div>
                        <div>
                          <p style={{ fontSize:11, color:"#d4d4d8", fontWeight:500, margin:0 }}>{p.name}</p>
                          <p style={{ fontSize:9, color:"#52525b", margin:0 }}>{p.email}</p>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding:"14px 24px" }}>
                      <span style={{ padding:"3px 8px", borderRadius:6, background: p.access === "Read Only" ? "#3f3f46" : "rgba(139,92,246,0.1)", color: p.access === "Read Only" ? "#a1a1aa" : "#a78bfa", fontSize:10 }}>
                        {p.access}
                      </span>
                    </td>
                    <td style={{ padding:"14px 24px", fontSize:10, color:"#71717a" }}>{p.perms}</td>
                    <td style={{ padding:"14px 24px", fontSize:10, color:"#71717a" }}>{p.last}</td>
                    <td style={{ padding:"14px 24px" }}>
                      <span style={{ padding:"3px 8px", borderRadius:6, background:p.statusBg, color:p.statusColor, fontSize:10 }}>
                        ● {p.status}
                      </span>
                    </td>
                    <td style={{ padding:"14px 24px", textAlign:"right" }}>
                      <button style={{ background:"none", border:"none", cursor:"pointer", padding:4, color:"#71717a" }}><Settings style={{ width:14, height:14 }} /></button>
                      <button style={{ background:"none", border:"none", cursor:"pointer", padding:4, color:"#71717a" }}><Trash2 style={{ width:14, height:14 }} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
