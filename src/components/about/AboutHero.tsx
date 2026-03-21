"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="w-full border-b border-(--ink-soft)/20 pt-15">

      {/* 🔥 HERO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_380px]">

        {/* LEFT */}
        <div className="relative px-6 md:px-12 lg:px-16 py-16 border-r border-[var(--ink-soft)]/20">

          {/* BACKGROUND WORD */}
          <div className="absolute bottom-[-40px] right-[-20px] text-[180px] font-heading text-(--ink)/4 uppercase pointer-events-none">
            Words
          </div>

          {/* EYEBROW */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-(--red)" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-(--red)">
              Why We Exist
            </span>
          </div>

          {/* BIG HEADING */}
          <h1 className="font-heading uppercase text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] leading-[1.05] tracking-[-0.015em] font-bold text-[var(--ink)] mb-6">
            Brilliant businesses
            <br />
            kept losing to
            <br />
            mediocre ones.
          </h1>

          {/* RED LINE */}
          <div className="text-(--red) italic text-[60px] md:text-[1.9rem] font-[400] mt-2 mb-8">
            Just because of content.
          </div>

          {/* BODY */}
          <div className="max-w-xl space-y-7 text-[15px] leading-loose text-(--ink-soft)">
            <p>
              We started Wordpinchh because we kept watching this happen.
              A better product, deeper experience, stronger results — and still losing at
              Google search, LinkedIn feed, AI recommendation, and first-impression game.
            </p>

            <p>
              <span className="text-[var(--ink)]">
                Expertise doesn't market itself.
              </span>{" "}
              That's the uncomfortable truth most agencies won't say out loud. We built Wordpinchh to fix that — for founders, SaaS startups, and consulting firms who have real expertise and need the world to find it.
            </p>

            <p>
              We're not a content mill. We don't use AI to churn out keyword-stuffed articles and call it strategy. We think, we research, we argue about angles, and we write — because that's the only way to produce content that actually does something.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="px-8 py-12 text-white relative overflow-hidden">
          
          {/* WARM GRADIENT BACKGROUND */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, #1a1208 0%, #0f0b07 100%)"
            }}
          />
          
          {/* GOLD GLOW OVERLAY */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 20%, rgba(255,180,80,0.15), transparent 70%)"
            }}
          />

          {/* LABEL */}
          <div className="relative z-10 text-[10px] tracking-[0.25em] uppercase text-white/75 mb-6 border-b border-white/20 pb-4">
            The uncomfortable truths
          </div>

          {/* LIST */}
          <div className="relative z-10 space-y-8">
            {[
              "You can have the better product and still lose the Google search.",
              "Expertise doesn't market itself. Publishing does.",
              "AI is recommending your competitors.",
              "Most content drives traffic. We drive clients.",
              "The first impression happens before the first call.",
            ].map((text, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-white/40 text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[13.5px] text-white/75 leading-[1.7]">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
