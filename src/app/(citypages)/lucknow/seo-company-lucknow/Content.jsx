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
      name: "What does an SEO company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It audits your site, fixes issues, creates content, builds local presence and reports progress so customers find you on Google.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose an SEO company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check the written scope, sample reports, account ownership and past client feedback. Avoid guaranteed rankings.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee first page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search engines control rankings, so honest companies cannot guarantee them. We share a plan and monthly progress.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early movement often appears within a few months. Stronger results depend on competition and consistent work.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an SEO company charge in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on goals, competition and website condition. We provide a written proposal after a discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "Is a company better than a freelancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A company brings a full team and backup. A freelancer can suit small, simple needs. Choose by scope and trust.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own my website and accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your website, analytics, Search Console and Google Business Profile remain yours.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We often start small businesses with local SEO and a focused first phase.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients remotely.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com to book a consultation.",
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
              SEO Company in Lucknow
            </h2>

            <p>
              Choosing an SEO company is a big decision. You are trusting
              someone with your website, your Google Business Profile and a
              share of your growth. Many Lucknow business owners have been
              burned by vague promises, confusing reports and work they could
              not verify.
            </p>

            <p>
              Zentrix Infotech is an SEO company serving Lucknow businesses
              with a simple approach: clear scope, honest timelines and monthly
              reporting you can understand. This page explains how a good SEO
              company actually works, so you can judge us, or any other agency,
              on facts.
            </p>

            <p>
              Have a project in mind? Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              for a free consultation.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Project Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Does an SEO Company Do?
            </h3>

            <p>
              An SEO company helps your business appear in search results when
              customers look for what you offer. In practice, the work falls
              into five parts:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Audit:</strong> Finding what is holding your site back.
              </li>
              <li>
                <strong>Fixes:</strong> Repairing technical and content
                problems.
              </li>
              <li>
                <strong>Content:</strong> Creating pages and articles that
                match customer searches.
              </li>
              <li>
                <strong>Local presence:</strong> Managing your Google Business
                Profile, listings and reviews.
              </li>
              <li>
                <strong>Reporting:</strong> Showing what changed and what comes
                next.
              </li>
            </ul>

            <p>
              If a company cannot explain these five parts for your business,
              keep looking.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Who Works on Your SEO
            </h3>

            <p>SEO is a team effort. Here is how we organize the work.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Project lead.</strong> Your single point of contact.
                They understand your goals, explain the plan and keep work on
                schedule.
              </li>
              <li>
                <strong>SEO strategist.</strong> Chooses the keywords, plans
                the page structure and sets priorities based on your market.
              </li>
              <li>
                <strong>Technical developer.</strong> Fixes speed, mobile
                layout, indexing and structured data. Because we are also a web
                development company, we can make these changes directly instead
                of sending you a list and waiting.
              </li>
              <li>
                <strong>Content writer.</strong> Writes service pages, blog
                posts and answers to customer questions in clear language.
              </li>
              <li>
                <strong>Local SEO specialist.</strong> Handles your Google
                Business Profile, citations and review strategy.
              </li>
              <li>
                <strong>Analyst.</strong> Tracks rankings, traffic and
                inquiries and prepares your monthly report.
              </li>
            </ul>

            <p>
              On smaller projects, one person may cover more than one role. We
              tell you upfront who is responsible for what.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              SEO Company vs Freelancer vs In-House Team
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Option
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Strengths
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Limits
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      SEO company
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Full skill set, backup when someone is absent, structured
                      process
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Needs clear scope and reporting
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Freelancer
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Often flexible and personal
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      One person covers every skill, availability can vary
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      In-house hire
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Fully dedicated to your brand
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Salary, training and tools cost more, one person rarely
                      covers every skill
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For most small and mid-sized businesses in Lucknow, a company
              offers the best balance of skill and cost. For very large brands,
              a mixed model with an in-house lead and an agency partner can
              work well.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our SEO Services
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local SEO.</strong> Google Business Profile
                optimization, accurate listings, review collection and location
                relevant pages so nearby customers can find you.
              </li>
              <li>
                <strong>On-page SEO.</strong> Better titles, headings, content
                and internal links so each page has a clear job.
              </li>
              <li>
                <strong>Technical SEO.</strong> Site speed, mobile usability,
                crawl errors, sitemaps and structured data.
              </li>
              <li>
                <strong>Content SEO.</strong> Planned articles and service
                pages built around real customer questions, including newer
                search habits such as voice search, which we cover on our{" "}
                <Link
                  href="/blog/voice-search-seo-guide"
                  className="text-blue-600 hover:underline"
                >
                  blog
                </Link>
                .
              </li>
              <li>
                <strong>Ecommerce SEO.</strong> Category and product page
                optimization for online stores.
              </li>
              <li>
                <strong>Ethical off-page SEO.</strong> Relevant listings,
                mentions and shareable content, without spammy link schemes.
              </li>
              <li>
                <strong>Reporting.</strong> A monthly report in plain language,
                not a wall of numbers.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Your First 90 Days With Us
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Month one: foundation.</strong> We audit your website
                and profile, research keywords in English, Hindi and Hinglish,
                fix urgent technical issues and set up tracking so results can
                be measured.
              </li>
              <li>
                <strong>Month two: build.</strong> We improve key pages,
                optimize your Google Business Profile, publish the first
                content pieces and begin review and listing work.
              </li>
              <li>
                <strong>Month three: grow and refine.</strong> We expand
                content, strengthen local signals, study early data and adjust
                the plan.
              </li>
            </ul>

            <p>
              SEO takes time, so by the end of month three you should have a
              healthier website, a clearer picture of your market and a
              documented plan for the months ahead.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Your Monthly Report Should Contain
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Work completed during the month.</li>
              <li>Keyword and ranking movement.</li>
              <li>Traffic and its sources.</li>
              <li>Calls, form submissions and direction requests.</li>
              <li>Issues found and fixed.</li>
              <li>Next steps and priorities.</li>
            </ul>

            <p>
              If any company refuses to share this, that is a warning sign.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Ownership and Access
            </h3>

            <p>
              You should own your website, analytics account, Search Console
              and Google Business Profile. We work through access you grant and
              never hold these hostage. If you ever leave, your accounts and
              data stay with you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Red Flags When Hiring an SEO Company
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Guaranteed number one rankings.</li>
              <li>No written scope or deliverables.</li>
              <li>Refusing to share reports or account access.</li>
              <li>Very cheap offers that sound too good to be true.</li>
              <li>Bought links or copied content.</li>
              <li>
                Pressure to sign long contracts before showing any plan.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Proof From Our Work
            </h3>

            <p>
              Our homepage shows a 4.7 out of 5 rating, more than 250 projects
              and more than 270 clients. Ahlawat Pharmacy shared that its
              online presence was almost zero before, and that people now find
              the business through search and social ads. Jai Balaji Bath and
              Tiles described better local visibility and a steady flow of
              inquiries through social media and search. Dr. C.P. Singh of
              Jigyasa Hospital noted a consistent rise in patient inquiries
              through Google and social media.
            </p>

            <p>
              Those results came from our wider{" "}
              <Link
                href="/services/digital-marketing"
                className="text-blue-600 hover:underline"
              >
                digital marketing
              </Link>{" "}
              and{" "}
              <Link
                href="/services/web-development"
                className="text-blue-600 hover:underline"
              >
                website
              </Link>{" "}
              work. Every business is different, and we do not promise
              identical outcomes.
            </p>

            <p>
              Want similar results? Email{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>{" "}
              with your requirement.
            </p>

            <p>
              <Link
                href="/portfolio"
                className="text-blue-600 hover:underline"
              >
                Explore our portfolio
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Working With Lucknow Clients Remotely
            </h3>

            <p>
              Our offices are in Moradabad and Ghaziabad. We serve Lucknow
              businesses through video calls, shared documents and monthly
              reviews. SEO is mostly analysis, content and technical work, so
              remote delivery is efficient and keeps overhead low. If a key
              planning session is better held in person, we can discuss it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Verify Any SEO Company, Including Us
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Ask for the written scope and monthly deliverables.</li>
              <li>Ask who will actually do the work.</li>
              <li>Request a sample report.</li>
              <li>Speak to a past client if possible.</li>
              <li>Check that the agency understands your website platform.</li>
              <li>
                Start with a clear first phase before committing long term.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Talk to Zentrix Infotech
            </h3>

            <p>
              If you want an SEO company in Lucknow that explains its work
              clearly, call{" "}
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
              . Tell us about your business and goals, and we will suggest a
              practical starting plan.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Book Your Free Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What does an SEO company do?
                </h4>
                <p>
                  It audits your site, fixes issues, creates content, builds
                  local presence and reports progress so customers find you on
                  Google.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How do I choose an SEO company in Lucknow?
                </h4>
                <p>
                  Check the written scope, sample reports, account ownership
                  and past client feedback. Avoid guaranteed rankings.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Do you guarantee first page rankings?
                </h4>
                <p>
                  No. Search engines control rankings, so honest companies
                  cannot guarantee them. We share a plan and monthly progress.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does SEO take?
                </h4>
                <p>
                  Early movement often appears within a few months. Stronger
                  results depend on competition and consistent work.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How much does an SEO company charge in Lucknow?
                </h4>
                <p>
                  Cost depends on goals, competition and website condition. We
                  provide a written proposal after a discovery call.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Is a company better than a freelancer?
                </h4>
                <p>
                  A company brings a full team and backup. A freelancer can
                  suit small, simple needs. Choose by scope and trust.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Will I own my website and accounts?
                </h4>
                <p>
                  Yes. Your website, analytics, Search Console and Google
                  Business Profile remain yours.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you work with small businesses?
                </h4>
                <p>
                  Yes. We often start small businesses with local SEO and a
                  focused first phase.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you have an office in Lucknow?
                </h4>
                <p>
                  Our offices are in Moradabad and Ghaziabad. We serve Lucknow
                  clients remotely.
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
                  </a>{" "}
                  to book a consultation.
                </p>
              </div>
            </div>

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
                    href="/blog/voice-search-seo-guide"
                    className="text-blue-600 hover:underline"
                  >
                    Voice Search SEO Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-blue-600 hover:underline"
                  >
                    Our Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-blue-600 hover:underline"
                  >
                    Our Blog
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
              currentSlug="/seo-company-in-lucknow"
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