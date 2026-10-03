import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "What CRM development services does Zentrix Infotech offer?",
        answer:
            "Custom CRM, web and mobile CRM, integration, customization, migration, UI/UX design and ongoing support.",
    },
    {
        question: "How long does CRM development take?",
        answer:
            "Typically 6–12 weeks for a standard CRM. Complex systems take longer.",
    },
    {
        question: "What is the difference between custom CRM and ready-made CRM?",
        answer:
            "Custom CRM is built around your process, while ready-made tools need you to adapt to them.",
    },
    {
        question: "Can you customize my existing CRM?",
        answer:
            "Yes. We add modules, automations, dashboards and performance improvements to existing systems.",
    },
    {
        question: "Can the CRM connect with WhatsApp and my website?",
        answer:
            "Yes. We integrate WhatsApp, email, website forms, telephony, payments and accounting tools.",
    },
    {
        question: "Do you build mobile CRM apps?",
        answer:
            "Yes. We build Android and iOS apps for field teams.",
    },
    {
        question: "Can you move my data from Excel into a CRM?",
        answer:
            "Yes. We clean, map and import your data and verify it after migration.",
    },
    {
        question: "Is my customer data secure?",
        answer:
            "Yes. We use access controls, encrypted connections, backups and secure cloud hosting.",
    },
    {
        question: "Do you offer CRM support after launch?",
        answer:
            "Yes. We provide training, maintenance, bug fixes and feature upgrades.",
    },
    {
        question: "How do I get a quote for CRM development?",
        answer:
            "Contact us with your requirements and we will share an itemised proposal after a free consultation.",
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
                    "CRM development services in India including custom CRM software development, web and mobile CRM apps, CRM integrations, migration, UI/UX design, cloud deployment, security and long-term support.",
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
                            CRM Development Services in India: Software That Turns Enquiries into Customers
                        </h1>

                        <p>
                            Most businesses do not lose customers because their product is weak. They lose them because an enquiry went unanswered, a follow-up was forgotten, or nobody could see the full customer history when it mattered. The right CRM closes those gaps.
                        </p>

                        <p>
                            Zentrix Infotech provides end-to-end CRM development services in India, from planning and design to integration, launch and long-term support. Whether you are replacing Excel sheets, outgrowing a ready-made tool, or building a CRM for a specialised industry, our team builds systems your people will actually use. With 250+ projects delivered and 270+ clients served, we bring the experience to get it right the first time.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What Our CRM Development Services Include
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Custom CRM Software Development"
                                description="We build complete CRM systems from scratch around your sales process. That means your pipeline stages, your lead sources, your approval rules and your reports, not a generic template. Custom CRM suits businesses with unusual workflows, specific compliance needs or plans to scale without paying rising per-user fees."
                            />

                            <ConsultationTopic
                                title="2. Web-Based CRM Development"
                                description="Browser-based CRMs let your team log in from any office, home or client site with no installation. Our web development team builds fast, secure, responsive platforms that handle growing data and users without slowing down."
                            />

                            <ConsultationTopic
                                title="3. Mobile CRM App Development"
                                description="Field sales teams, property agents, service engineers and distributors need CRM access on the move. We build Android and iOS apps through our mobile app development service that let staff log visits, update deal status, capture photos and check customer history in seconds, even with patchy connectivity."
                            />

                            <ConsultationTopic
                                title="4. CRM Integration Services"
                                description="A CRM becomes powerful when it connects to the rest of your business. We integrate CRMs with website forms, landing pages, WhatsApp, email, SMS, telephony, call recording, payment gateways, accounting software, billing software, ERP, inventory systems, social media and ad platforms."
                            />

                            <ConsultationTopic
                                title="5. CRM Customization and Enhancement"
                                description="Already have a CRM that is slow, rigid or incomplete? We add modules, automate repetitive tasks, redesign dashboards and fix performance issues so you can keep what works and improve what does not."
                            />

                            <ConsultationTopic
                                title="6. CRM Migration and Data Cleanup"
                                description="Moving from Excel, a legacy system or another CRM is risky without planning. We clean duplicates, standardise fields, map old data to new structures and verify records after import, so you start with reliable information from day one."
                            />

                            <ConsultationTopic
                                title="7. CRM UI/UX Design"
                                description="Adoption is the biggest reason CRMs succeed or fail. Our UI/UX design team creates clear layouts, short workflows and mobile-friendly screens that reduce training time and data-entry mistakes."
                            />

                            <ConsultationTopic
                                title="8. Cloud Deployment, Security and Hosting"
                                description="We deploy your CRM on secure cloud infrastructure with backups, access controls and monitoring through our cloud solutions practice. As your user base grows, the system scales with it."
                            />

                            <ConsultationTopic
                                title="9. CRM Support and Maintenance"
                                description="After launch we provide bug fixing, updates, performance tuning, user training and feature additions, so your CRM keeps pace with your business."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Types of CRM We Develop
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Operational CRM"
                                description="Automates day-to-day sales, marketing and support: lead capture, follow-up reminders, pipelines, ticketing and quotations. This is the most common requirement."
                            />

                            <ConsultationTopic
                                title="Analytical CRM"
                                description="Focuses on insight: conversion rates, customer lifetime value, lead source performance, team productivity and sales forecasts. It helps owners decide where to invest."
                            />

                            <ConsultationTopic
                                title="Collaborative CRM"
                                description="Shares customer information across sales, support, accounts and management, so everyone sees the same history and nobody repeats questions to the customer."
                            />
                        </div>

                        <p>
                            Most businesses need a blend. We design the mix based on your goals and team size.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Features We Can Build into Your CRM
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Lead capture from website, ads, calls and social media</li>
                            <li>Automatic lead assignment and round-robin distribution</li>
                            <li>Visual sales pipeline with deal values and stages</li>
                            <li>Follow-up reminders and task scheduling</li>
                            <li>Contact, company and activity history</li>
                            <li>Quotation, proforma and invoice generation</li>
                            <li>WhatsApp and email templates with one-click sending</li>
                            <li>Role-based access and permissions</li>
                            <li>Customer support ticketing with response tracking</li>
                            <li>Custom reports and live dashboards</li>
                            <li>Audit logs and activity tracking</li>
                            <li>Document storage for contracts and proposals</li>
                            <li>Multi-branch and multi-team support</li>
                        </ul>

                        <p>
                            You choose what you need, and we leave out what you do not.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Industries We Serve
                        </h2>

                        <p>
                            Our software development team has worked across diverse sectors, and a CRM can be shaped for each:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Real estate and construction:</strong> Site-visit scheduling, booking tracking and payment follow-ups.
                            </li>
                            <li>
                                <strong>Education and coaching:</strong> Admission enquiries, counselling pipelines and fee reminders.
                            </li>
                            <li>
                                <strong>Healthcare and clinics:</strong> Enquiry management, appointment follow-ups and patient feedback.
                            </li>
                            <li>
                                <strong>Retail, wholesale and distribution:</strong> Dealer management, order history and outstanding payment tracking.
                            </li>
                            <li>
                                <strong>Agencies and professional services:</strong> Proposals, renewals and project-linked client records.
                            </li>
                            <li>
                                <strong>Hospitality and travel:</strong> Booking enquiries, repeat guest tracking and seasonal campaigns.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Business Benefits of a Well-Built CRM
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>No lost leads:</strong> Every enquiry is recorded, assigned and tracked until it closes.
                            </li>
                            <li>
                                <strong>Faster response times:</strong> Automation ensures customers hear back quickly, often the difference between winning and losing a deal.
                            </li>
                            <li>
                                <strong>Clear visibility:</strong> Owners see real numbers on pipeline, team performance and revenue forecasts instead of relying on verbal updates.
                            </li>
                            <li>
                                <strong>Better customer relationships:</strong> Complete history means every conversation is informed and personal.
                            </li>
                            <li>
                                <strong>Less manual work:</strong> Auto-reminders, templates and document generation free your team to sell.
                            </li>
                            <li>
                                <strong>Smarter marketing:</strong> When leads are tracked from source to sale, you know which campaigns bring real customers. This pairs well with our digital marketing services.
                            </li>
                            <li>
                                <strong>Data ownership:</strong> With a custom CRM, your customer data sits in a system you control.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Our CRM Development Process
                        </h2>

                        <ol className="ml-4 list-decimal list-inside space-y-2">
                            <li>
                                <strong>Step 1: Discovery.</strong> We study your sales funnel, team structure, existing tools and reporting needs.
                            </li>
                            <li>
                                <strong>Step 2: Planning and wireframes.</strong> We define modules, workflows and screens, and you approve them before development.
                            </li>
                            <li>
                                <strong>Step 3: Development in stages.</strong> Working versions are shared regularly so you can give feedback early.
                            </li>
                            <li>
                                <strong>Step 4: Integration.</strong> We connect your CRM with the tools you already use.
                            </li>
                            <li>
                                <strong>Step 5: Testing.</strong> Functional, security and user-acceptance testing with realistic data.
                            </li>
                            <li>
                                <strong>Step 6: Migration and training.</strong> We import existing records and train your team.
                            </li>
                            <li>
                                <strong>Step 7: Launch and support.</strong> We deploy, monitor and continue improving.
                            </li>
                        </ol>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Engagement Options
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Fixed-Scope Project"
                                description="Best when requirements are clear and you want a defined timeline and cost."
                            />

                            <ConsultationTopic
                                title="Phased Delivery"
                                description="Launch the essentials first, such as leads and follow-ups, then add modules. This suits small and mid-sized businesses and keeps spending controlled."
                            />

                            <ConsultationTopic
                                title="Dedicated Team"
                                description="Ideal for large or continuously evolving CRMs."
                            />

                            <ConsultationTopic
                                title="Support Retainer"
                                description="Monthly maintenance and enhancement for existing systems."
                            />
                        </div>

                        <p>
                            We recommend the model that fits your situation, not the one that maximises our billing.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Security and Data Protection
                        </h2>

                        <p>
                            A CRM holds your most sensitive business asset. Our services include role-based access, encrypted connections, regular backups, audit trails and secure cloud hosting. We discuss data ownership and access terms upfront, so you always know where your data lives and who can see it.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Businesses Choose Zentrix Infotech
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Experience:</strong> 250+ projects and 270+ clients across industries.
                            </li>
                            <li>
                                <strong>Client satisfaction:</strong> A 4.7/5 rating.
                            </li>
                            <li>
                                <strong>Full-stack capability:</strong> Design, web, mobile, cloud and marketing under one roof.
                            </li>
                            <li>
                                <strong>Transparent proposals:</strong> Itemised scope, timelines and milestones.
                            </li>
                            <li>
                                <strong>Local presence:</strong> Offices in Moradabad and Ghaziabad, serving clients across India and abroad.
                            </li>
                            <li>
                                <strong>Long-term partnership:</strong> We stay after launch.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Talk to Our CRM Team
                        </h2>

                        <p>
                            If your leads are scattered, your follow-ups are inconsistent, or your current CRM does not fit how you work, let us help. Share your requirements and we will recommend the right approach with a clear, itemised proposal.
                        </p>

                        <p>
                            Call: +91 72488 00839 | WhatsApp: +91 63970 36898 | Email:{" "}
                            <a
                                href="mailto:info@zentrixinfotech.com"
                                className="text-blue-600 hover:underline"
                            >
                                info@zentrixinfotech.com
                            </a>
                        </p>

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
                                        Software Development Services
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/services/web-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Web Development Services
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/services/mobile-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Mobile App Development
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/services/ui-ux-designing"
                                        className="text-blue-600 hover:underline"
                                    >
                                        UI/UX Designing
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/services/cloud-solutions"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Cloud Solutions
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
                            currentSlug="/crm-development-services-india"
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
