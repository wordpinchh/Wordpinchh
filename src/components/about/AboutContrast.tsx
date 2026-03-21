"use client";

import { motion } from "framer-motion";

export default function AboutContrast() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">

      {/* 🔴 LEFT SIDE */}
      <div className="relative bg-[var(--paper)] px-6 md:px-12 py-20 border-r border-[rgba(0,0,0,0.1)] overflow-hidden">

        {/* BACKGROUND WORD */}
        <div className="absolute bottom-[-20px] left-0 text-[180px] font-heading text-[var(--ink)]/[0.04] pointer-events-none">
          NOT US
        </div>

        {/* LABEL */}
        <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--ink)] mb-6">
          ✕ WHAT WE'RE NOT
        </div>

        {/* HEADING */}
        <h2 className="font-heading text-[2.5rem] text-[var(--ink)] relative mb-6">
          THE{" "}
          <span className="absolute left-0 top-1/2 w-full h-[2px] bg-[var(--red)]" />
          {" "}
          WRONG FIT
        </h2>

        {/* TEXT */}
        <p className="text-[15px] text-[var(--ink)] leading-[1.9] max-w-md mb-6">
          We're not the right fit for everyone. If you're looking for 20 AI-generated
          articles a month at $10 each, there are platforms for that.
          It won't work — but they exist.
        </p>

        {/* LIST */}
        <ul className="space-y-3 text-[14px] text-[var(--ink)]">
          {[
            "20 AI-generated articles a month at $10 each",
            "Keyword-stuffed content with no strategy angle",
            "Agencies that never push back on your ideas",
            "One-off projects with no commitment to consistency",
            "Vanity metrics — traffic without conversions",
          ].map((item, i) => (
            <li key={i} className="line-through decoration-[var(--red)] decoration-2 opacity-70">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 🟡 RIGHT SIDE */}
      <div
        className="relative px-6 md:px-12 py-20 text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #1a1208 0%, #0f0b07 100%)",
        }}
      >

        {/* GOLD GLOW */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,180,80,0.15), transparent 70%)",
          }}
        />

        {/* LABEL */}
        <div className="text-[10px] tracking-[0.25em] uppercase text-red-500 mb-6">
          → WHO WE WORK BEST WITH
        </div>

        {/* HEADING */}
        <h2 className="font-heading text-[2.5rem] leading-[1.2] mb-10">
          THE{" "}
          <span className="italic text-[var(--gold)]">RIGHT</span>{" "}
          FIT LOOKS LIKE THIS
        </h2>

        {/* LIST */}
        <div className="space-y-10">
          {[
            {
              title: "CONTENT AS INVESTMENT",
              normal:
                "You understand that content compounds over time — and you're building for the long term,",
              highlight: "not chasing one viral article.",
            },
            {
              title: "WANT A REAL PARTNER",
              normal:
                "You want someone who will push back with better ideas —",
              highlight:
                "not just execute whatever brief you hand them without question.",
            },
            {
              title: "COMMITTED TO CONSISTENCY",
              normal:
                "You're committed to publishing consistently over the long term —",
              highlight:
                "not stopping when the first article doesn't go viral.",
            },
            {
              title: "REAL EXPERTISE TO SHARE",
              normal:
                "You have genuine knowledge and experience. Our job is to make it visible —",
              highlight:
                "not invent a point of view for you.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">

              {/* ICON */}
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-[var(--gold)]">
                ✓
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <div className="font-heading text-[13px] tracking-[0.1em] uppercase mb-1">
                  {item.title}
                </div>
                <p className="text-[14px] leading-[1.7] max-w-md">
                  <span className="text-white/70">
                    {item.normal}{" "}
                  </span>

                  <span 
                    className="italic text-[var(--gold)] font-medium"
                    style={{ textShadow: "0 0 8px rgba(214,168,79,0.2)" }}
                  >
                    {item.highlight}
                  </span>
                </p>
              </div>

              {/* DIVIDER (except for last item) */}
              {i < 3 && (
                <div className="absolute left-6 right-6 h-px bg-white/10 mt-22" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
