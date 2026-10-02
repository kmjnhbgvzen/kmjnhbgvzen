import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "What are personalized software solutions for manufacturing?",
        answer:
            "They are custom-built systems for production, inventory, quality, dispatch, and reporting, designed around your plant's specific processes.",
    },
    {
        question: "How is custom software different from a packaged ERP?",
        answer:
            "An ERP offers fixed modules that you configure. Custom software is built to match your workflow, screens, and reports exactly.",
    },
    {
        question: "Is it suitable for small manufacturers?",
        answer:
            "Yes. Small units can start with one module, such as stores or production tracking, and add more modules later.",
    },
    {
        question: "Can it integrate with my accounting software?",
        answer:
            "Yes. We can connect with accounting, GST invoicing, and other tools you already use.",
    },
    {
        question: "How long does development take?",
        answer:
            "A focused module can take a few weeks. A full system usually takes a few months and is delivered in phases.",
    },
    {
        question: "Will my staff find it hard to use?",
        answer:
            "We design simple screens for the shop floor and provide training, so adoption stays easy.",
    },
    {
        question: "Can I use it on mobile?",
        answer:
            "Yes. Supervisors, store staff, and owners can use mobile apps or responsive web screens.",
    },
    {
        question: "Do you offer support after launch?",
        answer:
            "Yes. We provide maintenance, updates, training, and new features as your business grows.",
    },
];

