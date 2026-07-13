import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Restaurants in Saharanpur | Get More Orders & Footfall",
  description:
    "Grow your restaurant in Saharanpur with proven digital marketing — SEO, Google Maps, social media & food delivery visibility. Get more table bookings, orders and walk-ins online.",
  keywords:
    "digital marketing for restaurants in Saharanpur, restaurant digital marketing Saharanpur, SEO for restaurants, food business marketing agency Saharanpur, restaurant lead generation, local SEO for restaurants, digital marketing for cafes Saharanpur, best digital marketing company Saharanpur, restaurant social media marketing, Google Ads for restaurants, restaurant website development India",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-restaurants-saharanpur",
  },
  openGraph: {
    title: "Digital Marketing for Restaurants in Saharanpur | Get More Orders & Footfall",
    description:
      "Grow your restaurant in Saharanpur with proven digital marketing — SEO, Google Maps, social media & food delivery visibility. Get more table bookings, orders and walk-ins online.",
    url: "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-restaurants-saharanpur",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for Restaurants in Saharanpur | Get More Orders & Footfall",
    description:
      "Grow your restaurant in Saharanpur with proven digital marketing — SEO, Google Maps, social media & food delivery visibility. Get more table bookings, orders and walk-ins online.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Client />
      <Content />
      <WhyChooseUs />
      <LandingServices />
      <Portfolio />
      <LovedByClients />
    </>
  );
}