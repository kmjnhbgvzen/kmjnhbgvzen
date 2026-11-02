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
              IT Software Development Services
            </h2>


            <p>
              Software is not built in a single step. It begins with an idea,
              moves through planning and design, gets built and tested, goes
              live, and then needs care for years afterwards. A company that can
              support you at every stage saves you the trouble of coordinating
              several vendors and the risk of things falling between them.
            </p>


            <p>
              Zentrix Infotech provides complete IT software development
              services, from the first conversation to long-term support. With
              250+ projects delivered, 270+ clients served and a 4.7/5 rating,
              we help businesses in India and overseas turn ideas into reliable,
              working software. This page walks through our services stage by
              stage, so you can see exactly where we can help.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our IT Software Development Services at a Glance
            </h3>


            <p>We organise our services around the software lifecycle:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>Consulting and planning</li>
              <li>UI/UX design</li>
              <li>Development</li>
              <li>Testing and quality assurance</li>
              <li>Deployment and cloud</li>
              <li>Integration</li>
              <li>Modernisation and migration</li>
              <li>Maintenance and support</li>
            </ul>


            <p>You can use us for one stage or for the entire journey.</p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 1: Consulting and Planning
            </h3>


            <p>
              Good software starts with a clear plan. Many projects fail not
              because of poor coding but because nobody defined the problem
              properly.
            </p>


            <p>
              <strong>What we do:</strong> We study your business, users,
              processes and goals. We define requirements, compare solution
              options, recommend technology and prepare a roadmap with
              priorities, timeline and budget.
            </p>


            <p>
              <strong>What you get:</strong> A written scope, a feature list
              ranked by importance, a technology recommendation and an estimate
              you can plan around.
            </p>


            <p>
              <strong>Best for:</strong> New products, businesses unsure whether
              to build or buy, and anyone who wants to avoid expensive mistakes.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 2: UI/UX Design
            </h3>


            <p>Software that is hard to use does not get used.</p>


            <p>
              <strong>What we do:</strong> We create user flows, wireframes,
              clickable prototypes and polished screen designs, based on how
              your customers and staff actually work.
            </p>


            <p>
              <strong>What you get:</strong> Approved designs ready for
              development, so you see the product before a line of code is
              written.
            </p>


            <p>
              <strong>Best for:</strong> Customer-facing apps and websites, and
              internal tools that staff must adopt quickly.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 3: Software Development
            </h3>


            <p>This is where designs become a working product.</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Custom software:</strong> Applications built around your
                own processes.
              </li>
              <li>
                <strong>Business applications:</strong> Inventory, billing,
                order management, HR, attendance, booking and reporting systems.
              </li>
              <li>
                <strong>ERP and CRM systems:</strong> Connected platforms for
                sales, stock, accounts and customer relationships.
              </li>
              <li>
                <strong>Web applications:</strong> Portals, dashboards, booking
                engines and B2B platforms.
              </li>
              <li>
                <strong>Mobile apps:</strong> Android, iOS and cross-platform
                apps.
              </li>
              <li>
                <strong>E-commerce platforms:</strong> Online stores,
                marketplaces, catalogues and payment integration.
              </li>
            </ul>


            <p>
              <strong>What you get:</strong> Clean, documented code, built in
              short cycles with regular demos so you can give feedback early.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 4: Testing and Quality Assurance
            </h3>


            <p>Testing is not an afterthought. It runs through the project.</p>


            <p>
              <strong>What we do:</strong> We check that each feature works as
              specified, that the software is fast under real use, that it is
              secure, and that it works across browsers and devices.
            </p>


            <p>
              <strong>What you get:</strong> Verified releases, with fewer bugs
              reaching your users and clear reports on what was checked.
            </p>


            <p>
              <strong>Best for:</strong> New builds, and existing software that
              crashes, slows down or behaves unpredictably.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 5: Deployment and Cloud Solutions
            </h3>


            <p>A finished application still has to run somewhere reliably.</p>


            <p>
              <strong>What we do:</strong> We set up hosting and environments,
              deploy the software, configure backups and monitoring, and plan
              for growth in users and data.
            </p>


            <p>
              <strong>What you get:</strong> A secure, scalable setup that keeps
              your software fast and available, along with clear handover
              documentation.
            </p>


            <p>
              <strong>Best for:</strong> Launching new software, or moving from
              old servers to the cloud.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 6: Software Integration and APIs
            </h3>


            <p>
              Most businesses use many tools, and the biggest time losses come
              from re-entering the same data in each.
            </p>


            <p>
              <strong>What we do:</strong> We connect your software with payment
              gateways, accounting packages, courier services, SMS and WhatsApp
              platforms, and other systems through secure APIs.
            </p>


            <p>
              <strong>What you get:</strong> Data that moves automatically
              between systems, with fewer manual errors and faster processes.
            </p>


            <p>
              <strong>Best for:</strong> Businesses that use several
              disconnected tools.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 7: Modernisation and Migration
            </h3>


            <p>
              Older software often becomes a burden. It may run on outdated
              technology, be slow, be difficult to change or lack mobile access.
            </p>


            <p>
              <strong>What we do:</strong> We review your existing system and
              decide whether to improve, rebuild or replace it. We can move it
              to modern technology, move it to the cloud, add new features,
              redesign the interface, and migrate your data safely.
            </p>


            <p>
              <strong>What you get:</strong> Software that is faster, easier to
              use and cheaper to maintain, without losing the knowledge built
              into the old system.
            </p>


            <p>
              <strong>Best for:</strong> Companies running ageing desktop
              software, slow websites or unsupported systems.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 8: Maintenance and Support
            </h3>


            <p>
              Software needs regular care, just like any other business asset.
            </p>


            <p>
              <strong>What we do:</strong> We fix bugs, apply security updates,
              tune performance, add features and provide technical support.
            </p>


            <p>
              <strong>What you get:</strong> Reliable software that keeps pace
              with your business and technology changes, with predictable
              support costs.
            </p>


            <p>
              <strong>Best for:</strong> Every business that depends on its
              software.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technologies We Work With
            </h3>


            <p>We select technology for your needs, not for fashion.</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Web development:</strong> React, Next.js, Node.js,
                Laravel, Python
              </li>
              <li>
                <strong>Mobile development:</strong> Flutter, React Native
              </li>
              <li>
                <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB
              </li>
              <li>
                <strong>Cloud and hosting:</strong> Reliable cloud platforms
                with monitoring and backups
              </li>
              <li>
                <strong>Integrations:</strong> Secure APIs for payment,
                messaging, accounting and delivery systems
              </li>
            </ul>


            <p>
              If you already use a specific stack, we can build on it instead of
              replacing it.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Engagement Models
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Fixed price:</strong> A defined scope, timeline and
                cost, ideal for clear requirements.
              </li>
              <li>
                <strong>Time and material:</strong> You pay for effort used,
                suitable for evolving needs.
              </li>
              <li>
                <strong>Dedicated team:</strong> A team focused on your product
                for a monthly fee.
              </li>
              <li>
                <strong>Support retainer:</strong> Ongoing maintenance and help
                for existing software.
              </li>
            </ul>


            <p>
              We recommend the model that suits your project and always record
              terms in writing.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Serve
            </h3>


            <p>
              Our experience spans e-commerce and retail, education, healthcare,
              hospitality and events, real estate, interior design, export and
              manufacturing, and professional services. This range lets us apply
              ideas that worked in one field to another.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Work: Our Delivery Approach
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Clear scope:</strong> Everything is documented before
                work begins.
              </li>
              <li>
                <strong>Short cycles:</strong> You see working software
                regularly, not just at the end.
              </li>
              <li>
                <strong>One point of contact:</strong> You always know who to
                ask.
              </li>
              <li>
                <strong>Quality built in:</strong> Testing and review happen
                throughout.
              </li>
              <li>
                <strong>Secure by design:</strong> Access controls, secure
                coding practices and safe deployment protect your data.
              </li>
              <li>
                <strong>Knowledge transfer:</strong> We provide documentation
                and training so your team can use the software with confidence.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Experience you can verify:</strong> 250+ projects and
                270+ clients.
              </li>
              <li>
                <strong>Complete team:</strong> Developers, designers, cloud
                engineers and digital marketers under one roof.
              </li>
              <li>
                <strong>Local and global:</strong> Offices in Moradabad and
                Ghaziabad, serving clients across India and overseas.
              </li>
              <li>
                <strong>Transparent pricing:</strong> Written proposals, clear
                milestones and no hidden charges.
              </li>
              <li>
                <strong>Honest advice:</strong> If a simpler solution will do,
                we say so.
              </li>
              <li>
                <strong>Built to scale:</strong> Software that grows with your
                business.
              </li>
              <li>
                <strong>Long-term partnership:</strong> We remain available
                after launch.
              </li>
            </ul>


            <p>
              Clients often describe our websites and platforms as professional,
              easy to use and effective at bringing in inquiries and orders. We
              apply that same practical, results-driven approach to every
              service on this page.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Choosing the Right Services for You
            </h3>


            <p>Not every project needs every stage. As a rough guide:</p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>New idea or product:</strong> Start with consulting and
                planning, then design, development and testing.
              </li>
              <li>
                <strong>Existing software that is struggling:</strong> Begin
                with an assessment, then consider modernisation or testing.
              </li>
              <li>
                <strong>Disconnected tools:</strong> Focus on integration and
                automation.
              </li>
              <li>
                <strong>Software already working well:</strong> Choose a
                maintenance and support plan to keep it that way.
              </li>
            </ul>


            <p>
              If you are unsure, tell us the problem, and we will recommend
              where to begin.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Request a Free Consultation
            </h3>


            <p>
              Share your requirement and we will suggest the right services,
              timeline and budget, with no obligation.
            </p>


            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              or{" "}
              <a
                href="tel:+916397036898"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
              <br />
              <span role="img" aria-label="whatsapp">
                💬
              </span>{" "}
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/916397036898"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
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
              <strong>Moradabad office:</strong> 12/11, Buddhi Vihar Phase 2,
              Moradabad, Uttar Pradesh 244001
              <br />
              <span role="img" aria-label="location">
                📍
              </span>{" "}
              <strong>Ghaziabad office:</strong> A-20 Sunshine Apartment,
              Ghaziabad, Uttar Pradesh 201013
            </p>


            <p>
              Book your free consultation today and start building software that
              works for you.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>


            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What are IT software development services?
                </h4>
                <p>
                  They cover planning, designing, building, testing, deploying
                  and maintaining software for business needs.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Which services does Zentrix Infotech provide?
                </h4>
                <p>
                  We provide consulting, UI/UX design, custom development,
                  testing, cloud deployment, integration, modernisation and
                  support.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Can I hire you for just one stage?
                </h4>
                <p>
                  Yes. You can hire us for a single service, such as design,
                  testing or support, or for the whole project.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Can you improve my existing software?
                </h4>
                <p>
                  Yes. We can fix, upgrade, integrate, migrate or rebuild
                  existing software, depending on what suits your needs.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How long does a project take?
                </h4>
                <p>
                  Small tools take a few weeks, and larger systems a few months.
                  Your proposal includes a clear timeline.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. How do you price your services?
                </h4>
                <p>
                  Pricing depends on scope and features. We provide a written
                  quote after understanding your requirements.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Will I own the source code?
                </h4>
                <p>
                  Ownership terms are agreed in writing before work begins, so
                  you know exactly what you receive.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We provide maintenance, bug fixes, updates and new
                  features after your software goes live.
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
                    href="/moradabad/it-consulting-services-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    IT Consulting Services in Moradabad
                  </Link>
                </li>
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
              currentSlug="/moradabad/it-software-development-services"
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