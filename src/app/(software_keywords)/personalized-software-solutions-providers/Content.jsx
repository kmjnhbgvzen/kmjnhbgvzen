import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "What is a personalized software solutions provider?",
        answer:
            "It is a company that designs, builds, and maintains software tailored specifically to your business workflows and processes instead of selling a rigid, one-size-fits-all product.",
    },
    {
        question: "How do I choose the right personalized software provider?",
        answer:
            "Evaluate live client portfolios, assess engineering transparency, verify clear scope and milestone pricing, confirm 100% code ownership, and ensure long-term post-launch support and SLAs.",
    },
    {
        question: "Is personalized software expensive compared to SaaS?",
        answer:
            "While initial development requires investment, custom software eliminates recurring per-user licensing fees, allows modular phasing, and delivers higher ROI by matching exact business needs.",
    },
    {
        question: "How long does custom software take to build?",
        answer:
            "Focused MVPs and business tools typically take 4 to 8 weeks, while comprehensive enterprise software systems usually take 3 to 6 months delivered through structured milestones.",
    },
    {
        question: "Will I own the source code and intellectual property?",
        answer:
            "Yes. At Zentrix Infotech, full source code ownership, intellectual property rights, and technical documentation are transferred to the client upon project completion.",
    },
    {
        question: "Can you upgrade or customize software I already have?",
        answer:
            "Yes. We specialize in legacy modernization, adding new features, database optimization, UI/UX redesigns, and third-party API integrations for existing applications.",
    },
    {
        question: "Do you offer post-launch maintenance and support?",
        answer:
            "Yes. We provide continuous monitoring, security updates, feature enhancements, and cloud infrastructure management after deployment.",
    },
    {
        question: "Do you work with startups and small businesses?",
        answer:
            "Yes. We collaborate with startups, SMEs, and enterprise companies across India and globally, providing scalable solutions adapted to their growth stage.",
    },
];

