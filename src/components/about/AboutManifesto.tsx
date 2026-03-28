"use client";

import React from "react";

export default function ManifestoSection() {
  return (
    <section className="border-b-2 border-[rgba(26,18,8,0.25)]">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-3 sm:gap-6 px-5 sm:px-8 lg:px-16 py-6 lg:py-8 border-b border-[rgba(26,18,8,0.25)]">
        <h2
          className="font-[Barlow_Condensed] font-black uppercase shrink-0"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          What We Believe
        </h2>
        <span
          className="font-mono tracking-widest text-[#8C7D6A] uppercase"
          style={{ fontSize: 'clamp(11px, 2vw, 14px)' }}
        >
          — Six principles we won't compromise on
        </span>
      </div>

      {/* LIST */}
      <div>
        {[
          { num: '01', text: 'Good content is ', accent: 'specific.', rest: ' Vague content is invisible.' },
          { num: '02', text: 'Strategy comes ', accent: 'before', rest: ' writing. Always.' },
          { num: '03', text: 'Content must work for ', accent: 'humans and AI.', rest: ' Both matter now.' },
          { num: '04', text: 'Clients should understand ', accent: 'why', rest: ' every word was chosen.' },
          { num: '05', text: '', accent: 'Consistency', rest: ' beats perfection. Ship and iterate.' },
          { num: '06', text: 'The best content makes reader feel ', accent: 'understood', rest: ' before it asks for anything.' },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative grid grid-cols-[44px_1fr] sm:grid-cols-[80px_1fr] border-b border-[rgba(26,18,8,0.12)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#1A1208] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0" />
            <div className="relative z-10 px-3 sm:px-6 lg:px-16 py-5 lg:py-7 font-mono text-xs text-[#8C7D6A] group-hover:text-white/30 transition flex items-start pt-6 lg:pt-7">
              {item.num}
            </div>
            <div className="relative z-10 pr-5 sm:pr-8 lg:pr-16 py-5 lg:py-6 text-[clamp(1.2rem,3.5vw,3rem)] font-[Barlow_Condensed] font-bold tracking-[-0.01em] leading-[1.15] text-[#1A1208] group-hover:text-[#F2EDE4] transition antialiased">
              {item.text}
              <span className="belief-accent">{item.accent}</span>
              {item.rest}
            </div>
          </div>
        ))}
      </div>

      {/* ACCENT STYLE */}
      <style jsx>{`
        .belief-accent {
          color: #C41C1C;
          font-style: italic;
          font-family: 'Libre Baskerville', serif;
          font-weight: 700;
          font-size: 0.85em;
          letter-spacing: 0.01em;
          transition: color 0.4s ease;
        }
        .group:hover .belief-accent {
          color: #FFD97A;
        }
      `}</style>

    </section>
  );
}