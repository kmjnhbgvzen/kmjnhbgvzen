import Link from "next/link";
import { Users, TrendingUp, Star, Phone, CheckCircle2 } from "lucide-react";
import LandingEnquiry from "@/components/LandingEnquiry";
import LandingServices from "@/components/LandingServices";

export default function BillingSoftwareForRetail() {
  return (
    <main className="bg-white">
      {/* Hero */}
<section
  className="relative text-white py-20 px-6 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1200&q=70')" // 👈 put your image path here
  }}
>
  {/* Overlay (for readability) */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative max-w-7xl mx-auto text-center">
    
    <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
      Billing Software for Retail Shops
    </h1>

    <p className="text-xl mb-6">
      A Smart Way to Generate More Leads and Increase Sales
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      
      {/* Call Button */}
      <a href="tel:+917248800839">
        <button className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-5 py-3 rounded-xl font-semibold border-2 border-white hover:bg-blue-400 transition flex items-center justify-center gap-2 shadow-lg">
          <Phone size={18} />
          <span className="text-base">
            +91 72488 00839
          </span>
        </button>
      </a>

      {/* Email Button */}
      <a href="mailto:zentrixit@gmail.com">
        <button className="bg-transparent px-4 py-2 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-gray-800 transition">
          Book Appointment
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
                Billing Software for Retail Shops: A Smart Way to Generate More Leads and Increase Sales
              </h2>
              <p className="text-gray-700 mb-4">
                In today's competitive retail market, speed and accuracy are critical for success. Customers expect fast billing, clear invoices, and a smooth checkout experience. Long queues or manual billing errors can quickly drive shoppers toward competitors. This is why investing in billing software for retail shops is not just an upgrade — it is a strategic move to attract more customers and generate consistent leads.
              </p>
              <p className="text-gray-700">
                Retailers who adopt modern billing solutions operate more efficiently, build stronger customer relationships, and create a professional store image that encourages repeat visits.
              </p>
            </div>

            {/* Why Billing Software is Essential */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Why Billing Software is Essential for Retail Shops
              </h2>
              <p className="text-gray-700 mb-4">
                A smart billing system simplifies daily operations while improving customer satisfaction. When your store runs smoothly, customers are more likely to trust your business and return.
              </p>
              <p className="text-gray-700 mb-4">Major advantages include:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Faster checkout process</li>
                <li>Reduced manual errors</li>
                <li>Accurate pricing and invoices</li>
                <li>Better customer experience</li>
                <li>Organized sales tracking</li>
                <li>Higher chances of repeat business</li>
              </ul>
              <p className="text-gray-700">
                An efficient retail store naturally attracts more walk-ins — and more walk-ins mean more potential leads.
              </p>
            </div>

            {/* How Billing Software Helps Generate Leads */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                How Billing Software Helps You Generate More Leads
              </h2>
              <p className="text-gray-700 mb-4">
                Modern billing software does much more than create invoices. It acts as a growth engine by helping you understand customer behavior and run smarter marketing campaigns.
              </p>
            </div>

            {/* Build a Customer Database */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Build a Customer Database Automatically
              </h2>
              <p className="text-gray-700 mb-4">
                Every transaction becomes an opportunity to collect useful customer information such as phone numbers and purchase history. This allows you to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Send promotional offers</li>
                <li>Notify customers about new stock</li>
                <li>Launch festival discounts</li>
                <li>Share exclusive deals</li>
              </ul>
              <p className="text-gray-700">
                Staying connected keeps your brand fresh in customers' minds and increases repeat visits.
              </p>
            </div>

            {/* Launch Loyalty Programs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Launch Loyalty Programs
              </h2>
              <p className="text-gray-700 mb-4">
                Rewarding customers encourages them to choose your store over others. Billing software makes it easy to implement loyalty programs like reward points, cashback, or member-only offers.
              </p>
              <p className="text-gray-700 mb-4">Benefits include:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Higher customer retention</li>
                <li>Increased purchase frequency</li>
                <li>Stronger brand loyalty</li>
              </ul>
              <p className="text-gray-700">
                Repeat customers are one of the most reliable sources of long-term revenue.
              </p>
            </div>

            {/* Improve Efficiency */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Improve Efficiency and Serve More Customers
              </h2>
              <p className="text-gray-700 mb-4">
                Automation reduces the workload on your staff, allowing them to focus on customer service instead of manual calculations.
              </p>
              <p className="text-gray-700 mb-4">Key operational improvements:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Quick barcode billing</li>
                <li>Instant invoice generation</li>
                <li>Easy returns and exchanges</li>
                <li>Real-time inventory updates</li>
              </ul>
              <p className="text-gray-700">
                The faster you serve customers, the more people your store can handle — directly increasing lead opportunities.
              </p>
            </div>

            {/* Smart Inventory Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Smart Inventory Management Prevents Lost Sales
              </h2>
              <p className="text-gray-700 mb-4">
                Nothing disappoints a customer more than finding their desired product out of stock. Billing software tracks inventory in real time and alerts you when items run low.
              </p>
              <p className="text-gray-700 mb-4">This helps you:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Keep high-demand products available</li>
                <li>Avoid overstocking</li>
                <li>Make smarter purchasing decisions</li>
              </ul>
              <p className="text-gray-700">
                A well-stocked store builds trust and encourages customers to return.
              </p>
            </div>

            {/* Data Insights */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Data Insights for Better Business Decisions
              </h2>
              <p className="text-gray-700 mb-4">
                Retail success is driven by data. Advanced billing systems provide detailed reports on sales trends, top-performing products, and peak shopping hours.
              </p>
              <p className="text-gray-700 mb-4">With these insights, you can:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Optimize pricing strategies</li>
                <li>Plan targeted promotions</li>
                <li>Identify profitable products</li>
                <li>Forecast future demand</li>
              </ul>
              <p className="text-gray-700">
                Data-backed decisions reduce risk and support steady business growth.
              </p>
            </div>

            {/* Professional Brand Image */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Create a Professional Brand Image
              </h2>
              <p className="text-gray-700 mb-4">
                Customers trust retailers who use organized, digital systems. Printed invoices, multiple payment options, and transparent pricing elevate your brand perception.
              </p>
              <p className="text-gray-700 mb-4">A professional setup:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Builds customer confidence</li>
                <li>Encourages referrals</li>
                <li>Sets you apart from competitors</li>
              </ul>
              <p className="text-gray-700">
                Trust is one of the strongest drivers of new leads.
              </p>
            </div>

            {/* How Zentrix Helps */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                How Zentrix Helps Retail Shops Grow Faster
              </h2>
              <p className="text-gray-700 mb-4">
                Choosing the right technology partner is just as important as choosing the right software. Zentrix provides advanced billing solutions designed specifically for modern retail businesses that want to scale.
              </p>
              <p className="text-gray-700 mb-4">With Zentrix, you get:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Easy-to-use billing software tailored for retail shops</li>
                <li>Fast setup with minimal downtime</li>
                <li>Cloud-based access for real-time business monitoring</li>
                <li>Integrated inventory management</li>
                <li>Customer data tracking for smarter marketing</li>
                <li>Secure payment integration</li>
                <li>Ongoing technical support</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Our goal is simple — help your retail business run smarter, attract more customers, and increase revenue.
              </p>
              <p className="text-gray-700">
                We don't just provide software; we deliver a complete growth solution that prepares your store for the future.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                🚀 Ready to Transform Your Retail Business?
              </h2>
              <p className="text-gray-700 mb-4">
                Stop relying on outdated billing methods that slow down your growth. Upgrade to a smarter system and turn every customer visit into a long-term relationship.
              </p>
              <p className="text-gray-700 mb-4">
                Partner with Zentrix today and discover how the right billing software can generate more leads, improve efficiency, and maximize your profits.
              </p>
              <p className="text-gray-700">
                Contact Zentrix now to schedule a free consultation and see how our billing solutions can elevate your retail shop to the next level.
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