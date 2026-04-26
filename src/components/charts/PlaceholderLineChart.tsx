"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PlaceholderLineChartProps {
  lines?: number;
  height?: number;
  yAxisLabel?: string;
  xAxisLabel?: string;
}

export default function PlaceholderLineChart({
  lines = 2,
  height = 280,
  yAxisLabel = "[Y-AXIS LABEL]",
  xAxisLabel = "[X-AXIS LABEL]",
}: PlaceholderLineChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const lineColors = ["#1B3022", "#D4AF37", "#2F353B", "#8B7355"];

  const generatePath = (index: number): string => {
    const points = 8;
    const width = 100;
    const segmentWidth = width / (points - 1);
    const baseY = 30 + index * 12;

    let d = `M 0 ${baseY}`;
    for (let i = 1; i < points; i++) {
      const x = i * segmentWidth;
      const y = baseY + Math.sin(i * 1.2 + index * 2) * 15 - index * 5;
      const cpx = x - segmentWidth / 2;
      d += ` Q ${cpx} ${y - 5}, ${x} ${y}`;
    }
    return d;
  };

  return (
    <div ref={ref} className="w-full" style={{ height }}>
      <div className="flex h-full">
        <div className="flex flex-col justify-between items-end pr-3 pb-8">
          <span className="text-[10px] font-body text-current/50 tracking-wide">
            [MAX]
          </span>
          <span
            className="text-[10px] font-body text-current/50 tracking-wide"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {yAxisLabel}
          </span>
          <span className="text-[10px] font-body text-current/50 tracking-wide">
            [MIN]
          </span>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex-1 border-l-2 border-b-2 border-current/15 relative overflow-hidden">
            {/* Grid lines */}
            {[25, 50, 75].map((pct) => (
              <div
                key={pct}
                className="absolute w-full border-t border-dashed border-current/10"
                style={{ top: `${pct}%` }}
              />
            ))}

            <svg
              viewBox="0 0 100 80"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {Array.from({ length: lines }).map((_, i) => (
                <motion.path
                  key={i}
                  d={generatePath(i)}
                  fill="none"
                  stroke={lineColors[i % lineColors.length]}
                  strokeWidth="1.5"
                  strokeDasharray="300"
                  initial={{ strokeDashoffset: 300 }}
                  animate={
                    isInView
                      ? { strokeDashoffset: 0 }
                      : { strokeDashoffset: 300 }
                  }
                  transition={{
                    duration: 1.5,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </svg>

            {/* Legend */}
            <div className="absolute top-3 right-3 flex flex-col gap-1">
              {Array.from({ length: lines }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-4 h-[2px]"
                    style={{
                      backgroundColor: lineColors[i % lineColors.length],
                    }}
                  />
                  <span className="text-[9px] font-body text-current/50">
                    [SERIES {String.fromCharCode(65 + i)}]
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-[10px] font-body text-current/50 mt-2 tracking-wide">
            {xAxisLabel}
          </div>
        </div>
      </div>
    </div>
  );
}
