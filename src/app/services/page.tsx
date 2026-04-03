import { Metadata } from "next";
import ServicesNew from "@/components/sections/services-new";

export const metadata: Metadata = {
  title: "Services — SEO Blog Writing, LinkedIn Ghostwriting & More",
  description: "Explore WordPinchh services — SEO blog writing, LinkedIn ghostwriting, website copywriting, landing page copy and AI content strategy for SaaS and consulting firms.",
};

export default function Page() {
  return <ServicesNew />;
}
