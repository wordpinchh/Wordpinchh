"use client";

import { useState } from "react";
import Link from "next/link";
import { FooterSection } from "@/components/home/FooterSection";
import RecommendedSidebar from "@/components/blog/RecommendedSidebar";
import { BLOGS, CATEGORIES, Blog } from "./data";

// ─── TAG BADGE ────────────────────────────────────────────────────────────────
const TagBadge = ({ tag, color }: { tag: string; color: string }) => (
  <span style={{
    borderTop: `1px solid ${color}`,
    borderRight: `1px solid ${color}`,
    borderBottom: `1px solid ${color}`,
    borderLeft: `1px solid ${color}`,
    color,
    fontSize: "clamp(9px, 1.5vw, 12px)", fontFamily: "'DM Mono', monospace",
    letterSpacing: "0.15em", padding: "3px 8px", borderRadius: "4px",
    fontWeight: 600, textTransform: "uppercase" as const, whiteSpace: "nowrap" as const,
    flexShrink: 0,
  }}>
    {tag}
  </span>
);

// ─── BLOG READER ──────────────────────────────────────────────────────────────
const BlogReader = ({ post, onBack, onPostClick }: { post: Blog; onBack: () => void; onPostClick?: (p: Blog) => void }) => (
  /*
   * LAYOUT:
   * Mobile / tablet (<1025px): full-width single column, no sidebar
   * Desktop (≥1025px): article takes remaining width, sidebar is 300px fixed
   *
   * KEY FIX: article column has minWidth:0 so it never overflows the grid.
   * The outer wrapper uses overflow:hidden to clip any accidental bleed.
   */
  <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "40px clamp(16px,5vw,60px) 100px" }}>
    <div className="reader-grid">
      {/* ── ARTICLE ─────────────────────────────────── */}
      <article style={{ minWidth: 0, width: "100%" }}>
        <button onClick={onBack} style={{
          background: "transparent", border: "1px solid #2a2720", color: "floralwhite",
          fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.18em",
          padding: "8px 20px", borderRadius: "6px", cursor: "pointer",
          textTransform: "uppercase" as const, marginBottom: "48px",
          display: "inline-flex", alignItems: "center", gap: "8px",
        }}>
          ← BACK TO INSIGHTS
        </button>

        {/* Meta */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px", flexWrap: "wrap" as const }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.22em", color: "#CAFF4A", textTransform: "uppercase" as const }}>
            — {post.category}
          </span>
          <TagBadge tag={post.tag} color={post.tagColor} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "lightgray", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>
            {post.date} · {post.readTime}
          </span>
        </div>

        {/* Title — clamp keeps it readable on every screen */}
        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
          lineHeight: 0.95, letterSpacing: "-0.02em", fontWeight: 900,
          color: "#F0EDE6", textTransform: "uppercase" as const,
          marginBottom: "28px", wordBreak: "break-word" as const,
        }}>
          {post.title}
        </h1>

        {/* Pull quote */}
        <p style={{
          fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2vw, 18px)",
          color: "#CAFF4A", lineHeight: 1.7, fontStyle: "italic",
          marginBottom: "40px", paddingLeft: "18px", borderLeft: "3px solid #CAFF4A",
        }}>
          {post.excerpt}
        </p>

        <div style={{ height: "1px", background: "#2a2720", marginBottom: "40px" }} />

        {/* Content blocks */}
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "28px" }}>
          {post.content.map((block, i) => {
            if (block.type === "intro") return (
              <p key={i} style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2vw, 17px)", color: "#D4CFC8", lineHeight: 1.85, fontStyle: "italic" }}>
                {block.text}
              </p>
            );
            if (block.type === "heading") return (
              <h2 key={i} style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                fontWeight: 900, letterSpacing: "-0.01em", color: "#F0EDE6",
                textTransform: "uppercase" as const, lineHeight: 1,
                paddingTop: "8px", borderTop: "1px solid #2a2720",
              }}>
                {block.text}
              </h2>
            );
            if (block.type === "text") return (
              <p key={i} style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2vw, 17px)", color: "lightgray", lineHeight: 1.85 }}>
                {block.text}
              </p>
            );
            if (block.type === "list") return (
              <div key={i}>
                {block.heading && <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", color: "#CAFF4A", textTransform: "uppercase" as const, marginBottom: "14px" }}>{block.heading}</p>}
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  {block.items?.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#CAFF4A", marginTop: "8px", flexShrink: 0 }} />
                      <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(13px, 1.8vw, 16px)", color: "lightgray", lineHeight: 1.75, margin: 0 }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
            if (block.type === "quote") return (
              <div key={i} style={{
                background: "#161410", border: "1px solid #2a2720", borderRadius: "12px",
                padding: "clamp(20px,3vw,32px)", position: "relative" as const, overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: "-16px", left: "16px", fontSize: "72px", color: "#CAFF4A", opacity: 0.08, fontFamily: "Georgia, serif", fontStyle: "italic" }}>&ldquo;</div>
                <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2vw, 20px)", color: "#CAFF4A", lineHeight: 1.8, fontStyle: "italic", margin: 0, position: "relative" as const, zIndex: 1 }}>
                  {block.text}
                </p>
              </div>
            );
            if (block.type === "closing") return (
              <div key={i} style={{ background: "#161410", borderTop: "1px solid #2a2720", borderRight: "1px solid #2a2720", borderBottom: "1px solid #2a2720", borderLeft: "3px solid #CAFF4A", borderRadius: "0 8px 8px 0", padding: "24px 24px" }}>
                <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2vw, 17px)", color: "#F0EDE6", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>
                  {block.text}
                </p>
              </div>
            );
            return null;
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: "56px", padding: "clamp(20px,3vw,36px)", background: "#161410", border: "1px solid #2a2720", borderRadius: "12px", display: "flex", flexDirection: "column" as const, gap: "18px" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.22em", color: "#CAFF4A", textTransform: "uppercase" as const }}>
            THINK THIS APPLIES TO YOUR BUSINESS?
          </div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.3rem, 2.5vw, 2rem)", fontWeight: 900, color: "#F0EDE6", lineHeight: 0.95, textTransform: "uppercase" as const, letterSpacing: "-0.01em" }}>
            Get a free content audit. No pitch, no pressure.
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
            <button onClick={() => window.open("https://wa.me/+917738824485", "_blank")} style={{
              background: "#CAFF4A", color: "#0E0D0A", border: "none", padding: "12px 24px",
              fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.15em",
              fontWeight: 700, borderRadius: "8px", cursor: "pointer", textTransform: "uppercase" as const,
            }}>
              BOOK FREE AUDIT →
            </button>
            <button onClick={onBack} style={{
              background: "transparent", color: "floralwhite", border: "1px solid #2a2720",
              padding: "12px 24px", fontFamily: "'DM Mono', monospace", fontSize: "11px",
              letterSpacing: "0.15em", borderRadius: "8px", cursor: "pointer", textTransform: "uppercase" as const,
            }}>
              ← MORE INSIGHTS
            </button>
          </div>
        </div>
      </article>

      {/* ── SIDEBAR — only visible ≥1025px via CSS ──── */}
      <aside className="blog-sidebar" style={{ minWidth: 0 }}>
        <div style={{ position: "sticky", top: "100px" }}>
          <RecommendedSidebar currentPostSlug={post.slug} currentCategory={post.category} onPostClick={onPostClick} />
        </div>
      </aside>
    </div>
  </div>
);

