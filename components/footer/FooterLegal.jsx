export default function FooterLegal() {
    return (
        <div className="border-t border-black/[0.04]">
            <div className="max-w-7xl mx-auto px-8 py-10">
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
                    <div>
                        <p className="text-[12px] font-mono tracking-wider uppercase mb-3 text-gray-800">
                            Intellectual Property
                        </p>
                        <p className="text-[12px] font-medium leading-[1.7] text-gray-800">
                            Genovation, Mentis AgentOS, JUDGE, CipherVault, RIT, and the
                            Genovation logo are trademarks or registered trademarks of
                            Genovation Technologies Ltd. All other trademarks are the
                            property of their respective owners. Patent-pending technologies
                            include SDCA (Semantic Drift Correction Architecture) and
                            related innovations. Full patent portfolio available upon
                            request under NDA.
                        </p>
                    </div>
                    <div>
                        <p className="text-[12px] font-mono tracking-wider uppercase mb-3 text-gray-800">
                            Responsible AI
                        </p>
                        <p className="text-[12px] font-medium leading-[1.7] text-gray-800">
                            Genovation is committed to the development and deployment of AI
                            systems that are transparent, explainable, and aligned with
                            international ethical standards. Our JUDGE framework ensures all
                            AI outputs are verified, traceable, and auditable. We actively
                            participate in industry initiatives for responsible AI
                            governance and publish regular transparency reports on model
                            behaviour and safety metrics.
                        </p>
                    </div>
                    <div>
                        <p className="text-[12px] font-mono tracking-wider uppercase mb-3 text-gray-800">
                            Export Control
                        </p>
                        <p className="text-[12px] font-medium leading-[1.7] text-gray-800">
                            Genovation products may be subject to export control regulations
                            in various jurisdictions. Customers are responsible for ensuring
                            compliance with applicable export control laws and regulations,
                            including but not limited to EAR, ITAR, and EU Dual-Use
                            regulations. Cryptographic components may require export
                            licences depending on deployment jurisdiction. Contact our
                            compliance team for guidance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
