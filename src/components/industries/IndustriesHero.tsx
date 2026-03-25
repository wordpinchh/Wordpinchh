"use client";

import { motion } from "framer-motion";

export default function IndustriesHero() {
  return (
    <section className="relative z-0 w-full border-b border-white/10 px-6 md:px-12 lg:px-16 pt-32 pb-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-px bg-white/30" />
            <span className="font-['Geist'] text-[11px] tracking-[0.2em] uppercase text-white/40">
              Industries — Who We Work With
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-['Instrument_Serif'] text-[clamp(3.2rem,5.5vw,5.2rem)] leading-[1.0] font-normal tracking-[-0.02em]">
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
          <p className="font-['Geist'] text-[20px] leading-[1.75] text-white/40 font-light mb-9">
            Content strategy that works for a SaaS startup looks very different
            from what works for a solo consultant or a boutique firm. We work
            with three types of clients — and we know all three deeply.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2.5">
            {[
              { label: "Founders & Solopreneurs", color: "#E8FF47" },
              { label: "B2B SaaS Startups", color: "#00D9FF" },
              { label: "Consulting Firms", color: "#FF6B35" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-[40px] border border-white/8 bg-white/5 backdrop-blur-sm text-[14px] font-medium text-white/40 hover:text-white hover:border-white/15 transition-all"
              >
                <span
                  className="w-[7px] h-[7px] rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* subtle gradient glow (premium touch) */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] opacity-30 z-[-1]" />
    </section>
  );
}
