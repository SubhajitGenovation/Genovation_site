import { motion } from "motion/react";

export default function StatRow({ stats }) {
  return (
    <div className="flex items-center divide-x divide-gray-200 mt-6 pt-6 border-t border-gray-100">
      {stats.map((s, i) => (
        <motion.div
          className="flex-1 px-4 first:pl-0 last:pr-0 text-center"
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
        >
          <div className="text-lg font-semibold text-gray-900">{s.value}</div>
          <div className="text-[10px] uppercase tracking-wide text-gray-500 font-medium mt-0.5">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
