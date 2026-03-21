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
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
              Industries — Who We Work With
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-[2.8rem] md:text-[4rem] lg:text-[5rem] leading-[1.05] tracking-[-0.02em]">
            We're specific
            <br />
            about <span className="italic text-white/50">who</span>
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
          <p className="text-[15px] leading-[1.8] text-white/50 font-light mb-8">
            Content strategy that works for a SaaS startup looks very different
            from what works for a solo consultant or a boutique firm. We work
            with specific types of clients — and we know them deeply.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Founders & Solopreneurs", color: "#E8FF47" },
              { label: "B2B SaaS Startups", color: "#00D9FF" },
              { label: "Consulting Firms", color: "#FF6B35" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[12px] text-white/60 hover:text-white hover:border-white/20 transition-all"
              >
                <span
                  className="w-2 h-2 rounded-full"
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
