export default function FooterCompliance() {
    return (
        <div className="border-t border-black/[0.04]">
            <div className="max-w-7xl mx-auto px-8 py-10">
                <p className="text-[12px] font-mono tracking-wider uppercase mb-4 text-gray-900">
                    Data Processing & Privacy Disclaimer
                </p>
                <div className="space-y-4 max-w-5xl">
                    <p className="text-[12px] font-medium leading-[1.7] text-gray-800">
                        Genovation does not process, store, access, or retain any customer
                        data on infrastructure outside of the customer&apos;s designated
                        environment. All intelligence processing occurs entirely within
                        your on-premise, private cloud, or air-gapped deployment. No
                        customer data is transmitted to Genovation systems, third-party
                        APIs, or external services at any point during operation. Model
                        inference, vector storage, and audit logging remain exclusively
                        within the boundaries of your controlled infrastructure.
                    </p>
                    <p className="text-[12px] font-medium leading-[1.7] text-gray-800">
                        Genovation&apos;s JUDGE verification system operates locally and
                        does not require external connectivity. All cryptographic
                        operations — including key generation, rotation, encryption, and
                        signing — are performed on-premise using hardware security modules
                        (HSMs) or software-defined key stores within the customer&apos;s
                        security perimeter. Post-quantum cryptographic libraries
                        (CRYSTALS-Kyber, CRYSTALS-Dilithium) are executed locally and are
                        not dependent on external certificate authorities or key escrow
                        services.
                    </p>
                    <p className="text-[12px] font-medium leading-[1.7] text-gray-800">
                        Performance benchmarks cited on this website (including latency,
                        cost, and accuracy metrics) are based on internal testing
                        conducted on representative enterprise workloads and may vary
                        depending on deployment configuration, data volumes, hardware
                        specifications, and operational conditions. Genovation makes no
                        guarantees regarding specific performance outcomes in production
                        environments. Prospective customers are encouraged to request a
                        proof-of-concept deployment to validate performance within their
                        specific infrastructure.
                    </p>
                    <p className="text-[12px] font-medium leading-[1.7] text-gray-800">
                        Genovation does not hold or claim certification under GDPR, HIPAA,
                        SOC 2, ISO 27001, DORA, FedRAMP, NIST, PCI DSS, EU AI Act, CCPA,
                        or any other regulatory framework. References to these standards
                        on this website indicate that Genovation&apos;s architecture has
                        been designed with the technical and organisational requirements
                        of these frameworks in mind. Achieving and maintaining compliance
                        certification is the sole responsibility of the deploying
                        organisation and is subject to independent audit. Genovation
                        provides architecture documentation and deployment guidance to
                        support customers pursuing certification within their own
                        environments.
                    </p>
                </div>
            </div>
        </div>
    );
}
