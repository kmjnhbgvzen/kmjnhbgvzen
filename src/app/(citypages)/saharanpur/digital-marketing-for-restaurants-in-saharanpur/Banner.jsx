import Link from "next/link";
import { Users, TrendingUp, Star, Phone, CheckCircle2 } from "lucide-react";


export default function BillingSoftwareForRetail() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1200&q=70')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
Digital Marketing for Restaurants in Saharanpur
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-6">
            Zentrix Infotech delivers result-oriented digital marketing services for restaurants in Saharanpur, helping businesses build a powerful online presence, connect with the right audience, and turn digital opportunities into long-term success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            {/* Call Button */}
            <a href="tel:+917248800839">
              <button className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-5 py-3 rounded-xl font-semibold border-2 border-white hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg">
                <Phone size={18} />
                <span className="text-base">
                  +91 72488 00839
                </span>
              </button>
            </a>

            {/* Email Button */}
            <a href="mailto:zentrixit@gmail.com">
              <button className="bg-transparent px-5 py-3 rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-gray-800 transition">
                Book Appointment
              </button>
            </a>

          </div>
        </div>
      </section>

      

    </main>
  );
}