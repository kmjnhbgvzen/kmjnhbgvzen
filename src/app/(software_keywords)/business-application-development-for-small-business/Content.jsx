import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "Can a small business afford custom application development?",
        answer:
            "Yes. Starting with one focused application and building in phases keeps the first investment manageable.",
    },
    {
        question: "What should a small business build first?",
        answer:
            "Start with the task that wastes the most time or loses the most money, such as bookings, billing, or inventory.",
    },
    {
        question: "How long does it take to build a small business app?",
        answer:
            "A focused application usually takes a few weeks. Larger systems take longer and are delivered in phases.",
    },
    {
        question: "Do I need technical knowledge?",
        answer:
            "No. You only need to describe your business. We handle the technical decisions and explain them simply.",
    },
    {
        question: "Is custom software better than ready-made tools?",
        answer:
            "Not always. Ready-made tools suit standard needs. Custom software suits unique processes or customer-facing features.",
    },
    {
        question: "Can the app work on mobile?",
        answer:
            "Yes. We build mobile-friendly web apps and Android and iOS apps.",
    },
    {
        question: "Can you add features later?",
        answer:
            "Yes. Applications can be designed to grow, so you can add features as your business expands.",
    },
    {
        question: "Do you provide support after launch?",
        answer:
            "Yes. We provide maintenance, monitoring, updates, and new feature development.",
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
                    "Business application development company helping small businesses build custom software, web applications, mobile apps, UI/UX designs, cloud solutions, integrations, and digital marketing systems.",
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
                            Business Application Development for Small Business: Start Small, Grow Smart
                        </h1>

                        <p>
                            Running a small business means doing many jobs at once. You take
                            orders, answer calls, track stock, send invoices, chase payments,
                            and keep customers happy, often with a small team and a tight
                            budget. Spreadsheets, notebooks, and chat messages hold everything
                            together until something slips through the cracks.
                        </p>

                        <p>
                            That is when many owners start asking whether a custom business
                            application could help. The honest answer is yes, if you build the
                            right thing, in the right order, at the right size.
                        </p>

                        <p>
                            This guide explains how business application development works for
                            small businesses, what to build first, how to control costs, and how
                            Zentrix Infotech helps small and growing companies turn everyday
                            problems into simple, useful software.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Small Businesses Are Turning to Custom Applications
                        </h2>

                        <p>
                            Large companies have IT departments. Small businesses have an owner,
                            a few staff, and plenty of work. The right application acts like an
                            extra team member that never forgets, never tires, and reduces manual
                            errors.
                        </p>

                        <p>Common signs it is time for an application include:</p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>You re-enter the same information in several places.</li>
                            <li>Orders, bookings, or enquiries get lost or double-booked.</li>
                            <li>Stock counts do not match what is on the shelf.</li>
                            <li>You spend evenings preparing invoices and reports.</li>
                            <li>Customers keep calling to ask for status updates.</li>
                            <li>
                                You cannot see how the business is doing without asking several
                                people.
                            </li>
                            <li>Your growth is limited by how much you can handle manually.</li>
                        </ul>

                        <p>
                            If two or three of these sound familiar, an application may pay for
                            itself through saved time and fewer mistakes.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What Small Business Applications Can Do
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Booking and appointment systems"
                                description="Clinics, salons, institutes, resorts, and service businesses can let customers book online, receive reminders, and pay in advance. This can reduce no-shows and phone calls."
                            />

                            <ConsultationTopic
                                title="Online ordering and e-commerce"
                                description="Bakeries, spice sellers, pharmacies, and retailers can accept orders, payments, and delivery details online through a simple customer experience."
                            />

                            <ConsultationTopic
                                title="Inventory and billing"
                                description="Track stock across shelves or branches, issue GST-ready invoices, and see what is selling, running low, or tied up in unsold items."
                            />

                            <ConsultationTopic
                                title="Customer management"
                                description="Keep enquiries, follow-ups, quotations, and purchase history in one place so no lead is forgotten and every customer feels remembered."
                            />

                            <ConsultationTopic
                                title="Staff and task management"
                                description="Assign jobs, track attendance, record work completed, and approve leave without relying on paper registers."
                            />

                            <ConsultationTopic
                                title="Dealer, franchise, and vendor portals"
                                description="Let dealers or franchise partners place orders, view prices, and track deliveries without calling your team."
                            />

                            <ConsultationTopic
                                title="Reports and dashboards"
                                description="See sales, collections, stock, and enquiries on one screen, including from your phone."
                            />

                            <ConsultationTopic
                                title="Mobile apps"
                                description="Give field staff, delivery teams, or customers a simple app for orders, updates, and tracking."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Build, Buy, or Combine: What Makes Sense for a Small Business?
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Buy ready-made software:</strong> Choose this when your
                                process is standard and a low-cost tool does the job well.
                            </li>
                            <li>
                                <strong>Build custom software:</strong> Choose this when your
                                process is unusual, several tools do not communicate, or the
                                application is part of your customer experience.
                            </li>
                            <li>
                                <strong>Combine both:</strong> Use a ready-made core and add
                                custom features or integrations around it.
                            </li>
                        </ul>

                        <p>
                            A good development partner will tell you honestly which route fits.
                            If a ready-made tool is enough, using it is the smart choice.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What to Build First: Start With the Biggest Pain
                        </h2>

                        <ol className="ml-4 list-decimal list-inside space-y-2">
                            <li>
                                <strong>List your daily frustrations:</strong> Identify what
                                wastes the most time or causes the most mistakes.
                            </li>
                            <li>
                                <strong>Rank them by cost:</strong> Find the problem that loses
                                the most money or customers.
                            </li>
                            <li>
                                <strong>Pick one:</strong> Choose the problem where a simple
                                tool would help most.
                            </li>
                            <li>
                                <strong>Define success:</strong> For example, online bookings
                                replace half of phone calls or invoices go out the same day.
                            </li>
                            <li>
                                <strong>Launch small, then grow:</strong> Add features and
                                modules as you see results.
                            </li>
                        </ol>

                        <p>
                            This approach is often called building a minimum viable product, or
                            MVP. It keeps the first investment manageable and gives you
                            feedback from real use.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            How to Keep Business Application Development Affordable
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Prioritise must-have features:</strong> Separate
                                essentials from nice-to-haves.
                            </li>
                            <li>
                                <strong>Phase the project:</strong> Build stage by stage so
                                benefits from the first release can help fund the next.
                            </li>
                            <li>
                                <strong>Prepare requirements:</strong> Clear notes, sample
                                forms, spreadsheets, and workflow descriptions reduce discovery
                                time.
                            </li>
                            <li>
                                <strong>Use proven components:</strong> Login, payment, and
                                notification systems do not need to be reinvented.
                            </li>
                            <li>
                                <strong>Choose cloud hosting:</strong> Start small and pay for
                                what you use without buying servers.
                            </li>
                            <li>
                                <strong>Decide quickly:</strong> Fast feedback helps keep
                                timelines short.
                            </li>
                            <li>
                                <strong>Avoid constant scope changes:</strong> Late changes are
                                a common reason budgets grow.
                            </li>
                            <li>
                                <strong>Choose value over the lowest quote:</strong> Cheap work
                                that needs rebuilding is often the most expensive option.
                            </li>
                        </ul>

                        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                            <p className="font-semibold text-gray-900">
                                Focused small-business applications are scoped after a free
                                consultation and requirements review.
                            </p>
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Features That Matter Most to Small Businesses
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Simplicity:</strong> If staff need long training, the
                                application may not be used.
                            </li>
                            <li>
                                <strong>Mobile-friendly design:</strong> Owners and staff often
                                work from phones.
                            </li>
                            <li>
                                <strong>Local needs:</strong> UPI and wallet payments, GST
                                invoices, regional languages, and WhatsApp updates.
                            </li>
                            <li>
                                <strong>Easy reporting:</strong> A few clear numbers are often
                                better than complex charts.
                            </li>
                            <li>
                                <strong>Security basics:</strong> Role-based access, backups,
                                and secure hosting.
                            </li>
                            <li>
                                <strong>Room to grow:</strong> The ability to add users,
                                branches, and features later.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Common Mistakes Small Businesses Make
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Trying to build everything at once.</li>
                            <li>Starting with technology instead of the problem.</li>
                            <li>Skipping design and user feedback.</li>
                            <li>Choosing a partner based on price alone.</li>
                            <li>Not agreeing on code and data ownership.</li>
                            <li>Forgetting staff training.</li>
                            <li>Ignoring hosting and maintenance costs.</li>
                            <li>
                                Expecting software to fix a broken process without changing the
                                process.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What to Look for in a Development Partner
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Experience with small businesses:</strong> They
                                understand tight budgets and practical priorities.
                            </li>
                            <li>
                                <strong>Live, verifiable projects:</strong> Open their work and
                                test it.
                            </li>
                            <li>
                                <strong>A clear process:</strong> Discovery, design, milestones,
                                testing, and support.
                            </li>
                            <li>
                                <strong>Transparent pricing:</strong> Written scope, phases, and
                                included services.
                            </li>
                            <li>
                                <strong>Good design:</strong> Simple screens your team will
                                actually use.
                            </li>
                            <li>
                                <strong>Post-launch support:</strong> Software needs updates,
                                fixes, and improvements.
                            </li>
                            <li>
                                <strong>Honest advice:</strong> A partner who says you do not
                                need something yet is worth keeping.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            How Zentrix Infotech Helps Small Businesses
                        </h2>

                        <p>
                            Zentrix Infotech is an IT solutions company offering software
                            development, web development, mobile app development, UI/UX design,
                            cloud solutions, and digital marketing. We have completed more than
                            250 projects for over 270 clients and hold a 4.7/5 client rating.
                            Our offices are in Moradabad and Ghaziabad, and we serve clients
                            across India and worldwide.
                        </p>

                        <p>
                            Many of our clients are small and growing businesses, including a
                            pharmacy, bakery, spice store, resort, events company, and tiles
                            dealer. That experience shapes how we work: practical, focused, and
                            built around real business results.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            Our Approach
                        </h3>

                        <ol className="ml-4 list-decimal list-inside space-y-2">
                            <li>
                                <strong>Free consultation:</strong> We listen to your daily
                                challenges and goals without jargon.
                            </li>
                            <li>
                                <strong>Focused first release:</strong> We help you choose the
                                application that will help most and scope it clearly.
                            </li>
                            <li>
                                <strong>Simple, clear design:</strong> Our designers create
                                easy-to-use screens for you and your staff.
                            </li>
                            <li>
                                <strong>Milestone-based development:</strong> You see working
                                progress regularly and can guide the project early.
                            </li>
                            <li>
                                <strong>Integration and testing:</strong> We connect payments,
                                accounting, and messaging tools and test carefully.
                            </li>
                            <li>
                                <strong>Affordable cloud deployment:</strong> We launch on
                                secure, scalable infrastructure that grows with you.
                            </li>
                            <li>
                                <strong>Training and support:</strong> We help your team adopt
                                the system and continue supporting it.
                            </li>
                        </ol>

                        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            Our Work
                        </h3>

                        <p>
                            The Buyzaar Mart is a retail franchise platform with multi-category
                            ordering, delivery management, and franchise operations. HerbsFox is
                            an online marketplace for organic herbs and spices. Jigyasa
                            Hospital&apos;s team said the site is clean, professional, and makes
                            appointment booking easy. Southern Palate described its spice
                            e-commerce site as easy for customers to browse and order.
                        </p>

                        <p>
                            See more in our{" "}
                            <a
                                href="https://www.zentrixinfotech.com/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                portfolio
                            </a>
                            .
                        </p>

                        <p>
                            Explore the services behind the process:{" "}
                            <a
                                href="https://www.zentrixinfotech.com/services/software-development"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Software Development
                            </a>
                            ,{" "}
                            <a
                                href="https://www.zentrixinfotech.com/services/web-development"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Web Development
                            </a>
                            ,{" "}
                            <a
                                href="https://www.zentrixinfotech.com/services/mobile-development"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Mobile App Development
                            </a>
                            ,{" "}
                            <a
                                href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                UI/UX Designing
                            </a>
                            ,{" "}
                            <a
                                href="https://www.zentrixinfotech.com/services/cloud-solutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Cloud Solutions
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://www.zentrixinfotech.com/services/digital-marketing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Digital Marketing
                            </a>
                            .
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Final Thoughts
                        </h2>

                        <p>
                            You do not need a large budget or an IT department to benefit from
                            custom software. You need a clear problem, a focused first release,
                            and a partner who builds with your business in mind. Start with the
                            task that costs you the most time, fix it well, and grow from there.
                        </p>

                        <p>
                            Tell us what slows your business down. Zentrix Infotech will suggest
                            a realistic first step with a clear scope and estimate.
                        </p>

                        <p>
                            Ready to get started?{" "}
                            <Link
                                href="/contact"
                                className="font-semibold text-blue-600 hover:underline"
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
                                        href="/services/cloud-solutions"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Cloud Solutions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/business-application-development-for-small-business"
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
