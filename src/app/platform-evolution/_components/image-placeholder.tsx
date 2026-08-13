import { Reveal } from "@/components/reveal";

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
}: {
  aspect?: "16/9" | "4/3" | "3/4" | "21/9";
  label: string;
  note?: string;
  delay?: number;
}) {
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
