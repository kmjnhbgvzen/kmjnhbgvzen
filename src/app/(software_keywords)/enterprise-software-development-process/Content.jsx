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
                            Enterprise Software Development Process: A Complete Engineering Lifecycle
                        </h2>

                        <p>
                            Developing enterprise software is fundamentally different from building standard web or mobile applications. Enterprise applications operate in complex ecosystems with hundreds or thousands of concurrent users, strict regulatory compliances, multi-tier data security requirements, and mission-critical workflows where downtime is not an option.
                        </p>

                        <p>
                            At Zentrix Infotech, we follow a battle-tested, agile-driven Enterprise Software Development Lifecycle (ESDLC). Our process blends robust software engineering principles with rapid iteration cycles, ensuring transparent communication, predictable delivery timelines, and scalable system architectures that evolve seamlessly with your enterprise.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            The 7 Key Phases of the Enterprise Software Development Process
                        </h2>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Phase 1"
                                title="Discovery, Stakeholder Alignment & Feasibility Study"
                                description="Every enterprise initiative begins with in-depth requirement analysis. We engage department leaders, end users, and IT stakeholders to analyze legacy roadblocks, document functional specifications (FRD), define non-functional requirements (security, throughput, compliance), and evaluate technical feasibility."
                            />

                            <ProcessStep
                                number="Phase 2"
                                title="Enterprise Architecture & Technical Blueprinting"
                                description="Our senior system architects design the foundation: selecting microservices vs. modular monolith, database schema design (SQL/NoSQL/distributed caching), API gateway architectures, high-availability multi-region cloud setups, and multi-tenant isolation policies."
                            />

                            <ProcessStep
                                number="Phase 3"
                                title="UX/UI Design, Wireframing & Interactive Prototyping"
                                description="Complex enterprise workflows require intuitive interfaces to minimize training time and eliminate human errors. We build interactive Figma prototypes and clickable wireframes, conducting usability validations with actual operational teams before writing production code."
                            />

                            <ProcessStep
                                number="Phase 4"
                                title="Agile Sprint-Based Engineering & CI/CD Pipeline Setup"
                                description="Development is organized into 2-week agile sprints. We write clean, test-driven code using modern frameworks and set up automated Continuous Integration/Continuous Deployment (CI/CD) pipelines for seamless automated testing, containerization, and build orchestration."
                            />

                            <ProcessStep
                                number="Phase 5"
                                title="Rigorous Quality Assurance, Security & Performance Testing"
                                description="We execute comprehensive testing suites: automated unit & integration testing, performance load testing under extreme concurrency, role-based security vulnerability audits, OWASP compliance verification, and end-user User Acceptance Testing (UAT)."
                            />

                            <ProcessStep
                                number="Phase 6"
                                title="Production Deployment & Zero-Downtime Data Migration"
                                description="We orchestrate seamless production rollouts using blue-green or canary deployments. If transitioning from legacy systems, we execute phased data migration, automated data cleansing, schema reconciliation, and disaster rollback safeguard protocols."
                            />

                            <ProcessStep
                                number="Phase 7"
                                title="Post-Launch Governance, Monitoring & Continuous Evolution"
                                description="Enterprise software is a living platform. We provide 24/7 infrastructure observability, real-time error tracking (APM), regular security patches, SLA-backed support, and periodic architectural reviews to scale with organizational expansion."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Key Pillars of Our Engineering Approach
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Security by Design & Regulatory Compliance"
                                description="From granular Role-Based Access Control (RBAC) and End-to-End Encryption (AES-256 / TLS 1.3) to comprehensive audit trails, our process builds compliance (GDPR, HIPAA, ISO 27001, SOC 2) into the codebase from day one."
                            />

                            <ConsultationTopic
                                title="2. API-First & Ecosystem Interoperability"
                                description="Enterprise applications must integrate with existing ERPs, CRMs, legacy databases, payment gateways, and third-party SaaS tools. We design clean REST and GraphQL APIs with comprehensive OpenAPI documentation."
                            />

                            <ConsultationTopic
                                title="3. Scalability & High Availability"
                                description="We engineer resilient systems utilizing containerization (Docker, Kubernetes), auto-scaling clusters, distributed message queues (Kafka, RabbitMQ), and in-memory caches (Redis) to withstand sudden traffic spikes effortlessly."
                            />

                            <ConsultationTopic
                                title="4. Transparent Project Governance"
                                description="Stay informed throughout every stage with dedicated technical project managers, sprint retrospectives, Jira/Trello board visibility, bi-weekly live demos, and detailed milestone delivery reports."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Technology Stack Powering Enterprise Software
                        </h2>

                        <p>
                            We employ modern, production-grade technologies tailored to your enterprise infrastructure and long-term scalability needs:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Frontend:</strong> React.js, Next.js, Angular, TypeScript, TailwindCSS</li>
                            <li><strong>Backend:</strong> Node.js, Python (Django/FastAPI), Java (Spring Boot), .NET Core, Go</li>
                            <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch</li>
                            <li><strong>Cloud & DevOps:</strong> AWS, Microsoft Azure, Google Cloud (GCP), Docker, Kubernetes, Terraform, GitHub Actions</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Enterprises Partner with Zentrix Infotech
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Full-Lifecycle Accountability"
                                description="We handle everything from early discovery and software architecture design to deployment, enterprise data migration, and long-term SLA maintenance."
                            />

                            <ConsultationTopic
                                title="Faster Time-to-Market with Agile Sprints"
                                description="Our modular engineering approach enables early MVP delivery and rapid feature releases without sacrificing code quality or stability."
                            />

                            <ConsultationTopic
                                title="Direct Access to Senior Engineers"
                                description="Work directly with experienced solution architects and senior developers who understand complex business logic and enterprise engineering."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Ready to Modernize Your Enterprise Software?
                        </h2>

                        <p>
                            Whether you are building a custom ERP, modernizing legacy systems, or developing a high-throughput business automation platform, Zentrix Infotech delivers the architectural expertise and engineering discipline your organization needs.
                        </p>

                        <p>
                            <Link
                                href="/contact-us"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                Schedule a Free Technical Discovery Session &rarr;
                            </Link>
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Frequently Asked Questions (FAQ)
                        </h2>

                        <div className="space-y-6 mt-6">
                            <FaqItem
                                question="What are the main stages in the enterprise software development process?"
                                answer="The process consists of 7 primary stages: Discovery & Requirements Analysis, System Architecture & Design, UX/UI Prototyping, Agile Development & CI/CD Setup, Quality Assurance & Security Auditing, Deployment & Data Migration, and Ongoing Post-Launch Support."
                            />

                            <FaqItem
                                question="How long does an enterprise software development project typically take?"
                                answer="Enterprise projects typically take anywhere from 3 to 9 months depending on scope, complexity, legacy integrations, and compliance requirements. We break large projects into phased milestones for incremental delivery."
                            />

                            <FaqItem
                                question="How do you handle legacy data migration safely?"
                                answer="We execute data validation, cleansing, and automated mapping scripts in staging environments before cutover, utilizing shadow runs and rollback protocols to ensure zero data loss and minimal operational disruption."
                            />

                            <FaqItem
                                question="Do you support ongoing maintenance after the system is deployed?"
                                answer="Yes. We offer continuous SLA-backed maintenance packages including 24/7 server monitoring, performance optimization, security updates, and dedicated feature roadmap enhancement."
                            />

                            <FaqItem
                                question="Who owns the intellectual property and source code?"
                                answer="You retain 100% full ownership of all custom source code, documentation, architectural diagrams, and intellectual property developed during the project."
                            />
                        </div>

                        <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                                Related Enterprise Services
                            </h3>

                            <ul className="list-disc list-inside space-y-2">
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
                                        href="/enterprise-software-development-company"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Enterprise Software Development Company
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/enterprise-software-development-cost-india"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Enterprise Software Development Cost in India
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
                            currentSlug="/ayodhya/enterprise-software-development-process"
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
