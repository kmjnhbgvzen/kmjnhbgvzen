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
      name: "Which is the best SEO agency in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your goals and budget. Compare agencies on scope, proof, reporting and ownership, not on claims.",
      },
    },
    {
      "@type": "Question",
      name: "How do I compare SEO agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Score each on scope, process, honesty, local knowledge, technical skill, content, reporting, ownership, evidence and communication.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee first page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search engines control rankings, so honest agencies cannot guarantee them.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early movement often appears within a few months. Stronger results depend on competition and consistent work.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an SEO agency cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on goals, competition and website condition. We share a written proposal after a discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "Should I choose a cheap SEO agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Be careful. Very low prices can mean copied content, bought links or little reporting. Compare deliverables, not only price.",
      },
    },
    {
      "@type": "Question",
      name: "What should an SEO report include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Work done, ranking movement, traffic, calls and inquiries, issues fixed and next steps.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own my accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your website, analytics, Search Console and Google Business Profile remain yours.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  serviceType: "Search Engine Optimization",
  description:
    "Local SEO, on-page and content SEO, technical SEO, ethical off-page work and monthly reporting for businesses in Lucknow and Uttar Pradesh.",
  provider: {
    "@type": "Organization",
    name: "Zentrix Infotech",
    url: "https://www.zentrixinfotech.com",
    telephone: "+91 72488 00839",
    email: "info@zentrixinfotech.com",
  },
  areaServed: {
    "@type": "City",
    name: "Lucknow",
  },
  url:
    "https://www.zentrixinfotech.com/lucknow/best-seo-agency-in-lucknow",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.zentrixinfotech.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.zentrixinfotech.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Digital Marketing",
      item: "https://www.zentrixinfotech.com/services/digital-marketing",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Best SEO Agency in Lucknow: How to Choose the Right One",
      item:
        "https://www.zentrixinfotech.com/lucknow/best-seo-agency-in-lucknow",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Best SEO Agency in Lucknow: How to Choose the Right One
            </h2>

            <p>
              Search for the best SEO agency in Lucknow and you will find dozens
              of agencies, and almost all of them call themselves the best.
              Rankings, awards and bold promises are easy to write on a website.
              They are much harder to prove.
            </p>

            <p>
              This page takes a different approach. Instead of telling you that
              one agency is the best, we show you how to judge any agency,
              including Zentrix Infotech, using evidence you can check yourself.
              Then we explain how we work, so you can compare us fairly.
            </p>

            <p>
              Ready to talk? Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              for a consultation.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get an SEO Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Best Really Means in SEO
            </h3>

            <p>
              There is no single best SEO agency for every business. The right
              agency for a hospital is not the same as the right agency for a
              handicraft seller or a coaching centre. Best should mean the
              agency that fits your goals, budget and market, explains its work
              clearly and can show real proof.
            </p>

            <p>A good SEO agency should help you with:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Being found by customers who are ready to buy or visit
              </li>
              <li>Fixing technical issues on your website</li>
              <li>
                Building trust through content, reviews and local presence
              </li>
              <li>
                Reporting results honestly, including when progress is slow
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Ten Point Scorecard to Compare SEO Agencies
            </h3>

            <p>
              Give each agency a score from one to five on these points, then
              compare totals.
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Clear scope.</strong> Does the proposal list exactly
                what you receive each month?
              </li>
              <li>
                <strong>Real process.</strong> Can the agency explain its
                audit, research, fixes and content steps in plain language?
              </li>
              <li>
                <strong>Honest promises.</strong> Does it avoid guaranteed
                rankings? Search engines control rankings, and no agency can
                promise them.
              </li>
              <li>
                <strong>Local understanding.</strong> Does it understand how
                Lucknow customers search, including English, Hindi and Hinglish
                queries and locality based searches?
              </li>
              <li>
                <strong>Technical ability.</strong> Can it fix site speed,
                mobile layout and indexing problems, or does it only send you a
                list of issues?
              </li>
              <li>
                <strong>Content quality.</strong> Is the content original,
                useful and written for people first?
              </li>
              <li>
                <strong>Reporting.</strong> Is the sample report easy to read
                and tied to calls, inquiries and visits, not only rankings?
              </li>
              <li>
                <strong>Ownership.</strong> Will you own your website,
                analytics, Search Console and Google Business Profile?
              </li>
              <li>
                <strong>Evidence.</strong> Can the agency show real client work
                and let you speak to past clients?
              </li>
              <li>
                <strong>Communication.</strong> Do you know who your contact
                is, how often you will meet and how quickly questions get
                answers?
              </li>
            </ol>

            <p>
              An agency scoring high across all ten is usually a safer choice
              than one that is strong in two areas and silent on the rest.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Checks You Can Run Yourself
            </h3>

            <p>You do not need to be an SEO expert to test an agency.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Search for the agency.</strong> Look at how it appears
                on Google. An agency that cannot rank itself deserves
                questions, though newer firms may still have strong skills.
              </li>
              <li>
                <strong>Open their own website.</strong> Check speed on your
                phone, clear service pages and useful content.
              </li>
              <li>
                <strong>Ask for a sample audit or report.</strong> The quality
                of this document shows how they think.
              </li>
              <li>
                <strong>Ask about Search Console.</strong> A serious agency
                will ask for access and explain what it will look at.
              </li>
              <li>
                <strong>Check client websites.</strong> Visit the sites they
                mention. Are they fast, clear and easy to use?
              </li>
              <li>
                <strong>Speak to a past client.</strong> Ask what changed, how
                communication worked and what they would do differently.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Best SEO Agency by Business Type
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local shops and service businesses.</strong> Look for
                strong Google Business Profile work, review strategy and local
                landing pages.
              </li>
              <li>
                <strong>Clinics and hospitals.</strong> Look for care with
                sensitive health content, accurate information and strong trust
                signals.
              </li>
              <li>
                <strong>Schools and coaching centres.</strong> Look for
                seasonal planning around admissions and content that answers
                parent and student questions.
              </li>
              <li>
                <strong>Online stores.</strong> Look for category and product
                page optimization, site speed and clean site structure.
              </li>
              <li>
                <strong>Builders and real estate.</strong> Look for location
                based content and lead tracking that connects searches to site
                visits.
              </li>
              <li>
                <strong>Hotels and event businesses.</strong> Look for visual
                content, booking focused pages and strong map presence.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Cheap vs Costly vs Right Priced
            </h3>

            <p>
              The best SEO agency is not always the cheapest or the most
              expensive. Very low prices can mean copied content, bought links
              or no real reporting. Very high prices do not guarantee better
              work either. Compare proposals line by line: hours, deliverables,
              reporting and support. We do not publish fixed prices because
              they depend on your goals, competition and website condition.
              After a discovery call, you receive a written proposal.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Proposal Red Flags
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Guaranteed first page or number one rankings</li>
              <li>No written deliverables</li>
              <li>Refusal to share reports or account access</li>
              <li>Bought links or copied content</li>
              <li>Pressure to sign a long contract immediately</li>
              <li>Vague answers about who does the work</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Zentrix Infotech Approaches SEO
            </h3>

            <p>
              We do not call ourselves the best, because that is for your own
              comparison to decide. Here is what we offer so you can score us
              on the same ten points.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local SEO.</strong> Google Business Profile
                optimization, accurate listings and a review plan.
              </li>
              <li>
                <strong>On-page and content SEO.</strong> Page structure,
                titles, headings and content built around real customer
                searches.
              </li>
              <li>
                <strong>Technical SEO.</strong> Speed, mobile usability, crawl
                errors and structured data. Because we are also a web
                development company, we can implement fixes directly.
              </li>
              <li>
                <strong>Ethical off-page work.</strong> Relevant listings and
                mentions without spammy link schemes.
              </li>
              <li>
                <strong>Monthly reporting.</strong> Work completed, ranking
                movement, traffic, inquiries and next steps in plain language.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Evidence You Can Review
            </h3>

            <p>
              Our homepage shows a 4.7 out of 5 rating, more than 250 projects
              and more than 270 clients. Our portfolio includes The Buyzaar
              Mart, PS Decor, Vasterior, Alluring Glimpses, KDEDU and HerbsFox.
              Several client testimonials mention being found online. Ahlawat
              Pharmacy said people now discover the business through search and
              social ads. Jai Balaji Bath and Tiles described improved local
              visibility and steady inquiries through social media and search.
              Dr. C.P. Singh of Jigyasa Hospital reported a consistent rise in
              patient inquiries through Google and social media.
            </p>

            <p>
              These results came from our wider digital marketing and website
              work. Results differ for every business, and we never promise the
              same outcome to everyone. We encourage you to ask for references
              and check them.
            </p>

            <p>
              Want to discuss your website and SEO goals? Email{" "}
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
                href="https://www.zentrixinfotech.com/portfolio"
                className="text-blue-600 hover:underline"
              >
                Explore our portfolio
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Working With Lucknow Businesses
            </h3>

            <p>
              Our offices are in Moradabad and Ghaziabad. We serve Lucknow
              businesses through video calls, shared documents and monthly
              reviews. SEO is mostly analysis, content and technical work, so
              remote delivery is efficient and keeps overhead low.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Small Before You Commit
            </h3>

            <p>
              Whichever agency you choose, begin with a clear first phase, for
              example a three month plan with an audit, priority fixes and a
              reporting schedule. This lets you judge the working relationship
              with real evidence before a larger commitment.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Talk to Zentrix Infotech
            </h3>

            <p>
              If you are comparing SEO agencies in Lucknow, include us on your
              shortlist and run the scorecard on every name. Call{" "}
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

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request an SEO Proposal
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Which is the best SEO agency in Lucknow?
                </h4>
                <p>
                  It depends on your goals and budget. Compare agencies on
                  scope, proof, reporting and ownership, not on claims.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How do I compare SEO agencies?
                </h4>
                <p>
                  Score each on scope, process, honesty, local knowledge,
                  technical skill, content, reporting, ownership, evidence and
                  communication.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Do you guarantee first page rankings?
                </h4>
                <p>
                  No. Search engines control rankings, so honest agencies
                  cannot guarantee them.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does SEO take to work?
                </h4>
                <p>
                  Early movement often appears within a few months. Stronger
                  results depend on competition and consistent work.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How much does an SEO agency cost in Lucknow?
                </h4>
                <p>
                  Cost depends on goals, competition and website condition. We
                  share a written proposal after a discovery call.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Should I choose a cheap SEO agency?
                </h4>
                <p>
                  Be careful. Very low prices can mean copied content, bought
                  links or little reporting. Compare deliverables, not only
                  price.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. What should an SEO report include?
                </h4>
                <p>
                  Work done, ranking movement, traffic, calls and inquiries,
                  issues fixed and next steps.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Will I own my accounts?
                </h4>
                <p>
                  Yes. Your website, analytics, Search Console and Google
                  Business Profile remain yours.
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
              currentSlug="/best-seo-agency-in-lucknow"
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