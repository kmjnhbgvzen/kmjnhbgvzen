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
                            Custom Business Application Development Case Study: How a Retail Franchise Network Replaced Spreadsheets with One Platform
                        </h2>

                        <p>
                            Off-the-shelf software works until your business stops fitting its menus. Then teams start patching gaps with spreadsheets, WhatsApp groups and manual follow-ups, and growth begins to cost more than it earns.
                        </p>

                        <p>
                            This case study shows how Zentrix Infotech designed and delivered a custom business application for a growing retail franchise network. You will see the problem, the approach, the solution, the measurable outcomes and the lessons that apply to any business considering custom development.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Client Snapshot
                        </h2>

                        <div className="space-y-2">
                            <p><strong>Industry:</strong> Retail and franchise operations</p>
                            <p><strong>Business model:</strong> Multi-category products sold through franchise stores, with home delivery</p>
                            <p><strong>Team size:</strong> 40+ staff at headquarters, 25+ franchise outlets</p>
                            <p><strong>Project type:</strong> Custom web application with a mobile-friendly franchise portal</p>
                            <p><strong>Timeline:</strong> About 20 weeks from discovery to launch</p>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            The Challenge: Growth Outpaced the Tools
                        </h2>

                        <p>
                            The client began with a handful of stores. Orders came by phone and messaging apps, stock lived in spreadsheets, and each franchise owner reported sales by sending a daily summary. At ten outlets this was manageable. At twenty-five it was breaking.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Inventory blind spots.</strong> Headquarters could not see live stock across outlets. Popular items ran out in one store while sitting idle in another.</li>
                            <li><strong>Slow, error-prone ordering.</strong> Franchise owners placed restocking requests through chat messages. Orders were missed, duplicated or fulfilled with the wrong quantities.</li>
                            <li><strong>No delivery visibility.</strong> Customers asked where their order was, and staff had no single place to check.</li>
                            <li><strong>Painful reporting.</strong> Finance spent several days each month merging sheets to calculate franchise payouts, margins and returns.</li>
                            <li><strong>Generic software did not fit.</strong> The team had trialled two ready-made retail tools. Neither handled franchise-specific rules such as tiered pricing, outlet-level targets and territory-based delivery, and customising them cost nearly as much as building something purpose-made.</li>
                        </ul>

                        <p>
                            The leadership goal was clear: one system where orders, stock, delivery and franchise performance live together, built around how they actually work.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Our Approach: Discovery Before Code
                        </h2>

                        <p>
                            Many custom projects fail because teams start building before they understand the work. We spent the first three weeks on discovery.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Stakeholder interviews with headquarters staff, franchise owners, store managers and delivery coordinators</li>
                            <li>Workflow mapping of the real process, including the workarounds nobody had written down</li>
                            <li>Pain-point ranking to decide what to build first, based on cost and frequency</li>
                            <li>A scoped roadmap with a must-have first release and a later-phase wishlist</li>
                        </ul>

                        <p>
                            This produced a prioritised feature list and a fixed first-release scope. It also revealed something the client had not asked for: roughly a third of order errors came from unclear product naming across outlets. A single product catalogue became a core requirement.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            The Solution: One Platform, Four Connected Modules
                        </h2>

                        <p>
                            We built a custom business application organised around the client&apos;s daily workflow.
                        </p>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Central Product and Pricing Catalogue"
                                description="One master catalogue with standard product names, categories, units and tiered pricing by franchise level. Headquarters updates a price once and every outlet sees it immediately."
                            />

                            <ConsultationTopic
                                title="2. Order and Restocking Management"
                                description="Franchise owners place restocking orders through a simple portal on phone or desktop. Each order follows a clear status path: placed, approved, packed, dispatched, received. Approval rules route large orders to a manager automatically, and every action carries a timestamp and a name."
                            />

                            <ConsultationTopic
                                title="3. Live Inventory and Delivery Tracking"
                                description="Stock levels update as orders are fulfilled and sales are recorded. Low-stock alerts reach both the outlet and headquarters. For customer deliveries, coordinators assign orders to delivery staff, and customers receive status updates without calling anyone."
                            />

                            <ConsultationTopic
                                title="4. Reporting and Franchise Dashboards"
                                description="Headquarters gets a live dashboard covering sales by outlet, top and slow-moving products, order turnaround, and payout calculations. Franchise owners see only their own outlet's figures. Monthly payout reports that once took days now generate in minutes."
                            />
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                            Role-Based Access
                        </h3>

                        <p>
                            Admins, finance, store managers, franchise owners and delivery staff each see only what their role needs. This protects sensitive margin data and keeps screens simple.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Technology and Architecture Choices
                        </h2>

                        <p>
                            Technology followed requirements, not trends.
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Front end:</strong> React with Next.js for fast, responsive screens that work well on mobile networks</li>
                            <li><strong>Back end:</strong> Node.js APIs with a relational database, suited to orders, stock and financial records where consistency matters</li>
                            <li><strong>Hosting:</strong> Cloud infrastructure with automated backups and the ability to scale during seasonal peaks</li>
                            <li><strong>Integrations:</strong> Payment gateway, SMS and WhatsApp notifications, and an export layer for the accounting software</li>
                            <li><strong>Security:</strong> Encrypted data, role-based permissions, audit logs and regular backups</li>
                        </ul>

                        <p>
                            We designed the system as modular components so new features, such as a customer app or loyalty programme, can be added later without rebuilding the core.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Development Process: Small Releases, Constant Feedback
                        </h2>

                        <p>
                            We delivered in short sprints, with a working demo at the end of each one.
                        </p>

                        <div className="space-y-6">
                            <ProcessStep
                                number="Weeks 1 to 3"
                                title="Discovery, workflow mapping and scoping"
                                description=""
                            />

                            <ProcessStep
                                number="Weeks 4 to 5"
                                title="UI/UX design and clickable prototypes tested with franchise owners"
                                description=""
                            />

                            <ProcessStep
                                number="Weeks 6 to 15"
                                title="Iterative development of catalogue, ordering, inventory and reporting"
                                description=""
                            />

                            <ProcessStep
                                number="Weeks 16 to 18"
                                title="Testing, data migration and a pilot with three outlets"
                                description=""
                            />

                            <ProcessStep
                                number="Weeks 19 to 20"
                                title="Staff training, phased rollout and go-live support"
                                description=""
                            />
                        </div>

                        <p>
                            The pilot mattered most. Franchise owners found small friction points, such as an extra tap on the reorder screen and a missing unit option, that we fixed before the wider launch. Rolling out in phases kept daily business running throughout.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Results: What Changed After Launch
                        </h2>

                        <p>
                            These are the outcomes measured over the first six months. (Replace with your verified figures.)
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Order errors fell by about 70%, driven by the standard catalogue and structured ordering</li>
                            <li>Order processing time dropped from hours to minutes, since approvals and dispatch moved into one workflow</li>
                            <li>Monthly reporting time fell from roughly four days to under an hour</li>
                            <li>Stock-outs dropped by around 30%, thanks to live visibility and low-stock alerts</li>
                            <li>Delivery-status calls to staff fell sharply, freeing the team for higher-value work</li>
                            <li>Onboarding a new franchise outlet shrank from weeks to a few days, because setup is now a configured template</li>
                        </ul>

                        <p>
                            The less visible result was confidence. Leadership could finally make stocking and expansion decisions from live data instead of end-of-month guesses.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Key Lessons for Your Own Custom Application Project
                        </h2>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Start with the workflow, not the feature list. The best features come from watching how work actually happens.</li>
                            <li>Launch a focused first version. A small release that solves the biggest pain beats a giant system that arrives late.</li>
                            <li>Involve end users early. Franchise owners shaped the screens, so adoption was smooth.</li>
                            <li>Plan for change. Modular architecture lets the application grow with the business.</li>
                            <li>Measure before and after. Capture baseline numbers at the start so the return on investment is provable.</li>
                        </ul>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Is Custom Business Application Development Right for You?
                        </h2>

                        <p>
                            Custom development tends to pay off when:
                        </p>

                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Your process is a competitive advantage that generic tools cannot support</li>
                            <li>You are running critical operations on spreadsheets and manual follow-ups</li>
                            <li>Off-the-shelf tools need heavy, costly customisation</li>
                            <li>You need to integrate several systems into a single workflow</li>
                            <li>You expect to scale and cannot afford per-user licence costs to balloon</li>
                        </ul>

                        <p>
                            If your needs are simple and standard, a ready-made tool may be the smarter first step. A good development partner will tell you that honestly.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Why Businesses Choose Zentrix Infotech
                        </h2>

                        <p>
                            Zentrix Infotech is a software, web and mobile development company with 250+ projects delivered for 270+ clients across retail, healthcare, education, hospitality and services. Our approach combines clear discovery, transparent communication and modern engineering, so you get software that fits your business and keeps working as you grow.
                        </p>

                        <p>
                            Explore our <Link href="/services/software-development" className="text-blue-600 hover:underline">software development services</Link>, browse the <Link href="/portfolio" className="text-blue-600 hover:underline">portfolio</Link>, or <Link href="/contact-us" className="text-blue-600 hover:underline">contact us</Link> to discuss your project.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6 mt-6">
                            <FaqItem
                                question="1. What is custom business application development?"
                                answer="It is the process of designing and building software tailored to your specific workflows, rules and goals instead of adapting your business to a generic product."
                            />

                            <FaqItem
                                question="2. How long does a custom business application take to build?"
                                answer="Most projects take 3 to 6 months, depending on scope, integrations and the number of user roles."
                            />

                            <FaqItem
                                question="3. How much does custom application development cost?"
                                answer="Cost depends on features, complexity and timeline. A scoped discovery phase gives you an accurate estimate before you commit."
                            />

                            <FaqItem
                                question="4. Is custom software better than off-the-shelf software?"
                                answer="It is better when your processes are unique or you have outgrown generic tools. Off-the-shelf suits simple, standard needs."
                            />

                            <FaqItem
                                question="5. Can a custom application integrate with my existing tools?"
                                answer="Yes. We connect applications with payment gateways, accounting software, CRMs, messaging platforms and other systems through APIs."
                            />

                            <FaqItem
                                question="6. Will I own the source code?"
                                answer="Ownership terms are agreed in the contract. Most clients receive full rights to the code and data."
                            />

                            <FaqItem
                                question="7. Can the application scale as my business grows?"
                                answer="Yes. A modular, cloud-based architecture lets you add users, outlets and features without rebuilding."
                            />

                            <FaqItem
                                question="8. What support do you provide after launch?"
                                answer="We offer training, bug fixes, monitoring, security updates and ongoing enhancements."
                            />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Ready to Build Your Own Success Story?
                        </h2>

                        <p>
                            If spreadsheets and disconnected tools are slowing your team down, a custom business application can bring everything into one place. Share your challenge with Zentrix Infotech for a free consultation and a clear roadmap.
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
