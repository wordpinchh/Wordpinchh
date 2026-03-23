"use client";

import { useState } from "react";
import useReveal from "@/hooks/useReveal";

export default function Header({ filter, setFilter }: { filter: string; setFilter: (filter: string) => void }) {
  useReveal();

  const filters = [
    { value: "all", label: "All Work" },
    { value: "seo", label: "SEO Blog" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "website", label: "Website Copy" },
    { value: "geo", label: "GEO / AEO" },
  ];

  return (
    <header className="px-[80px] pt-[56px] pb-[52px] border-b border-black/20 grid grid-cols-[1fr_440px] gap-[80px] items-end reveal">
      
      {/* LEFT */}
      <div>
        <div className="text-[10px] tracking-[0.22em] uppercase text-[#8A8A82] mb-5 flex items-center gap-3">
          <span className="w-[20px] h-px bg-[#8A8A82]" />
          Portfolio / Sample Work
        </div>

        <h1 className="text-[clamp(3.5rem,6vw,6rem)] leading-[0.92] font-light tracking-tight">
          Words that
          <span className="block italic font-semibold">Work.</span>
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-6 pt-[47px]">
        <p className="text-[15px] leading-[1.75] text-[#4A4A44]">
          We're building our public portfolio. Here's a taste of what we produce — SEO blogs, LinkedIn posts, website copy, and AI-visibility content.
        </p>

        {/* FILTER */}
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`px-4 py-[7px] border rounded-full text-[12px] transition ${
                filter === item.value
                  ? "bg-black text-white border-black"
                  : "border-black/20 text-[#8A8A82] hover:bg-black hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* STATS */}
        <div className="flex gap-8">
          <Stat num="3" label="Public samples" />
          <Stat num="∞" label="On request" />
          <Stat num="4" label="Content types" />
        </div>
      </div>
    </header>
  );
}

function Stat({ num, label }: any) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-2xl font-semibold">{num}</div>
      <div className="text-[10px] uppercase tracking-widest text-[#8A8A82]">
        {label}
      </div>
    </div>
  );
}
