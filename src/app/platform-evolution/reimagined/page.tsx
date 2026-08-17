"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { NodeNetwork } from "./_components/node-network";
import { StreamingText } from "./_components/streaming-text";
import { CustomCursor } from "./_components/custom-cursor";
import { AIAssistantDemo } from "./_components/ai-assistant-demo";
import { TerminalStat } from "./_components/terminal-stat";
import { DecisionLog } from "./_components/decision-log";
import { TerminalPlaceholder } from "./_components/terminal-placeholder";
import { ScopingRoomDark } from "./_components/scoping-room-dark";
import { WhereItBrokeDark } from "./_components/where-it-broke-dark";

function Fade({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
      {children}
    </span>
  );
}

function CollapseMoment() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30% 0px -30% 0px" });
  const [collapsed, setCollapsed] = useState(false);

  // Derived from a hook value that only ever flips false -> true once
  // (useInView with `once: true`), so this converges in a single extra
  // render rather than looping -- React's documented pattern for
  // "adjusting state during render" instead of via an effect.
  if (inView && !collapsed) {
    setCollapsed(true);
  }

  return (
    <div ref={ref} className="relative h-[70vh] min-h-[420px] w-full">
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: collapsed ? 0.12 : 1 }}
        transition={{ delay: collapsed ? 1.0 : 0, duration: 0.9 }}
      >
        <NodeNetwork collapsed={collapsed} nodeCount={90} />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: collapsed ? 1 : 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--ink-dim)]"
        >
          100+ calls
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: collapsed ? 1 : 0,
            scale: collapsed ? 1 : 0.9,
          }}
          transition={{ delay: 1.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-3 text-[15vw] leading-none text-[var(--signal)] sm:text-[9rem]"
        >
          one.
        </motion.p>
      </div>
    </div>
  );
}

