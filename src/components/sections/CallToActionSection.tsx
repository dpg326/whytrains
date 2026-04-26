"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function CallToActionSection() {
  return (
    <section className="relative py-32 sm:py-40 bg-accent overflow-hidden">
      {/* Converging lines */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={i * 130}
              y1="0"
              x2="720"
              y2="600"
              stroke="#1B3022"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="inline-block px-3 py-1 border border-dashed border-primary/30 text-primary/60 font-body text-xs uppercase tracking-widest mb-8">
            Section 10
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-tight mb-8">
            Tell Congress to support American rail.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-primary/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Five minutes on the phone with your representative is the
            single most effective thing you can do. Find your member of
            Congress and ask them to fund Amtrak, electrify our tracks,
            and build the network this country needs.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://www.house.gov/representatives/find-your-representative"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-primary text-background font-body text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
            >
              Find your representative
            </motion.a>
            <motion.a
              href="https://www.senate.gov/senators/senators-contact.htm"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-primary text-primary font-body text-sm tracking-wider uppercase hover:bg-primary/5 transition-colors"
            >
              Find your senators
            </motion.a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-20 pt-12 border-t border-primary/20 text-left">
            <p className="font-body text-[11px] uppercase tracking-[0.25em] text-primary/60 mb-6 text-center">
              What to say
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Fund Amtrak fully.",
                  body: "Amtrak is the least-subsidized mode of U.S. transportation and the only one regularly asked to break even. That standard makes no sense.",
                },
                {
                  title: "Electrify the network.",
                  body: "Less than 1% of U.S. track is electrified. The world average is 31%. Electrification cuts emissions, costs, and maintenance.",
                },
                {
                  title: "Connect underserved regions.",
                  body: "The Lehigh Valley, Gulf Coast, and dozens of other corridors have no passenger rail. Restoring them closes real gaps in the country.",
                },
                {
                  title: "Treat rail as public infrastructure.",
                  body: "We don’t ask highways or airports to turn a profit. Rail returns five to six dollars for every public dollar invested. Fund it like we mean it.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-primary/[0.04] border border-primary/15 p-5"
                >
                  <h3 className="font-heading text-base text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-primary/70 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-body text-primary/50 text-xs leading-relaxed mt-8 text-center max-w-2xl mx-auto">
              Sample script: <span className="italic">“Hi, I’m a constituent
              from [ZIP code]. I’m calling to ask [Representative/Senator
              name] to support full funding for Amtrak and federal
              investment in passenger-rail electrification. Thank you.”</span>
            </p>
          </div>
        </ScrollReveal>

        {/* Footer mark */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16">
            <p className="font-heading text-xl text-primary/30 italic">
              WhyTrains
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
