export default function FooterBrand() {
    return (
        <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
                <img
                    src="/logo-black.svg"
                    alt="Genovation Logo"
                    className="h-8 w-auto"
                />
            </div>
            <p className="text-[13px] font-light leading-relaxed max-w-xs mb-8 text-gray-800">
                Sovereign enterprise intelligence. Your data, your infrastructure,
                your AI. Designed for organisations where security, compliance,
                and explainability are non-negotiable.
            </p>
            <div className="space-y-4">
                <div>
                    <p className="text-[10px] font-bold tracking-wider uppercase mb-1.5 text-gray-900">
                        Headquarters
                    </p>
                    <p className="text-[12px] font-light leading-relaxed text-gray-800">
                        10th Floor, Arch Square X2,
                        <br />
                        Ep Block, Sector V, Bidhannagar,
                        <br />
                        Kolkata, West Bengal, 700091
                    </p>
                </div>
                <div>
                    <p className="text-[10px] font-bold tracking-wider uppercase mb-1.5 text-gray-900">
                        Research Lab
                    </p>
                    <p className="text-[12px] font-light leading-relaxed text-gray-800">
                        10th Floor, Arch Square X2,
                        <br />
                        Ep Block, Sector V, Bidhannagar,
                        <br />
                        Kolkata, West Bengal, 700091
                    </p>
                </div>
            </div>
        </div>
    );
}
