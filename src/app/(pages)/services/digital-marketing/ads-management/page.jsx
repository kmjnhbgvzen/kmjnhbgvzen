"use client";

import React from "react";

const AdsManagement = ({ handleButtonClick }) => {
    return (
        <div className="font-sans text-gray-800 leading-relaxed mt-0">

            {/* HERO SECTION */}
            <section className="relative px-4 sm:px-6 lg:px-8 pt-0 pb-8 sm:pb-10 bg-gray-50 overflow-hidden">

                {/* Decorative Circle - Top Left */}
                <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-[#1E3A8A] to-[#1E293B] rounded-full opacity-30 -translate-x-24 sm:-translate-x-32 -translate-y-24 sm:-translate-y-32 pointer-events-none"></div>

                {/* Decorative Circle - Bottom Right */}
                <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tl from-[#F8BBD9] to-[#E91E63] rounded-full opacity-15 translate-x-36 sm:translate-x-48 translate-y-36 sm:translate-y-48 pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">

                    {/* DIGITAL MARKETING */}
                    <div className="pt-0 mt-0 mb-6 sm:mb-8">
                        <span className="text-[#1E3A8A] font-semibold text-lg sm:text-xl">
                            DIGITAL MARKETING
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div>

                            <h1 className="whitespace-nowrap text-4xl sm:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-5 sm:mb-6 leading-tight">
                                ADS MANAGEMENT
                            </h1>

                            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                                Maximize your ROI with expertly managed Google Ads
                                campaigns. From strategic keyword bidding to
                                conversion optimization, we drive qualified traffic
                                and measurable results for your business.
                            </p>

                            <button
                                onClick={() =>
                                    handleButtonClick?.("Launch Ad Campaign")
                                }
                                className="px-7 sm:px-8 py-3 bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#E91E63] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                Launch Ad Campaign
                            </button>

                        </div>

                        {/* SERVICE CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                            {/* Card 1 */}
                            <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Campaign Strategy
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Data-driven strategies designed to reach your
                                    ideal customers.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                                    <span className="text-2xl">📊</span>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Performance Tracking
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Monitor campaign performance and optimize
                                    results continuously.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                                    <span className="text-2xl">💰</span>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Budget Optimization
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Get maximum returns while keeping your
                                    advertising budget under control.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                                    <span className="text-2xl">🚀</span>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Conversion Growth
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Turn qualified traffic into valuable leads
                                    and customers.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdsManagement;