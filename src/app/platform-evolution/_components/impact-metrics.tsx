import { Reveal } from "@/components/reveal";
import { IMPACT_METRICS } from "./data";

export function ImpactMetrics() {
  return (
    <dl className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
      {IMPACT_METRICS.map((metric, i) => (
        <Reveal key={metric.label} delay={i * 0.06}>
          <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {metric.label}
          </dt>
          <dd className="mt-2 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {metric.value}
          </dd>
          <dd className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {metric.caption}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
