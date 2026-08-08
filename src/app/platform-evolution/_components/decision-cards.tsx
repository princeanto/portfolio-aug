import { Reveal } from "@/components/reveal";
import { STAGES } from "./data";

function ChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="my-2 text-muted-foreground"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const ROWS: { key: "decision" | "reason" | "tradeoff" | "impact"; label: string }[] = [
  { key: "decision", label: "Decision" },
  { key: "reason", label: "Reason" },
  { key: "tradeoff", label: "Trade-off" },
  { key: "impact", label: "Impact" },
];

export function DecisionCards() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {STAGES.map((stage, i) => (
        <Reveal key={stage.index} delay={i * 0.08}>
          <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
            <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              {stage.name}
            </span>
            <div className="mt-4 flex flex-1 flex-col">
              {ROWS.map((row, ri) => (
                <div key={row.key} className="flex flex-col">
                  {ri > 0 ? (
                    <div className="flex justify-start">
                      <ChevronDown />
                    </div>
                  ) : null}
                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      {row.label}
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                      {stage[row.key]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
