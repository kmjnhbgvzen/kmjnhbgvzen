import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "How do I choose a custom ERP development company?",
        answer:
            "Check live projects, true custom capability, a clear process, itemised pricing, support terms and code ownership.",
    },
    {
        question: "What is the most important factor when choosing an ERP vendor?",
        answer:
            "A proven track record. Working projects and honest client references show what the company can really deliver.",
    },
    {
        question: "Should I pick the cheapest ERP company?",
        answer:
            "No. Compare what each quote includes. Very low prices often hide missing scope or growing costs later.",
    },
    {
        question: "How many ERP companies should I compare?",
        answer:
            "Three to four is enough. Compare their scope, pricing, process and support, not just price.",
    },
    {
        question: "What questions should I ask an ERP company?",
        answer:
            "Ask about live projects, fixed pricing, code ownership, maintenance costs, training and post-launch support.",
    },
    {
        question: "Do I need a local ERP company?",
        answer:
            "Not always, but a nearby team makes meetings, training and support easier, and understands Indian compliance.",
    },
    {
        question: "How can I tell if a company is truly custom?",
        answer:
            "Ask whether they build from scratch around your workflows and whether you will own the source code.",
    },
    {
        question: "What are red flags when hiring an ERP developer?",
        answer:
            "Pressure to sign fast, no written scope, unclear pricing, no live examples and vague answers on ownership.",
    },
    {
        question: "How long does ERP development take?",
        answer:
            "Small systems take around 2–4 months, and larger ones longer. A good partner gives a fixed timeline.",
    },
    {
        question: "How can I start with Zentrix Infotech?",
        answer:
            "Call, email or WhatsApp for a free consultation, then receive a written scope and fixed quotation.",
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
                    "Custom ERP development company offering ERP software, web development, mobile apps, UI/UX design, cloud solutions, integrations, and digital marketing.",
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
                            How to Choose a Custom ERP Development Company in 2026
                        </h1>

                        <p>
                            An ERP system sits at the centre of your business. It holds your orders, stock, accounts, staff records and customer data, and your team will use it every working day for years. That is why the company you pick to build it matters more than the technology it uses.
                        </p>

                        <p>
                            A good partner delivers a system that saves hours and removes errors. A poor one leaves you with delays, a half-working product and a bill that keeps growing. This guide gives you a clear, practical way to tell them apart.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 1: Know What You Need Before You Talk to Anyone
                        </h2>

                        <p>
                            Before you contact any ERP development company, spend an hour on your own homework. It will make every conversation sharper and help you spot vendors who ask good questions.
                        </p>

                        <p>
                            Write down:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Your biggest problems today: stock mismatches, slow billing, no real-time reports, manual payroll.</li>
                            <li>The departments involved: sales, purchase, inventory, accounts, HR, production.</li>
                            <li>Number of users and locations: one office or many branches.</li>
                            <li>Tools you already use: Tally, Excel, a billing app, a CRM.</li>
                            <li>Your rough budget and timeline.</li>
                            <li>What success looks like: for example, &quot;month-end closing in two days instead of ten.&quot;</li>
                        </ul>

                        <p>
                            You don&apos;t need a technical document. A page of notes is enough. A good company will help you refine it.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 2: Check Their Track Record
                        </h2>

                        <p>
                            Past work is the best predictor of future results.
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li><strong>Ask for live projects.</strong> Presentations and mockups are easy to produce. Working systems used by real businesses are not. Ask to see them, or to speak with a client.</li>
                            <li><strong>Look at the volume and variety.</strong> A company that has delivered hundreds of projects for different industries has met messy data, shifting requirements and tight deadlines. Zentrix Infotech, for example, has delivered 250+ projects for 270+ clients across retail, healthcare, education, hospitality and services, and holds a 4.7/5 client rating.</li>
                            <li><strong>Read client feedback carefully.</strong> Look for specific comments about communication, deadlines and support, not just &quot;great work.&quot;</li>
                            <li><strong>Check how long they have been operating.</strong> Newer firms can be excellent, but an established team has usually survived enough projects to have a reliable process.</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 3: Confirm They Build Custom ERP, Not Just Resell Software
                        </h2>

                        <p>
                            Some companies sell a readymade ERP with a new logo on it. That is fine if a standard product suits you, but it is not custom development.
                        </p>

                        <p>
                            Ask directly:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Do you write the software from scratch around our workflows?</li>
                            <li>Will I own the source code?</li>
                            <li>Can you show me examples of workflows you&apos;ve customised?</li>
                        </ul>

                        <p>
                            A true custom ERP partner designs modules, permissions, reports and approval chains around how your team actually works. If every answer begins with &quot;our standard package includes,&quot; you are probably buying a template.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 4: Look for End-to-End Capability
                        </h2>

                        <p>
                            An ERP is more than back-end logic. A complete project may need:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Software development for the core system</li>
                            <li>UI/UX design so staff find it easy to use</li>
                            <li>Mobile apps for field sales, warehouse or delivery teams</li>
                            <li>Cloud hosting and deployment for security, backups and speed</li>
                            <li>Web development for a customer or dealer portal</li>
                            <li>Digital marketing if the system connects to online sales</li>
                        </ul>

                        <p>
                            If one company covers all of this, communication is simpler and nothing falls between vendors. Zentrix Infotech offers web development, UI/UX design, mobile apps, software development, cloud solutions and digital marketing under one roof, so your ERP can connect with the rest of your digital presence.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 5: Judge Their Discovery and Planning Process
                        </h2>

                        <p>
                            How a company starts tells you how it will finish. Be cautious if a vendor gives you a price after one short call and no questions.
                        </p>

                        <p>
                            A strong partner will:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Ask detailed questions about your workflows and pain points</li>
                            <li>Offer to visit your office or hold a thorough online workshop</li>
                            <li>Produce a written scope listing modules, features, integrations and timelines</li>
                            <li>Explain what is included in phase one and what can wait</li>
                            <li>Suggest simplifying processes where it helps, instead of coding every habit</li>
                        </ul>

                        <p>
                            The discovery phase is where costly mistakes are prevented. Companies that skip it usually make up the time, and more, during rework.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 6: Compare Pricing the Right Way
                        </h2>

                        <p>
                            The cheapest quote is rarely the lowest cost. Compare proposals on what they include, not just the total.
                        </p>

                        <p>
                            Insist on an itemised quotation covering:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Module-wise development cost</li>
                            <li>UI/UX design</li>
                            <li>Data migration</li>
                            <li>Testing</li>
                            <li>Training</li>
                            <li>Hosting and infrastructure</li>
                            <li>Annual maintenance (commonly 10–20% of development cost)</li>
                            <li>Third-party licences or API charges</li>
                        </ul>

                        <p>
                            Prefer fixed-scope contracts with milestones. Payment tied to delivered stages keeps both sides accountable.
                        </p>

                        <p>
                            Ask how changes are priced. Every project evolves. A fair partner explains in advance how extra requests are estimated and approved.
                        </p>

                        <p>
                            Be wary of extremes. An unusually low quote often means missing scope, junior developers or a bill that grows later. An unusually high one doesn&apos;t guarantee better quality.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 7: Evaluate Technology and Scalability
                        </h2>

                        <p>
                            You don&apos;t need to be technical, but ask a few simple questions.
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Is the technology modern and widely supported? Popular frameworks mean you can find developers later if you ever change vendors.</li>
                            <li>Can the system grow? It should handle more users, branches and data without a rebuild.</li>
                            <li>Is it web-based and mobile-friendly? This allows access from anywhere and avoids installing software on every computer.</li>
                            <li>How is data secured? Look for role-based access, encryption, regular backups and audit trails.</li>
                            <li>What integrations are possible? GST tools, accounting software, payment gateways, courier APIs, WhatsApp and SMS are common needs.</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 8: Check UI/UX Quality
                        </h2>

                        <p>
                            Your staff will use the ERP all day. A confusing interface causes data-entry errors, slow adoption and frustrated teams.
                        </p>

                        <p>
                            Ask to see the screens of previous projects. Are they clean and consistent? Can a new user understand them without a manual? A company with an in-house UI/UX team usually produces systems that need less training.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 9: Understand Their Support and Maintenance Model
                        </h2>

                        <p>
                            An ERP is not &quot;finished&quot; at launch. Bugs appear, rules change and your business grows.
                        </p>

                        <p>
                            Ask:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>What support do you offer after go-live, and for how long is it included?</li>
                            <li>How quickly do you respond to urgent issues?</li>
                            <li>Who do I contact, and how (phone, WhatsApp, ticket)?</li>
                            <li>What does the annual maintenance contract cover?</li>
                            <li>Can you add new modules later?</li>
                        </ul>

                        <p>
                            Response time matters most at month-end, during audits and on busy sales days. A team that is easy to reach is worth more than a long feature list.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 10: Make Sure You Own the Code and Data
                        </h2>

                        <p>
                            This is easy to overlook and hard to fix later. Before signing, confirm in writing that:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>You own the source code once payment is complete</li>
                            <li>You own all your business data and can export it at any time</li>
                            <li>Hosting credentials and documentation are shared with you</li>
                            <li>There is no lock-in that prevents you from moving to another vendor</li>
                        </ul>

                        <p>
                            Owning the software is one of the main advantages of custom ERP over subscription products, and the contract should reflect it.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 11: Consider Location and Communication
                        </h2>

                        <p>
                            Many ERP projects work well remotely, but proximity still helps. Requirement discussions, on-site training and urgent support are smoother when the team shares your time zone, language and business culture. A local partner also understands Indian compliance, including GST invoicing, e-way bills and TDS.
                        </p>

                        <p>
                            Zentrix Infotech has offices in Moradabad and Ghaziabad, so businesses across Uttar Pradesh and Delhi NCR can meet the team in person, while clients elsewhere in India are served through calls, screen-share demos and remote training.
                        </p>

                        <p>
                            Whatever the location, check communication habits. Will you get regular demos? A named project manager? Prompt replies? These small things decide whether a project feels calm or stressful.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Step 12: Trust Your Experience of the Sales Process
                        </h2>

                        <p>
                            How a company treats you before you pay is a preview of how it will treat you after.
                        </p>

                        <p>
                            Good signs:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>They listen more than they pitch</li>
                            <li>They tell you what you don&apos;t need</li>
                            <li>Answers are clear and honest, including &quot;we&apos;d do that in phase two&quot;</li>
                            <li>Timelines are realistic</li>
                        </ul>

                        <p>
                            Red flags:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Pressure to sign quickly with a &quot;limited-time&quot; discount</li>
                            <li>Promises that every feature will be built for a very low price</li>
                            <li>No written scope or timeline</li>
                            <li>Reluctance to show live work or share references</li>
                            <li>Vague answers on code ownership, maintenance or hosting costs</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Quick ERP Vendor Checklist
                        </h2>

                        <p>
                            Use this list to score each company you shortlist:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Live projects and client references shown</li>
                            <li>True custom development, not a repackaged product</li>
                            <li>In-house design, development, mobile and cloud skills</li>
                            <li>Structured discovery and written scope</li>
                            <li>Itemised, fixed-scope quotation with milestones</li>
                            <li>Modern, scalable technology</li>
                            <li>Clean, user-friendly interface</li>
                            <li>Clear post-launch support terms</li>
                            <li>Written confirmation of code and data ownership</li>
                            <li>Good communication and a named point of contact</li>
                            <li>Understanding of Indian compliance</li>
                            <li>Honest, unpressured sales conversations</li>
                        </ul>

                        <p>
                            A company that ticks most of these is likely a safe bet.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Businesses Choose Zentrix Infotech
                        </h2>

                        <p>
                            Zentrix Infotech is an IT solutions company that builds software, web platforms, mobile apps, cloud systems and digital marketing campaigns for startups and established businesses.
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>250+ projects delivered for 270+ clients</li>
                            <li>4.7/5 client rating</li>
                            <li>Offices in Moradabad and Ghaziabad</li>
                            <li>Full-service team across development, design, mobile, cloud and marketing</li>
                            <li>Fixed, itemised quotations with a written scope</li>
                            <li>Phased delivery, so you see working modules early</li>
                            <li>Ongoing support after launch</li>
                        </ul>

                        <p>
                            Every engagement begins with a free consultation, where the team studies your workflow, recommends what to build first and explains costs in plain language, with no obligation.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Talk to Zentrix Before You Decide
                        </h2>

                        <p>
                            Even if you plan to compare several vendors, a conversation costs nothing. Share what slows your team down today, and Zentrix will suggest a practical starting point with a clear estimate.
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
                            Ready to choose the right ERP partner?{" "}
                            <Link
                                href="/contact"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                Talk to Zentrix Infotech &rarr;
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
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="moradabad"
                            currentSlug="/how-to-choose-custom-erp-development-company"
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
