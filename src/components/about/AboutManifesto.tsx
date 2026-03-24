"use client";

import React from "react";

export default function ManifestoSection() {
  return (
    <section className="border-b-2 border-[rgba(26,18,8,0.25)]">

      {/* HEADER */}
      <div className="flex items-baseline gap-6 px-16 py-8 border-b border-[rgba(26,18,8,0.25)]">
        <h2 className="font-[Barlow_Condensed] font-black uppercase" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          What We Believe
        </h2>
        <span className="font-mono text-xs tracking-widest text-[#8C7D6A] uppercase">
          — Six principles we won't compromise on
        </span>
      </div>

      {/* LIST */}
      <div>
        {/* ITEM 01 */}
        <div className="group relative grid grid-cols-[80px_1fr] border-b border-[rgba(26,18,8,0.12)] overflow-hidden">
          <div className="absolute inset-0 bg-[#1A1208] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0" />
          <div className="relative z-10 px-16 py-7 font-mono text-xs text-[#8C7D6A] group-hover:text-white/30 transition">01</div>
          <div className="relative z-10 pr-16 py-6 text-[clamp(1.8rem,3.5vw,3rem)] font-[Barlow_Condensed] font-bold tracking-[-0.01em] leading-[1.15] text-[#1A1208] group-hover:text-[#F2EDE4] transition antialiased">
            Good content is <span className="belief-accent">specific.</span> Vague content is invisible.
          </div>
        </div>

        {/* ITEM 02 */}
        <div className="group relative grid grid-cols-[80px_1fr] border-b border-[rgba(26,18,8,0.12)] overflow-hidden">
          <div className="absolute inset-0 bg-[#1A1208] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0" />
          <div className="relative z-10 px-16 py-7 font-mono text-xs text-[#8C7D6A] group-hover:text-white/30 transition">02</div>
          <div className="relative z-10 pr-16 py-6 text-[clamp(1.8rem,3.5vw,3rem)] font-[Barlow_Condensed] font-bold tracking-[-0.01em] leading-[1.15] text-[#1A1208] group-hover:text-[#F2EDE4] transition antialiased">
            Strategy comes <span className="belief-accent">before</span> writing. Always.
          </div>
        </div>

        {/* ITEM 03 */}
        <div className="group relative grid grid-cols-[80px_1fr] border-b border-[rgba(26,18,8,0.12)] overflow-hidden">
          <div className="absolute inset-0 bg-[#1A1208] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0" />
          <div className="relative z-10 px-16 py-7 font-mono text-xs text-[#8C7D6A] group-hover:text-white/30 transition">03</div>
          <div className="relative z-10 pr-16 py-6 text-[clamp(1.8rem,3.5vw,3rem)] font-[Barlow_Condensed] font-bold tracking-[-0.01em] leading-[1.15] text-[#1A1208] group-hover:text-[#F2EDE4] transition antialiased">
            Content must work for <span className="belief-accent">humans and AI.</span> Both matter now.
          </div>
        </div>

        {/* ITEM 04 */}
        <div className="group relative grid grid-cols-[80px_1fr] border-b border-[rgba(26,18,8,0.12)] overflow-hidden">
          <div className="absolute inset-0 bg-[#1A1208] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0" />
          <div className="relative z-10 px-16 py-7 font-mono text-xs text-[#8C7D6A] group-hover:text-white/30 transition">04</div>
          <div className="relative z-10 pr-16 py-6 text-[clamp(1.8rem,3.5vw,3rem)] font-[Barlow_Condensed] font-bold tracking-[-0.01em] leading-[1.15] text-[#1A1208] group-hover:text-[#F2EDE4] transition antialiased">
            Clients should understand <span className="belief-accent">why</span> every word was chosen.
          </div>
        </div>

        {/* ITEM 05 */}
        <div className="group relative grid grid-cols-[80px_1fr] border-b border-[rgba(26,18,8,0.12)] overflow-hidden">
          <div className="absolute inset-0 bg-[#1A1208] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0" />
          <div className="relative z-10 px-16 py-7 font-mono text-xs text-[#8C7D6A] group-hover:text-white/30 transition">05</div>
          <div className="relative z-10 pr-16 py-6 text-[clamp(1.8rem,3.5vw,3rem)] font-[Barlow_Condensed] font-bold tracking-[-0.01em] leading-[1.15] text-[#1A1208] group-hover:text-[#F2EDE4] transition antialiased">
            <span className="belief-accent">Consistency</span> beats perfection. Ship and iterate.
          </div>
        </div>

        {/* ITEM 06 */}
        <div className="group relative grid grid-cols-[80px_1fr] border-b border-[rgba(26,18,8,0.12)] overflow-hidden">
          <div className="absolute inset-0 bg-[#1A1208] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0" />
          <div className="relative z-10 px-16 py-7 font-mono text-xs text-[#8C7D6A] group-hover:text-white/30 transition">06</div>
          <div className="relative z-10 pr-16 py-6 text-[clamp(1.8rem,3.5vw,3rem)] font-[Barlow_Condensed] font-bold tracking-[-0.01em] leading-[1.15] text-[#1A1208] group-hover:text-[#F2EDE4] transition antialiased">
            The best content makes reader feel <span className="belief-accent">understood</span> before it asks for anything.
          </div>
        </div>
      </div>

      {/* ACCENT STYLE */}
      <style jsx>{`
        .belief-accent {
          color: #C41C1C; /* red */
          font-style: italic;
          font-family: 'Libre Baskerville', serif;
          font-weight: 700;
          font-size: 0.85em;
          letter-spacing: 0.01em;
          transition: color 0.4s ease;
        }

        /* HOVER STATE */
        .group:hover .belief-accent {
          color: #FFD97A; /* gold on hover */
        }
      `}</style>

    </section>
  );
}
