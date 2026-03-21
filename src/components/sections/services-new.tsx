"use client";
import { useState, useEffect } from "react";

const services = [
  {
    id: "seo",
    number: "01",
    title: "SEO Blog Writing",
    desc: "Content your ideal client finds at 11pm, reads in full, and emails to their team.",
    tag: "Blogging · SEO",
    color: "#C4922A",

    problem: "Most business blogs fail for the same reason: written for a vague audience, optimised for keywords nobody converts on, published without any distribution plan. We start with your ICP and work backwards from the sale.",

    features: [
      "Keyword research tied to buyer intent, not just search volume",
      "A sharp angle that gives your take — not a Wikipedia summary",
      "Internal linking structure that builds topic authority over time",
      "SEO-optimised headline, meta description, and URL",
      "A clear CTA that moves the reader to the next logical step",
    ],

    result: "A blog that ranks, gets read, and builds trust — month after month.",
    cta: "Start With a Content Audit",
  },

  {
    id: "li",
    number: "02",
    title: "LinkedIn Ghostwriting",
    desc: "Your insights are worth sharing. You just don't have time to share them.",
    tag: "Social · B2B",
    color: "#00A86B",

    problem: "LinkedIn is the highest-ROI content channel for B2B founders and consultants right now. Organic reach is still strong. Decision-makers are active. Most people are posting noise — good content stands out immediately.",

    features: [
      "4–8 posts per month, written in your voice",
      "A mix: storytelling, insight, contrarian takes, lessons learned",
      "Posts designed to start conversations, not just collect likes",
      "A content calendar so you're never scrambling",
    ],

    result: "A LinkedIn presence that attracts inbound messages from the people you actually want to work with.",
    cta: "See LinkedIn Examples",
  },

  {
    id: "lp",
    number: "03",
    title: "Landing Page Copywriting",
    desc: "Most pages explain what a product does. Great ones make not buying feel like a mistake.",
    tag: "Conversion · Copy",
    color: "#FF3B00",

    problem: "A weak landing page is one of the most expensive problems in your business — because you're already paying to drive traffic to it. We rewrite pages using one framework: value undeniable, risk small, next step obvious.",

    features: [
      "A headline that speaks to the specific outcome your buyer wants",
      "A problem framing section that makes them feel understood",
      "Benefits from the buyer's perspective, not a feature list",
      "Social proof positioned to address the exact objection that kills conversions",
      "A CTA that creates urgency without being pushy",
    ],

    result: "Well-written landing page copy has doubled conversion rates without changing a single pixel of design.",
    cta: "Get a Landing Page Audit",
  },

  {
    id: "web",
    number: "04",
    title: "Website Content",
    desc: '8 seconds to answer one question: "Why you, not them?"',
    tag: "Web · Positioning",
    color: "#7A4BD4",

    problem: "Most business websites fail the 8-second test. They lead with the company, not the customer. They use buzzwords like 'innovative solutions.' They bury the actual value under three scrolls of vague copy.",

    features: [
      "Homepage — positioning, hero copy, value prop, social proof structure",
      "About page — story and credibility, written to attract not impress",
      "Services pages — outcome-focused copy for each offering",
      "Contact page — copy that makes reaching out feel easy, not formal",
    ],

    result: "We walk you through why every decision was made — so you understand the strategy behind the words.",
    cta: "Request a Website Copy Audit",
  },

  {
    id: "geo",
    number: "05",
    title: "GEO: Generative Engine Optimization",
    desc: "Your buyers are asking AI for recommendations. Is your brand part of the answer?",
    tag: "AI · Citations",
    color: "#0047FF",
    isNew: true,

    problem: "Traditional SEO gets you a blue link. GEO gets you named in the answer. When someone asks ChatGPT, Perplexity, or Google AI a question in your space, these systems pull from sources they consider authoritative and well-structured.",

    features: [
      "Prompt research — how your buyers ask about your category in AI tools",
      "Content gap analysis vs. what AI currently cites in your space",
      "Citation-optimised articles with structured formatting",
      "Schema and metadata recommendations for machine readability",
      "Monthly AI citation reports across ChatGPT, Perplexity, and Google",
      "Ongoing content refresh as AI models update",
    ],

    result: "If your buyers use AI to research — and they do — GEO is no longer optional.",
    cta: "Get a GEO Visibility Audit",
  },

  {
    id: "aeo",
    number: "06",
    title: "AEO: Answer Engine Optimization",
    desc: "65% of searches end without a click. AEO wins in a zero-click world.",
    tag: "AI · Zero-Click",
    color: "#D44B7A",
    isNew: true,

    problem: "Your content can rank on page one and still be invisible — because the person got their answer before they ever saw your link. AEO is about making your content the answer. Not a source. Not a link. The answer.",

    features: [
      "Conversational query research — real questions buyers ask AI",
      "Content structure audit with specific rewrite recommendations",
      "Answer-first rewrites for up to 10 priority pages",
      "FAQ content creation targeting your top 20 buyer questions",
      "Schema markup recommendations and implementation support",
      "Tracking for AI Overview appearances and featured snippets",
    ],

    result: "When your ideal client asks AI 'who are the best content agencies for B2B SaaS' — that's not a click. It's a recommendation.",
    cta: "Book an AEO Strategy Call",
  },

  {
    id: "ai",
    number: "07",
    title: "AI Content Strategy",
    desc: "AI can produce content at scale. The question is whether any of it is worth reading.",
    tag: "AI · Workflow",
    color: "#FF9500",
    isNew: true,

    problem: "The problem isn't the tools — it's that nobody explained how to use AI to build authority rather than fill a blog with words that say nothing. We help you build a content operation that uses AI intelligently.",

    features: [
      "Current content workflow audit and bottleneck analysis",
      "AI tool recommendations based on your use case and budget",
      "Custom prompt library for your top 5 content formats",
      "AI-assisted content workflow with human checkpoint map",
      "Team training: how to brief, prompt, edit, and approve AI content",
      "Content quality rubric tailored to your brand voice",
    ],

    result: "The founders and teams that win the next three years will be the ones who know the difference between AI as accelerator vs. AI as crutch.",
    cta: "Get an AI Workflow Audit",
  },
];

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  desc: string;
  tag: string;
  color: string;
  isNew?: boolean;
  problem: string;
  features: string[];
  result: string;
  cta: string;
}

