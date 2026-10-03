import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "Which is the best ERP development company near me?",
        answer:
            "The best one has proven projects, a clear process, transparent pricing and strong support. Zentrix Infotech offers all four from Moradabad and Ghaziabad.",
    },
    {
        question: "Do I need a local ERP company, or can I hire remotely?",
        answer:
            "Remote works, but a nearby team makes requirement meetings, training and support faster and more personal.",
    },
    {
        question: "Does Zentrix Infotech build custom ERP software?",
        answer:
            "Yes. Zentrix designs and builds ERP systems around your workflows, modules, users and integrations.",
    },
    {
        question: "Where are Zentrix Infotech's offices?",
        answer:
            "Offices are in Moradabad, Uttar Pradesh, and Ghaziabad, Uttar Pradesh.",
    },
    {
        question: "Can you serve clients outside Moradabad and Ghaziabad?",
        answer:
            "Yes. Clients across Delhi NCR and India are served through calls, online demos and remote training.",
    },
    {
        question: "How long does ERP development take?",
        answer:
            "Small systems take around 2–4 months, and larger multi-module systems take longer. A fixed timeline comes with your quote.",
    },
    {
        question: "Will the ERP include GST billing?",
        answer:
            "Yes. GST-ready invoicing and other Indian compliance needs can be built into the system.",
    },
    {
        question: "Can the ERP connect with my existing software?",
        answer:
            "Yes. It can integrate with accounting tools, payment gateways, courier services, WhatsApp and SMS.",
    },
    {
        question: "Do you offer support after launch?",
        answer:
            "Yes. Maintenance, updates, bug fixes and new module development continue after go-live.",
    },
    {
        question: "How do I get a quote?",
        answer:
            "Call, email or WhatsApp Zentrix Infotech. After a free consultation, you receive a fixed, itemised quotation.",
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
                    "ERP development company offering custom ERP software, web development, mobile apps, UI/UX design, cloud solutions, integrations, and digital marketing.",
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
                            ERP Development Company Near Me: Why Choosing a Nearby Partner Matters
                        </h1>

                        <p>
                            When you type &quot;ERP development company near me&quot; into Google, you are usually not just looking for a developer. You want a team you can meet, call without a time-zone gap, and trust to understand how your business actually runs.
                        </p>

                        <p>
                            Choosing an ERP partner is one of the bigger technology decisions a growing business makes. The software will hold your sales, stock, accounts and staff data. If it is built badly, you feel it every single day. If it is built well, it quietly saves hours and removes mistakes.
                        </p>

                        <p>
                            This guide explains what an ERP development company does, why proximity still matters in a digital world, what to check before you hire, and how Zentrix Infotech works with businesses in Moradabad, Ghaziabad, Delhi NCR and across India.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What Does an ERP Development Company Do?
                        </h2>

                        <p>
                            An ERP (Enterprise Resource Planning) system brings your business operations into one connected platform. An ERP development company designs, builds, deploys and maintains that system for you.
                        </p>

                        <p>
                            A complete ERP project typically covers:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Requirement analysis: studying your current workflows, pain points and growth plans.</li>
                            <li>Custom software design: planning modules, screens, permissions and reports.</li>
                            <li>Development: building the system with modern web and mobile technologies.</li>
                            <li>Integration: connecting your ERP with accounting software, payment gateways, GST tools, courier services, WhatsApp or SMS.</li>
                            <li>Data migration: moving data from Excel sheets or older software.</li>
                            <li>Training and support: helping your team adopt the system and fixing issues after launch.</li>
                        </ul>

                        <p>
                            Common modules include inventory, sales and invoicing, purchase, accounts, HR and payroll, CRM, production and reporting dashboards. A custom ERP includes only what you need, built around your process.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Search for an ERP Company &quot;Near Me&quot;?
                        </h2>

                        <p>
                            Many ERP projects are delivered remotely, so is location still important? For most businesses, yes. Here is why.
                        </p>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Face-to-face requirement discussions"
                                description="The best ERP systems start with long conversations about how your business works. Sitting in your office, watching your billing counter, warehouse or accounts desk, reveals details that never appear in an email. A nearby team can visit your site when it matters."
                            />

                            <ConsultationTopic
                                title="2. Faster communication"
                                description="Same-region teams share your working hours, language and business culture. A quick call to fix a billing problem is easier than waiting for an overseas team to wake up."
                            />

                            <ConsultationTopic
                                title="3. Smoother training and rollout"
                                description="Staff adopt a new system faster when someone is physically present to guide them. On-site training at go-live reduces confusion and resistance."
                            />

                            <ConsultationTopic
                                title="4. Quicker post-launch support"
                                description="When something stops working during month-end closing, you want help within hours. A nearby partner can visit if needed."
                            />

                            <ConsultationTopic
                                title="5. Accountability"
                                description="You can visit their office, meet the team and see the people behind the project. That builds trust and keeps both sides responsible."
                            />

                            <ConsultationTopic
                                title="6. Understanding of local compliance"
                                description="An Indian ERP development company understands GST invoicing, e-way bills, TDS, state-wise tax rules and the way Indian businesses actually operate."
                            />
                        </div>

                        <p>
                            That said, &quot;near me&quot; should be your starting filter, not your only one. A nearby company with weak delivery is still a bad choice. Check capability, process and references as well.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Signs of a Good ERP Development Company
                        </h2>

                        <p>
                            Before you shortlist anyone, check these points.
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li><strong>Proven track record.</strong> Ask for live projects, client names and references. A company that has delivered hundreds of projects has dealt with real-world problems, from messy data to changing requirements.</li>
                            <li><strong>End-to-end capability.</strong> Your partner should handle software development, UI/UX design, mobile apps and cloud hosting under one roof. If the work is split across vendors, delays and blame games follow.</li>
                            <li><strong>A structured process.</strong> Look for a clear path: discovery, scope document, design approval, phased development, testing, training and launch.</li>
                            <li><strong>Transparent pricing.</strong> Ask for an itemised quote that includes development, hosting, maintenance and training. Be wary of vague &quot;one-line&quot; quotations.</li>
                            <li><strong>Source code ownership.</strong> Confirm in writing that you own the code and your data.</li>
                            <li><strong>Scalability.</strong> The ERP should handle more users, branches and modules as you grow, without a rebuild.</li>
                            <li><strong>Post-launch support.</strong> An ERP is a living system. You need a team that stays available after delivery.</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Custom ERP vs Readymade ERP: Which Is Right for You?
                        </h2>

                        <p>
                            A nearby ERP company should be able to advise you honestly on this.
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Readymade ERP suits businesses with standard processes. It is quick to start, but you pay recurring per-user licences, and customisation is limited.</li>
                            <li>Custom ERP suits businesses with unique workflows, multiple branches, special pricing or approval rules, or plans to grow. You own the software, there are no per-user fees, and every feature matches how your team works.</li>
                        </ul>

                        <p>
                            If a company pushes one option without asking about your business, treat that as a warning sign. A good partner starts by understanding your operations, and Zentrix recommends the approach that fits your size and budget, even if that is a simpler solution.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Industries an ERP Company Should Understand
                        </h2>

                        <p>
                            ERP needs differ widely between sectors. A good partner will have experience across several, such as:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Retail and trading: multi-store billing, stock transfers, supplier tracking and barcode support.</li>
                            <li>Manufacturing: bill of materials, production planning, batch tracking and quality checks.</li>
                            <li>Healthcare: patient records, appointments, billing, pharmacy and inventory.</li>
                            <li>Education: admissions, fees, attendance, exams and staff management.</li>
                            <li>Hospitality and services: bookings, billing, housekeeping and staff scheduling.</li>
                            <li>Distribution and franchise: dealer management, order flow, delivery tracking and franchise reporting.</li>
                        </ul>

                        <p>
                            Zentrix Infotech has built platforms for retail and franchise brands, healthcare providers, educational institutions, hospitality businesses and interior and event companies. That cross-industry exposure helps the team spot workflow problems early.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            How Zentrix Infotech Works: Your ERP Development Process
                        </h2>

                        <p>
                            Here is how a typical ERP engagement runs with Zentrix.
                        </p>

                        <div className="space-y-6">
                            <ProcessStep
                                number="1"
                                title="Free consultation"
                                description="You explain your business, current tools and challenges. The team asks questions, notes your goals and suggests what an ERP could solve first."
                            />

                            <ProcessStep
                                number="2"
                                title="Requirement analysis and scope"
                                description="Your workflows are mapped and documented. You receive a written scope listing modules, features, integrations and timelines, so there are no surprises later."
                            />

                            <ProcessStep
                                number="3"
                                title="Fixed, itemised quotation"
                                description="You get a clear estimate with module-wise pricing, hosting and maintenance costs."
                            />

                            <ProcessStep
                                number="4"
                                title="UI/UX design"
                                description="Screens are designed around the tasks your staff perform daily, so the system is easy to learn and hard to misuse. You approve the design before development begins."
                            />

                            <ProcessStep
                                number="5"
                                title="Phased development"
                                description="The ERP is built in stages. You see working modules early and give feedback along the way instead of waiting months for a big reveal."
                            />

                            <ProcessStep
                                number="6"
                                title="Testing and data migration"
                                description="Each module is tested for accuracy, speed and security. Your existing data is cleaned, mapped and moved across."
                            />

                            <ProcessStep
                                number="7"
                                title="Training and go-live"
                                description="Your team is trained, and the system goes live with close support during the first weeks."
                            />

                            <ProcessStep
                                number="8"
                                title="Ongoing support and growth"
                                description="Zentrix stays available for maintenance, updates and new modules as your business expands."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Businesses Choose Zentrix Infotech
                        </h2>

                        <p>
                            Zentrix Infotech is an IT solutions company that builds software, websites, mobile apps, cloud systems and digital marketing campaigns for startups and established businesses.
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>250+ projects delivered for 270+ clients.</li>
                            <li>4.7/5 client rating.</li>
                            <li>Local presence: offices in Moradabad and Ghaziabad, serving Uttar Pradesh, Delhi NCR and clients across India.</li>
                            <li>Full-service team: software development, web development, UI/UX design, mobile apps and cloud solutions in one place.</li>
                            <li>Business-first approach: every project starts from your goals, not a template.</li>
                            <li>Clear communication: regular updates, demos and a team you can reach by phone or WhatsApp.</li>
                            <li>Long-term support: help does not end at launch.</li>
                        </ul>

                        <p>
                            Because the same team can also build your website, customer-facing app and marketing presence, your ERP fits into a bigger digital plan instead of being a standalone tool.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Where We Work
                        </h2>

                        <p>
                            Zentrix Infotech has two offices:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Moradabad: 12/11, Buddhi Vihar Phase 2, Moradabad, Uttar Pradesh 244001</li>
                            <li>Ghaziabad: A-20 Sunshine Apartment, Ghaziabad, UP 201013</li>
                        </ul>

                        <p>
                            Businesses in Moradabad, Ghaziabad, Noida, Delhi, Meerut, Bareilly, Rampur and nearby cities can meet the team in person. For clients elsewhere in India, discovery calls, screen-share demos and remote training keep projects running smoothly.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Questions to Ask Before You Hire Any ERP Company
                        </h2>

                        <p>
                            Use this checklist on every shortlisted company, including us.
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Can you show me live ERP or business software projects?</li>
                            <li>Who will be my project manager and point of contact?</li>
                            <li>Is the quotation fixed, and what exactly does it include?</li>
                            <li>Will I own the source code and data?</li>
                            <li>What are the yearly maintenance and hosting costs?</li>
                            <li>How do you handle changes during development?</li>
                            <li>What training do you provide for my staff?</li>
                            <li>What happens if something breaks after launch?</li>
                        </ul>

                        <p>
                            Clear, confident answers to these questions are a good sign. Vague answers are not.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Get Started with a Local ERP Development Partner
                        </h2>

                        <p>
                            If you are ready to replace spreadsheets and scattered tools with a single system built for your business, start with a conversation. Tell Zentrix what slows your team down today, and you will get honest advice and a clear plan with no obligation.
                        </p>

                        <p>
                            Call: +91 72488 00839 | +91 63970 36898
                        </p>

                        <p>
                            Email:{" "}
                            <a
                                href="mailto:info@zentrixinfotech.com"
                                className="text-blue-600 hover:underline"
                            >
                                info@zentrixinfotech.com
                            </a>
                        </p>

                        <p>
                            WhatsApp: +91 63970 36898
                        </p>

                        <p>
                            Ready to work with a nearby ERP development partner?{" "}
                            <Link
                                href="/contact"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                Contact Zentrix Infotech &rarr;
                            </Link>
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
                                        href="/services/mobile-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Mobile App Development Services
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
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="moradabad"
                            currentSlug="/erp-development-company-near-me"
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

function ProcessStep({ number, title, description }) {
    return (
        <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {number}. {title}
            </h3>
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
