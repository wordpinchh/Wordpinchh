export default function FilterBar({ filter, setFilter }: { filter: string; setFilter: (filter: string) => void }) {
  const filters = [
    { value: "all", label: "All Work" },
    { value: "seo", label: "SEO Blog" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "website", label: "Website Copy" },
    { value: "geo", label: "GEO / AEO" },
  ];

  return (
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
  );
}