function Content() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            },
            {
                "@type": "ProfessionalService",
                name: "Zentrix Infotech",
                description:
                    "Personalized software solutions provider offering custom software development, web development, mobile app development, UI/UX design, cloud solutions, and digital marketing.",
                areaServed: ["India", "Worldwide"],
                url: "https://www.zentrixinfotech.com",
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.7",
                    bestRating: "5",
                    ratingCount: "270",
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-white pt-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <div className="flex flex-col lg:flex-row">
                <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
                    <div className="max-w-4xl space-y-8 text-gray-700 leading-relaxed">
                        <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                            Personalized Software Solutions Providers: How to Find the Right Partner for Your Business
                        </h1>

                        <p>
                            Almost every growing business reaches the same point. The
                            spreadsheets get heavier, off-the-shelf tools stop fitting, and
                            the team spends more time working around software limitations than
                            getting productive work done. That is when organizations seek out
                            trusted personalized software solutions providers.
                        </p>

                        <p>
                            Finding an engineering partner who understands your operational
                            complexity is crucial. This guide explains what personalized
                            software providers do, how to compare them, key questions to ask,
                            and how Zentrix Infotech delivers tailor-made software solutions
                            that drive long-term business value.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What Do Personalized Software Solutions Providers Do?
                        </h2>

                        <p>
                            A personalized software solutions provider designs, develops, and
                            maintains software built around your unique business operations.
                            Instead of forcing your organization into rigid templates, they
                            engineer solutions that fit your exact workflow.
                        </p>

                        <p>Core service areas typically include:</p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Discovery and technical consultation:</strong> Auditing
                                workflows, mapping architecture, and defining business requirements.
                            </li>
                            <li>
                                <strong>Custom UI/UX Design:</strong> Creating intuitive, accessible
                                interfaces that simplify complex tasks for your staff and customers.
                            </li>
                            <li>
                                <strong>Full-Stack Development:</strong> Building secure web
                                portals, desktop tools, mobile apps, and backend APIs.
                            </li>
                            <li>
                                <strong>System Integration:</strong> Connecting software with
                                ERPs, payment gateways, CRM platforms, and legacy databases.
                            </li>
                            <li>
                                <strong>Cloud Deployment & DevOps:</strong> Configuring scalable,
                                secure cloud hosting (AWS, GCP, Azure) with automated CI/CD pipelines.
                            </li>
                            <li>
                                <strong>Continuous Support:</strong> Monitoring performance,
                                patching security vulnerabilities, and delivering ongoing feature upgrades.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Choose Personalized Software Over Commercial Off-The-Shelf (COTS) Tools?
                        </h2>

                        <p>
                            Off-the-shelf software caters to generic use cases. Companies choose
                            personalized software for several strategic advantages:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>100% Operational Fit:</strong> Built specifically for your
                                team's roles, approvals, and data models without clutter or missing features.
                            </li>
                            <li>
                                <strong>Automation & Efficiency:</strong> Streamlining repetitive
                                workflows such as billing, inventory tracking, dispatch, and reporting.
                            </li>
                            <li>
                                <strong>Scalability:</strong> Expandable as your user base, transaction
                                volume, or branch network grows.
                            </li>
                            <li>
                                <strong>Full Data & IP Ownership:</strong> Complete control over your
                                proprietary data, source code, and intellectual property.
                            </li>
                            <li>
                                <strong>No Recurring License Traps:</strong> Eliminate escalating
                                per-seat subscription fees as your staff expands.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Types of Software Solutions Providers
                        </h2>

                        <p>
                            Understanding provider archetypes helps you identify the right fit:
                        </p>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Full-Service Digital Engineering Agencies"
                                description="Agencies that handle end-to-end digital transformation — from product strategy, UI/UX, and cloud engineering to post-launch marketing and maintenance. This integrated approach ensures consistent execution (e.g., Zentrix Infotech)."
                            />

                            <ConsultationTopic
                                title="2. Mid-Sized Software Development Companies"
                                description="Agile teams that combine senior engineering expertise with personalized client communication, offering high flexibility without enterprise bureaucratics."
                            />

                            <ConsultationTopic
                                title="3. Large IT Consulting Conglomerates"
                                description="Suited for massive global corporations with substantial enterprise budgets, extensive compliance requirements, and lengthy procurement cycles."
                            />

                            <ConsultationTopic
                                title="4. Specialized Boutique Studios"
                                description="Focused on niche industries or specific technology stacks (e.g., AI integration, healthcare compliance, or fintech security)."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Checklist for Evaluating Software Development Partners
                        </h2>

                        <ol className="ml-4 list-decimal list-inside space-y-2">
                            <li>
                                <strong>Verifiable Live Portfolio:</strong> Examine functional,
                                live applications rather than static mockup images.
                            </li>
                            <li>
                                <strong>Structured Discovery Phase:</strong> Ensure the team asks
                                deep questions regarding your business metrics and operational blockers before quoting.
                            </li>
                            <li>
                                <strong>Milestone-Based Transparent Pricing:</strong> Clear breakdowns
                                of scope, deliverables, payment milestones, and change-order policies.
                            </li>
                            <li>
                                <strong>Modern, Maintainable Tech Stack:</strong> Reliance on proven,
                                modern frameworks (Next.js, Node.js, React, Python) ensuring easy maintenance.
                            </li>
                            <li>
                                <strong>Robust Security & Compliance:</strong> Strict access controls,
                                data encryption, secure APIs, and regular automated backups.
                            </li>
                            <li>
                                <strong>Clear Code Ownership in Writing:</strong> Full IP assignment
                                and repository access transferred to you.
                            </li>
                            <li>
                                <strong>Dedicated SLA & Post-Launch Support:</strong> Defined response
                                windows and maintenance commitments for smooth continuous operations.
                            </li>
                        </ol>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            About Zentrix Infotech
                        </h2>

                        <p>
                            Zentrix Infotech is a premier software development and digital solutions
                            company headquartered in Moradabad with operations in Ghaziabad and clients
                            across India and international markets. Having completed over 250+ projects
                            with a 4.7/5 customer satisfaction score, we partner with companies to create
                            scalable, high-performance software systems.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Our Comprehensive Services
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <Link
                                    href="/services/software-development"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Custom Software Development:
                                </Link>{" "}
                                Tailored enterprise applications, ERPs, CRM platforms, and workflow automation.
                            </li>
                            <li>
                                <Link
                                    href="/services/web-development"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Web Application Development:
                                </Link>{" "}
                                High-speed web apps and client portals built with Next.js and React.
                            </li>
                            <li>
                                <Link
                                    href="/services/mobile-development"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Mobile App Development:
                                </Link>{" "}
                                Native and cross-platform Android and iOS applications.
                            </li>
                            <li>
                                <Link
                                    href="/services/ui-ux-designing"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    UI/UX Designing:
                                </Link>{" "}
                                User-centric interface wireframes, prototypes, and conversion designs.
                            </li>
                            <li>
                                <Link
                                    href="/services/cloud-solutions"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Cloud Solutions:
                                </Link>{" "}
                                Secure cloud architecture, server management, and automated deployments.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Frequently Asked Questions
                        </h2>

                        <div className="mt-6 space-y-6">
                            {faqs.map((faq) => (
                                <FaqItem
                                    key={faq.question}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>

                        <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
                            <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                                Related Services
                            </h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <Link
                                        href="/services/software-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Custom Software Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/personalized-software-solutions"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Personalized Software Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Contact Zentrix Infotech
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/personalized-software-solutions-providers"
                        />
                    </div>
                </div>

                <div className="order-2 w-full p-8 lg:order-2 lg:w-[500px]">
                    <div className="lg:sticky lg:top-28">
                        <LandingEnquiry />
                        <RecentBlog />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ConsultationTopic({ title, description }) {
    return (
        <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

function FaqItem({ question, answer }) {
    return (
        <div>
            <h3 className="mb-3 font-semibold text-gray-900">{question}</h3>
            <p className="text-gray-700">{answer}</p>
        </div>
    );
}

export default Content;
