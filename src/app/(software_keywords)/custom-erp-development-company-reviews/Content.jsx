import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
  {
    question: "Where can I find honest custom ERP development company reviews?",
    answer: "Check Google Business Profile, independent directories like Clutch or GoodFirms, LinkedIn company endorsements, and direct client reference interviews.",
  },
  {
    question: "How do I spot fake reviews for ERP companies?",
    answer: "Look for similar robotic wording, sudden bursts of identical 5-star ratings, lack of verified company names, and vague praise without specific module or workflow details.",
  },
  {
    question: "Is a high star rating alone enough to choose an ERP partner?",
    answer: "No. Ensure the reviews specifically describe complex business software or ERP deployments, not just simple marketing websites or graphic design work.",
  },
  {
    question: "Can I speak to Zentrix Infotech's previous ERP clients?",
    answer: "Yes. Zentrix can arrange direct reference calls and live software walkthroughs on request during your free consultation.",
  },
  {
    question: "What is Zentrix Infotech's client rating?",
    answer: "Zentrix holds a 4.7/5 average client satisfaction rating with over 250+ delivered projects across 270+ clients.",
  },
  {
    question: "What should I ask an ERP development company besides reading reviews?",
    answer: "Ask to see working software demos, request a fixed milestone-based proposal, verify source code ownership terms, and check post-launch SLA support.",
  },
];

const Content = () => {
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
          "Custom ERP development company reviews guide and IT software engineering partner delivering tailored enterprise solutions in India.",
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
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-0 order-1 lg:order-1">
          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Custom ERP Development Company Reviews: How to Separate Real Feedback from Marketing
            </h1>

            <p>
              You are about to trust a company with your stock, accounts, staff data and daily operations. So it is natural to search for &quot;custom ERP development company reviews&quot; before you sign anything.
            </p>

            <p>
              But reviews are tricky. Some are genuine and useful. Some are written by the company itself. Some describe a completely different service, such as a logo or a landing page, and tell you nothing about how the company handles a complex software project.
            </p>

            <p>
              This guide shows how to find reliable reviews, how to read them, how to spot warning signs, and what to ask when reviews alone are not enough.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why ERP Reviews Matter More Than Most Software Reviews
            </h2>

            <p>
              Choosing a website designer is a small risk. If the result is poor, you redo it. An ERP is different:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>It runs for years and touches every department.</li>
              <li>Data migration, training and workflow changes involve your whole team.</li>
              <li>Switching vendors halfway is expensive and disruptive.</li>
              <li>Mistakes show up in money: wrong stock, wrong invoices, missed payments.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Where to Find Reliable Reviews
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Business Profile:</strong> Search the company name on Google and Maps. Look at the rating, the number of reviews, the dates, and whether the owner replies.</li>
              <li><strong>Independent B2B platforms:</strong> Directories such as Clutch and GoodFirms collect verified client feedback on IT companies.</li>
              <li><strong>LinkedIn:</strong> Look at the company page, the core development team, and employee endorsements.</li>
              <li><strong>The company&apos;s own website:</strong> Testimonials and case studies are useful, but look for named clients, specific projects, and verifiable details.</li>
              <li><strong>Direct client references:</strong> Ask the company for two or three clients you can speak with directly.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How to Read an ERP Review Properly
            </h2>

            <div className="space-y-6">
              <ConsultationTopic
                title="Look for specifics"
                description="Strong reviews mention what was built, how long it took, how the team communicated and what changed afterwards. &quot;Great company, highly recommended&quot; says nothing. &quot;They moved our stock and billing out of Excel in three months and trained our staff on site&quot; says a lot."
              />

              <ConsultationTopic
                title="Check that the review matches the service"
                description="A review praising a beautiful website is genuine feedback, but it doesn't prove ERP expertise. Look for comments about business software, workflows, data migration, reports and support."
              />

              <ConsultationTopic
                title="Notice what is mentioned about problems"
                description="Every project has hurdles. The best reviews describe how the company handled them, such as changing requirements, delays or bugs found after launch. A company with only perfect, problem-free stories deserves a little scepticism."
              />

              <ConsultationTopic
                title="Check the dates"
                description="Recent reviews matter most. A company can change in a few years, and old praise may no longer apply."
              />

              <ConsultationTopic
                title="Read the negative reviews"
                description="Look at the one- and two-star comments. Are the complaints about communication, hidden charges, missed deadlines or poor support? Also read how the company responded. A calm, professional reply shows maturity."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Beyond Reviews: A Practical Verification Checklist
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Track record:</strong> How many projects has the company delivered, and for which industries?</li>
              <li><strong>Team:</strong> Are developers, designers and project managers in-house?</li>
              <li><strong>Process:</strong> Do they follow a clear path of discovery, scope, design, development, testing and support?</li>
              <li><strong>Pricing:</strong> Is the quotation itemised and fixed, with hosting and maintenance stated?</li>
              <li><strong>Contract:</strong> Does it cover full code ownership, timelines, payment milestones and support terms?</li>
              <li><strong>First impression:</strong> Did they listen before pitching and tell you what to leave for later?</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Clients Say About Zentrix Infotech
            </h2>

            <p>
              Zentrix Infotech is an IT solutions company with offices in Moradabad and Ghaziabad. It has delivered 250+ projects for 270+ clients and holds a 4.7/5 client rating.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Professional, intuitive interfaces:</strong> Systems designed for easy staff adoption with minimal training needed.</li>
              <li><strong>Tangible business ROI:</strong> Reduced inventory leakage, accelerated month-end reconciliations, and automated invoicing.</li>
              <li><strong>Transparent partnership:</strong> Direct access to lead architects and project managers via phone and WhatsApp.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Talk to Zentrix and Judge for Yourself
            </h2>

            <p>
              The best review is your own experience. Book a free consultation, ask your hardest questions and see how our engineering team responds.
            </p>

            <p>
              Call: +91 72488 00839 | +91 63970 36898
            </p>

            <p>
              Email:{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <p>
              WhatsApp: +91 63970 36898
            </p>

            <p>
              <Link
                href="/contact"
                className="text-blue-600 hover:underline font-semibold"
              >
                Book a Free Consultation &rarr;
              </Link>
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Related Services
              </h3>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link
                    href="/custom-erp-development-cost-india"
                    className="text-blue-600 hover:underline"
                  >
                    Custom ERP Development Cost in India
                  </Link>
                </li>

                <li>
                  <Link
                    href="/erp-development-company-near-me"
                    className="text-blue-600 hover:underline"
                  >
                    ERP Development Company Near Me
                  </Link>
                </li>

                <li>
                  <Link
                    href="/how-to-choose-custom-erp-development-company"
                    className="text-blue-600 hover:underline"
                  >
                    How to Choose a Custom ERP Development Company
                  </Link>
                </li>

                <li>
                  <Link
                    href="/custom-erp-development-for-small-business"
                    className="text-blue-600 hover:underline"
                  >
                    Custom ERP Development for Small Business
                  </Link>
                </li>

                <li>
                  <Link
                    href="/portfolio"
                    className="text-blue-600 hover:underline"
                  >
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/software-development"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Services
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/custom-erp-development-company-reviews"
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
      <h3 className="font-semibold text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}

export default Content;
