"use client";

import { motion } from "framer-motion";

const beliefs = [
  { normal: "Good content is", accent: "specific.", end: "Vague content is invisible." },
  { normal: "Strategy comes", accent: "before", end: "writing. Always." },
  { normal: "Content must work for", accent: "humans and AI.", end: "Both matter now." },
  { normal: "Clients should understand", accent: "why", end: "every word was chosen." },
  { normal: "", accent: "Consistency", end: "beats perfection. Ship and iterate." },
  { normal: "The best content makes people feel", accent: "understood", end: "before it asks for anything." },
];

export default function AboutManifesto() {
  return (
    <section className="w-full border-t border-[rgba(0,0,0,0.1)]">

      {/* HEADER */}
      <div className="px-6 md:px-12 lg:px-16 py-8 border-b border-[rgba(0,0,0,0.1)] flex items-end gap-6">
        <h2 className="font-heading text-[2.5rem] uppercase tracking-tight text-(--ink)">
          What We Believe
        </h2>
        <span className="text-[10px] tracking-[0.25em] text-(--ink-soft) uppercase">
          — Six principles we won't compromise on
        </span>
      </div>

      {/* LIST */}
      <div>
        {beliefs.map((item, i) => (
          <motion.div
            key={i}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative border-b border-[rgba(0,0,0,0.1)] group"
          >

            {/* 🔥 GRADIENT HOVER BAND */}
            <motion.div
              variants={{
                rest: { x: "-100%" },
                hover: { x: "0%" },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-0"
              style={{
                background:
                  "linear-gradient(90deg, #1a1208 0%, #2a1a0f 50%, #1a1208 100%)",
                boxShadow: "inset 0 0 40px rgba(255,180,80,0.1)",
              }}
            />

            {/* CONTENT */}
            <div className="relative z-10 px-6 md:px-12 lg:px-16 py-8 flex gap-6 items-start">

              {/* NUMBER */}
              <div className="text-[11px] tracking-[0.2em] text-(--ink-soft) group-hover:text-white/50 transition">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* TEXT */}
              <h3 className="font-heading text-[1.8rem] md:text-[2.3rem] leading-[1.3] tracking-[-0.01em] flex flex-wrap gap-2">

                {/* NORMAL TEXT */}
                {item.normal && (
                  <span className="text-(--ink) group-hover:text-white transition">
                    {item.normal}
                  </span>
                )}

                {/* ACCENT */}
                <span className="italic text-(--red) group-hover:text-(--gold) transition">
                  {item.accent}
                </span>

                {/* END TEXT */}
                <span className="text-(--ink) group-hover:text-white transition">
                  {item.end}
                </span>

              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
