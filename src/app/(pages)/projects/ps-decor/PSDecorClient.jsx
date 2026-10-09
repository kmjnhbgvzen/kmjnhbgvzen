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
  Heart,
  Crown,
  Gem,
  Flower2,
  Camera,
  Music,
  Utensils,
  MapPin,
  CalendarCheck,
  Mail,
  Palette,
  Eye,
  BookOpen,
  MessageSquareQuote,
  Send,
  Star,
  PartyPopper,
  Wine,
} from "lucide-react";

export default function PSDecorClient() {
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const [activeServiceCategory, setActiveServiceCategory] = useState("all");

  // Summary Circular Items (Stat / Info Nodes)
  const summaryDetails = [
    {
      num: "01",
      label: "CLIENT",
      value: "PS Decor",
      sub: "Pradeep Shukla Decor",
      icon: <Crown className="w-5 h-5 text-amber-600" />,
      badgeBg: "bg-amber-50/90 text-amber-900 border-amber-200/80",
      iconBg: "bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-amber-50",
      glowBg: "from-amber-400/20 to-yellow-300/10",
      borderColor: "hover:border-amber-400",
      pillIcon: <Crown className="w-3.5 h-3.5 text-amber-600" />,
    },
    {
      num: "02",
      label: "INDUSTRY",
      value: "Wedding Planning & Décor",
      sub: "Luxury Celebrations & Events",
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      badgeBg: "bg-rose-50/90 text-rose-900 border-rose-200/80",
      iconBg: "bg-gradient-to-br from-rose-500/15 via-pink-500/10 to-rose-50",
      glowBg: "from-rose-400/20 to-pink-300/10",
      borderColor: "hover:border-rose-400",
      pillIcon: <Sparkles className="w-3.5 h-3.5 text-rose-500" />,
    },
    {
      num: "03",
      label: "PROJECT TYPE",
      value: "Website Design & Dev",
      sub: "Luxury Brand Experience",
      icon: <Globe className="w-5 h-5 text-amber-700" />,
      badgeBg: "bg-amber-50/90 text-amber-900 border-amber-200/80",
      iconBg: "bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-yellow-50",
      glowBg: "from-amber-400/20 to-orange-300/10",
      borderColor: "hover:border-amber-400",
      pillIcon: <Gem className="w-3.5 h-3.5 text-amber-600" />,
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
      borderColor: "hover:border-sky-400",
      pillIcon: <Award className="w-3.5 h-3.5 text-sky-600" />,
    },
  ];

  // Requirements Cards
  const clientRequirements = [
    {
      num: "01",
      title: "Premium Brand Identity",
      desc: "Create a sophisticated online presence that reflects the elegance, creativity, and personalized approach of a luxury wedding and event brand.",
      icon: <Crown className="w-6 h-6 text-amber-600" />,
      tag: "Brand Aesthetic",
    },
    {
      num: "02",
      title: "Visual Wedding Portfolio",
      desc: "Present wedding décor, floral arrangements, venue styling, and celebration photography in an engaging visual format that allows visitors to explore the brand's creative work.",
      icon: <Camera className="w-6 h-6 text-rose-500" />,
      tag: "Visual Showcase",
    },
    {
      num: "03",
      title: "Structured Service Discovery",
      desc: "Organize multiple offerings into clear service categories, making it easier for visitors to discover the solutions relevant to their wedding or event.",
      icon: <Layout className="w-6 h-6 text-amber-600" />,
      tag: "Information Architecture",
    },
    {
      num: "04",
      title: "Destination Wedding Promotion",
      desc: "Communicate the brand's destination wedding capabilities and showcase the possibilities of celebrations across different venues and locations.",
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      tag: "Destination Experience",
    },
    {
      num: "05",
      title: "Trust & Brand Credibility",
      desc: "Highlight the team's experience, creative expertise, planning approach, and brand story to help prospective clients understand the business.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      tag: "Social Proof & Story",
    },
    {
      num: "06",
      title: "Seamless Enquiry Experience",
      desc: "Provide a convenient way for couples and families to share their requirements and begin a consultation without friction.",
      icon: <Send className="w-6 h-6 text-amber-600" />,
      tag: "Lead Conversion",
    },
  ];

  // Challenges vs Strategic Solutions
  const challengesAndSolutions = [
    {
      challenge: "Presenting a Visually Rich Brand",
      challengeDesc:
        "Wedding décor relies heavily on visual appeal, but high-resolution galleries can easily overwhelm page hierarchy or slow down load times if not balanced carefully.",
      solution: "Image-Led Storytelling with Structured Hierarchy",
      solutionDesc:
        "Utilized image-led sections supported by structured typography, descriptive headings, balanced negative space, and fast, optimized media loading.",
      icon: <Palette className="w-6 h-6 text-amber-600" />,
    },
    {
      challenge: "Organizing Multiple Complex Services",
      challengeDesc:
        "Visitors may arrive looking for a specific offering—from mandap décor and destination weddings to catering or photography—and easily get lost.",
      solution: "Dedicated Service Categories & Clear Architecture",
      solutionDesc:
        "Organized 11+ specialized offerings into distinct, modular service hubs with rich descriptions, key highlights, and direct inquiry paths.",
      icon: <Layers className="w-6 h-6 text-sky-600" />,
    },
    {
      challenge: "Building Confidence Before Enquiry",
      challengeDesc:
        "Wedding planning involves high emotional and financial stakes; potential clients need to trust the planners before starting a consultation.",
      solution: "Team Profiles, Client Stories & Curated Editorial",
      solutionDesc:
        "Brought together the founders' story, team backgrounds, authentic client testimonials, and 'The Aura' magazine editorial content.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
    },
    {
      challenge: "Flawless Experience Across All Devices",
      challengeDesc:
        "Couples and families frequently browse wedding inspiration and share decor ideas directly from mobile phones, tablets, or laptops on the go.",
      solution: "Adaptive, Touch-First Responsive Engineering",
      solutionDesc:
        "Engineered fluid layouts, thumb-friendly tap targets, silky transitions, and responsive image scaling tailored for all screen sizes.",
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
    },
  ];

  // Key Features & Functionalities
  const keyFeatures = [
    {
      id: "portfolio",
      title: "01. Wedding Portfolio Showcase",
      subtitle: "Visual Inspiration & Event Archives",
      desc: "A rich visual presentation of weddings and pre-wedding celebrations. Allows visitors to discover diverse event themes, royal mandap designs, ambient lighting setups, and real celebration photography.",
      points: [
        "High-definition photography galleries with fluid grid layouts",
        "Categorized exploration by event type (Mehendi, Sangeet, Reception, Mandap)",
        "Immersive viewing experience highlighting intricate decor craftsmanship",
      ],
      icon: <Camera className="w-5 h-5 text-amber-600" />,
      badge: "Visual Excellence",
    },
    {
      id: "luxury-decor",
      title: "02. Luxury Wedding Décor & Styling",
      subtitle: "Bespoke Spatial Design & Ambience",
      desc: "Dedicated showcases for custom floral arrangements, royal mandap concepts, designer stage backdrops, ambient mood lighting, and personalized thematic styling.",
      points: [
        "In-depth spotlights on bespoke floral artistry & mandap geometry",
        "Thematic lighting and spatial transformation concepts",
        "Custom mood boards that help couples visualize their dream celebration",
      ],
      icon: <Flower2 className="w-5 h-5 text-rose-500" />,
      badge: "Artistry & Design",
    },
    {
      id: "destination",
      title: "03. Destination Wedding Pages",
      subtitle: "Palaces, Resorts & Scenic Locations",
      desc: "Content tailored for destination celebrations, highlighting venue settings, customized themes, regional coordination logistics, and picturesque location setups.",
      points: [
        "Comprehensive destination planning capabilities and venue showcases",
        "Multi-day celebration scheduling and guest hospitality management",
        "Location-specific decor setups adapting to palaces, beaches, and heritage resorts",
      ],
      icon: <MapPin className="w-5 h-5 text-emerald-600" />,
      badge: "Destination Ready",
    },
    {
      id: "ecosystem",
      title: "04. Comprehensive Services Ecosystem",
      subtitle: "End-to-End Event Coordination",
      desc: "Organized service pages covering complete wedding planning, venue booking, invites, hospitality, entertainment, catering, photography, and special effects.",
      points: [
        "Single digital hub unifying 11+ celebration disciplines",
        "Detailed breakdowns of scope, deliverables, and coordination perks",
        "Direct enquiry pathways embedded within each individual service page",
      ],
      icon: <Layers className="w-5 h-5 text-sky-600" />,
      badge: "Full-Spectrum",
    },
    {
      id: "team-story",
      title: "05. Team & Brand Story",
      subtitle: "The Passion & People Behind PS Decor",
      desc: "A dedicated presentation introducing Pradeep Shukla Decor, the leadership, event architects, and styling specialists whose passion brings celebrations to life.",
      points: [
        "Authentic brand narrative establishing industry credibility and trust",
        "Profiles of key coordinators and creative decorators",
        "Behind-the-scenes insights into the team's meticulous planning approach",
      ],
      icon: <Users className="w-5 h-5 text-purple-600" />,
      badge: "Authenticity",
    },
    {
      id: "aura-magazine",
      title: "06. Wedding Inspiration & Editorial Content",
      subtitle: "The Aura Magazine & Trend Guides",
      desc: "Editorial blog features and 'The Aura' magazine content provide couples with a treasure trove of wedding ideas, color palettes, decor trends, and practical planning advice.",
      points: [
        "Curated trend forecasts for upcoming wedding seasons",
        "Styling tips for color palettes, floral choices, and bridal entry ideas",
        "Organic SEO anchor attracting couples in the early ideation phase",
      ],
      icon: <BookOpen className="w-5 h-5 text-amber-600" />,
      badge: "Editorial & SEO",
    },
    {
      id: "testimonials",
      title: "07. Client Testimonials & Stories",
      subtitle: "Real Experiences from Couples & Families",
      desc: "Wedding stories and verified client testimonials help visitors understand previous client experiences, reliability, and the brand's meticulous execution on the big day.",
      points: [
        "Firsthand feedback highlighting decor execution and on-time coordination",
        "Couple testimonials celebrating personalized touches and stress-free planning",
        "High-trust social validation directly motivating consultation requests",
      ],
      icon: <MessageSquareQuote className="w-5 h-5 text-teal-600" />,
      badge: "Social Proof",
    },
    {
      id: "enquiry-journey",
      title: "08. Contact & Enquiry Journey",
      subtitle: "Frictionless Consultation Pathways",
      desc: "Intuitive contact pathways and intelligent enquiry forms giving prospective clients a seamless channel to share their wedding dates, venue preferences, and dream themes.",
      points: [
        "Multi-step interactive consultation request forms",
        "Direct call, WhatsApp, and email integration for instant communication",
        "Contextual lead capture tailored to specific service interests",
      ],
      icon: <Send className="w-5 h-5 text-amber-600" />,
      badge: "Conversion Focus",
    },
  ];

  // 11 Services Ecosystem
  const servicesEcosystem = [
    {
      id: "decor",
      title: "Wedding & Event Decorations",
      category: "decor",
      desc: "Floral styling, stage décor, majestic mandap arrangements, thematic lighting, and immersive ambient environments.",
      icon: <Flower2 className="w-6 h-6 text-amber-600" />,
      tags: ["Floral Art", "Mandap Design", "Lighting", "Stage Décor"],
    },
    {
      id: "luxury-styling",
      title: "Luxury Wedding Décor & Styling",
      category: "decor",
      desc: "Personalized visual concepts, high-end thematic installations, and premium decorative experiences tailored for royal celebrations.",
      icon: <Crown className="w-6 h-6 text-amber-600" />,
      tags: ["Bespoke Themes", "Luxury Installations", "VIP Lounges"],
    },
    {
      id: "destination-weddings",
      title: "Destination Weddings",
      category: "planning",
      desc: "End-to-end celebration planning, vendor coordination, and customized décor for heritage palaces, beach resorts, and destination venues.",
      icon: <MapPin className="w-6 h-6 text-rose-500" />,
      tags: ["Palace Weddings", "Beach Resorts", "Multi-City Logistics"],
    },
    {
      id: "venue-booking",
      title: "Wedding Venue Booking",
      category: "planning",
      desc: "Comprehensive venue discovery, site evaluations, negotiation support, and seamless coordination with venue management.",
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      tags: ["Venue Scouting", "Contract Support", "Capacity Planning"],
    },
    {
      id: "planning-management",
      title: "Wedding Planning & Management",
      category: "planning",
      desc: "Complete schedule design, vendor management, timeline synchronization, on-site supervision, and flawless day-of execution.",
      icon: <CalendarCheck className="w-6 h-6 text-blue-600" />,
      tags: ["Timeline Management", "Vendor Sync", "On-Site Coordination"],
    },
    {
      id: "invitations",
      title: "Invitations & Wedding Stationery",
      category: "creative",
      desc: "Bespoke digital and physical wedding invitations, itinerary cards, personalized welcome kits, and luxury event stationery.",
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      tags: ["Bespoke Stationery", "Digital Invites", "Welcome Kits"],
    },
    {
      id: "hospitality",
      title: "Hospitality & Guest Services",
      category: "management",
      desc: "Guest reception, personalized check-ins, transit logistics, accommodation coordination, and dedicated hospitality desks.",
      icon: <Users className="w-6 h-6 text-teal-600" />,
      tags: ["Guest Concierge", "Airport Transfers", "Luggage Logistics"],
    },
    {
      id: "entertainment",
      title: "Entertainment & Artist Management",
      category: "experience",
      desc: "Curating live bands, renowned musical artists, choreographers, celebrity performers, DJs, and traditional cultural troupes.",
      icon: <Music className="w-6 h-6 text-indigo-600" />,
      tags: ["Live Artists", "Celebrity DJs", "Choreography", "Sangeet"],
    },
    {
      id: "catering",
      title: "Catering & Food Experiences",
      category: "experience",
      desc: "Custom culinary curation, global and regional gourmet menus, interactive food stations, and premium banquet service coordination.",
      icon: <Utensils className="w-6 h-6 text-amber-600" />,
      tags: ["Gourmet Menus", "Live Counters", "Regional Delicacies"],
    },
    {
      id: "photography",
      title: "Photography & Cinematic Films",
      category: "creative",
      desc: "Artistic photography, pre-wedding shoots, cinematic wedding teasers, drone videography, and timeless wedding memory albums.",
      icon: <Camera className="w-6 h-6 text-rose-500" />,
      tags: ["Cinematic Films", "Drone Shots", "Pre-Wedding Shoots"],
    },
    {
      id: "special-effects",
      title: "Special Effects & Unique Experiences",
      category: "experience",
      desc: "Cold pyro entries, grand fog machines, floral showers, laser shows, and personalized experiential surprises for unforgettable moments.",
      icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
      tags: ["Cold Pyros", "Grand Entries", "Laser Displays", "Fog Effects"],
    },
  ];

  const filteredServices =
    activeServiceCategory === "all"
      ? servicesEcosystem
      : servicesEcosystem.filter((s) => s.category === activeServiceCategory);

  // Development Process (8 Steps)
  const devSteps = [
    {
      step: "01",
      title: "Discovery & Brand Immersion",
      desc: "Conducted deep discovery into PS Decor's brand heritage, luxury aesthetic expectations, target couples & families, and market differentiation.",
    },
    {
      step: "02",
      title: "Information Architecture & Taxonomy",
      desc: "Mapped the entire ecosystem into intuitive hierarchies—segregating services, portfolio galleries, destination planning, magazine blogs, and booking workflows.",
    },
    {
      step: "03",
      title: "Bespoke Luxury UI/UX Design",
      desc: "Crafted a warm, high-end visual language featuring champagne gold accents, elegant typography, airy whitespace, and image-forward storytelling.",
    },
    {
      step: "04",
      title: "Modern Front-End Development",
      desc: "Engineered ultra-responsive, component-driven layouts with buttery smooth micro-animations, lazy loading, and optimized asset delivery.",
    },
    {
      step: "05",
      title: "Content & Visual Asset Integration",
      desc: "Curated high-resolution celebration imagery, detailed service breakdowns, founder stories, and editorial blog content for 'The Aura'.",
    },
    {
      step: "06",
      title: "Cross-Device Responsive Optimization",
      desc: "Rigorous testing across mobile browsers, tablets, and high-DPI displays to guarantee seamless viewing for on-the-go wedding inspiration.",
    },
    {
      step: "07",
      title: "Search Engine Optimization & Metadata",
      desc: "Implemented clean semantic heading structures, rich OpenGraph cards, schema markup, and geo-targeted keywords for wedding & event searches.",
    },
    {
      step: "08",
      title: "Quality Assurance & Launch",
      desc: "Final auditing of form conversions, WhatsApp links, navigation accessibility, and lightning-fast page loading before live deployment.",
    },
  ];

  // Business Impact Highlights
  const businessImpacts = [
    {
      title: "Elevated Digital Authority",
      desc: "Positions PS Decor as a premier, high-end luxury event and wedding styling authority with an online showroom matching their real-world grandeur.",
      icon: <Crown className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "Streamlined Service Discovery",
      desc: "Visitors seamlessly explore all 11+ specialized offerings with clear clarity on scope, themes, and personalized customization options.",
      icon: <Layout className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Captivating Visual Storytelling",
      desc: "High-resolution visual galleries and themed portfolios communicate artistry and emotional resonance far better than static text.",
      icon: <Camera className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "Higher Lead Conversion Quality",
      desc: "Couples arrive well-informed about services, team pedigree, and decor capabilities, leading to more qualified consultation inquiries.",
      icon: <Send className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Dedicated Destination Weddings Hub",
      desc: "A dedicated destination wedding experience unlocks regional and destination wedding opportunities across royal palaces and luxury resorts.",
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Search-Optimized Foundation",
      desc: "Structured architecture and 'The Aura' editorial content power continuous organic discoverability for wedding and event search terms.",
      icon: <Search className="w-6 h-6 text-teal-600" />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFFDF9] text-slate-800 pb-20 selection:bg-amber-100 selection:text-amber-900">
      {/* ========================================================================= */}
      {/* 1. TOP BREADCRUMB & BACK NAVIGATION */}
      {/* ========================================================================= */}
      <div className="pt-32 sm:pt-36 lg:pt-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-amber-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800/80 bg-amber-50/80 border border-amber-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Case Study</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 overflow-hidden">
        {/* Ambient Warm Golden Glows */}
        <div className="absolute -top-16 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-300/20 via-yellow-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-gradient-to-bl from-rose-200/20 via-amber-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge: LUXURY DIGITAL EXPERIENCE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-300/80 text-amber-900 mb-6 shadow-xs">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span>PS DECOR (PRADEEP SHUKLA DECOR)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 mb-6 leading-snug sm:leading-tight md:leading-[1.3] tracking-tight">
            Crafting a{" "}
            <span
              className="inline-block font-semibold text-[#b38b22] px-1 py-0.5"
              style={{
                backgroundImage: "linear-gradient(135deg, #9a7216 0%, #b38b22 40%, #d4af37 70%, #8c6b16 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Luxury Digital Experience
            </span>{" "}
            <br className="hidden md:inline" />
            for Weddings & Celebrations
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 font-light">
            How Zentrix Infotech translated the visual grandeur of bespoke luxury wedding planning, royal mandaps, and curated celebrations into an elegant, high-conversion online platform.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.psdecor.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#b38b22] hover:bg-[#9a7216] active:scale-95 transition-all shadow-md hover:shadow-lg shadow-amber-900/20 group"
              style={{
                backgroundColor: "#b38b22",
                backgroundImage: "linear-gradient(90deg, #b38b22 0%, #c59e2b 50%, #9a7216 100%)",
              }}
            >
              <Globe className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Explore Live Website</span>
              <ExternalLink className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-amber-50/60 border border-slate-300 hover:border-amber-400 active:scale-95 transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#b38b22]" />
              <span className="text-slate-800 font-medium">Discuss Your Project</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PROJECT SNAPSHOT NODES (LUXURY CIRCULAR PODS) */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryDetails.map((item, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-[2.5rem] bg-gradient-to-b from-white via-amber-50/20 to-white/95 backdrop-blur-md border-2 border-slate-200/80 ${item.borderColor} shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(180,130,30,0.14)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default`}
            >
              {/* Background ambient radial glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${item.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2.5rem]`}
              />

              {/* Top Concentric Circular Ring with Floating Icon */}
              <div className="relative mb-5 z-10">
                {/* Outer animated dashed circle */}
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-300/80 group-hover:border-amber-500 p-1.5 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45">
                  {/* Inner Solid Gradient Circle */}
                  <div
                    className={`w-full h-full rounded-full ${item.iconBg} border border-amber-200/70 shadow-sm flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45`}
                  >
                    <div className="transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Floating Step Number Circle Badge */}
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-900 text-amber-300 font-mono text-[10px] font-bold flex items-center justify-center shadow-sm border border-amber-300/50">
                  {item.num}
                </span>
              </div>

              {/* Center Info */}
              <div className="relative z-10 w-full mb-4">
                {/* Category Label */}
                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-amber-800 transition-colors mb-2">
                  {item.label}
                </span>

                {/* Main Value Headline */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-tight group-hover:text-amber-950 transition-colors">
                  {item.value}
                </h3>
              </div>

              {/* Bottom Decorative Pill Capsule */}
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

      {/* ========================================================================= */}
      {/* 4. FEATURED PREVIEW MOCKUP */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-amber-50/50 to-slate-100/70 border border-slate-200/90 shadow-xl p-3 sm:p-5">
          {/* Browser-like window header */}
          <div className="flex items-center justify-between px-3 py-2.5 mb-2 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/70">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-slate-100/80 border border-slate-200/60 text-xs text-slate-600 font-mono max-w-xs truncate">
              <Globe className="w-3 h-3 text-slate-400" />
              <span>https://www.psdecor.in/</span>
            </div>
            <a
              href="https://www.psdecor.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-700 hover:text-amber-800 font-medium inline-flex items-center gap-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Main Website Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764834884/www.psdecor.in_-min_pvdtes.png"
              alt="PS Decor Luxury Wedding Experience by Zentrix Infotech"
              className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 1: PROJECT OVERVIEW */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="p-8 sm:p-12 lg:p-14 rounded-[2.5rem] bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/50 via-yellow-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-amber-900 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-300/80 mb-6 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>01. PROJECT OVERVIEW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-[1.2] tracking-tight">
                Translating Grandeur into an{" "}
                <span
                  className="inline-block text-[#b38b22]"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #9a7216 0%, #b38b22 40%, #d4af37 70%, #8c6b16 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Engaging Online Experience
                </span>
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg font-light">
                <p>
                  <strong className="font-semibold text-slate-900">PS Decor</strong> (Pradeep Shukla Decor) is a renowned wedding planning, event design, and coordination brand that creates deeply personalized celebrations through creative décor, thoughtful planning, and seamless on-ground coordination.
                </p>
                <p>
                  Their extensive portfolio spans wedding and event decorations, luxury styling, destination weddings, venue booking, guest hospitality, catering, entertainment curation, and cinematic photography.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Zentrix Infotech</strong> was commissioned to architect and develop a digital experience that showcases PS Decor’s creative brilliance, structures their diverse service ecosystem, and enables prospective couples to explore wedding inspiration and initiate consultations effortlessly.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1: Luxury Styling */}
              <div className="group relative p-7 rounded-[2.5rem] bg-gradient-to-b from-white via-amber-50/25 to-white/95 border-2 border-slate-200/80 hover:border-amber-400 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-400/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                
                {/* Concentric Rotating Icon Orb */}
                <div className="relative mb-4 z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-amber-300/80 group-hover:border-amber-500 p-1 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45">
                    <div className="w-full h-full rounded-full bg-amber-50 border border-amber-200/80 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                      <Crown className="w-6 h-6 text-amber-700 transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-900 text-amber-300 font-mono text-[10px] font-bold flex items-center justify-center shadow-xs border border-amber-300/50">
                    01
                  </span>
                </div>

                <div className="relative z-10 w-full mb-3">
                  <h4 className="font-serif font-bold text-slate-900 text-lg sm:text-xl mb-1.5 group-hover:text-amber-950 transition-colors">
                    Luxury Styling
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Grand mandaps, floral geometry, mood lighting & bespoke event architecture.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 w-full flex justify-center relative z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-xs">
                    Bespoke Décor
                  </span>
                </div>
              </div>

              {/* Card 2: Destination Focus */}
              <div className="group relative p-7 rounded-[2.5rem] bg-gradient-to-b from-white via-rose-50/25 to-white/95 border-2 border-slate-200/80 hover:border-rose-400 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-28 h-28 bg-rose-400/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                
                {/* Concentric Rotating Icon Orb */}
                <div className="relative mb-4 z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-rose-300/80 group-hover:border-rose-500 p-1 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45">
                    <div className="w-full h-full rounded-full bg-rose-50 border border-rose-200/80 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                      <Heart className="w-6 h-6 text-rose-600 transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-900 text-rose-300 font-mono text-[10px] font-bold flex items-center justify-center shadow-xs border border-rose-300/50">
                    02
                  </span>
                </div>

                <div className="relative z-10 w-full mb-3">
                  <h4 className="font-serif font-bold text-slate-900 text-lg sm:text-xl mb-1.5 group-hover:text-rose-950 transition-colors">
                    Destination Focus
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Tailored logistics and decor setup for royal palaces and resort celebrations.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 w-full flex justify-center relative z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-900 border border-rose-200/80 shadow-xs">
                    Palaces & Resorts
                  </span>
                </div>
              </div>

              {/* Card 3: 11+ Services */}
              <div className="group relative p-7 rounded-[2.5rem] bg-gradient-to-b from-white via-sky-50/25 to-white/95 border-2 border-slate-200/80 hover:border-sky-400 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-28 h-28 bg-sky-400/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                
                {/* Concentric Rotating Icon Orb */}
                <div className="relative mb-4 z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-sky-300/80 group-hover:border-sky-500 p-1 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45">
                    <div className="w-full h-full rounded-full bg-sky-50 border border-sky-200/80 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                      <Layout className="w-6 h-6 text-sky-700 transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-900 text-sky-300 font-mono text-[10px] font-bold flex items-center justify-center shadow-xs border border-sky-300/50">
                    03
                  </span>
                </div>

                <div className="relative z-10 w-full mb-3">
                  <h4 className="font-serif font-bold text-slate-900 text-lg sm:text-xl mb-1.5 group-hover:text-sky-950 transition-colors">
                    11+ Services
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Single digital roof unifying planning, hospitality, photography & catering.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 w-full flex justify-center relative z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-900 border border-sky-200/80 shadow-xs">
                    Full-Spectrum
                  </span>
                </div>
              </div>

              {/* Card 4: Enquiry Funnel */}
              <div className="group relative p-7 rounded-[2.5rem] bg-gradient-to-b from-white via-emerald-50/25 to-white/95 border-2 border-slate-200/80 hover:border-emerald-400 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-400/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                
                {/* Concentric Rotating Icon Orb */}
                <div className="relative mb-4 z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-300/80 group-hover:border-emerald-500 p-1 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45">
                    <div className="w-full h-full rounded-full bg-emerald-50 border border-emerald-200/80 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                      <Send className="w-6 h-6 text-emerald-700 transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-900 text-emerald-300 font-mono text-[10px] font-bold flex items-center justify-center shadow-xs border border-emerald-300/50">
                    04
                  </span>
                </div>

                <div className="relative z-10 w-full mb-3">
                  <h4 className="font-serif font-bold text-slate-900 text-lg sm:text-xl mb-1.5 group-hover:text-emerald-950 transition-colors">
                    Enquiry Funnel
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Frictionless consultation pathways connecting families directly to planners.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 w-full flex justify-center relative z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200/80 shadow-xs">
                    Instant Connect
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION 2: CLIENT REQUIREMENTS */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 mb-4">
            <span>02. Client Requirements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            What PS Decor Needed
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Core business objectives and key digital capabilities identified during the strategic discovery phase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientRequirements.map((req, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-[2.25rem] border-2 border-[#831843]/60 hover:border-[#fbbf24] shadow-[0_10px_30px_rgba(131,24,67,0.25)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.3)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default"
              style={{
                backgroundColor: "#220516",
                backgroundImage: "linear-gradient(145deg, #2c071d 0%, #1a0311 50%, #170802 100%)",
                color: "#ffffff",
              }}
            >
              {/* Top Golden Shimmer Line on Hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(90deg, #ec4899 0%, #fbbf24 50%, #ec4899 100%)",
                }}
              />

              {/* Ambient Glowing Gradient Orbs */}
              <div
                className="absolute -right-8 -top-8 w-36 h-36 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500 opacity-40"
                style={{
                  background: "radial-gradient(circle, #f43f5e 0%, #fbbf24 60%, transparent 100%)",
                }}
              />
              <div
                className="absolute -left-8 -bottom-8 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-30"
                style={{
                  background: "radial-gradient(circle, #fbbf24 0%, #be185d 60%, transparent 100%)",
                }}
              />

              <div className="relative z-10">
                {/* Top Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-13 h-13 rounded-2xl border border-amber-400/50 shadow-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 p-3"
                    style={{
                      background: "linear-gradient(135deg, #4c0523 0%, #290314 100%)",
                    }}
                  >
                    {React.cloneElement(req.icon, { className: "w-6 h-6 text-[#fcd34d]" })}
                  </div>
                  <span
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full border shadow-xs"
                    style={{
                      color: "#fcd34d",
                      backgroundColor: "rgba(251, 191, 36, 0.15)",
                      borderColor: "rgba(251, 191, 36, 0.4)",
                    }}
                  >
                    {req.num}
                  </span>
                </div>

                {/* Tag Badge */}
                <div
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border mb-3"
                  style={{
                    color: "#fde68a",
                    backgroundColor: "rgba(219, 39, 119, 0.25)",
                    borderColor: "rgba(244, 63, 94, 0.4)",
                  }}
                >
                  {req.tag}
                </div>

                {/* Heading */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3 group-hover:text-[#fde68a] transition-colors leading-tight">
                  {req.title}
                </h3>

                {/* Description */}
                <p className="text-[#ffe4e6] text-sm leading-relaxed font-light mb-6 opacity-90">
                  {req.desc}
                </p>
              </div>

              {/* Bottom Status Row */}
              <div
                className="pt-4 mt-2 border-t flex items-center justify-between text-xs font-semibold relative z-10"
                style={{
                  borderColor: "rgba(157, 23, 77, 0.5)",
                  color: "#fcd34d",
                }}
              >
                <span>Integrated into platform</span>
                <Check className="w-4 h-4 text-[#fbbf24]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION 3 & 4: THE CHALLENGE & OUR SOLUTION */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Challenge Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-4">
                <span>03. The Challenge</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                Turning Wedding Inspiration into a Seamless Digital Journey
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                Wedding planning is deeply emotional and visually driven, involving multi-vendor coordination, high budgets, and complex timelines. A generic business website cannot convey this magic.
              </p>

              <div className="space-y-3.5 pt-4 border-t border-slate-700/60">
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Visual storytelling:</strong> Presenting intricate wedding setups without sluggish load speeds.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Service organization:</strong> Making 11+ diverse services simple to explore without overwhelming users.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Brand credibility:</strong> Fostering deep trust with prospective couples through team & client stories.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Destination discovery:</strong> Highlighting outstation wedding logistics clearly.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/60 text-xs text-slate-400">
              Objective: Balance emotional luxury aesthetics with frictionless information architecture.
            </div>
          </div>

          {/* Solution Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200 mb-4">
                <span>04. Our Solution</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-4">
                A Digital Experience Designed Around Celebrations
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
                Zentrix Infotech built a bespoke, celebration-focused web ecosystem combining visual grandeur, intuitive navigation, and high-conversion consultation channels.
              </p>

              <div className="space-y-3.5 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Image-Led Storytelling:</strong> Wedding imagery and curated showcases communicate PS Decor’s design mastery.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Organized Service Architecture:</strong> Dedicated service sections make it effortless to discover exact offerings.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Brand & Team Presentation:</strong> Introduces the creative visionaries and planners behind the brand.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Destination Wedding Section:</strong> Spotlights venue concepts, logistics, and multi-location planning.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Enquiry-Focused Journey:</strong> Clear consultation pathways convert inspired visitors into consultations.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Delivered by Zentrix Infotech</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800">
                Production Ready <Check className="w-3.5 h-3.5 text-emerald-600" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION 5: KEY FEATURES & FUNCTIONALITIES (INTERACTIVE TABS) */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 mb-4">
            <span>05. Key Features & Functionalities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Crafted for Discovery & Engagement
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Explore the 8 essential functional modules built to empower PS Decor’s online celebration showroom.
          </p>
        </div>

        {/* Feature Nav Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {keyFeatures.map((feat, idx) => (
            <button
              key={feat.id}
              onClick={() => setActiveFeatureTab(idx)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                activeFeatureTab === idx
                  ? "bg-[#b38b22] text-white shadow-md font-semibold"
                  : "bg-white text-slate-600 hover:bg-amber-50 border border-slate-200/80"
              }`}
            >
              <span>{feat.title.split(". ")[1]}</span>
            </button>
          ))}
        </div>

        {/* Active Feature Display Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100/70 text-amber-900 border border-amber-200">
                  {keyFeatures[activeFeatureTab].badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Feature {activeFeatureTab + 1} of {keyFeatures.length}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-2">
                {keyFeatures[activeFeatureTab].title}
              </h3>
              <p className="text-sm font-medium text-amber-800 mb-4">
                {keyFeatures[activeFeatureTab].subtitle}
              </p>

              <p className="text-slate-600 text-base leading-relaxed mb-6 font-light">
                {keyFeatures[activeFeatureTab].desc}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                {keyFeatures[activeFeatureTab].points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                    <span className="text-sm text-slate-700">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50 via-yellow-50/40 to-slate-50 border border-amber-200/60 shadow-inner text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-md border border-amber-200/80 flex items-center justify-center mb-4">
                  {keyFeatures[activeFeatureTab].icon}
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-lg mb-2">
                  {keyFeatures[activeFeatureTab].title.split(". ")[1]}
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                  Engineered with responsive precision, fast asset caching, and SEO optimization.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.psdecor.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-amber-900 bg-white border border-amber-200 hover:bg-amber-50 transition-colors shadow-xs"
                  >
                    <span>View on live website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SECTION 6: SERVICES ECOSYSTEM (11 SERVICES WITH FILTER) */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 mb-4">
            <span>06. Services Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Supporting Every Celebration
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            A comprehensive digital architecture unifying 11+ celebration disciplines under a single cohesive platform.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All 11 Services" },
            { id: "decor", label: "Décor & Styling" },
            { id: "planning", label: "Planning & Venues" },
            { id: "experience", label: "Entertainment & Food" },
            { id: "creative", label: "Photography & Invites" },
            { id: "management", label: "Hospitality & Logistics" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveServiceCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeServiceCategory === cat.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-amber-50 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-amber-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-100 inline-block mb-5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2.5 group-hover:text-amber-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {service.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SECTION 7: TECHNOLOGY & ARCHITECTURE */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-4">
              <span>07. Technology & Development Approach</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-6">
              Engineered for Speed, Elegance & Reliability
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-10 font-light">
              The technical architecture was engineered to balance heavy visual media with lightning-fast load times, responsive ergonomics, and robust SEO foundations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Smartphone className="w-6 h-6 text-amber-400 mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Responsive Architecture</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Tailored viewport scaling and touch gestures ensuring flawless browsing across iOS, Android, tablets, and desktops.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Layers className="w-6 h-6 text-amber-400 mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Structured Hierarchy</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Modular service pages and thematic categories allowing effortless content expansion and clear client exploration.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Camera className="w-6 h-6 text-amber-400 mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Image-Led Performance</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Next-generation image compression, responsive source-sets, and lazy loading preserve crystal clarity without latency.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Send className="w-6 h-6 text-amber-400 mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Direct Enquiry Pathways</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Seamless WhatsApp, phone, and contextual form integrations positioned at high-intent inspiration touchpoints.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Search className="w-6 h-6 text-amber-400 mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Search-Friendly Foundation</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Semantic HTML5, automated meta tags, OpenGraph social previews, and clean canonical URLs optimized for organic discovery.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Sparkles className="w-6 h-6 text-amber-400 mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Consistent Design System</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Harmonized luxury typography, gold and pearl color tokens, and micro-interactions creating a unified brand memory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. SECTION 8: STEP-BY-STEP DEVELOPMENT PROCESS */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 mb-4">
            <span>08. Development Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            The 8-Step Craftsmanship Roadmap
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            How Zentrix Infotech executed the project from foundational discovery to production launch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devSteps.map((step, idx) => (
            <div
              key={idx}
              className="group relative p-7 rounded-[2.25rem] border-2 border-[#831843]/60 hover:border-[#fbbf24] shadow-[0_8px_30px_rgba(131,24,67,0.25)] hover:shadow-[0_18px_40px_rgba(212,175,55,0.3)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default"
              style={{
                backgroundColor: "#220516",
                backgroundImage: "linear-gradient(145deg, #2c071d 0%, #1a0311 50%, #170802 100%)",
                color: "#ffffff",
              }}
            >
              {/* Top Golden Shimmer Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(90deg, #ec4899 0%, #fbbf24 50%, #ec4899 100%)",
                }}
              />

              {/* Ambient Glow Orb */}
              <div
                className="absolute -right-6 -top-6 w-28 h-28 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500 opacity-40"
                style={{
                  background: "radial-gradient(circle, #f43f5e 0%, #fbbf24 60%, transparent 100%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-2xl font-serif font-bold"
                    style={{ color: "#fcd34d" }}
                  >
                    {step.step}
                  </span>
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: "#fbbf24",
                      boxShadow: "0 0 10px rgba(251, 191, 36, 0.9)",
                    }}
                  />
                </div>
                <h3 className="font-serif font-bold text-white text-lg mb-2 group-hover:text-[#fde68a] transition-colors leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-[#ffe4e6] leading-relaxed font-light opacity-90">
                  {step.desc}
                </p>
              </div>
              <div
                className="pt-4 mt-4 border-t flex items-center gap-1.5 text-[11px] font-semibold relative z-10"
                style={{
                  borderColor: "rgba(157, 23, 77, 0.5)",
                  color: "#fcd34d",
                }}
              >
                <Check className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span>Phase {step.step} Completed</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. SECTION 9: CHALLENGES & STRATEGIC SOLUTIONS */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 mb-4">
            <span>09. Challenges & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Overcoming Complex Design Hurdles
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            How our engineering and design decisions solved core business and UI/UX challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challengesAndSolutions.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-amber-50 border border-amber-100">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Challenge & Solution {idx + 1}
                    </span>
                    <h4 className="font-serif font-bold text-slate-900 text-lg">
                      {item.challenge}
                    </h4>
                  </div>
                </div>

                <div className="space-y-4 mb-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-1">
                      The Obstacle:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {item.challengeDesc}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1">
                      Our Implemented Solution:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                <span>Outcome: Enhanced Clarity & Speed</span>
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. SECTION 10: RESULTS & BUSINESS IMPACT */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-yellow-50/40 border border-amber-200/80 shadow-md relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-200 mb-4">
              <span>10. Results & Business Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
              Empowering PS Decor’s Market Leadership
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-light">
              The platform delivers a structured foundation to present wedding artistry, educate couples, and drive premium bookings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessImpacts.map((res, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 inline-block mb-4">
                    {res.icon}
                  </div>
                  <h4 className="font-serif font-bold text-slate-900 text-lg mb-2">
                    {res.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {res.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Strategic Milestone Achieved</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400 font-light">
            * No unverified traffic, conversion, revenue, or ranking figures are claimed in this case study.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. SECTION 11: WHY ZENTRIX INFOTECH */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 mb-4">
              <span>11. Why Zentrix Infotech</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
              Transforming Creative Visions into Scalable Digital Realities
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-light">
              Zentrix Infotech approaches website development by combining deep business understanding, thoughtful information architecture, bespoke visual design, and high-performance engineering.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Check className="w-4 h-4 text-amber-700 mb-2" />
                <h5 className="font-bold text-slate-900 text-sm">Brand-Led UI/UX</h5>
                <p className="text-xs text-slate-500 mt-1">Tailored aesthetic identities</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Check className="w-4 h-4 text-amber-700 mb-2" />
                <h5 className="font-bold text-slate-900 text-sm">Structured Architecture</h5>
                <p className="text-xs text-slate-500 mt-1">Effortless service discovery</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Check className="w-4 h-4 text-amber-700 mb-2" />
                <h5 className="font-bold text-slate-900 text-sm">Responsive Precision</h5>
                <p className="text-xs text-slate-500 mt-1">Multi-device optimization</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Check className="w-4 h-4 text-amber-700 mb-2" />
                <h5 className="font-bold text-slate-900 text-sm">Service Presentation</h5>
                <p className="text-xs text-slate-500 mt-1">Clear scope and deliverables</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Check className="w-4 h-4 text-amber-700 mb-2" />
                <h5 className="font-bold text-slate-900 text-sm">SEO Foundations</h5>
                <p className="text-xs text-slate-500 mt-1">Built for organic visibility</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Check className="w-4 h-4 text-amber-700 mb-2" />
                <h5 className="font-bold text-slate-900 text-sm">Conversion Funnels</h5>
                <p className="text-xs text-slate-500 mt-1">Frictionless enquiry journeys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15. SECTION 12 & FINAL CTA: CONCLUSION */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-14 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl overflow-hidden border border-amber-500/20">
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>EVERY CELEBRATION BEGINS WITH A VISION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white mb-6 leading-tight">
              Have a Vision Worth Celebrating?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-light">
              Zentrix Infotech helps businesses transform their ideas into purposeful digital experiences through thoughtful design, modern development, and user-focused website solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold font-serif text-slate-900 rounded-full bg-[#f6cf56] hover:bg-[#e5be42] active:scale-95 transition-all duration-300 shadow-lg shadow-amber-400/20"
                style={{
                  background: "linear-gradient(90deg, #fcd34d 0%, #fbbf24 50%, #f59e0b 100%)",
                }}
              >
                <Phone className="h-4 w-4 text-slate-900" />
                <span>Let’s Connect</span>
              </Link>

              <a
                href="https://www.psdecor.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium font-serif text-white rounded-full bg-white/10 hover:bg-white/20 border border-white/20 active:scale-95 transition-all duration-300"
              >
                <Globe className="h-4 w-4 text-amber-300" />
                Explore Live Website
                <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-light">
              <span>Client: PS Decor (Pradeep Shukla Decor)</span>
              <span>•</span>
              <span>Developed by: Zentrix Infotech</span>
              <span>•</span>
              <a
                href="https://www.psdecor.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:underline"
              >
                www.psdecor.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
