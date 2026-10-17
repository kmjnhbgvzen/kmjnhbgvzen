"use client";

import React, { useState, useEffect } from 'react';
import { Globe, Smartphone, Palette, Code, Database, Tablet, Headphones, Component, Layers, Zap, Users, User, Award, Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
  const companyPartners = [
    { name: "Google", tag: "Tech Giant", bg: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Microsoft", tag: "Enterprise", bg: "bg-cyan-50 text-cyan-700 border-cyan-200" },
    { name: "Adobe", tag: "Creative", bg: "bg-rose-50 text-rose-700 border-rose-200" },
    { name: "IBM", tag: "Cloud AI", bg: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    { name: "Samsung", tag: "Global Leader", bg: "bg-blue-50 text-blue-800 border-blue-200" },
    { name: "PayPal", tag: "FinTech", bg: "bg-sky-50 text-sky-700 border-sky-200" },
    { name: "Deutsche Bank", tag: "Banking", bg: "bg-slate-100 text-slate-800 border-slate-300" },
    { name: "Forbes", tag: "Media", bg: "bg-purple-50 text-purple-700 border-purple-200" },
    { name: "Upwork", tag: "Platform", bg: "bg-emerald-50 text-emerald-700 border-emerald-200" }
  ];

  return (
    <div className="bg-white relative overflow-hidden pt-16 sm:pt-20 lg:pt-[170px] pb-8 sm:pb-12">
      {/* Decorative subtle blue ambient elements */}
      <div className="absolute w-72 h-72 rounded-full -top-20 -left-20 bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute w-80 h-80 rounded-full top-1/2 -right-20 bg-sky-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs">
                Framework Excellence
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              Build Amazing<br />
              TypeScript Powered<br />
              Angular Apps!
            </h1>

            <p className="text-base sm:text-lg leading-relaxed max-w-lg text-slate-600">
              Create dynamic, scalable web applications with Angular&apos;s powerful framework.
              Leverage TypeScript, component-based architecture, and two-way data binding to build modern,
              enterprise-grade applications with exceptional performance.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}
                className="px-6 sm:px-8 py-3.5 bg-linear-to-r from-blue-700 via-blue-800 to-slate-900 hover:from-blue-800 hover:to-slate-950 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base cursor-pointer"
              >
                Get Started
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('angular-services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 sm:px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-300 text-sm sm:text-base cursor-pointer shadow-xs"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Right Content - Company Grid with High Visibility */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative p-4 sm:p-5 rounded-3xl bg-linear-to-br from-slate-100 via-blue-50/70 to-indigo-50/80 border-2 border-blue-200/90 shadow-xl max-w-md w-full">
              {/* Header inside container */}
              <div className="flex items-center justify-between mb-3.5 px-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">Enterprise Ecosystem</span>
                </div>
                <span className="text-[11px] font-semibold text-blue-700 bg-white border border-blue-200 px-2.5 py-0.5 rounded-full shadow-2xs">Top Brands</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {companyPartners.map((company, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl p-3 sm:p-3.5 flex flex-col items-center justify-center bg-white border-2 border-slate-200 hover:border-blue-600 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[92px] sm:min-h-[98px] text-center overflow-hidden cursor-default"
                  >
                    <div className={`w-8 h-8 rounded-xl border flex items-center justify-center mb-1.5 transition-transform duration-300 group-hover:scale-110 shadow-2xs ${company.bg}`}>
                      <span className="text-xs font-black tracking-tight">
                        {company.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-700 transition-colors duration-200 leading-snug">
                      {company.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium group-hover:text-blue-600 mt-0.5">
                      {company.tag}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState(1);
  const [animatedCards, setAnimatedCards] = useState(new Set());

  const services = [
    {
      id: 0,
      icon: <Code className="w-7 h-7" />,
      title: "TypeScript Integration",
      description: "Leverage TypeScript for stronger typing, better IDE support, and fewer runtime errors, ensuring cleaner, more maintainable code."
    },
    {
      id: 1,
      icon: <Component className="w-7 h-7" />,
      title: "Component Architecture",
      description: "Build scalable, modular apps with Angular’s component-based architecture for efficient, reusable, and maintainable code.",
      isActive: true
    },
    {
      id: 2,
      icon: <Layers className="w-7 h-7" />,
      title: "Dependency Injection",
      description: "Implement robust dependency injection patterns for better testing, modularity, and maintainability in enterprise applications."
    },
    {
      id: 3,
      icon: <Zap className="w-7 h-7" />,
      title: "Performance Optimization",
      description: "Utilize Angular's Ivy renderer, lazy loading, and change detection strategies for optimal application performance and user experience."
    }
  ];

  useEffect(() => {
    services.forEach((service, index) => {
      const timer = setTimeout(() => {
        setAnimatedCards(prev => new Set([...prev, service.id]));
      }, index * 200);

      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div className="bg-slate-50/50 py-8 sm:py-12 relative overflow-hidden border-t border-b border-slate-100">
      {/* Decorative ambient background */}
      <div className="absolute w-80 h-80 rounded-full -top-24 -left-24 bg-blue-100/30 blur-3xl pointer-events-none" />
      <div className="absolute w-80 h-80 rounded-full -bottom-24 -right-24 bg-sky-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
                Framework Features
              </span>

              <h2 className="text-5xl md:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                Angular<br />
                Development
              </h2>

              <p className="text-base sm:text-lg leading-relaxed max-w-md text-slate-600">
                Build powerful, scalable web applications with Angular&apos;s comprehensive framework.
                Leverage TypeScript, CLI tools, and enterprise-grade features for exceptional development experience.
              </p>
            </div>

            {/* Navigation dots */}
            <div className="flex space-x-3 items-center">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  aria-label={`Select service ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeService === index ? 'w-8 bg-[#2563EB]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}
              className="px-7 py-3 bg-linear-to-r from-blue-700 via-blue-800 to-slate-900 hover:from-blue-800 hover:to-slate-950 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base cursor-pointer"
            >
              Hire Angular Experts
            </button>
          </div>

          {/* Right Content - Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-pointer ${
                  animatedCards.has(service.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${
                  activeService === index
                    ? 'bg-white border-2 border-[#2563EB] shadow-md -translate-y-1'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div
                  className={`inline-flex p-3 rounded-xl mb-4 transition-colors ${
                    activeService === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 text-blue-600 border border-blue-100'
                  }`}
                >
                  {service.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-slate-900">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-sm text-slate-600">
                  {service.description}
                </p>

                {activeService === index && (
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>Selected Feature</span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ image, icon: Icon, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } hover:-translate-y-1 flex flex-col justify-between`}
    >
      <div>
        {/* Image Section */}
        <div className="relative h-44 overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />

          {/* Logo Badge */}
          <div className="absolute bottom-3 left-3 rounded-xl p-2.5 bg-white text-blue-600 border border-blue-100 shadow-md">
            <Icon className="w-5 h-5" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 space-y-2.5">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
            {description}
          </p>
        </div>
      </div>

      <div className="px-5 sm:px-6 pb-5 pt-0">
        <button
          onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}
          className="text-xs sm:text-sm font-semibold text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
        >
          <span>Learn More</span>
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

const AngularServicesGrid = () => {
  const services = [
    {
      image: "/grid1.png",
      icon: Globe,
      title: "Angular Web Development",
      description: "Build robust, scalable web applications with Angular's powerful framework and TypeScript integration"
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Smartphone,
      title: "Angular Mobile Apps",
      description: "Create hybrid mobile applications using Ionic and Angular for cross-platform compatibility"
    },
    {
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Palette,
      title: "Angular UI/UX Development",
      description: "Design beautiful, responsive user interfaces with Angular Material and custom component libraries"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Database,
      title: "Angular Enterprise Solutions",
      description: "Develop enterprise-grade applications with advanced features, security, and scalability"
    },
    {
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Code,
      title: "Angular PWA Development",
      description: "Build Progressive Web Apps with offline capabilities, push notifications, and native-like experience"
    },
    {
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Layers,
      title: "Angular Migration Services",
      description: "Seamlessly migrate from AngularJS or other frameworks to the latest Angular version"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Tablet,
      title: "Angular SPA Development",
      description: "Create fast, dynamic Single Page Applications with smooth navigation and real-time updates"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Headphones,
      title: "Angular Support & Maintenance",
      description: "Comprehensive support services including updates, bug fixes, and performance optimization"
    }
  ];

  return (
    <div id="angular-services" className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left sm:text-center mb-8 sm:mb-10">
          <div className="mb-3.5 sm:mb-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider border border-blue-200/70 shadow-2xs">
              Full-Suite Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-4">
            Angular Development Services
          </h2>
          <div className="w-20 h-1 sm:mx-auto bg-[#2563EB] rounded-full mb-4"></div>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl sm:mx-auto leading-relaxed">
            From single page applications to complex enterprise portals, our seasoned Angular developers deliver unmatched digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const HiringModel = () => {
  const hiringModels = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Hourly Model",
      badge: "Flexible Scope",
      features: [
        "Flexible Angular development",
        "Pay per hour basis",
        "TypeScript expertise",
        "24/7 technical support"
      ],
      buttonText: "Hire Angular Developer"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enterprise Model",
      badge: "Dedicated Team",
      isPopular: true,
      features: [
        "Dedicated Angular team",
        "Full-stack capabilities",
        "60% cost reduction",
        "Enterprise-grade solutions"
      ],
      buttonText: "Hire Angular Team"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Staff Augmentation",
      badge: "Team Extension",
      features: [
        "Angular specialists",
        "Flexible engagement",
        "Long-term partnerships",
        "48-hour trial period"
      ],
      buttonText: "Augment Your Team"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-slate-50/50 border-t border-slate-100">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-left sm:text-center mb-8 sm:mb-10">
          <div className="mb-3.5 sm:mb-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider border border-blue-200/70 shadow-2xs">
              Flexible Engagement
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-4">
            Angular Hiring Models
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl sm:mx-auto leading-relaxed">
            Scale your development capacity with flexible engagement models designed for enterprise-grade application delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {hiringModels.map((model, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-7 sm:p-8 text-center transition-all duration-300 flex flex-col justify-between ${
                model.isPopular
                  ? 'border-2 border-blue-500 shadow-md sm:-translate-y-1'
                  : 'border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md hover:-translate-y-1'
              }`}
            >
              <div>
                {model.isPopular && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-blue-600 text-white mb-4">
                    Most Popular
                  </span>
                )}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-5 transition-colors">
                  {model.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900">
                  {model.title}
                </h3>

                <ul className="space-y-3 mb-8 text-left">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base cursor-pointer ${
                  model.isPopular
                    ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-sm hover:shadow-md'
                    : 'bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 hover:border-blue-300'
                }`}
              >
                {model.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Angular_Js = () => {
  return (
    <>
      <Hero />
      <Services />
      <AngularServicesGrid />
      <HiringModel />
    </>
  );
};

export default Angular_Js;
