"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderBarChart from "@/components/charts/PlaceholderBarChart";

export default function FundingImpactSection() {
  return (
    <section className="relative py-32 sm:py-40 bg-background overflow-hidden">
      {/* Offset accent block */}
      <div className="absolute left-0 top-1/4 w-24 sm:w-40 h-[60%] bg-accent/[0.06]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Sticky left label */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <span className="placeholder-badge mb-6 block w-fit">
                Section 06
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl text-primary leading-tight mb-6">
                Funding &amp; Cost Impact
              </h2>
              <p className="font-body text-body/60 text-base leading-relaxed mb-8">
                Passenger rail is public infrastructure. No country in
                the world runs it without subsidy, and every dollar the
                U.S. invests returns five to six in economic value.
              </p>
              <div className="w-16 h-px bg-accent" />
            </ScrollReveal>
          </div>

          {/* Right content column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Empire Builder case study */}
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-primary/10 p-6">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-body/40 mb-4 block">
                    Federal Cost
                  </span>
                  <p className="font-heading text-5xl text-primary mb-2">
                    $57M
                  </p>
                  <p className="font-body text-sm text-body/55 leading-relaxed">
                    Annual subsidy to operate Amtrak’s Empire Builder line,
                    connecting eight states across the northern U.S.
                  </p>
                </div>

                <div className="border border-accent/30 bg-accent/[0.04] p-6">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-accent mb-4 block">
                    Economic Return
                  </span>
                  <p className="font-heading text-5xl text-accent mb-2">
                    $326.7M
                  </p>
                  <p className="font-body text-sm text-body/70 leading-relaxed">
                    Combined annual economic activity across those same
                    eight states. A <span className="text-primary font-medium">5–6× return</span>{" "}
                    on every taxpayer dollar spent.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Return-on-investment chart */}
            <ScrollReveal delay={0.25}>
              <div className="bg-primary/[0.02] border border-primary/8 p-6 sm:p-8">
                <h3 className="font-heading text-lg text-primary mb-1">
                  Empire Builder: Cost vs. Economic Return
                </h3>
                <p className="font-body text-body/55 text-xs mb-8">
                  Annual federal operating subsidy compared to combined
                  economic activity generated across the 8 states served.
                </p>
                <PlaceholderBarChart
                  bars={[
                    { label: "Federal subsidy ($57M)", heightPercent: 17, color: "#1B3022" },
                    { label: "Economic return ($326.7M)", heightPercent: 100, color: "#D4AF37" },
                  ]}
                  yAxisLabel="Millions of USD (annual)"
                  xAxisLabel="Empire Builder route"
                  height={280}
                />
              </div>
            </ScrollReveal>

            {/* Subsidy-by-mode comparison */}
            <ScrollReveal delay={0.3}>
              <div className="bg-primary/[0.02] border border-primary/8 p-6 sm:p-8">
                <h3 className="font-heading text-lg text-primary mb-1">
                  Amtrak is America&rsquo;s least-subsidized mode of travel.
                </h3>
                <p className="font-body text-body/55 text-xs mb-8">
                  Annual U.S. federal subsidy (revenue minus expenditure)
                  by transportation mode, in billions of dollars.
                </p>
                <PlaceholderBarChart
                  bars={[
                    { label: "Highways", heightPercent: 100, color: "#1B3022" },
                    { label: "Public transit", heightPercent: 77, color: "#1B3022" },
                    { label: "Air travel", heightPercent: 23, color: "#1B3022" },
                    { label: "Amtrak", heightPercent: 4, color: "#D4AF37" },
                  ]}
                  yAxisLabel="Billions of USD (annual subsidy)"
                  xAxisLabel="Transportation mode"
                  height={280}
                />
                <p className="font-body text-body/55 text-sm leading-relaxed mt-6">
                  Amtrak receives roughly <span className="text-primary font-medium">$3.5 billion</span>{" "}
                  a year. That’s less than a sixth of what the airline
                  industry receives, and a fraction of highway spending.
                  But it’s the only mode regularly asked to break even.
                </p>
              </div>
            </ScrollReveal>

            {/* Pull quote */}
            <ScrollReveal delay={0.4}>
              <blockquote className="border-l-4 border-accent pl-8 py-4">
                <p className="font-heading text-2xl sm:text-3xl text-primary italic leading-relaxed">
                  &ldquo;Don&rsquo;t focus on profits. Focus on value.&rdquo;
                </p>
                <footer className="mt-4 font-body text-xs text-body/55 tracking-wide">
                  — Jim Mathews, Rail Passengers Association
                </footer>
              </blockquote>
            </ScrollReveal>

            {/* Transition to community */}
            <ScrollReveal delay={0.5}>
              <p className="font-body text-body/65 text-base leading-relaxed max-w-2xl">
                That value shows up somewhere specific: in the
                communities these trains serve.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
