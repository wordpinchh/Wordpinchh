export default function FeaturedCard() {
  return (
    <div className="bg-[#1E1E1A] rounded-[20px] grid grid-cols-[1fr_400px] overflow-hidden hover:-translate-y-1 transition">

      {/* LEFT */}
      <div className="p-[52px_56px] flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-[#B5E550] bg-[#B5E550]/10 px-3 py-1 rounded mb-6 w-fit">
          SEO Blog + GEO
        </span>

        <h2 className="text-2xl font-semibold text-white mb-4">
          How SaaS Companies Use Content to Reduce CAC Without Paid Ads
        </h2>

        <p className="text-white/60 italic mb-6">
          Bottom-of-funnel content generates 3x conversions at lower cost.
        </p>

        <div className="flex gap-4 flex-wrap text-white/40 text-xs">
          <span>B2B SaaS</span>
          <span>•</span>
          <span>Buyer-intent</span>
          <span>•</span>
          <span>GEO</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="border-l border-white/10 p-10">
        <div className="bg-white/10 h-full rounded-lg p-4 space-y-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-2 bg-white/20 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
