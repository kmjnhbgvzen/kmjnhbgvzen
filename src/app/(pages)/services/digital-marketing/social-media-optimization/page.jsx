"use client";

import React, { useState, useEffect } from 'react';
import {
    Youtube,
    Target,
    Facebook,
    MapPin,
    Users,
    Instagram,
    Share2,
    TrendingUp,
    MessageSquare,
    Sparkles,
    ArrowRight
} from 'lucide-react';

const SocialMediaLanding = () => {
    const heroServices = [
        {
            icon: <Share2 className="w-5 h-5" />,
            title: "Social Strategy",
            description: "Custom multi-channel roadmap tailored to your target audience and brand identity."
        },
        {
            icon: <Target className="w-5 h-5" />,
            title: "Audience Targeting",
            description: "Data-backed demographic segmentation and persona mapping for maximal reach."
        },
        {
            icon: <Sparkles className="w-5 h-5" />,
            title: "Content Creation",
            description: "High-converting creatives, viral reels, story designs, and engaging copy."
        },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            title: "Performance Tracking",
            description: "Continuous ROI analytics, conversion monitoring, and engagement metrics."
        }
    ];

    const socialServices = [
        {
            icon: <Youtube className="w-6 h-6" />,
            title: 'YouTube Marketing',
            description: 'Craft impactful video campaigns, sponsored cards, display ads, and video remarketing strategies.'
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: 'Social Media Targeting',
            description: 'Pinpoint precise demographics, age brackets, professional backgrounds, and customer interests.'
        },
        {
            icon: <Facebook className="w-6 h-6" />,
            title: 'Facebook Marketing',
            description: 'Build organic communities, run lead-gen ads, carousel product showcases, and event promotions.'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Pinterest Marketing',
            description: 'Drive high-intent buyer traffic and brand discovery through visual pins and curated boards.'
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Lead Generation',
            description: 'Convert social interactions into qualified business leads and revenue-generating opportunities.'
        },
        {
            icon: <Instagram className="w-6 h-6" />,
            title: 'Instagram Marketing',
            description: 'Harness Instagram reels, carousels, stories, and influencer partnerships for maximum brand buzz.'
        }
    ];

    return (
        <div className="min-h-fit lg:min-h-screen bg-white pt-4 sm:pt-6 lg:pt-36">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 lg:pt-2 pb-6 sm:pb-8 lg:pb-10 bg-white relative overflow-hidden">
                {/* Decorative subtle blue ambient elements */}
                <div className="absolute w-72 h-72 rounded-full -top-20 -left-20 bg-blue-100/40 blur-3xl pointer-events-none" />
                <div className="absolute w-80 h-80 rounded-full top-1/2 -right-20 bg-sky-100/30 blur-3xl pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                        <div>
                            <div className="mb-4">
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs">
                                    SMO Excellence
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-4 sm:mb-5">
                                Social Media <br />
                                Optimization
                            </h1>

                            <p className="text-slate-600 mb-8 text-base sm:text-lg leading-relaxed max-w-lg">
                                Elevate your brand presence across modern social channels. We build data-driven organic engagement, high-converting creatives, and loyal online communities.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}
                                    className="px-6 sm:px-8 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-200 text-sm sm:text-base cursor-pointer"
                                >
                                    Discover Opportunities
                                </button>
                                <button
                                    onClick={() => {
                                        const el = document.getElementById('smo-services');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-6 sm:px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base cursor-pointer"
                                >
                                    Explore Solutions
                                </button>
                            </div>
                        </div>

                        {/* Hero Right Service Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                            {heroServices.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-sm transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 mb-3.5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                                        {card.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1.5 text-base group-hover:text-blue-600 transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="smo-services" className="relative pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 bg-slate-50/50 border-t border-slate-100 overflow-hidden">
                {/* Background decorative subtle glows */}
                <div className="absolute w-80 h-80 rounded-full -top-24 -left-24 bg-blue-100/30 blur-3xl pointer-events-none" />
                <div className="absolute w-80 h-80 rounded-full -bottom-24 -right-24 bg-sky-100/30 blur-3xl pointer-events-none" />

                <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                        <div className="mb-3.5 sm:mb-4">
                            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider border border-blue-200/70 shadow-2xs">
                                Social Media Solutions
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-4">
                            Unleash Your Unique Brand Story <br /> Across Digital Platforms
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Comprehensive, results-driven social media management and optimization campaigns built to scale your business.
                        </p>
                    </div>

                    {/* Compact, Enhanced Cards Grid in Blue & White */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {socialServices.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Icon container */}
                                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-2xs">
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                </div>

                                <button
                                    onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors pt-2 cursor-pointer border-t border-slate-100"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SocialMediaLanding;
