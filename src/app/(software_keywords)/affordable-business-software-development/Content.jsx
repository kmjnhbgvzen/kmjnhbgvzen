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
                            Affordable Business Software Development Without Compromising Quality
                        </h2>

                        <p>
                            Custom software shouldn&apos;t be a luxury reserved for large
                            enterprises with massive IT budgets. At Zentrix Infotech, we
                            believe every business &mdash; from early-stage startups to
                            growing SMEs &mdash; deserves software that fits their workflow,
                            scales with their growth, and doesn&apos;t break the bank. Our
                            affordable business software development services deliver
                            enterprise-quality solutions at pricing that makes sense for
                            businesses operating on real-world budgets.
                        </p>

                        <p>
                            We don&apos;t cut corners to cut costs. Instead, we use efficient
                            development practices, modern frameworks, and a focused discovery
                            process to build exactly what you need &mdash; without bloat,
                            unnecessary features, or inflated timelines that drive up expenses.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Affordable Doesn&apos;t Mean Low Quality
                        </h2>

                        <p>
                            Many businesses assume that custom software is automatically
                            expensive. The reality is that high costs often come from
                            inefficient processes, scope creep, and over-engineered solutions
                            &mdash; not from the inherent cost of building good software.
                            At Zentrix Infotech, we keep costs manageable by:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Focusing on features that deliver real business value first</li>
                            <li>
                                Using modern, efficient technology stacks that reduce development time
                            </li>
                            <li>Building in phases so you can launch faster and iterate</li>
                            <li>
                                Avoiding unnecessary complexity that inflates budgets
                            </li>
                            <li>
                                Providing transparent pricing with no hidden costs or surprise invoices
                            </li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Affordable Software Development Services
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Custom Business Applications"
                                description="We build bespoke applications tailored to your specific workflow — internal dashboards, operations tools, customer portals, and more — at a fraction of what large agencies charge, without sacrificing quality or scalability."
                            />

                            <ConsultationTopic
                                title="2. ERP Systems on a Budget"
                                description="Unified ERP systems that bring finance, HR, inventory, and operations onto one platform. We build modular ERP solutions so you can start with what you need now and expand as your business grows — keeping initial costs manageable."
                            />

                            <ConsultationTopic
                                title="3. CRM Solutions"
                                description="A CRM built for your sales process — not a generic pipeline with features you'll never use. We build affordable CRM platforms that track leads, automate follow-ups, and integrate with your existing tools."
                            />

                            <ConsultationTopic
                                title="4. Business Process Automation"
                                description="Automate the repetitive tasks that drain your team's time — approvals, notifications, data entry, reporting, and scheduled workflows — with cost-effective automation tools that deliver immediate ROI."
                            />

                            <ConsultationTopic
                                title="5. MVP & Startup Software Development"
                                description="For startups and new ventures, we build minimum viable products that let you validate your idea, attract users, and secure funding — without spending your entire runway on development."
                            />

                            <ConsultationTopic
                                title="6. Legacy System Upgrades"
                                description="Still running outdated software? We modernize legacy systems affordably — migrating to modern architecture, improving performance, and adding new capabilities without the cost of a complete rebuild when possible."
                            />

                            <ConsultationTopic
                                title="7. Software Integration & API Development"
                                description="Connect your existing tools — payment gateways, accounting platforms, marketing software, and third-party services — with affordable custom integrations that eliminate manual data entry between systems."
                            />

                            <ConsultationTopic
                                title="8. Cloud-Based Solutions"
                                description="We build and deploy on scalable cloud infrastructure, giving your team secure access from anywhere while keeping hosting and maintenance costs predictable and manageable."
                            />

                            <ConsultationTopic
                                title="9. Maintenance & Support Plans"
                                description="Affordable ongoing support packages that include bug fixes, performance monitoring, security updates, and feature additions — so your software stays reliable without unpredictable costs."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Development Process
                        </h2>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Step 1"
                                title="Discovery & Scope Definition"
                                description="We identify your core requirements and define a focused scope that delivers maximum value within your budget — no unnecessary features, no bloated timelines."
                            />

                            <ProcessStep
                                number="Step 2"
                                title="Planning & Transparent Pricing"
                                description="We provide a clear, itemized estimate with no hidden costs. You know exactly what you're paying for before development begins."
                            />

                            <ProcessStep
                                number="Step 3"
                                title="Design & Prototyping"
                                description="We create wireframes and prototypes so you can visualize the solution and provide feedback before any production code is written."
                            />

                            <ProcessStep
                                number="Step 4"
                                title="Phased Development"
                                description="We build in structured phases, delivering working features incrementally so you can start using the software sooner and spread costs over time."
                            />

                            <ProcessStep
                                number="Step 5"
                                title="Testing & Quality Assurance"
                                description="Every feature is rigorously tested for functionality, performance, and security — affordable doesn't mean we skip quality checks."
                            />

                            <ProcessStep
                                number="Step 6"
                                title="Deployment"
                                description="We handle the complete rollout with minimal disruption to your daily operations."
                            />

                            <ProcessStep
                                number="Step 7"
                                title="Affordable Ongoing Support"
                                description="Post-launch, we offer flexible support plans that keep your software running smoothly without locking you into expensive contracts."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Technologies We Work With
                        </h2>

                        <p>
                            We use modern, open-source-friendly technologies including
                            React.js, Next.js, Node.js, Python, PostgreSQL, MongoDB, Docker,
                            and cloud platforms like AWS &mdash; keeping licensing costs low
                            while delivering high-performance, scalable solutions.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Industries We Serve
                        </h2>

                        <p>
                            Zentrix Infotech has delivered affordable software solutions for
                            businesses across retail and e-commerce, healthcare, education,
                            hospitality, real estate, manufacturing, and professional services.
                            No matter the industry, the goal stays the same: software that fits
                            your business and your budget.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Choose Zentrix Infotech for Affordable Software Development
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Enterprise Quality at SME Pricing"
                                description="We deliver the same quality of architecture, code, and security that large enterprises expect — at pricing designed for startups and growing businesses."
                            />

                            <ConsultationTopic
                                title="Transparent, Fixed Pricing"
                                description="No surprise invoices. We provide clear estimates upfront and stick to them, so you can plan your budget with confidence."
                            />

                            <ConsultationTopic
                                title="Phased Delivery"
                                description="Start with the features you need most, launch sooner, and add capabilities as your business grows — spreading costs over time."
                            />

                            <ConsultationTopic
                                title="No Vendor Lock-In"
                                description="You own your code and your data. We build on open standards so you're never locked into expensive proprietary platforms."
                            />

                            <ConsultationTopic
                                title="Fast Turnaround"
                                description="Efficient processes and experienced developers mean faster delivery — reducing costs and getting you to market sooner."
                            />

                            <ConsultationTopic
                                title="Proven Track Record"
                                description="A growing portfolio of successful, budget-conscious projects across multiple industries and business sizes."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Ready to Build Affordable Software That Delivers Real Value?
                        </h2>

                        <p>
                            If you&apos;ve been putting off custom software because of cost
                            concerns, it&apos;s time to talk to Zentrix Infotech. We&apos;ll
                            show you how to get the software your business needs at a price
                            that works. Get in touch for a free consultation and transparent
                            quote.
                        </p>

                        <p>
                            <Link
                                href="/contact-us"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                Get a Free Quote Today &rarr;
                            </Link>
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Frequently Asked Questions (FAQ)
                        </h2>

                        <div className="space-y-6 mt-6">
                            <FaqItem
                                question="Is affordable software development really possible without cutting corners?"
                                answer="Yes. Affordable development comes from efficient processes, focused scope, and modern tools — not from skipping testing, security, or good architecture. We deliver the same quality standards at lower cost through smarter workflows."
                            />

                            <FaqItem
                                question="How much does affordable custom software cost?"
                                answer="Costs vary by scope and complexity, but we work with businesses of all sizes to find solutions that fit their budget. Contact us for a free, no-obligation quote tailored to your specific requirements."
                            />

                            <FaqItem
                                question="Can I start small and add features later?"
                                answer="Absolutely. We recommend a phased approach — launch with core features first, then expand based on user feedback and business growth. This keeps initial costs low and ensures you're investing in features that matter."
                            />

                            <FaqItem
                                question="How long does development take?"
                                answer="Timelines depend on scope, but most projects range from 4 to 12 weeks. Phased delivery means you can start using core features even sooner."
                            />

                            <FaqItem
                                question="Do you provide ongoing support at affordable rates?"
                                answer="Yes. We offer flexible maintenance and support plans designed for budget-conscious businesses, covering bug fixes, security updates, and feature additions."
                            />

                            <FaqItem
                                question="Will I own the code?"
                                answer="Yes. You get full ownership of all source code and assets. No vendor lock-in, no recurring licensing fees for your own software."
                            />

                            <FaqItem
                                question="Can you work within a fixed budget?"
                                answer="Yes. We regularly work with fixed budgets and can scope projects to fit your financial constraints while still delivering meaningful business value."
                            />

                            <FaqItem
                                question="How do we get started?"
                                answer="Simply reach out through our contact page for a free consultation. We'll discuss your requirements, understand your budget, and propose a solution that delivers maximum value within your means."
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
                            currentSlug="/ayodhya/affordable-business-software-development"
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
