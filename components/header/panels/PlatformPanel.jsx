import Link from "next/link";
import IndustryTile from "../ui/IndustryTile";
import MgLink from "../ui/MgLink";
import StatRow from "../ui/StatRow";
import Icon from "../ui/Icon";

const toPublicPath = (href = "/") => href.replace(/^\/a-/, "/");

export default function PlatformPanel() {
  return (
    <div className="pt-0 pb-6">
      <div className="grid grid-cols-[4.5fr_3.5fr_4fr] gap-0 px-0 py-9">
        <div className="pr-10 border-r border-gray-100">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Platforms &amp; Foundational IP
          </div>
          <div className="grid grid-cols-2 gap-2 mb-6">
            <IndustryTile
              href="/a-platforms-ip-mentis-agentos"
              icon="cpu"
              title="Mentis AgentOS"
              desc="Multi-agent orchestration, reasoning, memory & JUDGE governance layer"
            />
            <IndustryTile
              href="/a-platforms-ip-enterprise-data-backbone"
              icon="database"
              title="Data & IoT Backbone"
              desc="Kafka, Airflow, event-driven processing for real-time intelligence"
            />
            <IndustryTile
              href="/a-platforms-ip-enterprise-cyphervault"
              icon="lock"
              title="CipherVault"
              desc="Encrypted vaults, FHE compute on encrypted data, anonymization"
            />
            <IndustryTile
              href="/a-platforms-ip-cryptographic-security-ip"
              icon="key-round"
              title="Cryptographic IP"
              desc="Post-quantum encryption, key management, zero-trust primitives"
            />
          </div>
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Deployment Models
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-100">
              <Icon name="server" className="w-3 h-3" />
              On-Premise
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-100">
              <Icon name="cloud" className="w-3 h-3" />
              Private Cloud
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-100">
              <Icon name="wifi-off" className="w-3 h-3" />
              Air-Gapped
            </span>
          </div>
        </div>

        <div className="px-9 border-r border-gray-100">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Technology Foundation
          </div>
          <MgLink
            href="/a-technology-foundation"
            icon="network"
            label="Agentic Architecture"
          />
          <MgLink
            href="/a-technology-foundation-slm-engine"
            icon="boxes"
            label={
              <span className="flex items-center">
                Small Language Models
                <span className="ml-1.5 text-[9px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                  7.5× faster
                </span>
              </span>
            }
          />
          <MgLink
            href="/a-technology-foundation-slm-engine"
            icon="sparkles"
            label={
              <span className="flex items-center">
                RIT Model Series
                <span className="ml-1.5 text-[9px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                  1.3B–13B
                </span>
              </span>
            }
          />
          <MgLink
            href="/a-technology-foundation-explainability-traceability"
            icon="scan-eye"
            label="Explainability & Traceability"
          />
          <MgLink
            href="/a-technology-foundation-performance-reliability-engineering"
            icon="zap"
            label="Performance Engineering"
          />
          <div className="h-px bg-gray-100 my-4" />
          <StatRow
            stats={[
              { value: "<45ms", label: "Latency" },
              { value: "30×", label: "Cheaper" },
              { value: "100%", label: "Private" },
            ]}
          />
        </div>

        <div className="pl-9">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Research &amp; IP
          </div>
          <MgLink
            href="/a-research-ip-research-publications"
            icon="file-text"
            label="Research Publications"
          />
          <MgLink
            href="/a-research-ip-patent-portfolio"
            icon="award"
            label="SDCA Patent"
          />
          <MgLink
            href="/a-research-ip-patent-portfolio"
            icon="shield-check"
            label="Patent Portfolio"
          />
          <MgLink
            href="/a-research-ip"
            icon="activity"
            label="MMLU Benchmarks"
          />
          <MgLink
            href="/a-research-ip-responsible-explainable-ai"
            icon="heart-handshake"
            label="Responsible AI Research"
          />
          <div className="h-px bg-gray-100 my-4" />
          <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100/50">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-teal-600 mb-2">
              ✦ New Paper
            </div>
            <div className="text-[15px] font-medium text-emerald-700 mb-1.5">
              SDCA: Semantic Drift Correction for Agentic Systems
            </div>
            <div className="text-[12px] font-light text-gray-500 leading-relaxed">
              Maintaining reasoning accuracy across multi-agent orchestration
              chains.
            </div>
            <Link
              href={toPublicPath("/a-research-ip-research-publications")}
              className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              Read Paper <Icon name="external-link" className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 pt-4 border-t border-gray-100 text-[13px] font-medium text-gray-500">
        <Link href={toPublicPath("/a-platforms-ip")} className="hover:text-emerald-700 transition-colors">
          Architecture Overview →
        </Link>
        <Link href={toPublicPath("/a-technology-foundation")} className="hover:text-emerald-700 transition-colors">
          Documentation →
        </Link>
        <Link href={toPublicPath("/a-security-sovereignty")} className="hover:text-emerald-700 transition-colors">
          Security Whitepaper →
        </Link>
        <Link href={toPublicPath("/a-technology-foundation")} className="hover:text-emerald-700 transition-colors">
          API Reference →
        </Link>
      </div>
    </div>
  );
}
