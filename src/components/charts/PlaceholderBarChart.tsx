"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BarData {
  label: string;
  heightPercent: number;
  color: string;
}

interface PlaceholderBarChartProps {
  bars: BarData[];
  yAxisLabel?: string;
  xAxisLabel?: string;
  height?: number;
}

export default function PlaceholderBarChart({
  bars,
  yAxisLabel = "[Y-AXIS LABEL]",
  xAxisLabel = "[X-AXIS LABEL]",
  height = 320,
}: PlaceholderBarChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="w-full" style={{ height }}>
      <div className="flex h-full">
        {/* Y-Axis */}
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

        {/* Chart area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-end gap-3 sm:gap-6 border-l-2 border-b-2 border-current/15 pl-2 pb-0">
            {bars.map((bar, i) => (
              <div
                key={bar.label}
                className="flex-1 flex flex-col items-center justify-end h-full"
              >
                <motion.div
                  className="w-full max-w-[72px] rounded-t-sm"
                  style={{ backgroundColor: bar.color }}
                  initial={{ height: 0 }}
                  animate={
                    isInView
                      ? { height: `${bar.heightPercent}%` }
                      : { height: 0 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                />
              </div>
            ))}
          </div>

          {/* X-axis labels — rotate on mobile so country names don't collide */}
          <div className="flex gap-2 sm:gap-6 pl-2 pt-2 sm:pt-3 min-h-[60px] sm:min-h-0">
            {bars.map((bar) => (
              <div
                key={bar.label}
                className="flex-1 flex items-start justify-center"
              >
                <span className="font-body text-current/60 leading-tight text-[9px] sm:text-xs origin-top-left rotate-[-35deg] sm:rotate-0 whitespace-nowrap sm:whitespace-normal sm:text-center translate-y-1 sm:translate-y-0">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center text-[10px] font-body text-current/50 mt-1 tracking-wide">
            {xAxisLabel}
          </div>
        </div>
      </div>
    </div>
  );
}
