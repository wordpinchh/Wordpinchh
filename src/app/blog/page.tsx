"use client";

import { useState } from "react";
import { FooterSection } from "@/components/home/FooterSection";

const BLOGS = [
  {
    id: 1,
    slug: "website-not-getting-leads",
    category: "CONVERSION",
    tag: "CORE",
    tagColor: "#CAFF4A",
    title: "Why Your Website Isn't Getting Leads (And It's Not an SEO Problem)",
    excerpt:
      "Your website probably isn't broken. It's just not clear enough. Most low-converting sites fail on messaging, structure, and trust — not traffic.",
    author: "Wordpinchh Team",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    featured: true,
    seoTitle: "Why Your Website Isn't Getting Leads (And How to Fix It) | Wordpinchh",
    metaDesc:
      "Is your website getting traffic but no leads? Discover the real reasons your site isn't converting — poor messaging, weak CTAs, and misaligned structure — and learn exactly how to fix it.",
    content: [
      { type: "intro", text: "Your website probably isn't broken. It's just not clear enough. Many websites look polished on the surface — clean layout, good design, maybe even decent traffic — but still fail to generate leads. The problem almost always comes down to one thing: the message doesn't land." },
      { type: "heading", text: "Why Your Website Isn't Converting" },
      { type: "text", text: "When a website fails to generate leads, most business owners assume the issue is traffic — they need more visitors. But traffic without clarity is just wasted attention. The real conversion killers are almost always messaging, structure, and trust." },
      { type: "list", heading: "The core issues:", items: [
        "Unclear value proposition — visitors can't tell within five seconds what you do and who you help.",
        "Weak or missing calls to action — a website without clear next steps is like a shop with no checkout counter.",
        "Content written for the business, not the buyer — features instead of outcomes push visitors away.",
        "Poor page structure — important messages buried where most visitors never reach.",
        "No trust signals — testimonials, case studies, and client names all matter.",
      ]},
      { type: "heading", text: "Common Website Messaging Mistakes" },
      { type: "text", text: "Most low-converting websites share a handful of messaging patterns that quietly kill results. Leading with 'we' instead of 'you'. Features over outcomes. No emotional acknowledgement of where the reader is right now. Trying to speak to everyone — which means connecting with no one." },
      { type: "heading", text: "How to Fix Low-Converting Pages" },
      { type: "text", text: "You don't need a full website overhaul. Start with your homepage headline — rewrite it to state clearly who you help, what you help them do, and the outcome they can expect. Audit your calls to action. Add proof near your CTAs. Rewrite from the reader's perspective." },
      { type: "list", heading: "What high-converting pages include:", items: [
        "A specific, outcome-led headline above the fold",
        "A clear primary CTA — visible without scrolling",
        "Proof — a testimonial, case study reference, or client logo",
        "A problem/solution narrative that follows the reader's journey",
        "A low-friction next step — an audit call, checklist download, or direct enquiry form",
      ]},
      { type: "closing", text: "More traffic won't fix a conversion problem. Better messaging will. If your website isn't generating leads, the most valuable thing you can do right now isn't run ads or chase backlinks — it's review your copy and ask whether a complete stranger could land on your homepage and immediately understand why they should work with you." },
    ],
  },
  {
    id: 2,
    slug: "content-marketing-vs-strategy",
    category: "CONTENT STRATEGY",
    tag: "CORE",
    tagColor: "#CAFF4A",
    title: "Content Marketing vs Content Strategy: Most Founders Confuse the Two",
    excerpt:
      "Most businesses don't have a content problem. They have a strategy problem. Here's the difference — and why getting the order wrong costs you everything.",
    author: "Wordpinchh Team",
    date: "Apr 22, 2026",
    readTime: "7 min read",
    featured: false,
    seoTitle: "Content Marketing vs Content Strategy: What Founders Get Wrong | Wordpinchh",
    metaDesc:
      "Content marketing and content strategy are not the same thing — and confusing them is why most founders' content never gains traction. Here's the difference and how to fix it.",
    content: [
      { type: "intro", text: "Most businesses don't have a content problem. They have a strategy problem. You've probably been there: posting consistently for months, writing blogs, showing up on LinkedIn — but the enquiries never come. That's not a content creation failure. That's what happens when you start executing before you've built the foundation." },
      { type: "heading", text: "What Is Content Marketing?" },
      { type: "text", text: "Content marketing is the execution layer. It's the doing — creating articles, writing LinkedIn posts, producing videos, sending newsletters. It answers: What are we publishing? How often? Where? Content marketing is visible, schedulable, and measurable by volume. And because it's visible, it's the thing most founders jump into first." },
      { type: "heading", text: "What Is Content Strategy?" },
      { type: "text", text: "Content strategy is the planning layer. It comes before execution and answers the deeper questions: Why are we creating content? Who is it actually for? What business goal does it serve? How does each piece connect to the next? Without it, everything you publish is disconnected — individual pieces that don't build toward anything." },
      { type: "list", heading: "The key differences:", items: [
        "Content Marketing — Execution and distribution. Answers: What are we publishing?",
        "Content Strategy — Planning and direction. Answers: Why are we publishing it?",
        "Without strategy: high output, low return.",
        "Without execution: good plan, no results.",
        "Strategy is the map. Content marketing is the driving.",
      ]},
      { type: "heading", text: "How to Build a Proper Content Strategy" },
      { type: "list", heading: "Five steps that actually work:", items: [
        "Define your audience precisely — not 'SME owners' but a specific role, company size, and pain point.",
        "Identify three to five content pillars — the recurring themes at the intersection of your expertise and their problems.",
        "Map content to intent — awareness, consideration, and decision stage pieces.",
        "Set a cadence you can sustain — one excellent piece per week beats three mediocre ones.",
        "Define what success looks like — inbound enquiries, email subscribers, DMs from ideal clients.",
      ]},
      { type: "closing", text: "If your content has felt like a lot of effort for very little return, the answer probably isn't to publish more. It's to take a step back and build the foundation that makes everything you publish work harder. Strategy first. Execution second. That's the order most founders get backwards — and the order that makes all the difference." },
    ],
  },
  {
    id: 3,
    slug: "why-blog-not-ranking",
    category: "SEO",
    tag: "CORE",
    tagColor: "#CAFF4A",
    title: "The Real Reason Your Blog Isn't Ranking on Google",
    excerpt:
      "Many blogs fail to rank not because of lack of effort, but because they miss what search engines are actually looking for. The fix is almost always diagnosable.",
    author: "Wordpinchh Team",
    date: "Apr 15, 2026",
    readTime: "8 min read",
    featured: false,
    seoTitle: "Why Your Blog Isn't Ranking on Google (And How to Fix It) | Wordpinchh",
    metaDesc:
      "If your blog isn't getting traffic from Google, the fix usually isn't more content — it's better targeting. Here are the real reasons blogs fail to rank and how to address each one.",
    content: [
      { type: "intro", text: "Many blogs fail to rank not because of lack of effort, but because they miss what search engines are actually looking for. If you've been publishing regularly and your blog traffic is still flat, you're in good company — and the issues are almost always diagnosable." },
      { type: "heading", text: "Common Blog SEO Mistakes" },
      { type: "list", heading: "The real culprits:", items: [
        "Targeting the wrong keywords — too competitive, or so broad they never connect with a specific search intent.",
        "Thin or surface-level content — depth isn't about word count, it's about how thoroughly you address the question.",
        "Ignoring search intent — a post that answers the wrong type of question for a keyword won't rank even if it's well-written.",
        "Weak internal linking — isolated posts miss out on significant ranking potential.",
        "No authority signals — a new site with no backlinks will struggle regardless of content quality.",
      ]},
      { type: "heading", text: "How Google Evaluates Blog Content" },
      { type: "text", text: "Google's primary objective is user satisfaction. When someone clicks on a result, Google watches what happens next — do they stay and read, or click back immediately? Beyond behaviour, Google considers relevance, quality, and authority. This is why generic, thinly-researched posts rarely rank even if they're technically optimised." },
      { type: "heading", text: "How to Fix Ranking Issues" },
      { type: "list", heading: "The actionable fixes:", items: [
        "Revisit your keyword targeting — find specific, lower-competition terms realistic for your current domain authority.",
        "Improve existing content before publishing more — updating underperforming posts often generates faster results.",
        "Build internal links systematically — every new post should link to at least two or three existing relevant posts.",
        "Focus on search intent alignment — search your target keyword yourself and study what's already ranking.",
        "Build authority gradually — guest posting, citations, and content worth linking to all compound over time.",
      ]},
      { type: "heading", text: "What High-Ranking Blogs Do Differently" },
      { type: "text", text: "The blogs that consistently earn Google traffic write for a specific audience with specific problems. They answer the actual question behind the search, not just the surface-level query. They structure content so it's easy to scan. They update content regularly. And they build around topic clusters with multiple posts covering related angles that reinforce each other's authority." },
      { type: "closing", text: "Ranking on Google isn't magic. It's about producing the most genuinely useful, well-structured answer to the questions your audience is already searching for — on a website that has earned enough credibility to be trusted. Fix the fundamentals first. Then build consistently. The results take time, but they compound in a way that paid traffic simply can't match." },
    ],
  },
];

