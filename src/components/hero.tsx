"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { GridBackground } from "@/components/grid-background";
import { ThemeToggle } from "@/components/theme-toggle";

const METRICS = [
  { value: "5+", label: "Years Experience" },
  { value: "100+", label: "Enterprise APIs Simplified" },
  { value: "20+", label: "Enterprise Clients Supported" },
  { value: "100K+", label: "End Users Impacted" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [spotlightOn, setSpotlightOn] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  const spotlightBackground = useMotionTemplate`radial-gradient(560px circle at ${mouseX}px ${mouseY}px, color-mix(in srgb, var(--accent-a) 14%, transparent), transparent 70%)`;

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setSpotlightOn(true)}
      onPointerLeave={() => setSpotlightOn(false)}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-background"
    >
      <GridBackground />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlightBackground }}
        animate={{ opacity: spotlightOn ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between py-7">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-[13px] font-semibold text-background">
              P
            </span>
            <span className="text-[15px] font-medium tracking-tight text-foreground">
              Prince
            </span>
          </div>
          <ThemeToggle />
        </header>

        <main className="flex flex-1 flex-col justify-center py-16 sm:py-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            <motion.span
              variants={item}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-a)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-a)]" />
              </span>
              Enterprise Product Design
            </motion.span>

            <motion.h1
              variants={item}
              className="max-w-4xl text-balance text-[2.75rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4.75rem]"
            >
              Designing enterprise platforms that turn complexity into{" "}
              <span className="bg-gradient-to-r from-[var(--accent-a)] to-[var(--accent-b)] bg-clip-text text-transparent">
                clarity.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              I&apos;m Prince, an Enterprise Product Designer specializing in
              workflow orchestration, platform design, and AI-assisted
              enterprise experiences. I enjoy taking ambitious product ideas
              from a single line of vision to scalable products by
              simplifying complex systems, reducing implementation effort,
              and helping businesses move faster. Over the last 5+ years,
              I&apos;ve partnered with leadership, product managers, and
              engineering teams to transform enterprise problems into
              intuitive digital products.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
            >
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href="#work"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[15px] font-medium text-background transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
                >
                  View Selected Work
                  <ArrowIcon className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/resume.pdf"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-[15px] font-medium text-foreground transition-colors duration-300 ease-out hover:bg-surface"
                >
                  Download Resume
                  <DownloadIcon className="transition-transform duration-300 ease-out group-hover:translate-y-0.5" />
                </a>
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 px-1 py-3.5 text-[15px] font-medium text-muted-foreground transition-colors duration-300 ease-out hover:text-foreground"
              >
                Let&apos;s Connect
                <ArrowIcon className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-16 grid w-full grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:mt-20 sm:grid-cols-4 sm:gap-x-8"
            >
              {METRICS.map((metric, i) => (
                <div
                  key={metric.label}
                  className={
                    i > 0
                      ? "sm:border-l sm:border-border sm:pl-8"
                      : undefined
                  }
                >
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                    {metric.value}
                  </dd>
                  <dd className="mt-1.5 text-sm leading-snug text-muted-foreground">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function DownloadIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14" />
    </svg>
  );
}
