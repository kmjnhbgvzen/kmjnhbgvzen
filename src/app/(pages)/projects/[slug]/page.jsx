import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Globe, Phone, Sparkles, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Zentrix Infotech",
    };
  }

  return {
    title: `${project.name} – Case Study | Zentrix Infotech`,
    description: project.description,
    alternates: {
      canonical: `https://www.zentrixinfotech.com/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} – Case Study | Zentrix Infotech`,
      description: project.description,
      url: `https://www.zentrixinfotech.com/projects/${project.slug}`,
      siteName: "Zentrix Infotech",
      images: project.image ? [{ url: project.image }] : [],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFFAFA] text-slate-800 pb-24">
      {/* Top Breadcrumb / Back Link */}
      <div className="pt-24 sm:pt-32 lg:pt-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
            {project.category}
          </span>
          <span className="text-xs text-slate-500 font-medium">Case Study</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-6 leading-tight">
          {project.name}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
          {project.description}
        </p>

        {project.website && (
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] hover:opacity-95 transition-all shadow-md"
            >
              <Globe className="w-4 h-4" />
              Visit Live Website
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        )}
      </section>

      {/* Featured Project Showcase Image */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16">
        <div className="aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-lg">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.name} full preview`}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 text-center">
              <Globe className="w-16 h-16 text-sky-500 mb-4" />
              <h3 className="font-serif text-2xl font-bold text-slate-800">{project.name}</h3>
              <p className="text-slate-500 text-sm mt-2">Comprehensive Project Case Study</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Overview Details */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Client / Platform</h4>
            <p className="text-lg font-semibold text-slate-900">{project.name}</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Domain / Industry</h4>
            <p className="text-lg font-semibold text-slate-900">{project.category}</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Delivered By</h4>
            <p className="text-lg font-semibold text-slate-900">Zentrix Infotech</p>
          </div>
        </div>
      </section>

      {/* Case Study Summary Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20 space-y-8">
        <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Project Highlights & Key Deliverables</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Zentrix Infotech delivered an end-to-end digital solution for {project.name}, emphasizing ultra-fast performance, intuitive responsive UI/UX, enterprise security, and seamless user conversion paths.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">Responsive multi-device experience</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">Custom high-performance architecture</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">SEO & conversion rate optimized</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">Modern UI/UX with smooth transitions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-br from-white via-sky-50/40 to-blue-50/30 border border-slate-200/80 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-3">
            Want a solution like {project.name}?
          </h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Let’s discuss your project requirements and craft a tailored digital product that drives growth.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium font-serif text-white rounded-full bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] hover:opacity-95 active:scale-95 transition-all shadow-md"
            >
              <Phone className="h-4 w-4 animate-ring" />
              Let’s Connect
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
