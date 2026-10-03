import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "What is custom ERP for a small business?",
        answer: "It is one unified software system built around your business workflows, connecting stock, GST billing, payments, staff and reports without unnecessary enterprise bloat.",
    },
    {
        question: "Can a small business really afford custom ERP?",
        answer: "Yes. Starting with a few essential modules (like Inventory + GST Billing) and adding more later keeps the initial investment manageable and eliminates recurring per-user SaaS license fees.",
    },
    {
        question: "What does small business ERP cost in India?",
        answer: "Starter systems commonly cost ₹2.5–₹5 lakh, and growth-stage systems ₹5–₹10 lakh, depending on module scope, integrations, and customization depth.",
    },
    {
        question: "Which modules should a small business build first?",
        answer: "Inventory, GST billing and payment tracking usually solve the most immediate daily problems, so starting with those delivers the fastest ROI.",
    },
    {
        question: "How long does it take to build?",
        answer: "Small systems typically take 6–12 weeks to build and deploy in phased milestones.",
    },
    {
        question: "Do I need to change how I work?",
        answer: "No. Custom ERP is designed around your existing process, with improvements and automation only where you want them.",
    },
    {
        question: "Is GST billing and e-invoicing included?",
        answer: "Yes. GST-compliant invoicing, e-way bills, and tax reports are built in for Indian regulatory compliance.",
    },
    {
        question: "Will it work on my phone?",
        answer: "Yes. The web interface is fully mobile-responsive, and dedicated mobile apps can be added for field sales or warehouse staff.",
    },
    {
        question: "What happens after launch?",
        answer: "Zentrix provides support, maintenance, backups, security updates, and new module additions as your business grows.",
    },
    {
        question: "How do I begin?",
        answer: "Call, email or WhatsApp Zentrix Infotech for a free consultation and a fixed, itemised quote.",
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
                    "Custom ERP development company for small business offering affordable ERP software, web development, mobile apps, UI/UX design, cloud solutions, and integrations.",
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
                            Small Business ERP Software Development: Built Around How You Actually Work
                        </h1>

                        <p>
                            Most small businesses don&apos;t struggle because they lack effort. They struggle because information is scattered. Orders sit in WhatsApp chats, stock lives in a spreadsheet, payments are in a notebook, and the only person who knows the full picture is the owner.
                        </p>

                        <p>
                            A custom ERP puts all of that in one system. This guide walks through the problem, a simple way to decide what to build first, realistic costs, and how to get a system your staff will use instead of ignore.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            The Real Cost of &quot;Making It Work&quot; Without ERP
                        </h2>

                        <p>
                            Spreadsheets and basic billing apps feel free, but they carry hidden costs:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Time:</strong> Staff re-enter the same data in two or three places every day.</li>
                            <li><strong>Errors:</strong> A wrong rate, a missed entry or an outdated stock figure turns into lost money.</li>
                            <li><strong>Delays:</strong> Month-end reports wait on someone to &quot;put everything together.&quot;</li>
                            <li><strong>Missed revenue:</strong> Pending payments and follow-ups are forgotten.</li>
                            <li><strong>Owner dependence:</strong> If you step away, decisions stall.</li>
                            <li><strong>Growth friction:</strong> A second branch usually doubles the mess.</li>
                        </ul>

                        <p>
                            None of these feels dramatic alone. Together, they cap how far a business can grow.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What a Custom ERP Does for a Small Business
                        </h2>

                        <p>
                            An ERP (Enterprise Resource Planning) system connects your core operations so each action updates everything related to it.
                        </p>

                        <p>
                            Picture a normal day: A customer orders; the system checks stock, creates a GST invoice, reduces inventory, updates their balance and adds the sale to today&apos;s report. If stock runs low, it alerts you. If a payment is overdue, it reminds you. You didn&apos;t copy a single number.
                        </p>

                        <p>
                            A custom ERP does this using your own rules: your pricing slabs, discount approvals, delivery steps and report formats. You adapt nothing to fit the software.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Custom vs Readymade: A Simple Way to Decide
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="border border-gray-200 px-4 py-2 text-left text-gray-900 font-semibold">
                                            Factor
                                        </th>
                                        <th className="border border-gray-200 px-4 py-2 text-left text-gray-900 font-semibold">
                                            Readymade SaaS ERP
                                        </th>
                                        <th className="border border-gray-200 px-4 py-2 text-left text-gray-900 font-semibold">
                                            Custom ERP (Zentrix)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700 font-medium">
                                            Upfront cost
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">
                                            Lower initial setup
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">
                                            One-time build cost
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700 font-medium">
                                            Ongoing fees
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-red-600">
                                            Per-user, recurring every month/year
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-green-700 font-semibold">
                                            ₹0 license fees (Unlimited users)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700 font-medium">
                                            Fit with your process
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">
                                            You must adapt to vendor templates
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-green-700 font-semibold">
                                            100% built around your workflows
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700 font-medium">
                                            Unused features
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">
                                            Cluttered with unnecessary bloat
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-green-700 font-semibold">
                                            Only what you need and use
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700 font-medium">
                                            Code & Data Ownership
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-red-600">
                                            Vendor lock-in
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-green-700 font-semibold">
                                            Full source code & IP ownership
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700 font-medium">
                                            Future Expansion
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-gray-700">
                                            Expensive tier upgrades or limits
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2 text-green-700 font-semibold">
                                            Add new modules freely as you grow
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Readymade software works if your processes are standard and your team is tiny. Custom ERP tends to win when you have special pricing or approval rules, multiple branches, a growing team, or plans to scale.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Start Small: A Three-Phase Approach
                        </h2>

                        <p>
                            The safest way for a small business to adopt ERP is to build in phases:
                        </p>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Phase 1"
                                title="Fix the biggest pain"
                                description="Pick the two or three areas where mistakes cost you most. For most businesses, that means inventory for stock in and out, transfers between locations and low-stock alerts; billing for quotations, GST invoices and receipts; and payments for who owes you, who you owe, due dates and reminders."
                            />

                            <ProcessStep
                                number="Phase 2"
                                title="Connect the rest"
                                description="Once the team trusts the system, add purchase and vendor management, customer records and follow-ups, attendance and payroll, and accounts integration with Tally or other accounting tools."
                            />

                            <ProcessStep
                                number="Phase 3"
                                title="Extend and automate"
                                description="As you grow, add mobile apps for field sales, delivery or warehouse teams; dealer or customer portals; advanced dashboards and analytics; and integrations with your website, online store, WhatsApp or SMS."
                            />
                        </div>

                        <p>
                            This approach spreads cost, reduces risk and gives staff time to adapt comfortably.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Examples: How ERP Fits Different Small Businesses
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Retail or trading shop:</strong> Fast GST billing, barcode-friendly stock tracking and supplier payments across one or more outlets.</li>
                            <li><strong>Small manufacturer:</strong> Raw-material tracking, simple production records, job orders, wastage tracking and finished-goods stock.</li>
                            <li><strong>Clinic or pharmacy:</strong> Appointments, billing, medicine stock with batch & expiry alerts and patient history.</li>
                            <li><strong>School or coaching institute:</strong> Admissions, fee collection, attendance and parent communication.</li>
                            <li><strong>Service business:</strong> Bookings, quotations, task assignment, staff scheduling and recurring invoices.</li>
                            <li><strong>Distributor or franchise network:</strong> Order flow, dealer-wise pricing, delivery tracking and branch-level reporting.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            How Much Should a Small Business Budget?
                        </h2>

                        <p>
                            The numbers below are indicative market estimates for India:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Starter ERP (2–4 modules, single location):</strong> roughly ₹2.5 lakh – ₹5 lakh</li>
                            <li><strong>Growth ERP (5–8 modules, multiple branches, integrations):</strong> roughly ₹5 lakh – ₹10 lakh</li>
                            <li><strong>Advanced ERP (Custom workflows, companion mobile apps, customer portals):</strong> roughly ₹10 lakh+</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Five Ways to Keep ERP Costs Under Control
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Phase the project:</strong> Launch the essentials first and add modules later.</li>
                            <li><strong>Define the scope in writing:</strong> Vague requirements are the number one cause of cost overruns.</li>
                            <li><strong>Tidy your data first:</strong> Remove duplicate customers and outdated stock lines before migration.</li>
                            <li><strong>Involve your team early:</strong> Feedback during development is far cheaper than rework after launch.</li>
                            <li><strong>Ask for a fixed, milestone-based quote:</strong> You pay as stages are delivered and approved.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Choose Zentrix Infotech?
                        </h2>

                        <p>
                            Zentrix Infotech is an IT solutions company with offices in Moradabad and Ghaziabad. The team has delivered 250+ projects for 270+ clients and holds a 4.7/5 client rating.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Free consultation and requirement discovery</li>
                            <li>Fixed, itemised quotations with milestone signoffs</li>
                            <li>Phased delivery with early demos</li>
                            <li>Intuitive UI/UX design requiring minimal staff training</li>
                            <li>Full source code ownership without vendor lock-in</li>
                            <li>Ongoing support after launch reachable by phone or WhatsApp</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Ready to Replace the Spreadsheets?
                        </h2>

                        <p>
                            You don&apos;t need a technical brief or a huge budget to start. Tell Zentrix where your business loses the most time or money today, and you will get straight advice and a clear plan, with no obligation.
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
                            <Link
                                href="/contact"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                Start Your ERP Project &rarr;
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
                                        Software Development Services
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
                                        href="/custom-erp-development-cost-india"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Custom ERP Development Cost in India
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/erp-development-company-near-me"
                                        className="text-blue-600 hover:underline"
                                    >
                                        ERP Development Company Near Me
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/how-to-choose-custom-erp-development-company"
                                        className="text-blue-600 hover:underline"
                                    >
                                        How to Choose a Custom ERP Development Company
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="moradabad"
                            currentSlug="/custom-erp-development-for-small-business"
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
