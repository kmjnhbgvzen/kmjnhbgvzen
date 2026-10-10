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
  Clock,
  Check,
  Workflow,
  Share2,
  Grid,
  Calendar,
  MessageSquare,
  Building2,
  ChevronRight,
  FileText,
  Activity,
  CircleDot,
  Compass,
  GraduationCap,
  Briefcase,
  Coffee,
  Stethoscope,
  Trophy,
  Bus,
  MapPin,
  Bell,
  CheckSquare,
} from "lucide-react";

// ─── Brand Colors (Zentrix Blue & White Palette) ────────────────────────
const BLUE_PRIMARY = "#1769AA";
const BLUE_DEEP = "#102A43";
const BLUE_LIGHT = "#EAF4FF";
const BLUE_PALE = "#F5F9FF";
const BLUE_ACCENT = "#3B82C4";
const BODY_TEXT = "#425466";

export default function KdgoiClient() {
  const [activeEcosystemNode, setActiveEcosystemNode] = useState(0);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [activeFrameworkNode, setActiveFrameworkNode] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  // ── 1. Project Snapshot Cards ─────────────────────────────────────
  const snapshotCards = [
    {
      num: "01",
      label: "CLIENT",
      value: "Kamla Devi Group of Institutions",
      sub: "KDGI / KDEDU Platform",
      icon: <GraduationCap className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "02",
      label: "FOUNDED",
      value: "Est. 2010",
      sub: "Kamla Devi Educational Trust",
      icon: <Award className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
    },
    {
      num: "03",
      label: "PROJECT TYPE",
      value: "Educational Web Platform",
      sub: "Admissions, Campus & Resources",
      icon: <Globe className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "04",
      label: "DESIGN DIRECTION",
      value: "Premium Blue & White",
      sub: "Institutional, Structured & Clean",
      icon: <Sparkles className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
    },
  ];

  // ── 2. Six Project Objectives ──────────────────────────────────────
  const projectObjectives = [
    {
      num: "01",
      title: "Strengthen Institutional Identity",
      desc: "Present the institution's vision, mission, and student-centered philosophy through a clear and consistent digital identity.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "02",
      title: "Simplify Academic Discovery",
      desc: "Help prospective students and parents locate relevant course information, eligibility, and admission guidelines effortlessly.",
      icon: <Search className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "03",
      title: "Improve Website Navigation",
      desc: "Organize academic departments, campus details, student resources, and administrative guidelines into intuitive sections.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "04",
      title: "Showcase Campus Life",
      desc: "Use authentic photography to communicate campus infrastructure, labs, sports, student events, and institutional culture.",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "05",
      title: "Support Student Engagement",
      desc: "Make important notices, transport rules, school timings, exam updates, and contact channels fast to locate.",
      icon: <Bell className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "06",
      title: "Create a Responsive Experience",
      desc: "Ensure seamless usability across mobile, tablet, and desktop screens for students, parents, and faculty.",
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 3. Six Digital Challenges ──────────────────────────────────────
  const challenges = [
    {
      title: "Challenge 1 — Organizing Diverse Information",
      desc: "Academics, admissions, campus facilities, notices, TC info, and career resources serve different user goals and require a logical hierarchy.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Challenge 2 — Making Admissions Accessible",
      desc: "Prospective students need a direct path from discovering the institution to reviewing course requirements and completing the online admission form.",
      icon: <Send className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Challenge 3 — Presenting Institutional Vision",
      desc: "Communicating the founding vision (Est. 2010 by Rakesh Mishra & Vishwa Dev Mishra) and core pillars through concise, scannable layouts.",
      icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Challenge 4 — Bringing Campus Experiences to Life",
      desc: "Showcasing laboratories, cafeterias, medical facilities, and student activities using high-quality authentic visual galleries.",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Challenge 5 — Connecting Different User Journeys",
      desc: "Navigating prospective students, current students, parents, alumni, and job applicants to their respective resources without friction.",
      icon: <Users className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Challenge 6 — Maintaining Visual Consistency",
      desc: "Applying a unified blue-and-white design system across the homepage, admissions pages, campus galleries, and resource portals.",
      icon: <Layout className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 4. Four Strategy Principles ────────────────────────────────────
  const fourPrinciples = [
    {
      code: "01",
      title: "Discover",
      subtitle: "Institutional Orientation",
      desc: "Introduce Kamla Devi Group of Institutions, its 2010 founding heritage, vision, and student-centered academic environment.",
      icon: <Compass className="w-6 h-6 text-blue-600" />,
      highlight: "Brand introduction",
    },
    {
      code: "02",
      title: "Understand",
      subtitle: "Structured Academic Info",
      desc: "Present core priorities: Academic Excellence, Technical Competency, Research & Innovation, and Holistic Development.",
      icon: <BookOpen className="w-6 h-6 text-sky-600" />,
      highlight: "Vision & mission UX",
    },
    {
      code: "03",
      title: "Explore",
      subtitle: "Campus & Resources",
      desc: "Guide visitors through admissions guidelines, campus facilities, student activity galleries, and alumni networks.",
      icon: <Search className="w-6 h-6 text-blue-600" />,
      highlight: "Facility & campus exploration",
    },
    {
      code: "04",
      title: "Engage",
      subtitle: "Admissions & Contact",
      desc: "Provide direct pathways to online admission forms, notice boards, enquiry contacts, and campus location maps.",
      icon: <Send className="w-6 h-6 text-sky-600" />,
      highlight: "Direct application pathways",
    },
  ];

  // ── 5. Ecosystem Nodes (Diagram 1) ────────────────────────────────
  const ecosystemNodes = [
    {
      id: "academics",
      title: "Academic Information",
      subtitle: "Courses & Specializations",
      desc: "Course offerings spanning specialized technology, pharmacy, and professional degree programs.",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
    },
    {
      id: "admissions",
      title: "Admissions Portal",
      subtitle: "Guidelines & Application",
      desc: "Admission criteria, online application form, fee structures, and prospective student enquiry desk.",
      icon: <Send className="w-6 h-6 text-sky-600" />,
    },
    {
      id: "campus",
      title: "Campus & Facilities",
      subtitle: "Infrastructure & Amenities",
      desc: "Modern classrooms, computer labs, library, cafeteria, medical center, sports grounds, and transportation.",
      icon: <Building2 className="w-6 h-6 text-blue-700" />,
    },
    {
      id: "resources",
      title: "Student Resources",
      subtitle: "Notices & Guidelines",
      desc: "School timings, transport rules, transfer certificate procedures, affiliation details, and student handbook.",
      icon: <FileText className="w-6 h-6 text-sky-500" />,
    },
    {
      id: "community",
      title: "Community & Activities",
      subtitle: "Gallery & Events",
      desc: "Annual fests, sports meets, cultural activities, student newsletters, and institutional updates.",
      icon: <Trophy className="w-6 h-6 text-blue-600" />,
    },
    {
      id: "alumni",
      title: "Alumni & Careers",
      subtitle: "Network & Placements",
      desc: "Alumni registration portal, network directories, career placement notices, and recruitment support.",
      icon: <Briefcase className="w-6 h-6 text-sky-600" />,
    },
  ];

  // ── 6. Student Journey Steps (Diagram 2) ──────────────────────────
  const journeySteps = [
    {
      step: "01",
      title: "Discover Institution",
      desc: "Land on the homepage to learn about KDGOI's vision, founding story (Est. 2010), and educational philosophy.",
      icon: <Compass className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "02",
      title: "Explore Courses",
      desc: "Browse educational streams across specialized technical, pharmacy, and professional programs.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "03",
      title: "Review Admission Info",
      desc: "Understand published admission guidelines, eligibility criteria, required documents, and important dates.",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "04",
      title: "Complete Application",
      desc: "Navigate to the online admission form to submit student details and initiate enrollment enquiry.",
      icon: <Send className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "05",
      title: "Find Student Resources",
      desc: "Access campus rules, school timings, transport schedules, notice board updates, and facility details.",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 7. Academic Discovery Framework Nodes (Diagram 3) ─────────────
  const frameworkNodes = [
    {
      title: "01. Educational Area",
      subtitle: "Select Stream / Faculty",
      desc: "Choose between specialized technology, pharmacy, diploma, or degree streams based on career goals.",
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "02. Course Information",
      subtitle: "Review Curriculum & Specs",
      desc: "Examine course duration, lab requirements, faculty expertise, and skill-building modules.",
      icon: <BookOpen className="w-5 h-5 text-sky-600" />,
    },
    {
      title: "03. Admission Guidelines",
      subtitle: "Verify Criteria & Documents",
      desc: "Check eligibility criteria, entrance score requirements, and list of necessary certificates.",
      icon: <CheckSquare className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "04. Application Resource",
      subtitle: "Submit Online Admission",
      desc: "Access the online application form and receive confirmation from the admission counseling team.",
      icon: <Send className="w-5 h-5 text-sky-600" />,
    },
  ];

  // ── 8. Mission & Vision 4-Pillars ─────────────────────────────────
  const missionPillars = [
    {
      title: "Academic Excellence",
      subtitle: "Innovative Learning Practices",
      desc: "Fostering academic rigor through modern teaching methodologies, updated course materials, and interactive classrooms.",
      icon: <Award className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Technical Competency",
      subtitle: "Intellectual Ability & Skills",
      desc: "Equipping students with practical technical skills, hands-on lab training, and analytical problem-solving capabilities.",
      icon: <Zap className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Research & Innovation",
      subtitle: "Creative Thinking",
      desc: "Encouraging student research projects, innovative ideas, technical workshops, and industry-oriented exploration.",
      icon: <Lightbulb className="w-6 h-6 text-blue-700" />,
    },
    {
      title: "Holistic Development",
      subtitle: "Leadership & Human Values",
      desc: "Nurturing leadership, ethics, teamwork, life skills, sportsmanship, and personal growth for complete development.",
      icon: <Heart className="w-6 h-6 text-indigo-600" />,
    },
  ];

  // ── 9. Campus Facilities Grid ─────────────────────────────────────
  const campusFacilities = [
    {
      title: "Modern Classrooms & Infrastructure",
      desc: "Spacious, well-ventilated classrooms equipped with audio-visual aids to support interactive learning.",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Hygienic Campus Cafeteria",
      desc: "A clean, vibrant dining space providing nutritious meals, refreshments, and a comfortable social hub for students.",
      icon: <Coffee className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Medical & First-Aid Center",
      desc: "On-campus healthcare facility ensuring immediate first-aid medical support for students and faculty.",
      icon: <Stethoscope className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Sports & Fitness Infrastructure",
      desc: "Grounds and equipment for cricket, football, volleyball, and indoor games encouraging physical fitness.",
      icon: <Trophy className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Safe Transport Network",
      desc: "Comprehensive bus transport services connecting the campus with major surrounding residential routes.",
      icon: <Bus className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Strategic Campus Location",
      desc: "Accessible campus location with clear road connectivity and secure, peaceful learning surroundings.",
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 10. Key Feature Showcase Tabs ─────────────────────────────────
  const featureShowcase = [
    {
      title: "Admissions & Application Resources",
      subtitle: "Clear Path for Prospective Students",
      desc: "Consolidates admission guidelines, online application forms, course eligibility criteria, fee details, and counseling contacts into one transparent module.",
      tags: ["Online Form", "Eligibility Criteria", "Fee Details", "Admission Desk"],
      icon: <Send className="w-5 h-5 text-blue-600" />,
      details: [
        "Step-by-step admission guidelines for new applicants",
        "Direct link to the online admission application form",
        "Clear eligibility breakdowns for technology and pharmacy programs",
        "Dedicated phone and email support for admission counseling",
      ],
    },
    {
      title: "Vision & Mission Presentation",
      subtitle: "4 Core Pillars of Student Learning",
      desc: "Presents the institution's commitment to Academic Excellence, Technical Competency, Research & Innovation, and Holistic Development through clean visual cards.",
      tags: ["Academic Excellence", "Technical Skills", "Research Focus", "Human Values"],
      icon: <Award className="w-5 h-5 text-sky-600" />,
      details: [
        "Card-based presentation of the 4 founding mission priorities",
        "Highlights of founder Rakesh Mishra and chairman Vishwa Dev Mishra's vision (Est. 2010)",
        "Emphasis on quality technical education and research",
        "Integration of leadership and life-skills development",
      ],
    },
    {
      title: "Campus & Facilities Showcase",
      subtitle: "Infrastructure, Cafeteria, Sports & Medical",
      desc: "An image-led gallery and directory showcasing classrooms, computer labs, library resources, cafeteria, medical center, sports facilities, and transport.",
      tags: ["Classrooms", "Cafeteria", "Medical Care", "Sports Grounds"],
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      details: [
        "3-column visual grid of key campus amenities",
        "Authentic photography of learning and dining spaces",
        "Details on safe transport routes and medical first-aid support",
        "Location map and campus accessibility information",
      ],
    },
    {
      title: "Student Information Resources",
      subtitle: "Notices, Timings, Rules & Affiliations",
      desc: "Centralized directory for school timings, transport rules, transfer certificate procedures, affiliation documents, and administrative notices.",
      tags: ["Notice Board", "School Timings", "Transport Rules", "Affiliations"],
      icon: <FileText className="w-5 h-5 text-sky-600" />,
      details: [
        "Categorized link directory for official student documents",
        "Clear guidelines on transport rules and school timings",
        "Transfer certificate (TC) request and verification procedure",
        "Official university/board affiliation proof listings",
      ],
    },
    {
      title: "Alumni, Careers & News Notice Board",
      subtitle: "Networking & Institutional Updates",
      desc: "Features alumni registration resources, career placement notices, recent campus news, newsletters, and institutional event announcements.",
      tags: ["Alumni Portal", "Career Notices", "Recent Events", "Newsletters"],
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      details: [
        "Alumni network registration and contact directory",
        "Notice panel for current student announcements and exam dates",
        "Institutional newsletter archive and event highlights",
        "Career and internship opportunity bulletins",
      ],
    },
  ];

  // ── 11. Business Value Highlights ─────────────────────────────────
  const businessValues = [
    {
      title: "Strengthened Institutional Identity",
      desc: "Presents KDGOI's vision, 2010 founding legacy, and academic philosophy with trust and authority.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Simplified Admission Path",
      desc: "Prospective students find course details, guidelines, and online admission forms quickly.",
      icon: <Send className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Vibrant Campus Showcase",
      desc: "Image-led facility grids communicate cafeteria, medical, sports, and classroom infrastructure clearly.",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Centralized Student Resources",
      desc: "Notices, school timings, transport rules, and affiliation documents organized in one place.",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Multi-Audience Navigation",
      desc: "Intuitive menus connect students, parents, alumni, and job applicants to relevant sections.",
      icon: <Users className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Accessible Multi-Device Experience",
      desc: "High text contrast, touch targets, and responsive layout across mobile, tablet, and desktop.",
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
              Educational Group
            </span>
            <a
              href="https://kdedu.org/"
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
              KDGOI / KDEDU Website
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight mb-4">
                Empowering Education. Inspiring Tomorrow.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#1769AA] mb-6 leading-relaxed">
                Kamla Devi Group of Institutions (KDGOI)
              </p>
              <p className="text-base text-[#425466] leading-relaxed mb-8 max-w-2xl">
                Explore how Kamla Devi Group of Institutions brings its educational vision, academic resources, campus experiences, and student opportunities together through a unified digital presence engineered by Zentrix Infotech.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://kdedu.org/"
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
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764659997/kdedu.org__xfnieg.png"
                      alt="KDGOI Website Preview"
                      className="max-h-full max-w-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#102A43]">KDGOI / KDEDU</h3>
                    <p className="text-xs text-slate-500">Kamla Devi Group of Institutions</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-emerald-700">Official Portal Live</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Trust Founded</span>
                    <span className="font-bold text-[#102A43]">2010 (Kamla Devi Trust)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Key Leadership</span>
                    <span className="font-bold text-[#1769AA]">Rakesh Mishra & Vishwa Dev Mishra</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Specialized Streams</span>
                    <span className="font-bold text-[#102A43]">Technology, Pharmacy & Degrees</span>
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

      {/* ── Section 1 & 2: Overview & Institutional Heritage ──────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#F5F9FF] border border-blue-100 shadow-sm relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#102A43] mb-3">
                  Founded in 2010
                </h3>
                <p className="text-sm text-[#425466] leading-relaxed mb-6">
                  Kamla Devi Educational Trust was established in 2010 by founder Rakesh Mishra and chairman Vishwa Dev Mishra with a commitment to student-centered technical education and holistic development.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Focus on quality technical education, research & innovation</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Programs spanning technology, pharmacy & professional degrees</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Integrated leadership development and human values</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
                Project Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-6">
                Presenting Academic Offerings, Campus Life, and Student Resources
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Education encompasses academic learning, practical skills, campus infrastructure, personal development, and future career opportunities. Kamla Devi Group of Institutions (KDGI) provides a student-centered environment designed for technical competency and innovation.
                </p>
                <p>
                  The digital experience developed by Zentrix Infotech unifies these diverse institutional areas—academic programs, admission guidelines, campus facilities, student resource documents, and notice boards—into one accessible, responsive online platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Vision & Mission 4-Pillars ───────────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Vision & Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              4 Core Priorities of the KDGOI Educational Philosophy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The foundational pillars shaping curriculum structure, research, and campus development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#102A43] mb-1">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-[#1769AA] mb-3">{pillar.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{pillar.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Mission Pillar 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Objectives & Digital Challenges ───────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Project Objectives
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Six Strategic Objectives Solved Through UX Design
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Addressing the needs of prospective students, parents, current students, alumni, and faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projectObjectives.map((obj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F5F9FF] border border-blue-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">{obj.num}</span>
                  <div className="p-2 rounded-xl bg-white shadow-2xs">{obj.icon}</div>
                </div>
                <h3 className="text-base font-bold text-[#102A43] mb-2">{obj.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>

          {/* 6 Digital Challenges Cards */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-[#102A43]">Specific Institutional Challenges Addressed</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((chal, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1769AA] flex items-center justify-center mb-3">
                  {chal.icon}
                </div>
                <h4 className="text-sm font-bold text-[#102A43] mb-1">{chal.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{chal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Four Design Strategy Principles ──────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Digital Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Discover → Understand → Explore → Engage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured content framework connecting initial interest with enrollment action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourPrinciples.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all group flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-blue-200 group-hover:text-[#1769AA] transition-colors font-mono">
                      {pillar.code}
                    </span>
                    <div className="p-2 bg-blue-50 rounded-xl">{pillar.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] mb-1">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-[#1769AA] mb-3">{pillar.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{pillar.desc}</p>
                </div>
                <div className="pt-3 border-t border-blue-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Strategy: <span className="text-[#102A43]">{pillar.highlight}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6 Diagram 1: KDGOI Digital Ecosystem ────────────── */}
      <section id="kdgoi-ecosystem" className="py-16 md:py-20 bg-[#102A43] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Interactive Visual • Diagram 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
              The KDGOI Digital Information Ecosystem
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Central hub connecting academics, admissions, campus amenities, student resources, and alumni networks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Click any surrounding area to inspect details:
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

            <div className="lg:col-span-7">
              <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center justify-center my-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-sky-500/20 animate-ping pointer-events-none" />
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#1769AA] to-[#102A43] border-4 border-sky-400/60 shadow-2xl flex flex-col items-center justify-center text-center p-2 relative z-10">
                      <span className="text-xs font-bold tracking-widest text-sky-300 uppercase">CENTER</span>
                      <span className="text-xs font-black text-white">KDGOI</span>
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

      {/* ── Section 8 Diagram 2: Student Journey Stepper ────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Student Journey Flow Stepper
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A 5-step timeline guiding prospective applicants from initial institutional discovery to student resources.
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

      {/* ── Section 9 Diagram 3: Academic Discovery Framework ────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 3
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Academic Discovery Framework
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured 4-stage pathway guiding visitors from educational stream selection to application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworkNodes.map((node, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFrameworkNode(idx)}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                  activeFrameworkNode === idx
                    ? "bg-white border-[#1769AA] shadow-md scale-102"
                    : "bg-white border-blue-100 hover:border-blue-200"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#1769AA]">{node.icon}</div>
                  <span className="text-xs font-mono font-bold text-slate-400">NODE 0{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-[#102A43] mb-1">{node.title}</h3>
                <p className="text-xs font-semibold text-[#1769AA] mb-3">{node.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7D: Campus Facilities Grid ──────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Campus & Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Explore Campus Facilities & Amenities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Organized presentation of physical infrastructure supporting academic learning and student well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusFacilities.map((fac, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F5F9FF] border border-blue-100 hover:border-blue-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center mb-4 shadow-2xs">
                  {fac.icon}
                </div>
                <h3 className="text-base font-bold text-[#102A43] mb-2">{fac.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Showcase Tabs ────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Key Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Website Experience & Content Modules
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Detailed breakdown of key digital features engineered for KDGOI.
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
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-sm p-1.5 border border-blue-100 mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764659997/kdedu.org__xfnieg.png"
                      alt="KDGOI Feature Preview"
                      className="max-h-full max-w-full object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-base font-bold text-[#102A43] mb-1">
                    {featureShowcase[activeFeatureTab].title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    KDGOI Digital Feature Module
                  </p>
                  <a
                    href="https://kdedu.org/"
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
              Project Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Value Delivered to the Educational Community
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Enhancing prospective student admissions, campus visibility, and institutional trust.
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
            The KDGOI case study demonstrates how an educational group can present its vision, academic programs, campus facilities, and student opportunities through a clear, accessible, and structured digital platform.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://kdedu.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-md text-sm"
            >
              <span>Visit Official KDGOI Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#102A43] bg-white border border-blue-200 hover:bg-blue-50 transition-all shadow-sm text-sm"
            >
              <span>Discuss Your Educational Project</span>
              <ArrowRight className="w-4 h-4 text-[#1769AA]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer copyright sub-bar */}
      <footer className="py-6 bg-[#102A43] text-slate-400 text-xs text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Zentrix Infotech. KDGOI Case Study.</p>
        </div>
      </footer>
    </div>
  );
}
