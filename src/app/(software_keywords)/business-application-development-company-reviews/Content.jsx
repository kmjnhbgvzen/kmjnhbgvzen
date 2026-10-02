import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
    {
        question: "How do I check reviews of a business application development company?",
        answer:
            "Check Google, Clutch, GoodFirms, and LinkedIn, then test live projects and ask for client references.",
    },
    {
        question: "Are testimonials on a company website reliable?",
        answer:
            "They are a starting point. Verify them by visiting live projects and contacting named clients where possible.",
    },
    {
        question: "How can I spot fake reviews?",
        answer:
            "Watch for sudden bursts of five-star ratings, vague praise, repeated phrases, and reviewers with no history.",
    },
    {
        question: "What do clients say about Zentrix Infotech?",
        answer:
            "Clients mention clean, professional design, easy-to-use platforms, and practical results such as more enquiries, bookings, and orders.",
    },
    {
        question: "Can I speak to a past Zentrix client?",
        answer:
            "Yes. Ask us and we can arrange references where clients agree.",
    },
    {
        question: "Is a perfect five-star rating a good sign?",
        answer:
            "Not always. Look at the number of reviews, their detail, and whether the company handles criticism well.",
    },
    {
        question: "Does Zentrix offer support after launch?",
        answer:
            "Yes. We provide maintenance, monitoring, updates, and new feature development.",
    },
    {
        question: "How do I start a project with Zentrix?",
        answer:
            "Contact us for a free consultation. We review your requirements and provide a written scope and estimate.",
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
                    "Business application development company offering software development, web development, mobile app development, UI/UX design, cloud solutions, and digital marketing.",
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
                            Business Application Development Company Reviews: How to Read Them and What Clients Say
                        </h1>

                        <p>
                            Before hiring a business application development company, almost
                            everyone does the same thing: search for reviews. It makes sense. A
                            custom application is a serious investment, and you are trusting a
                            team with your workflow, your data, and often your customers.
                        </p>

                        <p>
                            But reviews can mislead as easily as they can help. A perfect score
                            may hide a small number of friendly ratings. A harsh review may come
                            from a project that was never a good fit. This guide explains how to
                            read business application development company reviews intelligently,
                            what to look for beyond star ratings, and what clients say about
                            Zentrix Infotech.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Why Reviews Matter When Hiring an Application Developer
                        </h2>

                        <p>
                            Software is an intangible product. You cannot hold it or test-drive
                            it before you commit. Reviews give you a window into how a company
                            behaves once the contract is signed, including how it communicates,
                            handles problems, and delivers work.
                        </p>

                        <p>Good reviews help answer questions a sales call cannot:</p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Does the team deliver what it promises?</li>
                            <li>How does it respond when something goes wrong?</li>
                            <li>
                                Are clients happy months after launch, not only on launch day?
                            </li>
                            <li>Do customers find the finished product easy to use?</li>
                        </ul>

                        <p>
                            Reviews also help you avoid expensive mistakes. A poor partner can
                            cost far more in rework and delays than the original quote.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Where to Find Honest Reviews
                        </h2>

                        <ol className="ml-4 list-decimal list-inside space-y-2">
                            <li>
                                <strong>Google Business Profile:</strong> Check the number of
                                reviews, their dates, and whether the company responds.
                            </li>
                            <li>
                                <strong>Independent directories:</strong> Platforms such as
                                Clutch and GoodFirms may provide project details and client
                                feedback.
                            </li>
                            <li>
                                <strong>LinkedIn:</strong> Recommendations from named people,
                                company activity, and employee profiles can help verify the
                                organisation.
                            </li>
                            <li>
                                <strong>Client testimonials:</strong> Treat website testimonials
                                as a starting point and look for named clients, details, and live
                                websites.
                            </li>
                            <li>
                                <strong>Direct references:</strong> Ask the company for two or
                                three past clients you can contact.
                            </li>
                            <li>
                                <strong>The company&apos;s own work:</strong> Open portfolio
                                projects and test their speed, design, and usability yourself.
                            </li>
                        </ol>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            How to Spot a Genuine Review
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Specific details:</strong> The review mentions what was
                                built, how long it took, or how a challenge was handled.
                            </li>
                            <li>
                                <strong>Balanced tone:</strong> It may mention a small issue
                                alongside positive feedback.
                            </li>
                            <li>
                                <strong>Named, traceable people:</strong> Names, business
                                details, and links can be verified.
                            </li>
                            <li>
                                <strong>Natural timing:</strong> Reviews appear gradually
                                instead of arriving in a sudden burst.
                            </li>
                            <li>
                                <strong>Varied language:</strong> Different clients describe
                                their experiences in different ways.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Warning Signs of Fake or Misleading Reviews
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>A flood of five-star reviews posted within a few days.</li>
                            <li>Generic praise with no useful detail.</li>
                            <li>Reviewers with no profile history.</li>
                            <li>Identical phrases repeated across reviews.</li>
                            <li>No negative or mixed feedback at all.</li>
                            <li>
                                Testimonials without names, companies, or ways to verify them.
                            </li>
                        </ul>

                        <p>
                            If something feels too perfect, dig deeper. Ask for references and
                            check live work.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What to Look for Beyond the Star Rating
                        </h2>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Communication"
                                description="Check whether the team explained things clearly, responded promptly, and gave honest updates."
                            />

                            <ConsultationTopic
                                title="Delivery"
                                description="Look for evidence that projects were completed on time and within the agreed scope."
                            />

                            <ConsultationTopic
                                title="Quality"
                                description="Review whether the application works smoothly, looks professional, and suits its intended users."
                            />

                            <ConsultationTopic
                                title="Understanding of the business"
                                description="The provider should understand the client workflow instead of forcing a generic solution."
                            />

                            <ConsultationTopic
                                title="Problem handling"
                                description="Look for how the company handled changing requirements, unexpected issues, or project risks."
                            />

                            <ConsultationTopic
                                title="Support after launch"
                                description="Check whether the company continues helping clients with maintenance, fixes, and improvements."
                            />

                            <ConsultationTopic
                                title="Results"
                                description="Look for practical benefits such as more enquiries, easier booking, saved time, improved visibility, or increased orders."
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            How to Read Negative Reviews Fairly
                        </h2>

                        <p>
                            Every established company will have a few critical comments. What
                            matters is the pattern and the response.
                        </p>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Look for patterns:</strong> One complaint may be an
                                isolated incident, while repeated complaints may indicate a
                                genuine issue.
                            </li>
                            <li>
                                <strong>Check the response:</strong> See whether the company
                                replied professionally and tried to resolve the matter.
                            </li>
                            <li>
                                <strong>Consider the context:</strong> Some complaints result
                                from mismatched expectations or unclear scope.
                            </li>
                            <li>
                                <strong>Compare severity:</strong> Slow replies are different
                                from lost data or unpaid developers.
                            </li>
                        </ul>

                        <p>
                            A company that handles criticism gracefully may be safer than one
                            with no criticism at all.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What Clients Say About Zentrix Infotech
                        </h2>

                        <p>
                            Zentrix Infotech is an IT solutions company offering software
                            development, web development, mobile app development, UI/UX design,
                            cloud solutions, and digital marketing. We have completed more than
                            250 projects for over 270 clients and maintain a 4.7/5 client
                            rating.
                        </p>

                        <p>
                            The examples below show the type of feedback shared by clients in
                            different industries:
                        </p>

                        <div className="space-y-6">
                            <ConsultationTopic
                                title="Healthcare"
                                description="Dr. C. P. Singh of Jigyasa Hospital described the website as clean and professional, with appointment booking that is easy for patients. He also noted a consistent rise in patient enquiries through Google and social media."
                            />

                            <ConsultationTopic
                                title="Hospitality"
                                description="Mr. Rishabh Singhal of Kairvi Fort Resort found the site elegant and functional and reported that digital campaigns brought a noticeable boost in bookings during peak seasons."
                            />

                            <ConsultationTopic
                                title="Events and design"
                                description="Mr. Rounak Shukla of PS Decor said the website showcases wedding projects well and helped bring in more client enquiries. Mrs. Charu Shukla of Vasterior Pvt. Ltd. said the website looks modern and professional and presents their interiors beautifully."
                            />

                            <ConsultationTopic
                                title="E-commerce and retail"
                                description="Feedback from HerbsFox, Southern Palate, and The Buyzaar Mart mentions clean presentation, easy browsing, ordering, and marketing support for retail franchise growth."
                            />

                            <ConsultationTopic
                                title="Education"
                                description="Mr. Rakesh Kumar Mishra of KDEDU.in said the college website is informative and gives students and faculty easy access to essential resources."
                            />

                            <ConsultationTopic
                                title="Local businesses"
                                description="Clients such as Ahlawat Pharmacy and Jai Balaji Bath and Tiles described improved local visibility and steady enquiries after working with the digital marketing team."
                            />
                        </div>

                        <p>
                            You can verify much of this yourself by visiting the live projects in
                            our{" "}
                            <a
                                href="https://www.zentrixinfotech.com/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                portfolio
                            </a>
                            , including The Buyzaar Mart, HerbsFox, KDEDU, PS Decor, and
                            Vasterior.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            What the Pattern Tells You
                        </h2>

                        <p>
                            Across industries, a few themes repeat in client feedback: clean
                            and professional design, ease of use for customers, and practical
                            business results such as enquiries, bookings, and orders.
                        </p>

                        <p>
                            This reflects how we work. We aim to build software and websites
                            that are simple to use and tied to a business outcome, not just a
                            technical specification.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            How Zentrix Earns Good Reviews: Our Process
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <strong>Discovery first:</strong> We learn your goals, users,
                                and workflow before suggesting features or quoting a price.
                            </li>
                            <li>
                                <strong>Written scope and estimate:</strong> You receive
                                deliverables, milestones, timelines, and cost in a clear
                                document.
                            </li>
                            <li>
                                <strong>UI/UX design before coding:</strong> You approve layouts
                                and flows early, which helps prevent costly changes later.
                            </li>
                            <li>
                                <strong>Milestone-based development:</strong> Regular demos show
                                working progress so you can guide the project.
                            </li>
                            <li>
                                <strong>Integration and testing:</strong> We test functionality,
                                performance, security, and compatibility with realistic data.
                            </li>
                            <li>
                                <strong>Secure cloud deployment:</strong> Backups, monitoring,
                                and access controls are part of launch.
                            </li>
                            <li>
                                <strong>Training and support:</strong> We help your team adopt
                                the system and continue to maintain and improve it.
                            </li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            Services Behind the Process
                        </h3>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>
                                <Link
                                    href="/services/software-development"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Software Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/web-development"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/mobile-development"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Mobile App Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/ui-ux-designing"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    UI/UX Designing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/cloud-solutions"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Cloud Solutions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/digital-marketing"
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Digital Marketing
                                </Link>
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Questions to Ask Beyond Reviews
                        </h2>

                        <ul className="ml-4 list-disc list-inside space-y-2">
                            <li>Can I see live projects similar to mine?</li>
                            <li>Can I speak to a past client directly?</li>
                            <li>
                                Who will work on my project, and how experienced are they?
                            </li>
                            <li>How do you handle scope changes?</li>
                            <li>What support do you provide after launch?</li>
                            <li>Who owns the source code and data?</li>
                        </ul>

                        <p>
                            The answers, combined with reviews and live work, give you a more
                            reliable picture.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Final Thoughts
                        </h2>

                        <p>
                            Business application development company reviews are most useful
                            when you read them with a critical eye. Look for specifics, patterns,
                            and responses, then confirm what you read by testing live projects
                            and speaking to real clients. Stars alone never tell the full story.
                        </p>

                        <p>
                            We invite you to do exactly that with Zentrix Infotech. Explore our
                            portfolio, read what clients say, ask us for references, and share
                            your requirements. We will give you a clear plan and an honest
                            estimate.
                        </p>

                        <p>
                            Ready to talk?{" "}
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
                                        href="/enterprise-software-development-services"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Enterprise Software Development Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <CityInternalLinks
                            city="ayodhya"
                            currentSlug="/business-application-development-company-reviews"
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
