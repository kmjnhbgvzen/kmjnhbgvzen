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
  Sun,
  Shield,
  Feather,
  Mail,
  Sliders,
  CheckSquare,
  Info,
  ShoppingCart,
  PackageCheck,
  Tag,
  Scale,
  Leaf,
  RefreshCw,
  Plus,
  Minus,
  CheckCircle,
} from "lucide-react";

// ─── Brand Colors (Zentrix Blue & White Palette) ────────────────────────
const BLUE_PRIMARY = "#1769AA";
const BLUE_DEEP = "#102A43";
const BLUE_LIGHT = "#EAF4FF";
const BLUE_PALE = "#F5F9FF";
const BLUE_ACCENT = "#3B82C4";
const BODY_TEXT = "#425466";

export default function HerbsfoxClient() {
  const [activeEcosystemNode, setActiveEcosystemNode] = useState(0);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [activeArchNode, setActiveArchNode] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  // ── Interactive Product Variation Simulator State ─────────────────
  const [selectedWeight, setSelectedWeight] = useState("100g");
  const [selectedHerb, setSelectedHerb] = useState("kutki");
  const [cartCount, setCartCount] = useState(0);
  const [addedToast, setAddedToast] = useState(false);

  // Featured Demo Products
  const demoProducts = {
    kutki: {
      name: "Pure Kutki Root (Picrorhiza Kurroa)",
      category: "Raw Medicinal Herb",
      tagline: "Wildcrafted raw Kutki root known for traditional metabolic & digestive wellness.",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764660008/herbsfox.com__Nest_Hub_Max_bdj25p.png",
      weights: {
        "50g": { price: 169, orig: 199 },
        "100g": { price: 299, orig: 349 },
        "250g": { price: 699, orig: 799 },
        "500g": { price: 1299, orig: 1499 },
        "1kg": { price: 2399, orig: 2799 },
      },
      benefits: [
        "100% natural, unadulterated raw herb",
        "Sourced sustainably from high-altitude Himalayan regions",
        "Rigorous quality testing for purity & potency",
        "Traditional Ayurvedic metabolic support",
      ],
    },
    anantmool: {
      name: "Anantmool / Sariva Root (Hemidesmus Indicus)",
      category: "Pure Herbal Botanical",
      tagline: "Authentic Anantmool root valued for skin purity & soothing natural cooling.",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764660008/herbsfox.com__Nest_Hub_Max_bdj25p.png",
      weights: {
        "50g": { price: 129, orig: 149 },
        "100g": { price: 229, orig: 269 },
        "250g": { price: 499, orig: 579 },
        "500g": { price: 899, orig: 1049 },
        "1kg": { price: 1699, orig: 1999 },
      },
      benefits: [
        "Traditional cooling & blood purifying herb",
        "Aromatic root with authentic natural fragrance",
        "Hygienically cleaned & air-dried",
        "Free from artificial colors or preservatives",
      ],
    },
  };

  const currentProduct = demoProducts[selectedHerb];
  const currentPricing = currentProduct.weights[selectedWeight];

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  // ── 1. Project Snapshot Cards ─────────────────────────────────────
  const snapshotCards = [
    {
      num: "01",
      label: "PROJECT",
      value: "Herbsfox",
      sub: "Herbal E-Commerce Platform",
      icon: <ShoppingCart className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "02",
      label: "INDUSTRY",
      value: "Herbal Products & Retail",
      sub: "Online Wellness Store",
      icon: <Leaf className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
    },
    {
      num: "03",
      label: "STORE LOGIC",
      value: "Dynamic Weight & Price",
      sub: "50g to 1kg Selectable Variants",
      icon: <Scale className="w-5 h-5" style={{ color: BLUE_PRIMARY }} />,
    },
    {
      num: "04",
      label: "DESIGN DIRECTION",
      value: "Premium Blue & White",
      sub: "Clean, Botanical & Trustworthy",
      icon: <Sparkles className="w-5 h-5" style={{ color: BLUE_ACCENT }} />,
    },
  ];

  // ── 2. The 6 E-Commerce Challenges ────────────────────────────────
  const challenges = [
    {
      num: "01",
      title: "Organizing a Diverse Catalogue",
      desc: "Creating an intuitive browsing experience for raw herbs, roots, powders, and wellness items without cognitive overload.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "02",
      title: "Presenting Information Clearly",
      desc: "Structuring herbal names (botanical & local), weight options, pricing, and descriptions consistently across all products.",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "03",
      title: "Connecting Education With Shopping",
      desc: "Helping customers learn about a herb's traditional uses while keeping purchase pathways immediate and frictionless.",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "04",
      title: "Simplifying Product Selection",
      desc: "Engineering clear weight variation buttons (50g, 100g, 250g, 500g, 1kg) that dynamically recalculate prices accurately.",
      icon: <Scale className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "05",
      title: "Building Brand Trust",
      desc: "Establishing a professional visual identity with transparent pricing, purity guarantees, and secure cart feedback.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      num: "06",
      title: "Supporting Mobile E-Commerce",
      desc: "Ensuring variation selection, image zoom, cart drawers, and checkout triggers respond effortlessly on touch devices.",
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 3. Four Pillars of Digital Approach ───────────────────────────
  const fourPillars = [
    {
      code: "01",
      title: "Discover",
      subtitle: "Effortless Catalogue Browsing",
      desc: "Make the online product catalogue easy to search and filter by herb category, form, or health concern.",
      icon: <Compass className="w-6 h-6 text-blue-600" />,
      highlight: "Catalogue exploration",
    },
    {
      code: "02",
      title: "Understand",
      subtitle: "Clear Product & Botanical Info",
      desc: "Present botanical names, origin details, available weights, and prices with high typography contrast.",
      icon: <BookOpen className="w-6 h-6 text-sky-600" />,
      highlight: "Informative product UX",
    },
    {
      code: "03",
      title: "Select",
      subtitle: "Dynamic Weight & Price Option",
      desc: "Provide interactive variation selectors with real-time price updates and clear cart feedback.",
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      highlight: "Frictionless variant pick",
    },
    {
      code: "04",
      title: "Shop",
      subtitle: "Consistent Checkout Journey",
      desc: "Guide customers smoothly from product discovery to cart review and checkout confirmation.",
      icon: <ShoppingCart className="w-6 h-6 text-sky-600" />,
      highlight: "Streamlined purchase flow",
    },
  ];

  // ── 4. Ecosystem Nodes (Diagram 1) ────────────────────────────────
  const ecosystemNodes = [
    {
      id: "catalogue",
      title: "Product Catalogue",
      subtitle: "Categorized Herbal Shop",
      desc: "Centralized browsing index for raw roots, herbal powders, seeds, and natural wellness items.",
      icon: <Grid className="w-6 h-6 text-blue-600" />,
    },
    {
      id: "info",
      title: "Herbal Information",
      subtitle: "Botanical Knowledge & Uses",
      desc: "Educational content blocks detailing traditional uses, botanical names, and quality standards.",
      icon: <BookOpen className="w-6 h-6 text-sky-600" />,
    },
    {
      id: "variations",
      title: "Product Variations",
      subtitle: "Selectable Weights & Pricing",
      desc: "Dynamic weight selectors (50g to 1kg) with real-time price calculation and clear stock tags.",
      icon: <Scale className="w-6 h-6 text-blue-700" />,
    },
    {
      id: "cart",
      title: "Shopping Cart",
      subtitle: "Cart Review & Item State",
      desc: "Intuitive cart feedback preserving selected weights, item quantities, and pricing totals.",
      icon: <ShoppingCart className="w-6 h-6 text-sky-500" />,
    },
    {
      id: "support",
      title: "Customer Support",
      subtitle: "Enquiry & Order Assistance",
      desc: "Clear contact forms, WhatsApp order enquiry, shipping details, and bulk order support.",
      icon: <Phone className="w-6 h-6 text-blue-600" />,
    },
  ];

  // ── 5. Shopping Journey Steps (Diagram 2) ─────────────────────────
  const journeySteps = [
    {
      step: "01",
      title: "Discover Products",
      desc: "Browse the organized online store by herb category or search for specific items like Kutki or Anantmool.",
      icon: <Search className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "02",
      title: "Explore Product Details",
      desc: "Read detailed product descriptions, botanical background, purity guarantees, and traditional uses.",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "03",
      title: "Select a Variation",
      desc: "Choose the desired weight option (50g, 100g, 250g, 500g, 1kg) and watch the price update automatically.",
      icon: <Scale className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "04",
      title: "Add to Cart",
      desc: "Click the add-to-cart action, review the item summary, and receive instant confirmation feedback.",
      icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
    },
    {
      step: "05",
      title: "Continue to Checkout",
      desc: "Proceed to secure checkout with saved product options, delivery address, and payment confirmation.",
      icon: <PackageCheck className="w-5 h-5 text-blue-600" />,
    },
  ];

  // ── 6. Product Architecture Nodes (Diagram 3) ─────────────────────
  const archNodes = [
    {
      title: "Product Identity",
      subtitle: "Name & High-Res Photography",
      desc: "Botanical title, regional herb name, category tag, and high-definition photography of dried roots.",
      icon: <Leaf className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Purchase Information",
      subtitle: "Dynamic Weight & Price",
      desc: "Current price, original MRP, savings tag, and selectable weight options (50g to 1kg).",
      icon: <Tag className="w-5 h-5 text-sky-600" />,
    },
    {
      title: "Product Details",
      subtitle: "Description & Purity Notes",
      desc: "Botanical background, sourcing standards, quality assurance, and traditional preparation guidance.",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Shopping Actions",
      subtitle: "Cart & Quantity Controls",
      desc: "Quantity increment buttons, instant add-to-cart trigger, and direct checkout link.",
      icon: <ShoppingCart className="w-5 h-5 text-sky-600" />,
    },
  ];

  // ── 7. Key Feature Showcase Tabs ──────────────────────────────────
  const featureShowcase = [
    {
      title: "Online Product Catalogue",
      subtitle: "Structured Herbal Store Layout",
      desc: "Brings herbal products together in a central browsing experience with category filters, clear pricing, and responsive product cards.",
      tags: ["Categorized Store", "Raw Herbs & Roots", "Clear Pricing", "Responsive Grid"],
      icon: <Grid className="w-5 h-5 text-blue-600" />,
      details: [
        "Product grid with high-resolution herb photography",
        "Clear badge indicators for organic purity and weight variants",
        "Direct link to individual detail pages from every card",
        "Search and filter by health focus or herb type",
      ],
    },
    {
      title: "Individual Product Pages",
      subtitle: "Kutki & Anantmool Detail Experience",
      desc: "Dedicated detail pages for products such as Kutki and Anantmool, organizing botanical data, origin details, and purchase options cleanly.",
      tags: ["Kutki Detail", "Anantmool Detail", "Botanical Specs", "Purity Badges"],
      icon: <BookOpen className="w-5 h-5 text-sky-600" />,
      details: [
        "Botanical and common herb name display",
        "In-depth description of sourcing standards and quality tests",
        "High-definition image gallery with zoom capabilities",
        "Clear pricing and stock availability status",
      ],
    },
    {
      title: "Product Variations & Dynamic Pricing",
      subtitle: "50g to 1kg Weight Selectors",
      desc: "Interactive weight selection buttons that automatically recalculate product pricing according to the chosen pack size.",
      tags: ["50g - 1kg Variants", "Real-Time Pricing", "Accurate Option Tracking", "Clear Selection"],
      icon: <Scale className="w-5 h-5 text-blue-600" />,
      details: [
        "Clear weight option buttons (50g, 100g, 250g, 500g, 1kg)",
        "Instant price recalculation on selection change",
        "MRP discount percentage calculation badge",
        "Option state preserved when adding to cart",
      ],
    },
    {
      title: "Herbal Educational Content",
      subtitle: "Traditional Uses & Botanical Background",
      desc: "Informative content blocks helping customers learn about a herb's traditional background before making a purchase decision.",
      tags: ["Herb Benefits", "Traditional Sourcing", "Usage Guidance", "Transparent Info"],
      icon: <FileText className="w-5 h-5 text-sky-600" />,
      details: [
        "Structured information sections with clear headings",
        "Accurate, non-exaggerated herbal descriptions",
        "Expandable FAQ sections for usage guidance",
        "Clean typography for high readability",
      ],
    },
    {
      title: "Shopping Cart & Checkout Flow",
      subtitle: "Frictionless Purchase Interaction",
      desc: "Intuitive cart feedback system ensuring selected weights, quantities, and totals remain transparent throughout checkout.",
      tags: ["Cart Feedback", "Quantity Controls", "Saved Variant State", "Checkout Trigger"],
      icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
      details: [
        "Instant visual toast when an item is added to cart",
        "Cart badge counter updating dynamically",
        "Item breakdown showing selected weight, price, and quantity",
        "Direct CTA to proceed to secure checkout",
      ],
    },
  ];

  // ── 8. Business Value Highlights ──────────────────────────────────
  const businessValues = [
    {
      title: "Better Product Discoverability",
      desc: "Categorized catalogue helps customers discover raw herbs, roots, and powders easily.",
      icon: <Grid className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Clear Variant & Price Transparency",
      desc: "Real-time price updates for 50g–1kg pack sizes prevent customer confusion.",
      icon: <Scale className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Educational Shopping Synergy",
      desc: "Informative herb content builds buyer confidence before adding items to cart.",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Frictionless Cart Experience",
      desc: "Instant feedback toasts and clear item lists streamline the journey to checkout.",
      icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Cohesive Brand Presentation",
      desc: "Professional blue-and-white visual identity paired with authentic botanical photography.",
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Optimized Mobile Shopping",
      desc: "Touch-friendly variation buttons and fast mobile checkout triggers for smartphone users.",
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
              Herbal E-Commerce Platform
            </span>

            {/* Cart Counter Preview Widget */}
            <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-bold text-[#102A43]">
              <ShoppingCart className="w-4 h-4 text-[#1769AA]" />
              <span>Cart ({cartCount})</span>
              {addedToast && (
                <span className="absolute -bottom-8 right-0 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md animate-bounce whitespace-nowrap">
                  Item Added!
                </span>
              )}
            </div>

            <a
              href="https://herbsfox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-sm hover:shadow"
            >
              <span>Visit Live Store</span>
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
              E-Commerce & Online Retail
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight mb-4">
                Herbsfox
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#1769AA] mb-6 leading-relaxed">
                Bringing Herbal Products & Nature-Inspired Wellness Into a Digital Shopping Experience
              </p>
              <p className="text-base text-[#425466] leading-relaxed mb-8 max-w-2xl">
                Herbsfox is an online herbal brand delivering pure roots, botanicals, and wellness products. Zentrix Infotech engineered a clean e-commerce experience combining structured catalogues, dynamic weight variation selectors, botanical guides, and streamlined shopping cart interactions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://herbsfox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-md hover:shadow-lg text-sm"
                >
                  <span>Explore Live Store</span>
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
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764660008/herbsfox.com__Nest_Hub_Max_bdj25p.png"
                      alt="Herbsfox Preview"
                      className="max-h-full max-w-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#102A43]">Herbsfox</h3>
                    <p className="text-xs text-slate-500">Herbal E-Commerce Store</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-emerald-700">Live Online Store</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Core Offerings</span>
                    <span className="font-bold text-[#102A43]">Raw Herbs, Roots & Powders</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Selectable Pack Weights</span>
                    <span className="font-bold text-[#1769AA]">50g, 100g, 250g, 500g, 1kg</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-500">Shopping Journey</span>
                    <span className="font-bold text-[#102A43]">Catalogue → Detail → Variant → Cart</span>
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
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#102A43] mb-3">
                  Purity, Sourcing & E-Commerce Ease
                </h3>
                <p className="text-sm text-[#425466] leading-relaxed mb-6">
                  Herbsfox brings nature-inspired products and traditional botanical knowledge to online shoppers through a clean, responsive e-commerce interface.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Raw herbs & roots (Kutki, Anantmool, Ashwagandha, Giloy)</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Dynamic weight variation selection with real-time price updates</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#102A43] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>Educational content integrated with purchase actions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
                Project Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-6">
                Organizing Herbal Product Discovery into a Seamless Shopping Experience
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Herbsfox is an online herbal brand created to connect customers with authentic botanical roots, powders, and wellness essentials. Its website combines an intuitive product catalogue with detailed product pages, educational herb information, selectable weights, dynamic pricing, and shopping-cart functionality.
                </p>
                <p>
                  Zentrix Infotech designed a structured e-commerce platform that balances botanical authenticity with modern online shopping standards. Customers can seamlessly learn about individual herbs before selecting their preferred pack weight (50g to 1kg) and completing their order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The 6 E-Commerce Challenges ───────────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Key E-Commerce & Variation Selection Challenges
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Organizing herbal products, dynamic pack weights, botanical descriptions, and cart feedback cleanly.
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

      {/* ── Interactive Product Variation Simulator Section ──────────── */}
      <section id="product-simulator" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Live Interactive Feature Component
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Dynamic Weight & Price Variation Selector
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Test how Herbsfox's weight selection dynamically updates pack pricing and triggers instant cart feedback.
            </p>
          </div>

          {/* Product Switcher Buttons */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => {
                setSelectedHerb("kutki");
                setSelectedWeight("100g");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedHerb === "kutki"
                  ? "bg-[#102A43] text-white border-[#102A43]"
                  : "bg-[#F5F9FF] text-slate-600 border-blue-100 hover:bg-blue-50"
              }`}
            >
              Demo Product 1: Pure Kutki Root
            </button>
            <button
              onClick={() => {
                setSelectedHerb("anantmool");
                setSelectedWeight("100g");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedHerb === "anantmool"
                  ? "bg-[#102A43] text-white border-[#102A43]"
                  : "bg-[#F5F9FF] text-slate-600 border-blue-100 hover:bg-blue-50"
              }`}
            >
              Demo Product 2: Anantmool Root
            </button>
          </div>

          {/* Interactive Card Display */}
          <div className="max-w-4xl mx-auto bg-[#F5F9FF] p-6 sm:p-8 rounded-2xl border border-blue-100 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Product Preview Image */}
              <div className="md:col-span-5 bg-white p-6 rounded-xl border border-blue-100 text-center flex flex-col items-center justify-center">
                <div className="w-40 h-40 rounded-xl bg-blue-50/60 p-3 flex items-center justify-center mb-4">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-[#1769AA]">
                  {currentProduct.category}
                </span>
              </div>

              {/* Product Details & Variant Controls */}
              <div className="md:col-span-7">
                <h3 className="text-xl font-bold text-[#102A43] mb-1">{currentProduct.name}</h3>
                <p className="text-xs text-slate-500 mb-4">{currentProduct.tagline}</p>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mb-5 p-3 rounded-xl bg-white border border-blue-100">
                  <span className="text-2xl font-extrabold text-[#1769AA]">
                    ₹{currentPricing.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    MRP: ₹{currentPricing.orig}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Save ₹{currentPricing.orig - currentPricing.price}
                  </span>
                </div>

                {/* Weight Variant Selector */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2">
                    Select Pack Weight: <span className="text-[#1769AA]">{selectedWeight}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(currentProduct.weights).map((w) => (
                      <button
                        key={w}
                        onClick={() => setSelectedWeight(w)}
                        className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all border ${
                          selectedWeight === w
                            ? "bg-[#1769AA] text-white border-[#1769AA] shadow-sm scale-105"
                            : "bg-white text-slate-700 border-blue-200 hover:bg-blue-50"
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3 px-6 rounded-xl font-bold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-md flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add {selectedWeight} to Cart (₹{currentPricing.price})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Four Pillars of Digital Approach ───────────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Digital Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Four Pillars of the Herbsfox E-Commerce Journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured shopping flow guiding customers smoothly from herb discovery to checkout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourPillars.map((pillar, idx) => (
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
                    Pillar Goal: <span className="text-[#102A43]">{pillar.highlight}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6 Diagram 1: The Herbal Shopping Ecosystem ──────── */}
      <section className="py-16 md:py-20 bg-[#102A43] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Interactive Visual • Diagram 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
              Herbsfox E-Commerce Ecosystem Architecture
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              A functional matrix mapping five store areas connected to the central Herbsfox platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
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

            <div className="lg:col-span-7">
              <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center justify-center my-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-sky-500/20 animate-ping pointer-events-none" />
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#1769AA] to-[#102A43] border-4 border-sky-400/60 shadow-2xl flex flex-col items-center justify-center text-center p-2 relative z-10">
                      <span className="text-xs font-bold tracking-widest text-sky-300 uppercase">STORE</span>
                      <span className="text-xs font-black text-white">HERBSFOX</span>
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

      {/* ── Section 6 Diagram 2: Customer Shopping Journey Stepper ───── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Customer Shopping Journey Stepper
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A 5-step timeline guiding shoppers from initial product discovery to cart checkout.
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

      {/* ── Section 6 Diagram 3: Product Information Architecture ────── */}
      <section className="py-16 md:py-20 bg-[#F5F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Interactive Visual • Diagram 3
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Product Page Information Architecture
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Showing how four information nodes unite on a single Herbsfox product page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {archNodes.map((node, idx) => (
              <div
                key={idx}
                onClick={() => setActiveArchNode(idx)}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                  activeArchNode === idx
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

      {/* ── Feature Showcase Tabs ────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
              Key Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              Website Experience & E-Commerce Features
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Detailed breakdown of key digital features engineered for Herbsfox.
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
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 p-1.5 border border-blue-100 mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1764660008/herbsfox.com__Nest_Hub_Max_bdj25p.png"
                      alt="Herbsfox Feature Preview"
                      className="max-h-full max-w-full object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-base font-bold text-[#102A43] mb-1">
                    {featureShowcase[activeFeatureTab].title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Herbsfox E-Commerce Feature
                  </p>
                  <a
                    href="https://herbsfox.com/"
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
              Business Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-2 mb-4">
              E-Commerce Value Delivered
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Helping Herbsfox communicate product purity, weight options, and streamline online purchases.
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
            Transforming Retail Ideas Into Thoughtful Digital Experiences
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            The Herbsfox case study demonstrates how an herbal e-commerce brand can present its product catalogue, educational content, dynamic weight variations, and shopping cart through a clean and responsive digital interface.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://herbsfox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#1769AA] hover:bg-[#102A43] transition-all shadow-md text-sm"
            >
              <span>Visit Official Herbsfox Store</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#102A43] bg-white border border-blue-200 hover:bg-blue-50 transition-all shadow-sm text-sm"
            >
              <span>Discuss Your E-Commerce Project</span>
              <ArrowRight className="w-4 h-4 text-[#1769AA]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer copyright sub-bar */}
      <footer className="py-6 bg-[#102A43] text-slate-400 text-xs text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Zentrix Infotech. Herbsfox Case Study.</p>
        </div>
      </footer>
    </div>
  );
}
