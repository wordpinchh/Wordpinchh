"use client";

interface FilterBarServiceProps {
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

export default function FilterBarService({ filter, setFilter }: FilterBarServiceProps) {
  const serviceFilters = [
    { label: "All",          value: "all" },
    { label: "SEO Blog",     value: "seo" },
    { label: "LinkedIn",     value: "li"  },
    { label: "Website Copy", value: "wc"  },
    { label: "Landing Page", value: "lp"  },
  ];

  return (
    <div
      style={{
        padding: "20px 64px",
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
        .fsvc::-webkit-scrollbar { display: none; }
        @media (max-width:767px) {
          .fsvc {
            padding: 10px 16px !important;
          }
          .fsvc-label {
            font-size: 11px !important;
            letter-spacing: 0.12em !important;
          }
          .fsvc-pill {
            padding: 4px 10px !important;
            font-size: 10px !important;
            letter-spacing: 0.06em !important;
          }
        }
      `}</style>

      <div
        className="fsvc"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "7px",
          overflowX: "auto",
          scrollbarWidth: "none",
          width: "100%",
          padding: "20px 64px",
          margin: "-20px -64px",
        }}
      >
        <span
          className="fsvc-label"
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
          Service —
        </span>
        {serviceFilters.map((f) => (
          <div key={f.value} className="fsvc-pill">
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
