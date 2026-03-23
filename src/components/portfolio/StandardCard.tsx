"use client";

interface StandardCardData {
  num: string;
  tag: string;
  title: string;
  desc: string;
  highlights: string[];
  cta: string;
  format: string;
}

export default function StandardCard({ data }: { data: StandardCardData }) {
  return (
    <div className="group relative bg-white border border-black/10 rounded-2xl p-[32px_28px] flex flex-col transition-all duration-300 hover:-translate-y-[2px] hover:border-black/20 overflow-hidden z-20">

      {/* TOP ACCENT STRIP (premium animation) */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0A76A4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      {/* NUMBER */}
      <div className="text-[10px] tracking-widest text-[#C4C4BA] mb-3">
        {data.num}
      </div>

      {/* TAG */}
      <span className="text-[10px] px-3 py-1 rounded bg-[#E8F0FC] text-[#1A3A6B] uppercase tracking-widest font-semibold w-fit mb-4">
        {data.tag}
      </span>

      {/* TITLE */}
      <h3 className="text-[1.3rem] font-semibold leading-tight mb-3">
        {data.title}
      </h3>

      {/* DESC */}
      <p className="text-[13px] leading-[1.75] text-[#4A4A44] mb-5 flex-1 italic">
        {data.desc}
      </p>

      {/* HIGHLIGHTS */}
      <ul className="flex flex-col gap-2 mb-5">
        {data.highlights.map((item, i) => (
          <li key={i} className="text-[12px] flex gap-2 text-[#4A4A44]">
            <span className="text-[#C4C4BA]">→</span>
            {item}
          </li>
        ))}
      </ul>

      {/* FOOTER */}
      <div className="flex justify-between items-center pt-4 border-t border-black/10">
        <span className="text-[11px] uppercase tracking-wider font-semibold flex items-center gap-2 group-hover:gap-3 group-hover:translate-x-1 transition-all duration-300">
          {data.cta}
        </span>
        <span className="text-[10px] text-[#C4C4BA]">
          {data.format}
        </span>
      </div>
    </div>
  );
}
