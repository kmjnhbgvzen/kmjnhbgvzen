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
      name: "What are affordable SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are budget-friendly SEO plans with a clear written scope, focused on tasks that bring customers rather than unnecessary extras.",
      },
    },
    {
      "@type": "Question",
      name: "How much do affordable SEO services cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on your goals, competition and website. We give a written quote after a free review, with no hidden charges.",
      },
    },
    {
      "@type": "Question",
      name: "Is cheap SEO bad for my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very cheap SEO can be risky if it uses copied content or bulk links. Choose clear scope and honest methods over the lowest price.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early signs often appear in two to three months. Stronger results usually build over six months or more.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nobody can honestly guarantee rankings. We promise clear work, honest reports and steady effort.",
      },
    },
    {
      "@type": "Question",
      name: "Can a small shop benefit from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Local SEO and a strong Google Business Profile help nearby customers find shops, clinics and service providers.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a long contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We prefer plans that stay flexible, so you continue only when you see value.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start with a small plan and grow later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We begin with the highest-impact tasks and add more as your results and budget grow.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside your office city?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve Lucknow clients through calls, video meetings and WhatsApp, and we do not claim a Lucknow office.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Affordable SEO Services",
  serviceType: "Search Engine Optimization",
  description:
    "Affordable local SEO, on-page SEO, technical SEO, content support, ecommerce SEO and monthly reporting for small businesses in Lucknow and Uttar Pradesh.",
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
    "https://www.zentrixinfotech.com/lucknow/affordable-seo-services-in-lucknow",
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
      name: "Affordable SEO Services in Lucknow",
      item:
        "https://www.zentrixinfotech.com/lucknow/affordable-seo-services-in-lucknow",
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
              Affordable SEO Services in Lucknow: Real Growth Without Wasting
              Your Budget
            </h2>

            <p>
              Every small business owner in Lucknow asks the same question: how
              can I get found on Google without spending like a big brand?
              Whether you run a boutique in Hazratganj, a clinic in Gomti
              Nagar, a coaching centre in Aliganj or a trading business in
              Aminabad, your budget is limited and every rupee must work.
            </p>

            <p>
              Affordable SEO services are not about paying the lowest amount.
              They are about spending on the right tasks in the right order, so
              your website starts bringing calls and enquiries without wasted
              effort. This page explains what affordable SEO should really
              mean, where to spend first, which warning signs to avoid and how
              Zentrix Infotech helps businesses grow step by step.
            </p>

            <p>
              Ready to start? Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              for a free review.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free SEO Review
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affordable SEO Should Really Mean
            </h3>

            <p>
              Cheap and affordable are not the same thing. A very low price
              often means copied content, bulk links or no real work at all.
              Affordable means fair pricing for clear, useful work.
            </p>

            <p>A genuinely affordable SEO plan has:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                A written scope that lists exactly what you get each month
              </li>
              <li>
                Work focused on pages and searches that can bring customers
              </li>
              <li>
                No long lock-in that traps you if the work is poor
              </li>
              <li>
                Reports that show calls, enquiries and map views
              </li>
              <li>
                Honest timelines, because SEO builds over months
              </li>
            </ul>

            <p>
              If a plan misses any of these, it is not affordable. It is just
              cheap.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why SEO Still Gives Strong Value for Small Budgets
            </h3>

            <p>
              Paid ads stop the moment you stop paying. SEO keeps working. A
              well-written service page, an optimized Google Business Profile
              and a few helpful blogs can bring customers for months after the
              work is done.
            </p>

            <p>
              For a Lucknow business with a tight budget, SEO offers:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Steady traffic that grows over time</li>
              <li>Customers who already search for what you sell</li>
              <li>Higher trust, because people trust organic results</li>
              <li>Lower cost per enquiry in the long run</li>
            </ul>

            <p>
              SEO is not instant, and anyone who promises overnight rankings is
              not being honest. But it is one of the most budget-friendly ways
              to build lasting visibility.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Where to Spend First When Your Budget Is Small
            </h3>

            <p>
              You do not need every SEO service on day one. The smartest
              approach is to start with the tasks that give the biggest return
              and add more as results arrive.
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Google Business Profile.</strong> For shops, clinics,
                schools, restaurants and service providers, this is usually the
                best first step. A complete profile with correct categories,
                photos, timings, services and reviews helps you appear in map
                results and near me searches.
              </li>
              <li>
                <strong>Fixing Basic Technical Problems.</strong> Slow pages,
                broken links, missing mobile layout and crawl errors quietly
                hurt every other effort. Fixing the biggest problems first
                protects your investment.
              </li>
              <li>
                <strong>Optimizing Your Main Service Pages.</strong> Your top
                three to five pages should have clear titles, headings,
                descriptions and a strong call to action. Strong core pages
                often bring more results than many weak ones.
              </li>
              <li>
                <strong>Local Keywords in Hindi, English and Hinglish.</strong>{" "}
                Lucknow customers type in different ways. Matching the words
                they really use helps you reach buyers that bigger agencies
                often miss.
              </li>
              <li>
                <strong>Reviews and Trust.</strong> Simple review requests
                after each sale or visit build trust and improve local
                visibility at almost no extra cost.
              </li>
              <li>
                <strong>Helpful Content.</strong> Once the foundation is ready,
                add blogs and guides that answer real customer questions.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Affordable SEO Services
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local SEO.</strong> Business Profile setup and
                improvement, accurate listings, area-based pages and a review
                plan that fits your business.
              </li>
              <li>
                <strong>On-Page SEO.</strong> Better titles, headings,
                descriptions, images and internal links on your most important
                pages.
              </li>
              <li>
                <strong>Technical SEO.</strong> Speed checks, mobile fixes,
                sitemap and robots setup, structured data and clean site
                structure.
              </li>
              <li>
                <strong>Content Support.</strong> Practical service pages and
                short blogs written for your customers, not for search engines
                alone.
              </li>
              <li>
                <strong>Ecommerce SEO.</strong> Category and product page
                optimization for online stores, so products appear for buying
                searches.
              </li>
              <li>
                <strong>Reporting and Guidance.</strong> A clear monthly
                summary of what was done, what changed and what comes next.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Keep SEO Affordable Without Cutting Quality
            </h3>

            <p>
              We keep cost under control through planning and not through
              shortcuts.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Phased work:</strong> We start with the
                highest-impact tasks and expand only when you are ready.
              </li>
              <li>
                <strong>Clear scope:</strong> You know what is included before
                you pay.
              </li>
              <li>
                <strong>One team:</strong> Our web, design and marketing teams
                work together, so fixes and updates do not need separate
                vendors.
              </li>
              <li>
                <strong>Reuse what you have:</strong> We improve existing pages
                and content before creating new ones.
              </li>
              <li>
                <strong>No filler:</strong> We skip tasks that add cost but
                little value.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What You Can Do Yourself to Save Money
            </h3>

            <p>
              Some tasks are simple and help your results while lowering your
              SEO spend:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Ask happy customers for Google reviews</li>
              <li>Share clear photos of your shop, team and work</li>
              <li>
                Keep your phone number, address and timings the same everywhere
              </li>
              <li>Reply to every review politely</li>
              <li>
                Send us real customer questions so we can turn them into
                content
              </li>
            </ul>

            <p>These small actions make your agency work go further.</p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Simple SEO Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Free review:</strong> We look at your website and
                Google Business Profile and share the biggest opportunities.
              </li>
              <li>
                <strong>Goal setting:</strong> We agree on what success means,
                such as more calls, form fills or store visits.
              </li>
              <li>
                <strong>Starter plan:</strong> We prepare a clear, prioritized
                plan that fits your budget.
              </li>
              <li>
                <strong>Implementation:</strong> Fixes and updates go live in
                stages.
              </li>
              <li>
                <strong>Monthly review:</strong> We share a report and decide
                the next step together.
              </li>
              <li>
                <strong>Scale when ready:</strong> As results appear, we add
                more pages, content and areas.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Trust Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech is an IT and digital marketing company with a
              4.7 out of 5 rating, more than 250 projects and more than 270
              clients. Our services cover websites, software, mobile apps,
              UI/UX, cloud and digital marketing, so your SEO is supported by
              the people who build and design your site.
            </p>

            <p>
              Our clients speak about the results in their own words. Jai
              Balaji Bath and Tiles says its local visibility improved and
              enquiries now arrive steadily through search and social media.
              Ahlawat Pharmacy says people now discover it through search and
              social ads, with orders and footfall growing steadily. Jigyasa
              Hospital reports a consistent rise in patient enquiries from
              Google and social media, and Kairvi Fort Resort credits our
              campaigns with a noticeable boost in bookings during peak
              seasons.
            </p>

            <p>
              Our offices are in Moradabad and Ghaziabad, and we support
              Lucknow clients through calls, video meetings and WhatsApp.
              Results vary by business, and we do not promise fixed rankings.
            </p>

            <p>
              Want to discuss your SEO goals? Email{" "}
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
              Warning Signs of Fake Affordable SEO
            </h3>

            <p>Protect your budget by avoiding these red flags:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Guaranteed first-page rankings</li>
              <li>
                Prices that are far below every other quote, with no written
                scope
              </li>
              <li>
                No access to your own Search Console, Analytics or Business
                Profile
              </li>
              <li>Copied or machine-spun content</li>
              <li>Bulk link buying or link exchange schemes</li>
              <li>Long contracts with heavy penalties</li>
              <li>
                Reports with only keyword positions and no enquiry data
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Hidden Costs to Ask About
            </h3>

            <p>Before you sign, ask these questions:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Is content writing included, or charged separately?
              </li>
              <li>Are technical fixes included?</li>
              <li>
                Who pays for tools, directories or paid listings?
              </li>
              <li>What happens to my accounts if I leave?</li>
              <li>Can I pause or change the plan?</li>
            </ul>

            <p>
              A good agency answers each of these clearly and in writing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Who Should Choose Affordable SEO
            </h3>

            <p>This approach suits:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Local shops and showrooms</li>
              <li>Clinics, dentists and diagnostic centres</li>
              <li>Coaching centres and schools</li>
              <li>Restaurants, cafes and event businesses</li>
              <li>Startups and new online stores</li>
              <li>
                Service providers such as interior designers, repair services
                and consultants
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your SEO Journey with Zentrix Infotech
            </h3>

            <p>
              If you want visibility that fits your budget, start with a free
              review of your website and Google Business Profile. We will tell
              you honestly what matters first and what can wait.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Call:{" "}
                <a
                  href="tel:+917248800839"
                  className="text-blue-600 hover:underline"
                >
                  +91 72488 00839
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/916397036898"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 63970 36898
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@zentrixinfotech.com"
                  className="text-blue-600 hover:underline"
                >
                  info@zentrixinfotech.com
                </a>
              </li>
              <li>
                Website:{" "}
                <Link
                  href="https://www.zentrixinfotech.com/"
                  className="text-blue-600 hover:underline"
                >
                  https://www.zentrixinfotech.com/
                </Link>
              </li>
            </ul>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request an Affordable SEO Plan
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What are affordable SEO services?
                </h4>
                <p>
                  They are budget-friendly SEO plans with a clear written
                  scope, focused on tasks that bring customers rather than
                  unnecessary extras.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How much do affordable SEO services cost in Lucknow?
                </h4>
                <p>
                  Cost depends on your goals, competition and website. We give
                  a written quote after a free review, with no hidden charges.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Is cheap SEO bad for my website?
                </h4>
                <p>
                  Very cheap SEO can be risky if it uses copied content or bulk
                  links. Choose clear scope and honest methods over the lowest
                  price.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does SEO take to show results?
                </h4>
                <p>
                  Early signs often appear in two to three months. Stronger
                  results usually build over six months or more.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do you guarantee rankings?
                </h4>
                <p>
                  No. Nobody can honestly guarantee rankings. We promise clear
                  work, honest reports and steady effort.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can a small shop benefit from SEO?
                </h4>
                <p>
                  Yes. Local SEO and a strong Google Business Profile help
                  nearby customers find shops, clinics and service providers.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do I need a long contract?
                </h4>
                <p>
                  No. We prefer plans that stay flexible, so you continue only
                  when you see value.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can I start with a small plan and grow later?
                </h4>
                <p>
                  Yes. We begin with the highest-impact tasks and add more as
                  your results and budget grow.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you work with businesses outside your office city?
                </h4>
                <p>
                  Yes. We serve Lucknow clients through calls, video meetings
                  and WhatsApp, and we do not claim a Lucknow office.
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
                    href="/seo-services-in-lucknow"
                    className="text-blue-600 hover:underline"
                  >
                    SEO Services in Lucknow
                  </Link>
                </li>
                <li>
                  <Link
                    href="/seo-company-in-lucknow"
                    className="text-blue-600 hover:underline"
                  >
                    SEO Company in Lucknow
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
                    href="/services/web-development"
                    className="text-blue-600 hover:underline"
                  >
                    Web Development Services
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
              currentSlug="/affordable-seo-services-in-lucknow"
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