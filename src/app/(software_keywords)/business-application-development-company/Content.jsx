import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "What does a business application development company do?",
        answer:
            "It designs, builds, deploys, and maintains custom software that supports your operations, such as CRMs, portals, booking systems, and dashboards.",
    },
    {
        question: "What types of business applications can you build?",
        answer:
            "We build web apps, mobile apps, customer portals, internal tools, e-commerce platforms, and workflow automation systems.",
    },
    {
        question: "How long does it take to develop a business application?",
        answer:
            "Smaller tools take a few weeks. Larger multi-module systems usually take a few months and are delivered in phases.",
    },
    {
        question: "How much does a custom business application cost?",
        answer:
            "Cost depends on features, integrations, design, and platforms. We provide a clear estimate after a free consultation.",
    },
    {
        question: "Can you integrate the app with my existing software?",
        answer:
            "Yes. We integrate with accounting tools, payment gateways, CRMs, messaging services, and other systems.",
    },
    {
        question: "Will I own the source code?",
        answer:
            "Ownership is agreed in writing before the project begins. We transfer code, data, and documentation upfront.",
    },
    {
        question: "Do you provide support after launch?",
        answer:
            "Yes. We offer maintenance, monitoring, upgrades, and new feature development.",
    },
    {
        question: "Do you work with small businesses and startups?",
        answer:
            "Yes. We work with startups, small businesses, and large organisations across India and internationally.",
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
                    "Business application development company offering custom software, web applications, mobile apps, portals, workflow automation, UI/UX design, cloud solutions, and software maintenance.",
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
                            Business Application Development Company: Build Apps That Run Your Business Better
                        </h1>

                        <p>
                            Behind every smooth business is a set of tools that quietly do the
                            heavy lifting: an order system, a customer database, an approval
                            workflow, a billing screen, and a dashboard the owner checks every
                            morning. When those tools fit the business, work flows. When they do
                            not, staff fill the gaps with spreadsheets, calls, and manual
                            follow-ups.
                        </p>

                        <p>
                            A business application development company designs and builds those
                            tools so they match how your organisation really works. This guide
                            explains what such a company does, which applications deliver the
                            most value, how a good development process looks, and why businesses
                            choose Zentrix Infotech.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What Does a Business Application Development Company Do?
                        </h2>

                        <p>
                            A business application development company plans, designs, builds,
                            tests, deploys, and maintains software that supports your daily
                            operations. These applications can be used by employees, customers,
                            vendors, or partners and can run on the web, on mobile devices, or
                            both.
                        </p>

                        <p>The scope usually includes:</p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Requirement analysis:</strong> Understanding your
                                workflow, users, and goals.
                            </li>
                            <li>
                                <strong>UI/UX design:</strong> Screens that are simple, clear,
                                and quick to learn.
                            </li>
                            <li>
                                <strong>Application development:</strong> Front end, back end,
                                databases, and APIs.
                            </li>
                            <li>
                                <strong>Integration:</strong> Connecting with accounting
                                software, payment gateways, CRMs, messaging tools, and existing
                                systems.
                            </li>
                            <li>
                                <strong>Cloud deployment:</strong> Secure, scalable hosting.
                            </li>
                            <li>
                                <strong>Testing and quality assurance:</strong> Checking
                                functionality, performance, and security.
                            </li>
                            <li>
                                <strong>Support and enhancement:</strong> Fixes, upgrades, and
                                new features over time.
                            </li>
                        </ul>

                        <p>
                            The goal is not just working software. It is software that people
                            actually use because it makes their work easier.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Types of Business Applications Companies Commonly Need
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Customer relationship management systems"
                                description="A custom CRM tracks leads, follow-ups, quotations, customer history, and sales performance in one place. You can shape the pipeline stages, fields, and reports around your own sales process."
                            />

                            <ConsultationTopic
                                title="Enterprise resource planning and operations tools"
                                description="These systems can cover inventory, purchasing, production, HR, accounts, and reporting. Many businesses do not need a giant ERP, only the few modules that matter most, built to work together."
                            />

                            <ConsultationTopic
                                title="Customer and partner portals"
                                description="Portals let customers place orders, track status, download invoices, or raise support requests. Vendor and dealer portals streamline ordering and communication while reducing phone calls and emails."
                            />

                            <ConsultationTopic
                                title="Booking, appointment, and scheduling apps"
                                description="Clinics, resorts, institutes, and service businesses benefit from systems that handle bookings, reminders, payments, and calendar management."
                            />

                            <ConsultationTopic
                                title="E-commerce and marketplace applications"
                                description="From online stores to multi-category marketplaces and franchise ordering platforms, custom e-commerce applications manage catalogues, orders, delivery, and payments according to your business model."
                            />

                            <ConsultationTopic
                                title="Workflow and approval automation"
                                description="Leave requests, purchase approvals, document sign-offs, and task assignments can move through digital workflows with reminders and audit trails, replacing paper and chat-based approvals."
                            />

                            <ConsultationTopic
                                title="Dashboards and analytics"
                                description="Management dashboards pull data from different systems and show the numbers that matter, including sales, stock, collections, productivity, and campaign results."
                            />

                            <ConsultationTopic
                                title="Mobile business apps"
                                description="Field teams, delivery staff, and managers often need to work on the go. Mobile apps let them update status, capture data, check stock, or approve requests from anywhere."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Businesses Hire a Specialist Company Instead of Building In-House
                        </h2>

                        <p>
                            Some companies hire a developer or two. That can work, but a
                            specialist company offers several advantages:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>A complete team:</strong> Designers, developers,
                                testers, cloud engineers, and project managers work together.
                            </li>
                            <li>
                                <strong>Faster start:</strong> Established processes, reusable
                                components, and experience can shorten timelines.
                            </li>
                            <li>
                                <strong>Lower hiring risk:</strong> You do not need to recruit,
                                manage, and retain a full technical team.
                            </li>
                            <li>
                                <strong>Broader experience:</strong> Teams that have solved
                                similar problems for multiple clients can avoid common mistakes.
                            </li>
                            <li>
                                <strong>Continuity:</strong> If one team member leaves, the
                                project can continue.
                            </li>
                            <li>
                                <strong>Flexible scale:</strong> You can increase or reduce
                                effort as your needs change.
                            </li>
                        </ul>

                        <p>
                            For many small and mid-sized businesses, a development partner
                            offers the best balance of quality, speed, and cost.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What to Look for in a Business Application Development Company
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Relevant, verifiable work:</strong> Ask to see live
                                projects that you can open and test.
                            </li>
                            <li>
                                <strong>A discovery-first approach:</strong> The company should
                                ask about your processes, users, and goals before suggesting
                                features or quoting prices.
                            </li>
                            <li>
                                <strong>Clear scope, timeline, and pricing:</strong> Written
                                deliverables, milestones, and change-request rules help prevent
                                disputes.
                            </li>
                            <li>
                                <strong>Strong UI/UX capability:</strong> Business apps fail
                                when staff find them confusing. Good design drives adoption.
                            </li>
                            <li>
                                <strong>Modern, maintainable technology:</strong> Mainstream
                                technology stacks keep your options open if you change providers.
                            </li>
                            <li>
                                <strong>Security practices:</strong> Look for role-based access,
                                data encryption, secure hosting, and regular backups.
                            </li>
                            <li>
                                <strong>Code and data ownership:</strong> You should receive
                                source code, documentation, and admin access, or have a clear
                                written agreement.
                            </li>
                            <li>
                                <strong>Post-launch support:</strong> Applications need updates
                                as your business changes. Confirm support terms before signing.
                            </li>
                            <li>
                                <strong>Transparent communication:</strong> Regular demos and a
                                single point of contact keep you informed.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            How Zentrix Infotech Builds Business Applications
                        </h2>

                        <p>
                            Zentrix Infotech is an IT solutions company offering software
                            development, web development, mobile app development, UI/UX design,
                            cloud solutions, and digital marketing under one roof. We have
                            completed more than 250 projects for over 270 clients and maintain a
                            4.7/5 client rating.
                        </p>

                        <p>
                            Having these skills in one team means your application can be
                            designed, built, hosted, and promoted without coordinating several
                            vendors.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            Our Development Process
                        </h3>

                        <ol className="ml-4 list-decimal list-inside space-y-2">
                            <li>
                                <strong>Discovery and planning:</strong> We study your workflow,
                                interview key users, and define goals, features, and priorities.
                                You receive a written scope and timeline.
                            </li>
                            <li>
                                <strong>UI/UX design:</strong> We create wireframes and visual
                                designs for your approval. Screens are built for the people who
                                will use them every day.
                            </li>
                            <li>
                                <strong>Agile development:</strong> We build in milestones with
                                regular demos, so you can review progress and adjust early.
                            </li>
                            <li>
                                <strong>Integration:</strong> We connect your application to
                                payment gateways, accounting tools, messaging services, and
                                other systems.
                            </li>
                            <li>
                                <strong>Testing:</strong> We test features, performance,
                                security, and compatibility across devices and browsers.
                            </li>
                            <li>
                                <strong>Cloud deployment:</strong> We launch on scalable cloud
                                infrastructure with monitoring, backups, and access controls.
                            </li>
                            <li>
                                <strong>Training and support:</strong> We help your team adopt
                                the system and provide maintenance and enhancements as you grow.
                            </li>
                        </ol>

                        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            Our Service Range
                        </h3>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <Link
                                    href="/services/software-development"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Software Development:
                                </Link>{" "}
                                Custom business applications, ERPs, and workflow automation.
                            </li>
                            <li>
                                <Link
                                    href="/services/web-development"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Web Development:
                                </Link>{" "}
                                Web applications, client portals, and secure cloud platforms.
                            </li>
                            <li>
                                <Link
                                    href="/services/mobile-development"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Mobile App Development:
                                </Link>{" "}
                                High-performance Android and iOS mobile business apps.
                            </li>
                            <li>
                                <Link
                                    href="/services/ui-ux-designing"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    UI/UX Designing:
                                </Link>{" "}
                                Intuitive, conversion-optimized interface designs.
                            </li>
                            <li>
                                <Link
                                    href="/services/cloud-solutions"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Cloud Solutions:
                                </Link>{" "}
                                Scalable hosting, database management, and cloud architecture.
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
                                        Software Development Services
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/custom-business-application-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Custom Business Application Development
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
                            currentSlug="/business-application-development-company"
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
