"use client";

interface CalloutBoxProps {
  children: React.ReactNode;
}

export function CalloutBox({ children }: CalloutBoxProps) {
  return (
    <div 
      className="border-l-3 border-l-[#c8623a] rounded-r-lg p-4.5 pr-5.5 my-5"
      style={{ background: '#f5e8e0' }}
    >
      <p 
        className="text-[16px] mb-0"
        style={{ 
          fontFamily: "var(--font-dm-sans)",
          color: '#1a1410'
        }}
      >
        {children}
      </p>
    </div>
  );
}
