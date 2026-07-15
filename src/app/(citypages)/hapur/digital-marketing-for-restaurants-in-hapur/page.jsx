import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Restaurants in Hapur | More Orders & Footfall",
  description:
    "Looking for digital marketing for restaurants in Hapur? Zentrix Infotech helps restaurants get more orders, bookings & footfall through SEO & ads.",
  keywords:
    "digital marketing for restaurants in Hapur, restaurant marketing agency Hapur, restaurant SEO services, food business marketing company, restaurant social media marketing, restaurant Google ads agency, cloud kitchen marketing services, restaurant website development company, restaurant lead generation services, restaurant Instagram marketing agency, best restaurant marketing company, digital marketing agency Delhi NCR, cafe marketing agency Hapur, restaurant online ordering system, food delivery marketing services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/digital-marketing-for-restaurants-hapur",
  },
  openGraph: {
    title: "Digital Marketing for Restaurants in Hapur | More Orders & Footfall",
    description:
      "Looking for digital marketing for restaurants in Hapur? Zentrix Infotech helps restaurants get more orders, bookings & footfall through SEO & ads.",
    url: "https://www.zentrixinfotech.com/hapur/digital-marketing-for-restaurants-hapur",
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
    title: "Digital Marketing for Restaurants in Hapur | More Orders & Footfall",
    description:
      "Looking for digital marketing for restaurants in Hapur? Zentrix Infotech helps restaurants get more orders, bookings & footfall through SEO & ads.",
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