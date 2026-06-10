import { Metadata } from "next";
import ServicesNew from "@/components/sections/services-new";

export const metadata: Metadata = {
  title: "SEO Blog Writing Service India — Professional Content Writing Services",
  description: "Expert SEO blog writing service India and professional LinkedIn ghostwriting service. WordPinchh delivers high-quality content writing services including website copywriting, landing page copy and AI content strategy for businesses.",
  keywords: ["SEO blog writing service India", "LinkedIn ghostwriting service", "content writing services", "website copywriting", "landing page copy", "AI content strategy", "professional content writers"],
};

export default function Page() {
  return (
    <>
      {/* Schema Markup for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Content Writing Services",
            "description": "Professional content writing services including SEO blog writing, LinkedIn ghostwriting, website copywriting, and AI content strategy.",
            "url": "https://www.wordpinchh.org/services",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Service",
                  "@id": "https://www.wordpinchh.org/services#seo-blog-writing",
                  "name": "SEO Blog Writing",
                  "description": "High-quality SEO-optimized blog posts designed to rank on Google and drive organic traffic.",
                  "provider": {
                    "@type": "Organization",
                    "name": "WordPinchh"
                  }
                },
                {
                  "@type": "Service",
                  "@id": "https://www.wordpinchh.org/services#linkedin-ghostwriting",
                  "name": "LinkedIn Ghostwriting",
                  "description": "Professional LinkedIn content ghostwriting to establish thought leadership and build your personal brand.",
                  "provider": {
                    "@type": "Organization",
                    "name": "WordPinchh"
                  }
                },
                {
                  "@type": "Service",
                  "@id": "https://www.wordpinchh.org/services#website-copywriting",
                  "name": "Website Copywriting",
                  "description": "Compelling website copy and landing page copywriting that converts visitors into customers.",
                  "provider": {
                    "@type": "Organization",
                    "name": "WordPinchh"
                  }
                },
                {
                  "@type": "Service",
                  "@id": "https://www.wordpinchh.org/services#ai-content-strategy",
                  "name": "AI Content Strategy",
                  "description": "Strategic content planning using AI tools to optimize your content marketing efforts.",
                  "provider": {
                    "@type": "Organization",
                    "name": "WordPinchh"
                  }
                }
              ]
            }
          })
        }}
      />
      <ServicesNew />
    </>
  );
}
