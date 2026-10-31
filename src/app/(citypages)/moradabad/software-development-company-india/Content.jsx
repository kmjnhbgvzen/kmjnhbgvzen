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
              Software Development Company in India: Custom Software Built for
              Business Growth
            </h2>

            <p>
              India has become the first choice for businesses that want
              reliable, scalable and cost-effective software. From startups
              launching a first product to established companies replacing
              outdated systems, organisations across the world now partner with
              Indian development teams for quality engineering at a fair price.
            </p>

            <p>
              Zentrix Infotech is a software development company in India that
              turns business problems into working digital products. We design,
              build and support custom software, web applications, mobile apps
              and cloud solutions that help you work faster, serve customers
              better and grow with confidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why India Is a Leading Destination for Software Development
            </h3>

            <p>
              Several factors explain why India leads global software
              development:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Skilled talent:</strong> Thousands of engineers
                graduate every year with training in modern languages,
                frameworks and cloud platforms.
              </li>
              <li>
                <strong>Cost advantage:</strong> You get high-quality
                engineering at a fraction of what teams in the US, UK or Europe
                charge.
              </li>
              <li>
                <strong>Time-zone flexibility:</strong> Indian teams can
                overlap with Asian, Middle Eastern and European working hours,
                which keeps projects moving.
              </li>
              <li>
                <strong>Mature IT ecosystem:</strong> Decades of experience in
                outsourcing and enterprise delivery mean proven processes and
                dependable project management.
              </li>
              <li>
                <strong>Strong English communication:</strong> Requirements,
                updates and feedback flow smoothly between clients and
                developers.
              </li>
            </ul>

            <p>
              Choosing the right partner matters just as much as choosing the
              right country, and that is where Zentrix Infotech comes in.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              About Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech is an IT solutions company with offices in
              Moradabad and Ghaziabad, Uttar Pradesh. We started with a simple
              vision: bridge the gap between technology and real business
              challenges. Today our team of passionate technologists has
              delivered 250+ projects for 270+ clients and maintains a 4.7/5
              client rating.
            </p>

            <p>
              Our work spans e-commerce, education, healthcare, hospitality,
              interior design, event management and retail. Every project is
              built on trust, transparency and innovation, with a focus on
              measurable impact and long-term value rather than quick delivery
              alone.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Services
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Custom Software Development
            </h4>

            <p>
              We build software around your workflows, not the other way round.
              Custom solutions remove manual work, connect your teams and give
              you features that off-the-shelf tools cannot offer.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Web Application Development
            </h4>

            <p>
              Fast, secure and responsive web applications, portals and
              dashboards built with modern technologies for smooth performance
              on every device.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Mobile App Development
            </h4>

            <p>
              Native and cross-platform apps for Android and iOS that deliver
              seamless experiences and are ready to scale as your user base
              grows.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Enterprise Software, ERP and CRM
            </h4>

            <p>
              Centralised systems that manage operations, inventory, sales,
              customers and reporting in one place, giving leadership accurate
              data for faster decisions.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              UI/UX Design
            </h4>

            <p>
              Clean, intuitive interfaces designed around user behaviour. Good
              design reduces learning time, improves engagement and lifts
              conversions.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Cloud Solutions and Migration
            </h4>

            <p>
              Scalable cloud infrastructure, secure deployment and smooth
              migration from legacy servers, improving performance, security
              and business continuity.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Software Integration and API Development
            </h4>

            <p>
              We connect your payment gateways, CRMs, ERPs, logistics tools and
              third-party services so data moves automatically and accurately.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Maintenance and Support
            </h4>

            <p>
              Software needs care after launch. We provide bug fixes, updates,
              security patches and feature upgrades to keep your product
              healthy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technologies We Work With
            </h3>

            <p>
              We choose technology to fit your goals, budget and growth plans.
              Our team works with React, Next.js, Node.js, Laravel, Python,
              Flutter and React Native, along with MySQL, PostgreSQL and
              MongoDB databases and cloud platforms for secure hosting. We
              recommend proven, well-supported stacks so your software stays
              easy to maintain and extend for years.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Serve
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>E-commerce and retail:</strong> Online stores,
                marketplaces and franchise platforms with order and delivery
                management.
              </li>
              <li>
                <strong>Education:</strong> Websites and portals for colleges,
                institutes and online learning.
              </li>
              <li>
                <strong>Healthcare:</strong> Hospital websites, appointment
                booking and patient enquiry systems.
              </li>
              <li>
                <strong>Real estate and interiors:</strong> Showcase platforms
                and lead-generation websites.
              </li>
              <li>
                <strong>Hospitality and events:</strong> Booking-ready websites
                for resorts, restaurants and event planners.
              </li>
              <li>
                <strong>Exporters and manufacturers:</strong> Product
                catalogues, enquiry forms and B2B portals.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery and requirements:</strong> We study your
                business, users and goals, then define a clear scope.
              </li>
              <li>
                <strong>Planning and architecture:</strong> We choose the
                technology, plan the modules and set milestones and timelines.
              </li>
              <li>
                <strong>UI/UX design:</strong> You review wireframes and
                prototypes before any code is written.
              </li>
              <li>
                <strong>Agile development:</strong> We build in short sprints,
                so you see working progress regularly and can adjust early.
              </li>
              <li>
                <strong>Testing and quality assurance:</strong> Functional,
                performance and security testing catch problems before users
                do.
              </li>
              <li>
                <strong>Deployment and support:</strong> We launch smoothly,
                train your team and stay available for improvements.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech as Your Software Development Partner
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Proven track record:</strong> 250+ projects and 270+
                clients across many industries.
              </li>
              <li>
                <strong>Business-first thinking:</strong> We ask why before we
                decide how, so every feature serves a goal.
              </li>
              <li>
                <strong>Transparent communication:</strong> Clear timelines,
                regular updates and honest advice throughout.
              </li>
              <li>
                <strong>Full-service capability:</strong> Development, design,
                cloud and digital marketing under one roof.
              </li>
              <li>
                <strong>Scalable solutions:</strong> Software architected to
                grow with your users, data and revenue.
              </li>
              <li>
                <strong>Affordable pricing:</strong> Competitive rates without
                compromising on quality or security.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose the Right Software Development Company in India
            </h3>

            <p>Before you sign with any vendor, check the following:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Portfolio and case studies:</strong> Look for live
                projects similar to yours and, where possible, speak to past
                clients.
              </li>
              <li>
                <strong>Technical depth:</strong> Ask about the team, the
                technologies and how they handle code quality and security.
              </li>
              <li>
                <strong>Process clarity:</strong> A good company can explain
                how it plans, tracks and reports progress.
              </li>
              <li>
                <strong>Communication:</strong> Confirm who your point of
                contact is and how often you will get updates.
              </li>
              <li>
                <strong>Post-launch support:</strong> Make sure maintenance and
                bug fixing are covered in writing.
              </li>
              <li>
                <strong>Ownership:</strong> You should own the source code and
                all project assets on completion.
              </li>
            </ul>

            <p>
              A company that answers these points openly is usually a safe
              partner.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Engagement Models and What Affects Cost
            </h3>

            <p>We offer flexible ways to work together:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Fixed price:</strong> Best for well-defined projects
                with a clear scope and deadline.
              </li>
              <li>
                <strong>Time and material:</strong> Ideal when requirements may
                change as the product evolves.
              </li>
              <li>
                <strong>Dedicated team:</strong> Suited to long-term products
                that need continuous development.
              </li>
            </ul>

            <p>
              The final cost depends on the number of features, platforms (web,
              Android, iOS), design complexity, third-party integrations,
              security needs and timeline. Share your idea and we will prepare
              a detailed estimate with no hidden charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Software Project with Zentrix Infotech
            </h3>

            <p>
              If you are looking for a software development company in India
              that combines technical skill with business understanding,
              Zentrix Infotech is ready to help. Tell us about your idea and we
              will suggest the right approach, timeline and budget.
            </p>

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
              </a>{" "}
              |{" "}
              <a
                href="tel:+916397036898"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
              <br />
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              <br />
              <span role="img" aria-label="location">
                📍
              </span>{" "}
              <strong>Visit:</strong> 12/11, Buddhi Vihar Phase 2, Moradabad,
              Uttar Pradesh 244001
              <br />
              <span role="img" aria-label="location">
                📍
              </span>{" "}
              <strong>Visit:</strong> A-20 Sunshine Apartment, Ghaziabad, UP
              201013
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What does a software development company in India do?
                </h4>
                <p>
                  It plans, designs, builds, tests and maintains software such
                  as web apps, mobile apps and business systems.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Why should I hire an Indian software development company?
                </h4>
                <p>
                  You get skilled engineers, flexible time zones and lower
                  costs without sacrificing quality.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much does custom software development cost in India?
                </h4>
                <p>
                  Cost depends on features, platforms and complexity. Zentrix
                  Infotech gives a free, detailed quote after understanding
                  your needs.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does it take to develop custom software?
                </h4>
                <p>
                  Simple projects take 4 to 8 weeks. Larger systems with many
                  modules can take several months.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Does Zentrix Infotech build mobile apps as well?
                </h4>
                <p>
                  Yes. We develop native and cross-platform Android and iOS
                  apps.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will I own the source code?
                </h4>
                <p>
                  Yes. You receive full ownership of the code and project
                  assets on completion.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We offer maintenance, updates, security patches and
                  feature upgrades.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can startups and small businesses work with Zentrix
                  Infotech?
                </h4>
                <p>
                  Absolutely. We offer flexible engagement models and scalable
                  solutions for startups and SMEs.
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
                    href="/moradabad/software-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Company in Moradabad
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
                    href="/moradabad/app-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    App Development Company in Moradabad
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
                    href="/moradabad/digital-marketing-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Company in Moradabad
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/moradabad/software-development-company-in-moradabad"
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