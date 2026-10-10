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
  Eye,
  Activity,
  Stethoscope,
  ClipboardList,
  MapPin,
  Clock,
  HelpCircle,
  Check,
  BarChart3,
  TrendingUp,
  Workflow,
  Share2,
  Grid,
  Calendar,
  MessageSquare,
  Building2,
  ChevronRight,
  Briefcase,
  FileText,
  GraduationCap,
  Microscope,
  CircleDot,
} from "lucide-react";

// ─── Brand colours (Healthcare blue-white) ────────────────────────
const BLUE_PRIMARY = "#1769AA";
const BLUE_DEEP = "#102A43";
const BLUE_LIGHT = "#EAF4FF";
const BLUE_PALE = "#F5F9FF";
const BLUE_ACCENT = "#3B82C4";
const BODY_TEXT = "#425466";

export default function OracleHospitalClient() {
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const [activeServiceCategory, setActiveServiceCategory] = useState("all");

  // ── 1. Project Snapshot Nodes ──────────────────────────────────
  const summaryDetails = [
    {
      num: "01",
      label: "CLIENT",
      value: "Oracle Eye Hospital",
      sub: "Ophthalmology & Eye Care",
      icon: <Eye className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
      badgeBg: "bg-blue-50/90 text-blue-900 border-blue-200/80",
      iconBg: "bg-gradient-to-br from-blue-500/15 via-sky-400/10 to-blue-50",
      glowBg: "from-blue-400/20 to-sky-300/10",
      borderHover: "hover:border-blue-400",
      pillIcon: <Eye className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "02",
      label: "INDUSTRY",
      value: "Healthcare & Ophthalmology",
      sub: "Advanced Eye Care Services",
      icon: <Stethoscope className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
      badgeBg: "bg-sky-50/90 text-sky-900 border-sky-200/80",
      iconBg: "bg-gradient-to-br from-sky-500/15 via-blue-400/10 to-sky-50",
      glowBg: "from-sky-400/20 to-blue-300/10",
      borderHover: "hover:border-sky-400",
      pillIcon: <Activity className="w-3.5 h-3.5 text-sky-600" />,
    },
    {
      num: "03",
      label: "PROJECT TYPE",
      value: "Hospital Website & Patient UX",
      sub: "Digital Patient Experience",
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
      sub: "Design & Development",
      icon: <Award className="w-5 h-5 text-sky-600" />,
      badgeBg: "bg-indigo-50/90 text-indigo-900 border-indigo-200/80",
      iconBg: "bg-gradient-to-br from-indigo-500/15 via-blue-400/10 to-indigo-50",
      glowBg: "from-indigo-400/20 to-blue-300/10",
      borderHover: "hover:border-indigo-400",
      pillIcon: <Award className="w-3.5 h-3.5 text-indigo-600" />,
    },
  ];

  // ── 2. Hospital Stats ──────────────────────────────────────────
  const hospitalStats = [
    {
      num: "25,000+",
      label: "Surgeries Done",
      icon: <Microscope className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      desc: "Successful ophthalmic procedures",
    },
    {
      num: "50,000+",
      label: "Happy Patients",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      desc: "Patients who've trusted our care",
    },
    {
      num: "15+",
      label: "Years of Excellence",
      icon: <Star className="w-6 h-6 text-amber-500" />,
      desc: "Decades of specialist eye care",
    },
  ];

  // ── 3. Client Requirements ─────────────────────────────────────
  const clientRequirements = [
    {
      num: "01",
      title: "Professional Healthcare Identity",
      desc: "Present a trustworthy, modern hospital presence that reflects Oracle Eye Hospital's credibility, clinical expertise, and patient-centric approach.",
      icon: <ShieldCheck className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tag: "Brand Trust",
    },
    {
      num: "02",
      title: "Service Discovery",
      desc: "Make specialist eye care services — from cataract surgery to pediatric ophthalmology — easy to explore and understand for patients at any stage of their care journey.",
      icon: <Layers className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
      tag: "Navigation",
    },
    {
      num: "03",
      title: "Doctor Information",
      desc: "Help visitors discover the hospital's specialist team through dedicated doctor profiles showing professional qualifications and areas of expertise.",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      tag: "Specialist Profiles",
    },
    {
      num: "04",
      title: "Appointment Enquiries",
      desc: "Provide a clear, frictionless path for patients to request an appointment — with contact forms, phone numbers, and working hour details easy to locate.",
      icon: <Calendar className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tag: "Appointment Access",
    },
    {
      num: "05",
      title: "Patient Education",
      desc: "Organize frequently asked questions and relevant eye care information to help patients understand services, prepare for their visit, and feel reassured.",
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
      tag: "Patient Information",
    },
    {
      num: "06",
      title: "Responsive Experience",
      desc: "Support visitors browsing on desktop, tablet, and mobile with consistent layouts, readable typography, and accessible navigation across all screen sizes.",
      icon: <Smartphone className="w-6 h-6 text-sky-600" />,
      tag: "Multi-Device",
    },
    {
      num: "07",
      title: "Hospital Information",
      desc: "Make contact details, the hospital's Moradabad address, telephone numbers, and working hours easy to find for patients planning their next visit.",
      icon: <MapPin className="w-6 h-6 text-rose-500" />,
      tag: "Location & Contact",
    },
  ];

  // ── 4. Challenges & Solutions ──────────────────────────────────
  const challengesAndSolutions = [
    {
      challenge: "Organizing Multiple Specialties",
      challengeDesc:
        "Oracle Eye Hospital provides care across several ophthalmology specialties. Presenting these services clearly helps visitors identify the information relevant to their own eye care needs.",
      solution: "Structured Service Discovery",
      solutionDesc:
        "Eye care services were organized into clear categories — comprehensive care, specialist clinics, and patient support — allowing visitors to navigate the hospital's breadth of offerings without feeling overwhelmed.",
      icon: <Layers className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      challenge: "Building Patient Confidence",
      challengeDesc:
        "Patients often want to understand the hospital, its doctors, and its facilities before arranging a visit. The website needs a clear information hierarchy to support this research.",
      solution: "Specialist-Led Presentation",
      solutionDesc:
        "Doctors and their professional profiles were given a dedicated place in the experience, helping visitors learn about the medical team and develop confidence in the hospital before taking the next step.",
      icon: <Users className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
    },
    {
      challenge: "Simplifying Appointment Discovery",
      challengeDesc:
        "Appointment-related information should be easy to locate, with a clear, straightforward route from browsing services to contacting the hospital for a consultation.",
      solution: "Appointment-Focused Navigation",
      solutionDesc:
        "Appointment forms and contact information were made easy to discover throughout the patient journey, keeping enquiry pathways visible and accessible at every stage of browsing.",
      icon: <Calendar className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      challenge: "Making Medical Information Accessible",
      challengeDesc:
        "Visitors may be unfamiliar with medical terminology. Service descriptions, FAQs, and specialist information need readable typography, logical sections, and a consistent layout.",
      solution: "Consistent Healthcare UI",
      solutionDesc:
        "A professional blue-and-white design direction, readable typography, clear spacing, and responsive layouts were used to present complex medical information in an accessible, reassuring way.",
      icon: <Eye className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
    },
  ];

  // ── 5. Key Features ────────────────────────────────────────────
  const keyFeatures = [
    {
      id: "services",
      title: "01. Eye Care Services",
      subtitle: "Comprehensive Specialist Service Presentation",
      desc: "The website presents Oracle Eye Hospital's full spectrum of ophthalmology services — from routine eye examinations and cataract care to specialist clinics for glaucoma, retina, and pediatric eye conditions.",
      points: [
        "Service categories organized for intuitive exploration by patients",
        "Concise, accessible descriptions avoiding overwhelming medical jargon",
        "Clear pathways from service discovery toward appointment enquiry",
      ],
      icon: <Eye className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
      badge: "Full Spectrum Care",
    },
    {
      id: "doctors",
      title: "02. Doctor Profiles",
      subtitle: "Specialist Team Introduction",
      desc: "A dedicated specialist section introduces members of the medical team, presenting their professional qualifications and areas of expertise — helping patients make an informed decision about their care.",
      points: [
        "Individual specialist profiles with qualification and expertise details",
        "Professional photography and credentials presented consistently",
        "Dedicated section reinforcing hospital's clinical authority",
      ],
      icon: <Users className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
      badge: "Expert Team",
    },
    {
      id: "appointments",
      title: "03. Appointment Booking",
      subtitle: "Frictionless Patient Enquiry",
      desc: "An appointment enquiry form collects relevant visitor information and allows patients to request a consultation — designed to make the first step toward care as straightforward as possible.",
      points: [
        "Enquiry form capturing patient details and preferred appointment times",
        "Phone numbers and working hours clearly presented alongside the form",
        "Appointment CTAs embedded across service pages and specialist sections",
      ],
      icon: <Calendar className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
      badge: "Conversion Focus",
    },
    {
      id: "faqs",
      title: "04. Patient FAQs",
      subtitle: "Eye Care Information & Visit Preparation",
      desc: "Frequently asked questions help visitors understand appointment arrangements, first-visit preparation, and available eye care services — reducing uncertainty and supporting patient confidence before their first visit.",
      points: [
        "Organized FAQ categories covering appointments, services, and preparation",
        "Accessible, concise answers to common patient concerns",
        "Designed to reduce pre-visit anxiety and support informed decision making",
      ],
      icon: <HelpCircle className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
      badge: "Patient Education",
    },
    {
      id: "contact",
      title: "05. Hospital Contact & Location",
      subtitle: "Moradabad Address, Phone & Hours",
      desc: "Contact details, the hospital's Moradabad address, telephone numbers, and working hours are clearly presented — supporting visitors at every stage of planning their visit to Oracle Eye Hospital.",
      points: [
        "Full address, map integration, and contact numbers prominently displayed",
        "Working hours and emergency contact information easily accessible",
        "Location section supporting walk-in and planned visit planning",
      ],
      icon: <MapPin className="w-5 h-5 text-rose-500" />,
      badge: "Accessibility",
    },
    {
      id: "testimonials",
      title: "06. Patient Testimonials",
      subtitle: "Real Patient Experiences",
      desc: "A testimonial section presents patient experiences and adds a human element to the website's communication — helping prospective patients understand the quality of care from those who have received it.",
      points: [
        "Authentic patient testimonials building trust for prospective visitors",
        "Human stories connecting the hospital's services with real outcomes",
        "Social proof supporting confidence in specialist and surgical care decisions",
      ],
      icon: <MessageSquare className="w-5 h-5 text-emerald-600" />,
      badge: "Social Proof",
    },
    {
      id: "education",
      title: "07. Educational & Community Content",
      subtitle: "Eye Health Awareness & Academic Resources",
      desc: "Hospital information, academic content, and community outreach resources help visitors explore additional aspects of the institution's role in the Moradabad community.",
      points: [
        "Eye health awareness content supporting patient education",
        "Academic and publication information establishing research credibility",
        "Community outreach initiatives reflecting the hospital's social mission",
      ],
      icon: <GraduationCap className="w-5 h-5 text-indigo-600" />,
      badge: "Community Focus",
    },
    {
      id: "responsive",
      title: "08. Responsive Interface",
      subtitle: "Desktop, Tablet & Mobile",
      desc: "The interface maintains readable content, usable forms, and clear navigation across desktop, tablet, and mobile screens — ensuring every patient can access the hospital's information regardless of device.",
      points: [
        "Fluid layouts adapting to all screen sizes and orientations",
        "Touch-friendly forms and navigation elements for mobile users",
        "Consistent visual hierarchy and readability across all breakpoints",
      ],
      icon: <Smartphone className="w-5 h-5 text-sky-600" />,
      badge: "Multi-Device",
    },
  ];

  // ── 6. Services Ecosystem ──────────────────────────────────────
  const servicesEcosystem = [
    {
      id: "eye-exams",
      title: "General Eye Examinations",
      category: "comprehensive",
      desc: "Comprehensive eye health evaluations covering visual acuity, refraction, and ocular health assessment for patients of all ages.",
      icon: <Eye className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tags: ["Visual Acuity", "Refraction", "Health Check"],
    },
    {
      id: "cataract",
      title: "Cataract Services",
      category: "comprehensive",
      desc: "Specialist cataract evaluation, pre-operative assessment, and surgical care including advanced lens replacement options.",
      icon: <CircleDot className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
      tags: ["Surgery", "Lens Replacement", "Pre-Op"],
    },
    {
      id: "cornea",
      title: "Cornea & Refractive Care",
      category: "comprehensive",
      desc: "Corneal health evaluation, keratoconus management, and refractive procedures for clearer vision without glasses.",
      icon: <Microscope className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tags: ["Keratoconus", "LASIK", "Refractive"],
    },
    {
      id: "contact-lenses",
      title: "Contact Lens Services",
      category: "comprehensive",
      desc: "Contact lens fitting, specialty lens options, and follow-up care for patients requiring vision correction solutions.",
      icon: <Eye className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
      tags: ["Fitting", "Specialty Lenses", "Follow-up"],
    },
    {
      id: "glaucoma",
      title: "Glaucoma Services",
      category: "specialist",
      desc: "Glaucoma screening, intraocular pressure monitoring, and specialist management to prevent progressive vision loss.",
      icon: <Activity className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tags: ["Screening", "IOP Monitoring", "Management"],
    },
    {
      id: "retina",
      title: "Vitreoretinal Care",
      category: "specialist",
      desc: "Retinal examination, vitreoretinal surgery, and medical management for conditions including diabetic retinopathy and macular degeneration.",
      icon: <CircleDot className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
      tags: ["Retinal Surgery", "Diabetic Retinopathy", "Macula"],
    },
    {
      id: "pediatric",
      title: "Pediatric Eye Services",
      category: "specialist",
      desc: "Child-friendly eye care covering amblyopia (lazy eye), strabismus, and early developmental vision assessment.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      tags: ["Amblyopia", "Strabismus", "Children"],
    },
    {
      id: "orthoptics",
      title: "Orthoptics",
      category: "specialist",
      desc: "Specialist assessment and non-surgical management of eye movement disorders and binocular vision problems.",
      icon: <Target className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tags: ["Binocular Vision", "Eye Movement", "Non-Surgical"],
    },
    {
      id: "myopia",
      title: "Myopia Clinic",
      category: "specialist",
      desc: "Myopia management strategies for children and young adults to slow the progression of short-sightedness.",
      icon: <Layers className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
      tags: ["Myopia Control", "Children", "Orthokeratology"],
    },
    {
      id: "dry-eyes",
      title: "Dry Eyes Clinic",
      category: "specialist",
      desc: "Diagnosis and management of dry eye syndrome using advanced tear film assessment and tailored treatment protocols.",
      icon: <Stethoscope className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
      tags: ["Tear Film", "Diagnosis", "Treatment"],
    },
    {
      id: "appointments",
      title: "Appointment Enquiries",
      category: "support",
      desc: "Clear appointment request pathways, contact forms, and direct contact details supporting every patient's next step.",
      icon: <Calendar className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
      tags: ["Online Form", "Phone", "Walk-In"],
    },
    {
      id: "education-community",
      title: "Eye Health Education",
      category: "education",
      desc: "Eye health awareness articles, academic publications, and community outreach resources helping patients make informed decisions.",
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      tags: ["Awareness", "Publications", "Community"],
    },
  ];

  const serviceCategories = [
    { id: "all", label: "All Services" },
    { id: "comprehensive", label: "Comprehensive Eye Care" },
    { id: "specialist", label: "Specialist Clinics" },
    { id: "support", label: "Patient Support" },
    { id: "education", label: "Education & Community" },
  ];

  const filteredServices =
    activeServiceCategory === "all"
      ? servicesEcosystem
      : servicesEcosystem.filter((s) => s.category === activeServiceCategory);

  // ── 7. Development Process ─────────────────────────────────────
  const devSteps = [
    {
      step: "01",
      title: "Requirements & Discovery",
      desc: "Understand the hospital's services, patient audience, information needs, and website objectives — mapping the full clinical and patient journey.",
    },
    {
      step: "02",
      title: "Information Architecture",
      desc: "Organize service categories, specialist profiles, contact information, patient FAQs, and educational resources into a clear, navigable structure.",
    },
    {
      step: "03",
      title: "Visual Design",
      desc: "Establish a consistent healthcare-oriented visual system with appropriate typography, blue-and-white colour palette, spacing, and medical professionalism.",
    },
    {
      step: "04",
      title: "Website Implementation",
      desc: "Develop the required layouts, service sections, appointment forms, specialist profiles, and navigation according to the confirmed project architecture.",
    },
    {
      step: "05",
      title: "Content Integration",
      desc: "Arrange hospital information, service descriptions, doctor profiles, patient FAQs, and supporting educational resources within the design system.",
    },
    {
      step: "06",
      title: "Responsive Testing",
      desc: "Review the patient experience across different screen sizes — desktop, tablet, and mobile — and supported browsers to ensure consistent accessibility.",
    },
    {
      step: "07",
      title: "Quality & SEO Review",
      desc: "Check content structure, navigation, metadata, page headings, internal links, and implemented technical requirements for search discoverability.",
    },
    {
      step: "08",
      title: "Final Refinement",
      desc: "Polish visual alignment, image sizing, form usability, appointment pathway clarity, and overall consistency before launch.",
    },
  ];

  // ── 8. Business Value ──────────────────────────────────────────
  const businessImpacts = [
    {
      title: "Service Visibility",
      desc: "Makes the hospital's ophthalmology specialties easier to discover — giving patients a clear understanding of available eye care options.",
      icon: <Eye className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      title: "Professional Presentation",
      desc: "Provides a consistent digital home for communicating the hospital's identity, specialist team, and medical authority to prospective patients.",
      icon: <ShieldCheck className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
    },
    {
      title: "Patient Information Access",
      desc: "Organizes service details, FAQs, and contact information in one accessible place — reducing patient uncertainty before their first visit.",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Appointment Accessibility",
      desc: "Gives visitors a clear, frictionless way to request an appointment — keeping enquiry pathways visible at every stage of the patient journey.",
      icon: <Calendar className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Content Discovery",
      desc: "Provides access to educational, academic, and community resources — building the hospital's authority beyond clinical service listings.",
      icon: <GraduationCap className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      title: "Responsive Usability",
      desc: "Supports patients browsing across different screen sizes — ensuring important healthcare information remains accessible on any device.",
      icon: <Smartphone className="w-6 h-6 text-sky-600" />,
    },
  ];

  // ── 9. Patient Journey Flow ────────────────────────────────────
  const patientJourney = [
    { step: "Discover", desc: "Patient finds the hospital online", icon: <Search className="w-5 h-5" style={{ color: BLUE_PRIMARY }} /> },
    { step: "Explore Services", desc: "Reviews available eye care specialties", icon: <Eye className="w-5 h-5" style={{ color: BLUE_ACCENT }} /> },
    { step: "Meet Specialists", desc: "Learns about the medical team", icon: <Users className="w-5 h-5" style={{ color: BLUE_PRIMARY }} /> },
    { step: "Request Appointment", desc: "Submits an enquiry form", icon: <Calendar className="w-5 h-5" style={{ color: BLUE_ACCENT }} /> },
    { step: "Contact Hospital", desc: "Calls or visits Oracle Eye Hospital", icon: <Phone className="w-5 h-5" style={{ color: BLUE_PRIMARY }} /> },
  ];

  return (
    <main
      className="min-h-screen text-slate-800 pb-20 selection:bg-blue-100 selection:text-blue-900"
      style={{ backgroundColor: BLUE_PALE }}
    >
      {/* ======================================================== */}
      {/* 1. BREADCRUMB & BACK NAVIGATION                           */}
      {/* ======================================================== */}
      <div className="pt-32 sm:pt-36 lg:pt-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All</span>
          </Link>

          <div
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs border"
            style={{ color: BLUE_DEEP, backgroundColor: BLUE_LIGHT, borderColor: "#93C5FD" }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>Case Study · Portfolio 05</span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. HERO SECTION                                           */}
      {/* ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 overflow-hidden">
        {/* Ambient glows */}
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
            <Eye className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>ORACLE EYE HOSPITAL — MORADABAD, UTTAR PRADESH</span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 mb-6 leading-snug sm:leading-tight tracking-tight">
            Building a Digital Experience for{" "}
            <span
              className="inline-block font-semibold"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BLUE_DEEP} 0%, ${BLUE_PRIMARY} 40%, ${BLUE_ACCENT} 70%, ${BLUE_DEEP} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Advanced Eye Care
            </span>{" "}
            <br className="hidden md:inline" />& Patient Trust
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-light" style={{ color: BODY_TEXT }}>
            How Zentrix Infotech created a structured, professional digital experience to help patients discover specialist eye care services, learn about the medical team, and take the next step with confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://oracleeyehospital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white active:scale-95 transition-all shadow-md hover:shadow-lg group"
              style={{ background: `linear-gradient(90deg, ${BLUE_DEEP} 0%, ${BLUE_PRIMARY} 50%, ${BLUE_ACCENT} 100%)` }}
            >
              <Globe className="w-4 h-4 text-white" />
              <span>Explore Live Website</span>
              <ExternalLink className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-white hover:bg-blue-50/60 border border-slate-300 hover:border-blue-400 active:scale-95 transition-all shadow-xs"
              style={{ color: BLUE_DEEP }}
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
              style={{ background: "linear-gradient(180deg,#ffffff 0%,#F5F9FF 60%,#ffffff 100%)" }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2.5rem]`} />

              {/* Icon orb */}
              <div className="relative mb-5 z-10">
                <div
                  className="w-20 h-20 rounded-full border-2 border-dashed p-1.5 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45"
                  style={{ borderColor: "#93C5FD" }}
                >
                  <div
                    className={`w-full h-full rounded-full ${item.iconBg} border shadow-sm flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45`}
                    style={{ borderColor: "#BFDBFE" }}
                  >
                    <div className="transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  </div>
                </div>
                <span
                  className="absolute -top-1 -right-1 w-6 h-6 rounded-full font-mono text-[10px] font-bold flex items-center justify-center shadow-sm border"
                  style={{ backgroundColor: BLUE_DEEP, color: "#93C5FD", borderColor: "#93C5FD50" }}
                >
                  {item.num}
                </span>
              </div>

              <div className="relative z-10 w-full mb-4">
                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-blue-700 transition-colors mb-2">
                  {item.label}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-tight group-hover:text-blue-950 transition-colors">
                  {item.value}
                </h3>
              </div>

              <div className="relative z-10 pt-3 border-t border-slate-100 w-full flex justify-center">
                <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium ${item.badgeBg} border shadow-xs`}>
                  {item.pillIcon}
                  <span>{item.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. HOSPITAL STATS (Eye-Inspired Circular Elements)        */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div
          className="relative rounded-[2.5rem] p-8 sm:p-12 lg:p-14 overflow-hidden border"
          style={{
            background: `linear-gradient(135deg, ${BLUE_DEEP} 0%, ${BLUE_PRIMARY} 60%, ${BLUE_ACCENT} 100%)`,
            borderColor: `${BLUE_ACCENT}40`,
          }}
        >
          {/* Decorative concentric rings (eye-inspired) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {[560, 420, 280, 180].map((size, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white/5"
                style={{ width: size, height: size }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4 border border-white/20 bg-white/10 text-white">
              <Star className="w-3.5 h-3.5 text-amber-300" />
              <span>12. HOSPITAL HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
              Oracle Eye Hospital in Numbers
            </h2>
            <p className="text-blue-100 font-light text-sm">
              Hospital-reported highlights published on the official website.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {hospitalStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Concentric circular stat element */}
                <div className="relative mb-6">
                  {/* Outer dashed ring */}
                  <div
                    className="w-36 h-36 rounded-full border-2 border-dashed border-white/20 group-hover:border-white/40 transition-all duration-500 flex items-center justify-center group-hover:scale-105"
                  >
                    {/* Middle ring */}
                    <div className="w-28 h-28 rounded-full border border-white/15 flex items-center justify-center bg-white/5">
                      {/* Inner solid circle */}
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center border border-white/20"
                        style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                      >
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="text-4xl sm:text-5xl font-serif font-bold mb-2"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #93C5FD 0%, #BFDBFE 50%, #EFF6FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.num}
                </div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-blue-200 font-light">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. WEBSITE PREVIEW MOCKUP                                 */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div
          className="relative rounded-3xl overflow-hidden border shadow-xl p-3 sm:p-5"
          style={{ background: `linear-gradient(180deg, ${BLUE_LIGHT} 0%, #EFF6FF80 100%)`, borderColor: "#BFDBFE" }}
        >
          {/* Browser chrome */}
          <div className="flex items-center justify-between px-3 py-2.5 mb-2 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/70">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-slate-100/80 border border-slate-200/60 text-xs font-mono max-w-xs truncate" style={{ color: BODY_TEXT }}>
              <Globe className="w-3 h-3 text-slate-400" />
              <span>https://oracleeyehospital.com/</span>
            </div>
            <a
              href="https://oracleeyehospital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium inline-flex items-center gap-1 hover:opacity-80"
              style={{ color: BLUE_PRIMARY }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836261/www.selecthospitalmbd.com__Nest_Hub_Max_2_-min_xnmgmj.png"
              alt="Oracle Eye Hospital Website by Zentrix Infotech"
              className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. PROJECT OVERVIEW                                        */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="p-8 sm:p-12 lg:p-14 rounded-[2.5rem] bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: `radial-gradient(circle, ${BLUE_LIGHT}80, transparent)` }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text */}
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-6 shadow-xs"
                style={{ color: BLUE_DEEP, background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`, borderColor: "#93C5FD" }}
              >
                <Sparkles className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
                <span>01. PROJECT OVERVIEW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-[1.2] tracking-tight">
                A Digital Home for{" "}
                <span
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${BLUE_DEEP} 0%, ${BLUE_PRIMARY} 40%, ${BLUE_ACCENT} 70%, ${BLUE_DEEP} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Specialist Eye Care
                </span>
              </h2>

              <div className="space-y-4 leading-relaxed text-base sm:text-lg font-light" style={{ color: BODY_TEXT }}>
                <p>
                  <strong className="font-semibold text-slate-900">Oracle Eye Hospital</strong> is an ophthalmic healthcare provider based in Moradabad, Uttar Pradesh, offering a wide range of eye care services, specialist consultations, diagnostic evaluations, and surgical care.
                </p>
                <p>
                  The hospital's digital presence brings together its medical services, specialist team, patient information, appointment enquiries, and educational resources in one accessible online destination.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Zentrix Infotech</strong> focused on presenting complex healthcare information in a professional, accessible, and organized way — helping patients discover eye care services, learn about specialists, and take the next step toward an appointment with greater confidence.
                </p>
              </div>
            </div>

            {/* Overview stat cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: <Eye className="w-6 h-6" style={{ color: BLUE_PRIMARY }} />,
                  num: "01",
                  title: "Specialist Eye Care",
                  desc: "10+ ophthalmology specialties from cataracts and glaucoma to pediatric and retinal services.",
                  badge: "Full Spectrum",
                  accentColor: BLUE_PRIMARY,
                },
                {
                  icon: <Users className="w-6 h-6" style={{ color: BLUE_ACCENT }} />,
                  num: "02",
                  title: "Expert Medical Team",
                  desc: "Experienced ophthalmologists with specialist qualifications and a patient-centred approach.",
                  badge: "Specialist Team",
                  accentColor: BLUE_ACCENT,
                },
                {
                  icon: <Heart className="w-6 h-6 text-rose-500" />,
                  num: "03",
                  title: "Patient-First Experience",
                  desc: "50,000+ patients served across 15+ years of dedicated ophthalmic healthcare in Moradabad.",
                  badge: "Trusted Care",
                  accentColor: "#F43F5E",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`group relative p-6 rounded-[2rem] border-2 border-slate-200/80 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden cursor-default bg-white ${i === 2 ? "sm:col-span-2" : ""}`}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = card.accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: `${card.accentColor}15` }} />

                  <div className="relative mb-4 z-10">
                    <div
                      className="w-14 h-14 rounded-full border-2 border-dashed p-1 transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:rotate-45"
                      style={{ borderColor: `${card.accentColor}50` }}
                    >
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45"
                        style={{ backgroundColor: `${card.accentColor}12` }}
                      >
                        {card.icon}
                      </div>
                    </div>
                    <span
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full font-mono text-[10px] font-bold flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: BLUE_DEEP, color: "#93C5FD", border: "1px solid #93C5FD50" }}
                    >
                      {card.num}
                    </span>
                  </div>

                  <div className="relative z-10 w-full mb-3">
                    <h4 className="font-serif font-bold text-slate-900 text-lg mb-1.5">{card.title}</h4>
                    <p className="text-xs leading-relaxed font-light" style={{ color: BODY_TEXT }}>{card.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 w-full flex justify-center relative z-10">
                    <span
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold border shadow-xs"
                      style={{ backgroundColor: `${card.accentColor}10`, color: card.accentColor, borderColor: `${card.accentColor}35` }}
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
      {/* 7. CLIENT REQUIREMENTS                                     */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{ color: BLUE_DEEP, background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`, borderColor: "#93C5FD" }}
          >
            <Target className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>02. UNDERSTANDING THE CLIENT'S REQUIREMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            What Oracle Eye Hospital Needed
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            A hospital website must serve different visitors — from patients looking for routine eye examinations to people researching specialist treatments. Information should be easy to find, reassuring, and accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {clientRequirements.map((req, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-[2rem] bg-white border-2 border-slate-200/80 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = BLUE_ACCENT)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
            >
              <div className="absolute top-0 right-0 w-28 h-28 rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: BLUE_LIGHT }} />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                  style={{ background: `linear-gradient(135deg, ${BLUE_LIGHT}, #DBEAFE)`, borderColor: "#BFDBFE" }}
                >
                  {req.icon}
                </div>
                <span
                  className="text-[10px] font-mono font-bold px-2 py-1 rounded-full"
                  style={{ color: BLUE_PRIMARY, backgroundColor: BLUE_LIGHT, border: "1px solid #BFDBFE" }}
                >
                  {req.num}
                </span>
              </div>

              <h3 className="font-serif font-bold text-slate-900 text-base mb-2 group-hover:text-blue-900 transition-colors">
                {req.title}
              </h3>
              <p className="text-xs leading-relaxed font-light mb-4" style={{ color: BODY_TEXT }}>
                {req.desc}
              </p>

              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border"
                style={{ color: BLUE_PRIMARY, backgroundColor: BLUE_LIGHT, borderColor: "#BFDBFE" }}
              >
                <Check className="w-3 h-3" />
                {req.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. CHALLENGES & SOLUTIONS                                  */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{ color: BLUE_DEEP, background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`, borderColor: "#93C5FD" }}
          >
            <Zap className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>03 & 04. CHALLENGES & SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            Challenges & Design Approach
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            Healthcare websites must balance visual presentation with clarity. Visitors may be unfamiliar with medical terminology, so the experience must help them find services without feeling overwhelmed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {challengesAndSolutions.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-[2rem] overflow-hidden border-2 border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 bg-white"
            >
              {/* Challenge */}
              <div className="p-6 sm:p-8 border-b border-dashed border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 bg-rose-50 border border-rose-100">
                    <HelpCircle className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-rose-400 block mb-1">The Challenge</span>
                    <h3 className="font-serif font-bold text-slate-900 text-lg mb-2">{item.challenge}</h3>
                    <p className="text-sm font-light leading-relaxed" style={{ color: BODY_TEXT }}>{item.challengeDesc}</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center border"
                  style={{ backgroundColor: BLUE_LIGHT, borderColor: "#BFDBFE" }}
                >
                  <ArrowDown className="w-4 h-4" style={{ color: BLUE_PRIMARY }} />
                </div>
              </div>

              {/* Solution */}
              <div className="p-6 sm:p-8 rounded-b-[2rem]" style={{ backgroundColor: `${BLUE_LIGHT}60` }}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border"
                    style={{ background: `linear-gradient(135deg, ${BLUE_LIGHT}, #DBEAFE)`, borderColor: "#BFDBFE" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase block mb-1" style={{ color: BLUE_PRIMARY }}>Our Solution</span>
                    <h3 className="font-serif font-bold text-slate-900 text-lg mb-2">{item.solution}</h3>
                    <p className="text-sm font-light leading-relaxed" style={{ color: BODY_TEXT }}>{item.solutionDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. PATIENT JOURNEY FLOW DIAGRAM                           */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{ color: BLUE_DEEP, background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`, borderColor: "#93C5FD" }}
          >
            <Share2 className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>08. WEBSITE EXPERIENCE & USER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            The Patient's Digital Journey
          </h2>
          <p className="text-sm max-w-2xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            A representation of the intended visitor journey — from discovering the hospital to taking the next step toward an appointment.
          </p>
        </div>

        <div
          className="rounded-[2.5rem] p-8 sm:p-12 border"
          style={{ background: `linear-gradient(135deg, #ffffff 60%, ${BLUE_LIGHT}50)`, borderColor: "#BFDBFE" }}
        >
          {/* Journey flow — horizontal on desktop, vertical on mobile */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
            {patientJourney.map((node, idx) => (
              <React.Fragment key={idx}>
                {/* Node */}
                <div className="flex flex-col items-center text-center max-w-[140px]">
                  <div
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center mb-3 shadow-md"
                    style={{
                      background: idx % 2 === 0
                        ? `linear-gradient(135deg, ${BLUE_DEEP}, ${BLUE_PRIMARY})`
                        : `linear-gradient(135deg, ${BLUE_PRIMARY}, ${BLUE_ACCENT})`,
                      borderColor: `${BLUE_ACCENT}50`,
                    }}
                  >
                    <span className="text-white scale-125">{node.icon}</span>
                  </div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm mb-1">{node.step}</h4>
                  <p className="text-[11px] font-light leading-tight" style={{ color: BODY_TEXT }}>{node.desc}</p>
                </div>

                {/* Connector (hidden after last) */}
                {idx < patientJourney.length - 1 && (
                  <>
                    {/* Desktop: horizontal arrow */}
                    <div className="hidden lg:flex items-center flex-1 mx-2">
                      <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${BLUE_PRIMARY}, ${BLUE_ACCENT})` }} />
                      <ChevronRight className="w-4 h-4 flex-shrink-0 -ml-1" style={{ color: BLUE_ACCENT }} />
                    </div>
                    {/* Mobile: vertical arrow */}
                    <div className="flex lg:hidden flex-col items-center">
                      <div className="w-px h-5" style={{ background: `linear-gradient(180deg, ${BLUE_PRIMARY}, ${BLUE_ACCENT})` }} />
                      <ArrowDown className="w-4 h-4 -mt-1" style={{ color: BLUE_ACCENT }} />
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-center text-[11px] text-slate-400 font-light mt-8">
            This diagram represents the intended website experience, not a claim about measured user behaviour.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. KEY FEATURES TABBED SHOWCASE                          */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{ color: BLUE_DEEP, background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`, borderColor: "#93C5FD" }}
          >
            <Grid className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>05. KEY FEATURES & FUNCTIONAL AREAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            What the Website Delivers
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            Eight functional areas working together to communicate clinical expertise, support patient confidence, and make appointment access straightforward.
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
                  ? { background: `linear-gradient(135deg, ${BLUE_DEEP}, ${BLUE_PRIMARY})`, color: "#ffffff", borderColor: BLUE_PRIMARY, boxShadow: `0 4px 14px ${BLUE_PRIMARY}40` }
                  : { backgroundColor: "#ffffff", color: BODY_TEXT, borderColor: "#E2E8F0" }
              }
            >
              {f.title.split(".")[0]}.
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div
          className="rounded-[2.5rem] p-8 sm:p-12 border-2 shadow-lg"
          style={{ background: `linear-gradient(135deg, #ffffff 60%, ${BLUE_LIGHT}60)`, borderColor: "#BFDBFE" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border mb-5"
                style={{ color: BLUE_PRIMARY, backgroundColor: BLUE_LIGHT, borderColor: "#BFDBFE" }}
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
                      style={{ background: `linear-gradient(135deg, ${BLUE_LIGHT}, #DBEAFE)`, border: "1px solid #BFDBFE" }}
                    >
                      <Check className="w-3 h-3" style={{ color: BLUE_PRIMARY }} />
                    </span>
                    <span className="text-sm font-light leading-relaxed" style={{ color: BODY_TEXT }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right visual */}
            <div
              className="rounded-[2rem] p-8 flex flex-col items-center justify-center text-center min-h-[260px] relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${BLUE_DEEP}, ${BLUE_PRIMARY})` }}
            >
              <div className="absolute inset-0 opacity-10">
                {[100, 70, 45, 24].map((size, i) => (
                  <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60" style={{ width: `${size}%`, height: `${size}%` }} />
                ))}
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
                Part of Oracle Eye Hospital's patient-focused digital experience designed by Zentrix Infotech.
              </p>

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
      {/* 11. SERVICES ECOSYSTEM                                     */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{ color: BLUE_DEEP, background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`, borderColor: "#93C5FD" }}
          >
            <Workflow className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>06. MEDICAL SERVICE ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            Comprehensive Eye Care Services
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            Oracle Eye Hospital's full service offering — presented as a connected ecosystem helping visitors understand the breadth of care available without feeling overwhelmed.
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
                  ? { background: `linear-gradient(135deg, ${BLUE_DEEP}, ${BLUE_PRIMARY})`, color: "#ffffff", borderColor: BLUE_PRIMARY }
                  : { backgroundColor: "#ffffff", color: BODY_TEXT, borderColor: "#E2E8F0" }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
                  className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                  style={{ background: `linear-gradient(135deg, ${BLUE_LIGHT}, #DBEAFE)`, borderColor: "#BFDBFE" }}
                >
                  {service.icon}
                </div>
                <span
                  className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full"
                  style={{ color: BLUE_PRIMARY, backgroundColor: BLUE_LIGHT, border: "1px solid #BFDBFE" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <h4 className="font-serif font-bold text-slate-900 text-sm mb-2 group-hover:text-blue-900 transition-colors">
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
                    style={{ color: BLUE_ACCENT, backgroundColor: `${BLUE_LIGHT}80`, borderColor: "#BFDBFE" }}
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
      {/* 12. DEVELOPMENT WORKFLOW                                  */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{ color: BLUE_DEEP, background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`, borderColor: "#93C5FD" }}
          >
            <Clock className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>10. DEVELOPMENT PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            How We Built It
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            A structured eight-stage process — from requirements discovery through final refinement.
          </p>
        </div>

        <div
          className="relative rounded-[2.5rem] p-8 sm:p-12 border"
          style={{ background: `linear-gradient(135deg, #ffffff 60%, ${BLUE_LIGHT}50)`, borderColor: "#BFDBFE" }}
        >
          {/* Desktop horizontal connector */}
          <div className="hidden lg:block absolute top-[9.5rem] left-16 right-16 h-px" style={{ background: `linear-gradient(90deg, ${BLUE_DEEP}, ${BLUE_PRIMARY}, ${BLUE_ACCENT}, ${BLUE_PRIMARY})` }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {devSteps.map((step, idx) => (
              <div key={idx} className="group relative flex flex-col items-center text-center">
                {idx < devSteps.length - 1 && (
                  <div
                    className="lg:hidden absolute top-14 left-1/2 -translate-x-1/2 w-px h-8 mt-1"
                    style={{ background: `linear-gradient(180deg, ${BLUE_PRIMARY}, ${BLUE_ACCENT})` }}
                  />
                )}

                <div className="relative mb-4 z-10">
                  <div
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center font-mono font-bold text-sm transition-all duration-400 group-hover:scale-110 text-white"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE_DEEP}, ${BLUE_PRIMARY})`,
                      borderColor: `${BLUE_ACCENT}60`,
                      boxShadow: `0 4px 14px ${BLUE_PRIMARY}40`,
                    }}
                  >
                    {step.step}
                  </div>
                </div>

                <h4 className="font-serif font-bold text-slate-900 text-sm mb-2 group-hover:text-blue-900 transition-colors">
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
      {/* 13. CHALLENGES VS SOLUTIONS TABLE                         */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{ color: BLUE_DEEP, background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`, borderColor: "#93C5FD" }}
          >
            <BarChart3 className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>11. CHALLENGES & DESIGN APPROACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Challenge vs. Design Approach
          </h2>
        </div>

        <div className="rounded-[2rem] overflow-hidden border shadow-lg" style={{ borderColor: "#BFDBFE" }}>
          <div
            className="grid grid-cols-2 px-6 py-4 text-xs font-bold tracking-widest uppercase text-white"
            style={{ background: `linear-gradient(90deg, ${BLUE_DEEP}, ${BLUE_PRIMARY})` }}
          >
            <span>Challenge</span>
            <span>Design Approach</span>
          </div>

          {[
            ["Multiple eye care specialties", "Group services into clear categories"],
            ["Medical information complexity", "Use concise descriptions and readable layouts"],
            ["Patient confidence", "Present doctor and hospital information clearly"],
            ["Appointment discovery", "Keep enquiry pathways visible and understandable"],
            ["Content-heavy pages", "Use spacing, headings, and visual hierarchy"],
            ["Mobile usability", "Adapt cards, navigation, and forms to smaller screens"],
          ].map(([challenge, approach], i) => (
            <div
              key={i}
              className="grid grid-cols-2 px-6 py-4 text-sm border-b last:border-b-0 hover:bg-blue-50/40 transition-colors"
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
      {/* 14. RESULTS & BUSINESS VALUE                              */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border mb-4 shadow-xs"
            style={{ color: BLUE_DEEP, background: `linear-gradient(90deg, ${BLUE_LIGHT}, #DBEAFE, ${BLUE_LIGHT})`, borderColor: "#93C5FD" }}
          >
            <TrendingUp className="w-3.5 h-3.5" style={{ color: BLUE_PRIMARY }} />
            <span>13. RESULTS & BUSINESS VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            The Value Delivered
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ color: BODY_TEXT }}>
            A structured digital experience built to make specialist eye care accessible, trustworthy, and easy to navigate for patients across Moradabad and beyond.
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
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: BLUE_LIGHT }} />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                  style={{ background: `linear-gradient(135deg, ${BLUE_LIGHT}, #DBEAFE)`, borderColor: "#BFDBFE" }}
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
      {/* 15. WHY ZENTRIX INFOTECH                                  */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div
          className="rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden border"
          style={{
            background: `linear-gradient(135deg, ${BLUE_DEEP} 0%, ${BLUE_PRIMARY} 60%, ${BLUE_ACCENT} 100%)`,
            borderColor: `${BLUE_ACCENT}40`,
          }}
        >
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-6 border border-white/20 bg-white/10 text-white">
                <Award className="w-3.5 h-3.5 text-blue-200" />
                <span>14. WHY ZENTRIX INFOTECH?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                Healthcare Digital Experiences Built With Purpose
              </h2>
              <p className="text-blue-100 font-light leading-relaxed mb-4 text-base">
                At Zentrix Infotech, digital experiences are approached through the combination of design, information architecture, and practical functionality.
              </p>
              <p className="text-blue-100 font-light leading-relaxed text-base">
                For a healthcare website, the objective is not simply to create an attractive interface. It is to make important information easier to understand, help visitors navigate services, and make contact opportunities clear. The Oracle Eye Hospital case study demonstrates how a well-organized healthcare website can bring together service discovery, specialist information, and patient-focused communication.
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
                  style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                >
                  <div
                    className="text-3xl sm:text-4xl font-serif font-bold mb-1"
                    style={{
                      backgroundImage: "linear-gradient(135deg,#93C5FD 0%,#BFDBFE 60%,#EFF6FF 100%)",
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
      {/* 16. CONCLUSION & CTA                                      */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl p-8 sm:p-14 text-center text-white shadow-2xl overflow-hidden border"
          style={{
            background: `linear-gradient(135deg, ${BLUE_DEEP} 0%, #0A1929 60%, ${BLUE_DEEP} 100%)`,
            borderColor: `${BLUE_PRIMARY}40`,
          }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: `${BLUE_PRIMARY}20` }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: `${BLUE_ACCENT}15` }} />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-6 border"
              style={{ color: "#93C5FD", backgroundColor: `${BLUE_PRIMARY}20`, borderColor: `${BLUE_PRIMARY}40` }}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>15. CONCLUSION — BUILD A STRONGER DIGITAL PRESENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white mb-6 leading-tight">
              Looking to Create a{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg,#93C5FD 0%,#BFDBFE 50%,#EFF6FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Professional Healthcare Website?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-light">
              Oracle Eye Hospital's digital presence connects specialist eye care services, doctor information, and appointment pathways with the patients who need them. Zentrix Infotech helps organizations create digital experiences that serve the people they're built for.
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

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium font-serif text-white rounded-full border border-white/20 bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-300"
              >
                <Sparkles className="h-4 w-4 text-blue-300" />
                Explore Our Projects
              </Link>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-light">
              <span>Client: Oracle Eye Hospital</span>
              <span>•</span>
              <span>Industry: Healthcare & Ophthalmology</span>
              <span>•</span>
              <span>Developed by: Zentrix Infotech</span>
              <span>•</span>
              <a
                href="https://oracleeyehospital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "#93C5FD" }}
              >
                oracleeyehospital.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
