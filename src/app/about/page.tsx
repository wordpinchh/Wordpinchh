"use client";

import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import PageWrapper from "@/components/PageWrapper";
import AboutIntro from "@/components/AboutIntro";
import AboutStory from "@/components/AboutStory";
import EditorialStatement from "@/components/EditorialStatement";
import AboutValues from "@/components/AboutValues";
import AboutFounder from "@/components/AboutFounder";
import TrustedByBrands from "@/components/TrustedByBrands";
import ExploreServices from "@/components/ExploreServices";
import LetsWorkTogether from "@/components/LetsWorkTogether";
import BottomCTA from "@/components/BottomCTA";

export default function AboutPage() {
  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-24">
        <AboutIntro />
        <AboutStory />
        <EditorialStatement />
        <AboutValues />
        <AboutFounder />
        <TrustedByBrands />
        <ExploreServices />
        <LetsWorkTogether />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
