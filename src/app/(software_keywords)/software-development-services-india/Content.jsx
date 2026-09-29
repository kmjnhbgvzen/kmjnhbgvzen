import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "What are software development services?",
        answer:
            "They are services that design, build, test, deploy and maintain software such as web apps, mobile apps and business systems.",
    },
    {
        question: "Why outsource software development to India?",
        answer:
            "India offers skilled engineers, lower costs, modern technology expertise and flexible working models.",
    },
    {
        question: "How much does custom software cost in India?",
        answer:
            "Cost depends on scope, features, platforms and integrations. A detailed requirement review gives an accurate quote.",
    },
    {
        question: "How long does software development take?",
        answer:
            "A simple MVP can take a few weeks to three months. Complex platforms take longer depending on their features, integrations and testing requirements.",
    },
    {
        question: "Will I own the source code?",
        answer:
            "Yes, when your agreement says so. Always confirm code ownership in writing before starting the project.",
    },
    {
        question: "Do you provide support after launch?",
        answer:
            "Yes. Ongoing maintenance, security updates and feature upgrades are available after launch.",
    },
    {
        question: "Can Zentrix Infotech build both web and mobile apps?",
        answer:
            "Yes. Zentrix Infotech builds websites, web applications, Android apps and iOS apps.",
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
                    "Software development services in India including custom software, web application development, mobile app development, UI/UX design, cloud solutions and software maintenance.",
                areaServed: "India",
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
                            Software Development Services in India: A Complete Guide for Growing Businesses
                        </h1>

                        <p>
                            Every business now depends on software. Sales, billing, customer support, inventory, appointments and marketing all run on it. Off-the-shelf tools rarely fit how your business actually works, so more companies are turning to professional software development services in India to build something that does.
                        </p>

                        <p>
                            India has become one of the most trusted destinations for software work. It offers skilled engineers, transparent pricing and a strong culture of delivery. This guide explains what these services include, how a good project runs, what affects cost and how to choose the right partner.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why India Is a Global Hub for Software Development
                        </h2>

                        <p>
                            India has one of the world&apos;s largest pools of software engineers. Companies in the US, UK, Europe, the Middle East and Australia have outsourced software development to India for years. Three reasons continue to bring businesses back.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                                <strong>Cost efficiency.</strong> Skilled developers cost far less in India than in many Western markets. This does not mean lower quality. It means businesses can build more features, test more thoroughly and afford ongoing improvements.
                            </li>
                            <li>
                                <strong>Technical depth.</strong> Indian teams work across modern stacks, including React, Next.js, Node.js, Python, Java, Flutter and cloud-native tools. Many teams also have hands-on experience with AI-assisted features.
                            </li>
                            <li>
                                <strong>Time-zone advantage.</strong> Work continues while your own team is offline, so you can often see progress when your working day begins.
                            </li>
                            <li>
                                <strong>Local market understanding.</strong> For Indian startups and small businesses, a local partner understands Indian customers, payment methods, regional languages and compliance needs.
                            </li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Core Software Development Services Businesses Need
                        </h2>

                        <p>
                            Software development covers a wide range of work. These are the services most businesses request.
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                            1. Custom Software Development
                        </h3>

                        <p>
                            Custom software is built around your workflow rather than forcing your team to adapt to a generic product. Examples include CRM systems, inventory and order management tools, HR and payroll platforms and internal dashboards. You own the product, control the roadmap and can expand it as your business grows.
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                            2. Web Application Development
                        </h3>

                        <p>
                            Web applications run in the browser and require no installation. They include customer portals, booking systems, marketplaces, learning platforms and SaaS products. A well-built web application is fast, secure, responsive on every device and ready to scale as traffic grows.
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                            3. Mobile App Development
                        </h3>

                        <p>
                            With most Indian internet users accessing services through smartphones, a mobile app is often the primary customer channel. Native Android and iOS apps offer strong performance. Cross-platform frameworks such as Flutter and React Native let businesses launch on both platforms from one codebase, which can save time and budget.
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                            4. UI/UX Design
                        </h3>

                        <p>
                            Good software feels effortless to use. UI/UX design covers research, wireframes, prototypes and visual design, helping users complete tasks without confusion. Better design can lead to higher conversions, fewer support tickets and stronger customer retention.
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                            5. Cloud Solutions and Migration
                        </h3>

                        <p>
                            Modern software commonly runs on cloud infrastructure. Cloud services cover hosting, deployment, migration from older servers, backups and security. They provide scalability and business continuity without requiring a large investment in physical hardware.
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                            6. Software Maintenance and Support
                        </h3>

                        <p>
                            Launch is not the finish line. Software needs bug fixes, security patches, performance tuning and new features. A reliable development partner offers ongoing support so your product continues to perform as your business changes.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Industries That Benefit Most
                        </h2>

                        <p>
                            Software needs differ by sector, and experience in your industry can shorten the learning curve. Common examples include:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                                <strong>E-commerce and retail:</strong> Storefronts, multi-vendor marketplaces, delivery tracking and franchise management systems.
                            </li>
                            <li>
                                <strong>Healthcare:</strong> Appointment booking, patient records and hospital websites with simple enquiry flows.
                            </li>
                            <li>
                                <strong>Education:</strong> Learning platforms, admission portals, mock test systems and institutional websites.
                            </li>
                            <li>
                                <strong>Hospitality and travel:</strong> Booking engines, resort websites and lead-generation funnels.
                            </li>
                            <li>
                                <strong>Real estate and interiors:</strong> Portfolio platforms, lead capture systems and project showcase tools.
                            </li>
                            <li>
                                <strong>Events and services:</strong> Enquiry management, quotation tools and client dashboards.
                            </li>
                        </ul>

                        <p>
                            Zentrix Infotech has delivered projects across many of these areas, including retail franchise platforms, organic marketplaces, college websites and hospital websites.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            How a Professional Software Development Process Works
                        </h2>

                        <p>
                            A clear process protects your budget and timeline. A reliable software development team will typically follow these stages:
                        </p>

                        <ol className="list-decimal list-inside space-y-2 ml-4">
                            <li>
                                <strong>Discovery and requirement analysis.</strong> The team learns your goals, users and constraints. This is where scope, priorities and success metrics are defined. Skipping this step is a common cause of budget overruns.
                            </li>
                            <li>
                                <strong>Planning and UI/UX design.</strong> Wireframes and prototypes let you review the product before development begins. Changing a design is less expensive than changing finished software.
                            </li>
                            <li>
                                <strong>Development.</strong> Work is delivered in short cycles, so you can review real progress regularly instead of waiting months for a final release.
                            </li>
                            <li>
                                <strong>Testing and quality assurance.</strong> Functional, performance, security and device testing help identify problems before customers encounter them.
                            </li>
                            <li>
                                <strong>Deployment.</strong> The product goes live on secure, scalable infrastructure with monitoring in place.
                            </li>
                            <li>
                                <strong>Support and improvement.</strong> After launch, real user feedback and performance data guide new features and refinements.
                            </li>
                        </ol>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Technologies Behind Modern Software
                        </h2>

                        <p>
                            The right technology depends on your product, not on trends. Common choices include:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                                <strong>Front end:</strong> React, Next.js and modern CSS frameworks for fast, interactive interfaces.
                            </li>
                            <li>
                                <strong>Back end:</strong> Node.js, Python and Java for reliable business logic and APIs.
                            </li>
                            <li>
                                <strong>Mobile:</strong> Flutter, React Native, Kotlin and Swift.
                            </li>
                            <li>
                                <strong>Databases:</strong> MySQL, PostgreSQL and MongoDB.
                            </li>
                            <li>
                                <strong>Cloud:</strong> AWS, Google Cloud and Azure for hosting, storage and scaling.
                            </li>
                        </ul>

                        <p>
                            A trustworthy partner recommends a technology stack based on your goals, budget and long-term maintenance needs. The team should also explain why each technology is appropriate for your project.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            How to Choose the Right Software Development Company in India
                        </h2>

                        <p>
                            Hundreds of companies claim to be the best. The following checks can help separate serious partners from the rest.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                                <strong>Review real work.</strong> Look at the portfolio and, where possible, visit live products. Check speed, design and usability yourself.
                            </li>
                            <li>
                                <strong>Read client feedback.</strong> Look for specific results rather than general praise.
                            </li>
                            <li>
                                <strong>Ask about the process.</strong> A clear approach to planning, communication and testing signals maturity.
                            </li>
                            <li>
                                <strong>Check communication.</strong> You should receive named contacts, regular updates and honest answers about risks.
                            </li>
                            <li>
                                <strong>Confirm ownership.</strong> Make sure the contract gives you full rights to the source code and design files.
                            </li>
                            <li>
                                <strong>Ask about security.</strong> Data protection, access control and backups should be discussed from the beginning.
                            </li>
                            <li>
                                <strong>Plan for support.</strong> Ask what happens after launch and how quickly issues are resolved.
                            </li>
                        </ul>

                        <p>
                            Avoid anyone who promises an unrealistic price or timeline without understanding your requirements. A very low quote can become expensive once missing features and additional revisions are added later.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What Affects the Cost of Software Development in India
                        </h2>

                        <p>
                            There is no single price because every project differs. The main factors include:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                                <strong>Scope and complexity:</strong> The number of features, user roles and integrations.
                            </li>
                            <li>
                                <strong>Platforms:</strong> Web only, mobile only or both web and mobile.
                            </li>
                            <li>
                                <strong>Design depth:</strong> Standard templates versus fully custom design.
                            </li>
                            <li>
                                <strong>Third-party integrations:</strong> Payment gateways, SMS, WhatsApp, ERP or CRM connections.
                            </li>
                            <li>
                                <strong>Team size and timeline:</strong> Faster delivery generally requires more people and resources.
                            </li>
                            <li>
                                <strong>Ongoing needs:</strong> Hosting, maintenance and future upgrades.
                            </li>
                        </ul>

                        <p>
                            Start with a focused first version, often called a minimum viable product or MVP, and then expand based on real user feedback. This approach lowers risk and helps you reach the market sooner.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Businesses Choose Zentrix Infotech
                        </h2>

                        <p>
                            Zentrix Infotech is an IT company serving startups, growing brands and enterprises across India and beyond. With 250+ projects completed for 270+ clients and a 4.7/5 client rating, our focus is simple: build software that solves real business problems and supports measurable growth.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                                <strong>End-to-end capability:</strong> Software development, web development, mobile apps, UI/UX design, cloud solutions and digital marketing under one roof.
                            </li>
                            <li>
                                <strong>Practical and transparent approach:</strong> Clear scope, honest timelines and regular project updates.
                            </li>
                            <li>
                                <strong>Proven across industries:</strong> E-commerce, healthcare, education, hospitality, real estate and more.
                            </li>
                            <li>
                                <strong>Growth-oriented:</strong> We think about what happens after launch, including visibility, leads and long-term performance.
                            </li>
                            <li>
                                <strong>Local presence:</strong> Offices in Moradabad and Ghaziabad, with clients across India.
                            </li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Ready to Build Your Software?
                        </h2>

                        <p>
                            Whether you are launching a new product or replacing tools that no longer fit, the right development partner makes a difference. Talk to Zentrix Infotech about your idea, and we will help you define the scope, choose the right technology and plan a realistic path to launch.
                        </p>

                        <p>
                            <Link
                                href="/contact"
                                className="text-blue-600 hover:underline"
                            >
                                Contact Zentrix Infotech today for a free consultation.
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
                                        href="/software-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Software Development Services
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/web-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Web Development Services
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/mobile-app-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Mobile App Development
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/cloud-solutions"
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
                            currentSlug="/ayodhya/software-development-services-india"
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
}

function FaqItem({ question, answer }) {
    return (
        <div>
            <h3 className="font-semibold text-gray-900 mb-3">
                {question}
            </h3>
            <p className="text-gray-700">{answer}</p>
        </div>
    );
}

export default Content;
