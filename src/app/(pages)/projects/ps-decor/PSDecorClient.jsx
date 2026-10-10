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

  // Summary Circular Items (Stat / Info Nodes) - Blue Theme
  const summaryDetails = [
    {
      num: "01",
      label: "CLIENT",
      value: "PS Decor",
      sub: "Pradeep Shukla Decor",
      icon: <Crown className="w-5 h-5 text-[#1769AA]" />,
      badgeBg: "bg-[#EAF4FF] text-[#102A43] border-blue-200/80",
      iconBg: "bg-gradient-to-br from-blue-500/15 via-sky-500/10 to-blue-50",
      glowBg: "from-blue-400/20 to-sky-300/10",
      borderColor: "hover:border-[#3B82C4]",
      pillIcon: <Crown className="w-3.5 h-3.5 text-[#1769AA]" />,
    },
    {
      num: "02",
      label: "INDUSTRY",
      value: "Wedding Planning & Décor",
      sub: "Luxury Celebrations & Events",
      icon: <Heart className="w-5 h-5 text-[#3B82C4]" />,
      badgeBg: "bg-[#EAF4FF] text-[#102A43] border-blue-200/80",
      iconBg: "bg-gradient-to-br from-sky-500/15 via-blue-500/10 to-sky-50",
      glowBg: "from-sky-400/20 to-blue-300/10",
      borderColor: "hover:border-[#3B82C4]",
      pillIcon: <Sparkles className="w-3.5 h-3.5 text-[#3B82C4]" />,
    },
    {
      num: "03",
      label: "PROJECT TYPE",
      value: "Website Design & Dev",
      sub: "Luxury Brand Experience",
      icon: <Globe className="w-5 h-5 text-[#1769AA]" />,
      badgeBg: "bg-[#EAF4FF] text-[#102A43] border-blue-200/80",
      iconBg: "bg-gradient-to-br from-blue-500/15 via-sky-500/10 to-blue-50",
      glowBg: "from-blue-400/20 to-sky-300/10",
      borderColor: "hover:border-[#3B82C4]",
      pillIcon: <Gem className="w-3.5 h-3.5 text-[#1769AA]" />,
    },
    {
      num: "04",
      label: "DEVELOPED BY",
      value: "Zentrix Infotech",
      sub: "Architecture & UI/UX Design",
      icon: <Award className="w-5 h-5 text-[#3B82C4]" />,
      badgeBg: "bg-[#EAF4FF] text-[#102A43] border-blue-200/80",
      iconBg: "bg-gradient-to-br from-sky-500/15 via-blue-500/10 to-sky-50",
      glowBg: "from-sky-400/20 to-blue-300/10",
      borderColor: "hover:border-[#3B82C4]",
      pillIcon: <Award className="w-3.5 h-3.5 text-[#3B82C4]" />,
    },
  ];

  // Requirements Cards - Blue Theme
  const clientRequirements = [
    {
      num: "01",
      title: "Premium Brand Identity",
      desc: "Create a sophisticated online presence that reflects the elegance, creativity, and personalized approach of a luxury wedding and event brand.",
      icon: <Crown className="w-6 h-6 text-[#1769AA]" />,
      tag: "Brand Aesthetic",
    },
    {
      num: "02",
      title: "Visual Wedding Portfolio",
      desc: "Present wedding décor, floral arrangements, venue styling, and celebration photography in an engaging visual format that allows visitors to explore the brand's creative work.",
      icon: <Camera className="w-6 h-6 text-[#3B82C4]" />,
      tag: "Visual Showcase",
    },
    {
      num: "03",
      title: "Structured Service Discovery",
      desc: "Organize multiple offerings into clear service categories, making it easier for visitors to discover the solutions relevant to their wedding or event.",
      icon: <Layout className="w-6 h-6 text-[#1769AA]" />,
      tag: "Information Architecture",
    },
    {
      num: "04",
      title: "Destination Wedding Promotion",
      desc: "Communicate the brand's destination wedding capabilities and showcase the possibilities of celebrations across different venues and locations.",
      icon: <MapPin className="w-6 h-6 text-[#3B82C4]" />,
      tag: "Destination Experience",
    },
    {
      num: "05",
      title: "Trust & Brand Credibility",
      desc: "Highlight the team's experience, creative expertise, planning approach, and brand story to help prospective clients understand the business.",
      icon: <ShieldCheck className="w-6 h-6 text-[#1769AA]" />,
      tag: "Social Proof & Story",
    },
    {
      num: "06",
      title: "Seamless Enquiry Experience",
      desc: "Provide a convenient way for couples and families to share their requirements and begin a consultation without friction.",
      icon: <Send className="w-6 h-6 text-[#3B82C4]" />,
      tag: "Lead Conversion",
    },
  ];

  // Challenges vs Strategic Solutions - Blue Theme
  const challengesAndSolutions = [
    {
      challenge: "Presenting a Visually Rich Brand",
      challengeDesc:
        "Wedding décor relies heavily on visual appeal, but high-resolution galleries can easily overwhelm page hierarchy or slow down load times if not balanced carefully.",
      solution: "Image-Led Storytelling with Structured Hierarchy",
      solutionDesc:
        "Utilized image-led sections supported by structured typography, descriptive headings, balanced negative space, and fast, optimized media loading.",
      icon: <Palette className="w-6 h-6 text-[#1769AA]" />,
    },
    {
      challenge: "Organizing Multiple Complex Services",
      challengeDesc:
        "Visitors may arrive looking for a specific offering—from mandap décor and destination weddings to catering or photography—and easily get lost.",
      solution: "Dedicated Service Categories & Clear Architecture",
      solutionDesc:
        "Organized 11+ specialized offerings into distinct, modular service hubs with rich descriptions, key highlights, and direct inquiry paths.",
      icon: <Layers className="w-6 h-6 text-[#3B82C4]" />,
    },
    {
      challenge: "Building Confidence Before Enquiry",
      challengeDesc:
        "Wedding planning involves high emotional and financial stakes; potential clients need to trust the planners before starting a consultation.",
      solution: "Team Profiles, Client Stories & Curated Editorial",
      solutionDesc:
        "Brought together the founders' story, team backgrounds, authentic client testimonials, and 'The Aura' magazine editorial content.",
      icon: <Heart className="w-6 h-6 text-[#1769AA]" />,
    },
    {
      challenge: "Flawless Experience Across All Devices",
      challengeDesc:
        "Couples and families frequently browse wedding inspiration and share decor ideas directly from mobile phones, tablets, or laptops on the go.",
      solution: "Adaptive, Touch-First Responsive Engineering",
      solutionDesc:
        "Engineered fluid layouts, thumb-friendly tap targets, silky transitions, and responsive image scaling tailored for all screen sizes.",
      icon: <Smartphone className="w-6 h-6 text-[#3B82C4]" />,
    },
  ];

  // Key Features & Functionalities - Blue Theme
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
      icon: <Camera className="w-5 h-5 text-[#1769AA]" />,
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
      icon: <Flower2 className="w-5 h-5 text-[#3B82C4]" />,
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
      icon: <MapPin className="w-5 h-5 text-[#1769AA]" />,
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
      icon: <Layers className="w-5 h-5 text-[#3B82C4]" />,
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
      icon: <Users className="w-5 h-5 text-[#1769AA]" />,
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
      icon: <BookOpen className="w-5 h-5 text-[#3B82C4]" />,
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
      icon: <MessageSquareQuote className="w-5 h-5 text-[#1769AA]" />,
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
      icon: <Send className="w-5 h-5 text-[#3B82C4]" />,
      badge: "Conversion Focus",
    },
  ];

  // 11 Services Ecosystem - Blue Theme Icons
  const servicesEcosystem = [
    {
      id: "decor",
      title: "Wedding & Event Decorations",
      category: "decor",
      desc: "Floral styling, stage décor, majestic mandap arrangements, thematic lighting, and immersive ambient environments.",
      icon: <Flower2 className="w-6 h-6 text-[#1769AA]" />,
      tags: ["Floral Art", "Mandap Design", "Lighting", "Stage Décor"],
    },
    {
      id: "luxury-styling",
      title: "Luxury Wedding Décor & Styling",
      category: "decor",
      desc: "Personalized visual concepts, high-end thematic installations, and premium decorative experiences tailored for royal celebrations.",
      icon: <Crown className="w-6 h-6 text-[#3B82C4]" />,
      tags: ["Bespoke Themes", "Luxury Installations", "VIP Lounges"],
    },
    {
      id: "destination-weddings",
      title: "Destination Weddings",
      category: "planning",
      desc: "End-to-end celebration planning, vendor coordination, and customized décor for heritage palaces, beach resorts, and destination venues.",
      icon: <MapPin className="w-6 h-6 text-[#1769AA]" />,
      tags: ["Palace Weddings", "Beach Resorts", "Multi-City Logistics"],
    },
    {
      id: "venue-booking",
      title: "Wedding Venue Booking",
      category: "planning",
      desc: "Comprehensive venue discovery, site evaluations, negotiation support, and seamless coordination with venue management.",
      icon: <Building2 className="w-6 h-6 text-[#3B82C4]" />,
      tags: ["Venue Scouting", "Contract Support", "Capacity Planning"],
    },
    {
      id: "planning-management",
      title: "Wedding Planning & Management",
      category: "planning",
      desc: "Complete schedule design, vendor management, timeline synchronization, on-site supervision, and flawless day-of execution.",
      icon: <CalendarCheck className="w-6 h-6 text-[#1769AA]" />,
      tags: ["Timeline Management", "Vendor Sync", "On-Site Coordination"],
    },
    {
      id: "invitations",
      title: "Invitations & Wedding Stationery",
      category: "creative",
      desc: "Bespoke digital and physical wedding invitations, itinerary cards, personalized welcome kits, and luxury event stationery.",
      icon: <Mail className="w-6 h-6 text-[#3B82C4]" />,
      tags: ["Bespoke Stationery", "Digital Invites", "Welcome Kits"],
    },
    {
      id: "hospitality",
      title: "Hospitality & Guest Services",
      category: "management",
      desc: "Guest reception, personalized check-ins, transit logistics, accommodation coordination, and dedicated hospitality desks.",
      icon: <Users className="w-6 h-6 text-[#1769AA]" />,
      tags: ["Guest Concierge", "Airport Transfers", "Luggage Logistics"],
    },
    {
      id: "entertainment",
      title: "Entertainment & Artist Management",
      category: "experience",
      desc: "Curating live bands, renowned musical artists, choreographers, celebrity performers, DJs, and traditional cultural troupes.",
      icon: <Music className="w-6 h-6 text-[#3B82C4]" />,
      tags: ["Live Artists", "Celebrity DJs", "Choreography", "Sangeet"],
    },
    {
      id: "catering",
      title: "Catering & Food Experiences",
      category: "experience",
      desc: "Custom culinary curation, global and regional gourmet menus, interactive food stations, and premium banquet service coordination.",
      icon: <Utensils className="w-6 h-6 text-[#1769AA]" />,
      tags: ["Gourmet Menus", "Live Counters", "Regional Delicacies"],
    },
    {
      id: "photography",
      title: "Photography & Cinematic Films",
      category: "creative",
      desc: "Artistic photography, pre-wedding shoots, cinematic wedding teasers, drone videography, and timeless wedding memory albums.",
      icon: <Camera className="w-6 h-6 text-[#3B82C4]" />,
      tags: ["Cinematic Films", "Drone Shots", "Pre-Wedding Shoots"],
    },
    {
      id: "special-effects",
      title: "Special Effects & Unique Experiences",
      category: "experience",
      desc: "Cold pyro entries, grand fog machines, floral showers, laser shows, and personalized experiential surprises for unforgettable moments.",
      icon: <Sparkles className="w-6 h-6 text-[#1769AA]" />,
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
      desc: "Crafted a clean, high-end visual language featuring primary blue accents, elegant typography, airy whitespace, and image-forward storytelling.",
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

  // Business Impact Highlights - Blue Theme
  const businessImpacts = [
    {
      title: "Elevated Digital Authority",
      desc: "Positions PS Decor as a premier, high-end luxury event and wedding styling authority with an online showroom matching their real-world grandeur.",
      icon: <Crown className="w-6 h-6 text-[#1769AA]" />,
    },
    {
      title: "Streamlined Service Discovery",
      desc: "Visitors seamlessly explore all 11+ specialized offerings with clear clarity on scope, themes, and personalized customization options.",
      icon: <Layout className="w-6 h-6 text-[#3B82C4]" />,
    },
    {
      title: "Captivating Visual Storytelling",
      desc: "High-resolution visual galleries and themed portfolios communicate artistry and emotional resonance far better than static text.",
      icon: <Camera className="w-6 h-6 text-[#1769AA]" />,
    },
    {
      title: "Higher Lead Conversion Quality",
      desc: "Couples arrive well-informed about services, team pedigree, and decor capabilities, leading to more qualified consultation inquiries.",
      icon: <Send className="w-6 h-6 text-[#3B82C4]" />,
    },
    {
      title: "Dedicated Destination Weddings Hub",
      desc: "A dedicated destination wedding experience unlocks regional and destination wedding opportunities across royal palaces and luxury resorts.",
      icon: <MapPin className="w-6 h-6 text-[#1769AA]" />,
    },
    {
      title: "Search-Optimized Foundation",
      desc: "Structured architecture and 'The Aura' editorial content power continuous organic discoverability for wedding and event search terms.",
      icon: <Search className="w-6 h-6 text-[#3B82C4]" />,
    },
  ];

  return (
    <main className="ps-decor-page min-h-screen bg-[#F5F9FF] text-[#425466] pb-20 selection:bg-blue-100 selection:text-blue-900">
      {/* ========================================================================= */}
      {/* 1. TOP BREADCRUMB & BACK NAVIGATION */}
      {/* ========================================================================= */}
      <div className="pt-32 sm:pt-36 lg:pt-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#1769AA] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#102A43] bg-[#EAF4FF] border border-[#3B82C4]/30 px-3.5 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1769AA]" />
            <span>Case Study</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 overflow-hidden">
        {/* Subtle Blue & White Gradient Glows */}
        <div className="absolute -top-16 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/20 via-sky-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-gradient-to-bl from-indigo-200/20 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge: LUXURY DIGITAL EXPERIENCE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-[#EAF4FF] border border-[#3B82C4]/30 text-[#102A43] mb-6 shadow-xs">
            <Crown className="w-3.5 h-3.5 text-[#1769AA]" />
            <span>PS DECOR (PRADEEP SHUKLA DECOR)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#102A43] mb-6 leading-snug sm:leading-tight md:leading-[1.3] tracking-tight">
            Crafting a{" "}
            <span className="inline-block font-semibold text-[#1769AA] px-1 py-0.5">
              Luxury Digital Experience
            </span>{" "}
            <br className="hidden md:inline" />
            for Weddings & Celebrations
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#425466] leading-relaxed max-w-3xl mx-auto mb-8 font-light">
            How Zentrix Infotech translated the visual grandeur of bespoke luxury wedding planning, royal mandaps, and curated celebrations into an elegant, high-conversion online platform.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.psdecor.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] active:scale-95 transition-all shadow-md hover:shadow-lg shadow-blue-900/20 group"
            >
              <Globe className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Explore Live Website</span>
              <ExternalLink className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#102A43] bg-white hover:bg-[#EAF4FF] border border-slate-300 hover:border-[#3B82C4] active:scale-95 transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#1769AA]" />
              <span className="text-[#102A43] font-medium">Discuss Your Project</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PROJECT SNAPSHOT NODES (CIRCULAR PODS) */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryDetails.map((item, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-[2.5rem] bg-gradient-to-b from-white via-blue-50/20 to-white/95 backdrop-blur-md border-2 border-slate-200/80 ${item.borderColor} shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default`}
            >
              {/* Background ambient radial glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${item.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2.5rem]`}
              />

              {/* Top Concentric Circular Ring with Floating Icon */}
              <div className="relative mb-5 z-10">
                {/* Outer animated dashed circle */}
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-blue-200 group-hover:border-[#1769AA] p-1.5 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45">
                  {/* Inner Solid Gradient Circle */}
                  <div
                    className={`w-full h-full rounded-full ${item.iconBg} border border-blue-100 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45`}
                  >
                    <div className="transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Floating Step Number Circle Badge */}
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#102A43] text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-xs border border-blue-300/50">
                  {item.num}
                </span>
              </div>

              {/* Center Info */}
              <div className="relative z-10 w-full mb-4">
                {/* Category Label */}
                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#425466] group-hover:text-[#1769AA] transition-colors mb-2">
                  {item.label}
                </span>

                {/* Main Value Headline */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#102A43] leading-tight transition-colors">
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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-blue-50/40 to-slate-100/70 border border-slate-200/90 shadow-xl p-3 sm:p-5">
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
              className="text-xs text-[#1769AA] hover:text-[#102A43] font-medium inline-flex items-center gap-1"
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 via-sky-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-[#102A43] bg-[#EAF4FF] border border-[#3B82C4]/30 mb-6 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#1769AA]" />
                <span>01. PROJECT OVERVIEW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#102A43] mb-6 leading-[1.2] tracking-tight">
                Translating Grandeur into an{" "}
                <span className="inline-block text-[#1769AA]">
                  Engaging Online Experience
                </span>
              </h2>

              <div className="space-y-4 text-[#425466] leading-relaxed text-base sm:text-lg font-light">
                <p>
                  <strong className="font-semibold text-[#102A43]">PS Decor</strong> (Pradeep Shukla Decor) is a renowned wedding planning, event design, and coordination brand that creates deeply personalized celebrations through creative décor, thoughtful planning, and seamless on-ground coordination.
                </p>
                <p>
                  Their extensive portfolio spans wedding and event decorations, luxury styling, destination weddings, venue booking, guest hospitality, catering, entertainment curation, and cinematic photography.
                </p>
                <p>
                  <strong className="font-semibold text-[#102A43]">Zentrix Infotech</strong> was commissioned to architect and develop a digital experience that showcases PS Decor’s creative brilliance, structures their diverse service ecosystem, and enables prospective couples to explore wedding inspiration and initiate consultations effortlessly.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1: Luxury Styling */}
              <div className="group relative p-7 rounded-[2.5rem] bg-gradient-to-b from-white via-blue-50/25 to-white/95 border-2 border-slate-200/80 hover:border-[#3B82C4] shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                
                {/* Concentric Rotating Icon Orb */}
                <div className="relative mb-4 z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-blue-200 group-hover:border-[#1769AA] p-1 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45">
                    <div className="w-full h-full rounded-full bg-[#EAF4FF] border border-blue-100 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                      <Crown className="w-6 h-6 text-[#1769AA] transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#102A43] text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-xs border border-blue-200">
                    01
                  </span>
                </div>

                <div className="relative z-10 w-full mb-3">
                  <h4 className="font-serif font-bold text-[#102A43] text-lg sm:text-xl mb-1.5 group-hover:text-[#1769AA] transition-colors">
                    Luxury Styling
                  </h4>
                  <p className="text-xs text-[#425466] leading-relaxed font-light">
                    Grand mandaps, floral geometry, mood lighting & bespoke event architecture.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 w-full flex justify-center relative z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#EAF4FF] text-[#102A43] border border-blue-200 shadow-xs">
                    Bespoke Décor
                  </span>
                </div>
              </div>

              {/* Card 2: Destination Focus */}
              <div className="group relative p-7 rounded-[2.5rem] bg-gradient-to-b from-white via-sky-50/25 to-white/95 border-2 border-slate-200/80 hover:border-[#3B82C4] shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-28 h-28 bg-sky-400/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                
                {/* Concentric Rotating Icon Orb */}
                <div className="relative mb-4 z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-sky-200 group-hover:border-[#3B82C4] p-1 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45">
                    <div className="w-full h-full rounded-full bg-[#EAF4FF] border border-sky-100 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                      <Heart className="w-6 h-6 text-[#3B82C4] transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#102A43] text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-xs border border-sky-200">
                    02
                  </span>
                </div>

                <div className="relative z-10 w-full mb-3">
                  <h4 className="font-serif font-bold text-[#102A43] text-lg sm:text-xl mb-1.5 group-hover:text-[#3B82C4] transition-colors">
                    Destination Focus
                  </h4>
                  <p className="text-xs text-[#425466] leading-relaxed font-light">
                    Tailored logistics and decor setup for royal palaces and resort celebrations.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 w-full flex justify-center relative z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#EAF4FF] text-[#102A43] border border-sky-200 shadow-xs">
                    Palaces & Resorts
                  </span>
                </div>
              </div>

              {/* Card 3: 11+ Services */}
              <div className="group relative p-7 rounded-[2.5rem] bg-gradient-to-b from-white via-blue-50/25 to-white/95 border-2 border-slate-200/80 hover:border-[#3B82C4] shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                
                {/* Concentric Rotating Icon Orb */}
                <div className="relative mb-4 z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-blue-200 group-hover:border-[#1769AA] p-1 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45">
                    <div className="w-full h-full rounded-full bg-[#EAF4FF] border border-blue-100 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                      <Layout className="w-6 h-6 text-[#1769AA] transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#102A43] text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-xs border border-blue-200">
                    03
                  </span>
                </div>

                <div className="relative z-10 w-full mb-3">
                  <h4 className="font-serif font-bold text-[#102A43] text-lg sm:text-xl mb-1.5 group-hover:text-[#1769AA] transition-colors">
                    11+ Services
                  </h4>
                  <p className="text-xs text-[#425466] leading-relaxed font-light">
                    Single digital roof unifying planning, hospitality, photography & catering.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 w-full flex justify-center relative z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#EAF4FF] text-[#102A43] border border-blue-200 shadow-xs">
                    Full-Spectrum
                  </span>
                </div>
              </div>

              {/* Card 4: Enquiry Funnel */}
              <div className="group relative p-7 rounded-[2.5rem] bg-gradient-to-b from-white via-sky-50/25 to-white/95 border-2 border-slate-200/80 hover:border-[#3B82C4] shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden cursor-default">
                <div className="absolute top-0 right-0 w-28 h-28 bg-sky-400/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                
                {/* Concentric Rotating Icon Orb */}
                <div className="relative mb-4 z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-sky-200 group-hover:border-[#3B82C4] p-1 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45">
                    <div className="w-full h-full rounded-full bg-[#EAF4FF] border border-sky-100 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                      <Send className="w-6 h-6 text-[#3B82C4] transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#102A43] text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-xs border border-sky-200">
                    04
                  </span>
                </div>

                <div className="relative z-10 w-full mb-3">
                  <h4 className="font-serif font-bold text-[#102A43] text-lg sm:text-xl mb-1.5 group-hover:text-[#3B82C4] transition-colors">
                    Enquiry Funnel
                  </h4>
                  <p className="text-xs text-[#425466] leading-relaxed font-light">
                    Frictionless consultation pathways connecting families directly to planners.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 w-full flex justify-center relative z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#EAF4FF] text-[#102A43] border border-sky-200 shadow-xs">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#102A43] bg-[#EAF4FF] border border-[#3B82C4]/30 mb-4">
            <span>02. Client Requirements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#102A43] mb-4">
            What PS Decor Needed
          </h2>
          <p className="text-[#425466] text-base sm:text-lg font-light">
            Core business objectives and key digital capabilities identified during the strategic discovery phase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {clientRequirements.map((req, idx) => (
            <div
              key={idx}
              className="group relative p-5 sm:p-6 bg-white border-2 border-slate-200/90 hover:border-[#3B82C4] shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default rounded-[2rem]"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#1769AA] to-[#3B82C4]" />

              <div className="relative z-10">
                {/* Top Header Row with Circular Icon Ring */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-blue-200 p-1 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:rotate-45">
                    <div className="w-full h-full rounded-full bg-[#EAF4FF] border border-blue-100 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                      {React.cloneElement(req.icon, { className: "w-5 h-5 text-[#1769AA]" })}
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-xs text-[#102A43] bg-[#EAF4FF] border-blue-200">
                    {req.num}
                  </span>
                </div>

                {/* Tag Badge */}
                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border mb-2.5 text-[#102A43] bg-[#EAF4FF] border-blue-200">
                  {req.tag}
                </div>

                {/* Heading */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#102A43] mb-2 group-hover:text-[#1769AA] transition-colors leading-snug">
                  {req.title}
                </h3>

                {/* Description */}
                <p className="text-[#425466] text-xs leading-relaxed font-light mb-4">
                  {req.desc}
                </p>
              </div>

              {/* Bottom Status Row */}
              <div className="pt-3 mt-1 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold relative z-10 text-[#1769AA]">
                <span>Integrated into platform</span>
                <Check className="w-3.5 h-3.5 text-[#1769AA]" />
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
          <div className="p-8 sm:p-10 rounded-3xl bg-[#102A43] text-white shadow-xl flex flex-col justify-between relative overflow-hidden border border-[#1769AA]/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1769AA]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-300 bg-sky-500/10 border border-sky-400/20 mb-4">
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
                  <Flame className="w-5 h-5 text-[#3B82C4] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Visual storytelling:</strong> Presenting intricate wedding setups without sluggish load speeds.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-[#3B82C4] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Service organization:</strong> Making 11+ diverse services simple to explore without overwhelming users.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-[#3B82C4] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">
                    <strong>Brand credibility:</strong> Fostering deep trust with prospective couples through team & client stories.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-[#3B82C4] shrink-0 mt-0.5" />
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#102A43] bg-[#EAF4FF] border border-[#3B82C4]/30 mb-4">
                <span>04. Our Solution</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#102A43] mb-4">
                A Digital Experience Designed Around Celebrations
              </h3>

              <p className="text-[#425466] text-sm sm:text-base leading-relaxed mb-6 font-light">
                Zentrix Infotech built a bespoke, celebration-focused web ecosystem combining visual grandeur, intuitive navigation, and high-conversion consultation channels.
              </p>

              <div className="space-y-3.5 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1769AA] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Image-Led Storytelling:</strong> Wedding imagery and curated showcases communicate PS Decor’s design mastery.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1769AA] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Organized Service Architecture:</strong> Dedicated service sections make it effortless to discover exact offerings.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1769AA] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Brand & Team Presentation:</strong> Introduces the creative visionaries and planners behind the brand.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1769AA] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Destination Wedding Section:</strong> Spotlights venue concepts, logistics, and multi-location planning.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1769AA] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Enquiry-Focused Journey:</strong> Clear consultation pathways convert inspired visitors into consultations.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Delivered by Zentrix Infotech</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1769AA]">
                Production Ready <Check className="w-3.5 h-3.5 text-[#1769AA]" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION 5: KEY FEATURES & FUNCTIONALITIES (RUNNING CAROUSEL) */}
      {/* ========================================================================= */}
      <section className="py-8 max-w-full overflow-hidden mb-20">
        <div className="text-center max-w-3xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-[#102A43] bg-[#EAF4FF] border border-[#3B82C4]/30 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1769AA]" />
            <span>05. KEY FEATURES & FUNCTIONALITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#102A43] mb-4">
            Crafted for Discovery & Engagement
          </h2>
          <p className="text-[#425466] text-base sm:text-lg font-light">
            Explore all 8 essential functional modules built to empower PS Decor’s online celebration showroom in a continuous right-to-left running carousel (hover to pause).
          </p>
        </div>

        {/* Running Marquee Carousel Container (Right to Left) */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Subtle Edge Blur Gradients */}
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F5F9FF] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F5F9FF] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex gap-4 animate-marquee-left hover:[animation-play-state:paused] w-max">
            {[...keyFeatures, ...keyFeatures].map((feat, idx) => (
              <div
                key={idx}
                className="w-[260px] sm:w-[290px] shrink-0 p-4 sm:p-5 bg-white border-2 border-slate-200/90 hover:border-[#3B82C4] shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer rounded-2xl relative group"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#1769AA] to-[#3B82C4]" />

                <div className="relative z-10">
                  {/* Top Row: Rotating Icon + Badges */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-blue-200 p-1 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:rotate-45">
                      <div className="w-full h-full rounded-full bg-[#EAF4FF] border border-blue-100 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                        {React.cloneElement(feat.icon, { className: "w-4 h-4 text-[#1769AA]" })}
                      </div>
                    </div>

                    <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide border shadow-xs text-[#102A43] bg-[#EAF4FF] border-blue-200">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#102A43] mb-0.5 group-hover:text-[#1769AA] transition-colors leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#1769AA] mb-1.5">
                    {feat.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[11px] text-[#425466] leading-relaxed font-light mb-3 line-clamp-2">
                    {feat.desc}
                  </p>

                  {/* Points */}
                  <div className="space-y-1 pt-2 border-t border-slate-100 mb-1">
                    {feat.points.slice(0, 2).map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#1769AA] shrink-0 mt-0.5" />
                        <span className="text-[10px] text-[#425466] leading-tight truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold relative z-10 text-[#1769AA]">
                  <span>PS Decor Feature</span>
                  <ExternalLink className="w-3 h-3 text-[#1769AA]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marqueeLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee-left {
            display: flex;
            width: max-content;
            animation: marqueeLeft 38s linear infinite;
          }
          .animate-marquee-left:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ========================================================================= */}
      {/* 9. SECTION 6: SERVICES ECOSYSTEM (11 SERVICES WITH FILTER) */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-[#102A43] bg-[#EAF4FF] border border-[#3B82C4]/30 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1769AA]" />
            <span>06. 11+ SPECIALIZED DISCIPLINES</span>
          </div>

          <h2 className="font-serif font-bold text-[#102A43] text-3xl sm:text-4xl mb-3 tracking-tight">
            Services{" "}
            <span className="inline-block text-[#1769AA]">
              Ecosystem
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3B82C4] to-transparent mx-auto mb-4" />

          <p className="text-xl sm:text-2xl font-serif italic text-[#102A43] font-medium mb-3">
            Supporting Every Celebration
          </p>

          <p className="text-[#425466] text-sm sm:text-base font-light leading-relaxed max-w-3xl mx-auto">
            A comprehensive digital architecture unifying 11+ specialized celebration disciplines under a single cohesive digital experience.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
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
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-xs cursor-pointer ${
                activeServiceCategory === cat.id
                  ? "bg-[#1769AA] text-white border-2 border-[#3B82C4] shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-[#EAF4FF] hover:border-[#3B82C4] border border-slate-200/90"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group relative p-4 sm:p-5 bg-white border-2 border-slate-200 hover:border-[#3B82C4] shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default rounded-2xl"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#1769AA] to-[#3B82C4]" />

              <div className="relative z-10">
                {/* Rotating Concentric Icon & Number Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-full border-2 border-dashed border-blue-200 p-0.5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-45">
                    <div className="w-full h-full rounded-full bg-[#EAF4FF] border border-blue-100 shadow-xs flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                      {React.cloneElement(service.icon, { className: "w-4.5 h-4.5 text-[#1769AA]" })}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full border shadow-xs text-[#102A43] bg-[#EAF4FF] border-blue-200">
                      0{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-serif font-bold text-[#102A43] mb-1.5 group-hover:text-[#1769AA] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] text-[#425466] leading-relaxed font-light mb-3">
                  {service.desc}
                </p>

                {/* Tag Badges */}
                <div className="flex flex-wrap gap-1 pt-2.5 border-t border-slate-100">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-full text-[9px] font-medium border text-[#102A43] bg-[#EAF4FF] border-blue-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="pt-2 mt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold relative z-10 text-[#1769AA]">
                <span className="group-hover:text-[#102A43] transition-colors">Curated Experience</span>
                <Sparkles className="w-3.5 h-3.5 text-[#1769AA] group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SECTION 7: TECHNOLOGY & ARCHITECTURE */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#102A43] text-white shadow-xl relative overflow-hidden border border-[#1769AA]/30">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#1769AA]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-300 bg-sky-500/10 border border-sky-400/20 mb-4">
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
                <Smartphone className="w-6 h-6 text-[#3B82C4] mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Responsive Architecture</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Tailored viewport scaling and touch gestures ensuring flawless browsing across iOS, Android, tablets, and desktops.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Layers className="w-6 h-6 text-[#3B82C4] mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Structured Hierarchy</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Modular service pages and thematic categories allowing effortless content expansion and clear client exploration.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Camera className="w-6 h-6 text-[#3B82C4] mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Image-Led Performance</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Next-generation image compression, responsive source-sets, and lazy loading preserve crystal clarity without latency.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Send className="w-6 h-6 text-[#3B82C4] mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Direct Enquiry Pathways</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Seamless WhatsApp, phone, and contextual form integrations positioned at high-intent inspiration touchpoints.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Search className="w-6 h-6 text-[#3B82C4] mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Search-Friendly Foundation</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Semantic HTML5, automated meta tags, OpenGraph social previews, and clean canonical URLs optimized for organic discovery.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <Sparkles className="w-6 h-6 text-[#3B82C4] mb-3" />
                <h4 className="font-bold text-white text-base mb-2">Consistent Design System</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Harmonized typography, blue and white color tokens, and micro-interactions creating a unified brand memory.
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#102A43] bg-[#EAF4FF] border border-[#3B82C4]/30 mb-4">
            <span>08. Development Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#102A43] mb-4">
            The 8-Step Craftsmanship Roadmap
          </h2>
          <p className="text-[#425466] text-base sm:text-lg font-light">
            How Zentrix Infotech executed the project from foundational discovery to production launch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {devSteps.map((step, idx) => (
            <div
              key={idx}
              className="group relative p-5 sm:p-6 bg-white border-2 border-slate-200 hover:border-[#3B82C4] shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default rounded-[2rem]"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#1769AA] to-[#3B82C4]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-serif font-bold text-[#1769AA]">
                    {step.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3B82C4]" />
                </div>
                <h3 className="font-serif font-bold text-[#102A43] text-base sm:text-lg mb-1.5 group-hover:text-[#1769AA] transition-colors leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#425466] leading-relaxed font-light mb-3">
                  {step.desc}
                </p>
              </div>
              <div className="pt-3 mt-1 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold relative z-10 text-[#1769AA]">
                <Check className="w-3.5 h-3.5 text-[#1769AA]" />
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#102A43] bg-[#EAF4FF] border border-[#3B82C4]/30 mb-4">
            <span>09. Challenges & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#102A43] mb-4">
            Overcoming Complex Design Hurdles
          </h2>
          <p className="text-[#425466] text-base sm:text-lg font-light">
            How our engineering and design decisions solved core business and UI/UX challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challengesAndSolutions.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#3B82C4] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-[#EAF4FF] border border-blue-100">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#425466]">
                      Challenge & Solution {idx + 1}
                    </span>
                    <h4 className="font-serif font-bold text-[#102A43] text-lg">
                      {item.challenge}
                    </h4>
                  </div>
                </div>

                <div className="space-y-4 mb-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#102A43] block mb-1">
                      The Obstacle:
                    </span>
                    <p className="text-xs text-[#425466] leading-relaxed font-light">
                      {item.challengeDesc}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#EAF4FF]/70 border border-blue-200/70">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#102A43] block mb-1">
                      Our Implemented Solution:
                    </span>
                    <p className="text-xs text-[#425466] leading-relaxed font-medium">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-[#425466]">
                <span>Outcome: Enhanced Clarity & Speed</span>
                <Check className="w-4 h-4 text-[#1769AA]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. SECTION 10: RESULTS & BUSINESS IMPACT */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#EAF4FF]/70 via-white to-sky-50/40 border border-blue-200/80 shadow-md relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#102A43] bg-[#EAF4FF] border border-[#3B82C4]/30 mb-4">
              <span>10. Results & Business Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#102A43] mb-4">
              Empowering PS Decor’s Market Leadership
            </h2>
            <p className="text-[#425466] text-base sm:text-lg font-light">
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
                  <div className="p-3 rounded-xl bg-[#EAF4FF] border border-blue-100 inline-block mb-4">
                    {res.icon}
                  </div>
                  <h4 className="font-serif font-bold text-[#102A43] text-lg mb-2">
                    {res.title}
                  </h4>
                  <p className="text-xs text-[#425466] leading-relaxed font-light">
                    {res.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#1769AA] font-semibold">
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
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #102A43 0%, #0d2338 50%, #1769AA 100%)",
            border: "1px solid rgba(59, 130, 196, 0.3)",
            boxShadow: "0 25px 60px rgba(16, 42, 67, 0.35), 0 0 0 1px rgba(59, 130, 196, 0.1)",
          }}
        >
          {/* Background Ambient Glow Orbs */}
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(59,130,196,0.2) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(23,105,170,0.2) 0%, transparent 70%)" }}
          />

          {/* Top shimmer border */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: "linear-gradient(90deg, transparent 0%, #3B82C4 50%, transparent 100%)" }}
          />

          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-14 sm:py-20">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-14">
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-widest mb-6"
                style={{
                  background: "rgba(234, 244, 255, 0.15)",
                  border: "1px solid rgba(59, 130, 196, 0.4)",
                  color: "#EAF4FF",
                }}
              >
                <Crown className="w-3.5 h-3.5 text-[#3B82C4]" />
                <span>11. WHY ZENTRIX INFOTECH</span>
              </div>

              <h2
                className="font-serif font-bold tracking-tight text-3xl sm:text-4xl mb-3 leading-tight text-white"
              >
                Why{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #EAF4FF 0%, #3B82C4 50%, #FFFFFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Zentrix Infotech
                </span>
              </h2>

              <div className="w-28 h-0.5 mx-auto mb-5" style={{ background: "linear-gradient(90deg, transparent, #3B82C4, transparent)" }} />

              <p className="text-xl sm:text-2xl font-serif italic mb-5" style={{ color: "#EAF4FF" }}>
                Transforming Creative Visions into Scalable Digital Realities
              </p>

              <p className="text-sm sm:text-base font-light leading-relaxed max-w-3xl mx-auto" style={{ color: "rgba(234, 244, 255, 0.85)" }}>
                Zentrix Infotech approaches website development by combining deep business understanding, thoughtful information architecture, bespoke visual design, and high-performance engineering.
              </p>
            </div>

            {/* 6 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: <Palette className="w-5 h-5" />,
                  title: "Brand-Led UI/UX",
                  desc: "We craft tailored aesthetic identities that reflect your brand's DNA — from typography to micro-interactions.",
                },
                {
                  icon: <Layers className="w-5 h-5" />,
                  title: "Structured Architecture",
                  desc: "Logical information hierarchies that make service discovery intuitive and user journeys effortless.",
                },
                {
                  icon: <MonitorSmartphone className="w-5 h-5" />,
                  title: "Responsive Precision",
                  desc: "Pixel-perfect layouts across all screen sizes — mobile, tablet, and high-DPI desktops.",
                },
                {
                  icon: <Eye className="w-5 h-5" />,
                  title: "Service Presentation",
                  desc: "Clear, compelling showcase of your offerings with defined scope and persuasive deliverables.",
                },
                {
                  icon: <Search className="w-5 h-5" />,
                  title: "SEO Foundations",
                  desc: "Semantic HTML, schema markup, OpenGraph, and geo-targeted keywords built in from day one.",
                },
                {
                  icon: <TrendingUp className="w-5 h-5" />,
                  title: "Conversion Funnels",
                  desc: "Frictionless enquiry journeys, strategic CTAs, and contact flows designed to convert visitors.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 transition-all duration-400 overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, rgba(16, 42, 67, 0.8) 0%, rgba(13, 35, 56, 0.9) 100%)",
                    border: "1px solid rgba(59, 130, 196, 0.25)",
                    borderRadius: "20px",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.border = "1px solid rgba(59, 130, 196, 0.65)";
                    e.currentTarget.style.boxShadow = "0 12px 35px rgba(23, 105, 170, 0.22)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.border = "1px solid rgba(59, 130, 196, 0.25)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Card top shimmer on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: "linear-gradient(90deg, #1769AA, #3B82C4, #1769AA)" }}
                  />

                  {/* Icon pod */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "#102A43",
                        border: "1px solid #3B82C4",
                        color: "#EAF4FF",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div
                      className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full"
                      style={{
                        color: "#EAF4FF",
                        backgroundColor: "rgba(59, 130, 196, 0.2)",
                        border: "1px solid #3B82C4",
                      }}
                    >
                      0{idx + 1}
                    </div>
                  </div>

                  <h5
                    className="font-serif font-bold text-base mb-2 group-hover:text-[#EAF4FF] transition-colors duration-300 text-white"
                  >
                    {item.title}
                  </h5>
                  <p className="text-xs leading-relaxed font-light" style={{ color: "rgba(234, 244, 255, 0.8)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom stat strip */}
            <div
              className="mt-12 pt-8 border-t flex flex-wrap items-center justify-center gap-8 sm:gap-14"
              style={{ borderColor: "rgba(59, 130, 196, 0.25)" }}
            >
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "100%", label: "On-Time Delivery" },
                { num: "5★", label: "Client Satisfaction" },
                { num: "3+", label: "Years of Excellence" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-serif font-bold"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #EAF4FF 0%, #3B82C4 60%, #FFFFFF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs font-medium mt-1" style={{ color: "rgba(234, 244, 255, 0.7)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15. SECTION 12 & FINAL CTA: CONCLUSION */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-14 text-center bg-[#102A43] text-white shadow-2xl overflow-hidden border border-[#1769AA]/30">
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1769AA]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82C4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold tracking-wider text-sky-300 bg-sky-500/10 border border-sky-400/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#3B82C4]" />
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
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold font-serif text-white rounded-full bg-[#1769AA] hover:bg-[#3B82C4] active:scale-95 transition-all duration-300 shadow-lg shadow-blue-900/30"
              >
                <Phone className="h-4 w-4 text-white" />
                <span>Let’s Connect</span>
              </Link>

              <a
                href="https://www.psdecor.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium font-serif text-white rounded-full bg-white/10 hover:bg-white/20 border border-white/20 active:scale-95 transition-all duration-300"
              >
                <Globe className="h-4 w-4 text-sky-300" />
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
                className="text-sky-300 hover:underline"
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
