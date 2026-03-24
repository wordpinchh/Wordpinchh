"use client";

import { useState, useEffect, useRef } from "react";
import ContactLeftPanel from "@/components/contact/ContactLeftPanel";
import ContactRightPanel from "@/components/contact/ContactRightPanel";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('.submit-btn, .cal-btn, .path-btn, .field-input');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = mousePos.x + 'px';
      cursorRef.current.style.top = mousePos.y + 'px';
    }
  }, [mousePos]);

  if (!mounted) return null;

  return (
    <>
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-3 h-3 bg-[#CAFF4A] rounded-full pointer-events-none z-9999 transition-all duration-300 mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '60px' : '12px',
          height: isHovering ? '60px' : '12px',
        }}
      />

      {/* Main Page */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-[#0B0B09] text-[#F0EDE6] overflow-x-hidden pt-16"
        style={{
          cursor: 'none',
          position: 'relative',
        }}
      >
        {/* Grain Texture Overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-9998"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E\")",
          }}
        />

        <ContactLeftPanel />
        <ContactRightPanel />
      </div>
    </>
  );
}
