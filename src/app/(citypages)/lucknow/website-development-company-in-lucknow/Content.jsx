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
      name: "Which is the best website development company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best company is the one that fits your goals, budget and communication style. Check live projects, client feedback and post-launch support before deciding. Zentrix Infotech shares its portfolio and case studies openly, so you can judge our work yourself.",
      },
    },
    {
      "@type": "Question",
      name: "How much does website development cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on website type, pages, design complexity, features, integrations and maintenance. A simple business site costs far less than a custom portal or store. Share your requirements and we will prepare a clear, itemised quotation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a business website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on scope, content readiness and feedback speed. A small business website usually takes less time than an ecommerce store or custom application. We confirm a realistic schedule after requirement analysis, before development begins.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech provide custom website development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build custom websites and web applications around your requirements, including booking flows, dashboards, portals and admin panels, using technologies such as React, Next.js and Node.js rather than forcing your business into a template.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop ecommerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build online stores with product catalogues, cart, checkout, payment integration and order management. Our portfolio includes e-commerce platforms such as The Buyzaar Mart and HerbsFox, which you can open and review.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website be mobile-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website we build is responsive and adapts to phones, tablets and desktops. We test across screen sizes and browsers before launch, because most local visitors browse on their mobile phones.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop SEO-friendly websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build with clean structure, proper headings, meta tags, fast loading and mobile responsiveness. This gives your website a strong SEO foundation, though rankings still depend on competition and continued optimisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign an existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We review your current site for speed, mobile experience, structure and conversion gaps, then redesign it with clearer navigation and calls to action, keeping the content and search value that already work.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide website maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide maintenance and support covering updates, backups, bug fixes and improvements after launch. Contact our team and we will suggest a support arrangement that suits your website and budget.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a website development quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839, message us on WhatsApp at +91 63970 36898, email info@zentrixinfotech.com or use the contact page. Share your goals and features, and we will send a customised quotation.",
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
              Website Development Company in Lucknow – Build a Powerful Online
              Presence for Your Business
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Looking for a Professional Website Development Company in Lucknow?
            </h3>

            <p>
              Picture a customer in Gomti Nagar or Hazratganj searching for what
              you sell. They open three websites on their phone. One loads
              slowly, one hides the contact number, and one answers their
              questions and lets them message you in a single tap. Guess who
              gets the call.
            </p>

            <p>
              That is the real job of a business website: not to look good in a
              screenshot, but to turn a curious visitor into an enquiry. Zentrix
              Infotech is a web development company that builds websites with
              that goal. We design and develop fast, responsive, SEO-ready
              websites and web applications for businesses across India, and we
              work with Lucknow businesses through calls, video meetings and
              WhatsApp. Explore our{" "}
              <Link
                href="https://www.zentrixinfotech.com/services/web-development"
                className="text-blue-600 hover:underline"
              >
                web development services
              </Link>{" "}
              to see how we work.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Website Consultation
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
              Why Does Your Business Need a Professional Website?
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Visibility.</strong> Customers search before they buy. If
                you are not on page one of their attention, a competitor is.
              </li>
              <li>
                <strong>Credibility.</strong> A clean, current website tells
                visitors you are a real, reliable business.
              </li>
              <li>
                <strong>Customer engagement.</strong> Your website answers
                questions at midnight, when your phone is off.
              </li>
              <li>
                <strong>Online enquiries.</strong> Forms, calls and WhatsApp
                buttons turn traffic into conversations.
              </li>
              <li>
                <strong>Brand positioning.</strong> Your site shows whether you
                are a budget option or a premium one.
              </li>
              <li>
                <strong>Scalability.</strong> A well-built site grows with new
                services, products and cities.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech as Your Website Development Company in
              Lucknow?
            </h3>

            <p>We would rather show you proof than make big claims.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Experience you can check.</strong> Our website lists 250+
                projects for 270+ clients, with a 4.7/5 client rating.
              </li>
              <li>
                <strong>A live portfolio.</strong> E-commerce, hospitality,
                healthcare, education, interiors and construction websites you
                can open and test yourself.
              </li>
              <li>
                <strong>Modern technology.</strong> Our own web development
                service is built on React and Next.js, so your site gets fast
                pages and clean, SEO-friendly structure.
              </li>
              <li>
                <strong>Design plus development.</strong> UI/UX, development and
                digital marketing sit in one team, so the website is built to be
                found, not only to be launched.
              </li>
              <li>
                <strong>Plain communication.</strong> Clear scope, clear
                timelines, no jargon.
              </li>
              <li>
                <strong>Support after launch.</strong> We stay available for
                updates, fixes and improvements.
              </li>
            </ul>

            <p>
              Clients tell us the same thing. Kairvi Fort Resort called their
              site elegant and functional, and noted more bookings in peak
              seasons after the digital campaigns. Jigyasa Hospital said the
              website makes appointment booking easy. You can read more{" "}
              <Link
                href="https://www.zentrixinfotech.com/about-us"
                className="text-blue-600 hover:underline"
              >
                about us
              </Link>{" "}
              and how we work.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Development Services in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Business Website Development.</strong> A focused website
                that explains your services, shows proof and makes contact
                effortless. It suits consultants, clinics, agencies and local
                service businesses.
              </li>
              <li>
                <strong>Ecommerce Website Development.</strong> Online stores
                with catalogues, cart, checkout and order management. Our work on
                The Buyzaar Mart and HerbsFox covers this kind of build.
              </li>
              <li>
                <strong>Custom Website Development.</strong> When a template
                cannot match how you work, we build to your requirements:
                booking flows, dashboards, calculators or member areas.
              </li>
              <li>
                <strong>Corporate Website Development.</strong> Structured,
                professional websites that present your company, services,
                leadership and case studies clearly to buyers and partners.
              </li>
              <li>
                <strong>Dynamic Website Development.</strong> Websites with an
                easy admin panel, so your team can update products, blogs and
                pages without waiting on a developer.
              </li>
              <li>
                <strong>Website Redesign Services.</strong> If your current site
                is slow, outdated or hard to use on mobile, we rebuild it with
                better structure, speed and calls to action.
              </li>
              <li>
                <strong>Web Application Development.</strong> Browser-based tools
                for operations, customer portals and internal workflows. Larger
                systems connect with our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/software-development"
                  className="text-blue-600 hover:underline"
                >
                  software development
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Website Maintenance and Support.</strong> Updates,
                backups, bug fixes and improvements, so your website stays secure
                and useful as your business changes.
              </li>
            </ul>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request a Website Development Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Website Development Solutions for Different Industries
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Startups and small businesses.</strong> A credible,
                quick-to-launch site that can grow as you add services.
              </li>
              <li>
                <strong>Healthcare and hospitals.</strong> Clear doctor and
                department pages, accurate emergency details and easy
                appointment options. We have built sites for hospitals such as
                Jigyasa Hospital and Oracle Eye Hospital in Moradabad.
              </li>
              <li>
                <strong>Education and institutions.</strong> Admissions, courses,
                notices and resources in one place for students and parents, as
                in our KDEDU and PSSIC projects.
              </li>
              <li>
                <strong>Real estate and construction.</strong> Project pages,
                galleries and enquiry forms that lead to site visits. MTBOSS is
                one construction and property platform we have worked on.
              </li>
              <li>
                <strong>Retail and ecommerce.</strong> Fast catalogues and simple
                checkout for shoppers on mobile.
              </li>
              <li>
                <strong>Manufacturing and industrial businesses.</strong>{" "}
                Capability pages and quote-request forms for buyers who compare
                suppliers online. Read our guide on{" "}
                <Link
                  href="https://www.zentrixinfotech.com/blog/export-website-development-for-exporters"
                  className="text-blue-600 hover:underline"
                >
                  export website development
                </Link>
                .
              </li>
              <li>
                <strong>Professional service providers.</strong> Trust-led pages
                with credentials, process and an easy way to book a call. If you
                need a mobile presence too, see our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/mobile-development"
                  className="text-blue-600 hover:underline"
                >
                  mobile app development
                </Link>{" "}
                service.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Business Requirement Analysis.</strong> We learn your
                customers, competitors and goals.
              </li>
              <li>
                <strong>Planning and Strategy.</strong> Sitemap, features,
                content plan, scope and timeline are agreed first.
              </li>
              <li>
                <strong>UI/UX Design.</strong> Layouts and user journeys for
                mobile and desktop. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Website Development.</strong> Approved designs become a
                working, responsive website.
              </li>
              <li>
                <strong>Testing and Quality Assurance.</strong> Forms, speed,
                devices and browsers are checked before launch.
              </li>
              <li>
                <strong>Website Deployment.</strong> We handle hosting setup and
                go-live.
              </li>
              <li>
                <strong>Maintenance and Technical Support.</strong> We remain
                available after launch.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Modern Technologies We Use for Website Development
            </h3>

            <p>
              Our web development service lists React.js, Next.js, Node.js,
              JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, MongoDB and
              PostgreSQL, along with Redux, Firebase and Python. The right choice
              matters. Fast frameworks keep pages quick, typed code is easier to
              maintain, solid databases support growth, and clean structure helps
              search engines read your site. We recommend a stack to fit your
              project and explain why.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Makes a Website Effective at Generating Business Inquiries?
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Strong CTA placement.</strong> A clear next step on every
                key page.
              </li>
              <li>
                <strong>WhatsApp integration.</strong> Customers can reach you in
                one tap.
              </li>
              <li>
                <strong>Simple inquiry forms.</strong> Fewer fields, more
                submissions.
              </li>
              <li>
                <strong>Mobile responsiveness.</strong> Most local searches
                happen on phones.
              </li>
              <li>
                <strong>Fast-loading pages.</strong> Visitors leave slow
                websites.
              </li>
              <li>
                <strong>SEO-friendly architecture.</strong> Proper headings,
                titles and clean URLs. Our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/blog/voice-search-seo-guide"
                  className="text-blue-600 hover:underline"
                >
                  voice search SEO guide
                </Link>{" "}
                explains what to optimise for.
              </li>
              <li>
                <strong>Trust-building testimonials.</strong> Real feedback beside
                your offer.
              </li>
              <li>
                <strong>Clear service information.</strong> Visitors should not
                have to guess.
              </li>
              <li>
                <strong>User-friendly navigation.</strong> Any page within two
                clicks.
              </li>
            </ul>

            <p>
              No developer can honestly promise leads or rankings. We build the
              foundation that gives your marketing its best chance, and our{" "}
              <Link
                href="https://www.zentrixinfotech.com/services/digital-marketing"
                className="text-blue-600 hover:underline"
              >
                digital marketing
              </Link>{" "}
              team can help with the rest.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Website Development Cost in Lucknow – What Should You Expect?
            </h3>

            <p>
              Cost depends on your project, not on a fixed rate card. The main
              factors are website type, number of pages, design complexity,
              custom functionality, ecommerce integrations, third-party APIs and
              maintenance needs. A five-page business site and a multi-vendor
              store are very different jobs. Tell us what you need and we will
              send a customised, itemised quotation, so you know what you pay for
              before work begins.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Portfolio – Website Development Projects
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>The Buyzaar Mart.</strong> A retail franchise platform
                with a multi-category marketplace, ordering, delivery management
                and franchise operations.
              </li>
              <li>
                <strong>PS Decor.</strong> A wedding and event platform for an ISO
                9001:2015 certified décor brand, built to showcase luxury
                celebrations.
              </li>
              <li>
                <strong>Vasterior.</strong> An interior and Vastu design studio
                website that presents residential and commercial work elegantly.
              </li>
              <li>
                <strong>HerbsFox.</strong> An online marketplace for raw herbs,
                spices, seeds and wellness products.
              </li>
              <li>
                <strong>MTBOSS.</strong> A construction and property platform
                bringing building, materials and property services together.
              </li>
              <li>
                <strong>KDEDU.</strong> An education website for a school-to-degree
                institution.
              </li>
            </ul>

            <p>
              Explore more in our{" "}
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
              </Link>
              .
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Started with a Professional Website Development Company in
              Lucknow
            </h3>

            <p>
              A website is a long-term business asset. Done well, it works for
              you every day. Done badly, it quietly sends customers elsewhere.
            </p>

            <p>
              Share your idea, your audience and your goals. We will review your
              requirements, suggest the right approach and give you a clear
              quotation, with no obligation.
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
                Request a Website Development Quote
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Talk to Our Development Team
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Build Your Business Website
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Which is the best website development company in Lucknow?
                </h4>
                <p>
                  The best company is the one that fits your goals, budget and
                  communication style. Check live projects, client feedback and
                  post-launch support before deciding. Zentrix Infotech shares
                  its portfolio and case studies openly, so you can judge our
                  work yourself.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How much does website development cost in Lucknow?
                </h4>
                <p>
                  Cost depends on website type, pages, design complexity,
                  features, integrations and maintenance. A simple business site
                  costs far less than a custom portal or store. Share your
                  requirements and we will prepare a clear, itemised quotation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does it take to develop a business website?
                </h4>
                <p>
                  Timelines depend on scope, content readiness and feedback
                  speed. A small business website usually takes less time than an
                  ecommerce store or custom application. We confirm a realistic
                  schedule after requirement analysis, before development
                  begins.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Does Zentrix Infotech provide custom website development?
                </h4>
                <p>
                  Yes. We build custom websites and web applications around your
                  requirements, including booking flows, dashboards, portals and
                  admin panels, using technologies such as React, Next.js and
                  Node.js rather than forcing your business into a template.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can you develop ecommerce websites?
                </h4>
                <p>
                  Yes. We build online stores with product catalogues, cart,
                  checkout, payment integration and order management. Our
                  portfolio includes e-commerce platforms such as The Buyzaar
                  Mart and HerbsFox, which you can open and review.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will my website be mobile-friendly?
                </h4>
                <p>
                  Yes. Every website we build is responsive and adapts to phones,
                  tablets and desktops. We test across screen sizes and browsers
                  before launch, because most local visitors browse on their
                  mobile phones.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you develop SEO-friendly websites?
                </h4>
                <p>
                  Yes. We build with clean structure, proper headings, meta tags,
                  fast loading and mobile responsiveness. This gives your website
                  a strong SEO foundation, though rankings still depend on
                  competition and continued optimisation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can you redesign an existing website?
                </h4>
                <p>
                  Yes. We review your current site for speed, mobile experience,
                  structure and conversion gaps, then redesign it with clearer
                  navigation and calls to action, keeping the content and search
                  value that already work.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you provide website maintenance and support?
                </h4>
                <p>
                  Yes. We provide maintenance and support covering updates,
                  backups, bug fixes and improvements after launch. Contact our
                  team and we will suggest a support arrangement that suits your
                  website and budget.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How can I get a website development quotation?
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
                  or use the contact page. Share your goals and features, and we
                  will send a customised quotation.
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
              currentSlug="/web-development-company-in-lucknow"
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