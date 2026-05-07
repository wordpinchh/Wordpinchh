"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import { BLOGS } from "@/app/blog/page";
import { FooterSection } from "@/components/home/FooterSection";
import RecommendedSidebar from "@/components/blog/RecommendedSidebar";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const post = BLOGS.find((b) => b.slug === slug);

  if (!post) return notFound();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500;600&display=swap');
        .slug-reader-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }
        @media(min-width: 1025px) {
          .slug-reader-grid {
            grid-template-columns: minmax(0, 1fr) 280px;
            gap: 48px;
          }
        }
        @media(min-width: 1280px) {
          .slug-reader-grid {
            grid-template-columns: minmax(0, 1fr) 300px;
          }
        }
        .slug-sidebar { display: none; }
        @media(min-width: 1025px) { .slug-sidebar { display: block; } }
        * { box-sizing: border-box; }
      `}</style>

      <div
        className="min-h-screen bg-[#0E0D0A] text-[#F0EDE6] overflow-x-hidden"
        style={{ paddingTop: "80px" }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "40px clamp(16px, 5vw, 60px) 100px",
          }}
        >
          <div className="slug-reader-grid">

            {/* ── ARTICLE ── */}
            <article style={{ minWidth: 0, width: "100%" }}>

              {/* Back button */}
              <button
                onClick={() => router.push("/blog")}
                style={{
                  background: "transparent",
                  border: "1px solid #2a2720",
                  color: "floralwhite",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  padding: "8px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  marginBottom: "48px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                ← BACK TO INSIGHTS
              </button>

              {/* Meta row */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.22em", color: "#CAFF4A", textTransform: "uppercase" }}>
                  — {post.category}
                </span>
                <span style={{ border: `1px solid ${post.tagColor}`, color: post.tagColor, fontSize: "10px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em", padding: "3px 8px", borderRadius: "4px", fontWeight: 600, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  {post.tag}
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "lightgray", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {post.date} · {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.8rem, 5vw, 3.5rem)", lineHeight: 0.95, letterSpacing: "-0.02em", fontWeight: 900, color: "#F0EDE6", textTransform: "uppercase", marginBottom: "28px", wordBreak: "break-word" }}>
                {post.title}
              </h1>

              {/* Pull quote */}
              <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2vw, 18px)", color: "#CAFF4A", lineHeight: 1.7, fontStyle: "italic", marginBottom: "40px", paddingLeft: "18px", borderLeft: "3px solid #CAFF4A" }}>
                {post.excerpt}
              </p>

              <div style={{ height: "1px", background: "#2a2720", marginBottom: "40px" }} />

              {/* Content blocks */}
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {post.content.map((block: any, i: number) => {
                  if (block.type === "intro") return (
                    <p key={i} style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2vw, 17px)", color: "#D4CFC8", lineHeight: 1.85, fontStyle: "italic" }}>{block.text}</p>
                  );
                  if (block.type === "heading") return (
                    <h2 key={i} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.2rem, 2.5vw, 2rem)", fontWeight: 900, letterSpacing: "-0.01em", color: "#F0EDE6", textTransform: "uppercase", lineHeight: 1, paddingTop: "8px", borderTop: "1px solid #2a2720" }}>{block.text}</h2>
                  );
                  if (block.type === "text") return (
                    <p key={i} style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2vw, 17px)", color: "lightgray", lineHeight: 1.85 }}>{block.text}</p>
                  );
                  if (block.type === "list") return (
                    <div key={i}>
                      {block.heading && <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", color: "#CAFF4A", textTransform: "uppercase", marginBottom: "14px" }}>{block.heading}</p>}
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {block.items?.map((item: string, j: number) => (
                          <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#CAFF4A", marginTop: "8px", flexShrink: 0 }} />
                            <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(13px, 1.8vw, 16px)", color: "lightgray", lineHeight: 1.75, margin: 0 }}>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                  if (block.type === "quote") return (
                    <div key={i} style={{ background: "#161410", border: "1px solid #2a2720", borderRadius: "12px", padding: "clamp(20px,3vw,32px)", position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", top: "-16px", left: "16px", fontSize: "72px", color: "#CAFF4A", opacity: 0.08, fontFamily: "Georgia, serif", fontStyle: "italic" }}>&ldquo;</div>
                      <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2vw, 20px)", color: "#CAFF4A", lineHeight: 1.8, fontStyle: "italic", margin: 0, position: "relative", zIndex: 1 }}>{block.text}</p>
                    </div>
                  );
                  if (block.type === "closing") return (
                    <div key={i} style={{ background: "#161410", border: "1px solid #2a2720", borderLeft: "3px solid #CAFF4A", borderRadius: "0 8px 8px 0", padding: "24px" }}>
                      <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2vw, 17px)", color: "#F0EDE6", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>{block.text}</p>
                    </div>
                  );
                  return null;
                })}
              </div>

              {/* Bottom CTA */}
              <div style={{ marginTop: "56px", padding: "clamp(20px,3vw,36px)", background: "#161410", border: "1px solid #2a2720", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.22em", color: "#CAFF4A", textTransform: "uppercase" }}>
                  THINK THIS APPLIES TO YOUR BUSINESS?
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.3rem, 2.5vw, 2rem)", fontWeight: 900, color: "#F0EDE6", lineHeight: 0.95, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                  Get a free content audit. No pitch, no pressure.
                </div>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <button
                    onClick={() => window.open("https://wa.me/+917738824485", "_blank")}
                    style={{ background: "#CAFF4A", color: "#0E0D0A", border: "none", padding: "12px 24px", fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", fontWeight: 700, borderRadius: "8px", cursor: "pointer", textTransform: "uppercase" }}
                  >
                    BOOK FREE AUDIT →
                  </button>
                  <button
                    onClick={() => router.push("/blog")}
                    style={{ background: "transparent", color: "floralwhite", border: "1px solid #2a2720", padding: "12px 24px", fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", borderRadius: "8px", cursor: "pointer", textTransform: "uppercase" }}
                  >
                    ← MORE INSIGHTS
                  </button>
                </div>
              </div>

            </article>

            {/* ── SIDEBAR — desktop only ── */}
            <aside className="slug-sidebar" style={{ minWidth: 0 }}>
              <div style={{ position: "sticky", top: "100px" }}>
                <RecommendedSidebar
                  currentPostSlug={post.slug}
                  currentCategory={post.category}
                  onPostClick={(p: any) => router.push(`/blog/${p.slug}`)}
                />
              </div>
            </aside>

          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
