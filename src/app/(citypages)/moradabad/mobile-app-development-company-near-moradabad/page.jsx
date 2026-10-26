import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Company Near Moradabad | Zentrix Infotech",
  description:
    "Need a mobile app development company near Moradabad? Zentrix Infotech serves Moradabad, Rampur, Sambhal, Bijnor, Amroha and more. Call +91 72488 00839.",
  keywords:
    "mobile app development company near moradabad, app development company near moradabad, mobile app developers near moradabad, mobile app development rampur, mobile app development sambhal, mobile app development amroha, mobile app development bijnor, mobile app development bareilly, mobile app development meerut, mobile app development company moradabad, android app development near moradabad, ios app development near moradabad, app development services western uttar pradesh, custom app development moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-near-moradabad",
  },

  openGraph: {
    title: "Mobile App Development Company Near Moradabad | Zentrix Infotech",
    description:
      "Need a mobile app development company near Moradabad? Zentrix Infotech serves Moradabad, Rampur, Sambhal, Bijnor, Amroha and more. Call +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-near-moradabad",
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
    title: "Mobile App Development Company Near Moradabad | Zentrix Infotech",
    description:
      "Need a mobile app development company near Moradabad? Zentrix Infotech serves Moradabad, Rampur, Sambhal, Bijnor, Amroha and more. Call +91 72488 00839.",
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