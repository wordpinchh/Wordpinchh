"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-gray-400 py-[80px] px-[6vw] relative z-70"
    >

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Divider */}
        <div className="border-t border-white/10 mb-10"></div>

        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} WordPinchh. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">

          <a className="hover:text-white transition">
            Terms of Use
          </a>

          <a className="hover:text-white transition">
            Privacy Policy
          </a>

        </div>

      </div>

    </motion.footer>
  );
}
