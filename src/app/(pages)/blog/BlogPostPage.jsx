"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { blogs } from "@/data/blogs";

const POSTS_PER_PAGE = 12;

const OurBlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  /* ----------------------------------------
     SORT → LATEST BLOG FIRST
  ----------------------------------------- */
  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  /* ----------------------------------------
     FILTER LOGIC BY CATEGORY
  ----------------------------------------- */
  const filteredBlogs = useMemo(() => {
    return sortedBlogs.filter((blog) => {
      if (activeCategory === "All") return true;
      
      return blog.category === activeCategory;

    });
  }, [activeCategory, sortedBlogs]);

  /* ----------------------------------------
     PAGINATION LOGIC
  ----------------------------------------- */
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  /* ----------------------------------------
     UNIQUE CATEGORIES + TAGS
  ----------------------------------------- */
  const categories = useMemo(() => {
  const allCategories = blogs.map((b) => b.category);
  return ["All", ...Array.from(new Set(allCategories))];
}, []);


  /* ----------------------------------------
     HANDLE CATEGORY CHANGE
  ----------------------------------------- */
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-8 md:py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-6 md:mb-8">
  <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium 
                 mb-2 md:mb-3 text-gray-900 
                 mt-14 sm:mt-20 md:mt-28">
    Our Blogs
  </h1>
  <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
    Insights, guides, and strategies from Zentrix Infotech to help
    businesses grow digitally.
  </p>
</div>


        {/* FILTER CATEGORIES */}
<div className="flex flex-nowrap justify-center gap-1.5 mb-6 md:mb-10 px-1">
  {categories.map((cat, i) => (
    <button
      key={i}
      onClick={() => handleCategoryChange(cat)}
      className={`px-2 py-1 md:px-4 md:py-2 
                  rounded-full 
                  text-[11px] sm:text-xs md:text-sm 
                  font-medium 
                  transition-all duration-300 
                  whitespace-nowrap ${
        activeCategory === cat
          ? "bg-blue-600 text-white"
          : "bg-white text-gray-700 border border-gray-200"
      }`}
    >
      {cat}
    </button>
  ))}
</div>


        {/* BLOG GRID */}
        {paginatedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-10">
            {paginatedBlogs.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg md:rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                    <Tag size={10} className="text-blue-600" /> 
                    <span className="text-gray-800">{post.category}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-3 md:p-4">
                  {/* Meta Info */}
                  <div className="flex items-center gap-2 md:gap-3 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-bold mb-2 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-3">
                    {post.content}
                  </p>

                   {/* Read More */}
  <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition mb-3">
    Read More
    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
  </span>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-gray-100">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 md:py-16">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 max-w-md mx-auto">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Tag size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                No blogs found
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                No blogs match the selected category. Try selecting a different category.
              </p>
              <button
                onClick={() => handleCategoryChange("All")}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                View All Blogs
              </button>
            </div>
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-all ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 shadow-sm"
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-all ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 shadow-sm"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-all ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 shadow-sm"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurBlogPage;