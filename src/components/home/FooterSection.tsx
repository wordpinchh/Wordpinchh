"use client";

import { useEffect, useState } from "react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/wordpinchh/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+917738824485",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/wordpinchh",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:akanksha@wordpinchh.org",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

const navLinks = [
  { name: "Services",   href: "/services"   },
  { name: "Portfolio",  href: "/portfolio"  },
  { name: "Industries", href: "/industries" },
  { name: "Blog",       href: "/blog"       },
  { name: "About",      href: "/about"      },
  { name: "Contact",    href: "/contact"    },
];

const isExternal = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto");

export function FooterSection() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <footer style={{ background: "var(--home-surface)" }}>

      {/* ── Top lime accent ── */}
      <div style={{
        height: "2px",
        background: "linear-gradient(to right, transparent 0%, rgba(202,255,74,0) 10%, rgba(202,255,74,0.6) 50%, rgba(202,255,74,0) 90%, transparent 100%)",
      }} />

      {/* ══════════════════════════════════════════════════════════
          DESKTOP MAIN ROW
          3-column CSS grid → each col is 1fr so nav is
          mathematically centred even if logo ≠ social width
      ══════════════════════════════════════════════════════════ */}
      <div className="footer-main-row" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        padding: "0 5vw",
        minHeight: "clamp(120px, 14vw, 180px)",
      }}>

        {/* ── Col 1: Logo — left-aligned inside its 1fr cell ── */}
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <img
            src="/footer-logo.webp"
            alt="WordPinchh — Content Writing Agency Mumbai"
            style={{
              height: "clamp(90px, 10vw, 150px)",
              width: "auto",
              display: "block",
            }}
          />
        </div>

        {/* ── Col 2: Nav — centred inside its 1fr cell ── */}
        <nav
          aria-label="Footer navigation"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <ul style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "clamp(16px, 2.2vw, 40px)",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}>
            {navLinks.map((link) => (
              <li key={link.name} style={{ flexShrink: 0 }}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(11px, 0.9vw, 14px)",
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    position: "relative",
                    display: "inline-block",
                    transition: "color 0.25s ease",
                    paddingBottom: "4px",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#CAFF4A";
                    (el.querySelector(".ul") as HTMLElement).style.width = "100%";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "rgba(255,255,255,0.8)";
                    (el.querySelector(".ul") as HTMLElement).style.width = "0%";
                  }}
                >
                  {link.name}
                  <span className="ul" style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "1.5px",
                    width: "0%",
                    background: "#CAFF4A",
                    transition: "width 0.3s ease",
                    display: "block",
                  }} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Col 3: Social — right-aligned inside its 1fr cell ── */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "12px",
        }}>

          {/* Label - first line */}
          <span style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(9px, 0.7vw, 11px)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "#CAFF4A",
            whiteSpace: "nowrap",
          }}>
            Join the WordPinchh world.
          </span>

          {/* Icons - second line */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {socialLinks.map(({ label, href, icon }, i) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  border: hovered === i ? "1px solid #CAFF4A" : "1px solid rgba(255,255,255,0.13)",
                  background: hovered === i ? "rgba(202,255,74,0.09)" : "rgba(255,255,255,0.05)",
                  color: hovered === i ? "#CAFF4A" : "rgba(255,255,255,0.55)",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                  transform: hovered === i ? "translateY(-3px)" : "translateY(0)",
                  boxShadow: hovered === i
                    ? "0 0 16px rgba(202,255,74,0.2), 0 4px 14px rgba(0,0,0,0.35)"
                    : "0 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
      {/* ── END MAIN ROW ── */}

      {/* ── Tagline ── */}
      <div style={{
        textAlign: "center",
        padding: "8px 0 20px",
        fontFamily: "var(--font-inter)",
        fontSize: "clamp(10px, 0.8vw, 12px)",
        letterSpacing: "0.1em",
        color: "rgba(255,255,255,0.35)",
      }}>
        Content for Search&nbsp;&nbsp;·&nbsp;&nbsp;Content for AI&nbsp;&nbsp;·&nbsp;&nbsp;Content that converts
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="footer-bottom-bar" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 5vw",
        }}>
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(10px, 0.75vw, 12px)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.38)",
            margin: 0,
          }}>
            Copyright 2026&nbsp;·&nbsp;
            <span style={{ color: "rgba(255,255,255,0.72)" }}>WordPinchh</span>
          </p>

          <a
            href="/privacy"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(10px, 0.75vw, 12px)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.38)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CAFF4A"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.38)"}
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* ── Responsive overrides ── */}
      <style>{`
        @media (max-width: 900px) {
          .footer-main-row {
            grid-template-columns: 1fr !important;
            justify-items: center !important;
            padding: 32px 6vw !important;
            min-height: unset !important;
            gap: 28px;
          }
          .footer-main-row > div:first-child {
            justify-content: center !important;
          }
          .footer-main-row > div:last-child {
            align-items: center !important;
          }
          .footer-main-row nav ul {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 12px 20px !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            gap: 8px !important;
            text-align: center !important;
          }
        }
      `}</style>

    </footer>
  );
}