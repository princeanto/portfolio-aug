import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const CAPABILITIES = [
  "Bring Your Own APIs",
  "A third-party API ecosystem",
  "An API marketplace",
  "AI-assisted workflow generation",
];

export function Vision() {
  return (
    <section id="vision" className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Vision"
          title="Where this kind of platform goes next."
        />

        <div className="mt-10 max-w-2xl">
          <Reveal>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Even while we were building Connect v3, the platform&apos;s
              architecture was already answering a bigger question. It was
              designed to support:
            </p>
          </Reveal>

          <ul className="mt-6 space-y-3">
            {CAPABILITIES.map((capability, i) => (
              <Reveal key={capability} delay={0.05 + i * 0.05}>
                <li className="flex items-center gap-3 border-t border-border py-3 text-[15px] font-medium text-foreground">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent-a)]" />
                  {capability}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3}>
            <div className="mt-10 rounded-2xl border border-border bg-background p-6 sm:p-8">
              <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                One direction I&apos;d pursue next
              </span>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">
                An AI workflow assistant. You describe what you want in plain
                language, and it drafts the first version of the workflow.
                The person stays in control of validation, anything
                security-sensitive, and what actually ships.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
