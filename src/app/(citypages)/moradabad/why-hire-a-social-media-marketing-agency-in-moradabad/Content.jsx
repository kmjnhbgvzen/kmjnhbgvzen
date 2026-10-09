import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";


const Content = () => {
    return (
        <div className="min-h-screen bg-white pt-0">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 px-4 sm:px-8 md:px-16 py-0 order-1 lg:order-1">
                    <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                            Why Hire a Social Media Marketing Agency in Moradabad
                        </h2>


                        <p>
                            Moradabad businesses compete for attention on Instagram, Facebook and Google. A social media marketing agency in Moradabad gives you strategy, creative content, targeted ads and monthly reporting under one roof, so you stop guessing and start growing.
                        </p>


                        <p>
                            Zentrix Infotech, based in Buddhi Vihar, has delivered 250+ projects for 270+ clients, from hospitals to retail brands. Our team understands local buyers, festivals and budgets, and builds campaigns that bring real enquiries, not just likes.
                        </p>


                        <p>
                            Hiring an agency saves time, cuts wasted ad spend and keeps your brand consistent. Talk to Zentrix Infotech today and turn your social pages into a lead engine.
                        </p>


                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Frequently Asked Questions (FAQ)
                        </h3>


                        <div className="space-y-6 mt-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    Q1. Why should I hire a social media marketing agency in Moradabad?
                                </h4>
                                <p>
                                    An agency brings strategy, design, ads and analytics together, so you get steady leads without hiring a full in-house team.
                                </p>
                            </div>


                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    Q2. Is it cheaper than hiring an in-house social media manager?
                                </h4>
                                <p>
                                    Usually yes. One monthly fee covers several specialists and the tools they use.
                                </p>
                            </div>


                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    Q3. Which platforms do you manage?
                                </h4>
                                <p>
                                    We manage Instagram, Facebook, LinkedIn, YouTube and Google-linked profiles, based on where your customers are active.
                                </p>
                            </div>


                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    Q4. How soon will I see results?
                                </h4>
                                <p>
                                    Engagement often improves within the first month. Consistent lead growth usually takes three to six months.
                                </p>
                            </div>


                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    Q5. Can small businesses in Moradabad afford an agency?
                                </h4>
                                <p>
                                    Yes. We offer flexible packages that fit small business budgets.
                                </p>
                            </div>


                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    Q6. How do I get started with Zentrix Infotech?
                                </h4>
                                <p>
                                    Call +91 72488 00839 or send an enquiry through the contact page for a free consultation.
                                </p>
                            </div>
                        </div>


                        <p>
                            📞 <strong>WhatsApp / Call:</strong>{" "}
                            <a href="tel:+917248800839" className="text-blue-600 hover:underline">
                                +91 72488 00839
                            </a>
                            <br />
                            📧 <strong>Email:</strong>{" "}
                            <a
                                href="mailto:info@zentrixinfotech.com"
                                className="text-blue-600 hover:underline"
                            >
                                info@zentrixinfotech.com
                            </a>
                            <br />
                            🌐 <strong>Website:</strong>{" "}
                            <a
                                href="https://www.zentrixinfotech.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                www.zentrixinfotech.com
                            </a>
                        </p>


                        <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                                Related Services
                            </h3>


                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <Link
                                        href="/moradabad/digital-marketing-for-small-business-in-moradabad"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Digital Marketing For Small Business in Moradabad
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <CityInternalLinks
                            city="moradabad"
                            currentSlug="/moradabad/social-media-marketing-in-moradabad"
                        />
                    </div>
                </div>


                <div className="w-[400px] lg:w-[500px] p-8 order-2 lg:order-2">
                    <div className="lg:sticky lg:top-28">
                        <LandingEnquiry />
                        <RecentBlog />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Content;