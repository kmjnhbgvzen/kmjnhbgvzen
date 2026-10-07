"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  Sparkles,
  CheckCircle2,
  Layers,
  Layout,
  Search,
  Smartphone,
  ShieldCheck,
  Zap,
  ArrowRight,
  Code2,
  Cpu,
  MonitorSmartphone,
  FileCheck,
  Building2,
  Wrench,
  Hammer,
  Truck,
  PaintBucket,
  HardHat,
  ChevronRight,
  Check,
  Phone,
  Compass,
  TrendingUp,
  Maximize2,
  Flame,
  ArrowDown,
  Clock,
  Briefcase,
  Users,
  Grid,
  CheckCircle,
  HelpCircle,
  Award,
  BarChart3,
  Lightbulb,
  MousePointerClick,
  Sparkle,
  Radio,
  Share2,
  MoveRight,
  Workflow,
  Target,
} from "lucide-react";

export default function MTBossClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Summary Circular Items (Stat Circles)
  const summaryDetails = [
    {
      label: "CLIENT",
      value: "MTBoss Construction",
      sub: "Civil & Materials",
      icon: <Building2 className="w-5 h-5 text-sky-500" />,
      color: "from-sky-500/20 to-blue-500/10",
      borderColor: "group-hover:border-sky-400",
    },
    {
      label: "INDUSTRY",
      value: "Construction & Services",
      sub: "29+ Specialized Trades",
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
      color: "from-blue-500/20 to-indigo-500/10",
      borderColor: "group-hover:border-blue-400",
    },
    {
      label: "PROJECT TYPE",
      value: "Digital Service Platform",
      sub: "Web App & Catalog",
      icon: <Globe className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-500/20 to-purple-500/10",
      borderColor: "group-hover:border-indigo-400",
    },
    {
      label: "DEVELOPED BY",
      value: "Zentrix Infotech",
      sub: "Architecture & UI/UX",
      icon: <Award className="w-5 h-5 text-teal-500" />,
      color: "from-teal-500/20 to-emerald-500/10",
      borderColor: "group-hover:border-teal-400",
    },
  ];

  // Requirements Cards (Mixed Shapes)
  const clientRequirementCards = [
    {
      title: "Modern Interface",
      desc: "Professional construction-focused digital identity reflecting credibility, precision, and modern design standards.",
      icon: <Layout className="w-6 h-6 text-sky-600" />,
      tag: "Brand Identity",
      shape: "rounded-[2.5rem]",
      decor: "circle-bg",
    },
    {
      title: "Service Discovery",
      desc: "Clear presentation of building supplies and diverse home improvement trades with fast category filtering.",
      icon: <Search className="w-6 h-6 text-blue-600" />,
      tag: "Navigation",
      shape: "rounded-3xl",
      decor: "ring-decor",
    },
    {
      title: "Responsive Experience",
      desc: "Flawless mobile, tablet, and desktop viewports ensuring frictionless access for clients and on-site contractors.",
      icon: <Smartphone className="w-6 h-6 text-teal-600" />,
      tag: "Multi-Device",
      shape: "rounded-2xl",
      decor: "normal",
    },
    {
      title: "SEO Foundation",
      desc: "Search-friendly page structures, clean URL hierarchy, and structured metadata for high search engine visibility.",
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      tag: "Organic Growth",
      shape: "rounded-3xl",
      decor: "normal",
    },
    {
      title: "Conversion Focus",
      desc: "Clear enquiry pathways, prominent phone/chat triggers, and strategic CTAs to drive qualified project inquiries.",
      icon: <MousePointerClick className="w-6 h-6 text-emerald-600" />,
      tag: "Lead Generation",
      shape: "rounded-[2.5rem]",
      decor: "ring-decor",
    },
    {
      title: "Scalable Architecture",
      desc: "Easy expansion for future services, new regional service hubs, and ongoing catalog expansions.",
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      tag: "Future Proof",
      shape: "rounded-2xl",
      decor: "circle-bg",
    },
  ];

  // Service Ecosystem (4 Radial Categories + 29 Trades)
  const serviceCategories = [
    {
      id: "construction",
      name: "Construction & Civil",
      icon: <Building2 className="w-6 h-6 text-sky-600" />,
      color: "bg-sky-500/10 text-sky-700 border-sky-200",
      services: [
        "Building Construction",
        "Building Repair",
        "Road Construction",
        "Piling Contractor",
        "Pre-Fabricated Shed",
        "RCC Boundary Wall",
        "RCC Water Tank",
        "Earthing Contractor",
      ],
    },
    {
      id: "interiors",
      name: "Interiors & Finishings",
      icon: <PaintBucket className="w-6 h-6 text-indigo-600" />,
      color: "bg-indigo-500/10 text-indigo-700 border-indigo-200",
      services: [
        "Interior & Furniture",
        "Modular Kitchen",
        "False Ceiling",
        "PVC Panels",
        "Wallpaper Services",
        "Carpenter Services",
        "Tiles & Marble Work",
        "Door & Window Installation",
      ],
    },
    {
      id: "home_services",
      name: "Home Services & Repairs",
      icon: <Wrench className="w-6 h-6 text-teal-600" />,
      color: "bg-teal-500/10 text-teal-700 border-teal-200",
      services: [
        "Plumbing Services",
        "Electrical Services",
        "Painting & Coatings",
        "AC Repair",
        "HVAC Systems",
        "Pest Control",
        "Bathroom Repair & Renovation",
        "Water & Septic Tank Cleaning",
        "Gardening & Landscaping",
      ],
    },
    {
      id: "specialized",
      name: "Specialized Solutions",
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      color: "bg-amber-500/10 text-amber-700 border-amber-200",
      services: [
        "Waterproofing Solutions",
        "Home Automation Systems",
        "Glass & Railing Work",
        "Swimming Pool Services",
      ],
    },
  ];

  // Tech Stack (Circular Badges with varied sizes)
  const techStackBadges = [
    { name: "Next.js", role: "Framework", size: "lg", icon: <Code2 className="w-7 h-7 text-sky-500" />, desc: "SSR & App Router" },
    { name: "React 19", role: "UI Library", size: "md", icon: <Layers className="w-6 h-6 text-blue-500" />, desc: "Component Architecture" },
    { name: "Tailwind CSS", role: "Styling", size: "lg", icon: <PaintBucket className="w-7 h-7 text-teal-500" />, desc: "Responsive Design System" },
    { name: "Lucide React", role: "Icons", size: "sm", icon: <Sparkles className="w-5 h-5 text-indigo-500" />, desc: "Vector Icons" },
    { name: "Responsive UX", role: "Mobile-First", size: "md", icon: <MonitorSmartphone className="w-6 h-6 text-purple-500" />, desc: "Adaptive Breakpoints" },
    { name: "SEO Architecture", role: "Indexing", size: "lg", icon: <Search className="w-7 h-7 text-amber-500" />, desc: "Semantic URLs & Meta" },
    { name: "Modular UI", role: "Components", size: "md", icon: <Cpu className="w-6 h-6 text-emerald-500" />, desc: "Reusable Blocks" },
    { name: "Scalable Core", role: "Growth", size: "sm", icon: <Zap className="w-5 h-5 text-rose-500" />, desc: "Modular Catalog" },
  ];

  // Development Process (Circular Nodes Timeline)
  const devProcess = [
    { step: "01", title: "Requirement Analysis", desc: "Scope analysis of building supplies and contracting trades.", icon: <Search className="w-4 h-4" /> },
    { step: "02", title: "Information Architecture", desc: "Hierarchical catalog organization and navigation pathways.", icon: <Layout className="w-4 h-4" /> },
    { step: "03", title: "UI/UX Design", desc: "Construction-tailored visual design and clean wireframing.", icon: <PaintBucket className="w-4 h-4" /> },
    { step: "04", title: "Frontend Development", desc: "Modular React and Next.js component implementation.", icon: <Code2 className="w-4 h-4" /> },
    { step: "05", title: "Responsive Optimization", desc: "Cross-device testing for phones, tablets, and desktops.", icon: <Smartphone className="w-4 h-4" /> },
    { step: "06", title: "SEO Implementation", desc: "Semantic markup, metadata, and clean service URLs.", icon: <Zap className="w-4 h-4" /> },
    { step: "07", title: "Testing & QA", desc: "Performance audits, load tests, and navigation flow testing.", icon: <ShieldCheck className="w-4 h-4" /> },
    { step: "08", title: "Deployment & Support", desc: "Cloud deployment with future-ready maintainability.", icon: <Globe className="w-4 h-4" /> },
  ];

  // Challenges & Solutions (Connected Circular Nodes)
  const challengesSolutions = [
    {
      id: "01",
      title: "Managing a Large Number of Services",
      tag: "Catalog Architecture",
      challenge: "MTBoss offers supplies and services across construction, renovation, maintenance, electrical, and plumbing. Presenting all options without user friction was critical.",
      solution: "Engineered structured category modules, multi-level dropdowns, and dedicated service landing cards for frictionless browsing.",
      icon: <Layers className="w-5 h-5 text-sky-500" />,
    },
    {
      id: "02",
      title: "Maintaining Mobile Usability",
      tag: "Touch Experience",
      challenge: "Extensive navigation hierarchies and dense catalogs easily clutter mobile screens and reduce conversion.",
      solution: "Built clean collapsible mobile navigation, touch-optimized cards, and instant call-to-action triggers for on-the-go clients.",
      icon: <Smartphone className="w-5 h-5 text-blue-500" />,
    },
    {
      id: "03",
      title: "Supporting Future Expansion",
      tag: "Modularity",
      challenge: "The platform required continuous capability to add new building materials, specialty trades, and regional service hubs.",
      solution: "Developed an isolated component-based architecture allowing instant service additions without modifying core layouts.",
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
    },
    {
      id: "04",
      title: "Supporting Search Visibility",
      tag: "Organic Search",
      challenge: "A multi-service business needs individual search engine discoverability rather than relying solely on the homepage.",
      solution: "Implemented dedicated service modules, keyword-targeted heading hierarchies, and structured URL slugs for high search crawlability.",
      icon: <Search className="w-5 h-5 text-teal-500" />,
    },
  ];

  // Radial Impact Items
  const impactItems = [
    { title: "Organized Service Discovery", desc: "Streamlined 29+ trades into an accessible digital catalog.", icon: <Layers className="w-5 h-5 text-sky-500" /> },
    { title: "Responsive Multi-Device UX", desc: "Consistent performance on phones, tablets, and desktops.", icon: <Smartphone className="w-5 h-5 text-blue-500" /> },
    { title: "Clear Enquiry Journey", desc: "Prominent touchpoints streamlining project lead generation.", icon: <MousePointerClick className="w-5 h-5 text-teal-500" /> },
    { title: "Scalable Architecture", desc: "Modular framework ready for catalog & regional expansion.", icon: <Cpu className="w-5 h-5 text-indigo-500" /> },
    { title: "SEO-Ready Foundation", desc: "Semantic hierarchy structured for long-term organic search.", icon: <Search className="w-5 h-5 text-amber-500" /> },
    { title: "Professional Brand Trust", desc: "Credible digital presence matching MTBoss's civil expertise.", icon: <ShieldCheck className="w-5 h-5 text-emerald-500" /> },
  ];

  // Strategy Horizontal Process
  const strategySteps = [
    { num: "01", name: "Business", title: "Business Understanding", desc: "Audience & catalog analysis", icon: <Briefcase className="w-5 h-5" /> },
    { num: "02", name: "UI/UX", title: "UI/UX Strategy", desc: "Navigation & wireframing", icon: <Compass className="w-5 h-5" /> },
    { num: "03", name: "Dev", title: "Modern Development", desc: "Next.js component building", icon: <Code2 className="w-5 h-5" /> },
    { num: "04", name: "Responsive", title: "Responsive Optimization", desc: "Mobile-first testing", icon: <Smartphone className="w-5 h-5" /> },
    { num: "05", name: "SEO", title: "SEO Architecture", desc: "Search hierarchy & schema", icon: <Search className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#FCFDFE] text-slate-800 antialiased selection:bg-sky-500/20 selection:text-sky-900 overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Floating Circular Background & Overlapping Mockup)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/20 border-b border-slate-200/60">
        {/* Abstract Circular Background Atmospheric Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-sky-200/40 via-blue-100/30 to-teal-50/20 rounded-full blur-3xl pointer-events-none -z-0 animate-pulse duration-[8000ms]" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-tr from-sky-400/15 to-indigo-400/10 rounded-full blur-2xl pointer-events-none -z-0" />
        <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-blue-300/10 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Thin Circular Outline Rings behind mockup */}
        <div className="absolute right-[5%] top-[15%] w-[480px] h-[480px] rounded-full border border-sky-300/30 pointer-events-none hidden lg:block animate-[spin_60s_linear_infinite]" />
        <div className="absolute right-[8%] top-[18%] w-[380px] h-[380px] rounded-full border border-dashed border-blue-400/25 pointer-events-none hidden lg:block animate-[spin_45s_linear_infinite_reverse]" />

        {/* Floating Dot Graphic Accents */}
        <div className="absolute left-[10%] top-[40%] w-3 h-3 rounded-full bg-sky-400/40 animate-bounce duration-[3000ms]" />
        <div className="absolute left-[45%] top-[20%] w-2 h-2 rounded-full bg-blue-500/30 animate-ping duration-[4000ms]" />
        <div className="absolute right-[15%] top-[65%] w-2.5 h-2.5 rounded-full bg-teal-400/40 animate-bounce duration-[2500ms]" />

        {/* Subtle Background Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb Back link */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-sky-600 transition-colors mb-6 group px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-xs hover:border-sky-300 backdrop-blur-md"
            >
              <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
              Back to All Projects
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Hero Content */}
            <motion.div
              className="lg:col-span-7 space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-sky-50/90 border border-sky-200/80 text-sky-700 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                <span>CASE STUDY • CONSTRUCTION TECHNOLOGY</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-slate-900 tracking-tight leading-[1.12]">
                MTBoss{" "}
                <span className="bg-gradient-to-r from-[#2eaad4] via-[#2c67f2] to-[#2563eb] bg-clip-text text-transparent">
                  Construction
                </span>
              </h1>

              {/* Highlighted Subtitle */}
              <p className="text-lg sm:text-xl font-semibold text-slate-700 leading-snug">
                Building Materials & Home Services Digital Platform
              </p>

              {/* Short description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                A scalable digital experience designed and developed by Zentrix Infotech to simplify the discovery of construction materials and professional home services under a unified, high-performance interface.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="https://www.mtboss.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] hover:opacity-95 active:scale-95 transition-all shadow-md shadow-sky-500/20 group"
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all shadow-xs"
                >
                  Explore Case Study
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </motion.div>

            {/* Right Overlapping Browser Mockup with Tilt & Floating Elements */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Overlapping Background Circular Glow Bubble */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-sky-400/20 via-blue-500/10 to-teal-400/20 blur-xl -z-10" />

              {/* Floating Orbiting Badges */}
              <div className="absolute -top-5 -left-5 z-20 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 border border-sky-100 shadow-xl backdrop-blur-md hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                  <Wrench className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-900 leading-tight">29+ Services</p>
                  <p className="text-[10px] text-slate-500">Integrated Catalog</p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 z-20 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 border border-emerald-100 shadow-xl backdrop-blur-md hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-900 leading-tight">100% Mobile</p>
                  <p className="text-[10px] text-slate-500">Adaptive Flow</p>
                </div>
              </div>

              {/* Mockup Frame with subtle hover tilt */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white group hover:-translate-y-1.5 hover:shadow-sky-500/10 transition-all duration-500">
                {/* Browser Top Bar */}
                <div className="px-4 py-3 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="px-3.5 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-medium text-slate-500 max-w-[210px] truncate text-center shadow-2xs">
                    https://www.mtboss.in
                  </div>
                  <div className="w-8 flex justify-end">
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>

                {/* Screenshot Area */}
                <div className="aspect-[16/11] w-full overflow-hidden bg-slate-50 relative">
                  <img
                    src="https://res.cloudinary.com/dxpyhablz/image/upload/v1786521683/www.mtboss.in__Nest_Hub_1_s0qfjy.png"
                    alt="MTBoss Construction Platform Showcase"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Footer */}
                <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-slate-800">Live Production Website</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Next.js & Tailwind</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              2. PROJECT INFO – FOUR CIRCULAR STAT ITEMS
              ───────────────────────────────────────────────────────────── */}
          <div className="mt-16 pt-10 border-t border-slate-200/70">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
              {summaryDetails.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center text-center cursor-default transition-transform duration-300 hover:scale-105"
                >
                  {/* Outer Rotating Border Circle */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-slate-200/90 group-hover:border-sky-400 p-1.5 transition-all duration-500 flex items-center justify-center relative shadow-xs group-hover:shadow-lg group-hover:shadow-sky-500/10">
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 flex flex-col items-center justify-center p-3 transition-colors group-hover:bg-sky-50/40">
                      {/* Icon */}
                      <div className="mb-1 transform group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      {/* Label */}
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-sky-600 transition-colors">
                        {item.label}
                      </p>
                    </div>
                  </div>

                  {/* Value outside the circle */}
                  <div className="mt-3">
                    <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{item.value}</p>
                    <p className="text-[11px] text-slate-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PROJECT OVERVIEW – DECORATIVE ORBIT VISUAL
          ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT: Text & Context */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-sky-50 text-sky-700 border border-sky-100">
              <Compass className="w-3.5 h-3.5" />
              <span>Project Overview</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-snug">
              Building a Digital Foundation for Modern Construction Services
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                MTBoss Construction operates as a comprehensive ecosystem catering to builders, property owners, renovators, and homeowners. The company brings physical construction supplies and skilled trade contractors together into one centralized marketplace.
              </p>
              <p>
                Zentrix Infotech was commissioned to architect, design, and develop a comprehensive web platform that seamlessly bridges raw building supplies and 29+ professional trades under a unified, high-performance interface.
              </p>
            </div>

            {/* Core Capability Chips */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {[
                "Responsive Web Application",
                "Construction Industry",
                "Building Materials Hub",
                "Home Services Ecosystem",
                "SEO-Ready Architecture",
                "Scalable Platform",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-2xs hover:border-sky-300 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Large Decorative Orbit Ecosystem Diagram */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              {/* Outer Orbit Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-sky-300/60 animate-[spin_80s_linear_infinite]" />
              
              {/* Middle Orbit Ring */}
              <div className="absolute inset-10 sm:inset-12 rounded-full border border-blue-200/70 animate-[spin_50s_linear_infinite_reverse]" />

              {/* Inner Orbit Glow */}
              <div className="absolute inset-20 sm:inset-24 rounded-full bg-gradient-to-tr from-sky-100/60 to-blue-100/40 blur-md pointer-events-none" />

              {/* Center Core Circle: MTBoss */}
              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white shadow-2xl border-2 border-sky-400 flex flex-col items-center justify-center text-center p-3 group hover:scale-105 transition-transform duration-300">
                <Building2 className="w-5 h-5 text-sky-400 mb-1" />
                <span className="text-base font-serif font-bold text-white tracking-wide">MTBoss</span>
                <span className="text-[9px] uppercase tracking-widest text-sky-300 font-medium">Platform Core</span>
              </div>

              {/* Orbiting Satellite Nodes (Positioned around circular perimeter) */}
              {[
                { label: "Materials", icon: <Hammer className="w-3.5 h-3.5 text-amber-500" />, pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
                { label: "Services", icon: <Wrench className="w-3.5 h-3.5 text-sky-500" />, pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
                { label: "SEO Engine", icon: <Zap className="w-3.5 h-3.5 text-teal-500" />, pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
                { label: "Mobile-First", icon: <Smartphone className="w-3.5 h-3.5 text-indigo-500" />, pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" },
                { label: "Scalable", icon: <Layers className="w-3.5 h-3.5 text-purple-500" />, pos: "top-8 right-8" },
                { label: "Responsive", icon: <MonitorSmartphone className="w-3.5 h-3.5 text-blue-500" />, pos: "bottom-8 left-8" },
              ].map((node, idx) => (
                <div
                  key={idx}
                  className={`absolute ${node.pos} z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-md hover:border-sky-300 hover:scale-110 transition-all duration-300 cursor-default`}
                >
                  <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center">
                    {node.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-800 whitespace-nowrap">{node.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. REQUIREMENTS – MIXED CARD SHAPES & CIRCULAR ICONS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-y border-slate-200/70 relative">
        {/* Subtle decorative background circles */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-sky-200/40 pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white border border-slate-200 text-sky-700 mb-3 shadow-xs">
              <FileCheck className="w-3.5 h-3.5 text-sky-500" />
              <span>The Client Mandate</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              What MTBoss Needed
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A platform capable of handling a broad service ecosystem without sacrificing usability, speed, or conversion performance.
            </p>
          </div>

          {/* 6 Mixed Shapes Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientRequirementCards.map((card, idx) => (
              <div
                key={idx}
                className={`relative p-7 sm:p-8 ${card.shape} bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
              >
                {/* Background Decor */}
                {card.decor === "circle-bg" && (
                  <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-gradient-to-br from-sky-100/40 to-blue-100/20 pointer-events-none transition-transform group-hover:scale-125 duration-500" />
                )}
                {card.decor === "ring-decor" && (
                  <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full border border-dashed border-sky-300/40 pointer-events-none transition-transform group-hover:rotate-45 duration-500" />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    {/* Circular Icon Container */}
                    <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-50 group-hover:border-sky-200 transition-all duration-300 shadow-2xs">
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1 rounded-full bg-slate-100">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Check className="w-4 h-4 text-sky-500" />
                  <span>Delivered & Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. THE CORE CHALLENGE (Three Connected Circles on Dark BG)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-slate-900 border border-slate-800 text-sky-400 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE CHALLENGE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              One Platform. Dozens of Services. Zero Navigation Confusion.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              MTBoss covers physical raw materials (cement, sand, iron) as well as dozens of specialized services (maintenance, renovation, civil works, electrical, plumbing). Handling such a massive catalog required careful architectural planning.
            </p>
          </div>

          {/* THREE CONNECTED CIRCLES (Desktop Horizontal / Mobile Vertical) */}
          <div className="relative my-12">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 -translate-y-1/2 bg-gradient-to-r from-sky-500/40 via-blue-500/60 to-emerald-500/40 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 justify-items-center relative z-10">
              {/* Circle 1 */}
              <div className="group flex flex-col items-center text-center">
                <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full bg-slate-900/90 border-2 border-slate-800 group-hover:border-sky-400 flex flex-col items-center justify-center p-6 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-sky-500/20 relative">
                  <div className="absolute inset-2 rounded-full border border-dashed border-white/10 group-hover:border-sky-400/40 animate-[spin_40s_linear_infinite]" />
                  <span className="text-3xl font-serif font-black text-sky-400 mb-1">01</span>
                  <h3 className="text-base font-bold text-white leading-tight mb-1">Large Service</h3>
                  <p className="text-xs text-slate-400 leading-tight">Catalogue</p>
                </div>
                <p className="mt-3 text-xs text-slate-400 max-w-[200px]">Dozens of construction trades & materials</p>
              </div>

              {/* Circle 2 (Slightly larger for variation) */}
              <div className="group flex flex-col items-center text-center">
                <div className="w-52 h-52 sm:w-56 sm:h-56 rounded-full bg-gradient-to-b from-slate-900 to-slate-850 border-2 border-slate-700 group-hover:border-blue-400 flex flex-col items-center justify-center p-6 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/20 relative">
                  <div className="absolute inset-2 rounded-full border border-dashed border-white/10 group-hover:border-blue-400/40 animate-[spin_50s_linear_infinite_reverse]" />
                  <span className="text-3xl font-serif font-black text-blue-400 mb-1">02</span>
                  <h3 className="text-base font-bold text-white leading-tight mb-1">Simple</h3>
                  <p className="text-xs text-slate-400 leading-tight">Navigation</p>
                </div>
                <p className="mt-3 text-xs text-slate-400 max-w-[200px]">Intuitive categorization & multi-tier menus</p>
              </div>

              {/* Circle 3 */}
              <div className="group flex flex-col items-center text-center">
                <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full bg-slate-900/90 border-2 border-slate-800 group-hover:border-emerald-400 flex flex-col items-center justify-center p-6 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-emerald-500/20 relative">
                  <div className="absolute inset-2 rounded-full border border-dashed border-white/10 group-hover:border-emerald-400/40 animate-[spin_40s_linear_infinite]" />
                  <span className="text-3xl font-serif font-black text-emerald-400 mb-1">03</span>
                  <h3 className="text-base font-bold text-white leading-tight mb-1">Professional</h3>
                  <p className="text-xs text-slate-400 leading-tight">User Experience</p>
                </div>
                <p className="mt-3 text-xs text-slate-400 max-w-[200px]">High clarity, credibility & fast enquiries</p>
              </div>
            </div>
          </div>

          {/* Strategy Formula Bar */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 shadow-2xl text-center">
            <p className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-4">
              THE STRATEGIC FORMULA
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base font-bold">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-300">
                Large Service Catalogue
              </span>
              <span className="text-xl text-sky-400">+</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300">
                Simple Navigation
              </span>
              <span className="text-xl text-sky-400">=</span>
              <span className="px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/30 to-blue-500/30 border border-sky-400/40 text-white shadow-xs">
                Professional User Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. OUR SOLUTION – ROTATING ORBIT DIAGRAM
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT: Rotating Orbit Diagram */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              {/* Rotating Orbit Decoration */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-300/50 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-blue-200/60" />

              {/* Center Circle: MTBoss Digital Platform */}
              <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-white to-sky-50 border-2 border-sky-400 shadow-xl flex flex-col items-center justify-center text-center p-3">
                <Layout className="w-5 h-5 text-sky-600 mb-1" />
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  MTBoss Digital
                </span>
                <span className="text-[10px] text-sky-600 font-semibold">Platform</span>
              </div>

              {/* 4 Orbit Solution Bubbles (Fixed Orientation, Readable Text) */}
              {[
                { title: "Structured Categories", icon: <Layers className="w-4 h-4 text-sky-600" />, pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
                { title: "Smart Navigation", icon: <Compass className="w-4 h-4 text-blue-600" />, pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
                { title: "Responsive UI", icon: <MonitorSmartphone className="w-4 h-4 text-teal-600" />, pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
                { title: "Scalable Architecture", icon: <Cpu className="w-4 h-4 text-indigo-600" />, pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`absolute ${item.pos} z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-slate-200/90 shadow-md hover:border-sky-300 hover:scale-105 transition-all`}
                >
                  <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-800 whitespace-nowrap">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Text & Narrative */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-sky-50 border border-sky-200 text-sky-700 shadow-xs">
              <Lightbulb className="w-3.5 h-3.5 text-sky-500" />
              <span>OUR APPROACH</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-snug">
              Turning Complexity Into a Simple Digital Experience
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Zentrix Infotech engineered a structured, modular web application that neatly bifurcates materials from trade services. Instead of overwhelming users with an unstructured endless list, all offerings were organized into intuitive modules with dedicated service cards and accessible call-to-actions.
            </p>

            {/* Additional Solution Features */}
            <div className="pt-2 flex flex-wrap gap-2">
              {[
                "Organized Dropdown Navigation",
                "Service Cards",
                "Professional Banners",
                "Clear Calls to Action",
                "Responsive Interface",
                "Scalable Architecture",
                "SEO-Focused Landing Modules",
              ].map((sol, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold"
                >
                  <Check className="w-3 h-3 text-sky-600" />
                  {sol}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. KEY FEATURES (Bento Grid with Circular Overlays & Nodes)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-y border-slate-200/70 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white border border-slate-200 text-sky-700 mb-3 shadow-xs">
              <Grid className="w-3.5 h-3.5 text-sky-500" />
              <span>Platform Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              Everything Users Need, Organized in One Experience
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every feature on MTBoss was architected to balance rich visual presentation with high conversion performance across all devices.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {/* Bento Card 1: Building Materials (Large Span + Decorative Circle) */}
            <div className="md:col-span-2 lg:col-span-2 p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-sky-100/50 pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center mb-5 text-sky-600 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 mb-1 block">Supply Hub</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-3">Building Materials</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Structured catalog giving direct access to core construction materials such as cement, sand, iron, aggregates, bricks, and specialized commercial supplies.
                </p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {["Cement", "Sand & Aggregates", "TMT Iron & Steel", "Construction Supplies", "Bricks & Blocks"].map((chip, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 2: Construction & Home Services (Large Span) */}
            <div className="md:col-span-2 lg:col-span-2 p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-sky-50/20 to-blue-50/20 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full border border-dashed border-blue-300/40 pointer-events-none group-hover:rotate-45 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 text-blue-600 group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1 block">Contracting Hub</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-3">Construction & Home Services</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Comprehensive categorized showcase of building, repair, renovation, installation, maintenance, and civil contracting offerings.
                </p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {[
                  "Construction",
                  "Renovation",
                  "Plumbing",
                  "Electrical",
                  "Painting",
                  "Waterproofing",
                  "Interior",
                  "+ 22 more",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-sky-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 3: Responsive Navigation (With 3 connected circular nodes) */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mb-4 text-teal-600 group-hover:scale-110 transition-transform">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900 mb-2">Responsive Navigation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Multi-tier categorized navigation hierarchies ensuring rapid access.
                </p>
              </div>
              {/* 3 Connected Nodes */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-600">
                <span className="px-2 py-0.5 rounded-full bg-slate-100">Discover</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-100">Explore</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">Enquire</span>
              </div>
            </div>

            {/* Bento Card 4: Mobile Experience (With circular device indicator) */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 text-indigo-600 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900 mb-2">Mobile-First Flow</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Touch-optimized interface built for on-site contractors & homeowners.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Touch Responsive
              </div>
            </div>

            {/* Bento Card 5: Service-Focused Pages */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 text-amber-600 group-hover:scale-110 transition-transform">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900 mb-2">Dedicated Landing</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Targeted sections dedicated to individual service lines with structured scope.
                </p>
              </div>
            </div>

            {/* Bento Card 6: Clear Calls to Action */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center mb-4 text-rose-600 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900 mb-2">High Conversion</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Strategically positioned enquiry touchpoints to streamline inbound leads.
                </p>
              </div>
            </div>

            {/* Bento Card 7: Consistent Branding */}
            <div className="md:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900 mb-2">Consistent MTBoss Branding</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Uniform visual identity incorporating brand-aligned typography, colors, and industry-tailored themes across every subpage and module.
                </p>
              </div>
            </div>

            {/* Bento Card 8: SEO-Friendly Architecture (With faint background SEO circle) */}
            <div className="md:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute right-4 bottom-2 text-6xl font-black text-slate-100/80 select-none pointer-events-none group-hover:text-sky-100 transition-colors">
                SEO
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900 mb-2">SEO-Friendly Architecture</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Clean semantic markup, optimized heading hierarchies, and search-optimized URL structures for organic discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. SERVICE ECOSYSTEM (Radial Category Design + Chips)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-sky-50 border border-sky-200 text-sky-700 mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-sky-500" />
            <span>29+ Trade Categories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            A Complete Construction & Home-Service Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            MTBoss brings a vast spectrum of specialized home improvement, construction trades, and maintenance capabilities into one structured catalog.
          </p>
        </div>

        {/* Central Radial Category Visual Hub */}
        <div className="relative max-w-4xl mx-auto mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
            {serviceCategories.map((group, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center p-5 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-sky-300 hover:scale-105 transition-all duration-300 w-full"
              >
                <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-3 group-hover:bg-sky-50 group-hover:scale-110 transition-all">
                  {group.icon}
                </div>
                <h3 className="text-sm font-bold font-serif text-slate-900 mb-1">{group.name}</h3>
                <span className="text-[11px] font-semibold text-slate-500">
                  {group.services.length} Specialized Trades
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Category Detailed Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-serif text-slate-900">{group.name}</h3>
                      <p className="text-xs text-slate-500">{group.services.length} Specialized Trades</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-sky-600 px-3 py-1 rounded-full bg-sky-50">
                    Category 0{idx + 1}
                  </span>
                </div>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {group.services.map((svc, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-50 hover:bg-sky-50/80 border border-slate-200/70 hover:border-sky-200 text-slate-700 hover:text-sky-900 text-xs sm:text-sm font-medium transition-colors shadow-2xs"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. TECHNOLOGY STACK (Circular Tech Badges with Varied Sizes)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-y border-slate-200/70 relative">
        {/* Subtle Dotted Pattern Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white border border-slate-200 text-sky-700 mb-3 shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-sky-500" />
              <span>Modern Engineering Stack</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              Technology Behind the Experience
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Engineered with modern web standards focused on high rendering speeds, responsive adaptability, and effortless architectural scalability.
            </p>
          </div>

          {/* Staggered Circular Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
            {techStackBadges.map((tech, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center text-center cursor-default transition-transform duration-300 hover:scale-105"
              >
                {/* Outer Ring */}
                <div
                  className={`rounded-full border-2 border-dashed border-slate-200/90 group-hover:border-sky-400 p-2 transition-all duration-500 flex items-center justify-center shadow-xs group-hover:shadow-xl group-hover:shadow-sky-500/10 ${
                    tech.size === "lg"
                      ? "w-36 h-36 sm:w-40 sm:h-40"
                      : tech.size === "md"
                      ? "w-32 h-32 sm:w-36 sm:h-36"
                      : "w-28 h-28 sm:w-32 sm:h-32"
                  }`}
                >
                  <div className="w-full h-full rounded-full bg-white border border-slate-200/80 flex flex-col items-center justify-center p-3 group-hover:bg-sky-50/50 transition-colors">
                    <div className="mb-1 transform group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {tech.name}
                    </h3>
                    <p className="text-[10px] text-sky-600 font-semibold uppercase">{tech.role}</p>
                  </div>
                </div>

                <p className="mt-2 text-xs text-slate-500">{tech.desc}</p>
              </div>
            ))}
          </div>

          {/* Tech Callout */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-sky-200/70 text-center shadow-xs max-w-3xl mx-auto">
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
              “Built with a component-based architecture designed for performance, maintainability, and future expansion.”
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. DEVELOPMENT PROCESS (Circular Nodes Timeline)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-sky-50 border border-sky-200 text-sky-700 mb-3 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-sky-500" />
            <span>Structured Delivery Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            From Idea to Production
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            An 8-stage engineering process implemented by Zentrix Infotech to guarantee rapid delivery and high build quality.
          </p>
        </div>

        {/* Desktop Horizontal Line + Circular Nodes */}
        <div className="relative hidden lg:block mb-12">
          <div className="absolute top-7 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 z-0" />
          <div className="grid grid-cols-8 gap-2 relative z-10 justify-items-center">
            {devProcess.map((proc, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                {/* Circular Node */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-sky-400 flex items-center justify-center font-bold text-sky-700 text-sm shadow-md group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  {proc.step}
                </div>
                <h4 className="mt-3 text-xs font-bold text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">
                  {proc.title}
                </h4>
                <p className="mt-1 text-[10px] text-slate-500 leading-snug max-w-[110px]">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="block lg:hidden space-y-4 relative pl-6 border-l-2 border-sky-300 ml-4">
          {devProcess.map((proc, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-sky-500 flex items-center justify-center text-[10px] font-bold text-sky-700">
                {proc.step}
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <h4 className="text-sm font-bold text-slate-900 mb-1">{proc.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{proc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. CHALLENGES & SOLUTIONS (Visual Circular Connection)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white border border-slate-200 text-sky-700 mb-3 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-sky-500" />
              <span>Problem Solving</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              Challenges We Solved
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Key architectural hurdles encountered during development and the engineering solutions implemented by Zentrix Infotech:
            </p>
          </div>

          {/* 4 Cards with Visual Circular Flow: Challenge Node -> Solution Node */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {challengesSolutions.map((item, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Challenge {item.id}</span>
                    <span className="text-xs font-medium text-slate-500 px-3 py-0.5 rounded-full bg-slate-100">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-6">{item.title}</h3>

                  {/* Challenge Node */}
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      C
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-0.5">The Challenge</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.challenge}</p>
                    </div>
                  </div>

                  {/* Visual Connecting Arrow */}
                  <div className="flex justify-center my-3">
                    <div className="w-7 h-7 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shadow-2xs">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Solution Node */}
                  <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/70 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      S
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-sky-900 mb-0.5">Zentrix Solution</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          12. RESULTS & BUSINESS IMPACT (Radial Impact Layout)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
        {/* Large background circular glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-50/40 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-50 border border-emerald-200 text-emerald-700 mb-3 shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Value Delivered</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              The Impact
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A stronger digital foundation for MTBoss Construction delivering verified business and customer experience benefits.
            </p>
          </div>

          {/* 6 Outcome Cards with Circular Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactItems.map((res, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {res.icon}
                  </div>
                  <h3 className="text-lg font-bold font-serif text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{res.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Verified Qualitative Value</span>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-sky-500/10 border border-emerald-200/70 text-center shadow-xs">
            <p className="text-base sm:text-lg font-medium text-slate-800 max-w-3xl mx-auto leading-relaxed">
              “MTBoss now has a scalable digital platform capable of evolving alongside its services and digital marketing strategy.”
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          13. WHY ZENTRIX INFOTECH (Connected Process Circles)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white border border-slate-200 text-sky-700 mb-3 shadow-xs">
              <Award className="w-3.5 h-3.5 text-sky-500" />
              <span>Agency Value Addition</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              More Than Development — A Digital Strategy
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Zentrix Infotech transforms complex multi-discipline business requirements into streamlined, user-friendly digital platforms through an integrated workflow:
            </p>
          </div>

          {/* Horizontal Connected Circles (Desktop) & Stack (Mobile) */}
          <div className="p-7 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-md">
            <div className="relative">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-sky-400 via-blue-400 to-teal-400 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10 justify-items-center">
                {strategySteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                    {/* Circle Node */}
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-sky-400 flex items-center justify-center text-sky-600 shadow-md group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                      {step.icon}
                    </div>
                    <span className="mt-3 text-xs font-bold text-sky-600 uppercase">PHASE {step.num}</span>
                    <h4 className="text-sm font-bold text-slate-900 mb-0.5">{step.title}</h4>
                    <p className="text-[11px] text-slate-500 max-w-[130px]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 text-center max-w-3xl mx-auto text-sm text-slate-600 leading-relaxed">
              By aligning deep understanding of construction sector operations with modern frontend engineering, Zentrix Infotech delivered an architecture that reduces operational friction and amplifies customer engagement.
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          14. CONCLUSION & OUTCOME
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-sky-50 border border-sky-200 text-sky-700 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
              <span>Final Takeaway</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-snug">
              A Scalable Digital Platform for MTBoss Construction
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              The completed web application provides MTBoss Construction with a professional, scalable digital presence where customers can efficiently discover construction materials and diverse home trades.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              At the same time, the platform provides the business with a resilient architectural foundation ready for ongoing service additions, local branch extensions, and digital marketing campaigns.
            </p>
          </div>

          {/* Right: Visually Highlighted Outcome Card with Circular Checkmarks */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-sky-500/10 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400">KEY DELIVERABLES</span>
                  <span className="text-xs text-slate-400">Production Release</span>
                </div>

                <h3 className="text-xl font-bold font-serif text-white mb-6">THE OUTCOME</h3>

                <div className="space-y-3.5">
                  {[
                    "Structured service ecosystem (29+ trades)",
                    "Modern, high-performance responsive experience",
                    "Component-based scalable architecture",
                    "SEO-ready platform with clean URL structure",
                    "Strong, industry-tailored digital brand presence",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-medium text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          15. FINAL CTA SECTION (Full-Width Dark Gradient Banner)
          ───────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="relative rounded-3xl p-8 sm:p-14 md:p-16 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-2xl overflow-hidden">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          {/* Glowing Circular Orbs */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase block">
              HAVE A SIMILAR PROJECT IN MIND?
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Let&apos;s Build Your Next Digital Experience.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              From business websites and service platforms to custom web applications, Zentrix Infotech builds scalable digital solutions designed around real business goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-full bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-sky-500/25 group"
              >
                <Phone className="h-4 w-4 animate-ring" />
                Start Your Project
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full active:scale-95 transition-all backdrop-blur-xs"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
