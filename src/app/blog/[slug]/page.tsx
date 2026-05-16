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

  const postUrl = `https://www.wordpinchh.org/blog/${post.slug}`;
  const ogImage = "https://www.wordpinchh.org/og-image.png";

  return {
    title: post.seoTitle,
    description: post.metaDesc,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seoTitle,
      description: post.metaDesc,
      url: postUrl,
      siteName: "Wordpinchh",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.seoTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDesc,
      images: [ogImage],
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

// Generate all slug paths at build time
export async function generateStaticParams() {
  return BLOGS.map((post) => ({
    slug: post.slug,
  }));
}

// Convert human-readable date to ISO 8601 for schema
function toISODate(dateStr: string): string {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? dateStr : d.toISOString().split("T")[0];
}

// Server component — passes post data to client component
export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = BLOGS.find((b) => b.slug === slug);
  if (!post) return notFound();

  const postUrl = `https://www.wordpinchh.org/blog/${post.slug}`;
  
  return (
    <>
      {/* BlogPosting Schema — all posts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDesc,
            image: "https://www.wordpinchh.org/og-image.png",
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Wordpinchh",
              url: "https://www.wordpinchh.org",
              logo: {
                "@type": "ImageObject",
                url: "https://www.wordpinchh.org/wordpinchhlogo.webp",
              },
            },
            datePublished: toISODate(post.date),
            dateModified: toISODate(post.date),
            url: postUrl,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": postUrl,
            },
          }),
        }}
      />

      {/* FAQ Schema — only for posts that have faq blocks */}
      {post.content.some((b: any) => b.type === "faq") && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.content
                .filter((b: any) => b.type === "faq")
                .map((b: any) => ({
                  "@type": "Question",
                  name: b.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: b.answer,
                  },
                })),
            }),
          }}
        />
      )}
      <BlogPostClient post={post} />
    </>
  );
}
