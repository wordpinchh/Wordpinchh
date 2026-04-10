"use client";

import { useEffect } from "react";

const C = {
  bg:  "#0E0D0A",
  s1:  "#161410",
  s2:  "#1E1B15",
  b1:  "rgba(255,255,255,0.07)",
  b2:  "rgba(255,255,255,0.13)",
  tx:  "#F0EDE6",
  mu:  "#7A7268",
  mu2: "#3D3930",
  lm:  "#CAFF4A",
};

const ART_CSS = `
  .cm-art { max-width: 660px; }
  .cm-art h1 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.8rem; font-weight: 800;
    text-transform: uppercase; letter-spacing: -0.01em;
    color: #F0EDE6; line-height: 1; margin-bottom: 16px;
  }
  .cm-art h2 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.2rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.02em;
    color: #F0EDE6; margin: 26px 0 10px;
    padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.07);
  }
  .cm-art h3 {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.95rem; font-weight: 700;
    color: #F0EDE6; margin: 18px 0 8px;
  }
  .cm-art p {
    font-size: 14px; line-height: 1.85;
    color: rgba(240,237,230,0.8); margin-bottom: 14px;
  }
  .cm-art ul {
    margin: 8px 0 14px; padding: 0; list-style: none;
    display: flex; flex-direction: column; gap: 7px;
  }
  .cm-art ul li {
    font-size: 13px; line-height: 1.65;
    color: rgba(240,237,230,0.75);
    padding-left: 18px; position: relative;
  }
  .cm-art ul li::before {
    content: '→'; position: absolute; left: 0;
    color: #CAFF4A; font-size: 11px;
    font-family: 'DM Mono', monospace; top: 1px;
  }
  .cm-art strong { color: #F0EDE6; }
  .cm-art a { color: #CAFF4A; text-decoration: underline; text-underline-offset: 3px; }

  .cm-ba { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
  .cm-ba-b { border-radius: 10px; padding: 16px; }
  .cm-ba-b.before { background: #2A1010; border: 1px solid rgba(204,32,32,0.25); }
  .cm-ba-b.after  { background: #0D2A12; border: 1px solid rgba(122,224,154,0.25); }
  .cm-ba-lbl {
    font-family: 'DM Mono', monospace; font-size: 9px;
    letter-spacing: 0.18em; text-transform: uppercase;
    font-weight: 600; margin-bottom: 7px;
  }
  .cm-ba-b.before .cm-ba-lbl { color: #E07A7A; }
  .cm-ba-b.after  .cm-ba-lbl { color: #7AE09A; }
  .cm-ba-txt { font-size: 13px; line-height: 1.65; font-style: italic; }
  .cm-ba-b.before .cm-ba-txt { color: rgba(224,122,122,0.7); }
  .cm-ba-b.after  .cm-ba-txt { color: rgba(122,224,154,0.7); }

  .cm-scroll::-webkit-scrollbar { width: 20px; }
  .cm-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
  .cm-scroll::-webkit-scrollbar-thumb { background: #CAFF4A; border-radius: 8px; }
  .cm-scroll::-webkit-scrollbar-thumb:hover { background: #B8E042; }

  /* Mobile art adjustments */
  @media (max-width: 767px) {
    .cm-art { max-width: 100%; }
    .cm-art h1 { font-size: 1.4rem; }
    .cm-art h2 { font-size: 1.05rem; }
    .cm-art p  { font-size: 13px; }
    .cm-ba { grid-template-columns: 1fr; gap: 8px; }
    .cm-scroll::-webkit-scrollbar { width: 4px; }
  }
`;

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  sample: {
    cat: string;
    title: string;
    sub: string;
    meta: { l: string; v: string }[];
    body: string;
  } | null;
}

export default function ContentModal({ isOpen, onClose, sample }: ContentModalProps) {
  useEffect(() => {
    if (document.getElementById("cm-art-styles")) return;
    const tag = document.createElement("style");
    tag.id = "cm-art-styles";
    tag.textContent = ART_CSS;
    document.head.appendChild(tag);
  }, []);

  // close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(10px)",
        zIndex: 9000,
        display: "flex",
        alignItems: "stretch",
        paddingTop: "clamp(0px, 6vh, 100px)", // 0 on mobile, 100px on desktop
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "all" : "none",
        transition: "opacity .3s",
      }}
    >
      {/* ── slide-in panel ── */}
      <div
        style={{
          width: "800px",
          maxWidth: "100vw",           // full width on mobile
          marginLeft: "auto",
          background: C.s1,
          borderLeft: `1px solid ${C.b2}`,
          transform: isOpen ? "translateX(0)" : "translateX(40px)",
          transition: "transform .4s cubic-bezier(.4,0,.2,1)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* ── HEAD ── */}
        <div
          style={{
            padding: "clamp(16px, 3vw, 28px) clamp(16px, 4vw, 36px) clamp(14px, 2vw, 22px)",
            borderBottom: `1px solid ${C.b1}`,
            flexShrink: 0,
            position: "sticky",
            top: 0,
            background: C.s1,
            zIndex: 10,
          }}
        >
          {/* close button */}
          <button
            onClick={onClose}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = C.lm;
              (e.currentTarget as HTMLButtonElement).style.color = "#000";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "none";
              (e.currentTarget as HTMLButtonElement).style.color = C.mu;
            }}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "36px",
              height: "36px",
              border: `1px solid ${C.b2}`,
              background: "none",
              color: C.mu,
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: "bold",
              transition: "all .2s",
              flexShrink: 0,
            }}
          >
            ✕
          </button>

          {/* eyebrow */}
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: C.mu,
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              paddingRight: "48px", // avoid overlap with close btn
            }}
          >
            <span style={{
              width: "14px", height: "1px",
              background: C.lm,
              display: "inline-block",
              flexShrink: 0,
            }} />
            {sample?.cat ?? ""}
          </div>

          {/* title */}
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.3rem, 4vw, 2.2rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1,
              color: C.tx,
              marginBottom: "8px",
              paddingRight: "48px", // avoid overlap with close btn
            }}
          >
            {sample?.title ?? ""}
          </h2>

          {/* subtitle */}
          <p style={{
            fontSize: "clamp(12px, 1.5vw, 13px)",
            lineHeight: 1.65,
            color: C.mu,
            fontStyle: "italic",
          }}>
            {sample?.sub ?? ""}
          </p>
        </div>

        {/* ── BODY ── */}
        <div
          className="cm-scroll"
          style={{
            overflowY: "auto",
            flex: 1,
            padding: "clamp(16px, 3vw, 28px) clamp(16px, 4vw, 36px) clamp(24px, 5vw, 44px)",
          }}
        >
          {/* META GRID */}
          {sample?.meta && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                gap: "10px",
                marginBottom: "24px",
                padding: "clamp(10px, 2vw, 16px)",
                background: C.s2,
                borderRadius: "10px",
                border: `1px solid ${C.b1}`,
              }}
            >
              {sample.meta.map((item) => (
                <div key={item.l}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.mu2,
                    marginBottom: "4px",
                  }}>
                    {item.l}
                  </div>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: C.tx,
                  }}>
                    {item.v}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ARTICLE BODY */}
          {sample?.body && (
            <div
              className="cm-art"
              dangerouslySetInnerHTML={{ __html: sample.body }}
            />
          )}
        </div>
      </div>
    </div>
  );
}