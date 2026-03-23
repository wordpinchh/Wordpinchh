interface PlaceholderCardData {
  label: string;
  sub: string;
}

export default function PlaceholderCard({ data }: { data: PlaceholderCardData }) {
  return (
    <div className="border border-dashed border-[#C4C4BA] rounded-2xl p-8 flex flex-col items-center justify-center gap-3 min-h-[220px] bg-white/60 hover:bg-white transition z-20">

      <div className="w-10 h-10 border border-dashed border-[#C4C4BA] rounded-full flex items-center justify-center text-[#C4C4BA] text-lg">
        +
      </div>

      <div className="text-[12px] uppercase tracking-widest text-[#8A8A82]">
        {data.label}
      </div>

      <div className="text-[11px] italic text-[#C4C4BA] text-center" dangerouslySetInnerHTML={{ __html: data.sub }} />
    </div>
  );
}
