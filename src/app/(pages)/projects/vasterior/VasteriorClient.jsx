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
  Code2,
  MonitorSmartphone,
  Building2,
  Check,
  Phone,
  Compass,
  Award,
  Lightbulb,
  Share2,
  Workflow,
  Target,
  Heart,
  BookOpen,
  Send,
  Star,
  Users,
  Mail,
  Palette,
  Eye,
  Home,
  Grid,
  Sun,
  Hexagon,
  BarChart3,
  Briefcase,
  ChevronRight,
  MessageSquare,
  TrendingUp,
  MapPin,
  Clock,
  Maximize2,
  MousePointerClick,
  CheckCircle,
  HelpCircle,
  ArrowDown,
  Flame,
  Camera,
} from "lucide-react";

// ─── Brand colours ────────────────────────────────────────────────
const BLUE_PRIMARY = "#1769AA";
const BLUE_DEEP = "#102A43";
const BLUE_LIGHT = "#EAF4FF";
const BLUE_PALE = "#F4F9FF";
const BLUE_ACCENT = "#3B82C4";
const BODY_TEXT = "#425466";

export default function VasteriorClient() {
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const [activeServiceCategory, setActiveServiceCategory] = useState("all");

  // ── 1. Summary Circular Nodes ──────────────────────────────────
  const summaryDetails = [
    {
      num: "01",
      label: "CLIENT",
      value: "Vasterior",
      sub: "Interior & MahaVastu Studio",
      icon: <Home className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
      badgeBg: "bg-blue-50/90 text-blue-900 border-blue-200/80",
      iconBg: "bg-gradient-to-br from-blue-500/15 via-sky-400/10 to-blue-50",
      glowBg: "from-blue-400/20 to-sky-300/10",
      borderHover: "hover:border-blue-400",
      pillIcon: <Home className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "02",
      label: "INDUSTRY",
      value: "Interior Design & Architecture",
      sub: "MahaVastu Consultancy",
      icon: <Compass className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
      badgeBg: "bg-indigo-50/90 text-indigo-900 border-indigo-200/80",
      iconBg: "bg-gradient-to-br from-indigo-500/15 via-blue-400/10 to-indigo-50",
      glowBg: "from-indigo-400/20 to-blue-300/10",
      borderHover: "hover:border-indigo-400",
      pillIcon: <Sparkles className="w-3.5 h-3.5 text-indigo-500" />,
    },
    {
      num: "03",
      label: "PROJECT TYPE",
      value: "Website Design & Dev",
      sub: "Premium Brand Experience",
      icon: <Globe className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
      badgeBg: "bg-blue-50/90 text-blue-900 border-blue-200/80",
      iconBg: "bg-gradient-to-br from-blue-500/15 via-cyan-400/10 to-sky-50",
      glowBg: "from-blue-400/20 to-cyan-300/10",
      borderHover: "hover:border-blue-400",
      pillIcon: <Globe className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "04",
      label: "DEVELOPED BY",
      value: "Zentrix Infotech",
      sub: "Architecture & UI/UX Design",
      icon: <Award className="w-5 h-5 text-sky-600" />,
      badgeBg: "bg-sky-50/90 text-sky-900 border-sky-200/80",
      iconBg: "bg-gradient-to-br from-sky-500/15 via-blue-500/10 to-sky-50",
      glowBg: "from-sky-400/20 to-blue-300/10",
      borderHover: "hover:border-sky-400",
      pillIcon: <Award className="w-3.5 h-3.5 text-sky-600" />,
    },
  ];

  // ── 2. Client Requirements ─────────────────────────────────────
  const clientRequirements = [
    {
      num: "01",
      title: "Premium Brand Identity",
      desc: "Establish a polished digital presence appropriate for a multidisciplinary interior design studio combining contemporary design and traditional spatial principles.",
      icon: <Star className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tag: "Brand Aesthetic",
    },
    {
      num: "02",
      title: "Service Discovery",
      desc: "Present interior design, MahaVastu consultation, spatial flow planning, styling, renovation, and project management consultancy services clearly and accessibly.",
      icon: <Layers className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
      tag: "Information Architecture",
    },
    {
      num: "03",
      title: "Visual Storytelling",
      desc: "Use architectural and interior imagery to communicate design possibilities, spatial transformation, and the studio's creative sensibility.",
      icon: <Camera className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tag: "Visual Communication",
    },
    {
      num: "04",
      title: "Brand Credibility",
      desc: "Introduce the team's expertise, design philosophy, and collaborative approach to help prospective clients understand the studio's methodology.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      tag: "Trust Signals",
    },
    {
      num: "05",
      title: "Consultation Journey",
      desc: "Make it easy for visitors to explore services and enquire about a residential or commercial project through clear, frictionless pathways.",
      icon: <Send className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tag: "Conversion Focus",
    },
    {
      num: "06",
      title: "Responsive Experience",
      desc: "Support users browsing on desktops, tablets, and mobile devices with consistent layouts, optimised imagery, and touch-friendly interactions.",
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
      tag: "Multi-Device",
    },
  ];

  // ── 3. Challenges & Solutions ──────────────────────────────────
  const challengesAndSolutions = [
    {
      challenge: "Communicating a Multidisciplinary Brand",
      challengeDesc:
        "Interior design, spatial planning, and MahaVastu consultation each require clear explanations while remaining part of one coherent brand experience.",
      solution: "Structured Service Architecture",
      solutionDesc:
        "Organized Vasterior's broad service offering into understandable categories, allowing visitors to discover relevant design and consultation solutions without fragmentation.",
      icon: <Layers className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      challenge: "Balancing Visuals and Information",
      challengeDesc:
        "Architectural imagery must create visual impact without making service descriptions and supporting content difficult to read or navigate.",
      solution: "Clear Information Hierarchy",
      solutionDesc:
        "Combined strong headings, concise supporting copy, and well-organized sections to ensure the brand's expertise remains understandable alongside rich visual presentation.",
      icon: <Eye className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
    },
    {
      challenge: "Establishing Trust",
      challengeDesc:
        "Visitors need to understand the studio's approach, team, services, and consultation process before taking the next step toward a project enquiry.",
      solution: "Brand Story & Team Presentation",
      solutionDesc:
        "Brought together the studio's philosophy, team backgrounds, and collaborative approach to help visitors understand the people and thinking behind the brand.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
    },
    {
      challenge: "Creating a Clear Enquiry Journey",
      challengeDesc:
        "The website should guide visitors from discovering a service to exploring relevant details and contacting the team without unnecessary friction.",
      solution: "Consultation-Focused Experience",
      solutionDesc:
        "Created clear pathways toward project enquiries and expert consultations, helping interested visitors move efficiently from browsing to engagement.",
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
    },
  ];

  // ── 4. Key Features ────────────────────────────────────────────
  const keyFeatures = [
    {
      id: "showcase",
      title: "01. Interior Design Showcase",
      subtitle: "Visual Presentation of Spaces & Materials",
      desc: "A rich visual exploration of interior design services, materials, lighting concepts, furniture selections, color palettes, and spatial transformations — helping visitors envision their own possibilities.",
      points: [
        "High-quality interior imagery with refined framing and composition",
        "Service-specific visual storytelling for each design discipline",
        "Material, lighting, and furniture presentation in context",
      ],
      icon: <Home className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
      badge: "Visual Excellence",
    },
    {
      id: "mahavastu",
      title: "02. MahaVastu & Spatial Planning",
      subtitle: "Dedicated Consultation Content",
      desc: "Dedicated content explaining Vastu consultation, spatial flow planning, Vastu gridding surveys, and related services — making traditional principles accessible to contemporary audiences.",
      points: [
        "Clear explanation of MahaVastu principles and their modern application",
        "Spatial flow planning service breakdowns with illustrative context",
        "Vastu gridding survey capabilities and MahaVastu Yogdan explained",
      ],
      icon: <Compass className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
      badge: "Spatial Harmony",
    },
    {
      id: "service-discovery",
      title: "03. Service Discovery",
      subtitle: "Structured Navigation for All Disciplines",
      desc: "A structured way to explore the studio's design and consultancy offerings — covering interior design, spatial planning, Vastu styling, renovation, and project management — without overwhelming visitors.",
      points: [
        "Organized service categories for intuitive navigation",
        "Each service presented with scope, approach, and relevant imagery",
        "Clear discovery paths from general exploration to specific enquiry",
      ],
      icon: <Layers className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
      badge: "Organized & Clear",
    },
    {
      id: "brand-story",
      title: "04. Brand Story & Team",
      subtitle: "Philosophy, People & Studio Approach",
      desc: "An introduction to the studio's design philosophy and team, helping visitors understand the expertise, values, and collaborative approach behind Vasterior's multidisciplinary practice.",
      points: [
        "Studio philosophy connecting aesthetics, functionality, and spatial harmony",
        "Team expertise profiles establishing credibility and trust",
        "Brand narrative communicating the studio's methodology",
      ],
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      badge: "Authenticity",
    },
    {
      id: "aura-journal",
      title: "05. Design Journal — Aura",
      subtitle: "Editorial Space for Design Insights",
      desc: "A dedicated editorial area for design philosophy, spatial harmony, and insights connecting Vastu principles with modern living — providing ongoing value for visitors and supporting SEO discoverability.",
      points: [
        "Design philosophy articles bridging Vastu principles and contemporary interiors",
        "Editorial content on spatial harmony and considered living",
        "Organic search anchor attracting architecture and design audiences",
      ],
      icon: <BookOpen className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
      badge: "Editorial & SEO",
    },
    {
      id: "blog-content",
      title: "06. Blog & Educational Content",
      subtitle: "Interiors, Vastu Guidance & Design Topics",
      desc: "An organized content experience for articles about interiors, spatial planning, Vastu guidance, and design-related topics — establishing the studio as a knowledgeable resource for prospective clients.",
      points: [
        "Categorized blog content covering interior design and Vastu topics",
        "Design insights supporting visitor education before consultation",
        "Content architecture supporting long-term search discoverability",
      ],
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      badge: "Content Hub",
    },
    {
      id: "contact-consultation",
      title: "07. Contact & Consultation",
      subtitle: "Frictionless Enquiry Pathways",
      desc: "Contact information and an enquiry form supporting visitors interested in discussing a residential or commercial project — designed to make the first step toward consultation as straightforward as possible.",
      points: [
        "Clean enquiry form capturing project details and requirements",
        "Direct communication channels for immediate response",
        "Contextual enquiry access embedded within service sections",
      ],
      icon: <Send className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
      badge: "Conversion Focus",
    },
    {
      id: "collaborators",
      title: "08. Collaborator Network",
      subtitle: "Professional Partnerships & Disciplines",
      desc: "A section showcasing professional collaboration across related disciplines — including architecture, contracting, and design services — communicating the studio's broad network and delivery capability.",
      points: [
        "Collaborative partner disciplines presented with context",
        "Cross-discipline network reinforcing project delivery confidence",
        "Professional associations supporting brand authority",
      ],
      icon: <Share2 className="w-5 h-5 text-emerald-600" />,
      badge: "Network & Trust",
    },
  ];

  // ── 5. Services Ecosystem ──────────────────────────────────────
  const servicesEcosystem = [
    {
      id: "interior-design",
      title: "Interior Designing",
      category: "interior",
      desc: "Full-scope interior design covering space planning, material selection, colour palettes, furniture, and bespoke finishing for residential and commercial spaces.",
      icon: <Home className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tags: ["Residential", "Commercial", "Space Planning"],
    },
    {
      id: "spatial-flow",
      title: "Spatial Flow Planning",
      category: "interior",
      desc: "Strategic planning of spatial movement, circulation, and functional zones to create environments that feel natural, balanced, and purposefully arranged.",
      icon: <Layout className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
      tags: ["Flow Design", "Zoning", "Functional Layout"],
    },
    {
      id: "vastu-styling",
      title: "Vastu Styling",
      category: "interior",
      desc: "Integrating Vastu principles into interior styling decisions — colours, materials, placements, and directional elements — to create spaces aligned with spatial harmony.",
      icon: <Sun className="w-6 h-6 text-amber-500" />,
      tags: ["Vastu Principles", "Spatial Harmony", "Styling"],
    },
    {
      id: "furniture-lighting",
      title: "Furniture, Lighting & Design Solutions",
      category: "interior",
      desc: "Curated furniture selection, custom lighting design, and integrated design solutions combining aesthetic appeal with functional excellence.",
      icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
      tags: ["Furniture", "Lighting", "Bespoke Solutions"],
    },
    {
      id: "mahavastu-consultation",
      title: "MahaVastu Consultation",
      category: "vastu",
      desc: "Expert MahaVastu consultation applying ancient Vastu principles to modern living and working environments for enhanced wellbeing and spatial balance.",
      icon: <Compass className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tags: ["MahaVastu", "Expert Consultation", "Wellbeing"],
    },
    {
      id: "vastu-gridding",
      title: "Vastu Gridding Surveys",
      category: "vastu",
      desc: "Systematic Vastu gridding surveys mapping energy zones and directional influences to provide accurate spatial analysis for design and renovation decisions.",
      icon: <Grid className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
      tags: ["Gridding Survey", "Energy Mapping", "Analysis"],
    },
    {
      id: "mahavastu-yogdan",
      title: "MahaVastu Yogdan",
      category: "vastu",
      desc: "A specialized MahaVastu offering addressing specific spatial challenges through targeted Yogdan practices for improved spatial energy and living quality.",
      icon: <Hexagon className="w-6 h-6 text-indigo-600" />,
      tags: ["Yogdan", "Spatial Energy", "Specialized"],
    },
    {
      id: "vastu-renovation",
      title: "Vastu Renovation",
      category: "project",
      desc: "Renovation planning and execution guided by Vastu principles, transforming existing spaces to achieve better spatial alignment and functional harmony.",
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      tags: ["Renovation", "Vastu Alignment", "Transformation"],
    },
    {
      id: "pmc",
      title: "Project Management Consultancy (PMC)",
      category: "project",
      desc: "End-to-end project management consultancy overseeing design execution, contractor coordination, timelines, quality control, and on-site supervision.",
      icon: <Briefcase className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tags: ["PMC", "Coordination", "Quality Control"],
    },
  ];

  const serviceCategories = [
    { id: "all", label: "All Services" },
    { id: "interior", label: "Interior & Spatial" },
    { id: "vastu", label: "MahaVastu" },
    { id: "project", label: "Project Support" },
  ];

  const filteredServices =
    activeServiceCategory === "all"
      ? servicesEcosystem
      : servicesEcosystem.filter((s) => s.category === activeServiceCategory);

  // ── 6. Development Process Steps ──────────────────────────────
  const devSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Understand the brand, target audience, services, and business objectives — mapping the design philosophy and the relationship between interior design and MahaVastu consultancy.",
    },
    {
      step: "02",
      title: "Information Architecture",
      desc: "Organize services, content, navigation, and enquiry pathways into a clear, accessible structure that reflects Vasterior's multidisciplinary offering.",
    },
    {
      step: "03",
      title: "Visual Direction",
      desc: "Establish the design language, colour system, typography, imagery selection, and component styles — using a refined blue-and-white architectural palette.",
    },
    {
      step: "04",
      title: "Interface Development",
      desc: "Build the website interface with responsive layouts, smooth interactions, optimised asset loading, and considered component architecture.",
    },
    {
      step: "05",
      title: "Content Integration",
      desc: "Organise service information, brand content, architectural imagery, and editorial resources into the design system for coherent presentation.",
    },
    {
      step: "06",
      title: "Responsive Validation",
      desc: "Review the website across different devices and viewport sizes to ensure a consistent, accessible experience on desktop, tablet, and mobile.",
    },
    {
      step: "07",
      title: "Quality & SEO Review",
      desc: "Check usability, links, metadata, content hierarchy, heading structure, and implemented technical requirements for search discoverability.",
    },
    {
      step: "08",
      title: "Final Refinement",
      desc: "Polish spacing, visual consistency, image presentation, and responsive behaviour — ensuring the finished experience feels as considered as the spaces Vasterior creates.",
    },
  ];

  // ── 7. Business Value / Results ────────────────────────────────
  const businessImpacts = [
    {
      title: "Brand Presentation",
      desc: "A cohesive digital platform for communicating Vasterior's identity, philosophy, and multidisciplinary design expertise.",
      icon: <Star className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      title: "Service Clarity",
      desc: "A structured way to discover interior design and consultancy offerings — from spatial planning to MahaVastu — without overwhelming visitors.",
      icon: <Layers className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
    },
    {
      title: "Visual Engagement",
      desc: "An image-led experience suited to the architecture and interiors industry — balancing visual richness with clear information hierarchy.",
      icon: <Eye className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Content Discovery",
      desc: "A dedicated space to explore design insights, articles, and the Aura journal — building ongoing value for visitors across the funnel.",
      icon: <BookOpen className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      title: "Consultation Access",
      desc: "Clear contact opportunities and enquiry pathways for prospective clients at every stage of their browsing journey.",
      icon: <Send className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Responsive Accessibility",
      desc: "A browsing experience designed for multiple screen sizes — ensuring Vasterior reaches clients wherever they discover the brand.",
      icon: <Smartphone className="w-6 h-6 text-sky-600" />,
    },
  ];

  return (
    <main
      className="min-h-screen text-slate-800 pb-20 selection:bg-blue-100 selection:text-blue-900"
      style={{ backgroundColor: BLUE_PALE }}
    >
      {/* ======================================================== */}
      {/* 1. TOP BREADCRUMB & BACK NAVIGATION                       */}
      {/* ======================================================== */}
      <div className="pt-32 sm:pt-36 lg:pt-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors group"
            style={{ "--hover-color": BLUE_PRIMARY }}
            onMouseEnter={(e) => (e.currentTarget.style.color = BLUE_PRIMARY)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All</span>
          </Link>

          <div
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs border"
            style={{
              color: BLUE_DEEP,
              backgroundColor: BLUE_LIGHT,
              borderColor: "#93C5FD",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>Case Study · Portfolio 04</span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. HERO SECTION                                           */}
      {/* ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 overflow-hidden">
        {/* Ambient blue glows */}
        <div
          className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${BLUE_LIGHT}, transparent)` }}
        />
        <div
          className="absolute top-10 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, #DBEAFE80, transparent)` }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Brand badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide border mb-6 shadow-xs"
            style={{
              background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`,
              borderColor: "#93C5FD",
              color: BLUE_DEEP,
            }}
          >
            <Compass className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>VASTERIOR — INTERIOR DESIGN & MAHAVASTU</span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 mb-6 leading-snug sm:leading-tight tracking-tight">
            Designing a Digital Space for{" "}
            <span
              className="inline-block font-semibold"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BLUE_DEEP} 0%, ${BLUE_PRIMARY} 40%, ${BLUE_ACCENT} 70%, ${BLUE_DEEP} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Thoughtful Interiors
            </span>{" "}
            <br className="hidden md:inline" />& Vastu-Aligned Living
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-light" style={{ color: BODY_TEXT }}>
            How Zentrix Infotech translated Vasterior's philosophy of aesthetics, functionality, and spatial harmony into a considered, balanced, and refined digital experience.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.vasterior.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white active:scale-95 transition-all shadow-md hover:shadow-lg group"
              style={{
                background: `linear-gradient(90deg, ${BLUE_DEEP} 0%, ${BLUE_PRIMARY} 50%, ${BLUE_ACCENT} 100%)`,
              }}
            >
              <Globe className="w-4 h-4 text-white" />
              <span>Explore Live Website</span>
              <ExternalLink className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-white hover:bg-blue-50/60 border border-slate-300 active:scale-95 transition-all shadow-xs"
              style={{ color: BLUE_DEEP }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = BLUE_ACCENT)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
            >
              <Phone className="w-4 h-4" style={{ color: BLUE_PRIMARY }} />
              <span>Discuss Your Project</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. PROJECT SNAPSHOT NODES                                 */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryDetails.map((item, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-[2.5rem] backdrop-blur-md border-2 border-slate-200/80 ${item.borderHover} shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(23,105,170,0.14)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default`}
              style={{
                background: "linear-gradient(180deg, #ffffff 0%, #F4F9FF 60%, #ffffff 100%)",
              }}
            >
              {/* Ambient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${item.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2.5rem]`}
              />

              {/* Rotating icon orb */}
              <div className="relative mb-5 z-10">
                <div
                  className="w-20 h-20 rounded-full border-2 border-dashed p-1.5 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45"
                  style={{ borderColor: "#93C5FD" }}
                >
                  <div
                    className={`w-full h-full rounded-full ${item.iconBg} border shadow-sm flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45`}
                    style={{ borderColor: "#BFDBFE" }}
                  >
                    <div className="transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                </div>
                {/* Step badge */}
                <span
                  className="absolute -top-1 -right-1 w-6 h-6 rounded-full font-mono text-[10px] font-bold flex items-center justify-center shadow-sm border"
                  style={{
                    backgroundColor: BLUE_DEEP,
                    color: "#93C5FD",
                    borderColor: "#93C5FD50",
                  }}
                >
                  {item.num}
                </span>
              </div>

              {/* Info */}
              <div className="relative z-10 w-full mb-4">
                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-blue-700 transition-colors mb-2">
                  {item.label}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-tight group-hover:text-blue-950 transition-colors">
                  {item.value}
                </h3>
              </div>

              {/* Bottom pill */}
              <div className="relative z-10 pt-3 border-t border-slate-100 w-full flex justify-center">
                <div
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium ${item.badgeBg} border shadow-xs`}
                >
                  {item.pillIcon}
                  <span>{item.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FEATURED WEBSITE PREVIEW MOCKUP                        */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div
          className="relative rounded-3xl overflow-hidden border shadow-xl p-3 sm:p-5"
          style={{
            background: `linear-gradient(180deg, ${BLUE_LIGHT} 0%, #EFF6FF80 100%)`,
            borderColor: "#BFDBFE",
          }}
        >
          {/* Browser chrome */}
          <div className="flex items-center justify-between px-3 py-2.5 mb-2 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/70">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div
              className="flex items-center gap-2 px-4 py-1 rounded-md bg-slate-100/80 border border-slate-200/60 text-xs font-mono max-w-xs truncate"
              style={{ color: BODY_TEXT }}
            >
              <Globe className="w-3 h-3 text-slate-400" />
              <span>https://www.vasterior.com/</span>
            </div>
            <a
              href="https://www.vasterior.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium inline-flex items-center gap-1 hover:opacity-80"
              style={{ color: BLUE_PRIMARY }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Website screenshot */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764762213/www.vasterior.com__Nest_Hub_Max_-min_j0vfbc.png"
              alt="Vasterior Interior Design & MahaVastu Website by Zentrix Infotech"
              className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. PROJECT OVERVIEW                                        */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div
          className="p-8 sm:p-12 lg:p-14 rounded-[2.5rem] bg-white border border-slate-200/90 shadow-sm relative overflow-hidden"
        >
          {/* Background glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: `radial-gradient(circle, ${BLUE_LIGHT}80, transparent)` }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text column */}
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-6 shadow-xs"
                style={{
                  color: BLUE_DEEP,
                  background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`,
                  borderColor: "#93C5FD",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
                <span>01. PROJECT OVERVIEW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-[1.2] tracking-tight">
                Translating Design Philosophy into a{" "}
                <span
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${BLUE_DEEP} 0%, ${BLUE_PRIMARY} 40%, ${BLUE_ACCENT} 70%, ${BLUE_DEEP} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Considered Digital Experience
                </span>
              </h2>

              <div className="space-y-4 leading-relaxed text-base sm:text-lg font-light" style={{ color: BODY_TEXT }}>
                <p>
                  <strong className="font-semibold text-slate-900">Vasterior</strong> brings together contemporary interior design, functional space planning, and MahaVastu consultation to create spaces that reflect individual lifestyles and aspirations.
                </p>
                <p>
                  With a philosophy centred on the relationship between aesthetics, functionality, and spatial harmony, Vasterior offers services spanning interior design, Vastu consultation, spatial flow planning, styling, renovation, and project management consultancy.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Zentrix Infotech</strong> was commissioned to create a digital experience presenting this multidisciplinary design brand online — communicating Vasterior's services, design philosophy, and expertise through a structured, visually engaging website experience.
                </p>
              </div>
            </div>

            {/* Cards column */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1 */}
              {[
                {
                  icon: <Home className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
                  num: "01",
                  title: "Contemporary Interiors",
                  desc: "Space planning, materials, lighting, and bespoke design solutions for modern living.",
                  badge: "Interior Design",
                  accentColor: BLUE_PRIMARY,
                  lightBg: BLUE_LIGHT,
                },
                {
                  icon: <Compass className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
                  num: "02",
                  title: "MahaVastu Alignment",
                  desc: "Expert Vastu consultation, spatial gridding surveys, and harmony-focused design.",
                  badge: "Spatial Harmony",
                  accentColor: BLUE_ACCENT,
                  lightBg: "#EEF2FF",
                },
                {
                  icon: <Layout className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
                  num: "03",
                  title: "Spatial Flow",
                  desc: "Functional zone planning and circulation design for balanced, purposeful environments.",
                  badge: "Flow Planning",
                  accentColor: BLUE_PRIMARY,
                  lightBg: BLUE_LIGHT,
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`group relative p-6 rounded-[2rem] border-2 border-slate-200/80 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default ${i === 2 ? "sm:col-span-2" : ""}`}
                  style={{ background: `linear-gradient(180deg, #ffffff, ${card.lightBg}40)` }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = card.accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                >
                  <div className="absolute top-0 right-0 w-28 h-28 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" style={{ backgroundColor: `${card.accentColor}15` }} />

                  <div className="relative mb-4 z-10">
                    <div
                      className="w-14 h-14 rounded-full border-2 border-dashed p-1 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45"
                      style={{ borderColor: `${card.accentColor}60` }}
                    >
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45"
                        style={{ backgroundColor: `${card.accentColor}15` }}
                      >
                        {card.icon}
                      </div>
                    </div>
                    <span
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full font-mono text-[10px] font-bold flex items-center justify-center shadow-xs"
                      style={{
                        backgroundColor: BLUE_DEEP,
                        color: "#93C5FD",
                        border: "1px solid #93C5FD50",
                      }}
                    >
                      {card.num}
                    </span>
                  </div>

                  <div className="relative z-10 w-full mb-3">
                    <h4 className="font-serif font-bold text-slate-900 text-lg mb-1.5 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs leading-relaxed font-light" style={{ color: BODY_TEXT }}>
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 w-full flex justify-center relative z-10">
                    <span
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold border shadow-xs"
                      style={{
                        backgroundColor: `${card.accentColor}10`,
                        color: card.accentColor,
                        borderColor: `${card.accentColor}40`,
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. CLIENT REQUIREMENTS                                     */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        {/* Section header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{
              color: BLUE_DEEP,
              background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`,
              borderColor: "#93C5FD",
            }}
          >
            <Target className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>02. UNDERSTANDING THE CLIENT'S REQUIREMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            What Vasterior Needed
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            The website needed to communicate Vasterior's combination of modern design and traditional spatial principles while making its services accessible to prospective clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientRequirements.map((req, idx) => (
            <div
              key={idx}
              className="group relative p-7 rounded-[2rem] bg-white border-2 border-slate-200/80 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = BLUE_ACCENT)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: `${BLUE_LIGHT}` }}
              />

              {/* Number & icon row */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                  style={{
                    background: `linear-gradient(135deg, ${BLUE_LIGHT}, #DBEAFE)`,
                    borderColor: "#BFDBFE",
                  }}
                >
                  {req.icon}
                </div>
                <span
                  className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full"
                  style={{
                    color: BLUE_PRIMARY,
                    backgroundColor: BLUE_LIGHT,
                    border: `1px solid #BFDBFE`,
                  }}
                >
                  {req.num}
                </span>
              </div>

              <h3 className="font-serif font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-900 transition-colors">
                {req.title}
              </h3>
              <p className="text-sm leading-relaxed font-light mb-4" style={{ color: BODY_TEXT }}>
                {req.desc}
              </p>

              {/* Tag */}
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border"
                style={{
                  color: BLUE_PRIMARY,
                  backgroundColor: BLUE_LIGHT,
                  borderColor: "#BFDBFE",
                }}
              >
                <Check className="w-3 h-3" />
                {req.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. CHALLENGES & SOLUTIONS                                  */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{
              color: BLUE_DEEP,
              background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`,
              borderColor: "#93C5FD",
            }}
          >
            <Zap className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>03 & 04. CHALLENGES & SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            Design Challenges & Our Approach
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            An interior design website must communicate expertise, explain services, and help potential clients understand how a consultation can meet their requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {challengesAndSolutions.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-[2rem] overflow-hidden border-2 border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500"
              style={{ background: "#ffffff" }}
            >
              {/* Challenge row */}
              <div className="p-6 sm:p-8 border-b border-dashed border-slate-200">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#FEF2F2", border: "1px solid #FECACA" }}
                  >
                    <HelpCircle className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-rose-400 block mb-1">
                      The Challenge
                    </span>
                    <h3 className="font-serif font-bold text-slate-900 text-lg mb-2">
                      {item.challenge}
                    </h3>
                    <p className="text-sm font-light leading-relaxed" style={{ color: BODY_TEXT }}>
                      {item.challengeDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              <div className="flex justify-center py-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center border"
                  style={{
                    backgroundColor: BLUE_LIGHT,
                    borderColor: "#BFDBFE",
                  }}
                >
                  <ArrowDown className="w-4 h-4" style={{ color: BLUE_PRIMARY }} />
                </div>
              </div>

              {/* Solution row */}
              <div
                className="p-6 sm:p-8 rounded-b-[2rem]"
                style={{ backgroundColor: `${BLUE_LIGHT}60` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE_LIGHT}, #DBEAFE)`,
                      border: `1px solid #BFDBFE`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase block mb-1"
                      style={{ color: BLUE_PRIMARY }}
                    >
                      Our Solution
                    </span>
                    <h3 className="font-serif font-bold text-slate-900 text-lg mb-2">
                      {item.solution}
                    </h3>
                    <p className="text-sm font-light leading-relaxed" style={{ color: BODY_TEXT }}>
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. KEY FEATURES TABBED SHOWCASE                           */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{
              color: BLUE_DEEP,
              background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`,
              borderColor: "#93C5FD",
            }}
          >
            <Grid className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>05. KEY FEATURES & FUNCTIONAL AREAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            What the Website Does
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            Eight distinct functional areas working together to communicate the brand, present services, and support consultation enquiries.
          </p>
        </div>

        {/* Tab strip */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {keyFeatures.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActiveFeatureTab(i)}
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border"
              style={
                activeFeatureTab === i
                  ? {
                      background: `linear-gradient(135deg, ${BLUE_DEEP}, ${BLUE_PRIMARY})`,
                      color: "#ffffff",
                      borderColor: BLUE_PRIMARY,
                      boxShadow: `0 4px 14px ${BLUE_PRIMARY}40`,
                    }
                  : {
                      backgroundColor: "#ffffff",
                      color: BODY_TEXT,
                      borderColor: "#E2E8F0",
                    }
              }
              onMouseEnter={(e) => {
                if (activeFeatureTab !== i) e.currentTarget.style.borderColor = BLUE_ACCENT;
              }}
              onMouseLeave={(e) => {
                if (activeFeatureTab !== i) e.currentTarget.style.borderColor = "#E2E8F0";
              }}
            >
              {f.title.split(".")[0]}.
            </button>
          ))}
        </div>

        {/* Active feature panel */}
        <div
          className="rounded-[2.5rem] p-8 sm:p-12 border-2 shadow-lg transition-all duration-500"
          style={{
            background: `linear-gradient(135deg, #ffffff 60%, ${BLUE_LIGHT}60)`,
            borderColor: "#BFDBFE",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              {/* Badge */}
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border mb-5"
                style={{
                  color: BLUE_PRIMARY,
                  backgroundColor: BLUE_LIGHT,
                  borderColor: "#BFDBFE",
                }}
              >
                {keyFeatures[activeFeatureTab].icon}
                {keyFeatures[activeFeatureTab].badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-2">
                {keyFeatures[activeFeatureTab].title}
              </h3>
              <p className="text-sm font-semibold mb-4" style={{ color: BLUE_PRIMARY }}>
                {keyFeatures[activeFeatureTab].subtitle}
              </p>
              <p className="text-base font-light leading-relaxed mb-6" style={{ color: BODY_TEXT }}>
                {keyFeatures[activeFeatureTab].desc}
              </p>

              <ul className="space-y-3">
                {keyFeatures[activeFeatureTab].points.map((pt, pi) => (
                  <li key={pi} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: `linear-gradient(135deg, ${BLUE_LIGHT}, #DBEAFE)`,
                        border: `1px solid #BFDBFE`,
                      }}
                    >
                      <Check className="w-3 h-3" style={{ color: BLUE_PRIMARY }} />
                    </span>
                    <span className="text-sm font-light leading-relaxed" style={{ color: BODY_TEXT }}>
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right visual panel */}
            <div
              className="rounded-[2rem] p-8 flex flex-col items-center justify-center text-center min-h-[260px] relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${BLUE_DEEP}, ${BLUE_PRIMARY})` }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-24 h-24 rounded-full border border-white/40" />
                <div className="absolute top-8 left-8 w-16 h-16 rounded-full border border-white/30" />
                <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full border border-white/30" />
                <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-white/20" />
              </div>

              <div
                className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border border-white/20"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <span className="text-white scale-150">{keyFeatures[activeFeatureTab].icon}</span>
              </div>

              <h4 className="text-xl font-serif font-bold text-white mb-2 relative z-10">
                {keyFeatures[activeFeatureTab].subtitle}
              </h4>
              <p className="text-sm font-light text-blue-100 leading-relaxed relative z-10 max-w-xs">
                Part of Vasterior's considered digital experience designed by Zentrix Infotech.
              </p>

              {/* Bottom step indicator */}
              <div className="relative z-10 flex gap-1.5 mt-6">
                {keyFeatures.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFeatureTab(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === activeFeatureTab ? "20px" : "6px",
                      height: "6px",
                      backgroundColor: i === activeFeatureTab ? "#ffffff" : "rgba(255,255,255,0.4)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. SERVICES ECOSYSTEM                                      */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{
              color: BLUE_DEEP,
              background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`,
              borderColor: "#93C5FD",
            }}
          >
            <Workflow className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>06. SERVICE ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            Vasterior's Connected Services
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            Nine interconnected disciplines presented through a connected visual system, making it easier for visitors to understand how different offerings fit within Vasterior's overall practice.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveServiceCategory(cat.id)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border"
              style={
                activeServiceCategory === cat.id
                  ? {
                      background: `linear-gradient(135deg, ${BLUE_DEEP}, ${BLUE_PRIMARY})`,
                      color: "#ffffff",
                      borderColor: BLUE_PRIMARY,
                    }
                  : {
                      backgroundColor: "#ffffff",
                      color: BODY_TEXT,
                      borderColor: "#E2E8F0",
                    }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group relative p-6 rounded-[2rem] bg-white border-2 border-slate-200/80 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = BLUE_ACCENT)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `linear-gradient(90deg, ${BLUE_DEEP}, ${BLUE_PRIMARY}, ${BLUE_ACCENT})` }}
              />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${BLUE_LIGHT}, #DBEAFE)`,
                    border: `1px solid #BFDBFE`,
                  }}
                >
                  {service.icon}
                </div>
                <span
                  className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full"
                  style={{
                    color: BLUE_PRIMARY,
                    backgroundColor: BLUE_LIGHT,
                    border: `1px solid #BFDBFE`,
                  }}
                >
                  0{idx + 1}
                </span>
              </div>

              <h4
                className="font-serif font-bold text-slate-900 text-base mb-2 group-hover:text-blue-900 transition-colors"
              >
                {service.title}
              </h4>
              <p className="text-xs leading-relaxed font-light mb-4" style={{ color: BODY_TEXT }}>
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="text-[10px] px-2.5 py-1 rounded-full font-medium border"
                    style={{
                      color: BLUE_ACCENT,
                      backgroundColor: `${BLUE_LIGHT}80`,
                      borderColor: "#BFDBFE",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. DEVELOPMENT WORKFLOW                                   */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{
              color: BLUE_DEEP,
              background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`,
              borderColor: "#93C5FD",
            }}
          >
            <Clock className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>09. PROJECT WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            How We Built It
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            A structured eight-stage design and development process, from discovery through final refinement.
          </p>
        </div>

        {/* Horizontal timeline (desktop), vertical (mobile) */}
        <div
          className="relative rounded-[2.5rem] p-8 sm:p-12 border"
          style={{
            background: `linear-gradient(135deg, #ffffff 60%, ${BLUE_LIGHT}50)`,
            borderColor: "#BFDBFE",
          }}
        >
          {/* Desktop: horizontal connector */}
          <div className="hidden lg:block absolute top-[9.5rem] left-16 right-16 h-0.5" style={{ backgroundColor: `${BLUE_LIGHT}` }}>
            <div
              className="h-full"
              style={{ background: `linear-gradient(90deg, ${BLUE_DEEP}, ${BLUE_PRIMARY}, ${BLUE_ACCENT}, ${BLUE_PRIMARY})` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {devSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Mobile: vertical connector */}
                {idx < devSteps.length - 1 && (
                  <div
                    className="lg:hidden absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-8 mt-1"
                    style={{ background: `linear-gradient(180deg, ${BLUE_PRIMARY}, ${BLUE_ACCENT})` }}
                  />
                )}

                {/* Step node */}
                <div className="relative mb-4 z-10">
                  <div
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center font-mono font-bold text-sm transition-all duration-400 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE_DEEP}, ${BLUE_PRIMARY})`,
                      borderColor: `${BLUE_ACCENT}60`,
                      color: "#ffffff",
                      boxShadow: `0 4px 14px ${BLUE_PRIMARY}40`,
                    }}
                  >
                    {step.step}
                  </div>
                </div>

                <h4
                  className="font-serif font-bold text-slate-900 text-sm mb-2 group-hover:text-blue-900 transition-colors"
                >
                  {step.title}
                </h4>
                <p className="text-xs font-light leading-relaxed" style={{ color: BODY_TEXT }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 11. CHALLENGES VS SOLUTIONS TABLE                         */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{
              color: BLUE_DEEP,
              background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`,
              borderColor: "#93C5FD",
            }}
          >
            <BarChart3 className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>10. CHALLENGES & DESIGN APPROACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Challenge vs. Solution
          </h2>
        </div>

        <div className="rounded-[2rem] overflow-hidden border shadow-lg" style={{ borderColor: "#BFDBFE" }}>
          {/* Table header */}
          <div
            className="grid grid-cols-2 px-6 py-4 text-xs font-bold tracking-widest uppercase text-white"
            style={{ background: `linear-gradient(90deg, ${BLUE_DEEP}, ${BLUE_PRIMARY})` }}
          >
            <span>Challenge</span>
            <span>Design Approach</span>
          </div>

          {/* Table rows */}
          {[
            ["Multiple interconnected services", "Organize services into clear categories"],
            ["A visually demanding industry", "Prioritize strong imagery and spacious layouts"],
            ["Explaining design and Vastu together", "Use clear content hierarchy and supporting diagrams"],
            ["Building confidence with visitors", "Present brand information and team details clearly"],
            ["Guiding visitors toward consultation", "Make enquiry touchpoints easy to find"],
            ["Maintaining usability across devices", "Use responsive layouts and consistent spacing"],
          ].map(([challenge, approach], i) => (
            <div
              key={i}
              className="grid grid-cols-2 px-6 py-4 text-sm border-b last:border-b-0 transition-colors hover:bg-blue-50/40"
              style={{ borderColor: "#EFF6FF" }}
            >
              <span className="font-medium text-slate-800 pr-4">{challenge}</span>
              <span className="font-light pr-4" style={{ color: BODY_TEXT }}>
                <CheckCircle2 className="w-3.5 h-3.5 inline mr-1.5 mb-0.5" style={{ color: BLUE_PRIMARY }} />
                {approach}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 12. BUSINESS VALUE / RESULTS                              */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{
              color: BLUE_DEEP,
              background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`,
              borderColor: "#93C5FD",
            }}
          >
            <TrendingUp className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>11. RESULTS & BUSINESS VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            The Value Delivered
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            A well-structured digital presence built to communicate Vasterior's identity and drive meaningful client engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessImpacts.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-7 rounded-[2rem] bg-white border-2 border-slate-200/80 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = BLUE_ACCENT)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: BLUE_LIGHT }}
              />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${BLUE_LIGHT}, #DBEAFE)`,
                    border: `1px solid #BFDBFE`,
                  }}
                >
                  {item.icon}
                </div>
              </div>

              <h4 className="font-serif font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-900 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm font-light leading-relaxed" style={{ color: BODY_TEXT }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 13. WHY ZENTRIX INFOTECH                                  */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div
          className="rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden border"
          style={{
            background: `linear-gradient(135deg, ${BLUE_DEEP} 0%, ${BLUE_PRIMARY} 60%, ${BLUE_ACCENT} 100%)`,
            borderColor: `${BLUE_ACCENT}40`,
          }}
        >
          {/* Ambient rings */}
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-6 border border-white/20 bg-white/10 text-white">
                <Award className="w-3.5 h-3.5 text-blue-200" />
                <span>12. WHY ZENTRIX INFOTECH?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                Building Digital Experiences That Match Design Ambition
              </h2>
              <p className="text-blue-100 font-light leading-relaxed mb-6 text-base">
                At Zentrix Infotech, website development combines visual presentation, structured information, and practical user experience considerations.
              </p>
              <p className="text-blue-100 font-light leading-relaxed text-base">
                For a brand like Vasterior, the digital experience needs to communicate design sensibility while keeping its services understandable and accessible. The goal is to build a cohesive online presence that brings together brand identity, service discovery, visual storytelling, and meaningful visitor interactions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "100%", label: "On-Time Delivery" },
                { num: "5★", label: "Client Satisfaction" },
                { num: "3+", label: "Years of Excellence" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-[1.5rem] text-center border border-white/15"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="text-3xl sm:text-4xl font-serif font-bold mb-1"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #93C5FD 0%, #BFDBFE 60%, #EFF6FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs font-medium text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 14. CONCLUSION & CTA                                      */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl p-8 sm:p-14 text-center text-white shadow-2xl overflow-hidden border"
          style={{
            background: `linear-gradient(135deg, ${BLUE_DEEP} 0%, #0A1929 60%, ${BLUE_DEEP} 100%)`,
            borderColor: `${BLUE_PRIMARY}40`,
          }}
        >
          {/* Ambient glows */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: `${BLUE_PRIMARY}20` }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: `${BLUE_ACCENT}15` }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-6 border"
              style={{
                color: "#93C5FD",
                backgroundColor: `${BLUE_PRIMARY}20`,
                borderColor: `${BLUE_PRIMARY}40`,
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>13. CONCLUSION — LET'S BUILD YOUR DIGITAL EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white mb-6 leading-tight">
              Your Business Deserves a Website Built With{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #93C5FD 0%, #BFDBFE 50%, #EFF6FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Clarity & Purpose
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-light">
              Vasterior represents a design philosophy where aesthetics, functionality, and spatial considerations work together. Zentrix Infotech helps businesses translate their expertise into purposeful, considered digital experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold font-serif rounded-full active:scale-95 transition-all duration-300 shadow-lg"
                style={{
                  background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, #EFF6FF)`,
                  color: BLUE_DEEP,
                  boxShadow: `0 4px 20px ${BLUE_PRIMARY}40`,
                }}
              >
                <Phone className="h-4 w-4" style={{ color: BLUE_PRIMARY }} />
                <span>Let's Connect</span>
              </Link>

              <a
                href="https://www.vasterior.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium font-serif text-white rounded-full border border-white/20 bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-300"
              >
                <Globe className="h-4 w-4 text-blue-300" />
                Explore Live Website
                <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-light">
              <span>Client: Vasterior</span>
              <span>•</span>
              <span>Industry: Interior Design & MahaVastu</span>
              <span>•</span>
              <span>Developed by: Zentrix Infotech</span>
              <span>•</span>
              <a
                href="https://www.vasterior.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "#93C5FD" }}
              >
                www.vasterior.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
