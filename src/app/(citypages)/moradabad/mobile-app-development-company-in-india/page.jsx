import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Company in India | Zentrix Infotech",
  description:
    "Zentrix Infotech is a mobile app development company in India building secure, scalable Android and iOS apps for startups and businesses. Get a free consultation.",
  keywords:
    "mobile app development company in India, mobile app development India, best mobile app development company in India, top mobile app developers in India, Android app development company India, iOS app development company India, custom mobile app development India, affordable mobile app development India, mobile app development services India, hire mobile app developers India, mobile app development for startups India, cross platform app development India, mobile app development company Moradabad, mobile app development company Ghaziabad, Zentrix Infotech mobile app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-in-india",
  },

  openGraph: {
    title: "Mobile App Development Company in India | Zentrix Infotech",
    description:
      "Zentrix Infotech is a mobile app development company in India building secure, scalable Android and iOS apps for startups and businesses. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-in-india",
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
    title: "Mobile App Development Company in India | Zentrix Infotech",
    description:
      "Zentrix Infotech is a mobile app development company in India building secure, scalable Android and iOS apps for startups and businesses. Get a free consultation.",
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
