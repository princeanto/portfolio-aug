"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate, useReducedMotion } from "framer-motion";

export function TerminalStat({
  label,
  value,
  caption,
}: {
  label: string;
  value: string;
  caption: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(
    prefersReducedMotion || target === null ? (target ?? value) : 0,
  );

  useEffect(() => {
    if (!isInView || target === null || prefersReducedMotion) return;
    const controls = animate(0, target, {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target, prefersReducedMotion]);

  return (
    <div ref={ref} className="border-t border-[var(--line)] py-6">
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-faint)]">
        [ {label} ]
      </div>
      <div className="mt-2 font-mono text-3xl text-[var(--signal)] sm:text-4xl">
        {target === null ? value : `${display}${suffix}`}
      </div>
      <div className="mt-1.5 max-w-xs font-mono text-[12px] leading-relaxed text-[var(--ink-dim)]">
        {caption}
      </div>
    </div>
  );
}
