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
      name: "What are SEO services in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are services that improve your website and local presence so your business appears when Lucknow customers search on Google.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early movement often appears in a few months. Stronger results depend on competition, website quality and consistent work.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee first page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search engines control rankings, so honest agencies do not guarantee them. We share a clear plan and monthly progress.",
      },
    },
    {
      "@type": "Question",
      name: "What is local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO helps your business appear in map results and nearby searches through your Google Business Profile, reviews and listings.",
      },
    },
    {
      "@type": "Question",
      name: "How much do SEO services cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on your goals, competition and website condition. We share a written proposal after a discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "Can small businesses benefit from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Local SEO is often the most practical starting point for small businesses with a limited budget.",
      },
    },
    {
      "@type": "Question",
      name: "Do you do both SEO and website development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build and improve websites, which helps SEO because speed and usability matter.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients remotely with calls and monthly reports.",
      },
    },
    {
      "@type": "Question",
      name: "What will I see in the monthly report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Work completed, ranking movement, traffic, inquiries, issues fixed and next steps.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start?",
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
              SEO Services in Lucknow
            </h2>

            <p>
              When someone in Lucknow needs a service, a product or a doctor,
              the first step is usually a search on a phone. If your business
              does not appear on that first screen, a competitor gets the call,
              the visit or the order. SEO, or search engine optimization, is
              how you earn that visibility without paying for every click.
            </p>

            <p>
              Zentrix Infotech provides SEO services in Lucknow for businesses
              that want steady, measurable growth from Google. We combine local
              SEO, on-page work, technical fixes and useful content, and we
              report progress in plain language so you always know what is
              happening.
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
              What Are SEO Services?
            </h3>

            <p>
              SEO services improve your website and online presence so that
              search engines understand it and show it to the right people. A
              complete SEO service covers four areas:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Technical health:</strong> Speed, mobile usability,
                crawling and security.
              </li>
              <li>
                <strong>On-page content:</strong> Titles, headings, page copy
                and internal links that match what customers search.
              </li>
              <li>
                <strong>Local visibility:</strong> Your Google Business
                Profile, reviews and local listings.
              </li>
              <li>
                <strong>Authority:</strong> Trustworthy mentions and links that
                show search engines your business is credible.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Lucknow Businesses Need SEO
            </h3>

            <p>
              Customers in Lucknow search in English, Hindi and Hinglish, often
              with words like near me or the name of a locality. Most of these
              searches happen on mobile, and many end in a call or a map visit
              within minutes.
            </p>

            <p>
              Paid ads stop the moment your budget stops. SEO builds an asset
              that keeps working. Retailers, clinics, schools, coaching
              centres, hotels, event companies, builders and handicraft sellers
              all benefit when their pages appear for the exact searches their
              customers make.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our SEO Services in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local SEO services in Lucknow:</strong> We optimize
                your Google Business Profile, categories, services, photos and
                posts. We keep your name, address and phone number consistent
                across listings and help you build a steady flow of genuine
                reviews.
              </li>
              <li>
                <strong>On-page SEO:</strong> We research the words your
                customers use, then improve page titles, meta descriptions,
                headings, content and internal links so each page has a clear
                purpose.
              </li>
              <li>
                <strong>Technical SEO:</strong> We check site speed, mobile
                layout, broken links, indexing, sitemaps and structured data. A
                website that loads slowly or breaks on a phone loses visitors
                before they read a word.
              </li>
              <li>
                <strong>Content SEO:</strong> We plan blog posts, service pages
                and guides that answer real customer questions. Our own blog
                covers topics such as voice search SEO, which shows how we
                think about search behaviour.
              </li>
              <li>
                <strong>Ecommerce SEO:</strong> For online stores, we optimize
                category pages, product pages and site structure so shoppers
                find the right product quickly.
              </li>
              <li>
                <strong>Off-page SEO:</strong> We build credibility through
                ethical methods such as quality business listings, relevant
                mentions and content worth sharing. We avoid link schemes that
                risk penalties.
              </li>
              <li>
                <strong>SEO audits and reporting:</strong> We review where your
                site stands today, list the problems in order of importance and
                report progress every month.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Local SEO for Lucknow Areas
            </h3>

            <p>
              Customers often search by locality, for example Gomti Nagar,
              Hazratganj, Aliganj, Indira Nagar or Alambagh. We study how your
              customers search and build service and location pages that read
              naturally and help real visitors. We do not stuff names into
              pages or create thin copies of the same page, because search
              engines treat that as low quality.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our SEO Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery call:</strong> We learn about your business,
                customers, competitors and goals.
              </li>
              <li>
                <strong>Audit:</strong> We review your website, Google Business
                Profile and current visibility.
              </li>
              <li>
                <strong>Keyword research:</strong> We map English, Hindi and
                Hinglish searches to the pages that should answer them.
              </li>
              <li>
                <strong>Strategy:</strong> You receive a priority plan covering
                the first three months.
              </li>
              <li>
                <strong>Implementation:</strong> We fix technical issues,
                improve pages and publish content.
              </li>
              <li>
                <strong>Local and authority work:</strong> We strengthen your
                profile, reviews and listings.
              </li>
              <li>
                <strong>Reporting and improvement:</strong> We share a monthly
                report and adjust the plan using real data.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What You Receive Every Month
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>A summary of work completed.</li>
              <li>Keyword and ranking movement for your target searches.</li>
              <li>Website traffic and where it came from.</li>
              <li>
                Calls, form fills and direction requests that SEO influenced.
              </li>
              <li>Technical issues found and fixed.</li>
              <li>Clear next steps for the following month.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Realistic Expectations
            </h3>

            <p>
              SEO is a long term channel. Most businesses see early movement in
              a few months, while stronger results depend on competition, your
              starting point, website quality and how consistently work
              continues. Be careful with anyone who guarantees a number one
              ranking or a fixed result in a fixed number of days. Search
              engines control rankings, and no agency can promise them.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              White Hat SEO vs Shortcuts
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Area
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Shortcut approach
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Our approach
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Links
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Bought or spammy links
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Earned, relevant credibility
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Content
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Copied or stuffed with keywords
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Original and useful
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Reporting
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Vague or hidden
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Monthly and easy to read
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Promises
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Guaranteed rankings
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Honest timelines
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Risk
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Penalties and lost traffic
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Steady, safe growth
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Proof From Our Work
            </h3>

            <p>
              Our homepage shows a 4.7 out of 5 rating, more than 250 projects
              and more than 270 clients. Several clients describe the value of
              being found online. Ahlawat Pharmacy said its online presence was
              almost zero before, and that people now discover the business
              through search and social ads, with orders and footfall growing
              steadily. Jai Balaji Bath and Tiles described improved local
              visibility and a steady flow of inquiries through social media
              and search. Dr. C.P. Singh of Jigyasa Hospital reported a
              consistent rise in patient inquiries through Google and social
              media.
            </p>

            <p>
              These results came from our broader digital marketing work, which
              includes websites and campaigns alongside search visibility.
              Results differ for every business, and we never promise the same
              outcome to everyone.
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
              SEO Services Delivered Remotely
            </h3>

            <p>
              Our offices are in Moradabad and Ghaziabad. We serve Lucknow
              businesses through video calls, shared reports and regular
              updates. SEO is analysis, content and technical work, so remote
              delivery keeps the process efficient and your costs sensible.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose an SEO Company in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Ask what exactly is included each month.</li>
              <li>Ask how reports are shared and what they contain.</li>
              <li>
                Ask who owns your website access, analytics and Google Business
                Profile. It should be you.
              </li>
              <li>
                Ask for examples of work, and speak to past clients if
                possible.
              </li>
              <li>Avoid guaranteed rankings and unusually cheap offers.</li>
              <li>
                Check that the agency also understands web design, because SEO
                depends on a good website.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Growing With Zentrix Infotech
            </h3>

            <p>
              If you want more calls, inquiries and customers from Google, our
              team can build a clear SEO plan for your Lucknow business. Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              or write to{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>{" "}
              to book a consultation.
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
                  1. What are SEO services in Lucknow?
                </h4>
                <p>
                  They are services that improve your website and local
                  presence so your business appears when Lucknow customers
                  search on Google.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How long does SEO take to show results?
                </h4>
                <p>
                  Early movement often appears in a few months. Stronger
                  results depend on competition, website quality and consistent
                  work.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Do you guarantee first page rankings?
                </h4>
                <p>
                  No. Search engines control rankings, so honest agencies do
                  not guarantee them. We share a clear plan and monthly
                  progress.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. What is local SEO?
                </h4>
                <p>
                  Local SEO helps your business appear in map results and
                  nearby searches through your Google Business Profile, reviews
                  and listings.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How much do SEO services cost in Lucknow?
                </h4>
                <p>
                  Cost depends on your goals, competition and website
                  condition. We share a written proposal after a discovery
                  call.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can small businesses benefit from SEO?
                </h4>
                <p>
                  Yes. Local SEO is often the most practical starting point for
                  small businesses with a limited budget.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you do both SEO and website development?
                </h4>
                <p>
                  Yes. We build and improve websites, which helps SEO because
                  speed and usability matter.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you have an office in Lucknow?
                </h4>
                <p>
                  Our offices are in Moradabad and Ghaziabad. We serve Lucknow
                  clients remotely with calls and monthly reports.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. What will I see in the monthly report?
                </h4>
                <p>
                  Work completed, ranking movement, traffic, inquiries, issues
                  fixed and next steps.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I start?
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
                    href="/services/digital-marketing"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Services
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
              currentSlug="/seo-services-in-lucknow"
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