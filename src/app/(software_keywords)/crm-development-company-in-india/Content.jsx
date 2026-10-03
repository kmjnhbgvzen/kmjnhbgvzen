import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "How do I choose a CRM development company in India?",
        answer:
            "Check relevant experience, references, pricing transparency, security practices and post-launch support.",
    },
    {
        question: "What does a CRM development company do?",
        answer:
            "It plans, builds, integrates, secures and maintains CRM software for your business.",
    },
    {
        question: "Is Zentrix Infotech a CRM development company?",
        answer:
            "Yes. We build custom CRM software, plus integrations, mobile apps and ongoing support.",
    },
    {
        question: "How long does it take to build a custom CRM?",
        answer:
            "Usually 6–12 weeks for a standard CRM, longer for complex systems.",
    },
    {
        question: "Is custom CRM better than ready-made CRM?",
        answer:
            "It is better when you have unique workflows, need deep integrations or want to avoid per-user fees.",
    },
    {
        question: "Can I start with a small CRM and expand later?",
        answer:
            "Yes. Phased delivery lets you launch core features first and add modules as you grow.",
    },
    {
        question: "Will I own my CRM data?",
        answer:
            "Yes. Data and code ownership terms are agreed clearly in the proposal.",
    },
    {
        question: "Can you integrate the CRM with WhatsApp and my website?",
        answer:
            "Yes. We integrate WhatsApp, email, website forms, telephony and accounting tools.",
    },
    {
        question: "Do you provide training and support after launch?",
        answer:
            "Yes. We provide training, maintenance, bug fixes and upgrades.",
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
                    "CRM development company in India offering custom CRM software development, CRM integrations, web and mobile CRM applications, data migration, cloud deployment, security, training and long-term support.",
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
                            CRM Development Company in India: How to Choose the Right Partner for Your Business
                        </h1>

                        <p>
                            Choosing a CRM development company is a bigger decision than choosing the CRM itself. The software will only be as good as the team that plans, builds and supports it. A poor partner can leave you with a half-finished system, a team that refuses to use it, and a budget that has already disappeared.
                        </p>

                        <p>
                            India has hundreds of software companies offering CRM development, so how do you separate the reliable ones from the rest? This guide gives you a practical checklist. It also explains how Zentrix Infotech, a software development company with 250+ delivered projects and 270+ clients, approaches CRM projects.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why More Indian Businesses Are Investing in a CRM
                        </h2>

                        <p>
                            Most growing businesses hit the same wall. Enquiries arrive from the website, WhatsApp, calls, ads and walk-ins. Staff track them in notebooks, chats and spreadsheets. Follow-ups slip. Managers cannot tell which leads are hot. Customers repeat their story to every new person they speak to.
                        </p>

                        <p>
                            A CRM solves this by putting every lead, conversation, quote and payment in one place, with reminders, pipelines and reports on top. The result is fewer lost enquiries, faster responses and a clear view of what your sales team is actually achieving.
                        </p>

                        <p>
                            Many businesses start with a ready-made tool, and that is fine at first. But as processes grow more specific, per-user fees climb and integrations become awkward, a custom CRM often becomes the better long-term investment.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What a Good CRM Development Company Should Offer
                        </h2>

                        <p>
                            Before comparing prices, check that the company can cover the full journey:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Discovery and consulting:</strong> They should ask detailed questions about your process before proposing anything. If a company jumps to a quote in the first call, be cautious.
                            </li>
                            <li>
                                <strong>Custom development:</strong> The ability to build tailored workflows, roles, reports and automation, not just configure a template.
                            </li>
                            <li>
                                <strong>Integration:</strong> Connecting the CRM with your website, WhatsApp, email, telephony, payment gateways, accounting software and ERP.
                            </li>
                            <li>
                                <strong>Web and mobile:</strong> A responsive web platform, and a mobile app if your team works in the field.
                            </li>
                            <li>
                                <strong>Design:</strong> Clear, simple screens that staff enjoy using. Good UI/UX design directly affects adoption.
                            </li>
                            <li>
                                <strong>Migration:</strong> Safe transfer of your existing data from Excel or an older system.
                            </li>
                            <li>
                                <strong>Cloud hosting and security:</strong> Reliable deployment, backups and access control.
                            </li>
                            <li>
                                <strong>Support after launch:</strong> Training, bug fixes and continued improvements.
                            </li>
                        </ul>

                        <p>
                            A company strong in only one or two of these will leave gaps you will have to fill yourself.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Eight Things to Check Before You Hire
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Relevant Experience"
                                description="Ask how many CRM or business-software projects they have delivered, and whether any are in an industry like yours. Experience across 250+ projects, as at Zentrix, means the team has already met most of the problems your project will throw up."
                            />

                            <ConsultationTopic
                                title="2. Real References"
                                description="Ask to speak with a past client or see a live demo. Reviews and ratings matter too. A consistent score, such as our 4.7/5 client rating, shows a pattern, not a one-off."
                            />

                            <ConsultationTopic
                                title="3. A Clear Discovery Process"
                                description="The best companies spend time understanding your sales funnel, roles and reporting before writing a single line of code. This stage prevents expensive rework later."
                            />

                            <ConsultationTopic
                                title="4. Transparent, Itemised Pricing"
                                description="A good proposal lists modules, timeline, milestones and what is excluded. Vague quotes usually lead to arguments about scope halfway through the project."
                            />

                            <ConsultationTopic
                                title="5. Technology and Scalability"
                                description="Ask what technology they use and whether the system can handle more users, branches and data over time. A CRM that works for 10 users but slows at 100 is a false saving."
                            />

                            <ConsultationTopic
                                title="6. Security and Data Ownership"
                                description="Your customer data is a core asset. Confirm who owns the code and the data, how backups work, and how access is controlled."
                            />

                            <ConsultationTopic
                                title="7. Communication and Project Management"
                                description="Look for regular progress updates, working demos at each stage, and a single point of contact. Silence between kickoff and delivery is a warning sign."
                            />

                            <ConsultationTopic
                                title="8. Post-Launch Support"
                                description="A CRM needs fixes and enhancements as your business changes. Ask what support covers, for how long, and at what cost."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Red Flags to Avoid
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Guaranteeing a price or delivery date without understanding your needs</li>
                            <li>No portfolio, references or reviews</li>
                            <li>Pushing a single product regardless of your requirements</li>
                            <li>Refusing to explain who owns the source code</li>
                            <li>No testing or training in the plan</li>
                            <li>Extremely low quotes that cannot realistically cover the scope</li>
                            <li>Unwillingness to put the scope in writing</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Custom CRM or Ready-Made CRM: An Honest Comparison
                        </h2>

                        <p>
                            Ready-made CRM is quick to start and cheaper at first. It suits standard processes and small teams. The trade-offs are recurring per-user fees, limited customization, and workarounds when your process does not match the tool.
                        </p>

                        <p>
                            Custom CRM costs more upfront but fits your process exactly, integrates with your other systems, avoids per-user licensing and scales on your terms. It suits businesses with specific workflows, multiple teams or long-term growth plans.
                        </p>

                        <p>
                            A trustworthy development company will tell you which one you actually need. At Zentrix, if a ready-made tool is enough, we say so.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            How Zentrix Infotech Builds CRM Software
                        </h2>

                        <ol className="ml-4 list-decimal list-inside space-y-2">
                            <li>
                                <strong>Discovery:</strong> We study how your team sells, follows up and reports today.
                            </li>
                            <li>
                                <strong>Design:</strong> We map modules and workflows, then share wireframes for approval.
                            </li>
                            <li>
                                <strong>Development:</strong> We build in stages and share working versions regularly, so feedback arrives early.
                            </li>
                            <li>
                                <strong>Integration:</strong> We connect your CRM with the tools you already rely on.
                            </li>
                            <li>
                                <strong>Testing:</strong> We run functional, security and user-acceptance testing with real scenarios.
                            </li>
                            <li>
                                <strong>Migration and training:</strong> We import your data and train your team for smooth adoption.
                            </li>
                            <li>
                                <strong>Launch and support:</strong> We deploy on secure cloud infrastructure and stay available for improvements.
                            </li>
                        </ol>

                        <p>
                            Our software development, web development, mobile app development, UI/UX design and cloud solutions teams work together, so your CRM does not depend on multiple vendors.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What We Can Build into Your CRM
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Lead capture from your website, ads, calls and social media</li>
                            <li>Automatic lead assignment and follow-up reminders</li>
                            <li>Visual sales pipeline with deal stages and values</li>
                            <li>Contact history and activity timeline</li>
                            <li>Quotation and invoice creation</li>
                            <li>WhatsApp and email templates</li>
                            <li>Role-based access for sales, support and management</li>
                            <li>Support ticketing</li>
                            <li>Custom reports and dashboards</li>
                            <li>Multi-branch and multi-team support</li>
                        </ul>

                        <p>
                            We design around your needs, not around a fixed feature list.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Industries We Serve
                        </h2>

                        <p>
                            We have built software for businesses across many sectors, and CRM requirements differ for each:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Real estate:</strong> Enquiries, site visits, bookings and payments.
                            </li>
                            <li>
                                <strong>Education:</strong> Admissions, counselling follow-ups and fee reminders.
                            </li>
                            <li>
                                <strong>Healthcare:</strong> Patient enquiries and appointment follow-ups.
                            </li>
                            <li>
                                <strong>Retail and distribution:</strong> Dealer management and outstanding payments.
                            </li>
                            <li>
                                <strong>Agencies and services:</strong> Proposals, renewals and client records.
                            </li>
                            <li>
                                <strong>Travel and hospitality:</strong> Bookings and repeat customers.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Zentrix Infotech Is a Trusted CRM Development Company in India
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>250+ projects delivered and 270+ clients served</li>
                            <li>A 4.7/5 client rating</li>
                            <li>Offices in Moradabad and Ghaziabad, serving clients across India and internationally</li>
                            <li>Complete in-house capability, from design to cloud to digital marketing</li>
                            <li>Transparent proposals with clear milestones</li>
                            <li>A phased approach that keeps early investment manageable</li>
                            <li>Support that continues after launch</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Start Your CRM Project with a Free Consultation
                        </h2>

                        <p>
                            The best time to fix scattered leads and missed follow-ups is before they cost you another customer. Tell us about your sales process and goals. We will recommend the right approach and send a clear, itemised proposal.
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
                            currentSlug="/crm-development-company-in-india"
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
