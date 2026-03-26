"use client";

import { useEffect, useState } from "react";

export function FooterSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const footerLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  if (!mounted) return null;

  return (
    <footer 
      className="border-t-2 border-[rgba(255,255,255,0.07)] px-16 py-7 flex items-center justify-between"
      style={{ background: 'var(--home-surface)' }}
    >
      {/* Brand */}
      <div 
        style={{
          fontFamily: 'var(--font-fahkwang)',
          fontSize: 'clamp(1.1rem, 3vw, 1.2rem)',
          fontWeight: 800,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--home-text)'
        }}
      >
        Wordpinchh
      </div>

      {/* Links */}
      <ul className="flex gap-7 list-none">
        {footerLinks.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href}
              className="no-underline transition-all duration-200 hover:text-(--home-text)"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(12px, 3vw, 15px)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--home-muted)'
              }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <div 
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(10px, 2.5vw, 12px)',
          letterSpacing: '0.08em',
          color: 'var(--home-muted-2)'
        }}
      >
        Content for Search · Content for AI · Content that converts
      </div>
    </footer>
  );
}
