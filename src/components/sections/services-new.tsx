"use client";
import { useState } from "react";

export default function ServicesNew() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="w-full" style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh", width: "100%" }}>

      {/* HERO */}
      <section className="hero" style={{ cursor: "default" }}>
        <div className="hero-left">
          <h1 className="hero-title" style={{ fontFamily: "var(--font-fahkwang)" }}>
            WHAT <br />
            <span style={{ WebkitTextStroke: "2px black", color: "transparent" }}>
              WE
            </span>{" "}
            <br />
            <span style={{ color: "var(--accent-service)" }}>DO</span>
          </h1>
        </div>

        <div className="hero-right">
          <div>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              What's covered
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <span>SEO Blog Writing</span>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Core</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <span>LinkedIn Ghostwriting</span>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Core</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <span>Landing Page Copywriting</span>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Core</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <span>Website Content</span>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Core</span>
              </div>
            </div>
          </div>
          <a style={{ fontSize: "14px", color: "#FF3B00", cursor: "pointer" }}>
            Not sure which? Talk to us →
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <div className="services-container">

        <div className="cat-strip">
          <span>Core Content Services</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>04 / 04</span>
        </div>

        <div className="service-row" style={{ ["--row-accent" as any]: "#C4922A" }} onClick={() => toggle("seo")}>
          <div className="row-num">01</div>
          <div className="row-main">
            <div className="row-title">SEO Blog Writing</div>
            <div className="row-desc">Content your ideal client finds at 11pm, reads in full, and emails to their team.</div>
          </div>
          <div className="row-right">
            <span className="row-tag">Blogging · SEO</span>
            <div className="row-arrow">
              {open === "seo" ? "×" : "+"}
            </div>
          </div>
        </div>

        {open === "seo" && (
          <div style={{ padding: "24px 32px", background: "var(--paper)", borderBottom: "2px solid var(--paper-2)" }}>
            <p style={{ fontSize: "14px", fontStyle: "italic", color: "rgba(15,10,0,0.8)" }}>
              A blog that ranks, gets read, and builds trust.
            </p>
          </div>
        )}

        <div className="service-row" style={{ ["--row-accent" as any]: "#00A86B" }} onClick={() => toggle("linkedin")}>
          <div className="row-num">02</div>
          <div className="row-main">
            <div className="row-title">LinkedIn Ghostwriting</div>
            <div className="row-desc">Your insights are worth sharing. You just don't have time to share them.</div>
          </div>
          <div className="row-right">
            <span className="row-tag">Social · B2B</span>
            <div className="row-arrow">
              {open === "linkedin" ? "×" : "+"}
            </div>
          </div>
        </div>

        {open === "linkedin" && (
          <div style={{ padding: "24px 32px", background: "var(--paper)", borderBottom: "2px solid var(--paper-2)" }}>
            <p style={{ fontSize: "14px", fontStyle: "italic", color: "rgba(15,10,0,0.8)" }}>
              Inbound leads from right audience.
            </p>
          </div>
        )}

        <div className="service-row" style={{ ["--row-accent" as any]: "#FF3B00" }} onClick={() => toggle("landing")}>
          <div className="row-num">03</div>
          <div className="row-main">
            <div className="row-title">Landing Page Copywriting</div>
            <div className="row-desc">Great pages make not buying feel like a mistake.</div>
          </div>
          <div className="row-right">
            <span className="row-tag">Conversion · Copy</span>
            <div className="row-arrow">
              {open === "landing" ? "×" : "+"}
            </div>
          </div>
        </div>

        {open === "landing" && (
          <div style={{ padding: "24px 32px", background: "var(--paper)", borderBottom: "2px solid var(--paper-2)" }}>
            <p style={{ fontSize: "14px", fontStyle: "italic", color: "rgba(15,10,0,0.8)" }}>
              Higher conversion rates without redesign.
            </p>
          </div>
        )}

        <div className="service-row" style={{ ["--row-accent" as any]: "#7A4BD4" }} onClick={() => toggle("website")}>
          <div className="row-num">04</div>
          <div className="row-main">
            <div className="row-title">Website Content</div>
            <div className="row-desc">8 seconds to answer: Why you?</div>
          </div>
          <div className="row-right">
            <span className="row-tag">Web · Positioning</span>
            <div className="row-arrow">
              {open === "website" ? "×" : "+"}
            </div>
          </div>
        </div>

        {open === "website" && (
          <div style={{ padding: "24px 32px", background: "var(--paper)", borderBottom: "2px solid var(--paper-2)" }}>
            <p style={{ fontSize: "14px", fontStyle: "italic", color: "rgba(15,10,0,0.8)" }}>
              Clear messaging that builds trust.
            </p>
          </div>
        )}

      </div>
    </div>
  </div>
  );
}
