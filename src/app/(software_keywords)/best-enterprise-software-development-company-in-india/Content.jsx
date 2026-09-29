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
                            Why Zentrix Infotech Is the Best Enterprise Software Development Company in India
                        </h2>

                        <p>
                            Building enterprise software isn&apos;t the same as building a
                            simple business tool. Enterprise systems need to handle complex
                            workflows, serve multiple departments, support thousands of
                            concurrent users, and integrate with dozens of existing platforms
                            &mdash; all while maintaining reliability and security at scale.
                        </p>

                        <p>
                            At Zentrix Infotech, we specialize in building enterprise-grade
                            software solutions for businesses across India and beyond. Our
                            engineering team combines deep technical expertise with real
                            business understanding to deliver systems that solve complex
                            operational challenges &mdash; not just check boxes on a
                            requirements document.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            What Sets Us Apart as India&apos;s Leading Enterprise Software Development Company?
                        </h2>

                        <p>
                            Enterprise software development demands a different level of
                            rigor, planning, and execution. Here&apos;s what makes Zentrix
                            Infotech the right partner:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Architecture designed for high availability and horizontal scalability</li>
                            <li>Deep experience with multi-tenant, multi-department enterprise systems</li>
                            <li>Enterprise-grade security, compliance, and audit trail capabilities</li>
                            <li>Seamless integration with existing enterprise tools and platforms</li>
                            <li>Dedicated project management with transparent communication at every stage</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Enterprise Software Development Services
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Custom Enterprise Application Development"
                                description="We design and build large-scale enterprise applications from scratch — internal operations platforms, multi-tenant SaaS systems, and mission-critical business tools architected for performance, security, and long-term maintainability."
                            />

                            <ConsultationTopic
                                title="2. Enterprise Resource Planning (ERP) Systems"
                                description="Unified ERP platforms that consolidate finance, HR, inventory, procurement, production, and supply chain management into a single integrated system — eliminating data silos and providing leadership with real-time operational visibility."
                            />

                            <ConsultationTopic
                                title="3. Enterprise CRM Solutions"
                                description="Scalable CRM systems built for enterprise sales teams — managing complex sales pipelines, customer relationships, territory management, and integrating with marketing automation and customer support platforms."
                            />

                            <ConsultationTopic
                                title="4. Business Process Automation & Workflow Engines"
                                description="We build robust automation engines that handle complex approval chains, cross-department workflows, scheduled processes, and event-driven operations — reducing manual effort and ensuring consistency across the organization."
                            />

                            <ConsultationTopic
                                title="5. Enterprise Integration & Middleware"
                                description="Custom middleware and API layers that connect disparate enterprise systems — ERP, CRM, HRMS, supply chain, payment gateways, and third-party platforms — into a unified, interoperable ecosystem."
                            />

                            <ConsultationTopic
                                title="6. Legacy System Modernization"
                                description="We assess and modernize outdated enterprise systems — migrating from monolithic architectures to modern, cloud-native microservices while preserving critical business logic and minimizing operational disruption."
                            />

                            <ConsultationTopic
                                title="7. Data Analytics & Business Intelligence Platforms"
                                description="Enterprise dashboards and reporting systems that transform operational data into actionable intelligence — giving executives and managers real-time visibility into KPIs, trends, and business performance."
                            />

                            <ConsultationTopic
                                title="8. Cloud-Native Enterprise Solutions"
                                description="Enterprise software built on scalable cloud infrastructure with auto-scaling, disaster recovery, multi-region deployment, and enterprise-grade security — ensuring uptime, performance, and global accessibility."
                            />

                            <ConsultationTopic
                                title="9. Enterprise Mobility Solutions"
                                description="Mobile-first enterprise applications that give field teams, managers, and stakeholders secure access to critical business data and workflows from any device, anywhere."
                            />

                            <ConsultationTopic
                                title="10. Ongoing Enterprise Support & Evolution"
                                description="Continuous monitoring, performance optimization, security patching, and feature development to ensure your enterprise platform remains reliable, secure, and aligned with evolving business needs."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Development Process
                        </h2>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Step 1"
                                title="Discovery & Enterprise Analysis"
                                description="We conduct a thorough analysis of your organization's processes, pain points, existing systems, and strategic goals — ensuring the solution addresses the right problems at the right scale."
                            />

                            <ProcessStep
                                number="Step 2"
                                title="Architecture & Technology Planning"
                                description="We define the system architecture, select the optimal technology stack, plan integration points, and create a detailed roadmap with clear milestones and deliverables."
                            />

                            <ProcessStep
                                number="Step 3"
                                title="UX Design & Prototyping"
                                description="Interactive wireframes and prototypes let stakeholders across departments visualize the solution and provide feedback before production development begins."
                            />

                            <ProcessStep
                                number="Step 4"
                                title="Agile Development"
                                description="We build in structured sprints with regular demos, sprint reviews, and stakeholder check-ins — ensuring transparency and alignment throughout the development lifecycle."
                            />

                            <ProcessStep
                                number="Step 5"
                                title="Enterprise-Grade Testing"
                                description="Comprehensive functional, performance, load, security, and integration testing to ensure the system meets enterprise reliability and performance standards."
                            />

                            <ProcessStep
                                number="Step 6"
                                title="Deployment & Rollout"
                                description="Managed deployment with phased rollout, data migration, user training, and change management support — minimizing disruption to daily operations."
                            />

                            <ProcessStep
                                number="Step 7"
                                title="Continuous Improvement"
                                description="Post-launch monitoring, performance optimization, feature enhancements, and proactive issue resolution to keep your enterprise platform evolving with your business."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Technologies We Work With
                        </h2>

                        <p>
                            Our engineering team works across a comprehensive enterprise
                            technology stack including React.js, Next.js, Node.js, Python,
                            Java, .NET, TypeScript, PostgreSQL, MongoDB, Redis, Elasticsearch,
                            Docker, Kubernetes, AWS, Azure, and Google Cloud &mdash; selecting
                            the right tools for each project&apos;s specific requirements.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Industries We Serve Across India
                        </h2>

                        <p>
                            Zentrix Infotech has delivered enterprise software solutions across
                            healthcare, education, manufacturing, logistics, finance, retail,
                            real estate, hospitality, government, and professional services.
                            Regardless of industry, our approach remains the same: build
                            software that fits how the organization actually operates.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Indian Enterprises Choose Zentrix Infotech
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Enterprise-First Mindset"
                                description="We understand the complexity, scale, and governance requirements of enterprise systems. Every solution is designed for multi-department, multi-user, high-availability environments."
                            />

                            <ConsultationTopic
                                title="End-to-End Ownership"
                                description="From discovery through development, deployment, and long-term support — one team, one point of accountability, zero handoff confusion."
                            />

                            <ConsultationTopic
                                title="India-Based, Globally Capable"
                                description="Located in India with competitive pricing and a deep talent pool, while delivering solutions that meet global enterprise standards."
                            />

                            <ConsultationTopic
                                title="Scalable Architecture"
                                description="Systems designed to handle growth — more users, more data, more complexity — without requiring a ground-up rebuild."
                            />

                            <ConsultationTopic
                                title="Security & Compliance"
                                description="Enterprise-grade security, data protection, encryption, and regulatory compliance built into the foundation of every project."
                            />

                            <ConsultationTopic
                                title="Proven Track Record"
                                description="A growing portfolio of successful enterprise projects across multiple industries, with measurable business impact for every client."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Ready to Build Your Enterprise Solution?
                        </h2>

                        <p>
                            If you&apos;re looking for a reliable enterprise software
                            development company in India that delivers robust, scalable, and
                            secure solutions, get in touch with Zentrix Infotech. We offer a
                            free consultation to discuss your requirements and propose a
                            tailored development plan.
                        </p>

                        <p>
                            <Link
                                href="/contact-us"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                Start Your Enterprise Project Today &rarr;
                            </Link>
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Frequently Asked Questions (FAQ)
                        </h2>

                        <div className="space-y-6 mt-6">
                            <FaqItem
                                question="What makes Zentrix Infotech the best enterprise software development company in India?"
                                answer="We combine deep enterprise domain expertise with modern engineering practices. Every project begins with thorough business analysis, and we architect solutions for scalability, security, and long-term maintainability — not quick fixes."
                            />

                            <FaqItem
                                question="What types of enterprise software do you develop?"
                                answer="We build custom ERP systems, enterprise CRM platforms, workflow automation engines, business intelligence dashboards, enterprise portals, integration middleware, and large-scale custom applications across industries."
                            />

                            <FaqItem
                                question="How long does an enterprise software project take?"
                                answer="Timelines vary by scope and complexity, but most enterprise projects range from 8 to 24 weeks. We provide a detailed timeline with clear milestones after the initial discovery phase."
                            />

                            <FaqItem
                                question="Do you work with SMEs or only large enterprises?"
                                answer="We work with businesses of all sizes — from growing SMEs that need enterprise-grade systems to large organizations managing complex, multi-department operations across India."
                            />

                            <FaqItem
                                question="Can you integrate with our existing enterprise systems?"
                                answer="Yes. We build custom APIs and middleware to connect your new software with ERP, CRM, HRMS, accounting, payment, and any third-party enterprise platforms you already rely on."
                            />

                            <FaqItem
                                question="Is the software secure and compliant?"
                                answer="Yes. We build with encryption, secure authentication, role-based access control, audit trails, and industry-standard compliance practices, with regular security assessments throughout the lifecycle."
                            />

                            <FaqItem
                                question="Do you provide post-launch enterprise support?"
                                answer="Yes. We offer comprehensive monitoring, maintenance, performance optimization, security updates, and feature enhancements to ensure your enterprise platform remains reliable and evolves with your business."
                            />

                            <FaqItem
                                question="How do we get started?"
                                answer="Reach out through our contact page for a free consultation. We'll discuss your enterprise requirements, current challenges, and strategic goals, then propose a tailored development plan."
                            />
                        </div>

                        <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                                Related Services
                            </h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <Link
                                        href="/enterprise-software-development-company"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Enterprise Software Development Company
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

                                <li>
                                    <Link
                                        href="/custom-business-software-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Custom Business Software Development
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/ayodhya/best-enterprise-software-development-company-in-india"
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
