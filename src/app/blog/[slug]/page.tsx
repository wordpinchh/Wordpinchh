import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BLOGS } from "@/app/blog/data";
import BlogPostClient from "./BlogPostClient";

// Generate metadata dynamically for each slug
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOGS.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Wordpinchh",
      description: "This article could not be found.",
    };
  }

  return {
    title: post.seoTitle,
    description: post.metaDesc,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seoTitle,
      description: post.metaDesc,
      url: `https://wordpinchh.org/blog/${post.slug}`,
      siteName: "Wordpinchh",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDesc,
    },
    alternates: {
      canonical: `https://wordpinchh.org/blog/${post.slug}`,
    },
  };
}

// Generate all slug paths at build time
export async function generateStaticParams() {
  return BLOGS.map((post) => ({
    slug: post.slug,
  }));
}

// Server component — passes post data to client component
export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = BLOGS.find((b) => b.slug === slug);
  if (!post) return notFound();
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDesc,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Wordpinchh",
              url: "https://wordpinchh.org",
            },
            datePublished: post.date,
            url: `https://wordpinchh.org/blog/${post.slug}`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://wordpinchh.org/blog/${post.slug}`,
            },
          }),
        }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
