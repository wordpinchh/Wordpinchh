"use client";

import { useEffect, useState, useCallback, useRef } from "react";

// ─── Place your 13 JPGs in /public/linkedin-report/ ───
// Rename them: page-01.jpg, page-02.jpg ... page-13.jpg
const TOTAL_SLIDES = 13;
const slides = Array.from({ length: TOTAL_SLIDES }, (_, i) => ({
  src: `/linkedin-report/page-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `LinkedIn Growth Report – Page ${i + 1} of ${TOTAL_SLIDES}`,
}));

interface LinkedInReportViewerProps {
  visible: boolean; // pass (filter === "li") from parent
}

export default function LinkedInReportViewer({ visible }: LinkedInReportViewerProps) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [lightboxSlide, setLightboxSlide] = useState(0);
  const [entering, setEntering] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  // ── Animate in when visible ──
  useEffect(() => {
    if (visible) {
      setCurrent(0);
      setTimeout(() => setEntering(true), 50);
    } else {
      setEntering(false);
    }
  }, [visible]);

  const prev = useCallback(() =>
    setCurrent((c) => (c === 0 ? TOTAL_SLIDES - 1 : c - 1)), []);
  const next = useCallback(() =>
    setCurrent((c) => (c === TOTAL_SLIDES - 1 ? 0 : c + 1)), []);

  const lbPrev = useCallback(() =>
    setLightboxSlide((c) => (c === 0 ? TOTAL_SLIDES - 1 : c - 1)), []);
  const lbNext = useCallback(() =>
    setLightboxSlide((c) => (c === TOTAL_SLIDES - 1 ? 0 : c + 1)), []);

  // ── Keyboard nav ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox) {
        if (e.key === "ArrowLeft") lbPrev();
        if (e.key === "ArrowRight") lbNext();
        if (e.key === "Escape") setLightbox(false);
      } else if (visible) {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [visible, lightbox, prev, next, lbPrev, lbNext]);

  // ── Lock body scroll when lightbox open ──
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const openLightbox = (idx: number) => {
    setLightboxSlide(idx);
    setLightbox(true);
  };

  if (!visible) return null;

  return (
    <>
      {/* ══════════════════════════════════════════
          MAIN VIEWER SECTION
      ══════════════════════════════════════════ */}
      <section
        style={{
          background: "#0a0908",
          borderBottom: "1px solid rgba(202,255,74,0.12)",
          padding: "56px 0 64px",
          opacity: entering ? 1 : 0,
          transform: entering ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "36px", padding: "0 24px" }}>
          {/* eyebrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "14px" }}>
            <span style={{ display: "block", height: "1px", width: "40px", background: "linear-gradient(to right, transparent, #CAFF4A)" }} />
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "20px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#CAFF4A",
              fontWeight: 600,
            }}>
              LinkedIn · 90-Day Growth Report
            </span>
            <span style={{ display: "block", height: "1px", width: "40px", background: "linear-gradient(to left, transparent, #CAFF4A)" }} />
          </div>

          <h2 style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "clamp(26px, 3vw, 42px)",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 10px",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}>
            From Presence to Performance.
          </h2>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "15px",
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.05em",
            margin: 0,
          }}>
            Scroll through all 13 pages · Click any slide to expand
          </p>
        </div>

        {/* ── Stat pills ── */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "40px",
          padding: "0 24px",
        }}>
          {[
            { val: "44,340", label: "Impressions", growth: "+352%" },
            { val: "645",    label: "Engagements", growth: "+108%" },
            { val: "2,851",  label: "Followers",   growth: "+37%"  },
            { val: "25,413", label: "Profile Views",growth: "+1,531%" },
          ].map((s) => (
            <div key={s.label} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "10px",
              padding: "12px 20px",
              textAlign: "center",
              minWidth: "110px",
            }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "20px", fontWeight: 700, color: "#CAFF4A" }}>{s.val}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>{s.label}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#CAFF4A", opacity: 0.7, marginTop: "6px" }}>{s.growth}</div>
            </div>
          ))}
        </div>

        {/* ── Slide viewer ── */}
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 20px" }}>

          {/* Slide container */}
          <div
            ref={slideRef}
            style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(202,255,74,0.15)",
              background: "#111",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(202,255,74,0.06)",
              cursor: "zoom-in",
            }}
            onClick={() => openLightbox(current)}
          >
            {/* Slide image */}
            <img
              key={current}
              src={slides[current].src}
              alt={slides[current].alt}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                userSelect: "none",
                animation: "slideIn 0.3s ease",
              }}
              draggable={false}
            />

            {/* Page badge */}
            <div style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              background: "rgba(0,0,0,0.72)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(202,255,74,0.25)",
              borderRadius: "20px",
              padding: "4px 12px",
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "#CAFF4A",
              letterSpacing: "0.12em",
              fontWeight: 600,
            }}>
              {current + 1} / {TOTAL_SLIDES}
            </div>

            {/* Expand hint */}
            <div style={{
              position: "absolute",
              bottom: "14px",
              right: "14px",
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              padding: "5px 10px",
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.08em",
              pointerEvents: "none",
            }}>
              ⊕ expand
            </div>

            {/* Left arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous slide"
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#ffffff",
                fontSize: "18px",
                transition: "all 0.2s",
                zIndex: 2,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(202,255,74,0.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "#CAFF4A";
                (e.currentTarget as HTMLElement).style.color = "#CAFF4A";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.65)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
              }}
            >
              ‹
            </button>

            {/* Right arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next slide"
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#ffffff",
                fontSize: "18px",
                transition: "all 0.2s",
                zIndex: 2,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(202,255,74,0.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "#CAFF4A";
                (e.currentTarget as HTMLElement).style.color = "#CAFF4A";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.65)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
              }}
            >
              ›
            </button>
          </div>

          {/* ── Dot navigation ── */}
          <div style={{ display: "flex", justifyContent: "center", gap: "7px", marginTop: "20px", flexWrap: "wrap" }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === current ? "24px" : "7px",
                  height: "7px",
                  borderRadius: "4px",
                  background: i === current ? "#CAFF4A" : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.25s ease",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          {/* ── Thumbnail strip ── */}
          <div style={{
            display: "flex",
            gap: "8px",
            marginTop: "20px",
            overflowX: "auto",
            paddingBottom: "8px",
            scrollbarWidth: "none",
          }}>
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  flexShrink: 0,
                  width: "72px",
                  height: "auto",
                  borderRadius: "6px",
                  overflow: "hidden",
                  border: i === current
                    ? "2px solid #CAFF4A"
                    : "2px solid rgba(255,255,255,0.07)",
                  background: "none",
                  cursor: "pointer",
                  padding: 0,
                  opacity: i === current ? 1 : 0.45,
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = i === current ? "1" : "0.45"; }}
              >
                <img
                  src={slide.src}
                  alt={`Thumb ${i + 1}`}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  draggable={false}
                />
              </button>
            ))}
          </div>

          {/* ── Action buttons ── */}
          <div style={{ display: "flex", gap: "12px", marginTop: "28px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/linkedin-report/Wordpinchh_Brand_Growth_Report_v2.pdf"
              download
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#0E0D0A",
                background: "#CAFF4A",
                border: "none",
                borderRadius: "6px",
                padding: "12px 24px",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
            >
              ↓ Download Report
            </a>

            <button
              onClick={() => openLightbox(current)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#CAFF4A",
                background: "transparent",
                border: "1px solid rgba(202,255,74,0.35)",
                borderRadius: "6px",
                padding: "12px 24px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(202,255,74,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "#CAFF4A";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(202,255,74,0.35)";
              }}
            >
              ⊕ View Fullscreen
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIGHTBOX
      ══════════════════════════════════════════ */}
      {lightbox && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(0,0,0,0.96)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            animation: "fadeIn 0.2s ease",
          }}
          onClick={() => setLightbox(false)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(false)}
            style={{
              position: "fixed",
              top: "20px",
              right: "24px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#ffffff",
              fontSize: "20px",
              zIndex: 100000,
              transition: "all 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(202,255,74,0.15)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"}
          >
            ×
          </button>

          {/* Page counter */}
          <div style={{
            position: "fixed",
            top: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: "#CAFF4A",
            letterSpacing: "0.15em",
            background: "rgba(0,0,0,0.6)",
            padding: "6px 14px",
            borderRadius: "20px",
            border: "1px solid rgba(202,255,74,0.2)",
          }}>
            {lightboxSlide + 1} / {TOTAL_SLIDES}
          </div>

          {/* Image */}
          <img
            key={lightboxSlide}
            src={slides[lightboxSlide].src}
            alt={slides[lightboxSlide].alt}
            onClick={e => e.stopPropagation()}
            style={{
              maxHeight: "75vh",
              maxWidth: "min(700px, 90vw)",
              width: "auto",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 32px 100px rgba(0,0,0,0.8)",
              border: "1px solid rgba(202,255,74,0.15)",
              animation: "slideIn 0.25s ease",
              userSelect: "none",
            }}
            draggable={false}
          />

          {/* Lb Left */}
          <button
            onClick={e => { e.stopPropagation(); lbPrev(); }}
            style={{
              position: "fixed",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#ffffff",
              fontSize: "22px",
              transition: "all 0.2s",
              zIndex: 100000,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#CAFF4A"; (e.currentTarget as HTMLElement).style.borderColor = "#CAFF4A"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; }}
          >‹</button>

          {/* Lb Right */}
          <button
            onClick={e => { e.stopPropagation(); lbNext(); }}
            style={{
              position: "fixed",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#ffffff",
              fontSize: "22px",
              transition: "all 0.2s",
              zIndex: 100000,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#CAFF4A"; (e.currentTarget as HTMLElement).style.borderColor = "#CAFF4A"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; }}
          >›</button>

          {/* Lb dot nav */}
          <div style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "6px",
          }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setLightboxSlide(i); }}
                style={{
                  width: i === lightboxSlide ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === lightboxSlide ? "#CAFF4A" : "rgba(255,255,255,0.25)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.2s",
                }}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.98); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        /* Hide thumbnail scrollbar */
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}
