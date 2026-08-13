import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-heading";
import { GridBackground } from "@/components/grid-background";
import { HeroChain } from "./_components/hero-chain";
import { ChangeDiagram } from "./_components/change-diagram";
import { ScopingRoom } from "./_components/scoping-room";
import { DecisionList } from "./_components/decision-list";
import { WhereItBroke } from "./_components/where-it-broke";
import { ImpactMetrics } from "./_components/impact-metrics";
import { NumberedEyebrow } from "./_components/numbered-eyebrow";
import { ImagePlaceholder } from "./_components/image-placeholder";
import { RESEARCH_METHODS, RESEARCH_CATEGORIES, WHATS_NEXT } from "./_components/data";

export const metadata: Metadata = {
  title: "Platform Evolution — Prince",
  description:
    "One API instead of a hundred: how an identity verification product evolved into an enterprise workflow platform. IDFlow, M2P Connect, and Wand.",
};

export default function PlatformEvolutionPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden border-b border-border bg-background">
        <GridBackground />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <SectionEyebrow>M2P Fintech · Enterprise Platform · 2021–2026</SectionEyebrow>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-[2.75rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]">
              One API instead of a hundred.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Every bank wanted a different set of verification services in a
              different order, so every bank got its own team and its own
              build. I designed the platform that turned that into something
              one person composes on a canvas — and returns through a single
              API call.
            </p>
          </Reveal>

          <HeroChain />

          <Reveal delay={0.24}>
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
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32">
          <ImagePlaceholder
            aspect="21/9"
            label="Product screenshot"
            note="The composition layer — services on the left, flow on the canvas, configuration on the right."
            delay={0.28}
          />
        </div>
      </section>

      {/* 2. My Role */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="01">My Role</NumberedEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Senior Lead Product Designer, all three generations.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                What I owned —{" "}
              </span>
              Product design end to end, from the scoping workshop through a
              shipped platform: research, information architecture,
              interaction design, the design system, and the shipped UI for
              IDFlow — then continued ownership through M2P Connect&apos;s
              platform versions and Wand.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong">
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

      {/* 3. The Situation */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="02">The Situation</NumberedEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Every customer was a project.
            </h2>
          </Reveal>
          <div className="mt-6 max-w-2xl space-y-4">
            <Reveal delay={0.1}>
              <p className="text-pretty text-lg leading-relaxed text-foreground/80">
                M2P had built over a hundred verification microservices —
                OTP, PAN, Aadhaar, OCR, face match, penny-drop bank checks,
                dedupe. Banks and NBFCs used them to verify and onboard
                customers.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                The catch was that no two customers wanted the same ones, in
                the same order. HDFC might want phone OTP, then PAN, then a
                penny-drop check to confirm the bank account. The next client
                would want a different set entirely, sequenced differently.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                So every customer became a project. Assign a team. Integrate
                one API call per microservice. Ship it. Do it again for the
                next one.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                That worked while the customers were large. It stopped
                working as they got smaller — the cost of serving a client
                barely moved, but the contract shrank.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.26}>
            <p className="mt-8 max-w-2xl border-l-2 border-[var(--accent-a)] py-1 pl-6 text-xl font-medium leading-snug text-foreground sm:text-2xl">
              Capacity, not demand, was setting how far down-market the
              business could go.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. The Spark */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="03">The Spark</NumberedEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              A room, not a brief.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              My regional CEO turned it into a product question: what if the
              flow could be composed in a portal instead of assembled by a
              team? Scope wasn&apos;t handed down from there. It was set by a
              recurring cross-functional group, plus a full-day workshop to
              decide what was actually worth building.
            </p>
          </Reveal>

          <ScopingRoom />

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              My job in that room wasn&apos;t to take requirements. It was to
              hear what each expert described and push it further than
              they&apos;d framed it.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                Version history came out of that.
              </span>{" "}
              Nobody asked for it. In regulated finance, knowing who changed
              what, when and why isn&apos;t a convenience — it&apos;s the
              difference between a platform an auditor accepts and one they
              don&apos;t.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. The First Correction */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="04">The First Correction</NumberedEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              No-code was the wrong ambition.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              The original intent was customer self-service — banks would log
              in and build their own verification flows. That died early, and
              it died in the first stage rather than after launch. Composing
              a KYC flow correctly means knowing what a dedupe check is, when
              a penny drop is needed, and what happens when face match
              returns a partial. That&apos;s M2P domain knowledge, not
              customer knowledge.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              So the product changed shape: not no-code for customers, but{" "}
              <span className="font-medium text-foreground">
                low-code for M2P&apos;s own implementation team.
              </span>{" "}
              Same architecture, honest about who could actually use it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. The Change That Mattered */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="05">The Change That Mattered</NumberedEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              A hundred calls became one.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Drag microservices onto a canvas. Connect them into a flow.
              Publish. The change that mattered most sits underneath: the
              composed flow returns through one API call.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Before, integrating a client meant hitting each microservice
              separately and stitching the results. After, the whole
              verification journey is a single endpoint. That&apos;s what
              collapsed the work — and it made the product simpler on the
              client&apos;s side too, which was never the stated goal but
              turned out to matter in sales conversations.
            </p>
          </Reveal>

          <ChangeDiagram />
        </div>
      </section>

      {/* 7. Research */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="06">Research</NumberedEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              How the structure got decided.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {RESEARCH_METHODS.map((method) => (
                <div key={method.label}>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                    {method.label}
                  </dt>
                  <dd className="mt-1.5 text-[15px] font-medium text-foreground">
                    {method.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              A hundred services on one page is a list, not a system. Search
              only helps people who already know what M2P calls the thing
              they need — which excludes every new user. So I grouped
              services by the job they do, then ran a card sort to test
              whether that grouping matched how people actually think.
            </p>
          </Reveal>

          <div className="mt-6 flex flex-wrap gap-2">
            {RESEARCH_CATEGORIES.map((cat, i) => (
              <Reveal key={cat} delay={0.2 + i * 0.02}>
                <span className="inline-flex rounded-full border border-border-strong px-3.5 py-1.5 text-[13px] text-foreground/85 transition-colors duration-300 hover:border-[var(--accent-a)] hover:text-[var(--accent-a)]">
                  {cat}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Nobody disputed the taxonomy afterwards. In a company where
              every service has an owner with a view on where it belongs,
              that silence was the research paying for itself.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ImagePlaceholder
              aspect="4/3"
              label="Card sort"
              note="Sort board or clustered results."
              delay={0.34}
            />
            <ImagePlaceholder
              aspect="4/3"
              label="Node + config panel"
              note="A node selected with the right-side panel open."
              delay={0.38}
            />
          </div>
        </div>
      </section>

      {/* 8. Key Decisions */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="07">Key Decisions</NumberedEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Three calls that shaped the builder.
            </h2>
          </Reveal>
          <DecisionList />

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ImagePlaceholder
              aspect="4/3"
              label="Custom API node"
              note="Code editor, frontend/backend toggle, variables."
              delay={0.06}
            />
            <ImagePlaceholder
              aspect="4/3"
              label="Version history"
              note="Published and draft tracks, with author and timestamp on every version."
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* 9. Where It Broke */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="08">Where It Broke</NumberedEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              We gave it to our own team, and watched.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              IDFlow shipped. We showed it to leadership and it landed well.
              Then we gave it to our own implementation team and put them on
              real work with smaller clients. They hit two walls.
            </p>
          </Reveal>

          <WhereItBroke />

          <div className="mt-10">
            <ImagePlaceholder
              aspect="21/9"
              label="Validation panel"
              note="Error taxonomy, plain-English codes, failing node highlighted, re-validate."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* 10. Business Impact */}
      <section id="impact" className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="09">Business Impact</NumberedEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              What actually changed, not just what shipped.
            </h2>
          </Reveal>
          <ImpactMetrics />
          <Reveal delay={0.3}>
            <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Setting up a customer went from a full cross-functional team
              over weeks to solution engineers owning the flow themselves.
              For design that now means choosing type and colour on a layout
              that&apos;s already fixed — the microservices are pre-built, so
              the structure doesn&apos;t change per client.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-6 max-w-2xl border-l-2 border-[var(--accent-a)] py-1 pl-6 text-xl font-medium leading-snug text-foreground sm:text-2xl">
              New products get adopted because they&apos;re new. Teams only
              migrate flows that already work when the new thing is
              genuinely better.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 11. What Happened Next */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="10">What Happened Next</NumberedEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              The same habit, one layer down.
            </h2>
          </Reveal>
          <div className="mt-6 max-w-2xl space-y-4">
            <Reveal delay={0.1}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Flows now ran, but they produced data with nowhere to look at
                it. So M2P started doing the familiar thing: assign a team
                per customer, build them a back-end portal. The exact pattern
                the platform had just removed, returning at the next layer.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  M2P Connect
                </span>{" "}
                generalised the engine beyond identity into a company-wide
                capability, and added what a platform needs at scale —
                maker-checker approval so the person who builds a flow
                isn&apos;t the person who approves it, task assignment and
                SLA configuration, version history, logs, post-API
                verification. It also consolidated with a parallel low-code
                product from Finflux, the lending startup M2P had acquired,
                whose loan-origination builder was solving a version of the
                same problem.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Wand</span>{" "}
                closed the last gap. Connect emits a unique ID per journey;
                Wand turns it into a report a bank&apos;s own staff can log
                in and read. When a customer completes an onboarding journey
                at HDFC, someone at HDFC can open Wand and see it — without
                anyone at M2P building them a portal.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Each product contains the one before it. Wand has everything
                IDFlow and Connect could do, plus case management on top.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.28}>
            <p className="mt-8 max-w-2xl border-l-2 border-[var(--accent-a)] py-1 pl-6 text-xl font-medium leading-snug text-foreground sm:text-2xl">
              The same reflex — assign a team, build it custom, per customer
              — kept reappearing at each layer. Each product removed one more
              instance of it.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ImagePlaceholder
              aspect="3/4"
              label="Maker-checker"
              note="Approve or reject with a stated reason."
              delay={0.32}
            />
            <ImagePlaceholder
              aspect="3/4"
              label="Case management"
              note="Applicant data against OCR, with match confidence."
              delay={0.36}
            />
            <ImagePlaceholder
              aspect="3/4"
              label="Reporting"
              note="The report a bank's own staff reads."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* 12. Lessons Learned */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="11">Lessons Learned</NumberedEyebrow>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              What I&apos;d do differently.
            </h2>
          </Reveal>

          <div className="mt-8 max-w-2xl divide-y divide-border">
            <Reveal delay={0.1}>
              <div className="py-6 first:pt-0">
                <h3 className="text-[17px] font-medium text-foreground">
                  The failure state should ship with the happy path
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  We found the debugging problem by watching implementation
                  staff struggle with real client work. That&apos;s the right
                  way to find it — but I&apos;d design the error experience
                  alongside the success case next time, not after.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="py-6">
                <h3 className="text-[17px] font-medium text-foreground">
                  I&apos;d start where Wand ended
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  Extensibility, customer-owned APIs, treating the platform
                  as something others build on — that thinking was available
                  conceptually from the beginning. Approaching IDFlow that
                  way would likely have produced a different architecture on
                  day one rather than across three products.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="py-6 last:pb-0">
                <h3 className="text-[17px] font-medium text-foreground">
                  One concession I&apos;d make again
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  I proposed version history and designed it on Figma&apos;s
                  model. Engineering built something structurally different
                  based on how they understood the system, and I took theirs
                  — their domain, easier for them to maintain, and mine
                  wasn&apos;t better enough to spend the capital on.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 13. What's Next */}
      <section className="bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <NumberedEyebrow number="12">What&apos;s Next</NumberedEyebrow>
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
                <li className="rounded-full border border-border px-4 py-2 text-[14px] font-medium text-foreground transition-colors duration-300 hover:border-[var(--accent-a)] hover:text-[var(--accent-a)]">
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
