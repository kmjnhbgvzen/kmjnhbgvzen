import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Cross Platform App Development Company | Zentrix Infotech",
  description:
    "Zentrix Infotech is a cross platform app development company building fast, reliable Android and iOS apps from one codebase using Flutter and React Native.",
  keywords:
    "cross platform app development company, cross platform mobile app development, cross platform app development services, cross platform app development India, Flutter app development company, React Native app development company, hybrid app development company, Android and iOS app development company, single codebase mobile app development, affordable cross platform app development, cross platform app developers for hire, cross platform app development for startups, custom cross platform mobile apps, cross platform app development cost, Zentrix Infotech mobile app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/cross-platform-app-development-company",
  },

  openGraph: {
    title: "Cross Platform App Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a cross platform app development company building fast, reliable Android and iOS apps from one codebase using Flutter and React Native.",
    url: "https://www.zentrixinfotech.com/moradabad/cross-platform-app-development-company",
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
    title: "Cross Platform App Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a cross platform app development company building fast, reliable Android and iOS apps from one codebase using Flutter and React Native.",
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