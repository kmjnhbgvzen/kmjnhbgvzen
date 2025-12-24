import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";

const PostNavigation = ({ slug }) => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-300">
      <div className="flex justify-between items-center">
        <button className="text-blue-600 hover:text-blue-700 font-semibold">
          ← Previous Article
        </button>
        <button className="text-blue-600 hover:text-blue-700 font-semibold">
          Next Article →
        </button>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-0 order-1 lg:order-1">

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Web Application Development in Moradabad | Zentrix Infotech
            </h2>
            <p>
              Build powerful custom web applications with web application development in Moradabad. Zentrix Infotech creates scalable, secure web apps for businesses needing booking systems, CRMs, dashboards, and management tools—modern React/Node.js solutions that handle real business workflows.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Businesses Need Web Applications
            </h2>
            <p>
              Static websites can&apos;t handle complex operations. Web applications manage inventory, book appointments, track employees, and process orders—automating your business 24/7.
            </p>
            <p>
              Custom web apps save 65% time on manual tasks and scale as your Moradabad business grows from 10 to 1000 customers.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Perfect Web App Solutions For
            </h2>

            <h3 className="font-semibold text-gray-900 mb-2">Hospital Management Systems</h3>
            <p>
              Patient registration, appointment scheduling, doctor dashboards, billing integration.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Inventory & Order Management</h3>
            <p>
              Real-time stock tracking, supplier portals, order fulfillment, low-stock alerts.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Employee & HR Portals</h3>
            <p>
              Attendance tracking, payroll processing, leave management, performance reviews.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Booking & Reservation Systems</h3>
            <p>
              Restaurant tables, coaching classes, service appointments, real-time availability.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">CRM & Customer Portals</h3>
            <p>
              Lead tracking, customer support tickets, service history, loyalty programs.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Multi-Vendor Marketplaces</h3>
            <p>
              Supplier dashboards, commission tracking, order splitting, payment reconciliation.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Web Application Technology
            </h2>
            
            <p className="font-semibold text-gray-900">Frontend Excellence</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>React/Next.js for smooth interfaces</li>
              <li>Tailwind CSS for responsive design</li>
              <li>Real-time updates with WebSockets</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Backend Power</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Node.js/Express for fast APIs</li>
              <li>MongoDB/PostgreSQL databases</li>
              <li>Redis caching for speed</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Security & Scale</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>JWT authentication, role-based access</li>
              <li>Cloud hosting (AWS/Vercel)</li>
              <li>Load balancing for high traffic</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Proven Web App Success Stories
            </h2>
            <div className="space-y-3">
              <p>
                <strong>Hospital App:</strong> Manages 850+ daily appointments, reduced no-shows by 72%.
              </p>
              <p>
                <strong>Brassware Inventory:</strong> Tracks 5,000+ SKUs across 3 warehouses, cut stockouts 89%.
              </p>
              <p>
                <strong>Coaching Platform:</strong> 2,500 students, automated attendance + payments.
              </p>
              <p>
                <strong>Restaurant Chain:</strong> Real-time table booking across 7 locations.
              </p>
              <p>
                <strong>Trading Portal:</strong> 180 vendors, ₹45L monthly transactions processed.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Moradabad Business Web App Needs
            </h2>
            <p>
              Manufacturing needs inventory control. Hospitals require patient management. Retail demands order tracking. Coaching centers want student portals. All need mobile-friendly, Hindi-supporting apps.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              7-Step Web App Development Process
            </h2>

            <h3 className="font-semibold text-gray-900 mb-2">Step 1: Requirements Gathering</h3>
            <p>
              Business workflow analysis, user roles defined.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Step 2: System Architecture</h3>
            <p>
              Database design, API planning, scalability roadmap.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Step 3: UI/UX Prototyping</h3>
            <p>
              Mobile-first wireframes, user flow validation.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Step 4: Backend Development</h3>
            <p>
              Secure APIs, database setup, authentication.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Step 5: Frontend Implementation</h3>
            <p>
              Responsive interfaces, real-time features.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Step 6: Testing & Optimization</h3>
            <p>
              Load testing, security audit, performance tuning.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Step 7: Deployment & Training</h3>
            <p>
              Cloud launch, admin training, 90-day support.
            </p>

            <p className="mt-4">
              <strong>Timeline:</strong> 4-12 weeks based on complexity.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Our Web Apps Different
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>✅ <strong>Local Business Focus</strong> – Understands Moradabad workflows</li>
              <li>✅ <strong>Mobile-First Design</strong> – Works perfect on 92% smartphone users</li>
              <li>✅ <strong>Hindi/English Interface</strong> – Dual language support built-in</li>
              <li>✅ <strong>WhatsApp Integration</strong> – Instant notifications and support</li>
              <li>✅ <strong>Scalable Architecture</strong> – Grows with your business</li>
              <li>✅ <strong>Uptime Guarantee</strong> – 99.9% availability monitored</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Ready For Your Custom Web App?
            </h2>
            <p>
              Zentrix Infotech delivers web application development in Moradabad.
            </p>
            <p className="mt-4">
              <strong>📞</strong> 7248800839<br />
              <strong>📧</strong> info@zentrixinfotech.com
            </p>
            <p className="mt-4">
              <strong>🌐 Free Consultation Today</strong>
            </p>
            <p className="mt-2 text-blue-600 font-semibold">
              Next 3 projects get FREE architecture planning session!
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Web Apps
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Custom CRM Development</li>
              <li>Booking System Solutions</li>
              <li>Inventory Management Apps</li>
              <li>Hospital Management Software</li>
              <li>Multi-Vendor Portals</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Web Application FAQs
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What types of web apps do you build?</h3>
                <p>CRMs, booking systems, inventory, HR portals, marketplaces.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How long to develop a web application?</h3>
                <p>Simple apps: 4-6 weeks. Complex systems: 8-12 weeks.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Are web apps mobile friendly?</h3>
                <p>100% responsive—perfect on phones, tablets, desktops.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you support Hindi interface?</h3>
                <p>Full dual-language support with proper RTL handling.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What happens after launch?</h3>
                <p>90 days free maintenance + scalable support plans.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can apps handle high traffic?</h3>
                <p>Cloud architecture scales automatically for growth.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you integrate with WhatsApp?</h3>
                <p>Real-time notifications, support chat, order alerts.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Web Application Development in Moradabad | Custom Web Apps | React/Node.js | Scalable & Secure
              </p>
              <p className="mt-2 text-gray-700">
                Zentrix Infotech builds powerful web applications that automate business workflows, manage complex operations, and scale with Moradabad businesses—from booking systems to enterprise management tools.
              </p>
            </div>
          </div>

          <PostNavigation slug="web-application-development-moradabad" />
        </div>

        {/* Form Section - Smart positioning with CSS order */}
        <div className="w-[400px] lg:w-[500px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
            <RecentBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;