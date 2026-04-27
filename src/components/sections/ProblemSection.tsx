"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProblemSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 0.85", "end 0.2"],
  });
  // Drives the SVG mask that reveals the railroad from top to bottom
  const maskHeight = useTransform(scrollYProgress, [0, 1], [0, 80]);
  // Y position of the moving train-head dot (in viewBox units, 0-75)
  const headY = useTransform(scrollYProgress, [0, 1], [-2, 78]);
  return (
    <section className="relative py-32 sm:py-40 bg-background overflow-hidden">
      {/* Diagonal accent stripe */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.03] -skew-x-12 origin-top-right" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <span className="placeholder-badge mb-6 block w-fit">
            Section 02
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left column — text heavy */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-4xl sm:text-5xl text-primary leading-tight mb-8">
                The Problem
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-6">
                  <p className="font-body text-body/50 text-base leading-relaxed">
                    Transportation is the largest contributor of U.S.
                    greenhouse gas emissions at 29%. From 1990 to 2022,
                    total transportation emissions from fossil fuel
                    combustion increased by 19%.
                  </p>
                </div>
                <div className="border-l-2 border-primary/10 pl-6">
                  <p className="font-body text-body/50 text-base leading-relaxed">
                    The largest sources of transportation greenhouse gas
                    emissions in 2022 were light-duty trucks (37%),
                    medium- and heavy-duty trucks (23%), and passenger cars
                    (20%). Rail accounted for just 2%.
                  </p>
                </div>
                <div className="border-l-2 border-primary/10 pl-6">
                  <p className="font-body text-body/50 text-base leading-relaxed">
                    Vehicle miles traveled by light-duty motor vehicles
                    increased by 47% from 1990 to 2022, driven by population
                    growth, economic growth, urban sprawl, and periods of low
                    fuel prices.
                  </p>
                </div>
                <div className="border-l-2 border-primary/10 pl-6">
                  <p className="font-body text-body/50 text-base leading-relaxed">
                    Fossil fuels are the source of 74% of total U.S.
                    greenhouse gas emissions and 93% of all U.S. CO₂.
                    Atmospheric CO₂ in 2022 was about 1.5 times higher
                    than in 1850, and the IPCC concludes human influence
                    on warming is unequivocal.{" "}
                    <a
                      href="https://www.eia.gov/energyexplained/energy-and-the-environment/greenhouse-gases-and-the-climate.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/80 underline underline-offset-2 hover:text-accent"
                    >
                      U.S. Energy Information Administration
                    </a>
                    .
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — visual */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.3} direction="right">
              <div className="relative">
                {/* Hero image: Houston 610/59 "Spaghetti Bowl" interchange */}
                <div
                  ref={imageRef}
                  className="relative w-full aspect-[4/3] overflow-hidden bg-primary"
                >
                  <img
                    src="/spaghetti-bowl.jpg"
                    alt="Aerial view of the Houston 610 and 59 highway interchange, known as the Spaghetti Bowl"
                    className="w-full h-full object-cover"
                    style={{
                      filter:
                        "grayscale(35%) sepia(12%) contrast(1.05) brightness(0.92) saturate(0.85)",
                    }}
                  />
                  {/* Tonal overlay to match site palette */}
                  <div className="absolute inset-0 bg-primary/15 mix-blend-multiply pointer-events-none" />

                  {/* Scroll-driven vertical railroad cutting down the image */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 75"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <mask id="railroad-reveal">
                        <motion.rect
                          x="0"
                          y="-2"
                          width="100"
                          fill="white"
                          style={{ height: maskHeight }}
                        />
                      </mask>
                      <filter id="rail-glow">
                        <feGaussianBlur stdDeviation="0.6" />
                      </filter>
                    </defs>

                    <g mask="url(#railroad-reveal)">
                      {/* Outer glow ballast */}
                      <rect
                        x="45"
                        y="-2"
                        width="10"
                        height="80"
                        fill="#D4AF37"
                        opacity="0.08"
                      />

                      {/* Two parallel rails */}
                      <line
                        x1="48.4"
                        y1="-2"
                        x2="48.4"
                        y2="78"
                        stroke="#D4AF37"
                        strokeWidth="0.45"
                      />
                      <line
                        x1="51.6"
                        y1="-2"
                        x2="51.6"
                        y2="78"
                        stroke="#D4AF37"
                        strokeWidth="0.45"
                      />

                      {/* Crossties (sleepers) */}
                      {Array.from({ length: 18 }).map((_, i) => {
                        const y = -1 + i * 4.5;
                        return (
                          <line
                            key={`tie-${i}`}
                            x1="46"
                            y1={y}
                            x2="54"
                            y2={y}
                            stroke="#D4AF37"
                            strokeWidth="0.9"
                            strokeLinecap="round"
                            opacity="0.85"
                          />
                        );
                      })}

                      {/* Spike accents on every fourth tie */}
                      {Array.from({ length: 5 }).map((_, i) => {
                        const y = 4 + i * 16;
                        return (
                          <g key={`spike-${i}`}>
                            <circle cx="47" cy={y} r="0.45" fill="#D4AF37" />
                            <circle cx="53" cy={y} r="0.45" fill="#D4AF37" />
                          </g>
                        );
                      })}
                    </g>

                    {/* Train head: glow halo + bright core */}
                    <motion.circle
                      cx="50"
                      r="3"
                      fill="#D4AF37"
                      opacity="0.35"
                      filter="url(#rail-glow)"
                      style={{ cy: headY }}
                    />
                    <motion.circle
                      cx="50"
                      r="1.4"
                      fill="#D4AF37"
                      style={{ cy: headY }}
                    />
                  </svg>
                </div>

                {/* Floating annotation boxes — keep inside container on mobile */}
                <div className="absolute bottom-3 left-3 sm:-bottom-6 sm:-left-8 bg-primary text-background px-3 py-2 sm:px-4 sm:py-3 max-w-[180px] sm:max-w-[200px] z-10">
                  <p className="font-body text-[10px] sm:text-[11px] leading-snug tracking-wide">
                    29% of U.S. direct greenhouse gas emissions come from transportation
                  </p>
                </div>

                <div className="absolute top-3 right-3 sm:-top-4 sm:-right-6 border border-accent bg-background px-2.5 py-1.5 sm:px-3 sm:py-2 max-w-[180px] sm:max-w-none z-10">
                  <p className="font-body text-[10px] sm:text-[11px] text-accent tracking-wide leading-snug">
                    Rail: only 2% of transport emissions
                  </p>
                </div>
              </div>

              {/* Photo credit */}
              <p className="mt-8 font-body text-[10px] text-body/40 leading-relaxed tracking-wide">
                The Houston 610 / 59 interchange, known locally as the
                Spaghetti Bowl. Photo: @jchen.ys, via POST Houston.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
