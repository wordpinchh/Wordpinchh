"use client";

interface FilterBarProps {
  filter: string;
  setFilter: (filter: string) => void;
  onCountChange?: (count: number, filterKey: string) => void;
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

export default function FilterBar({ filter, setFilter }: FilterBarProps) {
  const serviceFilters = [
    { label: "All",          value: "all" },
    { label: "SEO Blog",     value: "seo" },
    { label: "LinkedIn",     value: "li"  },
    { label: "Website Copy", value: "wc"  },
    { label: "Landing Page", value: "lp"  },
  ];

  const industryFilters = [
    { label: "Healthcare", value: "hc"   },
    { label: "SaaS / B2B", value: "saas" },
    { label: "Finance",    value: "fin"  },
    { label: "Consulting", value: "cons" },
    { label: "Lifestyle",  value: "life" },
    { label: "Recruitment",value: "rec"  },
  ];

  return (
    <>
      <style>{`
        .filterbar-wrap {
          padding: 20px 64px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          gap: 0;
          position: relative;
          z-index: 80;
          background: rgba(14,13,10,0.97);
          backdrop-filter: blur(10px);
          scrollbar-width: none;
        }

        .filterbar-inner {
          display: flex;
          align-items: center;
          gap: 0;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          width: 100%;
        }

        .filterbar-inner::-webkit-scrollbar {
          display: none;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-shrink: 0;
        }

        .filter-label {
          font-family: 'DM Mono', monospace;
          font-size: 20px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #CAFF4A;
          font-weight: 700;
          margin-right: 8px;
          flex-shrink: 0;
          opacity: 0.9;
        }

        .filter-sep {
          width: 1px;
          height: 22px;
          background: rgba(255,255,255,0.07);
          margin: 0 16px;
          flex-shrink: 0;
        }

        /* ── Mobile only ── */
        @media (max-width: 767px) {
          .filterbar-wrap {
            padding: 0;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }

          .filterbar-inner {
            flex-direction: column;
            overflow-x: visible;
          }

          .filter-group-row {
            display: flex;
            align-items: center;
            gap: 7px;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding: 10px 16px;
            flex-shrink: 0;
          }

          .filter-group-row::-webkit-scrollbar {
            display: none;
          }

          .filter-group-row:first-child {
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }

          .filter-sep {
            display: none;
          }

          .filter-label {
            font-size: 11px;
            letter-spacing: 0.12em;
            margin-right: 6px;
            white-space: nowrap;
          }

          .filter-pill-mobile {
            padding: 4px 10px !important;
            font-size: 10px !important;
            letter-spacing: 0.06em !important;
          }
        }
      `}</style>

      {/* ── Desktop layout (unchanged) ── */}
      <div className="filterbar-wrap hidden-mobile">
        <style>{`.hidden-mobile { display: flex; } @media(max-width:767px){.hidden-mobile{display:none;}}`}</style>
        <div style={{ display: "flex", alignItems: "center", gap: "7px", flexShrink: 0 }}>
          <span className="filter-label">Service —</span>
          {serviceFilters.map((f) => (
            <Pill key={f.value} label={f.label} value={f.value} active={filter === f.value} onClick={setFilter} />
          ))}
        </div>
        <div className="filter-sep" />
        <div style={{ display: "flex", alignItems: "center", gap: "7px", flexShrink: 0 }}>
          <span className="filter-label">Industry —</span>
          {industryFilters.map((f) => (
            <Pill key={f.value} label={f.label} value={f.value} active={filter === f.value} onClick={setFilter} />
          ))}
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div
        className="show-mobile"
        style={{
          position: "relative",
          zIndex: 80,
          background: "rgba(14,13,10,0.97)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <style>{`.show-mobile { display: none; } @media(max-width:767px){.show-mobile{display:block;}}`}</style>

        {/* Row 1 — Service */}
        <div className="filter-group-row">
          <span className="filter-label" style={{ whiteSpace: "nowrap" }}>Service —</span>
          {serviceFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className="filter-pill-mobile"
              style={{
                padding: "4px 10px",
                border: filter === f.value ? "1px solid #CAFF4A" : "1px solid rgba(255,255,255,0.13)",
                borderRadius: "40px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: filter === f.value ? "#0E0D0A" : "#ffffff",
                background: filter === f.value ? "#CAFF4A" : "none",
                fontWeight: filter === f.value ? 600 : 400,
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
                outline: "none",
                transition: "all 0.2s",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Row 2 — Industry */}
        <div className="filter-group-row">
          <span className="filter-label" style={{ whiteSpace: "nowrap" }}>Industry —</span>
          {industryFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className="filter-pill-mobile"
              style={{
                padding: "4px 10px",
                border: filter === f.value ? "1px solid #CAFF4A" : "1px solid rgba(255,255,255,0.13)",
                borderRadius: "40px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: filter === f.value ? "#0E0D0A" : "#ffffff",
                background: filter === f.value ? "#CAFF4A" : "none",
                fontWeight: filter === f.value ? 600 : 400,
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
                outline: "none",
                transition: "all 0.2s",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}