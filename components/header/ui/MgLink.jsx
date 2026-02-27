import Link from "next/link";
import { motion } from "motion/react";
import Icon from "./Icon";

const toPublicPath = (href = "/") => href.replace(/^\/a-/, "/");

const MotionLink = motion.create(Link);

export default function MgLink({ href, icon, label, children }) {
  return (
    <MotionLink
      href={toPublicPath(href)}
      className="
        group
        flex items-center gap-[10px]
        px-[12px] py-[9px] -mx-[12px]
        rounded-[10px]
        no-underline
        text-[14px] font-light text-gray-600
        relative
        hover:bg-white/70
        hover:text-emerald-700
      "
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <div
        className="
          w-[28px] h-[28px]
          rounded-[8px]
          flex items-center justify-center
          shrink-0
          transition-transform duration-250
          bg-black/5
          group-hover:scale-110
          group-hover:bg-emerald-500/10
        "
      >
        <Icon name={icon} className="w-3.5 h-3.5 text-gray-500" />
      </div>

      {children || label}

      <Icon
        name="chevron-right"
        className="
          w-3 h-3
          ml-auto
          text-gray-400
          opacity-0
          -translate-x-[6px]
          transition-all duration-250
          group-hover:opacity-100
          group-hover:translate-x-0
          group-hover:text-emerald-500
        "
      />
    </MotionLink>
  );
}
