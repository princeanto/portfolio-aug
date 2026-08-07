import { Reveal } from "@/components/reveal";

const METRICS = [
  { value: "5+", label: "Years in enterprise product design" },
  { value: "100+", label: "Enterprise APIs simplified into workflows" },
  { value: "20+", label: "Enterprise clients supported" },
  { value: "100K+", label: "End users on platforms I've designed" },
];

export function EvidenceStrip() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
          {METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.06} className="flex flex-col-reverse">
              <dt className="mt-1.5 text-sm leading-snug text-muted-foreground">
                {metric.label}
              </dt>
              <dd className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {metric.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
