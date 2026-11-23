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
      name: "Which company should I hire for web development in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose a company with a verifiable portfolio, clear communication and post-launch support. Open their live projects, read client feedback, and ask for a written scope. Zentrix Infotech shares its portfolio and case studies so you can judge our work before contacting us.",
      },
    },
    {
      "@type": "Question",
      name: "What types of websites can you develop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We develop business and corporate websites, ecommerce stores, dynamic websites with admin panels, custom web applications, education and healthcare websites, and real estate and service-business sites. Each is planned around your goals, audience and the actions you want visitors to take.",
      },
    },
    {
      "@type": "Question",
      name: "How much does website development cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on design complexity, number of pages, functionality, integrations and ecommerce features. A simple business site costs far less than a custom portal or store. Share your requirements and we will prepare an itemised quotation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does website development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on scope, content readiness and how quickly feedback is shared. A small business website generally takes less time than an ecommerce store or custom application. We confirm a realistic schedule after requirement analysis, before development begins.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website be mobile-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website we build is responsive, meaning it adapts to phones, tablets and desktops. We test on multiple screen sizes and browsers before launch, because most local visitors browse on mobile devices.",
      },
    },
    {
      "@type": "Question",
      name: "Can my website generate business inquiries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A well-planned website can support enquiries through clear call-to-action buttons, lead forms, WhatsApp integration, fast loading and trust signals. Results depend on your market and marketing, so we do not promise guaranteed leads.",
      },
    },
    {
      "@type": "Question",
      name: "Will the website be SEO-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build with clean structure, proper headings, page titles, meta descriptions, fast loading and mobile responsiveness. This gives your site a sound SEO foundation, though rankings depend on competition and ongoing optimisation.",
      },
    },
    {
      "@type": "Question",
      name: "What support will I get after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer maintenance and support covering updates, bug fixes, backups and improvements. You can contact our team for changes or issues, and we can discuss a support arrangement that suits your website and budget.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside your office location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with clients through phone, video calls and WhatsApp, which lets us support businesses in Lucknow and across Uttar Pradesh. Please confirm your preferred meeting arrangement when you contact us.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We review your current site for speed, mobile experience, structure and conversion gaps, then redesign and rebuild it with better navigation and clearer calls to action, while keeping your useful content and SEO value in mind.",
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
              Web Development Company in Lucknow – Build a Website That Grows
              Your Business
            </h2>

            <p>
              Most business websites in Lucknow look fine and still do very
              little. They load slowly on a phone, bury the contact number, and
              give a visitor no reason to pick up the phone or send a message.
              If your website isn’t bringing you enquiries, it is costing you
              business every day.
            </p>

            <p>
              Lucknow is a city of manufacturers, traders, clinics, schools,
              builders, boutiques and fast-growing startups. Before buying from
              any of them, customers search online first. A professional website
              is how you show up in that search, look credible, and make it easy
              to get in touch.
            </p>

            <p>
              Zentrix Infotech is a web development company that builds business
              websites around one question: what should a visitor do next? We
              design and develop responsive, SEO-friendly websites and web
              applications for businesses across India, and we can work with
              Lucknow businesses through calls, video meetings and WhatsApp.
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
              Why Choose Zentrix Infotech as Your Web Development Company in
              Lucknow?
            </h3>

            <p>
              Choosing a developer is a business decision, so here is what you
              can actually verify.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Real project volume.</strong> Our website lists 250+
                projects delivered for 270+ clients, with a 4.7/5 client rating.
              </li>
              <li>
                <strong>A portfolio you can open and test.</strong> We have built
                e-commerce platforms such as The Buyzaar Mart and HerbsFox, a
                wedding and event platform for PS Decor, an interior design
                website for Vasterior, and an education platform for Kamla Devi
                Group of Institutions (KDEDU). You can visit these sites
                yourself.
              </li>
              <li>
                <strong>Business-first thinking.</strong> We start with your
                customers and your goals, then choose design and features to
                match. Nothing is added just to look impressive.
              </li>
              <li>
                <strong>Design and development under one roof.</strong> UI/UX,
                development, SEO structure and digital marketing support come
                from one team, so your site is ready to be found, not just to be
                launched.
              </li>
              <li>
                <strong>Plain communication.</strong> You get clear scope, clear
                timelines and regular updates.
              </li>
            </ul>

            <p>
              Our clients describe the same things: websites that look modern
              and professional, are easy to navigate, and make it simpler for
              customers to enquire or order. PS Decor told us their site
              showcases their wedding work well and helped bring in more client
              enquiries.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Development Services in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Business Website Development.</strong> A clear, credible
                website that explains what you do, shows proof, and makes contact
                effortless. Ideal for service companies, clinics, consultants
                and local businesses.
              </li>
              <li>
                <strong>Ecommerce Website Development.</strong> Online stores
                with product catalogues, cart and checkout, payment integration
                and order management. Our work on The Buyzaar Mart and HerbsFox
                reflects this kind of build. See our guide on{" "}
                <Link
                  href="https://www.zentrixinfotech.com/blog/ai-ecommerce-india-next-billion-users"
                  className="text-blue-600 hover:underline"
                >
                  multilingual e-commerce with AI
                </Link>
                .
              </li>
              <li>
                <strong>Custom Website Development.</strong> When templates do
                not fit your process, we build to your requirements: custom
                layouts, booking flows, dashboards, calculators or portals.
              </li>
              <li>
                <strong>Corporate Website Development.</strong> Structured,
                professional websites for companies that need to present
                services, leadership, case studies and certifications clearly.
              </li>
              <li>
                <strong>Dynamic Website Development.</strong> Websites with an
                admin panel so your team can update products, blogs, galleries
                and pages without calling a developer every time.
              </li>
              <li>
                <strong>Website Redesign and Development.</strong> If your
                current site is outdated, slow or not mobile-friendly, we rebuild
                it with a cleaner structure, better speed and stronger calls to
                action.
              </li>
              <li>
                <strong>Web Application Development.</strong> Browser-based tools
                for operations, customer portals and internal workflows. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/software-development"
                  className="text-blue-600 hover:underline"
                >
                  software development
                </Link>{" "}
                work for larger systems.
              </li>
              <li>
                <strong>Website Maintenance and Support.</strong> Updates, fixes,
                backups and improvements after launch, so the site keeps working
                as your business grows.
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

            <p>
              A good website looks different for every business. Here is how we
              approach common Lucknow sectors.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Startups and small businesses.</strong> A fast, focused
                website that builds credibility from day one and can grow as you
                add services.
              </li>
              <li>
                <strong>Healthcare and hospitals.</strong> Clear department and
                doctor pages, easy appointment or enquiry options, and accurate
                contact and emergency information, so patients find what they
                need quickly. Jigyasa Hospital’s feedback on their website and
                appointment booking reflects this focus.
              </li>
              <li>
                <strong>Education and institutions.</strong> Easy access to
                courses, admissions, notices and resources for students, parents
                and faculty, as in our KDEDU project.
              </li>
              <li>
                <strong>Real estate businesses.</strong> Project pages, galleries,
                location details and enquiry forms that turn browsing into
                site-visit requests.
              </li>
              <li>
                <strong>Retail and ecommerce companies.</strong> Catalogues,
                search, secure checkout and order tracking that make buying
                simple on mobile.
              </li>
              <li>
                <strong>Manufacturing and service businesses.</strong> Product and
                capability pages, downloadable catalogues and quote request forms
                for buyers who compare suppliers online. Our guide on{" "}
                <Link
                  href="https://www.zentrixinfotech.com/blog/export-website-development-for-exporters"
                  className="text-blue-600 hover:underline"
                >
                  export website development
                </Link>{" "}
                covers this in detail.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Requirement Analysis.</strong> We learn about your
                business, customers, competitors and goals, and define what the
                website must achieve.
              </li>
              <li>
                <strong>Planning and Strategy.</strong> We map the sitemap, page
                structure, features and content plan, and agree on scope and
                timeline before design begins.
              </li>
              <li>
                <strong>UI/UX Design.</strong> We design layouts and user journeys
                for mobile and desktop, focusing on clarity and conversion. Read
                more about our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                approach.
              </li>
              <li>
                <strong>Website Development.</strong> Designs become a working,
                responsive website with the features you approved.
              </li>
              <li>
                <strong>Testing and Quality Assurance.</strong> We check
                functionality, forms, speed, devices and browsers before anything
                goes live.
              </li>
              <li>
                <strong>Deployment and Launch.</strong> We handle hosting setup,
                go-live and final checks.
              </li>
              <li>
                <strong>Maintenance and Support.</strong> After launch we stay
                available for updates, fixes and improvements.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technologies We Use for Website Development
            </h3>

            <p>
              We choose technology for your goals rather than for fashion. Our
              own website is built with modern tools such as React and Next.js,
              which support fast page loading, clean URLs and SEO-friendly
              structure. For your project we will recommend the stack that fits
              your budget, content needs and future plans, and explain the
              reasoning in plain language.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Makes a Business Website Generate More Inquiries?
            </h3>

            <p>
              A website generates enquiries when it removes friction. These are
              the elements we build in:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Clear call-to-action buttons on every key page, such as “Call
                Now” or “Get a Quote”.
              </li>
              <li>
                WhatsApp integration so visitors can message you in one tap,
                which suits how many Indian customers prefer to communicate.
              </li>
              <li>
                Lead generation forms that are short, easy and tested on mobile.
              </li>
              <li>Fast loading speed, because visitors leave slow sites.</li>
              <li>
                Mobile responsiveness, since most local searches happen on
                phones.
              </li>
              <li>
                SEO-friendly structure with proper headings, page titles and
                clean URLs. Our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/blog/voice-search-seo-guide"
                  className="text-blue-600 hover:underline"
                >
                  voice search SEO guide
                </Link>{" "}
                shows what to optimise for.
              </li>
              <li>Trust-building testimonials and real project examples.</li>
              <li>
                Easy navigation so people reach the right page in two clicks.
              </li>
            </ul>

            <p>
              No developer can guarantee leads or rankings, because both depend
              on your market, competition and ongoing marketing. What we can do
              is build a website that gives your marketing the best possible
              foundation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Much Does Website Development Cost in Lucknow?
            </h3>

            <p>
              There is no single price, because websites differ widely. The main
              factors are:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Design complexity.</strong> A custom design takes more
                effort than a standard layout.
              </li>
              <li>
                <strong>Number of pages and functionality.</strong> Booking
                systems, portals and dashboards add development time.
              </li>
              <li>
                <strong>Integrations.</strong> Payment gateways, CRM, WhatsApp,
                maps and third-party APIs.
              </li>
              <li>
                <strong>Ecommerce features.</strong> Product volume, variants,
                shipping rules and order management.
              </li>
              <li>
                <strong>Content and SEO needs.</strong> Copywriting, imagery and
                on-page optimisation.
              </li>
              <li>
                <strong>Maintenance.</strong> Ongoing support, hosting and
                updates.
              </li>
            </ul>

            <p>
              Share your requirements and we will send a clear, itemised
              quotation, so you know what you are paying for before work begins.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Trust Zentrix Infotech
            </h3>

            <p>
              Trust comes from proof. Our clients include The Buyzaar Mart, PS
              Decor, Vasterior, Alluring Glimpses, HerbsFox, Kamla Devi Group of
              Institutions, Kairvi Fort Resort and Jigyasa Hospital. The Kairvi
              Fort Resort team described their website as elegant and functional,
              and noted a boost in bookings during peak seasons after the digital
              campaigns. A restaurant and an interior studio told us the same
              simple thing: the site feels professional and customers find it
              easy to use.
            </p>

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
              before you contact us.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get a Professional Website Developed for Your Business in Lucknow
            </h3>

            <p>
              Your next customer is searching right now. The question is whether
              they will find a website that looks credible, loads quickly and
              makes contacting you easy.
            </p>

            <p>
              Tell us about your business and what you want the website to do. We
              will review your requirements, suggest the right approach and give
              you a transparent quotation, with no obligation.
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
                Get a Free Website Consultation
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
                Let’s Build Your Business Website
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions About Website Development in Lucknow
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Which company should I hire for web development in Lucknow?
                </h4>
                <p>
                  Choose a company with a verifiable portfolio, clear
                  communication and post-launch support. Open their live
                  projects, read client feedback, and ask for a written scope.
                  Zentrix Infotech shares its portfolio and case studies so you
                  can judge our work before contacting us.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. What types of websites can you develop?
                </h4>
                <p>
                  We develop business and corporate websites, ecommerce stores,
                  dynamic websites with admin panels, custom web applications,
                  education and healthcare websites, and real estate and
                  service-business sites. Each is planned around your goals,
                  audience and the actions you want visitors to take.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much does website development cost in Lucknow?
                </h4>
                <p>
                  Cost depends on design complexity, number of pages,
                  functionality, integrations and ecommerce features. A simple
                  business site costs far less than a custom portal or store.
                  Share your requirements and we will prepare an itemised
                  quotation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does website development take?
                </h4>
                <p>
                  Timelines depend on scope, content readiness and how quickly
                  feedback is shared. A small business website generally takes
                  less time than an ecommerce store or custom application. We
                  confirm a realistic schedule after requirement analysis, before
                  development begins.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Will my website be mobile-friendly?
                </h4>
                <p>
                  Yes. Every website we build is responsive, meaning it adapts to
                  phones, tablets and desktops. We test on multiple screen sizes
                  and browsers before launch, because most local visitors browse
                  on mobile devices.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can my website generate business inquiries?
                </h4>
                <p>
                  A well-planned website can support enquiries through clear
                  call-to-action buttons, lead forms, WhatsApp integration, fast
                  loading and trust signals. Results depend on your market and
                  marketing, so we do not promise guaranteed leads.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Will the website be SEO-friendly?
                </h4>
                <p>
                  Yes. We build with clean structure, proper headings, page
                  titles, meta descriptions, fast loading and mobile
                  responsiveness. This gives your site a sound SEO foundation,
                  though rankings depend on competition and ongoing
                  optimisation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. What support will I get after launch?
                </h4>
                <p>
                  We offer maintenance and support covering updates, bug fixes,
                  backups and improvements. You can contact our team for changes
                  or issues, and we can discuss a support arrangement that suits
                  your website and budget.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you work with businesses outside your office location?
                </h4>
                <p>
                  Yes. We work with clients through phone, video calls and
                  WhatsApp, which lets us support businesses in Lucknow and
                  across Uttar Pradesh. Please confirm your preferred meeting
                  arrangement when you contact us.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. Can you redesign my existing website?
                </h4>
                <p>
                  Yes. We review your current site for speed, mobile experience,
                  structure and conversion gaps, then redesign and rebuild it
                  with better navigation and clearer calls to action, while
                  keeping your useful content and SEO value in mind.
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