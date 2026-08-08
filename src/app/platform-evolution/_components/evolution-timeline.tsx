import { Reveal } from "@/components/reveal";
import { STAGES } from "./data";

export function EvolutionTimeline() {
  return (
    <div className="relative mt-14">
      <div className="absolute left-5 top-0 bottom-0 w-px -translate-x-1/2 bg-border sm:left-6" />

      <div className="space-y-14 sm:space-y-16">
        {STAGES.map((stage) => (
          <div key={stage.index} className="relative flex gap-6 sm:gap-10">
            <Reveal delay={0.05} className="relative z-10 flex-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-surface text-sm font-medium tabular-nums text-foreground sm:h-12 sm:w-12 sm:text-base">
                {stage.index}
              </div>
            </Reveal>

            <div className="flex-1 pb-2 pt-1">
              <Reveal>
                <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                  {stage.name}
                </h3>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Why it existed — </span>
                  {stage.why}
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">What changed — </span>
                  {stage.whatChanged}
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Why the next stage happened — </span>
                  {stage.whyNext}
                </p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
