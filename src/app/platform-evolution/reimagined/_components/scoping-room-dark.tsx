"use client";

import { motion } from "framer-motion";

const SCOPING_ROOM = [
  "Regional CEO",
  "Product",
  "Development head",
  "Implementation head",
  "Sales head",
  "Design — me",
];

export function ScopingRoomDark() {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {SCOPING_ROOM.map((seat, i) => {
        const isMe = seat === "Design — me";
        return (
          <motion.span
            key={seat}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className={`inline-flex rounded-full border px-3.5 py-1.5 font-mono text-[12px] transition-colors duration-200 ${
              isMe
                ? "border-[var(--signal)] bg-[var(--signal-glow)] text-[var(--signal)]"
                : "border-[var(--line-strong)] text-[var(--ink-dim)] hover:text-[var(--ink)]"
            }`}
          >
            {seat}
          </motion.span>
        );
      })}
    </div>
  );
}
