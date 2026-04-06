"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-9999 bg-black/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">

        {/* Logo */}
        <div className="shrink-0">
          <Link href="/" className="flex items-center">
            <img
              src="/wordpinchhlogo.webp"
              alt="WordPinchh — Content Writing Agency Mumbai"
              width={313}
              height={70}
              className="h-10 sm:h-14 md:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[15px] font-medium text-white/80 flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-white transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Get Free Content Report Button - Right */}
        <div className="shrink-0 hidden md:block">
          <Link href="/contact">
            <button
              className="px-4 lg:px-5 py-2 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#caff4a', color: '#000000' }}
            >
              Get Free Content Report
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Open navigation menu"
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-5 space-y-4 text-white text-base">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-1 hover:text-purple-400 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            <button
              className="w-full mt-2 py-3 rounded-lg font-bold transition-all duration-300"
              style={{ backgroundColor: '#caff4a', color: '#000000' }}
            >
              Get Free Content Report
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}