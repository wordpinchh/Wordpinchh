"use client";

import { useState } from "react";
import Header from "@/components/portfolio/Header";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import RequestCTA from "@/components/portfolio/RequestCTA";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  return (
    <main className="bg-[#FAFAF7] text-[#0D0D0B]">
      <div className="h-[3px] w-full bg-linear-to-r from-black via-black to-[#CC4400]" />

      <Header filter={filter} setFilter={setFilter} />
      <PortfolioGrid filter={filter} />
      <RequestCTA />
    </main>
  );
}
