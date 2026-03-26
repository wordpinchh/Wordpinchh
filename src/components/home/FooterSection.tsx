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
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  if (!mounted) return null;

  return (
    <>
      {/* Main Footer Navigation */}
      <footer 
        className="border-t-2 border-[rgba(255,255,255,0.07)] px-16 py-7 flex items-center justify-between"
        style={{ background: 'var(--home-surface)' }}
      >
        {/* Brand */}
        <div className="flex items-center">
          <img 
            src="/wordpichh.png" 
            alt="Wordpinchh" 
            className="h-14 w-auto"
          />
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

        {/* Tagline */}
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

      {/* Dedicated Bottom Footer Section */}
      <div 
        className="w-full"
        style={{ 
          background: 'var(--home-surface)',
          paddingTop: '40px',
          paddingBottom: '25px'
        }}
      >
        {/* Thin Gradient Divider Line */}
        <div 
          className="mx-auto h-px"
          style={{ 
            width: '65%',
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)'
          }}
        />
        
        {/* Copyright Text */}
        <div 
          className="text-center"
          style={{ 
            marginTop: '14px',
            fontFamily: 'var(--font-inter)',
            fontSize: '12px',
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase'
          }}
        >
          COPYRIGHT 2026 | DEVELOPED BY <span style={{ color: 'rgba(255,255,255,0.85)' }}>WORDPINCCHH</span>
        </div>
      </div>
    </>
  );
}
