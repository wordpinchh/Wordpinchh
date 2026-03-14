"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-white font-bold text-xl">
            Wordpinch<span className="text-accent">h</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="ml-4 px-5 py-2 rounded-lg bg-linear-to-r from-purple-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Free Content Report
          </motion.button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-6 text-white text-lg"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block hover:text-purple-400 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <button className="w-full mt-4 py-3 rounded-lg bg-linear-to-r from-purple-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Get Free Content Report
          </button>
        </motion.div>
      )}
    </header>
  );
}
