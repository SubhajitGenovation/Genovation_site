"use client";

import Link from "next/link";
import Button from "../common/Button";

export default function PreFooterCTA() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-16 border-b border-black/[0.04]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                    <p className="text-xl font-light tracking-[-0.02em] mb-2 text-gray-800">
                        Ready to deploy sovereign intelligence?
                    </p>
                    <p className="text-[13px] font-light max-w-md text-gray-800">
                        Speak with our enterprise team to explore how Genovation fits your
                        infrastructure, compliance, and intelligence requirements.
                    </p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                    <Button variant="primary" icon="arrow" onClick={() => window.location.href = '/talk-to-sales'}>
                        Talk to Sales
                    </Button>
                    <Button variant="secondary" onClick={() => window.location.href = '/request-demo'}>
                        Book a Demo
                    </Button>
                </div>
            </div>
        </div>
    );
}
