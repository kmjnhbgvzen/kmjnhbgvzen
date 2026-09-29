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
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                            Why Zentrix Infotech Is the Best Business Software Development Company
                        </h2>

                        <p>
                            Choosing the right software development company can define the
                            trajectory of your business. The wrong partner delivers bloated,
                            fragile systems that create more problems than they solve. The
                            right partner builds software that becomes a genuine operational
                            advantage &mdash; streamlining workflows, eliminating manual
                            processes, and scaling seamlessly as your business grows.
                        </p>

                        <p>
                            At Zentrix Infotech, we&apos;ve earned a reputation as one of the
                            best business software development companies by consistently
                            delivering custom solutions that fit how businesses actually
                            operate &mdash; not generic templates stretched to fit. Every
                            project we take on is built around your specific processes, your
                            team&apos;s needs, and your long-term growth plan.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What Makes a Software Development Company the &ldquo;Best&rdquo;?
                        </h2>

                        <p>
                            The best software development companies don&apos;t just write
                            code &mdash; they understand your business, anticipate your
                            challenges, and deliver solutions that create measurable value.
                            Here&apos;s what sets Zentrix Infotech apart:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Deep understanding of business processes before writing a single line of code</li>
                            <li>Solutions architected for scalability, not just today&apos;s needs</li>
                            <li>Transparent communication and no black-box development</li>
                            <li>Enterprise-grade security and compliance built in from day one</li>
                            <li>Ongoing partnership, not just a one-time delivery</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Business Software Development Services
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Custom Business Application Development"
                                description="We design and build bespoke applications from the ground up — internal dashboards, operations management tools, customer-facing platforms, and multi-tenant systems. Every application is architected around your specific business logic, ensuring it scales with your growth."
                            />

                            <ConsultationTopic
                                title="2. Enterprise Resource Planning (ERP) Systems"
                                description="Unified ERP platforms that bring finance, HR, inventory, procurement, and production onto a single source of truth — reducing manual handoffs, eliminating data silos, and giving leadership real-time operational visibility."
                            />

                            <ConsultationTopic
                                title="3. CRM Development"
                                description="Custom CRM systems built for your sales process — tracking leads, automating follow-ups, managing customer histories, and integrating directly with your marketing and support tools for a complete view of every relationship."
                            />

                            <ConsultationTopic
                                title="4. Business Process Automation"
                                description="We build automation tools that handle approvals, notifications, reporting, data syncing, and scheduled workflows — freeing your team from repetitive tasks and reducing human error across operations."
                            />

                            <ConsultationTopic
                                title="5. Enterprise Software & Workflow Systems"
                                description="Robust, multi-department systems capable of handling high transaction volumes, complex permission structures, and cross-team workflows — built with scalability and maintainability as core requirements."
                            />

                            <ConsultationTopic
                                title="6. Legacy System Modernization"
                                description="We assess outdated systems and rebuild or migrate them into modern, secure, maintainable architecture — preserving critical business logic while eliminating technical debt and security risks."
                            />

                            <ConsultationTopic
                                title="7. API Development & System Integration"
                                description="Custom APIs and integrations that connect your business software with payment gateways, accounting platforms, marketing tools, and third-party services — so data flows automatically across your entire technology stack."
                            />

                            <ConsultationTopic
                                title="8. Cloud-Native Solutions"
                                description="Software built and deployed on scalable cloud infrastructure, giving your team secure access from anywhere with automatic scaling, disaster recovery, and predictable costs."
                            />

                            <ConsultationTopic
                                title="9. Data Analytics & Business Intelligence"
                                description="Custom dashboards and reporting platforms that transform raw operational data into actionable insights — giving decision-makers real-time visibility into KPIs, trends, and performance."
                            />

                            <ConsultationTopic
                                title="10. Ongoing Support & Evolution"
                                description="Software is a living system. We provide continuous monitoring, performance optimization, security updates, and feature enhancements so your platform evolves alongside your business."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Development Process
                        </h2>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Step 1"
                                title="Discovery & Business Analysis"
                                description="We invest time upfront to understand your business processes, pain points, and goals — so the solution we design solves the right problem from the start."
                            />

                            <ProcessStep
                                number="Step 2"
                                title="Architecture & Planning"
                                description="We define the system architecture, select the optimal technology stack, and create a detailed roadmap with clear milestones and timelines."
                            />

                            <ProcessStep
                                number="Step 3"
                                title="Design & Prototyping"
                                description="Interactive wireframes and prototypes let you visualize the solution and provide feedback before production development begins."
                            />

                            <ProcessStep
                                number="Step 4"
                                title="Agile Development"
                                description="We build in structured sprints with regular demos and check-ins, ensuring full transparency and alignment at every stage."
                            />

                            <ProcessStep
                                number="Step 5"
                                title="Rigorous Testing"
                                description="Every feature undergoes thorough functional, performance, security, and integration testing to ensure reliability before deployment."
                            />

                            <ProcessStep
                                number="Step 6"
                                title="Deployment & Launch"
                                description="We handle the complete rollout — server setup, data migration, user onboarding — with minimal disruption to daily operations."
                            />

                            <ProcessStep
                                number="Step 7"
                                title="Continuous Improvement"
                                description="Post-launch, we monitor performance, resolve issues proactively, and help you plan and implement new features as your business evolves."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Technologies We Work With
                        </h2>

                        <p>
                            Our engineering team works across a comprehensive technology stack
                            including React.js, Next.js, Node.js, Python, Java, .NET,
                            TypeScript, PostgreSQL, MongoDB, Redis, Docker, Kubernetes, AWS,
                            and Azure &mdash; selecting the right tools for each project rather
                            than forcing every client into the same stack.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Industries We Serve
                        </h2>

                        <p>
                            Zentrix Infotech has delivered business software solutions across
                            retail and e-commerce, healthcare, education, hospitality, real
                            estate, manufacturing, logistics, finance, and professional
                            services. Across every industry, the principle remains the same:
                            software that fits how the business actually operates.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Clients Choose Zentrix Infotech
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Business-First Approach"
                                description="We don't start with technology — we start with your business. Every solution is designed around your actual workflows, not generic assumptions."
                            />

                            <ConsultationTopic
                                title="End-to-End Ownership"
                                description="From strategy through development, deployment, and long-term support — one team, one point of accountability, zero handoff confusion."
                            />

                            <ConsultationTopic
                                title="Transparent Communication"
                                description="Regular updates, sprint demos, and clear reporting at every stage. You always know exactly where your project stands."
                            />

                            <ConsultationTopic
                                title="Scalable Architecture"
                                description="Systems designed to handle growth — more users, more data, more complexity — without requiring a rebuild."
                            />

                            <ConsultationTopic
                                title="Security & Compliance"
                                description="Enterprise-grade security, data protection, and regulatory compliance built into the foundation of every project."
                            />

                            <ConsultationTopic
                                title="Proven Results"
                                description="A growing portfolio of successful projects across multiple industries, with measurable business impact for every client."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Ready to Work With the Best?
                        </h2>

                        <p>
                            If you&apos;re looking for a software development company that
                            truly understands business operations and delivers solutions that
                            create real value, get in touch with Zentrix Infotech. We offer a
                            free consultation to discuss your requirements and show you exactly
                            how we can help.
                        </p>

                        <p>
                            <Link
                                href="/contact-us"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                Start Your Project Today &rarr;
                            </Link>
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Frequently Asked Questions (FAQ)
                        </h2>

                        <div className="space-y-6 mt-6">
                            <FaqItem
                                question="What makes Zentrix Infotech the best business software development company?"
                                answer="We combine deep business understanding with technical excellence. Every project starts with thorough requirement analysis, and we build solutions architected for your specific workflows, scalability needs, and growth plans — not generic templates."
                            />

                            <FaqItem
                                question="What types of business software do you develop?"
                                answer="We build custom ERP systems, CRM platforms, workflow automation tools, business intelligence dashboards, customer portals, internal operations tools, and enterprise-grade applications across industries."
                            />

                            <FaqItem
                                question="How long does a typical project take?"
                                answer="Timelines vary by scope and complexity, but most projects range from 6 to 16 weeks. We provide a detailed timeline with clear milestones after the initial discovery phase."
                            />

                            <FaqItem
                                question="Do you work with startups or only large enterprises?"
                                answer="We work with businesses of all sizes — from startups building their first internal tool to enterprises managing complex, multi-department operations."
                            />

                            <FaqItem
                                question="Can you integrate with our existing systems?"
                                answer="Yes. We build custom APIs and integrations to connect your new software with CRM, ERP, accounting, payment, and any third-party platforms you already rely on."
                            />

                            <FaqItem
                                question="Is the software secure?"
                                answer="Yes. We build with encryption, secure authentication, role-based access control, and industry-standard compliance practices, with regular security assessments throughout the lifecycle."
                            />

                            <FaqItem
                                question="Do you provide post-launch support?"
                                answer="Yes. We offer ongoing monitoring, maintenance, performance optimization, and feature enhancements to ensure your software remains reliable and evolves with your business."
                            />

                            <FaqItem
                                question="How do we get started?"
                                answer="Reach out through our contact page for a free consultation. We'll discuss your requirements, challenges, and goals, then propose a tailored development plan."
                            />
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
                                        href="/enterprise-software-development-services"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Enterprise Software Development Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/ayodhya/best-business-software-development-company"
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
