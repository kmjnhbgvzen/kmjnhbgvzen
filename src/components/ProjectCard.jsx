"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Globe } from "lucide-react";

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
      {/* 1. Project Image Container (Compact responsive height, rounded-xl) */}
      <div className="relative h-[190px] sm:h-[210px] lg:h-[240px] w-full overflow-hidden bg-slate-100">
        {project.image && !imageError ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50"
            style={{
              background: `linear-gradient(135deg, #f8fafc 0%, ${project.color ? project.color + '15' : '#0ea5e915'} 50%, #f0f9ff 100%)`
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-xs mb-2 border border-white/80"
              style={{ backgroundColor: `${project.color || '#0ea5e9'}20` }}
            >
              <Globe className="w-6 h-6" style={{ color: project.color || '#0ea5e9' }} />
            </div>
            <span className="font-serif text-base font-bold text-slate-800">{project.name}</span>
            <span className="text-xs text-slate-500 mt-0.5">Live Digital Experience</span>
          </div>
        )}

        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* 2. Category Badge (Top-Right, compact) */}
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/95 backdrop-blur-md text-sky-700 border border-sky-200/80 shadow-xs group-hover:bg-white group-hover:border-sky-400 group-hover:shadow-sm transition-all duration-300">
            {project.category}
          </span>
        </div>
      </div>

      {/* 3. Content Area (Compact padding p-4 sm:p-5) */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          {/* Project Title (text-xl font-semibold) */}
          <h3 className="text-xl font-semibold font-serif text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors duration-300">
            {project.name}
          </h3>

          {/* Project Description (text-sm, line-clamp-2) */}
          <p className="text-sm text-slate-600 leading-relaxed mt-1.5 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* 4. Compact Card Action Area */}
        <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          {/* Left Side: View Case Study */}
          <Link
            href={project.caseStudy || `/projects/${project.slug}`}
            className="inline-flex items-center text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors duration-200"
          >
            View Case Study
          </Link>

          {/* Right Side: Arrow Icon & External Link Icon (w-10 h-10) */}
          <div className="flex items-center gap-1.5">
            {/* Case Study Arrow Button */}
            <Link
              href={project.caseStudy || `/projects/${project.slug}`}
              aria-label={`View ${project.name} case study`}
              className="w-10 h-10 rounded-full bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-300 flex items-center justify-center text-slate-700 hover:text-sky-600 transition-all duration-200 shadow-xs"
            >
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>

            {/* External Website Link Button (Active only if URL exists) */}
            {project.website && project.website.trim() !== "" ? (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} website`}
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-300 flex items-center justify-center text-slate-700 hover:text-sky-600 transition-all duration-200 shadow-xs"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
