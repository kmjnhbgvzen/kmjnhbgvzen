"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Store,
  ShoppingBag,
  ShoppingCart,
  MapPin,
  Barcode,
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowRight,
  Code2,
  Smartphone,
  Search,
  Network,
  Users,
  Cpu,
  Check,
  Zap,
  ShieldCheck,
  ArrowDown,
  Building,
  Briefcase,
  Workflow,
  Target,
  FileCheck2,
  Rocket,
  Globe,
  Compass,
  Flame,
  ShoppingBasket,
  Database,
  Layers3,
  BadgeCheck,
  Boxes
} from "lucide-react";

export default function BuyzaarClient() {
  const [activeFormat, setActiveFormat] = useState(1);

  // 1. Circular snapshot stats
  const infoNodes = [
    {
      num: "01",
      label: "CLIENT",
      value: "The Buyzaar Mart",
      sub: "Modern Retail Chain",
      icon: Store,
      border: "border-emerald-500/30",
      bg: "bg-emerald-50/70",
      iconColor: "text-emerald-600",
    },
    {
      num: "02",
      label: "INDUSTRY",
      value: "Retail & Supermarket",
      sub: "FMCG & Groceries",
      icon: ShoppingBasket,
      border: "border-amber-500/30",
      bg: "bg-amber-50/70",
      iconColor: "text-amber-600",
    },
    {
      num: "03",
      label: "PROJECT TYPE",
      value: "Retail & Franchise",
      sub: "Scalable Web Platform",
      icon: Network,
      border: "border-teal-500/30",
      bg: "bg-teal-50/70",
      iconColor: "text-teal-600",
    },
    {
      num: "04",
      label: "DEVELOPED BY",
      value: "Zentrix Infotech",
      sub: "Digital Architecture & UI/UX",
      icon: Code2,
      border: "border-orange-500/30",
      bg: "bg-orange-50/70",
      iconColor: "text-orange-600",
    },
  ];

  // 5. Requirements (Mixed layouts)
  const requirements = [
    {
      id: "01",
      title: "Strong Retail Identity",
      desc: "Establish a consistent, modern digital representation of the Buyzaar brand that instills trust and community connection.",
      icon: Store,
      type: "card-large",
      tag: "Branding & Trust",
    },
    {
      id: "02",
      title: "Franchise Discovery",
      desc: "Allow entrepreneurs to easily understand store models, operational requirements, and investment scope.",
      icon: Briefcase,
      type: "circle-node",
      tag: "Growth Engine",
    },
    {
      id: "03",
      title: "Store Visibility",
      desc: "Empower visitors to locate operational stores, upcoming locations, and real-time operational details.",
      icon: MapPin,
      type: "card-small",
      tag: "Geo-Targeting",
    },
    {
      id: "04",
      title: "Smart Retail Communication",
      desc: "Present POS, CRM, supply chain, and centralized operations capabilities transparently.",
      icon: Cpu,
      type: "card-small",
      tag: "Operations",
    },
    {
      id: "05",
      title: "Mobile Experience",
      desc: "Ensure seamless browsing, instant tap responses, and fast loading across smartphones, tablets, and desktops.",
      icon: Smartphone,
      type: "circle-node",
      tag: "Performance",
    },
    {
      id: "06",
      title: "Lead Generation",
      desc: "Structured, frictionless franchise enquiry journeys tailored to capture high-intent entrepreneurs.",
      icon: Target,
      type: "card-large",
      tag: "Conversion",
    },
    {
      id: "07",
      title: "SEO Architecture",
      desc: "City-specific landing page hierarchy to capture regional retail and supermarket franchise searches.",
      icon: Search,
      type: "card-small",
      tag: "Organic Reach",
    },
    {
      id: "08",
      title: "Scalable Structure",
      desc: "A future-proof modular architecture allowing new store locations, products, and categories to expand effortlessly.",
      icon: Layers,
      type: "card-small",
      tag: "Architecture",
    },
  ];

  // 7. Product chips for Bento
  const productChips = [
    { name: "Daily Groceries", icon: "🌾", count: "Staples & Grains" },
    { name: "Fresh Produce", icon: "🥬", count: "Farm-Fresh Greens" },
    { name: "Packaged FMCG", icon: "📦", count: "Leading Brands" },
    { name: "Personal Care", icon: "🧴", count: "Hygiene & Wellness" },
    { name: "Household Essentials", icon: "🧽", count: "Cleaning & Utensils" },
    { name: "Beverages & Dairy", icon: "🥛", count: "Cold & Refreshing" },
    { name: "Snacks & Confectionery", icon: "🍪", count: "Instant Delights" },
    { name: "Organic & Health", icon: "🍃", count: "Natural Foods" },
  ];

  // 10. Store formats
  const storeFormats = [
    {
      id: 0,
      name: "MINI MART",
      area: "600 – 1,000 sq. ft.",
      tag: "Neighborhood Express",
      focus: "Quick-stop daily essentials, staples, milk, bread & grab-and-go FMCG items.",
      scale: "Compact footprint with high inventory turnover and community-centric presence.",
      icon: ShoppingBag,
      diameter: "w-56 h-56 sm:w-64 sm:h-64",
      color: "border-emerald-400 bg-emerald-50/80 text-emerald-950",
      accent: "bg-emerald-600 text-white",
      badge: "Express Model",
    },
    {
      id: 1,
      name: "SUPER MART",
      area: "1,001 – 3,000 sq. ft.",
      tag: "Full Grocery & FMCG",
      focus: "Comprehensive supermarket format offering fresh produce, dairy, household, and branded packaged goods.",
      scale: "Balanced commercial footprint delivering broad product diversity and multi-checkout POS lanes.",
      icon: Store,
      diameter: "w-64 h-64 sm:w-76 sm:h-76",
      color: "border-amber-400 bg-amber-50/80 text-amber-950 shadow-xl",
      accent: "bg-amber-600 text-white",
      badge: "Most Popular",
    },
    {
      id: 2,
      name: "HYPER MART",
      area: "3,001 – 8,000 sq. ft.",
      tag: "Destination Retail Center",
      focus: "Large-scale retail hub covering multi-category groceries, lifestyle, personal care, and high-volume wholesale packs.",
      scale: "Extensive shopping aisles, dedicated bulk zones, back-room cold storage, and maximum daily footfall.",
      icon: Building,
      diameter: "w-72 h-72 sm:w-88 sm:h-88",
      color: "border-teal-500 bg-teal-50/80 text-teal-950",
      accent: "bg-teal-700 text-white",
      badge: "Flagship Format",
    },
  ];

  // 11. Store network nodes
  const networkNodes = [
    { city: "Moradabad Hub", status: "Operational Flagship", type: "running" },
    { city: "Delhi NCR Express", status: "Active Network", type: "running" },
    { city: "Noida Sector Outlets", status: "Operational Mart", type: "running" },
    { city: "Ghaziabad Super Mart", status: "Active Franchise", type: "running" },
    { city: "Bareilly Region", status: "Upcoming Store", type: "upcoming" },
    { city: "Meerut Extension", status: "Upcoming Location", type: "upcoming" },
  ];

  // 12. Tech Stack (Only real stack)
  const techOrbit = [
    { name: "Next.js", size: "w-36 h-36", role: "App Architecture & SSR", icon: Globe, color: "border-slate-800 bg-slate-900 text-white" },
    { name: "React", size: "w-32 h-32", role: "Component UI Engine", icon: Cpu, color: "border-cyan-400 bg-cyan-950/70 text-cyan-200" },
    { name: "Tailwind CSS", size: "w-40 h-40", role: "Modern Design System", icon: Layers, color: "border-teal-400 bg-teal-950/70 text-teal-200" },
    { name: "Lucide Icons", size: "w-28 h-28", role: "Scalable Vector Graphics", icon: Sparkles, color: "border-amber-400 bg-amber-950/70 text-amber-200" },
    { name: "Framer Motion", size: "w-36 h-36", role: "Micro-Interactions", icon: Zap, color: "border-purple-400 bg-purple-950/70 text-purple-200" },
    { name: "SEO & Schema", size: "w-32 h-32", role: "Local Retail Indexing", icon: Search, color: "border-emerald-400 bg-emerald-950/70 text-emerald-200" },
  ];

  // 13. Development Process Snake Flow
  const devSteps = [
    { num: "01", title: "Business Requirement Analysis", desc: "Auditing retail operations, franchise goals, and stakeholder expectations." },
    { num: "02", title: "Information Architecture", desc: "Structuring customer journeys, store locators, and franchise onboarding paths." },
    { num: "03", title: "UI/UX Strategy", desc: "Crafting a clean, vibrant retail aesthetic with intuitive navigation." },
    { num: "04", title: "Responsive Development", desc: "Building responsive Next.js layouts optimized for every screen size." },
    { num: "05", title: "Franchise Journey Integration", desc: "Engineering multi-step interactive lead qualification forms." },
    { num: "06", title: "SEO Structure", desc: "Implementing localized city keywords and structured schema markup." },
    { num: "07", title: "Testing & Optimization", desc: "Auditing page load speed, cross-device layout integrity, and touch flows." },
    { num: "08", title: "Deployment", desc: "Production launch with continuous monitoring and automated builds." },
  ];

  // 14. Challenges & Solutions
  const challengeSolutions = [
    {
      title: "Complex Dual Audiences",
      problem: ["Everyday shoppers seeking local store goods", "Entrepreneurs seeking serious franchise opportunities"],
      solution: "Engineered a dual-funnel homepage that seamlessly separates retail discovery from the franchise investor portal without visual clutter.",
      icon: Users,
    },
    {
      title: "Large Information Hierarchy",
      problem: ["Multi-category product listings", "Multiple city locations, legal info & blogs"],
      solution: "Implemented an organized visual architecture with categorized mega-menus, structured breadcrumbs, and fast search indexing.",
      icon: Network,
    },
    {
      title: "Franchise Lead Qualification",
      problem: ["Unqualified random inquiries", "Missing documentation and city preference details"],
      solution: "Created an interactive 3-stage visual qualification journey capturing space size, budget readiness, and location preferences upfront.",
      icon: Target,
    },
    {
      title: "Future Network Expansion",
      problem: ["Rapid addition of new store outlets", "Expanding into new tier-2 and tier-3 cities"],
      solution: "Built a modular, scalable component system where new locations, product categories, and city pages deploy within minutes.",
      icon: Layers3,
    },
  ];

  // 15. Impact Orbit items
  const impactNodes = [
    { title: "Stronger Digital Identity", icon: Sparkles, desc: "Unified brand perception across all physical and online touchpoints" },
    { title: "Franchise Discovery", icon: Briefcase, desc: "Transparent store models and direct investor communication" },
    { title: "Store Visibility", icon: MapPin, desc: "Accurate geo-targeted maps and operating hours for shoppers" },
    { title: "Structured User Journey", icon: Workflow, desc: "Friction-free pathways from browsing to store visits and inquiries" },
    { title: "Scalable Content", icon: Database, desc: "Modular architecture ready for dozens of new regional stores" },
    { title: "SEO Foundation", icon: Search, desc: "High-ranking local retail and franchise search presence" },
    { title: "Responsive Experience", icon: Smartphone, desc: "Sub-second mobile loading with smooth touch interactions" },
    { title: "Lead Generation Journey", icon: Target, desc: "High-intent investor lead flow directly into CRM" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFCFB] text-slate-900 selection:bg-emerald-500 selection:text-white relative overflow-hidden font-sans">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Breadcrumb Navigation */}
      <div className="pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/80 shadow-xs hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-600" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO – SMART RETAIL EXPERIENCE */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CASE STUDY • RETAIL & FRANCHISE</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                The Buyzaar Mart
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 leading-snug">
                Building a <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">Smarter Digital Experience</span> for Modern Retail
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              A scalable retail and franchise-focused digital platform designed to connect customers, entrepreneurs, and growing Buyzaar Mart locations through one unified, high-performance experience.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://www.thebuyzaarmart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#project-overview"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Case Study</span>
                <ArrowDown className="w-4 h-4 text-emerald-600" />
              </a>
            </div>

            {/* Quick Retail Feature Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Store className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Supermarket Chain</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Franchise Portal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Smart Retail Tech</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual (Browser Mockup overlapping glowing circular elements) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Background Circular Gradients & Rotating Rings */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-emerald-300/40 via-teal-200/30 to-amber-200/40 blur-3xl -z-10 animate-pulse" style={{ animationDuration: "6s" }} />
            
            {/* Decorative Ring 1 */}
            <div className="absolute w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full border border-dashed border-emerald-400/30 -z-10 animate-spin" style={{ animationDuration: "35s" }} />
            
            {/* Decorative Ring 2 */}
            <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] rounded-full border border-teal-500/20 -z-10 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }} />

            {/* Floating Grocery / Product Bubbles */}
            <div className="absolute -top-3 left-4 sm:-top-6 sm:left-6 z-20 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-emerald-200 shadow-md flex items-center gap-2 animate-bounce" style={{ animationDuration: "4s" }}>
              <span className="text-base">🥬</span>
              <span className="text-xs font-bold text-slate-800">Fresh Produce</span>
            </div>

            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:right-6 z-20 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-amber-200 shadow-md flex items-center gap-2 animate-bounce" style={{ animationDuration: "5s" }}>
              <span className="text-base">📦</span>
              <span className="text-xs font-bold text-slate-800">FMCG Essentials</span>
            </div>

            <div className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full border border-teal-200 shadow-md flex items-center justify-center text-teal-700">
              <ShoppingCart className="w-5 h-5 animate-pulse" />
            </div>

            <div className="absolute bottom-16 -left-3 sm:-left-6 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-md flex items-center gap-1.5 text-xs font-semibold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Multi-Location Store</span>
            </div>

            {/* Browser Mockup Window */}
            <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden transform hover:-translate-y-1 hover:rotate-0.5 transition-all duration-500 group">
              {/* Browser Top Bar */}
              <div className="bg-slate-100/90 border-b border-slate-200/90 px-4 py-3 flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-3 bg-white px-3 py-1 rounded-md text-[11px] text-slate-500 font-mono flex items-center justify-between border border-slate-200">
                  <span className="truncate">https://www.thebuyzaarmart.com</span>
                  <span className="text-emerald-600 font-bold text-[10px]">LIVE</span>
                </div>
              </div>

              {/* Mockup Preview Image / Container */}
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764833084/www.thebuyzaarmart.com__Nest_Hub_Max_2_-min_paneko.png"
                  alt="The Buyzaar Mart Platform Preview by Zentrix Infotech"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold drop-shadow-md">Unified Retail & Franchise Platform</span>
                  <span className="bg-emerald-600/90 px-2.5 py-0.5 rounded-full text-[11px] font-bold">Fast Next.js</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PROJECT INFORMATION – CIRCULAR SNAPSHOT */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white/70 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
              KEY PROJECT SNAPSHOT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Core Engagement Parameters
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {infoNodes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
                >
                  {/* Circular Node Shape */}
                  <div className="relative mb-5">
                    {/* Rotating outer ring on hover */}
                    <div className="absolute -inset-2 rounded-full border border-dashed border-slate-300 group-hover:border-emerald-500 transition-all duration-500 group-hover:rotate-45" />
                    
                    <div className={`w-20 h-20 rounded-full ${item.bg} border-2 ${item.border} flex items-center justify-center shadow-inner relative z-10 transition-transform duration-300`}>
                      <Icon className={`w-9 h-9 ${item.iconColor}`} />
                    </div>

                    <span className="absolute -top-1 -right-1 z-20 text-[10px] font-extrabold bg-slate-900 text-white px-2 py-0.5 rounded-full border border-white shadow-xs">
                      {item.num}
                    </span>
                  </div>

                  {/* Stable Text Content */}
                  <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    {item.label}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-1">
                    {item.value}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {item.sub}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PROJECT OVERVIEW – RETAIL ECOSYSTEM */}
      {/* ========================================================================= */}
      <section id="project-overview" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROJECT OVERVIEW</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Turning a Neighborhood Store Vision Into a <span className="text-emerald-600">Scalable Digital Platform</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong>The Buyzaar Mart</strong> represents a modern retail and supermarket franchise ecosystem focused on making everyday shopping accessible while accelerating structured franchise expansion.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Zentrix Infotech architected the digital platform to serve as a high-trust central nervous system communicating:
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                "Brand Identity & Values",
                "Supermarket Store Experience",
                "Franchise Investment Models",
                "Wide Product Ecosystem",
                "Operational Store Locations",
                "Entrepreneur Inquiries",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80">
              <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                <span className="font-bold text-emerald-800">The Agency Mission:</span> Bridge offline retail operations with an effortless online experience, giving local shoppers immediate store clarity and ambitious franchise partners a transparent growth blueprint.
              </p>
            </div>
          </div>

          {/* Right Column: Radial Ecosystem Orbit Visualization */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            
            {/* Outer Orbit Circle */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-emerald-400/40 animate-spin" style={{ animationDuration: "50s" }} />
            
            {/* Inner Orbit Circle */}
            <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-teal-500/20" />

            {/* Central Buyzaar Core */}
            <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-600 to-amber-500 flex flex-col items-center justify-center text-white shadow-2xl shadow-emerald-600/40 border-4 border-white">
              <Store className="w-6 h-6 sm:w-8 sm:h-8 mb-1" />
              <span className="font-extrabold text-xs sm:text-sm tracking-wider text-center">BUYZAAR</span>
              <span className="text-[9px] uppercase tracking-widest opacity-90 font-medium">ECOSYSTEM</span>
            </div>

            {/* Orbiting Radial Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Node: Customers (Top) */}
              <div className="absolute -top-3 sm:top-2 pointer-events-auto bg-white px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-md flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-800">Customers</span>
              </div>

              {/* Node: Stores (Top Right) */}
              <div className="absolute top-16 right-0 sm:right-6 pointer-events-auto bg-white px-3.5 py-1.5 rounded-full border border-amber-300 shadow-md flex items-center gap-2">
                <Store className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-slate-800">Stores</span>
              </div>

              {/* Node: Products (Bottom Right) */}
              <div className="absolute bottom-14 right-0 sm:right-8 pointer-events-auto bg-white px-3.5 py-1.5 rounded-full border border-teal-300 shadow-md flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-teal-600" />
                <span className="text-xs font-bold text-slate-800">Products</span>
              </div>

              {/* Node: Franchise (Bottom) */}
              <div className="absolute -bottom-3 sm:bottom-2 pointer-events-auto bg-white px-3.5 py-1.5 rounded-full border border-orange-300 shadow-md flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-bold text-slate-800">Franchise</span>
              </div>

              {/* Node: Technology (Bottom Left) */}
              <div className="absolute bottom-14 left-0 sm:left-6 pointer-events-auto bg-white px-3.5 py-1.5 rounded-full border border-indigo-300 shadow-md flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-bold text-slate-800">Technology</span>
              </div>

              {/* Node: Locations (Top Left) */}
              <div className="absolute top-16 left-0 sm:left-4 pointer-events-auto bg-white px-3.5 py-1.5 rounded-full border border-rose-300 shadow-md flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span className="text-xs font-bold text-slate-800">Locations</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE BUSINESS CHALLENGE (Dark Premium Section) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
        
        {/* Background Decorative Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-800/80">
              THE CHALLENGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-white">
              Connecting Retail, Franchise Growth & Customer Experience
            </h2>
            <p className="text-slate-400 text-base mt-3">
              Traditional retail platforms struggle when attempting to balance local footfall generation with corporate investor onboarding.
            </p>
          </div>

          {/* 3 Large Connected Circles Flow */}
          <div className="relative">
            
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 -translate-y-1/2 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 -z-0 opacity-40" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              
              {/* Circle 1: Retail Experience */}
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 shadow-xl transition-all duration-300 group">
                <div className="w-24 h-24 rounded-full bg-emerald-950/80 border-2 border-emerald-500/50 flex flex-col items-center justify-center text-emerald-400 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-xs font-mono font-bold text-emerald-300">01</span>
                  <Store className="w-7 h-7 mt-1" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Retail Experience</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Communicating hyper-local inventory, daily value propositions, and physical grocery trustworthiness to neighborhood consumers.
                </p>
              </div>

              {/* Circle 2: Franchise Growth */}
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 shadow-xl transition-all duration-300 group">
                <div className="w-24 h-24 rounded-full bg-amber-950/80 border-2 border-amber-500/50 flex flex-col items-center justify-center text-amber-400 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-xs font-mono font-bold text-amber-300">02</span>
                  <Briefcase className="w-7 h-7 mt-1" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Franchise Growth</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Giving potential entrepreneurs comprehensive operational transparency, store format clarity, and a rapid inquiry pathway.
                </p>
              </div>

              {/* Circle 3: Digital Discovery */}
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/60 shadow-xl transition-all duration-300 group">
                <div className="w-24 h-24 rounded-full bg-teal-950/80 border-2 border-teal-500/50 flex flex-col items-center justify-center text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-xs font-mono font-bold text-teal-300">03</span>
                  <Compass className="w-7 h-7 mt-1" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Digital Discovery</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Bridging offline supermarket stores with high-ranking regional search presence, structured location finders, and fast responsiveness.
                </p>
              </div>

            </div>

          </div>

          {/* Highlighted Strategy Statement */}
          <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-amber-950/60 border border-emerald-500/30 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">
              THE UNIFYING FORMULA
            </span>
            <p className="text-base sm:text-lg font-semibold text-slate-200">
              Customers <span className="text-emerald-400">+</span> Entrepreneurs <span className="text-amber-400">+</span> Stores <span className="text-teal-400">→</span> One Connected Digital Experience
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PROJECT REQUIREMENTS (Mixed Layouts) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            STRATEGIC SCOPE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            What Buyzaar Needed
          </h2>
          <p className="text-slate-600 text-base mt-2">
            A digital platform capable of supporting both everyday retail customers and future franchise partners.
          </p>
        </div>

        {/* Mixed Grid / Layout Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, idx) => {
            const Icon = req.icon;
            const isLarge = req.type === "card-large";
            const isCircle = req.type === "circle-node";

            if (isCircle) {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-6 rounded-3xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border-2 border-emerald-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-2">
                    {req.tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{req.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{req.desc}</p>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                  isLarge ? "md:col-span-2 bg-gradient-to-br from-white via-slate-50/50 to-emerald-50/30" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">{req.id}</span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                    {req.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2 mb-2">{req.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{req.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Delivered in Architecture</span>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 6. OUR DIGITAL SOLUTION */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-emerald-50/30 to-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Circular Smart-Retail Diagram */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
              
              {/* Outer Decorative Ring */}
              <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border-2 border-dashed border-emerald-300 animate-spin" style={{ animationDuration: "40s" }} />

              {/* Central Core */}
              <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-slate-900 via-emerald-950 to-slate-900 text-white flex flex-col items-center justify-center text-center p-3 shadow-2xl border-4 border-emerald-400">
                <Cpu className="w-6 h-6 text-emerald-400 mb-1" />
                <span className="text-[11px] sm:text-xs font-extrabold tracking-wider">BUYZAAR DIGITAL</span>
                <span className="text-[9px] text-emerald-300 uppercase tracking-widest font-semibold">PLATFORM</span>
              </div>

              {/* Surrounding Connected Spheres */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                
                <div className="absolute top-2 pointer-events-auto bg-white px-3 py-1.5 rounded-full border border-emerald-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Retail Website
                </div>

                <div className="absolute top-20 right-2 sm:right-6 pointer-events-auto bg-white px-3 py-1.5 rounded-full border border-amber-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Franchise Leads
                </div>

                <div className="absolute bottom-20 right-2 sm:right-6 pointer-events-auto bg-white px-3 py-1.5 rounded-full border border-teal-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                  Store Network
                </div>

                <div className="absolute bottom-2 pointer-events-auto bg-white px-3 py-1.5 rounded-full border border-indigo-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  Smart Operations
                </div>

                <div className="absolute bottom-20 left-2 sm:left-6 pointer-events-auto bg-white px-3 py-1.5 rounded-full border border-orange-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  SEO Footprint
                </div>

                <div className="absolute top-20 left-2 sm:left-6 pointer-events-auto bg-white px-3 py-1.5 rounded-full border border-rose-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Customer Experience
                </div>

              </div>

            </div>

            {/* Right Side: Narrative + Connected 4 Steps */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
                THE ZENTRIX ARCHITECTURE
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                One Platform Connecting the Complete Buyzaar Ecosystem
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Zentrix Infotech structured the digital experience around targeted user journeys, ensuring that everyday buyers and potential franchise owners both find relevant information immediately.
              </p>

              {/* 4 Connected Circular Steps */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  SEAMLESS USER JOURNEY
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { step: "01", name: "Explore", desc: "Catalog & Store format", color: "border-emerald-400 bg-emerald-50 text-emerald-700" },
                    { step: "02", name: "Discover", desc: "Locations & Benefits", color: "border-teal-400 bg-teal-50 text-teal-700" },
                    { step: "03", name: "Enquire", desc: "Interactive Lead Flow", color: "border-amber-400 bg-amber-50 text-amber-700" },
                    { step: "04", name: "Connect", desc: "Direct Team Dialogue", color: "border-orange-400 bg-orange-50 text-orange-700" },
                  ].map((flow, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border ${flow.color} flex flex-col items-center text-center shadow-2xs hover:scale-105 transition-transform`}
                    >
                      <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-xs font-bold font-mono mb-2">
                        {flow.step}
                      </div>
                      <span className="text-sm font-bold text-slate-900">{flow.name}</span>
                      <span className="text-[11px] text-slate-500 mt-0.5">{flow.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">High-Conversion Navigation</h4>
                  <p className="text-xs text-slate-600">Reduced bounce rates by guiding visitors intuitively based on their search intent.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SMART RETAIL FEATURES – BENTO SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            CAPABILITY MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Technology Meets Everyday Retail
          </h2>
          <p className="text-slate-600 text-base mt-2">
            A comprehensive Bento grid showcasing the digital innovations powering the Buyzaar Mart platform.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Large Feature 1: Wide Product Ecosystem with floating chips */}
          <div className="lg:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-950 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
            {/* Background glowing orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-300 text-xs font-bold mb-4">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>MULTIPLE PRODUCT CATEGORIES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Wide Product Ecosystem</h3>
              <p className="text-slate-300 text-sm mt-2 max-w-xl">
                Organized multi-tier digital taxonomy allowing shoppers to browse staples, groceries, household supplies, and packaged goods effortlessly.
              </p>
            </div>

            {/* Floating Product Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8">
              {productChips.map((chip, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-emerald-400/50 hover:bg-white/15 transition-all duration-300 flex flex-col"
                >
                  <span className="text-xl mb-1">{chip.icon}</span>
                  <span className="text-xs font-bold text-white">{chip.name}</span>
                  <span className="text-[10px] text-emerald-300 mt-0.5">{chip.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Large Feature 2: Smart Store Operations */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold mb-4 border border-amber-200">
                <Cpu className="w-3.5 h-3.5" />
                <span>CENTRALIZED ARCHITECTURE</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Smart Store Operations</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Seamless synchronization from warehouse inventory to localized POS checkout and CRM updates.
              </p>
            </div>

            {/* Mini Visual Flow */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                INTEGRATED RETAIL PIPELINE
              </span>
              
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <span>Inventory</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mb-1">
                    <Barcode className="w-4 h-4" />
                  </div>
                  <span>POS</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center mb-1">
                    <Database className="w-4 h-4" />
                  </div>
                  <span>CRM</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <span>Customer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Bento Cards */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                <Barcode className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">POS-Enabled Billing</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Showcasing rapid barcode scanning, modern billing receipts, and frictionless counter transactions.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">CRM Capabilities</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Capturing shopper loyalty, repeating purchases, and customer feedback across store formats.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Uniform Branding</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ensuring coherent visual identity, signage guides, and standardized customer service touchpoints.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Localized Flexibility</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Adaptable store layouts and stock selections configured to match regional community preferences.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Responsive Experience</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Flawlessly optimized across mobile handsets, tablets, POS monitors, and desktop browsers.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">SEO Architecture</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Search-friendly franchise and city landing pages engineered for organic supermarket discovery.
            </p>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 8. FRANCHISE JOURNEY – VISUAL STORY */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-4 py-1.5 rounded-full border border-amber-800/80">
              ENTREPRENEUR ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-white">
              From Enquiry to Store Launch
            </h2>
            <p className="text-slate-400 text-base mt-2">
              A transparent, structured onboarding journey engineered to inspire investor confidence.
            </p>
          </div>

          {/* 3 Large Connected Circular Stages */}
          <div className="relative">
            
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-16 right-16 -translate-y-1/2 h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-teal-400 opacity-30" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Stage 1 */}
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/60 transition-all group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-emerald-950 border-2 border-emerald-400 flex flex-col items-center justify-center text-emerald-300 shadow-xl group-hover:scale-105 transition-transform">
                    <span className="text-2xl font-black font-mono">01</span>
                    <FileCheck2 className="w-5 h-5 mt-1" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Step 1
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">Submit Inquiry</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Initial franchise interest and digital enquiry capturing proposed location, budget tier, and commercial space readiness.
                </p>
              </div>

              {/* Stage 2 */}
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/60 transition-all group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-amber-950 border-2 border-amber-400 flex flex-col items-center justify-center text-amber-300 shadow-xl group-hover:scale-105 transition-transform">
                    <span className="text-2xl font-black font-mono">02</span>
                    <ShieldCheck className="w-5 h-5 mt-1" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Step 2
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  KYC verification, retail territory feasibility assessment, layout planning, and official partnership agreement signing.
                </p>
              </div>

              {/* Stage 3 */}
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-teal-500/60 transition-all group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-teal-950 border-2 border-teal-400 flex flex-col items-center justify-center text-teal-300 shadow-xl group-hover:scale-105 transition-transform">
                    <span className="text-2xl font-black font-mono">03</span>
                    <Rocket className="w-5 h-5 mt-1" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Step 3
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">Store Launch</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Store racking setup, initial product stocking, staff POS training, localized marketing campaigns, and grand opening.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FROM TRADITIONAL RETAIL TO SMART RETAIL (Transformation Flow) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            DIGITAL TRANSFORMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            From Chaos to Smart Retail
          </h2>
          <p className="text-slate-600 text-base mt-2">
            How modern software architecture replaces scattered manual retail friction with structured clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Traditional Retail (Scattered Circles) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-rose-50/50 border border-rose-200/80">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm uppercase tracking-wider mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span>Traditional Retail (Before)</span>
            </div>

            <div className="space-y-3">
              {[
                { title: "Inventory Confusion", desc: "Out of stock items & manual ledger inaccuracies" },
                { title: "Manual Billing Bottlenecks", desc: "Slow customer queues and unrecorded sales" },
                { title: "Limited Visibility", desc: "Zero online discovery for neighborhood customers" },
                { title: "Unstructured Franchise Flow", desc: "Unqualified phone inquiries with lost leads" },
                { title: "Isolated Store Silos", desc: "No centralized insights across branches" },
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white border border-rose-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                    <p className="text-[11px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Transformation Arrow */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 animate-pulse">
              <ArrowRight className="w-7 h-7 hidden lg:block" />
              <ArrowDown className="w-7 h-7 block lg:hidden" />
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mt-2">
              TRANSFORMED
            </span>
          </div>

          {/* Right: Smart Buyzaar Retail (Harmonious Connected Network) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200/80">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wider mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span>Smart Buyzaar Retail (After)</span>
            </div>

            <div className="space-y-3">
              {[
                { title: "Smart Inventory Sync", desc: "Real-time stock tracking and reorder alerts" },
                { title: "POS & Quick Checkout", desc: "Rapid barcode scanning and digital payment support" },
                { title: "Local SEO & Geo-Discovery", desc: "High search ranking across targeted cities" },
                { title: "High-Intent Franchise Portal", desc: "Structured KYC and qualification pipeline" },
                { title: "Centralized Customer CRM", desc: "Unified customer loyalty and repeating insights" },
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white border border-emerald-200 flex items-start gap-3 shadow-2xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 10. STORE FORMAT EXPERIENCE (3 Circles of Increasing Size) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
              RETAIL FOOTPRINTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Store Format Experience
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Three scalable store layouts designed for diverse commercial real estate opportunities.
            </p>
          </div>

          {/* 3 Large Circles of Increasing Size */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            
            {storeFormats.map((format, idx) => {
              const Icon = format.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFormat(idx)}
                  className={`rounded-full border-2 ${format.color} ${format.diameter} p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 relative group`}
                >
                  <span className={`absolute -top-3 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${format.accent}`}>
                    {format.badge}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5 text-slate-800" />
                  </div>

                  <h3 className="text-base sm:text-lg font-black tracking-tight">{format.name}</h3>
                  <span className="text-xs font-bold text-slate-700 font-mono mt-0.5">{format.area}</span>
                  <p className="text-[11px] text-slate-600 line-clamp-2 mt-1.5 max-w-[180px]">
                    {format.focus}
                  </p>
                </div>
              );
            })}

          </div>

          {/* Detailed Selected Format Panel */}
          <div className="mt-12 max-w-2xl mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-200/90 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              SELECTED FORMAT BREAKDOWN: {storeFormats[activeFormat].name}
            </span>
            <h4 className="text-xl font-bold text-slate-900 mt-3">{storeFormats[activeFormat].tag} ({storeFormats[activeFormat].area})</h4>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">{storeFormats[activeFormat].focus}</p>
            <p className="text-xs text-slate-500 mt-2 italic">{storeFormats[activeFormat].scale}</p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. STORE NETWORK – LOCATION VISUALIZATION */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            GEOGRAPHIC REACH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Growing Store Network
          </h2>
          <p className="text-slate-600 text-base mt-2">
            An abstract map and node-based visualization of current and upcoming regional locations.
          </p>
        </div>

        {/* Abstract Network Map Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-950 to-slate-900 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
          
          {/* Subtle Map Grid / Concentric Rings */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-10">
            <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 mb-3 border-2 border-white">
              <Store className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold tracking-wide">BUYZAAR CENTRAL NETWORK</h3>
            <span className="text-xs text-emerald-400 font-mono mt-1">REGIONAL STORE DISTRIBUTION</span>
          </div>

          {/* Node Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {networkNodes.map((node, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center gap-4 group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border ${
                  node.type === "running" ? "bg-emerald-950 text-emerald-400 border-emerald-500" : "bg-amber-950 text-amber-400 border-amber-500"
                }`}>
                  <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{node.city}</h4>
                  <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                    node.type === "running" ? "bg-emerald-900/60 text-emerald-300 border border-emerald-700/50" : "bg-amber-900/60 text-amber-300 border border-amber-700/50"
                  }`}>
                    {node.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Operational Outlets</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span>Upcoming Franchise Launches</span>
            </div>
            <span className="text-slate-500 italic">Expanding dynamically across Tier-2 & Tier-3 hubs</span>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 12. TECHNOLOGY STACK – RETAIL TECH ORBIT */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-800/80">
              MODERN TECH STACK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-white">
              Retail Tech Orbit
            </h2>
            <p className="text-slate-400 text-base mt-2">
              Built on battle-tested modern web technologies for maximum performance and reliability.
            </p>
          </div>

          {/* Central Core & Circular Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 max-w-5xl mx-auto">
            {techOrbit.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-full border-2 ${tech.color} ${tech.size} p-4 flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 hover:scale-108 group relative`}
                >
                  <Icon className="w-6 h-6 mb-1.5 group-hover:rotate-12 transition-transform" />
                  <h3 className="text-xs sm:text-sm font-bold tracking-tight">{tech.name}</h3>
                  <span className="text-[10px] opacity-75 mt-0.5 line-clamp-1">{tech.role}</span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. DEVELOPMENT PROCESS (Snake / Flow Path) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            ENGINEERING TIMELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            How Zentrix Infotech Built the Experience
          </h2>
          <p className="text-slate-600 text-base mt-2">
            An 8-stage continuous engineering workflow delivering high precision and speed.
          </p>
        </div>

        {/* Snake Flow Path */}
        <div className="space-y-6">
          
          {/* Row 1: Steps 01 to 04 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {devSteps.slice(0, 4).map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold font-mono text-xs flex items-center justify-center">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Phase {idx + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Connector / Flow Turn on Desktop */}
          <div className="hidden lg:flex justify-end pr-8">
            <div className="w-12 h-8 border-r-2 border-b-2 border-emerald-400 rounded-br-2xl" />
          </div>

          {/* Row 2: Steps 05 to 08 (Snake reversed) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {devSteps.slice(4, 8).map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold font-mono text-xs flex items-center justify-center">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Phase {idx + 5}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 14. CHALLENGES → SOLUTIONS */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
              STRATEGIC PROBLEM SOLVING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Challenges We Solved
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Transforming complex retail obstacles into effortless user journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challengeSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {/* Challenge Box */}
                    <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/60">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-700 block mb-1.5">
                        THE CHALLENGE
                      </span>
                      <ul className="space-y-1">
                        {item.problem.map((p, i) => (
                          <li key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                            <span className="text-rose-500 font-bold">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Down Arrow */}
                    <div className="flex justify-center">
                      <ArrowDown className="w-4 h-4 text-slate-400" />
                    </div>

                    {/* Solution Box */}
                    <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1.5">
                        THE ZENTRIX SOLUTION
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15. BUSINESS IMPACT (Radial Layout - No invented metrics) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            TANGIBLE VALUE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            A Digital Foundation Built for Growth
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Structured outcomes and capabilities established by the digital rollout.
          </p>
        </div>

        {/* Central Impact Orb + Surrounding Cards */}
        <div className="relative flex flex-col items-center">
          
          {/* Center Orb */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-600 to-amber-500 text-white flex flex-col items-center justify-center text-center p-4 shadow-2xl shadow-emerald-500/30 border-4 border-white mb-12">
            <Sparkles className="w-6 h-6 mb-1" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wider">THE IMPACT</span>
            <span className="text-[9px] uppercase tracking-widest font-semibold opacity-90">FOUNDATION</span>
          </div>

          {/* Surrounding 8 Impact Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {impactNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex items-start gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{node.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{node.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 16. WHY ZENTRIX INFOTECH */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-800/80">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-white">
              Strategy Before Code
            </h2>
            <p className="text-slate-400 text-base mt-2">
              Our 6-phase engineering philosophy ensuring long-term technical and commercial durability.
            </p>
          </div>

          {/* Connected Circular Nodes */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-12">
            {["Understand", "Structure", "Design", "Develop", "Optimize", "Scale"].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-bold shadow-md hover:border-emerald-500 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{step}</span>
                </div>
                {idx < 5 && (
                  <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-slate-900/80 border border-slate-800">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Zentrix Infotech approached <strong>The Buyzaar Mart</strong> as more than just a website — the objective was to create a resilient digital foundation capable of supporting supermarket discovery, high-intent franchise enquiries, rapid geographic store expansion, and long-term content growth.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 17. CONCLUSION & OUTCOME */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
              PROJECT SUMMARY
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Building the Digital Side of a Growing Retail Brand
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              By combining intuitive category exploration, localized store maps, and high-conversion franchise qualification workflows, the new Buyzaar Mart platform delivers an agency-grade standard for retail technology.
            </p>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 space-y-2">
              <h4 className="text-sm font-bold text-emerald-950">Key Takeaway</h4>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                A modern retail brand needs equal excellence in both consumer trust and investor onboarding. The Zentrix architecture provides the digital muscle for both.
              </p>
            </div>
          </div>

          {/* Right Column: Large Circular Outcome Graphic */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[360px]">
            
            {/* Outer Rotating Ring */}
            <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border-2 border-dashed border-emerald-400/50 animate-spin" style={{ animationDuration: "35s" }} />

            {/* Central Core */}
            <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center text-center p-3 shadow-2xl border-4 border-emerald-500">
              <Store className="w-6 h-6 text-emerald-400 mb-1" />
              <span className="text-xs sm:text-sm font-extrabold">BUYZAAR</span>
              <span className="text-[9px] text-emerald-300 font-semibold uppercase">OUTCOME</span>
            </div>

            {/* Orbiting Checkmark Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              <div className="absolute -top-2 bg-white px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Retail Experience
              </div>

              <div className="absolute top-16 right-0 sm:right-4 bg-white px-3.5 py-1.5 rounded-full border border-amber-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                Franchise Growth
              </div>

              <div className="absolute bottom-16 right-0 sm:right-4 bg-white px-3.5 py-1.5 rounded-full border border-teal-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Store Visibility
              </div>

              <div className="absolute -bottom-2 bg-white px-3.5 py-1.5 rounded-full border border-indigo-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Customer Trust
              </div>

              <div className="absolute bottom-16 left-0 sm:left-4 bg-white px-3.5 py-1.5 rounded-full border border-rose-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-600" />
                SEO Footprint
              </div>

              <div className="absolute top-16 left-0 sm:left-4 bg-white px-3.5 py-1.5 rounded-full border border-cyan-300 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                Scalable Growth
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 18. FINAL CTA (Premium Full-Width Dark Gradient) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
        
        {/* Background Decorative Rings & Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-emerald-500/20 pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full border border-teal-500/20 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-700/80">
            <Flame className="w-3.5 h-3.5" />
            <span>HAVE A RETAIL OR FRANCHISE IDEA?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let's Turn It Into a <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">Scalable Digital Experience.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Zentrix Infotech designs and develops modern digital platforms for businesses that need more than just a website.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-base border border-slate-700 shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Explore More Projects</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