const CATEGORIES = ["ALL", ...Array.from(new Set(BLOGS.map((b) => b.category)))];

interface Blog {
  id: number; slug: string; category: string; tag: string; tagColor: string;
  title: string; excerpt: string; author: string; date: string; readTime: string;
  featured: boolean; seoTitle: string; metaDesc: string;
  content: Array<{ type: string; text?: string; heading?: string; items?: string[] }>;
}

// ─── TAG BADGE ────────────────────────────────────────────────────────────────
const TagBadge = ({ tag, color }: { tag: string; color: string }) => (
  <span style={{
    border: `1px solid ${color}`, color,
    fontSize: "clamp(11px, 1.8vw, 13px)",
    fontFamily: "'DM Mono', monospace",
    letterSpacing: "0.18em", padding: "3px 10px",
    borderRadius: "4px", fontWeight: 600,
    textTransform: "uppercase" as const,
    whiteSpace: "nowrap" as const,
  }}>
    {tag}
  </span>
);

// ─── BLOG READER ──────────────────────────────────────────────────────────────
const BlogReader = ({ post, onBack }: { post: Blog; onBack: () => void }) => (
  <div className="blog-reader-mobile" style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 60px 100px" }}>
    <button onClick={onBack} style={{
      background: "transparent", border: "1px solid #2a2720", color: "floralwhite",
      fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.18em",
      padding: "8px 20px", borderRadius: "6px", cursor: "pointer",
      textTransform: "uppercase" as const, marginBottom: "48px",
      display: "flex", alignItems: "center", gap: "8px",
    }}>
      ← BACK TO INSIGHTS
    </button>

    {/* Meta */}
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px", flexWrap: "wrap" as const }}>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.22em", color: "#CAFF4A", textTransform: "uppercase" as const }}>
        — {post.category}
      </span>
      <TagBadge tag={post.tag} color={post.tagColor} />
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "lightgray", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>
        {post.date} · {post.readTime}
      </span>
    </div>

    {/* Title */}
    <h1 style={{
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "clamp(2rem, 6vw, 4rem)",
      lineHeight: 0.92, letterSpacing: "-0.02em", fontWeight: 900,
      color: "#F0EDE6", textTransform: "uppercase" as const, marginBottom: "32px",
    }}>
      {post.title}
    </h1>

    {/* Pull quote */}
    <p style={{
      fontFamily: "'Libre Baskerville', serif",
      fontSize: "clamp(15px, 2.5vw, 20px)", color: "#CAFF4A",
      lineHeight: 1.7, fontStyle: "italic", marginBottom: "48px",
      paddingLeft: "20px", borderLeft: "3px solid #CAFF4A",
    }}>
      {post.excerpt}
    </p>

    <div style={{ height: "1px", background: "#2a2720", marginBottom: "48px" }} />

    {/* Content blocks */}
    <div style={{ display: "flex", flexDirection: "column" as const, gap: "32px" }}>
      {post.content.map((block, i) => {
        if (block.type === "intro") return (
          <p key={i} style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(15px, 2.5vw, 18px)", color: "#D4CFC8", lineHeight: 1.85, fontStyle: "italic" }}>
            {block.text}
          </p>
        );
        if (block.type === "heading") return (
          <h2 key={i} style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 900,
            letterSpacing: "-0.01em", color: "#F0EDE6",
            textTransform: "uppercase" as const, lineHeight: 1,
            paddingTop: "8px", borderTop: "1px solid #2a2720",
          }}>
            {block.text}
          </h2>
        );
        if (block.type === "text") return (
          <p key={i} style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(16px, 2.5vw, 20px)", color: "lightgray", lineHeight: 1.85 }}>
            {block.text}
          </p>
        );
        if (block.type === "list") return (
          <div key={i}>
            {block.heading && (
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#CAFF4A", textTransform: "uppercase" as const, marginBottom: "16px" }}>
                {block.heading}
              </p>
            )}
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
              {block.items?.map((item, j) => (
                <div key={j} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#CAFF4A", marginTop: "8px", flexShrink: 0 }} />
                  <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2vw, 16px)", color: "lightgray", lineHeight: 1.75, margin: 0 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
        if (block.type === "closing") return (
          <div key={i} style={{ background: "#161410", border: "1px solid #2a2720", borderLeft: "3px solid #CAFF4A", borderRadius: "0 8px 8px 0", padding: "28px 28px" }}>
            <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(15px, 2vw, 18px)", color: "#F0EDE6", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>
              {block.text}
            </p>
          </div>
        );
        return null;
      })}
    </div>

    {/* Bottom CTA */}
    <div style={{ marginTop: "64px", padding: "36px 32px", background: "#161410", border: "1px solid #2a2720", borderRadius: "12px", display: "flex", flexDirection: "column" as const, gap: "20px" }}>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.22em", color: "#CAFF4A", textTransform: "uppercase" as const }}>
        THINK THIS APPLIES TO YOUR BUSINESS?
      </div>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 900, color: "#F0EDE6", lineHeight: 0.95, textTransform: "uppercase" as const, letterSpacing: "-0.01em" }}>
        Get a free content audit. No pitch, no pressure.
      </div>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
        <button onClick={() => window.open('https://wa.me/+917738824485', '_blank')} style={{
          background: "#CAFF4A", color: "#0E0D0A", border: "none",
          padding: "14px 28px", fontFamily: "'DM Mono', monospace",
          fontSize: "11px", letterSpacing: "0.18em", fontWeight: 700,
          borderRadius: "8px", cursor: "pointer", textTransform: "uppercase" as const,
        }}>
          BOOK FREE AUDIT →
        </button>
        <button onClick={onBack} style={{
          background: "transparent", color: "floralwhite", border: "1px solid #2a2720",
          padding: "14px 28px", fontFamily: "'DM Mono', monospace",
          fontSize: "11px", letterSpacing: "0.18em",
          borderRadius: "8px", cursor: "pointer", textTransform: "uppercase" as const,
        }}>
          ← MORE INSIGHTS
        </button>
      </div>
    </div>
  </div>
);

// ─── FEATURED CARD ────────────────────────────────────────────────────────────
const FeaturedCard = ({ post, onClick }: { post: Blog; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#161410",
        border: `1px solid ${hovered ? "#CAFF4A" : "#2a2720"}`,
        borderRadius: "16px",
        padding: "clamp(28px, 4vw, 52px)",
        cursor: "pointer",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        /* Responsive: stack on mobile, grid on desktop */
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "32px",
        position: "relative" as const,
        overflow: "hidden",
      }}
      className="featured-card-grid"
    >
      <div style={{ position: "absolute", top: 0, right: 0, width: "400px", height: "400px", background: "radial-gradient(circle, rgba(202,255,74,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px", flexWrap: "wrap" as const }}>
          <span style={{ fontSize: "clamp(11px, 2.2vw, 14px)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.22em", color: "#CAFF4A", textTransform: "uppercase" as const }}>
            — {post.category}
          </span>
          <TagBadge tag={post.tag} color={post.tagColor} />
          <span style={{ background: "#CAFF4A", color: "#0E0D0A", fontSize: "11px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em", padding: "3px 10px", borderRadius: "4px", fontWeight: 700, textTransform: "uppercase" as const, whiteSpace: "nowrap" as const }}>
            FEATURED
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
          lineHeight: 0.92, color: "#F0EDE6", marginBottom: "20px",
          letterSpacing: "-0.02em", fontWeight: 900, textTransform: "uppercase" as const,
        }}>
          {post.title}
        </h2>

        <p style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(16px, 2.5vw, 20px)", color: "floralwhite",
          lineHeight: 1.8, marginBottom: "32px", fontStyle: "italic",
        }}>
          {post.excerpt}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" as const }}>
          <div style={{
            background: "#CAFF4A", color: "#0E0D0A", padding: "12px 28px",
            fontFamily: "'DM Mono', monospace", fontSize: "clamp(11px, 2.2vw, 14px)",
            letterSpacing: "0.18em", fontWeight: 700, borderRadius: "8px",
            textTransform: "uppercase" as const, display: "inline-flex", alignItems: "center", gap: "8px",
          }}>
            READ ARTICLE
            <span style={{ display: "inline-block", transition: "transform 0.3s ease", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>→</span>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(11px, 2.2vw, 13px)", color: "lightgray", letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
            {post.date} · {post.readTime}
          </div>
        </div>
      </div>

      {/* Right panel — hidden on mobile via CSS class */}
      <div className="featured-right-panel" style={{
        background: "#0E0D0A", border: "1px solid #2a2720", borderRadius: "12px",
        height: "260px", display: "flex", flexDirection: "column" as const,
        alignItems: "center", justifyContent: "center", position: "relative" as const, overflow: "hidden",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 8vw, 100px)",
          color: "#1f1d1a", lineHeight: 1, textAlign: "center" as const,
          userSelect: "none" as const, letterSpacing: "0.02em", padding: "0 20px",
        }}>
          {post.category}
        </div>
        <div style={{ width: "40px", height: "2px", background: "#CAFF4A", marginTop: "16px", opacity: hovered ? 1 : 0.3, transition: "opacity 0.3s ease" }} />
        <div style={{ position: "absolute", bottom: "16px", right: "16px", fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#2a2720", letterSpacing: "0.2em", textTransform: "uppercase" as const }}>
          01 / 0{BLOGS.length}
        </div>
        <div style={{ position: "absolute", top: "16px", left: "16px", width: "6px", height: "6px", borderRadius: "50%", background: hovered ? "#CAFF4A" : "#2a2720", transition: "background 0.3s ease" }} />
      </div>
    </div>
  );
};

// ─── BLOG CARD ────────────────────────────────────────────────────────────────
const BlogCard = ({ post, index, onClick }: { post: Blog; index: number; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#161410",
        border: `1px solid ${hovered ? "#CAFF4A" : "#2a2720"}`,
        borderRadius: "12px", padding: "32px", cursor: "pointer",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        display: "flex", flexDirection: "column" as const, gap: "14px",
        position: "relative" as const, overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-8px", right: "16px", fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 7vw, 88px)", color: "#1a1815", userSelect: "none" as const, lineHeight: 1 }}>
        0{index + 2}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" as const }}>
        <span style={{ fontSize: "clamp(11px, 2vw, 13px)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.22em", color: "lightgray", textTransform: "uppercase" as const }}>
          {post.category}
        </span>
        <TagBadge tag={post.tag} color={post.tagColor} />
      </div>

      <h3 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", lineHeight: 1.05,
        color: "#F0EDE6", fontWeight: 900, letterSpacing: "-0.01em",
        textTransform: "uppercase" as const, flex: 1,
      }}>
        {post.title}
      </h3>

      <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(15px, 2.2vw, 18px)", color: "floralwhite", lineHeight: 1.75, fontStyle: "italic" }}>
        {post.excerpt}
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #2a2720", paddingTop: "14px", marginTop: "auto" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(11px, 2vw, 13px)", color: "lightgray", letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
          {post.date} · {post.readTime}
        </div>
        <span style={{ color: hovered ? "#CAFF4A" : "#2a2720", fontSize: "18px", transition: "all 0.3s ease", display: "inline-block", transform: hovered ? "translateX(6px)" : "translateX(0)" }}>→</span>
      </div>
    </div>
  );
};

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [openPost, setOpenPost] = useState<Blog | null>(null);

  const filtered = activeCategory === "ALL" ? BLOGS : BLOGS.filter((p) => p.category === activeCategory);
  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500;600&display=swap');

        /* ── Ticker: true infinite loop ─────────────────────────── */
        /* Two identical copies side-by-side; we slide exactly 50% */
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 20s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover { animation-play-state: paused; }

        /* ── Featured card: 2-col on ≥768px ─────────────────────── */
        @media (min-width: 768px) {
          .featured-card-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        /* Hide right panel on mobile */
        .featured-right-panel { display: none; }
        @media (min-width: 768px) {
          .featured-right-panel { display: flex !important; }
        }

        /* ── Blog grid: 1-col mobile → 2-col tablet → 3-col desktop */
        .blog-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── Hero grid: stack on mobile, 50/50 on desktop ───────── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: flex-end;
          padding-bottom: 56px;
          border-bottom: 1px solid #2a2720;
        }
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr 1fr; gap: 60px; }
        }

        /* ── CTA bar: stack on mobile, row on desktop ────────────── */
        .cta-bar {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        @media (min-width: 768px) {
          .cta-bar {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        /* ── Horizontal padding: tighter on mobile ───────────────── */
        .page-pad { padding-left: clamp(20px, 5vw, 60px); padding-right: clamp(20px, 5vw, 60px); }

        /* ── Mobile blog reader: reduce top spacing ────────────── */
        @media (max-width: 767px) {
          .blog-reader-mobile { padding-top: 20px !important; }
        }

        /* ── Stats row: wrap nicely on mobile ────────────────────── */
        .stats-row { display: flex; align-items: center; flex-wrap: wrap; gap: 0; }

        * { box-sizing: border-box; }
      `}</style>

      <div className="min-h-screen bg-[#0E0D0A] text-[#F0EDE6] overflow-x-hidden" style={{ paddingTop: "16px" }}>

        {openPost ? (
          /* ── SINGLE POST VIEW ─────────────────────────────────── */
          <div style={{ paddingTop: "80px" }}>
            <BlogReader post={openPost} onBack={() => setOpenPost(null)} />
          </div>
        ) : (
          <>
            {/* ── TICKER ────────────────────────────────────────── */}
            <div style={{ paddingTop: "80px" }}>
              <div style={{ background: "#161410", borderBottom: "1px solid #2a2720", borderTop: "1px solid #2a2720", overflow: "hidden", padding: "11px 0" }}>
                {/*
                  Two identical sets of items concatenated.
                  The animation slides left by exactly 50% (one set width),
                  then snaps back to 0 — perfectly seamless.
                */}
                <div className="ticker-track">
                  {[...CATEGORIES.filter(c => c !== "ALL"), ...CATEGORIES.filter(c => c !== "ALL")].map((c, i) => (
                    <span key={i} style={{
                      fontFamily: "'DM Mono', monospace", fontSize: "12px",
                      letterSpacing: "0.22em", color: "lightgray",
                      display: "inline-flex", alignItems: "center",
                      gap: "16px", paddingRight: "56px",
                      textTransform: "uppercase" as const, whiteSpace: "nowrap" as const,
                    }}>
                      {c} <span style={{ color: "#CAFF4A" }}>•</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── HERO ──────────────────────────────────────────── */}
            <div className="page-pad" style={{ paddingTop: "64px", paddingBottom: "0", maxWidth: "1400px", margin: "0 auto" }}>
              {/* Page label */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
                <div style={{ width: "32px", height: "1px", background: "floralwhite", flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(10px, 2vw, 13px)", letterSpacing: "0.25em", color: "floralwhite", textTransform: "uppercase" as const }}>
                  INSIGHTS
                </span>
              </div>

              {/* Hero grid */}
              <div className="hero-grid">
                <h1 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  lineHeight: 0.88, letterSpacing: "-0.02em",
                  fontWeight: 900, margin: 0, textTransform: "uppercase" as const,
                }}>
                  <span style={{ color: "#F0EDE6", display: "block" }}>WORDS</span>
                  <span style={{ display: "block", WebkitTextStroke: "2px #F0EDE6", WebkitTextFillColor: "transparent" }}>THAT</span>
                  <span style={{ color: "#CAFF4A", display: "block" }}>WORK.</span>
                </h1>

                <div style={{ paddingBottom: "8px" }}>
                  <p style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "clamp(17px, 3vw, 22px)", color: "floralwhite",
                    lineHeight: 1.8, fontStyle: "italic", marginBottom: "36px",
                  }}>
                    Frameworks, case studies, and uncomfortable truths about content
                    that actually ranks — in Google, AI engines, and in buyers' minds.
                  </p>

                  <div className="stats-row">
                    {[
                      { value: BLOGS.length, label: "ARTICLES", accent: false },
                      { value: CATEGORIES.length - 1, label: "TOPICS", accent: false },
                      { value: "WK", label: "UPDATED", accent: true },
                    ].map((stat, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center" }}>
                        {i > 0 && <div style={{ width: "1px", height: "40px", background: "#2a2720", margin: "0 24px" }} />}
                        <div>
                          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: stat.accent ? "#CAFF4A" : "#F0EDE6", lineHeight: 1 }}>
                            {stat.value}
                          </div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(11px, 1.8vw, 13px)", letterSpacing: "0.18em", color: "lightgray", marginTop: "4px", textTransform: "uppercase" as const }}>
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── CATEGORY FILTER ───────────────────────────────── */}
            <div className="page-pad" style={{ paddingTop: "32px", paddingBottom: "0", maxWidth: "1400px", margin: "0 auto" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
                {CATEGORIES.map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                    background: activeCategory === cat ? "#CAFF4A" : "transparent",
                    color: activeCategory === cat ? "#0E0D0A" : "floralwhite",
                    border: `1px solid ${activeCategory === cat ? "#CAFF4A" : "#2a2720"}`,
                    padding: "8px 18px", borderRadius: "6px",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "clamp(11px, 2.2vw, 13px)", letterSpacing: "0.18em",
                    cursor: "pointer", transition: "all 0.2s ease",
                    fontWeight: activeCategory === cat ? 700 : 400,
                    textTransform: "uppercase" as const,
                  }}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* ── BLOG CONTENT ──────────────────────────────────── */}
            <div className="page-pad" style={{ paddingTop: "28px", paddingBottom: "60px", maxWidth: "1400px", margin: "0 auto" }}>

              {filtered.length === 0 && (
                <div style={{ textAlign: "center" as const, padding: "80px 0", fontFamily: "'DM Mono', monospace", fontSize: "13px", letterSpacing: "0.18em", color: "lightgray", textTransform: "uppercase" as const }}>
                  No articles in this category yet. Check back soon.
                </div>
              )}

              {featured && (
                <div style={{ marginBottom: "24px" }}>
                  <FeaturedCard post={featured} onClick={() => setOpenPost(featured)} />
                </div>
              )}

              {rest.length > 0 && (
                <div className="blog-grid" style={{ marginBottom: "60px" }}>
                  {rest.map((post, i) => (
                    <BlogCard key={post.id} post={post} index={i} onClick={() => setOpenPost(post)} />
                  ))}
                </div>
              )}

              {/* ── CTA BAR ─────────────────────────────────────── */}
              <div className="cta-bar" style={{
                background: "#161410", border: "1px solid #2a2720",
                borderRadius: "16px", padding: "clamp(32px, 5vw, 52px) clamp(24px, 5vw, 56px)",
              }}>
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(11px, 2.2vw, 14px)", letterSpacing: "0.22em", color: "#CAFF4A", marginBottom: "14px", textTransform: "uppercase" as const }}>
                    CONTENT COMPOUNDS. EVERY WEEK.
                  </div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", color: "#F0EDE6", lineHeight: 0.92, letterSpacing: "0.01em", marginBottom: "12px" }}>
                    YOUR COMPETITORS ARE READING THIS.
                  </div>
                  <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(16px, 2.5vw, 20px)", color: "floralwhite", fontStyle: "italic", lineHeight: 1.6 }}>
                    Not publishing is a week they're pulling ahead.
                  </div>
                </div>
                <button
                  onClick={() => window.open('https://wa.me/+917738824485', '_blank')}
                  style={{
                    background: "#CAFF4A", color: "#0E0D0A", border: "none",
                    padding: "16px 36px", fontFamily: "'DM Mono', monospace",
                    fontSize: "clamp(11px, 2.2vw, 14px)", letterSpacing: "0.18em",
                    fontWeight: 700, borderRadius: "8px", cursor: "pointer",
                    whiteSpace: "nowrap" as const, textTransform: "uppercase" as const,
                    flexShrink: 0, alignSelf: "flex-start" as const,
                  }}
                >
                  GET FREE CONTENT AUDIT →
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <FooterSection />
    </>
  );
}