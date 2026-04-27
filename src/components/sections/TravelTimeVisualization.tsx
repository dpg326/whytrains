"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function TravelTimeVisualization() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Times normalized per row (longest mode = 100%)
  const routes = [
    {
      name: "Birmingham, UK → London, UK",
      distance: "118 miles",
      train: { width: 49, time: "1 hr 20 min", price: "$58" },
      car: { width: 100, time: "2 hr 44 min" },
    },
    {
      name: "Philadelphia, PA → Washington, D.C.",
      distance: "139 miles",
      train: { width: 70, time: "1 hr 55 min", price: "$105" },
      car: { width: 100, time: "2 hr 44 min" },
    },
    {
      name: "Tokyo → Hamamatsu, Japan",
      distance: "152 miles",
      train: { width: 36, time: "1 hr 14 min", price: "$29" },
      car: { width: 100, time: "3 hr 24 min" },
    },
    {
      name: "New York, NY → Atlanta, GA",
      distance: "866 miles",
      train: { width: 100, time: "18 hr 43 min", price: "$391" },
      car: { width: 71, time: "13 hr 13 min" },
    },
    {
      name: "Fukuoka → Akita, Japan",
      distance: "892 miles",
      train: { width: 50, time: "9 hr 4 min", price: "$235" },
      car: { width: 100, time: "18 hr 7 min" },
    },
  ];

  return (
    <section className="relative py-32 sm:py-40 bg-primary/[0.04] overflow-hidden">
      {/* Abstract route lines in background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <path d="M 0 400 Q 360 200 720 400 T 1440 400" stroke="#1B3022" fill="none" strokeWidth="2" />
          <path d="M 0 300 Q 480 500 960 300 T 1440 300" stroke="#D4AF37" fill="none" strokeWidth="1" />
          <path d="M 0 500 Q 240 300 720 500 T 1440 500" stroke="#1B3022" fill="none" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-20">
            <span className="placeholder-badge mb-6 block w-fit">Section 05</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
              <div className="lg:col-span-2">
                <h2 className="font-heading text-4xl sm:text-5xl text-primary leading-tight mb-4">
                  Travel Time Modeling
                </h2>
                <p className="font-body text-body/60 text-base leading-relaxed max-w-xl">
                  Comparing driving and train times on similar routes in
                  the U.S., U.K., and Japan. On comparable distances
                  abroad, trains are faster. In the U.S., they usually
                  aren’t.
                </p>
              </div>
              <div className="text-right">
                <p className="font-body text-body/45 text-xs tracking-wider uppercase">
                  Source: Google Maps
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Route comparison strips */}
        <div ref={ref} className="space-y-8">
          {routes.map((route, idx) => {
            const modes = [
              {
                label: "Train",
                width: route.train.width,
                time: route.train.time,
                extra: `Ticket: ${route.train.price}`,
                color: "#D4AF37",
              },
              {
                label: "Car",
                width: route.car.width,
                time: route.car.time,
                extra: null,
                color: "#1B3022",
              },
            ];
            return (
              <ScrollReveal key={route.name} delay={idx * 0.1}>
                <div className="bg-background border border-primary/10 p-6 sm:p-8">
                  <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
                    <h3 className="font-heading text-lg text-primary">{route.name}</h3>
                    <span className="font-body text-xs text-body/45 tracking-wide">
                      {route.distance}
                    </span>
                  </div>

                  <div className="space-y-5 sm:space-y-4">
                    {modes.map((mode) => (
                      <div key={mode.label} className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4">
                        <div className="flex items-baseline justify-between sm:block sm:w-16 sm:text-right">
                          <span className="font-body text-xs text-body/60 shrink-0">
                            {mode.label}
                          </span>
                          {/* On mobile, show time + extra above the bar so they don't get clipped */}
                          <span className="sm:hidden font-body text-[11px] text-body/70">
                            {mode.time}
                            {mode.extra && (
                              <span className="text-body/45"> · {mode.extra}</span>
                            )}
                          </span>
                        </div>
                        <div className="w-full h-9 sm:w-auto sm:flex-1 bg-primary/[0.04] relative overflow-hidden rounded-sm">
                          <motion.div
                            className="absolute left-0 top-0 h-full rounded-sm"
                            style={{ backgroundColor: mode.color }}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${mode.width}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: idx * 0.1 + 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                          />
                          {/* Desktop only: in-bar labels */}
                          <span className="hidden sm:block absolute left-3 top-1/2 -translate-y-1/2 font-body text-[11px] text-background font-medium z-10">
                            {mode.time}
                          </span>
                          {mode.extra && (
                            <span className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 font-body text-[11px] text-body/60 z-10">
                              {mode.extra}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Takeaway block */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 border-l-2 border-accent pl-6 max-w-3xl space-y-4">
            <p className="font-body text-body/70 text-base leading-relaxed">
              On short and mid-range routes in the U.K. and Japan, trains
              beat cars by <span className="text-primary font-medium">50–63%</span>.
              On the longest Japanese route, the train still saves{" "}
              <span className="text-primary font-medium">nine hours</span>.
              But NYC to Atlanta by train takes{" "}
              <span className="text-primary font-medium">five hours longer than driving</span>,
              the result of decades of underinvestment in U.S. passenger rail.
            </p>
            <p className="font-body text-body/60 text-base leading-relaxed">
              Amtrak gets little public funding and is pressured to turn
              an operating profit no other mode has to deliver. So it
              ends up slower, pricier, and covers less of the country
              than rail networks abroad.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
