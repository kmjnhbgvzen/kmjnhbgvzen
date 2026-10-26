import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Hire Mobile App Developer Moradabad | Zentrix Infotech",
  description:
    "Want to hire a mobile app developer in Moradabad? Zentrix Infotech offers expert Android, iOS and Flutter developers with flexible hiring. Call +91 72488 00839.",
  keywords:
    "hire mobile app developer moradabad, hire app developer moradabad, mobile app developers in moradabad, hire android developer moradabad, hire ios developer moradabad, hire flutter developer moradabad, hire react native developer moradabad, dedicated app developer moradabad, freelance app developer moradabad, app developer near me moradabad, hire mobile app developer india, cost to hire app developer moradabad, mobile app development company moradabad, hire app development team moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hire-mobile-app-developer-moradabad",
  },

  openGraph: {
    title: "Hire Mobile App Developer Moradabad | Zentrix Infotech",
    description:
      "Want to hire a mobile app developer in Moradabad? Zentrix Infotech offers expert Android, iOS and Flutter developers with flexible hiring. Call +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/hire-mobile-app-developer-moradabad",
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
    title: "Hire Mobile App Developer Moradabad | Zentrix Infotech",
    description:
      "Want to hire a mobile app developer in Moradabad? Zentrix Infotech offers expert Android, iOS and Flutter developers with flexible hiring. Call +91 72488 00839.",
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