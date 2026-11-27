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
      name: "What does an SEO company in Lucknow do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It improves your website and online profile so you appear in search results. This includes local SEO, technical fixes, content and tracking.",
      },
    },
    {
      "@type": "Question",
      name: "Is SEO different for different businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A local shop, an e-commerce store and a B2B exporter need different keywords, pages and priorities.",
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
      name: "Can you guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search results change often, so no honest company can guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help an e-commerce store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We optimize product pages, speed and site structure, and we can fix store issues directly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle businesses with several branches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build a clear page and profile for each location and keep details consistent.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We plan around your size, goals and budget, starting with the highest-impact work.",
      },
    },
    {
      "@type": "Question",
      name: "Will I get regular reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You receive clear updates on enquiries, visibility and work completed.",
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
              Lucknow SEO Company: SEO That Fits the Way Your Business Actually
              Works
            </h2>


            <p>
              A local sweet shop, a hospital, an online chikankari store and a
              B2B exporter all want to be found on Google. But they should not
              receive the same SEO plan. Their customers search differently,
              decide differently and buy differently.
            </p>


            <p>
              That is the idea behind our SEO work at Zentrix Infotech. We are
              an IT and digital company that designs and builds websites and
              software and also runs digital marketing, and we shape SEO around
              your business model rather than a one-size-fits-all package. This
              page explains how SEO changes from one type of business to
              another, and how we help each one.
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
              What an SEO Company Should Do
            </h3>


            <p>
              An SEO company helps your website and online profile appear in
              search results when customers look for what you offer. A complete
              service usually includes:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                Local SEO for map results and &ldquo;near me&rdquo; searches.
              </li>
              <li>
                On-page SEO so every page is clear and well structured.
              </li>
              <li>
                Technical SEO so your site is fast, secure and easy for Google
                to read.
              </li>
              <li>Content that answers real customer questions.</li>
              <li>
                Authority building through quality listings and mentions.
              </li>
              <li>
                Tracking and reporting so you can see what is working.
              </li>
            </ul>


            <p>
              The difference between companies lies in how well they apply
              these to your situation.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Lucknow Customers Search
            </h3>


            <p>Understanding local behaviour is the starting point. In Lucknow, many customers:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                Search on mobile, often while travelling or comparing options.
              </li>
              <li>
                Use &ldquo;near me&rdquo; and area-based phrases, such as a
                neighbourhood name.
              </li>
              <li>
                Mix English, Hindi and Hinglish in the same search.
              </li>
              <li>
                Check Google reviews and photos before calling.
              </li>
              <li>
                Prefer to call or message on WhatsApp rather than fill long
                forms.
              </li>
            </ul>


            <p>
              A good SEO plan reflects these habits: mobile-friendly pages,
              clear contact buttons, local content and a strong Google Business
              Profile.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              SEO by Business Model
            </h3>


            <h4 className="text-lg font-semibold text-gray-900">
              1. Local Shops and Walk-In Businesses
            </h4>
            <p>
              <strong>Examples:</strong> Retail stores, salons, bakeries,
              clinics, coaching centres.
            </p>
            <p>
              <strong>What matters most:</strong> Google Business Profile,
              reviews, photos, accurate hours and map visibility.
            </p>
            <p>
              <strong>Our approach:</strong> We complete and optimize your
              profile, build clear pages for your main products or services,
              set up a review routine and track calls and direction requests.
              The goal is to help nearby customers choose you.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              2. Service-Area Businesses
            </h4>
            <p>
              <strong>Examples:</strong> Home services, interiors, event
              planners, repair and installation providers.
            </p>
            <p>
              <strong>What matters most:</strong> Showing the areas you serve,
              proving your quality and making it easy to request a quote.
            </p>
            <p>
              <strong>Our approach:</strong> We build service pages for each
              main offering, include project photos and clear enquiry options,
              and optimize for the areas you actually cover. We avoid creating
              thin pages for places you do not serve.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              3. B2B Companies and Exporters
            </h4>
            <p>
              <strong>Examples:</strong> Manufacturers, suppliers, handicraft
              exporters, industrial services.
            </p>
            <p>
              <strong>What matters most:</strong> Being found by buyers
              researching suppliers, with clear product information and trust
              signals.
            </p>
            <p>
              <strong>Our approach:</strong> We create detailed product or
              service pages, catalogue-style content, enquiry or quote forms
              and content that answers a buyer&rsquo;s technical questions. B2B
              decisions take longer, so we plan content for research and
              comparison.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              4. E-Commerce Stores
            </h4>
            <p>
              <strong>Examples:</strong> Online shops for fashion, food,
              crafts, wellness or home goods.
            </p>
            <p>
              <strong>What matters most:</strong> Fast pages, clear product
              listings, good category structure and a smooth path to checkout.
            </p>
            <p>
              <strong>Our approach:</strong> We optimize product and category
              pages, improve speed and mobile experience, structure the site so
              Google can read it, and create helpful content around what
              shoppers search for. Because we build websites, we can fix store
              problems directly.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              5. Multi-Location Businesses
            </h4>
            <p>
              <strong>Examples:</strong> Clinics with branches, retail chains,
              franchises, coaching networks.
            </p>
            <p>
              <strong>What matters most:</strong> A clear page and profile for
              every location, with consistent details.
            </p>
            <p>
              <strong>Our approach:</strong> We create a dedicated page and
              Google profile for each branch, keep business information
              consistent and make sure customers reach the right location.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              6. Hospitals, Schools and Institutions
            </h4>
            <p>
              <strong>Examples:</strong> Hospitals, colleges, schools, training
              institutes.
            </p>
            <p>
              <strong>What matters most:</strong> Trust, accuracy and clear
              information for different audiences, such as patients or parents.
            </p>
            <p>
              <strong>Our approach:</strong> We organize content by department,
              course or service, keep information accurate and up to date, and
              make contact and admission or appointment steps easy. For
              sensitive topics like health, we focus on careful, accurate
              content.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              7. New Businesses
            </h4>
            <p>
              <strong>Examples:</strong> Startups and recently opened shops or
              practices.
            </p>
            <p>
              <strong>What matters most:</strong> Building a foundation quickly
              and sensibly.
            </p>
            <p>
              <strong>Our approach:</strong> We start with a clear website, a
              complete Google profile and pages for the main services, then
              grow content and reviews steadily.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our SEO Services
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>SEO audit:</strong> A full review of your website,
                profile, content and competitors.
              </li>
              <li>
                <strong>Local SEO:</strong> Google Business Profile, listings,
                reviews and local pages.
              </li>
              <li>
                <strong>Technical SEO:</strong> Speed, mobile experience,
                structure, security and indexing.
              </li>
              <li>
                <strong>On-page SEO:</strong> Titles, descriptions, headings,
                content and internal links.
              </li>
              <li>
                <strong>Keyword research:</strong> Customer-focused phrases in
                English, Hindi and Hinglish.
              </li>
              <li>
                <strong>Content for SEO:</strong> Service pages, guides, FAQs
                and blogs.
              </li>
              <li>
                <strong>Authority building:</strong> Quality listings and
                relevant mentions.
              </li>
              <li>
                <strong>Conversion improvement:</strong> Clearer pages, calls
                to action, call and WhatsApp buttons.
              </li>
              <li>
                <strong>Tracking and reporting:</strong> Plain-language updates
                on enquiries and visibility.
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
              Our Process
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Step 1: Discovery.</strong> We learn about your
                business model, customers and goals.
              </li>
              <li>
                <strong>Step 2: Audit.</strong> We review your website, Google
                profile, content and competitors.
              </li>
              <li>
                <strong>Step 3: Strategy.</strong> We choose priorities, pages,
                keywords and a realistic timeline based on your business type.
              </li>
              <li>
                <strong>Step 4: Fix and build.</strong> We handle technical
                fixes, page improvements, local setup and new content.
              </li>
              <li>
                <strong>Step 5: Promote.</strong> We strengthen your
                credibility through quality listings, mentions and reviews.
              </li>
              <li>
                <strong>Step 6: Track and improve.</strong> We monitor results,
                report clearly and adjust the plan month by month.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Our Website Background Helps
            </h3>


            <p>
              Many SEO problems start with the website itself: slow pages, weak
              structure, poor mobile design or unclear service pages. Because
              Zentrix Infotech offers web development, software development,
              mobile apps, UI/UX design, cloud solutions and digital marketing,
              we can fix both the cause and the symptom. You do not need to
              coordinate between a designer, a developer and an SEO company.
              One team can handle it.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Experience and Client Feedback
            </h3>


            <p>
              We have completed more than 250 projects for over 270 clients and
              show a 4.7 out of 5 rating on our website. Our clients come from
              interiors, events, education, healthcare, retail, e-commerce,
              real estate and hospitality. A few experiences, paraphrased from
              their feedback:
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
              timing and effort. These examples show the partnership we aim to
              build.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Results to Expect
            </h3>


            <p>
              SEO is steady work, not an overnight switch. The first weeks
              usually involve audits, fixes and setup. Visibility often improves
              over the following months, and stronger, more stable results come
              with consistent effort. Timelines depend on your business type,
              industry, competition, budget and the starting condition of your
              website. We set milestones so you can see progress, and we do not
              promise fixed rankings.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Judge Any SEO Company
            </h3>


            <p>
              Before you hire anyone, including us, check these points:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Do they ask about your business model first?</strong>{" "}
                Avoid anyone who offers the same package to everyone.
              </li>
              <li>
                <strong>Is the scope written clearly?</strong> You should know
                what is included and for how long.
              </li>
              <li>
                <strong>Do they promise guaranteed rankings?</strong> That is a
                warning sign.
              </li>
              <li>
                <strong>Will you own your accounts?</strong> Your Google
                Business Profile, Analytics and Search Console should stay in
                your name.
              </li>
              <li>
                <strong>How will they report?</strong> Look for calls and
                enquiries, not only rankings.
              </li>
              <li>
                <strong>Can they show real work?</strong> Check examples and
                client feedback.
              </li>
            </ul>


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
              If you want an SEO plan built around your type of business, we
              are happy to review your website and Google presence and suggest
              a practical first step. Call{" "}
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
                  1. What does an SEO company in Lucknow do?
                </h4>
                <p>
                  It improves your website and online profile so you appear in
                  search results. This includes local SEO, technical fixes,
                  content and tracking.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Is SEO different for different businesses?
                </h4>
                <p>
                  Yes. A local shop, an e-commerce store and a B2B exporter
                  need different keywords, pages and priorities.
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
                  4. Can you guarantee first-page rankings?
                </h4>
                <p>
                  No. Search results change often, so no honest company can
                  guarantee a position.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can you help an e-commerce store?
                </h4>
                <p>
                  Yes. We optimize product pages, speed and site structure, and
                  we can fix store issues directly.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do you handle businesses with several branches?
                </h4>
                <p>
                  Yes. We build a clear page and profile for each location and
                  keep details consistent.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you work with small businesses?
                </h4>
                <p>
                  Yes. We plan around your size, goals and budget, starting with
                  the highest-impact work.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Will I get regular reports?
                </h4>
                <p>
                  Yes. You receive clear updates on enquiries, visibility and
                  work completed.
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