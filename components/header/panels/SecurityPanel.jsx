import Link from "next/link";
import ProductCard from "../ui/ProductCard";
import MgLink from "../ui/MgLink";
import StatRow from "../ui/StatRow";

const toPublicPath = (href = "/") => href.replace(/^\/a-/, "/");

export default function SecurityPanel() {
  return (
    <div className="pt-0 pb-6">
      {/* Mobile: Stack vertically, Desktop: 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-[4.5fr_4fr_3.5fr] gap-6 md:gap-0 px-0 py-6 md:py-9">
        {/* Left Column */}
        <div className="md:pr-10 md:border-r border-gray-100">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Security &amp; Data Sovereignty
          </div>
          <div className="flex flex-col gap-4">
            <ProductCard
              href="/a-security-sovereignty"
              icon="server"
              title="Data Residency Guarantee"
              desc="Your data stays within your chosen jurisdiction — your datacentre, your cloud, your air-gap. Zero exceptions."
            />
            <ProductCard
              href="/a-security-sovereignty"
              icon="shield-check"
              title="Zero-Trust Security Model"
              desc="Every request authenticated and authorised. Microsegmented access with mTLS across all agent communication."
            />
            <ProductCard
              href="/a-platforms-ip-cryptographic-security-ip"
              icon="lock"
              title="Post-Quantum Cryptography"
              desc="NIST-approved CRYSTALS-Kyber & Dilithium. CipherVault implements FHE to compute on encrypted data with zero exposure."
            />
          </div>
        </div>

        {/* Middle Column */}
        <div className="md:px-9 md:border-r border-gray-100 mt-6 md:mt-0">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Governance &amp; Audit
          </div>
          <ProductCard
            href="/a-judge"
            icon="scale"
            title="JUDGE Verification System"
            desc="Every AI output independently verified. Hallucination detection, source cross-referencing, full explainability."
          />
          <ProductCard
            href="/a-technology-foundation-explainability-traceability"
            icon="scroll-text"
            title="Immutable Audit Trails"
            desc="Tamper-proof logs for every decision and action. Cryptographically signed with Dilithium post-quantum signatures."
          />
          <div className="h-px bg-gray-100 my-4" />
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Cryptographic IP
          </div>
          <MgLink
            href="/a-platforms-ip-cryptographic-security-ip"
            icon="binary"
            label="Post-Quantum Libraries"
          />
          <MgLink
            href="/a-platforms-ip-cryptographic-security-ip"
            icon="radio-tower"
            label="Secure Agent Comms"
          />
          <MgLink
            href="/a-platforms-ip-cryptographic-security-ip"
            icon="key-round"
            label="Key Management & Isolation"
          />
        </div>

        {/* Right Column */}
        <div className="md:pl-9 mt-6 md:mt-0">
          <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100/50">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-teal-600 mb-2">
              Defense in Depth
            </div>
            <div className="text-[13px] font-light text-gray-500 leading-relaxed">
              Five security layers protect your data:{" "}
              <span className="block sm:inline mt-1 sm:mt-0">
                <strong className="font-medium text-emerald-700">Edge Perimeter</strong> →{" "}
                <strong className="font-medium text-teal-600">Zero-Trust</strong> →{" "}
                <strong className="font-medium text-teal-600">CipherVault</strong> →{" "}
                <strong className="font-medium text-teal-600">JUDGE</strong> →{" "}
                <strong className="font-medium text-emerald-700">Your Data</strong>
              </span>
            </div>
          </div>
          <div className="mt-4">
            <StatRow
              stats={[
                { value: "0", label: "Breaches" },
                { value: "100%", label: "Encrypted" },
                { value: "24/7", label: "SOC" },
              ]}
            />
          </div>
        </div>
      </div>
      
      {/* Footer Links - Wrap on mobile */}
      <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-4 border-t border-gray-100 text-[13px] font-medium text-gray-500">
        <Link href={toPublicPath("/a-security-sovereignty")} className="hover:text-emerald-700 transition-colors">
          Security Overview →
        </Link>
        <Link href={toPublicPath("/a-security-sovereignty")} className="hover:text-emerald-700 transition-colors">
          Compliance Matrix →
        </Link>
        <Link href={toPublicPath("/a-security-sovereignty")} className="hover:text-emerald-700 transition-colors">
          Trust Center →
        </Link>
        <Link href={toPublicPath("/a-security-sovereignty")} className="hover:text-emerald-700 transition-colors">
          Penetration Test Results →
        </Link>
      </div>
    </div>
  );
}