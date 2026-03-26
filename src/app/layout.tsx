import type { Metadata } from "next";
import { Inter, Fahkwang, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

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
    default: "WordPinch - Modern Marketing Agency",
    template: "%s | WordPinch",
  },
  description: "High-end marketing agency delivering exceptional digital experiences that drive results and transform your online presence.",
  keywords: ["marketing agency", "digital marketing", "brand development", "SEO", "content marketing"],
  authors: [{ name: "WordPinch" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wordpinch.com",
    siteName: "WordPinch",
    title: "WordPinch - Modern Marketing Agency",
    description: "High-end marketing agency delivering exceptional digital experiences",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPinch - Modern Marketing Agency",
    description: "High-end marketing agency delivering exceptional digital experiences",
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
      </head>
      <body 
        className={`${inter.variable} ${fahkwang.variable} ${playfairDisplay.variable} ${dmSans.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        <CustomCursor />
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
