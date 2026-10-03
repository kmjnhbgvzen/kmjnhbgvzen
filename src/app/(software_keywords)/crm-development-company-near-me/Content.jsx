import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "Where is Zentrix Infotech located?",
        answer:
            "We have offices in Moradabad, Uttar Pradesh, and Ghaziabad, Delhi NCR.",
    },
    {
        question: "Do you only work with clients who are nearby?",
        answer:
            "No. We serve clients across India and overseas through video calls and online demonstrations.",
    },
    {
        question: "Can we meet in person to discuss our CRM?",
        answer:
            "Yes. We offer in-person or online consultations, whichever suits you.",
    },
    {
        question: "What CRM services do you offer?",
        answer:
            "We offer custom CRM software, web and mobile CRM apps, integration, customization, migration and ongoing support.",
    },
    {
        question: "How long does it take to build a custom CRM?",
        answer:
            "Usually 6–12 weeks for a standard CRM, with longer timelines for complex systems.",
    },
    {
        question: "Can a small local business afford a custom CRM?",
        answer:
            "Yes. Starting with core features and expanding in phases keeps the initial cost manageable.",
    },
    {
        question: "Can the CRM connect with WhatsApp and my website?",
        answer:
            "Yes. We integrate WhatsApp, email, website forms, telephony and accounting tools.",
    },
    {
        question: "Will you train my team?",
        answer:
            "Yes. We provide training and support so your staff can adopt the system quickly.",
    },
    {
        question: "How do I get a quote?",
        answer:
            "Contact us with your requirements and we will share an itemised proposal after a free consultation.",
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
                    "CRM development company offering custom CRM software, web and mobile CRM applications, CRM integration, migration, customization, cloud deployment, security, training and long-term support.",
                areaServed: ["Moradabad", "Ghaziabad", "Delhi NCR", "India", "Worldwide"],
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
                            CRM Development Company Near Me: Local Expertise, Custom CRM Software Built for Your Business
                        </h1>

                        <p>
                            When you search for a &quot;CRM development company near me,&quot; you are usually looking for more than a name on a map. You want a team you can meet, call, explain your business to face to face, and rely on when something needs fixing. At the same time, you want proper technical depth, not a freelancer who disappears after delivery.
                        </p>

                        <p>
                            Zentrix Infotech combines both. We are a software development company with offices in Moradabad and Ghaziabad (Delhi NCR), 250+ delivered projects, 270+ clients and a 4.7/5 client rating. We build custom CRM software for businesses in our own region and across India.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why &quot;Near Me&quot; Matters When Choosing a CRM Partner
                        </h2>

                        <p>
                            A CRM is not a one-time purchase. It becomes part of how your team sells, follows up and reports every single day. That makes the relationship with your development partner long-term, and proximity helps in practical ways:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Easier requirement discussions:</strong> A CRM works only if it matches your real process. Sitting with your sales head, accounts team and owner for an hour often reveals more than a week of emails.
                            </li>
                            <li>
                                <strong>Faster problem solving:</strong> When a workflow breaks or a report looks wrong, a team you can reach quickly saves hours of lost productivity.
                            </li>
                            <li>
                                <strong>Better training:</strong> In-person or live training sessions help staff adopt the system faster, which is the biggest factor in CRM success.
                            </li>
                            <li>
                                <strong>Trust and accountability:</strong> A local company has a reputation to protect in your business community.
                            </li>
                            <li>
                                <strong>Understanding of your market:</strong> A team familiar with regional business practices, buying cycles and customer behaviour builds more practical workflows.
                            </li>
                        </ul>

                        <p>
                            That said, &quot;near&quot; no longer means only &quot;in the same city.&quot; Modern CRM projects run smoothly through video calls, shared dashboards and cloud-based demos. The best approach is a partner who offers both local presence and strong remote delivery, which is how we work.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Our Locations and Who We Serve
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Moradabad, Uttar Pradesh"
                                description="Our home base, serving local manufacturers, exporters, traders, schools, clinics and growing service businesses."
                            />

                            <ConsultationTopic
                                title="Ghaziabad, Delhi NCR"
                                description="Our second office, serving businesses across Ghaziabad, Noida, Delhi and the wider NCR region."
                            />

                            <ConsultationTopic
                                title="Across India and Overseas"
                                description="Many of our clients are in other cities and countries. We run discovery calls, weekly demos and training sessions online, with in-person visits where the project calls for them."
                            />
                        </div>

                        <p>
                            Wherever you are, you get the same process, the same team and the same transparency.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            CRM Development Services We Offer
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Custom CRM Software Development"
                                description="A system built around your sales funnel, your stages, your approvals and your reports."
                            />

                            <ConsultationTopic
                                title="Web-Based CRM"
                                description="Secure, browser-based access from any device, built by our web development team."
                            />

                            <ConsultationTopic
                                title="Mobile CRM Apps"
                                description="Android and iOS apps for sales teams, field staff and managers, delivered through our mobile app development service."
                            />

                            <ConsultationTopic
                                title="CRM Integration"
                                description="Connect your CRM with your website, WhatsApp, email, telephony, payment gateways, accounting software and ERP."
                            />

                            <ConsultationTopic
                                title="CRM Customization"
                                description="Add modules, automation and dashboards to an existing CRM that no longer fits."
                            />

                            <ConsultationTopic
                                title="Data Migration"
                                description="Move records from Excel, Tally exports or an older system, cleaned and verified."
                            />

                            <ConsultationTopic
                                title="UI/UX Design"
                                description="Clear, simple screens that your team enjoys using, created by our UI/UX design specialists."
                            />

                            <ConsultationTopic
                                title="Cloud Hosting and Security"
                                description="Secure deployment, backups and scaling through our cloud solutions work."
                            />

                            <ConsultationTopic
                                title="Support and Maintenance"
                                description="Training, bug fixes, upgrades and ongoing improvements after launch."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Problems a Custom CRM Solves for Local Businesses
                        </h2>

                        <p>
                            Most of the businesses we speak to share the same pain points:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Leads in too many places:</strong> Calls, WhatsApp, Facebook, Instagram, Justdial, IndiaMART and walk-ins all feed enquiries into different phones and notebooks.
                            </li>
                            <li>
                                <strong>Forgotten follow-ups:</strong> Good leads go cold because nobody remembered to call back.
                            </li>
                            <li>
                                <strong>No visibility for owners:</strong> You cannot tell how many enquiries came in this week, who handled them or how many converted.
                            </li>
                            <li>
                                <strong>Staff dependency:</strong> When a salesperson leaves, their contacts and conversation history leave with them.
                            </li>
                            <li>
                                <strong>Payment chasing:</strong> Outstanding payments are tracked manually and often chased late.
                            </li>
                            <li>
                                <strong>Repeated questions:</strong> Customers explain their requirements again to every new person.
                            </li>
                        </ul>

                        <p>
                            A well-built CRM solves all of these by capturing every enquiry, assigning it, reminding the team and recording every interaction in one place that belongs to your business.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Industries We Build CRMs For
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Manufacturers and exporters:</strong> Buyer enquiries, sample tracking, quotations, order follow-ups and repeat buyers.
                            </li>
                            <li>
                                <strong>Traders and distributors:</strong> Dealer records, order history, credit limits and payment reminders.
                            </li>
                            <li>
                                <strong>Real estate:</strong> Enquiry tracking, site-visit scheduling, booking status and instalment follow-ups.
                            </li>
                            <li>
                                <strong>Schools, colleges and coaching centres:</strong> Admission enquiries, counselling pipelines and fee reminders.
                            </li>
                            <li>
                                <strong>Clinics and hospitals:</strong> Patient enquiries, appointment follow-ups and feedback.
                            </li>
                            <li>
                                <strong>Agencies and service companies:</strong> Proposals, project leads, renewals and client communication.
                            </li>
                            <li>
                                <strong>Travel and hospitality:</strong> Booking enquiries, repeat guests and seasonal campaigns.
                            </li>
                        </ul>

                        <p>
                            Each of these has its own language and flow, and your CRM should reflect it.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Features We Can Include in Your CRM
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Automatic lead capture from website forms, ads and calls</li>
                            <li>Lead assignment to the right salesperson</li>
                            <li>Follow-up reminders and task scheduling</li>
                            <li>Visual pipeline from enquiry to closed deal</li>
                            <li>Complete customer history in one profile</li>
                            <li>Quotation and invoice generation</li>
                            <li>WhatsApp and email templates</li>
                            <li>Role-based access for staff, managers and owners</li>
                            <li>Support and complaint ticketing</li>
                            <li>Sales, team and source-wise reports</li>
                            <li>Multi-branch support</li>
                            <li>Document and contract storage</li>
                        </ul>

                        <p>
                            You choose what is useful. We leave out what is not.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            How We Work with You
                        </h2>

                        <ol className="ml-4 list-decimal list-inside space-y-2">
                            <li>
                                <strong>Step 1: Free consultation.</strong> We meet or call to understand your business, your team and your current process.
                            </li>
                            <li>
                                <strong>Step 2: Scope and proposal.</strong> You receive a written, itemised proposal covering modules, timeline, milestones and what is not included.
                            </li>
                            <li>
                                <strong>Step 3: Design approval.</strong> You review wireframes and workflows before development starts.
                            </li>
                            <li>
                                <strong>Step 4: Staged development.</strong> We share working versions regularly so you can test and give feedback.
                            </li>
                            <li>
                                <strong>Step 5: Integration and testing.</strong> We connect your tools and test with realistic scenarios.
                            </li>
                            <li>
                                <strong>Step 6: Migration and training.</strong> We import your existing data and train your staff.
                            </li>
                            <li>
                                <strong>Step 7: Launch and support.</strong> We deploy on secure infrastructure and remain available for support and improvements.
                            </li>
                        </ol>

                        <p>
                            For most small and mid-sized businesses, we recommend a phased launch: start with lead management and follow-ups, then add quotations, reports and automation. This keeps the initial investment manageable and lets real use guide what comes next.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Custom CRM vs Ready-Made CRM
                        </h2>

                        <p>
                            A ready-made CRM is quick to start and works for simple needs. A custom CRM is better if you have specific workflows, need integration with other systems, want to avoid per-user fees, or expect your team to grow.
                        </p>

                        <p>
                            If a ready-made tool is enough for your stage, we will tell you honestly. You should invest in custom development only where it makes business sense.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What to Check Before Choosing a Local CRM Company
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Do they have a portfolio and references? Ask to see projects and speak to clients.</li>
                            <li>Is the proposal clear and itemised?</li>
                            <li>Do they offer integration, mobile and cloud skills, or only basic development?</li>
                            <li>Who owns the code and data?</li>
                            <li>What support is included after launch?</li>
                            <li>Can they work with you remotely when needed?</li>
                        </ul>

                        <p>
                            A company that answers all of these clearly is likely to deliver well.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Businesses Choose Zentrix Infotech
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>250+ projects delivered and 270+ clients served</li>
                            <li>A 4.7/5 client rating</li>
                            <li>Offices in Moradabad and Ghaziabad, with delivery across India</li>
                            <li>In-house design, development, mobile, cloud and marketing teams</li>
                            <li>Transparent, milestone-based proposals</li>
                            <li>A practical, phased approach</li>
                            <li>Ongoing support after go-live</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Visit Us or Book a Free Consultation
                        </h2>

                        <p>
                            If you are looking for a CRM development company near you, we would be glad to meet or talk. Tell us about your sales process and your biggest problem, and we will suggest the right CRM approach with a clear proposal.
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
                            currentSlug="/crm-development-company-near-me"
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
