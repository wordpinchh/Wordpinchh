"use client";

export default function BottomCTA() {
  return (
    <section className="w-full bg-[#c7dfd8] py-[20px] overflow-hidden flex items-center justify-center relative z-70">
      <a href="/strategy-call" className="block w-full text-center px-4">
        <h2
          className="leading-none text-black hover:opacity-70 transition cursor-pointer tracking-wider whitespace-nowrap"
          style={{
            fontFamily: "'Fahkwang', sans-serif",
            fontSize: "clamp(28px, 6.7vw, 160px)",
          }}
        >
          BOOK A STRATEGY CALL
        </h2>
      </a>
    </section>
  );
}