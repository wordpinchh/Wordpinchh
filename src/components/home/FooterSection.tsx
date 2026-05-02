"use client";

import { useEffect, useState } from "react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/wordpinchh/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+917738824485",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/wordpinchh",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Gmail",
    href: "mailto:akanksha@wordpinchh.org",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

export function FooterSection() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const footerLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  if (!mounted) return null;

  return (
    <>
      <footer
        className="border-t-2 border-[rgba(255,255,255,0.07)]"
        style={{ background: "var(--home-surface)" }}
      >
        <div className="px-5 sm:px-10 lg:px-16 py-6 lg:py-0 flex flex-col lg:flex-row lg:items-center">

          {/* Logo */}
          <div className="flex justify-center lg:justify-start shrink-0">
            <img
              src="/footer-logo.webp"
              alt="WordPinchh — Content Writing Agency Mumbai"
              width={140}
              height={140}
              className="h-20 sm:h-28 lg:h-46 w-auto"
            />
          </div>

          {/* Links — centered in remaining space */}
          <nav className="w-full lg:flex-1 mt-4 lg:mt-0 lg:-ml-20">
            <ul className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-x-5 xl:gap-x-8 gap-y-2 list-none p-0 m-0">
              {footerLinks.map((link, index) => (
                <li key={index} className="shrink-0">
                  <a
                    href={link.href}
                    className="no-underline transition-colors duration-300 hover:text-[#CAFF4A] relative group block"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "clamp(10px, 0.9vw, 13px)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "white",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CAFF4A] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex flex-col items-center lg:items-end gap-2.5 mt-5 lg:mt-0 shrink-0">

            {/* Label and Icons - Aligned */}
            <div className="flex flex-col items-center gap-3">
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#CAFF4A",
                  fontWeight: "600",
                  opacity: 0.85,
                  textAlign: "center",
                }}
              >
                Join the WordPinchh world.
              </span>
              
              <div className="flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: hovered === i
                    ? "1px solid #CAFF4A"
                    : "1px solid rgba(255,255,255,0.12)",
                  background: hovered === i
                    ? "rgba(202,255,74,0.08)"
                    : "rgba(255,255,255,0.04)",
                  color: hovered === i ? "#CAFF4A" : "rgba(255,255,255,0.55)",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                  transform: hovered === i ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: hovered === i
                    ? "0 0 12px rgba(202,255,74,0.15)"
                    : "none",
                }}
              >
                {icon}
              </a>
            ))}
              </div>
            </div>

          </div>
        </div>

        {/* Tagline */}
        <div className="text-center py-2">
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#E5E5EA",
            }}
          >
            Content for Search · Content for AI · Content that converts
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="px-5 pt-6 pb-5">
          <div
            className="mx-auto h-px mb-4"
            style={{
              width: "65%",
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)",
            }}
          />
          <div
            className="text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.55)",
              textTransform: "uppercase",
            }}
          >
            COPYRIGHT 2026 | DEVELOPED BY{" "}
            <span style={{ color: "rgba(255,255,255,0.85)" }}>WORDPINCHH</span>
          </div>
        </div>
      </footer>
    </>
  );
}