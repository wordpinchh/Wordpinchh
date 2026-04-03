import { Metadata } from "next";
import IndustriesPage from "@/components/industries/IndustriesPage";

export const metadata: Metadata = {
  title: "Industries — Content Writing for SaaS, Startups & Consulting",
  description: "WordPinchh creates content for SaaS, startups, consulting firms and professional services. Industry-specific content that ranks and converts.",
};

export default function Page() {
  return <IndustriesPage />;
}
