import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "What does a CRM development company do?",
        answer:
            "It designs, builds, integrates and maintains CRM software that manages leads, customers, sales and support.",
    },
    {
        question: "Why choose custom CRM development over a ready-made CRM?",
        answer:
            "Custom CRM fits your exact process, integrates with your tools and avoids per-user licence fees.",
    },
    {
        question: "How long does it take to develop a custom CRM?",
        answer:
            "Usually 6–12 weeks for a standard CRM, and longer for complex, multi-module systems.",
    },
    {
        question: "How much does CRM development cost in India?",
        answer:
            "It depends on modules, integrations and users. We provide an itemised quote after a free consultation.",
    },
    {
        question: "Can you integrate the CRM with WhatsApp, email and my website?",
        answer:
            "Yes. We integrate CRMs with websites, WhatsApp, email, telephony, payment gateways and ERPs.",
    },
    {
        question: "Can small businesses benefit from a custom CRM?",
        answer:
            "Yes. A simple CRM built in phases is affordable and prevents lost leads from day one.",
    },
    {
        question: "Do you build mobile CRM apps?",
        answer:
            "Yes. We build Android and iOS apps so field teams can update records on the go.",
    },
    {
        question: "Will you migrate my existing data into the new CRM?",
        answer:
            "Yes. We clean, map and import your data from Excel sheets or older systems.",
    },
    {
        question: "Do you provide support after the CRM goes live?",
        answer:
            "Yes. We offer training, maintenance, bug fixes and ongoing upgrades.",
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
                    "CRM development company in India offering custom CRM software development, web and mobile CRM apps, CRM integrations, data migration, customization, cloud deployment and ongoing support.",
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
                            CRM Development Company in India: Custom CRM Software Built Around Your Business
                        </h1>

                        <p>
                            Every growing business reaches the same point. Leads sit in WhatsApp chats, customer details live in Excel sheets, follow-ups depend on someone&apos;s memory, and the owner has no clear view of what is actually happening in sales. A CRM fixes this. But the right CRM is not always the most popular one. It is the one that fits how your team works.
                        </p>

                        <p>
                            Zentrix Infotech is a CRM development company in India that designs and builds custom CRM software for startups, SMEs and established businesses. After 250+ projects and 270+ clients across industries, we know what makes a CRM succeed: simple for the team to use, powerful for management to trust.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What Is a Custom CRM, and Why Does It Matter?
                        </h2>

                        <p>
                            A CRM (Customer Relationship Management) system stores every customer interaction in one place: enquiries, calls, quotes, orders, payments, support tickets and follow-ups. A custom CRM is built from scratch around your sales process, your terminology and your reports, instead of forcing your team to adapt to a generic tool.
                        </p>

                        <p>Off-the-shelf CRMs work for many businesses. But they often struggle when:</p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Your sales process has unusual stages or approvals</li>
                            <li>You need to connect with your own website, ERP or billing software</li>
                            <li>Per-user licence fees keep rising as your team grows</li>
                            <li>You need reports that standard dashboards cannot produce</li>
                            <li>You want full ownership of your data and your system</li>
                        </ul>

                        <p>
                            That is when working with a custom CRM development company makes sense.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            CRM Development Services We Offer
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Custom CRM Software Development"
                                description="A complete CRM designed around your workflow, from lead capture to after-sales support."
                            />

                            <ConsultationTopic
                                title="Web-Based CRM Development"
                                description="Secure, browser-based systems your team can use from any device, built with modern technologies for speed and reliability through our web development team."
                            />

                            <ConsultationTopic
                                title="Mobile CRM Apps"
                                description="Android and iOS apps so field sales teams can update visits, log calls and check customer history on the move, delivered by our mobile app development team."
                            />

                            <ConsultationTopic
                                title="CRM Integration Services"
                                description="Connect your CRM with your website forms, WhatsApp, email, telephony, payment gateways, accounting tools and ERP, so data flows automatically."
                            />

                            <ConsultationTopic
                                title="CRM Migration and Data Cleanup"
                                description="Move from spreadsheets or an old CRM into a new system, with duplicate removal, field mapping and verification."
                            />

                            <ConsultationTopic
                                title="CRM Customization and Upgrades"
                                description="Improve an existing CRM with new modules, automations, dashboards or performance fixes."
                            />

                            <ConsultationTopic
                                title="Cloud Deployment and Support"
                                description="Secure hosting, backups and scaling through our cloud solutions, plus ongoing maintenance after launch."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Core Features of a CRM We Build
                        </h2>

                        <p>
                            Every business needs something different, but most of our CRM projects include some combination of these:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Lead management:</strong> Capture leads from your website, social media, ads and calls; assign them automatically; track every stage.
                            </li>
                            <li>
                                <strong>Contact and company records:</strong> A full history of every customer in one profile.
                            </li>
                            <li>
                                <strong>Sales pipeline:</strong> A visual view of deals, stages, expected value and closing probability.
                            </li>
                            <li>
                                <strong>Follow-up reminders and task management:</strong> So no enquiry is forgotten.
                            </li>
                            <li>
                                <strong>Quotation and invoice generation:</strong> Create and send documents directly from the CRM.
                            </li>
                            <li>
                                <strong>Role-based access:</strong> Sales reps see their leads, managers see the team, owners see everything.
                            </li>
                            <li>
                                <strong>Automation:</strong> Auto-assign leads, send email or WhatsApp follow-ups, and trigger alerts for overdue tasks.
                            </li>
                            <li>
                                <strong>Support ticketing:</strong> Log and resolve customer complaints with tracked response times.
                            </li>
                            <li>
                                <strong>Reports and dashboards:</strong> Conversion rates, team performance, lead sources and revenue forecasts.
                            </li>
                            <li>
                                <strong>Marketing integration:</strong> Track which campaigns generate real customers, not just clicks, in coordination with our digital marketing services.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Industries We Build CRMs For
                        </h2>

                        <p>
                            Our software development team has worked with a wide range of sectors. A CRM can be shaped for:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Real estate:</strong> Enquiry tracking, site visit scheduling, booking status and payment follow-ups.
                            </li>
                            <li>
                                <strong>Education:</strong> Admission enquiries, counselling follow-ups, fee reminders and student communication.
                            </li>
                            <li>
                                <strong>Healthcare:</strong> Patient enquiries, appointment follow-ups and feedback tracking.
                            </li>
                            <li>
                                <strong>Retail and distribution:</strong> Dealer management, order history and payment follow-ups.
                            </li>
                            <li>
                                <strong>Services and agencies:</strong> Project leads, proposals, renewals and client communication.
                            </li>
                            <li>
                                <strong>Hospitality and travel:</strong> Booking enquiries, repeat guest tracking and seasonal campaigns.
                            </li>
                        </ul>

                        <p>
                            Each industry has its own language and flow, and your CRM should speak it.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Choose Zentrix Infotech as Your CRM Development Company in India
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Built Around Your Process, Not Ours"
                                description="We begin by understanding how your team sells and serves customers today. The CRM then mirrors the way your people already think, which means faster adoption."
                            />

                            <ConsultationTopic
                                title="Clean, Simple Interfaces"
                                description="A CRM only works if people use it. Our UI/UX design team focuses on clear screens, minimal clicks and mobile-friendly layouts so your team enjoys the system instead of avoiding it."
                            />

                            <ConsultationTopic
                                title="Proven Delivery Experience"
                                description="With 250+ projects delivered and a 4.7/5 client rating, we bring the discipline of a team that has done this many times."
                            />

                            <ConsultationTopic
                                title="Transparent Pricing"
                                description="You receive a clear, itemised proposal with modules, timeline and milestones. No vague quotes, no hidden extras."
                            />

                            <ConsultationTopic
                                title="Full Ownership and Flexibility"
                                description="Your CRM grows with you. Add modules, users and integrations as the business expands, without paying per-seat licence fees."
                            />

                            <ConsultationTopic
                                title="Local Presence, National Reach"
                                description="We work from our Moradabad and Ghaziabad offices and support clients across India and internationally."
                            />

                            <ConsultationTopic
                                title="Long-Term Support"
                                description="We stay with you after launch: training, bug fixing, improvements and scaling."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Our CRM Development Process
                        </h2>

                        <ol className="ml-4 list-decimal list-inside space-y-2">
                            <li>
                                <strong>Discovery and requirement analysis:</strong> We study your sales funnel, team structure, current tools and reporting needs.
                            </li>
                            <li>
                                <strong>Planning and design:</strong> We map the modules, workflows and screens, and you review wireframes before development begins.
                            </li>
                            <li>
                                <strong>Development:</strong> Our developers build the CRM in stages, sharing working versions regularly so you can give feedback early.
                            </li>
                            <li>
                                <strong>Integration:</strong> We connect the CRM with your website, communication tools, accounting software or ERP.
                            </li>
                            <li>
                                <strong>Testing:</strong> Functional, security and user-acceptance testing ensures the system works reliably with real data.
                            </li>
                            <li>
                                <strong>Data migration and training:</strong> We import your existing records and train your team so adoption is smooth.
                            </li>
                            <li>
                                <strong>Launch and support:</strong> We deploy on secure cloud infrastructure and provide ongoing maintenance and upgrades.
                            </li>
                        </ol>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            How Much Does CRM Development Cost in India?
                        </h2>

                        <p>
                            CRM pricing depends on scope. As a general guide, a simple CRM for a small team with lead tracking and follow-ups costs far less than an advanced system with automation, mobile apps, multiple integrations and detailed analytics. The main cost drivers are:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Number of modules and features</li>
                            <li>Complexity of workflows and automation</li>
                            <li>Integrations with other tools</li>
                            <li>Number of user roles</li>
                            <li>Mobile app requirements</li>
                            <li>Data migration volume</li>
                            <li>Hosting and support needs</li>
                        </ul>

                        <p>
                            We recommend starting with the features that solve your biggest problem, usually lead tracking and follow-ups, and expanding in phases. This keeps the initial investment manageable and lets real usage guide what you build next.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Custom CRM vs Ready-Made CRM: Which Is Right for You?
                        </h2>

                        <p>
                            Choose a ready-made CRM if your process is standard, your team is small, and you need to start within days.
                        </p>

                        <p>
                            Choose a custom CRM if you have a unique sales process, need deep integration with other systems, want to avoid recurring per-user fees, or plan to scale and need full control over your data.
                        </p>

                        <p>
                            Not sure? Our team will give you an honest recommendation, even if the answer is that a ready-made tool is enough for now.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Start Building Your Custom CRM Today
                        </h2>

                        <p>
                            Your customers are your most valuable asset, and a well-built CRM makes sure no enquiry is lost and no relationship is neglected. Talk to Zentrix Infotech about a CRM designed specifically for your business. We will understand your needs, suggest the right approach and share a clear proposal.
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
                            currentSlug="/crm-development-company-india"
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
