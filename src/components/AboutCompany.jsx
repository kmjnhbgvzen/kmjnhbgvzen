"use client";

import React from "react";
import { useRouter } from "next/navigation";

const AboutCompany = () => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/about-us");
    };

    return (
        <>
            <section className="bg-white pt-0 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-10">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-10 items-center">

                        {/* Left Content */}
                        <div className="space-y-3 sm:space-y-4 lg:space-y-6">

                            {/* About Us */}
                            <div className="text-teal-500 font-medium text-sm sm:text-base lg:text-lg uppercase tracking-wide bg-linear-to-r from-emerald-400/10 to-teal-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block border border-emerald-400/30 shadow-sm">
                                ABOUT US
                            </div>

                            {/* Heading */}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-medium font-serif text-gray-900 leading-[1.1]">
                                Crafting the future
                                <br />
                                <span className="block bg-linear-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                                    of digital innovation
                                </span>
                            </h2>

                            {/* Description */}
                            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-600 text-base sm:text-lg leading-[1.5]">
                                <p className="relative">
                                    Founded with a vision to bridge the gap between technology and real-world business challenges,
                                    Zentrix Infotech is a team of passionate technologists driving meaningful digital transformation.
                                    We craft smart, user-focused solutions that solve real problems, elevate user experiences,
                                    and deliver measurable business growth. Built on trust, transparency, and innovation,
                                    every project we undertake is driven by impact and long-term value.
                                </p>

                                {/* Highlight Box */}
                                <div className="relative p-3 sm:p-4 bg-linear-to-r from-[#f0ca4d]/10 to-[#f56a6a]/10 rounded-lg border-l-4 border-[#f0ca4d]">
                                    <p className="font-semibold text-gray-800 italic text-sm sm:text-base">
                                        We optimize enterprise technology systems to eliminate challenges,
                                        enhance performance, and accelerate business growth.
                                    </p>
                                </div>
                            </div>

                            {/* Services */}
                            <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-4 py-2 sm:py-3 lg:py-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#f56a6a] rounded-full shrink-0"></div>
                                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                                        Web Development
                                    </span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#3c4cad] rounded-full shrink-0"></div>
                                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                                        Digital Marketing
                                    </span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#f04393] rounded-full shrink-0"></div>
                                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                                        Mobile Apps
                                    </span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#f0ca4d] rounded-full shrink-0"></div>
                                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                                        IT Solutions
                                    </span>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="pt-0 sm:pt-1 lg:pt-2">
                                <button
                                    onClick={handleNavigate}
                                    className="
                                        cursor-pointer
                                        bg-linear-to-r from-[#3dd5c5] via-[#2dd4bf] to-[#14b8a6]
                                        text-white font-semibold
                                        py-3 sm:py-4 px-6 sm:px-8
                                        rounded-full
                                        transition-all duration-300 ease-in-out
                                        hover:scale-105
                                        flex items-center justify-center gap-2
                                        shadow-lg hover:shadow-2xl
                                        border border-white/20
                                    "
                                >
                                    <span>Know More</span>

                                    <svg
                                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="relative hidden lg:block">
                            <img
                                src="/Zentrix-aboutus.jpg"
                                alt="Team collaboration and technology innovation"
                                className="w-full h-[560px] rounded-lg shadow-xl object-cover border-2 border-white/50"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutCompany;