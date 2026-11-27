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
      name: "Is SEO worth it for a small business in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if your customers search online. SEO helps you reach people who are already looking for your products or services.",
      },
    },
    {
      "@type": "Question",
      name: "How much do SEO services cost for a small business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on your goals, competition and website condition. We share a clear scope and plan after reviewing your business.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early improvements often appear within a few months, with stronger results over time. Timelines vary by industry and competition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. No honest provider can. We focus on proven work and transparent reporting.",
      },
    },
    {
      "@type": "Question",
      name: "What should a small business do first for SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with your Google Business Profile and website basics. These usually give the fastest local improvements.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a website for SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A website is strongly recommended. It gives you a place to explain your services and turn searchers into enquiries.",
      },
    },
    {
      "@type": "Question",
      name: "What is local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO helps your business appear in nearby searches, including map results and &quot;near me&quot; queries.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve small businesses outside Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with businesses across India through calls, video meetings and online reports.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech have a Lucknow office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offices are in Moradabad and Ghaziabad. We support Lucknow clients through calls, WhatsApp and online reports.",
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
              SEO Services in Lucknow for Small Business: Get Found by
              Customers Who Are Already Searching
            </h2>

            <p>
              If you run a small business in Lucknow, you know every rupee and
              every hour counts. You cannot afford marketing that burns money
              and shows nothing in return. That is why SEO (search engine
              optimization) suits small businesses so well. When a customer
              searches for what you sell, you want to be one of the first names
              they see.
            </p>

            <p>
              At Zentrix Infotech, we help small businesses grow their
              visibility on Google through practical, step-by-step SEO. This
              page explains what SEO services for a small business really
              include, what to do first, how to avoid wasting money, and how we
              can help.
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
              Why Small Businesses in Lucknow Need SEO
            </h3>

            <p>
              Customers now check Google before they visit a shop, book an
              appointment or call a service provider. They search for things
              like &quot;clinic near me&quot;, &quot;tuition in Lucknow&quot;
              or &quot;best bakery in Gomti Nagar&quot;, often in a mix of
              English and Hindi.
            </p>

            <p>For a small business, SEO offers real advantages:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                You reach people who already want what you offer. A person
                searching for your service is much closer to buying than
                someone who sees a random ad.
              </li>
              <li>
                Results build over time. Unlike ads, which stop when the budget
                stops, good SEO keeps working.
              </li>
              <li>
                You compete on quality, not budget alone. A well-optimized
                small business can appear next to larger names, especially in
                local searches.
              </li>
              <li>
                It builds trust. Businesses that appear regularly with good
                reviews look established and reliable.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What SEO Services for Small Business Include
            </h3>

            <p>
              A good small business SEO plan is focused. It does the
              highest-impact work first instead of everything at once.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              1. Google Business Profile Setup and Optimization
            </h4>

            <p>
              For most local businesses, this is the best place to start. Your
              Google Business Profile decides how you appear on maps and in
              &quot;near me&quot; searches. We help you complete every section,
              choose the right categories, add accurate details and photos, and
              build a steady habit of collecting and answering genuine customer
              reviews.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              2. Website Health Check and Fixes
            </h4>

            <p>
              A slow, confusing or mobile-unfriendly website quietly loses
              customers. We review speed, mobile layout, page structure, broken
              links and security, then fix what matters. Because our team also
              builds websites, we can usually correct problems directly.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              3. Keyword Research for Your Customers
            </h4>

            <p>
              We find the phrases your customers actually use, including Hindi
              and Hinglish searches. We then match them to the right pages so
              you are not guessing. A small business gains the most by
              targeting specific, local, ready-to-buy searches rather than
              broad, expensive terms.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              4. On-Page SEO
            </h4>

            <p>
              We improve page titles, descriptions, headings, text, images and
              internal links so each page clearly answers one customer need.
              Clear pages convert better as well as rank better.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              5. Local Pages and Content
            </h4>

            <p>
              We create service pages and helpful content that speak to your
              local customers: what you offer, who it is for, how it works and
              how to contact you. Good content answers real questions and gives
              you more ways to be found.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              6. Local Listings and Trust Signals
            </h4>

            <p>
              We make sure your business name, address and phone number are
              consistent across important online listings, and we help you earn
              quality local mentions that strengthen credibility.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              7. Tracking and Simple Reports
            </h4>

            <p>
              We set up tracking for calls, form submissions and WhatsApp
              clicks so you can see which actions bring enquiries. Reports are
              written in plain language, without jargon.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request an SEO Services Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Where Should a Small Business Start?
            </h3>

            <p>You do not need to do everything at once. A sensible order looks like this:</p>

            <ol className="ml-4 list-decimal space-y-2">
              <li>Claim and complete your Google Business Profile.</li>
              <li>
                Fix the basics on your website: speed, mobile view, contact
                details and clear service pages.
              </li>
              <li>
                Target your most valuable services first. Pick the two or three
                offerings that earn you the most.
              </li>
              <li>
                Collect genuine reviews from happy customers on a regular
                basis.
              </li>
              <li>
                Add helpful content over time, answering the questions
                customers ask you every day.
              </li>
              <li>
                Measure and adjust based on calls and enquiries, not only
                rankings.
              </li>
            </ol>

            <p>
              This approach spreads the effort, protects your budget and shows
              progress at each stage.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What You Can Do Yourself and What to Hand Over
            </h3>

            <p>
              SEO does not have to be all-or-nothing. Many owners do well with
              a split:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>You can usually handle:</strong> Replying to reviews
                and asking happy customers to leave one; sharing accurate
                photos, offers and updates on your Google profile; telling us
                about your services, customers and common questions.
              </li>
              <li>
                <strong>Better handled by experts:</strong> Technical fixes and
                website structure; keyword research and page planning; writing
                optimized content; tracking, analysis and ongoing improvements.
              </li>
            </ul>

            <p>
              When you work with us, we explain who does what, so your time
              goes where it matters most.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our SEO Process for Small Businesses
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Understand your business.</strong> We learn about your
                services, customers, area and goals.
              </li>
              <li>
                <strong>Audit.</strong> We review your website, Google profile
                and current visibility, and look at what nearby competitors are
                doing.
              </li>
              <li>
                <strong>Plan.</strong> We build a practical plan with
                priorities, so the first actions are the ones most likely to
                help.
              </li>
              <li>
                <strong>Implement.</strong> We fix issues, optimize pages,
                improve your local presence and publish content.
              </li>
              <li>
                <strong>Report.</strong> You receive simple updates on
                enquiries, visibility and completed work.
              </li>
              <li>
                <strong>Improve.</strong> We refine the plan month by month
                based on real data.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Realistic 90-Day View
            </h3>

            <p>
              SEO is steady work, not a switch. Here is a general picture of
              how a small business project often unfolds:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Month 1:</strong> Audit, setup, Google profile work and
                technical fixes.
              </li>
              <li>
                <strong>Month 2:</strong> Page and content improvements,
                listings and review building.
              </li>
              <li>
                <strong>Month 3:</strong> Continued content, tracking review
                and plan adjustments.
              </li>
            </ul>

            <p>
              Results vary with competition, industry, budget and the state of
              your website. Some businesses see early movement within a few
              months. Others in crowded markets need longer. We will tell you
              honestly what is realistic for your situation, and we do not
              promise fixed rankings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech is an IT and digital company offering web
              development, software development, mobile apps, UI/UX design,
              cloud solutions and digital marketing. For a small business, that
              combination is helpful. Many SEO problems begin with the website
              itself, and we can handle both the website and the marketing in
              one place.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Experience:</strong> Over 250 projects for more than
                270 clients, with a 4.7 out of 5 rating shown on our website.
              </li>
              <li>
                <strong>Variety of industries:</strong> Interiors, events,
                education, healthcare, retail, e-commerce, hospitality, real
                estate and more.
              </li>
              <li>
                <strong>Plain communication:</strong> Calls, WhatsApp and clear
                reports.
              </li>
              <li>
                <strong>Honest planning:</strong> No guaranteed-ranking claims
                and no unnecessary add-ons.
              </li>
              <li>
                <strong>Business focus:</strong> The goal is more calls,
                enquiries and customers.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Our Clients Say
            </h3>

            <p>
              Our clients include small and growing businesses. A few
              experiences, paraphrased from their feedback:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Jai Balaji Bath and Tiles shared that their local visibility
                improved and enquiries now come steadily through search and
                social media.
              </li>
              <li>
                Ahlawat Pharmacy said that people now discover them through
                search and social ads, with orders and footfall growing
                steadily.
              </li>
              <li>
                PS Decor said their new website showcases their wedding work
                well and helped bring more client enquiries.
              </li>
              <li>
                Jigyasa Hospital reported a consistent rise in patient
                enquiries through Google and social media.
              </li>
            </ul>

            <p>
              Every business is different, and results depend on many factors.
              These examples show the type of partnership we aim to build.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose an SEO Provider as a Small Business
            </h3>

            <p>Before you sign with anyone, including us, check these points:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Do they ask about your business first?</strong> Avoid
                anyone who offers the same package to everyone.
              </li>
              <li>
                <strong>Is pricing and scope clear in writing?</strong> You
                should know what is included and for how long.
              </li>
              <li>
                <strong>Do they promise guaranteed rankings or instant
                results?</strong> That is a warning sign.
              </li>
              <li>
                <strong>Will you own your accounts?</strong> Your Google
                Business Profile, Analytics and Search Console should stay under
                your control.
              </li>
              <li>
                <strong>How will they report?</strong> Look for tracking of
                calls and enquiries.
              </li>
              <li>
                <strong>Can they show real work and client feedback?</strong>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Growing Your Small Business Online
            </h3>

            <p>
              If you want SEO services in Lucknow that respect your budget and
              focus on real enquiries, let us review your website and Google
              presence. We will show you where the opportunities are and
              suggest a practical first step.
            </p>

            <p>
              Call +91 72488 00839, message us on WhatsApp, or email
              info@zentrixinfotech.com. Tell us about your business, and we
              will help you plan your next move.
            </p>

            <p>
              <strong>Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>
              <br />
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <p>
              <Link
                href="/contact-us"
                className="text-blue-600 hover:underline"
              >
                Talk to Our SEO Team
              </Link>{" "}
              ·{" "}
              <Link
                href="/contact-us"
                className="text-blue-600 hover:underline"
              >
                Discuss Your SEO Plan
              </Link>{" "}
              ·{" "}
              <Link
                href="/contact-us"
                className="text-blue-600 hover:underline"
              >
                Get a Free Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Is SEO worth it for a small business in Lucknow?
                </h4>
                <p>
                  Yes, if your customers search online. SEO helps you reach
                  people who are already looking for your products or services.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How much do SEO services cost for a small business?
                </h4>
                <p>
                  Cost depends on your goals, competition and website
                  condition. We share a clear scope and plan after reviewing
                  your business.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does SEO take to work?
                </h4>
                <p>
                  Early improvements often appear within a few months, with
                  stronger results over time. Timelines vary by industry and
                  competition.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Can you guarantee first-page rankings?
                </h4>
                <p>
                  No. No honest provider can. We focus on proven work and
                  transparent reporting.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. What should a small business do first for SEO?
                </h4>
                <p>
                  Start with your Google Business Profile and website basics.
                  These usually give the fastest local improvements.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do I need a website for SEO?
                </h4>
                <p>
                  A website is strongly recommended. It gives you a place to
                  explain your services and turn searchers into enquiries.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. What is local SEO?
                </h4>
                <p>
                  Local SEO helps your business appear in nearby searches,
                  including map results and &quot;near me&quot; queries.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you serve small businesses outside Lucknow?
                </h4>
                <p>
                  Yes. We work with businesses across India through calls, video
                  meetings and online reports.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Does Zentrix Infotech have a Lucknow office?
                </h4>
                <p>
                  Our offices are in Moradabad and Ghaziabad. We support Lucknow
                  clients through calls, WhatsApp and online reports.
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
              currentSlug="/seo-services-in-lucknow-for-small-business"
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