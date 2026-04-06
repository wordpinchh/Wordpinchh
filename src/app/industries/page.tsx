import { Metadata } from "next";
import IndustriesPage from "@/components/industries/IndustriesPage";

export const metadata: Metadata = {
  title: "Content Writing for SaaS Startups — B2B Content Writing Agency India",
  description: "Expert content writing for SaaS startups and B2B content writing agency India. WordPinchh creates industry-specific content for consulting firms, professional services and technology companies that ranks and converts.",
  keywords: ["content writing for SaaS startups", "B2B content writing agency India", "SaaS content marketing", "consulting firm content", "tech content writing", "startup content agency", "professional services content"],
};

export default function Page() {
  return <IndustriesPage />;
}
