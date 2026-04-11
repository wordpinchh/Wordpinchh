"use client";

interface FilterBarIndustryProps {
  filter: string;
  setFilter: (filter: string) => void;
}

function Pill({
  label,
  value,
  active,
  onClick,
}: {
  label: string;
  value: string;
  active: boolean;
  onClick: (value: string) => void;
}) {
  return (
    <button
      data-f={value}
      onClick={() => onClick(value)}
      style={{
        padding: "6px 14px",
        border: active ? "1px solid #CAFF4A" : "1px solid rgba(255,255,255,0.13)",
        borderRadius: "40px",
        fontFamily: "'DM Mono', monospace",
        fontSize: "15px",
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
        color: active ? "#0E0D0A" : "#ffffff",
        background: active ? "#CAFF4A" : "none",
        fontWeight: active ? 600 : 400,
        cursor: "pointer",
        transition: "all 0.2s",
        whiteSpace: "nowrap" as const,
        flexShrink: 0,
        outline: "none",
      }}
      onMouseEnter={(e) => {
        if (!active) (e.currentTarget as HTMLButtonElement).style.color = "#CAFF4A";
      }}
      onMouseLeave={(e) => {
        if (!active) (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
      }}
    >
      {label}
    </button>
  );
}

export default function FilterBarIndustry({ filter, setFilter }: FilterBarIndustryProps) {
  const industryFilters = [
    { label: "Healthcare", value: "hc"   },
    { label: "SaaS / B2B", value: "saas" },
    { label: "Finance",    value: "fin" },
    { label: "Consulting", value: "cons" },
    { label: "Lifestyle", value: "life" },
    { label: "Recruitment",value: "rec"  },
  ];

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        alignItems: "center",
        gap: "7px",
        overflowX: "auto",
        position: "relative",
        zIndex: 80,
        background: "rgba(14,13,10,0.97)",
        backdropFilter: "blur(10px)",
        scrollbarWidth: "none",
      }}
    >
      <style>{`
        .find::-webkit-scrollbar { display: none; }
        @media (max-width:767px) {
          .find {
            padding: 10px 16px !important;
          }
          .find-label {
            font-size: 11px !important;
            letter-spacing: 0.12em !important;
          }
          .find-pill {
            padding: 4px 10px !important;
            font-size: 10px !important;
          }
        }
      `}</style>

      <div
        className="find"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "7px",
          overflowX: "auto",
          scrollbarWidth: "none",
          width: "100%",
          padding: "20px 64px",
        }}
      >
        <span
          className="find-label"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "20px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#CAFF4A",
            fontWeight: 700,
            marginRight: "8px",
            flexShrink: 0,
            opacity: 0.9,
            whiteSpace: "nowrap",
          }}
        >
          Industry —
        </span>
        {industryFilters.map((f) => (
          <div key={f.value} className="find-pill">
            <Pill
              label={f.label}
              value={f.value}
              active={filter === f.value}
              onClick={setFilter}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
