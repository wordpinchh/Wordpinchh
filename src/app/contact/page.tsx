import { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Free Content Audit — Contact WordPinchh Content Writing Agency",
  description: "Get a free content audit from WordPinchh content writing agency. No pitch, no pressure — just an honest report on your content gaps within 48 hours. Contact us for expert content strategy.",
  keywords: ["free content audit", "content writing agency contact", "content analysis", "SEO audit", "content strategy", "WordPinchh contact", "Mumbai content writers"],
};

export default function Page() {
  return (
    <>
      {/* Schema Markup for Contact */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact WordPinchh",
            "description": "Contact WordPinchh content writing agency for a free content audit and expert content strategy consultation.",
            "url": "https://www.wordpinchh.org/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "WordPinchh",
              "url": "https://www.wordpinchh.org",
              "logo": "https://www.wordpinchh.org/wordpinchhlogo.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "Customer Service",
                "email": "wordpinchh001@gmail.com",
                "areaServed": "IN"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Powai Plaza, 264, A S Marg, Hiranandani Gardens",
                "addressLocality": "Mumbai",
                "addressRegion": "MH",
                "postalCode": "400076",
                "addressCountry": "IN"
              }
            }
          })
        }}
      />
      <ContactPage />
    </>
  );
}