export default function ReimaginedPage() {
  return (
    <>
      <CustomCursor />

      {/* Hero */}
      <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden border-b border-[var(--line)]">
        <NodeNetwork collapsed={false} />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col justify-between px-6 py-10 sm:px-10 sm:py-14">
          <div className="flex items-center justify-between">
            <Link
              href="/platform-evolution"
              className="font-mono text-[12px] text-[var(--ink-dim)] transition-colors hover:text-[var(--signal)]"
            >
              ← the restrained version
            </Link>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-faint)] sm:inline">
              experimental build
            </span>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--signal)]"
            >
              platform_evolution — M2P Fintech
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display mt-4 text-balance text-[12vw] leading-[1.02] text-[var(--ink)] sm:text-[5.5rem]"
            >
              A hundred moving parts, one signal.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 font-mono text-[13px] leading-relaxed text-[var(--ink-dim)]"
            >
              Every bank wanted a different set of verification services, in
              a different order — so every bank got its own team and its own
              build. I turned that into one API call.
            </motion.p>
          </div>

          <motion.a
            href="#role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="group inline-flex w-fit items-center gap-2 font-mono text-[12px] text-[var(--ink-dim)] transition-colors hover:text-[var(--ink)]"
          >
            scroll
            <span className="transition-transform group-hover:translate-y-0.5">
              ↓
            </span>
          </motion.a>
        </div>
      </section>

      {/* 01 — My Role */}
      <section id="role" className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>01 — my role</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              Senior Lead Product Designer across IDFlow, M2P Connect, and Wand.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p className="mt-6 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              <span className="text-[var(--ink)]">What I owned — </span>
              Product design end to end, from the scoping workshop through a
              shipped platform: research, information architecture,
              interaction design, the design system, and the shipped UI for
              IDFlow — then continued ownership through M2P Connect&apos;s
              platform versions and Wand.
            </p>
          </Fade>
          <Fade delay={0.15}>
            <div className="mt-6 rounded-xl border border-[var(--line-strong)] bg-[var(--bg-elevated)] p-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-faint)]">
                Collaboration
              </span>
              <p className="mt-2.5 font-mono text-[13px] leading-relaxed text-[var(--ink-dim)]">
                Cross-functional collaboration with Leadership, Product
                Managers, Solution Engineering, QA and Sales Operations.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* 02 — The Situation */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>02 — the situation</Eyebrow>
          <StreamingText
            as="h2"
            speed={10}
            text="Every bank wanted a different set of verification services, in a different order."
            className="font-display mt-4 text-3xl leading-[1.15] text-[var(--ink)] sm:text-5xl"
          />
          <Fade delay={0.1} className="mt-8 space-y-4">
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              M2P had built over a hundred verification microservices — OTP,
              PAN, Aadhaar, OCR, face match, penny-drop bank checks, dedupe.
              Banks and NBFCs used them to verify and onboard customers.
            </p>
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              The catch was that no two customers wanted the same ones, in
              the same order. HDFC might want phone OTP, then PAN, then a
              penny-drop check. The next client would want a different set
              entirely, sequenced differently.
            </p>
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              So every customer became a project. Assign a team. Integrate
              one API call per microservice. Ship it. Do it again for the
              next one.
            </p>
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              That worked while customers were large. It stopped working as
              they got smaller — the cost of serving a client barely moved,
              but the contract shrank.
            </p>
          </Fade>
          <Fade delay={0.2}>
            <p className="mt-6 border-l-2 border-[var(--signal)] py-1 pl-5 font-mono text-[15px] leading-relaxed text-[var(--signal)]">
              Capacity, not demand, was setting how far down-market the
              business could go.
            </p>
          </Fade>
        </div>
      </section>

      {/* 03 — The Spark */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>03 — the spark</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              A room, not a brief.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p className="mt-6 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              My regional CEO turned it into a product question: what if the
              flow could be composed in a portal instead of assembled by a
              team? Scope wasn&apos;t handed down from there. It was set by a
              recurring cross-functional group, plus a full-day workshop to
              decide what was actually worth building.
            </p>
          </Fade>

          <ScopingRoomDark />

          <Fade delay={0.2}>
            <p className="mt-6 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              My job in that room wasn&apos;t to take requirements. It was to
              hear what each expert described and push it further than
              they&apos;d framed it.
            </p>
          </Fade>
          <Fade delay={0.25}>
            <p className="mt-4 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              <span className="text-[var(--ink)]">
                Version history came out of that.
              </span>{" "}
              Nobody asked for it. In regulated finance, knowing who changed
              what, when and why isn&apos;t a convenience — it&apos;s the
              difference between a platform an auditor accepts and one they
              don&apos;t.
            </p>
          </Fade>
        </div>
      </section>

      {/* 04 — The First Correction */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>04 — the first correction</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              No-code was the wrong ambition.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p className="mt-6 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              The original intent was customer self-service — banks would log
              in and build their own verification flows. That died early,
              and it died in the first stage rather than after launch.
              Composing a KYC flow correctly means knowing what a dedupe
              check is, when a penny drop is needed, and what happens when
              face match returns a partial. That&apos;s M2P domain
              knowledge, not customer knowledge.
            </p>
          </Fade>
          <Fade delay={0.15}>
            <p className="mt-4 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              So the product changed shape: not no-code for customers, but{" "}
              <span className="text-[var(--ink)]">
                low-code for M2P&apos;s own implementation team.
              </span>{" "}
              Same architecture, honest about who could actually use it.
            </p>
          </Fade>
        </div>
      </section>

      {/* 05 — The Change That Mattered */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 pt-20 sm:px-10 sm:pt-28">
          <Eyebrow>05 — the change that mattered</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              A hundred calls became one.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p className="mt-6 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              Drag microservices onto a canvas. Connect them into a flow.
              Publish. The composed flow returns through a single API call —
              the sequence lives in the flow, not in the client&apos;s
              integration. Before, integrating a client meant hitting each
              microservice separately and stitching the results together.
            </p>
          </Fade>
        </div>
        <CollapseMoment />
      </section>

      {/* 06 — Research */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>06 — research</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              How the structure got decided.
            </h2>
          </Fade>

          <Fade delay={0.1}>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {[
                { label: "Taxonomy", value: "Card sorting" },
                { label: "Node system", value: "Information architecture" },
                { label: "Through build", value: "Usability testing" },
                { label: "Pre-launch", value: "Beta observation" },
              ].map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--ink-faint)]">
                    {m.label}
                  </dt>
                  <dd className="mt-1.5 font-mono text-[13px] text-[var(--ink)]">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Fade>

          <Fade delay={0.15}>
            <p className="mt-8 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              A hundred services on one page is a list, not a system. So I
              grouped services by the job they do, then ran a card sort to
              test whether that grouping matched how people actually think.
            </p>
          </Fade>

          <Fade delay={0.2} className="mt-5 flex flex-wrap gap-2">
            {[
              "Trigger",
              "KYC",
              "AML",
              "AI",
              "Integrations",
              "Files",
              "Time",
              "Database",
              "Communications",
            ].map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-[var(--line-strong)] px-3 py-1.5 font-mono text-[12px] text-[var(--ink-dim)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
              >
                {cat}
              </span>
            ))}
          </Fade>

          <Fade delay={0.25}>
            <p className="mt-5 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              Nobody disputed the taxonomy afterwards. That silence was the
              research paying for itself.
            </p>
          </Fade>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TerminalPlaceholder
              aspect="4/3"
              label="Card sort"
              note="Sort board or clustered results."
            />
            <TerminalPlaceholder
              aspect="4/3"
              label="Node + config panel"
              note="A node selected with the right-side panel open."
            />
          </div>
        </div>
      </section>

      {/* 07 — Key Decisions */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>07 — decision log</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              Three calls that shaped the builder.
            </h2>
          </Fade>
          <div className="mt-8">
            <DecisionLog />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TerminalPlaceholder
              aspect="4/3"
              label="Custom API node"
              note="Code editor, frontend/backend toggle, variables."
            />
            <TerminalPlaceholder
              aspect="4/3"
              label="Version history"
              note="Published and draft tracks, author and timestamp."
            />
          </div>
        </div>
      </section>

      {/* 08 — Where It Broke */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>08 — where it broke</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              We gave it to our own team, and watched.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p className="mt-6 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              IDFlow shipped. We showed it to leadership and it landed well.
              Then we gave it to our own implementation team and put them on
              real work with smaller clients. They hit two walls.
            </p>
          </Fade>

          <WhereItBrokeDark />

          <div className="mt-6">
            <TerminalPlaceholder
              aspect="21/9"
              label="Validation panel"
              note="Error taxonomy, plain-English codes, failing node highlighted, re-validate."
            />
          </div>
        </div>
      </section>

      {/* 09 — Business Impact */}
      <section id="impact" className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>09 — business impact</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              What actually changed.
            </h2>
          </Fade>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-[var(--line)] pt-8 sm:grid-cols-4">
            {[
              {
                label: "implementation impact",
                value: "80%",
                caption:
                  "Faster client go-live, against the previous cross-functional baseline.",
              },
              {
                label: "platform impact",
                value: "100+",
                caption: "Microservices orchestrated behind a single API call.",
              },
              {
                label: "adoption",
                value: "20+",
                caption: "Enterprise clients supported on the platform.",
              },
              {
                label: "team efficiency",
                value: "2–3 hrs",
                caption: "Per client, per supporting team — down from weeks each.",
              },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={i > 0 ? "sm:border-l sm:border-[var(--line)] sm:pl-8" : ""}
              >
                <TerminalStat
                  label={stat.label}
                  value={stat.value}
                  caption={stat.caption}
                />
              </div>
            ))}
          </div>
          <Fade delay={0.1}>
            <p className="mt-8 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              Setting up a customer went from a full cross-functional team
              over weeks to solution engineers owning the flow themselves.
              For design that now means choosing type and colour on a layout
              that&apos;s already fixed — the microservices are pre-built,
              so the structure doesn&apos;t change per client.
            </p>
          </Fade>
          <Fade delay={0.15}>
            <p className="mt-5 border-l-2 border-[var(--signal)] py-1 pl-5 font-mono text-[15px] leading-relaxed text-[var(--signal)]">
              New products get adopted because they&apos;re new. Teams only
              migrate flows that already work when the new thing is
              genuinely better.
            </p>
          </Fade>
        </div>
      </section>

      {/* 10 — What Happened Next */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>10 — what happened next</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              The same habit, one layer down.
            </h2>
          </Fade>
          <Fade delay={0.1} className="mt-6 space-y-4">
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              Flows now ran, but they produced data with nowhere to look at
              it. So M2P started doing the familiar thing: assign a team per
              customer, build them a back-end portal. The exact pattern the
              platform had just removed, returning at the next layer.
            </p>
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              <span className="text-[var(--ink)]">M2P Connect</span>{" "}
              generalised the engine beyond identity into a company-wide
              capability, and added what a platform needs at scale —
              maker-checker approval, task assignment and SLA configuration,
              version history, logs, post-API verification. It also
              consolidated with a parallel low-code product from Finflux,
              the lending startup M2P had acquired, whose loan-origination
              builder was solving a version of the same problem.
            </p>
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              <span className="text-[var(--ink)]">Wand</span> closed the
              last gap. Connect emits a unique ID per journey; Wand turns it
              into a report a bank&apos;s own staff can log in and read.
              Each product contains the one before it.
            </p>
          </Fade>
          <Fade delay={0.2}>
            <p className="mt-6 border-l-2 border-[var(--signal)] py-1 pl-5 font-mono text-[15px] leading-relaxed text-[var(--signal)]">
              The same reflex — assign a team, build it custom, per customer
              — kept reappearing at each layer. Each product removed one
              more instance of it.
            </p>
          </Fade>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <TerminalPlaceholder
              aspect="3/4"
              label="Maker-checker"
              note="Approve or reject with a stated reason."
            />
            <TerminalPlaceholder
              aspect="3/4"
              label="Case management"
              note="Applicant data against OCR, with match confidence."
            />
            <TerminalPlaceholder
              aspect="3/4"
              label="Reporting"
              note="The report a bank's own staff reads."
            />
          </div>
        </div>
      </section>

      {/* 11 — Lessons Learned */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>11 — lessons learned</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              What I&apos;d do differently.
            </h2>
          </Fade>

          <div className="mt-8 divide-y divide-[var(--line)]">
            {[
              {
                title: "The failure state should ship with the happy path",
                body: "We found the debugging problem by watching implementation staff struggle with real client work. That's the right way to find it — but I'd design the error experience alongside the success case next time, not after.",
              },
              {
                title: "I'd start where Wand ended",
                body: "Extensibility, customer-owned APIs, treating the platform as something others build on — that thinking was available conceptually from the beginning. Approaching IDFlow that way would likely have produced a different architecture on day one.",
              },
              {
                title: "One concession I'd make again",
                body: "I proposed version history and designed it on Figma's model. Engineering built something structurally different, and I took theirs — their domain, easier for them to maintain, and mine wasn't better enough to spend the capital on.",
              },
            ].map((item, i) => (
              <Fade key={item.title} delay={i * 0.06}>
                <div className="py-5 first:pt-0">
                  <h3 className="font-display text-lg text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-mono text-[13px] leading-relaxed text-[var(--ink-dim)]">
                    {item.body}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — What's Next (+ AI demo) */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>12 — what&apos;s next</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              Try the next stage.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p className="mt-6 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              Wand&apos;s architecture was built to keep going — this is the
              natural next stage, not a shipped feature list:
            </p>
          </Fade>

          <Fade delay={0.15} className="mt-5 flex flex-wrap gap-2">
            {["Bring Your Own APIs", "Marketplace", "AI Workflow Assistant"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line-strong)] px-3.5 py-1.5 font-mono text-[12px] text-[var(--ink)]"
                >
                  {item}
                </span>
              ),
            )}
          </Fade>

          <Fade delay={0.2}>
            <p className="mt-6 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              Describe what you want in plain language, get a drafted flow
              back, stay in control of what actually ships. Pick a prompt
              below.
            </p>
          </Fade>

          <div className="mt-8">
            <AIAssistantDemo />
          </div>
        </div>
      </section>

      {/* Close */}
      <section>
        <div className="mx-auto w-full max-w-[1200px] px-6 py-24 text-center sm:px-10 sm:py-32">
          <p className="font-display text-2xl text-[var(--ink)] sm:text-3xl">
            Same story. Different instrument.
          </p>
          <p className="mx-auto mt-4 font-mono text-[13px] leading-relaxed text-[var(--ink-dim)]">
            This page exists to show range — the restrained version is the
            one built for recruiters to actually read.
          </p>
          <Link
            href="/platform-evolution"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 font-mono text-[12px] text-[var(--ink)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
          >
            ← back to the case study
          </Link>
        </div>
      </section>
    </>
  );
}