// ─── FEATURED CARD ────────────────────────────────────────────────────────────
const FeaturedCard = ({ post }: { post: Blog }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        className="featured-card-grid"
        style={{
          background: hovered ? "linear-gradient(135deg,#161410,#1A1A15)" : "#161410",
          border: `1px solid ${hovered ? "#CAFF4A" : "#2a2720"}`,
          borderRadius: "16px", padding: "clamp(20px,4vw,48px)",
          cursor: "pointer", transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? "0 20px 40px rgba(202,255,74,0.12)" : "none",
          display: "grid", gridTemplateColumns: "1fr", gap: "28px",
          position: "relative" as const, overflow: "hidden",
        }}
      >
      <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle,rgba(202,255,74,0.04) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", flexWrap: "wrap" as const }}>
          <span style={{ fontSize: "clamp(10px,2vw,13px)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.22em", color: "#CAFF4A", textTransform: "uppercase" as const }}>— {post.category}</span>
          <TagBadge tag={post.tag} color={post.tagColor} />
          <span style={{ background: "#CAFF4A", color: "#0E0D0A", fontSize: "10px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em", padding: "3px 8px", borderRadius: "4px", fontWeight: 700, textTransform: "uppercase" as const }}>FEATURED</span>
        </div>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.5rem,3.5vw,2.8rem)", lineHeight: 0.95, color: "#F0EDE6", marginBottom: "16px", letterSpacing: "-0.02em", fontWeight: 900, textTransform: "uppercase" as const, wordBreak: "break-word" as const }}>
          {post.title}
        </h2>
        <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px,2vw,18px)", color: "floralwhite", lineHeight: 1.8, marginBottom: "28px", fontStyle: "italic" }}>
          {post.excerpt}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" as const }}>
          <div style={{ background: "#CAFF4A", color: "#0E0D0A", padding: "11px 24px", fontFamily: "'DM Mono', monospace", fontSize: "clamp(10px,2vw,13px)", letterSpacing: "0.18em", fontWeight: 700, borderRadius: "8px", textTransform: "uppercase" as const, display: "inline-flex", alignItems: "center", gap: "6px" }}>
            READ ARTICLE <span style={{ display: "inline-block", transition: "transform 0.3s ease", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>→</span>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(10px,2vw,12px)", color: "lightgray", letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
            {post.date} · {post.readTime}
          </div>
        </div>
      </div>
      {/* Right visual panel — shown only on md+ */}
      <div className="featured-right-panel" style={{
        background: "#0E0D0A", border: "1px solid #2a2720", borderRadius: "12px",
        height: "240px", display: "flex", flexDirection: "column" as const,
        alignItems: "center", justifyContent: "center", position: "relative" as const, overflow: "hidden",
      }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px,7vw,90px)", color: "#1f1d1a", lineHeight: 1, textAlign: "center" as const, userSelect: "none" as const, padding: "0 16px" }}>{post.category}</div>
        <div style={{ width: "36px", height: "2px", background: "#CAFF4A", marginTop: "12px", opacity: hovered ? 1 : 0.3, transition: "opacity 0.3s ease" }} />
        <div style={{ position: "absolute", bottom: "12px", right: "12px", fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#2a2720", letterSpacing: "0.2em" }}>01 / 0{BLOGS.length}</div>
        <div style={{ position: "absolute", top: "12px", left: "12px", width: "5px", height: "5px", borderRadius: "50%", background: hovered ? "#CAFF4A" : "#2a2720", transition: "background 0.3s ease" }} />
      </div>
    </div>
    </Link>
  );
};

// ─── BLOG CARD ────────────────────────────────────────────────────────────────
const BlogCard = ({ post, index }: { post: Blog; index: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? "linear-gradient(135deg,#161410,#1A1A15)" : "#161410",
          border: `1px solid ${hovered ? "#CAFF4A" : "#2a2720"}`,
          borderRadius: "12px", padding: "clamp(18px,3vw,28px)", cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
          boxShadow: hovered ? "0 12px 24px rgba(202,255,74,0.1)" : "none",
          display: "flex", flexDirection: "column" as const, gap: "12px",
          position: "relative" as const, overflow: "hidden",
        }}
      >
      <div style={{ position: "absolute", top: "-6px", right: "12px", fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px,6vw,80px)", color: "#1a1815", userSelect: "none" as const, lineHeight: 1 }}>
        0{index + 2}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" as const }}>
        <span style={{ fontSize: "clamp(9px,1.8vw,12px)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.2em", color: "lightgray", textTransform: "uppercase" as const }}>{post.category}</span>
        <TagBadge tag={post.tag} color={post.tagColor} />
      </div>
      <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.1rem,2.2vw,1.6rem)", lineHeight: 1.05, color: "#F0EDE6", fontWeight: 900, letterSpacing: "-0.01em", textTransform: "uppercase" as const, flex: 1, wordBreak: "break-word" as const }}>
        {post.title}
      </h3>
      <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(13px,1.8vw,16px)", color: "floralwhite", lineHeight: 1.75, fontStyle: "italic" }}>
        {post.excerpt}
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #2a2720", paddingTop: "12px", marginTop: "auto" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(9px,1.8vw,12px)", color: "lightgray", letterSpacing: "0.15em", textTransform: "uppercase" as const }}>{post.date} · {post.readTime}</div>
        <span style={{ color: hovered ? "#CAFF4A" : "#2a2720", fontSize: "16px", transition: "all 0.3s ease", display: "inline-block", transform: hovered ? "translateX(5px)" : "translateX(0)" }}>→</span>
      </div>
    </div>
    </Link>
  );
};

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered = activeCategory === "ALL" ? BLOGS : BLOGS.filter((p) => p.category === activeCategory);
  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);
  const tickerItems = CATEGORIES.filter((c) => c !== "ALL");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500;600&display=swap');

        /* ── Ticker ────────────────────────────────────────────── */
        @keyframes ticker-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .ticker-track { display:flex; width:max-content; animation:ticker-scroll 22s linear infinite; will-change:transform; }
        .ticker-track:hover { animation-play-state:paused; }

        /* ── Horizontal page padding ───────────────────────────── */
        .page-pad { padding-left:clamp(16px,5vw,60px); padding-right:clamp(16px,5vw,60px); }

        /* ── Hero grid ─────────────────────────────────────────── */
        .hero-grid { display:grid; grid-template-columns:1fr; gap:28px; align-items:flex-end; padding-bottom:48px; border-bottom:1px solid #2a2720; }
        @media(min-width:860px){ .hero-grid{ grid-template-columns:1fr 1fr; gap:56px; } }

        /* ── Featured card: 1-col mobile → 2-col ≥768px ─────────── */
        .featured-card-grid { grid-template-columns:1fr !important; }
        @media(min-width:768px){ .featured-card-grid{ grid-template-columns:1fr 1fr !important; } }

        /* ── Featured right panel: hidden on mobile ─────────────── */
        .featured-right-panel { display:none !important; }
        @media(min-width:768px){ .featured-right-panel{ display:flex !important; } }

        /* ── Blog grid: responsive columns ──────────────────────── */
        .blog-grid { display:grid; grid-template-columns:1fr; gap:16px; }
        @media(min-width:600px){ .blog-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(min-width:1024px){ .blog-grid{ grid-template-columns:repeat(3,1fr); } }

        /* ── CTA bar ─────────────────────────────────────────────── */
        .cta-bar { display:flex; flex-direction:column; gap:24px; }
        @media(min-width:768px){ .cta-bar{ flex-direction:row; align-items:center; justify-content:space-between; } }

        /* ─────────────────────────────────────────────────────────
           READER GRID — THE KEY FIX
           Mobile / tablet (<1025px): single full-width column
           Desktop (≥1025px): article gets remaining space, sidebar 280px
           minWidth:0 on BOTH columns prevents overflow.
        ──────────────────────────────────────────────────────────── */
        .reader-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }
        @media(min-width:1025px){
          .reader-grid {
            grid-template-columns: minmax(0,1fr) 280px;
            gap: 48px;
          }
        }
        @media(min-width:1280px){
          .reader-grid {
            grid-template-columns: minmax(0,1fr) 300px;
          }
        }

        /* ── Sidebar: hidden until desktop ──────────────────────── */
        .blog-sidebar { display:none; }
        @media(min-width:1025px){ .blog-sidebar{ display:block; } }

        /* ── Stats row ───────────────────────────────────────────── */
        .stats-row { display:flex; align-items:center; flex-wrap:wrap; gap:0; }

        * { box-sizing:border-box; }
      `}</style>

      <div className="min-h-screen bg-[#0E0D0A] text-[#F0EDE6] overflow-x-hidden" style={{ paddingTop: "16px" }}>

        {/* ── TICKER ──────────────────────────────────────────── */}
            <div style={{ paddingTop: "80px" }}>
              <div style={{ background: "#161410", borderBottom: "1px solid #2a2720", borderTop: "1px solid #2a2720", overflow: "hidden", padding: "10px 0" }}>
                <div className="ticker-track">
                  {[...tickerItems, ...tickerItems].map((c, i) => (
                    <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.22em", color: "lightgray", display: "inline-flex", alignItems: "center", gap: "14px", paddingRight: "52px", textTransform: "uppercase" as const, whiteSpace: "nowrap" as const }}>
                      {c} <span style={{ color: "#CAFF4A" }}>•</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── HERO ──────────────────────────────────────────────── */}
            <div className="page-pad" style={{ paddingTop: "56px", paddingBottom: "0", maxWidth: "1400px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
                <div style={{ width: "28px", height: "1px", background: "floralwhite", flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(10px,2vw,13px)", letterSpacing: "0.25em", color: "floralwhite", textTransform: "uppercase" as const }}>INSIGHTS</span>
              </div>

              <div className="hero-grid">
                <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem,9vw,8rem)", lineHeight: 0.88, letterSpacing: "-0.02em", fontWeight: 900, margin: 0, textTransform: "uppercase" as const }}>
                  <span style={{ color: "#F0EDE6", display: "block" }}>WORDS</span>
                  <span style={{ display: "block", WebkitTextStroke: "2px #F0EDE6", WebkitTextFillColor: "transparent" }}>THAT</span>
                  <span style={{ color: "#CAFF4A", display: "block" }}>WORK.</span>
                </h1>
                <div style={{ paddingBottom: "4px" }}>
                  <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(15px,2.5vw,20px)", color: "floralwhite", lineHeight: 1.8, fontStyle: "italic", marginBottom: "32px" }}>
                    Frameworks, case studies, and uncomfortable truths about content that actually ranks — in Google, AI engines, and in buyers&apos; minds.
                  </p>
                  <div className="stats-row">
                    {[{ value: BLOGS.length, label: "ARTICLES", accent: false }, { value: CATEGORIES.length - 1, label: "TOPICS", accent: false }, { value: "WK", label: "UPDATED", accent: true }].map((s, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center" }}>
                        {i > 0 && <div style={{ width: "1px", height: "36px", background: "#2a2720", margin: "0 20px" }} />}
                        <div>
                          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: s.accent ? "#CAFF4A" : "#F0EDE6", lineHeight: 1 }}>{s.value}</div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(9px,1.5vw,12px)", letterSpacing: "0.18em", color: "lightgray", marginTop: "3px", textTransform: "uppercase" as const }}>{s.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── CATEGORY FILTER ───────────────────────────────────── */}
            <div className="page-pad" style={{ paddingTop: "28px", paddingBottom: "0", maxWidth: "1400px", margin: "0 auto" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
                {CATEGORIES.map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                    background: activeCategory === cat ? "#CAFF4A" : "transparent",
                    color: activeCategory === cat ? "#0E0D0A" : "floralwhite",
                    border: `1px solid ${activeCategory === cat ? "#CAFF4A" : "#2a2720"}`,
                    padding: "7px 14px", borderRadius: "6px", fontFamily: "'DM Mono', monospace",
                    fontSize: "clamp(9px,1.8vw,12px)", letterSpacing: "0.15em", cursor: "pointer",
                    transition: "all 0.2s ease", fontWeight: activeCategory === cat ? 700 : 400, textTransform: "uppercase" as const,
                  }}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* ── BLOG CONTENT ──────────────────────────────────────── */}
            <div className="page-pad" style={{ paddingTop: "24px", paddingBottom: "60px", maxWidth: "1400px", margin: "0 auto" }}>
              {filtered.length === 0 && (
                <div style={{ textAlign: "center" as const, padding: "80px 0", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.18em", color: "lightgray", textTransform: "uppercase" as const }}>
                  No articles in this category yet. Check back soon.
                </div>
              )}
              {featured && (
                <div style={{ marginBottom: "20px" }}>
                  <FeaturedCard post={featured} />
                </div>
              )}
              {rest.length > 0 && (
                <div className="blog-grid" style={{ marginBottom: "52px" }}>
                  {rest.map((post, i) => <BlogCard key={post.id} post={post} index={i} />)}
                </div>
              )}

              {/* ── CTA BAR ─────────────────────────────────────────── */}
              <div className="cta-bar" style={{ background: "#161410", border: "1px solid #2a2720", borderRadius: "16px", padding: "clamp(24px,4vw,48px) clamp(20px,5vw,52px)" }}>
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(9px,1.8vw,12px)", letterSpacing: "0.22em", color: "#CAFF4A", marginBottom: "12px", textTransform: "uppercase" as const }}>CONTENT COMPOUNDS. EVERY WEEK.</div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.5rem,3.5vw,3rem)", color: "#F0EDE6", lineHeight: 0.92, letterSpacing: "0.01em", marginBottom: "10px" }}>YOUR COMPETITORS ARE READING THIS.</div>
                  <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px,2vw,18px)", color: "floralwhite", fontStyle: "italic", lineHeight: 1.6 }}>Not publishing is a week they&apos;re pulling ahead.</div>
                </div>
                <button onClick={() => window.open("https://wa.me/+917738824485", "_blank")} style={{
                  background: "#CAFF4A", color: "#0E0D0A", border: "none", padding: "14px 32px",
                  fontFamily: "'DM Mono', monospace", fontSize: "clamp(10px,1.8vw,13px)",
                  letterSpacing: "0.18em", fontWeight: 700, borderRadius: "8px", cursor: "pointer",
                  whiteSpace: "nowrap" as const, textTransform: "uppercase" as const,
                  flexShrink: 0, alignSelf: "flex-start" as const,
                }}>
                  GET FREE CONTENT AUDIT →
                </button>
              </div>
            </div>
      </div>
      <FooterSection />
    </>
  );
}
