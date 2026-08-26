"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Globe,
  Lightbulb,
  Target,
  Building,
  Heart,
  Shield,
  Rocket,
  Award,
  Sparkles,
  Zap,
} from "lucide-react";

const AboutUsSection = () => {
  const [activeValue, setActiveValue] = useState(0);

  const companyValues = [
    {
      icon: "🎯",
      title: "Innovation & Excellence",
      description:
        "We push the boundaries of what's possible, constantly exploring new technologies and methodologies to deliver cutting-edge solutions that set industry standards.",
    },
    {
      icon: "💡",
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We listen, understand, and collaborate closely with every client to ensure our solutions perfectly align with your business goals and vision.",
    },
    {
      icon: "🚀",
      title: "Agile & Adaptive",
      description:
        "In a rapidly evolving digital landscape, we embrace change and adapt quickly. Our agile methodologies ensure we deliver results efficiently while maintaining flexibility.",
    },
    {
      icon: "🌟",
      title: "Quality & Integrity",
      description:
        "We believe in doing things right the first time. Our commitment to quality, transparency, and ethical practices forms the foundation of every partnership we build.",
    },
  ];

  const teamHighlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Diverse Expertise",
      description:
        "Our multidisciplinary team brings together creative designers, skilled developers, strategic thinkers, and technology enthusiasts.",
      linear: "from-blue-500 to-purple-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Perspective",
      description:
        "With experience across various industries and markets, we understand the nuances of building solutions that work worldwide.",
      linear: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "We stay ahead of the curve by constantly learning, experimenting with new technologies, and evolving our expertise.",
      linear: "from-yellow-500 to-orange-600",
    },
  ];

  // Auto change values
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % companyValues.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Floating background elements
  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );

  // Tech grid
  const TechGrid = () => (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="grid grid-cols-12 gap-4 h-full">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="border border-emerald-500/20 rounded-sm"
            style={{
              animation: `pulse ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative px-4 py-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-white overflow-hidden">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />

        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(34,197,94,0.03)_120deg,transparent_240deg)]" />

        <FloatingElements />
        <TechGrid />
      </div>

      {/* Scanning Line */}

      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,197,94,0.1), transparent)",
          animation: "scan 10s infinite linear",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="max-w-7xl lg:pt-8 pt-4 pb-14 mx-auto relative z-10">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-16 mt-0">

          {/* Badge */}

          <div className="inline-flex items-center px-6 py-3 rounded-full font-medium font-serif bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 text-teal-600 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden">

            <Building className="w-4 h-4 mr-2 animate-pulse" />

            ABOUT US

            <div className="ml-2 w-2 h-2 bg-emerald-600 rounded-full animate-ping" />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-shimmer" />

          </div>

          {/* Heading */}

          <h2 className="text-3xl md:text-6xl lg:text-5xl font-medium font-serif mt-4 mb-8 leading-tight">

            <span className="text-slate-900 block">
              Crafting the future of
            </span>

            <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2 relative">

              digital innovation

              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-bounce opacity-40 blur-sm" />

            </span>
          </h2>

          <p className="md:text-xl text-lg text-slate-600 max-w-5xl mx-auto md:px-5 leading-relaxed">
            We are a passionate team of innovators, creators, and
            problem-solvers dedicated to transforming ideas into powerful
            digital experiences that make a meaningful impact.
          </p>

        </div>

        {/* ========================================================= */}
        {/* ===================== OUR STORY ========================= */}
        {/* ========================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* LEFT - STORY */}

          <div className="relative">

            <div className="absolute -left-10 top-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-2xl" />

            <h3 className="text-4xl md:text-5xl font-medium font-serif mb-8 text-slate-900 leading-tight">

              Our{" "}

              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Story
              </span>

            </h3>

            <div className="space-y-6 text-slate-700 leading-relaxed">

              <p className="text-lg">
                Born from a vision to bridge the gap between innovative
                technology and real-world business challenges, we started as a
                small team of passionate technologists who believed that great
                software could change everything.
              </p>

              <p className="text-lg">
                What began as a shared dream has evolved into a thriving
                company that helps businesses of all sizes harness the power of
                digital transformation. We've learned that success isn't just
                about writing code—it's about understanding people, solving
                problems, and creating experiences that truly matter.
              </p>

              <p className="text-lg">
                Today, we continue to push boundaries, embrace new challenges,
                and maintain the same entrepreneurial spirit that started it
                all. Every project we take on is an opportunity to make a
                difference, and every client relationship is built on trust,
                transparency, and shared success.
              </p>

            </div>

            {/* Mission */}

            <div className="mt-10 p-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">

              <div className="flex items-center mb-4">

                <Target className="w-6 h-6 text-emerald-600 mr-3" />

                <h4 className="text-xl font-medium font-serif text-slate-900">
                  Our Mission
                </h4>

              </div>

              <p className="text-slate-700 leading-relaxed">
                To empower businesses with innovative digital solutions that
                drive growth, enhance user experiences, and create lasting
                value in an ever-evolving technological landscape.
              </p>

            </div>

          </div>

          {/* RIGHT - STORY VISUAL */}

          <div className="relative">

            <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 shadow-xl overflow-hidden">

              {/* Decorative circles */}

              <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl" />

              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">

                  <Heart className="w-8 h-8 text-white" />

                </div>

                <h4 className="text-3xl font-serif font-medium text-slate-900 mb-5">
                  Turning Ideas Into Impact
                </h4>

                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  We believe every great digital product starts with a great
                  idea. Our role is to transform that idea into a meaningful,
                  scalable and high-performing digital experience.
                </p>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-5">

                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <Rocket className="w-7 h-7 text-emerald-600 mb-3" />

                    <h5 className="text-2xl font-bold text-slate-900">
                      Growth
                    </h5>

                    <p className="text-sm text-slate-600 mt-1">
                      Focused solutions
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
                    <Award className="w-7 h-7 text-blue-600 mb-3" />

                    <h5 className="text-2xl font-bold text-slate-900">
                      Quality
                    </h5>

                    <p className="text-sm text-slate-600 mt-1">
                      Built with purpose
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-purple-50 border border-purple-100">
                    <Shield className="w-7 h-7 text-purple-600 mb-3" />

                    <h5 className="text-2xl font-bold text-slate-900">
                      Trust
                    </h5>

                    <p className="text-sm text-slate-600 mt-1">
                      Long-term partnerships
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100">
                    <Zap className="w-7 h-7 text-orange-600 mb-3" />

                    <h5 className="text-2xl font-bold text-slate-900">
                      Innovation
                    </h5>

                    <p className="text-sm text-slate-600 mt-1">
                      Future-ready technology
                    </p>
                  </div>

                </div>

              </div>

            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-600/10 rounded-3xl blur-3xl -z-10 animate-pulse" />

          </div>

        </div>

        {/* ========================================================= */}
        {/* ===================== OUR VALUES ======================== */}
        {/* ========================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* LEFT - VALUES */}

          <div className="relative order-2 lg:order-1">

            <div className="bg-gradient-to-br from-white/90 to-slate-50/90 rounded-3xl border border-slate-200/50 backdrop-blur-xl p-8 relative overflow-hidden shadow-xl">

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan" />

              <div className="relative z-10">

                <div className="flex items-center mb-8">

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 flex items-center justify-center mr-4">

                    <Sparkles className="w-6 h-6 text-white" />

                  </div>

                  <h4 className="text-2xl font-medium font-serif text-slate-900">
                    Our Values
                  </h4>

                </div>

                {/* Active Value */}

                <div className="mb-8 p-6 bg-slate-50/80 rounded-2xl border border-slate-200/50 min-h-[210px] relative overflow-hidden">

                  <div className="flex items-center mb-4">

                    <span className="text-3xl mr-4">
                      {companyValues[activeValue].icon}
                    </span>

                    <h5 className="text-xl font-bold text-slate-900">
                      {companyValues[activeValue].title}
                    </h5>

                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    {companyValues[activeValue].description}
                  </p>

                  {/* Progress */}

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200">

                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-500"
                      style={{
                        width: `${((activeValue + 1) / companyValues.length) * 100}%`,
                      }}
                    />

                  </div>

                </div>

                {/* Indicators */}

                <div className="flex justify-center space-x-3">

                  {companyValues.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveValue(index)}
                      aria-label={`Show value ${index + 1}`}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeValue === index
                          ? "bg-emerald-600 scale-125"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT - VALUES CONTENT */}

          <div className="relative order-1 lg:order-2">

            <h3 className="text-4xl md:text-5xl font-medium font-serif mb-8 text-slate-900 leading-tight">

              What{" "}

              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Drives Us
              </span>

            </h3>

            <div className="space-y-6 text-slate-700">

              <p className="text-lg leading-relaxed">
                Our values define who we are, how we work, and the kind of
                relationships we build with our clients and partners.
              </p>

              <p className="text-lg leading-relaxed">
                We combine creativity, technology, and strategic thinking to
                build solutions that are not only visually impressive but also
                practical, scalable, and impactful.
              </p>

              <p className="text-lg leading-relaxed">
                From the first conversation to the final delivery, we focus on
                transparency, collaboration, quality, and continuous
                improvement.
              </p>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                Innovation
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                Collaboration
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                Excellence
              </span>

              <span className="px-4 py-2 rounded-full bg-orange-50 text-orange-700 border border-orange-100">
                Integrity
              </span>

            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* ================= TEAM HIGHLIGHTS ======================= */}
        {/* ========================================================= */}

        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 mb-5">

            <Users className="w-4 h-4" />

            <span className="font-medium">
              OUR TEAM
            </span>

          </div>

          <h3 className="text-4xl md:text-5xl font-medium font-serif text-slate-900">

            People Behind{" "}

            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              The Innovation
            </span>

          </h3>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-5">
            Our people are at the heart of everything we build. We bring
            different skills, experiences, ideas, and perspectives together to
            create meaningful digital solutions.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {teamHighlights.map((highlight, index) => (

            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 shadow-lg overflow-hidden"
            >

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.linear} mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
              >

                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />

                <div className="text-white relative z-10">
                  {highlight.icon}
                </div>

              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">

                {highlight.title}

              </h4>

              <p className="text-slate-600 leading-relaxed">

                {highlight.description}

              </p>

              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            </div>

          ))}

        </div>

      </div>

      {/* ================= ANIMATIONS ================= */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(100%);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

    </section>
  );
};

export default AboutUsSection;