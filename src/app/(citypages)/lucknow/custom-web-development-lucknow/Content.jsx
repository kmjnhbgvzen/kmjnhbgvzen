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
      name: "What is custom web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is building a website from scratch around your specific business needs, instead of using a pre-made template.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech serve clients in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with Lucknow businesses through calls, video meetings and online collaboration, and we deliver projects remotely.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom website take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A business website usually takes a few weeks. Larger web applications and ecommerce stores take longer depending on features.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom web development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on pages, features and integrations. Contact us with your requirements for a clear, no-obligation quote.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website work well on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every site we build is fully responsive across mobile, tablet and desktop.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website be SEO friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build in fast loading, clean code, proper metadata and mobile-first design to support strong search rankings.",
      },
    },
    {
      "@type": "Question",
      name: "Which technologies do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use React.js, Next.js, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Firebase and Tailwind CSS.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We modernise design, improve speed and structure, and protect your existing search visibility.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide maintenance, updates and ongoing improvements after your site goes live.",
      },
    },
    {
      "@type": "Question",
      name: "Can you also help with digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer SEO, social media and paid campaigns to bring traffic to your new website.",
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
              Custom Web Development in Lucknow: Websites Built Around Your Business
            </h2>

            <p>
              Lucknow is changing fast. The city of nawabs is now a growing centre for healthcare, education, real estate, hospitality, retail and startups, and every one of these businesses is competing for attention online. A template website will not carry that competition for long. You need a site designed around your customers, your offer and your growth plans.
            </p>

            <p>
              That is exactly what Zentrix Infotech delivers. We provide custom web development in Lucknow and across Uttar Pradesh: fast, secure, responsive websites and web applications, written in clean code and ready to rank on Google. With 250+ projects delivered for 270+ clients and a 4.7/5 client rating, we know how to turn an idea into a digital product that earns its keep.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Lucknow Businesses Need a Custom Website
            </h3>

            <p>
              Walk through any market in Hazratganj, Aminabad, Gomti Nagar or Alambagh and you will see the same pattern. Customers search on their phones before they step into a shop, a clinic or a showroom. If your business is hard to find, slow to load or awkward on mobile, that customer simply moves on to the next result.
            </p>

            <p>
              A custom website solves this in ways a ready-made template cannot:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>It matches your brand.</strong> Your layout, colours, content and flow reflect how you actually sell.
              </li>
              <li>
                <strong>It loads quickly.</strong> Lean, purpose-built code avoids the bloat that slows down generic themes.
              </li>
              <li>
                <strong>It scales with you.</strong> New products, booking systems, payment gateways or customer portals can be added without rebuilding from zero.
              </li>
              <li>
                <strong>It is built for search.</strong> Structure, speed and content are planned for SEO from day one.
              </li>
              <li>
                <strong>It is more secure.</strong> Fewer unnecessary plugins means fewer doors for attackers.
              </li>
            </ul>

            <p>
              For a growing business, a website is not an expense. It is a sales team that works every hour of the day.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Is Custom Web Development?
            </h3>

            <p>
              Custom web development means your website is designed and coded specifically for your requirements, instead of being assembled from a pre-made theme. Our developers study your business, map your customer journey and then build every page, feature and integration to support it.
            </p>

            <p>
              The result is a site that behaves the way you need it to. A hospital gets simple appointment booking. A wedding decorator gets a stunning portfolio that generates enquiries. An online store gets smooth ordering, delivery tracking and inventory control. The technology changes with the goal, and the goal always comes first.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Custom Web Development Services in Lucknow
            </h3>

            <h4 className="font-semibold text-gray-900">
              Business and Corporate Websites
            </h4>

            <p>
              Your website is often the first impression of your company. We build professional, fast and trustworthy corporate websites that explain what you do, show your proof and make it easy for visitors to contact you.
            </p>

            <h4 className="font-semibold text-gray-900">
              Ecommerce Website Development
            </h4>

            <p>
              From a single-category store to a multi-category marketplace, we build online shops with product management, secure payments, order tracking and delivery workflows. Our work for The Buyzaar Mart, a retail franchise platform, and HerbsFox, an organic herbs and spices store, shows how we handle complex catalogues and smooth ordering.
            </p>

            <h4 className="font-semibold text-gray-900">
              Web Application Development
            </h4>

            <p>
              Need a customer portal, booking system, dashboard or internal tool? We develop scalable web applications using React, Next.js and Node.js that handle real users, real data and real workloads.
            </p>

            <h4 className="font-semibold text-gray-900">
              Portfolio and Brand Websites
            </h4>

            <p>
              Interior designers, event planners and creative studios need sites that look as good as their work. Projects such as PS Decor and Vasterior show how elegant design and strong structure can bring in more client enquiries.
            </p>

            <h4 className="font-semibold text-gray-900">
              Education and Institutional Websites
            </h4>

            <p>
              Schools, colleges and training institutes need clear information, admissions flow and easy access for students and staff. We built the platform for Kamla Devi Group of Institutions (KDEDU) with exactly this in mind.
            </p>

            <h4 className="font-semibold text-gray-900">
              Healthcare Websites
            </h4>

            <p>
              Clinics and hospitals need trust, clarity and simplicity. We create clean websites with appointment booking and local SEO, as we did for Jigyasa Hospital and Oracle Eye Hospital.
            </p>

            <h4 className="font-semibold text-gray-900">
              Website Redesign and Speed Optimisation
            </h4>

            <p>
              Already have a website that feels outdated or slow? We rebuild it with modern design, better structure and improved performance, without losing the search visibility you have already earned.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Technology Behind Our Websites
            </h3>

            <p>
              We choose tools for performance, security and long-term maintainability. Our core stack includes:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Front end:</strong> React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS and Redux
              </li>
              <li>
                <strong>Back end:</strong> Node.js and Python
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, PostgreSQL and Firebase
              </li>
            </ul>

            <p>
              Next.js and React are especially valuable for Lucknow businesses that want strong search performance. They let us build pages that load fast, respond smoothly and are easy for search engines to read. Our service pages target high Lighthouse scores and A-grade speed results, because speed is both a ranking factor and a conversion factor.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Development Process: Clear, Simple, Transparent
            </h3>

            <p>
              We keep the process easy to follow, so you always know what is happening and what comes next.
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery:</strong> We learn about your business, audience, competitors and goals.
              </li>
              <li>
                <strong>Strategy and planning:</strong> We define pages, features, content structure and the technology that fits.
              </li>
              <li>
                <strong>UI/UX design:</strong> Our designers create clean, intuitive layouts that guide visitors toward action. You review and approve before development begins.
              </li>
              <li>
                <strong>Development:</strong> We code your website with clean, scalable architecture and full responsiveness.
              </li>
              <li>
                <strong>Testing:</strong> We test across devices, browsers and speeds, and we check security and SEO basics.
              </li>
              <li>
                <strong>Launch:</strong> We deploy your site, connect analytics and make sure everything works in the real world.
              </li>
              <li>
                <strong>Support and growth:</strong> After launch we provide maintenance, updates and, if you wish, digital marketing to bring in traffic.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Security, Speed and Long-Term Support
            </h3>

            <p>
              A website is never truly finished. Search algorithms change, customers expect faster pages every year, and new security threats appear constantly. That is why we treat launch day as the beginning of the relationship, not the end. We follow secure coding practices, keep your software up to date and monitor performance after go-live. If your business grows and needs new features, such as online payments, a booking engine, a multilingual version or a mobile app, our team can extend what we have already built instead of starting over. This long-term view saves money, protects your investment and keeps your Lucknow business ahead of competitors who stop improving once their site goes live.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Serve
            </h3>

            <p>
              Our team has built websites across a wide range of sectors, and the same approach works well for Lucknow&apos;s key industries:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Real estate and construction:</strong> project showcases, enquiry forms and lead capture
              </li>
              <li>
                <strong>Healthcare:</strong> appointment booking, doctor profiles and patient information
              </li>
              <li>
                <strong>Education:</strong> admissions, course details and student portals
              </li>
              <li>
                <strong>Hospitality and tourism:</strong> resort websites with booking enquiries, as in our work for Kairvi Fort Resort
              </li>
              <li>
                <strong>Retail and ecommerce:</strong> catalogues, carts and order management
              </li>
              <li>
                <strong>Food and bakery businesses:</strong> online ordering and menus
              </li>
              <li>
                <strong>Manufacturing and export:</strong> product catalogues and request-for-quote forms for B2B buyers
              </li>
              <li>
                <strong>Startups and service companies:</strong> fast launches with room to grow
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech for Web Development in Lucknow?
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Proven track record.</strong> Over 250 projects and 270 clients is not a number we pulled from thin air. Our portfolio spans retail, healthcare, education, interiors, events and hospitality.
              </li>
              <li>
                <strong>Built for business results.</strong> We do not just make websites look good. We design them to generate enquiries, bookings and sales. Clients such as Jigyasa Hospital and Kairvi Fort Resort have shared how their sites and campaigns brought in more patient enquiries and bookings.
              </li>
              <li>
                <strong>Modern, scalable technology.</strong> React, Next.js and Node.js give you a site that stays fast and flexible as your business grows.
              </li>
              <li>
                <strong>SEO-ready from the start.</strong> Clean structure, optimised metadata, fast loading and mobile-first design are built in, not bolted on later.
              </li>
              <li>
                <strong>Transparent communication.</strong> You get clear timelines, regular updates and direct access to the team, by phone, email or WhatsApp.
              </li>
              <li>
                <strong>One partner for everything.</strong> Web development, UI/UX design, mobile apps, software development, cloud solutions and digital marketing all sit under one roof, so your website, your marketing and your growth plans work together.
              </li>
              <li>
                <strong>Affordable and honest pricing.</strong> We offer value-driven packages for startups, small businesses and established companies, with no hidden surprises.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Websites That Rank Locally
            </h3>

            <p>
              A beautiful site that nobody finds is wasted money. For businesses serving customers in Lucknow, we set up the foundations of local SEO: location-focused content, proper title tags and meta descriptions, schema markup, image optimisation, fast mobile performance and Google Business Profile guidance. Combined with our digital marketing services, this helps your business appear when Lucknow customers search for exactly what you offer.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Let&apos;s Build Your Website
            </h3>

            <p>
              Whether you are launching a new business, replacing an outdated site or building a custom web application, Zentrix Infotech is ready to help. Tell us what you want to achieve, and we will suggest the right approach, timeline and budget.
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
              Contact Zentrix Infotech today for a free consultation on custom web development in Lucknow.
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
                  1. What is custom web development?
                </h4>
                <p>
                  It is building a website from scratch around your specific business needs, instead of using a pre-made template.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Does Zentrix Infotech serve clients in Lucknow?
                </h4>
                <p>
                  Yes. We work with Lucknow businesses through calls, video meetings and online collaboration, and we deliver projects remotely.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does a custom website take?
                </h4>
                <p>
                  A business website usually takes a few weeks. Larger web applications and ecommerce stores take longer depending on features.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How much does custom web development cost?
                </h4>
                <p>
                  Cost depends on pages, features and integrations. Contact us with your requirements for a clear, no-obligation quote.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Will my website work well on mobile?
                </h4>
                <p>
                  Yes. Every site we build is fully responsive across mobile, tablet and desktop.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will my website be SEO friendly?
                </h4>
                <p>
                  Yes. We build in fast loading, clean code, proper metadata and mobile-first design to support strong search rankings.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Which technologies do you use?
                </h4>
                <p>
                  We use React.js, Next.js, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Firebase and Tailwind CSS.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can you redesign my existing website?
                </h4>
                <p>
                  Yes. We modernise design, improve speed and structure, and protect your existing search visibility.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you offer support after launch?
                </h4>
                <p>
                  Yes. We provide maintenance, updates and ongoing improvements after your site goes live.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. Can you also help with digital marketing?
                </h4>
                <p>
                  Yes. We offer SEO, social media and paid campaigns to bring traffic to your new website.
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
              currentSlug="/custom-web-development-in-lucknow"
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