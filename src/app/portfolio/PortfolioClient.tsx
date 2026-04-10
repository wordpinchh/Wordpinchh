"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { portfolioSamples } from "@/data/portfolioSamples";
import "@/styles/portfolio.css";

export const metadata: Metadata = {
  title: "Portfolio - Content Writing Samples | WordPinchh",
  description: "Explore our portfolio of SEO blogs, LinkedIn articles, website copy, and landing pages. Real work for real clients across healthcare, finance, SaaS, and consulting industries.",
  keywords: ["content writing portfolio", "SEO blog samples", "LinkedIn ghostwriting examples", "website copywriting samples", "landing page examples", "content writing agency Mumbai"],
};

export default function PortfolioPage() {
  const [filteredSamples, setFilteredSamples] = useState(portfolioSamples);
  const [activeFilter, setActiveFilter] = useState("all");
  const [unlocked, setUnlocked] = useState(false);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [selectedIntent, setSelectedIntent] = useState("");
  const [gateOpen, setGateOpen] = useState(false);
  const [contentModalOpen, setContentModalOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  // Custom cursor
  useEffect(() => {
    const cursor = document.getElementById("cur");
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const handleMouseEnter = () => {
      cursor.classList.add("big");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("big");
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, .card");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const doFilter = (filter: string, button: HTMLButtonElement) => {
    // Update active button
    document.querySelectorAll(".fp").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    
    setActiveFilter(filter);
    
    if (filter === "all") {
      setFilteredSamples(portfolioSamples);
    } else {
      const filtered = portfolioSamples.filter(sample => 
        sample.tags.includes(filter)
      );
      setFilteredSamples(filtered);
    }
  };

  const openGate = (id: string) => {
    if (!unlocked) {
      setPendingId(id);
      setGateOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      openContent(id);
    }
  };

  const closeGate = () => {
    setGateOpen(false);
    document.body.style.overflow = "";
    setPendingId(null);
  };

  const selectIntent = (val: string, btn: HTMLButtonElement) => {
    document.querySelectorAll(".intent-btn").forEach((b) => b.classList.remove("sel"));
    btn.classList.add("sel");
    setSelectedIntent(val);
  };

  const handleGateSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email || !selectedIntent) {
      alert("Please fill in all required fields and select why you're browsing.");
      return;
    }

    // In production: POST to your form endpoint here
    setUnlocked(true);
    setGateOpen(false);
    document.body.style.overflow = "";

    if (pendingId) {
      setTimeout(() => {
        openContent(pendingId);
        setPendingId(null);
      }, 500);
    }
  };

  const openContent = (id: string) => {
    const sample = portfolioSamples.find(s => s.id === id);
    if (!sample) return;
    
    setSelectedSample(sample.content);
    setContentModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCModal = () => {
    setContentModalOpen(false);
    document.body.style.overflow = "";
  };

  const getTagClass = (tag: string) => {
    const tagClasses: { [key: string]: string } = {
      "seo": "t-seo",
      "li": "t-li",
      "wc": "t-wc",
      "lp": "t-lp",
      "hc": "t-hc",
      "saas": "t-saas",
      "fin": "t-fin",
      "cons": "t-cons",
      "life": "t-life",
      "rec": "t-rec"
    };
    return tagClasses[tag] || "";
  };

  const getCardColor = (tags: string[]) => {
    const colorMap: { [key: string]: string } = {
      "seo": "var(--seo)",
      "li": "var(--li)",
      "wc": "var(--wc)",
      "lp": "var(--lp)"
    };
    return colorMap[tags[0]] || "var(--b1)";
  };

  return (
    <div className="portfolio-container">
      <div id="cur"></div>

      {/* HEADER */}
      <header className="p-header">
        <div>
          <div className="eyebrow">Portfolio</div>
          <h1 className="h1">
            Words That<br />
            <span className="ol">Ranked.</span>
            <br />
            <span className="lm">Converted.</span>
          </h1>
        </div>
        <div className="header-r">
          <p className="header-desc">
            Real work. Eleven pieces across four service types and six industries - SEO blogs, LinkedIn thought leadership, website copy, and more. Unlock any piece by sharing your details.
          </p>
          <div className="header-stats">
            <div className="stat">
              <div className="stat-n">{portfolioSamples.length}</div>
              <div className="stat-l">Samples</div>
            </div>
            <div className="stat">
              <div className="stat-n">4</div>
              <div className="stat-l">Service types</div>
            </div>
            <div className="stat">
              <div className="stat-n">6</div>
              <div className="stat-l">Industries</div>
            </div>
          </div>
        </div>
      </header>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="fg">
          <span className="fg-label">Service -</span>
          <button className="fp active" data-f="all" onClick={(e) => doFilter("all", e.currentTarget)}>
            All
          </button>
          <button className="fp" data-f="seo" onClick={(e) => doFilter("seo", e.currentTarget)}>
            SEO Blog
          </button>
          <button className="fp" data-f="li" onClick={(e) => doFilter("li", e.currentTarget)}>
            LinkedIn
          </button>
          <button className="fp" data-f="wc" onClick={(e) => doFilter("wc", e.currentTarget)}>
            Website Copy
          </button>
          <button className="fp" data-f="lp" onClick={(e) => doFilter("lp", e.currentTarget)}>
            Landing Page
          </button>
        </div>
        <div className="fsep"></div>
        <div className="fg">
          <span className="fg-label">Industry -</span>
          <button className="fp" data-f="hc" onClick={(e) => doFilter("hc", e.currentTarget)}>
            Healthcare
          </button>
          <button className="fp" data-f="saas" onClick={(e) => doFilter("saas", e.currentTarget)}>
            SaaS / B2B
          </button>
          <button className="fp" data-f="fin" onClick={(e) => doFilter("fin", e.currentTarget)}>
            Finance
          </button>
          <button className="fp" data-f="cons" onClick={(e) => doFilter("cons", e.currentTarget)}>
            Consulting
          </button>
          <button className="fp" data-f="life" onClick={(e) => doFilter("life", e.currentTarget)}>
            Lifestyle
          </button>
          <button className="fp" data-f="rec" onClick={(e) => doFilter("rec", e.currentTarget)}>
            Recruitment
          </button>
        </div>
      </div>

      {/* GRID */}
      <section className="grid-area">
        <div className="grid-sep">
          <span className="gs-lbl">All Samples</span>
          <div className="gs-line"></div>
          <span className="gs-cnt">{filteredSamples.length} pieces</span>
        </div>
        <div className="port-grid" id="grid">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              className={`card ${sample.featured ? "feat" : ""}`}
              style={{ "--ca": getCardColor(sample.tags) } as React.CSSProperties}
              data-tags={sample.tags.join(" ")}
              data-id={sample.id}
            >
              <div className={`thumb ${sample.tall ? "tall" : ""}`} style={{ background: `linear-gradient(135deg,${sample.tags[0] === "seo" ? "#0A1A10,#0D2A18" : sample.tags[0] === "fin" ? "#1A1A0A,#2A2A0D" : "#0D1F2E,#0A2040"}` }}>
                <div className="mock">
                  <div className="ml t"></div>
                  <div className="ml w1"></div>
                  <div className="ml w2"></div>
                  <div className="ml w3"></div>
                  <div className="ml g"></div>
                  <div className="ml w1"></div>
                  <div className="ml w4"></div>
                  <div className="ml w5"></div>
                  <div className="ml g"></div>
                  <div className="ml w3"></div>
                  <div className="ml w2"></div>
                </div>
                <div className="thumb-lock">
                  <div className="lock-icon">{"\ud83d\udd12"}</div>
                  <div className="lock-txt">Unlock to read</div>
                </div>
              </div>
              <div className="cbody">
                <div className="ctags">
                  {sample.tags.map((tag) => (
                    <span key={tag} className={`tag ${getTagClass(tag)}`}>
                      {tag === "seo" ? "SEO Blog" : 
                       tag === "li" ? "LinkedIn" :
                       tag === "wc" ? "Website Copy" :
                       tag === "lp" ? "Landing Page" :
                       tag === "hc" ? "Healthcare" :
                       tag === "saas" ? "SaaS / B2B" :
                       tag === "fin" ? "Finance" :
                       tag === "cons" ? "Consulting" :
                       tag === "life" ? "Lifestyle" :
                       tag === "rec" ? "Recruitment" : tag}
                    </span>
                  ))}
                </div>
                <div className="ctitle">{sample.title}</div>
                <div className="excerpt-wrap">
                  <div className="cexcerpt">{sample.excerpt}</div>
                </div>
              </div>
              <div className="cfoot">
                <span className="cfoot-meta">{sample.meta}</span>
                <span className="cfoot-cta" onClick={() => openGate(sample.id)}>
                  Unlock full article {"\u2192"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GATE MODAL */}
      <div className={`gate ${gateOpen ? "open" : ""}`} id="gate">
        <div className="gate-box">
          <div className="gate-head">
            <button className="gate-close" onClick={closeGate}>
              {"\u00d7"}
            </button>
            <div className="gate-eyebrow">Unlock Portfolio</div>
            <div className="gate-title">Get Full Access</div>
            <div className="gate-sub">
              Share your details to unlock complete portfolio samples with full articles, strategies, and results.
            </div>
          </div>
          <div className="gate-unlock">
            <div className="unlock-chip">
              <div className="uc-dot"></div>
              11 Complete Samples
            </div>
            <div className="unlock-chip">
              <div className="uc-dot"></div>
              Full Articles
            </div>
            <div className="unlock-chip">
              <div className="uc-dot"></div>
              Strategy Details
            </div>
            <div className="unlock-chip">
              <div className="uc-dot"></div>
              Results & Metrics
            </div>
          </div>
          <div className="gate-form" id="gateFormSection">
            <div className="gf-row full">
              <div className="gf">
                <label className="gf-lbl">Full Name *</label>
                <input
                  type="text"
                  className="gf-input"
                  id="g-name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
            <div className="gf-row">
              <div className="gf">
                <label className="gf-lbl">Phone *</label>
                <input
                  type="tel"
                  className="gf-input"
                  id="g-phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="gf">
                <label className="gf-lbl">Email *</label>
                <input
                  type="email"
                  className="gf-input"
                  id="g-email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="intent-grid">
              <button
                className="intent-btn"
                onClick={(e) => selectIntent("client", e.currentTarget)}
              >
                <div className="ib-title">I'm a Potential Client</div>
                <div className="ib-sub">Looking for content services</div>
              </button>
              <button
                className="intent-btn"
                onClick={(e) => selectIntent("competitor", e.currentTarget)}
              >
                <div className="ib-title">Competitor Research</div>
                <div className="ib-sub">Checking out the market</div>
              </button>
              <button
                className="intent-btn"
                onClick={(e) => selectIntent("student", e.currentTarget)}
              >
                <div className="ib-title">Student/Researcher</div>
                <div className="ib-sub">Learning about content</div>
              </button>
              <button
                className="intent-btn"
                onClick={(e) => selectIntent("other", e.currentTarget)}
              >
                <div className="ib-title">Just Curious</div>
                <div className="ib-sub">Exploring quality work</div>
              </button>
            </div>
            <button className="gate-submit" onClick={handleGateSubmit}>
              <span>Unlock Full Portfolio</span>
              <div className="submit-arr">{"\u2192"}</div>
            </button>
            <div className="gate-note">
              We respect your privacy. No spam, ever.
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT MODAL */}
      <div className={`cmodal ${contentModalOpen ? "open" : ""}`} id="cmodal" onClick={(e) => {
        if (e.target === e.currentTarget) closeCModal();
      }}>
        <div className="cm-panel">
          <div className="cm-head">
            <button className="cm-close" onClick={closeCModal}>
              {"\u00d7"}
            </button>
            <div className="cm-cat" id="cmCat">{selectedSample?.cat}</div>
            <div className="cm-title" id="cmTitle">{selectedSample?.title}</div>
            <div className="cm-sub" id="cmSub">{selectedSample?.sub}</div>
          </div>
          <div className="cm-body" id="cmBody">
            {selectedSample && (
              <>
                <div className="meta-g">
                  {selectedSample.meta.map((m: any, i: number) => (
                    <div key={i}>
                      <div className="mg-lbl">{m.l}</div>
                      <div className="mg-val">{m.v}</div>
                    </div>
                  ))}
                </div>
                <div dangerouslySetInnerHTML={{ __html: selectedSample.body }} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
