import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Mobile App Development Company in Lucknow | Zentrix Infotech",

  description:
    "Looking for a mobile app development company in Lucknow? Zentrix Infotech builds Android and iOS apps for businesses. 250+ projects, 4.7/5 rating. Get a free quote.",

  keywords:
    "mobile app development company in lucknow, mobile app development lucknow, android app development company lucknow, ios app development company lucknow, custom mobile app development lucknow, cross platform app development lucknow, app developers in lucknow, mobile app development services lucknow, app development for startups lucknow, business mobile app lucknow, hire mobile app developers lucknow, mobile app company uttar pradesh, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/mobile-app-development-company-in-lucknow",
  },

  openGraph: {
    title:
      "Mobile App Development Company in Lucknow | Zentrix Infotech",
    description:
      "Looking for a mobile app development company in Lucknow? Zentrix Infotech builds Android and iOS apps for businesses. 250+ projects, 4.7/5 rating. Get a free quote.",
    url:
      "https://www.zentrixinfotech.com/lucknow/mobile-app-development-company-in-lucknow",
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
    title:
      "Mobile App Development Company in Lucknow | Zentrix Infotech",
    description:
      "Looking for a mobile app development company in Lucknow? Zentrix Infotech builds Android and iOS apps for businesses. 250+ projects, 4.7/5 rating. Get a free quote.",
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