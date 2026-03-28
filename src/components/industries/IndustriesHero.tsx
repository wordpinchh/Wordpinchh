"use client";

import { motion } from "framer-motion";

export default function IndustriesHero() {
  return (
    <section className="relative z-0 w-full border-b border-white/10 px-5 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-28 lg:pt-32 pb-10 lg:pb-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-end">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-5 lg:mb-6">
            <div className="w-7 h-px bg-white/30" />
            <span className="font-['Geist'] text-[clamp(11px,2.5vw,18px)] tracking-[0.2em] uppercase text-white/40">
              Industries — Who We Work With
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-['Instrument_Serif'] text-[clamp(2.8rem,6vw,5.5rem)] leading-none font-normal tracking-[-0.02em]">
            We're specific
            <br />
            about <span className="italic text-white/40">who</span>
            <br />
            we work with.
          </h1>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Description */}
          <p className="font-['Geist'] text-[clamp(15px,3vw,22px)] leading-[1.75] text-white/40 font-light mb-7 lg:mb-9">
            Content strategy that works for a SaaS startup looks very different
            from what works for a solo consultant or a boutique firm. We work
            with three types of clients — and we know all three deeply.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Founders & Solopreneurs", color: "#E8FF47" },
              { label: "B2B SaaS Startups", color: "#00D9FF" },
              { label: "Consulting Firms", color: "#FF6B35" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[40px] border border-white/8 bg-white/5 backdrop-blur-sm text-[clamp(12px,2.5vw,16px)] font-medium text-white/40 hover:text-white hover:border-white/15 transition-all"
              >
                <span
                  className="w-[6px] h-[6px] rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] opacity-30 z-[-1]" />
    </section>
  );
}