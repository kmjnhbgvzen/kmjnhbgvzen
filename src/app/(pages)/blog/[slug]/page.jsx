import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import BlogClient from "./BlogClient";

/* ---------------- SEO METADATA ---------------- */
export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params.slug;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};

  return {
    title: blog.metaTags?.title || blog.title,
    description: blog.metaTags?.description || blog.content,
    keywords: blog.metaTags?.keywords,
    alternates: blog.metaTags?.alternates,
    openGraph: blog.metaTags?.openGraph,
    twitter: blog.metaTags?.twitter,
    icons: blog.metaTags?.icons,
  };
}

/* ---------------- PAGE ---------------- */
export default async function BlogPage(props) {
  const params = await props.params;
  const slug = params.slug;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  // Generate FAQ structured data at SERVER level (only if FAQs exist)
  const faqStructuredData = blog.faqs && blog.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blog.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* FAQ Schema - Added at SERVER level to prevent duplication */}
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      )}
      
      {/* Client component handles rendering and other schemas */}
      <BlogClient blog={blog} />
    </>
  );
}