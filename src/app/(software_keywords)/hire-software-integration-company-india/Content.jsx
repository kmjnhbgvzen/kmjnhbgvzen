import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "When should I hire a software integration company?",
        answer:
            "When staff re-enter data, reports do not match or leads and orders get lost between tools.",
    },
    {
        question: "Should I hire a freelancer or a company for integration?",
        answer:
            "Freelancers suit small tasks. Companies offer a team, documentation and continuity for larger or business-critical projects.",
    },
    {
        question: "What should I prepare before contacting a company?",
        answer:
            "List your systems, describe the workflows in plain words, set priorities and note volumes, deadlines and budget.",
    },
    {
        question: "How do I check a software integration company is reliable?",
        answer:
            "Review relevant projects, ask for client references, read independent reviews and check their process and security practices.",
    },
    {
        question: "How much does it cost to hire a software integration company in India?",
        answer:
            "It depends on the number of systems, complexity and support needs. Request a scope-based quotation with milestones.",
    },
    {
        question: "Who owns the code and data after the project?",
        answer:
            "You should. Confirm ownership of custom code, documentation and data in the contract.",
    },
    {
        question: "How long does hiring and starting take?",
        answer:
            "Discovery and a quotation can take a few days. Development then begins once scope and terms are agreed.",
    },
    {
        question: "Can I hire you for just one integration?",
        answer:
            "Yes. We also recommend starting with your highest-value integration and expanding in phases.",
    },
    {
        question: "Do you provide support after the integration is live?",
        answer:
            "Yes. We offer monitoring, bug fixes, updates and new integrations as your business grows.",
    },
    {
        question: "Where is Zentrix Infotech located?",
        answer:
            "We are based in Moradabad, Uttar Pradesh, with an office in Ghaziabad, and we serve clients across India.",
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
                    "Software integration company in India offering reliable, secure system integrations with clear planning, transparent pricing and ongoing support.",
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
                            Hire a Software Integration Company in India: A Practical Guide for Business Owners
                        </h1>

                        <p>
                            At some point, most growing businesses reach the same decision. The tools are in place, but they do not work together, and your team spends too much time moving data from one system to another. You know integration is the answer. The next question is who should build it.
                        </p>

                        <p>
                            Hiring a software integration company in India can save you months of trial and error, but only if you choose well. A poor choice leaves you with fragile connections, unclear ownership and a support gap the moment the project ends. A good choice gives you a reliable, secure system that quietly saves hours every week.
                        </p>

                        <p>
                            This guide walks you through the full hiring process: when to hire, the options available, what to prepare, how to evaluate companies, what to put in the contract and how to start well. It also explains how Zentrix Infotech works with clients who want a dependable integration partner.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            When Is It Time to Hire a Software Integration Company?
                        </h2>

                        <p>
                            You do not need an integration partner the day you buy your second software tool. But certain signs say the time has come:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Your team enters the same data into more than one system</li>
                            <li>Reports from different tools never agree</li>
                            <li>Leads, orders or payments get lost between systems</li>
                            <li>You use WhatsApp, a website, billing software and a CRM, but nothing is linked</li>
                            <li>You are adding a new sales channel, location or product line</li>
                            <li>You are moving from old software to a new ERP or CRM and need data migrated</li>
                            <li>Your internal IT team is stretched and cannot take on integration work</li>
                            <li>Past DIY attempts with connectors or scripts keep breaking</li>
                        </ul>

                        <p>
                            If two or three of these apply, outside expertise will probably pay for itself quickly.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Your Options When Hiring for Integration
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Freelancers"
                                description="Freelancers can be cost-effective for small, well-defined connections. The risks are limited availability, single points of failure and uneven documentation. If your freelancer becomes unavailable, nobody else may understand how your integration works."
                            />

                            <ConsultationTopic
                                title="Small and Mid-Sized Software Companies"
                                description="These firms offer a team with complementary skills, such as developers, designers, testers and project managers, at a more accessible price than large consultancies. They suit most small and mid-sized businesses, particularly those that want direct communication and flexible engagement."
                            />

                            <ConsultationTopic
                                title="Large IT Consultancies"
                                description="Large consultancies suit complex enterprise environments with many systems and formal governance needs. For smaller projects, their processes and pricing can feel heavy."
                            />

                            <ConsultationTopic
                                title="Your Own In-House Team"
                                description="Building an internal team gives maximum control, but hiring, training and retaining integration specialists is slow and costly, and the workload is often uneven. Many businesses use a hybrid approach: an outside company builds the foundation, and the internal team handles day-to-day administration."
                            />

                            <ConsultationTopic
                                title="Platform or Connector Vendors"
                                description="Some vendors sell integration platforms with ready connectors. These are useful for simple needs, but they may not cover custom workflows, and fees can grow with usage."
                            />
                        </div>

                        <p>
                            For most Indian small and mid-sized businesses, a capable small or mid-sized software company is the practical middle path.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Prepare Before You Start Talking to Companies
                        </h2>

                        <p>
                            Good hiring begins at your desk. The clearer your brief, the better the quotes you receive.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>List your systems.</strong> Write down every tool involved: CRM, ERP, accounting, website, store, apps, payment gateways, messaging tools and any legacy software.</li>
                            <li><strong>Describe the flows in plain language.</strong> For example: &quot;When a customer places an order on the website, it should create an invoice, reduce stock and notify the warehouse.&quot;</li>
                            <li><strong>Mark priorities.</strong> Decide which integrations are essential now and which can wait.</li>
                            <li><strong>Estimate volumes.</strong> Roughly how many orders, leads, users or records are involved?</li>
                            <li><strong>Note constraints.</strong> Security rules, compliance needs, deadlines and budget range.</li>
                            <li><strong>Identify an internal owner.</strong> Appoint one person who can answer questions and approve decisions. Projects slow down when nobody owns them.</li>
                        </ul>

                        <p>
                            Even a one-page brief makes conversations faster and quotations more accurate.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            How to Evaluate and Shortlist Companies
                        </h2>

                        <p>
                            Shortlist three or four companies, then compare them on the same criteria.
                        </p>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Relevant Experience"
                                description="Ask for examples of projects that connected multiple systems, not only standalone websites. Industry experience helps, but the ability to understand a new process quickly matters more."
                            />

                            <ConsultationTopic
                                title="Technical Breadth"
                                description="Integration touches web, mobile, databases, APIs and cloud hosting. Companies that work across all of these find problems earlier and avoid handoff gaps."
                            />

                            <ConsultationTopic
                                title="Process and Planning"
                                description="Look for a discovery phase, written scope, defined milestones and regular demos. Be careful if a company jumps straight to a price."
                            />

                            <ConsultationTopic
                                title="Security Practices"
                                description="Ask how data will be protected in transit and at rest, who will have access to your systems and credentials and how backups are handled."
                            />

                            <ConsultationTopic
                                title="Communication"
                                description="Notice how the sales conversation feels. Do they ask smart questions? Do they explain trade-offs honestly, including when a simple connector would be enough?"
                            />

                            <ConsultationTopic
                                title="Team and Accountability"
                                description="Find out who will actually work on your project and who will be your point of contact."
                            />

                            <ConsultationTopic
                                title="Pricing Transparency"
                                description="Prefer scope-based or milestone-based quotations. Compare what is included, not just the total."
                            />

                            <ConsultationTopic
                                title="References and Reviews"
                                description="Request two or three client references and read independent reviews. A confident company will not hesitate."
                            />

                            <ConsultationTopic
                                title="Post-Launch Support"
                                description="Third-party tools change. Confirm what support is included, for how long and what it costs afterwards."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Questions to Ask Before You Hire
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Have you connected systems like mine before? Can you show examples?</li>
                            <li>Who will work on my project, and who will be my contact?</li>
                            <li>How do you document requirements and handle changes?</li>
                            <li>How will you clean and migrate my data?</li>
                            <li>How will you secure access and protect data?</li>
                            <li>How do you test integrations before launch?</li>
                            <li>What happens when a third-party API changes?</li>
                            <li>Will I own the custom code, documentation and data?</li>
                            <li>What does support cost after go-live?</li>
                            <li>Can I speak to a past client?</li>
                        </ul>

                        <p>
                            Clear, specific answers are the best sign of a dependable partner.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What Belongs in the Contract
                        </h2>

                        <p>
                            A sound agreement protects both sides. Make sure it covers:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Scope and deliverables.</strong> A written list of the integrations, features and documentation you will receive.</li>
                            <li><strong>Milestones and payment schedule.</strong> Payments linked to completed stages, not all upfront.</li>
                            <li><strong>Timeline.</strong> Realistic dates with a process for handling delays.</li>
                            <li><strong>Change management.</strong> How new requests are assessed, priced and approved.</li>
                            <li><strong>Ownership.</strong> You own the custom code, configurations and data. Third-party software remains under its own licence.</li>
                            <li><strong>Confidentiality.</strong> Protection for your business and customer data.</li>
                            <li><strong>Access and security.</strong> How credentials are shared, stored and revoked.</li>
                            <li><strong>Testing and acceptance.</strong> What counts as a completed, accepted deliverable.</li>
                            <li><strong>Support and warranty.</strong> A bug-fix period after launch and the terms for ongoing support.</li>
                            <li><strong>Exit terms.</strong> What happens if either side wants to end the engagement, including handover of code and documentation.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Red Flags When Hiring
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>A fixed price quoted after one short call</li>
                            <li>No written scope or milestones</li>
                            <li>Reluctance to share references</li>
                            <li>Very low prices compared with every other quote</li>
                            <li>No discussion of security, testing or data migration</li>
                            <li>Vague answers about who owns the code</li>
                            <li>Pressure to sign quickly or pay everything upfront</li>
                            <li>No plan for post-launch support</li>
                        </ul>

                        <p>
                            Any one of these is reason to pause and ask more questions.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Starting the Engagement Well
                        </h2>

                        <p>
                            The first weeks set the tone. To help your project succeed:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Appoint an internal owner with decision-making authority.</li>
                            <li>Provide access to systems and documentation promptly.</li>
                            <li>Share real examples of data and edge cases, not only the ideal process.</li>
                            <li>Agree on how often you will meet and review progress.</li>
                            <li>Involve the staff who will use the connected workflow early.</li>
                            <li>Test with real scenarios before launch.</li>
                            <li>Plan training and a short period of close support after go-live.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Businesses Hire Zentrix Infotech for Software Integration
                        </h2>

                        <p>
                            Zentrix Infotech is an IT solutions company based in Moradabad, Uttar Pradesh, with an office in Ghaziabad. We provide custom software development, web development, mobile app development, UI/UX design, cloud solutions and digital marketing to startups, growing businesses and established brands across India.
                        </p>

                        <p>
                            Our public record includes 250+ delivered projects, 270+ clients and a 4.7 out of 5 client rating. Our work spans healthcare, education, retail and franchise brands, e-commerce, hospitality, interior design, events and more.
                        </p>

                        <p>
                            Three things make us a practical choice for integration:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>One accountable team.</strong> Because we build websites, apps, software and cloud setups ourselves, we can design and connect all layers without handing you between vendors.</li>
                            <li><strong>Planning before building.</strong> We start with a discovery conversation, then provide a written, scope-based plan with milestones, so you know what you are getting and when.</li>
                            <li><strong>Support that continues after launch.</strong> We monitor, fix and extend integrations as your tools and business evolve.</li>
                        </ul>

                        <p>
                            Our clients describe the outcomes of well-connected digital systems. Jigyasa Hospital mentions easier appointment booking and a steady rise in patient inquiries. The Buyzaar Mart reports quality franchise inquiries and stronger visibility across Delhi NCR. Kairvi Fort Resort credits its digital work with a noticeable boost in bookings during peak season. These testimonials relate to our web and marketing projects, and they reflect the smooth inquiry-to-customer journey that integration is designed to protect.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Final Thoughts
                        </h2>

                        <p>
                            Hiring a software integration company in India is a business decision, not just a technical one. The right partner will listen first, plan carefully, build in visible stages, protect your data and remain available after launch. The wrong one will leave you with a tangle of fragile connections and no one to call.
                        </p>

                        <p>
                            If you are ready to connect your tools and want a partner who explains everything clearly, Zentrix Infotech is ready to talk. Share your systems and goals, and we will propose a practical, phased plan.
                        </p>

                        <p>
                            <Link
                                href="/contact-us"
                                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                            >
                                Contact Zentrix Infotech today to hire a software integration team &rarr;
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
                                        href="/software-integration-services"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Software Integration Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/api-integration-services"
                                        className="text-blue-600 hover:underline"
                                    >
                                        API Integration Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/crm-integration-services"
                                        className="text-blue-600 hover:underline"
                                    >
                                        CRM Integration Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/erp-integration-services"
                                        className="text-blue-600 hover:underline"
                                    >
                                        ERP Integration Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/ayodhya/hire-software-integration-company"
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

function ConsultationTopic({ title, description }) {
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
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
