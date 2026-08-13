import { Reveal } from "@/components/reveal";
import { DECISIONS } from "./data";

export function DecisionList() {
  return (
    <div className="mt-6 max-w-2xl">
      {DECISIONS.map((decision, i) => (
        <Reveal key={decision.index} delay={i * 0.06}>
          <div
            className={`flex gap-5 py-8 ${i > 0 ? "border-t border-border" : ""}`}
          >
            <span className="flex-none pt-1 text-[13px] font-medium tabular-nums text-muted-foreground">
              {decision.index}
            </span>
            <div>
              <h3 className="text-lg font-medium text-foreground">
                {decision.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {decision.body}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
