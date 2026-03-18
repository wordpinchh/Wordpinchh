import type { Metadata } from "next";
import { Inter, Fahkwang } from "next/font/google";
import "./globals.css";
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
        className={`${inter.variable} ${fahkwang.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <CustomCursor />
        {/* <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll> */}
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
