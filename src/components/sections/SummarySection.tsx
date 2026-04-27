"use client";

import ScrollReveal from "@/components/ScrollReveal";

const points = [
  {
    number: "01",
    title: "Dirtier trains",
    stat: "0.93%",
    statLabel: "of U.S. rail track is electrified",
    body: "Transportation is responsible for 29% of U.S. greenhouse gas emissions. Rail produces just 2% of that, but only when it runs on electricity. The world average for electrified track is 31%. The EU averages 57%. Switzerland and India are at or near 100%. Most American trains still burn diesel.",
  },
  {
    number: "02",
    title: "Slower trains",
    stat: "5 hrs",
    statLabel: "longer than driving, NYC to Atlanta by Amtrak",
    body: "On comparable distances in the U.K. and Japan, trains beat cars by 50 to 63 percent. In the U.S., they often lose. The longest Japanese route still saves nine hours over driving.",
  },
  {
    number: "03",
    title: "Underfunded trains",
    stat: "$3.5B",
    statLabel: "annual Amtrak subsidy",
    body: "That is less than a sixth of what airlines receive and a fraction of highway spending. Yet Amtrak is the only mode regularly asked to break even. No country in the world runs passenger rail without subsidy.",
  },
  {
    number: "04",
    title: "Missing trains",
    stat: "700k",
    statLabel: "people in the Lehigh Valley with no passenger rail",
    body: "Pennsylvania's third-largest metro sits between two of the busiest rail markets in the country. Its line was discontinued in 1984. Dozens of similar corridors have no service at all, forcing residents into cars and feeding decades of suburban sprawl.",
  },
  {
    number: "05",
    title: "Undervalued trains",
    stat: "5–6×",
    statLabel: "return on every dollar invested in rail",
    body: "Amtrak's Empire Builder costs $57 million a year and generates $326.7 million in economic activity across eight states. Rail builds walkable communities, supports jobs, and protects farmland and open space by concentrating growth around stations instead of highways.",
  },
];

export default function SummarySection() {
  return (
    <section className="relative py-32 sm:py-40 bg-background overflow-hidden">
      {/* Subtle accent column on the left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <span className="placeholder-badge mb-6 inline-block">
              Section 09
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary leading-tight mb-6">
              Five reasons America has to catch up.
            </h2>
            <p className="font-body text-body/65 text-base leading-relaxed">
              The U.S. invented modern passenger rail and then walked
              away from it. The rest of the world kept building. Here is
              what the gap looks like, what it costs us, and what it
              costs the climate.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-px bg-primary/10">
          {points.map((p, i) => (
            <ScrollReveal key={p.number} delay={i * 0.1}>
              <div className="bg-background grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 p-6 sm:p-8 md:p-10 items-start">
                {/* Number + title + stat side-by-side on mobile */}
                <div className="md:col-span-3 flex items-baseline justify-between md:block gap-4">
                  <div>
                    <p className="font-body text-[11px] tracking-[0.25em] uppercase text-accent mb-2 md:mb-3">
                      {p.number}
                    </p>
                    <h3 className="font-heading text-xl sm:text-2xl text-primary leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  {/* Mobile-only inline stat */}
                  <p className="md:hidden font-heading text-3xl text-accent leading-none shrink-0">
                    {p.stat}
                  </p>
                </div>

                {/* Stat (desktop only) */}
                <div className="hidden md:block md:col-span-3 md:border-l md:border-primary/10 md:pl-6">
                  <p className="font-heading text-4xl sm:text-5xl text-accent mb-2 leading-none">
                    {p.stat}
                  </p>
                  <p className="font-body text-body/55 text-xs leading-snug">
                    {p.statLabel}
                  </p>
                </div>

                {/* Stat label (mobile only) */}
                <p className="md:hidden font-body text-body/55 text-xs leading-snug -mt-2">
                  {p.statLabel}
                </p>

                {/* Body */}
                <div className="md:col-span-6">
                  <p className="font-body text-body/70 text-sm sm:text-base leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing line */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 max-w-3xl">
            <p className="font-heading text-2xl sm:text-3xl text-primary leading-relaxed">
              We don't have to accept dirtier, slower, thinner rail.
              Funding, electrification, and the political will to treat
              trains as public infrastructure are how we cut transport
              emissions, curb sprawl, and build a country that works for
              the next century.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
