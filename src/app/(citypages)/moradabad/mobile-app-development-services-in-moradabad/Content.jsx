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
              Mobile App Development Services in Moradabad: Every Stage of Your
              App, Handled Under One Roof
            </h2>

            <p>
              Building a mobile app is not a single task. It is a journey with
              several stages: shaping the idea, designing the experience,
              building the product, launching it and then keeping it healthy as
              your business grows. Many businesses struggle because they hire
              one vendor for design, another for coding and a third for
              promotion, and then spend months coordinating between them.
            </p>

            <p>
              Zentrix Infotech offers mobile app development services in
              Moradabad that cover the whole journey. With 250+ projects
              delivered, 270+ clients and a 4.7/5 rating, we help startups,
              local businesses and established brands go from a rough idea to a
              live, growing app, with one team accountable at every stage.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Complete App Lifecycle: Our Services Stage by Stage
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Stage 1: Strategy and consulting
            </h4>

            <p>
              Great apps begin with clear thinking. In this stage we help you
              decide what to build and what to leave out.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Idea validation:</strong> We discuss whether your idea
                solves a real problem for real users.
              </li>
              <li>
                <strong>Audience and competitor review:</strong> We look at who
                will use the app and what similar apps already offer.
              </li>
              <li>
                <strong>Feature prioritisation:</strong> We separate must-have
                features from nice-to-have ones.
              </li>
              <li>
                <strong>Platform and technology advice:</strong> Android, iOS
                or cross-platform, based on your goals and budget.
              </li>
              <li>
                <strong>Roadmap and estimate:</strong> A clear plan with
                timeline, milestones and cost.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              Stage 2: UI/UX design
            </h4>

            <p>
              Users judge an app within seconds. Our designers focus on
              clarity, speed and ease of use.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>User flow mapping:</strong> The path a person takes
                from opening the app to finishing a task.
              </li>
              <li>
                <strong>Wireframes:</strong> Simple layouts that you can review
                before any visual styling.
              </li>
              <li>
                <strong>Visual design:</strong> Colours, typography and screens
                that match your brand.
              </li>
              <li>
                <strong>Interactive prototype:</strong> A clickable preview so
                that you can experience the app before it is built.
              </li>
              <li>
                <strong>Approval before development:</strong> Nothing is coded
                until you are happy with the design.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              Stage 3: Development
            </h4>

            <p>This is where the plan becomes a working product.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Android app development:</strong> Built with Kotlin and
                Java for the largest smartphone audience in India.
              </li>
              <li>
                <strong>iOS app development:</strong> Built with Swift for
                iPhone and iPad.
              </li>
              <li>
                <strong>Cross-platform development:</strong> Flutter or React
                Native for Android and iOS from one codebase, which saves time
                and cost.
              </li>
              <li>
                <strong>Backend development:</strong> Servers, databases and
                APIs using Node.js or Laravel.
              </li>
              <li>
                <strong>Admin panel:</strong> A web dashboard, built with React
                or Next.js, where you manage users, content and orders.
              </li>
              <li>
                <strong>Third-party integrations:</strong> Payment gateways,
                maps, SMS and email services, CRM and ERP.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              Stage 4: Testing and quality assurance
            </h4>

            <p>
              A single crash can make a customer uninstall your app. We test
              thoroughly before release.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Functional testing:</strong> Every feature works as
                planned.
              </li>
              <li>
                <strong>Device testing:</strong> Checks on real phones across
                brands, screen sizes and versions.
              </li>
              <li>
                <strong>Performance testing:</strong> Speed, loading time and
                battery use.
              </li>
              <li>
                <strong>Security testing:</strong> Safe handling of logins,
                data and payments.
              </li>
              <li>
                <strong>User acceptance testing:</strong> You try the app and
                confirm that it meets your needs.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              Stage 5: Launch
            </h4>

            <p>
              Publishing an app involves more than pressing a button.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Developer account setup:</strong> Google Play and App
                Store accounts created in your name.
              </li>
              <li>
                <strong>Store listing:</strong> Title, description, screenshots
                and categories prepared carefully.
              </li>
              <li>
                <strong>Compliance:</strong> Meeting store policies and privacy
                requirements to avoid rejection.
              </li>
              <li>
                <strong>Release planning:</strong> A smooth rollout, with fixes
                ready if early users report problems.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              Stage 6: Growth and promotion
            </h4>

            <p>
              An app is only useful when people find it and keep using it.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>App store optimisation:</strong> Better visibility
                through the right keywords and listing quality.
              </li>
              <li>
                <strong>Search and social promotion:</strong> Digital marketing
                to bring the right audience.
              </li>
              <li>
                <strong>Analytics setup:</strong> Tracking downloads, usage and
                drop-off points.
              </li>
              <li>
                <strong>Feature improvements:</strong> New releases based on
                real user behaviour.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              Stage 7: Maintenance and support
            </h4>

            <p>
              Phones, operating systems and customer expectations keep
              changing.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Bug fixes:</strong> Quick resolution of issues that
                appear after launch.
              </li>
              <li>
                <strong>Compatibility updates:</strong> Keeping the app working
                on new Android and iOS versions.
              </li>
              <li>
                <strong>Security patches:</strong> Protecting the app and user
                data.
              </li>
              <li>
                <strong>Performance tuning:</strong> Faster loading and
                smoother experience over time.
              </li>
              <li>
                <strong>New features:</strong> Planned upgrades as your
                business grows.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Types of Apps We Build
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>E-commerce apps:</strong> Catalogues, carts, payments,
                order tracking and offers.
              </li>
              <li>
                <strong>Booking and appointment apps:</strong> Scheduling,
                reminders and customer profiles.
              </li>
              <li>
                <strong>Education apps:</strong> Classes, tests, attendance,
                fee payment and parent updates.
              </li>
              <li>
                <strong>Business and enterprise apps:</strong> Sales,
                inventory, attendance and operations tools.
              </li>
              <li>
                <strong>Healthcare apps:</strong> Patient communication,
                reminders and appointment management.
              </li>
              <li>
                <strong>Catalogue and enquiry apps:</strong> Product showcases
                for exporters and manufacturers.
              </li>
              <li>
                <strong>Startup MVPs:</strong> Focused first versions to test
                your idea quickly.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Which Service Do You Need First?
            </h3>

            <p>
              Not every business needs every service on day one. Here is a
              simple guide.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>You only have an idea:</strong> Start with strategy and
                consulting, so that you build the right thing.
              </li>
              <li>
                <strong>You have a clear plan:</strong> Move to UI/UX design
                and development.
              </li>
              <li>
                <strong>You have an app that is slow or outdated:</strong> Ask
                for an audit, performance work or a redesign.
              </li>
              <li>
                <strong>You already have an app but no users:</strong> Focus on
                store optimisation and digital marketing.
              </li>
              <li>
                <strong>Your app is live and growing:</strong> Choose
                maintenance and feature development.
              </li>
            </ul>

            <p>
              During your free consultation, we will tell you honestly where to
              begin and where to save money.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Deliver: Our Working Approach
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>One point of contact:</strong> You always know who to
                talk to.
              </li>
              <li>
                <strong>Milestone-based planning:</strong> Work is divided into
                clear stages with visible progress.
              </li>
              <li>
                <strong>Regular demos:</strong> You see working versions of the
                app during development.
              </li>
              <li>
                <strong>Transparent communication:</strong> Honest timelines
                and quick answers.
              </li>
              <li>
                <strong>Your ownership:</strong> The source code, designs and
                store accounts belong to you.
              </li>
              <li>
                <strong>Written agreement:</strong> Scope, payments and
                responsibilities are documented clearly.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects the Cost of App Development Services
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Platform choice:</strong> Android, iOS or both.
              </li>
              <li>Number and complexity of features.</li>
              <li>
                <strong>Design depth:</strong> Standard screens or custom
                animations and illustrations.
              </li>
              <li>Backend and integrations.</li>
              <li>Delivery timeline.</li>
              <li>Ongoing support needs.</li>
            </ul>

            <p>
              We give a detailed quotation after the consultation, listing
              every item clearly, so that there are no hidden charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech for Mobile App Development Services
              in Moradabad
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Full lifecycle coverage:</strong> Strategy, design,
                development, testing, launch, promotion and support.
              </li>
              <li>
                <strong>Proven experience:</strong> 250+ projects and 270+
                clients across many industries.
              </li>
              <li>
                <strong>Local team:</strong> Visit us at 12/11, Buddhi Vihar
                Phase 2, Moradabad, Uttar Pradesh 244001.
              </li>
              <li>
                <strong>Honest advice:</strong> We recommend what fits your
                needs, not the most expensive option.
              </li>
              <li>
                <strong>Related services under one roof:</strong> Websites,
                cloud solutions, SEO and digital marketing.
              </li>
              <li>
                <strong>Long-term partnership:</strong> We stay with you after
                the app goes live.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start With a Free Consultation
            </h3>

            <p>
              Tell us where you are in your app journey, and we will recommend
              the right services, technology and budget. There is no pressure
              and no obligation.
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
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              <br />
              <strong>Office:</strong> 12/11, Buddhi Vihar Phase 2, Moradabad,
              Uttar Pradesh 244001
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What mobile app development services do you offer in
                  Moradabad?
                </h4>
                <p>
                  We offer strategy, UI/UX design, development, testing,
                  launch, promotion and ongoing support.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Do you handle Google Play and App Store publishing?
                </h4>
                <p>
                  Yes. We prepare accounts, listings and submissions, and help
                  you meet store requirements.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Can I use only some of your services?
                </h4>
                <p>
                  Yes. You can hire us for design, development, testing or
                  support separately.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Do you build for Android and iOS?
                </h4>
                <p>
                  Yes. We build native apps and cross-platform apps using
                  Flutter and React Native.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How long does the whole process take?
                </h4>
                <p>
                  Simple apps take about 6 to 8 weeks. Complex apps may take 3
                  to 6 months.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will I own the source code?
                </h4>
                <p>
                  Yes. You receive full ownership of the code, designs and
                  publishing accounts.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you offer maintenance after launch?
                </h4>
                <p>
                  Yes. We provide bug fixes, updates, security patches and new
                  feature development.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can you help promote my app?
                </h4>
                <p>
                  Yes. Our team handles app store optimisation, SEO, social
                  media and ad campaigns.
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
                    href="/mobile-app-development-company"
                    className="text-blue-600 hover:underline"
                  >
                    Mobile App Development Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/custom-mobile-app-development-services"
                    className="text-blue-600 hover:underline"
                  >
                    Custom Mobile App Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cross-platform-app-development-company"
                    className="text-blue-600 hover:underline"
                  >
                    Cross Platform App Development Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/mobile-app-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Mobile App Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/custom-mobile-app-development-services"
                    className="text-blue-600 hover:underline"
                  >
                    Custom Mobile App Development Services in Moradabad
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/moradabad/mobile-app-development-services-in-moradabad"
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