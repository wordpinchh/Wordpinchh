"use client";

import { useState } from "react";
import Link from "next/link";
import { FooterSection } from "@/components/home/FooterSection";
import RecommendedSidebar from "@/components/blog/RecommendedSidebar";

export const BLOGS = [
  {
    id: 1,
    slug: "website-not-getting-leads",
    category: "CONVERSION",
    tag: "CORE",
    tagColor: "#CAFF4A",
    title: "Why Your Website Isn't Getting Leads (And It's Not an SEO Problem)",
    excerpt: "Your website probably isn't broken. It's just not clear enough. Most low-converting sites fail on messaging, structure, and trust — not traffic.",
    author: "Wordpinchh Team",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    featured: true,
    seoTitle: "Why Your Website Isn't Getting Leads (And How to Fix It) | Wordpinchh",
    metaDesc: "Is your website getting traffic but no leads? Discover the real reasons your site isn't converting — poor messaging, weak CTAs, and misaligned structure — and learn exactly how to fix it.",
    content: [
      { type: "intro", text: "Your website probably isn't broken. It's just not clear enough. Many websites look polished on the surface — clean layout, good design, maybe even decent traffic — but still fail to generate leads. The problem almost always comes down to one thing: the message doesn't land." },
      { type: "heading", text: "Why Your Website Isn't Converting" },
      { type: "text", text: "When a website fails to generate leads, most business owners assume the issue is traffic — they need more visitors. But traffic without clarity is just wasted attention. The real conversion killers are almost always messaging, structure, and trust." },
      { type: "list", heading: "The core issues:", items: ["Unclear value proposition — visitors can't tell within five seconds what you do and who you help.", "Weak or missing calls to action — a website without clear next steps is like a shop with no checkout counter.", "Content written for the business, not the buyer — features instead of outcomes push visitors away.", "Poor page structure — important messages buried where most visitors never reach.", "No trust signals — testimonials, case studies, and client names all matter."] },
      { type: "heading", text: "Common Website Messaging Mistakes" },
      { type: "text", text: "Most low-converting websites share a handful of messaging patterns that quietly kill results. Leading with 'we' instead of 'you'. Features over outcomes. No emotional acknowledgement of where the reader is right now. Trying to speak to everyone — which means connecting with no one." },
      { type: "heading", text: "How to Fix Low-Converting Pages" },
      { type: "text", text: "You don't need a full website overhaul. Start with your homepage headline — rewrite it to state clearly who you help, what you help them do, and the outcome they can expect. Audit your calls to action. Add proof near your CTAs. Rewrite from the reader's perspective." },
      { type: "list", heading: "What high-converting pages include:", items: ["A specific, outcome-led headline above the fold", "A clear primary CTA — visible without scrolling", "Proof — a testimonial, case study reference, or client logo", "A problem/solution narrative that follows the reader's journey", "A low-friction next step — an audit call, checklist download, or direct enquiry form"] },
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
    excerpt: "Most businesses don't have a content problem. They have a strategy problem. Here's the difference — and why getting the order wrong costs you everything.",
    author: "Wordpinchh Team",
    date: "Apr 22, 2026",
    readTime: "7 min read",
    featured: false,
    seoTitle: "Content Marketing vs Content Strategy: What Founders Get Wrong | Wordpinchh",
    metaDesc: "Content marketing and content strategy are not the same thing — and confusing them is why most founders' content never gains traction.",
    content: [
      { type: "intro", text: "Most businesses don't have a content problem. They have a strategy problem. You've probably been there: posting consistently for months, writing blogs, showing up on LinkedIn — but the enquiries never come. That's not a content creation failure. That's what happens when you start executing before you've built the foundation." },
      { type: "heading", text: "What Is Content Marketing?" },
      { type: "text", text: "Content marketing is the execution layer. It's the doing — creating articles, writing LinkedIn posts, producing videos, sending newsletters. It answers: What are we publishing? How often? Where? Content marketing is visible, schedulable, and measurable by volume. And because it's visible, it's the thing most founders jump into first." },
      { type: "heading", text: "What Is Content Strategy?" },
      { type: "text", text: "Content strategy is the planning layer. It comes before execution and answers the deeper questions: Why are we creating content? Who is it actually for? What business goal does it serve? How does each piece connect to the next? Without it, everything you publish is disconnected — individual pieces that don't build toward anything." },
      { type: "list", heading: "The key differences:", items: ["Content Marketing — Execution and distribution. Answers: What are we publishing?", "Content Strategy — Planning and direction. Answers: Why are we publishing it?", "Without strategy: high output, low return.", "Without execution: good plan, no results.", "Strategy is the map. Content marketing is the driving."] },
      { type: "heading", text: "How to Build a Proper Content Strategy" },
      { type: "list", heading: "Five steps that actually work:", items: ["Define your audience precisely — not 'SME owners' but a specific role, company size, and pain point.", "Identify three to five content pillars — the recurring themes at the intersection of your expertise and their problems.", "Map content to intent — awareness, consideration, and decision stage pieces.", "Set a cadence you can sustain — one excellent piece per week beats three mediocre ones.", "Define what success looks like — inbound enquiries, email subscribers, DMs from ideal clients."] },
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
    excerpt: "Many blogs fail to rank not because of lack of effort, but because they miss what search engines are actually looking for. The fix is almost always diagnosable.",
    author: "Wordpinchh Team",
    date: "Apr 15, 2026",
    readTime: "8 min read",
    featured: false,
    seoTitle: "Why Your Blog Isn't Ranking on Google (And How to Fix It) | Wordpinchh",
    metaDesc: "If your blog isn't getting traffic from Google, the fix usually isn't more content — it's better targeting.",
    content: [
      { type: "intro", text: "Many blogs fail to rank not because of lack of effort, but because they miss what search engines are actually looking for. If you've been publishing regularly and your blog traffic is still flat, you're in good company — and the issues are almost always diagnosable." },
      { type: "heading", text: "Common Blog SEO Mistakes" },
      { type: "list", heading: "The real culprits:", items: ["Targeting the wrong keywords — too competitive, or so broad they never connect with a specific search intent.", "Thin or surface-level content — depth isn't about word count, it's about how thoroughly you address the question.", "Ignoring search intent — a post that answers the wrong type of question for a keyword won't rank even if it's well-written.", "Weak internal linking — isolated posts miss out on significant ranking potential.", "No authority signals — a new site with no backlinks will struggle regardless of content quality."] },
      { type: "heading", text: "How Google Evaluates Blog Content" },
      { type: "text", text: "Google's primary objective is user satisfaction. When someone clicks on a result, Google watches what happens next — do they stay and read, or click back immediately? Beyond behaviour, Google considers relevance, quality, and authority. This is why generic, thinly-researched posts rarely rank even if they're technically optimised." },
      { type: "heading", text: "How to Fix Ranking Issues" },
      { type: "list", heading: "The actionable fixes:", items: ["Revisit your keyword targeting — find specific, lower-competition terms realistic for your current domain authority.", "Improve existing content before publishing more — updating underperforming posts often generates faster results.", "Build internal links systematically — every new post should link to at least two or three existing relevant posts.", "Focus on search intent alignment — search your target keyword yourself and study what's already ranking.", "Build authority gradually — guest posting, citations, and content worth linking to all compound over time."] },
      { type: "heading", text: "What High-Ranking Blogs Do Differently" },
      { type: "text", text: "The blogs that consistently earn Google traffic write for a specific audience with specific problems. They answer the actual question behind the search, not just the surface-level query. They structure content so it's easy to scan. They update content regularly. And they build around topic clusters with multiple posts covering related angles that reinforce each other's authority." },
      { type: "closing", text: "Ranking on Google isn't magic. It's about producing the most genuinely useful, well-structured answer to the questions your audience is already searching for — on a website that has earned enough credibility to be trusted. Fix the fundamentals first. Then build consistently. The results take time, but they compound in a way that paid traffic simply can't match." },
    ],
  },
  {
    id: 5,
    slug: "what-is-answer-engine-optimisation",
    category: "AEO",
    tag: "AI OPTIMIZATION",
    tagColor: "#9AE07A",
    title: "What Is Answer Engine Optimisation? A Plain-English Guide for B2B SaaS Founders",
    excerpt: "Your buyers are no longer just Googling things. They're asking ChatGPT, querying Perplexity, and reading AI Overviews instead of clicking ten links. If your content isn't built to appear in those answers, you're invisible at the most critical moment of discovery.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "5 min read",
    featured: false,
    seoTitle: "What Is Answer Engine Optimisation? A Plain-English Guide for B2B SaaS Founders | Wordpinchh",
    metaDesc: "Learn what Answer Engine Optimisation (AEO) is and why B2B SaaS founders need to care.",
    content: [
      { type: "intro", text: "Your buyers are no longer just Googling things. They're asking ChatGPT, querying Perplexity, and reading AI Overviews instead of clicking ten links. If your content isn't built to appear in those answers, you're invisible at the most critical moment of discovery." },
      { type: "heading", text: "The way people search has fundamentally changed" },
      { type: "text", text: "Think about how you search online today versus three years ago. You probably still use Google — but chances are, you're also asking ChatGPT questions, using Perplexity to research vendors, or reading AI-generated summaries instead of clicking through to websites. Your buyers are doing exactly the same thing." },
      { type: "list", heading: "The AI search revolution:", items: ["65% of Google searches now end without a single click", "18% of searches now show an AI Overview at the top", "5x higher conversion rate from AI-referred traffic vs organic"] },
      { type: "heading", text: "So what exactly is AEO?" },
      { type: "text", text: "Answer Engine Optimisation is the practice of structuring your content so that AI-powered platforms — Google AI Overviews, ChatGPT, Perplexity, Microsoft Copilot — can extract, summarise, and cite your brand when they respond to user queries. Traditional SEO asks: 'How do I rank on page one?' AEO asks: 'How do I become the answer — whether or not anyone clicks?'" },
      { type: "quote", text: "In AI search, there are no ten blue links. There is one synthesised answer. Either you're in it — or you're invisible." },
      { type: "heading", text: "What makes content AEO-ready?" },
      { type: "list", heading: "AEO-ready content has four qualities:", items: ["Structured clearly. AI systems prefer content with clean headings, Q&A formats, bullet points, and logical flow.", "Authoritative in voice. Content that cites data, references expert perspectives, and demonstrates real-world experience performs significantly better.", "Intent-matched. AEO content is written around the specific questions your buyers are asking — not just the keywords they might type.", "Consistent and comprehensive. AI models favour brands that show up consistently across multiple content formats and topics."] },
      { type: "closing", text: "The brands that will dominate AI search over the next two years are the ones building AEO-ready content today. Once AI models develop strong citation preferences — and they are developing them fast — it becomes increasingly expensive and slow to break in." },
    ],
  },
  {
    id: 6, slug: "aeo-vs-seo-difference-indian-b2b", category: "AEO", tag: "AI OPTIMIZATION", tagColor: "#9AE07A",
    title: "AEO vs SEO: What's the Real Difference and Why Indian B2B Companies Must Care",
    excerpt: "SEO built the internet economy as we know it. AEO is building the next one. For Indian B2B companies still investing entirely in traditional search rankings, the window for early-mover advantage in AI visibility is closing faster than most realise.",
    author: "Wordpinchh Team", date: "May 6, 2026", readTime: "4 min read", featured: false,
    seoTitle: "AEO vs SEO: What's the Real Difference and Why Indian B2B Companies Must Care | Wordpinchh",
    metaDesc: "Discover the key differences between AEO and SEO, and why Indian B2B companies need to invest in Answer Engine Optimisation now.",
    content: [
      { type: "intro", text: "SEO built the internet economy as we know it. AEO is building the next one. For Indian B2B companies still investing entirely in traditional search rankings, the window for early-mover advantage in AI visibility is closing faster than most realise." },
      { type: "heading", text: "They share a foundation — but serve entirely different goals" },
      { type: "text", text: "SEO is fundamentally about ranking. You optimise your content, earn backlinks, and improve your technical site health so that Google places your page near the top of a list of results. AEO is about becoming the source. When a user asks an AI a question, the AI synthesises an answer from multiple documents. Your goal is to be one of those cited documents." },
      { type: "quote", text: "SEO puts you on the list. AEO puts you in the answer. Both matter — but only one is still being ignored by most B2B brands in India." },
      { type: "list", heading: "How the two approaches diverge:", items: ["Keyword targeting vs question targeting — SEO focuses on keyword volume; AEO focuses on natural-language buyer questions.", "Ranking vs citing — SEO success means your URL appears in a list; AEO means your brand is referenced in a generated answer.", "Link building vs authority building — SEO emphasises backlink profiles; AEO emphasises E-E-A-T signals.", "Optimising pages vs building content systems — SEO can be done page by page; AEO works best with a coherent content library."] },
      { type: "closing", text: "The good news for B2B companies with existing SEO investment: you don't start from zero. Strong technical SEO helps AI crawlers access your content. The shift is largely at the strategy and structure level — learning to write for intent rather than just keywords, formatting content for AI extraction." },
    ],
  },
  {
    id: 7, slug: "b2b-content-checklist-ai-visibility", category: "AEO", tag: "AI OPTIMIZATION", tagColor: "#9AE07A",
    title: "The B2B Content Checklist for AI Visibility: 10 Things Your Website Needs Right Now",
    excerpt: "Most B2B websites were built to rank on Google, not to be cited by AI. The gap between the two is significant — and closing it doesn't require a full rebuild.",
    author: "Wordpinchh Team", date: "May 6, 2026", readTime: "4 min read", featured: false,
    seoTitle: "The B2B Content Checklist for AI Visibility: 10 Things Your Website Needs Right Now | Wordpinchh",
    metaDesc: "Complete checklist for making your B2B website AI-ready.",
    content: [
      { type: "intro", text: "Most B2B websites were built to rank on Google, not to be cited by AI. The gap between the two is significant — and closing it doesn't require a full rebuild. It requires knowing exactly what AI systems look for when they decide which sources to trust and reference." },
      { type: "heading", text: "AEO readiness checklist — 10 key signals" },
      { type: "list", heading: "Complete checklist for AI visibility:", items: ["Clear answer in the opening paragraph — every key page should state its core answer within the first 100 words.", "Question-based heading structure — use H2s and H3s phrased as questions your buyers would ask.", "Dedicated FAQ sections on all service and product pages.", "Original data, statistics, or research — citing proprietary data significantly increases AI citation probability.", "Named expert perspective — content attributed to a named founder or expert is weighted more heavily.", "Structured data (schema markup) — at minimum: FAQ schema, Article schema, and Organisation schema.", "Clear entity definition — your homepage should state explicitly what your company is.", "Consistent content publishing — AI citation models favour brands with an active, consistent content presence.", "Third-party mentions and citations — off-site mentions build trust signals that AI citation models favour.", "Mobile and load-speed performance — slow pages reduce indexing quality for AI crawlers."] },
      { type: "quote", text: "The best AEO strategy is simply excellent content, built with intention. What makes content good for AI also makes it clearer, more useful, and more trustworthy for people." },
      { type: "closing", text: "The good news: these are all fixable. And fixing them improves your content quality for human readers at the same time. Start with your highest-traffic existing content and update it for AEO readiness, then build new content targeting the question-based queries your buyers are using in AI platforms." },
    ],
  },
  {
    id: 8, slug: "saas-faq-optimisation-case-study", category: "AEO", tag: "CASE STUDY", tagColor: "#9AE07A",
    title: "How We Optimised a SaaS Client's FAQ Page to Appear in AI-Generated Answers",
    excerpt: "This is a walkthrough of the exact content decisions Wordpinchh made to transform a standard SaaS FAQ page into an AI-cited content asset.",
    author: "Wordpinchh Team", date: "May 6, 2026", readTime: "4 min read", featured: false,
    seoTitle: "SaaS FAQ Page Optimisation for AI Search: Case Study | Wordpinchh",
    metaDesc: "Case study: How we transformed a SaaS FAQ page to appear in ChatGPT and Perplexity responses.",
    content: [
      { type: "intro", text: "This is a walkthrough of the exact content decisions Wordpinchh made to transform a standard SaaS FAQ page — one that ranked modestly and converted inconsistently — into an AI-cited content asset that now appears in ChatGPT and Perplexity responses for five high-intent buyer queries." },
      { type: "heading", text: "The starting point: a well-meaning FAQ that AI couldn't use" },
      { type: "list", heading: "Four specific problems stood out:", items: ["Questions were company-defined, not buyer-defined.", "Answers averaged 40–60 words each — too brief for AI systems to extract meaningful content.", "No data was cited. No authority signals were present.", "No schema markup — AI crawlers were processing the page as undifferentiated text."] },
      { type: "heading", text: "The intervention: rebuilding the FAQ with AEO principles" },
      { type: "list", heading: "Step 1 — Question research:", items: ["We identified the actual questions buyers were asking AI platforms about HR software.", "We replaced seventeen of the original twenty-two questions with buyer-researched questions."] },
      { type: "list", heading: "Step 2 — Expanding answers:", items: ["Each answer was rewritten to lead with the direct response in the first sentence.", "Average answer length moved from 52 words to 180 words."] },
      { type: "list", heading: "Results:", items: ["5 high-intent queries now generating AI citations", "3x increase in organic impressions within 60 days"] },
      { type: "closing", text: "AI writes fast. Strategy makes it work. Wordpinchh builds content roadmaps for SaaS startups that want to go from zero presence to category authority — systematically and efficiently." },
    ],
  },
  {
    id: 9, slug: "ai-ready-content-system-saas-tech", category: "AIC", tag: "AI CONTENT STRATEGY", tagColor: "#7A9AE0",
    title: "How to Build an AI-Ready Content System for Your SaaS or Tech Business",
    excerpt: "AI has changed how content gets produced. But the companies seeing real results aren't the ones generating the most AI content — they're the ones with the clearest strategy behind it.",
    author: "Wordpinchh Team", date: "May 6, 2026", readTime: "5 min read", featured: false,
    seoTitle: "How to Build an AI-Ready Content System for Your SaaS or Tech Business | Wordpinchh",
    metaDesc: "Learn how to build an AI-ready content system for your SaaS or tech business.",
    content: [
      { type: "intro", text: "AI has changed how content gets produced. But the companies seeing real results aren't the ones generating the most AI content — they're the ones with the clearest strategy behind it." },
      { type: "quote", text: "The best AI-assisted content isn't AI content cleaned up by a human. It's human thinking, efficiently produced with AI — in that order." },
      { type: "list", heading: "The five components of an AI-ready content system:", items: ["Intent mapping — complete map of buyer questions at every funnel stage", "Brand voice documentation — specific inputs AI needs to sound like your company", "Content architecture — categories and relationships that build topical authority", "Human editorial layer — expert perspective, examples, and brand-accurate voice", "Measurement and iteration — clear metrics and regular review process"] },
      { type: "closing", text: "At Wordpinchh, we build AI content systems — not just AI content. The strategy, the architecture, the voice documentation, and the editorial layer are what we bring. The AI accelerates execution. The system ensures that execution compounds into measurable growth." },
    ],
  },
  {
    id: 10, slug: "human-layer-ai-content-brand-voice", category: "AIC", tag: "AI CONTENT STRATEGY", tagColor: "#7A9AE0",
    title: "The Human Layer in AI Content: Why Brand Voice Still Needs a Writer",
    excerpt: "AI can write faster than any human. What it cannot do is sound like you — not the real you, the one with specific opinions, client war stories, and the perspective that makes your brand worth following.",
    author: "Wordpinchh Team", date: "May 6, 2026", readTime: "4 min read", featured: false,
    seoTitle: "The Human Layer in AI Content: Why Brand Voice Still Needs a Writer | Wordpinchh",
    metaDesc: "Discover why AI content still needs human writers for brand voice.",
    content: [
      { type: "intro", text: "AI can write faster than any human. What it cannot do is sound like you — not the real you, the one with specific opinions, client war stories, and the perspective that makes your brand worth following. That part still needs a writer." },
      { type: "list", heading: "Real brand voice includes:", items: ["The specific positions your company takes on contested industry questions", "The vocabulary you use and the terminology you deliberately avoid", "The types of examples and analogies that feel natural to your founders", "The things you're willing to say that your competitors aren't", "The authentic perspective that comes from genuine experience and conviction"] },
      { type: "closing", text: "AI writes fast. Strategy makes it work. Wordpinchh combines both — strategy, brand voice, and human editorial expertise — to produce AI-assisted content that genuinely sounds like your brand." },
    ],
  },
  {
    id: 13, slug: "geo-strategy-indian-saas-companies", category: "GEO", tag: "GEO STRATEGY", tagColor: "#E07A9A",
    title: "GEO Strategy for Indian SaaS Companies: Getting Visible on Perplexity, Copilot, and ChatGPT",
    excerpt: "India's SaaS ecosystem is maturing fast. Buyers are more sophisticated, research is more rigorous, and AI platforms are increasingly part of how enterprise buyers shortlist solutions.",
    author: "Wordpinchh Team", date: "May 6, 2026", readTime: "4 min read", featured: false,
    seoTitle: "GEO Strategy for Indian SaaS Companies | Wordpinchh",
    metaDesc: "Learn how Indian SaaS companies can build GEO strategies to get visible on Perplexity, Copilot, and ChatGPT.",
    content: [
      { type: "intro", text: "India's SaaS ecosystem is maturing fast. Buyers are more sophisticated, research is more rigorous, and AI platforms are increasingly part of how enterprise buyers shortlist solutions." },
      { type: "list", heading: "AI search impact metrics:", items: ["527% AI referral traffic growth year-on-year in early 2025", "4.4x higher conversion rate from AI-referred traffic vs organic", "10x faster discovery for GEO-ready content vs organic SEO alone"] },
      { type: "list", heading: "Quarter-by-quarter GEO roadmap:", items: ["Quarter 1: Foundation audit — audit existing content for GEO readiness", "Quarter 2: Content build — develop 8-10 GEO-optimised pieces targeting buyer questions", "Quarter 3: Authority expansion — guest publishing and PR on credible publications", "Quarter 4: Measurement and iteration — track AI citation frequency and refine strategy"] },
      { type: "closing", text: "Is your content built to be cited — or just ranked? Wordpinchh creates GEO-optimised content for Indian SaaS companies. Let's build your strategy." },
    ],
  },
];

const CATEGORIES = ["ALL", ...Array.from(new Set(BLOGS.map((b) => b.category)))];

interface ContentBlock { type: string; text?: string; heading?: string; items?: string[]; }
interface Blog {
  id: number; slug: string; category: string; tag: string; tagColor: string;
  title: string; excerpt: string; author: string; date: string; readTime: string;
  featured: boolean; seoTitle: string; metaDesc: string; content: ContentBlock[];
}

// ─── TAG BADGE ────────────────────────────────────────────────────────────────
const TagBadge = ({ tag, color }: { tag: string; color: string }) => (
  <span style={{
    border: `1px solid ${color}`, color,
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
                {block.heading && (
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", color: "#CAFF4A", textTransform: "uppercase" as const, marginBottom: "14px" }}>
                    {block.heading}
                  </p>
                )}
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
              <div key={i} style={{ background: "#161410", border: "1px solid #2a2720", borderLeft: "3px solid #CAFF4A", borderRadius: "0 8px 8px 0", padding: "24px 24px" }}>
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