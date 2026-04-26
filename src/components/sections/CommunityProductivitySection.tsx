"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function CommunityProductivitySection() {
  return (
    <section className="relative py-32 sm:py-40 bg-primary overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.03] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="inline-block px-3 py-1 border border-dashed border-accent/40 text-accent font-body text-xs uppercase tracking-widest mb-6">
              Section 07
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-background leading-tight">
              Community &amp; Productivity
            </h2>
          </div>
        </ScrollReveal>

        {/* Asymmetric staggered layout */}
        <div className="space-y-24">
          {/* Community block — left-aligned large */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-background/[0.06] border border-background/10 p-8 sm:p-12">
                <span className="font-body text-[10px] uppercase tracking-[0.25em] text-accent/60 mb-4 block">
                  Hub-Centered Design
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl text-background mb-6">
                  Every stop is a lifeline.
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <p className="font-body text-background/65 text-sm leading-relaxed">
                    Rail connects small towns to the national economy in
                    ways highways can’t. Last year, just 2,400 passengers
                    stepping off Amtrak’s Empire Builder in Cut Bank,
                    Montana generated $378,725 in local economic activity.
                  </p>
                  <p className="font-body text-background/65 text-sm leading-relaxed">
                    Scaled across Montana, that one train delivered a
                    $36.6 million boost. Even Idaho, which has a single
                    stop, gains $2.3 million in annual benefit.
                  </p>
                </div>

              </div>

              {/* Side metrics */}
              <div className="flex flex-col gap-6">
                {[
                  {
                    val: "20%",
                    label: "Of U.S. GDP flows along the Northeast Corridor alone",
                  },
                  {
                    val: "$326.7M",
                    label: "Annual economic activity across 8 states served by the Empire Builder",
                  },
                  {
                    val: "5–6×",
                    label: "Return on every taxpayer dollar invested in passenger rail",
                  },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex-1 border border-background/10 p-6 flex flex-col justify-center"
                  >
                    <p className="font-heading text-3xl text-accent mb-2">
                      {m.val}
                    </p>
                    <p className="font-body text-background/65 text-xs leading-snug">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Fresno case study block */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Stats column */}
              <div className="order-2 lg:order-1 flex flex-col justify-center">
                <div>
                  <p className="font-heading text-6xl text-accent mb-3">
                    $300M+
                  </p>
                  <p className="font-body text-background/65 text-sm leading-relaxed">
                    Committed to revitalize downtown Fresno around the
                    future California High-Speed Rail station.
                  </p>
                </div>
              </div>

              {/* Content block */}
              <div className="order-1 lg:order-2 lg:col-span-2 bg-accent/[0.06] border border-accent/15 p-8 sm:p-12">
                <span className="font-body text-[10px] uppercase tracking-[0.25em] text-accent/60 mb-4 block">
                  Case Study — Fresno, California
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl text-background mb-6">
                  A station can revive a downtown before the first train arrives.
                </h3>
                <p className="font-body text-background/70 text-sm leading-relaxed">
                  Fresno is putting over $300 million into infrastructure,
                  affordable housing, and green space within walking
                  distance of its planned High-Speed Rail station. City
                  leaders say the project has reversed decades of
                  disinvestment and suburban sprawl, drawing in private
                  developers and reshaping the downtown core.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* HSR growth principles */}
          <ScrollReveal delay={0.25}>
            <div>
              <div className="mb-10 max-w-2xl">
                <span className="font-body text-[10px] uppercase tracking-[0.25em] text-accent/60 mb-4 block">
                  How Rail Reshapes Growth
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl text-background leading-tight">
                  Fast, reliable rail changes how cities grow.
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10">
                {[
                  {
                    title: "Revitalizes urban centers",
                    body: "Stations anchor investment in city cores, attracting residents, businesses, and amenities.",
                  },
                  {
                    title: "Reduces sprawl",
                    body: "A reliable alternative to driving cuts the need for endless highway expansion and low-density development.",
                  },
                  {
                    title: "Promotes walkability",
                    body: "Rail-connected neighborhoods are built around people, making it easier to walk and bike to local services.",
                  },
                  {
                    title: "Enables transit-oriented development",
                    body: "Housing, retail, and office space cluster around stations in compact, efficient footprints.",
                  },
                  {
                    title: "Protects green space",
                    body: "Concentrated growth eases pressure on farmland, forests, and natural resources.",
                  },
                  {
                    title: "Lowers emissions",
                    body: "Denser, transit-centered communities drive less and emit less per person than sprawling ones.",
                  },
                ].map((p) => (
                  <div key={p.title} className="bg-primary p-6 sm:p-8">
                    <h4 className="font-heading text-lg text-accent mb-3">
                      {p.title}
                    </h4>
                    <p className="font-body text-background/65 text-sm leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-body text-background/40 text-xs mt-6 tracking-wide">
                Source: High Speed Rail Alliance
              </p>
            </div>
          </ScrollReveal>

          {/* Closing "value, not profit" */}
          <ScrollReveal delay={0.3}>
            <div className="border-l-2 border-accent pl-6 max-w-3xl">
              <p className="font-heading text-xl sm:text-2xl text-background/90 leading-relaxed">
                We don&rsquo;t ask highways, airports, or the military to
                turn a profit. Passenger rail is the same kind of public
                investment. It builds communities, supports jobs, and
                keeps small-town America connected to the rest of the
                economy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
