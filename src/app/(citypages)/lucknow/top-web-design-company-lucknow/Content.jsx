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
      name: "How do I choose the best web design company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check live portfolio work, client feedback, process clarity and post-launch support. Choose the team that understands your goals, not just the lowest price.",
      },
    },
    {
      "@type": "Question",
      name: "How long does website design take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple business website usually takes a few weeks. Larger or e-commerce sites take longer, depending on pages, features and how quickly content is ready.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website work on mobile phones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design mobile-first and test on several devices and screen sizes before launch, so your site looks and works well everywhere.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design e-commerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build online stores with product catalogues, carts, payment gateways and order management, designed to make buying simple.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We improve the look, speed, structure and mobile experience, while keeping the content and SEO value that already works.",
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
        text: "Yes. We work through calls, shared files and regular updates, so you get the same quality without needing an office visit.",
      },
    },
    {
      "@type": "Question",
      name: "How much does website design cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on pages, features, content and integrations. Share your requirements and we will send a clear, scope-based quote.",
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
              Top Web Design Company in Lucknow
            </h2>

            <p>
              Zentrix Infotech is a top web design company in Lucknow&apos;s
              online market, serving businesses that want a website that looks
              professional and brings in customers. We design fast,
              mobile-friendly, SEO-ready websites for companies, clinics,
              schools, studios, stores and startups. Our clients rate us 4.7
              out of 5 across 250+ projects for 270+ clients.
            </p>

            <p>
              <strong>Quick answer:</strong> A good web design company in
              Lucknow should deliver a mobile-first design, fast loading pages,
              SEO basics, clear enquiry buttons and support after launch. That
              is exactly how we build.
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
              Why Website Design Matters for Lucknow Businesses
            </h3>

            <p>
              Customers in Gomti Nagar, Hazratganj, Aliganj, Indira Nagar and
              across Lucknow search on their phones, compare two or three
              options and contact the one that feels most trustworthy. Your
              website is often that first impression.
            </p>

            <p>Strong web design gives you:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Trust:</strong> A modern, consistent look shows you are
                a serious business.
              </li>
              <li>
                <strong>Clarity:</strong> Visitors understand what you do
                within seconds.
              </li>
              <li>
                <strong>Enquiries:</strong> Clear buttons and short forms turn
                visitors into calls and messages.
              </li>
            </ul>

            <p>
              A site that looks good but does not generate enquiries is only
              decoration. We design for both.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Makes a Top Web Design Company in Lucknow?
            </h3>

            <p>
              Anyone can claim to be the best, so we describe what a top
              company should deliver and invite you to check us against it.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      What to expect
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      What we deliver
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Design based on your goals
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Discovery first, no recycled templates
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Mobile-first layouts
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Designed and tested on real devices
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Speed and clean code
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Optimised images and lean builds
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      SEO foundation
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Titles, headings, schema and sitemaps
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Proof of work
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Live portfolio and client feedback
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Support after launch
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Updates, fixes and optional marketing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Ask every agency, including us, for live examples and references.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Web Design Services in Lucknow
            </h3>

            <p>
              One team handles design, development and marketing, so nothing is
              lost between vendors.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Business website design:</strong> Company, clinic,
                school, studio and service websites.
              </li>
              <li>
                <strong>E-commerce website design:</strong> Catalogues, carts,
                payment gateways and order management.
              </li>
              <li>
                <strong>UI/UX design:</strong> Wireframes, prototypes and
                interfaces built around user behaviour.
              </li>
              <li>
                <strong>Website redesign:</strong> A fresh look, faster speed
                and better mobile experience.
              </li>
              <li>
                <strong>Landing page design:</strong> Focused pages for ads,
                launches and campaigns.
              </li>
              <li>
                <strong>Custom web applications:</strong> Portals, booking
                systems and dashboards.
              </li>
              <li>
                <strong>Mobile app development:</strong> Native and
                cross-platform Android and iOS apps.
              </li>
              <li>
                <strong>Digital marketing and cloud:</strong> SEO, social
                media, ads, hosting and deployment.
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
                href="/services/ui-ux-designing"
                className="text-blue-600 hover:underline"
              >
                See UI/UX design service
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Design for Lucknow Customers
            </h3>

            <p>Good local design starts with understanding the visitor.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Mobile first.</strong> Most visitors arrive on a phone,
                so we design the mobile layout first and scale up.
              </li>
              <li>
                <strong>Bilingual readiness.</strong> Many customers search in
                Hindi, English or a mix. We structure sites so Hindi content
                can be added cleanly when it suits your audience.
              </li>
              <li>
                <strong>WhatsApp and call buttons.</strong> Many customers
                prefer a quick chat or call to a long form. We place these
                buttons where they are easy to reach.
              </li>
              <li>
                <strong>Local trust signals.</strong> Your address, map,
                reviews, work photos and real client names make a local
                business feel real.
              </li>
              <li>
                <strong>Simple navigation.</strong> Visitors should reach your
                services, portfolio or contact page in two taps.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Page-by-Page Design Blueprint
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Home page:</strong> A clear headline, one line on who
                you serve, a primary button, proof of work and key services.
              </li>
              <li>
                <strong>Service pages:</strong> Benefits first, a short
                process, examples, FAQs and an enquiry button.
              </li>
              <li>
                <strong>Portfolio or gallery:</strong> Large, fast images with
                a note on the goal and result.
              </li>
              <li>
                <strong>About page:</strong> Your story, team and values.
              </li>
              <li>
                <strong>Contact page:</strong> Phone, WhatsApp, email, map and
                a short form.
              </li>
              <li>
                <strong>Blog:</strong> Helpful articles that answer customer
                questions and bring search traffic over time.
              </li>
            </ul>

            <p>
              Every page has one clear next step, so visitors never wonder what
              to do.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Design Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery:</strong> We learn your business, customers,
                competitors and goals.
              </li>
              <li>
                <strong>Planning:</strong> We map the sitemap and page
                structure.
              </li>
              <li>
                <strong>Wireframes:</strong> You approve the layout before
                visual design begins.
              </li>
              <li>
                <strong>Visual design:</strong> We create colours, typography
                and components that match your brand.
              </li>
              <li>
                <strong>Development:</strong> We build with modern, clean code
                and test on real devices.
              </li>
              <li>
                <strong>SEO and content setup:</strong> We add titles,
                descriptions, headings, image names and tracking.
              </li>
              <li>
                <strong>Testing and launch:</strong> We check speed, forms,
                links, browsers and screen sizes.
              </li>
              <li>
                <strong>Support and growth:</strong> We help with updates,
                fixes and optional marketing.
              </li>
            </ol>

            <p>
              You receive updates at every stage and can give feedback before
              we move on.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work and Client Feedback
            </h3>

            <p>Our portfolio shows the range of websites we design:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Vasterior:</strong> A luxury interior and Vastu design
                studio website.
              </li>
              <li>
                <strong>PS Decor:</strong> A wedding and event design platform.
                The client says the site showcases their projects well and has
                helped bring more client enquiries.
              </li>
              <li>
                <strong>Alluring Glimpses:</strong> An interior and visual
                storytelling site. The client says the design reflects their
                style and is easy for visitors to navigate.
              </li>
              <li>
                <strong>KDEDU:</strong> An education platform for a group of
                institutions.
              </li>
              <li>
                <strong>HerbsFox:</strong> An e-commerce store for herbs and
                spices.
              </li>
              <li>
                <strong>The Buyzaar Mart:</strong> A retail franchise and
                online shopping platform.
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
              Speed, SEO and Security Built In
            </h3>

            <p>
              A good-looking site that is slow or invisible on Google fails.
              Every site we design includes:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Speed:</strong> Optimised images, lean code and
                sensible hosting setup.
              </li>
              <li>
                <strong>SEO basics:</strong> Clean URLs, proper headings, meta
                tags, schema where suitable and a sitemap.
              </li>
              <li>
                <strong>Security:</strong> HTTPS and secure forms.
              </li>
              <li>
                <strong>Analytics:</strong> Tracking so you can see where
                enquiries come from.
              </li>
            </ul>

            <p>
              No one can honestly promise a specific Google ranking. We build a
              strong, search-friendly foundation and can support it with
              ongoing SEO.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Signs You Need a Website Redesign
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Your site looks dated next to competitors.</li>
              <li>It is slow or breaks on mobile.</li>
              <li>Visitors leave without calling or enquiring.</li>
              <li>You cannot update it easily.</li>
              <li>Your business has changed but your site has not.</li>
            </ul>

            <p>
              A redesign is often the quickest way to get more enquiries
              without raising ad spend.
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
              <li>Clear quotes based on scope, with no hidden surprises.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Your Website Designed by a Trusted Lucknow-Focused Team
            </h3>

            <p>
              Tell us about your business and goals. We will suggest the right
              structure, timeline and approach for your website.
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
                  1. How do I choose the best web design company in Lucknow?
                </h4>
                <p>
                  Check live portfolio work, client feedback, process clarity
                  and post-launch support. Choose the team that understands
                  your goals, not just the lowest price.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How long does website design take?
                </h4>
                <p>
                  A simple business website usually takes a few weeks. Larger
                  or e-commerce sites take longer, depending on pages, features
                  and how quickly content is ready.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Will my website work on mobile phones?
                </h4>
                <p>
                  Yes. We design mobile-first and test on several devices and
                  screen sizes before launch, so your site looks and works well
                  everywhere.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Do you design e-commerce websites?
                </h4>
                <p>
                  Yes. We build online stores with product catalogues, carts,
                  payment gateways and order management, designed to make
                  buying simple.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can you redesign my existing website?
                </h4>
                <p>
                  Yes. We improve the look, speed, structure and mobile
                  experience, while keeping the content and SEO value that
                  already works.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Is the website SEO-friendly?
                </h4>
                <p>
                  Yes. We set up clean structure, meta tags, speed optimisation
                  and sitemaps. Rankings depend on competition and ongoing
                  effort, so we cannot guarantee positions.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can you work with Lucknow businesses remotely?
                </h4>
                <p>
                  Yes. We work through calls, shared files and regular updates,
                  so you get the same quality without needing an office visit.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. How much does website design cost?
                </h4>
                <p>
                  Cost depends on pages, features, content and integrations.
                  Share your requirements and we will send a clear, scope-based
                  quote.
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