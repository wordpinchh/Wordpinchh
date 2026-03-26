"use client";

import Link from 'next/link';

export function ContactBlock() {
  return (
    <div 
      className="rounded-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8"
      style={{ background: '#1a1410' }}
    >
      <div>
        <h2 
          className="text-[26px] font-normal text-[#faf8f4] m-0"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          Questions? We're here.
        </h2>
        <p 
          className="text-[15px] text-[#8a7a6e] font-normal mt-1.5"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Email us at <a 
            href="mailto:privacy@wordpinchh.com" 
            className="no-underline"
            style={{ color: '#c8623a' }}
          >
            privacy@wordpinchh.com
          </a>
        </p>
      </div>
      
      <Link 
        href="/contact"
        className="no-underline px-7 py-3 rounded-md font-medium text-[16px] whitespace-nowrap transition-opacity duration-200 hover:opacity-85"
        style={{ 
          background: '#c8623a',
          color: '#faf8f4',
          fontFamily: "var(--font-dm-sans)"
        }}
      >
        Send a Message
      </Link>
    </div>
  );
}
