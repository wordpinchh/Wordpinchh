import type { Metadata } from "next";
import { Inter, Fahkwang, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import CookieBanner from "@/components/CookieBanner";

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
  description: "WordPinchh is a leading content writing agency in Mumbai providing expert content marketing services across India. Specializing in SEO blog writing, LinkedIn ghostwriting, website copywriting and AI content strategy for SaaS startups and consulting firms.",
  keywords: ["content writing agency Mumbai", "content marketing agency India", "SEO blog writing", "LinkedIn ghostwriting", "website copywriting", "AI content strategy", "SaaS content writing", "consulting firm content"],
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
              "@type": "MarketingAgency",
              "name": "WordPinchh",
              "url": "https://www.wordpinchh.org",
              "logo": "https://www.wordpinchh.org/wordpinchhlogo.webp",
              "description": "WordPinchh is a content writing agency in Mumbai specialising in SEO blog writing, LinkedIn ghostwriting, website copywriting and AI content strategy for SaaS startups and consulting firms.",
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
              "sameAs": [
                "https://www.linkedin.com/company/wordpinchh"
              ],
              "serviceType": [
                "SEO Blog Writing",
                "LinkedIn Ghostwriting",
                "Website Copywriting",
                "AI Content Strategy",
                "Landing Page Copy"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "priceRange": "$$"
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
      </body>
    </html>
  );
}
