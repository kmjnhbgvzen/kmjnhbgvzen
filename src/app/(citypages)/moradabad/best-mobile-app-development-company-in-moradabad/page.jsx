import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Best Mobile App Development Company in Moradabad | Zentrix Infotech",
  description:
    "Looking for the best mobile app development company in Moradabad? See what to look for and why businesses choose Zentrix Infotech for secure Android and iOS apps.",
  keywords:
    "best mobile app development company in Moradabad, top mobile app development company Moradabad, best app development company in Moradabad, best mobile app developers in Moradabad, trusted app development company Moradabad, best Android app development company Moradabad, best iOS app development company Moradabad, affordable mobile app development Moradabad, best app development company Uttar Pradesh, mobile app development company in Moradabad reviews, how to choose app development company Moradabad, best custom app development Moradabad, Moradabad app development company near me, mobile app development for startups Moradabad, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-mobile-app-development-company-in-moradabad",
  },

  openGraph: {
    title:
      "Best Mobile App Development Company in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best mobile app development company in Moradabad? See what to look for and why businesses choose Zentrix Infotech for secure Android and iOS apps.",
    url:
      "https://www.zentrixinfotech.com/moradabad/best-mobile-app-development-company-in-moradabad",
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
      "Best Mobile App Development Company in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best mobile app development company in Moradabad? See what to look for and why businesses choose Zentrix Infotech for secure Android and iOS apps.",
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