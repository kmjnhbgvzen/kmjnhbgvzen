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
      name: "What is local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO helps your business appear in nearby searches and on Google Maps, so local customers can find and contact you.",
      },
    },
    {
      "@type": "Question",
      name: "Why is local SEO important in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most customers search on phones and choose nearby businesses. Strong map visibility brings more calls and visits.",
      },
    },
    {
      "@type": "Question",
      name: "How long does local SEO take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early improvements often appear in two to three months. Stronger results usually build over six months or more.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee first position on Google Maps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nobody can honestly guarantee that. We focus on clear work, honest reporting and steady improvement.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a website for local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A website helps a lot. It builds trust and supports your profile, though some businesses start with their profile first.",
      },
    },
    {
      "@type": "Question",
      name: "Can you manage my Google reviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We help you collect real reviews and reply professionally. We never buy or fake reviews.",
      },
    },
    {
      "@type": "Question",
      name: "Does local SEO work for small shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Small shops, clinics and service providers often gain the most from nearby search visibility.",
      },
    },
    {
      "@type": "Question",
      name: "Can you create pages for different Lucknow areas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when each page offers genuine local value. We do not copy pages and only change the area name.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Lucknow from another city?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work through calls, video meetings and WhatsApp, and we do not claim a Lucknow office.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services",
  serviceType: "Local Search Engine Optimization",
  description:
    "Google Business Profile optimization, local website optimization, area-wise pages, citations, review management, local content, schema and reporting for businesses in Lucknow and Uttar Pradesh.",
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
    "https://www.zentrixinfotech.com/lucknow/local-seo-lucknow",
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
      name: "Local SEO Lucknow",
      item:
        "https://www.zentrixinfotech.com/lucknow/local-seo-lucknow",
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
              Local SEO Lucknow: Get Found by Customers Who Are Ready to Buy
              Nearby
            </h2>

            <p>
              When someone in Lucknow searches for a dentist near Gomti Nagar,
              a boutique in Hazratganj or a coaching centre in Aliganj, they
              usually act within hours. They call, ask for directions or visit.
              These searches have strong buying intent, and the businesses
              shown on the map decide who gets that customer.
            </p>

            <p>
              Local SEO is the work that puts your business in front of these
              nearby buyers. This page explains how local search works, what a
              strong local SEO plan includes for Lucknow businesses and how
              Zentrix Infotech helps you build visibility step by step.
            </p>

            <p>
              Ready to improve your local visibility? Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              for a free local SEO review.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Local SEO Review
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Is Local SEO?
            </h3>

            <p>
              Local SEO is the practice of improving how your business appears
              in location-based searches on Google. It covers the map results
              at the top of the page, the regular search results and the
              details shown when someone searches your business name.
            </p>

            <p>
              Local SEO is different from general SEO in one important way.
              General SEO helps you reach people anywhere. Local SEO helps you
              reach people who are close to you and ready to act.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Local SEO Matters in Lucknow
            </h3>

            <p>
              Lucknow is a large city with many busy neighbourhoods. Customers
              rarely travel far for everyday services, so being visible in your
              own area is a major advantage.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Mobile searches dominate.</strong> Most people search
                on phones while they are out.
              </li>
              <li>
                <strong>Near me searches keep growing.</strong> Customers want
                the closest option that looks trustworthy.
              </li>
              <li>
                <strong>Maps influence the final choice.</strong> Many buyers
                decide from the map card without opening a website.
              </li>
              <li>
                <strong>Reviews guide trust.</strong> Ratings and recent
                reviews often decide who gets the call.
              </li>
              <li>
                <strong>Competition is real.</strong> Even small shops now
                invest in their online profiles.
              </li>
            </ul>

            <p>
              If your competitor appears on the map and you do not, they
              receive the call that could have been yours.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Google Decides Local Rankings
            </h3>

            <p>
              Google uses three main ideas to choose which businesses to show
              for a local search.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Relevance:</strong> Does your profile and website match
                what the person searched for?
              </li>
              <li>
                <strong>Distance:</strong> How close is your business to the
                searcher or to the area they mention?
              </li>
              <li>
                <strong>Prominence:</strong> How well known and trusted is your
                business, based on reviews, mentions, links and website
                quality?
              </li>
            </ul>

            <p>
              You cannot change distance, but you can improve relevance and
              prominence. That is exactly where good local SEO works.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Local SEO Services for Lucknow Businesses
            </h3>

            <h4 className="mb-3 font-semibold text-gray-900">
              Google Business Profile Optimization
            </h4>

            <p>
              Your profile is the most important local asset. We help you with:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Choosing the right primary and secondary categories
              </li>
              <li>
                Writing a clear business description in natural language
              </li>
              <li>
                Adding services, products, timings and special hours
              </li>
              <li>
                Uploading real photos of your shop, team and work
              </li>
              <li>
                Setting up messaging, appointment and call options
              </li>
              <li>
                Posting regular updates and offers
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">
              Website and Local Page Optimization
            </h4>

            <p>
              Your website supports your map visibility. We improve titles,
              headings, content, contact details, embedded maps and call
              buttons, and we create clear service pages for real local needs.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Area-Wise Pages
            </h4>

            <p>
              Customers often search by neighbourhood. When it makes sense, we
              plan separate pages for areas such as Hazratganj, Gomti Nagar,
              Aliganj, Indira Nagar, Alambagh and Chowk. Each page must offer
              genuinely useful information, such as directions, nearby
              landmarks and services for that area. We never copy one page and
              only change the area name.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Citations and Business Listings
            </h4>

            <p>
              We make sure your business name, address and phone number are
              consistent across trusted directories and platforms. Inconsistent
              details confuse search engines and customers.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Review Management
            </h4>

            <p>
              We help you build a simple process to ask for reviews, reply to
              every review politely and handle negative feedback professionally.
              Reviews must come from real customers only.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Local Content
            </h4>

            <p>
              We write helpful content about local needs, seasonal demand,
              festivals, common customer questions and area guides. This
              content builds trust and supports your rankings.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Local Schema and Technical Setup
            </h4>

            <p>
              We add structured data, fix mobile problems, improve page speed
              and make sure search engines can read your location details
              clearly.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Tracking and Reporting
            </h4>

            <p>
              We set up call tracking where possible, monitor map actions,
              website visits and enquiries, and share a clear monthly report.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Google Business Profile Checklist
            </h3>

            <p>Use this checklist to review your own profile today:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Business name matches your real signboard and is not stuffed
                with keywords
              </li>
              <li>
                Correct primary category and relevant extra categories
              </li>
              <li>
                Accurate address, phone number, website and timings
              </li>
              <li>
                Service list or product list is complete
              </li>
              <li>
                At least ten clear, recent photos
              </li>
              <li>
                Fresh posts at regular intervals
              </li>
              <li>
                Reviews are answered within a few days
              </li>
              <li>
                Questions and answers are monitored
              </li>
              <li>
                Holiday hours are updated
              </li>
            </ul>

            <p>
              Many Lucknow businesses improve their visibility just by
              completing these basics.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Local SEO by Business Type
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Clinics and hospitals:</strong> Doctor profiles,
                treatment pages and accurate timings. Content must follow
                medical advertising rules.
              </li>
              <li>
                <strong>Retail shops and showrooms:</strong> Product
                categories, store photos, offers and clear directions.
              </li>
              <li>
                <strong>Coaching centres and schools:</strong> Course pages,
                admission details, results shared with permission and easy
                enquiry forms.
              </li>
              <li>
                <strong>Restaurants and cafes:</strong> Menu photos, booking
                options and review replies.
              </li>
              <li>
                <strong>Real estate and builders:</strong> Project pages, site
                location guides and lead forms.
              </li>
              <li>
                <strong>Service providers:</strong> Service area details,
                quick call buttons and customer stories.
              </li>
              <li>
                <strong>Chikankari and handicraft sellers:</strong> Product
                photos, shop location and local plus online store visibility.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Local Searches Happen in Hindi, English and Hinglish
            </h3>

            <p>
              Lucknow customers search in many styles. Some type in English,
              some in Hindi and many use a mix. A good plan includes variations
              such as dentist near me, best dentist Gomti Nagar and Hinglish
              phrases that people actually use. We research real search habits
              instead of guessing, and we write content that feels natural to
              local readers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Local SEO Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Free local review:</strong> We check your profile,
                website, listings and competitors.
              </li>
              <li>
                <strong>Keyword and area research:</strong> We find the
                searches and neighbourhoods that matter most.
              </li>
              <li>
                <strong>Profile and citation cleanup:</strong> We fix errors
                and complete missing details.
              </li>
              <li>
                <strong>On-page and content work:</strong> We improve key
                pages and add local content.
              </li>
              <li>
                <strong>Review and reputation plan:</strong> We set up a simple
                process to collect and answer reviews.
              </li>
              <li>
                <strong>Monthly reporting:</strong> We show what changed and
                decide the next step together.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Your First 90 Days
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Days 1 to 30:</strong> Audit, tracking setup, Business
                Profile completion, citation cleanup and fixing key website
                issues.
              </li>
              <li>
                <strong>Days 31 to 60:</strong> Improve service and area pages,
                publish local content and start the review process.
              </li>
              <li>
                <strong>Days 61 to 90:</strong> Expand to more areas or
                services, refine conversions and review the early data.
              </li>
            </ul>

            <p>
              Many businesses notice better map views and profile actions
              within a few months, while stronger enquiry growth builds over
              time. Results differ for every business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Local SEO Mistakes
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Adding keywords to the business name, which can lead to
                suspension
              </li>
              <li>Using a fake address or a virtual office</li>
              <li>
                Buying reviews or asking friends to write false ones
              </li>
              <li>Ignoring negative reviews</li>
              <li>
                Different phone numbers on different listings
              </li>
              <li>
                Copying the same page for every area
              </li>
              <li>
                Never updating photos or posts
              </li>
            </ul>

            <p>
              Avoiding these mistakes protects your profile and your
              reputation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Measure Local SEO Success
            </h3>

            <p>Focus on actions that matter:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Calls from your profile and website</li>
              <li>Direction requests and WhatsApp clicks</li>
              <li>Profile views for both search and maps</li>
              <li>Review count and average rating</li>
              <li>Form fills and appointment requests</li>
              <li>Organic traffic to local pages</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Trust Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech is an IT and digital marketing company with a
              4.7 out of 5 rating, more than 250 projects and more than 270
              clients. We work across websites, software, mobile apps, UI/UX,
              cloud and digital marketing, so your local SEO is supported by
              the same team that builds and designs your site.
            </p>

            <p>
              Clients describe results in their own words. Jai Balaji Bath and
              Tiles says its local visibility improved and enquiries now come
              steadily through search and social media. Ahlawat Pharmacy says
              people now discover it through search and social ads, with orders
              and footfall growing steadily. Jigyasa Hospital reports a
              consistent rise in patient enquiries from Google and social
              media.
            </p>

            <p>
              Our offices are in Moradabad and Ghaziabad, and we support
              Lucknow clients through calls, video meetings and WhatsApp. We do
              not claim a Lucknow office, and we do not promise fixed rankings.
            </p>

            <p>
              Want to discuss your local visibility? Email{" "}
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
              Start with a Free Local SEO Review
            </h3>

            <p>
              Share your business name and area, and we will review your Google
              Business Profile and website, then tell you honestly what to fix
              first.
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
                Request a Local SEO Plan
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What is local SEO?
                </h4>
                <p>
                  Local SEO helps your business appear in nearby searches and
                  on Google Maps, so local customers can find and contact you.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Why is local SEO important in Lucknow?
                </h4>
                <p>
                  Most customers search on phones and choose nearby businesses.
                  Strong map visibility brings more calls and visits.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does local SEO take to work?
                </h4>
                <p>
                  Early improvements often appear in two to three months.
                  Stronger results usually build over six months or more.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Do you guarantee first position on Google Maps?
                </h4>
                <p>
                  No. Nobody can honestly guarantee that. We focus on clear
                  work, honest reporting and steady improvement.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do I need a website for local SEO?
                </h4>
                <p>
                  A website helps a lot. It builds trust and supports your
                  profile, though some businesses start with their profile
                  first.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can you manage my Google reviews?
                </h4>
                <p>
                  We help you collect real reviews and reply professionally. We
                  never buy or fake reviews.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Does local SEO work for small shops?
                </h4>
                <p>
                  Yes. Small shops, clinics and service providers often gain
                  the most from nearby search visibility.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can you create pages for different Lucknow areas?
                </h4>
                <p>
                  Yes, when each page offers genuine local value. We do not copy
                  pages and only change the area name.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you serve Lucknow from another city?
                </h4>
                <p>
                  Yes. We work through calls, video meetings and WhatsApp, and
                  we do not claim a Lucknow office.
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
              currentSlug="/local-seo-lucknow"
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