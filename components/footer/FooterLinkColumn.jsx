import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinkBase = "block text-[13px] text-gray-800 font-light hover:text-emerald-700 transition-colors";
const sectionLabelBase = "text-[10px] text-teal-600 font-mono tracking-wider uppercase mb-5";

export default function FooterLinkColumn({ title, links, className, labelClassName }) {
    return (
        <div className={className}>
            <div className={cn(sectionLabelBase, labelClassName)}>{title}</div>
            <div className="space-y-3">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={cn(footerLinkBase, link.className)}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
