import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const Content = () => {
    return (
        <div className="min-h-screen bg-white pt-0">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 px-4 sm:px-8 md:px-16 py-0 order-1 lg:order-1">
                    <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                            Business Application Development Services That Streamline Operations and Drive Growth
                        </h1>

                        <p>
                            Every growing business reaches a point where spreadsheets,
                            scattered tools, and manual follow-ups stop working. Orders get
                            missed, teams duplicate effort, and leaders make decisions from
                            outdated reports. That is the moment to invest in a business
                            application built around how your company actually operates.
                        </p>

                        <p>
                            At Zentrix Infotech, our business application development services
                            turn everyday operational headaches into reliable, automated
                            systems. We design, build, and support custom applications that
                            connect your people, data, and processes, so your team spends less
                            time on administration and more time on growth.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What Are Business Application Development Services?
                        </h2>

                        <p>
                            Business application development is the process of designing and
                            building software that supports the core functions of a company,
                            such as sales, inventory, billing, customer service, HR, logistics,
                            and reporting. Unlike generic off-the-shelf software, a custom
                            business application is shaped around your workflows, your data,
                            and your goals.
                        </p>

                        <p>
                            The service covers the full lifecycle: understanding requirements,
                            designing the user experience, developing the application, testing
                            it, deploying it to the cloud, and maintaining it as your business
                            changes. A good development partner also makes sure the new system
                            integrates with tools you already use, such as payment gateways,
                            accounting software, WhatsApp, and email platforms, so nothing is
                            left isolated.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Types of Business Applications We Build
                        </h2>

                        <p>
                            Every business is different, but most successful projects fall into
                            a few familiar categories.
                        </p>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Customer Relationship Management (CRM) Systems"
                                description="Track leads, follow-ups, quotations, and customer history in one place. A custom CRM lets your sales team see exactly what matters, without paying for features you never use."
                            />

                            <ConsultationTopic
                                title="ERP and Inventory Management Software"
                                description="Bring purchasing, stock, billing, and reporting together. This is especially valuable for retail, distribution, and manufacturing businesses that need real-time visibility across locations."
                            />

                            <ConsultationTopic
                                title="Workflow and Process Automation Tools"
                                description="Replace approval chains over email and paper with structured digital workflows that assign tasks, send reminders, and keep an audit trail."
                            />

                            <ConsultationTopic
                                title="Customer, Dealer, and Vendor Portals"
                                description="Give customers and partners secure logins to place orders, raise tickets, download invoices, or track deliveries, reducing the load on your support team."
                            />

                            <ConsultationTopic
                                title="E-Commerce and Franchise Management Platforms"
                                description="Manage multi-category catalogues, delivery operations, and franchise networks from a single dashboard, much like the retail platform we built for The Buyzaar Mart."
                            />

                            <ConsultationTopic
                                title="Industry-Specific Applications"
                                description="We build appointment and patient management systems for hospitals and clinics, admission and student portals for educational institutions, booking systems for resorts and hospitality, and project management tools for interior and event companies."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Businesses Need Custom Business Applications
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Automation Saves Time and Money"
                                description="Repetitive tasks such as data entry, report preparation, and invoice follow-ups can be handled automatically. Even saving an hour a day per employee adds up quickly across a team."
                            />

                            <ConsultationTopic
                                title="A Single Source of Truth"
                                description="When sales, accounts, and operations use one system, the numbers match. Managers no longer waste meetings arguing about whose spreadsheet is right."
                            />

                            <ConsultationTopic
                                title="Better Customer Experience"
                                description="Faster responses, accurate order status, and self-service portals make customers feel looked after, which drives repeat business."
                            />

                            <ConsultationTopic
                                title="Scalability"
                                description="Off-the-shelf tools often become expensive or restrictive as you add users, branches, or products. A custom application grows with you, and you add features only when you need them."
                            />

                            <ConsultationTopic
                                title="Stronger Data Security and Control"
                                description="You decide who can see and edit what. Role-based access, encrypted data, and regular backups protect sensitive business and customer information."
                            />

                            <ConsultationTopic
                                title="Competitive Advantage"
                                description="When your processes are faster and smarter than a competitor&apos;s, that advantage is hard to copy because it is built into your software."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Business Application Development Process
                        </h2>

                        <p>
                            We follow a transparent, milestone-based process so you always know
                            where your project stands.
                        </p>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Step 1"
                                title="Discovery and Requirement Analysis"
                                description="We start by understanding your business, not just your feature list. Through workshops and stakeholder conversations, we map current processes, identify bottlenecks, and define clear goals."
                            />

                            <ProcessStep
                                number="Step 2"
                                title="Planning and Solution Design"
                                description="We prepare a scope, timeline, and technical roadmap. Our UI and UX designers then create wireframes and prototypes so you can see and test the experience before development begins."
                            />

                            <ProcessStep
                                number="Step 3"
                                title="Agile Development"
                                description="We build in short sprints and share working versions regularly. This keeps you involved, lets you adjust priorities early, and avoids expensive surprises at the end."
                            />

                            <ProcessStep
                                number="Step 4"
                                title="Quality Assurance"
                                description="Every module is tested for functionality, performance, security, and compatibility across devices and browsers."
                            />

                            <ProcessStep
                                number="Step 5"
                                title="Deployment and Migration"
                                description="We launch on scalable cloud infrastructure and migrate your existing data carefully, with minimal disruption to daily operations."
                            />

                            <ProcessStep
                                number="Step 6"
                                title="Training, Support, and Evolution"
                                description="We train your team, monitor the application after launch, and provide ongoing maintenance. As your needs change, we add features and improvements."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Technology and Capabilities
                        </h2>

                        <p>
                            We choose technology based on your requirements, not trends. Our
                            team works with modern web frameworks such as React, robust
                            back-end technologies, secure databases, and cloud platforms, so
                            your application is fast, maintainable, and ready to scale.
                        </p>

                        <p>
                            Our related capabilities also make each project stronger:
                        </p>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Web and Mobile Access"
                                description="Browser-based applications and Android or iOS apps so your team can work from anywhere."
                            />

                            <ConsultationTopic
                                title="UI and UX Design"
                                description="Clean, intuitive interfaces that staff adopt quickly, improving the return on your investment."
                            />

                            <ConsultationTopic
                                title="Cloud Solutions"
                                description="Scalable hosting, deployment, and migration for security and business continuity."
                            />

                            <ConsultationTopic
                                title="Integrations and APIs"
                                description="Connections to payment gateways, accounting tools, messaging platforms, and third-party services."
                            />

                            <ConsultationTopic
                                title="Digital Marketing Support"
                                description="For customer-facing platforms, we can help you get discovered once your application is live."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Industries We Serve
                        </h2>

                        <p>
                            Our project experience spans many sectors. We have delivered
                            digital platforms for retail and e-commerce brands, healthcare
                            providers, educational institutions, hospitality and resort
                            businesses, real estate, interior design studios, and event and
                            wedding management companies. Each sector has its own workflows and
                            compliance needs, and we shape every application around them
                            instead of forcing your business into a template.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Choose Zentrix Infotech?
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Proven Track Record"
                                description="With 250+ projects delivered for 270+ clients and a 4.7/5 client rating, we bring practical experience from real businesses, from startups to established enterprises."
                            />

                            <ConsultationTopic
                                title="Business-First Thinking"
                                description="We ask what outcome you want, such as fewer errors, faster billing, or more repeat orders, and design the application to deliver it."
                            />

                            <ConsultationTopic
                                title="End-to-End Capability"
                                description="Design, development, cloud deployment, and digital marketing sit under one roof, so you avoid coordinating multiple vendors."
                            />

                            <ConsultationTopic
                                title="Transparent Communication"
                                description="Regular demos, clear timelines, and honest advice on scope and budget keep projects on track."
                            />

                            <ConsultationTopic
                                title="Affordable and Flexible Engagement"
                                description="We work with businesses of different sizes and budgets, and we can start with a focused first version and expand it over time."
                            />

                            <ConsultationTopic
                                title="Local Presence, Wider Reach"
                                description="With offices in Moradabad and Ghaziabad, we work closely with clients across Delhi NCR and Uttar Pradesh, and we serve businesses around the world."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Ready to Build Your Business Application?
                        </h2>

                        <p>
                            If your team is fighting manual processes or outgrowing its current
                            tools, the right application can change how your business runs.
                            Share your requirements with us, and our team will suggest a
                            practical, cost-conscious solution.
                        </p>

                        <p>
                            <Link
                                href="/contact-us"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                Contact Zentrix Infotech for a free consultation &rarr;
                            </Link>
                        </p>

                        <p>
                            You can also explore our{" "}
                            <Link
                                href="/services/software-development"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                software development services
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/portfolio"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                portfolio
                            </Link>
                            .
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6 mt-6">
                            <FaqItem
                                question="What are business application development services?"
                                answer="They are services for designing, building, deploying, and maintaining custom software that supports core business functions such as sales, inventory, billing, and customer management."
                            />

                            <FaqItem
                                question="How long does it take to build a business application?"
                                answer="A focused first version typically takes 8 to 16 weeks. Complex, multi-module systems take longer, depending on scope and integrations."
                            />

                            <FaqItem
                                question="How much does custom business application development cost?"
                                answer="Cost depends on features, users, integrations, and design complexity. We provide a clear estimate after a free requirement discussion."
                            />

                            <FaqItem
                                question="Is custom software better than off-the-shelf software?"
                                answer="Custom software fits your workflows and scales with you. Off-the-shelf tools are cheaper at first but can become restrictive and costly as you grow."
                            />

                            <FaqItem
                                question="Can you integrate the application with my existing tools?"
                                answer="Yes. We integrate with payment gateways, accounting software, CRMs, messaging platforms, and other third-party services through APIs."
                            />

                            <FaqItem
                                question="Will my data be secure?"
                                answer="Yes. We use role-based access, encryption, secure hosting, and regular backups to protect your business and customer data."
                            />

                            <FaqItem
                                question="Do you provide support after launch?"
                                answer="Yes. We offer training, monitoring, maintenance, and feature upgrades after your application goes live."
                            />

                            <FaqItem
                                question="Can you build both web and mobile business applications?"
                                answer="Yes. We build browser-based applications as well as Android and iOS apps, so your team can work from any device."
                            />
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
                                        href="/portfolio"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Our Portfolio
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/contact-us"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Contact Zentrix Infotech
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/ayodhya/business-application-development-services"
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
            <h3 className="font-semibold text-gray-900 mb-3">{question}</h3>
            <p className="text-gray-700">{answer}</p>
        </div>
    );
}

export default Content;