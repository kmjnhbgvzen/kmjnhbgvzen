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
              Website Maintenance in Moradabad | Zentrix Infotech
            </h2>
            <p>
              Keep your website running smoothly 24/7 with professional website maintenance in Moradabad. Zentrix Infotech provides reliable monthly maintenance services—handling updates, security, backups, and speed optimization so you focus on your business while we keep your site secure and fast.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Website Maintenance Matters in Moradabad
            </h2>
            <p>
              Websites break, get hacked, or slow down without regular care. 43% of websites have vulnerabilities, and Google penalizes slow or insecure sites. Monthly maintenance prevents downtime and keeps you ranking locally.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Regular security updates prevent hacking attempts.</li>
              <li>Automatic backups protect against data loss.</li>
              <li>Speed optimization maintains Google rankings.</li>
              <li>Uptime monitoring ensures 99.9% availability.</li>
              <li>Content updates keep your site fresh for customers.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Complete Website Maintenance Services
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Security Maintenance</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>WordPress core, theme, plugin updates</li>
                  <li>Malware scanning and removal</li>
                  <li>Security hardening (firewall, login protection)</li>
                  <li>SSL certificate renewal and monitoring</li>
                  <li>Hack recovery if issues occur</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Image compression and optimization</li>
                  <li>Database cleanup (remove spam, optimize tables)</li>
                  <li>Caching setup and maintenance</li>
                  <li>Broken link monitoring and fixes</li>
                  <li>Speed testing (Google PageSpeed 90+)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Content & Functionality Updates</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Content changes (text, images, pages)</li>
                  <li>Form testing and repair</li>
                  <li>Contact details updates</li>
                  <li>Google Maps and hours refresh</li>
                  <li>WhatsApp integration maintenance</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Backup & Recovery</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Daily automated backups</li>
                  <li>Offsite cloud storage</li>
                  <li>One-click restore capability</li>
                  <li>Disaster recovery testing</li>
                  <li>Version history for changes</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Uptime & Monitoring</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>24/7 uptime monitoring</li>
                  <li>Instant alert notifications</li>
                  <li>Monthly performance reports</li>
                  <li>Google Analytics review</li>
                  <li>Competitor ranking checks</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Real Maintenance Success Stories
            </h2>
            <div className="space-y-4">
              <div>
                <p><strong>Restaurant Site:</strong> Monthly maintenance prevented 3 hacking attempts, uptime 99.98%.</p>
              </div>
              <div>
                <p><strong>Hospital Portal:</strong> Speed optimization improved mobile score from 45 to 92.</p>
              </div>
              <div>
                <p><strong>Brassware E-Commerce:</strong> Regular updates eliminated cart abandonment issues.</p>
              </div>
              <div>
                <p><strong>Coaching Center:</strong> Content updates kept course pages fresh, rankings improved 40%.</p>
              </div>
              <div>
                <p><strong>Local Retail:</strong> Backup restoration recovered site after server crash—zero data loss.</p>
              </div>
            </div>
            <p className="mt-4">Prevented disasters, maintained rankings, saved businesses from downtime.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Common Website Problems We Fix Monthly
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Security Issues</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Outdated plugins (95% of hacks)</li>
                  <li>Weak passwords and login attempts</li>
                  <li>Malware infections from forms/uploads</li>
                  <li>SSL expiry causing &quot;not secure&quot; warnings</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Performance Problems</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Slow loading after content growth</li>
                  <li>Image bloat from years of uploads</li>
                  <li>Database tables growing out of control</li>
                  <li>Unused plugins slowing page speed</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Functionality Breaks</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Contact forms stopping randomly</li>
                  <li>Broken links to old promotions</li>
                  <li>Maps not loading correctly</li>
                  <li>Social media feeds failing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Moradabad Website Maintenance Reality
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>92% smartphone users expect instant loading.</li>
              <li>Local businesses lose 65% visitors from slow sites.</li>
              <li>Hacking attempts spike during festive seasons.</li>
              <li>Google algorithm updates punish unmaintained sites.</li>
              <li>WhatsApp Business API changes break integrations.</li>
            </ul>
            <p className="mt-4">Regular maintenance = business continuity.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Website Maintenance Process
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Daily Tasks (Automated)</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Security scans</li>
                  <li>Backup creation</li>
                  <li>Uptime monitoring</li>
                  <li>Malware detection</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Weekly Tasks</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Plugin/theme updates (tested first)</li>
                  <li>Speed optimization checks</li>
                  <li>Broken link scanning</li>
                  <li>Performance reporting</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Monthly Tasks</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Full security audit</li>
                  <li>Database optimization</li>
                  <li>Content backup verification</li>
                  <li>Client report + recommendations</li>
                  <li>Competitor analysis</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Response</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>2-hour response time guarantee</li>
                  <li>Priority support via WhatsApp/call</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Maintenance Plans Include
            </h2>
            <div className="space-y-3">
              <p><strong>Basic Plan</strong> – Security + backups + uptime monitoring</p>
              <p><strong>Growth Plan</strong> – Basic + speed optimization + monthly reports</p>
              <p><strong>Premium Plan</strong> – Growth + content updates + priority support</p>
              <p><strong>Enterprise</strong> – Premium + custom integrations + dedicated manager</p>
            </div>
            <p className="mt-4">All plans include 24/7 monitoring and emergency response.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Local Maintenance in Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Face-to-Face Support:</strong> Meet anytime for complex issues.</li>
              <li><strong>Local Network Understanding:</strong> Jio/Airtel speed optimization.</li>
              <li><strong>Hindi/English Communication:</strong> No language barriers.</li>
              <li><strong>Understands Local Business:</strong> Festivals, seasons, promotions.</li>
              <li><strong>Fast Response:</strong> 2-hour emergency support guaranteed.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Start Website Maintenance Today!
            </h2>
            <p>Zentrix Infotech—Moradabad&apos;s trusted website maintenance experts.</p>
            <p className="mt-2">📞 7248800839</p>
            <p>📧 info@zentrixinfotech.com</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Website Maintenance FAQs
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. How often should websites be maintained?</h3>
                <p>A: Weekly security scans, monthly full maintenance recommended.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. What if my site gets hacked?</h3>
                <p>A: 24-hour recovery guarantee with clean reinstall.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Do you maintain all platforms?</h3>
                <p>A: WordPress, custom sites, Shopify, React/Next.js—all platforms.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Is downtime included in maintenance?</h3>
                <p>A: Zero planned downtime—updates during low traffic hours.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Can you update my content regularly?</h3>
                <p>A: Yes—text, images, promotions, hours—all handled.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q6. What monitoring do you provide?</h3>
                <p>A: 24/7 uptime, security alerts, performance tracking.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q7. Do you optimize for mobile users?</h3>
                <p>A: Essential for Moradabad&apos;s 92% smartphone traffic.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Website Maintenance in Moradabad | 24/7 Monitoring & Support | Zentrix Infotech
              </p>
              <p className="mt-2 text-gray-700">
                Professional website maintenance services keeping your site secure, fast, and running smoothly with regular updates, backups, and performance optimization for businesses across Moradabad.
              </p>
            </div>
          </div>

          <PostNavigation slug="website-maintenance-moradabad" />
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