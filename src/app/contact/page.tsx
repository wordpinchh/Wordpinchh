import { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Free Content Audit — Contact WordPinchh Content Writing Agency",
  description: "Get a free content audit from WordPinchh content writing agency. No pitch, no pressure — just an honest report on your content gaps within 48 hours. Contact us for expert content strategy.",
  keywords: ["free content audit", "content writing agency contact", "content analysis", "SEO audit", "content strategy", "WordPinchh contact", "Mumbai content writers"],
};

export default function Page() {
  return <ContactPage />;
}