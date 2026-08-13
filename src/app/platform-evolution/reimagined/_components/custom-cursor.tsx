"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 400, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function handleMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!active) setActive(true);
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[300] hidden sm:block"
      style={{
        x: sx,
        y: sy,
        opacity: active ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div className="relative h-6 w-6">
        <div className="absolute inset-0 rounded-full border border-[var(--signal)]/70" />
        <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--signal)]" />
      </div>
    </motion.div>
  );
}
