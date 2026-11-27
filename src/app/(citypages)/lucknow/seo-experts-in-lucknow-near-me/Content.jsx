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
      name: "Who are the best SEO experts in Lucknow near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best fit is a team with a clear process, verifiable work, honest reporting and experience in your industry. Compare a few providers using those points.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings, WhatsApp and online reports.",
      },
    },
    {
      "@type": "Question",
      name: "What does an SEO expert do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An SEO expert improves your website and online presence so you appear in search results. This includes keyword research, on-page work, technical fixes, content and local SEO.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies by competition and website condition. Many businesses see early movement within a few months, with stronger results over time.",
      },
    },
    {
      "@type": "Question",
      name: "Can you guarantee a first-page ranking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nobody honestly can. We focus on proven work and clear reporting, and we avoid guaranteed-ranking promises.",
      },
    },
    {
      "@type": "Question",
      name: "What is local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO helps your business appear when people search nearby, including map results and &quot;near me&quot; searches.",
      },
    },
    {
      "@type": "Question",
      name: "Is SEO better than paid ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They serve different goals. Ads bring faster traffic while you pay, and SEO builds lasting visibility. Many businesses use both.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We plan SEO around your size, goals and budget, starting with the highest-impact work first.",
      },
    },
    {
      "@type": "Question",
      name: "Will I get regular reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You receive clear updates on enquiries, traffic, visibility and the work completed.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com. We will review your website and suggest a practical plan.",
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
              SEO Experts in Lucknow Near Me: Local Specialists Who Make You
              Easier to Find
            </h2>

            <p>
              When a customer in Lucknow searches for a service on their phone,
              they usually pick from the first few results. If your business is
              not there, that customer goes to a competitor. SEO experts help
              you appear in those results so people who are already looking for
              you can find you.
            </p>

            <p>
              At Zentrix Infotech, we help businesses grow their visibility on
              Google through local SEO, technical SEO, on-page optimization and
              useful content. If you have been typing &quot;SEO experts in
              Lucknow near me&quot; and comparing options, this page explains
              what a real SEO expert does, what to expect, and how to choose
              with confidence.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
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
              What &quot;SEO Experts Near Me&quot; Really Means
            </h3>

            <p>Most people searching this phrase want three things:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Someone who understands the Lucknow market and how local
                customers search.
              </li>
              <li>
                Someone easy to reach, with clear communication and honest
                reporting.
              </li>
              <li>
                Someone who delivers visible progress, not vague promises.
              </li>
            </ul>

            <p>
              SEO is done online, so the best expert for you is not decided
              only by distance. Strategy, process and accountability matter
              more. Our offices are in Moradabad and Ghaziabad, and we work
              with Lucknow businesses through calls, video meetings, WhatsApp
              and shared reports. You get the attention of a dedicated team
              without waiting for in-person visits.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Lucknow Businesses Need Local SEO
            </h3>

            <p>
              Lucknow is a large, fast-growing market with demand across
              healthcare, education, retail, real estate, hospitality, food,
              handicrafts and professional services. Local competition is
              strong in almost every category.
            </p>

            <p>
              Customers now search with phrases like &quot;near me&quot;,
              &quot;best in Lucknow&quot; and &quot;open now&quot;, often in a
              mix of English and Hindi. Google answers with a map section,
              reviews and a short list of businesses. A business with an
              optimized profile, a fast website and strong local signals has a
              clear advantage over one that has none.
            </p>

            <p>Good SEO gives you:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Higher visibility when people search for your services.
              </li>
              <li>
                Better-quality enquiries, because searchers are already
                interested.
              </li>
              <li>
                Lasting results, since SEO keeps working without paying for
                every click.
              </li>
              <li>
                Stronger trust, because businesses that appear regularly look
                established.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Our SEO Experts Do for You
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Local SEO
            </h4>

            <p>
              Local SEO helps you appear when people search in and around
              Lucknow. We set up and optimize your Google Business Profile,
              keep your name, address and phone details consistent, build
              relevant local listings, and create location-focused pages. We
              also guide you on collecting genuine customer reviews and
              responding to them professionally.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              On-Page SEO
            </h4>

            <p>
              On-page SEO makes each page clear to both visitors and search
              engines. We refine titles, descriptions, headings, internal
              links, images and page structure. Each page is aimed at the real
              questions your customers ask, not stuffed with repeated keywords.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Technical SEO
            </h4>

            <p>
              A slow or broken website loses visitors and rankings. We review
              mobile performance, loading speed, crawlability, indexing, site
              structure and security, then fix what holds your site back. Our
              team builds websites professionally, so we can usually fix
              technical issues directly instead of just listing them.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Keyword Research
            </h4>

            <p>
              We research what your customers actually type, including English,
              Hindi and Hinglish searches. Keywords are grouped by intent:
              people ready to buy, people comparing options, and people who
              just want information. This keeps your content focused on the
              searches that lead to enquiries.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Content Marketing for SEO
            </h4>

            <p>
              Search engines reward helpful content. We plan and write service
              pages, guides, FAQs and blog articles that answer real questions
              in plain language. Good content builds trust with readers and
              gives your site more ways to be found.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Link Building and Authority
            </h4>

            <p>
              We build credibility through relevant, quality mentions and
              listings, and we avoid shortcuts that risk penalties. Authority
              grows steadily when it is earned the right way.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Reporting and Tracking
            </h4>

            <p>
              You should always know what is happening. We set up tracking for
              calls, form fills and key actions, and we share clear reports in
              simple language. We focus on enquiries and business outcomes, not
              only on rankings.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request an SEO Services Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Zentrix Infotech Approaches SEO
            </h3>

            <p>
              Zentrix Infotech is an IT and digital company offering web
              development, software development, mobile apps, UI/UX design,
              cloud solutions and digital marketing. That mix is an advantage
              for SEO. Many SEO problems start with the website itself: weak
              structure, slow pages, poor mobile design or missing content.
              Because we handle design, development and marketing together, we
              can fix the cause and not just the symptom.
            </p>

            <p>Our team is guided by three principles:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Transparency.</strong> You know what we are doing and
                why.
              </li>
              <li>
                <strong>Realistic planning.</strong> SEO takes time, and we
                tell you so. We do not promise fixed rankings or overnight
                results, because no one honestly can.
              </li>
              <li>
                <strong>Business focus.</strong> The goal is more qualified
                enquiries, calls and customers, not traffic for its own sake.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our SEO Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery.</strong> We learn about your business,
                services, customers, location and goals.
              </li>
              <li>
                <strong>Audit.</strong> We review your website, Google Business
                Profile, content, competitors and current search visibility to
                find the biggest opportunities.
              </li>
              <li>
                <strong>Strategy.</strong> We build a plan that covers
                keywords, pages, local signals, content and a realistic
                timeline.
              </li>
              <li>
                <strong>Implementation.</strong> We fix technical issues,
                optimize pages, improve your local presence and publish new
                content.
              </li>
              <li>
                <strong>Promotion.</strong> We strengthen your authority
                through quality local listings, mentions and reviews.
              </li>
              <li>
                <strong>Measure and refine.</strong> We track results, report
                clearly and adjust the plan based on what the data shows.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Proof From Our Work
            </h3>

            <p>
              Zentrix Infotech has completed over 250 projects for more than
              270 clients and holds a 4.7 out of 5 rating on our website. Our
              clients span interiors, weddings and events, education,
              healthcare, retail, real estate, e-commerce and hospitality.
            </p>

            <p>A few client experiences, in their own spirit:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                PS Decor shared that their new website showcases their wedding
                projects well and helped bring more client enquiries.
              </li>
              <li>
                Jigyasa Hospital reported a consistent rise in patient
                enquiries through Google and social media after our website and
                marketing work.
              </li>
              <li>
                Jai Balaji Bath and Tiles said their local visibility improved
                and enquiries now arrive steadily through search and social
                media.
              </li>
              <li>
                Ahlawat Pharmacy said that people now discover them through
                search and social ads, with orders and footfall growing
                steadily.
              </li>
            </ul>

            <p>
              Every business is different, and results depend on competition,
              budget, timing and effort. These examples show the kind of
              partnership we aim for.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Can Help in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Healthcare:</strong> clinics, hospitals, diagnostics
                and wellness brands.
              </li>
              <li>
                <strong>Education:</strong> schools, colleges, coaching
                institutes and training centres.
              </li>
              <li>
                <strong>Real estate and construction:</strong> builders,
                dealers, interiors and home services.
              </li>
              <li>
                <strong>Retail and e-commerce:</strong> local stores, online
                shops and distributors.
              </li>
              <li>
                <strong>Hospitality and food:</strong> hotels, resorts,
                restaurants and bakeries.
              </li>
              <li>
                <strong>Handicrafts, fashion and exports:</strong> chikankari
                sellers, artisans and B2B exporters.
              </li>
              <li>
                <strong>Professional services:</strong> consultants, lawyers,
                accountants and agencies.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Check Any SEO Expert Near You
            </h3>

            <p>Before you hire anyone, including us, ask these questions:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Can they explain their process in plain language?</strong>{" "}
                Good experts do not hide behind jargon.
              </li>
              <li>
                <strong>Do they promise guaranteed rankings?</strong> Be
                careful. Search results change, and an honest expert will not
                guarantee a position.
              </li>
              <li>
                <strong>Will you own your accounts?</strong> Your Google
                Business Profile, Analytics and Search Console should stay
                under your control.
              </li>
              <li>
                <strong>Do they ask about your business first?</strong> A
                strong expert starts with your goals, not a ready-made package.
              </li>
              <li>
                <strong>How will they report?</strong> Look for tracking of
                calls and enquiries, not only rankings.
              </li>
              <li>
                <strong>Can they show real work?</strong> Ask for examples and
                client feedback you can verify.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Results to Expect and When
            </h3>

            <p>
              SEO is a steady process. Early weeks usually involve audits,
              fixes and setup. Improvements in visibility often build over the
              following months, and stronger, more stable results come with
              consistent work. Timelines depend on your industry, your
              competition, the current state of your website and how much
              content and activity you invest in. We set clear milestones so
              you can see progress at every stage.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                A team that combines SEO, web development, design and digital
                marketing under one roof.
              </li>
              <li>
                Experience across more than 270 clients and 250 projects.
              </li>
              <li>
                Clear communication through calls, WhatsApp and regular
                reports.
              </li>
              <li>
                Honest planning with no guaranteed-ranking claims.
              </li>
              <li>
                A focus on enquiries, calls and real business growth.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Ready to Grow Your Visibility in Lucknow?
            </h3>

            <p>
              If you are searching for SEO experts in Lucknow near you, let us
              look at your website and show you where the opportunities are.
              Call +91 72488 00839, message us on WhatsApp, or email
              info@zentrixinfotech.com. Tell us about your business, and we
              will suggest a practical SEO plan that fits your goals.
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
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Talk to Our SEO Team
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Discuss Your SEO Plan
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Get a Free Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions About SEO Services in Lucknow
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Who are the best SEO experts in Lucknow near me?
                </h4>
                <p>
                  The best fit is a team with a clear process, verifiable work,
                  honest reporting and experience in your industry. Compare a
                  few providers using those points.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Does Zentrix Infotech have an office in Lucknow?
                </h4>
                <p>
                  Our offices are in Moradabad and Ghaziabad. We serve Lucknow
                  clients through calls, video meetings, WhatsApp and online
                  reports.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. What does an SEO expert do?
                </h4>
                <p>
                  An SEO expert improves your website and online presence so
                  you appear in search results. This includes keyword research,
                  on-page work, technical fixes, content and local SEO.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does SEO take to show results?
                </h4>
                <p>
                  It varies by competition and website condition. Many
                  businesses see early movement within a few months, with
                  stronger results over time.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can you guarantee a first-page ranking?
                </h4>
                <p>
                  No. Nobody honestly can. We focus on proven work and clear
                  reporting, and we avoid guaranteed-ranking promises.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. What is local SEO?
                </h4>
                <p>
                  Local SEO helps your business appear when people search
                  nearby, including map results and &quot;near me&quot;
                  searches.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Is SEO better than paid ads?
                </h4>
                <p>
                  They serve different goals. Ads bring faster traffic while you
                  pay, and SEO builds lasting visibility. Many businesses use
                  both.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you work with small businesses?
                </h4>
                <p>
                  Yes. We plan SEO around your size, goals and budget, starting
                  with the highest-impact work first.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Will I get regular reports?
                </h4>
                <p>
                  Yes. You receive clear updates on enquiries, traffic,
                  visibility and the work completed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I get started?
                </h4>
                <p>
                  Call +91 72488 00839 or email{" "}
                  <a
                    href="mailto:info@zentrixinfotech.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@zentrixinfotech.com
                  </a>
                  . We will review your website and suggest a practical plan.
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
              currentSlug="/seo-experts-in-lucknow"
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