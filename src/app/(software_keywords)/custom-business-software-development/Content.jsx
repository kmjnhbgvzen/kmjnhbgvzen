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
                            Custom Business Software Development That Powers Real Growth
                        </h2>

                        <p>
                            Every business eventually hits the same wall: spreadsheets stop
                            scaling, manual processes slow teams down, and off-the-shelf tools
                            force you to work around their limitations instead of around your
                            actual workflow. At Zentrix Infotech, we solve that problem at the
                            root. Our custom business software development services are built to
                            replace guesswork and friction with systems that are designed
                            specifically for how your company operates &mdash; not a generic
                            template stretched to fit.
                        </p>

                        <p>
                            Whether you&apos;re a startup building your first internal tool, an
                            SME replacing outdated legacy systems, or an enterprise looking to
                            unify fragmented operations, our team designs, builds, and
                            maintains software that becomes a genuine operational advantage
                            &mdash; not just another app to manage.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Businesses Need Custom Software (Not Just &ldquo;An App&rdquo;)
                        </h2>

                        <p>
                            Generic software is built for the average user. Your business
                            isn&apos;t average &mdash; it has its own processes, its own
                            bottlenecks, and its own growth plan. Off-the-shelf platforms often
                            mean:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Paying for features you&apos;ll never use</li>
                            <li>
                                Bending your workflow to match the software&apos;s limitations
                            </li>
                            <li>Hitting scaling walls as your team or data grows</li>
                            <li>
                                Struggling to integrate with the other tools you already rely on
                            </li>
                            <li>
                                Depending on a vendor&apos;s roadmap instead of your own
                            </li>
                        </ul>

                        <p>
                            Custom business software removes these constraints. It&apos;s built
                            around your actual operations, so the software adapts to you &mdash;
                            not the other way around. That&apos;s the core philosophy behind
                            every solution Zentrix Infotech delivers: technology should remove
                            friction, not add to it.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Custom Business Software Development Services
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Custom Business Application Development"
                                description="We design and build bespoke applications from the ground up — covering everything from internal dashboards and operations management tools to customer-facing platforms. Every application is architected around your specific business logic, data structures, and growth trajectory, ensuring it stays useful as your company scales rather than becoming another system you outgrow in a year."
                            />

                            <ConsultationTopic
                                title="2. Enterprise Resource Planning (ERP) Systems"
                                description="For businesses juggling inventory, finance, HR, procurement, and production across disconnected tools, we build unified ERP systems that bring every department onto a single source of truth. The result is fewer manual handoffs, fewer data entry errors, and real-time visibility into how the business is actually performing."
                            />

                            <ConsultationTopic
                                title="3. Customer Relationship Management (CRM) Solutions"
                                description="A CRM built for your sales process — not a generic pipeline that forces your team to adapt to someone else's workflow. We build CRM platforms that track leads, automate follow-ups, manage customer histories, and integrate directly with your marketing and support tools, giving your team a complete view of every customer relationship."
                            />

                            <ConsultationTopic
                                title="4. Business Process Automation"
                                description="Manual, repetitive tasks are where time and money quietly disappear. We build automation tools that handle approvals, notifications, reporting, data syncing, and scheduled workflows — so your team spends less time on busywork and more time on decisions that actually need human judgment."
                            />

                            <ConsultationTopic
                                title="5. Enterprise Software & Workflow Systems"
                                description="For larger organizations, we develop robust, multi-department systems capable of handling high transaction volumes, complex permission structures, and cross-team workflows. These systems are built with scalability and long-term maintainability as core requirements, not afterthoughts."
                            />

                            <ConsultationTopic
                                title="6. Legacy System Modernization"
                                description="Still running on outdated software that's slow, unsupported, or holding your team back? We assess your existing systems and rebuild or migrate them into modern, secure, and maintainable architecture — without disrupting the operations that depend on them during the transition."
                            />

                            <ConsultationTopic
                                title="7. Software Integration & API Development"
                                description="Your business software shouldn't operate in isolation. We build custom APIs and integrations that connect your new software with the tools you already use — payment gateways, accounting platforms, marketing tools, third-party databases, and more — so data flows automatically instead of being copied manually between systems."
                            />

                            <ConsultationTopic
                                title="8. Cloud-Based Business Software"
                                description="We build and deploy software on scalable cloud infrastructure, giving your team secure access from anywhere, automatic backups, and the ability to scale resources up or down as your business needs change — without the overhead of managing physical servers."
                            />

                            <ConsultationTopic
                                title="9. Security, Compliance & Data Protection"
                                description="Business software often handles sensitive financial, customer, and operational data. We build with encryption, secure authentication, and industry-standard compliance practices from day one, along with regular security audits to keep your systems protected as threats evolve."
                            />

                            <ConsultationTopic
                                title="10. Ongoing Support & Maintenance"
                                description="Software isn't a one-time delivery — it's a living system. We provide ongoing maintenance, performance monitoring, bug fixes, and feature updates so your software continues running reliably and evolves alongside your business."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Development Process
                        </h2>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Step 1"
                                title="Discovery & Requirement Analysis"
                                description="We start by understanding your business processes, pain points, and goals in detail, so the solution we design actually solves the right problem."
                            />

                            <ProcessStep
                                number="Step 2"
                                title="Planning & Architecture"
                                description="We define the technical roadmap, choose the right technology stack, and map out a scalable system architecture."
                            />

                            <ProcessStep
                                number="Step 3"
                                title="Design & Prototyping"
                                description="Before writing production code, we create wireframes and prototypes so you can visualize the workflow and give feedback early."
                            />

                            <ProcessStep
                                number="Step 4"
                                title="Development & Iteration"
                                description="Our team builds the software in structured sprints, with regular check-ins so you always know exactly where the project stands."
                            />

                            <ProcessStep
                                number="Step 5"
                                title="Testing & Quality Assurance"
                                description="Every feature is rigorously tested for functionality, performance, and security before it reaches your team."
                            />

                            <ProcessStep
                                number="Step 6"
                                title="Deployment"
                                description="We handle the full rollout, from server setup to data migration, with minimal disruption to your daily operations."
                            />

                            <ProcessStep
                                number="Step 7"
                                title="Support & Continuous Improvement"
                                description="Post-launch, we monitor performance, fix issues quickly, and help you add new features as your business grows."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Technologies We Work With
                        </h2>

                        <p>
                            Our development team works across a broad, modern technology stack,
                            including React.js, Node.js, Python, Java, Angular, TypeScript,
                            PostgreSQL, MongoDB, SQL databases, Docker, Kubernetes, and AWS
                            &mdash; allowing us to choose the right combination of tools for
                            your specific project rather than forcing every client into the
                            same stack.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Industries We Serve
                        </h2>

                        <p>
                            Zentrix Infotech has built custom business software for organizations
                            across retail and e-commerce, healthcare, education, hospitality,
                            real estate, manufacturing, and professional services. Across every
                            industry, the goal stays the same: software that fits how the
                            business actually runs, not a one-size-fits-all product.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Choose Zentrix Infotech for Custom Business Software Development
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Solutions Built Around Your Business"
                                description="No templated products. Every system is designed around your specific processes and goals."
                            />

                            <ConsultationTopic
                                title="End-to-End Development"
                                description="From initial strategy through deployment and long-term support, we manage the entire lifecycle."
                            />

                            <ConsultationTopic
                                title="Transparent Communication"
                                description="You get regular updates and a clear view of progress at every stage, not a black box."
                            />

                            <ConsultationTopic
                                title="Scalable Architecture"
                                description="We build systems designed to grow with your business, not solutions you'll outgrow in a year."
                            />

                            <ConsultationTopic
                                title="Security-First Approach"
                                description="Data protection and compliance are built in from the start, not bolted on later."
                            />

                            <ConsultationTopic
                                title="Affordable, Value-Driven Pricing"
                                description="Enterprise-quality development delivered at pricing that makes sense for startups and growing businesses."
                            />

                            <ConsultationTopic
                                title="Proven Track Record"
                                description="A growing portfolio of successful projects across multiple industries and business sizes."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Ready to Build Custom Software That Actually Works for You?
                        </h2>

                        <p>
                            If manual processes, disconnected tools, or outdated systems are
                            slowing your business down, it&apos;s time for software built around
                            how you actually operate. Get in touch with Zentrix Infotech for a
                            free consultation, and let&apos;s design a solution that fits your
                            business &mdash; not the other way around.
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
                                question="What is custom business software development?"
                                answer="It's the process of designing and building custom applications — such as ERP, CRM, or automation tools — tailored specifically to a company's workflows, rather than using generic, one-size-fits-all software."
                            />

                            <FaqItem
                                question="How is custom software different from off-the-shelf software?"
                                answer="Custom software is built around your exact business processes and can scale with you, while off-the-shelf tools force your team to adapt to a fixed set of features that may not fit your needs."
                            />

                            <FaqItem
                                question="How long does it take to develop custom business software?"
                                answer="Timelines vary by complexity, but most projects range from 6 to 16 weeks, from discovery through deployment. We provide a detailed timeline after the initial requirement analysis."
                            />

                            <FaqItem
                                question="Is custom business software expensive?"
                                answer="Costs depend on scope and features, but custom software often saves money long-term by eliminating licensing fees, workflow inefficiencies, and the need for multiple disconnected tools."
                            />

                            <FaqItem
                                question="Can you integrate new software with our existing systems?"
                                answer="Yes. We build custom APIs and integrations so your new software connects smoothly with your current accounting, CRM, payment, or third-party tools."
                            />

                            <FaqItem
                                question="Do you provide support after the software is launched?"
                                answer="Yes. We offer ongoing maintenance, monitoring, and feature updates to keep your software running smoothly as your business evolves."
                            />

                            <FaqItem
                                question="Is the software secure and compliant with data protection standards?"
                                answer="Yes. We build with encryption, secure authentication, and industry-standard compliance practices, and conduct regular security audits."
                            />

                            <FaqItem
                                question="Can the software scale as our business grows?"
                                answer="Yes. All our custom business software is architected for scalability, so it can handle increased users, data, and complexity without needing a rebuild."
                            />

                            <FaqItem
                                question="Do you work with startups as well as large enterprises?"
                                answer="Yes. We build solutions for startups needing their first internal tools as well as enterprises managing large-scale, multi-department operations."
                            />

                            <FaqItem
                                question="How do we get started with Zentrix Infotech?"
                                answer="Simply reach out through our contact page for a free consultation. We'll discuss your requirements, goals, and challenges, then propose a tailored development plan."
                            />
                        </div>

                        <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                                Related Services
                            </h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <Link
                                        href="/custom-software-development-company"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Custom Software Development Company
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
                                        href="/business-software-development-services"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Business Software Development Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/ayodhya/custom-business-software-development"
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
