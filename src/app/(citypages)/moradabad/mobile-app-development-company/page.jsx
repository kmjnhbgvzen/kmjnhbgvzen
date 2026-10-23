import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Company | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted mobile app development company building Android, iOS and cross-platform apps for startups and enterprises. Get a free quote today.",
  keywords:
    "mobile app development company, mobile app development services, android app development company, iOS app development company, cross platform app development, custom mobile app development, mobile app development company in India, mobile app development company in Moradabad, affordable mobile app development services, mobile app developers for startups, hire mobile app developers, mobile app design and development, Flutter app development company, React Native app development company, app development company near me",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company",
  },

  openGraph: {
    title: "Mobile App Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted mobile app development company building Android, iOS and cross-platform apps for startups and enterprises. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company",
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
    title: "Mobile App Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted mobile app development company building Android, iOS and cross-platform apps for startups and enterprises. Get a free quote today.",
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