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
              Ecommerce Solutions Company in Moradabad
            </h2>

            <p>
              Selling online today takes much more than a website with a cart
              button. A successful online business needs a well-designed store,
              secure payments, inventory control, shipping, customer support,
              search visibility and a steady flow of buyers. When these parts
              work separately, sales leak away. When they work together, an
              online store becomes a reliable growth engine.
            </p>

            <p>
              Zentrix Infotech is an ecommerce solutions company in Moradabad
              that brings all of these parts together. From our office in
              Buddhi Vihar Phase 2, we help manufacturers, exporters,
              wholesalers and retail brands plan, build, launch and grow their
              online business. Our approach is simple: one trusted team, one
              clear plan and a complete solution that fits your goals and
              budget.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Are Ecommerce Solutions?
            </h3>

            <p>
              Ecommerce solutions are the full set of technology and services
              needed to sell products online. They go well beyond building a
              website. A complete solution usually covers:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Store design and development</li>
              <li>Product catalogue and inventory management</li>
              <li>Secure payment gateway integration</li>
              <li>Shipping, courier and order tracking setup</li>
              <li>ERP, CRM and accounting integration</li>
              <li>Mobile app development</li>
              <li>Search engine optimization and digital marketing</li>
              <li>Hosting, security and ongoing maintenance</li>
            </ul>

            <p>
              Many businesses in Moradabad start with a basic website and later
              discover that orders, stock and shipping are hard to manage by
              hand. A proper ecommerce solution removes this burden and lets
              you grow without confusion.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Moradabad Businesses Need Ecommerce Solutions
            </h3>

            <p>
              Moradabad is famous for brass handicrafts, metalware, home decor
              and export goods. Many local businesses have excellent products
              but limited direct access to buyers. They depend on agents, trade
              fairs and marketplaces that take large commissions. Ecommerce
              solutions change this in several ways.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Direct reach:</strong> sell to customers across India
                and overseas without middlemen.
              </li>
              <li>
                <strong>Better margins:</strong> avoid heavy marketplace fees
                and keep more of every sale.
              </li>
              <li>
                <strong>Customer ownership:</strong> build your own customer
                list and brand instead of renting space on someone
                else&apos;s platform.
              </li>
              <li>
                <strong>Round-the-clock selling:</strong> your store works at
                all hours and across time zones.
              </li>
              <li>
                <strong>Easier export:</strong> handle multiple currencies,
                languages and international shipping rules.
              </li>
              <li>
                <strong>Data for decisions:</strong> see what sells, who buys
                and where growth is coming from.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              About Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech is a full-service IT company offering web
              development, UI/UX design, custom software, mobile apps, cloud
              solutions and digital marketing. We have completed more than 250
              projects for over 270 clients and hold a 4.7 out of 5 client
              rating. Our portfolio includes online retail and marketplace
              platforms such as The Buyzaar Mart, Herbsfox and Southern Palate,
              along with websites for interior studios, hospitals, institutions
              and handicraft businesses.
            </p>

            <p>
              Because we offer development, design, software and marketing
              under one roof, you do not need to manage several vendors. Your
              store, your systems and your promotion all come from one
              accountable team.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Ecommerce Solutions
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Custom Ecommerce Website Development
            </h4>

            <p>
              We build online stores that match your products, brand and
              business model. Every store is fast, secure, mobile-friendly and
              ready for search engines. We work with Shopify, WooCommerce,
              Magento, WordPress and custom builds on React, Next.js, Laravel
              and the MERN stack.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Ecommerce UI and UX Design
            </h4>

            <p>
              Our designers create clean layouts, clear navigation and simple
              checkout flows. Good design builds trust and helps visitors
              become buyers, especially on mobile phones where most Indian
              shoppers browse.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              B2B and Wholesale Ecommerce Solutions
            </h4>

            <p>
              Wholesalers and exporters need more than a standard store. We
              build portals with bulk pricing, quotation requests,
              customer-specific rates, login-based catalogues and repeat order
              options.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Multi-Vendor Marketplace Development
            </h4>

            <p>
              If you want to host many sellers on one platform, we develop
              marketplaces with vendor dashboards, commission control, product
              approval and order management.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Payment Gateway Integration
            </h4>

            <p>
              We connect trusted payment options including UPI, cards, net
              banking, wallets and international gateways, along with cash on
              delivery where suitable. Payments are encrypted and tested
              thoroughly before launch.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Inventory, ERP and CRM Integration
            </h4>

            <p>
              We link your store with inventory, accounting, ERP and CRM tools
              so stock, orders and customer data stay in sync. This removes
              manual entry and prevents overselling.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Shipping and Logistics Integration
            </h4>

            <p>
              We set up shipping zones, rate rules and courier partner
              connections so orders are dispatched quickly and customers can
              track their parcels.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Mobile App Development for Ecommerce
            </h4>

            <p>
              A branded Android and iOS shopping app improves repeat purchases
              and customer loyalty. We build native and cross-platform apps
              connected to your store.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Ecommerce SEO and Digital Marketing
            </h4>

            <p>
              We improve your search rankings and bring qualified buyers
              through SEO, Google Ads, social media marketing and email
              campaigns. Product pages, categories and content are optimized so
              customers find you when they search.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Cloud Hosting and Maintenance
            </h4>

            <p>
              We deploy your store on reliable cloud infrastructure and provide
              updates, backups, security checks and performance tuning after
              launch.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Ecommerce Solution Process
            </h3>

            <p>
              A structured process keeps your project clear and on schedule.
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Business analysis:</strong> we understand your
                products, customers, competitors and goals.
              </li>
              <li>
                <strong>Solution planning:</strong> we choose the right
                platform, features and integrations and agree on scope and
                timeline.
              </li>
              <li>
                <strong>Design:</strong> our team creates wireframes and visual
                designs focused on easy shopping and strong conversion.
              </li>
              <li>
                <strong>Development:</strong> we build the store, connect
                payments, shipping and required systems, and load your
                catalogue.
              </li>
              <li>
                <strong>Testing:</strong> we test every page, device, browser,
                payment flow and security point.
              </li>
              <li>
                <strong>Launch:</strong> we take your store live, set up
                tracking and submit it to search engines.
              </li>
              <li>
                <strong>Growth and support:</strong> we monitor performance,
                fix issues and improve results through marketing and updates.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Serve
            </h3>

            <p>
              Our ecommerce solutions are built for the sectors that drive
              Moradabad and beyond.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Brass handicraft and metalware exporters</li>
              <li>Home decor, furniture and lifestyle brands</li>
              <li>Jewellery, fashion and accessories sellers</li>
              <li>Herbs, spices, food and wellness product brands</li>
              <li>Wholesalers, distributors and trading companies</li>
              <li>Retail franchises and multi-category stores</li>
              <li>Educational and service businesses selling online</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Complete solutions:</strong> design, development,
                integration and marketing from one team.
              </li>
              <li>
                <strong>Local presence:</strong> our Moradabad office makes
                meetings, feedback and support easy.
              </li>
              <li>
                <strong>Real ecommerce experience:</strong> we have built
                stores and marketplaces for retail, wellness, spice and
                handicraft brands.
              </li>
              <li>
                <strong>Scalable technology:</strong> start small and add
                features, products and markets as you grow.
              </li>
              <li>
                <strong>Security first:</strong> secure payments, protected
                data and regular backups.
              </li>
              <li>
                <strong>Clear pricing:</strong> transparent quotes with defined
                deliverables and no hidden charges.
              </li>
              <li>
                <strong>Long-term partnership:</strong> we stay with you after
                launch to keep your store improving.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Choosing the Right Ecommerce Solution
            </h3>

            <p>
              The best solution depends on your size, products and plans. A new
              seller with a small catalogue may do well with Shopify or
              WooCommerce. A growing brand may need a custom store with ERP
              integration. A business planning many sellers needs a marketplace
              platform. During your free consultation, we review your needs
              honestly and recommend the option that gives the best return for
              your budget.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Contact Zentrix Infotech
            </h3>

            <p>
              Ready to build or upgrade your online business? Talk to our team
              for a free consultation and a clear project quote.
            </p>

            <p>
              <strong>Address:</strong> 12/11, Buddhi Vihar Phase 2, Moradabad,
              Uttar Pradesh 244001
              <br />
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
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

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What does an ecommerce solutions company do?
                </h4>
                <p>
                  It provides everything needed to sell online, including store
                  development, design, payments, integrations, shipping and
                  marketing.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How much do ecommerce solutions cost in Moradabad?
                </h4>
                <p>
                  Cost depends on features, platform and integrations. Contact
                  Zentrix Infotech for a free, clear quote.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does it take to build an ecommerce store?
                </h4>
                <p>
                  A standard store takes about three to six weeks. Custom
                  platforms and marketplaces take longer.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Which platforms do you work with?
                </h4>
                <p>
                  We work with Shopify, WooCommerce, Magento, WordPress and
                  custom builds on React, Next.js, Laravel and MERN.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can you build a B2B or wholesale ecommerce portal?
                </h4>
                <p>
                  Yes. We offer bulk pricing, quotation requests,
                  customer-specific rates and login-based catalogues.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can you integrate my store with ERP or inventory software?
                </h4>
                <p>
                  Yes. We connect your store with ERP, CRM, accounting and
                  inventory tools to keep data in sync.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We offer maintenance, updates, security checks and
                  performance improvements.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can you also bring traffic to my online store?
                </h4>
                <p>
                  Yes. We offer SEO, Google Ads and social media marketing to
                  bring qualified buyers to your store.
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
                    href="/moradabad/shopify-website-development-company"
                    className="text-blue-600 hover:underline"
                  >
                    Shopify Website Development Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/shopify-website-developer-near-me-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Shopify Website Developer Near Me in Moradabad
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
                    href="/moradabad/website-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Website Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/digital-marketing-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/seo-services-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    SEO Services in Moradabad
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/moradabad/shopify-website-development-company"
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