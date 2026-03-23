"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add hover targets
    const hoverTargets = document.querySelectorAll('.card-featured, .card-standard, .card-wide, .req-btn, .filter-pill, .card-placeholder');
    
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      hoverTargets.forEach(target => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="fixed w-[10px] h-[10px] border-[1.5px] border-black rounded-full pointer-events-none z-[9999] transition-all duration-300"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        width: isHovering ? '52px' : '10px',
        height: isHovering ? '52px' : '10px',
        backgroundColor: isHovering ? 'black' : 'transparent',
        borderColor: isHovering ? 'black' : 'black'
      }}
    >
      {isHovering && (
        <span className="absolute inset-0 flex items-center justify-center text-[9px] font-semibold tracking-[0.1em] text-[#FAFAF7] font-sans uppercase">
          VIEW
        </span>
      )}
    </div>
  );
}
