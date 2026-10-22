import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Ecommerce Development Services in Moradabad: Everything You Need
              to Launch, Run and Grow Your Online Store
            </h2>

            <p>
              Selling online takes more than a website with a
              &ldquo;Buy Now&rdquo; button. A working ecommerce business needs a
              well-designed storefront, a dependable back end, secure payments,
              shipping connections, search visibility and someone who can keep
              everything running smoothly. When these pieces come from different
              vendors who never talk to each other, problems pile up.
            </p>

            <p>
              Zentrix Infotech offers complete ecommerce development services in
              Moradabad, covering the full journey from the first idea to a
              growing, profitable store. Whether you are launching your first
              online shop or upgrading an existing one, our team handles the
              planning, design, development, integration and support under one
              roof.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Ecommerce Development Services at a Glance
            </h3>

            <p>
              Here is what we offer, so you can see exactly where we can help.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              1. Ecommerce consulting and planning
            </h4>
            <p>
              Good stores start with good decisions. We help you choose a
              business model, select the right platform, plan your catalogue
              structure and decide which features matter now and which can wait.
              This stage prevents costly mistakes later and keeps your budget
              focused.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              2. Ecommerce UI/UX design
            </h4>
            <p>
              We design storefronts that are clear, attractive and built to
              convert. That includes homepage layouts, navigation, product
              pages, cart and checkout flows, all designed mobile-first. Every
              design choice aims to make it easier for shoppers to find products
              and complete their purchase.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              3. Custom ecommerce website development
            </h4>
            <p>
              For businesses with unique requirements, we build custom stores
              using React, Next.js, Node.js or Laravel. Custom development gives
              you full control over features, performance and design, with no
              template limits.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              4. Shopify development
            </h4>
            <p>
              Shopify is a strong choice for businesses that want a fast launch
              and minimal technical upkeep. We handle store setup, theme
              customization, app configuration, product import and payment and
              shipping settings.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              5. WooCommerce development
            </h4>
            <p>
              For stores that want flexibility and strong content features,
              WooCommerce on WordPress is a popular option. We build and
              customize WooCommerce stores, including plugins, custom checkout
              fields and performance tuning.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              6. B2B and wholesale ecommerce
            </h4>
            <p>
              Wholesale selling needs features that standard retail stores lack.
              We build portals with bulk pricing, tiered discounts, minimum
              order quantities, quotation requests, dealer logins and
              credit-based ordering. This suits Moradabad&rsquo;s many exporters,
              manufacturers and distributors.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              7. Multi-vendor marketplace development
            </h4>
            <p>
              If you want to host many sellers on one platform, we build
              marketplaces with vendor registration, product approval,
              commission settings, separate dashboards and split payouts.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              8. Payment gateway integration
            </h4>
            <p>
              We connect trusted gateways so customers can pay with UPI, cards,
              net banking, wallets, EMI and cash on delivery. Our integrations
              include server-side verification, webhook handling and refund
              management.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              9. Shipping and logistics integration
            </h4>
            <p>
              We link your store with courier partners for live rates, PIN code
              serviceability, label generation, pickup scheduling and real-time
              tracking, so fulfilment becomes largely automatic.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              10. Third-party and API integration
            </h4>
            <p>
              Online stores work best when they connect with your other tools.
              We integrate ERP, accounting, CRM, inventory, email, WhatsApp and
              analytics systems, so orders and customer data flow without manual
              copying.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              11. Ecommerce migration and replatforming
            </h4>
            <p>
              If your current store is slow, outdated or limiting your growth,
              we can move it to a better platform. We transfer products,
              customers, orders and content carefully, and protect your search
              rankings by planning redirects and URL structure.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              12. Mobile app development
            </h4>
            <p>
              Many brands extend their stores with Android and iOS apps for
              faster repeat purchases, push notifications and loyalty features.
              We can build apps that connect with your existing store, and we
              can add progressive web app features for an app-like experience in
              the browser.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              13. Ecommerce SEO and digital marketing
            </h4>
            <p>
              A store needs traffic to succeed. We build SEO basics into every
              project, then support growth through search optimization, social
              media promotion and paid advertising.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              14. Performance, security and hosting
            </h4>
            <p>
              We optimize speed, set up secure cloud hosting, enable SSL and
              configure backups. These steps protect both your customers and
              your search performance.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              15. Maintenance and support
            </h4>
            <p>
              After launch, we provide updates, bug fixes, security patches,
              backups and new feature development, so your store stays healthy
              as it grows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Ecommerce Development Matters for Moradabad
            </h3>

            <p>
              Moradabad is a city of makers and traders. Brass handicrafts,
              metalware, home décor, fashion accessories and many other products
              reach buyers around the world. Yet a large share of local
              businesses still depend on traditional selling channels.
            </p>

            <p>Ecommerce development changes what is possible:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>A wider market.</strong> Customers from other cities and
                countries can find and buy from you.
              </li>
              <li>
                <strong>Direct customer relationships.</strong> You collect
                customer details, reviews and repeat orders.
              </li>
              <li>
                <strong>Better margins.</strong> Selling directly reduces
                dependence on middlemen.
              </li>
              <li>
                <strong>Credibility with international buyers.</strong>{" "}
                Importers often judge a supplier by the quality of their website
                before making contact.
              </li>
              <li>
                <strong>Round-the-clock sales.</strong> Your store works even
                when your showroom is closed.
              </li>
            </ul>

            <p>
              The right services help you capture these benefits without wasting
              money on features you do not need.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Platforms and Technologies
            </h3>

            <p>
              We choose technology to fit your business, not the other way
              around.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Fast launch with low maintenance:</strong> Shopify
              </li>
              <li>
                <strong>Content-rich store with flexibility:</strong>{" "}
                WooCommerce
              </li>
              <li>
                <strong>Unique features and deep integrations:</strong> Custom
                build with React, Next.js, Node.js or Laravel
              </li>
              <li>
                <strong>Multi-channel selling and fast front end:</strong>{" "}
                Headless commerce
              </li>
              <li>
                <strong>Many sellers on one platform:</strong> Multi-vendor
                marketplace
              </li>
            </ul>

            <p>
              If a simpler, lower-cost solution serves you well, we will say so
              openly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Work: A Clear Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery.</strong> We discuss your products, customers,
                competitors, budget and goals, in person at our Moradabad office
                or online.
              </li>
              <li>
                <strong>Proposal.</strong> You receive a clear scope, timeline
                and quotation.
              </li>
              <li>
                <strong>Design.</strong> We create wireframes and visual designs
                for your approval.
              </li>
              <li>
                <strong>Development and integration.</strong> We build the store
                and connect payments, shipping and other tools.
              </li>
              <li>
                <strong>Content and catalogue setup.</strong> We help upload
                products and optimize titles, descriptions and images.
              </li>
              <li>
                <strong>Testing.</strong> We check functionality, speed,
                security and mobile performance across devices.
              </li>
              <li>
                <strong>Launch and training.</strong> We take your store live
                and train your team to manage it confidently.
              </li>
              <li>
                <strong>Support and growth.</strong> We stay available for
                maintenance, improvements and marketing.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Serve
            </h3>

            <p>
              Our ecommerce services suit a wide range of businesses,
              including:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Handicraft, brass and metalware exporters</li>
              <li>Home décor and furniture sellers</li>
              <li>Fashion, garments and accessories brands</li>
              <li>Food, spices and wellness product sellers</li>
              <li>Retail and franchise businesses</li>
              <li>Education and training providers</li>
              <li>Pharmacies and health product sellers</li>
              <li>Wholesalers, distributors and manufacturers</li>
            </ul>

            <p>
              Our portfolio includes The Buyzaar Mart, a retail franchise
              platform, HerbsFox, an organic herbs and spices marketplace, and
              Southern Palate, a spice ecommerce website. Each project taught us
              how different businesses need different solutions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects the Cost of Ecommerce Development?
            </h3>

            <p>
              Every project is different, so there is no single price. The main
              factors are:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>The platform and development approach</li>
              <li>The number of products, categories and variants</li>
              <li>Design complexity and customization</li>
              <li>The number of integrations</li>
              <li>
                Special features such as B2B pricing, multilingual content or
                multi-vendor tools
              </li>
              <li>Mobile app requirements</li>
              <li>Ongoing maintenance and marketing</li>
            </ul>

            <p>
              We give transparent quotations based on your needs. Starting with
              a focused first version, then adding features as sales grow, is
              often the smartest approach.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech?
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local presence.</strong> Our office at Buddhi Vihar,
                Phase 2, Moradabad makes collaboration simple.
              </li>
              <li>
                <strong>Experience you can check.</strong> We have delivered
                250+ projects for 270+ clients and hold a 4.7 out of 5 client
                rating.
              </li>
              <li>
                <strong>Complete service range.</strong> Design, development,
                mobile apps, cloud solutions and digital marketing in one team.
              </li>
              <li>
                <strong>Honest guidance.</strong> We recommend what fits your
                business and explain the trade-offs clearly.
              </li>
              <li>
                <strong>Transparent pricing.</strong> Clear quotes with no
                hidden surprises.
              </li>
              <li>
                <strong>Long-term partnership.</strong> We support your store
                well beyond launch day.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Let Us Build Your Ecommerce Success
            </h3>

            <p>
              If you are ready to start selling online, or to improve a store
              that is not performing as it should, our team can help at every
              stage. Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>
              , email{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>{" "}
              or visit our Moradabad office for a free consultation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What ecommerce development services do you offer?
                </h4>
                <p>
                  We offer planning, design, development, integrations,
                  migration, apps, SEO and ongoing support.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How much do ecommerce development services cost in
                  Moradabad?
                </h4>
                <p>
                  Cost depends on platform, features and scale. Contact us for a
                  free, customized quote.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does it take to build an online store?
                </h4>
                <p>
                  Most stores take 3 to 8 weeks, depending on features and
                  product volume.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Which platform is best for my business?
                </h4>
                <p>
                  Shopify, WooCommerce or custom development, depending on your
                  budget, catalogue and goals.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can you migrate my existing store?
                </h4>
                <p>
                  Yes. We move products, customers and orders while protecting
                  your SEO rankings.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do you build B2B and marketplace stores?
                </h4>
                <p>
                  Yes. We build wholesale portals and multi-vendor marketplaces.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Will you integrate payments and shipping?
                </h4>
                <p>
                  Yes. We connect UPI, cards, COD, wallets and courier services.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We offer maintenance, updates, security and marketing
                  support.
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
                    href="/moradabad/ecommerce-development-services-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Ecommerce Development Services in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/ecommerce-website-development-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Ecommerce Website Development in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ecommerce-website-development-company"
                    className="text-blue-600 hover:underline"
                  >
                    Ecommerce Website Development Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ecommerce-marketplace-development-company"
                    className="text-blue-600 hover:underline"
                  >
                    Ecommerce Marketplace Development Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/online-shopping-website-development-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Online Shopping Website Development in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/website-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Website Development Company in Moradabad
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/moradabad/ecommerce-development-services-in-moradabad"
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