function Content() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            },
            {
                "@type": "ProfessionalService",
                name: "Zentrix Infotech",
                description:
                    "Personalized software solutions for manufacturing, including production management, inventory, quality control, costing, dispatch, mobile applications, and cloud systems.",
                areaServed: ["India", "Worldwide"],
                url: "https://www.zentrixinfotech.com",
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.7",
                    bestRating: "5",
                    ratingCount: "270",
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-white pt-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <div className="flex flex-col lg:flex-row">
                <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
                    <div className="max-w-4xl space-y-8 text-gray-700 leading-relaxed">
                        <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                            Personalized Software Solutions for Manufacturing: Build Systems Around Your Shop Floor
                        </h1>

                        <p>
                            Every factory runs differently. One plant makes brass handicrafts
                            for export orders. Another makes auto components in high volume. A
                            third runs small-batch production with dozens of variants. Yet many
                            manufacturers manage all of this with a mix of spreadsheets, paper
                            registers, WhatsApp groups, and a generic accounting tool.
                        </p>

                        <p>
                            That mix works until orders grow. Then delays, stock mismatches, and
                            unclear costs begin to eat into margins.
                        </p>

                        <p>
                            Personalized software solutions for manufacturing close those gaps.
                            They are built around your products, machines, people, and workflow,
                            so information moves as smoothly as material does. This guide
                            explains where custom software helps most, what to include, and how
                            Zentrix Infotech approaches manufacturing projects.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What Are Personalized Software Solutions for Manufacturing?
                        </h2>

                        <p>
                            Personalized manufacturing software is a system designed specifically
                            for how your plant operates. It can be a complete production
                            management platform or a set of focused modules that sit alongside
                            the tools you already use.
                        </p>

                        <p>Typical building blocks include:</p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Production planning and scheduling.</li>
                            <li>Raw material and finished goods inventory.</li>
                            <li>Bill of materials, or BOM, and costing.</li>
                            <li>Quality checks and rejection tracking.</li>
                            <li>Purchase and vendor management.</li>
                            <li>Order, dispatch, and invoicing.</li>
                            <li>Maintenance records for machines.</li>
                            <li>Dashboards and reports for owners and managers.</li>
                        </ul>

                        <p>
                            Unlike a packaged ERP, custom software lets you decide the screens,
                            fields, approval steps, and reports. If your process has a unique
                            stage, such as plating, polishing, or batch curing, the system can
                            reflect it exactly.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Generic Software Often Falls Short in Manufacturing
                        </h2>

                        <p>
                            Packaged tools are built for averages. Manufacturing rarely is
                            average. Common friction points include:
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Rigid workflows:</strong> Your process has stages the
                                software does not recognise, so staff keep side notes elsewhere.
                            </li>
                            <li>
                                <strong>Heavy customisation costs:</strong> Large ERP products
                                often charge significant fees to change even small things.
                            </li>
                            <li>
                                <strong>Complex products:</strong> Items with many variants,
                                finishes, or sizes become difficult to manage in standard
                                inventory modules.
                            </li>
                            <li>
                                <strong>Poor shop-floor usability:</strong> Software designed
                                for office users can be slow and confusing for operators on a
                                busy floor.
                            </li>
                            <li>
                                <strong>Disconnected data:</strong> Sales, stores, production,
                                and accounts may each keep their own version of the truth.
                            </li>
                            <li>
                                <strong>Unused features:</strong> You pay for modules you never
                                use while missing the one report you need daily.
                            </li>
                        </ul>

                        <p>
                            The result is double entry, delayed decisions, and little visibility
                            into where time and money go.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Where Personalized Software Delivers the Most Value
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Production planning and tracking"
                                description="A custom production module can convert orders into job cards, track each stage, flag delays, and show real-time progress. Managers stop chasing updates and start solving problems."
                            />

                            <ConsultationTopic
                                title="Inventory and stores management"
                                description="Custom inventory software can track raw material, work-in-progress, and finished goods by batch or location. It can trigger reorder alerts, record issue and return slips, and reconcile stock with a few taps."
                            />

                            <ConsultationTopic
                                title="Costing and margin visibility"
                                description="With BOM-based costing, labour, wastage, and overhead can be captured against each job. Owners can see which products really make money and price new orders with confidence."
                            />

                            <ConsultationTopic
                                title="Quality control and traceability"
                                description="A quality module can record inspections at defined stages, log rejection reasons, and link defects to a batch, machine, or operator. When a customer complaint arrives, you can trace the batch back through the process instead of guessing."
                            />

                            <ConsultationTopic
                                title="Purchase and vendor management"
                                description="Request quotes, approve purchase orders, track deliveries, and compare vendor prices in one place. Over time, the data shows which suppliers deliver on time and at the right price."
                            />

                            <ConsultationTopic
                                title="Order, dispatch, and invoicing"
                                description="Connect customer orders to production, packing, and dispatch. The system can generate packing lists, GST-ready invoices, and delivery documents while updating customers on status automatically."
                            />

                            <ConsultationTopic
                                title="Machine maintenance"
                                description="Maintenance logs, service schedules, and breakdown records can reduce unplanned downtime. Even without sensors, structured maintenance data helps you plan repairs before they stop production."
                            />

                            <ConsultationTopic
                                title="Dashboards for owners and managers"
                                description="Personalised dashboards can show pending orders, completed production, stock shortages, upcoming dispatches, and outstanding payments on desktop or mobile."
                            />

                            <ConsultationTopic
                                title="Mobile apps for the floor and field"
                                description="Supervisors can update job status from a phone or tablet. Sales staff can check stock and place orders on the move. Storekeepers can scan items for issue and receipt."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Benefits for Manufacturers
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Fewer delays:</strong> Clear job tracking exposes
                                bottlenecks early.
                            </li>
                            <li>
                                <strong>Lower waste and stock cost:</strong> Better planning
                                reduces excess inventory and last-minute rush purchases.
                            </li>
                            <li>
                                <strong>Accurate costing:</strong> You can price and negotiate
                                using real numbers.
                            </li>
                            <li>
                                <strong>Better quality:</strong> Traceability helps you fix root
                                causes instead of symptoms.
                            </li>
                            <li>
                                <strong>Less manual work:</strong> Fewer registers, repeated
                                entries, and reconciliation disputes.
                            </li>
                            <li>
                                <strong>Room to scale:</strong> New products, lines, plants, or
                                sales channels can be added without starting over.
                            </li>
                            <li>
                                <strong>Ownership and control:</strong> The system evolves with
                                your business instead of being tied to a vendor's roadmap.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            How Zentrix Infotech Approaches Manufacturing Software
                        </h2>

                        <p>
                            Zentrix Infotech has delivered more than 250 projects for over 270
                            clients, with a 4.7/5 client rating. Our software development
                            service covers custom applications, internal tools, and business
                            systems, supported by web, mobile, UI/UX, and cloud expertise under
                            one roof.
                        </p>

                        <p>
                            That matters in manufacturing, where a single solution may need a
                            back-office web system, a mobile app for supervisors, and secure
                            cloud hosting.
                        </p>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="1. Understand the plant"
                                description="We learn about your products, process stages, people, and paperwork. We want to see where time, material, and information are lost today."
                            />

                            <ConsultationTopic
                                title="2. Prioritise the biggest pain"
                                description="Most manufacturers do not need everything at once. We help you pick the first module, whether that is stores, production tracking, or dispatch, so you see value early."
                            />

                            <ConsultationTopic
                                title="3. Design for the floor"
                                description="Our UI/UX team creates simple, clear screens with large buttons and minimal typing. If operators cannot use it comfortably, it fails regardless of how good the features are."
                            />

                            <ConsultationTopic
                                title="4. Build in milestones"
                                description="You see working versions regularly and can adjust the direction before costs grow."
                            />

                            <ConsultationTopic
                                title="5. Integrate and test"
                                description="We connect the system with accounting software, GST invoicing, barcode tools, or other systems you already use, then test with real data and edge cases."
                            />

                            <ConsultationTopic
                                title="6. Deploy securely"
                                description="We host the solution on scalable cloud infrastructure with access controls, backups, and monitoring."
                            />

                            <ConsultationTopic
                                title="7. Train and support"
                                description="We train your team, support go-live, and continue improving the system as your needs change."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Proven Delivery Across Industries
                        </h2>

                        <p>
                            Our portfolio spans retail and franchise platforms such as The
                            Buyzaar Mart, which manages ordering, delivery, and franchise
                            operations, along with education, healthcare, interiors, and event
                            businesses.
                        </p>

                        <p>
                            These projects share a lesson that applies directly to
                            manufacturing: software succeeds when it mirrors real operations
                            instead of forcing a template. You can browse our{" "}
                            <a
                                href="https://www.zentrixinfotech.com/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                portfolio
                            </a>{" "}
                            to see the range of our work.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What to Plan Before You Start
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Map your current process:</strong> Write down each step
                                from order to dispatch, including exceptions.
                            </li>
                            <li>
                                <strong>List your top five problems:</strong> Delays, stock
                                mismatches, costing, quality complaints, or reporting gaps.
                            </li>
                            <li>
                                <strong>Decide who will use it:</strong> Owners, supervisors,
                                store staff, accountants, and sales teams need different views.
                            </li>
                            <li>
                                <strong>Gather your data:</strong> Item lists, BOMs, vendor lists,
                                and customer lists should be cleaned before migration.
                            </li>
                            <li>
                                <strong>Nominate an internal owner:</strong> One person who can
                                answer questions and approve decisions keeps the project moving.
                            </li>
                            <li>
                                <strong>Plan for adoption:</strong> Training and a short parallel
                                run with the old system can reduce resistance.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Final Thoughts
                        </h2>

                        <p>
                            Manufacturing runs on small details: the right material at the
                            right time, the right instruction at the right station, and the
                            right number in the right report. Personalized software makes those
                            details visible and manageable without forcing your plant into a mould
                            designed for someone else.
                        </p>

                        <p>
                            Zentrix Infotech works with businesses from our offices in Moradabad
                            and Ghaziabad and serves clients across India and worldwide. Tell us
                            how your plant runs today, and we will suggest a realistic first
                            phase.
                        </p>

                        <p>
                            Ready to discuss your manufacturing software?{" "}
                            <Link
                                href="/contact"
                                className="text-blue-600 hover:underline font-semibold"
                            >
                                Contact Zentrix Infotech
                            </Link>{" "}
                            for a free consultation.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Frequently Asked Questions
                        </h2>

                        <div className="mt-6 space-y-6">
                            {faqs.map((faq) => (
                                <FaqItem
                                    key={faq.question}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>

                        <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
                            <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
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
                                        href="/custom-business-software-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Custom Business Software Development
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/services/web-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Web Development Services
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/services/mobile-development"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Mobile App Development
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Contact Zentrix Infotech
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/personalized-software-solutions-for-manufacturing"
                        />
                    </div>
                </div>

                <div className="order-2 w-full p-8 lg:order-2 lg:w-[500px]">
                    <div className="lg:sticky lg:top-28">
                        <LandingEnquiry />
                        <RecentBlog />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ConsultationTopic({ title, description }) {
    return (
        <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

function FaqItem({ question, answer }) {
    return (
        <div>
            <h3 className="mb-3 font-semibold text-gray-900">{question}</h3>
            <p className="text-gray-700">{answer}</p>
        </div>
    );
}

export default Content;
