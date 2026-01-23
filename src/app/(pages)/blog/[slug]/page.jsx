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

  const shareUrl = `https://www.zentrixinfotech.com/blog/${slug}`;

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.subtitle || blog.content,
        image: blog.image,
        datePublished: blog.date,
        dateModified: blog.date,
        author: {
          "@type": "Organization",
          name: blog.author || "Zentrix Infotech",
        },
        publisher: {
          "@type": "Organization",
          name: "Zentrix Infotech",
          logo: {
            "@type": "ImageObject",
            url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": shareUrl,
        },
        articleSection: blog.category,
        keywords: blog.tags?.join(", ") || "",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.zentrixinfotech.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.zentrixinfotech.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: shareUrl,
          },
        ],
      },
      ...(blog.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: blog.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />

      <BlogClient blog={blog} />
    </>
  );
}
