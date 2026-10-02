import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "What is custom enterprise application development?",
        answer: "It is the process of building large-scale business software tailored to your organisation's workflows, users and data.",
    },
    {
        question: "How is it different from off-the-shelf software?",
        answer: "Custom software is built around your processes. Off-the-shelf software makes you adapt to a standard product.",
    },
    {
        question: "How long does development take?",
        answer: "Smaller applications take two to four months. Larger multi-module platforms take six months or more, delivered in phases.",
    },
    {
        question: "How much does a custom enterprise application cost?",
        answer: "Cost depends on modules, integrations and complexity. We provide a detailed estimate after discovery.",
    },
    {
        question: "Can you integrate the application with our existing systems?",
        answer: "Yes. We integrate with ERP, CRM, accounting tools, payment gateways, logistics services and other APIs.",
    },
    {
        question: "Is the application secure?",
        answer: "Yes. We use role-based access, encryption, audit logs and secure hosting, along with regular backups.",
    },
    {
        question: "Can you modernise our old software?",
        answer: "Yes. We rebuild legacy systems on modern technology and migrate your existing data.",
    },
    {
        question: "Will you build a mobile app too?",
        answer: "Yes. We develop Android and iOS apps that connect to your enterprise application.",
    },
    {
        question: "Who owns the source code?",
        answer: "Ownership terms are set in the contract. Custom projects commonly give the client full ownership.",
    },
    {
        question: "Do you offer support after launch?",
        answer: "Yes. We provide maintenance, updates, security patches and new feature development.",
    },
];

