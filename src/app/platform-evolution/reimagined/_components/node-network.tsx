"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  r: number;
  signal: boolean;
  nextShift: number;
};

export function NodeNetwork({
  collapsed,
  nodeCount = 130,
  className = "",
}: {
  collapsed: boolean;
  nodeCount?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const collapsedRef = useRef(collapsed);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    collapsedRef.current = collapsed;
    const { w, h } = sizeRef.current;
    for (const n of nodesRef.current) {
      if (collapsed) {
        n.tx = w / 2;
        n.ty = h / 2;
      } else {
        n.tx = Math.random() * w;
        n.ty = Math.random() * h;
      }
    }
  }, [collapsed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      sizeRef.current = { w: rect.width, h: rect.height, dpr };
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    }

    function initNodes() {
      const { w, h } = sizeRef.current;
      nodesRef.current = Array.from({ length: nodeCount }, (_, i) => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        return {
          x,
          y,
          tx: collapsedRef.current ? w / 2 : x,
          ty: collapsedRef.current ? h / 2 : y,
          r: 1 + Math.random() * 1.4,
          signal: i % 11 === 0,
          nextShift: performance.now() + 1500 + Math.random() * 3000,
        };
      });
    }

    resize();
    initNodes();

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(canvas.parentElement as Element);

    function draw(now: number) {
      if (!ctx || !canvas) return;
      const { w, h, dpr } = sizeRef.current;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const collapsedNow = collapsedRef.current;

      if (!collapsedNow && !prefersReducedMotion) {
        for (const n of nodes) {
          if (now > n.nextShift) {
            n.tx = Math.random() * w;
            n.ty = Math.random() * h;
            n.nextShift = now + 2500 + Math.random() * 4000;
          }
        }
      }

      const ease = prefersReducedMotion ? 1 : 0.035;
      for (const n of nodes) {
        n.x += (n.tx - n.x) * ease;
        n.y += (n.ty - n.y) * ease;
      }

      if (!collapsedNow) {
        ctx.strokeStyle = "rgba(255, 176, 32, 0.08)";
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 90) {
              ctx.globalAlpha = 1 - dist / 90;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1;
      }

      for (const n of nodes) {
        ctx.beginPath();
        if (n.signal) {
          ctx.fillStyle = "#ffb020";
          ctx.shadowColor = "#ffb020";
          ctx.shadowBlur = collapsedNow ? 14 : 6;
        } else {
          ctx.fillStyle = "rgba(239, 238, 228, 0.35)";
          ctx.shadowBlur = 0;
        }
        ctx.arc(n.x, n.y, collapsedNow ? n.r * 1.6 : n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (collapsedNow) {
        const cx = w / 2;
        const cy = h / 2;
        const pulse = 18 + Math.sin(now / 420) * 5;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, pulse);
        grad.addColorStop(0, "rgba(255, 176, 32, 0.35)");
        grad.addColorStop(1, "rgba(255, 176, 32, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [nodeCount]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
