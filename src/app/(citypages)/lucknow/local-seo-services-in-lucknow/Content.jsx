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
      name: "What do local SEO services include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically an audit, Google profile optimization, review support, listing clean-up, local pages, website fixes and tracking.",
      },
    },
    {
      "@type": "Question",
      name: "Which local SEO service should I start with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with a local audit and Google Business Profile optimization. They usually give the fastest improvements.",
      },
    },
    {
      "@type": "Question",
      name: "How long do local SEO services take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some fixes help within weeks, while stronger results usually build over a few months of steady work.",
      },
    },
    {
      "@type": "Question",
      name: "Can you guarantee a top map position?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search results change often, so no honest provider can guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "Do you create reviews for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We guide you to collect genuine reviews and never create fake or paid ones.",
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
      name: "Do I need a website for local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is strongly recommended. A good website supports your profile and turns visitors into enquiries.",
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
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com. We will review your profile and website and suggest a plan.",
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
              Local SEO Services in Lucknow: What Is Included and Who It Helps
            </h2>


            <p>
              When customers in Lucknow search for a business nearby, Google
              shows a map and a short list of choices. Local SEO services help
              your business appear in that list, with accurate details, trusted
              reviews and a website that turns searches into calls, visits and
              enquiries.
            </p>


            <p>
              But &ldquo;local SEO services&rdquo; can mean very different
              things from one provider to the next. Some companies only set up
              a profile. Others offer a long menu with unclear details. At
              Zentrix Infotech, we describe each service in plain terms, with
              the specific work you can expect and the type of business it
              suits. This page is your guide.
            </p>


            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Local SEO Consultation
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
              What Are Local SEO Services?
            </h3>


            <p>
              Local SEO services improve how your business appears for searches
              tied to a place, such as &ldquo;dentist in Lucknow,&rdquo;
              &ldquo;furniture shop near me&rdquo; or &ldquo;coaching institute
              in Gomti Nagar.&rdquo; They focus on three ideas Google uses to
              rank local businesses:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Relevance:</strong> How well you match what the
                customer wants.
              </li>
              <li>
                <strong>Distance:</strong> How close you are to the searcher or
                the area they mention.
              </li>
              <li>
                <strong>Prominence:</strong> How well known and trusted your
                business appears online.
              </li>
            </ul>


            <p>
              Distance is fixed, so local SEO services work on relevance and
              prominence through your Google profile, reviews, listings,
              website and content.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Local SEO Services
            </h3>


            <h4 className="text-lg font-semibold text-gray-900">
              1. Local SEO Audit
            </h4>
            <p>
              <strong>What it is:</strong> A full review of your local presence
              before any work begins.
            </p>
            <p>
              <strong>What you get:</strong>
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                Review of your Google Business Profile, website and listings.
              </li>
              <li>
                Check of business name, address and phone consistency.
              </li>
              <li>
                Review summary and rating trend.
              </li>
              <li>
                Comparison with nearby competitors.
              </li>
              <li>
                A prioritised list of actions.
              </li>
            </ul>
            <p>
              <strong>Best for:</strong> Any business starting local SEO, or
              one that has not reviewed its presence in a long time.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              2. Google Business Profile Optimization
            </h4>
            <p>
              <strong>What it is:</strong> Setting up and improving the profile
              that powers your map listing.
            </p>
            <p>
              <strong>What you get:</strong>
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                Claiming and verifying the profile, or fixing an existing one.
              </li>
              <li>
                Correct main and secondary categories.
              </li>
              <li>
                Complete business information, hours and service details.
              </li>
              <li>
                A clear business description.
              </li>
              <li>
                Photo guidance and uploads.
              </li>
              <li>
                Setup of messaging, booking or product sections where relevant.
              </li>
            </ul>
            <p>
              <strong>Best for:</strong> Every local business. This is usually
              the first and most important step.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              3. Review Management Support
            </h4>
            <p>
              <strong>What it is:</strong> Guidance on building and handling
              customer reviews the right way.
            </p>
            <p>
              <strong>What you get:</strong>
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                A simple review-request process, including a shareable link.
              </li>
              <li>
                Message templates you can send to happy customers.
              </li>
              <li>
                Reply guidance for positive and negative reviews.
              </li>
              <li>
                Regular monitoring and suggestions.
              </li>
            </ul>
            <p>
              We never create fake reviews or offer paid reviews, because these
              can seriously harm your business.
            </p>
            <p>
              <strong>Best for:</strong> Businesses with few reviews, uneven
              ratings or no process for replying.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              4. Local Listings and Consistency
            </h4>
            <p>
              <strong>What it is:</strong> Making sure your details are
              accurate and consistent across the web.
            </p>
            <p>
              <strong>What you get:</strong>
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                Audit of existing listings and duplicates.
              </li>
              <li>
                Corrections to wrong or old details.
              </li>
              <li>
                Submission to relevant, trustworthy directories.
              </li>
              <li>
                A record of your listings for future updates.
              </li>
            </ul>
            <p>
              <strong>Best for:</strong> Businesses that have moved, changed
              numbers or appear differently across sites.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              5. Local Landing Pages and Content
            </h4>
            <p>
              <strong>What it is:</strong> Website pages that clearly explain
              your services and where you serve.
            </p>
            <p>
              <strong>What you get:</strong>
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                Service pages built around what your customers search.
              </li>
              <li>
                Natural mentions of the areas you genuinely serve.
              </li>
              <li>
                Clear contact details, calls to action and FAQs.
              </li>
              <li>
                Helpful local content such as guides and answers to common
                questions.
              </li>
            </ul>
            <p>
              We only build pages for places you really serve. Thin, repeated
              pages can do more harm than good.
            </p>
            <p>
              <strong>Best for:</strong> Service businesses, clinics,
              institutes and retailers with several offerings.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              6. On-Page and Technical Support for Local Sites
            </h4>
            <p>
              <strong>What it is:</strong> Fixing the website issues that hold
              local results back.
            </p>
            <p>
              <strong>What you get:</strong>
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                Mobile and speed improvements.
              </li>
              <li>
                Better titles, descriptions, headings and internal links.
              </li>
              <li>
                Tap-to-call and WhatsApp buttons.
              </li>
              <li>
                Basic security and structure checks.
              </li>
            </ul>
            <p>
              Because we design and develop websites, we can make many of these
              fixes directly.
            </p>
            <p>
              <strong>Best for:</strong> Businesses with slow, outdated or
              hard-to-use websites.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              7. Multi-Location SEO
            </h4>
            <p>
              <strong>What it is:</strong> Local SEO for businesses with more
              than one branch.
            </p>
            <p>
              <strong>What you get:</strong>
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                A dedicated page and Google profile for each location.
              </li>
              <li>
                Consistent details across branches.
              </li>
              <li>
                Clear paths so customers reach the right branch.
              </li>
              <li>
                Location-wise tracking.
              </li>
            </ul>
            <p>
              <strong>Best for:</strong> Clinics with branches, retail chains,
              franchises and coaching networks.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              8. Local Tracking and Reporting
            </h4>
            <p>
              <strong>What it is:</strong> Measuring what local SEO is actually
              doing for you.
            </p>
            <p>
              <strong>What you get:</strong>
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                Tracking of calls, direction requests, website clicks, forms
                and WhatsApp messages.
              </li>
              <li>
                Review and rating trends.
              </li>
              <li>
                A simple monthly summary in plain language.
              </li>
              <li>
                Recommendations for the next step.
              </li>
            </ul>
            <p>
              <strong>Best for:</strong> Every business. If you cannot measure
              results, you cannot improve them.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Optional Add-Ons
            </h3>


            <p>Depending on your goals, you can add:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Content support:</strong> Regular blogs, guides and
                FAQs.
              </li>
              <li>
                <strong>Website redesign or improvement:</strong> When the
                current site is the main obstacle.
              </li>
              <li>
                <strong>Social media and paid campaigns:</strong> To support
                local visibility alongside SEO.
              </li>
              <li>
                <strong>Conversion improvement:</strong> Clearer pages and
                enquiry steps.
              </li>
            </ul>


            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request a Local SEO Plan
              </Link>
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Who Our Local SEO Services Suit
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Healthcare:</strong> Clinics, hospitals and wellness
                brands.
              </li>
              <li>
                <strong>Education:</strong> Schools, colleges and coaching
                institutes.
              </li>
              <li>
                <strong>Retail and food:</strong> Shops, restaurants and
                bakeries.
              </li>
              <li>
                <strong>Home and construction services:</strong> Builders,
                interiors and repair providers.
              </li>
              <li>
                <strong>Hospitality and events:</strong> Hotels, resorts and
                event planners.
              </li>
              <li>
                <strong>Handicrafts and fashion:</strong> Chikankari sellers
                and artisans with local stores.
              </li>
              <li>
                <strong>Professional services:</strong> Consultants, lawyers,
                accountants and agencies.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Work
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Step 1: Discovery.</strong> We learn about your
                business, locations, services and goals.
              </li>
              <li>
                <strong>Step 2: Local audit.</strong> We review your profile,
                website, listings, reviews and nearby competitors.
              </li>
              <li>
                <strong>Step 3: Plan.</strong> We prioritize the actions likely
                to help most for your situation.
              </li>
              <li>
                <strong>Step 4: Implementation.</strong> We optimize your
                profile, fix listings, improve pages and add content.
              </li>
              <li>
                <strong>Step 5: Review building.</strong> We guide you in
                gathering genuine reviews and responding well.
              </li>
              <li>
                <strong>Step 6: Track and improve.</strong> We monitor results,
                report clearly and refine the plan every month.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Engagement Options
            </h3>


            <p>We keep arrangements simple. Depending on your needs, you can choose:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>One-time audit and action plan:</strong> A clear review
                with priorities you or your team can follow.
              </li>
              <li>
                <strong>Setup project:</strong> Profile optimization, listing
                clean-up and key pages, completed in a defined phase.
              </li>
              <li>
                <strong>Monthly local SEO support:</strong> Ongoing profile
                care, review guidance, content, tracking and reporting.
              </li>
              <li>
                <strong>Website plus local SEO:</strong> A new or improved
                website built with local search in mind.
              </li>
            </ul>


            <p>
              We explain the scope and deliverables in writing before we begin.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What We Need From You
            </h3>


            <p>Local SEO works best as a partnership. We will usually ask you for:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                Access to your website and Google Business Profile, or help
                creating them.
              </li>
              <li>
                Accurate business details, services and opening hours.
              </li>
              <li>
                Real photos of your premises, team and work.
              </li>
              <li>
                Quick answers to questions and approval of content.
              </li>
              <li>
                Genuine reviews from happy customers over time.
              </li>
            </ul>


            <p>Your accounts always stay in your name.</p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>


            <p>
              Zentrix Infotech is an IT and digital company offering web
              development, software development, mobile apps, UI/UX design,
              cloud solutions and digital marketing. For local SEO, that means:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Website fixes handled directly by one team.</strong>
              </li>
              <li>
                <strong>Experience:</strong> More than 250 projects for over
                270 clients, with a 4.7 out of 5 rating shown on our website.
              </li>
              <li>
                <strong>Clear communication:</strong> Calls, WhatsApp and
                plain-language reports.
              </li>
              <li>
                <strong>Honest planning:</strong> No guaranteed-ranking claims.
              </li>
              <li>
                <strong>Business focus:</strong> The goal is more calls, visits
                and enquiries.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Our Clients Say
            </h3>


            <p>
              A few client experiences, paraphrased from their feedback:
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
              What Results to Expect
            </h3>


            <p>
              Local SEO is steady work, not an overnight switch. The first
              weeks usually involve audits, profile improvements and fixes.
              Visibility often improves over the following months, and
              stronger, more stable results come with consistent effort and
              genuine reviews. Timelines depend on your industry, competition
              and the starting condition of your profile and website. We set
              milestones so you can see progress, and we do not promise fixed
              rankings.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Work With Us From Lucknow
            </h3>


            <p>
              Local SEO is delivered online, so distance is rarely a problem.
              Our offices are in Moradabad and Ghaziabad, and we serve Lucknow
              clients through calls, video meetings, WhatsApp and shared
              reports.
            </p>


            <p>
              If you would like to see which local SEO services fit your
              business, we are happy to review your Google profile and website
              and suggest a practical first step. Call{" "}
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
                  1. What do local SEO services include?
                </h4>
                <p>
                  Typically an audit, Google profile optimization, review
                  support, listing clean-up, local pages, website fixes and
                  tracking.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Which local SEO service should I start with?
                </h4>
                <p>
                  Start with a local audit and Google Business Profile
                  optimization. They usually give the fastest improvements.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long do local SEO services take to show results?
                </h4>
                <p>
                  Some fixes help within weeks, while stronger results usually
                  build over a few months of steady work.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Can you guarantee a top map position?
                </h4>
                <p>
                  No. Search results change often, so no honest provider can
                  guarantee a position.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do you create reviews for my business?
                </h4>
                <p>
                  No. We guide you to collect genuine reviews and never create
                  fake or paid ones.
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
                  7. Do I need a website for local SEO?
                </h4>
                <p>
                  It is strongly recommended. A good website supports your
                  profile and turns visitors into enquiries.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you work with small businesses?
                </h4>
                <p>
                  Yes. We plan around your size, goals and budget, starting
                  with the highest-impact work.
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
                  . We will review your profile and website and suggest a plan.
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
              currentSlug="/local-seo-services-in-lucknow"
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