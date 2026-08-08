import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-heading";
import { GridBackground } from "@/components/grid-background";
import { BusinessProblemDiagram } from "./_components/business-problem-diagram";
import { EvolutionTimeline } from "./_components/evolution-timeline";
import { DecisionCards } from "./_components/decision-cards";
import { ImpactMetrics } from "./_components/impact-metrics";

export const metadata: Metadata = {
  title: "Platform Evolution — Prince",
  description:
    "How an identity verification product evolved into an enterprise workflow platform: IDFlow, M2P Connect, and Wand.",
};

const WHATS_NEXT = ["Bring Your Own APIs", "Marketplace", "AI Workflow Assistant"];

export default function PlatformEvolutionPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden border-b border-border bg-background">
        <GridBackground />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <SectionEyebrow>Case Study</SectionEyebrow>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-[2.75rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]">
              Platform Evolution.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              How an identity verification product evolved into an enterprise
              workflow platform.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  Role
                </dt>
                <dd className="mt-1 text-[15px] font-medium text-foreground">
                  Senior Lead Product Designer
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  Timeline
                </dt>
                <dd className="mt-1 text-[15px] font-medium text-foreground">
                  2021 — Present
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  Company
                </dt>
                <dd className="mt-1 text-[15px] font-medium text-foreground">
                  M2P Fintech
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.22}>
            <a
              href="#impact"
              className="group mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-foreground transition-colors duration-300 hover:text-muted-foreground"
            >
              See the impact
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <path d="M12 4v16m0 0-6-6m6 6 6-6" />
              </svg>
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2. The Spark */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionEyebrow>The Spark</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              A pattern leadership couldn&apos;t ignore.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              M2P&apos;s leadership had watched the same pattern repeat across
              dozens of deals — a hundred-plus identity verification
              microservices, and a bespoke integration hand-built for almost
              every customer. That pattern was the opening. I joined at the
              ideation stage and owned the design of what became IDFlow from
              there.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. The Business Problem */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionEyebrow>The Business Problem</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              One hundred APIs. One custom workflow per deal, every time.
            </h2>
          </Reveal>

          <div className="mt-6 max-w-2xl space-y-3">
            <Reveal delay={0.1}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  The process —{" "}
                </span>
                Every customer needed a different combination of PAN,
                Aadhaar, OCR, face match, GST, and dozens of other identity
                services. Implementation teams hand-built a new workflow for
                almost every deal.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  Why it was slow —{" "}
                </span>
                Nothing was reusable. Every integration started from a blank
                page, regardless of how similar it was to the last one.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  Why it didn&apos;t scale —{" "}
                </span>
                Engineering effort scaled linearly with deals, not with
                product maturity — more customers meant more bespoke builds,
                indefinitely.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  Why small customers weren&apos;t profitable —{" "}
                </span>
                A smaller deal still needed the same hand-built integration
                effort as a large one, so margins on smaller customers
                didn&apos;t hold up.
              </p>
            </Reveal>
          </div>

          <BusinessProblemDiagram />
        </div>
      </section>

      {/* 4. My Role */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionEyebrow>My Role</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Ownership, not a responsibilities list.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                What I owned —{" "}
              </span>
              Product design end to end, across all three stages: stakeholder
              interviews, workflow mapping, information architecture,
              interaction design, the design system, and the shipped UI for
              IDFlow — then continued ownership through M2P Connect&apos;s
              platform versions, and the design-system-unification call on
              Wand.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                Decisions I influenced —{" "}
              </span>
              Choosing a visual workflow builder over a better engineering
              tool, generalising the platform beyond identity verification,
              and unifying the design system across the whole platform.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-surface p-6">
              <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Collaboration
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">
                Cross-functional collaboration with Leadership, Product
                Managers, Solution Engineering, QA and Sales Operations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. The Evolution */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionEyebrow>The Evolution</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              IDFlow → M2P Connect → Wand.
            </h2>
          </Reveal>
          <EvolutionTimeline />
        </div>
      </section>

      {/* 6. Key Design Decisions */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionEyebrow>Key Design Decisions</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Three decisions, and what each one cost.
            </h2>
          </Reveal>
          <DecisionCards />
        </div>
      </section>

      {/* 7. Business Impact */}
      <section id="impact" className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionEyebrow>Business Impact</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              What actually changed, not just what shipped.
            </h2>
          </Reveal>
          <ImpactMetrics />
        </div>
      </section>

      {/* 8. Lessons Learned */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionEyebrow>Lessons Learned</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              What this changed about how I think.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-8 max-w-2xl text-balance border-l-2 border-[var(--accent-a)] pl-6 text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
              &ldquo;The pattern across all three decisions is the same one:
              each stage traded something concrete — raw flexibility,
              identity-specific shortcuts, control over what ships — for
              reach.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Scaling a platform is less about adding capability and more
              about deciding, on purpose, what you&apos;re willing to give up
              for it. The failure mode isn&apos;t making the wrong trade —
              it&apos;s not naming the trade at all, and finding out later
              what it actually cost.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9. What's Next */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionEyebrow>What&apos;s Next</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Where the platform goes from here.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Wand&apos;s architecture was built to keep going — this is the
              natural next stage, not a shipped feature list:
            </p>
          </Reveal>
          <ul className="mt-6 flex flex-wrap gap-3">
            {WHATS_NEXT.map((item, i) => (
              <Reveal key={item} delay={0.14 + i * 0.05}>
                <li className="rounded-full border border-border px-4 py-2 text-[14px] font-medium text-foreground">
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
