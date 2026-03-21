import type { Metadata } from "next";
import { Inter, Fahkwang } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import PageTransition from "@/components/PageTransition";
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
      <body 
        className={`${inter.variable} ${fahkwang.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        <CustomCursor />
        {/* ✅ GLOBAL NAVBAR */}
        <Navbar />

        {/* ✅ PAGE CONTENT */}
        <main className="relative z-0">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </body>
    </html>
  );
}
