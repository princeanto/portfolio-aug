"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { GridBackground } from "@/components/grid-background";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Opening() {
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
  };

  return (
    <div
      id="top"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setSpotlightOn(true)}
      onPointerLeave={() => setSpotlightOn(false)}
      className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden bg-background"
    >
      <GridBackground />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlightBackground }}
        animate={{ opacity: spotlightOn ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-4xl flex-col items-start"
        >
          <motion.span
            variants={item}
            className="mb-7 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-a)]" />
            Enterprise Product Designer — 5+ Years
          </motion.span>

          <motion.h1
            variants={item}
            className="text-balance text-[2.75rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]"
          >
            Designing enterprise platforms that turn complexity into{" "}
            <span className="bg-gradient-to-r from-[var(--accent-a)] to-[var(--accent-b)] bg-clip-text text-transparent">
              clarity.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            I specialize in enterprise platforms, workflow orchestration, and
            the AI-assisted layer being built on top of both. Most of what
            I&apos;ve shipped exists to make a system with a hundred moving
            parts feel like it only has one.
          </motion.p>
        </motion.div>
      </div>

      <motion.a
        href="#how-i-think"
        variants={item}
        initial="hidden"
        animate="show"
        className="group absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
      >
        Scroll
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
      </motion.a>
    </div>
  );
}
