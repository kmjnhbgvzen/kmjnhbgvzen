import Link from "next/link";
import {
  Hospital,
  Stethoscope,
  HeartPulse,
  Building2,
  PartyPopper,
  Home,
  GraduationCap,
  School,
  Landmark,
  BadgeDollarSign,
  Factory,
  Truck,
  Sofa,
  Compass,
  Gem,
  Hotel,
  Briefcase,
  Scale,
  Dumbbell,
  Scissors,
  Utensils,
  ShoppingBag,
} from "lucide-react";



const industries = [
 {
  title: "Hospitals",
  desc: "Get more patients and grow your hospital with proven digital strategies.",
  icon: Hospital,
},
{
  title: "Doctors & Clinics",
  desc: "Bring in more patients and build strong local trust.",
  icon: Stethoscope,
},
{
  title: "IVF & Fertility Centers",
  desc: "Increase patient inquiries and fill your treatment pipeline.",
  icon: HeartPulse,
},
{
  title: "Builders & Property Dealers",
  desc: "Find serious buyers and sell properties faster.",
  icon: Home,
},
{
  title: "Schools",
  desc: "Boost admissions and attract more parents.",
  icon: School,
},
{
  title: "Wedding Planners",
  desc: "Get more premium bookings and turn inquiries into confirmed events.",
  icon: PartyPopper,
},

{
  title: "Colleges & Universities",
  desc: "Fill seats faster with consistent student inquiries.",
  icon: GraduationCap,
},
{
  title: "Wealth Managers",
  desc: "Connect with high-value clients ready to invest.",
  icon: Landmark,
},
{
  title: "Financial Advisors",
  desc: "Generate qualified leads and grow your client base.",
  icon: BadgeDollarSign,
},
{
  title: "Manufacturers",
  desc: "Get bulk inquiries and expand your dealer network.",
  icon: Factory,
},
{
  title: "Exporters",
  desc: "Reach global buyers and increase export orders.",
  icon: Truck,
},
{
  title: "Interior Designers",
  desc: "Attract premium clients and secure high-value projects.",
  icon: Sofa,
},
{
  title: "Architects",
  desc: "Win bigger projects and strengthen your market presence.",
  icon: Compass,
},
{
  title: "Luxury Brands",
  desc: "Reach affluent customers and elevate your brand image.",
  icon: Gem,
},
{
  title: "Hotels & Resorts",
  desc: "Increase direct bookings and keep rooms filled year-round.",
  icon: Hotel,
},
{
  title: "Corporate Businesses",
  desc: "Generate quality leads and scale your business faster.",
  icon: Briefcase,
},
{
  title: "Law Firms",
  desc: "Attract high-value cases and build strong credibility.",
  icon: Scale,
},
{
  title: "Gyms & Fitness Centers",
  desc: "Get more members and grow recurring revenue.",
  icon: Dumbbell,
},
{
  title: "Salons & Beauty Clinics",
  desc: "Increase appointments and bring in repeat customers.",
  icon: Scissors,
},
{
  title: "Restaurants & Cafes",
  desc: "Drive more customers and boost daily sales.",
  icon: Utensils,
},
{
  title: "Retail Stores",
  desc: "Increase footfall and turn visitors into buyers.",
  icon: ShoppingBag,
},


];

export default function Industries() {
  return (
    <main className="bg-white font-serif">
      
      {/* HERO */}
      <section className="py-16 px-6 md:px-12 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mt-14 sm:mt-20 md:mt-28">
          Industries We Help <span className="text-black">Scale</span>
        </h1>

        <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
          Every industry has unique growth challenges. Our tailored digital
          strategies help businesses attract clients, increase revenue,
          and build unstoppable market authority.
        </p>
      </section>

      {/* INDUSTRY GRID */}
      <section className="py-2 px-6 md:px-5">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div 
                key={item.title} 
                className="group border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-black transition duration-300 cursor-pointer bg-white"
              >
                
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 group-hover:bg-black transition">
                  <Icon
                    size={24}
                    className="text-black group-hover:text-white transition"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-medium text-gray-900 mt-4">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-4xl font-medium text-gray-900">
          Ready to Accelerate Your Growth?
        </h2>

        <p className="mt-3 text-gray-600 text-sm">
          Let's build a predictable system that brings you consistent clients.
        </p>

        <Link href="/contact-us">
  <button className="mt-8 bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition shadow-lg hover:shadow-xl">
    Get Your Growth Plan
  </button>
</Link>
      </section>

    </main>
  );
}