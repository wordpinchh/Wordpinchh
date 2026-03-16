"use client";

import Link from "next/link";

export default function ExploreServices() {
  return (
    <section className="py-32 bg-black text-white">

      <div className="max-w-[1320px] mx-auto px-6">

        <h2 className="text-[72px] font-light tracking-tight mb-6" style={{ fontFamily: "'Fahkwang', sans-serif" }}>
          EXPLORE OUR <span className="font-semibold">SERVICES</span>
        </h2>

        <p className="text-neutral-400 mb-16 max-w-[600px]">
          Discover how Wordpinchh helps brands grow through strategy, creativity, and purposeful digital experiences.
        </p>

        <div className="space-y-8 text-2xl">

          <div className="flex justify-between border-b border-neutral-700 pb-4 hover:opacity-70 transition-all duration-300">
            <span className="text-neutral-200">Content Strategy</span>
            <span className="text-neutral-500">→</span>
          </div>

          <div className="flex justify-between border-b border-neutral-700 pb-4 hover:opacity-70 transition-all duration-300">
            <span className="text-neutral-200">Brand Identity</span>
            <span className="text-neutral-500">→</span>
          </div>

          <div className="flex justify-between border-b border-neutral-700 pb-4 hover:opacity-70 transition-all duration-300">
            <span className="text-neutral-200">Website Design</span>
            <span className="text-neutral-500">→</span>
          </div>

          <div className="flex justify-between border-b border-neutral-700 pb-4 hover:opacity-70 transition-all duration-300">
            <span className="text-neutral-200">SEO & Content Marketing</span>
            <span className="text-neutral-500">→</span>
          </div>

          <div className="flex justify-between border-b border-neutral-700 pb-4 hover:opacity-70 transition-all duration-300">
            <span className="text-neutral-200">Social Media Content</span>
            <span className="text-neutral-500">→</span>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/services"
            className="inline-flex items-center text-neutral-200 hover:text-white transition-colors duration-300 group"
          >
            View All Services
            <svg 
              className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M1 1 L5 5 M1 9 L5 9" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>

    </section>
  );
}
