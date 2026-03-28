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
      {/* Main Footer */}
      <footer
        className="border-t-2 border-[rgba(255,255,255,0.07)]"
        style={{ background: 'var(--home-surface)' }}
      >
        <div className="px-5 sm:px-10 lg:px-16 py-6 lg:py-0 flex flex-col lg:flex-row lg:items-center">

          {/* Logo */}
          <div className="flex justify-center lg:justify-start shrink-0">
            <img
              src="/footer-logo.png"
              alt="Wordpinchh"
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
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(10px, 0.9vw, 13px)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'white',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CAFF4A] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Tagline */}
        <div className="text-center py-2">
          <span style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            letterSpacing: '0.08em',
            color: '#E5E5EA'
          }}>
            Content for Search · Content for AI · Content that converts
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="px-5 pt-6 pb-5">
          <div
            className="mx-auto h-px mb-4"
            style={{
              width: '65%',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)'
            }}
          />
          <div
            className="text-center"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase'
            }}
          >
            COPYRIGHT 2026 | DEVELOPED BY{' '}
            <span style={{ color: 'rgba(255,255,255,0.85)' }}>WORDPINCHH</span>
          </div>
        </div>
      </footer>
    </>
  );
}