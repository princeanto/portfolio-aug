import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const PRINCIPLES = [
  {
    index: "01",
    title: "Seek clarity before creativity.",
    description:
      "Creativity without clarity is decoration. I get to a plain, specific problem statement before I open Figma.",
  },
  {
    index: "02",
    title: "Simplify complexity instead of hiding it.",
    description:
      "Hiding complexity behind a clean screen just moves the cost downstream. I'd rather design it down to something a person can actually reason about.",
  },
  {
    index: "03",
    title: "Design systems that scale.",
    description:
      "A screen solves one problem. A system solves the next fifty. I design for the fiftieth from day one.",
  },
  {
    index: "04",
    title: "Teach principles, not answers.",
    description:
      "When someone asks how to solve something, I explain why, not what. Slower once. Faster every time after.",
  },
  {
    index: "05",
    title: "Build trust through ownership.",
    description:
      "I say what I actually think, own what I ship, and try to be the same designer in every room I'm in.",
  },
];

export function HowIThink() {
  return (
    <section id="how-i-think" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="How I Think"
          title="Principles I keep coming back to, project after project."
          lede="My strongest quality is simplifying complex enterprise systems. I care more about the business problem than the screen — Figma is a tool. The thinking underneath it is the actual job."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.index} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong">
                <span className="text-[13px] font-medium tabular-nums text-muted-foreground">
                  {principle.index}
                </span>
                <h3 className="mt-4 text-[15px] font-medium leading-snug text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
