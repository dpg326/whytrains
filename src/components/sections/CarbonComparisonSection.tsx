"use client";

import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderBarChart from "@/components/charts/PlaceholderBarChart";
import PlaceholderDonut from "@/components/charts/PlaceholderDonut";

export default function CarbonComparisonSection() {
  return (
    <section className="relative py-32 sm:py-40 bg-primary text-background overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, #FAF9F6 40px, #FAF9F6 41px)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-xl mb-20">
            <span className="inline-block px-3 py-1 border border-dashed border-accent/40 text-accent font-body text-xs uppercase tracking-widest mb-6">
              Section 03
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-background leading-tight mb-6">
              Carbon &amp; Sustainability
            </h2>
            <p className="font-body text-background/50 text-base leading-relaxed">
              In 2022, transportation accounted for 29% of total U.S.
              greenhouse gas emissions. Rail was responsible for just 2%
              of that, despite carrying a large share of the country’s
              freight.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bar chart */}
          <ScrollReveal delay={0.15}>
            <div className="bg-background/[0.06] backdrop-blur-sm border border-background/10 p-6 sm:p-8 rounded-sm">
              <h3 className="font-heading text-xl text-background/80 mb-2">
                CO₂ Emissions per Passenger-Mile by Mode
              </h3>
              <p className="font-body text-background/50 text-xs mb-8 tracking-wide">
                UK Government data (2022). Investment in electrified rail in the
                U.S. could achieve similar carbon intensity.
              </p>
              <PlaceholderBarChart
                bars={[
                  {
                    label: "National Rail (56g)",
                    heightPercent: 14,
                    color: "#D4AF37",
                  },
                  {
                    label: "Bus (156g)",
                    heightPercent: 39,
                    color: "rgba(250,249,246,0.5)",
                  },
                  {
                    label: "Petrol Car (274g)",
                    heightPercent: 69,
                    color: "rgba(250,249,246,0.35)",
                  },
                  {
                    label: "Domestic Flight (396g)",
                    heightPercent: 100,
                    color: "rgba(250,249,246,0.2)",
                  },
                ]}
                yAxisLabel="gCO₂e per passenger-mile"
                xAxisLabel="Travel Mode (UK data, 2022)"
                height={300}
              />
            </div>
          </ScrollReveal>

          {/* Donut + metrics */}
          <div className="space-y-10">
            <ScrollReveal delay={0.25}>
              <div className="flex justify-center">
                <PlaceholderDonut
                  segments={[
                    { label: "Light-duty trucks", percent: 37, color: "rgba(250,249,246,0.6)" },
                    {
                      label: "Med/heavy trucks",
                      percent: 23,
                      color: "rgba(250,249,246,0.35)",
                    },
                    {
                      label: "Passenger cars",
                      percent: 20,
                      color: "rgba(250,249,246,0.2)",
                    },
                    {
                      label: "Aircraft",
                      percent: 9,
                      color: "rgba(250,249,246,0.12)",
                    },
                    {
                      label: "Other (pipe, ship)",
                      percent: 7,
                      color: "rgba(250,249,246,0.07)",
                    },
                    { label: "Rail", percent: 2, color: "#D4AF37" },
                  ]}
                  title="U.S. Transportation GHG Emissions by Source (2022)"
                  size={220}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "29%", desc: "Transportation share of U.S. direct GHG emissions" },
                  { value: "19%", desc: "Increase in transport fossil fuel emissions, 1990–2022" },
                  { value: "47%", desc: "Growth in light-duty vehicle miles traveled, 1990–2022" },
                  { value: "2%", desc: "Rail’s share of all transportation emissions" },
                ].map((metric) => (
                  <div
                    key={metric.desc}
                    className="border border-background/10 p-4"
                  >
                    <p className="font-heading text-2xl text-accent mb-1">
                      {metric.value}
                    </p>
                    <p className="font-body text-background/60 text-[11px] leading-snug">
                      {metric.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Transition to electrification */}
        <ScrollReveal delay={0.4}>
          <div className="mt-20 border-l-2 border-accent pl-6 max-w-3xl">
            <p className="font-body text-background/70 text-base leading-relaxed">
              And rail already beats every other mode while most American
              trains still run on diesel. Electrify the network and that
              advantage grows even larger.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
