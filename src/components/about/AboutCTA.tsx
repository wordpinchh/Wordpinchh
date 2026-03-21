"use client";

import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section className="relative w-full border-t border-white/10 px-6 md:px-12 lg:px-16 py-24 overflow-hidden">

      {/* BACKGROUND WORD */}
      <div className="absolute inset-0 flex items-center justify-end pr-20 text-[120px] font-heading text-white/3 uppercase pointer-events-none">
        Work
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-red-500" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-red-500">
              If that's you
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-white">
            We'll do great
            <br />
            work together.
          </h2>

          {/* Copy */}
          <p className="mt-6 max-w-md text-[15px] text-white/60 leading-[1.8]">
            Tell us where you are, what you've tried, and what you're trying to build.
            We'll tell you honestly whether and how we can help.
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
          <button className="relative group px-10 py-5 bg-white text-black font-heading uppercase tracking-wider text-sm overflow-hidden">
            
            <span className="relative z-10">
              Book a Strategy Call
            </span>

            {/* hover overlay */}
            <span className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

          </button>

          {/* Note */}
          <div className="text-[11px] tracking-widest text-white/40 uppercase">
            Free · 30 min · No pitch
          </div>
        </motion.div>
      </div>
    </section>
  );
}
