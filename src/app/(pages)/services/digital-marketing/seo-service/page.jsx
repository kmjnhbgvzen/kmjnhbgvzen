"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  Settings,
  Smartphone,
  Monitor,
  Target,
  Globe,
  BarChart3,
  Search,
  FileText,
  TrendingUp,
  Sparkles
} from 'lucide-react';

// export const metadata = {title: "SEO Services Company – Zentrix Infotech",description: "Result-driven SEO services to rank higher on Google, drive traffic and generate quality leads."};


const SEOServicePage = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.animate-card');
    cards.forEach((card, index) => {
      card.id = `card-${index}`;
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Excellence cards data with background images
  const excellenceCards = [
    {
      icon: <Settings className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "On-Page SEO Excellence",
      description: "One of the pillars of effective SEO is on-page optimization. This involves fine-tuning various elements on your website to make it more search engine-friendly.",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Technical SEO for Peak Website Performance",
      description: "We understand that SEO goes beyond content and keywords, to enhance your website's visibility and success.",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Monitor className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Building Quality Backlinks",
      description: "Another critical aspect of SEO optimization, particularly building quality backlinks to your website.",
      bgImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Local SEO for Targeted Visibility",
      description: "Boost your local presence with targeted SEO strategies that help customers in your area find and connect with your business online.",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Dedicated Team",
      description: "With years of SEO industry experience and dedication to achieving exceptional results, providing strategic support and expert guidance.",
      bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "SEO for E-Commerce",
      description: "Specialized e-commerce SEO services that increase your online store's visibility, drive more traffic, and boost sales through targeted optimization strategies.",
      bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handleButtonClick = (action) => {
    console.log(`${action} button clicked`);
  };

  return (
    <div className="w-full pt-4 sm:pt-6 lg:pt-28">
      {/* SEO Service Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10 bg-gradient-to-b from-slate-50/70 via-white to-blue-50/20 relative overflow-hidden">
        {/* Decorative subtle blue ambient elements */}
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-blue-200/30 to-sky-100/20 rounded-full blur-3xl -translate-x-20 -translate-y-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-tl from-blue-100/30 to-sky-200/20 rounded-full blur-3xl translate-x-20 translate-y-20 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="mb-3 sm:mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Organic Growth
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-3 sm:mb-5">
                SEO Services &amp;
                <br />
                Optimization
              </h1>
              <p className="text-slate-600 mb-6 sm:mb-7 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                Dominate search results with our proven SEO strategies. We optimize every aspect of your online presence to increase organic traffic, improve rankings, and drive sustainable business growth through search engines.
              </p>
              <button
                onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white rounded-full font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base cursor-pointer"
              >
                Let&apos;s Work Together
              </button>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4.5">
              {[
                {
                  icon: Search,
                  title: "Keyword Strategy",
                  description: "Comprehensive keyword research and competitive analysis for targeted rankings",
                  tag: "High Intent"
                },
                {
                  icon: Settings,
                  title: "Technical SEO",
                  description: "Site speed optimization, crawlability improvements, and technical audits",
                  tag: "Performance"
                },
                {
                  icon: FileText,
                  title: "Content Optimization",
                  description: "SEO-focused content creation, optimization, and strategic content planning",
                  tag: "On-Page"
                },
                {
                  icon: TrendingUp,
                  title: "Rank Tracking",
                  description: "Monthly ranking reports, traffic analysis, and performance monitoring",
                  tag: "Analytics"
                }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl p-4.5 sm:p-5.5 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon Container + Tag */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center transition-colors duration-300 shrink-0">
                        <card.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100/90 text-blue-700 tracking-wide uppercase">
                        {card.tag}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-1.5 leading-snug">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Our Excellence Section - Modern Square Blue & White Layout */}
      <section className="relative pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 bg-gradient-to-b from-slate-50/60 via-white to-blue-50/30 overflow-hidden">
        {/* Subtle decorative background glows */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -translate-x-40 -translate-y-40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl translate-x-40 translate-y-40 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-left sm:text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="mb-3.5 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider border border-blue-200/70 shadow-2xs">
                WHAT SETS US APART
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-3 sm:mb-4">
              Our Excellence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl sm:mx-auto leading-relaxed">
              Discover the unique advantages that make us the preferred choice for innovative digital solutions and exceptional results.
            </p>
          </div>

          {/* Square Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {excellenceCards.map((card, index) => (
              <div
                key={index}
                className={`animate-card group relative bg-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-start sm:items-center text-left sm:text-center border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer ${
                  visibleCards.has(`card-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 80}ms`
                }}
              >
                {/* Square Icon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-300 shrink-0">
                  <span className="w-7 h-7 flex items-center justify-center">
                    {card.icon}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-2 leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>
    );
};

export default SEOServicePage;
