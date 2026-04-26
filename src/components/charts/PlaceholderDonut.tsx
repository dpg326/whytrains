"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Segment {
  label: string;
  percent: number;
  color: string;
}

interface PlaceholderDonutProps {
  segments: Segment[];
  size?: number;
  title?: string;
}

export default function PlaceholderDonut({
  segments,
  size = 200,
  title,
}: PlaceholderDonutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1B3022"
          strokeWidth={strokeWidth}
          opacity={0.06}
        />
        {segments.map((segment, i) => {
          const dashLength = (segment.percent / 100) * circumference;
          const dashOffset = -(cumulativePercent / 100) * circumference;
          cumulativePercent += segment.percent;

          return (
            <motion.circle
              key={segment.label}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashLength} ${circumference - dashLength}`}
              initial={{ strokeDashoffset: circumference + dashOffset }}
              animate={
                isInView
                  ? { strokeDashoffset: dashOffset }
                  : { strokeDashoffset: circumference + dashOffset }
              }
              transition={{
                duration: 1,
                delay: i * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            />
          );
        })}
      </svg>
      {title && (
        <span className="text-xs font-body text-background/60 tracking-wider uppercase">
          {title}
        </span>
      )}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: segment.color }}
            />
            <span className="text-[11px] font-body text-background/70">
              {segment.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
