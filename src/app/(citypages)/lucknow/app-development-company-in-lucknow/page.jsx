import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "App Development Company in Lucknow | Zentrix Infotech",

  description:
    "Need an app development company in Lucknow? Zentrix Infotech builds Android, iOS and cross-platform apps for startups and businesses. Get a free quote.",

  keywords:
    "App Development Company in Lucknow, mobile app development company in Lucknow, Android app development company in Lucknow, iOS app development company in Lucknow, custom mobile app development in Lucknow, mobile app developers in Lucknow, app development services in Lucknow, cross-platform app development in Lucknow, affordable app development in Lucknow, ecommerce app development in Lucknow, app development for startups in Lucknow, business app development in Lucknow, hire app developers in Lucknow, native and cross-platform apps, Android and iOS development, app UI/UX design, MVP app development, app maintenance and support, app store launch, app backend development, how much does app development cost in Lucknow, how long does it take to build a mobile app, how to choose an app development company",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/app-development-company-in-lucknow",
  },

  openGraph: {
    title: "App Development Company in Lucknow | Zentrix Infotech",
    description:
      "Need an app development company in Lucknow? Zentrix Infotech builds Android, iOS and cross-platform apps for startups and businesses. Get a free quote.",
    url: "https://www.zentrixinfotech.com/lucknow/app-development-company-in-lucknow",
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
    title: "App Development Company in Lucknow | Zentrix Infotech",
    description:
      "Need an app development company in Lucknow? Zentrix Infotech builds Android, iOS and cross-platform apps for startups and businesses. Get a free quote.",
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