interface ServiceRowProps {
  s: ServiceItem;
  open: string | null;
  setOpen: (id: string | null) => void;
  activeService: string | null;
  toggleService: (id: string) => void;
}

function ServiceRow({ s, open, setOpen, activeService, toggleService }: ServiceRowProps) {
  return (
    <>
      {/* ROW */}
      <div
        id={s.id}
        className={`service-row ${open === s.id ? "active" : ""}`}
        style={{ "--row-accent": s.color } as React.CSSProperties}
        data-cursor-color={s.color}
        onClick={() => toggleService(s.id)}
      >
        <div className="row-num">{s.number}</div>

        <div className="row-main">
          <div className="row-title">
            {s.title}
            {s.isNew && <span className="row-new-badge">NEW</span>}
          </div>
          <div className="row-desc">{s.desc}</div>
        </div>

        <div className="row-right">
          <span className="row-tag">{s.tag}</span>
          <div className="row-arrow">
            {activeService === s.id ? "×" : "+"}
          </div>
        </div>
      </div>

      {/* DETAIL */}
      <div 
        className={`service-detail ${open === s.id ? "open" : ""}`}
        style={{ "--detail-accent": s.color } as React.CSSProperties}
      >
        <div className="detail-inner">

          {/* LEFT */}
          <div className="detail-block">
            <div className="detail-block-label">The problem we solve</div>
            <p className="detail-intro">
              {s.problem}
            </p>
          </div>

          {/* CENTER */}
          <div className="detail-block">
            <div className="detail-block-label">Every article includes</div>
            <ul className="detail-features">
              {s.features.map((f: string, i: number) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="detail-block">
            <div className="detail-block-label">The payoff</div>

            <div className="detail-result-box">
              <div 
                className="detail-result-label"
                style={{ color: s.color }}
              >
                Result
              </div>
              <div className="detail-result-text">
                {s.result}
              </div>
            </div>

            <a 
              href="#" 
              className="detail-cta-btn"
              data-cursor-color={s.color}
              style={{ 
                background: s.color,
                filter: "brightness(0.9)"
              }}
            >
              {s.cta} →
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default function ServicesNew() {
  const [open, setOpen] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);

  // Custom Cursor Logic
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    let mouseX = -100;
    let mouseY = -100;
    let posX = -100;
    let posY = -100;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", move);

    const animate = () => {
      posX += (mouseX - posX) * 0.18;
      posY += (mouseY - posY) * 0.18;

      if (cursor) {
        cursor.style.left = posX + "px";
        cursor.style.top = posY + "px";
      }

      requestAnimationFrame(animate);
    };

    animate();

    // HOVER TARGETS
    const setupHoverTargets = () => {
      const targets = document.querySelectorAll(
        "[data-cursor-color], a, button"
      );

      console.log("Found targets:", targets.length);

      targets.forEach((el) => {
        const color = el.getAttribute("data-cursor-color");
        console.log("Element with color:", color);

        el.addEventListener("mouseenter", (e) => {
          const target = e.currentTarget as HTMLElement;
          const color = target.getAttribute("data-cursor-color");

          console.log("Hovering, color:", color);

          cursor?.classList.add("hover");

          if (color && cursor) {
            cursor.style.background = color;
          }
        });

        el.addEventListener("mouseleave", () => {
          cursor?.classList.remove("hover");

          if (cursor) {
            cursor.style.background = "#FF3B00"; // default
          }
        });
      });
    };

    // Initial setup
    setTimeout(setupHoverTargets, 100);

    // Watch for DOM changes
    const observer = new MutationObserver(() => {
      setupHoverTargets();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  const toggleService = (id: string) => {
    setActiveService(prev => (prev === id ? null : id));
    setOpen(prev => (prev === id ? null : id));
  };

  const handleScrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });

    setActiveService(id);
    setOpen(id);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div id="cursor">
        <div id="cursor-text">OPEN</div>
      </div>
      <div className="w-full" style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh", width: "100%" }}>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {[
            "GHOSTWRITING",
            "LANDING PAGE COPY",
            "WEBSITE CONTENT",
            "GEO OPTIMIZATION",
            "AEO OPTIMIZATION",
            "AI CONTENT STRATEGY",
            "SEO BLOG WRITING",
            "LINKEDIN GHOSTWRITING",
          ]
            .concat([
              "GHOSTWRITING",
              "LANDING PAGE COPY",
              "WEBSITE CONTENT",
              "GEO OPTIMIZATION",
              "AEO OPTIMIZATION",
              "AI CONTENT STRATEGY",
              "SEO BLOG WRITING",
              "LINKEDIN GHOSTWRITING",
            ])
            .map((item, i) => (
              <span key={i} className="ticker-item">
                <span className="dot" />
                {item}
              </span>
            ))}
        </div>
      </div>

      {/* HERO */}
      <section className="hero" style={{ cursor: "default" }}>
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span>02</span>
            <div className="line"></div>
            <span>SERVICES</span>
          </div>
          <h1 className="hero-title">
            WHAT <br />
            <span className="outline">WE</span> <br />
            <span className="red">DO</span>
          </h1>
          <p className="hero-desc">
            Three jobs. One agency. Google, AI engines, and the humans who actually buy.
          </p>
        </div>

        <div className="hero-right">
          <div>
            <p className="hero-label">WHAT'S COVERED</p>

            <div className="hero-list">
              {services.map((item) => (
                <div
                  key={item.id}
                  className={`hero-item ${
                    activeService === item.id ? "active" : ""
                  }`}
                  data-cursor-color={item.color}
                  onClick={() => handleScrollToService(item.id)}
                >
                  <span className="hero-name">{item.title}</span>

                  <span
                    className={`hero-badge ${
                      item.isNew ? "new" : "core"
                    }`}
                  >
                    {item.isNew ? "NEW" : "CORE"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-count">
            07
            <span>Services</span>
          </div>

          <a href="#" className="hero-cta" data-cursor-color="#FF3B00">
            Not sure which? Talk to us →
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <div className="services-container">

        {/* CORE */}
        <div className="cat-strip">
          <span className="cat-label">CORE CONTENT SERVICES</span>
          <span className="cat-meta">04 / 07</span>
        </div>

        {services.filter(s => !s.isNew).map((s) => (
          <ServiceRow 
            key={s.id} 
            s={s} 
            open={open} 
            setOpen={setOpen}
            activeService={activeService}
            toggleService={toggleService}
          />
        ))}

        {/* AI */}
        <div className="cat-strip">
          <span className="cat-label">AI VISIBILITY SERVICES — NEW</span>
          <span className="cat-meta">03 / 07</span>
        </div>

        {services.filter(s => s.isNew).map((s) => (
          <ServiceRow 
            key={s.id} 
            s={s} 
            open={open} 
            setOpen={setOpen}
            activeService={activeService}
            toggleService={toggleService}
          />
        ))}

      </div>
    </div>
  </div>
  );
}