const Content = () => {
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
                    "ERP development company for manufacturing delivering scalable enterprise software, workflow automation, and custom business applications.",
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
                <div className="flex-1 px-4 sm:px-8 md:px-16 py-0 order-1 lg:order-1">
                    <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                            Custom Enterprise Application Development: Build Software That Fits How Your Business Runs
                        </h1>

                        <p>
                            Growing organisations eventually hit the limits of ready-made software. Departments use different tools that don&apos;t talk to each other, approvals move through email threads, and leadership waits days for a report that should take minutes. Packaged products can cover the basics, but they rarely match the way a mid-sized or large business operates.
                        </p>

                        <p>
                            Custom enterprise application development solves this by building software around your processes, your data and your growth plans. At Zentrix Infotech, we design and develop secure, scalable enterprise applications for businesses across India. This page explains what these applications are, where they create value, how we build them, and how to choose the right partner.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What Is Custom Enterprise Application Development?
                        </h2>

                        <p>
                            An enterprise application is software that supports core operations across an organisation: multiple departments, many users, large volumes of data and strict security needs. Examples include internal operations platforms, workflow and approval systems, customer and dealer portals, ERP and CRM systems, supply chain tools and reporting dashboards.
                        </p>

                        <p>
                            &quot;Custom&quot; means the application is designed and built specifically for your organisation. You decide the features, the user roles, the integrations and the reporting. You are not paying for modules you will never use, and you are not working around missing ones.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Enterprises Move Beyond Off-the-Shelf Software
                        </h2>

                        <p>
                            Ready-made software is fast to start with, but several problems tend to appear as a business grows:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Process mismatch. Your approval chains, pricing rules and compliance steps are unique. Packaged tools force you to change your process or pay for heavy customisation.</li>
                            <li>Rising licence costs. Per-user and per-module fees climb quickly as teams expand.</li>
                            <li>Data silos. Each tool holds its own data, so nobody has a single view of operations.</li>
                            <li>Limited integration. Connecting a packaged product to your other systems can be expensive or impossible.</li>
                            <li>Vendor dependence. Roadmaps, pricing and support terms are decided by someone else.</li>
                        </ul>

                        <p>
                            A custom enterprise application removes these constraints. It adapts as you change, integrates with what you already use, and gives you control over the roadmap.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Custom Enterprise Application Development Services
                        </h2>

                        <p>
                            Our software development team handles the full lifecycle, from the first workshop to long-term support.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Enterprise application consulting. We study your departments, documents, bottlenecks and goals, then recommend what to build first, what to integrate and what to retire.</li>
                            <li>Custom web application development. Browser-based enterprise platforms that work on any device without installation, with role-based access, dashboards and detailed audit trails. Explore our web development capabilities.</li>
                            <li>Enterprise mobile apps. Android and iOS apps for field teams, sales staff, managers and customers, covering approvals, order capture, task tracking and real-time notifications. See our mobile app development service.</li>
                            <li>Workflow automation. We replace email chains and spreadsheets with automated workflows for approvals, requests, escalations and reminders.</li>
                            <li>System integration. We connect your application to ERP, CRM, accounting software, payment gateways, logistics partners, WhatsApp and SMS services, biometric devices and third-party APIs.</li>
                            <li>Legacy application modernisation. Old desktop or outdated systems can be rebuilt on a modern stack while preserving your business data and logic.</li>
                            <li>Cloud deployment and migration. We host and scale your application on secure cloud infrastructure with monitoring and backups. Learn more about our cloud solutions.</li>
                            <li>UI/UX design. Enterprise tools are used all day, so they must be fast, clear and easy to learn. Our UI/UX designers reduce training time and errors.</li>
                            <li>Support and maintenance. After launch we handle updates, security patches, performance tuning and new features.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Types of Enterprise Applications We Build
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Operations and workflow platforms for approvals, task tracking and process control</li>
                            <li>ERP systems covering inventory, sales, purchase, accounts, HR and production</li>
                            <li>CRM and sales management tools for leads, dealers, quotations and follow-ups</li>
                            <li>Customer, dealer and vendor portals for orders, invoices, tracking and support</li>
                            <li>Supply chain and logistics applications for stock, dispatch and delivery visibility</li>
                            <li>HR and employee management systems for attendance, leave, payroll and performance</li>
                            <li>Business intelligence dashboards that turn scattered data into live, decision-ready reports</li>
                            <li>Document and compliance management systems with version control and audit trails</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Industries We Serve
                        </h2>

                        <p>
                            Every industry has distinct workflows and compliance needs, so our solutions are shaped around them.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Manufacturing: production planning, raw material tracking, quality control, dispatch</li>
                            <li>Retail and distribution: multi-store inventory, dealer networks, pricing and scheme management</li>
                            <li>Healthcare: patient records, billing, pharmacy stock, appointment systems</li>
                            <li>Education: admissions, fees, attendance, timetables, faculty and student portals</li>
                            <li>Real estate and construction: project costing, vendor payments, site-level inventory</li>
                            <li>E-commerce and trading: order management, courier integration, returns and multi-channel stock sync</li>
                            <li>Services and consulting: project tracking, timesheets, billing and client reporting</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Key Features of a Well-Built Enterprise Application
                        </h2>

                        <p>
                            Not every application deserves the label &quot;enterprise grade&quot;. These are the qualities we build in:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Scalability. The system handles more users, branches and data without slowing down.</li>
                            <li>Security. Role-based permissions, encrypted data, secure authentication and activity logs protect sensitive information.</li>
                            <li>Reliability. Automated backups, monitoring and recovery plans keep operations running.</li>
                            <li>Integration readiness. Clean APIs allow easy connection with current and future tools.</li>
                            <li>Reporting and analytics. Leaders get live dashboards instead of waiting for manual reports.</li>
                            <li>Maintainability. Clean architecture and documentation make future changes quick and affordable.</li>
                            <li>Compliance. For Indian businesses this includes GST, e-invoicing and data-protection practices where relevant.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Development Process
                        </h2>

                        <p>
                            A structured approach keeps scope, timelines and budgets under control.
                        </p>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Step 1"
                                title="Discovery workshops"
                                description="We meet stakeholders from each department, document current processes and identify what slows the business down. You receive a requirements document to approve."
                            />

                            <ProcessStep
                                number="Step 2"
                                title="Solution architecture and roadmap"
                                description="We define modules, data structures, integrations, security rules and technology, then break the work into phases so you can start using the application early."
                            />

                            <ProcessStep
                                number="Step 3"
                                title="Prototype and design"
                                description="Clickable prototypes let your team see and test screens before development begins, which prevents expensive rework later."
                            />

                            <ProcessStep
                                number="Step 4"
                                title="Agile development"
                                description="We build in short sprints with regular demos. You see progress every few weeks and can adjust priorities."
                            />

                            <ProcessStep
                                number="Step 5"
                                title="Quality assurance"
                                description="We test functionality, calculations, permissions, performance and security across devices and user roles."
                            />

                            <ProcessStep
                                number="Step 6"
                                title="Data migration and deployment"
                                description="Existing data is cleaned and imported. Where needed we run the old and new systems in parallel, then go live on a planned date."
                            />

                            <ProcessStep
                                number="Step 7"
                                title="Training and handover"
                                description="We train users and administrators and provide documentation so your team is confident from day one."
                            />

                            <ProcessStep
                                number="Step 8"
                                title="Continuous improvement"
                                description="Business needs change. We provide ongoing support and add features as you grow."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Technology We Work With
                        </h2>

                        <p>
                            We select technology based on your requirements, scale and budget, not on trends. Our builds typically rely on modern front-end frameworks, dependable server-side technologies, relational and NoSQL databases, API-first architecture and cloud infrastructure. This keeps your application fast, secure and easy to extend, and avoids locking you into a narrow technology path.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What Influences the Cost of Enterprise Application Development?
                        </h2>

                        <p>
                            Every project is different, so costs vary. The main factors are:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Number of modules and user roles</li>
                            <li>Complexity of workflows and business rules</li>
                            <li>Number and type of integrations</li>
                            <li>Web only versus web plus mobile apps</li>
                            <li>Volume of data to migrate</li>
                            <li>Security and compliance requirements</li>
                            <li>Hosting, support and maintenance needs</li>
                        </ul>

                        <p>
                            The most effective way to manage cost is to phase the project: launch the highest-value modules first, gather real feedback, then expand. We share a clear estimate after the discovery discussion, with defined scope and no surprise charges.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Choose Zentrix Infotech?
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Proven delivery. We have completed 250+ projects for 270+ clients and hold a 4.7/5 client rating.</li>
                            <li>Business-first thinking. We begin with your goals and processes, then choose the technology.</li>
                            <li>Everything under one roof. Software, web, mobile, cloud and design are handled by one team, so your systems fit together.</li>
                            <li>Transparent communication. Regular demos, clear timelines and a dedicated point of contact keep you informed.</li>
                            <li>Local presence, national reach. With offices in Moradabad and Ghaziabad, we are easy to meet across Uttar Pradesh and Delhi NCR while serving clients across India.</li>
                            <li>Long-term partnership. We support your application after launch and grow it with your business.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Let&apos;s Build Your Enterprise Application
                        </h2>

                        <p>
                            If disconnected tools, manual processes and delayed reports are holding your organisation back, a custom enterprise application can bring speed, visibility and control. Contact Zentrix Infotech for a free consultation and a practical roadmap for your project.
                        </p>

                        <p>
                            <Link
                                href="/contact"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                Start Your Project Today &rarr;
                            </Link>
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6 mt-6">
                            {faqs.map((faq) => (
                                <FaqItem
                                    key={faq.question}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>

                        <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                                Related Services
                            </h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <Link
                                        href="/services/software-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Software Development
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/services/web-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Web Development
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
                                        href="/services/cloud-solutions"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Cloud Solutions
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
                                        href="/contact"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/erp-development-company-for-manufacturing"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-[500px] p-8 order-2 lg:order-2">
                    <div className="lg:sticky lg:top-28">
                        <LandingEnquiry />
                        <RecentBlog />
                    </div>
                </div>
            </div>
        </div>
    );
};

function ProcessStep({ number, title, description }) {
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {number}: {title}
            </h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

function FaqItem({ question, answer }) {
    return (
        <div>
            <h3 className="font-semibold text-gray-900 mb-3">{question}</h3>
            <p className="text-gray-700">{answer}</p>
        </div>
    );
}

export default Content;
