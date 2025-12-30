"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Tag,
  Share2,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Facebook,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { blogs } from "@/data/blogs";

  


export default function BlogClient({ blog }) {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const shareUrl = `https://www.zentrixinfotech.com${pathname}`;
  const shareTitle = blog.title;

  const handleInstagramShare = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl);
    alert("Link copied! Paste it on Instagram.");
  } catch {
    alert("Unable to copy link");
  }
};



  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toc = useMemo(
    () => blog.fullContent?.sections?.map((s) => s.heading) || [],
    [blog]
  );

  const relatedBlogs = useMemo(() => {
    return blogs
      .filter(
        (b) =>
          b.slug !== blog.slug &&
          b.tags?.some((t) => blog.tags?.includes(t))
      )
      .slice(0, 3);
  }, [blog]);

  // Render content based on type
  const renderContent = (item, index) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p key={index} className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg mb-3 md:mb-4">
            {item.text}
          </p>
        );

      case "heading":
        return (
          <h3 key={index} className="text-lg md:text-xl lg:text-2xl font-serif text-gray-900 mt-6 md:mt-8 mb-3 md:mb-4">
            {item.text}
          </h3>
        );

      case "subheading":
        return (
          <h4 key={index} className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 mt-4 md:mt-6 mb-2 md:mb-3">
            {item.text}
          </h4>
        );

      case "bullets":
        return (
          <ul key={index} className="space-y-2 md:space-y-3 mb-4 md:mb-6 ml-4 md:ml-6">
            {item.items.map((bullet, i) => (
              <li key={i} className="text-gray-700 text-sm md:text-base lg:text-lg flex items-start gap-2 md:gap-3">
                <span className="text-blue-600 mt-1 md:mt-1.5 flex-shrink-0">•</span>
                <span className="flex-1">{bullet}</span>
              </li>
            ))}
          </ul>
        );

      case "numbered":
        return (
          <ol key={index} className="space-y-2 md:space-y-3 mb-4 md:mb-6 ml-4 md:ml-6">
            {item.items.map((numberedItem, i) => (
              <li key={i} className="text-gray-700 text-sm md:text-base lg:text-lg flex items-start gap-2 md:gap-3">
                <span className="text-blue-600 font-semibold mt-0.5 min-w-[20px] md:min-w-[24px] flex-shrink-0">
                  {i + 1}.
                </span>
                <span className="flex-1">{numberedItem}</span>
              </li>
            ))}
          </ol>
        );

      case "image":
        return (
          <figure key={index} className="my-4 md:my-6 lg:my-8">
            <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden shadow-lg">
              <Image
                src={item.url}
                alt={item.alt || "Blog image"}
                fill
                className="object-cover"
              />
            </div>
            {item.caption && (
              <figcaption className="text-center text-xs md:text-sm text-gray-500 mt-2 md:mt-3 italic">
                {item.caption}
              </figcaption>
            )}
          </figure>
        );

      case "quote":
        return (
          <blockquote
            key={index}
            className="border-l-4 border-blue-600 bg-blue-50 pl-4 md:pl-6 pr-3 md:pr-4 py-3 md:py-4 my-4 md:my-6 italic text-gray-700 text-sm md:text-base lg:text-lg"
          >
            {item.text}
            {item.author && (
              <footer className="text-xs md:text-sm text-gray-600 mt-2 not-italic">
                — {item.author}
              </footer>
            )}
          </blockquote>
        );

      case "code":
        return (
          <pre
            key={index}
            className="bg-gray-900 text-gray-100 p-3 md:p-4 rounded-lg overflow-x-auto my-4 md:my-6 text-xs md:text-sm"
          >
            <code className="font-mono">{item.code}</code>
          </pre>
        );

      case "table":
  return (
    <div key={index} className="my-3 md:my-5">
      <table className="w-full table-fixed border border-gray-300 text-xs md:text-sm lg:text-base">
        <thead className="bg-gray-100">
          <tr>
            {item.headers.map((header, i) => (
              <th
                key={i}
                className="border border-gray-300 px-2 md:px-3 py-1.5 md:py-3 text-left text-xm font-semibold text-gray-900 break-words"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {item.rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border border-gray-300 px-2 md:px-3 py-1.5 md:py-2 text-gray-700 break-words"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {item.caption && (
        <p className="mt-2 text-center text-[11px] md:text-xs text-gray-500 italic">
          {item.caption}
        </p>
      )}
    </div>
  );


      case "callout":
        return (
          <div
            key={index}
            className={`p-3 md:p-4 lg:p-6 rounded-lg md:rounded-xl my-4 md:my-6 ${
              item.style === "warning"
                ? "bg-yellow-50 border-l-4 border-yellow-500"
                : item.style === "success"
                ? "bg-green-50 border-l-4 border-green-500"
                : item.style === "danger"
                ? "bg-red-50 border-l-4 border-red-500"
                : "bg-blue-50 border-l-4 border-blue-500"
            }`}
          >
            <p className="text-gray-800 font-medium text-sm md:text-base">{item.text}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      <article className="bg-white min-h-screen">
        {/* HERO SECTION - Image with Title Overlay */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] min-h-[350px] md:min-h-[450px] lg:min-h-[500px] w-full overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center items-center text-center z-10 mb-10 mt-6">
            {/* Category Badge */}
            <span className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white mb-3 md:mb-4 lg:mb-6 text-xs md:text-sm">
              <Tag className="w-3 h-3 md:w-4 md:h-4 " /> {blog.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-serif text-white mb-2 md:mb-3 lg:mb-4 leading-tight max-w-4xl">
              {blog.title}
            </h1>

            {/* Subtitle */}
            {blog.subtitle && (
              <p className="text-1xl md:text-base lg:text-lg xl:text-xl text-gray-200 font-light max-w-2xl px-2">
                {blog.subtitle}
              </p>
            )}
          </div>
        </section>

        {/* Metadata Bar - Below Image */}
        <div className="border-b bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 md:py-4 lg:py-6 flex flex-wrap justify-center items-center gap-2 md:gap-4 lg:gap-6 text-xs md:text-sm text-gray-600">
            {blog.author && (
              <>
                <span className="flex items-center gap-1.5 md:gap-2">
                  <span className="font-medium text-gray-700 text-xs md:text-sm">By {blog.author}</span>
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full hidden md:block" />
              </>
            )}
            <span className="flex items-center gap-1.5 md:gap-2">
              <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600" />
              <span className="font-medium text-xs md:text-sm">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </span>
            <span className="w-1 h-1 bg-gray-400 rounded-full hidden md:block" />
            <span className="flex items-center gap-1.5 md:gap-2">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600" />
              <span className="font-medium text-xs md:text-sm">{blog.readTime}</span>
            </span>
          </div>
        </div>

        {/* CONTENT + SIDEBAR */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px] gap-6 md:gap-8 lg:gap-12">
            {/* MAIN CONTENT */}
            <div className="max-w-3xl w-full min-w-0">
              {/* Introduction */}
              <div className="mb-6 md:mb-8 lg:mb-12">
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                  {blog.fullContent?.introduction}
                </p>
              </div>

              {/* Sections */}
              {blog.fullContent?.sections?.map((section, i) => (
                <div
                  key={i}
                  id={section.heading.replace(/\s+/g, "-")}
                  className="mb-8 md:mb-12 lg:mb-16 scroll-mt-20"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif mb-3 md:mb-4 lg:mb-6 text-gray-900 border-l-4 border-blue-600 pl-3 md:pl-4">
                    {section.heading}
                  </h2>

                  {/* Legacy support for old content structure */}
                  {section.contents && (
                    <div className="space-y-3 md:space-y-4">
                      {section.contents.map((p, j) => (
                        <p key={j} className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Legacy support for old bullets */}
                  {section.bullets && (
                    <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 ml-4 md:ml-6">
                      {section.bullets.map((b, j) => (
                        <li key={j} className="text-gray-700 text-sm md:text-base lg:text-lg flex items-start gap-2 md:gap-3">
                          <span className="text-blue-600 mt-1 md:mt-1.5 flex-shrink-0">•</span>
                          <span className="flex-1">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* NEW: Dynamic content rendering */}
                  {section.content &&
                    section.content.map((item, idx) => renderContent(item, idx))}
                </div>
              ))}

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-6 md:mt-8 lg:mt-12 pt-6 md:pt-8 border-t">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-24 h-fit space-y-4 md:space-y-6">
              {/* Table of Contents */}
              {toc.length > 0 && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-sm">
                  <h4 className="font-serif text-sm md:text-base lg:text-lg mb-3 md:mb-4 text-gray-900">
                    Table of Contents
                  </h4>
                  <ul className="space-y-2 md:space-y-3">
                    {toc.map((h, i) => (
                      <li key={i}>
                        <a
                          href={`#${h.replace(/\s+/g, "-")}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors text-xs md:text-sm leading-snug block hover:translate-x-1 duration-200"
                        >
                          {h}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Share */}
<div className="bg-gray-50 border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-sm">
  <h4 className="font-serif text-sm md:text-base lg:text-lg mb-3 md:mb-4 flex items-center gap-2 text-gray-900">
    <Share2 className="w-4 h-4 md:w-[18px] md:h-[18px]" /> Share Article
  </h4>

  <div className="flex gap-2 md:gap-3">
    {/* Twitter / X */}
    <a
      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on Twitter"
      className="p-2 md:p-3 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all"
    >
      <Twitter className="w-4 h-4 md:w-[18px] md:h-[18px] text-gray-600" />
    </a>

    {/* LinkedIn */}
    <a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on LinkedIn"
      className="p-2 md:p-3 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all"
    >
      <Linkedin className="w-4 h-4 md:w-[18px] md:h-[18px] text-gray-600" />
    </a>

    {/* Facebook */}
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on Facebook"
      className="p-2 md:p-3 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all"
    >
      <Facebook className="w-4 h-4 md:w-[18px] md:h-[18px] text-gray-600" />
    </a>

    {/* Instagram (Copy Link) */}
    <button
      onClick={handleInstagramShare}
      aria-label="Copy link for Instagram"
      className="p-2 md:p-3 bg-white border border-gray-300 rounded-lg hover:bg-pink-50 hover:border-pink-400 transition-all"
    >
      <Instagram className="w-4 h-4 md:w-[18px] md:h-[18px] text-gray-600" />
    </button>
  </div>
</div>

            </aside>
          </div>
        </section>

        {/* RELATED BLOGS */}
        {relatedBlogs.length > 0 && (
          <section className="bg-gradient-to-b from-gray-50 to-white py-10 md:py-14 lg:py-20 border-t">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-serif mb-6 md:mb-8 lg:mb-10 text-gray-900">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {relatedBlogs.map((b) => (
                  <Link
                    key={b.id}
                    href={`/blog/${b.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={b.image}
                        alt={b.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 md:p-5 lg:p-6">
                      <h4 className="font-serif text-sm md:text-base lg:text-lg line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {b.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}