"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
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
      className="text-muted-foreground/60"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}

export function ImagePlaceholder({
  aspect = "16/9",
  label,
  note,
  delay = 0,
  src,
}: {
  aspect?: "16/9" | "4/3" | "3/4" | "21/9" | (string & {});
  label: string;
  note?: string;
  delay?: number;
  src?: string;
}) {
  const openImage = useGalleryOpen(src);

  if (src) {
    return (
      <Reveal delay={delay}>
        <figure>
          <button
            type="button"
            onClick={openImage ?? undefined}
            disabled={!openImage}
            aria-label={`View ${label} full size`}
            style={{ aspectRatio: aspect.replace("/", " / ") }}
            className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-surface text-left disabled:cursor-default"
          >
            <Image
              src={src}
              alt={label}
              fill
              unoptimized
              className="object-cover"
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/20 group-hover:opacity-100">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground">
                <ExpandIcon />
              </span>
            </span>
          </button>
          <figcaption className="mt-2.5 flex flex-col gap-1">
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
              {label}
            </span>
            {note ? (
              <span className="max-w-[42ch] text-[12px] leading-relaxed text-muted-foreground/70">
                {note}
              </span>
            ) : null}
          </figcaption>
        </figure>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay}>
      <div
        style={{ aspectRatio: aspect.replace("/", " / ") }}
        className="flex w-full flex-col items-center justify-center gap-2.5 rounded-xl border border-dashed border-border-strong bg-surface/60 px-6 py-8 text-center"
      >
        <ImageIcon />
        <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
          {label}
        </span>
        {note ? (
          <span className="max-w-[42ch] text-[12px] leading-relaxed text-muted-foreground/70">
            {note}
          </span>
        ) : null}
      </div>
    </Reveal>
  );
}
