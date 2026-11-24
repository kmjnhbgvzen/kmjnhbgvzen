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
      name: "What does an ecommerce website development company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It designs, builds, tests and supports your online store, including product pages, cart, checkout, payments, admin panel and SEO setup.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an online store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic store often takes a few weeks. Larger stores with many products, custom features or integrations take longer, depending on content readiness.",
      },
    },
    {
      "@type": "Question",
      name: "What payment options can my store accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can integrate UPI, cards, net banking, wallets and cash on delivery where suitable, using trusted payment gateways.",
      },
    },
    {
      "@type": "Question",
      name: "Will my store work well on mobile phones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design and test mobile-first, so browsing and checkout feel smooth on phones, tablets and desktops.",
      },
    },
    {
      "@type": "Question",
      name: "Can I manage products and orders myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide an easy admin panel to add products, update stock and manage orders, and we guide you on how to use it.",
      },
    },
    {
      "@type": "Question",
      name: "Can you move my existing store to a new website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can redesign or migrate your store while keeping products, customer data and the SEO value that already works.",
      },
    },
    {
      "@type": "Question",
      name: "Is the store SEO-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We set up clean URLs, meta tags, product schema where suitable and a sitemap. Rankings depend on competition and ongoing effort, so we cannot guarantee positions.",
      },
    },
    {
      "@type": "Question",
      name: "What does an ecommerce website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on products, features, design and integrations. Share your requirements and we will send a clear, scope-based quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer maintenance, updates and fixes, and can add SEO, ads and social media marketing whenever you need them.",
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
              Ecommerce Website Development Company in Lucknow
            </h2>

            <p>
              Zentrix Infotech is an e-commerce website development company
              that builds fast, secure, mobile-friendly online stores for
              businesses in Lucknow and across India. We handle design,
              development, payments, SEO setup and ongoing support, so you can
              focus on selling. Our clients rate us 4.7 out of 5 across 250+
              projects for 270+ clients.
            </p>

            <p>
              <strong>Quick answer:</strong> A good e-commerce development
              company should build a mobile-first store with easy browsing,
              safe checkout, trusted payment options, SEO foundations, simple
              order management and support after launch. That is how we work.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Ecommerce Consultation
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
              Why Lucknow Businesses Should Sell Online
            </h3>

            <p>
              Lucknow is known for chikankari, handicrafts, food, retail and a
              growing service economy. Customers in Gomti Nagar, Hazratganj,
              Aliganj, Indira Nagar and beyond already search and shop on their
              phones. An online store lets you:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Reach beyond your locality:</strong> Sell to customers
                across the city, state and country.
              </li>
              <li>
                <strong>Stay open 24/7:</strong> Take orders when your shop is
                closed.
              </li>
              <li>
                <strong>Build your own brand:</strong> Do not depend only on
                marketplaces.
              </li>
              <li>
                <strong>Understand your customers:</strong> See what sells, who
                buys and where they come from.
              </li>
            </ul>

            <p>
              A well-built store turns your local reputation into an online
              business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What a Good Ecommerce Website Needs
            </h3>

            <p>
              A store is not just a website with a cart. These are the
              essentials:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Area
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      What it should do
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Product pages
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Clear photos, descriptions, variants, prices and stock
                      status
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Search and filters
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Help shoppers find products quickly
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Cart and checkout
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Short, simple and safe, with guest checkout
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Payments
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      UPI, cards, net banking, wallets and cash on delivery
                      where suitable
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Orders
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Easy tracking, status updates and invoices
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Admin panel
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Add products, manage stock and orders without technical
                      help
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Speed and mobile
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Fast loading and easy use on a phone
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">SEO</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Search-friendly pages for products and categories
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              If any of these are weak, customers leave before they buy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Ecommerce Development Services
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Custom online stores:</strong> Designed around your
                brand, products and customers.
              </li>
              <li>
                <strong>B2B and wholesale portals:</strong> Bulk ordering,
                dealer logins and quote requests.
              </li>
              <li>
                <strong>Multi-vendor marketplaces:</strong> Platforms where
                several sellers list products.
              </li>
              <li>
                <strong>Payment gateway integration:</strong> Trusted, secure
                payment options.
              </li>
              <li>
                <strong>Shipping and logistics integration:</strong> Delivery
                partners, tracking and rate setup.
              </li>
              <li>
                <strong>Inventory and order management:</strong> Stock control
                and clear order flows.
              </li>
              <li>
                <strong>CRM, WhatsApp and API integrations:</strong> Connect
                your store to the tools you already use.
              </li>
              <li>
                <strong>Store redesign and migration:</strong> Improve or move
                an existing store without losing data.
              </li>
              <li>
                <strong>UI/UX design, mobile apps and cloud:</strong> Complete
                digital support under one roof.
              </li>
              <li>
                <strong>Digital marketing:</strong> SEO, social media and ads
                that bring buyers to your store.
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
              Ecommerce Solutions for Different Lucknow Sellers
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Fashion and handicraft sellers.</strong> Chikankari and
                craft businesses need strong photography, size and variant
                options, and a story that builds trust.
              </li>
              <li>
                <strong>Food and gifting businesses.</strong> Bakeries, sweets
                and gift sellers need simple ordering, delivery slots and
                repeat-order convenience. Our client Morning Bites told us
                their bakery website is inviting and makes online ordering
                easy.
              </li>
              <li>
                <strong>Retail and franchise brands.</strong> Multi-category
                stores need smooth browsing and delivery management, like our
                work for The Buyzaar Mart.
              </li>
              <li>
                <strong>Natural and wellness products.</strong> These stores
                need clarity, trust and clean product information, as in our
                HerbsFox herbs and spices store.
              </li>
              <li>
                <strong>Spices and packaged goods.</strong> Our client Southern
                Palate says their spice e-commerce site is easy for customers
                to browse and order from.
              </li>
              <li>
                <strong>B2B and manufacturers.</strong> Dealers and
                distributors need catalogues, quote forms and repeat ordering.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Ecommerce Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery:</strong> We learn your products, customers,
                delivery model and goals.
              </li>
              <li>
                <strong>Planning:</strong> We map categories, product
                structure, checkout flow and integrations.
              </li>
              <li>
                <strong>Design:</strong> We create wireframes and a store
                design that fits your brand.
              </li>
              <li>
                <strong>Development:</strong> We build the storefront, admin
                panel and integrations with clean code.
              </li>
              <li>
                <strong>Payments and shipping setup:</strong> We connect
                payment and delivery options.
              </li>
              <li>
                <strong>Testing:</strong> We test checkout, payments, orders,
                devices and speed.
              </li>
              <li>
                <strong>SEO and analytics setup:</strong> We add meta tags,
                schema where suitable and tracking.
              </li>
              <li>
                <strong>Launch and support:</strong> We go live and help with
                updates, fixes and growth.
              </li>
            </ol>

            <p>
              You get regular updates and can give feedback at every step.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Mobile and WhatsApp-Friendly Selling
            </h3>

            <p>
              Most Indian shoppers browse on mobile, so we build mobile-first.
              We also add click-to-call and WhatsApp buttons so customers can
              ask a question before buying. This lowers hesitation, especially
              for first-time buyers and higher-value products. With
              India&apos;s next billion internet users shopping in their own
              languages, we also build stores so that regional language content
              can be added when it suits your audience.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Speed, SEO and Security
            </h3>

            <p>
              An online store that is slow, invisible or unsafe will not earn
              sales. Every store we build includes:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Performance:</strong> Optimised images, lean code and
                sensible hosting setup.
              </li>
              <li>
                <strong>SEO foundations:</strong> Clean product and category
                URLs, headings, meta tags, product schema where suitable and a
                sitemap.
              </li>
              <li>
                <strong>Security:</strong> HTTPS, secure checkout and careful
                handling of customer data.
              </li>
              <li>
                <strong>Analytics:</strong> Tracking so you can see traffic,
                conversions and sales sources.
              </li>
            </ul>

            <p>
              No one can honestly promise a Google ranking or fixed sales. We
              build a strong base and support it with ongoing marketing if you
              choose.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Growing Your Store After Launch
            </h3>

            <p>Launching is the start. To grow, you will usually need:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Search optimisation for products and categories.</li>
              <li>Social media and ads to reach new buyers.</li>
              <li>Email and WhatsApp follow-ups for repeat orders.</li>
              <li>Reviews and trust badges that build confidence.</li>
              <li>Regular analysis of what sells and where buyers drop off.</li>
            </ul>

            <p>
              Our digital marketing team can handle this alongside your store,
              so development and marketing work together.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work and Client Feedback
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>HerbsFox:</strong> An organic herbs and spices online
                store.
              </li>
              <li>
                <strong>The Buyzaar Mart:</strong> A retail franchise platform
                with a multi-category online shopping destination, delivery
                management and franchise operations. The client says our
                marketing brought quality franchise enquiries and stronger
                brand visibility across Delhi NCR.
              </li>
              <li>
                <strong>Southern Palate:</strong> A spice e-commerce website.
              </li>
              <li>
                <strong>Morning Bites:</strong> A bakery website with easy
                online ordering.
              </li>
            </ul>

            <p>
              We also build websites for interiors, events, education and
              healthcare, so we understand the needs of different businesses.
            </p>

            <p>
              <Link
                href="/portfolio"
                className="text-blue-600 hover:underline"
              >
                View our full portfolio
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose an Ecommerce Development Company in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Open their live stores on your phone and test the checkout.
              </li>
              <li>Ask which payment and shipping options they integrate.</li>
              <li>Ask who will manage your admin training and support.</li>
              <li>Check what the quote includes and excludes.</li>
              <li>
                Confirm that you will own your store, domain, product data and
                customer data.
              </li>
            </ul>

            <p>We welcome all of these questions.</p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Design, development and marketing in one team.</li>
              <li>A 4.7/5 client rating across 250+ projects.</li>
              <li>
                Experience in e-commerce, retail, interiors, events, education
                and healthcare.
              </li>
              <li>
                Remote-first working through calls, shared files and regular
                updates, with offices in Moradabad and Ghaziabad.
              </li>
              <li>Scope-based quotes with no hidden surprises.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Online Store Today
            </h3>

            <p>
              Tell us what you sell and who you sell to. We will suggest the
              right store structure, timeline and approach, and send a clear
              quote.
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
                  1. What does an ecommerce website development company do?
                </h4>
                <p>
                  It designs, builds, tests and supports your online store,
                  including product pages, cart, checkout, payments, admin
                  panel and SEO setup.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How long does it take to build an online store?
                </h4>
                <p>
                  A basic store often takes a few weeks. Larger stores with many
                  products, custom features or integrations take longer,
                  depending on content readiness.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. What payment options can my store accept?
                </h4>
                <p>
                  We can integrate UPI, cards, net banking, wallets and cash on
                  delivery where suitable, using trusted payment gateways.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Will my store work well on mobile phones?
                </h4>
                <p>
                  Yes. We design and test mobile-first, so browsing and checkout
                  feel smooth on phones, tablets and desktops.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can I manage products and orders myself?
                </h4>
                <p>
                  Yes. We provide an easy admin panel to add products, update
                  stock and manage orders, and we guide you on how to use it.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can you move my existing store to a new website?
                </h4>
                <p>
                  Yes. We can redesign or migrate your store while keeping
                  products, customer data and the SEO value that already works.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Is the store SEO-friendly?
                </h4>
                <p>
                  Yes. We set up clean URLs, meta tags, product schema where
                  suitable and a sitemap. Rankings depend on competition and
                  ongoing effort, so we cannot guarantee positions.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. What does an ecommerce website cost?
                </h4>
                <p>
                  Cost depends on products, features, design and integrations.
                  Share your requirements and we will send a clear, scope-based
                  quote.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We offer maintenance, updates and fixes, and can add SEO,
                  ads and social media marketing whenever you need them.
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
              currentSlug="/lucknow/ecommerce-website-development-company"
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