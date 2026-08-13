"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StreamingText } from "./streaming-text";

type Prompt = {
  label: string;
  text: string;
  steps: string[];
};

const PROMPTS: Prompt[] = [
  {
    label: "NBFC onboarding",
    text: "Verify a new NBFC customer using PAN, Aadhaar, and a video KYC step.",
    steps: ["PAN Match", "Aadhaar OCR", "Face Match", "Video KYC"],
  },
  {
    label: "Merchant activation",
    text: "Verify a merchant with GST and PAN before activation.",
    steps: ["GST Check", "PAN Match", "Dedupe", "Activate"],
  },
  {
    label: "Loan disbursal",
    text: "Add a penny-drop check before disbursing a loan.",
    steps: ["Penny-Drop", "Bank Match", "Risk Score", "Disburse"],
  },
];

type Phase = "idle" | "thinking" | "streaming" | "built";

export function AIAssistantDemo() {
  const [selected, setSelected] = useState<Prompt | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [runId, setRunId] = useState(0);

  function run(prompt: Prompt) {
    setSelected(prompt);
    setPhase("thinking");
    setRunId((n) => n + 1);
    window.setTimeout(() => setPhase("streaming"), 900);
  }

  function reset() {
    setSelected(null);
    setPhase("idle");
  }

  const response = selected
    ? `Drafted a ${selected.steps.length}-step verification flow: ${selected.steps.join(" → ")}. Confidence: high. Review before publishing.`
    : "";

  return (
    <div className="rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-elevated)]">
      <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-dim)]">
          AI Workflow Assistant
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--ink-dim)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)]" />
          online
        </span>
      </div>

      <div className="p-5 sm:p-7">
        <p className="font-mono text-[13px] text-[var(--ink-dim)]">
          Describe the verification flow you need —
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {PROMPTS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => run(p)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[12px] transition-colors duration-200 ${
                selected?.label === p.label
                  ? "border-[var(--signal)] text-[var(--signal)]"
                  : "border-[var(--line-strong)] text-[var(--ink-dim)] hover:border-[var(--ink-dim)] hover:text-[var(--ink)]"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={runId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 border-t border-[var(--line)] pt-6"
            >
              <p className="font-mono text-[13px] leading-relaxed text-[var(--ink)]">
                <span className="text-[var(--ink-faint)]">{">"} </span>
                {selected.text}
              </p>

              {phase === "thinking" ? (
                <p className="mt-4 font-mono text-[13px] text-[var(--signal)]">
                  generating<span className="animate-pulse">…</span>
                </p>
              ) : null}

              {phase === "streaming" || phase === "built" ? (
                <StreamingText
                  key={`resp-${runId}`}
                  text={response}
                  as="p"
                  speed={14}
                  className="mt-4 max-w-xl font-mono text-[13px] leading-relaxed text-[var(--ink)]"
                  cursor={phase === "streaming"}
                />
              ) : null}

              {phase === "streaming" ? (
                <StreamPhaseWatcher
                  text={response}
                  onDone={() => setPhase("built")}
                />
              ) : null}

              {phase === "built" ? (
                <>
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {selected.steps.map((step, i) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.4 }}
                        className="flex items-center gap-2"
                      >
                        <span className="rounded-md border border-[var(--line-strong)] bg-[var(--bg)] px-3 py-2 font-mono text-[12px] text-[var(--ink)]">
                          {step}
                        </span>
                        {i < selected.steps.length - 1 ? (
                          <span className="font-mono text-[var(--ink-faint)]">
                            →
                          </span>
                        ) : null}
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: selected.steps.length * 0.12 + 0.2 }}
                    className="mt-6 flex flex-wrap items-center gap-3"
                  >
                    <button
                      type="button"
                      className="rounded-full bg-[var(--signal)] px-4 py-2 font-mono text-[12px] font-medium text-[#06070a]"
                    >
                      Approve &amp; publish
                    </button>
                    <button
                      type="button"
                      onClick={reset}
                      className="rounded-full border border-[var(--line-strong)] px-4 py-2 font-mono text-[12px] text-[var(--ink-dim)] hover:text-[var(--ink)]"
                    >
                      Discard
                    </button>
                  </motion.div>
                  <p className="mt-4 max-w-lg font-mono text-[11px] leading-relaxed text-[var(--ink-faint)]">
                    You stay in control of validation, anything
                    security-sensitive, and what actually ships. This is a
                    scripted demo of the concept — not a live model.
                  </p>
                </>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

function StreamPhaseWatcher({
  text,
  onDone,
}: {
  text: string;
  onDone: () => void;
}) {
  useEffect(() => {
    const duration = text.length * 14 + 300;
    const id = window.setTimeout(onDone, duration);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);
  return null;
}
