"use client";

import React, { useState, useEffect } from 'react';
import {
  Globe,
  Palette,
  Code,
  Database,
  Headphones,
  Zap,
  ShoppingCart,
  Package,
  Settings,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  User,
  Layers
} from 'lucide-react';

const Hero = () => {
  const companyPartners = [
    "Nike",
    "Ford",
    "Coca-Cola",
    "Samsung",
    "Liverpool FC",
    "Helly Hansen",
    "Olympus",
    "Venia",
    "Bulk Reef"
  ];

  return (
    <div className="bg-white relative overflow-hidden mt-0 lg:mt-32">
      {/* Decorative subtle blue ambient elements */}
      <div className="absolute w-72 h-72 rounded-full -top-20 -left-20 bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute w-80 h-80 rounded-full top-1/2 -right-20 bg-sky-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-16 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs">
                Adobe Commerce Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif uppercase leading-tight text-slate-900">
              Build Enterprise<br />
              <span className="text-[#2563EB]">Open-Source</span><br />
              Magento Stores!
            </h1>

            <p className="text-base sm:text-lg leading-relaxed max-w-lg text-slate-600">
              Create sophisticated e-commerce solutions with Magento&apos;s enterprise-grade platform.
              Leverage advanced catalog management, multi-store capabilities, B2B functionality, and robust customization options
              to build scalable online stores that handle complex business requirements and high-volume transactions.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}
                className="px-6 sm:px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-sm hover:shadow-md text-sm sm:text-base cursor-pointer"
              >
                Get Started
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('magneto-services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 sm:px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 text-sm sm:text-base cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Right Content - Company Grid */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative p-3.5 sm:p-5 rounded-3xl bg-gradient-to-br from-blue-50/50 via-slate-50/40 to-blue-50/30 border border-blue-100/80 shadow-xs max-w-md w-full">
              <div className="grid grid-cols-3 gap-3 sm:gap-3.5">
                {companyPartners.map((company, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl p-3 sm:p-4 flex items-center justify-center bg-white border border-slate-200/90 hover:border-blue-400 shadow-[0_2px_8px_-2px_rgba(37,99,235,0.06)] hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.14)] transition-all duration-300 hover:-translate-y-1 min-h-[85px] sm:min-h-[95px] text-center overflow-hidden cursor-default"
                  >
                    <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors duration-300" />
                    <span className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
                      {company}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      icon: <Database className="w-7 h-7" />,
      title: "Catalog Management",
      description: "Manage unlimited products with flexible product types, advanced pricing options, and comprehensive inventory tracking."
    },
    {
      id: 1,
      icon: <Settings className="w-7 h-7" />,
      title: "Multi-Store Architecture",
      description: "Build and manage multiple stores from a single admin panel. Support multi-language, multi-currency operations with shared customer databases and centralized inventory management.",
      isActive: true
    },
    {
      id: 2,
      icon: <Package className="w-7 h-7" />,
      title: "Order Management",
      description: "Streamline order processing with comprehensive workflow systems, automated notifications, and flexible fulfillment options."
    },
    {
      id: 3,
      icon: <Zap className="w-7 h-7" />,
      title: "B2B Functionality",
      description: "Enable B2B commerce with company accounts, custom catalogs, quote management, and advanced pricing structures."
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
    <div className="bg-slate-50/50 py-16 sm:py-20 relative overflow-hidden border-t border-b border-slate-100">
      {/* Decorative ambient background */}
      <div className="absolute w-80 h-80 rounded-full -top-24 -left-24 bg-blue-100/30 blur-3xl pointer-events-none" />
      <div className="absolute w-80 h-80 rounded-full -bottom-24 -right-24 bg-sky-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
                Platform Capabilities
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif uppercase leading-tight text-slate-900">
                Magento<br />
                <span className="text-[#2563EB]">Development</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed max-w-md text-slate-600">
                Build enterprise-level e-commerce solutions with Magento&apos;s robust open-source platform.
                Create scalable, customizable online stores with advanced features for complex business requirements.
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
              className="px-7 py-3 rounded-xl font-semibold transition-all duration-200 text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-sm hover:shadow-md text-sm sm:text-base cursor-pointer"
            >
              Hire Magento Experts
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
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

          {/* Logo Badge */}
          <div className="absolute bottom-3 left-3 rounded-xl p-2.5 bg-[#2563EB] text-white shadow-md">
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-600">
            {description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <button
          onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
        >
          <span>Consult Specialist</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const MagentoServicesGrid = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Globe,
      title: "Magento Store Development",
      description: "Build enterprise-level e-commerce stores with custom themes, advanced functionality, and scalable architecture."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Settings,
      title: "Adobe Commerce Solutions",
      description: "Implement Adobe Commerce (Magento Enterprise) with advanced B2B features, cloud hosting, and premium support."
    },
    {
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Palette,
      title: "Custom Extension Development",
      description: "Create custom Magento extensions and modules to extend platform functionality for specific business needs."
    },
    {
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Code,
      title: "Magento Theme Development",
      description: "Design responsive, performance-optimized themes with advanced customization and modern UI/UX principles."
    },
    {
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Database,
      title: "Magento Migration Services",
      description: "Migrate from Magento 1.x to Magento 2.x or from other platforms with data preservation and feature enhancement."
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Package,
      title: "Multi-Store Setup",
      description: "Configure complex multi-store, multi-language, and multi-currency e-commerce environments for global businesses."
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: ShoppingCart,
      title: "B2B Commerce Development",
      description: "Implement advanced B2B features including company accounts, custom catalogs, quote systems, and bulk ordering."
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Headphones,
      title: "Magento Support & Maintenance",
      description: "Comprehensive Magento support including security updates, performance optimization, and ongoing technical maintenance."
    }
  ];

  return (
    <div id="magneto-services" className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-3.5 sm:mb-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider border border-blue-200/70 shadow-2xs">
              Enterprise Commerce
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif uppercase mb-4 leading-tight tracking-tight text-slate-900">
            Magento <span className="text-[#2563EB]">Development</span> Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Enterprise e-commerce engineering designed for global reach, complex catalogs, and high-volume transactions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      badge: "Flexible Engagement",
      features: [
        "Flexible Magento development",
        "Pay per hour basis",
        "Enterprise e-commerce experts",
        "24/7 technical support"
      ],
      buttonText: "Hire Magento Developer"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Model",
      badge: "Dedicated Team",
      isPopular: true,
      features: [
        "Dedicated Magento team",
        "Adobe Commerce expertise",
        "Cost-effective delivery",
        "Enterprise-grade solutions"
      ],
      buttonText: "Hire Magento Team"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Staff Augmentation",
      badge: "Team Extension",
      features: [
        "Magento specialists",
        "Flexible engagement",
        "Long-term partnerships",
        "48-hour trial period"
      ],
      buttonText: "Augment Your Team"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-3.5 sm:mb-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider border border-blue-200/70 shadow-2xs">
              Flexible Engagement
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif mb-4 leading-tight tracking-tight uppercase text-slate-900">
            Magento <span className="text-[#2563EB]">Hiring Models</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Scale your Magento development with our flexible engagement models designed for enterprise e-commerce solutions and complex business requirements.
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

const Magento_Page = () => {
  return (
    <>
      <Hero />
      <Services />
      <MagentoServicesGrid />
      <HiringModel />
    </>
  );
};

export default Magento_Page;
