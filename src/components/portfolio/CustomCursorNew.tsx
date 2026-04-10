"use client";

export default function CustomCursor() {
  return (
    <>
      <div id="cur" className="fixed w-[10px] h-[10px] bg-[var(--lm)] rounded-[50%] pointer-events-none z-[99999] transform translate-x-[-50%] translate-y-[-50%] mix-blend-difference transition-all duration-250"></div>
      
      <style jsx>{`
        body {
          cursor: none;
        }
        
        a, button, .card {
          cursor: pointer;
        }
        
        a:hover, button:hover, .card:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
