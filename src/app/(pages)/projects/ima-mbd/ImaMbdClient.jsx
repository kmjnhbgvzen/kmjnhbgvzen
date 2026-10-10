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
  GraduationCap,
  Syringe,
  Droplet,
  Megaphone,
  UserCheck,
} from "lucide-react";

// ─── Brand Colors (Zentrix Blue & White Palette) ────────────────────────
const BLUE_PRIMARY = "#1769AA";
const BLUE_DEEP = "#102A43";
const BLUE_LIGHT = "#EAF4FF";
const BLUE_PALE = "#F5F9FF";
const BLUE_ACCENT = "#3B82C4";
const BODY_TEXT = "#425466";

export default function ImaMbdClient() {
  const [activeEcosystemNode, setActiveEcosystemNode] = useState(0);
  const [activeImpactStage, setActiveImpactStage] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  // ── 1. Project Snapshot Cards ─────────────────────────────────────
  const snapshotCards = [
    {
      num: "01",
      label: "CLIENT",
      value: "IMA Moradabad Branch",
      sub: "Indian Medical Association",
      icon: <Building2 className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "02",
      label: "INDUSTRY",
      value: "Healthcare Association",
      sub: "Medical Community & Welfare",
      icon: <Stethoscope className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
    },
    {
      num: "03",
      label: "PROJECT TYPE",
      value: "Association Digital Hub",
      sub: "CME & Community Platform",
      icon: <Globe className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "04",
      label: "DESIGN DIRECTION",
      value: "Premium Blue & White",
      sub: "Institutional, Credible & Trustworthy",
      icon: <Sparkles className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
    },
  ];

  // ── 2. Project Goals Grid ──────────────────────────────────────────
  const projectGoals = [
    {
      title: "Strengthen Digital Identity",
      desc: "Present IMA Moradabad as an established regional medical association with a clear mission, history, and institutional purpose.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Improve Information Discovery",
      desc: "Organize association activities, CME schedules, public initiatives, and leadership details into intuitive navigation paths.",
      icon: <Search className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Highlight Community Service",
      desc: "Give high visibility to health camps, blood donation drives, public health awareness, and national health-day observances.",
      icon: <Heart className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Support Medical Professionals",
      desc: "Communicate opportunities for continuing medical education (CME), professional networking, workshops, and member welfare.",
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Encourage Member Engagement",
      desc: "Help doctors and community members discover upcoming events, announcements, and direct registration/contact channels.",
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Build Institutional Trust",
      desc: "Use a clean, accessible blue-and-white visual identity appropriate for a premier medical association.",
      icon: <Award className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 3. The 5 Challenges ───────────────────────────────────────────
  const challenges = [
    {
      num: "01",
      title: "Communicating a Broad Mission",
      desc: "Balancing professional doctor support with public health initiatives without creating conflicting visual priorities.",
      icon: <Target className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "02",
      title: "Organizing Multiple Initiatives",
      desc: "Categorizing health camps, awareness drives, blood donation, CME lectures, and member welfare logically.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "03",
      title: "Making Events Discoverable",
      desc: "Presenting event dates, speaker announcements, CME topics, and participation triggers clearly for busy physicians.",
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "04",
      title: "Serving Different Audiences",
      desc: "Designing an interface that communicates with medical specialists, junior doctors, event attendees, and the public.",
      icon: <Users className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "05",
      title: "Maintaining Professional Credibility",
      desc: "Ensuring the website feels dependable, authoritative, and dignified rather than resembling a generic commercial site.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 4. Four Principles of Digital Approach ────────────────────────
  const fourPrinciples = [
    {
      code: "01",
      title: "Clarity",
      subtitle: "Organized Hierarchy",
      desc: "Organize association information into clear sections with descriptive headings, structured menus, and readable typography.",
      icon: <Compass className="w-6 h-6 text-blue-600" />,
      highlight: "Intuitive sitemap",
    },
    {
      code: "02",
      title: "Credibility",
      subtitle: "Restrained Blue-White System",
      desc: "Use a professional navy and blue color palette, verified leadership data, and authoritative institutional layouts.",
      icon: <ShieldCheck className="w-6 h-6 text-sky-600" />,
      highlight: "Institutional trust",
    },
    {
      code: "03",
      title: "Connection",
      subtitle: "Direct Engagement Pathways",
      desc: "Make event details, CME announcements, member registration, and association contacts easy to discover and access.",
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      highlight: "Accessible communication",
    },
    {
      code: "04",
      title: "Community",
      subtitle: "Public Health Prominence",
      desc: "Highlight health camps, blood donation drives, and public education campaigns that demonstrate the association's social impact.",
      icon: <Heart className="w-6 h-6 text-sky-600" />,
      highlight: "Social welfare visibility",
    },
  ];

  // ── 5. Ecosystem Nodes (Diagram 1) ────────────────────────────────
  const ecosystemNodes = [
    {
      id: "professionals",
      title: "Medical Professionals",
      subtitle: "Networking & Member Welfare",
      desc: "Connecting doctors through peer networks, professional advocacy, mentorship, and member welfare support programs.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      id: "education",
      title: "Medical Education",
      subtitle: "CME & Clinical Seminars",
      desc: "Continuing Medical Education (CME) lectures, clinical workshops, research symposiums, and medical knowledge sharing.",
      icon: <GraduationCap className="w-6 h-6 text-sky-600" />,
    },
    {
      id: "community",
      title: "Community Healthcare",
      subtitle: "Health Camps & Blood Drives",
      desc: "Free medical consultation camps, diagnostic screening drives, blood donation camps, and rural health outreach.",
      icon: <Heart className="w-6 h-6 text-blue-700" />,
    },
    {
      id: "awareness",
      title: "Public Awareness",
      subtitle: "Preventive Health Campaigns",
      desc: "Public health education, national health day observances (World Heart Day, Diabetes Day), and disease prevention drives.",
      icon: <Megaphone className="w-6 h-6 text-sky-500" />,
    },
    {
      id: "events",
      title: "Events & Engagement",
      subtitle: "Announcements & Participation",
      desc: "Association calendar, annual conferences, general body meetings, and direct participant enquiry channels.",
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
    },
  ];

  // ── 6. Community Impact Framework (Diagram 2) ─────────────────────
  const impactStages = [
    {
      step: "01",
      title: "Educate",
      desc: "Share preventive health advice with the public and organize continuing medical education (CME) for doctors.",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "02",
      title: "Organize",
      desc: "Coordinate free health camps, blood donation drives, public health seminars, and medical conferences across Moradabad.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "03",
      title: "Participate",
      desc: "Encourage doctor involvement, member attendance, and active community participation in health awareness drives.",
      icon: <Users className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "04",
      title: "Support",
      desc: "Provide professional welfare support for physicians and extend medical aid to underserved community sections.",
      icon: <Heart className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 7. Key Website Features Showcase Tabs ─────────────────────────
  const featureShowcase = [
    {
      title: "Association Overview & Leadership",
      subtitle: "Mission, Heritage & Institutional Vision",
      desc: "An introductory experience communicating IMA Moradabad's history, executive committee, and vital role as the regional voice of medical professionals.",
      tags: ["Leadership Team", "Association Mission", "Regional Legacy", "Doctor Voice"],
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      details: [
        "Executive committee & office-bearers directory",
        "Clear statement of association mission & ethical values",
        "Introduction for first-time doctor members and visitors",
        "Official branch credentials and affiliation highlights",
      ],
    },
    {
      title: "Community Health Initiatives",
      subtitle: "Health Camps, Blood Drives & Awareness",
      desc: "Dedicated content areas highlighting public service programs including free health check-up camps, blood donation drives, and preventive health observances.",
      tags: ["Health Camps", "Blood Donation", "Health Awareness", "Public Seva"],
      icon: <Heart className="w-5 h-5 text-sky-600" />,
      details: [
        "Schedule of upcoming community health screening camps",
        "Blood donation camp locations and volunteer registration",
        "Public health awareness posters and prevention guides",
        "Coverage of national health day activities across Moradabad",
      ],
    },
    {
      title: "Continuing Medical Education (CME)",
      subtitle: "Clinical Workshops & Knowledge Seminars",
      desc: "Showcases educational lectures, clinical updates, and hands-on workshops designed to help doctors maintain high clinical standards.",
      tags: ["CME Lectures", "Clinical Updates", "Symposiums", "Doctor Training"],
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      details: [
        "Upcoming CME session topics, dates, and speaker profiles",
        "Downloadable medical presentation materials & summaries",
        "Credit hour accreditation information for medical attendees",
        "Simple online seat reservation for registered doctors",
      ],
    },
    {
      title: "Professional Networking & Welfare",
      subtitle: "Doctor Community & Mentorship",
      desc: "Communicates the association's role in connecting medical practitioners through peer networking, legal/professional guidance, and doctor welfare funds.",
      tags: ["Doctor Welfare", "Peer Networking", "Mentorship", "Professional Support"],
      icon: <Users className="w-5 h-5 text-sky-600" />,
      details: [
        "Member welfare initiatives and legal protection advice",
        "Networking events for senior and young medical specialists",
        "Mentorship programs for newly practicing physicians",
        "Internal forums for professional knowledge exchange",
      ],
    },
    {
      title: "Events, Activities & Contact Desk",
      subtitle: "Calendar, Announcements & Location",
      desc: "Central event hub presenting announcements, conference details, office contact numbers, and location maps for straightforward engagement.",
      tags: ["Event Calendar", "Announcements", "Office Contact", "Location Map"],
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
      details: [
        "Dynamic calendar listing annual association meetings and health drives",
        "Urgent circulars and policy updates for medical members",
        "Direct phone, email, and office address contact details",
        "Interactive map to IMA Hall / Office in Moradabad",
      ],
    },
  ];

  // ── 8. Business & Social Value Highlights ──────────────────────────
  const businessValues = [
    {
      title: "Unified Digital Voice for Doctors",
      desc: "Brings together all regional IMA Moradabad initiatives, announcements, and doctor support into one accessible hub.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "High Visibility for Community Seva",
      desc: "Demonstrates the association's social commitment through prominent health camp and blood donation showcases.",
      icon: <Heart className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Streamlined CME Registration",
      desc: "Helps medical professionals discover educational lectures, check dates, and register for credit sessions easily.",
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Enhanced Institutional Trust",
      desc: "A clean, blue-and-white visual identity communicates authority, dependability, and professional dignity.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Frictionless Member Communication",
      desc: "Important notices, legal circulars, and office contact information remain fast to locate on mobile devices.",
      icon: <Phone className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Multi-Device Accessibility",
      desc: "Responsive layout, readable typography, and visible keyboard focus support users across all screen sizes.",
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
              Medical Association Platform
            </span>
            <a
              href="https://www.imamoradabad.com/"
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
              Moradabad Branch
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight mb-4">
                Connecting Medical Professionals. Supporting Community Healthcare.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#1769AA] mb-6 leading-relaxed">
                Indian Medical Association (IMA), Moradabad Branch
              </p>
              <p className="text-base text-[#425466] leading-relaxed mb-8 max-w-2xl">
                Discover how IMA Moradabad brings together professional learning, continuing medical education (CME), medical-community engagement, and public welfare initiatives through a unified digital presence engineered by Zentrix Infotech.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.imamoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-md hover:shadow-lg text-sm"
                >
                  <span>Explore Live Portal</span>
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
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836429/www.imamoradabad.com__Nest_Hub_Max_-min_lszssv.png"
                      alt="IMA Moradabad Preview"
                      className="max-h-full max-w-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#102A43]">IMA Moradabad</h3>
                    <p className="text-xs text-slate-500">Indian Medical Association</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-emerald-700">Official Portal Live</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Association</span>
                    <span className="font-bold text-[#102A43]">IMA Moradabad Branch</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Core Focus</span>
                    <span className="font-bold text-[#1769AA]">Doctor Welfare & Community Seva</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Key Programs</span>
                    <span className="font-bold text-[#102A43]">CME, Health Camps & Blood Drives</span>
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

      {/* ── Section 1: Project Overview & Context ───────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#F5F9FF] border border-blue-100 shadow-sm relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#102A43] mb-3">
                  Advancing Healthcare Standards & Seva
                </h3>
                <p className="text-sm text-[#425466] leading-relaxed mb-6">
                  The Indian Medical Association, Moradabad Branch, represents physicians committed to high clinical standards, ongoing education, and community healthcare.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Continuing Medical Education (CME) lectures & symposiums</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Free community health camps & blood donation drives</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Physician networking, advocacy & professional welfare</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
                Project Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-6">
                A Central Destination Connecting Medical Professionals and Society
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  The goal of the IMA Moradabad digital platform is to unite the association's educational programs, community outreach, health awareness drives, and professional welfare activities into one organized online destination.
                </p>
                <p>
                  Zentrix Infotech engineered a clean, trustworthy website architecture that serves two distinct audiences: medical specialists looking for CME workshops or association circulars, and community members seeking health camp information or contact channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Project Goals ────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Project Objectives
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Designed Around Key Association Objectives
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A strategic framework built to serve doctors, event participants, and the wider public.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectGoals.map((goal, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769AA] flex items-center justify-center mb-4">
                  {goal.icon}
                </div>
                <h3 className="text-base font-bold text-[#102A43] mb-2">{goal.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: The 5 Challenges ─────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Addressing Key Communication & Design Challenges
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Harmonizing institutional credibility with community accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5F9FF] p-6 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">{item.num}</span>
                  <div className="p-2 rounded-xl bg-white shadow-2xs">{item.icon}</div>
                </div>
                <h3 className="text-base font-bold text-[#102A43] mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Four Principles of Digital Approach ───────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Digital Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Clarity → Credibility → Connection → Community
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Four core principles guiding the architecture of the IMA Moradabad platform.
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
                    Principle: <span className="text-[#102A43]">{pillar.highlight}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6 Diagram 1: The IMA Digital Ecosystem ───────────── */}
      <section id="ima-ecosystem" className="py-16 md:py-20 bg-[#102A43] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Interactive Visual • Diagram 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
              The IMA Moradabad Digital Ecosystem
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Central hub connecting doctor welfare, medical education, community care, and public awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select a surrounding node to inspect:
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
                      <span className="text-xs font-bold tracking-widest text-sky-300 uppercase">HUB</span>
                      <span className="text-xs font-black text-white">IMA MORADABAD</span>
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

      {/* ── Section 7 Diagram 2: Community Impact Framework ─────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Community Impact Framework: Educate → Organize → Participate → Support
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A 4-stage visual breakdown demonstrating how IMA Moradabad connects professional education to community welfare.
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-4 gap-6 relative">
            {impactStages.map((stage, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImpactStage(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeImpactStage === idx
                    ? "bg-[#102A43] text-white border-[#102A43] shadow-lg -translate-y-1"
                    : "bg-[#F5F9FF] text-slate-700 border-blue-100 hover:border-blue-300"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      activeImpactStage === idx
                        ? "bg-sky-400/20 text-sky-300"
                        : "bg-blue-100 text-[#1769AA]"
                    }`}
                  >
                    STAGE {stage.step}
                  </span>
                  <div
                    className={`p-2 rounded-xl ${
                      activeImpactStage === idx ? "bg-white/10 text-white" : "bg-white text-[#1769AA]"
                    }`}
                  >
                    {stage.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{stage.title}</h3>
                <p
                  className={`text-xs leading-relaxed ${
                    activeImpactStage === idx ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Stepper */}
          <div className="lg:hidden space-y-4">
            {impactStages.map((stage, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImpactStage(idx)}
                className={`p-5 rounded-xl border transition-all ${
                  activeImpactStage === idx
                    ? "bg-[#102A43] text-white border-[#102A43]"
                    : "bg-[#F5F9FF] text-slate-700 border-blue-100"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-sky-400">{stage.step}</span>
                  <h3 className="text-base font-bold">{stage.title}</h3>
                </div>
                <p className="text-xs text-slate-400">{stage.desc}</p>
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
              Website Features & Association Initiatives
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Detailed exploration of key digital modules engineered for IMA Moradabad.
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
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836429/www.imamoradabad.com__Nest_Hub_Max_-min_lszssv.png"
                      alt="IMA Moradabad Feature Preview"
                      className="max-h-full max-w-full object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-base font-bold text-[#102A43] mb-1">
                    {featureShowcase[activeFeatureTab].title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    IMA Moradabad Digital Module
                  </p>
                  <a
                    href="https://www.imamoradabad.com/"
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Project Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Impact of a Connected Association Portal
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Enhancing medical professional engagement while serving public healthcare needs.
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
            The IMA Moradabad case study highlights how a professional medical association can unite doctor welfare, CME learning, and community health initiatives into one accessible digital destination.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.imamoradabad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-md text-sm"
            >
              <span>Visit Official IMA Moradabad Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#102A43] bg-white border border-blue-200 hover:bg-blue-50 transition-all shadow-sm text-sm"
            >
              <span>Discuss Your Association Project</span>
              <ArrowRight className="w-4 h-4 text-[#1769AA]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer copyright sub-bar */}
      <footer className="py-6 bg-[#102A43] text-slate-400 text-xs text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Zentrix Infotech. IMA Moradabad Case Study.</p>
        </div>
      </footer>
    </div>
  );
}
