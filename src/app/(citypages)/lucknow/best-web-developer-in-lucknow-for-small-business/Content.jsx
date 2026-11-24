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
      name: "Why does a small business need a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It builds trust, helps customers find you and generates enquiries around the clock.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose a good web developer in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check live projects, ask for a written scope and price, and confirm post-launch support.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech work with small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build websites for startups, shops, clinics, institutes and growing companies.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a small business website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on pages and features. Share your needs for a clear, itemised quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard business website usually takes a few weeks, depending on content and features.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website work on mobile phones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every site we build is fully responsive.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help my site appear on Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build in SEO basics and offer marketing support. Rankings also depend on competition and content.",
      },
    },
    {
      "@type": "Question",
      name: "Can I update the website myself later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, where needed we can build easy-to-edit sections, or we can handle updates for you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer support after the website goes live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide maintenance, updates and improvements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you also sell my products online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build ecommerce stores with payments, orders and delivery tracking.",
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
              Best Web Developer in Lucknow for Small Business: What to Look For and Why It Matters
            </h2>

            <p>
              If you run a small business in Lucknow, you already wear many hats. You manage staff, handle customers, chase payments and keep the shelves full. A website probably feels like one more task on a list that never ends. Yet a well-built website is one of the few investments that keeps working while you sleep. It answers questions, shows your best work, collects enquiries and builds trust long before a customer calls.
            </p>

            <p>
              The challenge is choosing the right person to build it. Lucknow has freelancers, small studios and large agencies, and their quotes can differ by a factor of ten. This guide explains what a good web developer actually does for a small business, how to compare your options honestly, and why many local owners work with Zentrix Infotech.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Small Businesses in Lucknow Need a Real Website
            </h3>

            <p>
              Think about how you shop. When you need a dentist, a caterer or a tile dealer, you search on your phone, scan a few results and call the one that looks credible. Your customers do exactly the same.
            </p>

            <p>
              A professional website gives a small business several clear advantages:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Credibility.</strong> A business without a site, or with a broken one, feels risky. A clean website feels established.
              </li>
              <li>
                <strong>Visibility.</strong> Customers searching for your service in Lucknow can find you instead of a competitor.
              </li>
              <li>
                <strong>Round-the-clock selling.</strong> Your site shares prices, photos, hours and contact options at midnight as easily as at noon.
              </li>
              <li>
                <strong>Lower marketing cost.</strong> Once your site ranks, enquiries arrive without paying for every click.
              </li>
              <li>
                <strong>Control.</strong> Unlike a social media page, you own your website and the rules never change overnight.
              </li>
            </ul>

            <p>
              Social media is useful, but it is rented space. Your website is the property you own.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What the Best Web Developer for a Small Business Actually Delivers
            </h3>

            <p>
              &quot;Best&quot; does not mean the most expensive or the most famous. For a small business, the best developer is the one who solves your problem within your budget. Here is what that looks like in practice.
            </p>

            <h4 className="font-semibold text-gray-900">
              They Start With Your Goals, Not Their Template
            </h4>

            <p>
              A good developer asks how you earn money, who your customers are and what action you want visitors to take. A restaurant wants table bookings. A clinic wants appointments. A shop wants orders. The design follows from the answer.
            </p>

            <h4 className="font-semibold text-gray-900">
              They Build for Mobile First
            </h4>

            <p>
              In Lucknow, most visitors browse on smartphones, often on average mobile networks. Your site has to load quickly and read clearly on a small screen. If it does not, visitors leave within seconds.
            </p>

            <h4 className="font-semibold text-gray-900">
              They Make Your Site Easy to Find
            </h4>

            <p>
              Search visibility is not magic, but it is built on basics: clean code, fast loading, sensible page structure, proper titles and descriptions, and helpful local content. A developer who ignores these basics hands you a good-looking site that nobody sees.
            </p>

            <h4 className="font-semibold text-gray-900">
              They Keep Pricing Honest
            </h4>

            <p>
              You should know what you are paying for before work begins. Scope, timeline, revisions and support should be written down in plain language, with no surprise charges later.
            </p>

            <h4 className="font-semibold text-gray-900">
              They Stay Available After Launch
            </h4>

            <p>
              Websites need updates, fixes and sometimes new features. A developer who disappears after delivery leaves you stranded the first time something breaks.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Meet Zentrix Infotech: A Development Partner Built for Growing Businesses
            </h3>

            <p>
              Zentrix Infotech is a web and software company that has completed more than 250 projects for over 270 clients, holding a 4.7 out of 5 client rating. Our work spans healthcare, education, retail, interiors, weddings and events, hospitality and real estate, which means we understand the practical needs of small and medium businesses across many sectors.
            </p>

            <p>
              We serve clients in Lucknow and across Uttar Pradesh through phone calls, video meetings and WhatsApp, and we deliver projects remotely with clear updates at every stage.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Our Clients Say
            </h3>

            <p>
              Real feedback matters more than any promise on a sales page. Clients have told us:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                A pharmacy owner said his online presence was almost zero before, and that people now discover the business through search and social ads, with orders and footfall growing steadily.
              </li>
              <li>
                A hospital director said the website is clean, professional and makes appointment booking easy.
              </li>
              <li>
                A resort owner said the site was elegant and functional, and that campaigns brought a noticeable lift in bookings during peak season.
              </li>
            </ul>

            <p>
              You can see more of our work, including projects like The Buyzaar Mart, PS Decor, Vasterior and HerbsFox, in our{" "}
              <Link href="/portfolio" className="text-blue-600 hover:underline">
                portfolio
              </Link>
              .
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Web Services for Small Businesses
            </h3>

            <h4 className="font-semibold text-gray-900">Business Websites</h4>

            <p>
              A clear, professional website that explains what you do, shows proof of your work and makes contacting you effortless. Ideal for service providers, clinics, consultants, institutes and local shops.
            </p>

            <h4 className="font-semibold text-gray-900">Ecommerce Websites</h4>

            <p>
              An online store with product pages, secure payments, order tracking and delivery workflows. We have built stores ranging from specialty spice and herb shops to a multi-category retail franchise platform.
            </p>

            <h4 className="font-semibold text-gray-900">
              Portfolio and Brand Websites
            </h4>

            <p>
              If your work is visual, such as interiors, events, photography or design, your site needs to show it beautifully. We build portfolio-led sites that turn admirers into enquiries.
            </p>

            <h4 className="font-semibold text-gray-900">Website Redesign</h4>

            <p>
              If your current site is slow, outdated or not working on phones, we can rebuild it without losing the search visibility you have already earned.
            </p>

            <h4 className="font-semibold text-gray-900">
              Local SEO and Digital Marketing
            </h4>

            <p>
              A website works best when people can find it. We offer SEO, social media and paid campaign support so your new site starts attracting visitors from day one.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Modern Technology Without the Jargon
            </h3>

            <p>
              You do not need to understand code to benefit from good technology. What matters is what it does for you. We build with React.js, Next.js, Node.js, Python, TypeScript and databases such as MongoDB, PostgreSQL and Firebase. In plain terms, that means pages that load quickly, layouts that adapt to any screen, strong security and a codebase that can grow with you. If you later need online payments, customer logins or a mobile app, we can extend your site rather than rebuilding it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Much Does a Small Business Website Cost in Lucknow?
            </h3>

            <p>
              This is the first question most owners ask, and the honest answer is that it depends. Cost is shaped by a handful of factors:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Number of pages.</strong> A five-page site costs less than a fifty-page one.
              </li>
              <li>
                <strong>Features.</strong> Online payments, booking systems and customer accounts add work.
              </li>
              <li>
                <strong>Design.</strong> A fully custom design takes more time than a simple, clean layout.
              </li>
              <li>
                <strong>Content.</strong> If we write text and prepare images, the project involves more effort.
              </li>
              <li>
                <strong>Ongoing support.</strong> Maintenance and marketing are separate from the build.
              </li>
            </ul>

            <p>
              Rather than quote a number that may not fit you, we ask about your needs and send a clear, itemised proposal. We aim to offer practical, affordable packages so that a small budget still gets a professional result. Beware of very cheap offers that use pirated themes, copy other sites or leave out security and support. They tend to cost far more in the long run.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Freelancer or Agency: Which Is Right for You?
            </h3>

            <p>
              A freelancer may be inexpensive but can become a single point of failure if they are unavailable. A large agency may offer many services but often at premium prices. We aim for the middle ground: a coordinated team of designers, developers and marketers, with direct access to the people who know your project. Whichever route you choose, judge them by live work and clear answers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Seven Questions to Ask Before You Hire Any Web Developer
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Can I see live websites you have built for businesses like mine?</li>
              <li>What exactly is included in the price, and what costs extra?</li>
              <li>How long will the project take, and what do you need from me?</li>
              <li>Will my site work smoothly on mobile phones?</li>
              <li>How will you handle basic SEO?</li>
              <li>Who owns the website, content and domain when the work is finished?</li>
              <li>What support do I get after launch, and how do I reach you?</li>
            </ul>

            <p>
              A trustworthy developer will answer all seven clearly and without hesitation. We welcome these questions from every client.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Simple Working Process
            </h3>

            <p>
              We keep things straightforward so busy owners can follow along:
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Conversation.</strong> We learn about your business and goals.
              </li>
              <li>
                <strong>Proposal.</strong> You receive scope, timeline and cost in writing.
              </li>
              <li>
                <strong>Design.</strong> You review and approve the look before development.
              </li>
              <li>
                <strong>Build and test.</strong> We develop, then test across devices and browsers.
              </li>
              <li>
                <strong>Launch.</strong> We take your site live and connect analytics.
              </li>
              <li>
                <strong>Support.</strong> We maintain and improve it as your business grows.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Ready to Get Your Business Online?
            </h3>

            <p>
              You do not need a huge budget or technical knowledge to build a website that works. You need a developer who listens, explains and delivers. Tell us about your business, and we will suggest a practical plan that fits your goals and your budget.
            </p>

            <p>
              Call:{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              |{" "}
              <a
                href="tel:+916397036898"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
            </p>

            <p>
              Email:{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
            </p>

            <p>
              Contact Zentrix Infotech today and let us help your small business grow online.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Book Your Free Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Why does a small business need a website?
                </h4>
                <p>
                  It builds trust, helps customers find you and generates enquiries around the clock.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How do I choose a good web developer in Lucknow?
                </h4>
                <p>
                  Check live projects, ask for a written scope and price, and confirm post-launch support.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Does Zentrix Infotech work with small businesses?
                </h4>
                <p>
                  Yes. We build websites for startups, shops, clinics, institutes and growing companies.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How much does a small business website cost?
                </h4>
                <p>
                  It depends on pages and features. Share your needs for a clear, itemised quote.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How long does it take to build a website?
                </h4>
                <p>
                  A standard business website usually takes a few weeks, depending on content and features.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will my website work on mobile phones?
                </h4>
                <p>
                  Yes. Every site we build is fully responsive.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can you help my site appear on Google?
                </h4>
                <p>
                  We build in SEO basics and offer marketing support. Rankings also depend on competition and content.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can I update the website myself later?
                </h4>
                <p>
                  Yes, where needed we can build easy-to-edit sections, or we can handle updates for you.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you offer support after the website goes live?
                </h4>
                <p>
                  Yes. We provide maintenance, updates and improvements.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. Can you also sell my products online?
                </h4>
                <p>
                  Yes. We build ecommerce stores with payments, orders and delivery tracking.
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
                    href="/services/digital-marketing"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-blue-600 hover:underline"
                  >
                    About Us
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
              currentSlug="/best-web-developer-in-lucknow-for-small-business"
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