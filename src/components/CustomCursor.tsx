"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference"
      animate={{
        x: pos.x - 12,
        y: pos.y - 12,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
