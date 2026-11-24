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
      name: "What does a website development agency do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It plans, designs, builds, tests and supports your website using a team of specialists, so you do not need to hire each skill separately.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose a website development agency in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check live portfolio work, client feedback, process clarity and support terms. Choose a team that understands your goals, not only the lowest quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does website development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple business website usually takes a few weeks. E-commerce sites and custom applications take longer, depending on features and how quickly content is ready.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build e-commerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build online stores with catalogues, carts, payment gateways and order management, designed to make buying simple.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website work on mobile phones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design and test mobile-first, so your site works well on phones, tablets and desktops.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You should own your domain, content and website files. We confirm ownership terms clearly in the agreement.",
      },
    },
    {
      "@type": "Question",
      name: "Is the website SEO-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We set up clean structure, meta tags, speed optimisation and sitemaps. Rankings depend on competition and ongoing effort, so we cannot guarantee positions.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with Lucknow businesses remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work through calls, shared files and regular updates, so you get the same quality without an office visit.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer maintenance, updates and fixes, and can add SEO or digital marketing whenever you need them.",
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
              Website Development Agency in Lucknow
            </h2>

            <p>
              Zentrix Infotech is a website development agency that builds
              fast, secure, mobile-friendly websites and web applications for
              businesses in Lucknow and across India. We plan, design, develop,
              test and support every project, so your website works as a real
              sales and enquiry channel. Our clients rate us 4.7 out of 5
              across 250+ projects for 270+ clients.
            </p>

            <p>
              <strong>Quick answer:</strong> A good website development agency
              should plan before it builds, design for mobile first, write
              clean code, set up SEO basics, test thoroughly and support you
              after launch. That is how our team works.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Website Consultation
              </Link>{" "}
              |{" "}
              <a
                href="tel:+917248800839"
                className="font-semibold text-blue-600 hover:underline"
              >
                Call +91 72488 00839
              </a>{" "}
              |{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                WhatsApp Us
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Lucknow Businesses Need a Professional Website
            </h3>

            <p>
              Customers in Gomti Nagar, Hazratganj, Aliganj, Indira Nagar and
              across Lucknow search on their phones, compare a few options and
              contact the business that looks most credible. Your website is
              often the deciding factor.
            </p>

            <p>A professionally developed website gives you:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Trust:</strong> A clean, fast, secure site shows you
                are a serious business.
              </li>
              <li>
                <strong>Visibility:</strong> Search-friendly structure helps
                customers find you.
              </li>
              <li>
                <strong>Enquiries:</strong> Clear buttons, short forms and
                visible contact details turn visitors into leads.
              </li>
              <li>
                <strong>Control:</strong> You can update content, add products
                and grow without starting over.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Does a Website Development Agency Do?
            </h3>

            <p>An agency is a team of specialists, not one person:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Strategy:</strong> Understanding your goals, customers
                and competitors.
              </li>
              <li>
                <strong>UI/UX design:</strong> Layouts that guide visitors to
                take action.
              </li>
              <li>
                <strong>Front-end development:</strong> The part visitors see
                and use, built for every screen.
              </li>
              <li>
                <strong>Back-end development:</strong> Databases, logins,
                forms, payments and integrations.
              </li>
              <li>
                <strong>Testing:</strong> Checking speed, devices, browsers and
                forms before launch.
              </li>
              <li>
                <strong>SEO and marketing:</strong> Helping search engines find
                and understand your site.
              </li>
              <li>
                <strong>Support:</strong> Updates, fixes and improvements after
                launch.
              </li>
            </ul>

            <p>
              When all these skills sit in one team, projects move faster and
              nothing is lost in handover.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Agency vs Freelancer vs In-House Team
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Option
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Works best when
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Watch out for
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Freelancer
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Small, simple, one-off tasks
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      One person covering design, code and SEO; availability
                      risk
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      In-house team
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Large, ongoing product work
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Hiring, salary and management load
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Agency
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Business sites, e-commerce and web apps needing several
                      skills
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Pick one with proof of work and clear communication
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For most growing businesses, an agency gives the widest skill set
              without the cost of hiring a full team. Verify the agency before
              you sign.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Development Services in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Business website development:</strong> Company, clinic,
                school, studio and service websites.
              </li>
              <li>
                <strong>E-commerce development:</strong> Catalogues, carts,
                payment gateways, inventory and orders.
              </li>
              <li>
                <strong>Custom web applications:</strong> Portals, dashboards,
                booking systems and internal tools.
              </li>
              <li>
                <strong>CMS websites:</strong> Sites you can edit yourself
                without technical help.
              </li>
              <li>
                <strong>Landing pages:</strong> Fast, focused pages for ads and
                campaigns.
              </li>
              <li>
                <strong>Redesign and migration:</strong> A new look and better
                performance for older sites.
              </li>
              <li>
                <strong>API integrations:</strong> Payment, CRM, WhatsApp, maps
                and other tools.
              </li>
              <li>
                <strong>UI/UX design, mobile apps and cloud:</strong> Complete
                digital support under one roof.
              </li>
              <li>
                <strong>Digital marketing:</strong> SEO, social media and ads
                to bring visitors to your site.
              </li>
            </ul>

            <p>
              <Link
                href="/services/web-development"
                className="text-blue-600 hover:underline"
              >
                Explore our web development service
              </Link>{" "}
              |{" "}
              <Link
                href="/services/digital-marketing"
                className="text-blue-600 hover:underline"
              >
                See digital marketing
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Types of Websites We Build
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Corporate and service sites that present your company, services
                and contact details clearly.
              </li>
              <li>
                E-commerce stores, such as our HerbsFox herbs and spices store
                and The Buyzaar Mart retail platform.
              </li>
              <li>
                Portfolio and showcase sites, such as our work for Vasterior,
                Alluring Glimpses and PS Decor.
              </li>
              <li>Education sites, such as our KDEDU project.</li>
              <li>
                Web applications that automate bookings, orders, dashboards and
                workflows.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery:</strong> We learn your business, audience,
                goals and must-have features.
              </li>
              <li>
                <strong>Planning:</strong> We define the sitemap, user flows
                and content needs.
              </li>
              <li>
                <strong>Wireframes and design:</strong> You approve the layout
                and look before development starts.
              </li>
              <li>
                <strong>Development:</strong> We build with clean code, using
                technology chosen to fit your project.
              </li>
              <li>
                <strong>SEO and content setup:</strong> We add headings, meta
                tags, image names, schema where suitable and analytics.
              </li>
              <li>
                <strong>Testing:</strong> We check phones, tablets, browsers,
                forms and speed.
              </li>
              <li>
                <strong>Launch:</strong> We deploy to reliable hosting and test
                everything live.
              </li>
              <li>
                <strong>Support and growth:</strong> We handle updates, fixes
                and optional marketing.
              </li>
            </ol>

            <p>
              You get regular updates and can give feedback at every stage.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Speed, SEO and Security Built In
            </h3>

            <p>Every site we develop includes:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Performance:</strong> Optimised images, lean code and
                sensible hosting setup.
              </li>
              <li>
                <strong>SEO foundations:</strong> Clean URLs, proper headings,
                meta tags, a sitemap and mobile-friendly structure.
              </li>
              <li>
                <strong>Security:</strong> HTTPS, secure forms and safe
                handling of user data.
              </li>
              <li>
                <strong>Analytics:</strong> Tracking so you can see where
                enquiries and sales come from.
              </li>
            </ul>

            <p>
              No one can honestly guarantee a Google ranking. We build a
              strong, search-friendly base and can support it with ongoing SEO.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work and Client Feedback
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>The Buyzaar Mart:</strong> A retail franchise and
                online shopping platform.
              </li>
              <li>
                <strong>PS Decor:</strong> A wedding and event platform. The
                client says the site showcases their work beautifully and has
                helped bring more client enquiries.
              </li>
              <li>
                <strong>Vasterior:</strong> A luxury interior and Vastu design
                studio website.
              </li>
              <li>
                <strong>Alluring Glimpses:</strong> An interior design site
                that the client says is easy for visitors to navigate.
              </li>
              <li>
                <strong>KDEDU:</strong> An education platform for a group of
                institutions.
              </li>
              <li>
                <strong>HerbsFox:</strong> An organic herbs and spices
                e-commerce store.
              </li>
            </ul>

            <p>
              <Link
                href="/portfolio"
                className="text-blue-600 hover:underline"
              >
                View our full portfolio
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose a Website Development Agency in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Open their live projects on your phone and check speed and
                layout.
              </li>
              <li>Ask who will actually work on your project.</li>
              <li>Ask how they handle changes, delays and support.</li>
              <li>Check that quotes list exactly what is included.</li>
              <li>
                Confirm that you will own your website, domain and content.
              </li>
            </ul>

            <p>We welcome all of these questions.</p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Brief an Agency
            </h3>

            <p>
              Before your first call, prepare your business goals, examples of
              sites you like, the pages and features you need, the status of
              your content, your timeline and budget range, and who approves
              decisions. Not sure about any of these? Tell us, and we will help
              you work it out.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Design, development and marketing in one team.</li>
              <li>A 4.7/5 client rating across 250+ projects.</li>
              <li>
                Experience in interiors, events, education, retail, e-commerce,
                healthcare and hospitality.
              </li>
              <li>
                Remote-first working through calls, shared files and regular
                updates, with offices in Moradabad and Ghaziabad.
              </li>
              <li>Scope-based quotes with no hidden surprises.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Website Project Today
            </h3>

            <p>
              Tell us about your business and goals. We will suggest the right
              structure, timeline and approach, and send a clear quote.
            </p>

            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              |{" "}
              <span role="img" aria-label="WhatsApp">
                💬
              </span>{" "}
              WhatsApp{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>{" "}
              |{" "}
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
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
                  1. What does a website development agency do?
                </h4>
                <p>
                  It plans, designs, builds, tests and supports your website
                  using a team of specialists, so you do not need to hire each
                  skill separately.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How do I choose a website development agency in Lucknow?
                </h4>
                <p>
                  Check live portfolio work, client feedback, process clarity
                  and support terms. Choose a team that understands your goals,
                  not only the lowest quote.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does website development take?
                </h4>
                <p>
                  A simple business website usually takes a few weeks.
                  E-commerce sites and custom applications take longer,
                  depending on features and how quickly content is ready.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Do you build e-commerce websites?
                </h4>
                <p>
                  Yes. We build online stores with catalogues, carts, payment
                  gateways and order management, designed to make buying simple.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Will my website work on mobile phones?
                </h4>
                <p>
                  Yes. We design and test mobile-first, so your site works well
                  on phones, tablets and desktops.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will I own my website?
                </h4>
                <p>
                  Yes. You should own your domain, content and website files. We
                  confirm ownership terms clearly in the agreement.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Is the website SEO-friendly?
                </h4>
                <p>
                  Yes. We set up clean structure, meta tags, speed optimisation
                  and sitemaps. Rankings depend on competition and ongoing
                  effort, so we cannot guarantee positions.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can you work with Lucknow businesses remotely?
                </h4>
                <p>
                  Yes. We work through calls, shared files and regular updates,
                  so you get the same quality without an office visit.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We offer maintenance, updates and fixes, and can add SEO
                  or digital marketing whenever you need them.
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
              currentSlug="/lucknow/website-development-agency"
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