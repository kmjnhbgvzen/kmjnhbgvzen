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
      name: "How can I improve SEO in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fix technical problems, complete your Google Business Profile, target local keywords, collect reviews and publish helpful content regularly.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to improve SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early signs often appear in two to three months. Stronger results usually build over six months or more.",
      },
    },
    {
      "@type": "Question",
      name: "What is the first step to improve my SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check your current position, set up Search Console and Analytics, and fix basic website problems such as speed and mobile layout.",
      },
    },
    {
      "@type": "Question",
      name: "Is Google Business Profile important for SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It strongly influences map results and near me searches, which matter a lot for local businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Do reviews help SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Real reviews build trust and support local visibility. Never buy or fake reviews.",
      },
    },
    {
      "@type": "Question",
      name: "Can I improve SEO without paying an agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many basic steps can be done yourself. Complex technical and strategy work often benefits from expert help.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to improve SEO in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on your goals and website. We share a written quote after a free review, with no hidden charges.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nobody can honestly guarantee rankings. We focus on clear work, honest reporting and steady improvement.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help from outside Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work through calls, video meetings and WhatsApp, and we do not claim a Lucknow office.",
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
              How To Improve SEO In Lucknow: A Practical 12-Step Plan
            </h2>

            <p>
              Your business may have a good website, fair prices and happy
              customers, yet still not appear when people in Lucknow search for
              what you sell. The reason is usually not bad luck. It is a set of
              fixable gaps in how your website and online profiles are set up.
            </p>

            <p>
              This guide shows how to improve SEO in Lucknow step by step. It is
              written for shop owners, clinics, coaching centres, service
              providers, startups and online sellers. You can follow many steps
              yourself, and you can bring in our team for the rest.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Improving SEO Matters for Lucknow Businesses
            </h3>

            <p>
              Customers in Hazratganj, Gomti Nagar, Aliganj, Indira Nagar and
              across the city now search first and decide quickly. They look at
              the map, compare ratings, open two or three websites and then
              call. If you are missing at any of those steps, you lose the
              enquiry.
            </p>

            <p>Better SEO helps you:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Appear when nearby customers search for your service
              </li>
              <li>
                Earn trust through reviews, clear pages and a professional site
              </li>
              <li>
                Get steady enquiries without paying for every click
              </li>
              <li>
                Build visibility that lasts for months and years
              </li>
            </ul>

            <p>
              SEO needs patience. Early gains often appear in two to three
              months, and stronger results usually build over six months or
              more. The steps below put your effort in the right order.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Phase 1: Build a Strong Foundation (Steps 1 to 4)
            </h3>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 1: Check Where You Stand
            </h4>

            <p>Before changing anything, find out your starting point.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Search for your main services in an incognito window and note
                where you appear
              </li>
              <li>
                Search your business name and see what Google shows
              </li>
              <li>
                Open Google Search Console and Google Analytics, or set them up
                if you have not
              </li>
              <li>
                Note your monthly calls, forms and WhatsApp messages
              </li>
            </ul>

            <p>
              Without a starting point, you cannot tell whether SEO is working.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 2: Fix Basic Technical Problems
            </h4>

            <p>
              Technical issues quietly hold back every other effort. Check these
              first:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Does your website load fast on a mobile phone?
              </li>
              <li>
                Does it display correctly on small screens?
              </li>
              <li>
                Are there broken links or missing pages?
              </li>
              <li>
                Does your site use a secure address?
              </li>
              <li>
                Can Google crawl and index your important pages?
              </li>
            </ul>

            <p>
              Compressing images, removing heavy scripts and fixing broken links
              often make a visible difference.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 3: Research the Words Your Customers Really Use
            </h4>

            <p>
              Lucknow customers search in English, Hindi and Hinglish. A person
              may type <em>best dentist in Gomti Nagar</em> or a more casual mix
              of Hindi and English. Make a list of the searches your customers
              might use, grouped by service and area, and choose one main
              keyword for each important page.
            </p>

            <p>
              Free ideas come from Google autocomplete, related searches and the
              questions your customers ask on calls.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 4: Clean Up Your Website Structure
            </h4>

            <p>
              Give each service its own page. Avoid one long page that tries to
              rank for everything. Keep menus simple, link related pages
              together and make sure every important page is reachable within a
              few clicks.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Phase 2: Win Local Visibility (Steps 5 to 8)
            </h3>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 5: Complete Your Google Business Profile
            </h4>

            <p>
              For most local businesses, this is the highest-return step. Make
              sure your profile has:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                The correct business name, without extra keywords
              </li>
              <li>
                The right primary category and relevant extra categories
              </li>
              <li>
                Accurate address, phone number, website and timings
              </li>
              <li>
                A full list of services or products
              </li>
              <li>
                Recent, real photos of your shop, team and work
              </li>
              <li>
                Regular posts about offers, events or updates
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 6: Keep Your Details Consistent Everywhere
            </h4>

            <p>
              Your name, address and phone number should match across your
              website, social pages and trusted directories. Even small
              differences, such as a different phone number or a changed
              spelling, can confuse search engines and customers.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 7: Collect and Answer Reviews
            </h4>

            <p>
              Reviews affect both rankings and trust. Ask happy customers to
              leave a review right after a sale or visit, and share a simple
              link to make it easy. Reply politely to every review, including
              negative ones. Never buy reviews or ask friends to post false
              ones, since this can harm your profile.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 8: Create Useful Area and Service Pages
            </h4>

            <p>
              If you serve several parts of the city, plan pages for areas such
              as Hazratganj, Gomti Nagar, Aliganj, Indira Nagar, Alambagh or
              Chowk, but only when each page offers real value, such as
              directions, landmarks and services for that area. Never copy one
              page and only change the area name.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Phase 3: Grow Traffic and Authority (Steps 9 to 12)
            </h3>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 9: Improve Your On-Page SEO
            </h4>

            <p>For each important page, check:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                The title tag includes the main keyword and your brand
              </li>
              <li>
                The meta description is clear and encourages a click
              </li>
              <li>
                There is one main heading and several helpful subheadings
              </li>
              <li>
                Images have descriptive file names and alt text
              </li>
              <li>
                The page answers the customer question fully
              </li>
              <li>
                A clear call to action appears, such as call, WhatsApp or book
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 10: Publish Helpful Content
            </h4>

            <p>
              Write about the questions your customers already ask. A clinic can
              explain common treatments, a coaching centre can share exam
              guidance and a store can publish buying guides. Use short
              paragraphs, plain language and clear headings. Answering questions
              directly also helps with voice search and with AI-style search
              summaries.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 11: Earn Quality Backlinks
            </h4>

            <p>
              Links from trusted, relevant websites tell Google that your
              business is credible. Good sources include local business
              directories, industry associations, partner websites, news
              mentions and guest articles. Avoid link packages that promise
              hundreds of links for a very low price, since these can cause
              damage.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Step 12: Track, Review and Improve Every Month
            </h4>

            <p>Each month, review:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Calls and WhatsApp clicks from search and maps
              </li>
              <li>
                Profile views and direction requests
              </li>
              <li>
                Form submissions and appointment requests
              </li>
              <li>
                Traffic to your key pages
              </li>
              <li>
                Keywords that are rising or falling
              </li>
            </ul>

            <p>
              Then decide what to improve next. SEO works best as a steady habit
              and not as a one-time task.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common SEO Mistakes in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Targeting too many keywords on one page
              </li>
              <li>
                Keeping a slow website that frustrates mobile users
              </li>
              <li>
                Stuffing keywords into the business name
              </li>
              <li>
                Using a fake address or virtual office
              </li>
              <li>
                Ignoring negative reviews
              </li>
              <li>
                Copying content from other websites
              </li>
              <li>
                Never updating old pages or photos
              </li>
              <li>
                Expecting results in a few days
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Simple 90-Day Improvement Plan
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Days 1 to 30:</strong> Check your baseline, fix
                technical problems, complete your Business Profile and finalize
                your keyword list.
              </li>
              <li>
                <strong>Days 31 to 60:</strong> Improve your top service pages,
                clean up listings, start collecting reviews and publish your
                first helpful content.
              </li>
              <li>
                <strong>Days 61 to 90:</strong> Add area pages where useful,
                build quality links, improve conversion elements and review your
                first data.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What You Can Do Yourself and When to Get Help
            </h3>

            <p>
              You can do many tasks on your own: photos, review requests, basic
              profile updates, answering questions and sharing customer stories.
              Technical fixes, keyword strategy, content planning, link building
              and reporting often work better with an experienced team,
              especially when your time is limited or competition is strong.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Zentrix Infotech Helps
            </h3>

            <p>
              Zentrix Infotech is an IT and digital marketing company with a
              4.7 out of 5 rating, more than 250 projects and more than 270
              clients. We work across websites, software, mobile apps, UI/UX,
              cloud and digital marketing, so we can improve your SEO and also
              fix the website behind it.
            </p>

            <p>
              We start with a clear review of your website and Business Profile,
              share what matters first and then support you with technical SEO,
              on-page work, local SEO, content and monthly reporting.
            </p>

            <p>
              Clients describe results in their own words. Jai Balaji Bath and
              Tiles says its local visibility improved and enquiries now arrive
              steadily through search and social media. Ahlawat Pharmacy says
              people now discover it through search and social ads, with orders
              and footfall growing steadily. Jigyasa Hospital reports a
              consistent rise in patient enquiries from Google and social media.
            </p>

            <p>
              Our offices are in Moradabad and Ghaziabad, and we support Lucknow
              clients through calls, video meetings and WhatsApp. We do not
              claim a Lucknow office, and we do not promise fixed rankings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get a Free SEO Review
            </h3>

            <p>
              Send us your website address and your main goal. We will tell you
              honestly what to fix first and what can wait.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Call:</strong>{" "}
                <a
                  href="tel:+917248800839"
                  className="text-blue-600 hover:underline"
                >
                  +91 72488 00839
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{" "}
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
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@zentrixinfotech.com"
                  className="text-blue-600 hover:underline"
                >
                  info@zentrixinfotech.com
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.zentrixinfotech.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.zentrixinfotech.com/
                </a>
              </li>
            </ul>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free SEO Review
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. How can I improve SEO in Lucknow?
                </h4>
                <p>
                  Fix technical problems, complete your Google Business Profile,
                  target local keywords, collect reviews and publish helpful
                  content regularly.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How long does it take to improve SEO?
                </h4>
                <p>
                  Early signs often appear in two to three months. Stronger
                  results usually build over six months or more.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. What is the first step to improve my SEO?
                </h4>
                <p>
                  Check your current position, set up Search Console and
                  Analytics, and fix basic website problems such as speed and
                  mobile layout.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Is Google Business Profile important for SEO?
                </h4>
                <p>
                  Yes. It strongly influences map results and near me searches,
                  which matter a lot for local businesses.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do reviews help SEO?
                </h4>
                <p>
                  Yes. Real reviews build trust and support local visibility.
                  Never buy or fake reviews.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can I improve SEO without paying an agency?
                </h4>
                <p>
                  Yes, many basic steps can be done yourself. Complex technical
                  and strategy work often benefits from expert help.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. How much does it cost to improve SEO in Lucknow?
                </h4>
                <p>
                  Cost depends on your goals and website. We share a written
                  quote after a free review, with no hidden charges.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you guarantee first-page rankings?
                </h4>
                <p>
                  No. Nobody can honestly guarantee rankings. We focus on clear
                  work, honest reporting and steady improvement.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Can you help from outside Lucknow?
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
              currentSlug="/how-to-improve-seo-in-lucknow"
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