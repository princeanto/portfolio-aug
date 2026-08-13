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
      <NodeNetwork collapsed={collapsed} nodeCount={90} />
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
          className="font-display mt-3 text-[15vw] italic leading-none text-[var(--signal)] sm:text-[9rem]"
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
        <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-between px-6 py-10 sm:px-10 sm:py-14">
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
              className="font-display mt-4 max-w-4xl text-balance text-[13vw] italic leading-[0.98] text-[var(--ink)] sm:text-[6.5rem]"
            >
              A hundred moving
              <br />
              parts, one signal.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 max-w-lg font-mono text-[13px] leading-relaxed text-[var(--ink-dim)]"
            >
              An alternate, experimental treatment of the Platform Evolution
              case study — built to demonstrate interface patterns for
              AI-native products, not just describe them.
            </motion.p>
          </div>

          <motion.a
            href="#the-problem"
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

      {/* The Problem */}
      <section id="the-problem" className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-10 sm:py-32">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
            01 — the problem
          </span>
          <StreamingText
            as="h2"
            speed={12}
            text="Every bank wanted a different set of verification services, in a different order."
            className="font-display mt-4 text-3xl italic leading-[1.15] text-[var(--ink)] sm:text-5xl"
          />
          <p className="mt-8 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
            M2P had built over a hundred verification microservices — OTP,
            PAN, Aadhaar, OCR, face match, penny-drop, dedupe. No two
            customers wanted the same combination. So every customer became a
            project: assign a team, integrate one API call per microservice,
            ship it, repeat.
          </p>
          <p className="mt-4 font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
            It worked while customers were large. It broke as they got
            smaller — the cost of serving a client barely moved, but the
            contract shrank. My regional CEO turned it into a product
            question instead of an engineering one: what if this could be
            composed, not assembled?
          </p>
          <p className="mt-4 font-mono text-[14px] leading-relaxed text-[var(--signal)]">
            Capacity, not demand, was setting how far down-market the
            business could go.
          </p>
        </div>
      </section>

      {/* The Collapse */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 pt-24 sm:px-10 sm:pt-32">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
            02 — the change that mattered
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl italic leading-[1.15] text-[var(--ink)] sm:text-5xl">
            A hundred calls became one.
          </h2>
          <p className="mt-6 max-w-xl font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
            Drag microservices onto a canvas. Connect them into a flow.
            Publish. The composed flow returns through a single API call —
            the sequence lives in the flow, not in the client&apos;s
            integration.
          </p>
        </div>
        <CollapseMoment />
      </section>

      {/* Key Decisions */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-10 sm:py-32">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
            03 — decision log
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl italic leading-[1.15] text-[var(--ink)] sm:text-5xl">
            Three calls that shaped the builder.
          </h2>
          <div className="mt-10">
            <DecisionLog />
          </div>
        </div>
      </section>

      {/* AI Workflow Assistant */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-10 sm:py-32">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
            04 — what&apos;s next
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl italic leading-[1.15] text-[var(--ink)] sm:text-5xl">
            Try the next stage.
          </h2>
          <p className="mt-6 max-w-xl font-mono text-[14px] leading-relaxed text-[var(--ink-dim)]">
            Wand&apos;s architecture was built to support an AI workflow
            assistant — describe what you want in plain language, get a
            drafted flow back, stay in control of what actually ships. Pick a
            prompt below.
          </p>
          <div className="mt-10">
            <AIAssistantDemo />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-10 sm:py-32">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
            05 — business impact
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl italic leading-[1.15] text-[var(--ink)] sm:text-5xl">
            What actually changed.
          </h2>
          <div className="mt-6">
            <TerminalStat
              label="implementation impact"
              value="80%"
              caption="Faster client go-live, against the previous cross-functional baseline."
            />
            <TerminalStat
              label="platform impact"
              value="100+"
              caption="Microservices orchestrated behind a single API call."
            />
            <TerminalStat
              label="adoption"
              value="20+"
              caption="Enterprise clients supported on the platform."
            />
            <TerminalStat
              label="team efficiency"
              value="2–3 hrs"
              caption="Per client, per supporting team — down from weeks each."
            />
          </div>
        </div>
      </section>

      {/* Close */}
      <section>
        <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center sm:px-10 sm:py-32">
          <p className="font-display text-2xl italic text-[var(--ink)] sm:text-3xl">
            Same story. Different instrument.
          </p>
          <p className="mx-auto mt-4 max-w-md font-mono text-[13px] leading-relaxed text-[var(--ink-dim)]">
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
