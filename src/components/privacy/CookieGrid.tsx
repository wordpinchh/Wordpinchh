"use client";

export function CookieGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-5">
      <div 
        className="border border-[#e0d5c8] rounded-lg p-4 pr-4.5"
        style={{ background: '#f3ede3' }}
      >
        <h4 
          className="text-[17px] font-bold mb-1.5"
          style={{ 
            fontFamily: "var(--font-playfair-display)",
            color: '#1a1410'
          }}
        >
          Essential Cookies
        </h4>
        <p 
          className="text-[15px] m-0"
          style={{ 
            fontFamily: "var(--font-dm-sans)",
            color: '#8a7a6e'
          }}
        >
          Necessary for core functionality and security. The Service cannot function properly without these.
        </p>
      </div>
      
      <div 
        className="border border-[#e0d5c8] rounded-lg p-4 pr-4.5"
        style={{ background: '#f3ede3' }}
      >
        <h4 
          className="text-[17px] font-bold mb-1.5"
          style={{ 
            fontFamily: "var(--font-playfair-display)",
            color: '#1a1410'
          }}
        >
          Preference Cookies
        </h4>
        <p 
          className="text-[15px] m-0"
          style={{ 
            fontFamily: "var(--font-dm-sans)",
            color: '#8a7a6e'
          }}
        >
          Remember your settings and preferences to provide a more personalized experience.
        </p>
      </div>
      
      <div 
        className="border border-[#e0d5c8] rounded-lg p-4 pr-4.5"
        style={{ background: '#f3ede3' }}
      >
        <h4 
          className="text-[17px] font-bold mb-1.5"
          style={{ 
            fontFamily: "var(--font-playfair-display)",
            color: '#1a1410'
          }}
        >
          Analytics Cookies
        </h4>
        <p 
          className="text-[15px] m-0"
          style={{ 
            fontFamily: "var(--font-dm-sans)",
            color: '#8a7a6e'
          }}
        >
          Help us understand how visitors use the site, allowing us to evaluate and improve performance.
        </p>
      </div>
      
      <div 
        className="border border-[#e0d5c8] rounded-lg p-4 pr-4.5"
        style={{ background: '#f3ede3' }}
      >
        <h4 
          className="text-[17px] font-bold mb-1.5"
          style={{ 
            fontFamily: "var(--font-playfair-display)",
            color: '#1a1410'
          }}
        >
          Marketing Cookies
        </h4>
        <p 
          className="text-[15px] m-0"
          style={{ 
            fontFamily: "var(--font-dm-sans)",
            color: '#8a7a6e'
          }}
        >
          Support personalized advertising and may track activity across different websites and services.
        </p>
      </div>
    </div>
  );
}
