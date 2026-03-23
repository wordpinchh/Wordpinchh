"use client";

import { useState } from "react";
import FeaturedCard from "./FeaturedCard";
import StandardCard from "./StandardCard";
import WideCard from "./WideCard";
import PlaceholderCard from "./PlaceholderCard";
// import useReveal from "@/hooks/useReveal";

interface CardData {
  id: number;
  type: "standard" | "wide" | "placeholder";
  tag: string;
  data: any;
}

export default function PortfolioGrid({ filter }: { filter: string }) {
  // useReveal();

  // REAL DATA STRUCTURE from portf.html
  const cards: CardData[] = [
    { 
      id: 1, 
      type: "standard", 
      tag: "linkedin",
      data: {
        num: "02 / LinkedIn Post",
        tag: "LinkedIn",
        title: "\"The content advice I ignored that cost me six months of growth\"",
        desc: "Personal story with a hard-earned lesson. Opens with a counterintuitive claim. Ends with a specific, actionable takeaway. Written in first person, conversational, no corporate speak.",
        highlights: [
          "High-engagement format — 3–8x more comments than informational posts",
          "Opens with a pattern interrupt that stops the scroll",
          "Structured for maximum dwell time and saves"
        ],
        cta: "Request sample →",
        format: "First-person · Story"
      }
    },
    { 
      id: 2, 
      type: "wide", 
      tag: "website",
      data: {
        num: "03 / Website Copy",
        tag: "Website Copy",
        title: "Homepage rewrite for a B2B consulting firm",
        desc: "Their old homepage led with company history and service descriptions. Visitors bounced in under 10 seconds. We rewrote it to open with client's problem, restructured services around outcomes, and added AEO-structured FAQ for AI citation potential.",
        highlights: [
          "Hero section rewritten to open with the client's problem — not the company's history",
          "Services section restructured around outcomes, not activities",
          "Social proof added before CTA, not buried at the bottom",
          "AEO-structured FAQ section integrated to improve AI citation potential"
        ],
        cta: "See before/after →",
        format: "Homepage · B2B Consulting",
        before: "\"We are a full-service consulting firm with 15 years of experience delivering end-to-end solutions...\"",
        after: "\"If your team keeps solving the same problems, the issue isn't execution — it's how you're structured.\"",
        result: "Bounce rate dropped. First-call bookings increased. Full before/after available on request."
      }
    },
    { 
      id: 3, 
      type: "placeholder", 
      tag: "geo",
      data: {
        label: "GEO Content",
        sub: "Sample coming soon —<br />available on request now"
      }
    },
    { 
      id: 4, 
      type: "placeholder", 
      tag: "seo",
      data: {
        label: "AEO / FAQ Copy",
        sub: "Sample coming soon —<br />available on request now"
      }
    },
    { 
      id: 5, 
      type: "placeholder", 
      tag: "website",
      data: {
        label: "Landing Page Copy",
        sub: "Sample coming soon —<br />available on request now"
      }
    }
  ];

  const filteredCards = cards.filter((card) => {
    if (filter === "all") return true;
    return card.tag === filter || card.type === "placeholder";
  });

  const visibleCount = filteredCards.filter(c => c.type !== "placeholder").length;

  return (
    <section className="px-[80px] pb-[80px]">

      {/* FEATURED */}
      <Divider title="Featured" count="01 sample" />
      <div className="">
        <FeaturedCard />
      </div>

      {/* GRID */}
      <Divider
        title="All Samples"
        count={filter === "all" ? "03 samples" : `${visibleCount} sample${visibleCount !== 1 ? "s" : ""}`}
      />

      <div className="grid grid-cols-3 gap-6 relative z-10">
        {filteredCards.map((card) => {
          if (card.type === "standard") return <StandardCard key={card.id} data={card.data} />;
          if (card.type === "wide") return <WideCard key={card.id} data={card.data} />;
          return <PlaceholderCard key={card.id} data={card.data} />;
        })}
      </div>
    </section>
  );
}

function Divider({ title, count }: { title: string; count: string }) {
  return (
    <div className="flex items-center gap-5 py-14">
      <span className="text-[10px] uppercase tracking-widest text-[#8A8A82]">
        {title}
      </span>
      <div className="flex-1 h-px bg-black/10" />
      <span className="text-[10px] text-[#C4C4BA]">{count}</span>
    </div>
  );
}
