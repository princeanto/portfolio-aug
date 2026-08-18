"use client";

import { motion } from "framer-motion";

const WALLS = [
  {
    tag: "Wall 01",
    title: "They couldn't find their own errors",
    body: "A flow would fail, the output would be wrong, and there was no way to tell which of twelve nodes caused it. For a product whose entire promise is making logic visible, the failure state was invisible.",
  },
  {
    tag: "Wall 02",
    title: "They couldn't build the screens",
    body: "A verification journey isn't only logic — it's the pages the end customer sees. The flow could be composed, but the interface around it still needed a separate build, which put a team back in the loop.",
  },
];

const FIX_ITEMS = [
  "Two error levels — field and node — because they fail for different reasons and need different fixes",
  "Coded errors in plain English: not a generic error code, but which step in the flow has no handler for it",
  "The failing node highlighted on canvas, so location is immediate",
  "A checklist of which cases are handled and which aren't",
  "Re-validate in place, so fixing doesn't mean starting over",
  "A UI builder, so screens became part of the flow rather than a project alongside it",
];

export function WhereItBrokeDark() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {WALLS.map((wall, i) => (
          <motion.div
            key={wall.tag}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-xl border border-[var(--line-strong)] bg-[var(--bg-elevated)] p-5"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-faint)]">
              {wall.tag}
            </span>
            <h4 className="font-display mt-2 text-lg text-[var(--ink)]">
              {wall.title}
            </h4>
            <p className="mt-2.5 font-mono text-[12.5px] leading-relaxed text-[var(--ink-dim)]">
              {wall.body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-4 rounded-xl border border-[var(--signal)]/40 bg-[var(--bg-elevated)] p-5 sm:p-6"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--signal)]">
          What came out of it
        </span>
        <h4 className="font-display mt-2 text-lg text-[var(--ink)]">
          A validation system, and a UI builder
        </h4>
        <ul className="mt-3.5 space-y-2">
          {FIX_ITEMS.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 font-mono text-[12.5px] leading-relaxed text-[var(--ink-dim)]"
            >
              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--signal)]" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3.5 font-mono text-[11.5px] leading-relaxed text-[var(--ink-faint)]">
          Neither was in the original scope. Both existed because we watched
          people struggle.
        </p>
      </motion.div>
    </div>
  );
}
