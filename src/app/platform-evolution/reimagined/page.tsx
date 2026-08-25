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
              platform_evolution — enterprise_fintech
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
              Every bank wanted different identity checks, in a different
              order — so every bank got its own team and its own build. I
              turned that into one API call.
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
              Senior Lead Product Designer across Meridian, Relay, and Lumen.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p className="mt-6 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              <span className="text-[var(--ink)]">What I owned — </span>
              I owned this end to end — from the first workshop to what
              shipped. That meant talking to the people who&apos;d use it,
              mapping out how the whole thing should work, designing every
              screen, and building the design system behind it. When Meridian
              became Relay, and then Lumen, I stayed on all the way
              through.
            </p>
          </Fade>
          <Fade delay={0.15}>
            <div className="mt-6 rounded-xl border border-[var(--line-strong)] bg-[var(--bg-elevated)] p-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-faint)]">
                Collaboration
              </span>
              <p className="mt-2.5 font-mono text-[13px] leading-relaxed text-[var(--ink-dim)]">
                I worked closely with leadership, product managers,
                engineers, QA, and the sales team.
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
            text="Every bank wanted different identity checks, in a different order."
            className="font-display mt-4 text-3xl leading-[1.15] text-[var(--ink)] sm:text-5xl"
          />
          <Fade delay={0.1} className="mt-8 space-y-4">
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              The company had built more than a hundred small services for checking
              who someone is — a phone check, an ID check, a photo match, a
              bank check, and more. Banks and lenders used these to confirm a
              new customer&apos;s identity before letting them in.
            </p>
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              The catch was that no two customers wanted the same checks, in
              the same order. One bank might want a phone check, then an ID
              check, then a bank check. The next bank would want a
              completely different combination, in a different order.
            </p>
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              So every customer became its own project: put a team on it,
              wire up each check one by one, ship it, then start over for
              the next customer.
            </p>
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              That worked while customers were large. It stopped working as
              they got smaller — the cost of serving a client barely moved,
              but the contract shrank.
            </p>
          </Fade>
          <Fade delay={0.2}>
            <p className="mt-6 border-l-2 border-[var(--signal)] py-1 pl-5 font-mono text-[15px] leading-relaxed text-[var(--signal)]">
              Capacity, not demand, was deciding how small a customer we
              could actually afford to take on.
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
              My regional CEO turned it into a design question: what if the
              flow could be built with a simple visual tool, instead of
              hand-built by an engineering team every time? A small group —
              one person from each team — met regularly to shape it, plus we
              ran a full-day workshop to decide exactly what was worth
              building.
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
              The original idea was to let banks build their own verification
              flows themselves. That idea didn&apos;t survive first contact
              with the problem. Building one of these flows correctly means
              knowing dozens of small rules — which check to run first, when
              a customer needs an extra check, what to do when a result
              comes back unclear. That&apos;s knowledge the company had. The
              banks didn&apos;t.
            </p>
          </Fade>
          <Fade delay={0.15}>
            <p className="mt-4 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              So the product changed shape. It wasn&apos;t a tool for
              customers to build their own flows anymore —{" "}
              <span className="text-[var(--ink)]">
                it was a tool for our own team to build them faster.
              </span>{" "}
              Same underlying system, just honest about who&apos;d actually
              use it.
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
              Drag the small services onto a canvas. Connect them into a
              flow. Publish. From then on, the whole flow runs behind one
              simple request — the bank sends one thing, and gets one thing
              back. Before, a bank had to call each small service
              separately and stitch the results together itself.
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
              Nobody disputed the grouping afterwards. That silence was the
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
              aspect="1366/768"
              label="Node + config panel"
              note="A node selected with the right-side panel open."
              src="/images/platform-evolution/node-config-panel.png"
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
              aspect="1366/768"
              label="Custom API node"
              note="Code editor, frontend/backend toggle, variables."
              src="/images/platform-evolution/custom-api-node.png"
            />
            <TerminalPlaceholder
              aspect="266/678"
              label="Version history"
              note="Published and draft tracks, author and timestamp."
              src="/images/platform-evolution/version-history.png"
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
              Meridian shipped. We showed it to leadership and it landed well.
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
                  "Faster client go-live, compared to how long it used to take with a full team.",
              },
              {
                label: "platform impact",
                value: "100+",
                caption: "Small services running behind a single request.",
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
              Setting up a new customer used to take a whole team, over
              weeks. Now one person can own the whole flow. For design, that
              means the hard part — the structure — is already decided. All
              that&apos;s left is picking type and colour for each client.
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
              Flows now ran, but there was nowhere to see the results. So
              we started doing the familiar thing again: assign a team per
              customer, build them a portal to see it in. The exact pattern
              the platform had just removed, showing up again one layer
              down.
            </p>
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              <span className="text-[var(--ink)]">Relay</span> took
              the same engine and made it work for more than just identity
              checks — any team at the company could now use it. It also
              added what a company-wide tool needs: a second person has to
              approve any change before it goes live, work gets assigned and
              tracked, every version is logged. And it absorbed a similar
              tool from Finflux — a lending company we had bought — which
              had built something almost identical for loan approvals.
            </p>
            <p className="font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
              <span className="text-[var(--ink)]">Lumen</span> closed the
              last gap. Every time a customer goes through a flow, Relay
              gives that journey its own ID. Lumen turns that into a report a
              bank&apos;s own staff can log in and read. Each product
              includes everything the one before it could do.
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
              aspect="1366/768"
              label="Maker-checker"
              note="Approve or reject with a stated reason."
              src="/images/platform-evolution/maker-checker.png"
            />
            <TerminalPlaceholder
              aspect="1366/768"
              label="Case management"
              note="Applicant data against OCR, with match confidence."
              src="/images/platform-evolution/case-management.png"
            />
            <TerminalPlaceholder
              aspect="1366/768"
              label="Reporting"
              note="The report a bank's own staff reads."
              src="/images/platform-evolution/reporting.png"
            />
          </div>
        </div>
      </section>

      {/* 11 — Lessons Learned */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
          <Eyebrow>11 — insights from the build</Eyebrow>
          <Fade delay={0.05}>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-5xl">
              What building it revealed.
            </h2>
          </Fade>

          <div className="mt-8 divide-y divide-[var(--line)]">
            {[
              {
                title: "The failure state should ship with the happy path",
                body: "I found the problem by watching our own team struggle with real work — that's the right way to find it. But next time, I'd design what happens when something goes wrong at the same time as what happens when it goes right, not after.",
              },
              {
                title: "I'd start where Lumen ended",
                body: "The idea of letting other people build on top of the platform, and letting customers bring their own tools — that idea was possible from day one, I just didn't reach for it until Lumen. If I'd started there, Meridian probably would have been built differently from the very first day.",
              },
              {
                title: "Backing the team's model over mine",
                body: "I designed version history to work the way Figma's does. Engineering built it differently, in a way that was easier for them to maintain — so I went with their version instead. It wasn't worth fighting for mine when theirs worked just as well.",
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
              Lumen was built to keep growing. These are the natural next
              steps — not things we&apos;ve already shipped:
            </p>
          </Fade>

          <div className="mt-8 divide-y divide-[var(--line)]">
            {[
              {
                title: "Bring Your Own APIs",
                body: "Lumen already lets customers plug in their own endpoint inside a flow. Extending that from one endpoint to full ownership of their own APIs is the same idea, taken further.",
              },
              {
                title: "Marketplace",
                body: "Every product so far concentrated capability inside the platform team. A marketplace inverts that: partners contribute the next hundred services instead of us building all of them.",
              },
              {
                title: "AI Workflow Assistant",
                body: "The same problem Meridian solved with a visual builder — composing verification logic without writing code — is one step further from being solved with plain language instead of a canvas.",
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
