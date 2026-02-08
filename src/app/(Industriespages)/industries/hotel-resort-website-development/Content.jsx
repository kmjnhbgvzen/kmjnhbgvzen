import Link from "next/link";
import { Users, TrendingUp, Star, Phone, CheckCircle2 } from "lucide-react";
import LandingEnquiry from "@/components/LandingEnquiry";
import LandingServices from "@/components/LandingServices";

export default function HotelResortWebsiteDevelopment() {
  return (
    <main className="bg-white">
      
      {/* Hero */}
      <section className="relative bg-gray-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
            Hotel & Resort Website Development
          </h1>
          <p className="text-xl mb-8">
            Turn Online Visitors into Direct Bookings
          </p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+917248800839">
              <button className="bg-blue-500 px-3 py-2 rounded-lg font-semiserif border-2 border-white hover:bg-blue-400">
                <Phone className="inline mr-2" size={20} />
                Call Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Content with Sidebar */}
      <section className="py-16 px-6">
        <div className="max-w-9xl mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="flex-1 order-1">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Hotel & Resort Website Development: Turn Online Visitors into Direct Bookings
              </h2>
              <p className="text-gray-700 mb-4">
                In today's travel-driven world, your website is often the first interaction guests have with your property. Before making a reservation, travelers compare hotels, explore amenities, check images, and read reviews online. This makes hotel & resort website development a critical investment for any hospitality business that wants to increase direct bookings and reduce dependency on third-party platforms.
              </p>
              <p className="text-gray-700">
                A professionally designed website does more than showcase your property — it builds trust, enhances guest experience, and drives revenue.
              </p>
            </div>

            {/* Why Your Hotel Needs a Professional Website */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Why Your Hotel or Resort Needs a Professional Website
              </h2>
              <p className="text-gray-700 mb-4">
                Modern travelers expect convenience and instant access to information. If your website is outdated, slow, or difficult to navigate, potential guests may leave within seconds and book elsewhere.
              </p>
              <p className="text-gray-700 mb-4">Key benefits of a high-quality hotel website include:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Increased direct bookings</li>
                <li>Reduced commission paid to OTAs</li>
                <li>Stronger brand image</li>
                <li>Better guest engagement</li>
                <li>Higher search engine visibility</li>
                <li>24/7 booking capability</li>
              </ul>
              <p className="text-gray-700">
                Simply put, a powerful website works as your digital front desk, welcoming guests even before they arrive.
              </p>
            </div>

            {/* Features Every Hotel Website Should Have */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Features Every Hotel & Resort Website Should Have
              </h2>
              <p className="text-gray-700 mb-4">
                To compete effectively in the hospitality industry, your website must combine visual appeal with seamless functionality.
              </p>
            </div>

            {/* Mobile-Friendly Design */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Mobile-Friendly Design
              </h2>
              <p className="text-gray-700">
                Most travelers search and book hotels using their smartphones. A responsive design ensures your website looks perfect on all devices, providing a smooth browsing experience that encourages bookings.
              </p>
            </div>

            {/* Integrated Online Booking System */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Integrated Online Booking System
              </h2>
              <p className="text-gray-700">
                An easy-to-use booking engine allows guests to check availability, compare room options, and reserve instantly. The fewer steps involved, the higher the conversion rate.
              </p>
            </div>

            {/* High-Quality Visual Experience */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                High-Quality Visual Experience
              </h2>
              <p className="text-gray-700">
                Hotels and resorts sell experiences. Professional photos, virtual tours, and engaging videos help visitors imagine their stay, making them more likely to book.
              </p>
            </div>

            {/* Fast Loading Speed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Fast Loading Speed
              </h2>
              <p className="text-gray-700">
                Travelers value speed. A slow website can lead to higher bounce rates and lost revenue. Optimized performance keeps users engaged.
              </p>
            </div>

            {/* SEO Optimization */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                SEO Optimization
              </h2>
              <p className="text-gray-700">
                A search-friendly website helps your property appear when travelers search for accommodations in your area. Targeting the right keywords increases organic traffic and booking opportunities.
              </p>
            </div>

            {/* How a Great Website Increases Direct Bookings */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                How a Great Website Increases Direct Bookings
              </h2>
              <p className="text-gray-700 mb-4">
                Third-party booking platforms may bring visibility, but they also charge significant commissions. Your own website allows you to capture guests directly, improving profit margins.
              </p>
              <p className="text-gray-700 mb-4">With the right strategy, your website can:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Promote exclusive offers</li>
                <li>Highlight seasonal packages</li>
                <li>Upsell premium rooms</li>
                <li>Encourage longer stays</li>
                <li>Build guest loyalty</li>
              </ul>
              <p className="text-gray-700">
                Direct bookings not only increase revenue but also give you full control over the guest relationship.
              </p>
            </div>

            {/* Build Trust */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Build Trust with a Strong Digital Presence
              </h2>
              <p className="text-gray-700 mb-4">
                Travelers want reassurance before making a reservation. A modern, secure, and visually appealing website signals professionalism and reliability.
              </p>
              <p className="text-gray-700 mb-4">Include elements such as:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Guest testimonials</li>
                <li>Clear pricing</li>
                <li>Detailed room descriptions</li>
                <li>Amenities list</li>
                <li>FAQs</li>
                <li>Contact information</li>
              </ul>
              <p className="text-gray-700">
                Transparency builds confidence and helps guests choose your property over competitors.
              </p>
            </div>

            {/* Stay Ahead in Competitive Market */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Stay Ahead in a Competitive Hospitality Market
              </h2>
              <p className="text-gray-700 mb-4">
                The hospitality industry is evolving rapidly, and guest expectations continue to rise. Hotels and resorts that invest in modern website development position themselves ahead of competitors who rely solely on listing platforms.
              </p>
              <p className="text-gray-700">
                A future-ready website supports long-term growth by adapting to trends such as mobile bookings, personalized experiences, and digital guest services.
              </p>
            </div>

            {/* How Zentrix Helps */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                How Zentrix Helps Hotels & Resorts Grow Online
              </h2>
              <p className="text-gray-700 mb-4">
                Choosing the right development partner can transform your online presence. Zentrix specializes in creating high-performance hotel and resort websites designed to attract travelers and maximize bookings.
              </p>
              <p className="text-gray-700 mb-4">With Zentrix, you get:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Custom-designed websites tailored to your brand</li>
                <li>Mobile-responsive and fast-loading pages</li>
                <li>Secure and seamless booking integration</li>
                <li>SEO-friendly structure for higher visibility</li>
                <li>Conversion-focused design to increase reservations</li>
                <li>Easy management and scalable solutions</li>
                <li>Dedicated technical support</li>
              </ul>
              <p className="text-gray-700">
                We focus on building websites that not only look stunning but also deliver measurable business results.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                🚀 Ready to Increase Your Hotel Bookings?
              </h2>
              <p className="text-gray-700 mb-4">
                If your current website is not generating enough reservations, it may be time for an upgrade. A professionally developed website can transform how guests discover and book your property.
              </p>
              <p className="text-gray-700 mb-4">
                Partner with Zentrix today to create a powerful hotel or resort website that attracts travelers, boosts direct bookings, and strengthens your brand.
              </p>
              <p className="text-gray-700">
                Contact Zentrix : +91 72488 00839
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[400px] xl:w-[500px] order-2">
            <div className="lg:sticky lg:top-28">
              <LandingEnquiry />
            </div>
          </div>

        </div>
        <LandingServices />
      </section>

    </main>
  );
}