"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ROWS = [
  { aspect: "Data Format",   traditional: "Raw CSV / DB exports",  vault: "Encrypted vaults" },
  { aspect: "Access Model",  traditional: "Trust-based",           vault: "Cryptographic" },
  { aspect: "Exposure Risk", traditional: "Always present",        vault: "Zero plaintext" },
  { aspect: "Enforcement",   traditional: "Contractual",           vault: "Mathematical" },
  { aspect: "Auditability",  traditional: "Post-hoc",              vault: "Built-in" },
  { aspect: "Breach Impact", traditional: "Complete data loss",    vault: "Data stays protected" },
];

export default function ComparisonTable() {
  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) =>
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } })
    );
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[10px] text-violet-500/80 tracking-[0.3em] uppercase mb-4 font-mono r-up">Comparison</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">A New Paradigm</h2>
          <p className="text-gray-500 max-w-lg mx-auto font-light r-up">
            CipherVault is not a privacy feature. It's a fundamental shift in how data can be shared.
          </p>
        </div>

        <div className="rounded-2xl border border-black/[0.08] overflow-hidden bg-white/80 r-up">
          <table className="w-full">
            <thead>
              <tr className="border-b border-black/[0.06]">
                <th className="px-6 py-4 text-left text-sm text-gray-500 font-light">Aspect</th>
                <th className="px-6 py-4 text-center text-sm text-gray-400 font-light">Traditional</th>
                <th className="px-6 py-4 text-center text-sm text-violet-600 font-medium bg-violet-500/[0.04]">CipherVault</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04]">
              {ROWS.map((row) => (
                <tr key={row.aspect}>
                  <td className="px-6 py-4 text-gray-600 font-light">{row.aspect}</td>
                  <td className="px-6 py-4 text-center text-gray-400 font-light">{row.traditional}</td>
                  <td className="px-6 py-4 text-center text-gray-700 font-light bg-violet-500/[0.03]">{row.vault}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
