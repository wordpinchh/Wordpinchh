import { Metadata } from "next";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Insights & Blog | Wordpinchh — Content for Search, AI & Humans",
  description:
    "Frameworks, case studies, and uncomfortable truths about content that actually ranks — in Google, AI engines, and in buyers' minds.",
  openGraph: {
    title: "Insights & Blog | Wordpinchh",
    description:
      "Frameworks, case studies, and uncomfortable truths about content that actually ranks.",
    url: "https://wordpinchh.com/blog",
    siteName: "Wordpinchh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Blog | Wordpinchh",
    description:
      "Frameworks, case studies, and uncomfortable truths about content that actually ranks.",
  },
  alternates: {
    canonical: "https://wordpinchh.com/blog",
  },
};

export default function BlogPage() {
  return <BlogListClient />;
}