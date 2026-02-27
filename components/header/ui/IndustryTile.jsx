import Link from "next/link";
import { motion } from "motion/react";
import Icon from "./Icon";

const toPublicPath = (href = "/") => href.replace(/^\/a-/, "/");

const MotionLink = motion.create(Link);

export default function IndustryTile({ href, icon, title, desc, tags = [] }) {
    return (
        <MotionLink
            href={toPublicPath(href)}
            className="
        group relative
        flex flex-col
        p-[18px]
        rounded-xl
        hover:bg-white hover:shadow-md hover:shadow-emerald-900/5
        transition-colors duration-200
        border border-transparent hover:border-black/5
      "
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center mb-3 group-hover:bg-emerald-500/10 transition-colors">
                <Icon name={icon} className="w-5 h-5 text-gray-500" />
            </div>

            <div className="text-[14px] font-medium text-gray-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                {title}
            </div>

            <div className="text-[11px] leading-relaxed text-gray-500 mb-3 line-clamp-2">
                {desc}
            </div>

            {tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-auto">
                    {tags.map((t) => (
                        <span
                            key={t}
                            className="
                inline-flex px-1.5 py-0.5 
                rounded text-[9px] font-medium 
                bg-gray-100 text-gray-600
              "
                        >
                            {t}
                        </span>
                    ))}
                </div>
            )}

            <Icon
                name="chevron-right"
                className="
          w-3.5 h-3.5
          absolute right-4 top-1/2 -translate-y-1/2
          text-gray-400
          opacity-0
          -translate-x-1
          transition-all duration-250
          group-hover:opacity-100
          group-hover:translate-x-0
          group-hover:text-emerald-500
        "
            />
        </MotionLink>
    );
}
