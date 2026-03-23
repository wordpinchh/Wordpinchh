"use client";

interface WideCardData {
  num: string;
  tag: string;
  title: string;
  desc: string;
  highlights: string[];
  cta: string;
  format: string;
  before: string;
  after: string;
  result: string;
}

export default function WideCard({ data }: { data: WideCardData }) {
  return (
    <div className="group col-span-2 grid grid-cols-[1fr_260px] gap-9 bg-white border border-black/10 rounded-2xl p-[32px_36px] relative overflow-hidden transition hover:-translate-y-[2px] hover:border-black/20 z-20">

      {/* TOP STRIP (premium animation) */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#CC4400] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      {/* LEFT */}
      <div>
        <div className="text-[10px] tracking-widest text-[#C4C4BA] mb-3">
          {data.num}
        </div>

        <span className="text-[10px] px-3 py-1 rounded bg-[#FFF0EB] text-[#5C1A00] uppercase tracking-widest font-semibold mb-4 inline-block">
          {data.tag}
        </span>

        <h3 className="text-[1.3rem] font-semibold mb-3">
          {data.title}
        </h3>

        <p className="text-[13px] italic text-[#4A4A44] leading-[1.75] mb-5">
          {data.desc}
        </p>

        <ul className="flex flex-col gap-2 mb-5">
          {data.highlights.map((item, i) => (
            <li key={i} className="text-[12px] flex gap-2 text-[#4A4A44]">
              <span className="text-[#C4C4BA]">→</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center pt-4 border-t border-black/10">
          <span className="text-[11px] uppercase tracking-wider font-semibold flex items-center gap-2 group-hover:gap-3 group-hover:translate-x-1 transition-all duration-300">
            {data.cta}
          </span>
          <span className="text-[10px] text-[#C4C4BA]">
            {data.format}
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="border-l border-black/10 pl-6 flex flex-col justify-between">

        {/* BEFORE / AFTER */}
        <div className="flex flex-col gap-3">
          <div className="bg-[#FFF5F5] border border-[#FECACA] rounded-lg p-3">
            <div className="text-[9px] uppercase tracking-widest text-red-500 mb-1">
              Before
            </div>
            <p className="text-[11px] text-red-700 italic">
              {data.before}
            </p>
          </div>

          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-3">
            <div className="text-[9px] uppercase tracking-widest text-green-600 mb-1">
              After
            </div>
            <p className="text-[11px] text-green-800 italic">
              {data.after}
            </p>
          </div>
        </div>

        {/* RESULT */}
        <div className="mt-4 p-3 bg-[#F9F9F7] border border-black/10 rounded-lg">
          <div className="text-[9px] uppercase tracking-widest text-[#8A8A82] mb-1">
            Result
          </div>
          <p className="text-[12px] italic text-[#4A4A44]">
            {data.result}
          </p>
        </div>
      </div>
    </div>
  );
}
