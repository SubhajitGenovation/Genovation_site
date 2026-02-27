import Link from "next/link";
import Icon from "../ui/Icon";
import MgLink from "../ui/MgLink";
import StatRow from "../ui/StatRow";

const toPublicPath = (href = "/") => href.replace(/^\/a-/, "/");

export default function IndustriesPanel() {
  return (
    <div className="pt-0 pb-6">
      <div className="grid grid-cols-2 gap-0 px-0 py-9">
        <div className="pr-10 border-r border-gray-100">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Primary Industries
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Link
              href="/financial-services"
              className="group flex flex-col gap-2 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-black/5"
            >
              <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                <Icon name="landmark" className="w-5 h-5 text-gray-500" />
              </div>
              <div className="font-medium text-sm text-gray-900 group-hover:text-emerald-700">Financial Services</div>
              <div className="text-[11px] text-gray-500 line-clamp-3">
                AML/KYC compliance, algorithmic risk assessment, full-spectrum
                financial intelligence
              </div>
              <div className="flex gap-1.5 mt-auto">
                <span className="bg-gray-100 text-gray-600 text-[9px] px-1.5 py-0.5 rounded">SEC</span>
                <span className="bg-gray-100 text-gray-600 text-[9px] px-1.5 py-0.5 rounded">SOX</span>
                <span className="bg-gray-100 text-gray-600 text-[9px] px-1.5 py-0.5 rounded">DORA</span>
              </div>
            </Link>
            <Link
              href="/defense"
              className="group flex flex-col gap-2 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-black/5"
            >
              <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                <Icon name="plane" className="w-5 h-5 text-gray-500" />
              </div>
              <div className="font-medium text-sm text-gray-900 group-hover:text-emerald-700">Aerospace &amp; Defense</div>
              <div className="text-[11px] text-gray-500 line-clamp-3">
                Air-gapped deployment for classified environments within your
                secure enclave
              </div>
              <div className="flex gap-1.5 mt-auto">
                <span className="bg-gray-100 text-gray-600 text-[9px] px-1.5 py-0.5 rounded">ITAR</span>
                <span className="bg-gray-100 text-gray-600 text-[9px] px-1.5 py-0.5 rounded">FedRAMP High</span>
              </div>
            </Link>
            <Link
              href={toPublicPath("/a-industries-government")}
              className="group flex flex-col gap-2 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-black/5"
            >
              <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                <Icon name="building-2" className="w-5 h-5 text-gray-500" />
              </div>
              <div className="font-medium text-sm text-gray-900 group-hover:text-emerald-700">Government</div>
              <div className="text-[11px] text-gray-500 line-clamp-3">
                Sovereign AI for sovereign nations. Full NIST, FedRAMP, and
                classification-level compliance
              </div>
              <div className="flex gap-1.5 mt-auto">
                <span className="bg-gray-100 text-gray-600 text-[9px] px-1.5 py-0.5 rounded">IL4/IL5</span>
                <span className="bg-gray-100 text-gray-600 text-[9px] px-1.5 py-0.5 rounded">NIST 800-171</span>
              </div>
            </Link>
            <Link
              href={toPublicPath("/a-industries-manufacturing")}
              className="group flex flex-col gap-2 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-black/5"
            >
              <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                <Icon name="zap" className="w-5 h-5 text-gray-500" />
              </div>
              <div className="font-medium text-sm text-gray-900 group-hover:text-emerald-700">Energy &amp; Utilities</div>
              <div className="text-[11px] text-gray-500 line-clamp-3">
                SCADA grid intelligence, predictive load management — on-premise
                within your OT perimeter
              </div>
              <div className="flex gap-1.5 mt-auto">
                <span className="bg-gray-100 text-gray-600 text-[9px] px-1.5 py-0.5 rounded">NERC CIP</span>
                <span className="bg-gray-100 text-gray-600 text-[9px] px-1.5 py-0.5 rounded">SCADA</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="pl-10">
          <div className="grid grid-cols-2 gap-10 mb-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">Manufacturing</div>
              <MgLink
                href="/a-industries-manufacturing"
                icon="factory"
                label="Operational Intelligence"
              />
              <MgLink
                href="/a-industries-manufacturing"
                icon="trending-up"
                label="Predictive & Prescriptive"
              />
              <MgLink
                href="/a-industries-manufacturing"
                icon="settings"
                label="Process Governance"
              />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">Healthcare &amp; Life Sci</div>
              <MgLink
                href="/a-industries-healthcare-life-sciences"
                icon="microscope"
                label="Research Intelligence"
              />
              <MgLink
                href="/a-industries-healthcare-life-sciences"
                icon="shield"
                label="Privacy-Preserving Analytics"
              />
              <MgLink
                href="/a-industries-healthcare-life-sciences"
                icon="clipboard-check"
                label="Regulatory Alignment"
              />
            </div>
          </div>
          <StatRow
            stats={[
              { value: "6", label: "Industries" },
              { value: "4", label: "Regions" },
              { value: "12+", label: "Countries" },
              { value: "100%", label: "Sovereign" },
            ]}
          />
          <div className="mt-4 bg-emerald-50/50 rounded-xl p-5 border border-emerald-100/50">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-teal-600 mb-2">
              ✦ Case Study
            </div>
            <div className="text-[14px] font-medium text-emerald-700 mb-1">
              How a Tier-1 Bank Cut Compliance Review Time by 94%
            </div>
            <div className="text-[12px] font-light text-gray-500 leading-relaxed">
              Full sovereign deployment, zero data leakage, $2.1M annual
              savings.
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 mt-2.5 text-[12px] font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              Read Case Study <Icon name="arrow-right" className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 pt-4 border-t border-gray-100 text-[13px] font-medium text-gray-500">
        <Link href={toPublicPath("/a-industries")} className="hover:text-emerald-700 transition-colors">All Industries →</Link>
        <Link href={toPublicPath("/a-case-studies")} className="hover:text-emerald-700 transition-colors">Case Studies →</Link>
        <Link href={toPublicPath("/a-industries")} className="hover:text-emerald-700 transition-colors">ROI Calculator →</Link>
      </div>
    </div>
  );
}
