import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Moradabad Price | Zentrix Infotech",
  description:
    "Know the mobile app development price in Moradabad. See cost factors, price ranges and how to save money. Get a free quote from Zentrix Infotech: +91 72488 00839.",
  keywords:
    "mobile app development moradabad price, mobile app development price in moradabad, app development price moradabad, mobile app development cost moradabad, android app development price moradabad, ios app development price moradabad, app development charges moradabad, how much does an app cost in moradabad, affordable app development moradabad, custom app development price moradabad, ecommerce app development price moradabad, mobile app development company moradabad, cheap app developer moradabad, app development quote moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-moradabad-price",
  },

  openGraph: {
    title: "Mobile App Development Moradabad Price | Zentrix Infotech",
    description:
      "Know the mobile app development price in Moradabad. See cost factors, price ranges and how to save money. Get a free quote from Zentrix Infotech: +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/mobile-app-development-moradabad-price",
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
    title: "Mobile App Development Moradabad Price | Zentrix Infotech",
    description:
      "Know the mobile app development price in Moradabad. See cost factors, price ranges and how to save money. Get a free quote from Zentrix Infotech: +91 72488 00839.",
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