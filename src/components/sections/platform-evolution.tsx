import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type EvolutionNode = {
  index: string;
  name: string;
  tagline: string;
  narrative: string[];
  roleIntro?: string;
  roleList?: string[];
  challenges?: string[];
  contribution?: string[];
  impactStat?: { before: string; after: string; label: string; note: string };
  callout?: string;
};

const NODES: EvolutionNode[] = [
  {
    index: "01",
    name: "IDFlow",
    tagline:
      "A workflow platform that orchestrated identity verification APIs through configurable workflows instead of custom implementations.",
    narrative: [
      "M2P ran more than a hundred identity verification microservices — PAN, Aadhaar, OCR, face match, GST, and more. Every customer needed a different combination of them, so implementation teams ended up hand-building a new workflow for almost every deal.",
      "That meant long implementation cycles, engineering effort spent on work that wasn't differentiated, and margins that didn't hold up on smaller customers.",
    ],
    roleIntro:
      "I joined during the ideation phase and owned product design end to end — stakeholder interviews, workflow mapping, information architecture, interaction design, the design system, and the shipped UI.",
    challenges: [
      "Moving implementation teams off engineering-led workflows and onto a visual builder",
      "Making 100+ microservices legible through categorisation, search, and information panels",
      "Progressive disclosure and list/grid views that behaved the same way everywhere",
    ],
  },
  {
    index: "02",
    name: "M2P Connect",
    tagline:
      "The evolution of IDFlow from an identity verification product into an enterprise workflow orchestration platform.",
    narrative: [
      "Partway through, it became clear the orchestration model wasn't specific to identity verification — it could run any enterprise product or API. So we stopped building it for one team's problem and turned it into a company-wide capability.",
    ],
    roleIntro:
      "I continued owning product design through several platform versions, working closely with leadership, product managers, and solution engineering.",
    impactStat: {
      before: "~30 days",
      after: "~2 days",
      label: "Typical workflow implementation time",
      note: "That wasn't a UI win. It changed how implementation teams actually worked.",
    },
  },
  {
    index: "03",
    name: "Wand",
    tagline: "A low-code platform built on top of the workflow orchestration engine.",
    narrative: [
      "Customers wanted more range than the platform gave them. Some wanted to use M2P's own APIs, others wanted to combine them with their own. That meant the platform itself had to become extensible, not just configurable.",
    ],
    contribution: [
      "Build workflows visually",
      "Reuse platform components",
      "Integrate their own APIs",
      "Configure workflows without engineering dependency",
    ],
    callout:
      "One decision I pushed hard for: a single design system across the whole platform, so whatever came next could scale on top of it instead of starting over.",
  },
];

export function PlatformEvolution() {
  return (
    <section id="work" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Featured Work"
          title="One workflow engine. Three products. A platform that kept outgrowing its original problem."
          lede="Presented here as one continuous evolution, not three separate case studies — because that's how it actually happened."
        />

        <div className="relative mt-20">
          <div className="absolute left-5 top-0 bottom-0 w-px -translate-x-1/2 bg-border sm:left-6" />

          <div className="space-y-20 sm:space-y-24">
            {NODES.map((node) => (
              <div key={node.index} className="relative flex gap-6 sm:gap-10">
                <Reveal delay={0.05} className="relative z-10 flex-none">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-surface text-sm font-medium tabular-nums text-foreground sm:h-12 sm:w-12 sm:text-base">
                    {node.index}
                  </div>
                </Reveal>

                <div className="flex-1 pb-2 pt-1">
                  <Reveal>
                    <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                      {node.name}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <p className="mt-3 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80">
                      {node.tagline}
                    </p>
                  </Reveal>

                  <div className="mt-6 max-w-2xl space-y-4">
                    {node.narrative.map((para, pi) => (
                      <Reveal key={pi} delay={0.08 + pi * 0.04}>
                        <p className="text-[15px] leading-relaxed text-muted-foreground">
                          {para}
                        </p>
                      </Reveal>
                    ))}
                  </div>

                  {node.roleIntro ? (
                    <Reveal delay={0.14}>
                      <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                        <span className="font-medium text-foreground">Role — </span>
                        {node.roleIntro}
                      </p>
                    </Reveal>
                  ) : null}

                  {node.challenges ? (
                    <Reveal delay={0.18}>
                      <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-surface p-6">
                        <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                          Key design challenges
                        </span>
                        <ul className="mt-4 space-y-2.5">
                          {node.challenges.map((c) => (
                            <li
                              key={c}
                              className="flex gap-3 text-[15px] leading-relaxed text-foreground/85"
                            >
                              <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-muted-foreground" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ) : null}

                  {node.contribution ? (
                    <Reveal delay={0.18}>
                      <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-surface p-6">
                        <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                          What I designed
                        </span>
                        <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          {node.contribution.map((c) => (
                            <li
                              key={c}
                              className="flex gap-3 text-[15px] leading-relaxed text-foreground/85"
                            >
                              <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-muted-foreground" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ) : null}

                  {node.impactStat ? (
                    <Reveal delay={0.18}>
                      <div className="mt-8 flex max-w-2xl flex-col gap-6 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
                        <div className="flex items-center gap-5">
                          <div>
                            <div className="text-2xl font-medium text-foreground sm:text-3xl">
                              {node.impactStat.before}
                            </div>
                            <div className="mt-1 text-xs text-muted-foreground">
                              Before
                            </div>
                          </div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="flex-none text-muted-foreground"
                          >
                            <path d="M5 12h14m0 0-5-5m5 5-5 5" />
                          </svg>
                          <div>
                            <div className="text-2xl font-medium text-[var(--accent-a)] sm:text-3xl">
                              {node.impactStat.after}
                            </div>
                            <div className="mt-1 text-xs text-muted-foreground">
                              After
                            </div>
                          </div>
                        </div>
                        <div className="border-border sm:border-l sm:pl-6">
                          <p className="text-sm font-medium text-foreground">
                            {node.impactStat.label}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {node.impactStat.note}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ) : null}

                  {node.callout ? (
                    <Reveal delay={0.22}>
                      <p className="mt-8 max-w-2xl border-l-2 border-[var(--accent-a)] py-1 pl-5 text-[15px] italic leading-relaxed text-foreground/85">
                        {node.callout}
                      </p>
                    </Reveal>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
