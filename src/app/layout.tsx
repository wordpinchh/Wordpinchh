import type { Metadata } from "next";
import { Inter, Fahkwang, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const fahkwang = Fahkwang({
  variable: "--font-fahkwang",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "WordPinchh — Content Writing Agency Mumbai",
    template: "%s | WordPinchh",
  },
  alternates: {
    canonical: "https://www.wordpinchh.org",
  },
  description: "WordPinchh is a content writing agency in Mumbai specialising in SEO blog writing, LinkedIn ghostwriting, website copywriting, GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) for SaaS startups and consulting firms across India.",
  keywords: ["content writing agency Mumbai", "content marketing agency India", "SEO blog writing", "LinkedIn ghostwriting", "website copywriting", "AI content strategy", "SaaS content writing", "consulting firm content", "GEO generative engine optimization India", "AEO answer engine optimization India", "best content writing agency Mumbai"],
  authors: [{ name: "WordPinchh" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.wordpinchh.org",
    siteName: "WordPinchh",
    title: "WordPinchh — Content Writing Agency in Mumbai",
    description: "SEO blog writing, LinkedIn ghostwriting, website copywriting and AI content strategy for SaaS startups and consulting firms.",
    images: [
      {
        url: "https://www.wordpinchh.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPinchh — Content Writing Agency in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPinchh — Content Writing Agency in Mumbai",
    description: "SEO blog writing, LinkedIn ghostwriting and AI content strategy for SaaS startups.",
    images: ["https://www.wordpinchh.org/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@1,400&family=Barlow+Condensed:wght@700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;500;600;700;800;900&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=Azeret+Mono:wght@300;400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
        
        {/* Google Analytics */}
        {(
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-M090H000LE"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-M090H000LE');
                `,
              }}
            />
          </>
        )}

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "WordPinchh",
              "url": "https://www.wordpinchh.org",
              "logo": "https://www.wordpinchh.org/wordpinchhlogo.webp",
              "image": "https://www.wordpinchh.org/og-image.png",
              "description": "WordPinchh is a content writing agency in Mumbai specialising in SEO blog writing, LinkedIn ghostwriting, website copywriting, GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) for SaaS startups and consulting firms across India.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Powai Plaza, 264, A S Marg, Hiranandani Gardens",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400072",
                "addressCountry": "IN"
              },
              "telephone": "+917738824485",
              "email": "akanksha@wordpinchh.org",
              "openingHours": "Mo-Fr 09:00-19:00",
              "sameAs": [
                "https://www.linkedin.com/company/wordpinchh",
                "https://www.instagram.com/wordpinchh",
                "https://twitter.com/wordpinchh"
              ],
              "serviceType": [
                "SEO Blog Writing",
                "LinkedIn Ghostwriting",
                "Website Copywriting",
                "AI Content Strategy",
                "Landing Page Copy",
                "GEO Generative Engine Optimization",
                "AEO Answer Engine Optimization",
                "Content Marketing"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "priceRange": "$$"
            })
          }}
        />

        {/* FAQ Schema for GEO/AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is GEO (Generative Engine Optimization)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GEO or Generative Engine Optimization is the practice of optimizing your content so that AI tools like ChatGPT, Perplexity, and Bing Copilot mention and recommend your brand in their answers. WordPinchh is one of the first content agencies in India offering GEO as a service."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is AEO (Answer Engine Optimization)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AEO or Answer Engine Optimization is the process of structuring your content so it appears in direct answer boxes, voice search results, and AI-generated summaries. WordPinchh helps SaaS startups and consulting firms in India get found through AEO."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which content writing agency in Mumbai offers GEO and AEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WordPinchh is a content writing agency based in Mumbai, India that offers GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) along with SEO blog writing, LinkedIn ghostwriting, and website copywriting for SaaS startups and consulting firms."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is WordPinchh different from other content agencies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WordPinchh combines traditional SEO content with GEO and AEO strategies, ensuring clients get found not just on Google but also on AI answer engines like ChatGPT, Perplexity, and Bing Copilot. We specialize in SaaS and consulting niches."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body 
        className={`${inter.variable} ${fahkwang.variable} ${playfairDisplay.variable} ${dmSans.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <CookieBanner />
        {/* ✅ GLOBAL NAVBAR */}
        <Navbar />

        {/* ✅ PAGE CONTENT */}
        <main className="relative z-0">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>

        {/* ✅ WHATSAPP FLOAT */}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
