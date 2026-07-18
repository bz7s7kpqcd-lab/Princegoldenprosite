"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GeometricMeshProps {
  className?: string;
  variant?: "hero" | "section";
}

/**
 * A restrained geometric line-mesh — triangulated nodes drawn from a handful
 * of fixed points, rotating almost imperceptibly. It is the site's one
 * recurring signature: precision built from simple lines, echoing the way
 * these products get built — piece by piece, by hand, on a small screen.
 */
export default function GeometricMesh({ className = "", variant = "section" }: GeometricMeshProps) {
  const reduceMotion = useReducedMotion();
  const size = variant === "hero" ? 560 : 360;

  const points = [
    [0, -1],
    [0.95, -0.31],
    [0.59, 0.81],
    [-0.59, 0.81],
    [-0.95, -0.31],
  ].map(([x, y]) => [x * (size / 2 - 20) + size / 2, y * (size / 2 - 20) + size / 2]);

  const center = [size / 2, size / 2];
  const lines: [number[], number[]][] = [];
  for (let i = 0; i < points.length; i++) {
    lines.push([points[i], points[(i + 1) % points.length]]);
    lines.push([points[i], center]);
  }

  return (
    <motion.svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      animate={reduceMotion ? undefined : { rotate: 360 }}
      transition={reduceMotion ? undefined : { duration: 90, repeat: Infinity, ease: "linear" }}
    >
      <circle cx={center[0]} cy={center[1]} r={size / 2 - 20} fill="none" stroke="#C9A227" strokeOpacity={0.14} />
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={a[0]}
          y1={a[1]}
          x2={b[0]}
          y2={b[1]}
          stroke="#C9A227"
          strokeOpacity={0.16}
          strokeWidth={1}
        />
      ))}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.5} fill="#E4C863" fillOpacity={0.5} />
      ))}
      <circle cx={center[0]} cy={center[1]} r={2.5} fill="#E4C863" fillOpacity={0.6} />
    </motion.svg>
  );
}
