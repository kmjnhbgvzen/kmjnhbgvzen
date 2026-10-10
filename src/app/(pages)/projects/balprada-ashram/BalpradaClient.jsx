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
  Stethoscope,
  MapPin,
  Clock,
  HelpCircle,
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
  Smile,
  Shield,
  Home,
  Feather,
  Mail,
  Sliders,
  CheckSquare,
  Info,
} from "lucide-react";

// ─── Brand Colors (Zentrix Blue & White Palette) ────────────────────────
const BLUE_PRIMARY = "#1769AA";
const BLUE_DEEP = "#102A43";
const BLUE_LIGHT = "#EAF4FF";
const BLUE_PALE = "#F5F9FF";
const BLUE_ACCENT = "#3B82C4";
const BODY_TEXT = "#425466";

export default function BalpradaClient() {
  const [activeEcosystemNode, setActiveEcosystemNode] = useState(0);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [activeArchGroup, setActiveArchGroup] = useState("all");
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  // ── 1. Project Snapshot Details ──────────────────────────────────
  const snapshotCards = [
    {
      num: "01",
      label: "PROJECT",
      value: "Balprada Ashram",
      sub: "Ayurvedic Hospital & Research Center",
      icon: <Building2 className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
      badgeBg: "bg-blue-50/90 text-blue-900 border-blue-200/80",
      iconBg: "bg-gradient-to-br from-blue-500/15 via-sky-400/10 to-blue-50",
      glowBg: "from-blue-400/20 to-sky-300/10",
      borderHover: "hover:border-blue-400",
    },
    {
      num: "02",
      label: "INDUSTRY",
      value: "Ayurvedic Care & Social Seva",
      sub: "Healthcare, Wellness & Community",
      icon: <Stethoscope className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
      badgeBg: "bg-sky-50/90 text-sky-900 border-sky-200/80",
      iconBg: "bg-gradient-to-br from-sky-500/15 via-blue-400/10 to-sky-50",
      glowBg: "from-sky-400/20 to-blue-300/10",
      borderHover: "hover:border-sky-400",
    },
    {
      num: "03",
      label: "DEVELOPED BY",
      value: "Zentrix Infotech",
      sub: "Information Architecture & UX Design",
      icon: <Globe className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
      badgeBg: "bg-blue-50/90 text-blue-900 border-blue-200/80",
      iconBg: "bg-gradient-to-br from-blue-500/15 via-cyan-400/10 to-sky-50",
      glowBg: "from-blue-400/20 to-cyan-300/10",
      borderHover: "hover:border-blue-400",
    },
    {
      num: "04",
      label: "DESIGN DIRECTION",
      value: "Premium Blue & White",
      sub: "Calming, Professional & Trustworthy",
      icon: <Sparkles className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
      badgeBg: "bg-sky-50/90 text-sky-900 border-sky-200/80",
      iconBg: "bg-gradient-to-br from-blue-600/15 via-sky-400/10 to-blue-50",
      glowBg: "from-blue-500/20 to-sky-300/10",
      borderHover: "hover:border-blue-400",
    },
  ];

  // ── 2. Four Pillars ──────────────────────────────────────────────
  const fourPillars = [
    {
      code: "01",
      title: "Discover",
      subtitle: "Institutional Heritage & Mission",
      desc: "Introduce Balprada's history tracing back to 1991, core values of healing and seva, and the overall healthcare ecosystem to new visitors.",
      icon: <Compass className="w-6 h-6 text-blue-600" />,
      highlight: "Foundational trust & story",
    },
    {
      code: "02",
      title: "Explore",
      subtitle: "Categorized Care & Initiatives",
      desc: "Organize medical treatments, Panchakarma wellness programmes, herbal products, and social Jansewa initiatives into clearly defined sections.",
      icon: <Search className="w-6 h-6 text-sky-600" />,
      highlight: "Structured taxonomy",
    },
    {
      code: "03",
      title: "Understand",
      subtitle: "Transparent Care Journey",
      desc: "Use informative layouts, patient-centric content, and subtle visual cues to explain the care approach, therapies, and ashram environment.",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      highlight: "Clear educational UX",
    },
    {
      code: "04",
      title: "Connect",
      subtitle: "Seamless Contact & Enquiries",
      desc: "Make appointment requests, consultation hours, direct telephone lines, and branch locations straightforward for visitors to access.",
      icon: <Phone className="w-6 h-6 text-sky-600" />,
      highlight: "Direct action pathways",
    },
  ];

  // ── 3. Ecosystem Nodes (Diagram 1) ────────────────────────────────
  const ecosystemNodes = [
    {
      id: "ayurvedic",
      title: "Ayurvedic Care",
      subtitle: "Traditional Diagnosis & Consultations",
      desc: "Personalized herbal remedies, root-cause consultations, and classic Ayurvedic treatment plans supervised by experienced Vaidyas.",
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      color: "#1769AA",
    },
    {
      id: "panchakarma",
      title: "Panchakarma",
      subtitle: "Body Purification & Detoxification",
      desc: "Five-fold purification therapies designed to eliminate toxins, restore metabolic balance, and rejuvenate bodily tissues.",
      icon: <Sparkles className="w-6 h-6 text-sky-600" />,
      color: "#3B82C4",
    },
    {
      id: "wellness",
      title: "Wellness Programmes",
      subtitle: "Holistic Mind-Body Discipline",
      desc: "Coordinated practice of Yoga, Naturopathy, Meditation, and Physiotherapy for comprehensive physical and mental well-being.",
      icon: <Sun className="w-6 h-6 text-blue-700" />,
      color: "#102A43",
    },
    {
      id: "herbal",
      title: "Herbal Wellness",
      subtitle: "Ayurvedic Formulations & Products",
      desc: "In-house prepared herbal wellness items, traditional oils, and medicinal formulations crafted with traditional purity.",
      icon: <Feather className="w-6 h-6 text-sky-500" />,
      color: "#0284C7",
    },
    {
      id: "jansewa",
      title: "Jansewa Initiatives",
      subtitle: "Community Care & Seva Projects",
      desc: "Social service ecosystem encompassing elder care, Navtarun Ashram, residential care support, and Gaushala-based seva.",
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      color: "#1D4ED8",
    },
  ];

  // ── 4. Visitor Journey Steps (Diagram 2) ──────────────────────────
  const journeySteps = [
    {
      step: "01",
      title: "Discover Balprada",
      desc: "Visitor lands on the platform and gets a clear introduction to the ashram's 35+ year heritage, values, and holistic healing philosophy.",
      icon: <Compass className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "02",
      title: "Explore Services",
      desc: "Browse distinct categories including clinical Ayurvedic consultations, Panchakarma therapies, wellness disciplines, and community care.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "03",
      title: "Understand Care Approach",
      desc: "Review comprehensive treatment guides, consultation expectations, daily schedules, and the ashram's natural environment.",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "04",
      title: "Review Branch Info",
      desc: "Locate clinic details, consultation timings, 7-day availability, and branch addresses (Main Branch & Moradabad Branch).",
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "05",
      title: "Contact the Team",
      desc: "Initiate direct phone calls, submit appointment enquiry forms, or request consultation schedules with minimal effort.",
      icon: <Send className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 5. Institutional History Timeline (Diagram 3) ─────────────────
  const institutionalTimeline = [
    {
      year: "1991",
      badge: "Foundation of Seva",
      title: "Establishment of the Institution",
      desc: "Sw. Vaidya Vijay Pal Singh Ji established Balprada with a vision centered on traditional Ayurvedic healing, selfless seva, and community service.",
      icon: <Award className="w-6 h-6 text-blue-600" />,
    },
    {
      year: "Today",
      badge: "Holistic Health Hub",
      title: "Ayurvedic Care & Wellness Ecosystem",
      desc: "Evolved into a comprehensive hospital and research center offering Panchakarma, Yoga, Naturopathy, Meditation, Physiotherapy, and Herbal Wellness.",
      icon: <Activity className="w-6 h-6 text-blue-600" />,
    },
    {
      year: "Continuing Mission",
      badge: "Community Care",
      title: "Jansewa & Social Welfare",
      desc: "Expanding community support through elder care at Navtarun Ashram, residential care support, and Gaushala-based seva activities.",
      icon: <Heart className="w-6 h-6 text-blue-600" />,
    },
  ];

  // ── 6. Service Architecture Groups (Diagram 4) ────────────────────
  const architectureGroups = [
    {
      id: "healthcare",
      title: "Healthcare Architecture",
      badge: "Clinical Care",
      color: "bg-blue-600 text-white",
      borderColor: "border-blue-300",
      bgLight: "bg-blue-50/70",
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      desc: "Focuses on clinical diagnosis, specialized medical consultations, condition management, and structured post-consultation follow-up care.",
      items: [
        { name: "Ayurvedic Consultation", desc: "Pulse diagnosis (Nadi Pariksha) & root-cause analysis." },
        { name: "Condition-Based Care", desc: "Tailored treatments for chronic joint, digestive, & metabolic ailments." },
        { name: "Follow-Up Guidance", desc: "Dietary plans (Ahara) & lifestyle routines (Vihara) tracking." },
      ],
    },
    {
      id: "wellness",
      title: "Wellness Architecture",
      badge: "Holistic Disciplines",
      color: "bg-sky-600 text-white",
      borderColor: "border-sky-300",
      bgLight: "bg-sky-50/70",
      icon: <Sun className="w-6 h-6 text-sky-600" />,
      desc: "Integrates five core restorative disciplines into a harmonious rejuvenation experience for retreat attendees and resident patients.",
      items: [
        { name: "Panchakarma Detox", desc: "Abhyanga, Shirodhara, Vamana, Virechana & Basti therapies." },
        { name: "Yoga & Meditation", desc: "Pranayama, therapeutic postures, & mindfulness sessions." },
        { name: "Naturopathy & Physio", desc: "Hydrotherapy, mud therapy, & movement rehabilitation." },
      ],
    },
    {
      id: "community",
      title: "Community & Herbal Architecture",
      badge: "Social Initiatives & Products",
      color: "bg-slate-800 text-white",
      borderColor: "border-slate-300",
      bgLight: "bg-slate-50",
      icon: <Heart className="w-6 h-6 text-slate-700" />,
      desc: "Dedicated structure for Balprada's social welfare wings and authentic herbal remedy distribution to support society.",
      items: [
        { name: "Jansewa & Elder Care", desc: "Navtarun Ashram shelter, compassionate support for seniors." },
        { name: "Gaushala Seva", desc: "Indigenous cow protection, organic wellness, & seva care." },
        { name: "Herbal Products", desc: "Traditional churnas, tailas, & daily wellness supplements." },
      ],
    },
  ];

  // ── 7. Website Experience & Feature Showcase Tabs ────────────────
  const featureShowcase = [
    {
      title: "Institution Overview",
      subtitle: "Heritage, Vision & Seva Values",
      desc: "Presents Balprada's 35-year legacy since 1991, detailing Sw. Vaidya Vijay Pal Singh Ji's vision. Clear typography and spacious layouts communicate trust, compassionate care, and research-backed Ayurveda.",
      tags: ["Heritage 1991", "Mission & Values", "Ayurvedic Philosophy", "Seva Focus"],
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      details: [
        "Structured narrative of 35+ years of traditional care",
        "Clear highlights of 7-day availability and multi-branch infrastructure",
        "Introduction to senior Vaidyas and care team",
        "Emphasis on ethical, authentic Ayurvedic methodology",
      ],
    },
    {
      title: "Treatment Discovery",
      subtitle: "Condition-Specific Ayurvedic Care",
      desc: "Categorized content structures help visitors navigate clinical care options, understand holistic diagnostic procedures, and read authentic information on managing chronic ailments naturally.",
      tags: ["Nadi Pariksha", "Chronic Care", "Dietary Guidance", "Root-Cause Focus"],
      icon: <Stethoscope className="w-5 h-5 text-sky-600" />,
      details: [
        "Categorized clinical treatment index",
        "Step-by-step diagnostic process explanation",
        "Customized herbal prescription highlights",
        "Integrated dietary and lifestyle recovery advice",
      ],
    },
    {
      title: "Ashram & Wellness Programmes",
      subtitle: "5 Core Rejuvenation Disciplines",
      desc: "A coordinated presentation of Panchakarma, Yoga, Naturopathy, Meditation, and Physiotherapy. Each discipline maintains an individual visual identity while adhering to the overall blue-and-white visual system.",
      tags: ["Panchakarma", "Yoga", "Naturopathy", "Meditation", "Physiotherapy"],
      icon: <Sun className="w-5 h-5 text-blue-600" />,
      details: [
        "Dedicated treatment cards for Panchakarma therapies (Shirodhara, Abhyanga)",
        "Daily ashram routine schedules for retreat guests",
        "Interdisciplinary wellness guides linking Yoga with Naturopathy",
        "Physiotherapy integration for musculoskeletal recovery",
      ],
    },
    {
      title: "Herbal Wellness & Products",
      subtitle: "Authentic Formulation Showcase",
      desc: "Content experience highlighting Balprada's in-house herbal wellness preparations, explaining ingredients, traditional production ethics, and daily health supplements.",
      tags: ["In-House Formulations", "Herbal Oils", "Natural Supplements", "Purity Focus"],
      icon: <Feather className="w-5 h-5 text-sky-600" />,
      details: [
        "Product catalog layout with clear benefits and usage instructions",
        "Explanation of traditional preparation standards",
        "Direct connection to ashram pharmacy consultation",
        "Educational guides on daily herbal wellness routines",
      ],
    },
    {
      title: "Jansewa & Community Initiatives",
      subtitle: "Social Seva & Elder Care",
      desc: "Heartwarming presentation of Balprada's social initiatives, including Navtarun Ashram for elder care, residential assistance, and Gaushala-based seva.",
      tags: ["Navtarun Ashram", "Elder Care", "Gaushala Seva", "Community Support"],
      icon: <Heart className="w-5 h-5 text-blue-600" />,
      details: [
        "Dedicated section for Navtarun Ashram residential support",
        "Visual storytelling for Gaushala and animal welfare",
        "Transparent updates on social service activities",
        "Clear pathways for volunteers and community supporters",
      ],
    },
    {
      title: "Appointment & Contact Experience",
      subtitle: "Branch Details & Consultation Hours",
      desc: "Direct access to phone lines, branch addresses (Main Branch & Moradabad Branch), 7-day consultation timings, and intuitive enquiry forms for instant connection.",
      tags: ["Main Branch", "Moradabad Branch", "7-Day Access", "Quick Enquiry"],
      icon: <Phone className="w-5 h-5 text-sky-600" />,
      details: [
        "Separated branch cards with clickable address maps",
        "7-day operational schedule transparency",
        "Touch-friendly quick-dial buttons for mobile users",
        "Simple, validated appointment request form",
      ],
    },
  ];

  // ── 8. Business & User Value Highlights ────────────────────────────
  const businessValues = [
    {
      title: "Coherent Ecosystem Navigation",
      desc: "Unified clinical care, wellness retreats, products, and social work under one intuitive architecture without confusing visitors.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Enhanced Patient Reassurance",
      desc: "Clear display of 35-year legacy, Vaidya expertise, and authentic institution history builds confidence for first-time visitors.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Distinction of Wellness Disciplines",
      desc: "Visitors easily understand the difference between Ayurvedic clinical care, Panchakarma, Naturopathy, Meditation, and Physiotherapy.",
      icon: <Layers className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Frictionless Branch & Contact Access",
      desc: "Prominent display of clinic timings, telephone contacts, and branch locations simplifies visiting and booking consultations.",
      icon: <Clock className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Dignified Community Showcase",
      desc: "Elevated presentation of Jansewa, Navtarun Ashram, and Gaushala initiatives reflects the institution's true spirit of seva.",
      icon: <Heart className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Accessible Multi-Device UX",
      desc: "High text contrast, touch-friendly components, and fast loading performance ensure seamless access for patients of all age groups.",
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 9. Institutional Highlights Data Cards ─────────────────────────
  const institutionalHighlights = [
    { number: "1991", label: "Foundation Year", detail: "Established by Sw. Vaidya Vijay Pal Singh Ji" },
    { number: "35+", label: "Years Experience", detail: "Legacy of authentic Ayurvedic healing & seva" },
    { number: "7 Days", label: "Clinic Availability", detail: "Open throughout the week for consultations" },
    { number: "2", label: "Active Branches", detail: "Main Ashram Branch & Moradabad Branch" },
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
              Ayurvedic Healthcare & Wellness
            </span>
            <a
              href="https://www.balpradaindia.com/"
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
        {/* Background Subtle Shapes */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb / Category Tag */}
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
              Premium Blue & White Design System
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight mb-4">
                Balprada Ashram
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#1769AA] mb-6 leading-relaxed">
                Bringing Ayurveda, Holistic Wellness & Community Care Into a Unified Digital Experience
              </p>
              <p className="text-base text-[#425466] leading-relaxed mb-8 max-w-2xl">
                Balprada Ayurvedic Hospital & Research Center combines traditional clinical care, personalized consultations, herbal formulations, Panchakarma rejuvenation, and social service initiatives. Zentrix Infotech crafted a clean, reassuring website architecture that communicates 35+ years of healing heritage and seva.
              </p>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.balpradaindia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
                >
                  <span>Explore Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hero Right Visual Branding Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-16 h-16 rounded-xl bg-blue-50 p-2 border border-blue-100 flex items-center justify-center shadow-inner">
                    <img
                      src="https://res.cloudinary.com/dxpyhablz/image/upload/v1786517145/balprada_logo_qeeg9m.png"
                      alt="Balprada Ashram Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#102A43]">Balprada Ashram</h3>
                    <p className="text-xs text-slate-500">Ayurvedic Hospital & Research Center</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-emerald-700">Official Website Live</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Established</span>
                    <span className="font-bold text-[#102A43]">1991 (35+ Years Heritage)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Founder Vision</span>
                    <span className="font-bold text-[#102A43]">Sw. Vaidya Vijay Pal Singh Ji</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Branches</span>
                    <span className="font-bold text-[#102A43]">Main Branch & Moradabad Branch</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Core Focus</span>
                    <span className="font-bold text-[#1769AA]">Ayurveda, Panchakarma & Jansewa</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="font-medium text-slate-500">Color System</span>
                    <span className="font-bold text-[#102A43]">Zentrix Blue & White</span>
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
                  Legacy Tracing Back to 1991
                </h3>
                <p className="text-sm text-[#425466] leading-relaxed mb-6">
                  Balprada Ayurvedic Hospital & Research Center was founded with a deep commitment to authentic healing, selfless seva, and holistic community well-being.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Established by Sw. Vaidya Vijay Pal Singh Ji</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Integrates clinical Ayurveda with Panchakarma & Naturopathy</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Houses Navtarun Ashram for elder care & social welfare</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
                01 — Project Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-6">
                Organizing a Multifaceted Healing Ecosystem Into a Unified Digital Journey
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Balprada Ayurvedic Hospital & Research Center represents a broad spectrum of care—ranging from specialized medical consultations and 5-fold Panchakarma rejuvenation to herbal product formulations and community-centric Jansewa initiatives.
                </p>
                <p>
                  The primary objective of the web application built by Zentrix Infotech is to present this extensive ecosystem through a clear, accessible, and structured digital platform. Visitors can quickly discover available therapies, learn about the institution's 35-year heritage, understand consultation procedures, and find direct pathways to connect with doctors across branches.
                </p>
                <p>
                  By striking a balanced tone between traditional Ayurvedic principles and modern digital design standards, the website establishes instant trust for prospective patients and community members alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Challenge ─────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              02 — The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Navigating Interconnected Healthcare, Wellness & Seva Areas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Presenting a institution that encompasses clinical treatment, retreat wellness, products, and social welfare requires more than standard website templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769AA] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Complex Ecosystem</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Organizing clinical medical care, Panchakarma, herbal products, and social initiatives into an intuitive, non-confusing hierarchy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769AA] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Patient Confidence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Presenting the institution's 35-year legacy, Vaidya expertise, and care philosophy in a reassuring, authentic, and professional manner.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769AA] flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Clear Service Discovery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Helping visitors distinguish clearly between Ayurvedic consultation, Panchakarma, Yoga, Naturopathy, Meditation, and Physiotherapy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769AA] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Accessible Appointment Data</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Making branch locations (Main & Moradabad Branch), consultation timings, and quick enquiry options easily accessible on mobile.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769AA] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Balanced Heritage & Modernity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Harmonizing traditional Ayurvedic cultural values and spiritual seva roots with a clean, responsive, and state-of-the-art digital interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Four Pillars of Digital Approach ──────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              03 — Digital Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Four Pillars of the Balprada Experience
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Zentrix Infotech's design direction focuses on clarity, trust, intuitive navigation, and a harmonious visual language.
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

      {/* ── Section 6 Diagram 1: Balprada Care Ecosystem ─────────────── */}
      <section id="care-ecosystem" className="py-16 md:py-20 bg-[#102A43] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Interactive Visual • Diagram 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
              Balprada's Care Ecosystem Architecture
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              A interconnected visual matrix depicting the five surrounding pillars connected to the central Balprada institution node.
            </p>
          </div>

          {/* Ecosystem Visual Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Node Selectors */}
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Click any surrounding node to inspect care details:
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

            {/* Right Center Diagram Graphic & Details */}
            <div className="lg:col-span-7">
              <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10">
                {/* Central Hub Display */}
                <div className="flex items-center justify-center my-6">
                  <div className="relative">
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full bg-sky-500/20 animate-ping pointer-events-none" />
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#1769AA] to-[#102A43] border-4 border-sky-400/60 shadow-2xl flex flex-col items-center justify-center text-center p-2 relative z-10">
                      <span className="text-xs font-bold tracking-widest text-sky-300 uppercase">HUB</span>
                      <span className="text-sm font-black text-white">BALPRADA</span>
                    </div>
                  </div>
                </div>

                {/* Selected Node Details Box */}
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

      {/* ── Section 6 Diagram 2: Visitor Journey Stepper ────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              The Digital Visitor Journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A 5-stage process timeline guiding prospective patients from discovery to direct appointment enquiry.
            </p>
          </div>

          {/* Desktop Horizontal Process Timeline */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-4 z-0" />
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveJourneyStep(idx)}
                className={`relative z-10 cursor-pointer p-5 rounded-2xl transition-all border ${
                  activeJourneyStep === idx
                    ? "bg-[#102A43] text-white border-[#102A43] shadow-lg -translate-y-1"
                    : "bg-[#F5F9FF] text-slate-700 border-blue-100 hover:border-blue-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      activeJourneyStep === idx
                        ? "bg-sky-400/20 text-sky-300"
                        : "bg-blue-100 text-[#1769AA]"
                    }`}
                  >
                    STEP {step.step}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg ${
                      activeJourneyStep === idx ? "bg-white/10 text-white" : "bg-white text-[#1769AA]"
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-sm font-bold mb-2">{step.title}</h3>
                <p
                  className={`text-xs leading-relaxed ${
                    activeJourneyStep === idx ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Stepper */}
          <div className="lg:hidden space-y-4">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveJourneyStep(idx)}
                className={`p-5 rounded-xl border transition-all ${
                  activeJourneyStep === idx
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

      {/* ── Section 6 Diagram 3: Institutional Journey Timeline ─────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 3
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Institutional Journey & History Timeline
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Communicating Balprada's evolution from its 1991 foundation into a modern hospital and community care network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {institutionalTimeline.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-blue-100 shadow-sm relative hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-[#1769AA]">
                      {item.year}
                    </span>
                    <div className="p-2 rounded-xl bg-blue-50">{item.icon}</div>
                  </div>
                  <span className="inline-block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-bold text-[#102A43] mb-3">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#1769AA]">
                  <CircleDot className="w-3.5 h-3.5 text-blue-500" />
                  <span>Heritage Pillar {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6 Diagram 4: Service Architecture Groups ───────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 4
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Website Content Architecture
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Organizing all digital offerings into three distinct, interconnected architectural groups under one design system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {architectureGroups.map((group) => (
              <div
                key={group.id}
                className={`p-7 rounded-2xl border ${group.borderColor} ${group.bgLight} transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${group.color}`}>
                      {group.badge}
                    </span>
                    <div className="p-2 rounded-xl bg-white shadow-sm">{group.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] mb-2">{group.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{group.desc}</p>

                  <div className="space-y-3">
                    {group.items.map((item, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                        <h4 className="text-xs font-bold text-[#102A43] mb-0.5">{item.name}</h4>
                        <p className="text-[11px] text-slate-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-slate-500 font-medium flex items-center justify-between">
                  <span>Architecture Group</span>
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Website Experience & Feature Showcase ─────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              04 — Website Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Key Website Experience & Feature Modules
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore the dedicated feature sections engineered to present Balprada's comprehensive offerings.
            </p>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {featureShowcase.map((feat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFeatureTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  activeFeatureTab === idx
                    ? "bg-[#102A43] text-white border-[#102A43] shadow-md"
                    : "bg-white text-slate-600 border-blue-100 hover:bg-blue-50"
                }`}
              >
                {feat.icon}
                <span>{feat.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Showcase Box */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-blue-100 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-blue-50">{featureShowcase[activeFeatureTab].icon}</div>
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
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-50 text-[#1769AA] border border-blue-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Decorative Feature Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#F5F9FF] p-6 rounded-2xl border border-blue-100 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-sm p-3 border border-blue-100 mb-4 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dxpyhablz/image/upload/v1786517145/balprada_logo_qeeg9m.png"
                      alt="Balprada Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h4 className="text-base font-bold text-[#102A43] mb-1">
                    {featureShowcase[activeFeatureTab].title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Official Balprada Digital Component
                  </p>
                  <a
                    href="https://www.balpradaindia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all"
                  >
                    <span>View on Official Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5 & 7: Visual Design System & Card Patterns ─────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              05 & 07 — Design System
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Zentrix Blue & White Palette & Component UI
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A harmonious color spectrum, restrained hover interactions, and structured card patterns designed for reassurance.
            </p>
          </div>

          {/* Color Palette Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-14">
            {[
              { name: "Primary Blue", hex: "#1769AA", bg: "bg-[#1769AA]", text: "text-white" },
              { name: "Deep Navy", hex: "#102A43", bg: "bg-[#102A43]", text: "text-white" },
              { name: "Soft Blue", hex: "#EAF4FF", bg: "bg-[#EAF4FF]", text: "text-[#102A43]" },
              { name: "Light Background", hex: "#F5F9FF", bg: "bg-[#F5F9FF]", text: "text-[#102A43]" },
              { name: "Pure White", hex: "#FFFFFF", bg: "bg-white", text: "text-[#102A43]", border: true },
              { name: "Body Text", hex: "#425466", bg: "bg-[#425466]", text: "text-white" },
              { name: "Accent Blue", hex: "#3B82C4", bg: "bg-[#3B82C4]", text: "text-white" },
            ].map((col, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl shadow-xs text-center border ${
                  col.border ? "border-slate-200" : "border-transparent"
                } ${col.bg}`}
              >
                <div className={`text-xs font-bold ${col.text}`}>{col.name}</div>
                <div className={`text-[11px] font-mono mt-1 opacity-90 ${col.text}`}>{col.hex}</div>
              </div>
            ))}
          </div>

          {/* Card Patterns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F5F9FF] border border-blue-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1769AA] flex items-center justify-center mb-3">
                <Stethoscope className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#102A43] mb-1">Service Card Pattern</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                White backdrop, subtle blue icon container, concise description, and smooth 2px lift effect on hover.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F9FF] border border-blue-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1769AA] flex items-center justify-center mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#102A43] mb-1">Heritage Card Pattern</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Circular year markers, timeline connectors, and short historical milestones dating back to 1991.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F9FF] border border-blue-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1769AA] flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#102A43] mb-1">Contact & Branch Card</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clearly separated branch details (Main & Moradabad), consultation hours, phone numbers, and quick actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 11: Institutional Highlights ──────────────────────── */}
      <section className="py-16 md:py-20 bg-[#102A43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Institutional Facts
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
              Balprada Key Institutional Facts
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Core highlights published by the official website representing 35+ years of dedicated service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutionalHighlights.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-mono mb-2">
                  {stat.number}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{stat.label}</h3>
                <p className="text-xs text-slate-400">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 12: Business Value & Zentrix Expertise ────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              12 — Business & User Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Value Delivered Through Thoughtful Information Design
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured digital platform empowers Balprada to present its services clearly while guiding visitors to consultation pathways.
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

      {/* ── Conclusion & Next Projects CTA ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F5F9FF] to-white border-t border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 text-[#1769AA] border border-blue-200 flex items-center justify-center mb-6 shadow-sm">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] mb-4">
            Transforming Complex Healthcare Ideas Into Thoughtful Digital Experiences
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            The Balprada Ashram case study demonstrates how traditional Ayurvedic values, clinical excellence, and social Jansewa can coexist in a clean, modern digital interface.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.balpradaindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-md text-sm"
            >
              <span>Visit Official Balprada Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#102A43] bg-white border border-blue-200 hover:bg-blue-50 transition-all shadow-sm text-sm"
            >
              <span>Discuss Your Project With Zentrix</span>
              <ArrowRight className="w-4 h-4 text-[#1769AA]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer copyright sub-bar */}
      <footer className="py-6 bg-[#102A43] text-slate-400 text-xs text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Zentrix Infotech. Balprada Ashram Case Study.</p>
        </div>
      </footer>
    </div>
  );
}
