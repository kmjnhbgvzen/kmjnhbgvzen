import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I agree before hiring an SEO expert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agree your main outcome, the scope, measures, reporting format, timeline and who owns the accounts.",
      },
    },
    {
      "@type": "Question",
      name: "Which measures should I track?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calls, form fills, WhatsApp clicks, direction requests and key page visits matter more than rankings alone.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early improvements often appear within a few months. Stronger results usually build over a longer period.",
      },
    },
    {
      "@type": "Question",
      name: "Can an SEO expert guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search results change often, so no honest expert can guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I review progress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monthly. A short review keeps the work accountable and the plan up to date.",
      },
    },
    {
      "@type": "Question",
      name: "What do I need to provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website and Google access, business details, quick feedback and genuine customer reviews over time.",
      },
    },
    {
      "@type": "Question",
      name: "Should I own my Google accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your Google Business Profile, Analytics and Search Console should always stay in your name.",
      },
    },
    {
      "@type": "Question",
      name: "Can the expert fix my website too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the provider. At Zentrix Infotech we build websites, so we can fix issues directly.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech have a Lucknow office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings, WhatsApp and online reports.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com. We will review your website and suggest a plan.",
      },
    },
  ],
};


const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />


      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Hire an SEO Expert in Lucknow: Agree the Outcomes Before You
              Start
            </h2>


            <p>
              Most businesses decide to hire an SEO expert after a good
              conversation. The expert sounds confident, the proposal looks
              professional and the first month feels busy. Then, six months
              later, the owner asks a simple question: &ldquo;Is this
              working?&rdquo; And nobody can answer clearly.
            </p>


            <p>
              This usually happens because the hire began without agreed
              outcomes. The fix is simple: decide what success looks like
              before the work starts. This page shows you how to hire an SEO
              expert in Lucknow with a clear scope, sensible measures and
              honest reviews. It also explains how Zentrix Infotech works, so
              you can compare us fairly against any other option.
            </p>


            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free SEO Consultation
              </Link>
            </p>


            <p>
              <strong>Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              | <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>{" "}
              | <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start With the Outcome
            </h3>


            <p>SEO is a means, not a goal. What you really want might be:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>More phone calls and walk-ins.</li>
              <li>More enquiries or quote requests.</li>
              <li>More online orders.</li>
              <li>More appointments or bookings.</li>
              <li>Stronger visibility in your local area.</li>
            </ul>


            <p>
              Write your main outcome in one sentence, for example:
              &ldquo;I want more people in Lucknow to call us about our
              services.&rdquo; This sentence guides the whole project and keeps
              everyone focused.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What an SEO Expert Should Deliver
            </h3>


            <p>
              Before you sign, make sure the work is described in terms of
              deliverables, not vague promises. A solid scope usually includes:
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Foundation Work (One-Time)
            </h4>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                A full audit of your website, Google Business Profile and
                competitors.
              </li>
              <li>
                A keyword plan based on how your customers search.
              </li>
              <li>
                Technical fixes for speed, mobile layout, structure and
                security.
              </li>
              <li>
                Setup or improvement of your Google Business Profile.
              </li>
              <li>
                Tracking for calls, forms and WhatsApp clicks.
              </li>
            </ul>


            <h4 className="text-lg font-semibold text-gray-900">
              Ongoing Work (Monthly)
            </h4>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                New or improved service pages and helpful content.
              </li>
              <li>
                Local SEO updates and review guidance.
              </li>
              <li>
                Quality listings and authority building.
              </li>
              <li>
                Monitoring, reporting and adjustments.
              </li>
            </ul>


            <p>
              Ask the expert to mark which items are one-time and which are
              monthly, so there are no surprises.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Measures That Matter
            </h3>


            <p>
              Rankings are useful, but they are not the full story. A business
              owner cares about actions. Here are measures worth agreeing on:
            </p>


            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border border-gray-200 text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Measure
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      What it tells you
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Calls from Google profile
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Whether local visibility is turning into contact
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Form submissions and WhatsApp clicks
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Whether the website converts visitors
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Direction requests
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Whether people plan to visit
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Organic visits to key pages
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Whether important pages are being found
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Keyword visibility for chosen terms
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Whether you appear for the right searches
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Review count and rating trend
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Whether trust is growing
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Page speed and mobile experience
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Whether the site is healthy
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            <p>
              Choose a small set of measures that fit your goal. Too many
              numbers hide the story.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Be Realistic About Targets
            </h3>


            <p>
              It is tempting to ask for a number, such as &ldquo;double my
              leads in three months.&rdquo; But SEO outcomes depend on
              competition, your starting position, your industry, your budget
              and the quality of your website. Honest experts avoid exact
              promises. Instead, agree on:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Process targets:</strong> What will be completed and
                when, such as audit by week two, key pages updated by month
                two.
              </li>
              <li>
                <strong>Direction targets:</strong> Which measures should move
                in a positive direction over time.
              </li>
              <li>
                <strong>Review points:</strong> Dates when you assess the data
                together and adjust.
              </li>
            </ul>


            <p>
              This approach is fairer to both sides and keeps the focus on
              steady improvement.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Six-Month Roadmap You Can Expect
            </h3>


            <p>
              Every business differs, but a healthy project often follows a
              pattern like this.
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Month 1: Audit and foundation.</strong> Access, audit,
                keyword plan, tracking and the first technical fixes.
              </li>
              <li>
                <strong>Month 2: Core pages and local setup.</strong> Improve
                main service pages, complete the Google profile and begin a
                review routine.
              </li>
              <li>
                <strong>Month 3: Content and first review.</strong> Publish new
                helpful content, check early data and adjust the plan.
              </li>
              <li>
                <strong>Month 4: Expand.</strong> Add pages for secondary
                services or areas, strengthen listings and continue content.
              </li>
              <li>
                <strong>Month 5: Refine.</strong> Improve pages that get visits
                but few enquiries, and fix new issues.
              </li>
              <li>
                <strong>Month 6: Review and plan ahead.</strong> Compare
                results with your starting point, review what worked and set
                the next six months.
              </li>
            </ul>


            <p>
              Some businesses see early movement within a few months, while
              others in crowded markets need longer. A good expert explains
              what is realistic for you.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Monthly Review: Questions to Ask
            </h3>


            <p>
              A short monthly conversation keeps everyone accountable. Ask:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>What was completed this month?</li>
              <li>What changed in calls, enquiries and visibility?</li>
              <li>What worked and what did not?</li>
              <li>What will you do next month, and why?</li>
              <li>Is there anything you need from me?</li>
              <li>
                Has anything changed in the market or in Google&rsquo;s
                behaviour that affects the plan?
              </li>
            </ul>


            <p>
              You should come away with a clear picture, not a pile of
              screenshots.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Simple Scorecard for Your Expert
            </h3>


            <p>
              Use this to judge how the relationship is going. Rate each point
              as strong, fair or weak.
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Communication:</strong> Are questions answered promptly
                and clearly?
              </li>
              <li>
                <strong>Delivery:</strong> Is the agreed work completed on
                time?
              </li>
              <li>
                <strong>Transparency:</strong> Do reports show real actions,
                including setbacks?
              </li>
              <li>
                <strong>Relevance:</strong> Does the work match your goal and
                your customers?
              </li>
              <li>
                <strong>Ownership:</strong> Do you control your accounts and
                data?
              </li>
              <li>
                <strong>Improvement:</strong> Does the plan change when the
                data suggests it should?
              </li>
            </ul>


            <p>
              Several weak ratings are a reason to have an open conversation.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What You Must Provide
            </h3>


            <p>SEO is a partnership. Most experts will need you to:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                Share access to your website, Google Business Profile and
                analytics.
              </li>
              <li>
                Provide accurate details about services, strengths and customer
                questions.
              </li>
              <li>
                Review drafts and answer questions quickly.
              </li>
              <li>
                Encourage happy customers to leave genuine reviews.
              </li>
              <li>
                Tell the expert about offers, new services and changes in your
                business.
              </li>
            </ul>


            <p>
              Delays on your side can slow results, so decide early who will be
              the contact person.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Contract Points to Agree
            </h3>


            <p>Put these in writing before the project begins:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                Scope and deliverables, split into one-time and monthly.
              </li>
              <li>Timeline and review dates.</li>
              <li>Reporting format and frequency.</li>
              <li>Ownership of accounts, content and data.</li>
              <li>
                Notice period and how either side can end the agreement.
              </li>
              <li>What is extra and what is included.</li>
            </ul>


            <p>Clear terms protect both you and the expert.</p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Warning Signs Before You Hire
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Guaranteed first-page rankings.</strong> Search results
                change often, and no honest expert can promise a position.
              </li>
              <li>
                <strong>No questions about your business.</strong> Planning
                without understanding is guessing.
              </li>
              <li>
                <strong>Reports that show only rankings.</strong> You need to
                see real actions.
              </li>
              <li>
                <strong>No access to your own accounts.</strong>
              </li>
              <li>
                <strong>Pressure to sign quickly.</strong>
              </li>
              <li>
                <strong>Cheap link schemes.</strong> These can cause penalties
                later.
              </li>
            </ul>


            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request an SEO Plan
              </Link>
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Zentrix Infotech Works With Clients
            </h3>


            <p>
              Zentrix Infotech is an IT and digital company offering web
              development, software development, mobile apps, UI/UX design,
              cloud solutions and digital marketing. When you hire us for SEO,
              the arrangement looks like this:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                We agree the outcome first and describe the work as clear
                deliverables.
              </li>
              <li>
                We audit before we plan, so you know where you stand.
              </li>
              <li>
                We fix website problems directly, because we design and build
                websites.
              </li>
              <li>
                We report on actions, such as calls and enquiries, in
                plain language.
              </li>
              <li>
                We review progress with you and adjust the plan based on data.
              </li>
              <li>
                We do not promise guaranteed rankings. We promise clear work
                and honest communication.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Experience and Client Feedback
            </h3>


            <p>
              We have completed more than 250 projects for over 270 clients and
              show a 4.7 out of 5 rating on our website. A few client
              experiences, paraphrased from their feedback:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                Jigyasa Hospital reported a consistent rise in patient
                enquiries through Google and social media.
              </li>
              <li>
                Jai Balaji Bath and Tiles said their local visibility improved
                and enquiries now arrive steadily through search and social
                media.
              </li>
              <li>
                Ahlawat Pharmacy said people now discover them through search
                and social ads, with orders and footfall growing steadily.
              </li>
              <li>
                PS Decor said their website showcases their wedding work well
                and helped bring more client enquiries.
              </li>
            </ul>


            <p>
              Every business is different, and results depend on competition,
              timing and effort.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Work With Us From Lucknow
            </h3>


            <p>
              SEO is delivered online, so distance is rarely a problem. Our
              offices are in Moradabad and Ghaziabad, and we serve Lucknow
              clients through calls, video meetings, WhatsApp and shared
              reports.
            </p>


            <p>
              If you want to hire an SEO expert with a clear plan from day one,
              we are happy to review your website and Google presence and
              suggest a practical first step. Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>
              , message us on WhatsApp, or email{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              .
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>


            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What should I agree before hiring an SEO expert?
                </h4>
                <p>
                  Agree your main outcome, the scope, measures, reporting
                  format, timeline and who owns the accounts.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Which measures should I track?
                </h4>
                <p>
                  Calls, form fills, WhatsApp clicks, direction requests and key
                  page visits matter more than rankings alone.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does SEO take to show results?
                </h4>
                <p>
                  Early improvements often appear within a few months. Stronger
                  results usually build over a longer period.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Can an SEO expert guarantee first-page rankings?
                </h4>
                <p>
                  No. Search results change often, so no honest expert can
                  guarantee a position.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How often should I review progress?
                </h4>
                <p>
                  Monthly. A short review keeps the work accountable and the
                  plan up to date.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. What do I need to provide?
                </h4>
                <p>
                  Website and Google access, business details, quick feedback
                  and genuine customer reviews over time.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Should I own my Google accounts?
                </h4>
                <p>
                  Yes. Your Google Business Profile, Analytics and Search
                  Console should always stay in your name.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can the expert fix my website too?
                </h4>
                <p>
                  It depends on the provider. At Zentrix Infotech we build
                  websites, so we can fix issues directly.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Does Zentrix Infotech have a Lucknow office?
                </h4>
                <p>
                  Our offices are in Moradabad and Ghaziabad. We serve Lucknow
                  clients through calls, video meetings, WhatsApp and online
                  reports.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I get started?
                </h4>
                <p>
                  Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:info@zentrixinfotech.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@zentrixinfotech.com
                  </a>
                  . We will review your website and suggest a plan.
                </p>
              </div>
            </div>


            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <strong>Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>
              <br />
              <span role="img" aria-label="email">
                📧
              </span>{" "}
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              <br />
              <span role="img" aria-label="website">
                🌐
              </span>{" "}
              <strong>Website:</strong>{" "}
              <a
                href="https://www.zentrixinfotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.zentrixinfotech.com
              </a>
            </p>


            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                Related Services
              </h3>


              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <Link
                    href="/services/digital-marketing"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Services
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
                    href="/services/software-development"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/mobile-development"
                    className="text-blue-600 hover:underline"
                  >
                    Mobile App Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ui-ux-designing"
                    className="text-blue-600 hover:underline"
                  >
                    UI/UX Design Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cloud-solutions"
                    className="text-blue-600 hover:underline"
                  >
                    Cloud Solutions Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-blue-600 hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>


            <CityInternalLinks
              city="lucknow"
              currentSlug="/hire-seo-expert-in-lucknow"
            />
          </div>
        </div>


        <div className="order-2 w-full p-4 sm:p-8 lg:order-2 lg:w-[480px] xl:w-[500px] lg:sticky lg:top-32 lg:self-start">
          <div className="lg:max-h-[calc(100vh-8.5rem)] lg:overflow-y-auto">
            <LandingEnquiry />
          </div>
        </div>
      </div>


      <div className="mt-12">
        <RecentBlog />
      </div>
    </div>
  );
};


export default Content;