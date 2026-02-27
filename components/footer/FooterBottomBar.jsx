import Link from "next/link";

export default function FooterBottomBar() {
    return (
        <div className="border-t border-black/[0.06]">
            <div className="max-w-7xl mx-auto px-8 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                        <p className="text-[11px] text-gray-800">
                            &copy; 2026 Genovation Technological Solutions Private Limited. All rights reserved.
                        </p>
                        <p className="text-[11px] text-gray-800">
                            Registered in Kolkata, West Bengal, India
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/security-sovereignty"
                            className="text-[11px] text-gray-800 font-light hover:text-emerald-600 transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/security-sovereignty"
                            className="text-[11px] text-gray-800 font-light hover:text-emerald-600 transition-colors"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/security-sovereignty"
                            className="text-[11px] text-gray-800 font-light hover:text-emerald-600 transition-colors"
                        >
                            Cookies
                        </Link>
                        <Link
                            href="/security-sovereignty"
                            className="text-[11px] text-gray-800 font-light hover:text-emerald-600 transition-colors"
                        >
                            Security
                        </Link>
                        <Link
                            href="/"
                            className="text-[11px] text-gray-800 font-light hover:text-emerald-600 transition-colors"
                        >
                            Sitemap
                        </Link>
                        <Link
                            href="/"
                            className="text-[11px] text-gray-800 font-light hover:text-emerald-600 transition-colors"
                        >
                            Status
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
