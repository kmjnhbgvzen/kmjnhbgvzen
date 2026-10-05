import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "1. Why should I hire a CRM development company in India?",
        answer: "India offers skilled developers, lower costs and flexible teams without compromising quality.",
    },
    {
        question: "2. How do I choose the best CRM development company?",
        answer: "Check their portfolio, ratings, pricing transparency, communication and post-launch support.",
    },
    {
        question: "3. How long does it take to build a custom CRM?",
        answer: "Basic CRMs take 6 to 10 weeks, while advanced systems can take 5 to 12 months.",
    },
    {
        question: "4. Do I own the source code of my CRM?",
        answer: "You should. Confirm ownership terms in the contract before starting.",
    },
    {
        question: "5. Can the CRM integrate with WhatsApp and my website?",
        answer: "Yes. WhatsApp, email, telephony, payment and accounting tools can all be integrated.",
    },
    {
        question: "6. Is custom CRM better than Zoho or HubSpot?",
        answer: "Custom is better for unique workflows and growing teams. Ready-made suits simple, immediate needs.",
    },
    {
        question: "7. Do you provide support after launch?",
        answer: "Yes. Zentrix Infotech offers maintenance, upgrades and team training after go-live.",
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
                    "Hire experienced CRM developers in India for custom sales, service, and marketing automation.",
                areaServed: ["India", "Worldwide"],
                url: "https://www.zentrixinfotech.com",
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
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
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                            Hire a CRM Development Company in India: A Complete Guide for Growing Businesses
                        </h2>

                        <p>
                            Every business reaches a point where spreadsheets, sticky notes and scattered WhatsApp chats stop working. Leads slip through the cracks, follow-ups get missed and nobody has a clear picture of the sales pipeline. That is the moment most companies decide to invest in a CRM (Customer Relationship Management) system.
                        </p>

                        <p>
                            The next question is harder: should you buy a ready-made tool, or hire a CRM development company in India to build one around your business? This guide explains why India is a smart choice, what a good partner delivers, the hiring models available, and how to pick the right team with confidence.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Hire a CRM Development Company in India?
                        </h2>

                        <p>
                            India has become one of the world&apos;s most trusted destinations for software development. Businesses across the globe, and thousands of Indian SMEs, choose local partners for several practical reasons.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Cost efficiency: Skilled developers are available at a fraction of the rates charged in the US, UK or Europe, so your budget goes further without cutting quality</li>
                            <li>Deep talent pool: India produces a large number of engineers every year, with strong experience in web, mobile, cloud and AI technologies</li>
                            <li>Time-zone advantage: Teams can work across time zones, and Indian businesses benefit from same-day meetings and quick turnarounds</li>
                            <li>Business understanding: An Indian partner understands local needs such as WhatsApp-first communication, GST-ready invoicing, regional languages and multi-branch operations</li>
                            <li>Scalable teams: You can start small and add developers, designers or testers as the project grows</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Signs It Is Time to Hire a CRM Development Company
                        </h2>

                        <p>
                            You may not need a custom CRM on day one. But these signals suggest a generic tool is holding you back:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Your team still manages leads in Excel or paper registers</li>
                            <li>Off-the-shelf CRM licences are getting expensive as your team grows</li>
                            <li>Your sales process is unique and ready-made software forces awkward workarounds</li>
                            <li>You need to integrate WhatsApp, telephony, accounting, ERP or a website with one system</li>
                            <li>Customer data is spread across tools, and reports take days to prepare</li>
                            <li>You want full ownership of your data and software instead of renting it</li>
                        </ul>

                        <p>
                            If two or three of these sound familiar, a custom CRM is worth serious consideration.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What Does a CRM Development Company Actually Deliver?
                        </h2>

                        <p>
                            A good partner does much more than write code. A complete engagement typically covers:
                        </p>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Discovery and Business Analysis"
                                description="The team studies your sales cycle, customer journey and pain points before suggesting any feature. This step prevents wasted spending later."
                            />

                            <ConsultationTopic
                                title="UI/UX Design"
                                description="A CRM only delivers value if people use it. Clean dashboards, simple forms and mobile-friendly layouts drive adoption across your sales and support teams."
                            />

                            <ConsultationTopic
                                title="Custom Development"
                                description="Core modules usually include: lead and contact management, sales pipeline and deal tracking, task and reminder automation, quotation and invoice generation, customer support and ticketing, role-based access and permissions, reports, dashboards and analytics."
                            />

                            <ConsultationTopic
                                title="Integrations"
                                description="Your CRM should connect with the tools you already use, such as WhatsApp Business, email, SMS, telephony, payment gateways, accounting software, websites and landing pages."
                            />

                            <ConsultationTopic
                                title="Cloud Deployment and Security"
                                description="Secure hosting, regular backups, encryption and access controls protect your customer data."
                            />

                            <ConsultationTopic
                                title="Training, Support and Maintenance"
                                description="Launch is not the finish line. Ongoing support, bug fixes and upgrades keep the system reliable as your business evolves."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Hiring Models: Which One Suits You?
                        </h2>

                        <p>
                            Most CRM development companies in India offer flexible engagement models. Choosing the right one affects both cost and control.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="border border-gray-200 px-4 py-2 text-left text-gray-900 font-semibold">Model</th>
                                        <th className="border border-gray-200 px-4 py-2 text-left text-gray-900 font-semibold">Best For</th>
                                        <th className="border border-gray-200 px-4 py-2 text-left text-gray-900 font-semibold">Key Advantage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Fixed price</td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Clearly defined projects with stable requirements</td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Predictable budget and timeline</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Time and material</td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Evolving requirements and phased builds</td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Flexibility to change scope</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Dedicated team</td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Long-term or large CRM programmes</td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Full focus and deep product knowledge</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Maintenance retainer</td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Existing CRMs needing upgrades</td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">Steady support at a fixed monthly cost</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            If you are starting your first CRM, a fixed-price MVP followed by phased enhancements is often the safest route.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            How to Choose the Right CRM Development Company in India
                        </h2>

                        <p>
                            Not every agency is the right fit. Use this checklist when shortlisting partners.
                        </p>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Review Their Portfolio and Track Record"
                                description="Look for proof of delivered projects across industries. Client ratings, testimonials and the number of completed projects reveal consistency. Ask whether they have built platforms with login systems, dashboards, bookings, enquiries or order management, as these skills carry over directly to CRM work."
                            />

                            <ConsultationTopic
                                title="2. Check Technical Capability"
                                description="A capable team should be comfortable with modern web frameworks, mobile development, APIs, databases and cloud infrastructure. They should explain technology choices in plain language, not hide behind jargon."
                            />

                            <ConsultationTopic
                                title="3. Demand a Clear Discovery Process"
                                description="Be cautious of companies that quote a price after a five-minute call. Good partners ask detailed questions about users, workflows and goals first."
                            />

                            <ConsultationTopic
                                title="4. Ask for Transparent, Itemised Pricing"
                                description="Your quote should separate design, development, integrations, testing, hosting and support. Hidden charges are a common source of disputes."
                            />

                            <ConsultationTopic
                                title="5. Evaluate Communication"
                                description="Responsive replies, regular progress updates and a single point of contact make projects smoother. If communication is poor during sales, it will not improve during delivery."
                            />

                            <ConsultationTopic
                                title="6. Confirm Ownership and Security Terms"
                                description="Make sure the contract states that you own the source code and data. Ask about backups, access controls and data protection practices."
                            />

                            <ConsultationTopic
                                title="7. Look for Post-Launch Support"
                                description="Software needs care. Check whether the company offers maintenance plans, bug-fix guarantees and training."
                            />

                            <ConsultationTopic
                                title="8. Consider Location and Accessibility"
                                description="For many Indian businesses, working with a team that can meet in person or at least collaborate in the same time zone makes reviews and approvals much faster."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Red Flags to Avoid
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>An unusually low quote that sounds too good to be true</li>
                            <li>No written scope, timeline or milestones</li>
                            <li>Refusal to share past work or client references</li>
                            <li>No clarity on who owns the code</li>
                            <li>Pressure to sign quickly without a proper requirement discussion</li>
                            <li>No plan for testing, security or support</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            The CRM Development Process: What to Expect
                        </h2>

                        <p>
                            A structured process keeps your project on track. At Zentrix Infotech, a typical engagement follows these stages:
                        </p>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Step 1"
                                title="Consultation and Requirement Gathering"
                                description="We understand your business, users and goals."
                            />

                            <ProcessStep
                                number="Step 2"
                                title="Planning and Roadmap"
                                description="Features are prioritised into phases, starting with an MVP."
                            />

                            <ProcessStep
                                number="Step 3"
                                title="Design"
                                description="Wireframes and prototypes are shared for your approval."
                            />

                            <ProcessStep
                                number="Step 4"
                                title="Development"
                                description="Agile sprints deliver working modules you can review regularly."
                            />

                            <ProcessStep
                                number="Step 5"
                                title="Testing"
                                description="Functional, security and performance checks catch issues early."
                            />

                            <ProcessStep
                                number="Step 6"
                                title="Deployment and Migration"
                                description="The CRM goes live on secure cloud infrastructure, with your existing data imported."
                            />

                            <ProcessStep
                                number="Step 7"
                                title="Training and Support"
                                description="Your team is onboarded and supported after launch."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            How Much Does It Cost to Hire a CRM Development Company in India?
                        </h2>

                        <p>
                            Costs depend on features, integrations, platforms and scale. As a rough guide, a basic CRM may start around ₹3 to ₹8 lakh, a mid-level system with automation and integrations typically falls between ₹8 and ₹20 lakh, and advanced or enterprise CRMs can range higher. Plan for annual maintenance of roughly 15 to 20 percent of the build cost. These are indicative market ranges, and the best way to get an accurate figure is a short discovery call.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Zentrix Infotech Is a Smart Choice
                        </h2>

                        <p>
                            Zentrix Infotech is a full-service IT company with offices in Moradabad and Ghaziabad, serving clients across India and beyond. With 250+ projects delivered, 270+ clients served and a 4.7/5 rating, we bring a track record you can verify.
                        </p>

                        <p>
                            What sets us apart:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>One team for everything: Web development, software development, mobile apps, UI/UX design, cloud solutions and digital marketing under one roof, so your CRM connects smoothly with your website, apps and campaigns</li>
                            <li>Business-first thinking: We start with your sales process, not with technology</li>
                            <li>Experience across industries: Our portfolio spans e-commerce, healthcare, education, hospitality and services, so we understand varied customer journeys</li>
                            <li>Transparent pricing: Clear, itemised quotes without surprises</li>
                            <li>Long-term partnership: We stay with you after launch with support, upgrades and training</li>
                        </ul>

                        <p>
                            Whether you want a simple lead management tool or a full-scale CRM with automation and mobile access, our team will recommend the most practical route for your goals and budget.
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
                                        href="/custom-business-software-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Custom Business Software Development
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/business-software-development-services"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Business Software Development Services
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/software-customization-services"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Software Customization Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/hire-crm-development-company-india"
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

function ConsultationTopic({ title, description }) {
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

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
            <h3 className="font-semibold text-gray-900 mb-2">{question}</h3>
            <p className="text-gray-700">{answer}</p>
        </div>
    );
}

export default Content;
