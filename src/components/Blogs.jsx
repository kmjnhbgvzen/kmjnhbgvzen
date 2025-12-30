"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import { blogs } from "@/data/blogs";

const Blog = () => {
  const featuredPosts = blogs.slice(0, 3);

  return (
    <section id="blog" className="bg-white relative overflow-hidden py-12 md:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full blur-xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-3">
            Blogs
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead with insights, best practices, and trends from Zentrix Infotech
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />

                {/* Category */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur text-xs rounded-full font-medium">
                    <Tag size={11} />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-500 mb-2.5">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-700 transition">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm md:text-base text-slate-600 mb-3 line-clamp-2">
                  {post.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t">
                  {post.tags?.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-100 text-xs rounded-md hover:bg-blue-100 hover:text-blue-700 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#3dd5c5] to-[#14b8a6] text-white px-6 py-3 md:px-8 md:py-2.5 rounded-xl font-semibold text-base md:text-lg hover:scale-105 transition shadow-lg"
          >
            Explore All Blogs
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;