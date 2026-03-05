import Link from "next/link";
import Icon from "../ui/Icon";
import MgLink from "../ui/MgLink";
import StatRow from "../ui/StatRow";

const toPublicPath = (href = "/") => href.replace(/^\/a-/, "/");

export default function CompanyPanel() {
  return (
    <div className="pt-0 pb-6">
      {/* Mobile: Stack vertically, Desktop: 4-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_3fr_2.5fr_4.5fr] gap-6 md:gap-0 px-0 py-6 md:py-9">
        {/* Company Column */}
        <div className="md:pr-8 md:border-r border-gray-100">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">Company</div>
          <MgLink
            href="/a-why-genovation"
            icon="info"
            label="About Genovation"
          />
          <MgLink
            href="/a-why-we-build"
            icon="target"
            label="Vision & Mission"
          />
          <MgLink href="/a-why-genovation" icon="users" label="Leadership" />
          <MgLink href="/a-why-genovation" icon="user-check" label="Advisors" />
          <MgLink
            href="/a-why-genovation"
            icon="trophy"
            label="Recognition & Awards"
          />
        </div>

        {/* Insights Column */}
        <div className="md:px-8 md:border-r border-gray-100 mt-6 md:mt-0">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">Insights</div>
          <MgLink
            href="/a-security-sovereignty"
            icon="globe"
            label="Sovereign AI"
          />
          <MgLink
            href="/a-technology-foundation-explainability-traceability"
            icon="scan-eye"
            label="Explainable Intelligence"
          />
          <MgLink
            href="/a-platforms-ip-mentis-agentos"
            icon="bot"
            label="Agentic Systems"
          />
          <MgLink
            href="/a-research-ip"
            icon="coins"
            label="Enterprise AI Economics"
          />
          <MgLink
            href="/a-research-ip-research-publications"
            icon="flask-conical"
            label="Research Perspectives"
          />
        </div>

        {/* Careers Column */}
        <div className="md:px-8 md:border-r border-gray-100 mt-6 md:mt-0">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">Careers</div>
          <MgLink
            href="/a-why-genovation"
            icon="heart"
            label="Why Genovation"
          />
          <MgLink
            href="/a-research-ip"
            icon="code-2"
            label="Engineering & Research"
          />
          <MgLink
            href="/a-why-genovation"
            icon="briefcase"
            label="Enterprise & Delivery"
          />
          <MgLink
            href="/a-why-we-build"
            icon="sparkles"
            label="Culture & Values"
          />
        </div>

        {/* Get in Touch Column */}
        <div className="md:pl-8 mt-6 md:mt-0">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">Get in Touch</div>
          
          {/* Contact Cards - 2x2 grid on mobile, 2x2 on desktop */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <Link
              href={toPublicPath("/a-talk-to-sales")}
              className="group relative flex flex-col p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-black/5 transition-all"
            >
              <div className="bg-black/5 w-8 h-8 flex items-center justify-center rounded-lg mb-2 group-hover:bg-emerald-500/10 transition-colors">
                <Icon
                  name="building"
                  className="w-4 h-4 text-gray-500"
                />
              </div>
              <div className="text-[13px] font-medium text-emerald-700">
                Enterprise Inquiries
              </div>
              <div className="text-[11px] font-light text-gray-400">
                Sales &amp; solutions
              </div>
              <Icon
                name="chevron-right"
                className="w-3.5 h-3.5 absolute right-3 bottom-3 text-gray-400 opacity-0 md:opacity-0 group-hover:opacity-100 transition-all duration-250 group-hover:translate-x-0 group-hover:text-emerald-500"
              />
            </Link>
            
            <Link
              href={toPublicPath("/a-why-genovation")}
              className="group relative flex flex-col p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-black/5 transition-all"
            >
              <div className="bg-black/5 w-8 h-8 flex items-center justify-center rounded-lg mb-2 group-hover:bg-emerald-500/10 transition-colors">
                <Icon
                  name="handshake"
                  className="w-4 h-4 text-gray-500"
                />
              </div>
              <div className="text-[13px] font-medium text-emerald-700">
                Partnerships
              </div>
              <div className="text-[11px] font-light text-gray-400">
                Strategic alliances
              </div>
              <Icon
                name="chevron-right"
                className="w-3.5 h-3.5 absolute right-3 bottom-3 text-gray-400 opacity-0 md:opacity-0 group-hover:opacity-100 transition-all duration-250 group-hover:translate-x-0 group-hover:text-emerald-500"
              />
            </Link>
            
            <Link
              href={toPublicPath("/a-research-ip")}
              className="group relative flex flex-col p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-black/5 transition-all"
            >
              <div className="bg-black/5 w-8 h-8 flex items-center justify-center rounded-lg mb-2 group-hover:bg-emerald-500/10 transition-colors">
                <Icon
                  name="flask-conical"
                  className="w-4 h-4 text-gray-500"
                />
              </div>
              <div className="text-[13px] font-medium text-emerald-700">
                Research Collab
              </div>
              <div className="text-[11px] font-light text-gray-400">
                Academic &amp; R&amp;D
              </div>
              <Icon
                name="chevron-right"
                className="w-3.5 h-3.5 absolute right-3 bottom-3 text-gray-400 opacity-0 md:opacity-0 group-hover:opacity-100 transition-all duration-250 group-hover:translate-x-0 group-hover:text-emerald-500"
              />
            </Link>
            
            <Link
              href={toPublicPath("/a-why-genovation")}
              className="group relative flex flex-col p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-black/5 transition-all"
            >
              <div className="bg-black/5 w-8 h-8 flex items-center justify-center rounded-lg mb-2 group-hover:bg-emerald-500/10 transition-colors">
                <Icon
                  name="mail"
                  className="w-4 h-4 text-gray-500"
                />
              </div>
              <div className="text-[13px] font-medium text-emerald-700">
                General Contact
              </div>
              <div className="text-[11px] font-light text-gray-400">
                Press &amp; info
              </div>
              <Icon
                name="chevron-right"
                className="w-3.5 h-3.5 absolute right-3 bottom-3 text-gray-400 opacity-0 md:opacity-0 group-hover:opacity-100 transition-all duration-250 group-hover:translate-x-0 group-hover:text-emerald-500"
              />
            </Link>
          </div>
          
          {/* Stats - Full width on mobile */}
          <StatRow
            stats={[
              { value: "50+", label: "Engineers" },
              { value: "12", label: "Patents" },
              { value: "4", label: "Continents" },
            ]}
          />
        </div>
      </div>
      
      {/* Footer Links - Wrap on mobile */}
      <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-4 border-t border-gray-100 text-[13px] font-medium text-gray-500">
        <Link href={toPublicPath("/a-why-genovation")} className="hover:text-emerald-700 transition-colors">About Us →</Link>
        <Link href={toPublicPath("/a-why-genovation")} className="hover:text-emerald-700 transition-colors">Open Positions →</Link>
        <Link href={toPublicPath("/a-why-genovation")} className="hover:text-emerald-700 transition-colors">Contact →</Link>
        <Link href={toPublicPath("/a-why-genovation")} className="hover:text-emerald-700 transition-colors">Press Kit →</Link>
        <Link href={toPublicPath("/a-careers")} className="hover:text-emerald-700 transition-colors">Careers →</Link>
      </div>
    </div>
  );
}