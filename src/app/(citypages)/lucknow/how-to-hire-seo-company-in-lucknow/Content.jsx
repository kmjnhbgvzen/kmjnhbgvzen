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
      name: "How do I choose the right SEO company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check their process, real work, reporting style and clarity. Choose the company that understands your goals and explains its plan honestly.",
      },
    },
    {
      "@type": "Question",
      name: "Should I hire a company based in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. SEO is delivered online, so communication, skill and accountability matter more than location.",
      },
    },
    {
      "@type": "Question",
      name: "What should an SEO proposal include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Specific services, timelines, deliverables, reporting methods, what you must provide and clear contract terms.",
      },
    },
    {
      "@type": "Question",
      name: "How much time does SEO need to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early improvements often appear within a few months. Stronger results usually build over a longer period.",
      },
    },
    {
      "@type": "Question",
      name: "Can an SEO company guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search results change often, so an honest company will not guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "What questions should I ask before hiring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask about the first 90 days, keyword choice, reporting, account ownership, team members and similar past work.",
      },
    },
    {
      "@type": "Question",
      name: "What are the biggest red flags?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guaranteed rankings, secret methods, pressure to sign quickly, cheap link schemes and no access to your accounts.",
      },
    },
    {
      "@type": "Question",
      name: "Should I own my Google accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your Google Business Profile, Analytics and Search Console should always stay in your name.",
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
              How to Hire an SEO Company in Lucknow: A Simple Guide for
              Business Owners
            </h2>

            <p>
              Hiring an SEO company is a big decision. Done well, it can bring
              steady enquiries for years. Done badly, it can waste months of
              budget and, in the worst case, harm your website. Many business
              owners in Lucknow feel unsure because SEO is full of technical
              terms and big promises.
            </p>

            <p>
              This guide gives you a clear, practical process for hiring an SEO
              company. It also shows how Zentrix Infotech approaches SEO, so
              you can compare us fairly against anyone else on your list.
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
              Step 1: Know What You Want Before You Search
            </h3>

            <p>
              Before you contact any company, write down what you want SEO to
              achieve. Vague goals lead to vague results.
            </p>

            <p>Ask yourself:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Do I want more phone calls, store visits, form enquiries or
                online orders?
              </li>
              <li>
                Which two or three services or products matter most to my
                income?
              </li>
              <li>
                Which areas of Lucknow or which customers do I want to reach?
              </li>
              <li>
                How much can I invest each month, and for how long?
              </li>
              <li>
                Who in my team will approve content and answer questions?
              </li>
            </ul>

            <p>
              Even a short note covering these points helps every company give
              you a better, more honest proposal.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 2: Understand What SEO Actually Includes
            </h3>

            <p>
              A trustworthy SEO company should be able to explain its work in
              plain language. In general, SEO includes:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local SEO:</strong> Google Business Profile, local
                listings, reviews and &quot;near me&quot; visibility.
              </li>
              <li>
                <strong>On-page SEO:</strong> Page titles, descriptions,
                headings, content and internal links.
              </li>
              <li>
                <strong>Technical SEO:</strong> Website speed, mobile
                experience, crawlability, indexing and security.
              </li>
              <li>
                <strong>Content:</strong> Service pages, guides, FAQs and
                blogs that answer customer questions.
              </li>
              <li>
                <strong>Authority building:</strong> Quality mentions, listings
                and links earned the right way.
              </li>
              <li>
                <strong>Tracking and reporting:</strong> Measuring calls,
                enquiries and visibility.
              </li>
            </ul>

            <p>
              If a company cannot explain which of these it will do for you,
              and why, treat that as a warning sign.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 3: Build a Shortlist of Three to Five Companies
            </h3>

            <p>
              You do not need to contact twenty agencies. A short,
              well-researched list is enough. To build it:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Ask other business owners in Lucknow who they use and whether
                they are happy.
              </li>
              <li>
                Search for the services you need and note which companies
                appear and how professional their websites look.
              </li>
              <li>
                Check each company&apos;s own website. A company that cannot
                present itself well may struggle to present you well.
              </li>
              <li>
                Look for real portfolio work, client feedback and clear contact
                details.
              </li>
            </ul>

            <p>
              Remember that SEO is delivered online. A company outside Lucknow
              can serve you well if it communicates clearly and understands
              your market. At Zentrix Infotech, our offices are in Moradabad
              and Ghaziabad, and we work with Lucknow clients through calls,
              video meetings, WhatsApp and shared reports.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 4: Ask for a Review of Your Current Website
            </h3>

            <p>
              A good company will look at your website and Google profile
              before giving a plan. Ask each shortlisted company for a basic
              audit or a first-look review. A strong audit covers:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Website speed and mobile usability</li>
              <li>Page structure and content quality</li>
              <li>Google Business Profile status</li>
              <li>
                Keywords you appear for and keywords you are missing
              </li>
              <li>What nearby competitors are doing better</li>
            </ul>

            <p>
              Be cautious of anyone who sends a standard package without
              looking at your business at all. Every business needs a different
              starting point.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 5: Ask the Right Questions
            </h3>

            <p>When you speak with each company, these questions reveal a lot:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>&quot;What will you do in the first three
                months?&quot;</strong>{" "}
                You should hear specific tasks, not just &quot;we will improve
                your rankings.&quot;
              </li>
              <li>
                <strong>&quot;How will you choose my keywords?&quot;</strong>{" "}
                Look for answers based on customer intent and local search
                behaviour, including Hindi and Hinglish searches.
              </li>
              <li>
                <strong>&quot;Who will actually work on my project?&quot;</strong>{" "}
                Ask about the team and who your contact will be.
              </li>
              <li>
                <strong>&quot;How will you report progress?&quot;</strong> Good
                answers include calls, form fills and enquiries, not only
                ranking positions.
              </li>
              <li>
                <strong>&quot;Will I own my accounts?&quot;</strong> Your Google
                Business Profile, Analytics and Search Console should stay in
                your name.
              </li>
              <li>
                <strong>&quot;What do you need from me?&quot;</strong> SEO works
                best as a partnership.
              </li>
              <li>
                <strong>&quot;Can you show similar work?&quot;</strong> Ask for
                examples and feedback you can verify.
              </li>
              <li>
                <strong>&quot;What are your methods for building links and
                content?&quot;</strong>{" "}
                The answer should focus on quality and relevance, not
                shortcuts.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 6: Read the Proposal Carefully
            </h3>

            <p>A good proposal is specific. Look for:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>A clear list of services and deliverables</li>
              <li>A timeline with milestones</li>
              <li>How progress will be measured and reported</li>
              <li>
                What is included, what is extra, and what the client must
                provide
              </li>
              <li>Contract length and how to end the agreement</li>
            </ul>

            <p>
              Compare proposals side by side, not only by price. A cheaper plan
              with unclear work is often more expensive in the end.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request an SEO Services Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 7: Watch for Red Flags
            </h3>

            <p>Some warning signs should make you pause:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Guaranteed first-page rankings.</strong> Search results
                change constantly, and no honest company can guarantee a
                position.
              </li>
              <li>
                <strong>&quot;Secret&quot; methods.</strong> Good SEO can be
                explained in plain terms.
              </li>
              <li>
                <strong>Very low prices for large promises.</strong> Quality
                work takes time and skill.
              </li>
              <li>
                <strong>Pressure to sign immediately.</strong> A professional
                lets you think.
              </li>
              <li>
                <strong>No access to your own accounts.</strong> You should
                always own your data.
              </li>
              <li>
                <strong>Thousands of low-quality links.</strong> Cheap link
                schemes can lead to penalties.
              </li>
              <li>
                <strong>No questions about your business.</strong> If they never
                ask about your customers, they cannot plan for them.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 8: Start Small and Measure
            </h3>

            <p>
              Even after choosing a company, you can reduce risk by agreeing on
              a clear first phase. Define what will be delivered in the first
              one to three months and how you will review it together. A good
              partner will welcome that clarity.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Your First 90 Days Should Look Like
            </h3>

            <p>
              A healthy SEO project usually follows a pattern like this:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Month 1:</strong> Audit, setup, Google profile work,
                tracking and technical fixes.
              </li>
              <li>
                <strong>Month 2:</strong> On-page improvements, new or improved
                service pages, local listings and review building.
              </li>
              <li>
                <strong>Month 3:</strong> More content, a review of early data
                and an adjusted plan.
              </li>
            </ul>

            <p>
              Results vary by industry, competition, budget and the starting
              condition of your website. Some businesses see early movement in
              a few months, while others in crowded markets need longer. A
              reliable company will give you a realistic range and explain what
              affects it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Zentrix Infotech Works With Clients
            </h3>

            <p>
              Zentrix Infotech is an IT and digital company offering web
              development, software development, mobile apps, UI/UX design,
              cloud solutions and digital marketing. For SEO, that mix matters.
              Many ranking problems start with the website itself, and we can
              fix design, development and marketing issues together.
            </p>

            <p>Our approach:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                We start with your goals, not a ready-made package.
              </li>
              <li>
                We audit before we plan, so you know where you stand.
              </li>
              <li>
                We prioritize high-impact work first, especially for small and
                growing businesses.
              </li>
              <li>
                We report in plain language, focusing on enquiries and business
                outcomes.
              </li>
              <li>
                We do not promise guaranteed rankings. We promise clear work and
                honest communication.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Proof From Our Work
            </h3>

            <p>
              Zentrix Infotech has completed over 250 projects for more than
              270 clients and holds a 4.7 out of 5 rating on our website. Some
              client experiences, paraphrased:
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
              Results differ for every business, but these examples show the
              kind of relationship we aim for.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Your Hiring Checklist
            </h3>

            <p>Before you sign, make sure you can say yes to each of these:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>I know my goals and my priority services.</li>
              <li>I have seen a review of my own website or profile.</li>
              <li>
                The scope, timeline and deliverables are written down.
              </li>
              <li>I will own my Google and analytics accounts.</li>
              <li>I understand how progress will be reported.</li>
              <li>I have checked real work and client feedback.</li>
              <li>Nobody has guaranteed me a ranking.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Talk to Zentrix Infotech
            </h3>

            <p>
              If you are planning to hire an SEO company in Lucknow, we are
              happy to review your website and Google presence, answer your
              questions and suggest a practical plan, with no pressure. Call
              +91 72488 00839, message us on WhatsApp, or email
              info@zentrixinfotech.com.
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
                href="/contact-us"
                className="text-blue-600 hover:underline"
              >
                Talk to Our SEO Team
              </Link>{" "}
              ·{" "}
              <Link
                href="/contact-us"
                className="text-blue-600 hover:underline"
              >
                Discuss Your SEO Plan
              </Link>{" "}
              ·{" "}
              <Link
                href="/contact-us"
                className="text-blue-600 hover:underline"
              >
                Get a Free Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. How do I choose the right SEO company in Lucknow?
                </h4>
                <p>
                  Check their process, real work, reporting style and clarity.
                  Choose the company that understands your goals and explains
                  its plan honestly.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Should I hire a company based in Lucknow?
                </h4>
                <p>
                  Not necessarily. SEO is delivered online, so communication,
                  skill and accountability matter more than location.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. What should an SEO proposal include?
                </h4>
                <p>
                  Specific services, timelines, deliverables, reporting
                  methods, what you must provide and clear contract terms.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How much time does SEO need to show results?
                </h4>
                <p>
                  Early improvements often appear within a few months. Stronger
                  results usually build over a longer period.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can an SEO company guarantee first-page rankings?
                </h4>
                <p>
                  No. Search results change often, so an honest company will not
                  guarantee a position.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. What questions should I ask before hiring?
                </h4>
                <p>
                  Ask about the first 90 days, keyword choice, reporting,
                  account ownership, team members and similar past work.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. What are the biggest red flags?
                </h4>
                <p>
                  Guaranteed rankings, secret methods, pressure to sign
                  quickly, cheap link schemes and no access to your accounts.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Should I own my Google accounts?
                </h4>
                <p>
                  Yes. Your Google Business Profile, Analytics and Search
                  Console should always stay in your name.
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
              currentSlug="/how-to-hire-an-seo-company-in-lucknow"
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