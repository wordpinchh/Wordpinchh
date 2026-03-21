"use client";

import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section className="relative w-full bg-[var(--paper)] px-6 md:px-12 lg:px-16 py-24 overflow-hidden border-t border-[rgba(0,0,0,0.1)]">

      {/* BACKGROUND WORD */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[180px] font-heading text-[var(--ink)]/[0.04] pointer-events-none leading-[0.8] text-right">
        WORK<br />WITH<br />US
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* LABEL */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[var(--red)]" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--red)]">
              If that's you
            </span>
          </div>

          {/* HEADING */}
          <h2 className="font-heading text-[3rem] md:text-[4rem] leading-[1.05] tracking-[-0.02em] text-[var(--ink)] uppercase">
            We'll do great
            <br />
            work together.
          </h2>

          {/* PARAGRAPH */}
          <p className="mt-6 max-w-md text-[15px] leading-[1.9] text-[var(--ink-soft)] italic">
            Tell us where you are, what you've tried, and what you're trying to
            build. We'll tell you whether and how we can help — no obligation,
            no pitch deck.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex flex-col items-start md:items-end gap-4"
        >

          {/* BUTTON */}
          <button className="relative px-10 py-5 bg-[#1a1208] text-white font-heading uppercase tracking-[0.15em] text-[12px] border border-white/20 group overflow-hidden">

            <span className="relative z-10">
              Book a Strategy Call
            </span>

            {/* HOVER FILL */}
            <span className="absolute inset-0 bg-[var(--gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

          </button>

          {/* MICRO TEXT */}
          <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--ink-soft)]">
            Free · 30 minutes · No pitch
          </div>

        </motion.div>
      </div>
    </section>
  );
}
