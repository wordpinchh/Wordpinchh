import { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Get Your Free Content Audit",
  description: "Get a free personalised content audit from WordPinchh. No pitch, no pressure — just an honest report on your content gaps within 48 hours.",
};

export default function Page() {
  return <ContactPage />;
}