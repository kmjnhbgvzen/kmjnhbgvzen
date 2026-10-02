import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "How do I choose the best custom ERP development company in India?",
        answer: "Check their industry experience, process, Indian compliance knowledge, security, pricing clarity and post-launch support.",
    },
    {
        question: "How long does custom ERP development take?",
        answer: "Small systems take two to four months. Larger ERPs take six months or more, delivered in phases.",
    },
    {
        question: "How much does a custom ERP cost?",
        answer: "Cost depends on modules, integrations and complexity. We provide a detailed quote after discovery.",
    },
    {
        question: "Is custom ERP better than packaged ERP?",
        answer: "It is better when your workflows are unique or you need specific integrations. Packaged ERP suits standard processes.",
    },
    {
        question: "Will the ERP be GST and e-invoice ready?",
        answer: "Yes. We build GST invoicing, e-invoice and e-way bill support into the system.",
    },
    {
        question: "Can you integrate ERP with Tally or my website?",
        answer: "Yes. We integrate with Tally, e-commerce sites, payment gateways, couriers and WhatsApp.",
    },
    {
        question: "Do I own the source code?",
        answer: "Ownership terms are set in the contract. Custom projects commonly give the client full ownership.",
    },
    {
        question: "Can small businesses afford custom ERP?",
        answer: "Yes. Starting with essential modules and expanding in phases keeps costs manageable.",
    },
    {
        question: "Do you build mobile apps for ERP?",
        answer: "Yes. We develop Android and iOS apps so your team can work from anywhere.",
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
                    "Best custom ERP development company in India providing tailored software solutions, web applications, mobile apps, UI/UX design, cloud infrastructure, and digital marketing.",
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
                            Best Custom ERP Development Company in India: How to Choose the Right Partner
                        </h1>

                        <p>
                            Choosing an ERP partner is one of the biggest technology decisions a growing business makes. The system will hold your inventory, accounts, orders, people and reports. If it is built badly, you will feel the pain every day for years. If it is built well, it quietly saves hours of work and gives you a clear view of the business.
                        </p>

                        <p>
                            India has hundreds of ERP developers, from freelancers to large consulting firms, and every one of them claims to be the best. This guide explains what actually separates a good custom ERP development company from an average one, and how Zentrix Infotech approaches ERP projects for businesses across India.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Custom ERP Instead of a Packaged Product?
                        </h2>

                        <p>
                            Packaged ERP works when your processes are standard. Many Indian businesses are not standard. You may run job-work billing, dealer-wise pricing, batch and expiry tracking, multi-branch stock transfers or complex approval chains. Forcing these into a generic product usually means expensive customisation, workarounds or staff resistance.
                        </p>

                        <p>
                            A custom ERP is built around your workflows. You pay for what you need, you own the system, and you can add modules as the business grows. Licence fees do not rise with every new user, and integrations with your website, accounting software and delivery partners are designed in from the start.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What Makes a Custom ERP Development Company the &quot;Best&quot;?
                        </h2>

                        <p>
                            &quot;Best&quot; is not about the biggest office or the loudest marketing. It is about fit and delivery. Use these criteria when comparing companies.
                        </p>

                        <div className="space-y-6">
                            <ConsultationTopic
                                number="1"
                                title="They Understand Your Business Before Writing Code"
                                description="A strong partner starts with questions, not a quotation. They should study your departments, documents, approvals and reporting needs, then document them clearly. If a company quotes a price after a ten-minute call, expect surprises later."
                            />

                            <ConsultationTopic
                                number="2"
                                title="Relevant Experience Across Industries"
                                description="ERP needs differ between a manufacturer, a retailer, a hospital and a school. Look for a team that has worked across varied business types, because they will have seen more edge cases and can suggest better solutions."
                            />

                            <ConsultationTopic
                                number="3"
                                title="Strong Indian Compliance Knowledge"
                                description="An ERP built for India must handle GST invoicing, e-invoicing, e-way bills, TDS and multi-state operations properly. Ask how these are built into the system, and whether it can exchange data with Tally or your accountant's tools."
                            />

                            <ConsultationTopic
                                number="4"
                                title="A Clear, Phased Process"
                                description="Good ERP projects are delivered in phases, with working modules and regular demos, not a single big reveal after six months. Ask to see their process, sample documentation and how they handle change requests."
                            />

                            <ConsultationTopic
                                number="5"
                                title="Modern, Scalable Architecture"
                                description="Your ERP should handle more users, branches and data without slowing down. Ask about the technology, database design and cloud hosting, and whether the system exposes APIs so it can connect with other tools later."
                            />

                            <ConsultationTopic
                                number="6"
                                title="Security as a Standard Feature"
                                description="ERP holds your most sensitive data. Expect role-based access, encryption, audit logs, regular backups and a recovery plan as the baseline, not as paid extras."
                            />

                            <ConsultationTopic
                                number="7"
                                title="Usable Design"
                                description="If employees find the screens confusing, they will go back to Excel. Good ERP companies invest in UI/UX so that data entry is fast and training is short."
                            />

                            <ConsultationTopic
                                number="8"
                                title="Transparent Pricing and Ownership"
                                description="Ask what is included, what counts as a change request, who owns the source code and what ongoing support costs. Clear answers up front prevent disputes later."
                            />

                            <ConsultationTopic
                                number="9"
                                title="Support After Launch"
                                description="ERP is never &quot;finished&quot;. Tax rules change, processes evolve and new modules are needed. Choose a company that offers maintenance, updates and quick support after go-live."
                            />

                            <ConsultationTopic
                                number="10"
                                title="Honest References"
                                description="Ask for references, portfolio examples or client feedback. A confident company will share them."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Red Flags to Avoid
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>A fixed quote without understanding your requirements</li>
                            <li>No written scope or documentation</li>
                            <li>Vague answers on source code ownership</li>
                            <li>No plan for data migration or user training</li>
                            <li>Pressure to buy bundled modules you do not need</li>
                            <li>A team that disappears after delivery</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            How Zentrix Infotech Builds Custom ERP
                        </h2>

                        <p>
                            At Zentrix Infotech, we treat ERP as a business project first and a software project second. Here is how we work.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Discovery and requirement analysis. We meet each department, map current processes, identify bottlenecks and prepare a requirement document for your approval.</li>
                            <li>Planning and architecture. We define the modules, data structure, user roles, integrations and phases. This gives you a clear roadmap and an estimate based on real scope.</li>
                            <li>UI/UX design. Our UI/UX designers create clean, fast screens that reduce errors and training time.</li>
                            <li>Agile development. Our software development team builds module by module in short sprints. You see working features regularly and can adjust priorities early.</li>
                            <li>Testing. We test calculations, permissions, workflows, performance and security before launch.</li>
                            <li>Data migration and go-live. We clean and import your existing data and, where needed, run old and new systems in parallel for a smooth switch.</li>
                            <li>Training and support. We train your team and remain available for fixes, updates and new modules.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            ERP Modules We Develop
                        </h2>

                        <p>
                            You choose only what you need, and you can expand later.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Inventory and warehouse management</li>
                            <li>Sales, CRM and dealer management</li>
                            <li>Purchase and vendor management</li>
                            <li>Accounts, GST invoicing and financial reporting</li>
                            <li>HR, attendance and payroll</li>
                            <li>Production and manufacturing planning</li>
                            <li>Project and task management</li>
                            <li>Dashboards and analytics for owners and managers</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Built for Indian Businesses
                        </h2>

                        <p>
                            Our ERP solutions are designed with Indian operations in mind: GST-compliant invoicing, e-invoice and e-way bill support, TDS handling, Tally data exchange, multi-branch and multi-state operations, and optional Hindi or regional-language interfaces for shop-floor staff. Mobile access through our mobile app development service lets sales teams, field staff and managers work from their phones, and our cloud solutions keep the system secure, backed up and available.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Industries We Support
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Manufacturing: production planning, raw material tracking, quality checks, dispatch</li>
                            <li>Retail and distribution: multi-store inventory, dealer networks, discount and scheme management</li>
                            <li>Healthcare: patient records, billing, pharmacy stock, appointments</li>
                            <li>Education: admissions, fee collection, attendance, staff management</li>
                            <li>Construction and real estate: project costing, vendor payments, site inventory</li>
                            <li>Trading and e-commerce: order processing, courier integration, multi-channel stock sync</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What Does Custom ERP Cost in India?
                        </h2>

                        <p>
                            There is no single price, because every ERP is different. The main cost drivers are the number and complexity of modules, integrations with other systems, mobile app needs, data migration volume, customisation depth, and hosting and support requirements.
                        </p>

                        <p>
                            A phased approach keeps the investment manageable. Launch the modules that give the biggest return first, such as inventory, billing and reporting, then add production, HR or CRM as the business grows. We give a detailed estimate after the discovery stage, so you know what you are paying for.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Businesses Choose Zentrix Infotech
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Track record. We have delivered 250+ projects for 270+ clients and hold a 4.7/5 client rating.</li>
                            <li>One team for everything. Software, web, mobile, cloud and design sit under one roof, so your ERP, website and apps work together.</li>
                            <li>Business-first approach. We start with your goals and processes, then choose the technology.</li>
                            <li>Clear communication. Regular demos, defined timelines and a single point of contact keep you informed.</li>
                            <li>Local presence. Our offices in Moradabad and Ghaziabad make meetings and support easy across Uttar Pradesh and Delhi NCR, and we serve clients across India.</li>
                            <li>Long-term support. We stay with you after launch and grow the system as your business grows.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Questions to Ask Before You Hire Any ERP Company
                        </h2>

                        <p>
                            Whether you choose us or someone else, ask these questions:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Can you show similar projects or share client feedback?</li>
                            <li>How will you document our requirements?</li>
                            <li>What will be delivered in each phase, and when?</li>
                            <li>Who owns the source code and the data?</li>
                            <li>How do you handle changes in scope?</li>
                            <li>What security measures are standard?</li>
                            <li>What support do you provide after launch, and at what cost?</li>
                        </ul>

                        <p>
                            The answers will tell you quickly which company is the right fit.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Start Your Custom ERP Project
                        </h2>

                        <p>
                            If you are ready to replace scattered tools and manual work with one reliable system, we would be glad to help. Contact Zentrix Infotech for a free consultation, a clear roadmap and a transparent estimate.
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
                                        href="/custom-erp-development-services-india"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Custom ERP Development Services India
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/erp-development-company-for-manufacturing"
                                        className="text-blue-600 hover:underline"
                                    >
                                        ERP Development Company for Manufacturing
                                    </Link>
                                </li>

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
                            currentSlug="/best-custom-erp-development-company-india"
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

function ConsultationTopic({ number, title, description }) {
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {number}. {title}
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
