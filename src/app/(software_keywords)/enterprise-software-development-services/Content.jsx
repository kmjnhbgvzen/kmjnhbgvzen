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
                            Enterprise Software Development Services That Scale With Your Business
                        </h2>

                        <p>
                            As businesses grow, the tools they rely on need to grow with them.
                            Off-the-shelf software that worked for a team of ten starts
                            breaking down when you&apos;re managing hundreds of users, complex
                            workflows, and massive volumes of data. At Zentrix Infotech, we
                            build enterprise software development solutions designed from the
                            ground up for scale, security, and long-term reliability &mdash;
                            not patched-together workarounds that need replacing in a year.
                        </p>

                        <p>
                            Whether you need to unify fragmented systems, automate
                            cross-department workflows, or build a completely new platform to
                            support large-scale operations, our team delivers enterprise-grade
                            software that becomes a genuine competitive advantage &mdash; not
                            just another IT expense.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Enterprises Need Purpose-Built Software
                        </h2>

                        <p>
                            Enterprise operations are inherently complex. Multiple departments,
                            diverse user roles, compliance requirements, and high transaction
                            volumes demand software that&apos;s architected for these realities
                            from day one. Generic SaaS platforms often mean:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Fragmented data across disconnected tools</li>
                            <li>
                                Rigid workflows that don&apos;t match your actual processes
                            </li>
                            <li>Security and compliance gaps that grow with scale</li>
                            <li>
                                Vendor lock-in that limits your ability to innovate
                            </li>
                            <li>
                                Performance bottlenecks as user counts and data volumes increase
                            </li>
                        </ul>

                        <p>
                            Enterprise software built specifically for your organization
                            eliminates these constraints. It adapts to your processes, scales
                            with your growth, and gives you full control over your technology
                            stack and roadmap.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Enterprise Software Development Services
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Custom Enterprise Application Development"
                                description="We design and build large-scale applications from scratch — internal portals, operations platforms, multi-tenant systems, and customer-facing solutions. Every application is architected for high availability, complex permission structures, and seamless integration with your existing technology ecosystem."
                            />

                            <ConsultationTopic
                                title="2. Enterprise Resource Planning (ERP) Systems"
                                description="We build unified ERP platforms that bring finance, HR, inventory, procurement, and production onto a single system. The result is real-time visibility across every department, fewer manual handoffs, and a single source of truth for decision-making."
                            />

                            <ConsultationTopic
                                title="3. Workflow Automation & Business Process Management"
                                description="Manual processes are the hidden cost center in most enterprises. We build automation systems that handle approvals, notifications, data routing, scheduled tasks, and cross-department workflows — freeing your teams to focus on strategic work instead of repetitive tasks."
                            />

                            <ConsultationTopic
                                title="4. System Integration & API Development"
                                description="Enterprise environments rarely run on a single tool. We build custom APIs and middleware that connect your CRM, ERP, accounting, marketing, and third-party platforms so data flows seamlessly across your entire technology stack."
                            />

                            <ConsultationTopic
                                title="5. Legacy System Modernization"
                                description="Still running on outdated systems that are slow, expensive to maintain, or no longer supported? We assess, redesign, and migrate legacy applications to modern, scalable architectures — without disrupting the operations that depend on them during the transition."
                            />

                            <ConsultationTopic
                                title="6. Cloud-Native Enterprise Solutions"
                                description="We build and deploy enterprise software on scalable cloud infrastructure (AWS, Azure, GCP), giving your organization secure access from anywhere, automatic scaling, disaster recovery, and the flexibility to adapt as business needs evolve."
                            />

                            <ConsultationTopic
                                title="7. Data Analytics & Business Intelligence Platforms"
                                description="We build custom dashboards and reporting platforms that transform raw operational data into actionable insights — giving leadership real-time visibility into KPIs, trends, and performance across the entire organization."
                            />

                            <ConsultationTopic
                                title="8. Enterprise Security & Compliance"
                                description="Enterprise software handles sensitive financial, customer, and operational data. We build with encryption, role-based access control, audit logging, and industry-standard compliance frameworks from day one, with regular security assessments to stay ahead of evolving threats."
                            />

                            <ConsultationTopic
                                title="9. Scalable Multi-Tenant Architectures"
                                description="For organizations serving multiple clients, branches, or business units, we build multi-tenant systems that maintain data isolation while sharing infrastructure — reducing costs and simplifying management at scale."
                            />

                            <ConsultationTopic
                                title="10. Ongoing Support, Maintenance & Evolution"
                                description="Enterprise software is a living system. We provide continuous monitoring, performance optimization, security updates, and feature enhancements so your platform evolves alongside your business rather than becoming technical debt."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Development Process
                        </h2>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Step 1"
                                title="Discovery & Stakeholder Analysis"
                                description="We work with your leadership and department heads to understand business processes, pain points, compliance requirements, and long-term goals in detail."
                            />

                            <ProcessStep
                                number="Step 2"
                                title="Architecture & Technology Planning"
                                description="We define the system architecture, select the optimal technology stack, and create a detailed technical roadmap aligned with your scale and growth trajectory."
                            />

                            <ProcessStep
                                number="Step 3"
                                title="Design & Prototyping"
                                description="Before writing production code, we create wireframes and interactive prototypes so stakeholders can validate workflows and provide feedback early in the process."
                            />

                            <ProcessStep
                                number="Step 4"
                                title="Agile Development & Iteration"
                                description="Our team builds in structured sprints with regular demos and check-ins, ensuring transparency and alignment at every stage of development."
                            />

                            <ProcessStep
                                number="Step 5"
                                title="Testing & Quality Assurance"
                                description="Every module undergoes rigorous functional, performance, security, and integration testing before deployment to ensure enterprise-grade reliability."
                            />

                            <ProcessStep
                                number="Step 6"
                                title="Deployment & Migration"
                                description="We handle the full rollout — server provisioning, data migration, user onboarding, and training — with minimal disruption to daily operations."
                            />

                            <ProcessStep
                                number="Step 7"
                                title="Continuous Support & Improvement"
                                description="Post-launch, we monitor performance, resolve issues proactively, and help you plan and implement new features as your enterprise evolves."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Technologies We Work With
                        </h2>

                        <p>
                            Our engineering team works across a comprehensive technology stack
                            including React.js, Next.js, Node.js, Python, Java, .NET, Angular,
                            TypeScript, PostgreSQL, MongoDB, Redis, Docker, Kubernetes, AWS,
                            Azure, and GCP &mdash; allowing us to select the right tools for
                            your specific enterprise requirements.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Industries We Serve
                        </h2>

                        <p>
                            Zentrix Infotech has delivered enterprise software solutions for
                            organizations across healthcare, finance, manufacturing, logistics,
                            retail, education, real estate, and professional services. Across
                            every industry, the principle stays the same: software that fits
                            how the enterprise actually operates, not the other way around.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Choose Zentrix Infotech for Enterprise Software Development
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Built for Enterprise Scale"
                                description="Every system is architected for high availability, large user bases, and complex operational requirements from day one."
                            />

                            <ConsultationTopic
                                title="End-to-End Ownership"
                                description="From strategy and architecture through development, deployment, and long-term support, we manage the entire lifecycle."
                            />

                            <ConsultationTopic
                                title="Transparent, Collaborative Process"
                                description="Regular updates, sprint demos, and clear communication at every stage — no black boxes or surprises."
                            />

                            <ConsultationTopic
                                title="Security & Compliance First"
                                description="Enterprise-grade security, data protection, and regulatory compliance built into the foundation, not added as an afterthought."
                            />

                            <ConsultationTopic
                                title="Future-Proof Architecture"
                                description="Systems designed to evolve with your business — modular, maintainable, and ready to integrate with tomorrow's tools."
                            />

                            <ConsultationTopic
                                title="Proven Enterprise Experience"
                                description="A growing portfolio of successful enterprise projects across multiple industries and organizational scales."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Ready to Build Enterprise Software That Works at Scale?
                        </h2>

                        <p>
                            If fragmented systems, manual workflows, or outdated technology are
                            limiting your enterprise&apos;s potential, it&apos;s time for
                            software built specifically for your scale and complexity. Get in
                            touch with Zentrix Infotech for a free consultation, and
                            let&apos;s architect a solution that powers your operations
                            &mdash; not the other way around.
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
                                question="What is enterprise software development?"
                                answer="Enterprise software development is the process of designing and building large-scale, custom applications — such as ERP systems, workflow automation platforms, and integrated business tools — tailored to the complex needs of organizations with multiple departments, high user counts, and significant data volumes."
                            />

                            <FaqItem
                                question="How is enterprise software different from standard business software?"
                                answer="Enterprise software is built to handle higher complexity — more users, stricter security requirements, cross-department workflows, and integration with multiple systems — while standard business software typically serves smaller teams with simpler requirements."
                            />

                            <FaqItem
                                question="How long does enterprise software development take?"
                                answer="Timelines depend on scope and complexity, but most enterprise projects range from 3 to 9 months. We provide a detailed timeline and phased delivery plan after the initial discovery and requirement analysis."
                            />

                            <FaqItem
                                question="Can you modernize our existing legacy systems?"
                                answer="Yes. We assess your current systems and design a migration path to modern, scalable architecture — preserving critical business logic while eliminating technical debt and security risks."
                            />

                            <FaqItem
                                question="Do you integrate with existing enterprise tools?"
                                answer="Yes. We build custom APIs and integrations to connect your new software with CRM, ERP, accounting, HR, and any third-party platforms your organization already relies on."
                            />

                            <FaqItem
                                question="Is the software secure and compliant?"
                                answer="Yes. We build with encryption, role-based access control, audit trails, and industry-standard compliance practices, with regular security assessments throughout the lifecycle."
                            />

                            <FaqItem
                                question="Can the software scale as our organization grows?"
                                answer="Yes. All our enterprise solutions are architected for horizontal and vertical scaling, so they handle increased users, data, and complexity without requiring a rebuild."
                            />

                            <FaqItem
                                question="Do you provide post-launch support?"
                                answer="Yes. We offer continuous monitoring, maintenance, performance optimization, and feature enhancements to ensure your enterprise software remains reliable and evolves with your business."
                            />

                            <FaqItem
                                question="What industries do you serve?"
                                answer="We've delivered enterprise solutions across healthcare, finance, manufacturing, logistics, retail, education, real estate, and professional services — adapting our approach to each industry's unique requirements."
                            />

                            <FaqItem
                                question="How do we get started?"
                                answer="Reach out through our contact page for a free consultation. We'll discuss your requirements, challenges, and goals, then propose a tailored development strategy and roadmap."
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
                            currentSlug="/ayodhya/enterprise-software-development-services"
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
