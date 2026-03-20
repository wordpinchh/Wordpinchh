"use client";

import { useState } from "react";

export function WhatWeDo() {
  const services = [
    {
      name: "Deep Dive",
      description: "We spend the first week understanding your business, audience, competitors, and what's already working. No templates. No assumptions."
    },
    {
      name: "Content Blueprint",
      description: "We map out a 90-day content plan — specific topics, formats, angles, and keywords tied to your actual growth goals. Both for traditional search and AI citation."
    },
    {
      name: "Write, Review, Publish",
      description: "We write. You review. We refine. Most clients request one round of edits, if that. Then we hit publish."
    },
    {
      name: "Measure & Iterate",
      description: "We track rankings, AI citation appearances, engagement, and lead attribution. What's working gets doubled down. What isn't gets cut."
    }
  ];

  return (
    <section className="relative z-40 min-h-screen flex items-center" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-center">
          
          {/* LEFT - Static */}
          <div className="relative z-10">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-widest uppercase text-amber-500/70 bg-amber-500/10 px-3 py-1 rounded-full mb-8 inline-block">
                What We Do
              </span>
            </div>
            <h2 className="font-heading text-6xl lg:text-8xl font-black leading-none tracking-tight text-white mb-8">
              We Build<br/>Brands Through<br/>Content
            </h2>
            <a href="#" className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-500 border border-amber-500/30 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-500/50">
              See Full Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* RIGHT - Interactive */}
          <div className="relative z-10 lg:pt-1">
            <ul className="border-t border-amber-500/20">
              {services.map((service, index) => (
                <li key={service.name} className="border-b border-amber-500/20 overflow-hidden opacity-0 animate-fade-up service-item" style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}>
                  <div className="group flex items-center gap-5 py-6 pr-2 lg:pr-0 cursor-pointer transition-all duration-300 hover:pl-2">
                    {/* Premium Arrow */}
                    <div className="shrink-0 w-8 h-3 relative overflow-hidden">
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-[130%] group-hover:translate-x-1"></div>
                      <div className="absolute right-0 top-1/2 w-2 h-2 border-t-2 border-r-2 border-yellow-400 transform -translate-y-1/2 rotate-45 transition-transform duration-300 group-hover:translate-x-1" style={{ borderColor: 'rgb(245, 130, 10)' }}></div>
                    </div>
                    <span className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-400 group-hover:text-white transition-colors duration-300">
                      {service.name}
                    </span>
                  </div>
                  <div className="service-desc max-h-0 overflow-hidden opacity-0 pb-0 pl-12 pr-4 transition-all duration-500 ease-out">
                    <p className="text-sm leading-relaxed text-gray-400 max-w-md">
                      {service.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out;
        }
        .service-item:hover .service-desc {
          max-height: 160px;
          opacity: 1;
          padding-bottom: 24px;
          padding-top: 8px;
        }
      `}</style>
    </section>
  );
}
