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
      name: "What does an SEO expert do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An SEO expert improves your website and online profile so you appear in search results. This covers strategy, technical fixes, content, local SEO and tracking.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know someone is a real SEO expert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for a business-specific review, clear plans, real examples, plain reports and no guaranteed rankings.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a Lucknow-based expert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. SEO is delivered online, so skill and communication matter more than location.",
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
        text: "No. Search results change often, so no honest expert can guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "What is local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO helps your business appear in nearby searches, including map results and \u2018near me\u2019 queries.",
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
      name: "Can you fix my website as well as optimize it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design and develop websites, so we can fix technical and design issues directly.",
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
              Lucknow SEO Experts: The Skills Behind Search Visibility
            </h2>


            <p>
              Anyone can call themselves an SEO expert. The title has no
              licence, no exam and no fixed meaning. So when a business owner
              in Lucknow searches for SEO experts, the real question is: what
              does genuine expertise look like, and how does it solve actual
              business problems?
            </p>


            <p>
              At Zentrix Infotech, our SEO work brings together several skills:
              strategy, technical know-how, content, local search and analysis.
              This page explains those skills in plain language, shows how
              experts think through a problem, and helps you recognise real
              expertise when you meet it.
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
              What Makes Someone an SEO Expert?
            </h3>


            <p>
              Real SEO expertise is not a certificate or a famous name. It is
              the ability to:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>Understand how people search and what they want.</li>
              <li>Diagnose why a website is not getting enquiries.</li>
              <li>Fix the right things in the right order.</li>
              <li>Explain the plan in simple words.</li>
              <li>Measure results honestly and adjust.</li>
            </ul>


            <p>
              Good experts are also honest about limits. They know that search
              engines change, that results take time and that no one controls
              Google.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Five Skill Areas Behind Good SEO
            </h3>


            <p>
              SEO is too broad for one skill. Strong results usually come from
              five areas working together.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              1. Strategy and Research
            </h4>
            <p>
              Experts study your business, customers and competitors before
              they touch anything. They find the searches that matter, the
              pages you need and the order of work that makes sense for your
              budget. Strategy prevents wasted effort.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              2. Technical Skill
            </h4>
            <p>
              Technical experts check whether your website loads quickly, works
              well on phones, is secure and can be read by search engines. They
              fix issues such as slow pages, broken links, poor structure and
              indexing problems. Because Zentrix Infotech builds websites and
              software, our team is comfortable making these fixes directly.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              3. Content and On-Page Skill
            </h4>
            <p>
              Content experts turn research into clear pages: service
              descriptions, guides, FAQs and blog articles written for real
              people. They shape titles, headings and internal links so each
              page has one clear purpose. Good content answers questions better
              than competing pages do.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              4. Local Search Skill
            </h4>
            <p>
              For most Lucknow businesses, local search matters most. Local
              experts optimize Google Business Profiles, keep your business
              details consistent online, build local pages and guide you on
              collecting genuine reviews. They understand &ldquo;near
              me&rdquo; behaviour and how people search in English, Hindi and
              Hinglish.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              5. Analysis and Reporting
            </h4>
            <p>
              Analysts set up tracking for calls, form submissions and WhatsApp
              clicks, then explain what the numbers mean. This turns SEO into
              something measurable and lets the plan improve month by month.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How an SEO Expert Thinks Through a Problem
            </h3>


            <p>
              Experts follow a simple pattern: look, diagnose, prioritize, fix,
              measure.
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Look.</strong> Review the website, Google profile,
                content and competitors.
              </li>
              <li>
                <strong>Diagnose.</strong> Find the real cause: is the issue
                visibility, trust, speed or conversion?
              </li>
              <li>
                <strong>Prioritize.</strong> Choose the few actions likely to
                help most.
              </li>
              <li>
                <strong>Fix.</strong> Make the changes and publish
                improvements.
              </li>
              <li>
                <strong>Measure.</strong> Track what happened and refine the
                plan.
              </li>
            </ul>


            <p>
              This is very different from running through a fixed checklist for
              every client.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Four Example Scenarios
            </h3>


            <p>
              These are illustrative examples of how an expert might approach
              different situations. They are not real client results.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Scenario 1: A Clinic With Few Online Enquiries
            </h4>
            <p>
              <strong>Symptom:</strong> People know the clinic locally, but few
              new patients find it online.
            </p>
            <p>
              <strong>Likely diagnosis:</strong> An incomplete Google Business
              Profile, thin service pages and few reviews.
            </p>
            <p>
              <strong>Expert approach:</strong> Complete and optimize the
              profile, build a clear page for each service, set up a review
              routine and track calls. Handle medical content carefully and
              accurately.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Scenario 2: A Retail Store With a Slow Website
            </h4>
            <p>
              <strong>Symptom:</strong> Visitors arrive but leave quickly,
              especially on mobile.
            </p>
            <p>
              <strong>Likely diagnosis:</strong> Heavy pages, poor mobile
              layout and unclear product pages.
            </p>
            <p>
              <strong>Expert approach:</strong> Fix speed and mobile issues
              first, improve product page structure, then build content around
              what customers search for.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Scenario 3: A Service Business With Traffic but Few Calls
            </h4>
            <p>
              <strong>Symptom:</strong> The website gets visits, but few
              visitors call or fill in the form.
            </p>
            <p>
              <strong>Likely diagnosis:</strong> Unclear calls to action,
              buried contact details or messaging that does not match what
              visitors want.
            </p>
            <p>
              <strong>Expert approach:</strong> Improve page layout, add
              visible call and WhatsApp buttons, clarify the offer and track
              which actions bring enquiries.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Scenario 4: A New Business With No Online Presence
            </h4>
            <p>
              <strong>Symptom:</strong> No website ranking, no profile and no
              reviews.
            </p>
            <p>
              <strong>Likely diagnosis:</strong> A missing foundation.
            </p>
            <p>
              <strong>Expert approach:</strong> Build a simple, fast website
              with clear service pages, set up the Google profile and start a
              steady plan for content and reviews.
            </p>


            <p>
              In each case, the expert starts by diagnosing, not by selling a
              package.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Expertise Does Not Mean
            </h3>


            <p>
              To protect yourself, remember what is not a sign of expertise:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Guaranteed rankings.</strong> Honest experts know
                results depend on many factors.
              </li>
              <li>
                <strong>Secret techniques.</strong> Good SEO can be explained
                clearly.
              </li>
              <li>
                <strong>Heavy jargon.</strong> Real experts make things
                simpler.
              </li>
              <li>
                <strong>A long list of badges.</strong> Evidence of real work
                matters more.
              </li>
              <li>
                <strong>Instant results.</strong> SEO is steady work.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Services Our SEO Experts Provide
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>SEO audit:</strong> A full review of your website,
                profile and competitors.
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
                <strong>Keyword research:</strong> Customer-focused terms in
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
                <strong>Conversion improvement:</strong> Better pages, calls to
                action and contact options.
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
              Industries We Can Support
            </h3>


            <p>
              Our SEO experts can work with many types of Lucknow businesses:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>Healthcare: Clinics, hospitals and wellness brands.</li>
              <li>Education: Schools, colleges and coaching institutes.</li>
              <li>
                Real estate and construction: Builders, dealers, interiors and
                home services.
              </li>
              <li>Retail and e-commerce: Local stores and online shops.</li>
              <li>
                Hospitality and food: Hotels, resorts, restaurants and
                bakeries.
              </li>
              <li>
                Handicrafts, fashion and exports: Chikankari sellers, artisans
                and exporters.
              </li>
              <li>
                Professional services: Consultants, lawyers, accountants and
                agencies.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Work With Zentrix Infotech
            </h3>


            <p>
              Zentrix Infotech is an IT and digital company offering web
              development, software development, mobile apps, UI/UX design,
              cloud solutions and digital marketing. That mix is valuable for
              SEO, because many ranking problems begin with the website itself.
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Skills under one roof:</strong> Design, development and
                marketing work together.
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
                <strong>Business focus:</strong> The aim is more calls,
                enquiries and customers.
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
              with consistent effort. Timelines depend on your industry,
              competition, budget and the starting condition of your website. We
              set milestones so you can see progress.
            </p>


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
              If you want experienced people to look at your website and Google
              presence, we are happy to review it and suggest a practical plan.
              Call{" "}
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
                  1. What does an SEO expert do?
                </h4>
                <p>
                  An SEO expert improves your website and online profile so you
                  appear in search results. This covers strategy, technical
                  fixes, content, local SEO and tracking.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How do I know someone is a real SEO expert?
                </h4>
                <p>
                  Look for a business-specific review, clear plans, real
                  examples, plain reports and no guaranteed rankings.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Do I need a Lucknow-based expert?
                </h4>
                <p>
                  Not necessarily. SEO is delivered online, so skill and
                  communication matter more than location.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does SEO take to show results?
                </h4>
                <p>
                  Early improvements often appear within a few months. Stronger
                  results usually build over a longer period.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can you guarantee first-page rankings?
                </h4>
                <p>
                  No. Search results change often, so no honest expert can
                  guarantee a position.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. What is local SEO?
                </h4>
                <p>
                  Local SEO helps your business appear in nearby searches,
                  including map results and &ldquo;near me&rdquo; queries.
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
                  8. Can you fix my website as well as optimize it?
                </h4>
                <p>
                  Yes. We design and develop websites, so we can fix technical
                  and design issues directly.
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