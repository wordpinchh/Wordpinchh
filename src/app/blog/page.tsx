"use client";

import { useState } from "react";
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
    metaDesc: "Learn what Answer Engine Optimisation (AEO) is and why B2B SaaS founders need to care. Discover how to make your brand appear in AI-generated answers from ChatGPT, Perplexity, and Google AI Overviews.",
    content: [
      { type: "intro", text: "Your buyers are no longer just Googling things. They're asking ChatGPT, querying Perplexity, and reading AI Overviews instead of clicking ten links. If your content isn't built to appear in those answers, you're invisible at the most critical moment of discovery." },
      { type: "heading", text: "The way people search has fundamentally changed" },
      { type: "text", text: "Think about how you search online today versus three years ago. You probably still use Google — but chances are, you're also asking ChatGPT questions, using Perplexity to research vendors, or reading AI-generated summaries instead of clicking through to websites. Your buyers are doing exactly the same thing." },
      { type: "text", text: "This shift has created a new discipline in content strategy called Answer Engine Optimisation — or AEO. And for B2B SaaS founders, it represents one of the most significant changes to inbound marketing since the rise of blogging." },
      { type: "list", heading: "The AI search revolution:", items: [
        "65% of Google searches now end without a single click",
        "18% of searches now show an AI Overview at the top",
        "5x higher conversion rate from AI-referred traffic vs organic",
      ]},
      { type: "heading", text: "So what exactly is AEO?" },
      { type: "text", text: "Answer Engine Optimisation is the practice of structuring your content so that AI-powered platforms — Google AI Overviews, ChatGPT, Perplexity, Microsoft Copilot — can extract, summarise, and cite your brand when they respond to user queries." },
      { type: "text", text: "Traditional SEO asks: 'How do I rank on page one?' AEO asks: 'How do I become the answer — whether or not anyone clicks?'" },
      { type: "quote", text: "In AI search, there are no ten blue links. There is one synthesised answer. Either you're in it — or you're invisible." },
      { type: "heading", text: "How AEO differs from traditional SEO" },
      { type: "text", text: "SEO optimises for ranking positions. You want to appear at the top of a search results page. AEO optimises for citation. You want AI platforms to reference your content in their generated answers. This matters enormously for B2B SaaS brands, because your buyers conduct research over weeks before making a purchasing decision." },
      { type: "heading", text: "What makes content AEO-ready?" },
      { type: "list", heading: "AEO-ready content has four qualities:", items: [
        "Structured clearly. AI systems prefer content with clean headings, Q&A formats, bullet points, and logical flow.",
        "Authoritative in voice. Content that cites data, references expert perspectives, and demonstrates real-world experience performs significantly better.",
        "Intent-matched. AEO content is written around the specific questions your buyers are asking — not just the keywords they might type.",
        "Consistent and comprehensive. AI models favour brands that show up consistently across multiple content formats and topics.",
      ]},
      { type: "closing", text: "The brands that will dominate AI search over the next two years are the ones building AEO-ready content today. Once AI models develop strong citation preferences — and they are developing them fast — it becomes increasingly expensive and slow to break in." },
    ],
  },
  {
    id: 6,
    slug: "aeo-vs-seo-difference-indian-b2b",
    category: "AEO",
    tag: "AI OPTIMIZATION",
    tagColor: "#9AE07A",
    title: "AEO vs SEO: What's the Real Difference and Why Indian B2B Companies Must Care",
    excerpt: "SEO built the internet economy as we know it. AEO is building the next one. For Indian B2B companies still investing entirely in traditional search rankings, the window for early-mover advantage in AI visibility is closing faster than most realise.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "4 min read",
    featured: false,
    seoTitle: "AEO vs SEO: What's the Real Difference and Why Indian B2B Companies Must Care | Wordpinchh",
    metaDesc: "Discover the key differences between AEO and SEO, and why Indian B2B companies need to invest in Answer Engine Optimisation now. Learn how to get ahead of competitors in AI search.",
    content: [
      { type: "intro", text: "SEO built the internet economy as we know it. AEO is building the next one. For Indian B2B companies still investing entirely in traditional search rankings, the window for early-mover advantage in AI visibility is closing faster than most realise." },
      { type: "heading", text: "They share a foundation — but serve entirely different goals" },
      { type: "text", text: "Let's be precise. SEO and AEO are not competitors — they coexist and reinforce each other. But they operate on different logic, serve different discovery channels, and require different content decisions." },
      { type: "text", text: "SEO is fundamentally about ranking. You optimise your content, earn backlinks, and improve your technical site health so that Google places your page near the top of a list of results. A user sees your link, clicks, and arrives on your website." },
      { type: "text", text: "AEO is about becoming the source. When a user asks an AI a question, the AI synthesises an answer from multiple documents. Your goal is to be one of those cited documents — to have your content extracted, paraphrased, and attributed as authoritative. Often, no click happens at all. But your brand name appears in the answer." },
      { type: "quote", text: "SEO puts you on the list. AEO puts you in the answer. Both matter — but only one is still being ignored by most B2B brands in India." },
      { type: "heading", text: "Why this matters specifically for B2B companies in India" },
      { type: "text", text: "India's B2B digital landscape is at a critical inflection point. Enterprise buyers at Indian tech companies, SaaS startups, and professional services firms are rapidly adopting AI tools for research and vendor discovery. A 2025 survey showed that over 60% of B2B technology buyers in India now use at least one AI platform in their vendor research process." },
      { type: "text", text: "Despite this, the overwhelming majority of B2B content produced by Indian companies is still optimised purely for traditional search. This creates an extraordinary window: the brands that build AEO-ready content today are essentially entering a market with almost no competition." },
      { type: "heading", text: "The key differences in practice" },
      { type: "list", heading: "How the two approaches diverge:", items: [
        "Keyword targeting vs question targeting. SEO focuses on keyword volume and competition. AEO focuses on the natural-language questions your buyers are asking AI platforms.",
        "Ranking vs citing. SEO success means your URL appears in a list. AEO success means your brand is referenced in a generated answer — which may not include your URL at all.",
        "Link building vs authority building. SEO emphasises backlink profiles. AEO emphasises E-E-A-T signals — demonstrated expertise, authentic experience, clear authoritativeness.",
        "Optimising pages vs building content systems. SEO can be done page by page. AEO works best when you have a consistent, topically coherent content library.",
      ]},
      { type: "closing", text: "The good news for B2B companies with existing SEO investment: you don't start from zero. Strong technical SEO helps AI crawlers access your content. The shift is largely at the strategy and structure level — learning to write for intent rather than just keywords, formatting content for AI extraction." },
    ],
  },
  {
    id: 7,
    slug: "b2b-content-checklist-ai-visibility",
    category: "AEO",
    tag: "AI OPTIMIZATION",
    tagColor: "#9AE07A",
    title: "The B2B Content Checklist for AI Visibility: 10 Things Your Website Needs Right Now",
    excerpt: "Most B2B websites were built to rank on Google, not to be cited by AI. The gap between the two is significant — and closing it doesn't require a full rebuild. It requires knowing exactly what AI systems look for when they decide which sources to trust and reference.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "4 min read",
    featured: false,
    seoTitle: "The B2B Content Checklist for AI Visibility: 10 Things Your Website Needs Right Now | Wordpinchh",
    metaDesc: "Complete checklist for making your B2B website AI-ready. Learn the 10 essential elements AI systems look for when choosing sources to cite in ChatGPT, Perplexity, and Google AI Overviews.",
    content: [
      { type: "intro", text: "Most B2B websites were built to rank on Google, not to be cited by AI. The gap between the two is significant — and closing it doesn't require a full rebuild. It requires knowing exactly what AI systems look for when they decide which sources to trust and reference." },
      { type: "heading", text: "Why your current website probably isn't AI-ready" },
      { type: "text", text: "The typical B2B website was designed with a specific goal: rank for target keywords, drive traffic, and convert visitors. That goal shaped how pages were written — keyword-dense, conversion-focused, with proof points structured for human readers who scroll top to bottom." },
      { type: "text", text: "AI systems read differently. They scan for structural signals, extract the most direct statements, and favour content that demonstrates authority through data, attribution, and clear reasoning. Content optimised only for traditional search often fails these tests entirely." },
      { type: "heading", text: "AEO readiness checklist — 10 key signals" },
      { type: "list", heading: "Complete checklist for AI visibility:", items: [
        "Clear answer in the opening paragraph. Every key page should state its core answer within the first 100 words.",
        "Question-based heading structure. Use H2s and H3s phrased as questions your buyers would ask.",
        "Dedicated FAQ sections on all service and product pages. FAQs are one of the highest-value AEO assets.",
        "Original data, statistics, or research. Citing proprietary data significantly increases AI citation probability.",
        "Named expert perspective. Content attributed to a named founder or expert is weighted more heavily by AI systems.",
        "Structured data (schema markup) implemented. At minimum: FAQ schema, Article schema, and Organisation schema.",
        "Clear entity definition. Your homepage should state explicitly what your company is and what category it belongs to.",
        "Consistent content publishing. AI citation models favour brands with an active, consistent content presence.",
        "Third-party mentions and citations. Off-site mentions build trust signals that AI citation models favour.",
        "Mobile and load-speed performance. Slow pages reduce indexing quality for both search engines and AI crawlers.",
      ]},
      { type: "heading", text: "Where most B2B websites fall short" },
      { type: "text", text: "When Wordpinchh runs AEO audits for B2B clients, the gaps we find most consistently are: no FAQ sections on service pages, no original data in content, vague company descriptions that don't define the category clearly, and inconsistent publishing that makes it difficult for AI systems to build a reliable citation pattern." },
      { type: "quote", text: "The best AEO strategy is simply excellent content, built with intention. What makes content good for AI also makes it clearer, more useful, and more trustworthy for people." },
      { type: "closing", text: "The good news: these are all fixable. And fixing them improves your content quality for human readers at the same time. Start with your highest-traffic existing content and update it for AEO readiness, then build new content targeting the question-based queries your buyers are using in AI platforms." },
    ],
  },
  {
    id: 8,
    slug: "saas-faq-optimisation-case-study",
    category: "AEO",
    tag: "CASE STUDY",
    tagColor: "#9AE07A",
    title: "How We Optimised a SaaS Client's FAQ Page to Appear in AI-Generated Answers",
    excerpt: "This is a walkthrough of the exact content decisions Wordpinchh made to transform a standard SaaS FAQ page into an AI-cited content asset that now appears in ChatGPT and Perplexity responses for five high-intent buyer queries.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "4 min read",
    featured: false,
    seoTitle: "SaaS FAQ Page Optimisation for AI Search: Case Study | Wordpinchh",
    metaDesc: "Case study: How we transformed a SaaS FAQ page to appear in ChatGPT and Perplexity responses. Learn the exact AEO strategies that generated AI citations for 5 high-intent queries.",
    content: [
      { type: "intro", text: "This is a walkthrough of the exact content decisions Wordpinchh made to transform a standard SaaS FAQ page — one that ranked modestly and converted inconsistently — into an AI-cited content asset that now appears in ChatGPT and Perplexity responses for five high-intent buyer queries." },
      { type: "heading", text: "The starting point: a well-meaning FAQ that AI couldn't use" },
      { type: "text", text: "Our client — a B2B SaaS company offering HR management software to mid-market firms — had a FAQ page that followed a pattern common across the industry. Questions were generic. Answers were brief. The structure was functional but not strategic. From an SEO standpoint, the page drove some branded traffic. From an AEO standpoint, it was invisible." },
      { type: "list", heading: "Four specific problems stood out:", items: [
        "Questions were company-defined, not buyer-defined. They answered what the marketing team assumed buyers were asking.",
        "Answers averaged 40–60 words each. Too brief for AI systems to extract meaningful, citable content.",
        "No data was cited. No authority signals were present. The page read as marketing copy, not as a knowledge resource.",
        "No schema markup. AI crawlers were processing the page as undifferentiated text, not as a structured Q&A resource.",
      ]},
      { type: "heading", text: "The intervention: rebuilding the FAQ with AEO principles" },
      { type: "list", heading: "Step 1: Question research from the buyer's perspective", items: [
        "We identified the actual questions buyers were asking AI platforms about HR software.",
        "We analysed sales call recordings, forum discussions, and tested ChatGPT, Perplexity, and Google AI.",
        "We replaced seventeen of the original twenty-two questions with questions drawn directly from this research.",
      ]},
      { type: "list", heading: "Step 2: Expanding answers with directness and depth", items: [
        "Each answer was rewritten to lead with the direct response in the first sentence.",
        "Average answer length moved from 52 words to 180 words.",
        "We maintained readability — every answer remained skimmable and clear.",
      ]},
      { type: "list", heading: "Step 3: Weaving in authority signals", items: [
        "We added industry statistics with citations.",
        "We incorporated quotes from the company's founder speaking to specific pain points.",
        "We referenced third-party research where relevant.",
      ]},
      { type: "list", heading: "Step 4: Schema markup and technical implementation", items: [
        "We implemented FAQ schema across the entire page.",
        "We updated the page's meta structure to align with the new question-answer architecture.",
      ]},
      { type: "heading", text: "The results" },
      { type: "list", heading: "Measurable outcomes:", items: [
        "5 high-intent queries now generating AI citations",
        "3x increase in organic impressions within 60 days",
      ]},
      { type: "quote", text: "Quality is the compounding asset, not quantity. Thirty mediocre posts produce worse outcomes than ten excellent ones." },
      { type: "closing", text: "AI writes fast. Strategy makes it work. Wordpinchh builds content roadmaps for SaaS startups that want to go from zero presence to category authority — systematically and efficiently." },
    ],
  },
  {
    id: 9,
    slug: "ai-ready-content-system-saas-tech",
    category: "AIC",
    tag: "AI CONTENT STRATEGY",
    tagColor: "#7A9AE0",
    title: "How to Build an AI-Ready Content System for Your SaaS or Tech Business",
    excerpt: "AI has changed how content gets produced. But the companies seeing real results aren't the ones generating the most AI content — they're the ones with the clearest strategy behind it.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "5 min read",
    featured: false,
    seoTitle: "How to Build an AI-Ready Content System for Your SaaS or Tech Business | Wordpinchh",
    metaDesc: "Learn how to build an AI-ready content system for your SaaS or tech business. Discover the five components of an effective AI content strategy and how to drive organic traffic and inbound leads.",
    content: [
      { type: "intro", text: "AI has changed how content gets produced. But the companies seeing real results aren't the ones generating the most AI content — they're the ones with the clearest strategy behind it. Here's what an AI-ready content system actually looks like, and how to build one that drives organic traffic, inbound leads, and category authority." },
      { type: "heading", text: "The difference between AI content and an AI content system" },
      { type: "text", text: "Every SaaS founder has tried using AI to produce content at this point. Many have been disappointed. The output is competent but bland. It ranks briefly, then doesn't. It doesn't sound like the company. It generates traffic but not leads. The problem isn't the AI tool. It's the absence of a system." },
      { type: "quote", text: "The best AI-assisted content isn't AI content cleaned up by a human. It's human thinking, efficiently produced with AI — in that order." },
      { type: "heading", text: "The five components of an AI-ready content system" },
      { type: "list", heading: "Essential components:", items: [
        "Intent mapping - Complete map of buyer questions at every funnel stage",
        "Brand voice documentation - Specific inputs AI needs to sound like your company",
        "Content architecture - Categories and relationships that build topical authority",
        "Human editorial layer - Expert perspective, examples, and brand-accurate voice",
        "Measurement and iteration - Clear metrics and regular review process",
      ]},
      { type: "closing", text: "At Wordpinchh, we build AI content systems — not just AI content. The strategy, the architecture, the voice documentation, and the editorial layer are what we bring. The AI accelerates execution. The system ensures that execution compounds into measurable growth." },
    ],
  },
  {
    id: 10,
    slug: "human-layer-ai-content-brand-voice",
    category: "AIC",
    tag: "AI CONTENT STRATEGY",
    tagColor: "#7A9AE0",
    title: "The Human Layer in AI Content: Why Brand Voice Still Needs a Writer",
    excerpt: "AI can write faster than any human. What it cannot do is sound like you — not the real you, the one with specific opinions, client war stories, and the perspective that makes your brand worth following.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "4 min read",
    featured: false,
    seoTitle: "The Human Layer in AI Content: Why Brand Voice Still Needs a Writer | Wordpinchh",
    metaDesc: "Discover why AI content still needs human writers for brand voice. Learn how to combine AI efficiency with human authenticity to create content that differentiates your B2B brand.",
    content: [
      { type: "intro", text: "AI can write faster than any human. It can research comprehensively, structure clearly, and produce readable content at scale. What it cannot do is sound like you — not the real you, the one with specific opinions, client war stories, and the perspective that makes your brand worth following. That part still needs a writer." },
      { type: "heading", text: "The homogenisation problem" },
      { type: "text", text: "There is a specific quality that AI-generated content has when it isn't directed by a strong editorial voice. It's competent, readable, and largely interchangeable. For B2B brands, this is a strategic liability." },
      { type: "heading", text: "What brand voice actually is" },
      { type: "list", heading: "Real brand voice includes:", items: [
        "The specific positions your company takes on contested industry questions",
        "The vocabulary you use and the terminology you deliberately avoid",
        "The types of examples and analogies that feel natural to your founders",
        "The things you're willing to say that your competitors aren't",
        "The authentic perspective that comes from genuine experience and conviction",
      ]},
      { type: "closing", text: "AI writes fast. Strategy makes it work. Wordpinchh combines both — strategy, brand voice, and human editorial expertise — to produce AI-assisted content that genuinely sounds like your brand." },
    ],
  },
  {
    id: 11,
    slug: "ai-research-plan-scale-b2b-content",
    category: "AIC",
    tag: "AI CONTENT STRATEGY",
    tagColor: "#7A9AE0",
    title: "How We Use AI to Research, Plan, and Scale B2B Content Without Losing Quality",
    excerpt: "At Wordpinchh, we are transparent about how we work: AI is part of our content process. Here is exactly how we do it — and where human expertise remains non-negotiable.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "4 min read",
    featured: false,
    seoTitle: "How We Use AI to Research, Plan, and Scale B2B Content Without Losing Quality | Wordpinchh",
    metaDesc: "Learn how Wordpinchh uses AI for B2B content production while maintaining quality. Discover our transparent workflow combining AI efficiency with human expertise.",
    content: [
      { type: "intro", text: "At Wordpinchh, we are transparent about how we work: AI is part of our content process. We use it for research, for structuring, and for accelerating draft production. Here is exactly how we do it — and where human expertise remains non-negotiable." },
      { type: "heading", text: "Why we're sharing this" },
      { type: "text", text: "There is a lot of opacity in how content agencies use AI. Some claim they don't use it at all — which is either misleading or a genuine competitive disadvantage. Others use it indiscriminately and deliver generic output." },
      { type: "heading", text: "Stage 1: Research — where AI saves the most time" },
      { type: "list", heading: "We use AI for:", items: [
        "Initial topic research and source identification",
        "Competitive content analysis and angle identification",
        "Data point collection from credible sources",
        "Buyer question mapping for topic variations",
      ]},
      { type: "list", heading: "Our workflow metrics:", items: [
        "40% faster research and drafting with AI integration",
        "100% human editorial review on every published piece",
        "0 unverified statistics published — every claim is checked",
      ]},
      { type: "closing", text: "AI writes fast. Strategy makes it work. Wordpinchh combines AI-powered production with human strategic expertise to build B2B content that drives real outcomes." },
    ],
  },
  {
    id: 12,
    slug: "blog-to-brand-authority-saas-startups",
    category: "AIC",
    tag: "AI CONTENT STRATEGY",
    tagColor: "#7A9AE0",
    title: "From Blog to Brand Authority: An AI Content Roadmap for SaaS Startups",
    excerpt: "Most SaaS startups begin their content journey the same way: a blog, a LinkedIn page, and a vague intention to 'do content marketing.' A year later, inbound leads are still not materialising. The problem is almost always the same — no roadmap.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "4 min read",
    featured: false,
    seoTitle: "From Blog to Brand Authority: An AI Content Roadmap for SaaS Startups | Wordpinchh",
    metaDesc: "Discover a step-by-step AI content roadmap for SaaS startups to build brand authority. Learn how to go from zero content to category authority in 12-18 months.",
    content: [
      { type: "intro", text: "Most SaaS startups begin their content journey the same way: a blog, a LinkedIn page, and a vague intention to 'do content marketing.' A year later, the blog has thirty posts, the LinkedIn has decent follower counts, and inbound leads are still not materialising at scale. The problem is almost always the same — no roadmap. Here's one." },
      { type: "heading", text: "What brand authority actually means for a SaaS startup" },
      { type: "text", text: "Brand authority is the state in which buyers in your category think of your brand first when they think of your problem category. Not first in search rankings — first in the mind." },
      { type: "heading", text: "The content authority roadmap: phase by phase" },
      { type: "list", heading: "Phase 1 — months 1 to 3: foundation", items: [
        "Define brand voice with specificity AI tools need",
        "Complete buyer intent map across full funnel",
        "Build content architecture and categories",
        "Optimize website pages for SEO and AI citation readiness",
      ]},
      { type: "list", heading: "Timeline expectations:", items: [
        "3-6 months: typical time to first content-attributed inbound leads",
        "12 months: to meaningful topical authority and compounding growth",
        "18 months: to category authority and AI citation frequency",
      ]},
      { type: "quote", text: "Quality is the compounding asset, not quantity. Thirty mediocre posts produce worse outcomes than ten excellent ones." },
      { type: "closing", text: "AI writes fast. Strategy makes it work. Wordpinchh builds content roadmaps for SaaS startups that want to go from zero presence to category authority — systematically and efficiently." },
    ],
  },
  {
    id: 13,
    slug: "geo-strategy-indian-saas-companies",
    category: "GEO",
    tag: "GEO STRATEGY",
    tagColor: "#E07A9A",
    title: "GEO Strategy for Indian SaaS Companies: Getting Visible on Perplexity, Copilot, and ChatGPT",
    excerpt: "India's SaaS ecosystem is maturing fast. Buyers are more sophisticated, research is more rigorous, and AI platforms are increasingly part of how enterprise buyers shortlist solutions.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "4 min read",
    featured: false,
    seoTitle: "GEO Strategy for Indian SaaS Companies: Getting Visible on Perplexity, Copilot, and ChatGPT | Wordpinchh",
    metaDesc: "Learn how Indian SaaS companies can build GEO strategies to get visible on Perplexity, Copilot, and ChatGPT.",
    content: [
      { type: "intro", text: "India's SaaS ecosystem is maturing fast. Buyers are more sophisticated, research is more rigorous, and AI platforms are increasingly part of how enterprise buyers shortlist solutions. Indian SaaS companies that build GEO strategies now will have a decisive advantage by 2026." },
      { type: "heading", text: "The Indian SaaS buyer is already using AI for research" },
      { type: "text", text: "If you're a SaaS founder in India building for enterprise or mid-market clients, your buyers have almost certainly used an AI platform — ChatGPT, Perplexity, Google AI Overviews — to research your category in the last six months." },
      { type: "list", heading: "AI search impact metrics:", items: [
        "527% AI referral traffic growth year-on-year in early 2025",
        "4.4x higher conversion rate from AI-referred traffic vs organic",
        "10x faster discovery for GEO-ready content vs organic SEO alone",
      ]},
      { type: "heading", text: "Platform-specific considerations for Indian SaaS brands" },
      { type: "list", heading: "Key platforms:", items: [
        "Google AI Overviews - Priority for Indian enterprise buyers starting research",
        "Perplexity - First-stop for research-focused CTOs and procurement teams",
        "ChatGPT and Microsoft Copilot - Enterprise buyers using Microsoft 365 suite",
      ]},
      { type: "heading", text: "A GEO content roadmap for Indian SaaS brands" },
      { type: "list", heading: "Quarter-by-quarter approach:", items: [
        "Quarter 1: Foundation audit - Audit existing content for GEO readiness",
        "Quarter 2: Content build - Develop 8-10 GEO-optimised pieces targeting buyer questions",
        "Quarter 3: Authority expansion - Guest publishing and PR on credible publications",
        "Quarter 4: Measurement and iteration - Track AI citation frequency and refine strategy",
      ]},
      { type: "closing", text: "Is your content built to be cited — or just ranked? Wordpinchh creates GEO-optimised content for Indian SaaS companies that want to show up in AI-generated answers. Let's build your strategy." },
    ],
  },
  {
    id: 14,
    slug: "geo-content-audit-service-businesses",
    category: "GEO",
    tag: "GEO STRATEGY",
    tagColor: "#E07A9A",
    title: "From Ignored to Cited: A GEO Content Audit for Service Businesses",
    excerpt: "Most service businesses have more content than they realise — and less AI-ready content than they need. A GEO content audit is the process of finding that gap and closing it.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "4 min read",
    featured: false,
    seoTitle: "From Ignored to Cited: A GEO Content Audit for Service Businesses | Wordpinchh",
    metaDesc: "Discover how a GEO content audit can help service businesses identify and fix AI visibility gaps.",
    content: [
      { type: "intro", text: "Most service businesses have more content than they realise — and less AI-ready content than they need. A GEO content audit is the process of finding that gap and closing it, systematically, starting with the pages and pieces that will drive the most citation impact." },
      { type: "heading", text: "What a GEO audit looks for" },
      { type: "text", text: "A GEO content audit is not a conventional SEO audit. It's asking a fundamentally different question: 'If an AI system scanned every page of this website, would it have enough structured, authoritative, and clearly expressed content to cite this brand as a trusted source?'" },
      { type: "heading", text: "The five dimensions of a GEO content audit" },
      { type: "list", heading: "Audit dimensions:", items: [
        "Entity clarity - Clear definition of what your brand does and who it serves",
        "Structural readiness - Content organisation and formatting for AI extraction",
        "Authority signals - Expertise demonstration and data-backed claims",
        "Coverage gaps - Buyer questions your content doesn't address",
        "Off-site presence - Brand mentions across third-party sources",
      ]},
      { type: "quote", text: "The GEO gap isn't about having bad content. It's about having content that was built for the old internet and hasn't been adapted for the one buyers are using today." },
      { type: "closing", text: "Is your content built to be cited — or just ranked? Wordpinchh offers GEO content audits for B2B service businesses. We'll tell you exactly what's limiting your AI visibility — and how to fix it." },
    ],
  },
  {
    id: 15,
    slug: "eeat-generative-engine-optimisation-consultants",
    category: "GEO",
    tag: "GEO STRATEGY",
    tagColor: "#E07A9A",
    title: "The Role of E-E-A-T in Generative Engine Optimisation for B2B Consultants",
    excerpt: "Google's E-E-A-T framework was designed to help search engines evaluate content quality. In the era of GEO, it has become the primary trust model that generative AI uses to decide which sources are worth citing.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "4 min read",
    featured: false,
    seoTitle: "The Role of E-E-A-T in Generative Engine Optimisation for B2B Consultants | Wordpinchh",
    metaDesc: "Learn how E-E-A-T framework impacts GEO for B2B consultants.",
    content: [
      { type: "intro", text: "Google's E-E-A-T framework was designed to help search engines evaluate content quality. In the era of GEO, it has become something more fundamental — the primary trust model that generative AI uses to decide which sources are worth citing." },
      { type: "heading", text: "What E-E-A-T actually means for AI citation" },
      { type: "list", heading: "E-E-A-T dimensions:", items: [
        "Experience - First-hand engagement with case studies and client outcomes",
        "Expertise - Deep domain knowledge with precise language and nuanced positions",
        "Authoritativeness - Recognition as credible voice by other credible sources",
        "Trustworthiness - Honest, accurate, and transparent content with cited sources",
      ]},
      { type: "quote", text: "For B2B consultants, E-E-A-T is not a technical checklist. It's a codification of what it already means to be a trusted practitioner — expressed in a form that AI systems can read and act on." },
      { type: "heading", text: "Why consultants have an E-E-A-T advantage" },
      { type: "text", text: "B2B consultants and professional service firms are structurally well positioned to build strong E-E-A-T signals. Their work generates the raw material for all four dimensions: case studies demonstrate experience, technical content demonstrates expertise, press coverage builds authoritativeness, and transparent positioning builds trustworthiness." },
      { type: "closing", text: "Is your content built to be cited — or just ranked? Wordpinchh builds E-E-A-T-rich, GEO-optimised content for B2B consultants and professional service brands. Let's build yours." },
    ],
  },
  {
    id: 16,
    slug: "ai-search-engines-want-geo-framework-tech-brands",
    category: "GEO",
    tag: "GEO STRATEGY",
    tagColor: "#E07A9A",
    title: "What AI Search Engines Actually Want: A GEO Content Framework for Tech Brands",
    excerpt: "Optimising for AI search isn't guesswork. Peer-reviewed research and citation pattern analysis have revealed a clear set of content characteristics that AI systems consistently favour.",
    author: "Wordpinchh Team",
    date: "May 6, 2026",
    readTime: "4 min read",
    featured: false,
    seoTitle: "What AI Search Engines Actually Want: A GEO Content Framework for Tech Brands | Wordpinchh",
    metaDesc: "Discover the research-backed GEO content framework for tech brands.",
    content: [
      { type: "intro", text: "Optimising for AI search isn't guesswork. Peer-reviewed research, platform documentation, and citation pattern analysis have revealed a clear set of content characteristics that AI systems consistently favour." },
      { type: "heading", text: "The research foundation behind GEO" },
      { type: "text", text: "GEO isn't built on speculation. A landmark study by researchers from Princeton, Georgia Tech, IIT Delhi, and the Allen Institute for AI — published at the ACM SIGKDD 2024 conference — conducted the first large-scale empirical analysis of what content characteristics improve AI citation probability." },
      { type: "list", heading: "Research-backed citation improvements:", items: [
        "Expert quotes: +41% citation probability improvement",
        "Original statistics: +30% citation probability improvement",
        "Inline citations: +30% citation probability improvement",
        "Fluent, well-structured writing: +15% citation probability improvement",
        "Content organisation: +11% citation probability improvement",
      ]},
      { type: "heading", text: "Applying the framework: the four content types tech brands need" },
      { type: "list", heading: "Essential content types:", items: [
        "Category definition content - 'What is X?' and 'How does X work?' pieces",
        "Comparison and decision-support content - 'X vs Y' and evaluation guides",
        "Problem-solution content - 'Why does X happen and how do I fix it?' pieces",
        "Expert opinion and prediction content - Future-focused perspectives and predictions",
      ]},
      { type: "closing", text: "Is your content built to be cited — or just ranked? Wordpinchh creates GEO-optimised content for tech and SaaS brands. If you want to show up in AI-generated answers where your buyers are researching, let's build your strategy." },
    ],
  },
];

