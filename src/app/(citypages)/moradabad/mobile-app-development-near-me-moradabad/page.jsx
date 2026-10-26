import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Near Me Moradabad | Zentrix Infotech",
  description:
    "Looking for mobile app development near me in Moradabad? Zentrix Infotech builds Android, iOS and cross-platform apps with local support. Call +91 72488 00839.",
  keywords:
    "mobile app development near me moradabad, mobile app development company moradabad, app development company near me, android app development moradabad, ios app development moradabad, mobile app developers in moradabad, custom mobile app development moradabad, cross platform app development moradabad, flutter app development moradabad, react native app development moradabad, affordable app development moradabad, app development services moradabad, hire app developer moradabad, ecommerce app development moradabad, startup app development moradabad, mobile app development cost moradabad, best app development company in moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-near-me-moradabad",
  },

  openGraph: {
    title: "Mobile App Development Near Me Moradabad | Zentrix Infotech",
    description:
      "Looking for mobile app development near me in Moradabad? Zentrix Infotech builds Android, iOS and cross-platform apps with local support. Call +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/mobile-app-development-near-me-moradabad",
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
    title: "Mobile App Development Near Me Moradabad | Zentrix Infotech",
    description:
      "Looking for mobile app development near me in Moradabad? Zentrix Infotech builds Android, iOS and cross-platform apps with local support. Call +91 72488 00839.",
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