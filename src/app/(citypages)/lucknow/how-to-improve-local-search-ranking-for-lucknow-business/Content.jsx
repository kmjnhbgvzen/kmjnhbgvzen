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
      name: "How can I improve my local search ranking in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Complete your Google Business Profile, collect genuine reviews, keep details consistent and build clear service pages on a fast mobile site.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to improve local ranking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some fixes help within weeks, while stronger results usually build over a few months of steady work.",
      },
    },
    {
      "@type": "Question",
      name: "Are reviews important for local ranking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Genuine reviews build trust and help your prominence. Never use fake or paid reviews.",
      },
    },
    {
      "@type": "Question",
      name: "Which Google profile categories should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pick the main category that best describes your business, then add relevant secondary categories.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a website to rank locally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is strongly recommended. A good website supports your profile and turns visitors into enquiries.",
      },
    },
    {
      "@type": "Question",
      name: "Can anyone guarantee a top map position?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search results change often, so no honest provider can guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update my Google profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reply to reviews weekly, add photos or posts regularly and update details whenever they change.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do local SEO myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, much of it. Professional help is useful for technical fixes, competitive markets and multiple locations.",
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
      name: "How do I get started with Zentrix Infotech?",
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
              How to Improve Local Search Ranking for a Lucknow Business: A
              Practical 30-Day Plan
            </h2>


            <p>
              If you run a shop, clinic, institute or service business in
              Lucknow, you have probably searched for your own business on
              Google. Sometimes you appear. Sometimes a competitor shows up
              first. And sometimes you are nowhere on the map at all.
            </p>


            <p>
              The good news is that local search ranking responds well to
              steady, practical work. You do not need secret tricks. You need
              an accurate Google profile, genuine reviews, a clear website and
              a regular routine. This guide gives you a simple plan you can
              follow, and it explains where an expert team like Zentrix
              Infotech can help if you prefer not to do it alone.
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
              How Local Search Ranking Works
            </h3>


            <p>
              When someone searches for a service near them, Google usually
              shows a map with a few businesses, followed by regular website
              results. It decides who appears using three main ideas:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Relevance:</strong> How well your business matches what
                the person wants.
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
              You cannot change where your business is located. You can,
              however, improve relevance and prominence, and that is what the
              steps below focus on.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The 12-Step Local Ranking Checklist
            </h3>


            <h4 className="text-lg font-semibold text-gray-900">
              Phase 1: Get the Foundations Right (Days 1 to 10)
            </h4>


            <p>
              <strong>Step 1: Claim and verify your Google Business
              Profile.</strong> If you have not claimed it yet, do this first.
              Without it, you have little control over how you appear on maps.
            </p>


            <p>
              <strong>Step 2: Fill in every section.</strong> Add your business
              name, address, phone number, website, opening hours, services or
              products and a clear description. Incomplete profiles are easy to
              overlook.
            </p>


            <p>
              <strong>Step 3: Choose the right categories.</strong> Pick the
              main category that best describes your business and add relevant
              secondary ones. Categories are one of the strongest signals for
              relevance.
            </p>


            <p>
              <strong>Step 4: Add real photos.</strong> Upload clear photos of
              your shopfront, interior, team, products and work. Real photos
              build trust far better than generic images.
            </p>


            <p>
              <strong>Step 5: Make your details consistent.</strong> Your
              business name, address and phone number should match on your
              website, Google profile, directories and social pages. Small
              differences confuse both search engines and customers.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Phase 2: Build Trust and Relevance (Days 10 to 20)
            </h4>


            <p>
              <strong>Step 6: Collect genuine reviews.</strong> Ask happy
              customers to leave a review, and make it easy with a simple link.
              Reply to every review politely, including critical ones. Never buy
              or fake reviews, because that can lead to serious penalties.
            </p>


            <p>
              <strong>Step 7: Create clear service pages on your
              website.</strong> Each main service should have its own page
              explaining what you offer, who it is for, how it works and how to
              contact you. Use words your customers actually use, including
              Hindi and Hinglish where natural.
            </p>


            <p>
              <strong>Step 8: Mention the areas you really serve.</strong> If
              you serve customers in specific parts of Lucknow, say so
              naturally on your website and profile. Do not create pages for
              places you do not serve.
            </p>


            <p>
              <strong>Step 9: Improve your website for mobile.</strong> Most
              local searches happen on phones. Make sure your site loads
              quickly, your phone number is tappable, and your address, hours
              and WhatsApp option are easy to find.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Phase 3: Strengthen and Measure (Days 20 to 30)
            </h4>


            <p>
              <strong>Step 10: List your business in trusted local
              directories.</strong> Choose quality, relevant listings with the
              same business details everywhere. A few good listings are better
              than hundreds of poor ones.
            </p>


            <p>
              <strong>Step 11: Post updates and offers.</strong> Use your
              Google profile to share news, offers, events and new services.
              Regular activity shows that your business is active.
            </p>


            <p>
              <strong>Step 12: Track what matters.</strong> Watch calls,
              direction requests, website clicks, messages and enquiries, not
              just your map position. These actions show whether ranking is
              turning into business.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Simple Weekly Routine
            </h3>


            <p>
              After the first 30 days, consistency matters more than big
              bursts. A routine like this works well:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Every week:</strong> Reply to new reviews, check for
                questions or messages, and add one photo or post.
              </li>
              <li>
                <strong>Every month:</strong> Review calls, directions and
                enquiries, update hours or offers if they changed and add or
                improve one service page.
              </li>
              <li>
                <strong>Every quarter:</strong> Check your listings for errors,
                review your competitors and plan new content.
              </li>
            </ul>


            <p>
              Even thirty minutes a week, done regularly, can make a visible
              difference over time.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Mistakes to Avoid
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Using a fake or shortened business name.</strong> Use
                your real name as customers know it.
              </li>
              <li>
                <strong>Stuffing keywords into your profile name.</strong> This
                can lead to suspension.
              </li>
              <li>
                <strong>Ignoring reviews.</strong> Unanswered reviews look
                careless.
              </li>
              <li>
                <strong>Letting details go out of date.</strong> Wrong hours or
                an old phone number lose customers.
              </li>
              <li>
                <strong>Creating pages for places you do not serve.</strong>{" "}
                Thin, repeated pages do not help.
              </li>
              <li>
                <strong>Using a slow, hard-to-use mobile website.</strong>{" "}
                Visitors leave quickly.
              </li>
              <li>
                <strong>Chasing rankings only.</strong> Calls and enquiries are
                the real goal.
              </li>
              <li>
                <strong>Buying cheap links or reviews.</strong> Shortcuts often
                cause problems later.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects Ranking Differently by Business
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Clinics and hospitals:</strong> Accurate departments,
                doctors, timings and appointment details, with careful,
                accurate content.
              </li>
              <li>
                <strong>Retail and food:</strong> Products, menus, offers,
                photos and opening hours.
              </li>
              <li>
                <strong>Education and coaching:</strong> Courses, batches and
                clear enquiry options.
              </li>
              <li>
                <strong>Home and construction services:</strong> Service areas,
                project photos and quote requests.
              </li>
              <li>
                <strong>Hospitality and events:</strong> Packages, photos,
                reviews and booking options.
              </li>
              <li>
                <strong>Professional services:</strong> Clear specialities and
                easy ways to book a consultation.
              </li>
            </ul>


            <p>
              Think about what your customers want to check before they call,
              and make sure your profile and website answer it.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Results to Expect
            </h3>


            <p>
              Local ranking is not an overnight switch. Profile fixes and
              consistent details can help fairly early, while reviews, content
              and trust build over months. Results depend on your industry,
              competition, your starting position and how consistently you keep
              up the routine. Nobody can honestly guarantee a specific map
              position, so judge progress by calls, directions and enquiries
              over time.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              When to Get Professional Help
            </h3>


            <p>You can do much of this yourself. It may be worth hiring help when:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                Your website is slow, outdated or hard to use on mobile.
              </li>
              <li>
                You are in a crowded market and need a deeper plan.
              </li>
              <li>
                You manage several locations or services.
              </li>
              <li>
                You lack the time to keep up the routine.
              </li>
              <li>
                Your profile has issues such as suspension, duplicate listings
                or wrong details.
              </li>
            </ul>


            <p>
              An expert team can audit your presence, fix technical problems,
              build local pages and track results, so your time goes into
              running your business.
            </p>


            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request a Local SEO Plan
              </Link>
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Zentrix Infotech Helps
            </h3>


            <p>
              Zentrix Infotech is an IT and digital company offering web
              development, software development, mobile apps, UI/UX design,
              cloud solutions and digital marketing. For local search, that
              combination matters, because many ranking problems begin with the
              website itself.
            </p>


            <p>Our local SEO support includes:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local audit:</strong> Of your Google profile, website,
                listings and competitors.
              </li>
              <li>
                <strong>Google Business Profile optimization:</strong> To make
                your profile complete and accurate.
              </li>
              <li>
                <strong>Review guidance:</strong> So you collect genuine
                reviews and respond well.
              </li>
              <li>
                <strong>Local pages and content:</strong> Built around your
                services and areas.
              </li>
              <li>
                <strong>Technical and mobile fixes:</strong> Handled directly
                by our team.
              </li>
              <li>
                <strong>Tracking and plain-language reports:</strong> On calls,
                directions and enquiries.
              </li>
            </ul>


            <p>
              We plan around your size and goals, start with the
              highest-impact work and never promise guaranteed rankings.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Experience and Client Feedback
            </h3>


            <p>
              We have completed more than 250 projects for over 270 clients and
              show a 4.7 out of 5 rating on our website. A few client
              experiences, paraphrased from their feedback:
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
              Work With Us From Lucknow
            </h3>


            <p>
              Local SEO is delivered online, so distance is rarely a problem.
              Our offices are in Moradabad and Ghaziabad, and we serve Lucknow
              clients through calls, video meetings, WhatsApp and shared
              reports.
            </p>


            <p>
              If you would like help improving your local search ranking, we
              are happy to review your Google profile and website and suggest a
              practical first step. Call{" "}
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
                  1. How can I improve my local search ranking in Lucknow?
                </h4>
                <p>
                  Complete your Google Business Profile, collect genuine
                  reviews, keep details consistent and build clear service pages
                  on a fast mobile site.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How long does it take to improve local ranking?
                </h4>
                <p>
                  Some fixes help within weeks, while stronger results usually
                  build over a few months of steady work.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Are reviews important for local ranking?
                </h4>
                <p>
                  Yes. Genuine reviews build trust and help your prominence.
                  Never use fake or paid reviews.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Which Google profile categories should I choose?
                </h4>
                <p>
                  Pick the main category that best describes your business,
                  then add relevant secondary categories.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do I need a website to rank locally?
                </h4>
                <p>
                  It is strongly recommended. A good website supports your
                  profile and turns visitors into enquiries.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can anyone guarantee a top map position?
                </h4>
                <p>
                  No. Search results change often, so no honest provider can
                  guarantee a position.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. How often should I update my Google profile?
                </h4>
                <p>
                  Reply to reviews weekly, add photos or posts regularly and
                  update details whenever they change.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can I do local SEO myself?
                </h4>
                <p>
                  Yes, much of it. Professional help is useful for technical
                  fixes, competitive markets and multiple locations.
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
                  10. How do I get started with Zentrix Infotech?
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
              currentSlug="/improve-local-search-ranking-lucknow"
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