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
  Shield,
  Feather,
  Mail,
  Sliders,
  CheckSquare,
  Info,
  Syringe,
  Microscope,
  Pill,
  Ambulance,
  UserCheck,
  FileSpreadsheet,
} from "lucide-react";

// ─── Brand Colors (Zentrix Blue & White Palette) ────────────────────────
const BLUE_PRIMARY = "#1769AA";
const BLUE_DEEP = "#102A43";
const BLUE_LIGHT = "#EAF4FF";
const BLUE_PALE = "#F5F9FF";
const BLUE_ACCENT = "#3B82C4";
const BODY_TEXT = "#425466";

export default function JigyasaHospitalClient() {
  const [activeEcosystemNode, setActiveEcosystemNode] = useState(0);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [activeDepartmentCategory, setActiveDepartmentCategory] = useState("all");
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  // ── 1. Project Snapshot Cards ─────────────────────────────────────
  const snapshotCards = [
    {
      num: "01",
      label: "PROJECT",
      value: "Jigyasa Hospital",
      sub: "Multispeciality Hospital Platform",
      icon: <Building2 className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "02",
      label: "INDUSTRY",
      value: "Healthcare & Medicine",
      sub: "Multispeciality Medical Care",
      icon: <Stethoscope className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
    },
    {
      num: "03",
      label: "LOCATION",
      value: "Moradabad, UP",
      sub: "Rampur Road, Near Miglani Cinema",
      icon: <MapPin className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "04",
      label: "DESIGN DIRECTION",
      value: "Premium Blue & White",
      sub: "Clinical, Reassuring & Accessible",
      icon: <Sparkles className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
    },
  ];

  // ── 2. The 6 Key Challenges ────────────────────────────────────────
  const challenges = [
    {
      num: "01",
      title: "Organizing Multiple Specialties",
      desc: "Presenting a broad range of 18+ medical departments without overwhelming visitors or confusing service discovery.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "02",
      title: "Building Patient Confidence",
      desc: "Creating a professional, reassuring interface that communicates healthcare credentials and medical expertise clearly.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "03",
      title: "Improving Doctor Discovery",
      desc: "Helping visitors browse medical specialists, view verified qualifications, and identify areas of practice.",
      icon: <Users className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "04",
      title: "Simplifying Appointment Access",
      desc: "Making appointment requests, direct telephone lines, and emergency assistance quick to locate.",
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "05",
      title: "Presenting Hospital Facilities",
      desc: "Organizing information for diagnostic services, pharmacy, health screening, vaccination, and support facilities.",
      icon: <Microscope className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "06",
      title: "Supporting Different Devices",
      desc: "Ensuring patients and families can access emergency and appointment details on mobile, tablet, and desktop screens.",
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 3. Four Pillars ──────────────────────────────────────────────
  const fourPillars = [
    {
      code: "01",
      title: "Discover",
      subtitle: "Hospital Overview & Vision",
      desc: "Introduce Jigyasa Hospital, its multispeciality healthcare approach, key facilities, and emergency care readiness.",
      icon: <Compass className="w-6 h-6 text-blue-600" />,
      highlight: "Institutional orientation",
    },
    {
      code: "02",
      title: "Explore",
      subtitle: "Departments & Specialists",
      desc: "Organize 18+ medical departments, doctor directories, diagnostic wings, and patient support into clearly defined sections.",
      icon: <Search className="w-6 h-6 text-sky-600" />,
      highlight: "Categorized care navigation",
    },
    {
      code: "03",
      title: "Understand",
      subtitle: "Transparent Care Information",
      desc: "Use structured layouts and clear descriptions to explain diagnostic services, health checks, and consultation workflows.",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      highlight: "Informative patient UX",
    },
    {
      code: "04",
      title: "Connect",
      subtitle: "Frictionless Patient Access",
      desc: "Provide straightforward pathways for appointment requests, 24/7 emergency hotlines (7900903333), and location maps.",
      icon: <Phone className="w-6 h-6 text-sky-600" />,
      highlight: "Direct emergency & booking",
    },
  ];

  // ── 4. Ecosystem Nodes (Diagram 1) ────────────────────────────────
  const ecosystemNodes = [
    {
      id: "specialties",
      title: "Medical Specialties",
      subtitle: "18+ Clinical Care Departments",
      desc: "From General Medicine and Cardiology to Neurosurgery and Orthopedics, covering diverse patient care needs under one roof.",
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
    },
    {
      id: "doctors",
      title: "Doctor Directory",
      subtitle: "Specialist Profiles & Credentials",
      desc: "Verified doctor listings detailing designations, medical degrees, areas of practice, and consultation timings.",
      icon: <UserCheck className="w-6 h-6 text-sky-600" />,
    },
    {
      id: "diagnostics",
      title: "Diagnostics & Screening",
      subtitle: "Radiology, Pathology & Testing",
      desc: "Modern diagnostic labs, imaging facilities, routine pathology, and health check-up packages for preventative care.",
      icon: <Microscope className="w-6 h-6 text-blue-700" />,
    },
    {
      id: "facilities",
      title: "Hospital Facilities",
      subtitle: "24/7 Pharmacy & In-Patient Support",
      desc: "Round-the-clock emergency support, in-house pharmacy, vaccination centers, medical documentation, and patient rooms.",
      icon: <Building2 className="w-6 h-6 text-sky-500" />,
    },
    {
      id: "appointments",
      title: "Appointment Services",
      subtitle: "Enquiry & Booking Pathways",
      desc: "Intuitive appointment requests, doctor selection, call-to-book actions, and virtual consultation options.",
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
    },
    {
      id: "education",
      title: "Health Education",
      subtitle: "Patient Blog & Health Articles",
      desc: "Medically reviewed health blogs, wellness tips, disease prevention guides, and community health information.",
      icon: <FileText className="w-6 h-6 text-sky-600" />,
    },
  ];

  // ── 5. Patient Information Journey Steps (Diagram 2) ──────────────
  const journeySteps = [
    {
      step: "01",
      title: "Discover Hospital",
      desc: "Visitor arrives on the platform and gets an immediate overview of Jigyasa Hospital's multispeciality care and 24/7 emergency services.",
      icon: <Compass className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "02",
      title: "Explore Departments",
      desc: "Browse categorized medical specialties such as Cardiology, Orthopedics, Pediatrics, Laparoscopic Surgery, and Neurosurgery.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "03",
      title: "Find a Specialist",
      desc: "Filter doctor profiles, review qualifications, area of practice, and consult doctor schedules for targeted care.",
      icon: <UserCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "04",
      title: "Review Appointment Options",
      desc: "Check clinic hours, available booking methods, emergency numbers (7900903333), and diagnostic test booking.",
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "05",
      title: "Contact the Hospital",
      desc: "Submit an online appointment request, call the emergency desk directly, or navigate to Rampur Road near Miglani Cinema, Moradabad.",
      icon: <Send className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 6. Department Architecture Groups (Diagram 3) ─────────────────
  const departmentGroups = [
    {
      id: "medical",
      title: "Medical Care",
      badge: "Primary & Internal Care",
      color: "bg-blue-600 text-white",
      borderColor: "border-blue-300",
      bgLight: "bg-blue-50/70",
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      desc: "Comprehensive diagnosis and non-surgical management for acute and chronic conditions.",
      items: [
        { name: "General Medicine", desc: "Primary health management & fever/infection care." },
        { name: "Family Medicine", desc: "Holistic health care for all family age groups." },
        { name: "Endocrinology", desc: "Diabetes, thyroid, & hormonal disorder management." },
        { name: "Rheumatology", desc: "Joint pain, arthritis, & autoimmune disease care." },
      ],
    },
    {
      id: "specialist",
      title: "Specialist Care",
      badge: "Organ-Specific Medicine",
      color: "bg-sky-600 text-white",
      borderColor: "border-sky-300",
      bgLight: "bg-sky-50/70",
      icon: <Activity className="w-6 h-6 text-sky-600" />,
      desc: "Advanced organ-specific medical consultations and specialized patient management.",
      items: [
        { name: "Cardiology", desc: "Heart health, ECG, & cardiovascular consultation." },
        { name: "Gynecology & Obs", desc: "Women's health, maternity, & reproductive care." },
        { name: "Pediatrics", desc: "Child health care, growth tracking, & vaccination." },
        { name: "Dermatology & Ophth", desc: "Skin, hair, & specialist eye care consultations." },
        { name: "Gastroenterology", desc: "Digestive, liver, & stomach ailment treatments." },
      ],
    },
    {
      id: "surgical",
      title: "Surgical & Diagnostics",
      badge: "Surgical & Imaging",
      color: "bg-slate-800 text-white",
      borderColor: "border-slate-300",
      bgLight: "bg-slate-50",
      icon: <Syringe className="w-6 h-6 text-slate-700" />,
      desc: "Advanced minimally invasive surgeries, emergency trauma operations, and imaging.",
      items: [
        { name: "Laparoscopic Surgery", desc: "Keyhole abdominal & gallbladder operations." },
        { name: "GI & General Surgery", desc: "Trauma, hernia, & general surgical procedures." },
        { name: "Neurosurgery & Plastic", desc: "Brain/spine care & reconstructive surgery." },
        { name: "Radiology & Pathology", desc: "X-Ray, Ultrasound, CT imaging, & lab diagnostics." },
        { name: "Oral & Maxillofacial", desc: "Facial trauma, jaw, & dental surgical care." },
      ],
    },
  ];

  // ── 7. All 18 Specialties List ────────────────────────────────────
  const allSpecialties = [
    "General Medicine",
    "Cardiology",
    "Gynecology",
    "Pediatrics",
    "Orthopedics",
    "Laparoscopic Surgery",
    "Gastroenterology",
    "Neurosurgery",
    "Dermatology",
    "Endocrinology",
    "Ophthalmology",
    "Radiology",
    "Psychiatry",
    "Rheumatology",
    "Plastic Surgery",
    "Family Medicine",
    "GI & General Surgery",
    "Oral & Maxillofacial Surgery",
  ];

  // ── 8. Key Feature Showcase Tabs ──────────────────────────────────
  const featureShowcase = [
    {
      title: "Multispeciality Department Discovery",
      subtitle: "Categorized Medical Care Layout",
      desc: "Organizes 18+ medical specialties into intuitive categories. Visitors can quickly identify relevant departments, read condition overviews, and access corresponding doctor lists.",
      tags: ["18+ Specialties", "Department Categorization", "Condition Overviews", "Fast Navigation"],
      icon: <Grid className="w-5 h-5 text-blue-600" />,
      details: [
        "Structured category grid for 18+ medical departments",
        "Clear department descriptions and common condition listings",
        "Direct link from department card to associated specialists",
        "Mobile-optimized accordion and grid views",
      ],
    },
    {
      title: "Doctor Profiles & Medical Expertise",
      subtitle: "Verified Specialist Directory",
      desc: "Provides a dedicated space for specialist doctor profiles featuring qualifications, designations, experience, and consultation hours to build trust.",
      tags: ["Doctor Directory", "Qualifications", "Specialty Badges", "Consultation Times"],
      icon: <UserCheck className="w-5 h-5 text-sky-600" />,
      details: [
        "Doctor portrait cards with verified medical degrees (MD, MS, DNB, etc.)",
        "Searchable doctor index filtered by department",
        "Direct CTA buttons to book an appointment with a chosen specialist",
        "Clear consultation schedule and OPD room details",
      ],
    },
    {
      title: "Appointment & Enquiry Experience",
      subtitle: "Frictionless Patient Booking Flow",
      desc: "Features intuitive appointment request forms, virtual consultation pathways, and test booking options to guide patients seamlessly.",
      tags: ["Quick Booking", "Virtual Consultation", "Test Booking", "Validation"],
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
      details: [
        "4-step guided appointment request form",
        "Department and doctor dropdown selection",
        "Instant contact verification and phone callback options",
        "Accessible touch-friendly input fields for all age groups",
      ],
    },
    {
      title: "Hospital Facilities & Patient Support",
      subtitle: "Diagnostics, Pharmacy & Health Checks",
      desc: "Presents supporting medical facilities including 24/7 pharmacy, diagnostic labs, health packages, vaccination centers, and medical document services.",
      tags: ["24/7 Pharmacy", "Diagnostic Testing", "Health Packages", "Vaccination"],
      icon: <Microscope className="w-5 h-5 text-sky-600" />,
      details: [
        "Comprehensive health check-up package listings",
        "Vaccination schedule details for infants and adults",
        "Information on in-house pharmacy and medicine delivery",
        "Guidance on medical documentation and insurance claims",
      ],
    },
    {
      title: "Emergency & Contact Information",
      subtitle: "Rampur Road, Moradabad • 7900903333",
      desc: "Prominently displays emergency contact numbers (7900903333), hospital location near Miglani Cinema on Rampur Road, and 24/7 emergency care availability.",
      tags: ["24/7 Emergency", "Direct Call: 7900903333", "Rampur Road", "Moradabad Location"],
      icon: <Phone className="w-5 h-5 text-blue-600" />,
      details: [
        "Click-to-call emergency button (7900903333) pinned on mobile",
        "Clear address details: Near Miglani Cinema, Rampur Road, Moradabad",
        "Interactive map integration for quick directions",
        "24/7 emergency casualty care availability notice",
      ],
    },
    {
      title: "Healthcare Information & Blog",
      subtitle: "Patient Health Articles & Wellness Tips",
      desc: "Integrated editorial blog featuring health articles, disease prevention guides, and lifestyle advice written to educate patients.",
      tags: ["Health Articles", "Wellness Advice", "Disease Prevention", "Patient Education"],
      icon: <FileText className="w-5 h-5 text-sky-600" />,
      details: [
        "Clean, readable blog typography with category tags",
        "Medically accurate health guidance without unsupported claims",
        "Direct links from health topics to relevant department specialists",
        "Social sharing and easy bookmarking features",
      ],
    },
  ];

  // ── 9. Business Value Cards ────────────────────────────────────────
  const businessValues = [
    {
      title: "Organized Department Structure",
      desc: "18+ specialties presented in clear, logical groups without overwhelming visitors.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Enhanced Patient Confidence",
      desc: "Verified doctor credentials and professional design build trust for new patients.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Immediate Emergency Access",
      desc: "24/7 hotline (7900903333) and Rampur Road location details placed prominently.",
      icon: <Phone className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Streamlined Appointment UX",
      desc: "Simple request flow helps patients request consultations or diagnostic tests quickly.",
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Wider Facility Visibility",
      desc: "Clear showcase of pathology labs, health packages, pharmacy, and vaccination.",
      icon: <Microscope className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Seamless Multi-Device Experience",
      desc: "High text contrast, touch targets, and responsive layout across mobile and desktop.",
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
              Multispeciality Healthcare
            </span>
            <a
              href="https://www.jigyasahospital.com/"
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
              Zentrix Infotech Projects
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs font-semibold text-[#1769AA]">
              Moradabad, Uttar Pradesh
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight mb-4">
                Jigyasa Hospital
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#1769AA] mb-6 leading-relaxed">
                Building a Connected Digital Experience for Multispeciality Healthcare
              </p>
              <p className="text-base text-[#425466] leading-relaxed mb-8 max-w-2xl">
                Jigyasa Hospital provides a broad range of healthcare services in Moradabad, bringing 18+ medical specialties, specialist doctors, diagnostics, pharmacy, and emergency facilities together under one roof. Zentrix Infotech developed a clear, patient-centric digital platform designed for confidence and ease of access.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.jigyasahospital.com/"
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
                  <div className="w-16 h-16 rounded-xl bg-blue-50 p-2 border border-blue-100 flex items-center justify-center shadow-inner">
                    <img
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749287/jigyasahospital.com_-min_frvs9d.png"
                      alt="Jigyasa Hospital Preview"
                      className="max-h-full max-w-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#102A43]">Jigyasa Hospital</h3>
                    <p className="text-xs text-slate-500">Multispeciality Hospital</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-emerald-700">Official Website Live</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Location</span>
                    <span className="font-bold text-[#102A43]">Rampur Road, Moradabad</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Emergency Helpline</span>
                    <span className="font-bold text-emerald-700">7900903333 (24/7)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Specialties</span>
                    <span className="font-bold text-[#1769AA]">18+ Medical Departments</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="font-medium text-slate-500">Visual Identity</span>
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
                  Multispeciality Care Under One Roof
                </h3>
                <p className="text-sm text-[#425466] leading-relaxed mb-6">
                  Jigyasa Hospital serves Moradabad with comprehensive clinical specialties, advanced diagnostics, and round-the-clock emergency support.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Located near Miglani Cinema on Rampur Road, Moradabad</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>24/7 Emergency & Ambulance Helpline: 7900903333</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>18+ Medical Departments with verified doctor profiles</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
                Project Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-6">
                Presenting a Complex Healthcare Ecosystem in an Organized, Patient-Oriented Format
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  For a multispeciality healthcare organization serving patients with diverse medical needs, the digital experience must do more than display basic hospital info. It should help visitors understand available specialties, discover relevant doctors, explore diagnostic facilities, and access appointment or emergency options with total confidence.
                </p>
                <p>
                  Zentrix Infotech created a structured digital platform centered on clear information architecture, high text readability, and accessible design principles. Through intuitive department categorizations and clear doctor directories, the platform simplifies patient navigation across desktop and mobile devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Challenge ─────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Key UX & Information Architecture Challenges Addressed
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Organizing broad medical specialties, doctor directories, diagnostic labs, and emergency contacts into a coherent patient journey.
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

      {/* ── Section 3: Our Digital Approach (Four Pillars) ───────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Digital Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Four Pillars of the Patient Experience
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A consistent visual hierarchy guiding visitors smoothly from initial discovery to appointment booking.
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

      {/* ── Section 6 Diagram 1: Healthcare Ecosystem ───────────────── */}
      <section id="healthcare-ecosystem" className="py-16 md:py-20 bg-[#102A43] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Interactive Visual • Diagram 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
              Jigyasa Hospital Healthcare Ecosystem
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Radial information architecture mapping the six core service groups connected to the central hospital hub.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Node Selectors */}
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select a service group node to inspect:
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
                      <span className="text-xs font-bold tracking-widest text-sky-300 uppercase">CENTER</span>
                      <span className="text-xs font-black text-white">JIGYASA HOSPITAL</span>
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

      {/* ── Section 6 Diagram 2: Patient Information Journey ────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Patient Information Journey Stepper
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A 5-step process timeline showing how prospective patients discover and access medical care.
            </p>
          </div>

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

          {/* Mobile Stepper */}
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

      {/* ── Section 6 Diagram 3: Department Architecture Groups ─────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 3
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Department Content Architecture
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Grouping 18+ medical specialties into three logical clusters for fast discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departmentGroups.map((group) => (
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
                  <span>Category Architecture</span>
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 18 Medical Specialties Tag Cloud ─────────────────────────── */}
      <section className="py-12 bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
            All 18 Published Medical Specialties Available at Jigyasa Hospital
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {allSpecialties.map((spec, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#F5F9FF] text-[#102A43] border border-blue-200/80 hover:bg-blue-100 hover:text-[#1769AA] transition-colors"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Showcase Tabs ────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Key Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Website Experience & Functional Features
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Detailed exploration of key digital modules engineered for Jigyasa Hospital.
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
                    : "bg-white text-slate-600 border-blue-100 hover:bg-blue-50"
                }`}
              >
                {feat.icon}
                <span>{feat.title}</span>
              </button>
            ))}
          </div>

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

              <div className="lg:col-span-5">
                <div className="bg-[#F5F9FF] p-6 rounded-2xl border border-blue-100 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-sm p-2 border border-blue-100 mb-4 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749287/jigyasahospital.com_-min_frvs9d.png"
                      alt="Jigyasa Preview"
                      className="max-h-full max-w-full object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-base font-bold text-[#102A43] mb-1">
                    {featureShowcase[activeFeatureTab].title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Jigyasa Hospital Digital Module
                  </p>
                  <a
                    href="https://www.jigyasahospital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all"
                  >
                    <span>View Live Module</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Value Section ───────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Business & User Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Delivering Tangible Healthcare Digital Value
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Enhancing hospital visibility, doctor discoverability, and emergency patient response.
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
            Transforming Ideas Into Thoughtful Digital Experiences
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            The Jigyasa Hospital case study highlights the impact of structured information design in presenting a broad multispeciality healthcare ecosystem clearly and confidently.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.jigyasahospital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-md text-sm"
            >
              <span>Visit Official Jigyasa Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#102A43] bg-white border border-blue-200 hover:bg-blue-50 transition-all shadow-sm text-sm"
            >
              <span>Discuss Your Healthcare Project</span>
              <ArrowRight className="w-4 h-4 text-[#1769AA]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer copyright sub-bar */}
      <footer className="py-6 bg-[#102A43] text-slate-400 text-xs text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Zentrix Infotech. Jigyasa Hospital Case Study.</p>
        </div>
      </footer>
    </div>
  );
}
