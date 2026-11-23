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
      name: "Which is the best digital marketing company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best company is the one that fits your goals and budget. Check real client feedback, ask for sample reports and avoid guaranteed-result promises. Zentrix Infotech shares its portfolio and client feedback openly so you can judge for yourself.",
      },
    },
    {
      "@type": "Question",
      name: "What services does a digital marketing company provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically SEO, local SEO, social media marketing, paid ads on Google and social platforms, content marketing, website optimisation, branding and reporting. At Zentrix we combine these with web development so marketing and website work together.",
      },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your goals, competition, chosen channels, content volume and ad budget. Ad spend is separate from service fees. Share your goal and budget and we will prepare a clear, itemised proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is gradual. Many businesses see early movement in a few months, but results depend on competition, website condition and consistency. Paid ads can bring visibility faster, which is why we often combine both.",
      },
    },
    {
      "@type": "Question",
      name: "Can digital marketing generate leads for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can support enquiries through search visibility, targeted ads and a website built to convert. Results vary by industry and competition, so we do not promise guaranteed leads. We track enquiries and improve them month by month.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer local SEO for Lucknow businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We optimise your Google Business Profile, listings, reviews and website location signals so nearby customers can find you. It suits clinics, shops, institutes and service businesses that depend on local searches.",
      },
    },
    {
      "@type": "Question",
      name: "Do you manage social media and paid ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle social media content and run targeted campaigns on Google and social platforms. Each campaign has tracking, so you can see calls, forms and messages that came from the ads.",
      },
    },
    {
      "@type": "Question",
      name: "Do you also build websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Zentrix Infotech builds websites and web applications, so we can fix conversion problems at the source. Marketing and development in one team means faster changes and fewer handoffs.",
      },
    },
    {
      "@type": "Question",
      name: "How will I know my marketing is working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You receive regular reports covering work done, spend, traffic and enquiries from calls, forms and WhatsApp. We explain the numbers in plain language and adjust the plan based on what brings real enquiries.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start with Zentrix Infotech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839, message us on WhatsApp at +91 63970 36898, email info@zentrixinfotech.com or use the contact page. Share your business, goals and budget, and we will propose a clear plan.",
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
              Digital Marketing Company in Lucknow – Turn Online Searches Into
              Real Business Enquiries
            </h2>

            <p>
              Most Lucknow businesses already “do” digital marketing. They post
              on Instagram, run an occasional ad and have a website that nobody
              visits. The result is a lot of activity and very few enquiries.
            </p>

            <p>
              The problem is rarely effort. It is usually that the website, the
              ads, the search presence and the follow-up were never planned
              together. Zentrix Infotech is a digital marketing company that
              builds those pieces as one system, starting with the website your
              customers land on.
            </p>

            <p>
              We work with businesses across India, and we support Lucknow
              businesses through calls, video meetings and WhatsApp. You can see
              the full scope of our{" "}
              <Link
                href="https://www.zentrixinfotech.com/services/digital-marketing"
                className="text-blue-600 hover:underline"
              >
                digital marketing services
              </Link>{" "}
              before you get in touch.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Digital Marketing Consultation
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
              Why Does Your Lucknow Business Need Digital Marketing?
            </h3>

            <p>
              Before a customer calls you, they search. They compare, read
              reviews and look at your website and social profiles. If you are
              missing at that moment, the enquiry goes to someone else.
            </p>

            <p>Done well, digital marketing helps you:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Appear when customers search for your service in Lucknow.</li>
              <li>
                Reach the right audience with targeted ads instead of wide,
                wasteful promotion.
              </li>
              <li>
                Build trust through reviews, content and a professional online
                presence.
              </li>
              <li>
                Measure what works instead of guessing, so your budget goes where
                enquiries come from.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech as Your Digital Marketing Company in
              Lucknow?
            </h3>

            <p>We prefer to give you facts you can check.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Marketing and development in one team.</strong> We build
                websites and run campaigns, so we fix the real reasons visitors
                do not enquire: a slow page, a buried phone number, a confusing
                form.
              </li>
              <li>
                <strong>Experience across industries.</strong> Our website lists
                250+ projects for 270+ clients, with a 4.7/5 client rating.
              </li>
              <li>
                <strong>Client-reported results.</strong> Clients from hospitals
                to real estate describe steady enquiries, better local visibility
                and stronger footfall after our campaigns. We share their
                feedback below, in their words, not ours.
              </li>
              <li>
                <strong>Honest communication.</strong> We do not promise
                guaranteed rankings, leads or sales. Nobody can, and anyone who
                does should be questioned.
              </li>
              <li>
                <strong>Clear reporting.</strong> You see what was done, what it
                cost and what it produced.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Digital Marketing Services in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Search Engine Optimization (SEO).</strong> We improve your
                website’s structure, content and technical health so search
                engines understand it and customers find it. SEO builds slowly
                but compounds over time. Our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/blog/voice-search-seo-guide"
                  className="text-blue-600 hover:underline"
                >
                  voice search SEO guide
                </Link>{" "}
                shows how we think about where search is heading.
              </li>
              <li>
                <strong>Local SEO and Google Business Profile.</strong> For
                clinics, shops, institutes and service providers, being found
                “near me” matters most. We optimise your Google Business Profile,
                listings, reviews and location signals so local customers can
                find and contact you.
              </li>
              <li>
                <strong>Social Media Marketing.</strong> Consistent, on-brand
                content on platforms like Instagram and Facebook that keeps your
                business visible and gives people a reason to follow, message and
                visit.
              </li>
              <li>
                <strong>Paid Advertising (Google and Social Ads).</strong>{" "}
                Targeted campaigns for faster visibility. Hawk Eye Shooting
                Institute told us targeted ads helped their grand opening reach
                the right audience, and brought steady student enquiries through
                Instagram and Google.
              </li>
              <li>
                <strong>Content Marketing.</strong> Useful blogs, guides and
                service pages that answer your customers’ real questions and
                support SEO. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/blog"
                  className="text-blue-600 hover:underline"
                >
                  blog
                </Link>{" "}
                for the style we write in.
              </li>
              <li>
                <strong>Website Optimization and Conversion.</strong> Traffic is
                wasted if the website cannot convert it. We improve speed, mobile
                experience, calls to action and forms, supported by our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/web-development"
                  className="text-blue-600 hover:underline"
                >
                  web development
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                teams.
              </li>
              <li>
                <strong>Branding and Creative Design.</strong> Logos, creatives
                and brand consistency, so every ad and post looks like it comes
                from one trusted business.
              </li>
              <li>
                <strong>Tracking and Reporting.</strong> Call tracking, form
                tracking and clear monthly reports, so you can see which channel
                brings enquiries.
              </li>
            </ul>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request a Digital Marketing Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Digital Marketing Solutions for Different Industries
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Healthcare and hospitals.</strong> Patients search for
                doctors, departments and emergency services. We focus on local
                visibility, easy appointment paths and accurate information.
              </li>
              <li>
                <strong>Real estate and construction.</strong> Targeted campaigns
                that bring property buyers, backed by clear project pages. Park
                Square told us our campaigns generated quality leads and
                increased site footfall.
              </li>
              <li>
                <strong>Retail and ecommerce.</strong> Product visibility, ads and
                content that drive orders. Ahlawat Pharmacy said people now find
                them through search and social ads, with orders and footfall
                growing steadily.
              </li>
              <li>
                <strong>Building materials and dealers.</strong> Jai Balaji Bath
                and Tiles reported reaching new builders and dealers, with
                improved local visibility and steady enquiries.
              </li>
              <li>
                <strong>Education and institutes.</strong> Admission-focused
                campaigns and a website that parents and students can navigate
                easily.
              </li>
              <li>
                <strong>Hospitality and events.</strong> Kairvi Fort Resort noted a
                boost in bookings during peak seasons after our digital
                campaigns.
              </li>
              <li>
                <strong>Startups and franchises.</strong> The Buyzaar Mart said our
                strategy helped them launch their retail franchise network and
                attract quality franchise enquiries.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Digital Marketing Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Business and Market Understanding.</strong> Your goals,
                customers, competitors and current online presence.
              </li>
              <li>
                <strong>Audit.</strong> We check your website, search presence,
                profiles and tracking for gaps.
              </li>
              <li>
                <strong>Strategy.</strong> We pick the right channel mix and set
                realistic targets for your budget.
              </li>
              <li>
                <strong>Setup.</strong> Tracking, profiles, landing pages,
                creatives and campaigns are made ready.
              </li>
              <li>
                <strong>Execution.</strong> SEO, content, social and ad work
                begins on a regular schedule.
              </li>
              <li>
                <strong>Reporting.</strong> Monthly reports covering actions,
                enquiries and costs.
              </li>
              <li>
                <strong>Optimisation.</strong> We refine what works and stop what
                does not.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Which Digital Marketing Channel Is Right for You?
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Your goal
                    </th>
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Where we usually start
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Show up when locals search</td>
                    <td className="px-3 py-3">
                      Local SEO and Google Business Profile
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Get quick enquiries</td>
                    <td className="px-3 py-3">
                      Google and social ads, with a strong landing page
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Build long-term traffic</td>
                    <td className="px-3 py-3">SEO and content marketing</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Build brand trust</td>
                    <td className="px-3 py-3">
                      Social media, reviews and consistent branding
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Convert more of your visitors</td>
                    <td className="px-3 py-3">
                      Website and conversion improvements
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Most businesses need a mix, and we recommend one after the audit.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Digital Marketing Cost in Lucknow – What Should You Expect?
            </h3>

            <p>There is no single price, because needs vary. Cost depends on:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Your goals and how competitive your market is.</li>
              <li>
                The channels you choose, such as SEO, social, paid ads or all
                three.
              </li>
              <li>Ad spend, which is separate from agency fees.</li>
              <li>Content and creative volume.</li>
              <li>Website condition, since a weak site needs work first.</li>
              <li>Reporting and management effort.</li>
            </ul>

            <p>
              We would rather suggest a plan that fits your budget than push a
              package you do not need. Tell us your goal and monthly budget, and
              we will send a clear, itemised proposal.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Trust Zentrix Infotech
            </h3>

            <p>
              You can browse our{" "}
              <Link
                href="https://www.zentrixinfotech.com/portfolio"
                className="text-blue-600 hover:underline"
              >
                portfolio
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.zentrixinfotech.com/projects"
                className="text-blue-600 hover:underline"
              >
                case studies
              </Link>{" "}
              before contacting us. Dr. C.P. Singh of Jigyasa Hospital described
              a consistent rise in patient enquiries through Google and social
              media. Vinay Tiwari of Intirio World said the digital marketing
              push helped generate qualified leads consistently. These are client
              statements, not guarantees, and results vary by business and
              market.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Started with a Digital Marketing Company in Lucknow
            </h3>

            <p>
              If your marketing feels like spending without answers, a short
              conversation can change that. Tell us what you sell, who you want
              to reach and what you have tried. We will review your online
              presence and suggest a clear next step, with no obligation.
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
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Talk to Our Marketing Team
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Discuss Your Marketing Goals
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
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
                  1. Which is the best digital marketing company in Lucknow?
                </h4>
                <p>
                  The best company is the one that fits your goals and budget.
                  Check real client feedback, ask for sample reports and avoid
                  guaranteed-result promises. Zentrix Infotech shares its
                  portfolio and client feedback openly so you can judge for
                  yourself.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. What services does a digital marketing company provide?
                </h4>
                <p>
                  Typically SEO, local SEO, social media marketing, paid ads on
                  Google and social platforms, content marketing, website
                  optimisation, branding and reporting. At Zentrix we combine
                  these with web development so marketing and website work
                  together.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much does digital marketing cost in Lucknow?
                </h4>
                <p>
                  It depends on your goals, competition, chosen channels, content
                  volume and ad budget. Ad spend is separate from service fees.
                  Share your goal and budget and we will prepare a clear,
                  itemised proposal.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does SEO take to show results?
                </h4>
                <p>
                  SEO is gradual. Many businesses see early movement in a few
                  months, but results depend on competition, website condition
                  and consistency. Paid ads can bring visibility faster, which is
                  why we often combine both.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can digital marketing generate leads for my business?
                </h4>
                <p>
                  It can support enquiries through search visibility, targeted
                  ads and a website built to convert. Results vary by industry
                  and competition, so we do not promise guaranteed leads. We
                  track enquiries and improve them month by month.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do you offer local SEO for Lucknow businesses?
                </h4>
                <p>
                  Yes. We optimise your Google Business Profile, listings,
                  reviews and website location signals so nearby customers can
                  find you. It suits clinics, shops, institutes and service
                  businesses that depend on local searches.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you manage social media and paid ads?
                </h4>
                <p>
                  Yes. We handle social media content and run targeted campaigns
                  on Google and social platforms. Each campaign has tracking, so
                  you can see calls, forms and messages that came from the ads.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you also build websites?
                </h4>
                <p>
                  Yes. Zentrix Infotech builds websites and web applications, so
                  we can fix conversion problems at the source. Marketing and
                  development in one team means faster changes and fewer
                  handoffs.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. How will I know my marketing is working?
                </h4>
                <p>
                  You receive regular reports covering work done, spend, traffic
                  and enquiries from calls, forms and WhatsApp. We explain the
                  numbers in plain language and adjust the plan based on what
                  brings real enquiries.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I start with Zentrix Infotech?
                </h4>
                <p>
                  Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
                  </a>
                  , message us on WhatsApp at{" "}
                  <a
                    href="https://wa.me/916397036898"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    +91 63970 36898
                  </a>
                  , email{" "}
                  <a
                    href="mailto:info@zentrixinfotech.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@zentrixinfotech.com
                  </a>{" "}
                  or use the contact page. Share your business, goals and budget,
                  and we will propose a clear plan.
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
                    href="/services/ui-ux-designing"
                    className="text-blue-600 hover:underline"
                  >
                    UI/UX Design Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/voice-search-seo-guide"
                    className="text-blue-600 hover:underline"
                  >
                    Voice Search SEO Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/export-website-development-for-exporters"
                    className="text-blue-600 hover:underline"
                  >
                    Export Website Development Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/ai-ecommerce-india-next-billion-users"
                    className="text-blue-600 hover:underline"
                  >
                    AI E-commerce Guide
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
              currentSlug="/digital-marketing-company-in-lucknow"
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