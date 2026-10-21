"use client";

import React from "react";
import { Target, BarChart3, TrendingUp, Rocket, Sparkles } from "lucide-react";

const AdsManagement = ({ handleButtonClick }) => {
    const serviceCards = [
        {
            icon: Target,
            title: "Campaign Strategy",
            description: "Data-driven strategies designed to reach your ideal customers."
        },
        {
            icon: BarChart3,
            title: "Performance Tracking",
            description: "Monitor campaign performance and optimize results continuously."
        },
        {
            icon: TrendingUp,
            title: "Budget Optimization",
            description: "Get maximum returns while keeping your advertising budget under control."
        },
        {
            icon: Rocket,
            title: "Conversion Growth",
            description: "Turn qualified traffic into valuable leads and customers."
        }
    ];

    return (
        <div className="font-sans text-slate-800 leading-relaxed pt-4 sm:pt-6 lg:pt-36">

            {/* HERO SECTION */}
            <section className="relative px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 lg:pt-2 pb-12 sm:pb-16 bg-gradient-to-b from-slate-50/70 via-white to-blue-50/20 overflow-hidden">

                {/* Subtle blue ambient glows - Zentrix Theme */}
                <div className="absolute top-0 left-0 w-72 sm:w-80 h-72 sm:h-80 bg-blue-100/40 rounded-full blur-3xl -translate-x-20 -translate-y-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-sky-100/40 rounded-full blur-3xl translate-x-20 translate-y-20 pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">

                    {/* DIGITAL MARKETING PILL BADGE */}
                    <div className="mb-4 sm:mb-5">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                            Digital Marketing
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div>

                            <h1 className="text-2xl min-[390px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-5 sm:mb-6 whitespace-nowrap md:whitespace-normal">
                                ADS MANAGEMENT
                            </h1>

                            <p className="text-slate-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                                Maximize your ROI with expertly managed Google Ads
                                campaigns. From strategic keyword bidding to
                                conversion optimization, we drive qualified traffic
                                and measurable results for your business.
                            </p>

                            <button
                                onClick={() => {
                                    handleButtonClick?.("Launch Ad Campaign");
                                    window.dispatchEvent(new Event('open-contact-popup'));
                                }}
                                className="px-7 sm:px-8 py-3.5 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white rounded-full font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer text-sm sm:text-base"
                            >
                                Launch Ad Campaign
                            </button>

                        </div>

                        {/* SERVICE CARDS - Blue & White Zentrix Style */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4.5">
                            {serviceCards.map((card, index) => {
                                const IconComponent = card.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                                                <IconComponent className="w-6 h-6" />
                                            </div>

                                            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5 leading-snug">
                                                {card.title}
                                            </h3>

                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdsManagement;