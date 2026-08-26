"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useGalleryOpen } from "@/components/gallery-lightbox";

function ExpandIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
    </svg>
  );
}

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
  const openImage = useGalleryOpen(src);

  if (src) {
    return (
      <motion.figure
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <button
          type="button"
          onClick={openImage ?? undefined}
          disabled={!openImage}
          aria-label={`View ${label} full size`}
          style={{ aspectRatio: aspect.replace("/", " / ") }}
          className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-[var(--line-strong)] bg-[var(--bg-elevated)] text-left disabled:cursor-default"
        >
          <Image
            src={src}
            alt={label}
            fill
            unoptimized
            className="object-cover"
          />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/30 group-hover:opacity-100">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--signal)] text-[#06070a]">
              <ExpandIcon />
            </span>
          </span>
        </button>
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
