"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function ImageIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--ink-faint)]"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}

export function TerminalPlaceholder({
  aspect = "16/9",
  label,
  note,
  src,
}: {
  aspect?: "16/9" | "4/3" | "3/4" | "21/9" | (string & {});
  label: string;
  note?: string;
  src?: string;
}) {
  if (src) {
    return (
      <motion.figure
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <div
          style={{ aspectRatio: aspect.replace("/", " / ") }}
          className="relative w-full overflow-hidden rounded-xl border border-[var(--line-strong)] bg-[var(--bg-elevated)]"
        >
          <Image
            src={src}
            alt={label}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <figcaption className="mt-2.5 flex flex-col gap-1">
          <span className="font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--ink-dim)]">
            {label}
          </span>
          {note ? (
            <span className="max-w-[42ch] font-mono text-[12px] leading-relaxed text-[var(--ink-faint)]">
              {note}
            </span>
          ) : null}
        </figcaption>
      </motion.figure>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      style={{ aspectRatio: aspect.replace("/", " / ") }}
      className="flex w-full flex-col items-center justify-center gap-2.5 rounded-xl border border-dashed border-[var(--line-strong)] bg-[var(--bg-elevated)]/60 px-6 py-8 text-center"
    >
      <ImageIcon />
      <span className="font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--ink-dim)]">
        {label}
      </span>
      {note ? (
        <span className="max-w-[42ch] font-mono text-[12px] leading-relaxed text-[var(--ink-faint)]">
          {note}
        </span>
      ) : null}
    </motion.div>
  );
}
