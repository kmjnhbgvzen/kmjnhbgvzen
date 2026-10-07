import React from "react";
import Link from "next/link";
import { Phone, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects | Zentrix Infotech – See What We’ve Built",
  description:
    "Explore some of the websites, platforms, and digital solutions developed by Zentrix Infotech for businesses across different industries.",
  keywords: [
    "zentrix infotech projects",
    "see what we've built",
    "selected work zentrix",
    "software development projects",
    "website development portfolio",
    "custom software case studies",
    "ecommerce website development",
    "healthcare web development",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects",
  },
  openGraph: {
    title: "Projects | Zentrix Infotech – See What We’ve Built",
    description:
      "Explore some of the websites, platforms, and digital solutions developed by Zentrix Infotech for businesses across different industries.",
    url: "https://www.zentrixinfotech.com/projects",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Zentrix Infotech – See What We’ve Built",
    description:
      "Explore some of the websites, platforms, and digital solutions developed by Zentrix Infotech for businesses across different industries.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FFFAFA] text-slate-800 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Background Orbs */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-sky-400/10 via-blue-500/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge: SELECTED WORK */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 text-sky-600 mb-4 sm:mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>SELECTED WORK</span>
          </div>

          {/* Main Heading: See What We’ve Built */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            See What We’ve{" "}
            <span className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] bg-clip-text text-transparent">
              Built
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore some of the websites, platforms, and digital solutions developed by Zentrix Infotech for businesses across different industries.
          </p>
        </div>
      </section>

      {/* 2. COMPACT PROJECTS GRID (max-w-6xl, gap-5 sm:gap-6, 2 per row) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id || project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 3. BOTTOM CTA SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16 sm:mt-24">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-14 text-center bg-gradient-to-br from-white via-sky-50/40 to-blue-50/30 border border-slate-200/80 shadow-lg overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium font-serif text-slate-900 mb-4 tracking-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Let’s turn your idea into a powerful digital experience.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-base sm:text-sm font-medium font-serif text-white rounded-full bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] hover:opacity-95 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Phone className="h-4 w-4 animate-ring" />
                Let’s Connect
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
