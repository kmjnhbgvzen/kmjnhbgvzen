import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Company Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a mobile app development company in Moradabad building secure Android and iOS apps for local businesses, exporters, startups and institutions.",
  keywords:
    "mobile app development company Moradabad, mobile app development company in Moradabad, app development company Moradabad, mobile app developers Moradabad, Android app development Moradabad, iOS app development Moradabad, best mobile app development company in Moradabad, top app development company Moradabad, affordable app development Moradabad, mobile app development services Moradabad, app development company Moradabad Uttar Pradesh, mobile app development for startups Moradabad, e-commerce app development Moradabad, cross platform app development Moradabad, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-moradabad",
  },

  openGraph: {
    title: "Mobile App Development Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a mobile app development company in Moradabad building secure Android and iOS apps for local businesses, exporters, startups and institutions.",
    url:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-moradabad",
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
    title: "Mobile App Development Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a mobile app development company in Moradabad building secure Android and iOS apps for local businesses, exporters, startups and institutions.",
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