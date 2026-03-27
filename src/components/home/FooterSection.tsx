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
        className="border-t-2 border-[rgba(255,255,255,0.07)] px-20 flex items-center justify-between"
        style={{ background: 'var(--home-surface)' }}
      >
        {/* Brand */}
        <div className="flex items-start justify-start w-1/3">
          <img 
            src="/footer-logo.png" 
            alt="Wordpinchh" 
            className="h-60 w-auto"
          />
        </div>

        {/* Links - Centered */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-7 list-none">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  className="no-underline transition-all duration-300 hover:text-[#CAFF4A] hover:scale-105 relative group"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(12px, 3vw, 15px)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--home-muted)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CAFF4A] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Empty space for balance */}
        <div className="w-1/3"></div>
      </footer>

      {/* Tagline Section */}
      <div 
        className="w-full px-16 text-center"
        style={{ 
          background: 'var(--home-surface)',
          marginTop: '-8px'
        }}
      >
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
      </div>

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
