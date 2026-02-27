import Link from "next/link";
import { motion } from "motion/react";
import Icon from "./Icon";

const toPublicPath = (href = "/") => href.replace(/^\/a-/, "/");

const MotionLink = motion.create(Link);

export default function ProductCard({ href, icon, title, desc, tags = [] }) {
  return (
    <MotionLink
      href={toPublicPath(href)}
      className="
        group flex items-center gap-4 p-4 rounded-xl 
        hover:bg-white hover:shadow-lg hover:shadow-emerald-900/5 
        border border-transparent hover:border-black/5
        transition-colors duration-200
      "
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors">
        <Icon name={icon} className="w-5 h-5 text-gray-500 group-hover:text-emerald-700 transition-colors" />
      </div>
      <div className="flex-1">
        <div className="text-[13px] font-medium text-gray-900 group-hover:text-emerald-700 mb-1 transition-colors">
          {title}
        </div>
        <div className="text-[12px] leading-relaxed text-gray-500 mb-2">
          {desc}
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="
                  inline-flex items-center px-1.5 py-0.5 
                  rounded-xl text-[9px] font-medium uppercase tracking-wider
                  bg-gray-100 text-gray-600 bg-green-500/10 border border-green-500/10
                  group-hover:bg-emerald-50 group-hover:text-emerald-700
                  transition-colors
                "
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
      <Icon
        name="chevron-right"
        className="
          w-4 h-4
          mt-1
          text-gray-400
          opacity-0
          -translate-x-2
          transition-all duration-250
          group-hover:opacity-100
          group-hover:translate-x-0
          group-hover:text-emerald-500
        "
      />
    </MotionLink>
  );
}