const CATEGORIES = ["ALL", ...Array.from(new Set(BLOGS.map((b) => b.category)))];

interface ContentBlock {
  type: string;
  text?: string;
  heading?: string;
  items?: string[];
}

interface Blog {
  id: number;
  slug: string;
  category: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  seoTitle: string;
  metaDesc: string;
  content: ContentBlock[];
}

// ─── TAG BADGE ────────────────────────────────────────────────────────────────
const TagBadge = ({ tag, color }: { tag: string; color: string }) => (
  <span style={{
    border: `1px solid ${color}`,
    color,
    fontSize: "clamp(10px, 1.8vw, 13px)",
    fontFamily: "'DM Mono', monospace",
    letterSpacing: "0.18em",
    padding: "3px 10px",
    borderRadius: "4px",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    whiteSpace: "nowrap" as const,
  }}>
    {tag}
  </span>
);

// ─── BLOG READER ──────────────────────────────────────────────────────────────
const BlogReader = ({ post, onBack, onPostClick }: { post: Blog; onBack: () => void; onPostClick?: (post: Blog) => void }) => (
  <div style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 24px 100px",
  }}>
    <div style={{
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr)",
      gap: "48px",
      alignItems: "start",
    }}
      className="blog-post-grid"
    >
      <article>
        <button
          onClick={onBack}
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
            textTransform: "uppercase" as const,
            marginBottom: "48px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          &larr; BACK TO INSIGHTS
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
          lineHeight: 0.92,
          letterSpacing: "-0.02em",
          fontWeight: 900,
          color: "#F0EDE6",
          textTransform: "uppercase" as const,
          marginBottom: "32px",
        }}>
          {post.title}
        </h1>

        {/* Pull quote */}
        <p style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(15px, 2.5vw, 20px)",
          color: "#CAFF4A",
          lineHeight: 1.7,
          fontStyle: "italic",
          marginBottom: "48px",
          paddingLeft: "20px",
          borderLeft: "3px solid #CAFF4A",
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
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.01em",
                color: "#F0EDE6",
                textTransform: "uppercase" as const,
                lineHeight: 1,
                paddingTop: "8px",
                borderTop: "1px solid #2a2720",
              }}>
                {block.text}
              </h2>
            );
            if (block.type === "text") return (
              <p key={i} style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(15px, 2.5vw, 18px)", color: "lightgray", lineHeight: 1.85 }}>
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
            if (block.type === "quote") return (
              <div key={i} style={{
                background: "linear-gradient(135deg, #161410 0%, #1A1A15 100%)",
                border: "1px solid #2a2720",
                borderRadius: "12px",
                padding: "32px",
                position: "relative" as const,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  top: "-20px",
                  left: "20px",
                  fontSize: "80px",
                  color: "#CAFF4A",
                  opacity: 0.1,
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                }}>
                  &ldquo;
                </div>
                <p style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(16px, 2.5vw, 22px)",
                  color: "#CAFF4A",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  margin: 0,
                  position: "relative" as const,
                  zIndex: 1,
                }}>
                  {block.text}
                </p>
              </div>
            );
            if (block.type === "closing") return (
              <div key={i} style={{ background: "#161410", border: "1px solid #2a2720", borderLeft: "3px solid #CAFF4A", borderRadius: "0 8px 8px 0", padding: "28px" }}>
                <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(15px, 2vw, 18px)", color: "#F0EDE6", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>
                  {block.text}
                </p>
              </div>
            );
            return null;
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: "64px", padding: "clamp(24px, 4vw, 36px)", background: "#161410", border: "1px solid #2a2720", borderRadius: "12px", display: "flex", flexDirection: "column" as const, gap: "20px" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.22em", color: "#CAFF4A", textTransform: "uppercase" as const }}>
            THINK THIS APPLIES TO YOUR BUSINESS?
          </div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 900, color: "#F0EDE6", lineHeight: 0.95, textTransform: "uppercase" as const, letterSpacing: "-0.01em" }}>
            Get a free content audit. No pitch, no pressure.
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
            <button
              onClick={() => window.open("https://wa.me/+917738824485", "_blank")}
              style={{
                background: "#CAFF4A", color: "#0E0D0A", border: "none",
                padding: "14px 28px", fontFamily: "'DM Mono', monospace",
                fontSize: "11px", letterSpacing: "0.18em", fontWeight: 700,
                borderRadius: "8px", cursor: "pointer", textTransform: "uppercase" as const,
              }}
            >
              BOOK FREE AUDIT &rarr;
            </button>
            <button
              onClick={onBack}
              style={{
                background: "transparent", color: "floralwhite", border: "1px solid #2a2720",
                padding: "14px 28px", fontFamily: "'DM Mono', monospace",
                fontSize: "11px", letterSpacing: "0.18em",
                borderRadius: "8px", cursor: "pointer", textTransform: "uppercase" as const,
              }}
            >
              &larr; MORE INSIGHTS
            </button>
          </div>
        </div>
      </article>

      {/* Sidebar — hidden on mobile via CSS */}
      <div className="blog-sidebar">
        <RecommendedSidebar 
          currentPostSlug={post.slug} 
          currentCategory={post.category} 
          onPostClick={onPostClick}
        />
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
        background: hovered ? "linear-gradient(135deg, #161410 0%, #1A1A15 100%)" : "#161410",
        border: `1px solid ${hovered ? "#CAFF4A" : "#2a2720"}`,
        borderRadius: "16px",
        padding: "clamp(24px, 4vw, 52px)",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hovered ? "0 20px 40px rgba(202,255,74,0.15)" : "0 4px 6px rgba(0,0,0,0.1)",
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
          <span style={{ fontSize: "clamp(10px, 2.2vw, 14px)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.22em", color: "#CAFF4A", textTransform: "uppercase" as const }}>
            — {post.category}
          </span>
          <TagBadge tag={post.tag} color={post.tagColor} />
          <span style={{ background: "#CAFF4A", color: "#0E0D0A", fontSize: "11px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em", padding: "3px 10px", borderRadius: "4px", fontWeight: 700, textTransform: "uppercase" as const }}>
            FEATURED
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
          lineHeight: 0.92,
          color: "#F0EDE6",
          marginBottom: "20px",
          letterSpacing: "-0.02em",
          fontWeight: 900,
          textTransform: "uppercase" as const,
        }}>
          {post.title}
        </h2>

        <p style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(15px, 2.5vw, 20px)",
          color: "floralwhite",
          lineHeight: 1.8,
          marginBottom: "32px",
          fontStyle: "italic",
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
            <span style={{ display: "inline-block", transition: "transform 0.3s ease", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>
              &rarr;
            </span>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(11px, 2.2vw, 13px)", color: "lightgray", letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
            {post.date} · {post.readTime}
          </div>
        </div>
      </div>

      {/* Right panel */}
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
        background: hovered ? "linear-gradient(135deg, #161410 0%, #1A1A15 100%)" : "#161410",
        border: `1px solid ${hovered ? "#CAFF4A" : "#2a2720"}`,
        borderRadius: "12px",
        padding: "clamp(20px, 3vw, 32px)",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        boxShadow: hovered ? "0 15px 30px rgba(202,255,74,0.12)" : "0 4px 6px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column" as const,
        gap: "14px",
        position: "relative" as const,
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-8px", right: "16px", fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 7vw, 88px)", color: "#1a1815", userSelect: "none" as const, lineHeight: 1 }}>
        0{index + 2}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" as const }}>
        <span style={{ fontSize: "clamp(10px, 2vw, 13px)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.22em", color: "lightgray", textTransform: "uppercase" as const }}>
          {post.category}
        </span>
        <TagBadge tag={post.tag} color={post.tagColor} />
      </div>

      <h3 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)",
        lineHeight: 1.05,
        color: "#F0EDE6",
        fontWeight: 900,
        letterSpacing: "-0.01em",
        textTransform: "uppercase" as const,
        flex: 1,
      }}>
        {post.title}
      </h3>

      <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(14px, 2.2vw, 17px)", color: "floralwhite", lineHeight: 1.75, fontStyle: "italic" }}>
        {post.excerpt}
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #2a2720", paddingTop: "14px", marginTop: "auto" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(10px, 2vw, 13px)", color: "lightgray", letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
          {post.date} · {post.readTime}
        </div>
        <span style={{ color: hovered ? "#CAFF4A" : "#2a2720", fontSize: "18px", transition: "all 0.3s ease", display: "inline-block", transform: hovered ? "translateX(6px)" : "translateX(0)" }}>
          &rarr;
        </span>
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

  const tickerItems = CATEGORIES.filter((c) => c !== "ALL");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500;600&display=swap');

        /* ── Ticker: true infinite loop ─────────────────────────── */
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

        /* ── Hide right panel on mobile ─────────────────────────── */
        .featured-right-panel { display: none !important; }
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
          gap: 32px;
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

        /* ── Horizontal padding ───────────────────────────────────── */
        .page-pad {
          padding-left: clamp(16px, 5vw, 60px);
          padding-right: clamp(16px, 5vw, 60px);
        }

        /* ── Stats row ───────────────────────────────────────────── */
        .stats-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0;
        }

        /* ── Blog post grid: single col on mobile, sidebar on desktop */
        .blog-post-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 1025px) {
          .blog-post-grid {
            grid-template-columns: 1fr 320px;
            gap: 48px;
          }
        }

        /* ── Sidebar: hidden on mobile ───────────────────────────── */
        .blog-sidebar {
          display: none;
        }
        @media (min-width: 1025px) {
          .blog-sidebar {
            display: block;
          }
        }

        * { box-sizing: border-box; }
      `}</style>

      <div className="min-h-screen bg-[#0E0D0A] text-[#F0EDE6] overflow-x-hidden" style={{ paddingTop: "16px" }}>

        {openPost ? (
          /* ── SINGLE POST VIEW ─────────────────────────────────── */
          <div style={{ paddingTop: "80px" }}>
            <BlogReader post={openPost} onBack={() => setOpenPost(null)} onPostClick={setOpenPost} />
          </div>
        ) : (
          <>
            {/* ── TICKER ────────────────────────────────────────── */}
            <div style={{ paddingTop: "80px" }}>
              <div style={{ background: "#161410", borderBottom: "1px solid #2a2720", borderTop: "1px solid #2a2720", overflow: "hidden", padding: "11px 0" }}>
                {/* Two identical copies — animation slides exactly 50% for seamless loop */}
                <div className="ticker-track">
                  {[...tickerItems, ...tickerItems].map((c, i) => (
                    <span
                      key={i}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "12px",
                        letterSpacing: "0.22em",
                        color: "lightgray",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "16px",
                        paddingRight: "56px",
                        textTransform: "uppercase" as const,
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      {c} <span style={{ color: "#CAFF4A" }}>•</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── HERO ──────────────────────────────────────────── */}
            <div className="page-pad" style={{ paddingTop: "64px", paddingBottom: "0", maxWidth: "1400px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
                <div style={{ width: "32px", height: "1px", background: "floralwhite", flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(10px, 2vw, 13px)", letterSpacing: "0.25em", color: "floralwhite", textTransform: "uppercase" as const }}>
                  INSIGHTS
                </span>
              </div>

              <div className="hero-grid">
                <h1 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.02em",
                  fontWeight: 900,
                  margin: 0,
                  textTransform: "uppercase" as const,
                }}>
                  <span style={{ color: "#F0EDE6", display: "block" }}>WORDS</span>
                  <span style={{ display: "block", WebkitTextStroke: "2px #F0EDE6", WebkitTextFillColor: "transparent" }}>THAT</span>
                  <span style={{ color: "#CAFF4A", display: "block" }}>WORK.</span>
                </h1>

                <div style={{ paddingBottom: "8px" }}>
                  <p style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "clamp(16px, 3vw, 22px)",
                    color: "floralwhite",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    marginBottom: "36px",
                  }}>
                    Frameworks, case studies, and uncomfortable truths about content
                    that actually ranks — in Google, AI engines, and in buyers&apos; minds.
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
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(10px, 1.8vw, 13px)", letterSpacing: "0.18em", color: "lightgray", marginTop: "4px", textTransform: "uppercase" as const }}>
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
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      background: activeCategory === cat ? "#CAFF4A" : "transparent",
                      color: activeCategory === cat ? "#0E0D0A" : "floralwhite",
                      border: `1px solid ${activeCategory === cat ? "#CAFF4A" : "#2a2720"}`,
                      padding: "8px 16px",
                      borderRadius: "6px",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "clamp(10px, 2.2vw, 13px)",
                      letterSpacing: "0.18em",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontWeight: activeCategory === cat ? 700 : 400,
                      textTransform: "uppercase" as const,
                    }}
                  >
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
              <div
                className="cta-bar"
                style={{
                  background: "#161410",
                  border: "1px solid #2a2720",
                  borderRadius: "16px",
                  padding: "clamp(28px, 5vw, 52px) clamp(20px, 5vw, 56px)",
                }}
              >
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(10px, 2.2vw, 14px)", letterSpacing: "0.22em", color: "#CAFF4A", marginBottom: "14px", textTransform: "uppercase" as const }}>
                    CONTENT COMPOUNDS. EVERY WEEK.
                  </div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.6rem, 4vw, 3.2rem)", color: "#F0EDE6", lineHeight: 0.92, letterSpacing: "0.01em", marginBottom: "12px" }}>
                    YOUR COMPETITORS ARE READING THIS.
                  </div>
                  <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(15px, 2.5vw, 20px)", color: "floralwhite", fontStyle: "italic", lineHeight: 1.6 }}>
                    Not publishing is a week they&apos;re pulling ahead.
                  </div>
                </div>
                <button
                  onClick={() => window.open("https://wa.me/+917738824485", "_blank")}
                  style={{
                    background: "#CAFF4A",
                    color: "#0E0D0A",
                    border: "none",
                    padding: "16px 36px",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "clamp(11px, 2.2vw, 14px)",
                    letterSpacing: "0.18em",
                    fontWeight: 700,
                    borderRadius: "8px",
                    cursor: "pointer",
                    whiteSpace: "nowrap" as const,
                    textTransform: "uppercase" as const,
                    flexShrink: 0,
                    alignSelf: "flex-start" as const,
                  }}
                >
                  GET FREE CONTENT AUDIT &rarr;
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