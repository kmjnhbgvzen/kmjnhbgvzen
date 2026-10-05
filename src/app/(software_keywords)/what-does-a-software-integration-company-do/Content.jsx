import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "1. What does a software integration company do?",
        answer: "It connects separate software systems so data flows automatically, securely and accurately between them.",
    },
    {
        question: "2. What is software integration in simple words?",
        answer: "It is making different software tools share information on their own, without people copying data by hand.",
    },
    {
        question: "3. What systems can be integrated?",
        answer: "CRMs, ERPs, websites, mobile apps, payment gateways, accounting tools, messaging platforms and cloud services.",
    },
    {
        question: "4. What is an API in integration?",
        answer: "An API is a standard interface that lets one software system request data or actions from another.",
    },
    {
        question: "5. Do I need to replace my current software?",
        answer: "Usually not. Integration connects your existing tools, and only unsuitable ones are replaced.",
    },
    {
        question: "6. How long does an integration project take?",
        answer: "Simple integrations take days to weeks. Larger projects with several systems can take a few months.",
    },
    {
        question: "7. How much does software integration cost?",
        answer: "Cost depends on the number of systems, data volume and complexity. A scope-based quotation shows exact costs and milestones.",
    },
    {
        question: "8. Is software integration secure?",
        answer: "Yes, when done properly with authentication, encryption and role-based access control.",
    },
    {
        question: "9. Can old or legacy software be integrated?",
        answer: "Often yes, using connectors, middleware or gradual modernisation.",
    },
    {
        question: "10. Does Zentrix Infotech support integrations after launch?",
        answer: "Yes. We provide monitoring, fixes, updates and new integrations as your business grows.",
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
                    name: faq.question.replace(/^\d+\.\s*/, ""),
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
                    "Learn what a software integration company does: connecting CRMs, ERPs, websites, payment gateways, and apps into one automated system.",
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
                            What Does a Software Integration Company Do?
                        </h1>

                        <p>
                            Most business owners first meet the idea of software integration through frustration. Your website collects inquiries, but nobody can find them in the CRM. Your billing tool shows one number and your accounting software shows another. A customer pays online, and someone still has to update the order by hand.
                        </p>

                        <p>
                            At some point, someone says, &quot;We need these systems to talk to each other.&quot; That is the moment you start looking for a software integration company, and the moment you wonder what exactly you would be paying for.
                        </p>

                        <p>
                            This guide answers that question in plain language. It explains what a software integration company does, what the work looks like step by step, who is involved, what you receive at the end and how to know whether you need one. It also shows how Zentrix Infotech approaches integration for businesses across India.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            The Short Answer
                        </h2>

                        <p>
                            A software integration company connects separate software applications, databases and services so they share data and work together automatically. It plans how information should flow, builds the connections, tests them, moves existing data safely and keeps everything running after launch.
                        </p>

                        <p>
                            In other words, it replaces human copy-and-paste work with reliable, secure automation.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What Problems Does a Software Integration Company Solve?
                        </h2>

                        <p>
                            To understand the work, start with the problems it removes:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Duplicate data entry.</strong> The same customer or order typed into several systems.</li>
                            <li><strong>Inconsistent information.</strong> Different numbers in different tools, with nobody sure which is right.</li>
                            <li><strong>Delays.</strong> Leads, orders or requests waiting because someone has to pass them on manually.</li>
                            <li><strong>Errors.</strong> Typing mistakes, missed updates and forgotten follow-ups.</li>
                            <li><strong>Poor visibility.</strong> Reports that take days to compile and cannot be trusted.</li>
                            <li><strong>Locked-in data.</strong> Valuable information stuck inside old software that cannot share it.</li>
                            <li><strong>Growth friction.</strong> New tools, channels or locations that cannot be added without chaos.</li>
                        </ul>

                        <p>
                            A software integration company treats these as design problems and solves them with architecture, code and automation.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            The Core Services a Software Integration Company Provides
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Assessment and Integration Planning"
                                description="Before connecting anything, the company studies your business. It lists the software you use, how data moves between tools today, where the delays and errors are and what outcomes you want. The result is an integration plan: which systems connect, what data flows, in which direction, how often and under which rules."
                            />

                            <ConsultationTopic
                                title="2. API Development and Integration"
                                description="APIs are the standard doorways through which software systems exchange data. An integration company builds custom APIs for your own software and connects to third-party ones such as payment gateways, messaging platforms, shipping services, maps and social platforms."
                            />

                            <ConsultationTopic
                                title="3. System-to-System Integration"
                                description="This is the work most people picture: linking your CRM with your website, your ERP with your online store, your accounting software with your payment tools or your mobile app with your backend. Each link is designed so data moves accurately and securely in the right direction."
                            />

                            <ConsultationTopic
                                title="4. Middleware and Integration Architecture"
                                description="When many systems are involved, connecting them all directly becomes messy. Integration companies design a central layer that translates, routes and monitors data, so tools can be added or replaced without breaking everything else."
                            />

                            <ConsultationTopic
                                title="5. Data Migration and Synchronisation"
                                description="Moving information from old systems into new ones, and keeping several databases consistent afterwards. This includes cleaning duplicates, mapping fields between systems and verifying that nothing is lost or corrupted."
                            />

                            <ConsultationTopic
                                title="6. Workflow Automation"
                                description="Once systems are connected, repetitive tasks can run on their own: assigning new leads, sending confirmations and reminders, creating invoices, escalating overdue items and delivering scheduled reports."
                            />

                            <ConsultationTopic
                                title="7. Cloud Integration"
                                description="Linking cloud applications with each other and with on-premise systems, along with secure hosting so connected systems stay available and scalable."
                            />

                            <ConsultationTopic
                                title="8. Legacy System Integration"
                                description="Older software often lacks modern interfaces yet holds important data and business rules. Integration companies build bridges or gradually modernise these systems so they can join the connected environment."
                            />

                            <ConsultationTopic
                                title="9. Dashboards and Reporting"
                                description="Pulling data from several systems into one view, so owners and managers see live, trustworthy numbers without manual compilation."
                            />

                            <ConsultationTopic
                                title="10. Testing, Monitoring and Support"
                                description="Testing integrations with real scenarios before launch, then monitoring them afterwards. External services change their APIs, credentials expire and volumes grow, so ongoing support keeps connections healthy."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What a Software Integration Project Looks Like Step by Step
                        </h2>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Week 1"
                                title="Discovery"
                                description="The team asks questions, reviews your tools and maps your current process. You explain what hurts most."
                            />

                            <ProcessStep
                                number="Next"
                                title="Planning"
                                description="You receive a written plan with scope, data flows, timeline and cost. You approve priorities, often starting with the highest-value integrations."
                            />

                            <ProcessStep
                                number="Then"
                                title="Design"
                                description="The team designs the architecture, security rules and any new screens or dashboards."
                            />

                            <ProcessStep
                                number="Build phase"
                                title="Build"
                                description="Developers build connectors, APIs and automations in milestones. You see demos and give feedback."
                            />

                            <ProcessStep
                                number="Data preparation"
                                title="Data preparation"
                                description="Your existing records are cleaned, mapped and migrated into the connected setup."
                            />

                            <ProcessStep
                                number="Testing"
                                title="Testing"
                                description="The team runs normal and unusual scenarios, such as partial payments, cancelled orders and system outages, ideally with your staff involved."
                            />

                            <ProcessStep
                                number="Launch and training"
                                title="Launch and training"
                                description="The integration goes live, often in phases, and your team is trained to use the new workflow."
                            />

                            <ProcessStep
                                number="Ongoing support"
                                title="Ongoing support"
                                description="The company monitors performance, fixes issues and updates integrations when your tools or business change."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Who Works on Integration Projects?
                        </h2>

                        <p>
                            A capable integration company brings together several roles:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Business analyst.</strong> Translates your needs into clear requirements.</li>
                            <li><strong>Solution architect.</strong> Designs how systems connect and where data lives.</li>
                            <li><strong>Developers.</strong> Build APIs, connectors and automations.</li>
                            <li><strong>UI/UX designer.</strong> Designs dashboards and admin screens people actually want to use.</li>
                            <li><strong>QA tester.</strong> Checks that everything works under real conditions.</li>
                            <li><strong>Cloud and security specialist.</strong> Handles hosting, access control and data protection.</li>
                            <li><strong>Project manager.</strong> Keeps timelines, communication and expectations on track.</li>
                        </ul>

                        <p>
                            In smaller companies one person may cover more than one role, but the responsibilities should still be clearly covered.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What You Receive at the End
                        </h2>

                        <p>
                            A professional integration project should leave you with more than &quot;it works.&quot; You should receive:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Working, tested integrations between your chosen systems</li>
                            <li>Documentation of data flows, settings and credentials management</li>
                            <li>Clean, migrated data</li>
                            <li>Training for your team</li>
                            <li>Ownership of any custom code written for you</li>
                            <li>A clear support and maintenance arrangement</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Benefits of Hiring a Software Integration Company
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Time savings.</strong> Staff stop retyping data and focus on customers and growth.</li>
                            <li><strong>Accuracy.</strong> Automatic transfer removes most manual errors.</li>
                            <li><strong>Speed.</strong> Leads, orders and requests reach the right person at once.</li>
                            <li><strong>Visibility.</strong> Dashboards show real, current numbers.</li>
                            <li><strong>Scalability.</strong> New tools and locations can be added without chaos.</li>
                            <li><strong>Security.</strong> Controlled access and encrypted connections replace risky file sharing.</li>
                            <li><strong>Lower long-term cost.</strong> Less rework, fewer mistakes and better use of existing software.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            How Do You Know If You Need One?
                        </h2>

                        <p>
                            You probably need a software integration company if:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>People enter the same data in more than one system</li>
                            <li>Reports from different tools do not match</li>
                            <li>Leads, orders or payments fall through gaps between systems</li>
                            <li>You rely on spreadsheets to combine information</li>
                            <li>You use older software that cannot share data</li>
                            <li>You plan to add tools, channels or locations soon</li>
                        </ul>

                        <p>
                            If you only use one or two simple tools, built-in connectors may be enough. An honest provider will tell you so.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            How Zentrix Infotech Works as a Software Integration Partner
                        </h2>

                        <p>
                            Zentrix Infotech is an IT solutions company based in Moradabad, Uttar Pradesh, with an office in Ghaziabad. We provide custom software development, web development, mobile app development, UI/UX design, cloud solutions and digital marketing for startups, growing businesses and established brands across India.
                        </p>

                        <p>
                            Our public record includes 250+ projects delivered, 270+ clients and a 4.7 out of 5 client rating, across healthcare, education, retail and franchise brands, e-commerce, hospitality, interior design, events and more.
                        </p>

                        <p>
                            That experience is useful for integration because most connection problems occur where websites, apps, databases and cloud systems meet. Since we build and host all of those layers ourselves, we plan integrations with the whole picture in view and take responsibility for the result, instead of leaving you to coordinate several vendors.
                        </p>

                        <p>
                            Our clients speak about the outcomes that connected digital systems support. Jigyasa Hospital describes easy appointment booking and a steady rise in patient inquiries. The Buyzaar Mart reports quality franchise inquiries and stronger visibility across Delhi NCR. Kairvi Fort Resort credits its digital work with a noticeable boost in bookings during peak season. These testimonials come from our web and marketing work, and they reflect the smooth inquiry-to-customer journey that integration is meant to protect.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Final Thoughts
                        </h2>

                        <p>
                            So, what does a software integration company do? It makes your software behave like one system. It studies how your business works, designs the connections, builds and tests them, cleans and moves your data and keeps everything running as your tools and needs change.
                        </p>

                        <p>
                            If your tools are not working together and your team is tired of manual workarounds, Zentrix Infotech can review your setup and suggest a practical, phased plan.
                        </p>

                        <p>
                            <Link
                                href="/contact-us"
                                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                            >
                                Contact Zentrix Infotech today for a free software integration consultation &rarr;
                            </Link>
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6 mt-6">
                            {faqs.map((faq, index) => (
                                <FaqItem
                                    key={index}
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
                                        href="/software-module-integration"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Software Module Integration
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

                                <li>
                                    <Link
                                        href="/software-upgrade-services"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Software Upgrade Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/ayodhya/integrate-new-module-in-existing-software"
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

function TableRow({ factor, customization, newSoftware }) {
    return (
        <tr>
            <td className="border border-gray-300 px-4 py-2">{factor}</td>
            <td className="border border-gray-300 px-4 py-2">{customization}</td>
            <td className="border border-gray-300 px-4 py-2">{newSoftware}</td>
        </tr>
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
