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
      name: "What does a local SEO company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It improves your Google profile, listings, reviews and website so you appear in nearby searches and map results.",
      },
    },
    {
      "@type": "Question",
      name: "How does Google decide \u2018near me\u2019 results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mainly by relevance, distance and prominence. Complete profiles, reviews and a strong website help.",
      },
    },
    {
      "@type": "Question",
      name: "How long does local SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early improvements often appear within a few months. Stronger results usually build over a longer period.",
      },
    },
    {
      "@type": "Question",
      name: "Can you guarantee a top map position?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search results change often, so no honest company can guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "Are reviews important for local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Genuine reviews build trust with customers and help your prominence. Never use fake or paid reviews.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a website for local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strongly recommended. A good website supports your profile and turns visitors into enquiries.",
      },
    },
    {
      "@type": "Question",
      name: "Does the SEO company have to be near my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Local SEO is delivered online, so skill, communication and accountability matter more than distance.",
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
              Local SEO Company Near Me in Lucknow: How to Get Found When
              Customers Search Nearby
            </h2>


            <p>
              When someone in Lucknow types &ldquo;dentist near me,&rdquo;
              &ldquo;furniture shop near me&rdquo; or &ldquo;coaching centre
              near me,&rdquo; Google shows a map with a short list of
              businesses. Most people choose from that list. If you are not on
              it, a nearby customer may never know you exist.
            </p>


            <p>
              That is what local SEO is for. This page explains how
              &ldquo;near me&rdquo; results work, what a local SEO company
              actually does, and how to check any provider before you hire. It
              also shows how Zentrix Infotech helps businesses get found in
              local searches.
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
              What Does &ldquo;Near Me&rdquo; Mean to Google?
            </h3>


            <p>
              Google does not search for the words &ldquo;near me&rdquo; on
              your website. Instead, it works out where the searcher is and
              which businesses are the best match nearby. It considers three
              main ideas:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Relevance:</strong> How well your business matches what
                the person is looking for. A complete profile, clear services
                and accurate categories help.
              </li>
              <li>
                <strong>Distance:</strong> How close your business is to the
                searcher or the area they mention. You cannot change your
                location, but you can make sure Google has it right.
              </li>
              <li>
                <strong>Prominence:</strong> How well known and trusted your
                business appears. Reviews, mentions, website quality and general
                online presence all play a part.
              </li>
            </ul>


            <p>
              A local SEO company works on all three. Distance is fixed, so the
              focus is on relevance and prominence.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What a Local SEO Company Does
            </h3>


            <h4 className="text-lg font-semibold text-gray-900">
              Google Business Profile Optimization
            </h4>
            <p>
              Your Google Business Profile is the heart of local search. A good
              company will:
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                Check that your business name, address, phone number and hours
                are correct.
              </li>
              <li>
                Choose the right main and secondary categories.
              </li>
              <li>
                Add a clear description, services and products.
              </li>
              <li>
                Upload quality photos of your premises, team and work.
              </li>
              <li>
                Add posts, offers and updates where suitable.
              </li>
              <li>
                Set up messaging and booking options if relevant.
              </li>
            </ul>
            <p>
              An incomplete profile is one of the most common reasons
              businesses are missed.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Review Strategy
            </h4>
            <p>
              Reviews help both Google and customers. A local SEO company can
              guide you on:
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                Asking happy customers to leave genuine reviews.
              </li>
              <li>
                Making it easy with a simple link and a polite message.
              </li>
              <li>
                Replying to every review professionally, including negative
                ones.
              </li>
              <li>
                Avoiding fake or paid reviews, which can cause serious
                problems.
              </li>
            </ul>


            <h4 className="text-lg font-semibold text-gray-900">
              Consistent Business Information
            </h4>
            <p>
              Your name, address and phone number should match everywhere: your
              website, Google profile, directories and social pages.
              Mismatches confuse search engines and customers. A local SEO
              company audits and corrects these details.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Local Listings and Citations
            </h4>
            <p>
              Quality local directories and industry listings strengthen your
              presence. We focus on relevant, trustworthy listings, not
              hundreds of low-quality ones.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Local Pages on Your Website
            </h4>
            <p>
              Your website should clearly state what you do and where you
              serve. Good local pages explain your services, include genuine
              details and make contact easy. For example, a business that
              really serves Gomti Nagar, Hazratganj, Aliganj or Indira Nagar
              customers can mention those areas naturally. Pages should never
              be created for places you do not serve, because thin, repeated
              pages can hurt more than help.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              On-Page and Technical Work
            </h4>
            <p>
              Local SEO also needs a healthy website. We improve titles,
              headings, content, internal links, speed, mobile experience and
              security, so visitors who click through stay and take action.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Tracking Local Results
            </h4>
            <p>
              We set up tracking for calls, direction requests, website clicks,
              form submissions and WhatsApp messages. This shows which actions
              are growing, not just where you rank on a map.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Mobile Matters So Much
            </h3>


            <p>
              Most &ldquo;near me&rdquo; searches happen on phones. People are
              often on the move, comparing options quickly. Your website and
              profile should therefore:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>Load fast on mobile.</li>
              <li>Show your phone number, address and hours clearly.</li>
              <li>Include a tap-to-call button and a WhatsApp option.</li>
              <li>Offer simple directions.</li>
              <li>Show photos and reviews that build trust.</li>
            </ul>


            <p>
              If a mobile visitor cannot find what they need in seconds, they
              move on.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Local SEO by Business Type
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Clinics and hospitals:</strong> Accurate departments,
                doctors, timings and appointment options, with careful and
                accurate content.
              </li>
              <li>
                <strong>Retail and food:</strong> Products, opening hours,
                photos, menus and offers.
              </li>
              <li>
                <strong>Education and coaching:</strong> Courses, batches, fees
                information where appropriate and easy enquiry options.
              </li>
              <li>
                <strong>Home and construction services:</strong> Service areas,
                project photos and quote requests.
              </li>
              <li>
                <strong>Hospitality and events:</strong> Photos, packages,
                reviews and booking enquiries.
              </li>
              <li>
                <strong>Professional services:</strong> Clear specialities,
                credentials and ways to book a consultation.
              </li>
            </ul>


            <p>
              Each type searches differently, so we shape local plans around
              how your customers actually behave.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Local SEO Process
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Step 1: Discovery.</strong> We learn about your
                business, locations, services and goals.
              </li>
              <li>
                <strong>Step 2: Local audit.</strong> We review your Google
                profile, website, listings, reviews and nearby competitors.
              </li>
              <li>
                <strong>Step 3: Plan.</strong> We prioritize the actions likely
                to help most for your business.
              </li>
              <li>
                <strong>Step 4: Fix and build.</strong> We optimize your
                profile, correct listings, improve pages and add content.
              </li>
              <li>
                <strong>Step 5: Review building.</strong> We guide you on
                gathering genuine reviews and responding to them.
              </li>
              <li>
                <strong>Step 6: Track and improve.</strong> We monitor calls,
                directions and enquiries, report clearly and adjust the plan.
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
              How to Check a Local SEO Company Near You
            </h3>


            <p>
              Before you hire anyone, including us, try these checks:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Look at their own Google profile and website.</strong>{" "}
                A local SEO company should present itself well.
              </li>
              <li>
                <strong>Ask for a first-look review of your profile.</strong>{" "}
                The answer should be specific to your business.
              </li>
              <li>
                <strong>Ask who will do the work.</strong> You should know your
                contact.
              </li>
              <li>
                <strong>Ask how they report.</strong> Look for calls and
                directions, not only map positions.
              </li>
              <li>
                <strong>Check account ownership.</strong> Your Google Business
                Profile should stay in your name.
              </li>
              <li>
                <strong>Be wary of guarantees.</strong> Nobody can promise a
                map position.
              </li>
              <li>
                <strong>Ask about reviews.</strong> A trustworthy company will
                never offer fake reviews.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Does the Company Need to Be Near You?
            </h3>


            <p>
              Many owners search for &ldquo;near me&rdquo; and assume the SEO
              company must be next door. In practice, local SEO is delivered
              online, so clear communication, skill and accountability matter
              more than office distance. A provider who understands your
              market, explains their work and reports honestly can serve you
              well from anywhere.
            </p>


            <p>
              Our offices are in Moradabad and Ghaziabad. We work with Lucknow
              businesses through calls, video meetings, WhatsApp and shared
              reports, so you always know who is handling your project and
              where it stands.
            </p>


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
                <strong>Website fixes handled directly:</strong> Since we
                design and build websites.
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
              stronger, more stable results come with consistent effort and a
              steady flow of genuine reviews. Timelines depend on your
              industry, competition and the starting condition of your profile
              and website. We set milestones so you can see progress, and we do
              not promise fixed rankings.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Found Locally in Lucknow
            </h3>


            <p>
              If you want more nearby customers to find and choose you, we are
              happy to review your Google profile and website and suggest a
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
                  1. What does a local SEO company do?
                </h4>
                <p>
                  It improves your Google profile, listings, reviews and
                  website so you appear in nearby searches and map results.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How does Google decide &ldquo;near me&rdquo; results?
                </h4>
                <p>
                  Mainly by relevance, distance and prominence. Complete
                  profiles, reviews and a strong website help.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does local SEO take to show results?
                </h4>
                <p>
                  Early improvements often appear within a few months. Stronger
                  results usually build over a longer period.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Can you guarantee a top map position?
                </h4>
                <p>
                  No. Search results change often, so no honest company can
                  guarantee a position.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Are reviews important for local SEO?
                </h4>
                <p>
                  Yes. Genuine reviews build trust with customers and help your
                  prominence. Never use fake or paid reviews.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do I need a website for local SEO?
                </h4>
                <p>
                  Strongly recommended. A good website supports your profile
                  and turns visitors into enquiries.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Does the SEO company have to be near my business?
                </h4>
                <p>
                  No. Local SEO is delivered online, so skill, communication
                  and accountability matter more than distance.
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
              currentSlug="/local-seo-company-near-me-in-lucknow"
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