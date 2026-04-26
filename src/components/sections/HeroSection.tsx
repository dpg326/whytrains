"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Abstract rail line SVG background */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          {[120, 240, 360, 480, 600, 720].map((y, i) => (
            <motion.line
              key={y}
              x1="-100"
              y1={y}
              x2="1540"
              y2={y + (i % 2 === 0 ? 40 : -40)}
              stroke="#D4AF37"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: i * 0.2, ease: "easeInOut" }}
            />
          ))}
          {/* Cross ties */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.line
              key={`tie-${i}`}
              x1={i * 50}
              y1="0"
              x2={i * 50}
              y2="900"
              stroke="#FAF9F6"
              strokeWidth="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.05 }}
            />
          ))}
        </svg>
      </div>

      {/* Hero background image with green tint */}
      <motion.div
        className="absolute inset-0 z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <Image
          src="/hero-historic.jpg"
          alt="Historic American rail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/60 to-transparent" style={{ height: '100%' }} />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 border border-dashed border-accent/50 text-accent font-body text-xs uppercase tracking-[0.3em]">
            WhyTrains
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-background leading-[1.05] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            The future's in rail.
        </motion.h1>

        <motion.p
          className="font-body text-background/60 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Rail empowered the U.S. in the 19th century; now we lag behind every major country.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-accent/0 via-accent/60 to-accent/0"
          />
        </motion.div>
      </div>
    </section>
  );
}
