"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function SystemsVisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Approximate geographic positions on the canvas (lower-left = south,
  // upper-right = northeast).
  const nodes = [
    { x: 22, y: 82, label: "Philadelphia", sub: "PA" },     // 0
    { x: 30, y: 30, label: "Allentown", sub: "Lehigh Valley" }, // 1
    { x: 85, y: 18, label: "New York City", sub: "NY" },   // 2
  ];

  // Connections: [from, to, miles, hsrMinutes]
  // HSR times estimated from Amtrak Acela Nextgen max speed of 160 mph,
  // assuming an average corridor speed of ~105 mph including one
  // mid-route station dwell.
  const segments = [
    { from: 0, to: 1, miles: 60, hsr: 35 },
    { from: 1, to: 2, miles: 90, hsr: 50 },
  ];

  return (
    <section className="relative py-32 sm:py-48 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <span className="placeholder-badge mb-6 inline-block">
              Section 08
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary leading-tight mb-6">
              What if Allentown had a train?
            </h2>
            <p className="font-body text-body/65 text-base leading-relaxed mb-3">
              The Lehigh Valley is the third-largest metro area in
              Pennsylvania, with about 700,000 people. It sits almost
              exactly between Philadelphia and New York City, two of the
              busiest rail markets in the country.
            </p>
            <p className="font-body text-body/65 text-base leading-relaxed">
              And yet Allentown has no passenger rail service at all.
              The Central Railroad of New Jersey ran its last train from
              Allentown to Jersey City on April 29, 1967 under the
              Aldene Plan. A short-lived PUC-mandated shuttle to Easton
              ended that September. Today the only way between these
              cities is a car or a slow intercity bus.
            </p>
          </div>
        </ScrollReveal>

        {/* Large network visualization */}
        <ScrollReveal delay={0.15}>
          <div
            ref={ref}
            className="w-full aspect-[4/5] sm:aspect-[16/9] bg-primary rounded-sm relative overflow-hidden"
          >
            {/* Grid background */}
            <div className="absolute inset-0 opacity-[0.06]">
              <svg className="w-full h-full">
                {Array.from({ length: 20 }).map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={`${(i + 1) * 5}%`}
                    x2="100%"
                    y2={`${(i + 1) * 5}%`}
                    stroke="#FAF9F6"
                    strokeWidth="0.5"
                  />
                ))}
                {Array.from({ length: 20 }).map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={`${(i + 1) * 5}%`}
                    y1="0"
                    x2={`${(i + 1) * 5}%`}
                    y2="100%"
                    stroke="#FAF9F6"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
            </div>

            {/* Compass */}
            <div className="absolute top-4 right-4 text-background/30 font-body text-[10px] uppercase tracking-widest">
              N ↑
            </div>
            <div className="absolute bottom-4 left-4 text-background/30 font-body text-[10px] uppercase tracking-widest">
              Proposed High-Speed Rail Corridor
            </div>

            {/* Network graph */}
            <svg className="absolute inset-0 w-full h-full">
              {/* Connection lines */}
              {segments.map((seg, i) => (
                <motion.line
                  key={`conn-${i}`}
                  x1={`${nodes[seg.from].x}%`}
                  y1={`${nodes[seg.from].y}%`}
                  x2={`${nodes[seg.to].x}%`}
                  y2={`${nodes[seg.to].y}%`}
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  opacity={0.85}
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{
                    duration: 1.4,
                    delay: 0.4 + i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Segment time labels */}
              {segments.map((seg, i) => {
                const midX = (nodes[seg.from].x + nodes[seg.to].x) / 2;
                const midY = (nodes[seg.from].y + nodes[seg.to].y) / 2;
                return (
                  <motion.g
                    key={`label-${i}`}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + i * 0.4 }}
                  >
                    <rect
                      x={`${midX - 7}%`}
                      y={`${midY - 4}%`}
                      width="14%"
                      height="8%"
                      fill="#1B3022"
                      stroke="#D4AF37"
                      strokeWidth="0.5"
                      rx="2"
                    />
                    <text
                      x={`${midX}%`}
                      y={`${midY - 0.5}%`}
                      textAnchor="middle"
                      fill="#D4AF37"
                      fontSize="11"
                      fontFamily="Cormorant Garamond, serif"
                      fontWeight="600"
                    >
                      {seg.hsr} min
                    </text>
                    <text
                      x={`${midX}%`}
                      y={`${midY + 2.5}%`}
                      textAnchor="middle"
                      fill="#FAF9F6"
                      fontSize="8"
                      fontFamily="Montserrat, sans-serif"
                      opacity={0.55}
                    >
                      {seg.miles} mi
                    </text>
                  </motion.g>
                );
              })}

              {/* Node circles */}
              {nodes.map((node, i) => (
                <motion.g key={`node-${i}`}>
                  <motion.circle
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r={i === 1 ? 11 : 9}
                    fill={i === 1 ? "#D4AF37" : "#1B3022"}
                    stroke="#D4AF37"
                    strokeWidth={i === 1 ? 0 : 2}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      isInView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.2,
                      ease: "backOut",
                    }}
                  />
                  <motion.text
                    x={`${node.x}%`}
                    y={`${node.y - 5}%`}
                    textAnchor="middle"
                    fill="#FAF9F6"
                    fontSize="13"
                    fontFamily="Cormorant Garamond, serif"
                    fontWeight="600"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.2 }}
                  >
                    {node.label}
                  </motion.text>
                  <motion.text
                    x={`${node.x}%`}
                    y={`${node.y + 7}%`}
                    textAnchor="middle"
                    fill="#FAF9F6"
                    fontSize="9"
                    fontFamily="Montserrat, sans-serif"
                    opacity={0.5}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
                  >
                    {node.sub}
                  </motion.text>
                </motion.g>
              ))}
            </svg>
          </div>
        </ScrollReveal>

        {/* Travel time comparison */}
        <ScrollReveal delay={0.25}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10">
            {[
              {
                title: "Philadelphia → Allentown",
                miles: "60 miles",
                car: "1 hr 15 min",
                bus: "1 hr 40 min",
                hsr: "~35 min*",
                save: "40 min faster than driving",
              },
              {
                title: "Allentown → New York",
                miles: "90 miles",
                car: "1 hr 45 min",
                bus: "2 hr 10 min",
                hsr: "~50 min*",
                save: "55 min faster than driving",
              },
              {
                title: "Philadelphia → New York",
                miles: "95 miles",
                car: "2 hr 0 min",
                bus: "2 hr 15 min",
                hsr: "~1 hr 30 min*",
                save: "Comparable to existing Acela",
              },
            ].map((row) => (
              <div key={row.title} className="bg-background p-6 sm:p-8">
                <h3 className="font-heading text-lg text-primary mb-1">
                  {row.title}
                </h3>
                <p className="font-body text-body/45 text-xs mb-6">
                  {row.miles}
                </p>
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-sm">
                    <span className="font-body text-body/55">Car</span>
                    <span className="font-body text-body/70">{row.car}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-body text-body/55">Bus</span>
                    <span className="font-body text-body/70">{row.bus}</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t border-primary/10">
                    <span className="font-body text-accent">HSR</span>
                    <span className="font-heading text-accent text-base">
                      {row.hsr}
                    </span>
                  </div>
                </div>
                <p className="font-body text-body/55 text-xs leading-snug">
                  {row.save}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Methodology / sources footnote */}
        <ScrollReveal delay={0.3}>
          <p className="mt-6 font-body text-body/45 text-xs leading-relaxed max-w-4xl">
            * HSR estimates based on Amtrak Acela Nextgen maximum speed of
            160 mph, assuming an average corridor speed of roughly 105
            mph including one intermediate stop. Sources:{" "}
            <a
              href="https://www.amtrak.com/nextgen-acela"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-accent"
            >
              Amtrak Nextgen Acela
            </a>
            ;{" "}
            <a
              href="https://trpmagazine.com/the-allentown-triangle/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-accent"
            >
              The Allentown Triangle, TRP Magazine
            </a>
            .
          </p>
        </ScrollReveal>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "A regional gap closed",
              desc: "700,000 Lehigh Valley residents would gain direct rail access to two of the largest job markets in the country, including Wall Street, Center City, and Manhattan medical and tech hubs.",
            },
            {
              title: "Cars off two highways",
              desc: "I-78 and the Northeast Extension carry tens of thousands of vehicles daily between these cities. A 60-minute train ride takes pressure off both, cutting congestion, crashes, and emissions.",
            },
            {
              title: "A model for the rest of the U.S.",
              desc: "This corridor is short, dense, and already economically integrated. If high-speed rail can’t work here, it can’t work anywhere. If it does, dozens of other U.S. corridors look just like it.",
            },
          ].map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={0.3 + i * 0.1}>
              <div className="border-t-2 border-accent pt-6">
                <h3 className="font-heading text-lg text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="font-body text-body/55 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
