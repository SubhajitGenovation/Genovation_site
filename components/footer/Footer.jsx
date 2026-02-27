"use client";

import PreFooterCTA from "./PreFooterCTA";
import FooterBrand from "./FooterBrand";
import FooterLinkColumn from "./FooterLinkColumn";
import FooterCompliance from "./FooterCompliance";
import FooterLegal from "./FooterLegal";
import FooterBottomBar from "./FooterBottomBar";

export default function Footer() {
    const platformLinks = [
        { label: "Mentis AgentOS", href: "/platforms-ip-mentis-agentos" },
        { label: "JUDGE Verification", href: "/judge" },
        { label: "CipherVault", href: "/platforms-ip-enterprise-cyphervault" },
        { label: "Data & IoT Backbone", href: "/platforms-ip-enterprise-data-backbone" },
        { label: "RIT Model Series", href: "/technology-foundation-slm-engine" },
        { label: "Small Language Models", href: "/technology-foundation-slm-engine" },
        { label: "Deployment Options", href: "/technology-foundation-deployment-models" },
        { label: "API Reference", href: "/technology-foundation" },
    ];

    const productLinks = [
        { label: "Knowledge Intelligence", href: "/product-knowledge-intelligence" },
        { label: "Analytics Intelligence", href: "/product-analytics-intelligence" },
        { label: "Strategy Intelligence", href: "/product-strategy-intelligence" },
        { label: "CX Intelligence", href: "/product-cx-intelligence" },
        { label: "Consulting & Strategy", href: "/consulting-strategy" },
    ];

    const industryLinks = [
        { label: "Financial Services", href: "/financial-services" },
        { label: "Aerospace & Defence", href: "/aerospace-and-defence" },
        { label: "Defense", href: "/industries-defense" },
        { label: "Government", href: "/industries-government" },
        { label: "Energy & Utilities", href: "/industries" },
        { label: "Manufacturing", href: "/industries-manufacturing" },
        { label: "Healthcare & Life Sciences", href: "/industries-healthcare-life-sciences" },
    ];

    const resourceLinks = [
        { label: "Documentation", href: "/technology-foundation" },
        { label: "Architecture Overview", href: "/platforms-ip" },
        { label: "Security Whitepaper", href: "/security-sovereignty" },
        { label: "Research Publications", href: "/research-ip-research-publications" },
        { label: "Case Studies", href: "/financial-services" },
        { label: "ROI Calculator", href: "/industries" },
        { label: "MMLU Benchmarks", href: "/research-ip" },
        { label: "Integration Guides", href: "/technology-foundation" },
    ];

    const companyLinks = [
        { label: "About", href: "/why-genovation" },
        { label: "Leadership", href: "/why-genovation" },
        { label: "Careers", href: "/why-we-build" },
        { label: "Partners", href: "/why-genovation" },
        { label: "Press & Media", href: "/why-genovation" },
        { label: "Contact", href: "/why-genovation" },
    ];

    const legalLinks = [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Acceptable Use Policy", href: "/acceptable-use" },
        { label: "Responsible Disclosure", href: "/responsible-disclosure" },
        { label: "DSAR Request", href: "/data-subject-access-request" },
    ];

    return (
        <footer className="border-t border-emerald-500/[0.08] z-50" style={{ background: "rgba(0,0,0,0.015)" }}>
            <PreFooterCTA />

            <div className="max-w-7xl mx-auto px-8 pt-16 pb-12">
                <div className="grid md:grid-cols-6 gap-x-8 gap-y-12">
                    <FooterBrand />

                    <FooterLinkColumn title="Platform" links={platformLinks} />

                    <div>
                        <FooterLinkColumn title="Products" links={productLinks} />
                        <FooterLinkColumn
                            title="Industries"
                            links={industryLinks}
                            className="mt-8"
                            labelClassName="mb-4"
                        />
                    </div>

                    <FooterLinkColumn title="Resources" links={resourceLinks} />

                    <div className="">
                        <FooterLinkColumn title="Company" links={companyLinks} />
                        <FooterLinkColumn
                            title="Legal"
                            links={legalLinks}
                            className="mt-8"
                            labelClassName="mb-4"
                        />
                    </div>
                </div>
            </div>

            <FooterCompliance />
            <FooterLegal />
            <FooterBottomBar />
        </footer>
    );
}
