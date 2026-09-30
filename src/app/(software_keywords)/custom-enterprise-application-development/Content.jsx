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
                            Custom Enterprise Application Development for Modern Scalable Businesses
                        </h2>

                        <p>
                            Large enterprises operate in environments of high complexity, massive data volumes, and distinct operational requirements. Ready-made off-the-shelf software inevitably introduces rigidity, fragmented workflows, and costly license overheads. At Zentrix Infotech, our custom enterprise application development services build robust, scalable, and secure digital foundations tailored precisely to your operational ecosystem.
                        </p>

                        <p>
                            Whether you are modernizing legacy software, developing centralized enterprise resource planning (ERP) platforms, or automating multi-tier approval workflows across distributed teams, we engineer systems that drive efficiency, lower total cost of ownership, and scale seamlessly with your organizational goals.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Invest in Custom Enterprise Application Development?
                        </h2>

                        <p>
                            Generic enterprise software often forces your organization to adapt its proven workflows to the constraints of the tool. Custom enterprise applications, by contrast, are designed around your competitive advantages:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Tailored Workflow Alignment:</strong> Build software that maps 1:1 with your business logic, compliance rules, and operational hierarchy.</li>
                            <li><strong>Seamless System Integration:</strong> Connect ERPs, CRMs, legacy databases, payment gateways, and third-party APIs into a unified ecosystem.</li>
                            <li><strong>Enterprise-Grade Security & Compliance:</strong> Implement role-based access control (RBAC), multi-factor authentication, end-to-end encryption, and regulatory compliance.</li>
                            <li><strong>Eliminate Recurring Per-Seat Licensing:</strong> Avoid escalating SaaS subscription fees and maintain full ownership and control over your intellectual property.</li>
                            <li><strong>Uncapped Scalability:</strong> Microservices and cloud-native architectures ensure your platform handles increasing transactions and concurrent users effortlessly.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Custom Enterprise Application Development Solutions
                        </h2>

                        <p>
                            We offer end-to-end engineering across the complete software development lifecycle, delivering diverse enterprise applications:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ConsultationTopic
                                title="Enterprise ERP & CRM Systems"
                                description="Unified platforms managing finance, inventory, supply chain, procurement, sales funnels, and customer intelligence."
                            />
                            <ConsultationTopic
                                title="Workflow & Business Process Automation"
                                description="Automated document routing, approval hierarchies, and reporting pipelines to eliminate manual bottlenecks."
                            />
                            <ConsultationTopic
                                title="Enterprise Portals & Collaboration Tools"
                                description="Secure self-service portals for employees, vendors, distributors, and global partners with granular permissions."
                            />
                            <ConsultationTopic
                                title="Legacy Modernization & Cloud Migration"
                                description="Refactoring outdated legacy monoliths into cloud-native, microservices-driven architectures with zero downtime."
                            />
                            <ConsultationTopic
                                title="Data Analytics & Executive Dashboards"
                                description="Real-time business intelligence dashboards providing actionable analytics and cross-department KPIs."
                            />
                            <ConsultationTopic
                                title="Custom Mobile Enterprise Apps"
                                description="High-performance iOS and Android applications for field agents, logistics tracking, and remote operations."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Enterprise Application Development Lifecycle
                        </h2>

                        <div className="space-y-4">
                            <ProcessStep
                                number="01"
                                title="Discovery & Architecture Blueprinting"
                                description="We assess your existing IT infrastructure, document complex business requirements, and design scalable architecture blueprints."
                            />
                            <ProcessStep
                                number="02"
                                title="UI/UX Design & Prototyping"
                                description="Creating intuitive, user-centric interfaces tailored to enterprise power users and field personnel alike."
                            />
                            <ProcessStep
                                number="03"
                                title="Agile Engineering & Development"
                                description="Building modular, secure, and clean codebases using modern frameworks, REST/GraphQL APIs, and robust databases."
                            />
                            <ProcessStep
                                number="04"
                                title="Rigorous QA & Security Auditing"
                                description="Comprehensive load testing, vulnerability scanning, automated test suites, and compliance validation."
                            />
                            <ProcessStep
                                number="05"
                                title="Deployment & Seamless Data Migration"
                                description="Executing zero-downtime deployments with secure data migration pipelines from legacy systems."
                            />
                            <ProcessStep
                                number="06"
                                title="Ongoing SLA Support & Optimization"
                                description="Continuous monitoring, performance tuning, proactive maintenance, and feature enhancements under strict SLAs."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            <FaqItem
                                question="What is custom enterprise application development?"
                                answer="It is the process of architecting, building, and deploying tailored software solutions specifically designed for large organizations to support complex operational workflows, integrations, and high security standards."
                            />
                            <FaqItem
                                question="How long does it take to develop a custom enterprise application?"
                                answer="Timelines vary based on scope and integration depth. Typically, an MVP or core phase takes 8 to 16 weeks, while extensive enterprise-wide transformations are delivered incrementally across structured milestones."
                            />
                            <FaqItem
                                question="Do we own the source code and intellectual property?"
                                answer="Yes. Upon project completion and handover, you retain 100% full ownership of the source code, architecture designs, and intellectual property without restrictive vendor lock-ins."
                            />
                            <FaqItem
                                question="Can you integrate with our existing ERP or database systems?"
                                answer="Absolutely. We specialize in building secure API layers and custom connectors to seamlessly integrate with existing SAP, Oracle, Salesforce, legacy SQL databases, and internal tools."
                            />
                        </div>

                        <CityInternalLinks />
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
