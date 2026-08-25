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

  return <BlogClient blog={blog} />;
}
