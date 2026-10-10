"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  ArrowDown,
  Award,
  Lightbulb,
  Target,
  Heart,
  BookOpen,
  Send,
  Star,
  Users,
  Phone,
  MapPin,
  Clock,
  Check,
  Workflow,
  Share2,
  Grid,
  Calendar,
  MessageSquare,
  Building2,
  ChevronRight,
  Briefcase,
  FileText,
  Activity,
  CircleDot,
  Compass,
  Sun,
  Shield,
  Feather,
  Mail,
  Sliders,
  CheckSquare,
  Info,
  Flame,
  Armchair,
  Home,
  Palette,
  Ruler,
  Maximize2,
  SlidersHorizontal,
} from "lucide-react";

// ─── Brand Colors (Zentrix Blue & White Palette) ────────────────────────
const BLUE_PRIMARY = "#1769AA";
const BLUE_DEEP = "#102A43";
const BLUE_LIGHT = "#EAF4FF";
const BLUE_PALE = "#F5F9FF";
const BLUE_ACCENT = "#3B82C4";
const BODY_TEXT = "#425466";

export default function AlluringGlimpsesClient() {
  const [activeEcosystemNode, setActiveEcosystemNode] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activeFrameworkCircle, setActiveFrameworkCircle] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  // ── 1. Project Snapshot Cards ─────────────────────────────────────
  const snapshotCards = [
    {
      num: "01",
      label: "PROJECT",
      value: "Alluring Glimpses",
      sub: "Design Studio & Lifestyle Brand",
      icon: <Palette className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "02",
      label: "INDUSTRY",
      value: "Interior & Architecture",
      sub: "Spatial Planning & Décor",
      icon: <Home className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
    },
    {
      num: "03",
      label: "STUDIO LOCATIONS",
      value: "Bijnor & Ghaziabad",
      sub: "Vasundhara, Ghaziabad & Bijnor, UP",
      icon: <MapPin className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "04",
      label: "DESIGN DIRECTION",
      value: "Premium Blue & White",
      sub: "Architectural, Editorial & Clean",
      icon: <Sparkles className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
    },
  ];

  // ── 2. The 6 Challenges ───────────────────────────────────────────
  const challenges = [
    {
      num: "01",
      title: "Diverse Creative Portfolio",
      desc: "Organizing interior design, exterior architecture, bespoke furniture, and decorative products without diluting brand identity.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "02",
      title: "Communicating Design Expertise",
      desc: "Helping visitors understand the studio's design philosophy, spatial methodology, and technical planning behind every room.",
      icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "03",
      title: "Showcasing Visual Work Effectively",
      desc: "Communicating materials, lighting, textures, and spatial flows through high-definition architectural imagery.",
      icon: <Maximize2 className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "04",
      title: "Connecting Inspiration With Enquiry",
      desc: "Guiding visitors naturally from discovering design ideas to reviewing process stages and submitting consultation requests.",
      icon: <Send className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "05",
      title: "Balancing Aesthetics With Usability",
      desc: "Creating a sophisticated, editorial design layout that remains fast, readable, and accessible on all device screens.",
      icon: <Layout className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "06",
      title: "Unifying 3 Brand Offerings",
      desc: "Harmonizing the Design Studio, Alluring Glimpses Homes, and Nazaakat handmade candles into one connected ecosystem.",
      icon: <Layers className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 3. Four Pillars of Digital Approach ───────────────────────────
  const fourPillars = [
    {
      code: "01",
      title: "Discover",
      subtitle: "Brand Story & Philosophy",
      desc: "Introduce Alluring Glimpses, its spatial philosophy, creative vision, and studio legacy across residential and commercial spaces.",
      icon: <Compass className="w-6 h-6 text-blue-600" />,
      highlight: "Brand introduction",
    },
    {
      code: "02",
      title: "Explore",
      subtitle: "Multi-Brand Offerings",
      desc: "Present Design Studio services, Alluring Glimpses Homes bespoke furniture, and Nazaakat artisanal candles in distinct sections.",
      icon: <Search className="w-6 h-6 text-sky-600" />,
      highlight: "Categorized taxonomy",
    },
    {
      code: "03",
      title: "Visualize",
      subtitle: "Architectural Storytelling",
      desc: "Use curated project galleries, material close-ups, mood boards, and ambient photography to bring design concepts to life.",
      icon: <Maximize2 className="w-6 h-6 text-blue-600" />,
      highlight: "Editorial imagery UX",
    },
    {
      code: "04",
      title: "Connect",
      subtitle: "Seamless Consultations",
      desc: "Provide clear enquiry pathways to book design consultations across studio locations in Bijnor and Vasundhara, Ghaziabad.",
      icon: <Phone className="w-6 h-6 text-sky-600" />,
      highlight: "Direct project enquiry",
    },
  ];

  // ── 4. Ecosystem Nodes (Diagram 1) ────────────────────────────────
  const ecosystemNodes = [
    {
      id: "interior",
      title: "Interior Design",
      subtitle: "Residential & Commercial Spaces",
      desc: "Custom interior concepts, spatial planning, lighting schemes, material selection, and personalized residential/office transformations.",
      icon: <Home className="w-6 h-6 text-blue-600" />,
    },
    {
      id: "exterior",
      title: "Exterior Design",
      subtitle: "Facade & Elevation Architecture",
      desc: "Architectural facade planning, structural aesthetics, exterior lighting, outdoor landscape integration, and modern curb appeal.",
      icon: <Building2 className="w-6 h-6 text-sky-600" />,
    },
    {
      id: "build",
      title: "Design & Build",
      subtitle: "Turnkey Project Execution",
      desc: "End-to-end execution combining architectural drafting, site management, artisan coordination, custom fabrication, and final handover.",
      icon: <Ruler className="w-6 h-6 text-blue-700" />,
    },
    {
      id: "homes",
      title: "Bespoke Furniture",
      subtitle: "Alluring Glimpses Homes",
      desc: "Custom upholstery, handcrafted wooden furniture, tailored cabinetry, and statement furniture engineered for modern luxury living.",
      icon: <Armchair className="w-6 h-6 text-sky-500" />,
    },
    {
      id: "nazaakat",
      title: "Nazaakat Décor",
      subtitle: "Handmade Candles & Artisanal Pieces",
      desc: "An intimate collection of soy candles, brass décor, ambient scents, and handcrafted home accessories to enrich personal environments.",
      icon: <Flame className="w-6 h-6 text-blue-600" />,
    },
  ];

  // ── 5. Process Timeline Steps (Diagram 2) ─────────────────────────
  const processSteps = [
    {
      step: "01",
      title: "Consultation & Discovery",
      desc: "Understand the client's vision, lifestyle needs, spatial requirements, site conditions, and project budget parameters.",
      icon: <Search className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "02",
      title: "Concept Development",
      desc: "Translate ideas into concrete design directions through curated mood boards, 3D visualizations, material swatches, and spatial flow sketches.",
      icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "03",
      title: "Design Finalization",
      desc: "Refine layouts, furniture blueprints, custom cabinetry drawings, color palettes, lighting specifications, and technical documentation.",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "04",
      title: "Execution & Build",
      desc: "Coordinate structural modifications, bespoke fabrication, carpentry work, electrical setups, and site supervision according to approved plans.",
      icon: <Ruler className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "05",
      title: "Styling & Finishing",
      desc: "Bring the space together with curated furniture, Nazaakat candles, accent lighting, textiles, wall art, and fine finishing touches.",
      icon: <Flame className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "06",
      title: "Handover & Aftercare",
      desc: "Conduct the final walkthrough with the client, deliver the completed environment, and provide maintenance and aftercare guidelines.",
      icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 6. Space Design Framework Circles (Diagram 3) ─────────────────
  const frameworkCircles = [
    {
      title: "Aesthetics",
      subtitle: "Visual Elegance & Texture",
      desc: "Sophisticated color palettes, refined materials, ambient lighting, and timeless architectural details that evoke emotion.",
      icon: <Palette className="w-6 h-6 text-blue-600" />,
      color: "border-blue-400 bg-blue-50/80",
    },
    {
      title: "Functionality",
      subtitle: "Ergonomics & Efficient Flow",
      desc: "Smart spatial layouts, intuitive storage solutions, durable fabrications, and practical movement patterns for daily life.",
      icon: <SlidersHorizontal className="w-6 h-6 text-sky-600" />,
      color: "border-sky-400 bg-sky-50/80",
    },
    {
      title: "Comfort",
      subtitle: "Warmth & Personal Harmony",
      desc: "Tactile materials, ergonomic seating, soothing scents, and warm lighting designed to make every room feel inviting and personal.",
      icon: <Heart className="w-6 h-6 text-indigo-600" />,
      color: "border-indigo-400 bg-indigo-50/80",
    },
  ];

  // ── 7. Key Feature Showcase Tabs ──────────────────────────────────
  const featureShowcase = [
    {
      title: "Design Studio Experience",
      subtitle: "Interior & Exterior Spatial Planning",
      desc: "Presents residential and commercial design services. The digital experience balances technical blueprint precision with artistic interior photography, communicating how spaces are transformed.",
      tags: ["Residential Design", "Commercial Interiors", "Exterior Facades", "Turnkey Build"],
      icon: <Home className="w-5 h-5 text-blue-600" />,
      details: [
        "Structured portfolio view for residential villas, apartments, and commercial offices",
        "Detailed breakdown of interior lighting, color schemes, and spatial flow",
        "Clear highlights of 3D rendering and mood board consultation options",
        "Direct connection to project enquiry workflows",
      ],
    },
    {
      title: "Alluring Glimpses Homes",
      subtitle: "Bespoke Furniture & Custom Upholstery",
      desc: "Showcases custom-crafted furniture pieces tailored to individual homes. Highlighted through clean product layouts, material details, wood finishes, and fabric textures.",
      tags: ["Bespoke Seating", "Custom Cabinetry", "Premium Woodwork", "Tailored Décor"],
      icon: <Armchair className="w-5 h-5 text-sky-600" />,
      details: [
        "Refined visual cards showcasing handcrafted sofas, dining tables, and accent chairs",
        "Material and wood finish specifications (Teak, Walnut, Brass, Velvet)",
        "Demonstrating the relationship between individual furniture items and overall room aesthetics",
        "Custom dimensions and commission enquiry options",
      ],
    },
    {
      title: "Nazaakat — Artisanal Décor & Candles",
      subtitle: "Handmade Candles & Fragrant Accessories",
      desc: "Introduces an intimate product line of handcrafted soy candles, brass holders, and ambient scents designed to bring warm mood lighting and aroma to homes.",
      tags: ["Soy Candles", "Handcrafted Brass", "Ambient Scents", "Artisanal Gifts"],
      icon: <Flame className="w-5 h-5 text-blue-600" />,
      details: [
        "Product-focused layout highlighting craftsmanship, textures, and wax pouring ethics",
        "Fragrance notes profile cards (Sandalwood, Rose, Jasmine, Amber)",
        "Elegant gift box packaging and seasonal gift set showcases",
        "Direct order enquiry and stockist details",
      ],
    },
    {
      title: "Design Philosophy & Brand Story",
      subtitle: "Aesthetics + Functionality + Comfort",
      desc: "Communicates the studio's core philosophy—believing that great spaces should harmoniously balance visual beauty, daily functional utility, and emotional warmth.",
      tags: ["Harmonious Living", "Detail Focus", "Spatial Aesthetics", "Transformative Design"],
      icon: <Sparkles className="w-5 h-5 text-sky-600" />,
      details: [
        "Editorial story layout featuring quotes from lead designers",
        "Architectural photography pairing materials with ambient natural lighting",
        "Values highlight: Meticulous detail, structural integrity, and personal touch",
        "Client testimonials and project transformation case highlights",
      ],
    },
    {
      title: "Contact & Studio Locations",
      subtitle: "Bijnor, UP & Vasundhara, Ghaziabad",
      desc: "Features studio location addresses, telephone lines, email contacts, and intuitive consultation request forms across both Bijnor and Ghaziabad studio locations.",
      tags: ["Bijnor Studio", "Vasundhara Ghaziabad", "Consultation Booking", "Project Enquiry"],
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      details: [
        "Separated location cards for Bijnor Studio and Vasundhara, Ghaziabad Studio",
        "Direct map integration and office consultation hours",
        "Intuitive consultation request form with project scope selection",
        "Click-to-call direct line access for immediate discussions",
      ],
    },
  ];

  // ── 8. Business Value Highlights ──────────────────────────────────
  const businessValues = [
    {
      title: "Unified Multi-Offering Brand",
      desc: "Integrates Design Studio services, Homes furniture, and Nazaakat candles under one harmonious architecture.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Elevated Visual Storytelling",
      desc: "Architectural layouts and editorial typography present interior design as a sophisticated art form.",
      icon: <Maximize2 className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Clear 6-Stage Process Transparency",
      desc: "Helps prospective clients understand the journey from initial discovery to final styling and handover.",
      icon: <Workflow className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Multi-Location Studio Accessibility",
      desc: "Prominently displays studio details for both Bijnor and Vasundhara, Ghaziabad for easy walk-in or phone enquiries.",
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Direct Consultation Conversion",
      desc: "Intuitive enquiry forms make it effortless for inspired visitors to request a design meeting.",
      icon: <Send className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Responsive & Accessible Architecture",
      desc: "Fast loading performance, high text contrast, and touch-friendly controls across all mobile and desktop screens.",
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F9FF] text-[#425466] font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* ── Top Navigation Bar ──────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#1769AA] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1769AA] border border-blue-200">
              Interior Design & Lifestyle
            </span>
            <a
              href="https://www.alluringglimpses.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-sm hover:shadow"
            >
              <span>Visit Official Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <header className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#F5F9FF] to-[#EAF4FF]/40 border-b border-blue-100/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#1769AA] border border-blue-200">
              Case Study
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Zentrix Infotech Portfolio
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs font-semibold text-[#1769AA]">
              Bijnor & Ghaziabad Studios
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight mb-4">
                Alluring Glimpses
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#1769AA] mb-6 leading-relaxed">
                Transforming Spaces Through Thoughtful Design & Digital Storytelling
              </p>
              <p className="text-base text-[#425466] leading-relaxed mb-8 max-w-2xl">
                Alluring Glimpses is an interior design studio and lifestyle brand bringing together spatial architecture, custom furniture (Alluring Glimpses Homes), and artisanal handmade candles (Nazaakat). Zentrix Infotech engineered a cohesive digital platform that balances technical design precision with warm visual storytelling.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.alluringglimpses.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-md hover:shadow-lg text-sm"
                >
                  <span>Explore Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hero Right Card Preview */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-16 h-16 rounded-xl bg-blue-50 p-1.5 border border-blue-100 flex items-center justify-center shadow-inner overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749292/alluring-glimpses-iota.vercel.app__Nest_Hub_Max_-min_vwnvln.png"
                      alt="Alluring Glimpses Preview"
                      className="max-h-full max-w-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#102A43]">Alluring Glimpses</h3>
                    <p className="text-xs text-slate-500">Interior & Lifestyle Décor</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-emerald-700">Official Website Live</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Studios</span>
                    <span className="font-bold text-[#102A43]">Bijnor & Vasundhara, Ghaziabad</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Core Wings</span>
                    <span className="font-bold text-[#1769AA]">Studio • Homes • Nazaakat</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Design Framework</span>
                    <span className="font-bold text-[#102A43]">Aesthetics + Function + Comfort</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="font-medium text-slate-500">Palette System</span>
                    <span className="font-bold text-[#102A43]">Zentrix Blue & White System</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Snapshot 4-Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {snapshotCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-blue-100/90 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400">{card.num}</span>
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100">{card.icon}</div>
                </div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {card.label}
                </p>
                <h4 className="text-base font-bold text-[#102A43] group-hover:text-[#1769AA] transition-colors mb-0.5">
                  {card.value}
                </h4>
                <p className="text-xs text-slate-500">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Section 1: Project Overview ─────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#F5F9FF] border border-blue-100 shadow-sm relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#102A43] mb-3">
                  Dual Focus: Technical & Artisanal
                </h3>
                <p className="text-sm text-[#425466] leading-relaxed mb-6">
                  Communicating both sides of the brand: the technical architectural planning behind well-designed rooms and the artistic details that make each environment feel personal.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Design Studio: Interior & exterior design for homes & offices</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Alluring Glimpses Homes: Bespoke furniture & custom upholstery</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Nazaakat: Handmade candles & artisanal home accessories</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
                Project Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-6">
                Bringing Services, Design Philosophy, and Décor Collections Together
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Alluring Glimpses transforms residential and commercial environments through interior design, exterior facade planning, custom furniture, and curated decor.
                </p>
                <p>
                  The digital experience designed by Zentrix Infotech serves as an editorial portfolio and service platform. It allows visitors to explore spatial concepts, understand the studio's 6-stage design process, browse custom furniture, and discover Nazaakat artisanal candles—all within a single cohesive digital journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The 6 Challenges ─────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Addressing Key Spatial & Multi-Brand UX Challenges
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Organizing distinct creative divisions into one sophisticated, accessible digital platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">{item.num}</span>
                  <div className="p-2 rounded-xl bg-blue-50">{item.icon}</div>
                </div>
                <h3 className="text-base font-bold text-[#102A43] mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Four Pillars of Digital Approach ───────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Digital Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Four Pillars of the Alluring Glimpses Experience
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              An editorial storytelling flow guiding visitors from aesthetic inspiration to project consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#F5F9FF] p-6 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-blue-200 group-hover:text-[#1769AA] transition-colors font-mono">
                      {pillar.code}
                    </span>
                    <div className="p-2 bg-white rounded-xl shadow-sm">{pillar.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] mb-1">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-[#1769AA] mb-3">{pillar.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{pillar.desc}</p>
                </div>
                <div className="pt-3 border-t border-blue-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Pillar Goal: <span className="text-[#102A43]">{pillar.highlight}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6 Diagram 1: The Design Ecosystem ──────────────── */}
      <section id="design-ecosystem" className="py-16 md:py-20 bg-[#102A43] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Interactive Visual • Diagram 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
              Alluring Glimpses Creative Ecosystem Map
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              An architectural concept map connecting the central studio hub to five creative pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Selectors */}
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Click any surrounding node to inspect:
              </p>
              {ecosystemNodes.map((node, idx) => (
                <button
                  key={node.id}
                  onClick={() => setActiveEcosystemNode(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between ${
                    activeEcosystemNode === idx
                      ? "bg-white/10 border-sky-400 text-white shadow-lg translate-x-1"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-slate-500"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10 text-sky-300">{node.icon}</div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{node.title}</h4>
                      <p className="text-xs text-slate-400">{node.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeEcosystemNode === idx ? "text-sky-400 rotate-90" : "text-slate-500"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right Center Hub Graphic & Details */}
            <div className="lg:col-span-7">
              <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center justify-center my-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-sky-500/20 animate-ping pointer-events-none" />
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#1769AA] to-[#102A43] border-4 border-sky-400/60 shadow-2xl flex flex-col items-center justify-center text-center p-2 relative z-10">
                      <span className="text-xs font-bold tracking-widest text-sky-300 uppercase">STUDIO</span>
                      <span className="text-xs font-black text-white">ALLURING GLIMPSES</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 bg-white/5 p-5 rounded-xl border-l-4 border-l-sky-400">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-sky-500/20 text-sky-300">
                      {ecosystemNodes[activeEcosystemNode].icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {ecosystemNodes[activeEcosystemNode].title}
                      </h3>
                      <p className="text-xs font-semibold text-sky-400">
                        {ecosystemNodes[activeEcosystemNode].subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {ecosystemNodes[activeEcosystemNode].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6 Diagram 2: From Vision to Reality (6-Stage Process) ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              From Vision to Reality — 6-Stage Design Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A milestone process timeline guiding spatial transformation from initial discovery to final styling.
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-6 gap-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-4 z-0" />
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveProcessStep(idx)}
                className={`relative z-10 cursor-pointer p-4 rounded-2xl transition-all border ${
                  activeProcessStep === idx
                    ? "bg-[#102A43] text-white border-[#102A43] shadow-lg -translate-y-1"
                    : "bg-[#F5F9FF] text-slate-700 border-blue-100 hover:border-blue-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      activeProcessStep === idx
                        ? "bg-sky-400/20 text-sky-300"
                        : "bg-blue-100 text-[#1769AA]"
                    }`}
                  >
                    STEP {step.step}
                  </span>
                  <div
                    className={`p-1 rounded-lg ${
                      activeProcessStep === idx ? "bg-white/10 text-white" : "bg-white text-[#1769AA]"
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xs font-bold mb-2 leading-snug">{step.title}</h3>
                <p
                  className={`text-[11px] leading-relaxed ${
                    activeProcessStep === idx ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Stepper */}
          <div className="lg:hidden space-y-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveProcessStep(idx)}
                className={`p-5 rounded-xl border transition-all ${
                  activeProcessStep === idx
                    ? "bg-[#102A43] text-white border-[#102A43]"
                    : "bg-[#F5F9FF] text-slate-700 border-blue-100"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-sky-400">{step.step}</span>
                  <h3 className="text-base font-bold">{step.title}</h3>
                </div>
                <p className="text-xs text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6 Diagram 3: Space Design Framework ────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 3
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Space Design Framework: Aesthetics + Functionality + Comfort
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The tri-fold design philosophy where visual beauty, daily utility, and human comfort meet in harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {frameworkCircles.map((circle, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFrameworkCircle(idx)}
                className={`p-7 rounded-2xl border-2 transition-all cursor-pointer ${
                  activeFrameworkCircle === idx
                    ? `${circle.color} shadow-md scale-102`
                    : "bg-white border-slate-200 hover:border-blue-200"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white shadow-sm">{circle.icon}</div>
                  <span className="text-xs font-mono font-bold text-slate-400">PILLAR 0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#102A43] mb-1">{circle.title}</h3>
                <p className="text-xs font-semibold text-[#1769AA] mb-3">{circle.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{circle.desc}</p>
              </div>
            ))}
          </div>

          {/* Central Result Banner */}
          <div className="bg-gradient-to-r from-[#102A43] via-[#1769AA] to-[#102A43] p-6 rounded-2xl text-center text-white shadow-lg">
            <h3 className="text-lg font-bold mb-1">Design Harmony = A More Thoughtful Space</h3>
            <p className="text-xs text-sky-200">
              When aesthetics, functionality, and comfort align, every room becomes a personalized sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* ── Feature Showcase Tabs ────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Key Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Website Experience & Functional Features
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Detailed exploration of key digital modules engineered for Alluring Glimpses.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {featureShowcase.map((feat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFeatureTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  activeFeatureTab === idx
                    ? "bg-[#102A43] text-white border-[#102A43] shadow-md"
                    : "bg-[#F5F9FF] text-slate-600 border-blue-100 hover:bg-blue-50"
                }`}
              >
                {feat.icon}
                <span>{feat.title}</span>
              </button>
            ))}
          </div>

          <div className="bg-[#F5F9FF] p-6 sm:p-10 rounded-2xl border border-blue-100 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-white shadow-sm">{featureShowcase[activeFeatureTab].icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#102A43]">
                      {featureShowcase[activeFeatureTab].title}
                    </h3>
                    <p className="text-xs font-semibold text-[#1769AA]">
                      {featureShowcase[activeFeatureTab].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {featureShowcase[activeFeatureTab].desc}
                </p>

                <div className="space-y-2.5 mb-6">
                  {featureShowcase[activeFeatureTab].details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#102A43]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {featureShowcase[activeFeatureTab].tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white text-[#1769AA] border border-blue-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-xs">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 p-2 border border-blue-100 mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749292/alluring-glimpses-iota.vercel.app__Nest_Hub_Max_-min_vwnvln.png"
                      alt="Alluring Glimpses Feature Preview"
                      className="max-h-full max-w-full object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-base font-bold text-[#102A43] mb-1">
                    {featureShowcase[activeFeatureTab].title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Alluring Glimpses Digital Module
                  </p>
                  <a
                    href="https://www.alluringglimpses.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all"
                  >
                    <span>View Live Feature</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Value Section ───────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Business & Brand Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Value Delivered Through Spatial Storytelling
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured digital platform empowers Alluring Glimpses to present services, furniture, and candles cohesively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F5F9FF] border border-blue-100 hover:border-blue-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center mb-4 shadow-2xs">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-[#102A43] mb-2">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conclusion CTA ───────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F5F9FF] to-white border-t border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 text-[#1769AA] border border-blue-200 flex items-center justify-center mb-6 shadow-sm">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] mb-4">
            Transforming Creative Ideas Into Thoughtful Digital Experiences
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            The Alluring Glimpses case study demonstrates how an interior studio, custom furniture division, and artisanal decor brand can unite under one elegant digital identity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.alluringglimpses.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-md text-sm"
            >
              <span>Visit Official Alluring Glimpses Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#102A43] bg-white border border-blue-200 hover:bg-blue-50 transition-all shadow-sm text-sm"
            >
              <span>Discuss Your Studio Project</span>
              <ArrowRight className="w-4 h-4 text-[#1769AA]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer copyright sub-bar */}
      <footer className="py-6 bg-[#102A43] text-slate-400 text-xs text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Zentrix Infotech. Alluring Glimpses Case Study.</p>
        </div>
      </footer>
    </div>
  );
}
