import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Company Near Me | Zentrix Infotech",
  description:
    "Searching for a mobile app development company near you? Zentrix Infotech has offices in Moradabad and Ghaziabad and builds secure Android and iOS apps. Call today.",
  keywords:
    "mobile app development company near me, app development company near me, mobile app developers near me, mobile app development company in Moradabad, mobile app development company in Ghaziabad, mobile app development company Delhi NCR, local mobile app development company, Android app development company near me, iOS app development company near me, custom mobile app development near me, affordable mobile app development near me, app development agency near me, hire mobile app developers near me, mobile app development services Uttar Pradesh, Zentrix Infotech mobile app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-near-me",
  },

  openGraph: {
    title: "Mobile App Development Company Near Me | Zentrix Infotech",
    description:
      "Searching for a mobile app development company near you? Zentrix Infotech has offices in Moradabad and Ghaziabad and builds secure Android and iOS apps. Call today.",
    url: "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-near-me",
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
    title: "Mobile App Development Company Near Me | Zentrix Infotech",
    description:
      "Searching for a mobile app development company near you? Zentrix Infotech has offices in Moradabad and Ghaziabad and builds secure Android and iOS apps. Call today.",
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