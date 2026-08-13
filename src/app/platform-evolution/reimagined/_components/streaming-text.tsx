"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function StreamingText({
  text,
  as: Tag = "p",
  className = "",
  speed = 18,
  cursor = true,
}: {
  text: string;
  as?: "p" | "h2" | "h3" | "span" | "div";
  className?: string;
  speed?: number;
  cursor?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(prefersReducedMotion ? text.length : 0);
  const [done, setDone] = useState(prefersReducedMotion);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;
    let raf: number;
    let i = 0;
    let last = performance.now();

    function tick(now: number) {
      if (now - last > speed) {
        i += 1;
        last = now;
        setCount(i);
        if (i >= text.length) {
          setDone(true);
          return;
        }
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, text, speed, prefersReducedMotion]);

  return (
    <div ref={ref}>
      <Tag className={className}>
        {text.slice(0, count)}
        {cursor && !done ? (
          <span className="ml-0.5 inline-block h-[0.9em] w-[0.5ch] -translate-y-[0.05em] animate-pulse bg-[var(--signal)] align-middle" />
        ) : null}
      </Tag>
    </div>
  );
}
