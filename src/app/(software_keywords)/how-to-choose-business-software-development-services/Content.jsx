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
                            How to Choose the Right Business Software Development Services
                        </h2>

                        <p>
                            Selecting the right software development partner is one of the most
                            consequential decisions a business can make. The right choice leads
                            to streamlined operations, competitive advantages, and scalable
                            growth. The wrong choice results in wasted budgets, missed
                            deadlines, and software that creates more problems than it solves.
                        </p>

                        <p>
                            This guide walks you through the key factors to evaluate when
                            choosing business software development services &mdash; so you can
                            make an informed decision and find a partner who truly understands
                            your business needs.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Key Factors to Evaluate
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Industry Experience & Domain Knowledge"
                                description="Look for a company that has experience in your industry. A team that understands your domain will ask better questions, anticipate challenges, and deliver solutions that align with how your business actually operates — not generic templates."
                            />

                            <ConsultationTopic
                                title="2. Technical Expertise & Stack Flexibility"
                                description="The best partners are not tied to a single technology. They evaluate your requirements and recommend the optimal stack — whether that's React, Next.js, Node.js, Python, .NET, or cloud-native infrastructure — based on your specific needs."
                            />

                            <ConsultationTopic
                                title="3. Development Process & Transparency"
                                description="Ask about their development methodology. Agile teams that deliver in structured sprints with regular demos and clear communication ensure you always know where your project stands and can provide feedback early."
                            />

                            <ConsultationTopic
                                title="4. Portfolio & Case Studies"
                                description="Review their past work. A strong portfolio of completed projects across different industries demonstrates reliability, versatility, and the ability to deliver real business outcomes — not just code."
                            />

                            <ConsultationTopic
                                title="5. Scalability & Architecture"
                                description="Your software needs to grow with your business. Evaluate whether the company designs systems with scalability in mind — handling more users, more data, and more complexity without requiring a complete rebuild."
                            />

                            <ConsultationTopic
                                title="6. Security & Compliance"
                                description="Enterprise-grade security should be built into every project from day one. Ask about encryption, access controls, data protection, and compliance with industry regulations relevant to your business."
                            />

                            <ConsultationTopic
                                title="7. Post-Launch Support & Maintenance"
                                description="Software is a living system. The best partners offer ongoing monitoring, performance optimization, security updates, and feature enhancements — ensuring your platform evolves alongside your business."
                            />

                            <ConsultationTopic
                                title="8. Communication & Cultural Fit"
                                description="Clear, consistent communication is non-negotiable. Look for a team that assigns dedicated project managers, provides regular status updates, and is responsive to your questions and feedback."
                            />

                            <ConsultationTopic
                                title="9. Pricing Model & Value"
                                description="Understand how the company prices its services — fixed-price, time-and-materials, or dedicated teams. The cheapest option is rarely the best. Focus on value delivered, not just cost."
                            />

                            <ConsultationTopic
                                title="10. Client References & Reviews"
                                description="Ask for references from past clients. Genuine testimonials and case studies give you real insight into how the company operates, communicates, and delivers results."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Red Flags to Watch For
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>No clear development methodology or process documentation</li>
                            <li>Unwillingness to share past project references or case studies</li>
                            <li>Overpromising timelines or underquoting to win the contract</li>
                            <li>One-size-fits-all solutions without understanding your business</li>
                            <li>No discussion of security, testing, or post-launch support</li>
                            <li>Poor communication during the initial evaluation phase</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            How Zentrix Infotech Stands Out
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
                                title="Proven Results"
                                description="A growing portfolio of successful projects across multiple industries, with measurable business impact for every client."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Frequently Asked Questions (FAQ)
                        </h2>

                        <div className="space-y-6 mt-6">
                            <FaqItem
                                question="How do I know if a software development company is the right fit?"
                                answer="Evaluate their industry experience, development process, portfolio, communication style, and post-launch support. A good partner will invest time upfront to understand your business before proposing solutions."
                            />

                            <FaqItem
                                question="Should I choose the cheapest option?"
                                answer="Not necessarily. The cheapest option often leads to cutting corners on architecture, security, and testing — resulting in higher long-term costs. Focus on value and quality of delivery."
                            />

                            <FaqItem
                                question="What questions should I ask during the evaluation?"
                                answer="Ask about their development methodology, technology stack flexibility, security practices, project management approach, post-launch support, and request references from past clients in your industry."
                            />

                            <FaqItem
                                question="How long does a typical business software project take?"
                                answer="Timelines vary by scope and complexity, but most projects range from 6 to 16 weeks. A reliable partner will provide a detailed timeline with clear milestones after the discovery phase."
                            />

                            <FaqItem
                                question="Can Zentrix Infotech integrate with our existing systems?"
                                answer="Yes. We build custom APIs and integrations to connect your new software with CRM, ERP, accounting, payment, and any third-party platforms you already rely on."
                            />

                            <FaqItem
                                question="How do we get started with Zentrix Infotech?"
                                answer="Reach out through our contact page for a free consultation. We'll discuss your requirements, challenges, and goals, then propose a tailored development plan."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Ready to Choose the Right Partner?
                        </h2>

                        <p>
                            If you&apos;re evaluating business software development services and
                            want a partner who truly understands your operations, get in touch
                            with Zentrix Infotech. We offer a free consultation to discuss your
                            requirements and show you exactly how we can help.
                        </p>

                        <p>
                            <Link
                                href="/contact-us"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                Start Your Project Today &rarr;
                            </Link>
                        </p>

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
                                        href="/best-business-software-development-company"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Best Business Software Development Company
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/ayodhya/how-to-choose-business-software-development-services"
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

function FaqItem({ question, answer }) {
    return (
        <div>
            <h3 className="font-semibold text-gray-900 mb-3">{question}</h3>
            <p className="text-gray-700">{answer}</p>
        </div>
    );
}

export default Content;
