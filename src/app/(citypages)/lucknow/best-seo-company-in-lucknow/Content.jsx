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
      name: "Who is the best SEO company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best company is the one that fits your goals, shows real proof and reports honestly. Compare a few using the checklist above.",
      },
    },
    {
      "@type": "Question",
      name: "Can an SEO company guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search results change often, so no honest company can guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "Is the cheapest SEO company a good choice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. Very low prices can mean thin work or risky shortcuts. Judge by what is delivered.",
      },
    },
    {
      "@type": "Question",
      name: "What proof should I ask an SEO company for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask for a review of your site, a 90-day plan, real examples, client feedback and a sample report.",
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
      name: "Should I start with a small project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it reduces risk. A focused first phase lets you judge the work before committing longer.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a Lucknow-based company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. SEO is delivered online, so clear communication and skill matter more than location.",
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
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com. We will review your website and suggest a plan.",
      },
    },
  ],
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  serviceType: "Search Engine Optimization",
  description:
    "Local SEO, on-page SEO, technical SEO, keyword research, SEO content, authority building, conversion improvement, tracking and reporting.",
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
    "https://www.zentrixinfotech.com/lucknow/best-seo-company-in-lucknow",
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
      name: "Best SEO Company in Lucknow",
      item:
        "https://www.zentrixinfotech.com/lucknow/best-seo-company-in-lucknow",
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
              Best SEO Company in Lucknow: Myths to Avoid and Proof to Ask For
            </h2>


            <p>
              Type &ldquo;best SEO company in Lucknow&rdquo; into Google and you
              will find many companies using the word &ldquo;best&rdquo; about
              themselves. That is understandable, but it does not help you
              decide. A label is not evidence.
            </p>


            <p>
              At Zentrix Infotech, we do not ask you to believe a title. We
              would rather show you how to judge for yourself. This page
              explains the common myths about choosing an SEO company, the proof
              worth asking for, and how we work, so you can compare us fairly
              with anyone else.
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
              What Does &ldquo;Best&rdquo; Really Mean?
            </h3>


            <p>
              There is no single best SEO company for every business. The best
              company for a Lucknow clinic may differ from the best one for an
              online handicraft store or a coaching institute. A strong match
              usually means a company that:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>Understands your customers and how they search.</li>
              <li>Studies your website before suggesting a plan.</li>
              <li>Does the highest-impact work first.</li>
              <li>Explains its work in plain language.</li>
              <li>
                Measures success in calls, visits and enquiries, not only
                rankings.
              </li>
              <li>Treats you as a long-term partner.</li>
            </ul>


            <p>Keep this definition in mind as you read the myths below.</p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Five Myths About Choosing an SEO Company
            </h3>


            <h4 className="mb-3 font-semibold text-gray-900">
              Myth 1: &ldquo;The company that promises page one is the
              best.&rdquo;
            </h4>
            <p>
              <strong>Fact:</strong> Search results change constantly, and no
              company controls Google. An honest provider can explain a plan and
              a realistic timeline, but it cannot guarantee a ranking. A
              guaranteed position is usually a sign of overselling.
            </p>


            <h4 className="mb-3 font-semibold text-gray-900">
              Myth 2: &ldquo;The biggest agency is the best.&rdquo;
            </h4>
            <p>
              <strong>Fact:</strong> Size does not equal quality. A large agency
              may hand your project to a junior team, while a smaller company
              may give you more attention. What matters is who actually works on
              your project and how clearly they communicate.
            </p>


            <h4 className="mb-3 font-semibold text-gray-900">
              Myth 3: &ldquo;The cheapest option saves money.&rdquo;
            </h4>
            <p>
              <strong>Fact:</strong> Low prices often hide thin work, copied
              content or risky link schemes. If those shortcuts cause problems
              later, fixing them costs more than doing it properly. Judge value
              by what is delivered, not only by price.
            </p>


            <h4 className="mb-3 font-semibold text-gray-900">
              Myth 4: &ldquo;More keywords means better SEO.&rdquo;
            </h4>
            <p>
              <strong>Fact:</strong> Ranking for many unrelated terms does not
              bring customers. The right keywords are the ones your buyers use
              when they are ready to call, visit or order.
            </p>


            <h4 className="mb-3 font-semibold text-gray-900">
              Myth 5: &ldquo;SEO is a one-time job.&rdquo;
            </h4>
            <p>
              <strong>Fact:</strong> Search engines, competitors and customer
              behaviour keep changing. Foundation work matters, but steady
              improvement is what builds lasting results.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Proof to Ask For Before You Hire
            </h3>


            <p>Instead of trusting claims, ask for evidence. Here is what to look for.</p>


            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>A first-look review of your own website.</strong> A good
                company can point out specific issues and opportunities on your
                site, not just repeat general advice.
              </li>
              <li>
                <strong>A clear first-90-days plan.</strong> You should hear
                concrete tasks, such as fixing technical problems, improving key
                pages, setting up your Google Business Profile and starting
                tracking.
              </li>
              <li>
                <strong>Examples of real work.</strong> Ask to see websites or
                campaigns for similar businesses. Check that the work looks
                professional and relevant.
              </li>
              <li>
                <strong>Client feedback you can verify.</strong> Look for named
                clients and consistent feedback, not anonymous quotes.
              </li>
              <li>
                <strong>A reporting sample.</strong> Ask what a monthly report
                looks like. It should show calls, enquiries and actions,
                explained simply.
              </li>
              <li>
                <strong>Account ownership.</strong> Your Google Business
                Profile, Analytics and Search Console should stay in your name.
              </li>
              <li>
                <strong>Transparent scope.</strong> You should know exactly what
                is included, what costs extra and what you need to provide.
              </li>
            </ol>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Qualities of a Strong SEO Company
            </h3>


            <p>
              Beyond proof, a strong company shows these qualities in day-to-day
              work:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>It asks questions first.</strong> You should be talking
                about your goals before you hear about packages.
              </li>
              <li>
                <strong>It prioritizes.</strong> It tells you what to do now and
                what can wait.
              </li>
              <li>
                <strong>It fixes problems directly.</strong> It does not only
                list recommendations.
              </li>
              <li>
                <strong>It writes for people.</strong> Content is clear, useful
                and original.
              </li>
              <li>
                <strong>It earns authority carefully.</strong> It avoids cheap
                link schemes.
              </li>
              <li>
                <strong>It reports honestly.</strong> Good and bad results are
                both explained.
              </li>
              <li>
                <strong>It adapts.</strong> The plan changes when the data shows
                something is not working.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start With a Pilot, Not a Leap
            </h3>


            <p>
              A smart way to reduce risk is to begin with a focused first phase.
              For example, you might agree on a one- to three-month scope that
              covers an audit, technical fixes, Google profile optimization and
              improvements to your most important pages. You then review the
              results together before deciding on a longer plan.
            </p>


            <p>
              A confident company welcomes this approach, because it lets the
              work speak for itself. We are happy to plan this way with you.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Zentrix Infotech Approaches SEO
            </h3>


            <p>
              Zentrix Infotech is an IT and digital company offering web
              development, software development, mobile apps, UI/UX design,
              cloud solutions and digital marketing. This helps in SEO because
              many ranking problems start with the website itself. Because we
              design, build and optimize websites, we can fix both the cause and
              the symptom without passing your project between companies.
            </p>


            <p>Our SEO services include:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local SEO:</strong> Google Business Profile, local
                listings, reviews and local pages.
              </li>
              <li>
                <strong>On-page SEO:</strong> Titles, descriptions, headings,
                content and internal links.
              </li>
              <li>
                <strong>Technical SEO:</strong> Speed, mobile experience,
                structure, security and indexing.
              </li>
              <li>
                <strong>Keyword research:</strong> English, Hindi and Hinglish
                search phrases grouped by intent.
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
                <strong>Conversion improvement:</strong> Calls to action, forms,
                WhatsApp and call buttons.
              </li>
              <li>
                <strong>Tracking and reporting:</strong> Plain-language reports
                on enquiries and visibility.
              </li>
            </ul>


            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request an SEO Plan
              </Link>
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Process
            </h3>


            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery.</strong> We learn about your business,
                customers and goals.
              </li>
              <li>
                <strong>Audit.</strong> We review your website, Google profile,
                content and competitors.
              </li>
              <li>
                <strong>Plan.</strong> We set priorities, pages, keywords and a
                realistic timeline.
              </li>
              <li>
                <strong>Fix and build.</strong> We handle technical fixes, page
                improvements, local setup and new content.
              </li>
              <li>
                <strong>Promote.</strong> We strengthen your credibility through
                quality listings, mentions and reviews.
              </li>
              <li>
                <strong>Track and improve.</strong> We monitor results and
                refine the plan month by month.
              </li>
            </ol>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Experience and Client Feedback
            </h3>


            <p>
              We have completed more than 250 projects for over 270 clients and
              show a 4.7 out of 5 rating on our website. Our clients come from
              interiors, events, education, healthcare, retail, e-commerce, real
              estate and hospitality. A few experiences, paraphrased from their
              feedback:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                Jigyasa Hospital reported a consistent rise in patient enquiries
                through Google and social media.
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
              timing and effort. These examples show the kind of partnership we
              aim for, and you are welcome to judge our work against the proof
              checklist above.
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
              set milestones so you can see progress, and we do not promise
              fixed rankings.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Working With Us From Lucknow
            </h3>


            <p>
              SEO is delivered online, so distance is rarely a problem. Our
              offices are in Moradabad and Ghaziabad, and we serve Lucknow
              clients through calls, video meetings, WhatsApp and shared
              reports.
            </p>


            <p>
              If you would like to see how we would approach your business, we
              are happy to review your website and Google presence and suggest a
              practical plan, with no pressure. Call{" "}
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
                  1. Who is the best SEO company in Lucknow?
                </h4>
                <p>
                  The best company is the one that fits your goals, shows real
                  proof and reports honestly. Compare a few using the checklist
                  above.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Can an SEO company guarantee first-page rankings?
                </h4>
                <p>
                  No. Search results change often, so no honest company can
                  guarantee a position.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Is the cheapest SEO company a good choice?
                </h4>
                <p>
                  Not always. Very low prices can mean thin work or risky
                  shortcuts. Judge by what is delivered.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. What proof should I ask an SEO company for?
                </h4>
                <p>
                  Ask for a review of your site, a 90-day plan, real examples,
                  client feedback and a sample report.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How long does SEO take to show results?
                </h4>
                <p>
                  Early improvements often appear within a few months. Stronger
                  results usually build over a longer period.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Should I start with a small project?
                </h4>
                <p>
                  Yes, it reduces risk. A focused first phase lets you judge the
                  work before committing longer.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do I need a Lucknow-based company?
                </h4>
                <p>
                  Not necessarily. SEO is delivered online, so clear
                  communication and skill matter more than location.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you work with small businesses?
                </h4>
                <p>
                  Yes. We plan around your size, goals and budget, starting with
                  the highest-impact work.
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
              currentSlug="/best-seo-company-in-lucknow"
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