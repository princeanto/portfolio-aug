"use client";

import { motion } from "framer-motion";

const DECISIONS = [
  {
    id: "PROGRESSIVE_DISCLOSURE",
    body: "Hovering shows a two-line explanation; settings open in a side panel. Show everything at once, and the builder becomes just another complicated form.",
  },
  {
    id: "CUSTOM_API_ESCAPE_HATCH",
    body: "A place to plug in your own outside connection, folded into the same flow and returned through the same single call. Some things a customer needs can never be one of the pre-built checks.",
  },
  {
    id: "VERSION_HISTORY_UNASKED",
    body: "Published and draft tracks, author and timestamp on every version. Proposed before anyone requested it — in regulated finance, that's the difference an auditor notices.",
  },
];

export function DecisionLog() {
  return (
    <div className="rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-elevated)] p-1">
      {DECISIONS.map((d, i) => (
        <motion.div
          key={d.id}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="flex flex-col gap-1.5 rounded-xl px-4 py-4 sm:flex-row sm:items-baseline sm:gap-4 sm:px-5"
        >
          <span className="flex-none font-mono text-[12px] text-[var(--signal)]">
            [{String(i + 1).padStart(2, "0")}]
          </span>
          <div>
            <div className="font-mono text-[13px] tracking-tight text-[var(--ink)]">
              {d.id}
            </div>
            <p className="mt-1 font-mono text-[12.5px] leading-relaxed text-[var(--ink-dim)]">
              {d.body}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
